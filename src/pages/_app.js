import Head from 'next/head'
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp


//79c515b7-33f9-4991-9252-c55d4d32f9d2