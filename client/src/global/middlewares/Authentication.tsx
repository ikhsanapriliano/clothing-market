import { useDispatch } from "react-redux";
import { setLogin } from "../slice";
import { Outlet } from "react-router-dom";
import { wait } from "../../utils/animation";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";

const Authentication = () => {
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        wait(2000).then(() => {
            dispatch(setLogin({
                isLoading: false,
                isLoggedIn: true,
                id: "1",
                role: "1"
            }))
        })
    }, [])

    return (
        <>
            {
                isLoading ?
                    <main className="min-h-[100vh] flex justify-center items-center">
                        <Loading />
                    </main>
                    :
                    <Outlet />
            }
        </>
    )
}

export default Authentication