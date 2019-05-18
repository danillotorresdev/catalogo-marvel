import md5 from 'js-md5'

const PUBLIC_KEY = '5df1d09a22ca22c174fbcff162ae5d8a'
const PRIVATE_KEY = 'c627fa7149459d0a3cd603599b77a58183fe1312'

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)


export const params = `ts=${timestamp}&orderBy=name&limit=12&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`

export const paramsWithOffset = (offset) => `ts=${timestamp}&orderBy=name&limit=12&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`

export const baseUrl = "https://gateway.marvel.com/v1/public/"