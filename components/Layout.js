import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Kuma Code";
export const siteTitle = "Next.js Blog.";
function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          className={utilsStyles.borderCircle}
          src="/images/profile.png"
          height={100}
          width={100}
        />
        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>

      {!home && (
        <div>
          <Link href="/"> ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
