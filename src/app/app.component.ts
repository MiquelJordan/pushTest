import { Component, OnInit } from "@angular/core";
import { LocalNotifications } from "nativescript-local-notifications";
import { messaging, Message } from "nativescript-plugin-firebase/messaging";
import { Observable } from "tns-core-modules/data/observable";
let firebase = require("nativescript-plugin-firebase");

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor() {
        // messaging.addOnMessageReceivedCallback(data => {
        //     console.log("addOnMessageReceivedCallback")
        //     alert({
        //         title: "Local Notification received",
        //         message: `id: '${data}', title: '${data.title}'.`,
        //         okButtonText: "Roger that"
        //     });
        //     LocalNotifications.schedule([{
        //         id: 1,
        //         title: 'Sound & Badge',
        //         body: 'Who needs a push service anyway?',
        //         badge: 1,
        //         at: new Date(new Date().getTime() + (5 * 1000)) // 5 seconds from now
        //     }]);
        //     console.log(data)
        // })

    }

    ngOnInit() {

        console.log("app init")
        // firebase.init({
        //     onMessageReceivedCallback: function (message) {
        //         LocalNotifications.schedule([{
        //             id: 1,
        //             title: 'Sound & Badge',
        //             body: 'Who needs a push service anyway?',
        //             badge: 1,
        //             at: new Date(new Date().getTime() + (5 * 1000)) // 5 seconds from now
        //         }]);
        //         console.log(message)
        //     },
        //     showNotifications: false,
        //     showNotificationsWhenInForeground: false

        // })
    };
    // // adding a handler, so we can do something with the received notification.. in this case an alert
    // LocalNotifications.addOnMessageReceivedCallback(data => {
    //     alert({
    //         title: "Local Notification received",
    //         message: `id: '${data.id}', title: '${data.title}'.`,
    //         okButtonText: "Roger that"
    //     });
    //     LocalNotifications.schedule([{
    //         id: 1,
    //         title: 'Sound & Badge',
    //         body: 'Who needs a push service anyway?',
    //         badge: 1,
    //         at: new Date(new Date().getTime() + (5 * 1000)) // 5 seconds from now
    //     }]);
    //     console.log(data)
    // });
}

