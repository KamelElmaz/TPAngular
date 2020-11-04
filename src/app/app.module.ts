import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwitchComponent } from './switch/switch.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import {JuvejerseyModule} from './juvejersey/juvejersey.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarousselComponent,
    KeyboardComponent,
    PlayersComponent,
    PlayerComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    JuvejerseyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
