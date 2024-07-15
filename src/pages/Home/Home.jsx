import styles from "./home.module.css";
import QuestionCard from "../../components/QuestionCard";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from "react";
import isAuthenticated from "../../services/auth";
import { getRankingByNickname } from '../../services/ranking.service'

const Home = () => {

  const local = localStorage.getItem("user")
  let localScore = -1
  let currentUser = ''

  if (isAuthenticated()) {
    const tokenDecode = jwtDecode(local)
    currentUser = tokenDecode.user
    localScore = currentUser.score.score
  }

  const [score, setScore] = useState(localScore)
  const [ranking, setRanking] = useState(-1)

  useEffect(() => {
    getRankingByNickname(currentUser.nickname)
      .then((value) => {
        setRanking(value)
      })
  }, [])

  const onCheckAnswerCallback = (value) => {
    console.log(value)
    setScore(Math.max(0, score + value))
    getRankingByNickname(currentUser.nickname)
      .then((value) => {
        setRanking(value)
      })
  }

  return (
    <div className={styles.main}>
      <Header score={score} ranking={ranking} />
      <div className={styles.mainContent}>
        <QuestionCard checkAnswerCallback={onCheckAnswerCallback} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
