import logo from '../assets/images/logo.png'
import CustomButton from '../Components/CustomButton'
import './Login.scss'

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Full Stack Club" />
      <div className="button-container">
        <CustomButton>Entrar</CustomButton>
      </div>
    </div>
  )
}

export default Login
