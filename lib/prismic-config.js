import Prismic from 'prismic-javascript'

const { API_URL } = process.env
export const apiEndpoint = API_URL
export const accessToken = ''

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
