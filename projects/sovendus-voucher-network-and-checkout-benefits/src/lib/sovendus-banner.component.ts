import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sovendus-banner',
  standalone: true,
  imports: [],
  templateUrl: './sovendus-banner.component.html',
})
export class SovendusBannerComponent {
  @Input() trafficSourceNumber!: number;
  @Input() trafficMediumNumber!: number;
  @Input() sessionId: string | undefined;
  @Input() timestamp: number | undefined;
  @Input() orderId: string | undefined;
  @Input() orderValue: number | undefined;
  @Input() orderCurrency: string | undefined;
  @Input() usedCouponCode: string | undefined;
  @Input() consumerSalutation: string | undefined;
  @Input() consumerFirstName: string | undefined;
  @Input() consumerLastName: string | undefined;
  @Input() consumerEmail: string | undefined;
  @Input() consumerPhone: string | undefined;
  @Input() consumerStreet: string | undefined;
  @Input() consumerStreetNumber: string | undefined;
  @Input() consumerCity: string | undefined;
  @Input() consumerCountry: string | undefined;
  @Input() consumerZipcode: string | undefined;
  @Input() consumerYearOfBirth: number | undefined;
  @Input() consumerDateOfBirth: string | undefined;

  @Output() sovDivId = 0;

  ngOnInit() {
    window.sovDivId = 1 + (window.sovDivId || 0);
    this.sovDivId = window.sovDivId;
    window.sovIframes = window.sovIframes || [];
    window.sovIframes.push({
      trafficSourceNumber: this.trafficSourceNumber,
      trafficMediumNumber: this.trafficMediumNumber,
      sessionId: this.sessionId,
      timestamp: this.timestamp,
      orderId: this.orderId,
      orderValue: this.orderValue,
      orderCurrency: this.orderCurrency,
      usedCouponCode: this.usedCouponCode,
      iframeContainerId: `sovendus-integration-container-${this.sovDivId}`,
      integrationType: 'angular-1.0.7',
    });
    window.sovConsumer = {
      consumerSalutation: this.consumerSalutation,
      consumerFirstName: this.consumerFirstName,
      consumerLastName: this.consumerLastName,
      consumerEmail: this.consumerEmail,
      consumerPhone: this.consumerPhone,
      consumerStreet: this.consumerStreet,
      consumerStreetNumber: this.consumerStreetNumber,
      consumerCity: this.consumerCity,
      consumerCountry: this.consumerCountry,
      consumerZipcode: this.consumerZipcode,
      consumerYearOfBirth: this.consumerYearOfBirth,
      consumerDateOfBirth: this.consumerDateOfBirth,
    };
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://api.sovendus.com/sovabo/common/js/flexibleIframe.js';
    script.type = 'text/javascript';
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
  }
}

interface SovWindow extends Window {
  sovIframes: any;
  sovConsumer: any;
  sovDivId: number;
}

declare const window: SovWindow;
