import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../global/components/Loading'
import { useEffect } from 'react'
import { verifyUser } from '../../services/auth'
import { ResponseType } from '../../types/response'
import Cookies from 'js-cookie'
import { TokenResponse } from '../../types/auth'

function Activation() {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        verifyUser(id as string).then((res) => {
            if ((res as ResponseType).status !== 200) {
                navigate("/")
            } else {
                const accessToken = ((res as ResponseType).data as TokenResponse).token
                const expires = new Date()
                expires.setMinutes(expires.getMinutes() + 30)

                Cookies.set("accessToken", accessToken, { expires })
                navigate("/")
            }
        })
    }, [])

    return (
        <Loading />
    )
}

export default Activation