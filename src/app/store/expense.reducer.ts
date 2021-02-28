import * as expActions from './expense.action';

export interface Category {
    Name: string;
    Description: string;
}

export interface ExpenseHistory {
    ExpenseId: string;
    ItemName: string;
    Price: number;
    PurchaseDate: Date;
    Category: string;
    Comment: string;
    isEdited: boolean;
}

export interface ExpenseState {
    category: Category[];
    expenseHistory: ExpenseHistory[];
    displayedColumns: string[];
    isEditModeOn: boolean;
    editExpense: ExpenseHistory;
    isExpenseLoading: boolean;
}

const initialState: ExpenseState = {
    category: [],
    expenseHistory: [],
    displayedColumns: ['itemName', 'price', 'purchaseDate', 'category'],
    isEditModeOn: false,
    editExpense: { ExpenseId: '', ItemName: '', PurchaseDate: new Date, Price: 0, isEdited: false, Category: '', Comment: '' },
    isExpenseLoading: false
};

export function ExpenseReducer(state = initialState, action: expActions.expenseAction) {
    switch (action.type) {
        case expActions.FETCH_CATEGORIES:
            return {
                ...state,
                category: [...action.payload]
            };
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
        default:
            return state;
    }
}
