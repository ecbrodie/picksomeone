/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from "react"
import { fetchPersonList, persistPersonList as persistPersonListIntoCookie } from "../api/cookie"

interface PersonListContextState {
  personList: string[]
  addPerson: (person: string) => void
  removePerson: (person: string) => void
}

const DEFAULT_STATE = {
  personList: [],
  addPerson: () => {},
  removePerson: () => {},
}

const PersonListContext = createContext<PersonListContextState>(DEFAULT_STATE)

interface ProviderProps {
  children: React.ReactNode
}
export const PersonListProvider = ({ children }: ProviderProps) => {
  // NOTE: Need to load cookie values in useEffect rather than set as default state value.
  // Otherwise, React components load in an unstyled state on production,
  // due to the DOM rendering before the CSS is loaded.
  // There are also possibly some FOUC issues still to investigate.
  const [personList, setPersonList] = useState<string[]>([])

  useEffect(() => {
    setPersonList(fetchPersonList())
  }, [])

  const persistPersonList = (list: string[]) => {
    setPersonList(list)
    persistPersonListIntoCookie(list)
  }

  const addPerson = (person: string) => {
    const trimmedPerson = person.trim()
    const lowerCasePerson = trimmedPerson.toLocaleLowerCase()
    if (!personList.some(p => p.toLocaleLowerCase() === lowerCasePerson)) {
      persistPersonList([...personList, trimmedPerson])
    }
  }

  const removePerson = (person: string) => {
    persistPersonList(personList.filter(p => p !== person))
  }

  const contextValue = {
    personList,
    addPerson,
    removePerson,
  }

  return <PersonListContext.Provider value={contextValue}>{children}</PersonListContext.Provider>
}

export default PersonListContext
