import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LobbyLayoutComponent } from "./lobby/lobby-layout/lobby-layout.component";
import { LobbyModule } from "./lobby/lobby.module";
import { RoomLayoutComponent } from "./room/room-layout/room-layout.component";
import { RoomModule } from "./room/room.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
    { path: "lobby", component: LobbyLayoutComponent },
    { path: "room", component: RoomLayoutComponent },
    { path: "", redirectTo: "/lobby", pathMatch: "full" },
    { path: "**", component: LobbyLayoutComponent },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LobbyModule,
        RoomModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
