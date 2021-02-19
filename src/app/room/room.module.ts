import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SharedModule } from "../shared/shared.module";
import { RoomHeaderComponent } from "./room-header/room-header.component";
import { RoomLayoutComponent } from "./room-layout/room-layout.component";

@NgModule({
    declarations: [RoomLayoutComponent, RoomHeaderComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [RoomLayoutComponent, RoomHeaderComponent],
})
export class RoomModule {}
