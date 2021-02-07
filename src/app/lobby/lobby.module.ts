import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LobbyHeaderComponent } from "./header/lobby-header.component";
import { LobbyLayoutComponent } from "./layout/lobby-layout.component";

@NgModule({
    declarations: [LobbyHeaderComponent, LobbyLayoutComponent],
    imports: [CommonModule],
    exports: [LobbyHeaderComponent, LobbyLayoutComponent],
})
export class LobbyModule {}
