import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-about-the-app",
    templateUrl: "./about-the-app.component.html",
    styleUrls: ["./about-the-app.component.scss"],
})
export class AboutTheAppComponent implements OnInit {
    get year() {
        const date = new Date();
        return date.getFullYear();
    }

    ngOnInit(): void {}
}
