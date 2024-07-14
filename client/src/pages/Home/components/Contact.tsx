import QRCode from "../assets/img/contact-us/qr-code.jpg"

const Contact = () => {
    return (
        <section className="flex justify-center mb-14">
            <div className="container flex items-center justify-between">
                <div className="w-[40%] flex flex-col justify-center items-center">
                    <img className="h-[300px] w-[300px]" src={QRCode} alt="qr-code" />
                    <p className="text-[20px] pt-[10px]">download our app on playstore</p>
                </div>
                <div className="w-[60%]">
                    <form className="flex flex-col justify-center items-stretch gap-5 pr-[44px]">
                        <div className="flex gap-5">
                            <div className="flex flex-col w-[50%] gap-2">
                                <label>first name</label>
                                <input type="text" className="bg-[#DFDFDF] h-[40px]" />
                            </div>
                            <div className="flex flex-col w-[50%] gap-2">
                                <label>last name</label>
                                <input type="text" className="bg-[#DFDFDF] h-[40px]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>email</label>
                            <input type="text" className="bg-[#DFDFDF] h-[40px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>message</label>
                            <textarea className="bg-[#DFDFDF] h-[175px]"></textarea>
                        </div>
                        <div>
                            <button className="bg-[#153448] py-3 px-12 text-white">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact