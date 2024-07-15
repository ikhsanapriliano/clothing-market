import { useEffect, useState } from "react"
import Banner1 from "../assets/img/banner/banner-1.jpg"
import Banner2 from "../assets/img/banner/banner-2.jpg"
import Banner3 from "../assets/img/banner/banner-3.jpg"
import "../assets/css/banner.css"
import { wait } from "../../../utils/animation"

const Banner = () => {
    const bannerList = [Banner1, Banner2, Banner3]
    const [banner, setBanner] = useState<number>(0)
    const [swipe, setSwipe] = useState<string>("")

    useEffect(() => {
        setInterval(() => {
            setSwipe("right")
        }, 10000)
    }, [])

    useEffect(() => {
        wait(270).then(() => {
            if (swipe === "right" || swipe === "left") {
                if (swipe === "right") {
                    setBanner(prev => (prev === 2 ? 0 : prev + 1));
                } else if (swipe === "left") {
                    setBanner(prev => (prev === 0 ? 2 : prev - 1));
                }

                setSwipe("");
            }
        })
    }, [swipe])

    return (
        <section className="flex justify-center mb-14">
            <div className="container relative flex justify-center items-center gap-[40px] h-[250px] overflow-hidden">
                <img className={`${(swipe === "right" || swipe === "left") && `left-banner-${swipe}`} rounded-[20px] h-[210px]`} src={banner == 0 ? bannerList[banner + 2] : bannerList[banner - 1]} alt="banner-3" />
                <img className={`${(swipe === "right" || swipe === "left") && `mid-banner-${swipe}`} rounded-[20px]`} src={bannerList[banner]} alt="banner-1" />
                <img className={`${(swipe === "right" || swipe === "left") && `right-banner-${swipe}`} rounded-[20px] h-[210px]`} src={banner == 2 ? bannerList[banner - 2] : bannerList[banner + 1]} alt="banner-2" />
                <div className="absolute top-0 bottom-0 w-[1050px] flex justify-between items-center">
                    <button onClick={() => { setSwipe("left") }} className="bg-black opacity-50 w-[50px] h-[50px] rounded-full text-white font-semibold text-xl">{'<'}</button>
                    <button onClick={() => { setSwipe("right") }} className="bg-black opacity-50 w-[50px] h-[50px] rounded-full text-white font-semibold text-xl">{'>'}</button>
                </div>
                <div className="absolute bottom-4 flex justify-center items-center px-3 py-2 overflow-hidden rounded-full">
                    <div className="bg-black opacity-20 absolute top-0 bottom-0 left-0 right-0"></div>
                    <div className="flex gap-3 relative">
                        {
                            bannerList.map((_item, index) => (
                                <div key={index} className={`h-[15px] w-[15px] rounded-full ${banner == index ? 'bg-blue-950' : 'bg-white'}`}></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner