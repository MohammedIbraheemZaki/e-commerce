import Image from 'next/image'
import Link from 'next/link'
// get paths




const Product = ({product}) => {
  return (
    <div className="card mb-4">
      {/* <img src={product.image} className="card-img-top" alt="Picture of the author"/> */}
      <div className="product__image">
        <Image src={product.image} width={120} height={150} alt='product'  />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.category}</p>
        <p className="card-text">{product.price}</p>
        <Link href={'/products/'+product.id}>
          <a className="btn btn-primary">More details</a>
        </Link>
      </div>
    </div>
  )
}

export default Product
