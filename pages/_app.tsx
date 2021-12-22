import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // TODO Way to only have debug-screens if doing local dev?
    <div className="debug-screens bg-gray-700">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/unredundant-blank.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/unredundant-blank.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
