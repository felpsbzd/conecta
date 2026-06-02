import React, { createContext, useContext, useReducer } from 'react';
import { AppState, AppAction } from './appContext.types';

const initialState: AppState = {
  userType: null,
  professional: null,
  company: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case 'SET_USER_TYPE':
            return { ...state, userType: action.payload };
        case 'SET_PROFESSIONAL':
            return { ...state, professional: action.payload };
        case 'SET_COMPANY':
            return { ...state, company: action.payload };
        case 'RESET':
            return initialState;
    }
}
 const AppContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
 } | null>(null);
 
 export function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
 }   
 export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
 }
 
