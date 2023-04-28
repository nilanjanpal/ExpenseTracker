import { AuthActions } from './auth.action';
import * as authAction from './auth.action';

export interface AuthState {
    isAuthenticated: boolean;
    userid: string;
    isBufferOn: boolean;
    token: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    userid: '',
    isBufferOn: false,
    token: ''
}

export function AuthReducer(state = initialState, action: AuthActions) {
    switch(action.type) {
        case authAction.AUTHENTICATE:
            return {
                ...state,
                isBufferOn: false,
                token: action.token
            };
        case authAction.UNAUTHENTICATE:
            return {
                isAuthenticated: false,
                userid: '',
                isBufferOn: false,
                token: ''
            };
        case authAction.START_AUTHENTICATION:
            return {
                ...state,
                isBufferOn: true
            }
        case authAction.STOP_AUTHENTICATION:
            return {
                ... state,
                isAuthenticated: true
            }
        case authAction.SET_USER:
            return {
                ... state,
                userid: action.userId
            }
        default:
            return state;
    }
}

