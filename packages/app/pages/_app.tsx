import '@/assets/css/global.css';
import theme from '@/services/SystemTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
