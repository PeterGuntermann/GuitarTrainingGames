import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { RoomHeaderComponent } from "./room-header/room-header.component";
import { RoomLayoutComponent } from "./room-layout/room-layout.component";

@NgModule({
    declarations: [RoomLayoutComponent, RoomHeaderComponent],
    imports: [CommonModule, SharedModule],
    exports: [RoomLayoutComponent],
})
export class RoomModule {}
