import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { fetchRegister } from "../../../api";
import {registration, useAuthContext } from "../../../content/AuthContext";

export default function AuthPage() {

  const { setUser, loginUserFn } = useAuthContext()


  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userName, setUserName] = useState('')
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [isAuthLoading, setIsAuthLoading] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoginMode(location.pathname === '/login')
  }, [location.pathname, isLoginMode])

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Пожалуйста, введите пароль и/или логин");
      return;
    }
    try {
      setIsAuthLoading(true)
      await loginUserFn({ email, password })
      setIsAuthLoading(false)
      navigate('/', { replace: true })
    } catch (error) {
      console.error('Ошибка авторизации:', error)
      setError(error.message)
      setIsAuthLoading(false)
    }
  }

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Не заполнены обязательные поля (Имя, почта, пароль)");
      return;
    }
    if (repeatPassword !== password) {
      setError('Пароли не совпадают')
      return
    }
  }
  // try {
  //   setIsAuthLoading(true)
  //   const userData = fetchRegister({ email, password, userName })
  //   console.log(userData)
  //   localStorage.setItem('userData', JSON.stringify(userData))
  //   setIsLoginMode(true)
  //   setUser(userData)
  //   setError(null)
  //   setIsAuthLoading(false)
  //   navigate('/', { replace: true })
  // } catch (error) {
  //   console.error('Ошибка регистрации:', error)
  //   setError(error.message || 'Неизвестная ошибка регистрации')
  //   setIsAuthLoading(false)
  // }


  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="./img/logo-black.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}    
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}
               disabled={isAuthLoading}>
                
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
            <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => fetchRegister({ email, password, userName })}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}

  console.log(localStorage);


// const navigate = useNavigate()
// const handleButtonClick = () => {
//   if (isAuthenticated) {
//     onLogout()
//   } else {
//     onLogin()
//     navigate('/', { replace: true })
//   }
// }

// isAuthenticated = false
// return (
//   <S.StyledLoginPage>
//        <h1>Cтраница авторизации</h1>
//     <S.StyledButton onClick={handleButtonClick}>
//       {isAuthenticated ? 'Выйти' : 'Войти'}
//     </S.StyledButton>
//     <Link to="/register" className="menu__link">
//       Зарегистрироваться
//     </Link>
//   </S.StyledLoginPage>
// )