import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsComponent } from './views/docs/docs.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/navbar/nav/nav.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { CodeblockComponent } from './components/codeblock/codeblock.component';
import { PlayerComponent } from './views/docs/player/player.component';
import { RippleDirective } from './shared/directives/ripple.directive';
import { TitleComponent } from './shared/title/title.component';
import { CodeSectionComponent } from './components/code-section/code-section.component';
import { ButtonComponent } from './shared/button/button.component';
import { IconComponent } from './shared/icon/icon.component';
import { CallbacksComponent } from './views/docs/callbacks/callbacks.component';
import { CharacterComponent } from './views/docs/character/character.component';
import { EventsComponent } from './views/docs/events/events.component';
import { MainComponent } from './views/docs/main/main.component';
import { NuicallbacksComponent } from './views/docs/nuicallbacks/nuicallbacks.component';
import { UtilsComponent } from './views/docs/utils/utils.component';
import { InputComponent } from './shared/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    NavComponent,
    ContainerComponent,
    CodeblockComponent,
    PlayerComponent,
    RippleDirective,
    TitleComponent,
    CodeSectionComponent,
    ButtonComponent,
    IconComponent,
    CallbacksComponent,
    CharacterComponent,
    EventsComponent,
    MainComponent,
    NuicallbacksComponent,
    UtilsComponent,
    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
