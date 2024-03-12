import profilePic from "../../assets/profile-pic.png";
import styles from "./Profile.module.scss";

/**
 * Profile section for the website. Displayed at the top
 */
export default function Profile() {
  return (
    <section className="d-flex flex-column align-items-center">
      <img src={profilePic} className={styles["Profile-Logo"]}></img>
      <section className={`text-center`}>
        <h1 className={`${styles["Profile-Title"]} pt-2`}>Oscar Zhang</h1>
        <h2 className={`${styles["Profile-Subtitle"]}`}>Software Engineer</h2>
        <p className={`${styles["Profile-Body"]} px-5`}>
          I build value through creating scalable and easy to read code.
        </p>
      </section>
    </section>
  );
}

// Logo
// Software Engineer
// I build value through creating scalable and easy to read software.
