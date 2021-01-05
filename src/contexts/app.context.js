import React, { createContext, useMemo, useReducer, useContext } from 'react'
import produce from 'immer'
import isEqual from 'react-fast-compare'

const initialState = {
  universities: []
}

const AppStateContext = createContext()
const AppDispatchContext = createContext()

const reducer = produce((state, action) => {
  const { type, payload = {} } = action
  switch(type){
    case 'SET_UNIVERSITIES':
      if(!isEqual(state.universities, payload.universities)){
        state.universities = payload.universities
      }
      return
    default:
      throw new Error('Unknown action type')
  }
})

const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => [state, dispatch])
  return contextValue
}

export const useAppContext = () => {
  const state = useContext(AppStateContext)
  const dispatch = useContext(AppDispatchContext)

  return [state, dispatch]
}

export const AppProvider = ({ children }) => {
  const [ state, dispatch ] = useApp()
  return(
    <AppDispatchContext.Provider value={dispatch}>
      <AppDispatchContext.Provider value={state}>
        {children}
      </AppDispatchContext.Provider>
    </AppDispatchContext.Provider>
  )
}