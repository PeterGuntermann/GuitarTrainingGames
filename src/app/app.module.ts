import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }        from './app.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { FretboardComponent }  from './fretboard/fretboard.component';
import { HeaderComponent }     from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentBoxComponent,
        HeaderComponent,
        FretboardComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
