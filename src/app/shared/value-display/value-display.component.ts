import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-value-display",
    template: `
        <div class="label" [innerHTML]="label"></div>
        <div class="value" [innerHTML]="value"></div>
    `,
    styleUrls: ["./value-display.component.scss"],
})
export class ValueDisplayComponent implements OnInit {
    @Input() label: string = "";
    @Input() value: string = "";

    ngOnInit(): void {}
}
