import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { fetchNames } from './fetch'

// Actions
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchRequest = () => ({ type: FETCH_REQUEST })

export const fetchSuccess = items => ({
  type: FETCH_SUCCESS,
  payload: { items }
})

// Thunks
export const requestData = () => async (dispatch) => {
  try {
    const response = await fetchNames()
    const jsonResponse = await response.json()
    dispatch(fetchSuccess(jsonResponse))
  } catch (error) {
    console.log("error")
  }
}

const initialState = {
  items: [],
  error: null
}

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_REQUEST:
      return state

    case FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      }

    default:
      return state
  }
}


// Store
const middleware = applyMiddleware(thunk)

export const configureStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, middleware)
  return store
}

export const store = configureStore()