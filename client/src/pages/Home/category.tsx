import TShirt from "../../assets/category/t-shirt.png"
import Shirt from "../../assets/category/shirt.png"
import Pants from "../../assets/category/pants.png"
import Jacket from "../../assets/category/jacket.png"
import Sweather from "../../assets/category/sweather.png"
import Shoes from "../../assets/category/shoes.png"
import Sandals from "../../assets/category/sandals.png"
import Socks from "../../assets/category/socks.png"
import Hat from "../../assets/category/hat.png"
import Eyeglasses from "../../assets/category/eyeglasses.png"
import Watch from "../../assets/category/watch.png"
import Skirt from "../../assets/category/skirt.png"

const Category = () => {
    const categories = [
        {
            image: TShirt,
            title: "t-shirt"
        },
        {
            image: Shirt,
            title: "shirt"
        },
        {
            image: Pants,
            title: "pants"
        },
        {
            image: Jacket,
            title: "jacket"
        },
        {
            image: Sweather,
            title: "sweather"
        },
        {
            image: Shoes,
            title: "shoes"
        },
        {
            image: Sandals,
            title: "sandals"
        },
        {
            image: Socks,
            title: "socks"
        },
        {
            image: Hat,
            title: "hat"
        },
        {
            image: Eyeglasses,
            title: "eyeglasses"
        },
        {
            image: Watch,
            title: "watch"
        },
        {
            image: Skirt,
            title: "skirt"
        },
    ]

    return (
        <section className="flex justify-center mb-14">
            <div className="flex flex-wrap container justify-center gap-[52px]">
                {
                    categories.map((category, index) => (
                        <button key={index} className="h-[150px] w-[150px] rounded-full bg-[#F8F8F8] flex flex-col justify-center items-center">
                            <img className="h-[90px] w-[90px]" src={category.image} alt={category.title} />
                            <p>{category.title}</p>
                        </button>
                    ))
                }
            </div>
        </section>
    )
}

export default Category