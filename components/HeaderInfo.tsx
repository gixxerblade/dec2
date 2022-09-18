import Head from 'next/head'

interface HeaderInfoProps {
title?: string
content?: string,
}

export const HeaderInfo = (props: HeaderInfoProps) => {
  return (
    <Head>
    <title>Down East Cyclists</title>
    <meta
      name={props.title || 'Home'}
      content={props.content
        || 'A Recreational Cycling Club in Eastern North Carolina'} />
    <link rel="icon" href="/favicon-32x32.png" />
  </Head>
  );
}
