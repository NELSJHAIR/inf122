import styles from "./page.module.css";
import Perfil from "./components/perfil";
import Tabs from "./components/Tabs";
import Facts from "./components/Facts";
import Buttons from "./components/Buttons";
import ProjectCard from "./components/ProjectCards";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Perfil />
        <Facts />
        <Buttons />
        <Tabs />
        <ProjectCard />
      </div> 
    </main>
  );
}
