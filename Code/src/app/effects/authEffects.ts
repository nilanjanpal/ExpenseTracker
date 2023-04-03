import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as authActions from './../store/auth.action';

// export class AuthEffect{

//     constructor(private actions$: Actions) {}

//     loginStart = createEffect(() => {
//         this.actions$.pipe(
//             ofType(authActions.START_AUTHENTICATION),
//             map(

//             )
//         )
//     });
// }