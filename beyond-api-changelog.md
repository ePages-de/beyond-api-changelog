# Beyond API Changelog

## 2020-03-12

-XX:InitialHeapSize=527028224 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /products/{productId}/images Add product image  
    Parameter

        fileName Notes The file name of the image. Should exist one for each image being uploaded. change into The file name of the image. Must be provided for each image to be uploaded.
        Content-Type Notes The content type for this request should be `multipart/form-data`. change into The content type of the request. Must be `multipart/form-data`.

## 2020-03-09

### What's New
---
* `POST` /products/{productId}/variation-attributes/{variationAttributeId} Update the variation attribute properties


## 2020-03-04

### What's New
---
* `POST` /products/{productId}/multiple-images Add multiple product images
* `POST` /products/{productId}/variations/{variationId}/multiple-images Add variation images


## 2020-03-02

### What's Changed
---
* `GET` /carts/{cartId} Show cart details  
    Return Type

        Add couponLineItem //The object which contains discount details.

## 2020-02-25

### What's New
---
* `GET` /product-view/products/{productId}/videos List product videos
* `GET` /product-view/products/{productId}/videos/{videoId} Show product video details


## 2020-02-21

### What's Deprecated
---
* `GET` /scopes List scopes

## 2020-02-14

### What's Deprecated
---
* `POST` /orders/{orderId}/send-invoice (Deprecated) Send invoice

## 2020-02-12

### What's Changed
---
* `GET` /products/{productId}/images/{imageId} Show product image details  
    Return Type

        Add width //The width of the product image.
        Add height //The height of the product image.

## 2020-02-11

### What's Changed
---
* `GET` /product-view/products/{productId}/images/{imageId} Show product image details  
    Return Type

        Delete position //The sorting position of the product image in relation to other product images.

## 2020-02-07

### What's New
---
* `PUT` /products/{productId}/variations/{variationId}/images Sort variation images

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add canceled //Filters by cancelation status of the order. Can be `true` or `false`.

## 2020-02-06

### What's New
---
* `GET` /orders/search/find-used-shipping-countries Find used shipping countries


## 2020-02-04

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        customerId Notes Filters by the Id of the customer that placed the order. change into Filters by the ID of the customer that placed the order.
        invoiceCreated Notes Filters by whether an invoice was already created or not yet created for the order. Can be `true` or `false`. change into Filters by whether or not an invoice was created for the order. Can be `true` or `false`.
        paymentStatus Notes Filters by the payment status of an order. change into Filters by the payment status of the order.
        shippingStatus Notes Filters by the shipping status of an order. change into Filters by the shipping status of the order.
        testOrder Notes Filters by whether order is a test order. Can be `true` or `false`. change into Filters by whether or not the order is a test order. Can be `true` or `false`.
* `GET` /product-view/categories/{categoryId} Show category details  
    Return Type

        Add _indexedAt //The time of storing this document in the search index.
* `GET` /product-view/products/{productId} Show variation product details  
    Return Type

        Add _indexedAt //The time of storing this document in the search index.
* `GET` /product-view/categories/search/find-by-label Find product category by label  
    Return Type

        Add _indexedAt //The time of storing this document in the search index.
* `GET` /product-view/products/{productId}/images/{imageId} Show product image details  
    Return Type

        Add _indexedAt //The time of storing this document in the search index.

## 2020-01-29

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add testOrder //Filters by whether order is a test order. Can be `true` or `false`.

## 2020-01-28

### What's New
---
* `GET` /product-view/products/80a620ec-e9db-4663-95e9-e648a0a041ff/cross-sells List product cross-sells

## 2020-01-27

### What's New
---
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign


## 2020-01-24

### What's New
---
* `GET` /product-view/products/f7dbc820-6868-4e43-af52-4861b36f3b2b/images List product images
* `GET` /product-view/products/a53464f6-8b1c-46a6-babc-784713693645/images/9d5aac0b-9c79-4402-b4be-f079cbad85f2 Show product image details


### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add invoiceCreated //Filters by whether an invoice was already created or not yet created for the order. Can be `true` or `false`.

## 2020-01-23

### What's New
---
* `GET` /coupon-campaigns/{couponCampaignId}/coupons List coupon codes
* `POST` /coupon-campaigns/{couponCampaignId}/coupons Create coupon code
* `DELETE` /coupon-campaigns/{couponCampaignId} Delete coupon campaign


### What's Changed
---
* `POST` /orders/{orderId}/processes/shippings Create shipping process  
    Parameter

        Delete .createDeliveryNote //Deprecated. Use `createPackingSlip` instead. Indicates if a packing slip pdf will be created as a part of the shipping process.

## 2020-01-15

### What's New
---
* `GET` /coupon-campaigns/{couponCampaignId} Show details of coupon campaign
* `GET` /coupon-campaigns List coupon campaigns
* `PUT` /products/{productId}/variation-images-differentiator Assign a variation images differentiator


## 2020-01-14

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add billingAddress //Filter by a partial match with the `displayAddressLines` of the billing address of the order, e.g. the customer name.
        Delete customerName //The customer name of the order.
* `GET` /products/{productId}/variations/{variationId} Show variation details  
    Return Type

        Add refPrice //The reference price of a variation product's variation.

## 2020-01-13

### What's New
---
* `POST` /coupon-campaigns Create coupon campaign


### What's Changed
---
* `PATCH` /shop Update shop partially  
    Parameter

        Delete .closedShopMessage //(Deprecated) A message that is shown when the shop is closed by its owner.
* `GET` /shop Show shop details  
    Return Type

        Delete closedShopMessage //(Deprecated) A message that is shown when the shop is closed by its owner.

## 2020-01-09

### What's New
---
* `PUT` /products/{productId}/variations/{variationId}/default-image Assign variation image as default image


## 2020-01-07

### What's Changed
---
* `GET` /product-view/products/{productId} Show variation product details  
    Return Type

        Delete onSale //Indicates if the product is on offer. Can be `true` or `false`.
* `GET` /products/{productId}/variations/{variationId} Show variation details  
    Return Type

        Delete refPrice //The reference price of a variation product's variation.

## 2020-01-06

### What's Changed
---
* `POST` /products Create variation product  
    Parameter

        Delete .onSale //(Deprecated) Indicates if the product is on offer. Can be `true` or `false`.
* `GET` /products/{productId} Show variation product details  
    Return Type

        Delete onSale //(Deprecated) Indicates if the product is on offer. Can be `true` or `false`.
* `GET` /products/search/find-by-sku Find product by SKU  
    Return Type

        Delete onSale //(Deprecated) Indicates if the product is on offer. Can be `true` or `false`.

## 2019-12-19

### What's New
---
* `GET` /products/{productId}/cross-sells List product cross-sells
* `POST` /products/{productId}/cross-sells Create product cross-sell
* `GET` /products/{productId}/cross-sells/{crossSellId} Show product cross-sell details
* `PUT` /products/{productId}/cross-sells/{crossSellId} Modify product cross-sell
* `DELETE` /products/{productId}/cross-sells/{crossSellId} Delete product cross-sell
* `GET` /products/{productId}/variations/{variationId}/images List variation images
* `GET` /products/{productId}/variations/{variationId}/images/{imageId} Show variation image details

### What's Deprecated
---

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add customerEmail //Deprecated. Use `customerId` instead. The customer email address of the order.
        Add customerId //The id of the customer that placed the order.
        Add customerName //The customer name of the order.
        Add orderNumber //The order number.
        Add invoiceNumber //The invoice number for the order.
        Add paymentMethod //The payment method used for the order.
        Add shippingMethod //The shipping method used for the order.
        Add orderAmountMin //The minimum total amount of an order.
        Add orderAmountMax //The maximum total amount of an order.
        Add trackingCode //The tracking code of one of the shipments.
        Add productId //The immutable, unique identifier of the product contained in the order.
        Add shippingAddressCountry //The two-letter country code according to ISO 3166-1 of the shipping address, e.g. "US". Only officially assigned country codes.
        Add marketingChannel //The marketing channel for the order.
        Add marketingSubchannel //The marketing subchannel for the order.
        Add salesChannel //The sales channel for the order.
        Add createdAfter //The date/time of orders created after this timestamp. Expressed according to ISO 8601. Example&#58; `2019-11-29T11:32:00`.
        Add createdBefore //The date/time of orders created before this timestamp. Expressed according to ISO 8601. Example&#58; `2019-11-29T11:32:00`.
        Add paymentStatus //The shipping status of an order.
        Add shippingStatus //The shipping status of an order.
* `POST` /products/{productId}/images Add product image  
    Parameter

        Add .width //The width of the product image.
        Add .height //The height of the product image.
* `POST` /products/{productId}/variations/{variationId}/images Upload variation image  
    Parameter

        Add .width //The width of the variation image.
        Add .height //The height of the variation image.
* `POST` /shop/images Upload shop image  
    Parameter

        Add .width //The width of the image.
        Add .height //The height of the image.
* `GET` /shop/images/{imageId} Show shop image details  
    Return Type

        Add width //The width of the image.
        Add height //The height of the image.

## 2019-11-27

### What's New
---
* `DELETE` /products/{productId}/variations/{variationId}/images/{imageId} Delete variation image


## 2019-11-21

### What's New
---
* `POST` /products/{productId}/variations/{variationId}/images Upload variation image


## 2019-11-18

### What's Deprecated
---
* `GET` /product-settings Show product settings details
* `PATCH` /product-settings Update product settings


## 2019-11-14

### What's New
---
* `GET` /products/{productId}/videos List product videos
* `POST` /products/{productId}/videos Add product video
* `GET` /products/{productId}/videos/{videoId} Show product video details
* `PUT` /products/{productId}/videos/{videoId} Update product video
* `DELETE` /products/{productId}/videos/{videoId} Delete product video


## 2019-10-24

### What's New
---
* `DELETE` /customers/{id} Delete customer


## 2019-10-22

### What's New
---
* `PUT` /products/{productId}/images Sort product image


### What's Changed
---
* `GET` /products/{productId}/images/{imageId} Show product image details  
    Return Type

        Add position //The sorting position of the image in relation to other images.

## 2019-10-16

### What's New
---
* `POST` /orders/{id}/send-order-document Send order document


## 2019-10-14

### What's Changed
---
* `PUT` /order-settings Update order settings  
    Parameter

        Delete .invoiceCancellationNote //(Deprecated) Use `invoiceCancelationNote` instead.
    Return Type

        Delete invoiceCancellationNote //(Deprecated) Use `invoiceCancelationNote` instead.
* `GET` /order-settings List order settings  
    Return Type

        Delete invoiceCancellationNote //(Deprecated) Use `invoiceCancelationNote` instead.


## 2019-10-08

### What's Changed
---
* `PATCH` /shop/address Update address partially with tenant context  
    Return Type

        Add dependentLocality //Additional locality information such as a village or suburb name, giving a more specific location.
* `GET` /shop/address Show address details  
    Return Type

        Add dependentLocality //Additional locality information such as a village or suburb name, giving a more specific location.

## 2019-10-07

### What's Changed
---
* `GET` /orders/{order-id} Show order details  
    Return Type

        Add customerEmail //Email address of the registered customer.
* `POST` /users/verify-password Verify password  
    Request Parameter added

        Add userRole //The type of user. Must be one of [customer, merchant]


## 2019-09-17

### What's New
---
* `PUT` /carts/{cardId}/customer Assign a customer to the cart


## 2019-09-09

### What's New
---
* `PUT` /customers/{customerId} Update customer


### What's Changed
---
* `POST` /customers Create customer  
    Parameter

        Add .initialPassword //The customer password.
* `GET` /customers/{id} Show customer details  
    Return Type

        Delete createdAt //The date and time the customer was technically created in the system.


## 2019-09-04

### What's Changed
---
* `POST` /carts/{cart_id}/customer Register a customer during a purchase  
    Parameter

        Add .email //The customer email.

## 2019-09-03

### What's Changed
---
* `POST` /customers Create customer  
    Parameter

        Add .email //The unique customer email.
* `GET` /customers/{id} Show customer details  
    Return Type

        Add email //The unique customer email.


## 2019-08-28

### What's New
---
* `GET` /product-view/categories/{categoryId} Show category details

## 2019-08-26

### What's New
---
* `GET` /product-view/categories List categories


## 2019-08-20

### What's New
---
* `POST` /carts/{cart_id}/customer Register a customer during a purchase


## 2019-08-15


### What's Changed
---
* `GET` /order-settings List order settings  
    Return Type

        Add invoiceCancelationNote //The invoice cancelation note to be printed on invoice cancelation documents.
* `PUT` /order-settings Update order settings  
    Parameter

        Add .invoiceCancelationNote //The invoice cancelation note to be printed on invoice cancelation documents.
    Return Type

        Add invoiceCancelationNote //The invoice cancelation note to be printed on invoice cancelation documents.

## 2019-08-07

### What's New
---
* `GET` /orders/search/find-order-number-by-cart-id Show order number by cart ID


## 2019-08-01


### What's Changed
---
* `POST` /payments/{paymentId}/status Set payment status  
    Parameter

        Delete .amount //(Deprecated) Optional amount that has been paid so far. Defaults to the total amount. Only recommended for status transitions towards `PAID`, `UNDERPAID` or `OVERPAID`.

## 2019-07-31

### What's Changed
---
* `POST` /orders/{order-id}/processes/shippings Create shipping process  
    Parameter

        Add .createDeliveryNote //Indicates if the delivery note pdf will be created as part of shipping process.
        Delete .sendDeliveryNote //Indicates if the delivery note pdf is to be sent out to the customer.

## 2019-07-24

### What's Changed
---
* `POST` /orders/{order-id}/processes/shippings Create shipping process  
    Parameter

        Add .sendDeliveryNote //Indicates if the delivery note pdf is to be sent out to the customer.

## 2019-07-18

### What's Changed
---
* `GET` /product-view/products/{id} Show variation product details  
    Return Type

        Add shippingWeight //The weight of the product including packaging in g.
* `GET` /product-view/products/{productId} Show product details  
    Return Type

        Add shippingWeight //The weight of the product including packaging in g.

## 2019-07-11

### What's Changed
---
* `PUT` /order-settings Update order settings  
    Parameter

        Add .orderNumberConfiguration
        Add .invoiceNumberConfiguration
    Return Type

        Add orderNumberConfiguration
        Add invoiceNumberConfiguration
* `GET` /order-settings List order settings  
    Return Type

        Add orderNumberConfiguration
        Add invoiceNumberConfiguration

## 2019-06-28

### What's New
---
* `GET` /customers List customers


## 2019-06-26

### What's New
---
* `POST` /customers Create customer

### What's Deprecated
---

### What's Changed
---
* `PATCH` /categories/{id} Update category partially  
    Return Type

        Add _links //See [Hypermedia](https://beyond.docs.stoplight.io/about/hypermedia)
        Add query //The JSON query to retrieve products according to https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html[Elasticsearch Query DSL].
        Add name //The name of the product collection.
        Add _id //The immutable, unique identifier of the requested resource.
        Add label //The label of the product collection.
        Add type //The type of the product collection. Can be `SMART` or `MANUAL`.

## 2019-06-25

### What's New
---
* `GET` /customers/{id} Show customer details

### What's Deprecated
---

### What's Changed
---

## 2019-06-05

### What's New
---
* `GET` /products/search List product search meta-information

### What's Deprecated
---

### What's Changed
---

## 2019-05-23

### What's New
---
* `GET` /order-settings List order settings
* `PUT` /order-settings Update order settings

### What's Deprecated
---

### What's Changed
---
* `POST` /orders/{order-id}/create-invoice Create invoice  
    Parameter

        Add 
* `GET` /product-view/products/{id} Show variation product details  
    Return Type

        Add productIdentifiers
* `GET` /product-view/products/{productId} Show product details  
    Return Type

        Add productIdentifiers

## 2019-05-20

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /shop/images Upload shop image  
    Parameter

        Add fileName //The file name of the uploaded image.
        Add label //The label of the uploaded image.
        Add Content-Type //The content type of the image. Can be `image/png`, `image/jpeg`, or `image/gif`.

## 2019-05-15

### What's New
---

### What's Deprecated
---
* `GET` /configuration/invoice-number Show invoice number configuration details
* `PUT` /configuration/invoice-number Modify complete invoice number configuration
* `PATCH` /configuration/invoice-number Update invoice number configuration partially (JSON)
* `GET` /configuration/order-number Show order number configuration details
* `PUT` /configuration/order-number Modify complete order number configuration
* `PATCH` /configuration/order-number Update order number configuration partially (JSON)

### What's Changed
---

## 2019-05-14

### What's New
---
* `POST` /products/{productId}/variations/{variationId}/availability/adjust-available-stock Adjust stock level


## 2019-05-10

### What's Changed
---
* `PATCH` /products/{productId}/variations/{variationId} Update variation partially (json)  
    Return Type

        Add _embedded
* `GET` /products/{productId}/variations/{variationId} Show variation details  
    Return Type

        Add _embedded

## 2019-05-10

### What's New
---
* `GET` /products/{productId}/variations/{variationId}/availability Show product availability details
* `POST` /products/{productId}/variations/{variationId}/availability/disable-purchasability Disable purchasability
* `POST` /products/{productId}/variations/{variationId}/availability/enable-purchasability Enable purchasability

### What's Deprecated
---
* `POST` /blacklisted-clients Create a blacklisted-client
* `DELETE` /blacklisted-clients/{clientId} Delete a blacklisted-client

### What's Changed
---
* `POST` /orders/{order-id}/processes/returns Create return process  
    Parameter

        Add .sendMail //Indicates if a mail is to be sent out with this return process transition.
* `DELETE` /product-attribute-definitions/{productAttributeDefinitionKey} Delete a product attribute definition  
    Parameter

        force Notes (Optional) cascade delete attributes of this definition change into The (optional) cascade delete attributes of this definition.
* `GET` /shop/legal Show legal details  
    Return Type

        Add customLegalData //The custom legal date of the shop.
        Add bankData
* `PATCH` /shop/legal Update legal resource partially (JSON patch)  
    Return Type

        Add customLegalData //The custom legal date of the shop.
        Add bankData

## 2019-04-29

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /oauth/token Create a JSON Web Token with a refresh token  
    Parameter

        Add code //The authorization code. Required for the `authorization_code` grant type.
* `POST` /products/{productId}/images Add product image  
    Parameter

        Add fileName //The file name of the image.
        Add Content-Type //The content type of the image. Can be `image/png`, `image/jpeg`, or `image/gif`.

## 2019-04-26

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `GET` /payment-methods/{paymentMethodId} Show payment method details  
    Return Type

        Add workflow //The payment workflow for the current payment. Can be one of `PAYMENT_ON_SELECTION`, `EMBEDDED_ON_SELECTION`, `PAYMENT_ON_BUY`, or `EMBEDDED_ON_BUY`.

## 2019-04-24

### What's New
---
* `POST` /blacklisted-clients Create a blacklisted-client
* `DELETE` /blacklisted-clients/{clientId} Delete a blacklisted-client

### What's Deprecated
---

### What's Changed
---
* `GET` /products/{productId}/variations/{variationId} Show variation details  
    Return Type

        Add productIdentifiers //List of identifiers for variations of the product. Can be `EAN`, `UPC`, `ISBN`, or `MPN`
* `PATCH` /products/{productId}/variations/{variationId} Update variation partially (json)  
    Return Type

        Add productIdentifiers

## 2019-03-22

### What's New
---
* `GET` /products/{productId}/variations/{variationId} Get variation
* `PATCH` /products/{productId}/variations/{variationId} Update variation partially (json)


## 2019-03-20

### What's New
---
* `GET` /newsletter-target Get a newsletter-target
* `PUT` /newsletter-target Update a newsletter-target
* `POST` /newsletter-target Create a newsletter-target
* `DELETE` /newsletter-target Delete a newsletter-target
* `GET` /script-tags List all script-tags
* `POST` /script-tags Create a script-tag
* `GET` /script-tags/{id} Get a script-tag
* `PUT` /script-tags/{id} Update a script-tag
* `DELETE` /script-tags/{id} Delete a script-tag


### What's Changed
---
* `GET` /product-view/products/{id} Show variation product details  
    Return Type

        Add maxSalesPrice //The maximum price of the product.
        Add minSalesPrice //The minimum price of the product.

## 2019-03-18

### What's New
---
* `PATCH` /products/{productId}/variation-properties Update variation property states


## 2019-03-15

### What's Changed
---
* `GET` /products/{productId} Show variation product details  
    Return Type

        Add lastModifiedAt //The date and time when the product was modified.
* `GET` /products/search/find-by-sku Find a product by SKU  
    Return Type

        Add lastModifiedAt //The date and time when the product was modified.

## 2019-03-08

### What's New
---
* `GET` /products/{productId}/variation-properties List the variation properties

### What's Deprecated
---
* `GET` /product-view/products/search/find-by-category List products by category


## 2019-03-06

### What's Changed
---
* `POST` /payments/{paymentId}/status Set payment status with amount  
    Parameter

        Add .externalPaymentUri //Link to the payment in a payment provider's back-office (optional).
        Add .externalPaymentId //External payment reference that might be generated by the payment provider (optional).
    Return Type

        Add externalPaymentUri //Link to the payment in a payment provider's back-office (optional).
        Add externalPaymentId //External payment reference that might be generated by the payment provider (optional).

## 2019-03-05

### What's Changed
---
* `GET` /product-view/categories/{categoryId}/products List products by category  
    Return Type

        Add _links //See <<hypermedia,Hypermedia>>
        Add _embedded
        Add page //See <<pagination,Pagination>>

## 2019-02-28

### What's New
---


### What's Deprecated
---


### What's Changed
---
* `GET` /orders/{order-id} Show order details  
    Return Type

        Add externalPaymentUri //Link to the payment in a payment provider's back-office, if provided by the payment app.
        Add externalPaymentId //External payment reference, if provided by the payment app.

## 2019-02-26

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /carts/{cartId}/create-payment Create payment  
    Return Type

        Add embeddedApprovalUri //The optional URI to the iframe that will be embedded in the checkout UI.
* `POST` /carts/{cartId}/create-payment-and-order Create payment and order  
    Return Type

        Add embeddedApprovalUri //The optional URI to the iframe that will be embedded in the checkout UI.

## 2019-02-21

### What's New
---
* `GET` /product-view/products/0b284289-ade3-477d-baf4-7c58c673356f Show variation product details
* `GET` /product-view/products/be30bd85-706d-4d44-8a5d-df28b93484aa Show variation product details

### What's Deprecated
---

### What's Changed
---

## 2019-02-15

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /carts/{cartId}/create-payment-and-order Create payment and order  
    Parameter

        Add .termsAndConditionsExplicitlyAccepted //Indicates if the shop's terms and conditions have been explicitly accepted. If explicit consent is required (see checkout settings) and not given, trying to order the cart will fail. Can be `true` or `false`.

## 2019-02-14

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `GET` /products/{productId} Show variation product details  
    Return Type

        Delete sku //The stock keeping unit (SKU) corresponding to the product.

## 2019-02-13

### What's New
---
* `POST` /product-view/categories/search/find-by-product List categories assigned to product

### What's Deprecated
---

### What's Changed
---

## 2019-02-12

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `GET` /products/{productId}/variations List variations  
    Return Type

        Add _embedded

## 2019-02-06

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `GET` /orders/{order-id} Show order details  
    Return Type

        Add backgroundJobs //The asychronous actions which are not yet completed.

## 2019-01-31

### What's New
---
* `GET` /products/{productId}/variations list variations

### What's Deprecated
---

### What's Changed
---

## 2019-01-24

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /products Create variation product  
    Parameter

        Add .variationAttributes //The variation attributes with its values.
* `GET` /products/{productId} Show product details  
    Return Type

        Add variationAttributes //The variation attributes with its values.
* `GET` /products/search/find-by-sku Find a product by SKU  
    Return Type

        Add variationAttributes //The variation attributes with its values.

## 2019-01-23

### What's New
---

### What's Deprecated
---
* `GET` /product-view/categories/{categoryId} Show enhanced view of category

### What's Changed
---
* `GET` /product-view/products/{productId} Show product details  
    Parameter

        Delete projection //The projection to apply in order to show an enhanced view of product details. Use `enhancedProductProjection`.
    Return Type

        Delete _indexedAt //The time of storing this document in the search index.

## 2019-01-11

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /payment-method-definitions Create payment method definition  
    Parameter

        Add .captureWorkflow //Indicates how and when the capturing of an authorized payment should take place. Can be one of `CAPTURE_ON_ORDER` or `CAPTURE_ON_DEMAND`.
* `GET` /payment-method-definitions/{paymentMethodDefinitionName} Show payment method definition details  
    Return Type

        Add captureWorkflow //Indicates how and when the capturing of an authorized payment should take place. Can be one of `CAPTURE_ON_ORDER` or `CAPTURE_ON_DEMAND`.
* `PUT` /payment-method-definitions/{paymentMethodDefinitionName} Modify payment method definition  
    Parameter

        Add .captureWorkflow //Indicates how and when the capturing of an authorized payment should take place. Can be one of `CAPTURE_ON_ORDER` or `CAPTURE_ON_DEMAND`.
    Return Type

        Add captureWorkflow //Indicates how and when the capturing of an authorized payment should take place. Can be one of `CAPTURE_ON_ORDER` or `CAPTURE_ON_DEMAND`.

## 2019-01-10


### What's New
---
* `PUT` /products/{productId}/attributes/{productAttributeName} Update product attribute, or create if product attribute doesn't exist

### What's Deprecated
---

### What's Changed
---

## 2019-01-04

### What's New
---

### What's Deprecated
---
* `GET` / Index unauthorized

### What's Changed
---

## 2018-12-17

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /payments/{paymentId}/status Set payment status with amount  
    Parameter

        Add .amount //Optional absolute amount that has been paid so far. If not set, the full amount is assumed. Explicitly passing the amount only makes for status transitions towards `PAID`, `UNDERPAID` or `OVERPAID`.

## 2018-12-14

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `PUT` /carts/{cartId}/billing-address Set cart billing address  
    Parameter

        Add .dependentLocality //The secondardy place to the city, sometimes included for small towns or villages.
* `PUT` /carts/{cartId}/shipping-address Set current cart shipping address  
    Parameter

        Add .dependentLocality //The secondardy place to the city, sometimes included for small towns or villages.
* `PUT` /payment-method-definitions/{paymentMethodDefinitionName} Modify payment method definition  
    Parameter

        Add .name //The name of a payment method definition.

## 2018-12-11

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /payment-method-definitions Create payment method definition  
    Parameter

        Add .defaultDescription //Optional description that can be used as an explanation to customers how a payment method works. If it is provided by the app, it needs to be translated for each supported language.
* `GET` /payment-method-definitions/{paymentMethodDefinitionName} Show payment method definition details  
    Return Type

        Add defaultDescription //Optional description that can be used as an explanation to customers how a payment method works. If it is provided by the app, it needs to be translated for each supported language.
* `PUT` /payment-method-definitions/{paymentMethodDefinitionName} Modify payment method definition  
    Parameter

        Add .defaultDescription //Optional description that can be used as an explanation to customers how a payment method works. If it is provided by the app, it needs to be translated for each supported language.
    Return Type

        Add defaultDescription //Optional description that can be used as an explanation to customers how a payment method works. If it is provided by the app, it needs to be translated for each supported language.

## 2018-12-03

### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /carts/{cartId}/line-items Add Line Item  
    Parameter

        Add .quantity //The quantity for the line item to be set. If the line item is already in the cart, the quantity is added. Defaults to one.
        Delete .quantityInt //The value of the quantity. A negative value reduces the line item quantity.
* `PUT` /carts/{cartId}/line-items/{lineItemId} Replace Line Items  
    Parameter

        Add .quantity //The quantity for the line item to be set. If the line item is already in the cart, the quantity is added. Defaults to one.
        Delete .quantityInt //The value of the quantity. A negative value reduces the line item quantity.

## 2018-11-21

### What's New
---
* `DELETE` /carts/{cartId}/shipping-address Remove Shipping Address

### What's Deprecated
---

### What's Changed
---

## 2018-11-12

### What's New
---
* `POST` /payment-method-definitions/{paymentMethodDefinitionName}/payment-method Triggers creation of Payment Method for current shop
* `DELETE` /payment-method-definitions/{paymentMethodDefinitionName}/payment-method Triggers deletion of Payment Method for current shop

### What's Deprecated
---

### What's Changed
---
* `POST` /payment-method-definitions Create Payment Method Definition  
    Return Type

        Delete createPaymentUriTemplate //The uri template for creating a payment.
        Delete workflow //The workflow of the payment method.
        Delete _links //See <<hypermedia,Hypermedia>>
        Delete sandbox //An indicator if the payment method is using a sandbox environment.
        Delete referralUriTemplate //The uri template for the referral process.
        Delete officialName //The translated name that will be used as display name for the payment method for merchants.
        Delete refundPaymentUriTemplate //The uri template for refunding a payment.
        Delete disconnectUriTemplate //The uri template for disconnecting.
        Delete logos
        Delete capturePaymentUriTemplate //The uri template for capturing a payment.
        Delete statusUriTemplate //The uri template for the status.
        Delete name //The unique name of a payment method definition.
        Delete officialDescription //The translated description that will be used as description for the payment method for merchants.
        Delete _id //The unique name of a payment method definition.
        Delete defaultName //The translated name that will be used as default dispaly name for the payment method for customers.
        Delete refund //The refund capabilities of the payment method.

## 2018-11-08

### What's New
---

### What's Deprecated
---
* `GET` /google-shopping/access-data Get Access Data
* `PUT` /google-shopping/access-data Update Access Data
* `POST` /google-shopping/access-data Create Access Data
* `DELETE` /google-shopping/access-data Delete Access Data
* `GET` /google-shopping/products List Google Shopping Products
* `POST` /google-shopping/products Create Google Shopping Product
* `GET` /google-shopping/site-verification Retrieve Site Verification Token
* `GET` /google-shopping/taxonomy List Taxonomy
* `POST` /google-shopping/products/publish Publish List of Google Shopping Products
* `GET` /google-shopping/products/{id} Get Google Shopping Product
* `PUT` /google-shopping/products/{id} Update Google Shopping Product
* `DELETE` /google-shopping/products/{id} Delete Google Shopping Product
* `POST` /google-shopping/products/{id}/publish Publish Google Shopping Product
* `POST` /google-shopping/products/{id}/unpublish Unpublish Google Shopping Product

### What's Changed
---
* `GET` /orders/{order-id} Get Order  
    Return Type

        Add paymentNote //A prompt to pay the order which will be rendered in the invoice order document. Should contain a payment reference and the merchant's bank account details.

## 2018-11-07

### What's New
---
* `DELETE` /payment-method-definitions/{paymentMethodDefinitionName} Delete Payment Method Definition

### What's Deprecated
---
* `GET` /app-types Get available app types
* `GET` /apps List apps with language
* `GET` /apps/{appId} Get app with language
* `POST` /apps/{appId}/uninstall Uninstall app
* `GET` /custom-apps List custom apps
* `POST` /custom-apps Create custom app
* `GET` /custom-apps/{customAppId} Get custom app
* `PUT` /custom-apps/{customAppId} Update custom apps
* `DELETE` /custom-apps/{customAppId} Delete custom app
* `POST` /custom-apps/{customAppId}/regenerate-secret Regenerate client secret of a custom app
* `POST` /custom-apps/{customAppId}/upgrade Upgrade custom app to app

### What's Changed
---

## 2018-11-01

### What's New
---

### What's Deprecated
---
* `POST` /shops/{shopId}/features /shops/{shopId}/features
* `DELETE` /shops/{id}/attributes/{name} /shops/{id}/attributes/{name}

### What's Changed
---

## 2018-10-30

### What's New
---
* `GET` /product-attribute-definitions/{productAttributeDefinitionKey} Get Product Attribute Definition
* `DELETE` /product-attribute-definitions/{productAttributeDefinitionKey} /product-attribute-definitions/{productAttributeDefinitionKey}
* `GET` /products/{productId}/attributes/{productAttributeName} /products/{productId}/attributes/{productAttributeName}
* `DELETE` /products/{productId}/attributes/{productAttributeName} /products/{productId}/attributes/{productAttributeName}
* `GET` /google-shopping/access-data Get Access Data
* `PUT` /google-shopping/access-data Update Access Data
* `DELETE` /google-shopping/access-data Delete Access Data

### What's Deprecated
---
* `GET` /amazon-marketplace/access-data /amazon-marketplace/access-data
* `PUT` /amazon-marketplace/access-data /amazon-marketplace/access-data
* `POST` /amazon-marketplace/access-data /amazon-marketplace/access-data
* `DELETE` /amazon-marketplace/access-data /amazon-marketplace/access-data
* `GET` /amazon-marketplace/products /amazon-marketplace/products
* `POST` /amazon-marketplace/products /amazon-marketplace/products
* `POST` /amazon-marketplace/products/publish /amazon-marketplace/products/publish
* `GET` /amazon-marketplace/products/{id} /amazon-marketplace/products/{id}
* `PUT` /amazon-marketplace/products/{id} /amazon-marketplace/products/{id}
* `DELETE` /amazon-marketplace/products/{id} /amazon-marketplace/products/{id}
* `GET` /amazon-marketplace/search/find-product /amazon-marketplace/search/find-product?marketplace-id=A1PA6795UKMFR9&identifier-type=EAN&identifier=5702015535571
* `GET` /product-attribute-definitions/{productAttributeDefinitionName} Get Product Attribute Definition
* `GET` /products/{productId}/attributes/{namespace} List Custom Product Attributes by Namespace
* `GET` /products/{productId}/attributes/{namespace}/{attributeName} List Custom Product Attributes by Namespace and Attribute Name
* `DELETE` /products/{productId}/attributes/{namespace}/{attributeName} Delete Custom Product Attribute

### What's Changed
---
* `POST` /product-attribute-definitions /product-attribute-definitions  
    Parameter

        Add .key //(Optional) The key of the product attribute definition. Derived from `displayName` if not provided.
        Delete .name //(Optional) The name of the product attribute definition. Derived from `displayName` if not provided.
* `GET` /products/{productId} Get Product  
    Return Type

        Delete attributes //The list of product attributes.
* `GET` /products/search/find-by-sku https://yourshop.api.urn/products/search/find-by-sku?sku=vino020  
    Return Type

        Delete attributes //The list of product attributes.
* `POST` /products/{productId}/attributes /products/{productId}/attributes  
    Parameter

        Add .key //The key of the product attribute definition.
        Delete .name //The name of the product attribute.
        Delete .namespace //The namespace of the product attribute.
        Delete .type //The type of the product attribute.
        Delete .locale //The locale of the product attribute.
        Delete .value //The value of the product attribute.

## 2018-10-29

### What's New
---
* `GET` /payment-method-definitions List Payment Method Definitions
* `POST` /payment-method-definitions Create Payment Method Definition
* `GET` /payment-method-definitions/{paymentMethodDefinitionName} Get Payment Method Definition
* `PUT` /payment-method-definitions/{paymentMethodDefinitionName} Update Payment Method Definition

### What's Deprecated
---

### What's Changed
---

## 2018-10-26

### What's New
---
* `POST` /shops/{shopId}/features /shops/{shopId}/features

### What's Deprecated
---
* `DELETE` /shops/{shopId} /shops/{shopId}

### What's Changed
---

## 2018-10-25

### What's New
---

### What's Deprecated
---
* `GET` /products/search/find-attribute-string-values Find existing attribute values

### What's Changed
---

## 2018-10-18

### What's New
---
* `GET` /payment-signup/merchant-accounts/{paymentMethodDefinition} Get Merchant Account
* `DELETE` /payment-signup/merchant-accounts/{paymentMethodDefinition} Disconnect Merchant Account
* `POST` /payment-signup/referrals/{paymentMethodDefinition} Initiate Referral

### What's Deprecated
---
* `PUT` /payment-methods/{paymentMethodId}/payment-integration Set Payment Integration on Payment Method
* `GET` /payment-signup/merchant-accounts/{paymentIntegration} Get Merchant Account
* `DELETE` /payment-signup/merchant-accounts/{paymentIntegration} Disconnect Merchant Account
* `POST` /payment-signup/referrals/{paymentIntegration} Initiate Referral

### What's Changed
---
* `GET` /carts/{cartId} Get Cart  
    Return Type

        Add _links //See <<hypermedia,Hypermedia>>
* `GET` /payment-methods/{paymentMethodId} Get Payment Method  
    Return Type

        Add _links //See <<hypermedia,Hypermedia>>
* `POST` /payment-methods/{paymentMethodId}/activate Activate Payment Method  
    Return Type

        Add _links //See <<hypermedia,Hypermedia>>
* `POST` /payment-methods/{paymentMethodId}/deactivate Deactivate Payment Method  
    Return Type

        Add _links //See <<hypermedia,Hypermedia>>

## 2018-10-18

### What's New
---
* `POST` /custom-apps/{customAppId}/upgrade /custom-apps/{customAppId}/upgrade
* `DELETE` /shops/{shopId} /shops/{shopId}

### What's Deprecated
---
* `GET` /add-ons/installed List App Installations
* `DELETE` /add-ons/installed/{id} Uninstall Official App
* `GET` /private-apps List Private Apps
* `POST` /private-apps Create Private App
* `GET` /private-apps/{id} Get Private App
* `PUT` /private-apps/{id} Update Private App
* `DELETE` /private-apps/{id} Delete Private App
* `POST` /private-apps/{id}/regenerate-client-secret Regenerate Private App Client Secret
* `GET` /private-apps/{id}/scopes Get Private App Scopes
* `PUT` /private-apps/{id}/scopes Update Private App Scopes

### What's Changed
---
* `GET` /carts/{cartId}/shipping-methods Get Shipping Methods of Cart  
    Return Type

        Add _links //See <<hypermedia,Hypermedia>>
* `POST` /oauth/token Create a JsonWebToken  
    Parameter

        Delete code //The authorization code. Required for the `authorization_code` grant type.
