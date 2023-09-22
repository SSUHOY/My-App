import axios from "axios";

// реализовать через rtk query
export async function getAllTracks() {
    const response = await axios.get("https://skypro-music-api.skyeng.tech/catalog/track/all/");
  
        if (response.status !== 200) {
          throw new Error("Ошибка сервера");
        }      
        return response.data;
  }

  export async function fetchRegister({ email, password, userName }) {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        username: userName,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
    if (!response.ok) {
      const errorData = await response.json()
      const errorMessages = Object.values(errorData).flat()
      throw new Error(errorMessages[0])
    }
    const data = await response.json()
    return data
  }

  export async function fetchLogin({ email, password }) {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
  
    if (!response.ok) {
      const errorData = await response.json()
      const errorMessages = Object.values(errorData).flat()
      throw new Error(errorMessages[0])
    }
  
    const data = await response.json()
    return data
  }
export async function postToken(email, password) {
  return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json());

}
export async function fetchToken({ email, password }) {
  const response = await axios.post(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      email: email,
      password: password,
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  if (response.status !== 200) {
    const errorData = response.data
    const errorMessages = Object.values(errorData).flat()
    throw new Error(errorMessages[0])
  }

  return response.data
}

  export async function getFavTracks() {
    const tokenObj = JSON.parse(localStorage.getItem('tokenData'))
    const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenObj.access}`
    }
    })
   if (response.status === 401) {
    await postToken()
    return getFavTracks()
   } else {
    const items = await response.json()
    return items
   }
  }