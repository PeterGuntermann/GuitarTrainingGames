import { Component, Input, OnInit } from "@angular/core";
import { faEllipsisH, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { IconService } from "../../shared/icon-service/icon.service";

@Component({
    selector: "lobby-header",
    templateUrl: "./lobby-header.component.html",
    styleUrls: ["./lobby-header.component.scss"],
})
export class LobbyHeaderComponent implements OnInit {
    readonly faEllipsisV = faEllipsisV;
    readonly faEllipsisH = faEllipsisH;

    public isMenuOpened = false;

    @Input() title: string;

    constructor(public readonly icon: IconService) {}

    ngOnInit() {}

    toogleMenu(): void {
        this.isMenuOpened = !this.isMenuOpened;
    }
}
