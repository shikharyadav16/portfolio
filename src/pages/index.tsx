import styles from './index.module.scss';

import Head from 'next/head';
import Image from 'next/image';

import CardPage from '@/components/cards/cardPage/cardPage';

export default function Index() {
  return (
    <>
      <Head>
        <title>Shikhar Yadav | Backend Developer</title>

        <meta
          name="description"
          content="Curious backend developer building scalable apps, exploring LLMs, solving problems creatively."
        />

        <meta
          name="keywords"
          content="Backend Developer, Node.js, JavaScript, MongoDB, LLM Developer"
        />

        <meta name="author" content="Shikhar Yadav" />

        {/* Open Graph */}
        <meta property="og:url" content="https://www.shikhar.space/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shikhar Yadav | Backend Developer" />

        <meta
          property="og:description"
          content="Curious backend developer building scalable apps, exploring LLMs, solving problems creatively."
        />

        <meta
          property="og:image"
          content="https://www.shikhar.space/img/cropped_circle_image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="twitter:url"
          content="https://www.shikhar.space/"
        />

        <meta
          name="twitter:title"
          content="Shikhar Yadav | Backend Developer"
        />

        <meta
          name="twitter:description"
          content="Curious backend developer building scalable apps, exploring AI, solving problems creatively."
        />

        <meta
          name="twitter:image"
          content="https://www.shikhar.space/img/cropped_circle_image.png"
        />

        <link rel="canonical" href="https://www.shikhar.space/" />

        <link rel="icon" href="/favicon.ico" />

        <meta
          name="google-site-verification"
          content="e8tKK8_XjvMNTjaAiBPkX3bu_03VuuQzNjcHFTMS8mI"
        />
      </Head>
      <div className="wrapper">
        <article className={styles.presentation}>
          <Image priority src="/img/cropped_circle_image.png" width="280" height="480" alt="" />
          <h1>Hi, I&apos;m <strong>Shikhar Yadav</strong></h1>
          <h2>Backend developer</h2>
        </article>

        <nav className={styles.menu}>
          <CardPage href="/sobre/" title="About me" icon="person-add-fill" />
          <CardPage href="/portfolio/" title="Portfolio" icon="folder-add-outline" />
          <CardPage href="/servicos/" title="Services" icon="brush-outline" />
          <CardPage href="/" title="Blog" icon="edit-2-outline" />
        </nav>
      </div>
    </>
  )
}
