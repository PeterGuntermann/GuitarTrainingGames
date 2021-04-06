import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CircleOfFifthsComponent } from "./circle-of-fifths/circle-of-fifths.component";
import { FretboardComponent } from "./fretboard/fretboard.component";
import { HelpDialogComponent } from "./help-dialog/help-dialog.component";
import { RollButtonComponent } from "./roll-button/roll-button.component";
import { ValueDisplayComponent } from "./value-display/value-display.component";

const components = [
    CircleOfFifthsComponent,
    FretboardComponent,
    HelpDialogComponent,
    RollButtonComponent,
    ValueDisplayComponent,
];

@NgModule({
    declarations: [components],
    imports: [CommonModule, FontAwesomeModule, MatIconModule, MatButtonModule],
    exports: components,
})
export class SharedModule {}
