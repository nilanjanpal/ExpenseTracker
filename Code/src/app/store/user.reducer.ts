import { UserActions } from "./user.action";
import * as userAction from "./user.action";

export interface UserState {
    username: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    id: string;
}

const initialState: UserState = {
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    id: ""
}

export function UserReducer(state = initialState, action: UserActions) {

    switch(action.type) {
        case userAction.SET_USER_DETAIL:
            return {
                firstName: action.userDetail.firstName,
                lastName: action.userDetail.lastName,
                username: action.userDetail.username,
                dateOfBirth: action.userDetail.dateOfBirth,
                id: action.userDetail.id
            }
            break;
        default:
            return state;
    }

}