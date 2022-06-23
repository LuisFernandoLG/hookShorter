import { nanoid } from 'nanoid'
import { isEnvLocalhost } from '../helpers/isEnvLocalhost'

const pageLink = isEnvLocalhost()
  ? 'http://localhost:3000#/r'
  : 'https://hookshorter.netlify.app#/r'

export const useLinkGenerator = () => {
  const generateUrlItem = ({ baseLink }) => {
    const token = nanoid(5)
    console.log({ pageLink })
    const newLink = `${pageLink}/${token}`
    return {
      id: token,
      longLink: baseLink,
      shortedLink: newLink
    }
  }

  const extractTokenFromUrl = ({ url }) => {
    let [, ...rest] = url.split('r/')
    rest = rest.join('r/')
    return rest
  }

  return {
    generateUrlItem,
    extractTokenFromUrl
  }
}
