import TShirt from "../assets/img/category/t-shirt.png"
import Shirt from "../assets/img/category/shirt.png"
import Pants from "../assets/img/category/pants.png"
import Jacket from "../assets/img/category/jacket.png"
import Sweather from "../assets/img/category/sweather.png"
import Shoes from "../assets/img/category/shoes.png"
import Sandals from "../assets/img/category/sandals.png"
import Socks from "../assets/img/category/socks.png"
import Hat from "../assets/img/category/hat.png"
import Eyeglasses from "../assets/img/category/eyeglasses.png"
import Watch from "../assets/img/category/watch.png"
import Skirt from "../assets/img/category/skirt.png"

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