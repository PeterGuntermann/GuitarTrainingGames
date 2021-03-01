import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "lobby-header",
    templateUrl: "./lobby-header.component.html",
    styleUrls: ["./lobby-header.component.scss"],
})
export class LobbyHeaderComponent implements OnInit {
    @Input() title: string;

    @Output() toggleMenuButtonClicked = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onToggleMenuButtonClick(): void {
        this.toggleMenuButtonClicked.emit();
    }
}
