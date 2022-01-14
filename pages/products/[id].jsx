import Image from 'next/image'
import Head from 'next/head'
export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  const paths = data.map(path => {
    return{
      params: {id: path.id.toString()}
    }
  })
  return{
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://fakestoreapi.com/products/'+id)
  const data = await res.json()

  return {
    props: {product: data}
  }
}


const SingleProduct = ({product}) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <Image src={product.image} width={120} height={150} alt='product'  />
            <h1>{product.title}</h1>
            <h5 className="card-title"></h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.category}</p>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
