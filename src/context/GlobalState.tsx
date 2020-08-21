import React, { createContext, useReducer } from 'react';
import { IState } from '../types/Interface';
import { Reducer } from '../context/AppReducer';


const initialState: IState = {
    transactions: []
};

export const GlobalContext = createContext<IState | any>(initialState);


export function GlobalProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return <GlobalContext.Provider value={{ state, dispatch }}>
        {props.children}
    </GlobalContext.Provider>
}



