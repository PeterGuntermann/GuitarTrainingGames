import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ROUTES } from "./constants/routes";
import { LobbyHeaderComponent } from "./lobby/lobby-header/lobby-header.component";
import { LobbyComponent } from "./lobby/lobby.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { RoomCarouselComponent } from "./room-carousel/room-carousel.component";
import { RoomHeaderComponent } from "./room-header/room-header.component";
import { AboutTheAppComponent } from "./rooms/about-the-app/about-the-app.component";
import { FeedbackComponent } from "./rooms/feedback/feedback.component";
import { GameChordPokerComponent } from "./rooms/game-chord-poker/game-chord-poker.component";
import { GameNoteRouletteComponent } from "./rooms/game-note-roulette/game-note-roulette.component";
import { GameScaleMachineComponent } from "./rooms/game-scale-machine/game-scale-machine.component";
import { ReleaseHistoryComponent } from "./rooms/release-history/release-history.component";
import { SettingsComponent } from "./rooms/settings/settings.component";
import { SharedModule } from "./shared/shared.module";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
    declarations: [
        AppComponent,
        GameChordPokerComponent,
        GameNoteRouletteComponent,
        GameScaleMachineComponent,
        LobbyHeaderComponent,
        LobbyComponent,
        RoomHeaderComponent,
        SidenavComponent,
        RoomCarouselComponent,
        ReleaseHistoryComponent,
        AboutTheAppComponent,
        SettingsComponent,
        FeedbackComponent,
        PlaygroundComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatStepperModule,
        MatToolbarModule,
        RouterModule.forRoot(ROUTES),
        SharedModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
