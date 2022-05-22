import Head from "next/head"
import Navbar from "./shared/Navbar"

export default function Layout({ children, page }: { children: React.ReactNode, page: string }) {
  const siteTitle = "Remoteu.org"

  return (
   <div className="bg-violet-600">
    <Head>
      <meta
        name="description"
        content="Torneio o app com tudo sobre beach tennis"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
      <Navbar page={page} />
    <div className="grid max-w-7xl mx-auto h-screen px-4 py-5 sm:px-6 sm:py-4 lg:px-8 font-mono">
      <main className='py-12'>{children}</main>
    </div>
   </div>
  )
}
