import axios from './axios'

export const BANNER = 'banners'
export const RECOMMEND = 'recommends'

export function getHomeMultidata() {
  return axios({
    url: '/homepage/multidata'
  })
}

export function getHomeData(type, page) {
  return axios({
    url: '/homepage/data',
    params: {
      type,
      page
    }
  })
}
