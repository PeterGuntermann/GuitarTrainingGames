import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-circle-of-fifths",
    templateUrl: "./circle-of-fifths.component.html",
    styleUrls: ["./circle-of-fifths.component.scss"],
})
export class CircleOfFifthsComponent implements OnInit {
    imgSource = "assets/images/notes/Ab.png";

    constructor() {}

    ngOnInit(): void {}
}
