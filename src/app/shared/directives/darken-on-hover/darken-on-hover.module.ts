import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DarkOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    declarations: [
        DarkOnHoverDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DarkOnHoverDirective
    ]
})
export class DarkOnHoverModule{}