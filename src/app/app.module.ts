import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }        from './app.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { HeaderComponent }     from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentBoxComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
