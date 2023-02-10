import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Next js</title>
        <meta name="description" content="A simple template with standard linter to avoid a lot of configuration and start to coding easily" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>hola</h1>
      </main>
    </>
  )
}
