import Layout from '@components/core/Layout';
import GlobalStyles from '@styles/GlobalStyles';
import StateContext from '@context/StateContext';

//######################### COMPONENT TYPES ################################################
import type { AppProps } from 'next/app';

//######################### COMPONENT STYLES ###############################################

//######################### COMPONENT ######################################################

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
