import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-feedback",
    templateUrl: "./feedback.component.html",
    styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ["", Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ["", Validators.required],
        });
    }
}
