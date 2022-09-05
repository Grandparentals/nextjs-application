import Head from "next/head"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"

export default function Layout({ children, page }: { children: React.ReactNode, page: string }) {
  const siteTitle = "Remoteu.org"

  return (
   <div className="bg-gray-50">
    <Head>
      <meta
        name="description"
        content="Torneio o app com tudo sobre beach tennis"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
      <Navbar page={page} />
    <main>{children}</main>
    <Footer></Footer>
   </div>
  )
}
