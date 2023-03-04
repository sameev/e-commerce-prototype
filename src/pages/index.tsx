import ProductList from '@components/components/ProductList';
import Head from 'next/head';
import { IProduct } from '../components/Product';
import Contact from '../components/Contact';
import { products } from '../lib/products';
import { GetStaticProps } from 'next';
import Script from 'next/script';
import TopMessage from '@components/components/TopMessage';

interface IProductListProps {
  products: IProduct[];
}
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <title>Onyx Coffee Shopping Page</title>
        <link rel='preconnect' href='<https://app.snipcart.com>' />
        <link rel='preconnect' href='<https://cdn.snipcart.com>' />
      </Head>
      <main className='main'>
        <TopMessage />
        <ProductList products={products} />
        <Contact />
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
      <div hidden id="snipcart" data-api-key="YTM5NDIxYzUtNDQwOC00NzBlLThkY2ItZDA3NDE5ZmIyYjg5NjM4MTMzNzkxMzM2ODE1NTg4"></div>
    </>
  );
}
