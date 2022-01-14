import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
const Main = ({children}) => {
  return (
    <>
      <NavBar/>
      {children} 
      <Footer/>
    </>
  )
}

export default Main
