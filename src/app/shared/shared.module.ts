import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ContentBoxComponent } from "./content-box/content-box.component";

@NgModule({
    declarations: [ContentBoxComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [ContentBoxComponent],
})
export class SharedModule {}
