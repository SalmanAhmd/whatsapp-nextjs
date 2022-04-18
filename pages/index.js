import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar />

    </div>
  )
}