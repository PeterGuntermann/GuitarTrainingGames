import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LobbyHeaderComponent } from "./header/lobby-header.component";
import { LobbyLayoutComponent } from "./layout/lobby-layout.component";

@NgModule({
    declarations: [LobbyHeaderComponent, LobbyLayoutComponent],
    imports: [CommonModule, SharedModule],
    exports: [LobbyLayoutComponent],
})
export class LobbyModule {}
