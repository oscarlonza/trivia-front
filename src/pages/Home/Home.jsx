
import QuestionCard from "@/components/QuestionCard";

import styles from "./home.module.css";
import UserIconMenu from "../../components/UserIcon";

import Header from '../../components/Header'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.mainContent}>
        <QuestionCard />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Home;
