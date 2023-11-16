import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import CommonLayout from '@/layouts/common';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/createEmotionCache';
import theme from '@/theme/theme';
export const clientSideEmotionCache = createEmotionCache();
function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props;


return (
  <>
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Moirai</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
              <CommonLayout>
                <Component {...pageProps} />
              </CommonLayout>
      </ThemeProvider>
    </CacheProvider>
  </>
);
}

export default MyApp;