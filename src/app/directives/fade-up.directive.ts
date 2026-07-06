import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

/**
 * FadeUpDirective
 * ---------------
 * Applique un effet fade-up (translateY + opacity) lorsque l'élément
 * entre dans le viewport grâce à l'IntersectionObserver API.
 *
 * Usage :
 *   <div appFadeUp>…</div>
 *   <div appFadeUp [fadeDelay]="200">…</div>   ← délai en ms
 *   <div appFadeUp [fadeThreshold]="0.2">…</div> ← seuil de visibilité (0–1)
 */
@Directive({
  selector: '[appFadeUp]',
  standalone: true,
})
export class FadeUpDirective implements OnInit, OnDestroy {
  /** Délai avant le déclenchement de l'animation (ms). Utile pour les cascades. */
  @Input() fadeDelay: number = 0;

  /** Fraction de l'élément visible avant de déclencher l'animation (0 à 1). */
  @Input() fadeThreshold: number = 0.15;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Respecte prefers-reduced-motion pour l'accessibilité
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      // Pas d'animation : rendre l'élément visible immédiatement
      this.renderer.addClass(this.el.nativeElement, 'fade-up--visible');
      return;
    }

    // Classe initiale : élément invisible, décalé vers le bas
    this.renderer.addClass(this.el.nativeElement, 'fade-up');

    // Applique le délai personnalisé via style inline
    if (this.fadeDelay > 0) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition-delay',
        `${this.fadeDelay}ms`
      );
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(
              this.el.nativeElement,
              'fade-up--visible'
            );
            // Déconnecte l'observer une fois l'animation déclenchée (perf)
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: this.fadeThreshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
