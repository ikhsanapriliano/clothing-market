import Logo from "../assets/img/header/logo.jpg"

const Header = () => {
  return (
    <header className="z-50 h-[100px] w-full drop-shadow-lg bg-white flex justify-center fixed top-0">
      <div className="flex justify-between items-center gap-4 h-full container">
        <img src={Logo} alt="logo" />
        <div className="flex gap-4 items-center relative overflow-hidden">
          <label className="absolute left-4 font-medium text-[#6A6A6A] pr-3 border-r-2 border-[#6A6A6A]">Products</label>
          <button className="absolute right-0">
            <i className="fas fa-search text-[#5E5E5E] p-5"></i>
          </button>
          <input placeholder="white t-shirt" className="border-2 pl-[105px] border-gray-400 h-[45px] w-[607px] rounded-md" type="text" />
        </div>
        <button>
          <i className="fas fa-headset text-[24px] text-[#5E5E5E]"></i>
        </button>
        <div className="flex gap-6 pl-6 border-l-2">
          <button className="rounded-lg w-[135px] h-[45px] text-[#4D869C] border-2 border-[#4D869C]">Login</button>
          <button className="bg-[#4D869C] text-white h-[45px] w-[135px] rounded-lg">Register</button>
        </div>
      </div>
    </header>
  )
}

export default Header