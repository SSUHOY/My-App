import axios from "axios"


export const handleRegistration = async ({email, password, userName}) => {
    try {
        const response = await axios.post('https://painassasin.online/user/signup/', {
            email,
            password,
            userName,
        })
alert(response.data.message)
    } catch (e) {
        alert(e);
    }



}