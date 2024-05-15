import { CustomButton } from '@bottari/ui';
import React from 'react';
import ReactWebpackApp from '@bottari/reactWebpack/remote';

import type { NextPageWithLayout } from './_app';
import Layout from '../src/layout/Layout';

const Page: NextPageWithLayout = () => {
  const [data, setData] = React.useState('');

  const getHello = async () => {
    const response = await fetch('/api/hello', {
      method: 'GET',
    });

    const data = await response.json();

    setData(JSON.stringify(data, null, 1));
  };

  return (
    <>
      <section>
        <CustomButton
          onClick={() => {
            if (data) {
              setData('');
            } else {
              getHello();
            }
          }}
        >
          CustomButton from @bottari/ui
        </CustomButton>
        <i> {data}</i>
        <h2>React remote - Button</h2>
        <ReactWebpackApp />
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
