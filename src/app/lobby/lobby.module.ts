import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { LobbyHeaderComponent } from "./lobby-header/lobby-header.component";
import { LobbyLayoutComponent } from "./lobby-layout/lobby-layout.component";

@NgModule({
    declarations: [LobbyHeaderComponent, LobbyLayoutComponent],
    imports: [CommonModule, FontAwesomeModule, SharedModule],
    exports: [LobbyLayoutComponent],
})
export class LobbyModule {}
