import Link from 'next/link'
import { useRouter } from 'next/router'
const NavBar = () => {
  const router = useRouter()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Navbar</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link href="/" >
              <a  className="nav-link active" aria-current="page" >Home</a>
            </Link>
            <Link href='/about' >
              <a className="nav-link">About</a>
            </Link>
            <Link href='/cart' >
              <a className="nav-link">Cart</a>
            </Link>
            <Link href='/products/category' >
              <a className="nav-link">Categories</a>
            </Link>
            {/* <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled">Disabled</a> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
