export async function getAllTracks() {
    const response = await fetch("https://painassasin.online/catalog/track/all/", {
        });
  
        if (!response.ok) {
          throw new Error("Ошибка сервера");
        }

        const data = await response.json()
        return data;
  }

  export async function fetchRegister({ email, password, userName }) {
    const response = await fetch('https://painassasin.online/user/signup/', {
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
    const response = await fetch('https://painassasin.online/user/login/', {
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