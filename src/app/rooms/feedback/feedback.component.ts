import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FeedbackService } from "./feedback.service";

@Component({
    selector: "app-feedback",
    templateUrl: "./feedback.component.html",
    styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements OnInit {
    formGroup: FormGroup;

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _feedbackService: FeedbackService
    ) {}

    ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
            feedbackText: ["", Validators.required],
        });
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ["", Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ["", Validators.required],
        });
    }

    onSubmit(formData) {
        this._feedbackService.sendFeedback(formData).subscribe(
            response => {
                location.href = "https://mailthis.to/confirm";
                console.log(response);
            },
            error => {
                console.warn(error.responseText);
                console.log({ error });
            }
        );
    }
}
