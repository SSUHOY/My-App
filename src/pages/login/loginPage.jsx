import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as S from '../../components/styles/loginPage/styles'

export const Login = ({ isAuthenticated, onLogin, onLogout }) => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    if (isAuthenticated) {
      onLogout()
    } else {
      onLogin()
      navigate('/', { replace: true })
    }
  }

  isAuthenticated = false
  
  return (
    <S.StyledLoginPage>
         <h1>Cтраница авторизации</h1>
      <S.StyledButton onClick={handleButtonClick}>
        {isAuthenticated ? 'Выйти' : 'Войти'}
      </S.StyledButton>
      <Link to="/register" className="menu__link">
        Зарегистрироваться
      </Link>
    </S.StyledLoginPage>
  )
}