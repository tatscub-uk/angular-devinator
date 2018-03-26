import { Routes , RouterModule} from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RuneSpreadComponent } from './rune-spread/rune-spread.component';
import { OghamSpreadComponent} from './ogham-spread/ogham-spread.component';
import { TarrotSpreadComponent } from './tarrot-spread/tarrot-spread.component';
import { IchingSpreadComponent } from './iching-spread/iching-spread.component';

// Route config let's you map routes to components
const routes: Routes = [
    // map /landing to landing component
    {
      path: 'landing',
      component: LandingComponent,
    },
    // map/runes to RuneSpreadComponent componnent
    {
       path: 'runes',
       component: RuneSpreadComponent,
    },
    // map /ogham to oghamSpreadComponent
    {
      path: 'ogham',
      component: OghamSpreadComponent,
    },
    // map /tarrot to tarrotSpreadComponent
    {
      path: 'tarrot',
      component: TarrotSpreadComponent,
    },
    // map /ichhing to ichingSpreadComponnent
    {
      path: 'iching',
      component: IchingSpreadComponent,
    },
    // map '/' to '/landing' as default route
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
      },

];

export const appRouterModule = RouterModule.forRoot(routes);
