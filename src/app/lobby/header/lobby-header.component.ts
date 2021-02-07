import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "lobby-header",
    templateUrl: "./lobby-header.component.html",
    styleUrls: ["./lobby-header.component.scss"],
})
export class LobbyHeaderComponent implements OnInit {
    @Input() title: string;

    ngOnInit() {}
}
