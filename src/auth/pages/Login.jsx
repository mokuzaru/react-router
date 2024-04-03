import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


export const Login = () => {

  const { login } = useContext( AuthContext )
  
  const Navigate = useNavigate()

  const onlogin = () =>{

    const lastPath = localStorage.getItem('lastPath') || '/'

    login( 'Kenny Otoya' )

    Navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ onlogin }>
        Login
      </button>
    </div>
    
  )
}
