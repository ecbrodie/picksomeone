/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react"

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
  const [personList, setPersonList] = useState<string[]>([])

  const addPerson = (person: string) => {
    const lowerCasePerson = person.toLocaleLowerCase()
    if (!personList.some(p => p.toLocaleLowerCase() === lowerCasePerson)) {
      setPersonList([...personList, person])
    }
  }

  const removePerson = (person: string) => {
    setPersonList(personList.filter(p => p !== person))
  }

  const contextValue = {
    personList,
    addPerson,
    removePerson,
  }

  return <PersonListContext.Provider value={contextValue}>{children}</PersonListContext.Provider>
}

export default PersonListContext
