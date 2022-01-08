import { locationAPI } from "./api"

export const INPUT_HANDLER = 'INPUT_HANDLER'
export const REQUEST_API = 'REQUEST_API'
export const RESPONSE_API = 'RESPONSE_API'
export const ERROR_API = 'ERROR_API'

export const inputHandler = (value) => ({
  type: INPUT_HANDLER,
  name: value,
})

const requestAPI = () => ({
  type: REQUEST_API,
})

const responseAPI = (data) => ({
  type: RESPONSE_API,
  payload: data,
})

const erroAPI = (error) => ({
  type: ERROR_API,
  error,
})

export function fetchTracker(endpoint) {
  return async (dispatch) => {
    dispatch(requestAPI)
    
    const request = await locationAPI(endpoint)

    if(request === 'Not found') {
      dispatch(erroAPI(request))
    } else {
      dispatch(responseAPI(request))
    }    
  }
}