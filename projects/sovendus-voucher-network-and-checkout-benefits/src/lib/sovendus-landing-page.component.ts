import { Component } from '@angular/core';

@Component({
  selector: 'app-sovendus-landing-page',
  standalone: true,
  template: '',
  imports: [],
})
export class SovendusLandingPageComponent {
  ngOnInit() {
    if (
      ['CH', undefined].includes(document.documentElement.lang.split('-')[1])
    ) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://api.sovendus.com/js/landing.js';
      document.body.appendChild(script);
    }
  }
}
