import { Action } from '@ngrx/store';

export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';
export const STARTBUFFER = 'STARTBUFFER';
export const STOPBUFFER = 'STOPBUFFER';

export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
    public constructor(public userId: string) { }
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

export type AuthActions = Authenticate | UnAuthenticate | StartBuffer | StopBuffer;