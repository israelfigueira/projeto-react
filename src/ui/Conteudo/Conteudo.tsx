import { Outlet } from "react-router-dom";

import styles from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Conteudo;
