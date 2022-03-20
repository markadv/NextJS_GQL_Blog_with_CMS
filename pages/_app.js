import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
