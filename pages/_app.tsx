import Layout from '@components/core/Layout';
import GlobalStyles from '@styles/GlobalStyles';

//######################### COMPONENT TYPES ################################################
import type { AppProps } from 'next/app';

//######################### COMPONENT STYLES ###############################################

//######################### COMPONENT ######################################################

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
