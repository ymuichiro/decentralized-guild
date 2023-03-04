import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  meta?: React.ReactNode;
}

export default function PageHead(props: Pick<Props, 'title' | 'description' | 'meta'>): JSX.Element {
  const title = props.title ? `${props.title} | Decentralized Guild` : 'Decentralized Guild';
  const description = props.description ? props.description : 'Decentralized Guild';
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      {props.meta}
    </Head>
  );
}
