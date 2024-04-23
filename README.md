# Sovendus Voucher Network & Checkout Benefits Component for Angular

## Install through npmjs

Execute the following command to install it through npm:

```bash
npm install --save sovendus-voucher-network-and-checkout-benefits-angular
```

## Integrate into your Angular app

You can then use the component as with the following example on your order success / thank you page:

```angular
<app-sovendus-banner
  [trafficSourceNumber]="YOUR_TRAFFIC_SOURCE_NUMBER"
  [trafficMediumNumber]="YOUR_TRAFFIC_MEDIUM_NUMBER"
  [sessionId]="'kjkjkjkljkldfghjkl'"
  [timestamp]="1705421915"
  [orderId]="'order-12345'"
  [orderValue]="15.4"
  [orderCurrency]="'EUR'"
  [usedCouponCode]="'coupon-code-from-order'"
  [consumerSalutation]="'Mrs.'"
  [consumerFirstName]="'John'"
  [consumerLastName]="'Smith'"
  [consumerEmail]="'test@example.te'"
  [consumerStreet]="'Street Name'"
  [consumerStreetNumber]="'2/4'"
  [consumerCity]="'ExampleCity'"
  [consumerCountry]="'DE'"
  [consumerZipcode]="'45564'"
  [consumerYearOfBirth]="1991"
/>
```

## Additional steps for Switzerland

For Switzerland it is also required to add the following component on the home page / page where users will land coming from the Sovendus Voucher Network

```angular
<app-sovendus-landing-page />
```
