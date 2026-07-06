import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// ──────────────────────────────────────────────────────────────────────────────
// CONFIGURATION — Remplacez l'URL ci-dessous par votre endpoint Formspree.
// Étapes:
//  1. Créez un compte gratuit sur https://formspree.io
//  2. Créez un nouveau formulaire pointant vers: itenergy@itenergybf.com
//  3. Copiez l'URL du formulaire (ex: https://formspree.io/f/xyzabcde)
//  4. Collez-la ici à la place de VOTRE_ID_FORMSPREE
// ──────────────────────────────────────────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/VOTRE_ID_FORMSPREE';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // Données du formulaire
  formData = {
    name: '',
    email: '',
    message: '',
  };

  // États de l'envoi
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);
  errorMessage = signal('');

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.isSubmitting()) return;

    // Validation basique
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    const payload = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    };

    this.http.post(FORMSPREE_URL, payload).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        // Réinitialiser le formulaire après succès
        this.formData = { name: '', email: '', message: '' };
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.submitError.set(true);
        this.errorMessage.set(
          err?.error?.error || 'Une erreur est survenue. Veuillez réessayer.'
        );
      },
    });
  }
}
