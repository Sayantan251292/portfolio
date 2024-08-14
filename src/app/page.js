// import Navbar from "./Components/NavBar/nav";
import LandingPage from "./Components/Home/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.theme}`}>
      <LandingPage/>
    </main>
  );
}
