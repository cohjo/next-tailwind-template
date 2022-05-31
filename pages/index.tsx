import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <h1 className="uppercase text-5xl italic font-bold">Title</h1>
      </main>
    </div>
  )
}

export default Home
