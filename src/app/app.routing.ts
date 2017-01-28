/**
 * Created by assad on 1/27/17.
 */
import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ChatComponent} from "./components/chat/chat.component";




export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
];

