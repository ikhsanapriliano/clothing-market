import { useEffect, useState } from "react"
import Loading from "../../../global/components/Loading"
import { fetchStores } from "../../../services/store.service"
import { ErrorType } from "../../../types/response.type"
import { Store } from "../../../types/store.type"
import StoreImg from "../../../global/assets/img/store/store-preview.png"

const OurStore = () => {
    const [stores, setStores] = useState<Store[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchStores(10).then((data) => {
            if ((data as ErrorType).error) {
                console.log(data)
            }

            setStores(data as Store[])
            setIsLoading(false)
        })
    }, [])

    return (
        <section className="flex justify-center mb-14 bg-[#153448] py-10 text-white">
            <div className="container flex flex-col items-center">
                <div className="flex justify-center mb-[32px] w-[683px] relative">
                    <div className="bg-[#76ABAE] h-[78px] w-[48px] absolute right-[280px] top-[-12px]"></div>
                    <h2 className="font-semibold text-[36px] z-10">our stores</h2>
                </div>
                <div className="flex flex-wrap gap-10 justify-center items-center">
                    {
                        !isLoading ?
                            stores.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center items-center cursor-pointer">
                                    <img className="rounded-full w-[200px] h-[200px]" src={StoreImg} alt="product" />
                                    <p className="text-[20px] font-semibold pt-10">{item.name}</p>
                                </div>
                            ))
                            :
                            <Loading />
                    }
                </div>
                <a href="/" className="bg-[#FC4100] text-white flex justify-center items-center px-[75px] py-[10px] mt-[44px] cursor-pointer">more products</a>
            </div>
        </section>
    )
}

export default OurStore