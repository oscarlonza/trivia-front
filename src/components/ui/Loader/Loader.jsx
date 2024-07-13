import styles from "./Loader.module.css";

const Loader = ({ size = "24px" }) => {
  return (
    <span
      className={styles.loader}
      style={{
        width: size,
        height: size,
      }}
    ></span>
  );
};

export default Loader;
