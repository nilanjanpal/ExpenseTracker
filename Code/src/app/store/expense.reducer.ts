import * as expActions from './expense.action';

export interface Category {
    Name: string;
    Description: string;
}

export interface ExpenseHistory {
    id: string;
    userId: string;
    itemName: string;
    comment: string;
    purchaseDate: Date;
    category: string;
    price: number;
    edited: boolean;
}

export interface ExpenseState {
    searchStartDate: Date;
    searchEndDate: Date;
    expenseHistory: ExpenseHistory[];
    displayedColumns: string[];
    isEditModeOn: boolean;
    editExpense: ExpenseHistory;
    isExpenseLoading: boolean;
}

const initialState: ExpenseState = {
    searchStartDate: new Date(),
    searchEndDate: new Date(),
    expenseHistory: [],
    displayedColumns: ['itemName', 'price', 'purchaseDate', 'category'],
    isEditModeOn: false,
    editExpense: { id: '', 
                   userId: '',
                   itemName: '', 
                   comment: '',
                   purchaseDate: new Date,
                   category: '',
                   price: 0, 
                   edited: false },
    isExpenseLoading: false
};

export function ExpenseReducer(state = initialState, action: expActions.expenseAction) {
    switch (action.type) {
        case expActions.SET_EXPENSES:
            return {
                ...state,
                expenseHistory: [...action.payload]
            };
        case expActions.SET_EDIT_MODE_ON:
            return {
                ...state,
                isEditModeOn: true
            };
        case expActions.SET_EDIT_MODE_OFF:
            return {
                ...state,
                isEditModeOn: false
            };
        case expActions.SET_EDIT_EXPENSE_ELEMENT:
            return {
                ...state,
                editExpense: {...action.payload}
            };
        case expActions.SET_EXPENSE_LOAD_ON:
            return {
                ... state,
                isExpenseLoading: true
            };
        case expActions.SET_EXPENSE_LOAD_OFF:
            return {
                ... state,
                isExpenseLoading: false
            };
        case expActions.SET_SEARCH_DATE:
            return {
                ... state,
                searchStartDate: action.startDate,
                searchEndDate: action.endDate
            };
        default:
            return state;
    }
}
