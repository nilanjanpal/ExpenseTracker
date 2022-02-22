import { Action } from '@ngrx/store';

export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';
export const STARTBUFFER = 'STARTBUFFER';
export const STOPBUFFER = 'STOPBUFFER';
export const START_AUTHENTICATION = 'START_AUTHENTICATION';
export const STOP_AUTHENTICATION = 'STOP_AUTHENTICATION';

export class StartAuthentication implements Action {
    readonly type = START_AUTHENTICATION;
}

export class StopAuthentication implements Action {
    readonly type = STOP_AUTHENTICATION;
}

export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
    public constructor(public userId: string, public displayName: string) { }
}

export class UnAuthenticate implements Action {
    readonly type = UNAUTHENTICATE;
}

export class StartBuffer implements Action {
    readonly type = STARTBUFFER;
}

export class StopBuffer implements Action {
    readonly type = STOPBUFFER;
}

export type AuthActions = Authenticate | 
                          UnAuthenticate | 
                          StartBuffer | 
                          StopBuffer |
                          StartAuthentication |
                          StopAuthentication;