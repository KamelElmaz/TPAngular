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
import { JuvejerseyComponent } from './juvejersey/juvejersey.component';
import { FlockingComponent } from './juvejersey/flocking/flocking.component';
import { BasketComponent } from './juvejersey/basket/basket.component';
import { ImageComponent } from './juvejersey/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarousselComponent,
    KeyboardComponent,
    PlayersComponent,
    PlayerComponent,
    PlayerFormComponent,
    JuvejerseyComponent,
    FlockingComponent,
    BasketComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
