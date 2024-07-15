import React, { useState } from "react"
import RegisterPopup from "./components/Popup"
import { useDispatch, useSelector } from "react-redux"
import { setIsShown, setStatus } from "./slice"
import { RootState } from "../../store"
import { registerUser } from "../../services/auth"
import { RegisterPayload } from "../../types/auth"
import { ErrorType } from "../../types/response"
import { Status } from "../../types/common"

const Register = () => {
    const dispatch = useDispatch()
    const { isShown } = useSelector((state: RootState) => state.register)
    const [payload, setPayload] = useState<RegisterPayload>({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState<null | string>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        dispatch(setIsShown(true))
        registerUser(payload).then(res => {
            if (res !== undefined) {
                dispatch(setIsShown(false))
                setError((res as ErrorType).message)
            } else {
                dispatch(setStatus(Status.success))
                setPayload({
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
                setError(null)
            }
        })
    }

    return (
        <>
            {/* popup */}
            {isShown && <RegisterPopup />}

            {/* page */}
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
                                <h1 className="text-[#4D869C] text-[32px] font-semibold text-center">Register</h1>
                                <form onSubmit={(e) => { handleSubmit(e) }} className="px-7 py-4 rounded-[10px] shadow-md w-[487px] flex flex-col gap-4 items-center">
                                    <div className="flex flex-col w-full gap-2">
                                        <label htmlFor="email">email</label>
                                        <input value={payload.email} onChange={(e) => {
                                            setPayload(prev => ({
                                                ...prev,
                                                email: e.target.value
                                            }))
                                        }} className="h-[35px] border border-[#4D869C] rounded-[5px] p-2" id="email" name="email" type="email" autoComplete="email" required />
                                    </div>
                                    <div className="flex flex-col w-full gap-2">
                                        <label htmlFor="password">password</label>
                                        <input value={payload.password} onChange={(e) => {
                                            setPayload(prev => ({
                                                ...prev,
                                                password: e.target.value
                                            }))
                                        }} className="h-[35px] border border-[#4D869C] rounded-[5px] p-2" id="password" name="password" type="password" autoComplete="off" required />
                                    </div>
                                    <div className="flex flex-col w-full gap-2">
                                        <label htmlFor="confirm-password">confirm password</label>
                                        <input value={payload.confirmPassword} onChange={(e) => {
                                            setPayload(prev => ({
                                                ...prev,
                                                confirmPassword: e.target.value
                                            }))
                                        }} className="h-[35px] border border-[#4D869C] rounded-[5px] p-2" id="confirm-password" name="confirmPassword" type="password" autoComplete="off" required />
                                    </div>
                                    {error && <p className="w-full text-red-600">*{error}</p>}
                                    <button type="submit" className="bg-[#4D869C] text-white py-2 px-5 w-[138px] rounded-[5px]">Register</button>
                                </form>
                                <div className="flex gap-5 text-[#4D869C] mt-[20px] mb-[10px] justify-center text-[24px]">
                                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="/"><i className="fa-brands fa-google"></i></a>
                                </div>
                                <p className="text-center text-[#BABABA]">already registered? <a className="text-[#4D869C] font-semibold" href="/login">Login</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register