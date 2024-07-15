import HeroChar from "../assets/img/hero/hero-char.png"

const Hero = () => {
    return (
        <section className={`pt-[100px] h-[100vh] bg-[url("./pages/Home/assets/img/hero/hero-bg.jpg")] bg-cover bg-center flex justify-center mb-14`} >
            <div className="flex justify-between container h-full">
                <div className="flex flex-col justify-center items-center w-[65%] pl-[110px]">
                    <p className="text-white w-full font-bold text-[20px]">YOU ARE IN</p>
                    <h1 className="w-full text-[#153448] font-extrabold text-[44px]">The best clothing ecommerce in Indonesia</h1>
                    <p className="w-full font-semibold text-[14px] text-white">Allowing you to explore a diverse selection of trendy clothing from curated stores
                        while also providing the opportunity to create your own storefront and sell your unique creations. Join us and embark on a journey where style meets opportunity!</p>
                    <div className="flex w-full gap-5 mt-5">
                        <button className="text-[20px] font-semibold h-[56px] w-[181px] rounded-[5px] bg-[#4D869C] text-white">BUY NOW</button>
                        <button className="text-[20px] font-semibold h-[56px] w-[181px] rounded-[5px] bg-white text-[#4D869C]">SELL NOW</button>
                    </div>
                </div>
                <div className="w-[35%] h-full flex items-center justify-center">
                    <img src={HeroChar} alt="hero" />
                </div>
            </div>
        </section >
    )
}

export default Hero