import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-violet-700">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-semibold text-white">
          Welcome to{' '}
          <a className="text-violet-100 font-extralight" href="https://nextjs.org">
            remoteu.org
          </a>
        </h1>
        <hr />
        <h2 className="font-light text-white">
          A application from dev to dev.
        </h2>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t bg-white">
        <span>Made with ❤️</span>
      </footer>
    </div>
  )
}

export default Home
