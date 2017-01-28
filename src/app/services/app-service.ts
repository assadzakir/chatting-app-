/**
 * Created by assad on 1/27/17.
 */
import {Injectable, Inject} from '@angular/core';
import {FirebaseListObservable, AngularFire, FirebaseRef} from "angularfire2";
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AppService {
    userObj;
    afRef;
    router;
    db: any;

    constructor(private af: AngularFire, _router: Router) {
        this.afRef = af;
        this.router = _router;
    }

    getDb() {
        this.db = this.af.database;
        return this.db;
    }

    setUserData(data) {
        this.userObj = data;
        console.log("saving in service");
        console.log(data, "saving in service");
        localStorage.setItem("userData", JSON.stringify(data));
    }

    getUserData() {
        let userObjTemp = JSON.parse(localStorage.getItem("userData"));
        return this.userObj || userObjTemp;
    }

    logoutUser() {
        this.afRef.auth.logout()
            .then(
                data => {
                    localStorage.removeItem("userData");
                    this.router.navigate(['/login'])
                },
                error => console.log('Error in Logout', error)
            );
    }


}