import { useContext, useState, createContext } from "react"
import { fetchLogin, fetchToken, postNewToken, postToken } from "../api"
import { useDispatch } from "react-redux"
import { uploadTokens } from "../store/actions/creators/tracks"

// https://github.com/skypro-web-developer/webdev-react-skypro-music-examples/blob/master/src/examples/rtk-query/playlist.js


export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem('userData')
  })
  const [error, setError] = useState(() => {
    const storedUserData = localStorage.getItem('userData')
    console.log(storedUserData);
    if (storedUserData) {
      console.log(storedUserData);
      setUser(JSON.parse(storedUserData))
    } else {
      return null
    }
  })

  
const dispatch = useDispatch()

const loginUserFn = async ({ email, password }) => {
  try {
    const tokenData = await fetchToken({ email, password })
    const {access: accessToken, refresh: refreshToken} = tokenData
    dispatch(uploadTokens(accessToken, refreshToken));
    const userData = await fetchLogin({email, password});
    
    localStorage.setItem('tokenData', JSON.stringify(tokenData))
    console.log(localStorage);
    localStorage.setItem('userData', JSON.stringify(userData))
    setUser(userData)
    setError(null)
   
  } catch (error) {
    setError(error.message)
    throw error
  }
}

    
      const logoutUserFn = () => {
        setUser(null)
        localStorage.removeItem('userData')
      }
    
      return (
        <AuthContext.Provider
          value={{ user, setUser, error, setError, loginUserFn, logoutUserFn }}
        >
          {children}
        </AuthContext.Provider>
      )
  }
