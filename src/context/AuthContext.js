import { useContext, useState, createContext } from "react"
import { fetchLogin } from "../api"

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem('userData')
})
const [error, setError] = useState(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      setUser(JSON.parse(storedUserData))
    } else {
      return null
    }
  })

    const loginUserFn = async ({ email, password }) => {
      console.log("userData");
      try {
        const userData = await fetchLogin({ email, password })
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
