import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { LobbyHeaderComponent } from "./lobby-header/lobby-header.component";
import { LobbyLayoutComponent } from "./lobby-layout/lobby-layout.component";

@NgModule({
    declarations: [LobbyHeaderComponent, LobbyLayoutComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
    ],
    exports: [LobbyLayoutComponent],
})
export class LobbyModule {}
