import { Component, OnInit } from "@angular/core";
import { APP_VERSION } from "../../constants/globals";

@Component({
    selector: "app-about-the-app",
    templateUrl: "./about-the-app.component.html",
    styleUrls: ["./about-the-app.component.scss"],
})
export class AboutTheAppComponent implements OnInit {
    readonly APP_VERSION = APP_VERSION;

    get year() {
        const date = new Date();
        return date.getFullYear();
    }

    ngOnInit(): void {}
}
