import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FretboardComponent } from "./fretboard/fretboard.component";
import { LobbyModule } from "./lobby/lobby.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent, FretboardComponent],
    imports: [BrowserModule, LobbyModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
