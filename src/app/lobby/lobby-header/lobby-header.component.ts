import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IconService } from "../../shared/icon-service/icon.service";

@Component({
    selector: "lobby-header",
    templateUrl: "./lobby-header.component.html",
    styleUrls: ["./lobby-header.component.scss"],
})
export class LobbyHeaderComponent implements OnInit {
    @Input() title: string;

    @Output() toggleMenuButtonClicked = new EventEmitter();

    constructor(public readonly icon: IconService) {}

    ngOnInit() {}

    onToggleMenuButtonClick(): void {
        this.toggleMenuButtonClicked.emit();
    }
}
