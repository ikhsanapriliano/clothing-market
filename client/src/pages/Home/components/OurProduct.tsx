import { useEffect, useState } from "react"
import { Product } from "../../../types/product.type"
import { fetchProducts } from "../../../services/product.service"
import { ErrorType } from "../../../types/response.type"
import ProductImg from "../../../global/assets/img/product/t-shirt-product.jpg"
import Loading from "../../../global/components/Loading"

const OurProduct = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchProducts(10).then(data => {
            if ((data as ErrorType).error) {
                console.log(data)
            }

            setProducts(data as Product[])
            setIsLoading(false)
        })
    }, [])

    return (
        <section className="flex justify-center mb-14">
            <div className="container flex flex-col items-center">
                <div className="flex justify-center mb-[32px] w-[683px] relative">
                    <div className="bg-[#76ABAE] h-[78px] w-[48px] absolute right-[268px] top-[-12px]"></div>
                    <h2 className="font-semibold text-[36px] z-10">our products</h2>
                </div>
                <div className="flex flex-wrap gap-10 justify-center items-center">
                    {
                        !isLoading ?
                            products.map((item, index) => (
                                <div key={index} className="h-[320px] w-[220px] rounded-[10px] bg-white overflow-hidden shadow-md flex flex-col justify-center items-start cursor-pointer hover:scale-110 duration-200">
                                    <img src={ProductImg} alt="product" />
                                    <div className="p-4">
                                        <p className="text-[12px]">{item.name}</p>
                                        <p className="text-[14px] font-medium">Rp{item.price.toLocaleString("id-ID")}</p>
                                        <div className="flex gap-2 justify-start items-center">
                                            <div className="h-[10px] w-[10px] rounded-full bg-[#153448]"></div>
                                            <p className="text-[10px]">Kota Jakarta</p>
                                        </div>
                                        <div className="flex gap-2 justify-start items-center">
                                            <div className="h-[10px] w-[10px] rounded-full bg-[#EFFF3A]"></div>
                                            <p className="text-[10px]">4.5 | {item.sold}+ sold</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <Loading />
                    }
                </div>
                <a href="/" className="bg-[#153448] text-white flex justify-center items-center px-[75px] py-[10px] mt-[44px] cursor-pointer">more products</a>
            </div>
        </section>
    )
}

export default OurProduct