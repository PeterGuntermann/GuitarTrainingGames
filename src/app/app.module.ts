import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { ContentBoxComponent } from "./content-box/content-box.component";
import { FretboardComponent } from "./fretboard/fretboard.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        ContentBoxComponent,
        HeaderComponent,
        FretboardComponent,
    ],
    imports: [BrowserModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
