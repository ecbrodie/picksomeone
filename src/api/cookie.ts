import Cookies from "js-cookie"

const PERSON_LIST_COOKIE_KEY = "PICKSOME.ONE_PERSON_LIST"

export const persistPersonList = (personList: string[]) => Cookies.set(PERSON_LIST_COOKIE_KEY, personList)

export const fetchPersonList = (): string[] => {
  const rawCookie = Cookies.getJSON(PERSON_LIST_COOKIE_KEY)

  if (Array.isArray(rawCookie) && rawCookie.every(el => typeof el === "string")) {
    return rawCookie
  }
  return []
}
