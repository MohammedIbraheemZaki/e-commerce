import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Main from '../Layouts/Main'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" crossOrigin="anonymous"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" crossOrigin="anonymous" /> */}
        <link rel="icon" href="/favicon.ico" />
        <title>E-commerce</title>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' crossOrigin='anonymous' />
    </>
  )
}

export default MyApp
