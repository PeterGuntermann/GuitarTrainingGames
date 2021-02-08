import { Injectable } from "@angular/core";
import {
    faEllipsisH,
    faEllipsisV,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

@Injectable({
    providedIn: "root",
})
export class IconService {
    get dotsVertical() {
        return faEllipsisV;
    }
    get dotsHorizontal() {
        return faEllipsisH;
    }
    get infoCircle() {
        return faInfoCircle;
    }
}
