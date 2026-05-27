import Head from "next/head";
import portfolio from '@/data/newPortfolio.json';
import ListChrono from "@/components/lists/listChrono/listChrono";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Shikhar Yadav</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>
            <strong>Portfolio</strong>
          </h1>

          <ListChrono list={portfolio} />
        </div>
      </div>
    </>
  )
}