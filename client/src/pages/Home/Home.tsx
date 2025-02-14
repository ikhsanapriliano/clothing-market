import { useSelector } from "react-redux"
import Banner from "./components/Banner"
import Category from "./components/Category"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import OurProduct from "./components/OurProduct"
import OurStore from "./components/OurStore"
import Utility from "./components/Utility"
import { RootState } from "../../store"

const Home = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)
  console.log(isLoggedIn)

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