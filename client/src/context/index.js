import { createContext, useReducer, useContext, useMemo } from 'react';

const initState = {
    items: [],
    current: null
};

function appReducer(state, action){
    switch(action.type){
        case 'set_items': return {...state, items: action.payload};
        case 'set_current': return {...state, current: action.payload};
        default: throw new Error('action type not found');
    }
}

const AppContext = createContext();

export function AppProvider({children}){
    const reducer = useReducer(appReducer, initState);
    return (<AppContext.Provider value={reducer}>
        {children}
    </AppContext.Provider>);
}

export function useAppContext(){
    return useContext(AppContext);
}

export const actions = {
    setCurrent: (v) => ({type: 'set_current', payload: v}),
    setItems: (v) => ({type: 'set_items', payload: v}),
};