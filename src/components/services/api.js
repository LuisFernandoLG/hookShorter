export const api = () => {
  const host = window.location.hostname
  const baseEndpoint = `http://${host}:3001`

  const addUrlEndpoint = `${baseEndpoint}/posts`
  const getUrlEndpoint = `${baseEndpoint}/posts`

  const addUrl = ({ urlItem }) =>
    new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        body: JSON.stringify(urlItem),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
      fetch(addUrlEndpoint, options)
        .then((response) => {
          resolve(response.json())
        })
        .catch((e) => {
          reject(e)
        })
    })

  const getUrlItem = ({ token }) =>
    new Promise((resolve, reject) => {
      fetch(`${getUrlEndpoint}/${token}`).then((res) =>
        res.ok ? resolve(res.json()) : reject('Something went wrong')
      )
    })

  return {
    addUrl,
    getUrlItem
  }
}
