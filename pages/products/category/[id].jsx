import React from 'react'
import Product from '../../../components/Product'
// generate paths
export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const data = await res.json()

  const paths = data.map(path => {
    return{
      params: {id: path.toString()}
    }
  })

  return{
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://fakestoreapi.com/products/category/'+id)
  const data = await res.json()
  return {
    props: {products: data}
  }
}

const Category = ({products}) => {
  // console.log(products);

  return (
    <div className='container' >
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12" key={index} >
            <Product product={product} />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Category
