// import App from 'next/app'
import Head from "next/head";
import Link from "next/link";
import Navigation from "components/navigation/index.js";
import "../style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Comparency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
