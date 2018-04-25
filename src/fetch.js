import fetch from 'isomorphic-fetch'

const requestConfig = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' }
}

export const fetchNames = () => {
  const url = "https://swapi.co/api/people"

  return fetch(url, requestConfig)
    .then((response) => response)
}