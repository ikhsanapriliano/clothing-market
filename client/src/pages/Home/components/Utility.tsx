import ManImage from "../assets/img/utility/man.jpg"
import WomanImage from "../assets/img/utility/woman.jpg"
import BoyImage from "../assets/img/utility/boy.jpg"
import GirlImage from "../assets/img/utility/girl.jpg"
import "../assets/css/utility.css"
import { useState } from "react"

const Utility = () => {
    const [hovered, setHovered] = useState("")

    const utilities = [
        {
            image: ManImage,
            title: "man"
        },
        {
            image: WomanImage,
            title: "woman"
        },
        {
            image: BoyImage,
            title: "boy"
        },
        {
            image: GirlImage,
            title: "girl"
        },
    ]

    return (
        <section className="flex justify-center mb-28">
            <div className="container flex flex-col items-center">
                <div className="flex justify-center mb-[32px] w-[683px] relative">
                    <div className="bg-[#76ABAE] h-[78px] w-[134px] absolute right-[14px] top-[-12px]"></div>
                    <h2 className="font-semibold text-[36px] z-10">we have many choices for your utility</h2>
                </div>
                <div className="flex justify-center gap-[40px]">
                    {
                        utilities.map((utility, index) => (
                            <div
                                onMouseEnter={() => { setHovered(utility.title) }}
                                onMouseLeave={() => { setHovered("") }}
                                key={index} className="relative rounded-[10px] overflow-hidden cursor-pointer">
                                {hovered === utility.title && <div className="utility-hovered absolute inset-0 bg-black bg-opacity-70 text-white flex justify-center items-center">
                                    {utility.title}
                                </div>}
                                <img src={utility.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Utility