import Banner from "./components/Banner"
import Category from "./components/Category"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import OurProduct from "./components/OurProduct"
import OurStore from "./components/OurStore"
import Utility from "./components/Utility"


const Home = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <Category />
      <Utility />
      <OurProduct />
      <OurStore />
      <Contact />
    </main>
  )
}

export default Home