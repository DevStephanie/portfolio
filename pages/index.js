import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
       Welcome to <i>The Coding Life of Stephanie ...</i>
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Mobile Development: Project &rarr;</h3>
            <p>1</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Project 2 &rarr;</h3>
            <p>project!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3> Project 3 &rarr;</h3>
            <p>Project details go here </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Project 4 &rarr;</h3>
            <p>
              Project details here
            </p>
          </a>
          <a href="" className={styles.card}>
            <h3>Mobile Development: Project &rarr;</h3>
            <p>1</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Project 2 &rarr;</h3>
            <p>project!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3> Project 3 &rarr;</h3>
            <p>Project details go here </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Project 4 &rarr;</h3>
            <p>
              Project details here
            </p>
          </a>
          <a href="" className={styles.card}>
            <h3>Mobile Development: Project &rarr;</h3>
            <p>1</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Project 2 &rarr;</h3>
            <p>project!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3> Project 3 &rarr;</h3>
            <p>Project details go here </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Project 4 &rarr;</h3>
            <p>
              Project details here
            </p>
          </a>
        </div>
      </main>

      <footer>
        <p>Designed and Built by DevStephanie  2025</p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background:rgb(239, 239, 239);
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
