import Head from "next/head"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"

export default function Layout({ children, page }: { children: React.ReactNode, page: string }) {
  const siteTitle = "GrandpaRentails"

  return (
   <div className="bg-gray-50">
      <Head>
        <link rel="icon" href="/icons/60.png" type="image/png"></link>
        <meta
          name="description"
          content="Discover people potential, Dont allow age be a waste."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="/icons/29.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/40.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/1024.png"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <Navbar page={page} />
    <main>{children}</main>
    <Footer></Footer>
   </div>
  )
}
