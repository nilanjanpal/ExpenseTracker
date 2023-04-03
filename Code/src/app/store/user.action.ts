import { Action } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const SET_USER_DETAIL = 'SET_USER_DETAIL';

export class SetUserDetail implements Action {
    readonly type = SET_USER_DETAIL;
    public constructor(public userDetail: UserState) {}
}

export type UserActions = SetUserDetail;