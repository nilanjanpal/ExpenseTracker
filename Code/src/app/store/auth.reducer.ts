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
                isAuthenticated: true,
                userid: action.userId,
                isBufferOn: false
            };
        case authAction.UNAUTHENTICATE:
            return {
                isAuthenticated: false,
                userid: '',
                isBufferOn: false,
                token: ''
            };
        case authAction.STARTBUFFER:
            return {
                ...state,
                isBufferOn: true
            };
        case authAction.STOPBUFFER:
            return {
                ...state,
                isBufferOn: false
            };
        default:
            return state;
    }
}

