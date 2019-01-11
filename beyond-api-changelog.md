# Beyond API Changelog

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

-XX:InitialHeapSize=527058816 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
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
