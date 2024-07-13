import { useState, useEffect, useCallback, useMemo } from "react";
import { jwtDecode } from "jwt-decode";

import { parseDifficultyToText } from "@/utils/questions";

import Loader from "../ui/Loader";
import styles from "./QuestionCard.module.css";

const NO_QUESTIONS_MESSAGE =
  "No hay preguntas para mostrar. \n\r No hay preguntas en la base de datos o ya las contestaste todas.";

const QuestionCard = () => {
  const [question, setQuestion] = useState({});
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const userToken = localStorage.getItem("user");
  const userInfo = userToken ? jwtDecode(userToken).user : null;

  const getQuestion = useCallback(async () => {
    setIsLoading(true);
    setQuestion({});
    setError(null);
    setResult(null);
    try {
      const res = await fetch("http://localhost:9000/api/question/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: userToken,
        },
      });
      const response = await res.json();
      console.log(response);
      if (response.process) {
        setQuestion(response.data);
      } else {
        setError("Forbidden 401");
      }
    } catch (e) {
      console.error("Error fetching question", e);
      setError(e);
    }
    setIsLoading(false);
  }, [userToken]);

  const checkAnswer = useCallback(
    async (answer) => {
      console.log(answer);
      try {
        const res = await fetch(
          `http://localhost:9000/api/question/result/${question._id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: userToken,
            },
            body: JSON.stringify({
              user_id: userInfo?._id,
              answer: answer,
            }),
          }
        );
        const response = await res.json();
        if (response.process) {
          setResult(response.data.result);
        } else {
          throw new Error("Error fetching answer", response);
        }
      } catch (e) {
        console.error("Error when answering the question", e);
      }
    },
    [question?._id, userInfo?._id, userToken]
  );

  useEffect(() => {
    if (userToken) {
      setIsLoading(true);
      getQuestion();
    }
  }, [userToken, getQuestion]);

  const content = useMemo(() => {
    if (isLoading) return <Loader size="48px" />;

    if (error)
      return (
        <p className={styles.errorMessage}>{`Error: ${JSON.stringify(
          error
        )}`}</p>
      );

    if (Object.keys(question).length === 0) {
      return (
        <h2 className={styles.noQuestionsMessage}>{NO_QUESTIONS_MESSAGE}</h2>
      );
    }

    const { question: label, options = [], difficulty } = question;

    return (
      <>
        <div className={styles.difficultyContainer}>
          <span className={styles.difficulty}>
            Dificultad: {parseDifficultyToText(difficulty)}
          </span>
        </div>
        <p id="id_question_label" className={styles.questionLabel}>
          {label}
        </p>
        {options.map((option, idx) => (
          <input
            key={`${option.toLowerCase().trim().replace(/\s/g, "")}_${idx}`}
            type="button"
            className={styles.answerBtn}
            id={`id_answer_${idx}`}
            value={option}
            title={option}
            onClick={() => checkAnswer(option)}
            disabled={isLoading || result !== null}
          />
        ))}
        {result !== null && (
          <p
            className={`${styles.questionResultLabel} ${
              result ? styles.questionCorrect : styles.questionIncorrect
            }`}
          >
            {`Respuesta ${result ? "" : "in"}correcta`}
          </p>
        )}
        <button
          className={styles.nextQuestionBtn}
          id="id_new_question"
          onClick={getQuestion}
        >
          Siguiente Pregunta
        </button>
      </>
    );
  }, [checkAnswer, error, getQuestion, isLoading, question, result]);

  if (!userToken) return <div>Token is missing</div>;

  return (
    <section className={styles.questionCard}>
      <article className={styles.questionCardContent}>{content}</article>
    </section>
  );
};

export default QuestionCard;
