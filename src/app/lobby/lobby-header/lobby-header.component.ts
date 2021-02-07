import { Component, Input, OnInit } from "@angular/core";
import { faEllipsisH, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

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

    ngOnInit() {}

    toogleMenu(): void {
        this.isMenuOpened = !this.isMenuOpened;
    }
}
