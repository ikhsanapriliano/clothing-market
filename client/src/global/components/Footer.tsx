import { useSelector } from "react-redux"
import { RootState } from "../../store"

const Footer = () => {
  const { isLoading } = useSelector((state: RootState) => state.auth)

  return (
    <>
      {
        !isLoading &&
        <footer className="h-[50px] bg-[#010D14] text-white flex justify-center">
          <div className="container flex justify-center items-center h-full">
            <p>Copyright 2024</p>
          </div>
        </footer>
      }
    </>
  )
}

export default Footer