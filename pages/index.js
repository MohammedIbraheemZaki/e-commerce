import Head from 'next/head'
import Product from '../components/Product'

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return{
    props: {products: data}
  }
}


export default function Home({products}) {
  // console.log(products);
  return (
    <div className='container'>
      <Head>
        {/* <title>Create Next App</title> */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <div className="col-12">
          <h1>hello from next</h1>
        </div>

      {products.map((product, index) => (
        <div className="col-3" key={index} >
          <Product product={product} />
        </div>
      ))}
      </div>
    </div>
  )
}
