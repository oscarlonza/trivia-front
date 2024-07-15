import styles from "./home.module.css";
import QuestionCard from "../../components/QuestionCard";
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.mainContent}>
        <QuestionCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
