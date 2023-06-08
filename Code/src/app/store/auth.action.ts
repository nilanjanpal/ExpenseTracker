import { Action } from '@ngrx/store';

export const AUTHENTICATE = '[Auth] AUTHENTICATE';
export const UNAUTHENTICATE = '[Auth] UNAUTHENTICATE';
export const START_AUTHENTICATION = '[Auth] START_AUTHENTICATION';
export const STOP_AUTHENTICATION = '[Auth] STOP_AUTHENTICATION';
export const SET_USER = '[Auth] SET_USER';

export class StartAuthentication implements Action {
    readonly type = START_AUTHENTICATION;
    constructor(public username: string, public password: string) {}
}

export class StopAuthentication implements Action {
    readonly type = STOP_AUTHENTICATION;
}

export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
    constructor(public token: string, public username: string) { }
}

export class UnAuthenticate implements Action {
    readonly type = UNAUTHENTICATE;
}

export class SetUserId implements Action {
    readonly type = SET_USER;
    constructor(public userId: string) {}
}

export type AuthActions = Authenticate | 
                          UnAuthenticate | 
                          StartAuthentication |
                          StopAuthentication |
                          SetUserId;