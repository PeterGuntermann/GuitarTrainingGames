import { Component, Input, OnInit } from "@angular/core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-content-box",
    templateUrl: "./content-box.component.html",
    styleUrls: ["./content-box.component.scss"],
})
export class ContentBoxComponent implements OnInit {
    readonly faInfoCircle = faInfoCircle;

    @Input() label: string;
    @Input() value: string;

    ngOnInit() {}
}
