import ManImage from "../../assets/utility/man.jpg"
import WomanImage from "../../assets/utility/woman.jpg"
import BoyImage from "../../assets/utility/boy.jpg"
import GirlImage from "../../assets/utility/girl.jpg"

const Utility = () => {
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
        <section className="flex justify-center mb-14">
            <div className="container flex flex-col items-center">
                <div className="flex justify-center mb-[32px] w-[683px] relative">
                    <div className="bg-[#76ABAE] h-[78px] w-[134px] absolute right-[14px] top-[-12px]"></div>
                    <h2 className="font-semibold text-[36px] z-10">we have many choices for your utility</h2>
                </div>
                <div className="flex justify-center gap-[40px]">
                    {
                        utilities.map((utility, index) => (
                            <div key={index}>
                                <img className="rounded-[10px]" src={utility.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Utility