import { Component, OnInit, Injectable } from "@angular/core";
import { messaging, Message } from "nativescript-plugin-firebase/messaging";
import * as platformModule from "tns-core-modules/platform";
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from "@angular/http";
import { alert } from "ui/dialogs";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toPromise';
import { LocalNotifications } from "nativescript-local-notifications";

export interface ResponseObject {
    url?: string,
    code?: number,
    message?: string,
    data?: any
}
export interface RequestObject {
    url?: string,
    data?: any,
    options?: any
}
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {
    private notification_token: string

    constructor(private _http: Http) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        messaging.registerForPushNotifications({
            onPushTokenReceivedCallback: (token: string): void => {
                console.log("Firebase plugin received a push token: " + token);
                this.notification_token = token;
                
            },
        });
        // Init your component properties here.

    }

}
