import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ContentBoxComponent } from "./content-box/content-box.component";
import { FretboardComponent } from "./fretboard/fretboard.component";

@NgModule({
    declarations: [ContentBoxComponent, FretboardComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [ContentBoxComponent, FretboardComponent],
})
export class SharedModule {}
