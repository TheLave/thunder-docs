import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DocsComponent } from './views/docs/docs.component';
import { AboutComponent } from './views/about/about.component';
import { PlayerComponent } from './views/docs/player/player.component';
import { CallbacksComponent } from './views/docs/callbacks/callbacks.component';
import { CharacterComponent } from './views/docs/character/character.component';
import { EventsComponent } from './views/docs/events/events.component';
import { MainComponent } from './views/docs/main/main.component';
import { NuicallbacksComponent } from './views/docs/nuicallbacks/nuicallbacks.component';
import { UtilsComponent } from './views/docs/utils/utils.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      {
        path: 'callbacks',
        component: CallbacksComponent,
      },
      {
        path: 'character',
        component: CharacterComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'nuicallbacks',
        component: NuicallbacksComponent,
      },
      {
        path: 'player',
        component: PlayerComponent,
      },
      {
        path: 'utils',
        component: UtilsComponent,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
