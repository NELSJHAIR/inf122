import styles from "./page.module.css";
import Perfil from "./components/perfil";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Perfil/>
        <h1>Hola</h1>
      </div>
    </main>
  );
}
