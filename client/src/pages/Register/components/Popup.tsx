import "../assets/css/popup.css"
import Loading from "../../../global/components/Loading"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { Status } from "../../../types/common"
import { useDispatch } from "react-redux"
import { setIsShown, setStatus } from "../slice"
import { useState } from "react"
import { wait } from "../../../utils/animation"

const RegisterPopup = () => {
    const dispatch = useDispatch()
    const { status } = useSelector((state: RootState) => state.register)
    const [isClosed, setIsClosed] = useState<boolean>(false)

    return (
        <div className={`${isClosed && "close-popup"} fixed inset-0 flex justify-center items-center bg-[black] bg-opacity-40 z-50`}>
            {
                status === Status.loading ?
                    <Loading />
                    :
                    <div className="register-success flex flex-col justify-center items-center bg-white rounded-[10px] text-center p-[75px] shadow-md m-3">
                        <i className="fa-solid fa-circle-check text-[96px] text-[#4D869C] mb-2"></i>
                        <p className="text-[20px] font-bold text-[#153448]">you’ve almost there</p>
                        <p className="text-[16px]">We've sent a verification link to your email.<br />
                            Please check your email.</p>
                        <button onClick={() => {
                            setIsClosed(true)
                            wait(170).then(() => {
                                dispatch(setStatus(Status.loading))
                                dispatch(setIsShown(false))
                            })
                        }} className="bg-[#4D869C] py-2 text-white w-full text-[20px] font-bold rounded-[10px] mt-[30px]">ok</button>
                    </div>
            }
        </div>
    )
}

export default RegisterPopup