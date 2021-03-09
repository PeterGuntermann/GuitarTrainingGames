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

    get isSubmitButtonDisabled(): boolean {
        return this.formGroup.value?.feedbackText === "";
    }

    constructor(
        private _formBuilder: FormBuilder,
        private _feedbackService: FeedbackService
    ) {}

    ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
            feedbackText: ["", Validators.required],
            authorName: [""],
        });
    }

    onSubmit(formData) {
        this._feedbackService
            .sendFeedback(formData)
            .subscribe(
                this._feedbackService.handleNext,
                this._feedbackService.handleError
            );
    }
}
