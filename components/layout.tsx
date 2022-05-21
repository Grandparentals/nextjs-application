import Head from "next/head"

export default function Layout({ children, page }: { children: React.ReactNode, page: string }) {
  const siteTitle = "Remoteu.org"

  return (
   <div className="grid max-w-7xl mx-auto h-screen">
    <Head>
      <meta
          name="description"
          content="Torneio o app com tudo sobre beach tennis"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <main className='py-12'>{children}</main> 

      <footer className="flex h-24 w-full items-center justify-center border-t bg-white">
        <span>Made with ❤️</span>
      </footer>
   </div>
  )
}
