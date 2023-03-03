import ProductList from '@components/components/ProductList';
import Head from 'next/head';
import { IProduct } from '../components/Product';
import Contact from '../components/Contact.jsx'; 
import { products } from '../lib/products'
import { GetStaticProps } from 'next';

interface IProductListProps {
  products: IProduct[];
}
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products
    }
  }
}

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <title>Onyx Coffee Shopping Page</title>
        <link rel='preconnect' href='<https://app.snipcart.com>' />
        <link rel='preconnect' href='<https://cdn.snipcart.com>' />
      </Head>
      <main className='main'>
        <ProductList products={products} />
        <Contact />
      </main>
    </>
  );
}
