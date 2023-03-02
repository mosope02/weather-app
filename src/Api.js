const url = process.env.REACT_APP_API_URL   
const key = process.env.REACT_APP_API_KEY

export const apiCall = (loca) =>{  return `${url}?q=${loca}&appid=${key}`}
