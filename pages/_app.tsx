import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { Col, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Layout } from '../components/Layout';
import { getCookie, setCookie } from 'cookies-next';
import { NotificationsProvider } from '@mantine/notifications';

interface MainProps extends AppProps {
  colorScheme: ColorScheme,
}

const queryClient = new QueryClient();

const App = (props: MainProps) => {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme,
              colors: {
                brand: ['#ffe6e6', '#feb3b4', '#feb3b4', '#fd4f4f', '#fc1c1d', '#e30304', '#b00203', '#7e0202', '#4c0101', '#190000'],
              }
            }}
          >
            <NotificationsProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;