import {IAction, IState, ITrans} from '../types/Interface';


export function Reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'ADD':
            return { ...state, transactions: [action.payload, ...state.transactions] }

        case 'DELETE':
            return { ...state, transactions: state.transactions.filter((transaction: ITrans) => transaction.id !== action.payload.id)}

        default:
            return state;
    }
 
}


