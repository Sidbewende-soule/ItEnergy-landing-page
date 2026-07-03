import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Apropos } from './pages/apropos/apropos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: Contact },
  { path: 'apropos', component: Apropos },
  { path: '**', redirectTo: '' }
];
