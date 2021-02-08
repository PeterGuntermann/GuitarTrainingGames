import { Component, Input, OnInit } from "@angular/core";
import { IconService } from "../icon-service/icon.service";

@Component({
    selector: "shared-content-box",
    templateUrl: "./content-box.component.html",
    styleUrls: ["./content-box.component.scss"],
})
export class ContentBoxComponent implements OnInit {
    @Input() label: string;
    @Input() value: string;

    ngOnInit() {}

    constructor(public readonly icon: IconService) {}
}
