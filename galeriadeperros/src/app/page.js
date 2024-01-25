import Image from "next/image";
import styles from "./page.module.css";
import Fotoperro from "./components/fotoperro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Fotoperro/>
      <Fotoperro/>
      <Fotoperro/>
      <Fotoperro/>
    </main>
  );
}
