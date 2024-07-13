import QuestionCard from "@/components/QuestionCard";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header>HEADER</header>
      <main className={styles.mainContent}>
        <QuestionCard />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Home;
