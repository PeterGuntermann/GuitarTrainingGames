import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from "./app.component";
import { ROUTES } from "./constants/routes";
import { GameChordsComponent } from "./game-chords/game-chords.component";
import { GameNotesComponent } from "./game-notes/game-notes.component";
import { GameScalesComponent } from "./game-scales/game-scales.component";
import { LobbyHeaderComponent } from "./lobby/lobby-header/lobby-header.component";
import { LobbyComponent } from "./lobby/lobby.component";
import { RoomHeaderComponent } from "./room/room-header/room-header.component";
import { RoomLayoutComponent } from "./room/room-layout/room-layout.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        GameChordsComponent,
        GameNotesComponent,
        GameScalesComponent,
        LobbyHeaderComponent,
        LobbyComponent,
        RoomHeaderComponent,
        RoomLayoutComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FontAwesomeModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        RouterModule.forRoot(ROUTES),
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
