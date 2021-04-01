import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "room-header",
    templateUrl: "./room-header.component.html",
    styleUrls: ["./room-header.component.scss"],
})
export class RoomHeaderComponent implements OnInit {
    @Input() roomTitle: string;

    @Output() openHelpClick = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
