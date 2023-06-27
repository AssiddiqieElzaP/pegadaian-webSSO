export const redirectLoginSSo = () => {
    const url = `http://10.254.1.180:8081/hcis/oauth/authorize?client_id=delegasilocal&response_type=code&redirect_uri=http://localhost:3000&state=12345`;
    return (window.location.href = url)
}

//Bikin fungsi untuk menyimpan token agar bisa dipakai dimana saja

export const isLogged = () => {
    const getToken = localStorage.getItem('token')
    return getToken
  }