import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext"

const PrivateRoute=({children})=>{
    const {isAuth}=useContext(AuthContext)
    if(!isAuth){
        return(<Navigate to="/"></Navigate>)
    }
    return children
}

export default PrivateRoute


