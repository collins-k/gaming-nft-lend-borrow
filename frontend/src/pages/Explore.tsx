import Head from 'next/head';
import React from 'react';
import ExploreArtsMain from '../new-components/ExploreArts/ExploreArtsMain';


export default function ExploreArts() {

  return (
    <>
      <Head>
        <title>Web3 Explore</title>
        <meta name="description" content="Explore web3 jobs, events, hackathons, articles, tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ExploreArtsMain />
    </>
  )
}
