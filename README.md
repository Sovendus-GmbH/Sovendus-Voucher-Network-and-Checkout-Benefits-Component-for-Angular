# Sovendus Voucher Network & Checkout Benefits Component for Angular

> [!INFO]
> **Disclaimer**
> This plugin is released as open source under the GPL v3 license. We welcome bug reports and pull requests from the community.
> However, please note that the plugin is provided "as is" without any warranties or guarantees.
> It may not be compatible with all other plugins and could potentially cause issues with your store.
> We strongly recommend that you test the plugin thoroughly in a staging environment before deploying it to a live site.
> Furthermore, we do not promise future support or updates and reserve the right to discontinue support for the plugin at any time.

## 📦 Install through npmjs

Execute the following command to install it through npm:

```bash
npm install --save sovendus-voucher-network-and-checkout-benefits-angular
```

## 🔗 Integrate into your Angular app

You can then use the component as with the following example on your order success / thank you page:

[Click here for detailed information on the parameters and which ones are required.](https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Parameter)

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
  [consumerPhone]="'+49155123456789'"
  [consumerStreet]="'Street Name'"
  [consumerStreetNumber]="'2/4'"
  [consumerCity]="'ExampleCity'"
  [consumerCountry]="'DE'"
  [consumerZipcode]="'45564'"
  [consumerYearOfBirth]="1991"
  [consumerDateOfBirth]="'01.12.2020'"
/>
```

## 🇨🇭 Additional steps for Switzerland

For Switzerland it is also required to add the following component on the home page / page where users will land coming from the Sovendus Voucher Network:

```angular
<app-sovendus-landing-page />
```
