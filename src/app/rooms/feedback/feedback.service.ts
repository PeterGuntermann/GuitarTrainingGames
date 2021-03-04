import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class FeedbackService {
    readonly MAIL_API = "https://mailthis.to/pgu";

    constructor(private _http: HttpClient) {}

    // TODO: 04.03.2021 Proper typing
    public sendFeedback(formData: any): Observable<string> {
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
}
