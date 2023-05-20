const userLocation = async()=>{
    let url = 'https://ipinfo.io/json?token=e94155e6189079'
    let response = await fetch(url)
    let data = await response.json();
    return data.city
}

export default userLocation