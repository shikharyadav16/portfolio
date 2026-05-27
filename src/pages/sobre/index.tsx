import Head from 'next/head';
import Link from 'next/link';

import CardTimeline from '@/components/cards/cardTimeline/cardTimeline';
import ContentImage from '@/components/content/contentImage/contentImage';
import ListTimeline from '@/components/lists/listTimeline/listTimeline';
import experiences from '@/data/experiences.json';
import ListTags from '@/components/lists/listTags/listTags';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>About me | Shikhar Yadav</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>About me</h1>
          <p>Hey! My name is Shikhar Yadav, born in 2005 in Kanpur, Uttar Pradesh. I&apos;m a backend developer. Currently developing <Link href="https://github.com/shikharyadav16/inchat" target="_blank">InChat</Link> and I&apos;m a sketch artist in my spare time.</p>
        </div>

        <ContentImage src="/img/office_work.avif" width={1024} height={560} alt="Shikhar Yadav coding under extreme pressure and flashing lights at Code In The Dark 2023">
          {/* <figcaption>
            <p>Participating in <Link href="https://codeinthedark.com.br/" target="_blank">Code in the Dark 2023</Link></p>
            <p>Photo by <Link href="https://instagram.com/leandro_godoi" target="_blank">@leandro_godoi</Link></p>
          </figcaption> */}
        </ContentImage>

        <div className="content">
          <ListTimeline title="Journey">
            {experiences.map((experience, index) => (
              <li key={index}>
                <CardTimeline title={experience.title} year={experience.year} description={experience.description} />
              </li>
            ))}
          </ListTimeline>

          <ListTags title="Skills" list={[
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Socket.IO',
            'React.js',
            "Next.js",
            'REST APIs',
            'WebSockets',
            'Git & GitHub',
            'System Design',
            'LangChain',
          ]} />
        </div>
      </div>
    </>
  )
}
