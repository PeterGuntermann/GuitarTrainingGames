import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ROUTES } from "./constants/routes";
import { GameChordsComponent } from "./game-chords/game-chords.component";
import { GameNotesComponent } from "./game-notes/game-notes.component";
import { GameScalesComponent } from "./game-scales/game-scales.component";
import { LobbyModule } from "./lobby/lobby.module";
import { RoomModule } from "./room/room.module";

@NgModule({
    declarations: [
        AppComponent,
        GameNotesComponent,
        GameChordsComponent,
        GameScalesComponent,
    ],
    imports: [
        BrowserModule,
        LobbyModule,
        RoomModule,
        RouterModule.forRoot(ROUTES),
        BrowserAnimationsModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
