import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Apropos } from './pages/apropos/apropos';
import { Solutions } from './pages/solutions/solutions';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: Contact },
  { path: 'apropos', component: Apropos },
  { path: 'solutions', component: Solutions },
  { path: '**', redirectTo: '' }
];
