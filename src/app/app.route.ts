import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';


// routes
export const route: Routes=[
  { path: '',component: HomepageComponent },
  { path: 'login',component: LoginComponent },

];
