import Banner from "./components/Banner"
import Category from "./components/Category"
import Hero from "./components/Hero"
import OurProduct from "./components/OurProduct"
import Utility from "./components/Utility"


const Home = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <Category />
      <Utility />
      <OurProduct />
    </main>
  )
}

export default Home