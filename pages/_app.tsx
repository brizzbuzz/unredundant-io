import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const debugScreens = isProd() ? 'bg-gray-700' : 'debug-screens bg-gray-700';
  return (
    <div className={debugScreens}>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/unredundant-blank.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/unredundant-blank.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

const isProd: () => boolean = () => process.env.NODE_ENV === 'production';

export default MyApp;
