import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  services = [
    {
      title: 'Gestion de réseaux informatique',
      description: 'Nous assurons la conception, l\'installation et la maintenance de votre infrastructure réseau pour garantir performance et sécurité.',
      icon: 'assets/icons/network.svg' // Placeholder, will style with CSS if missing
    },
    {
      title: 'Fournitures de matériels informatiques',
      description: 'Nous fournissons du matériel informatique de haute qualité, adapté aux besoins spécifiques de votre entreprise.',
      icon: 'assets/icons/hardware.svg'
    },
    {
      title: 'Energie Solaire',
      description: 'Solutions d\'énergie solaire durables pour réduire vos coûts énergétiques et votre empreinte carbone.',
      icon: 'assets/icons/solar.svg'
    }
  ];
}
