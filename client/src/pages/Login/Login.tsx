const Login = () => {
    return (
        <main>
            <section className="flex justify-center bg-[#CDE8E5]">
                <div className="container flex justify-center items-center min-h-[100vh] pt-[100px]">
                    <div className="flex w-full shadow-md px-[100px] py-[20px] rounded-[10px] bg-white my-[10px]">
                        <div className="flex flex-col justify-center items-center text-center w-[50%]">
                            <i className="fa-solid fa-truck-fast text-[#4D869C] text-[128px] mb-[45px]"></i>
                            <p className="text-[16px] font-semibold">Lorem ipsum dolor sit amet</p>
                            <p className="text-[12px]">consectetur adipiscing elit, sed do eiusmod tempor<br />
                                incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="w-[50%] flex flex-col justify-center items-center">
                            <h1 className="text-[#4D869C] text-[32px] font-semibold text-center">Login</h1>
                            <form className="px-7 pt-4 pb-7 rounded-[10px] shadow-md w-[487px] flex flex-col gap-4 items-center">
                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="email">email</label>
                                    <input className="h-[35px] border border-[#4D869C] rounded-[5px] p-2" id="email" name="email" type="email" autoComplete="off" required />
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="password">password</label>
                                    <input className="h-[35px] border border-[#4D869C] rounded-[5px] p-2" id="password" name="password" type="password" autoComplete="off" required />
                                </div>
                                <div className="flex justify-between w-full text-[#4D869C]">
                                    <div className="flex justify-center items-center gap-2">
                                        <input type="checkbox" id="remember" className="cursor-pointer" />
                                        <label htmlFor="remember" className="cursor-pointer">remember me</label>
                                    </div>
                                    <a href="/forgot-password">forgot password?</a>
                                </div>
                                {/* <p className="w-full text-red-600">*error email user</p> */}
                                <button type="submit" className="bg-[#4D869C] mt-[30px] text-white py-2 px-5 w-[138px] rounded-[5px]">Login</button>
                            </form>
                            <div className="flex gap-5 text-[#4D869C] mt-[20px] mb-[10px] justify-center text-[24px]">
                                <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                <a href="/"><i className="fa-brands fa-google"></i></a>
                            </div>
                            <p className="text-center text-[#BABABA]">don't have an account? <a className="text-[#4D869C] font-semibold" href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login