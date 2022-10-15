import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilsStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "../lib/post";
import Head from "next/head";

// SSG
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>私はいまReactを勉強しています。</p>
      </section>

      <section>
        <h2>📝Engineer blog</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilsStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
