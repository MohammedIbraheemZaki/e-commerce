import React from 'react'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = await res.json()

  return{
    props: {categories: data}
  }
}


const Categories = ({categories}) => {
  // console.log(categories);
  return (
    <div className='container'>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-12" key={index} >
            <div className="alert alert-info" role="alert">
              <Link href={'/products/category/'+category} >
                <a>{category}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
