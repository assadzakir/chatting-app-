/**
 * Created by assad on 1/27/17.
 */
import {
        AuthProviders,
        AuthMethods

} from 'angularfire2'
    // Initialize Firebase
export const firebaseConfig = {
        apiKey: "AIzaSyALvisbV_FRlJTDYDJ3yNwi--FBs4zfSmc",
        authDomain: "project-6654639009467199534.firebaseapp.com",
        databaseURL: "https://project-6654639009467199534.firebaseio.com",
        storageBucket: "project-6654639009467199534.appspot.com",
        messagingSenderId: "695233563015"
    };

export const firebaseAuthConfig = {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
}