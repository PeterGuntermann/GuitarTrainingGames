import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class FeedbackService {
    readonly MAIL_API = "https://mailthis.to/pgu";
    readonly CONFIRM_URL = "https://mailthis.to/confirm";

    constructor(private _http: HttpClient) {}

    public sendFeedback(formData: {
        feedbackText: string;
        authorName: string;
    }): Observable<string> {
        if (formData.authorName === "") formData.authorName = "anonymous";

        return this._http.post(this.MAIL_API, formData, { responseType: "text" }).pipe(
            map(
                response => {
                    if (response) return response;
                },
                (error: any) => {
                    return error;
                }
            ),
            take(1)
        );
    }

    public handleNext(response: string) {
        location.href = this.CONFIRM_URL;
        console.log(response);
    }

    public handleError(error: any) {
        console.warn(error.responseText);
        console.log({ error });
    }
}
