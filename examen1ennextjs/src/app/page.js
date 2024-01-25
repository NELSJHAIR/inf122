import styles from "./page.module.css";
import Perfil from "./components/perfil";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Perfil />
      </div>
    </main>
  );
}
