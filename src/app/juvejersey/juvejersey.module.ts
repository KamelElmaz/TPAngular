import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlockComponent } from './flock/flock.component';
import { TotalComponent } from './total/total.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';



@NgModule({
    declarations: [FlockComponent, TotalComponent, GalleryComponent, MainComponent],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule
    ]
})
export class JuvejerseyModule { }
