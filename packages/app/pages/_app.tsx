import '@/assets/css/global.css';
import theme from '@/services/SystemTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@faunsu19000' />
        <meta name='twitter:image' content={`${process.env.NEXT_PUBLIC_APP_URL || ''}/twitter-card.png`} />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SessionProvider session={pageProps.session}>
          <SWRConfig value={{ revalidateOnFocus: false }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </SWRConfig>
        </SessionProvider>
      </LocalizationProvider>
    </>
  );
}
