import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-roll-button",
    templateUrl: "./roll-button.component.html",
    styleUrls: ["./roll-button.component.scss"],
})
export class RollButtonComponent implements OnInit {
    @Output() click = new EventEmitter<MouseEvent>();

    ngOnInit(): void {}
}
