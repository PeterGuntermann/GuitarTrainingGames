import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map } from "rxjs/operators";

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

    constructor(private _formBuilder: FormBuilder, private _http: HttpClient) {}

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
        const mailApi = "https://mailthis.to/pgu";
        // TODO: 03.03.2021 Move to a new service
        this._http
            .post(mailApi, formData, { responseType: "text" })
            .pipe(
                map(
                    response => {
                        if (response) return response;
                    },
                    (error: any) => {
                        return error;
                    }
                )
            )
            .subscribe(
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
