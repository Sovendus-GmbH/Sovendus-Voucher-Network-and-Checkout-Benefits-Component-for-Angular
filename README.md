# Sovendus Voucher Network & Checkout Benefits Component for Angular

## Integrate into your Angular app
1. Download the Sovendus component from [here](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-Voucher-Network-and-Checkout-Benefits-Component-for-Angular/main/releases/sovendus-voucher-network-checkout-benefits-angular-latest.zip) and unpack it into your angular project / app folder
2. You can then use the component like with the following example:
    ```html
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