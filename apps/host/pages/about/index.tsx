import type { NextPageWithLayout } from '../_app';
import Layout from '../../src/layout/Layout';

const Page: NextPageWithLayout = () => {
  return <section>about</section>;
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
