import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FretboardComponent } from "./fretboard/fretboard.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, FretboardComponent],
    imports: [BrowserModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
