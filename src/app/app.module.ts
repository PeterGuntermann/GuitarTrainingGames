import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FretboardComponent } from "./fretboard/fretboard.component";
import { LobbyLayoutComponent } from "./lobby/layout/lobby-layout.component";
import { LobbyModule } from "./lobby/lobby.module";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
    { path: "lobby", component: LobbyLayoutComponent },
    { path: "modes", component: LobbyLayoutComponent }, // TODO: 07.02.2021 Create component
    { path: "notes", component: LobbyLayoutComponent }, // TODO: 07.02.2021 Create component
    { path: "chords", component: LobbyLayoutComponent }, // TODO: 07.02.2021 Create component
    { path: "", redirectTo: "/lobby", pathMatch: "full" },
    { path: "**", component: LobbyLayoutComponent },
];

@NgModule({
    declarations: [AppComponent, FretboardComponent],
    imports: [
        BrowserModule,
        LobbyModule,
        RouterModule.forRoot(routes),
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
