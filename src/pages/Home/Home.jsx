import QuestionCard from "@/components/QuestionCard";

import styles from "./home.module.css";
import UserIconMenu from "../../components/UserIcon";

const Home = () => {
  return (
    <div className={styles.container}>
      <header>{true && <UserIconMenu />}</header>
      <main className={styles.mainContent}>
        <QuestionCard />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Home;
