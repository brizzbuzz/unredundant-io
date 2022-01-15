import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { RecoilRoot } from 'recoil';

// Bind Loading Events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const debugScreens = isProd() ? 'bg-backdrop w-screen' : 'debug-screens bg-backdrop w-screen';
  return (
    <RecoilRoot>
      <div className={debugScreens}>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/unredundant-blank.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/unredundant-blank.svg" />
          <title>Unredundant</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

const isProd: () => boolean = () => process.env.NODE_ENV === 'production';

export default MyApp;
