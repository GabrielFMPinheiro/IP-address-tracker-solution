const apiKey = process.env.REACT_APP_API_KEY
  
export const personalIP = async () => {
  const request = await fetch('https://api.ipify.org?format=json')

  const response = await request.json()

  return response.ip;
}

export const locationAPI = async (endpoint) => {
  const validIpAddressRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  let request;

  if(validIpAddressRegex.test(endpoint)) {
    request = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${endpoint}`)
  } else {
    request = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${endpoint}`)
  }

  if(request.status >= 400 && request.status < 600) {
    return 'Not found'
  }

  const response = await request.json()

  return response
}
