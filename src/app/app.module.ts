import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ROUTES } from "./constants/routes";
import { GameChordsComponent } from "./game-chords/game-chords.component";
import { GameNotesComponent } from "./game-notes/game-notes.component";
import { GameScalesComponent } from "./game-scales/game-scales.component";
import { LobbyHeaderComponent } from "./lobby/lobby-header/lobby-header.component";
import { LobbyComponent } from "./lobby/lobby.component";
import { RoomCarouselComponent } from "./room-carousel/room-carousel.component";
import { RoomHeaderComponent } from "./room/room-header/room-header.component";
import { SharedModule } from "./shared/shared.module";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
    declarations: [
        AppComponent,
        GameChordsComponent,
        GameNotesComponent,
        GameScalesComponent,
        LobbyHeaderComponent,
        LobbyComponent,
        RoomHeaderComponent,
        SidenavComponent,
        RoomCarouselComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule.forRoot(ROUTES),
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
