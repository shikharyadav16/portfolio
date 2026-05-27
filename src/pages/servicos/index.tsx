import ListAccordion from "@/components/lists/listAccordion/listAccordion";
import Head from "next/head";

export default function servicos() {
  return (
    <>
      <Head>
        <title>Services | Shikhar Yadav</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>
            <span>I build</span>
            <strong>Scalable Systems</strong>
          </h1>

          <ListAccordion list={[
            {
              title: 'Backend Architecture',
              content: 'Design and development of scalable backend systems using Node.js, Express, and MongoDB, with a focus on clean architecture, optimized APIs, and long-term maintainability.',
              thumb: '',
              thumbAlt: ''
            },
            {
              title: 'Live Systems & DevOps',
              content: 'Development of real-time applications using Socket.IO, including messaging systems, live updates, and secure communication, along with production-ready deployment, authentication, and scaling strategies.',
              thumb: '',
              thumbAlt: ''
            },
            {
              title: 'Development & Integrations',
              content: 'End-to-end product development with modern frontend and backend technologies, including integration of AI systems (LLMs, RAG), payment gateways, and cloud deployment platforms.',
              thumb: '',
              thumbAlt: ''
            }
          ]} />
        </div>
      </div>
    </>
  )
}