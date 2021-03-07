import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ContentBoxComponent } from "./content-box/content-box.component";
import { FretboardComponent } from "./fretboard/fretboard.component";
import { RollButtonComponent } from "./roll-button/roll-button.component";

const components = [ContentBoxComponent, FretboardComponent, RollButtonComponent];

@NgModule({
    declarations: components,
    imports: [CommonModule, FontAwesomeModule, MatIconModule, MatButtonModule],
    exports: components,
})
export class SharedModule {}
