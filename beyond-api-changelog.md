# Beyond API Changelog

## 2021-12-13

### What's New

### What's Deprecated

* `GET` /products/search/tags (Deprecated) Find used tags


### What's Changed

## 2021-12-09

### What's New

* `POST` /products/search/categories Find used manual categories



### What's Deprecated

### What's Changed

## 2021-12-02

### What's New

### What's Deprecated

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-12-01

### What's New

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Deprecated

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing


### What's Changed

* `GET` /customer-account/billing-address Show billing address in customer account  
    Return Type

        Add displayAddressLines //The applicable billing address of the customer to be displayed.

* `GET` /customer-account/shipping-address Show shipping address in customer account  
    Return Type

        Add displayAddressLines //The applicable shipping address of the customer to be displayed.

## 2021-11-24

### What's New

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing


### What's Deprecated

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-11-18

### What's New

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name



### What's Deprecated

### What's Changed

## 2021-11-15

### What's New

### What's Deprecated

### What's Changed

* `POST` /users/reset-password-request Trigger password reset email  
    Parameter

        locale Notes The required `locale` to generate the password reset email. Represents the language code according to ISO 639-1 and the country code according to ISO 3166-1. If not provided, the shop's default language is used. change into Defines in which language the password reset email is to be sent. Represents the language code according to ISO 639-1 combined with the country code according to ISO 3166-1, e.g. en-US. If not provided, the shop's default language is used.

* `POST` /users/{userId}/change-email-request Duplicated email address  
    Parameter

        locale Notes The required `locale` to generate the confirmation email to change the email address. Represents the language code according to ISO 639-1 and the country code according to ISO 3166-1. change into Defines in which language the confirmation email to change the email address is to be sent. Represents the language code according to ISO 639-1 combined with the country code according to ISO 3166-1, e.g. en-US.

## 2021-11-11

### What's New

* `POST` /categories/search Search product categories



### What's Deprecated

### What's Changed

## 2021-11-09

### What's New

### What's Deprecated

### What's Changed

* `POST` /users/{userId}/change-email-request Duplicated email address  
    Parameter

        locale Notes The required `locale` to generate the confirmation email to change the email address. Represents the language code according to ISO 639-1 and the country code according to ISO 3166-1. If not provided, the shop's default language is used. change into The required `locale` to generate the confirmation email to change the email address. Represents the language code according to ISO 639-1 and the country code according to ISO 3166-1.

## 2021-11-08

### What's New

* `GET` /carts/search/find-latest Find latest open cart of registered customer


### What's Deprecated

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-10-28

### What's New

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name



### What's Deprecated

### What's Changed

## 2021-10-26

### What's New

* `GET` /customer-account/billing-address Returns customer account billing address

* `GET` /customer-account/shipping-address Returns customer account shipping address



### What's Deprecated

### What's Changed

* `GET` /products/search/manufacturers Find manufacturers  
    Parameter

        Delete startsWith //(Deprecated) The starting string to search for within the manufacturers specified for products of the shop.

* `GET` /products/search/tags (Deprecated) Find used tags  
    Parameter

        Delete startsWith //(Deprecated) The starting string to search for within the tags added to products of the shop.

## 2021-10-14

### What's New

* `DELETE` /categories/batch/products Remove products from multiple categories



### What's Deprecated

### What's Changed

## 2021-10-13

### What's New

* `POST` /categories/batch/products Add products to multiple categories

* `POST` /products/search/tags Find used tags


### What's Deprecated

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-10-11

### What's New

* `PUT` /customer-account/billing-address Updates customer account billing address

* `PUT` /customer-account/shipping-address Updates customer account shipping address



### What's Deprecated

### What's Changed

## 2021-10-06

### What's New

* `DELETE` /products/batch/tags Remove tags from multiple products


### What's Deprecated

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing


### What's Changed

## 2021-10-04

### What's New

* `POST` /products/batch/tags Add tags to multiple products



### What's Deprecated

### What's Changed

## 2021-09-23

### What's New

### What's Deprecated

### What's Changed

* `GET` /customer-account/orders/{orderId} Show details of one order  
    Return Type

        Add initialGrandTotal
        Add totalRefunded
        Add openAmount

## 2021-09-15

### What's New

* `GET` /customer-account/orders/{orderId} Show details of one order



### What's Deprecated

### What's Changed

## 2021-09-14

### What's New

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name



### What's Deprecated

### What's Changed

## 2021-09-13

### What's New

### What's Deprecated

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-09-09

### What's New

### What's Deprecated

* `GET` /products/search/{productId}/variations Invalid product type


### What's Changed

## 2021-09-06

### What's New

* `DELETE` /customer-account Delete customer account



### What's Deprecated

### What's Changed

## 2021-08-30

### What's New

* `GET` /customer-account/orders List orders of one customer



### What's Deprecated

### What's Changed

## 2021-08-17

### What's New

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name



### What's Deprecated

### What's Changed

## 2021-08-16

### What's New

### What's Deprecated

### What's Changed

* `GET` /products/search/manufacturers Too many parameters provided  
    Parameter

        Add contains //The string to search for within the manufacturers specified for products of the shop.
        startsWith change into not required Notes The starting string to search for within the manufacturers specified for products of the shop. change into (Deprecated) The starting string to search for within the manufacturers specified for products of the shop.

* `GET` /products/search/tags Too many parameters provided  
    Parameter

        Add contains //The string to search for within the tags added to products of the shop.
        startsWith change into not required Notes The starting string to search for within the tags added to products of the shop. change into (Deprecated) The starting string to search for within the tags added to products of the shop.

## 2021-08-09

### What's New

### What's Deprecated

### What's Changed

* `GET` /carts/{cartId}/pickup-options List pickup options for current cart  
    Return Type

        Delete page //See https://developer.epages.com/beyond-docs/#pagination[Pagination]

## 2021-08-06

### What's New

### What's Deprecated

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-08-05

### What's New

### What's Deprecated

### What's Changed

* `PUT` /coupon-campaigns/{couponCampaignId}/status Invalid status transition  
    Return Type

        Delete end //The end date and time of the coupon campaign. Coupons of the coupon campaign cannot be redeemed afterwards. Expressed according to ISO 8601, e.g. `2020-12-31T12:00:00`.

* `GET` /products/search/manufacturers Find manufacturers  
    Parameter

        startsWith Notes The search for manufacturers starting with this string. change into The starting string to search for within the manufacturers specified for products of the shop.

* `GET` /products/search/tags Find used tags  
    Parameter

        startsWith Notes The search tags starting with this string. change into The starting string to search for within the tags added to products of the shop.

## 2021-08-04

### What's New

* `GET` /products/search/manufacturers Find product manufacturers

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name



### What's Deprecated

### What's Changed

## 2021-08-02

### What's New

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing


### What's Deprecated

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-07-29

### What's New

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Deprecated

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing


### What's Changed

## 2021-07-26

### What's New

* `POST` /resellers/epages/shops/{shopId}/open Shop address is missing


### What's Deprecated

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name


### What's Changed

## 2021-07-23

### What's New

* `POST` /product-view/categories/check-query-syntax Category query invalid

* `PUT` /resellers/epages/shops/{id}/attributes/{name} Duplicated shop attribute name



### What's Deprecated

### What's Changed

## 2021-07-13

### What's New

### What's Deprecated

* `POST` /customers/registration Registers customer


### What's Changed

* `PUT` /customers/{customerId} Update customer  
    Return Type

        Add defaultShippingMethodId //The identifier of the default shipping method.
        Add defaultPaymentMethodId //The identifier of the default payment method.

## 2021-07-07

### What's New

* `POST` /customers/registration Registers customer



### What's Deprecated

### What's Changed

## 2021-07-01

### What's New

### What's Deprecated

### What's Changed

* `PUT` /carts/{cartId}/billing-address Set cart billing address  
    Parameter

        Add .company //The name of the customer's company.

* `PUT` /carts/{cartId}/shipping-address Shipping address not allowed  
    Parameter

        Add .company //The name of the customer's company.

## 2021-06-29

### What's New

### What's Deprecated

### What's Changed

* `POST` /customers Create customer  
    Parameter

        Add .defaultPickupOptionId //The identifier of the default pickup option.

* `PUT` /customers/{customerId} Update customer  
    Parameter

        Add .defaultPickupOptionId //The identifier of the default pickup option.
    Return Type

        Add defaultPickupOptionId //The identifier of the default pickup option.
        Delete defaultShippingMethodId //The identifier of the default shipping method.
        Delete defaultPaymentMethodId //The identifier of the default payment method.

* `GET` /customers/{id} Show customer details  
    Return Type

        Add defaultPickupOptionId //The identifier of the default pickup option.

## 2021-06-28

### What's New

### What's Deprecated

### What's Changed

* `POST` /coupon-campaigns Create coupon campaign  
    Parameter

        Add .minimumOrderValue //Allows to restrict the redemption of coupon codes in the given campaign to carts with a minimum subtotal.

## 2021-06-24

### What's New

### What's Deprecated

### What's Changed

* `POST` /categories Product category already exists  
    Parameter

        Delete .query //(Deprecated - Use product category filters instead.) The JSON query to retrieve products according to https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html[Elasticsearch Query DSL]. Will be ignored in create/update requests if provided along with category filters.

* `PATCH` /categories/{categoryId} Update product category partially  
    Return Type

        Delete query //(Deprecated - Use product category filters instead.) The JSON query to retrieve products according to https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html[Elasticsearch Query DSL]. Will be ignored in create/update requests if provided along with category filters.

* `GET` /categories/{categoryId} Show product category details  
    Return Type

        Delete query //(Deprecated - Use product category filters instead.) The JSON query to retrieve products according to https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html[Elasticsearch Query DSL]. Will be ignored in create/update requests if provided along with category filters.

* `PUT` /categories/{categoryId} Update all product category properties  
    Parameter

        Delete .query //(Deprecated - Use product category filters instead.) The JSON query to retrieve products according to https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html[Elasticsearch Query DSL]. Will be ignored in create/update requests if provided along with category filters.
    Return Type

        Delete query //(Deprecated - Use product category filters instead.) The JSON query to retrieve products according to https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html[Elasticsearch Query DSL]. Will be ignored in create/update requests if provided along with category filters.

## 2021-06-21

### What's New

### What's Deprecated

### What's Changed

* `GET` /orders/search/find-by-cart-id Show order by cart ID  
    Return Type

        Add pickupLineItem //The pickup line item.

* `POST` /orders/{id}/send-order-document Send order document  
    Return Type

        Add pickupLineItem //The pickup line item.

* `PUT` /orders/{orderId}/billing-address Update billing address  
    Return Type

        Add pickupLineItem //The pickup line item.

* `POST` /orders/{orderId}/cancel Cancel order  
    Return Type

        Add pickupLineItem //The pickup line item.

* `POST` /orders/{orderId}/create-invoice Create invoice  
    Return Type

        Add pickupLineItem //The pickup line item.

* `POST` /orders/{orderId}/mark-as-viewed Mark order as viewed  
    Return Type

        Add pickupLineItem //The pickup line item.

* `PUT` /orders/{orderId}/order-note Update order note  
    Return Type

        Add pickupLineItem //The pickup line item.

* `PUT` /orders/{orderId}/shipping-address Update shipping address  
    Return Type

        Add pickupLineItem //The pickup line item.

## 2021-06-14

### What's New

### What's Deprecated

### What's Changed

* `GET` /product-view/products/{productId} Show variation product details  
    Return Type

        Delete availabilityState //(Deprecated) The current availability state for the product. Always `NOT_AVAILABLE` for variation products.

## 2021-06-10

### What's New

### What's Deprecated

### What's Changed

* `GET` /customers List customers  
    Parameter

        sort Notes The sorting applied to the list of customers. The sort can be one of the `customerName`, `customerLocation`, `customerOrigin`, `customerLastOrder`, or `customerGrandTotal` change into The sorting applied to the list of customers. Can be one of `customerName`, `customerLocation`, `customerOrigin`, `customerLastOrder`, or `customerGrandTotal`.

* `GET` /orders/{orderId} Show order details  
    Return Type

        Add shippingLineItem //The shipping line item.

## 2021-06-07

### What's Changed

* `GET` /customers List customers  
    Parameter

        Add sort //The sorting applied to the list of customers. The sort can be one of the `customerName`, `customerLocation`, `customerOrigin`, `customerLastOrder`, or `customerGrandTotal`

* `PUT` /order-settings Update order settings  
    Parameter

        Add .customOrderReadyForPickupMailText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Add .customOrderPickedUpMailText //The customizable text body for the email that is sent to inform the customer that package was picked up.
        Delete .customOrderReadyForPickupText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Delete .customOrderPickedUpText //The customizable text body for the email that is sent to inform the customer that package was picked up.
    Return Type

        Add customOrderReadyForPickupMailText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Add customOrderPickedUpMailText //The customizable text body for the email that is sent to inform the customer that package was picked up.
        Delete customOrderReadyForPickupText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Delete customOrderPickedUpText //The customizable text body for the email that is sent to inform the customer that package was picked up.

* `GET` /order-settings List order settings  
    Return Type

        Add customOrderReadyForPickupMailText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Add customOrderPickedUpMailText //The customizable text body for the email that is sent to inform the customer that package was picked up.
        Delete customOrderReadyForPickupText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Delete customOrderPickedUpText //The customizable text body for the email that is sent to inform the customer that package was picked up.

## 2021-06-04

### What's New

### What's Deprecated

### What's Changed

* `PUT` /order-settings Update order settings  
    Parameter

        Add .customOrderReadyForPickupText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Add .customOrderPickedUpText //The customizable text body for the email that is sent to inform the customer that package was picked up.
    Return Type

        Add customOrderReadyForPickupText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Add customOrderPickedUpText //The customizable text body for the email that is sent to inform the customer that package was picked up.

* `GET` /order-settings List order settings  
    Return Type

        Add customOrderReadyForPickupText //The customizable text body for the email that is sent to inform the customer that package is ready for pickup
        Add customOrderPickedUpText //The customizable text body for the email that is sent to inform the customer that package was picked up.

## 2021-06-03

### What's New

### What's Deprecated

### What's Changed

* `GET` /orders/{orderId} Show order details  
    Return Type

        Add pickupLineItem //The pickup line item.
        Delete shippingLineItem

## 2021-06-01

### What's New

### What's Deprecated

### What's Changed

* `POST` /orders/{orderId}/processes/pickups/{pickup-process-id}/mark-picked-up Mark pickup process as picked up.  
    Parameter

        Add .sendMail //Indicates if an email has to be sent out to notify the customer that the pickup process has been completed. Can be `true` or `false`.

## 2021-05-31

### What's New

### What's Deprecated

* `POST` /orders/{orderId}/processes/pickups/{pickup-process-id}/mark-ready-for-pickup Mark pickup process as ready to pickup.


### What's Changed

* `GET` /orders List orders  
    Parameter

        Add pickupOptionId //Filters by the ID of the pickup option used for the order.

* `GET` /orders/filters List order filter categories  
    Return Type

        Add allPickupOptions

## 2021-05-25

### What's New

* `GET` /orders/{orderId}/processes/pickups List pickup processes

* `POST` /orders/{orderId}/processes/pickups Invalid product line item quantity

* `GET` /orders/{orderId}/processes/pickups/{pickup-process-id} Show pickup process details

* `POST` /orders/{orderId}/processes/pickups/{pickup-process-id}/mark-picked-up Mark pickup process as picked up.

* `POST` /orders/{orderId}/processes/pickups/{pickup-process-id}/mark-ready-for-pickup Mark pickup process as ready to pickup.



### What's Deprecated

### What's Changed

* `GET` /product-view/products/{productId} Show variation product details  
    Return Type

        Add pickupPeriod //The pickup period for the product.

## 2021-05-20

### What's New

### What's Deprecated

### What's Changed

* `POST` /products Product limit reached  
    Parameter

        Add .pickupPeriod

* `GET` /products/{productId} Show variation product details  
    Return Type

        Add pickupPeriod

* `PATCH` /products/{productId} Update variation product partially  
    Return Type

        Add pickupPeriod

* `GET` /products/search/find-by-sku Find product by SKU  
    Return Type

        Add pickupPeriod

## 2021-05-19

### What's New

* `DELETE` /products/batch Batch delete products



### What's Deprecated

### What's Changed

## 2021-05-18

### What's New

* `PATCH` /products/batch Batch publish products

* `GET` /products/search/{productId}/variations Invalid product type



### What's Deprecated

### What's Changed

## 2021-05-14

### What's New

* `GET` /carts/{cartId}/pickup-options/current Get current cart pickup option



### What's Deprecated

### What's Changed

## 2021-05-10

### What's New

* `PUT` /carts/{cartId}/pickup-options/current Set current cart pickup option



### What's Deprecated

### What's Changed

* `GET` /carts/{cartId} Show cart details  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `PUT` /carts/{cardId}/customer Assign customer to cart  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `PUT` /carts/{cartId}/billing-address Set cart billing address  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `POST` /carts/{cartId}/line-items Invalid tax class  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `PUT` /carts/{cartId}/line-items Add line items  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `PUT` /carts/{cartId}/shipping-address Set current cart shipping address  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `PUT` /carts/{cartId}/line-items/{lineItemId} Replace single line item  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `PUT` /carts/{cartId}/payment-methods/current Set current cart payment method  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

* `PUT` /carts/{cartId}/payment-methods/default Set cart payment method to current default  
    Return Type

        Add pickupLineItem //The details about the pickup line item of the cart.

## 2021-05-06

### What's New

### What's Deprecated

* `PUT` /customers/{customerId}/master-data Update customer master data


### What's Changed

* `PUT` /customers/{customerId} Update customer  
    Return Type

        Delete masterData //The master data of the customer.

* `GET` /customers/{id} Show customer details  
    Return Type

        Delete masterData //The master data of the customer.

## 2021-05-05

### What's New

### What's Deprecated

### What's Changed

* `GET` /orders List orders  
    Parameter

        viewed Notes Filters by whether or not the order was viewed. Can be `true` or `false`. change into Filters by whether or not the order was marked as viewed. Can be `true` or `false`.

## 2021-05-04

### What's New

### What's Deprecated

### What's Changed

* `GET` /orders List orders  
    Parameter

        Add viewed //Filters by whether or not the order was viewed. Can be `true` or `false`.

* `POST` /pickup-options Create pickup option  
    Parameter

        Add .locationId //The unique identifier of the location.

## 2021-05-03

### What's New

* `GET` /carts/{cartId}/pickup-options List pickup options for the cart
* `PUT` /pickup-options Sort pickup options


## 2021-04-30

### What's New

* `GET` /orders/unviewed Lists amount of unviewed orders.
* `PUT` /pickup-options/{id} Update pickup option
* `DELETE` /pickup-options/{id} Delete pickup option

### What's Deprecated

* `PUT` /pickup-options/{currentPickupVersionId} Update pickup option
* `DELETE` /pickup-options/{currentPickupVersionId} Delete pickup option


## 2021-04-28

### What's New
---
* `DELETE` /pickup-options/{currentPickupVersionId} Delete pickup option

## 2021-04-26

### What's New
---
* `PUT` /pickup-options/{currentPickupVersionId} Update pickup option
* `GET` /pickup-options List pickup options

## 2021-04-21

### What's New
---
* `POST` /pickup-options Create pickup option
* `GET` /pickup-options/{pickupOptionId} Show pickup option details

### What's Deprecated
---
* `PUT` /products/{productId}/variation-images-differentiator (Deprecated) Assign variation images differentiator


## 2021-04-20

### What's Changed
---
* `POST` /users/verify-password Verify password  
    Parameter

        userRole Notes The type of user. Can be one of `merchant` or `customer`. change into The type of user. Can be one of `merchant`, `support`, or `customer`.

## 2021-04-15

### What's Changed
---
* `POST` /categories Create product category  
    Parameter

        Add .filters //The list of category filters.
* `PATCH` /categories/{categoryId} Update product category partially  
    Return Type

        Add filters //The list of category filters.
* `GET` /categories/{categoryId} Show product category details  
    Return Type

        Add filters //The list of category filters.
* `PUT` /categories/{categoryId} Update all product category properties  
    Parameter

        Add .filters //The list of category filters.
    Return Type

        Add filters //The list of category filters.

## 2021-04-13

### What's New
---
* `POST` /orders/{orderId}/mark-as-viewed Marks the order as viewed

### What's Deprecated
---
* `POST` /support-agents Create support agent

### What's Changed
---

## 2021-04-12


### What's Changed
---

* `GET` /orders/{orderId} Show order details  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.
* `GET` /orders/search/find-by-cart-id Show order by cart ID  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.
* `POST` /orders/{id}/send-order-document Send order document  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.
* `PUT` /orders/{orderId}/billing-address Update billing address  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.
* `POST` /orders/{orderId}/cancel Cancel order  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.
* `POST` /orders/{orderId}/create-invoice Create invoice  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.
* `PUT` /orders/{orderId}/order-note Update order note  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.
* `PUT` /orders/{orderId}/shipping-address Update shipping address  
    Return Type

        Add viewed //Indicates if the order was marked as viewed. Can be `true` or `false`.

## 2021-04-07

-XX:InitialHeapSize=64663872 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---

### What's Changed
---
* `GET` /carts/{cartId} Show cart details  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cardId}/customer Assign customer to cart  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/billing-address Set cart billing address  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `POST` /carts/{cartId}/coupon Redeem coupon  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `POST` /carts/{cartId}/line-items Invalid tax class  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/line-items Add line items  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/shipping-address Set current cart shipping address  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/line-items/{lineItemId} Replace single line item  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/payment-methods/current Set current cart payment method  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/payment-methods/default Set cart payment method to current default  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/shipping-methods/current Set current cart shipping method  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /carts/{cartId}/shipping-methods/default Set cart shipping method to current default  
    Return Type

        Delete balanceDue //(Deprecated - use the property `grandTotal` instead.) The outstanding balance of the amount to be paid.
* `PUT` /customers/{customerId} Update customer  
    Parameter

        Add .customerComment //The merchant comment or note on the customer.
    Return Type

        Add customerComment //The merchant comment or note on the customer.
* `GET` /orders/{orderId} Show order details  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue
* `GET` /orders/search/find-by-cart-id Show order by cart ID  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue
* `POST` /orders/{id}/send-order-document Send order document  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue
* `PUT` /orders/{orderId}/billing-address Update billing address  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue
* `POST` /orders/{orderId}/cancel Cancel order  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue
* `POST` /orders/{orderId}/create-invoice Create invoice  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue
* `PUT` /orders/{orderId}/order-note Update order note  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue
* `PUT` /orders/{orderId}/shipping-address Update shipping address  
    Return Type

        Delete initialBalanceDue
        Delete balanceDue

## 2021-04-06

-XX:InitialHeapSize=130717952 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---

### What's Changed
---
* `GET` /orders/{orderId} Show order details  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.
* `GET` /orders/search/find-by-cart-id Show order by cart ID  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.
* `POST` /orders/{id}/send-order-document Send order document  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.
* `PUT` /orders/{orderId}/billing-address Update billing address  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.
* `POST` /orders/{orderId}/cancel Cancel order  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.
* `POST` /orders/{orderId}/create-invoice Create invoice  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.
* `PUT` /orders/{orderId}/order-note Update order note  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.
* `PUT` /orders/{orderId}/shipping-address Update shipping address  
    Return Type

        Delete backgroundJobs //(Deprecated) Pending processes initiated via the cockpit or the API that run in the background, e.g. rendering an invoice document. Instead, please refer to the links section of the respective order resource to get an indication whether the rendering of an order document is completed.

## 2021-03-31

-XX:InitialHeapSize=130717952 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /customers Create customer  
    Parameter

        Add .customerComment //The merchant comment or note on the customer.
* `GET` /customers/{id} Show customer details  
    Return Type

        Add customerComment //The merchant comment or note on the customer.
* `PUT` /customers/{customerId}/master-data Update customer master data  
    Return Type

        Add customerComment //The merchant comment or note on the customer.

## 2021-03-30

-XX:InitialHeapSize=130717952 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---

### What's Changed
---
* `POST` /carts/{cartId}/coupon Redeem coupon  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /coupon-campaigns List coupon campaigns  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /coupon-campaigns/{couponCampaignId} Show details of coupon campaign  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /coupon-campaigns/{couponCampaignId}/coupons List coupon codes  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /coupon-campaigns/{couponCampaignId}/coupons Update coupon codes  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /coupon-campaigns/{couponCampaignId}/status Update coupon campaign status  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /payment-methods List payment methods  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /payment-methods/{paymentMethodId} Show payment method details  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /payment-methods/{paymentMethodId} Update payment method  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /payment-methods/{paymentMethodId}/activate Activate payment method  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /payment-methods/{paymentMethodId}/deactivate Deactivate payment method  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones List shipping zones  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/{shippingZoneId} Show shipping zone details  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /shipping-zones/{shippingZoneId} Update shipping zone  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/search/find-all-serviceable-countries Find serviceable countries  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/{shippingZoneId}/shipping-methods List shipping methods of shipping zone  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /shipping-zones/{shippingZoneId}/shipping-methods Sort shipping methods in shipping zone  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/{shippingZoneId}/shipping-methods/{shippingMethodId} Show details of shipping method in shipping zone  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /shipping-zones/{shippingZoneId}/shipping-methods/{shippingMethodId} Modify shipping method  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]

## 2021-03-29

### What's Changed
---

* `GET` /product-view/products/{productId} Show variation product details  
    Return Type

        Delete variationAttributeValues //The specific variation attributes for the selected variation.
        Delete sku //The stock keeping unit (SKU) corresponding to the variation.
* `POST` /products/{productId}/variations/images Upload multiple variation images to multiple variations  
    Parameter

        variation Notes The immutable, unique identifier of the variation. change into The unique identifier of the variations to which the images are to be uploaded.


## 2021-03-26

### What's Changed
---
* `GET` /product-view/products/{productId} Show variation details  
    Return Type

        Add variationAttributeValues //The specific variation attributes for the selected variation.
        Add sku //The stock keeping unit (SKU) corresponding to the variation.
* `POST` /products/{productId}/variations/images Add multiple variation images to multiple variations  
    Parameter

        variation Notes The unique identifier of the variations to which the images are to be uploaded. change into The immutable, unique identifier of the variation.

## 2021-03-25

### What's Deprecated
---
* `POST` /products/{productId}/availability/update-stock-threshold Update reserve stock of product

## 2021-03-24

-XX:InitialHeapSize=64572928 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---
* `POST` /orders/exports Create order export
* `GET` /orders/exports/{orderExportId} Show order export status

### What's Deprecated
---

### What's Changed
---

## 2021-03-22

-XX:InitialHeapSize=64572928 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---
* `POST` /support-agents Create support agent

### What's Deprecated
---
* `POST` /products/{productId}/duplicate (Deprecated) Duplicate product

### What's Changed
---

## 2021-03-19

-XX:InitialHeapSize=64572928 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---
* `DELETE` /products/{productId}/variation-attributes/{variationAttributeId}/values Delete variation attribute values

### What's Changed
---
* `PUT` /legal-content/{name} Update legal content  
    Parameter

        Add .content //The content the legal content page is supposed to show.
* `PATCH` /shop Update shop partially  
    Return Type

        Add defaultLocale //The default locale of the shop (cannot be changed).
        Add locales //A list of the locales that are supported by the shop. Defaults to `defaultLocale`. The `defaultLocale` is always included in the list.
        Add closedByMerchant //Indicates if the shop is closed by its owner. Can be `true` or `false`.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
        Add resellerName //The name of the reseller that provisioned the shop.
        Add defaultCurrency //The default currency of the shop.
        Add primaryHostname //The primary hostname of the shop (cannot be updated).
        Add name //The name of the shop.
        Add tax
        Add fallbackHostname //The unchangeable, fallback hostname of the shop.
        Add _id //The unique identifier of the shop (cannot be changed).
        Add currencies //A list of the currencies that are supported by the shop. Defaults to `defaultCurrency`. The `defaultCurrency` is always included in the list.


## 2021-03-17


### What's New
---
* `POST` /products/{productId}/variation-attributes/{variationAttributeId}/make-differentiator Assign variation images differentiator



## 2021-03-16

-XX:InitialHeapSize=64572928 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---

### What's Changed
---
* `GET` /carts/{cartId} Show cart details  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /carts/{cartId}/line-items Add line items  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /carts/{cartId}/line-items Invalid tax class  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /carts/{cartId}/line-items/{lineItemId} Replace single line item  
    Return Type

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /payment-methods List payment methods  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /payment-methods/{paymentMethodId} Update payment method  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /payment-methods/{paymentMethodId} Show payment method details  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /payment-methods/{paymentMethodId}/activate Activate payment method  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /payment-methods/{paymentMethodId}/deactivate Deactivate payment method  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /products/{productId}/availability/disable-purchasability Disable purchasability for product  
    Return Type

        Add availableStock //The number of products available in stock.
        Add stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
* `POST` /products/{productId}/availability/disable-stock-management Disable stock management for product  
    Return Type

        Add availableStock //The number of products available in stock.
        Add stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
* `POST` /products/{productId}/availability/enable-purchasability Enable purchasability for product  
    Return Type

        Add availableStock //The number of products available in stock.
        Add stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
* `GET` /shipping-zones List shipping zones  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /shipping-zones/{shippingZoneId} Update shipping zone  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/{shippingZoneId} Show shipping zone details  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/search/find-all-serviceable-countries Find serviceable countries  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /shipping-zones/{shippingZoneId}/shipping-methods Sort shipping methods in shipping zone  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/{shippingZoneId}/shipping-methods List shipping methods of shipping zone  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `PUT` /shipping-zones/{shippingZoneId}/shipping-methods/{shippingMethodId} Modify shipping method  
    Parameter

        Add .weightBasedPrice //The price depending on the package weight (optional).
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shipping-zones/{shippingZoneId}/shipping-methods/{shippingMethodId} Show details of shipping method in shipping zone  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]




## 2021-03-11


### What's Changed

* `POST` /coupon-campaigns Create coupon campaign  
    Parameter

        Delete .active //(Deprecated) Indicates whether a coupon campaign is active or not. Can be `true` or `false`. The value of this property impacts the status of the coupon campaign (see <<resources-coupon-campaign-update>>).
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign  
    Parameter

        Delete .active //(Deprecated) Indicates whether a coupon campaign is active or not. Can be `true` or `false`. The value of this property impacts the status of the coupon campaign (see <<resources-coupon-campaign-update>>).
    Return Type

        Delete active //(Deprecated) Indicates whether a coupon campaign is active or not. Can be `true` or `false`. The value of this property impacts the status of the coupon campaign (see <<resources-coupon-campaign-update>>).
* `GET` /coupon-campaigns/{couponCampaignId} Show details of coupon campaign  
    Return Type

        Delete active //(Deprecated) Indicates whether a coupon campaign is active or not. Can be `true` or `false`. The value of this property impacts the status of the coupon campaign (see <<resources-coupon-campaign-update>>).
* `PUT` /coupon-campaigns/{couponCampaignId}/status Update coupon campaign status  
    Return Type

        Delete active //(Deprecated) Indicates whether a coupon campaign is active or not. Can be `true` or `false`. The value of this property impacts the status of the coupon campaign (see <<resources-coupon-campaign-update>>).

## 2021-03-09

### What's Changed
---
* `PATCH` /products/{productId} Update variation product partially  
    Return Type

        Add taxClass //The tax class of the product.
        Add lastModifiedAt //The date and time the product was modified.
        Add visible //Indicates if the product is visible in the online shop.
        Add essentialFeatures //The essential product properties of the product. Shown in the cart and checkout. In Germany mandatory field in online shops according to §312j Abs. 2 BGB (German Civil Code).
        Add salesPrice //The price of the product.
        Add description //The description of the product.
        Add shippingPeriod
        Add tags //The tags assigned to the product.
        Add manufacturer //The manufacturer of the product.
        Add refPrice //The reference price of the product.
        Add productIdentifiers //The list of product identifiers.
        Add _embedded
        Add shippingWeight //The weight of the product including packaging in g.
        Add name //The name of the product.
        Add variationAttributes //The variation attributes with their values.
        Add manufacturerPrice //The manufacturer's suggested retail price of the product.
        Add _id //The immutable, unique identifier of the requested resource.
        Add sku //The stock keeping unit (SKU) corresponding to the product.
        Add shippingDimension
        Add maxOrderQuantity //Displays how often the product can be ordered at maximum in one order.
        Add listPrice //The previous price of a product that is currently on offer.
* `POST` /products/{productId}/availability/adjust-available-stock Adjust stock level of product  
    Parameter

        Add .relativeAmount //The relative amount to change the number of products available in stock by.
    Return Type

        Add purchasable //Indicates if the product is available for purchase. Can be `true` or `false`. If the product is not available for purchase, its availability state is `NOT_AVAILABLE`.
        Add availabilityState //The current availability state of the product. Can be one of `IN_STOCK`, `LOW_STOCK`, `NOT_AVAILABLE`, or `OUT_OF_STOCK`.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
        Add availableStock //The number of products available in stock.
        Add stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
* `POST` /products/{productId}/availability/disable-purchasability Disable purchasability for product  
    Return Type

        Add purchasable //Indicates if the product is available for purchase. Can be `true` or `false`. If the product is not available for purchase, its availability state is `NOT_AVAILABLE`.
        Add availabilityState //The current availability state of the product. Can be one of `IN_STOCK`, `LOW_STOCK`, `NOT_AVAILABLE`, or `OUT_OF_STOCK`.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /products/{productId}/availability/disable-stock-management Disable stock management for product  
    Return Type

        Add purchasable //Indicates if the product is available for purchase. Can be `true` or `false`. If the product is not available for purchase, its availability state is `NOT_AVAILABLE`.
        Add availabilityState //The current availability state of the product. Can be one of `IN_STOCK`, `LOW_STOCK`, `NOT_AVAILABLE`, or `OUT_OF_STOCK`.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /products/{productId}/availability/enable-purchasability Enable purchasability for product  
    Return Type

        Add purchasable //Indicates if the product is available for purchase. Can be `true` or `false`. If the product is not available for purchase, its availability state is `NOT_AVAILABLE`.
        Add availabilityState //The current availability state of the product. Can be one of `IN_STOCK`, `LOW_STOCK`, `NOT_AVAILABLE`, or `OUT_OF_STOCK`.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /products/{productId}/availability/enable-stock-management Enable stock management for product  
    Parameter

        Add .initialAvailableStock //The number of products available in stock.
        Add .stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
    Return Type

        Add purchasable //Indicates if the product is available for purchase. Can be `true` or `false`. If the product is not available for purchase, its availability state is `NOT_AVAILABLE`.
        Add availabilityState //The current availability state of the product. Can be one of `IN_STOCK`, `LOW_STOCK`, `NOT_AVAILABLE`, or `OUT_OF_STOCK`.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
        Add availableStock //The number of products available in stock.
        Add stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
* `PUT` /products/{productId}/availability/update-stock-threshold Update reserve stock of product  
    Parameter

        Add .stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
    Return Type

        Add purchasable //Indicates if the product is available for purchase. Can be `true` or `false`. If the product is not available for purchase, its availability state is `NOT_AVAILABLE`.
        Add availabilityState //The current availability state of the product. Can be one of `IN_STOCK`, `LOW_STOCK`, `NOT_AVAILABLE`, or `OUT_OF_STOCK`.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
        Add availableStock //The number of products available in stock.
        Add stockThreshold //The inventory level that indicates that the product needs to be reordered. If the stock level of the product is equal to or lower than this value but higher than 0, the availability state for the product is `LOW_STOCK`.
* `POST` /products/{productId}/variation-attributes/{variationAttributeId}/values Create variation attribute value  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
        Add displayName //The name of the variation attribute defined by the merchant, e.g. name, size, or color.
        Add values //The variation attribute values defined by the merchant, e.g. the detailed sizes such as S, M, L, and XL.
        Add _id //The immutable, unique identifier of the requested resource.
        Add variationImagesDifferentiator //The name of the variation attribute the variation images are assigned for.
* `POST` /products/{productId}/variations/{variationId}/availability/adjust-available-stock Adjust stock level of variation  
    Parameter

        Add .relativeAmount //The relative amount to change the number of variations available in stock by.

## 2021-03-08

-XX:InitialHeapSize=64572928 -XX:MaxHeapSize=1073741824 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
### What's New
---

### What's Deprecated
---

### What's Changed
---
* `PUT` /script-tags/{scriptTagId} Update script tag  
    Return Type

        Add categories //The identifiers for the areas in which the script tag can be included in the storefront. Can be one or more of `SHIPPING`, `LEGAL`, `MARKETING`, `STOREFRONT`, `PRODUCT_IMAGE`, `PAYMENT`, `ORDER`, `EMBEDDED_IN_NAVIGATION`, `NO_COOKIE_CONSENT_REQUIRED`, or `ENABLE_SCRIPTING_IN_CHECKOUT`.
* `GET` /script-tags/{scriptTagId} Show script tag details  
    Return Type

        Add categories //The identifiers for the areas in which the script tag can be included in the storefront. Can be one or more of `SHIPPING`, `LEGAL`, `MARKETING`, `STOREFRONT`, `PRODUCT_IMAGE`, `PAYMENT`, `ORDER`, `EMBEDDED_IN_NAVIGATION`, `NO_COOKIE_CONSENT_REQUIRED`, or `ENABLE_SCRIPTING_IN_CHECKOUT`.

## 2021-03-04

### What's Changed
---
* `PUT` /products/{productId}/attributes/{productAttributeName} Update product attribute  
    Return Type

        Delete value //The value of the product attribute.
* `GET` /products/{productId}/attributes/{productAttributeName} Show product attribute details  
    Return Type

        Delete value //The value of the product attribute.


## 2021-02-24

### What's New
---
* `PUT` /customers/{customerId}/master-data Update customer master data


### What's Changed
---
* `PUT` /customers/{customerId} Update customer  
    Return Type

        Add masterData //The master date of the customer.
* `GET` /customers/{id} Show customer details  
    Return Type

        Add masterData //The master date of the customer.

## ?????

### What's Changed
---
* `POST` /orders Create order  
    Parameter

        Add .orderNumber //The order number of the order. Is automatically generated according to the https://developer.epages.com/beyond-docs/#list_order_settings[order number configuration] unless explicitly provided during order creation.

## 2021-01-26

### What's New
---
* `POST` /orders/exports Create order export
* `GET` /orders/exports/{orderExportId} Show order export status


## 2021-01-21

### What's New
---
* `GET` /customers/{id}/events List customer events


## 2021-01-15

### What's Changed
---
* `GET` /product-view/categories/search/find-by-product List categories assigned to product  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
        Add _embedded
        Add page //See https://developer.epages.com/beyond-docs/#pagination[Pagination]


## 2021-01-13


### What's Changed
---
* `PUT` /customers/{customerId} Update customer  
    Return Type

        Add customerOrigin //Indicates how the customer has been created. Defaults to `STOREFRONT` which is also applied to all customers who registered during checkout. The origin `COCKPIT` can e.g. be used for customers that are manually created by the merchant. Customers with the origin `COCKPIT` can be stored without an email address and with a billing address that only includes first name and last name.
        Add defaultPaymentMethodId //The identifier of the default payment method.
        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
        Add _embedded
        Add defaultShippingAddress //The shipping address of the customer. Defaults to the billing address if no shipping address is set. Refer to <<resources-cart-set-shipping-address,Set cart shipping address>> for item documentation.
        Add testCustomer //The field determines if this customer has *any* test orders.
        Add defaultShippingMethodId //The identifier of the default shipping method.
        Add _id //The immutable, unique identifier for the customer.
        Add creationDate //The date the customer was registered or created.
        Add customerNumber //The unique customer number.
        Add defaultBillingAddress //The billing address of the customer. Refer to <<resources-cart-set-billing-address,Set cart billing address>> for item documentation.
        Add email //The unique email address of the customer.

## 2021-01-12

### What's Changed
---
* `GET` /customers/{id} Show customer details  
    Return Type

        Add testCustomer //The field determines if this customer has *any* test orders.

## 2021-01-07

### What's New
---
* `GET` /orders/export Export orders (Not publicly documented, yet)


## 2020-12-21

### What's Changed
---
* `GET` /customers/{id} Show customer details  
    Return Type

        Add _embedded

## 2020-12-18

### What's Changed
---

        Delete _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `POST` /products/{productId}/cross-sells Create product cross-sell  
    Parameter

        Add .defaultSort //The default sorting applied to the products included in the cross-sell resource. Products in `MANUAL` cross-sell resources will be sorted in the order in which they were added to the cross-sell resource.
* `GET` /products/{productId}/cross-sells/{crossSellId} Show product cross-sell details  
    Return Type

        Add defaultSort //The default sorting applied to the products included in the cross-sell resource. Products in `MANUAL` cross-sell resources will be sorted in the order in which they were added to the cross-sell resource.

## 2020-12-10

### What's Changed
---
* `PUT` /products/{productId}/cross-sells/{crossSellId} Modify product cross-sell  
    Parameter

        Add .defaultSort //The default sorting applied to the products included in the cross-sell.
    Return Type

        Add defaultSort //The default sorting applied to the products included in the cross-sell.

## 2020-12-09

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        customerId Notes Filters by the ID of the customer that placed the order. change into Filters by the unique identifier of the customer who placed the order.
        customerNumber Notes Filters by the customer number of the customer that placed in the order. change into Filters by the customer number of the customer who placed the order.

## 2020-12-07

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add customerNumber //Filters by the customer number of the customer that placed in the order.
* `GET` /orders/{orderId} Show order details  
    Return Type

        Add customerNumber //The number of the customer who placed the order.

## 2020-11-19

### What's Changed
---
* `POST` /customers Create customer  
    Parameter

        Add .customerOrigin //The customer origin. During sign up, a customer can be created with different conditions. Can be one of `STOREFRONT` or `COCKPIT`. The default value is `STOREFRONT`.
* `GET` /customers/{id} Show customer details  
    Return Type

        Add customerOrigin //The customer origin. During sign up, a customer can be created with different conditions. Can be one of {{values}}. The default value is `STOREFRONT`.

## 2020-11-16

### What's Changed
---
* `GET` /payment-methods/{paymentMethodId} Show payment method details  
    Return Type

        Add defaultPaymentNote //Legal information about the payment method which will be added to invoice documents.
* `POST` /payment-methods/{paymentMethodId}/activate Activate payment method  
    Return Type

        Add defaultPaymentNote //Legal information about the payment method which will be added to invoice documents.
* `POST` /payment-methods/{paymentMethodId}/deactivate Deactivate payment method  
    Return Type

        Add defaultPaymentNote //Legal information about the payment method which will be added to invoice documents.

## 2020-10-29

### What's New
---
* `DELETE` /products/{productId}/variation-attributes/values Delete multiple variation attribute values

## 2020-10-28

### What's New
---
* `POST` /orders Create order

## 2020-10-22

### What's Changed
---
* `PUT` /categories/{categoryId} Update all product category properties  
    Parameter

        Add .defaultSort //The default sorting applied to the products included in the product category. Products of `MANUAL` categories will be sorted in the order in which they were added to the category.
    Return Type

        Add defaultSort //The default sorting applied to the products included in the product category. Products of `MANUAL` categories will be sorted in the order in which they were added to the category.
* `PATCH` /categories/{categoryId} Update product category partially  
    Return Type

        Add defaultSort //The default sorting applied to the products included in the product category. Products of `MANUAL` categories will be sorted in the order in which they were added to the category.
* `GET` /orders/{orderId} Show order details  
    Return Type

        Add customerId //The ID of the customer who placed the order.
* `GET` /orders/{orderId}/processes/shippings/{shipping-process-id} Show shipping process details  
    Return Type

        Add packingSlipPdfUri //The URI of the packing slip PDF generated as a part of the shipping process.
* `POST` /payments/{paymentId}/status Set payment status  
    Parameter

        Add .message //Further information for the merchant regarding this payment (e.g. Terms and Conditions).
    Return Type

        Add message //Further information for the merchant regarding this payment (e.g. Terms and Conditions).


## 2020-10-09

### What's New
---
* `GET` /orders/{id}/documents/{documentId} Get order document details


## 2020-10-05

### What's Deprecated
---
* `POST` /product-view/products/search/find-by-query List products by query
* `DELETE` /payment-methods/{paymentMethodId} Delete payment method
* `POST` /users/support Enable support access
* `DELETE` /users/support Disable support access


## 2020-09-08

### What's New
---
* `GET` /orders/{id}/documents Get the invoice details

## 2020-09-02

### What's New
---
* `POST` /product-view/categories/preview Find products by filter criteria

## 2020-09-01

### What's Changed
---
* `POST` /shop/images Upload shop image  
    Parameter

        Content-Type Notes The content type of the image. Can be one of `image/png`, `image/jpeg`, or `image/gif`. change into The content type of the request. Must be `multipart/form-data`.

## 2020-08-26

### What's Changed
---
* `PUT` /shop/locations/{locationId} Update location  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]
* `GET` /shop/locations/{locationId} Show location details  
    Return Type

        Add _links //See https://developer.epages.com/beyond-docs/#hypermedia[Hypermedia]

## 2020-08-24

### What's Changed
---
* `PATCH` /shop Update shop partially  
    Parameter

        Delete .defaultLocale //The default locale of the shop (cannot be changed).
        Delete .primaryHostname //The primary hostname of the shop.
        Delete .fallbackHostname //The unchangeable, fallback hostname of the shop.

## 2020-08-19

### What's Changed
---
* `GET` /product-view/categories/{categoryId}/products List products by category  
    Parameter

        sortBy Notes The sorting applied to the products included in the product category. Can be one of `NEWEST_FIRST`, `LOWEST_PRICE_FIRST`, `HIGHEST_PRICE_FIRST`, `ON_SALE_FIRST`, or `OUT_OF_STOCK_LAST`. change into The sorting applied to the list of products included in the product category. Can be one of `NEWEST_FIRST`, `LOWEST_PRICE_FIRST`, `HIGHEST_PRICE_FIRST`, `ON_SALE_FIRST`, or `OUT_OF_STOCK_LAST`.
* `POST` /shop/locations Create location  
    Parameter

        Add .googleStatus //The status of the location.
        Add .googleAdditionalCategories //The list of additional categories of the location.
* `PUT` /shop/locations/{locationId} Update location  
    Parameter

        Add .googleStatus //The status of the location.
        Add .googleAdditionalCategories //The list of additional categories of the location.
    Return Type

        Add googleStatus //The status of the location.
        Add googleAdditionalCategories //The list of additional categories of the location.
* `GET` /shop/locations/{locationId} Show location details  
    Return Type

        Add googleStatus //The status of the location.
        Add googleAdditionalCategories //The list of additional categories of the location.

## 2020-08-13

### What's New
---
* `POST` /product-view/products/search/find-by-ids Show product details


## 2020-08-12

### What's New
---
* `GET` /shop/locations List locations
* `POST` /shop/locations Create location
* `GET` /shop/locations/{locationId} Show location details
* `PUT` /shop/locations/{locationId} Update location
* `DELETE` /shop/locations/{locationId} Delete location

### What's Changed
---
* `GET` /product-view/categories/{categoryId}/products List products by category  
    Parameter

        Add sortBy //The sorting applied to the products included in the product category. Can be one of `NEWEST_FIRST`, `LOWEST_PRICE_FIRST`, `HIGHEST_PRICE_FIRST`, `ON_SALE_FIRST`, or `OUT_OF_STOCK_LAST`.

## 2020-08-03

### What's New
---
* `GET` /products/{productId}/variations/images List variation images across all variations

### What's Changed
---

* `POST` /products/{productId}/images Upload product image  
    Parameter

        fileName Notes The file name of the image. Must be provided for each image to be uploaded. change into The file name of the image.
        Content-Type Notes The content type of the request. Must be `multipart/form-data`. change into The content type of the image. Can be one of `image/png`, `image/jpeg`, or `image/gif`.
* `POST` /products/{productId}/variations/images Upload multiple variation images to multiple variations  
    Parameter

        variation Notes The immutable, unique identifier of the variation. change into The unique identifier of the variations to which the images are to be uploaded.
* `POST` /products/{productId}/variations/{variationId}/images Upload multiple variation images  
    Parameter

        fileName Notes The file name of the image. change into The file name of the image. Must be provided for each image to be uploaded.
        Content-Type Notes The content type of the image. Can be one of `image/png`, `image/jpeg`, or `image/gif`. change into The content type of the request. Must be `multipart/form-data`.

## 2020-07-28

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add updatedAfter //Filters by the date/time of orders last updated after this timestamp. Expressed according to ISO 8601. Example&#58; `2020-11-29T11:32:00`.
        Add updatedBefore //Filters by the date/time of orders last updated before this timestamp. Expressed according to ISO 8601. Example&#58; `2020-11-29T11:32:00`.
* `GET` /orders/{orderId} Show order details  
    Return Type

        Add updatedAt //The date and time the order was last updated. According to ISO 8601.

## 2020-07-27

### What's Changed
---
* `GET` /product-view/categories/{categoryId} Show category details  
    Return Type

        Add defaultSort //The default sort of the category. Can be one of `NEWEST_FIRST`, `LOWEST_PRICE_FIRST`, `HIGHEST_PRICE_FIRST`, `ON_SALE_FIRST`, or `OUT_OF_STOCK_LAST`.
* `GET` /product-view/categories/search/find-by-label Find product category by label  
    Return Type

        Add defaultSort //The default sort of the category. Can be one of `NEWEST_FIRST`, `LOWEST_PRICE_FIRST`, `HIGHEST_PRICE_FIRST`, `ON_SALE_FIRST`, or `OUT_OF_STOCK_LAST`.
* `POST` /products/search Search for products including variation products  
    Parameter

        Add .filters //The list of filters.

## 2020-07-23

### What's Changed
---
* `GET` /orders/filters List order filter categories  
    Return Type

        Add allPaymentMethods
        Delete paymentMethods

## 2020-07-22

### What's Changed
---
* `POST` /categories Create category  
    Parameter

        Add .defaultSort //The default sort for the collection. SMART collections have be one of `NEWEST_FIRST`, `LOWEST_PRICE_FIRST`, `HIGHEST_PRICE_FIRST`, `ON_SALE_FIRST`, or `OUT_OF_STOCK_LAST` and MANUAL collections keep the same order as the products were added..
* `GET` /categories/{categoryId} Show category details  
    Return Type

        Add defaultSort //The default sort for the collection. SMART collections have be one of `NEWEST_FIRST`, `LOWEST_PRICE_FIRST`, `HIGHEST_PRICE_FIRST`, `ON_SALE_FIRST`, or `OUT_OF_STOCK_LAST` and MANUAL collections keep the same order as the products were added..

## 2020-07-20

### What's New
---
* `GET` /orders/filters Show order filters with amount order range


## 2020-07-13

### What's Changed
---
* `POST` /orders/{orderId}/processes/returns Create return process  
    Parameter

        Add .shippingProcessId //The ID of the shipping process.
* `GET` /orders/{orderId}/processes/returns/{return-process-id} Show return process details  
    Return Type

        Add _embedded

## 2020-06-25

### What's Changed
---
* `PUT` /shop/attributes/{name} Update shop attribute  
    Return Type

        Add owner //The id of the client that owns the attribute.
* `GET` /shop/attributes/{name} Show shop attribute details  
    Return Type

        Add owner //The id of the client that owns the attribute.

## 2020-06-18

### What's New
---
* `DELETE` /products/{productId}/variations/images Delete variation images for multiple variations


## 2020-06-17

### What's New
---
* `POST` /products/product-import Import product
* `PUT` /products/{productId}/variations/images Sort variation images for multiple variations


## 2020-06-15

### What's New
---
* `GET` /products/filters List available filters
* `GET` /products/filters/{filterKey} Show filters details

## 2020-06-12

### What's New
---
* `POST` /products/search Search for products including variation products


## 2020-06-11

### What's New
---
* `PUT` /products/{productId}/variations-import Import variations


## 2020-06-09

### What's New
---
* `PUT` /coupon-campaigns/{couponCampaignId}/status Update coupon campaign status


### What's Changed
---
* `POST` /coupon-campaigns Create coupon campaign  
    Parameter

        Delete .status //The automatically calculated coupon campaign status (see <<resources-coupon-campaign-update>>). Can be `DRAFT`, `PLANNED`, `ACTIVE`, `PAUSED`, `EXPIRED`, or `ARCHIVED`. By default, a campaign is a `DRAFT` upon creation.
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign  
    Parameter

        Delete .status //The automatically calculated coupon campaign status (see <<resources-coupon-campaign-update>>). Can be `DRAFT`, `PLANNED`, `ACTIVE`, `PAUSED`, `EXPIRED`, or `ARCHIVED`. By default, a campaign is a `DRAFT` upon creation.

## 2020-05-26

### What's Changed
---
* `GET` /order-settings List order settings  
    Return Type

        Delete customInvoiceCanceledMailText //Deprecated in favor of `customInvoiceCorrectionMailText`. A customizable text body for the email that is sent to the customer with the invoice cancellation pdf attached. Merchants can adapt the email body to their needs in case the default text does not meet their requirements.
* `PUT` /order-settings Update order settings  
    Parameter

        Add .customInvoiceCorrectionMailText //A customizable text body for the email that is sent to the customer with the invoice correction or cancellation pdf attached. Merchants can adapt the email body to their needs in case the default text does not meet their requirements.
        Delete .customInvoiceCanceledMailText //Deprecated in favor of `customInvoiceCorrectionMailText`. A customizable text body for the email that is sent to the customer with the invoice cancellation pdf attached. Merchants can adapt the email body to their needs in case the default text does not meet their requirements.
    Return Type

        Delete customInvoiceCanceledMailText //Deprecated in favor of `customInvoiceCorrectionMailText`. A customizable text body for the email that is sent to the customer with the invoice cancellation pdf attached. Merchants can adapt the email body to their needs in case the default text does not meet their requirements.

## 2020-05-25

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add couponCampaignId //Filters by the ID of the coupon campaign associated with the order.

## 2020-05-18

### What's Changed
---
* `PUT` /order-settings Update order settings  
    Return Type

        Add customInvoiceCorrectionMailText //A customizable text body for the email that is sent to the customer with the invoice correction or cancellation pdf attached. Merchants can adapt the email body to their needs in case the default text does not meet their requirements.
* `GET` /order-settings List order settings  
    Return Type

        Add customInvoiceCorrectionMailText //A customizable text body for the email that is sent to the customer with the invoice correction or cancellation pdf attached. Merchants can adapt the email body to their needs in case the default text does not meet their requirements.

## 2020-05-04

### What's New
---
* `POST` /products/{productId}/duplicate Duplicate product
* `PUT` /coupon-campaigns/{couponCampaignId}/coupons adds coupon code

### What's Deprecated
---
* `POST` /coupon-campaigns/{couponCampaignId}/coupons Create coupon code


## 2020-04-27

### What's Changed

* `GET` /products/{productId}/attachments List product attachments  
    Return Type

        Add _embedded
* `GET` /products/{productId}/images List product images  
    Return Type

        Add _embedded
* `GET` /products/{productId}/videos List product videos  
    Return Type

        Add _embedded

## 2020-04-22

### What's Changed
---
* `POST` /coupon-campaigns Create coupon campaign  
    Parameter

        Add .status //(read only) Shows the coupon campaign status. Can be {{values}}. By default, a campaign is a `DRAFT` upon creation.
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign  
    Parameter

        Add .status //(read only) Shows the coupon campaign status. Can be {{values}}. By default, a campaign is a `DRAFT` upon creation.

## 2020-04-17

### What's New
---
* `POST` /products/{productId}/external-images Upload external product image
* `DELETE` /carts/{cartId}/coupon Delete coupon from cart

### What's Changed
---
* `POST` /coupon-campaigns Create coupon campaign  
    Parameter

        Add .active //The field which is used for campaign activation, pausing and archiving (see <<resources-coupon-campaign-put>>).
        Delete .status //Indicates whether the coupon campaign is active or not. Can be `DRAFT` or `ACTIVE`. By default, a campaign is a `DRAFT` upon creation.
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign  
    Parameter

        Add .active //The field which is used for campaign activation, pausing and archiving (see <<resources-coupon-campaign-put>>).
        Delete .status //Indicates whether the coupon campaign is active or not. Can be `DRAFT` or `ACTIVE`. By default, a campaign is a `DRAFT` upon creation.
    Return Type

        Add active //The field which is used for campaign activation, pausing and archiving (see <<resources-coupon-campaign-put>>).
* `GET` /coupon-campaigns/{couponCampaignId} Show details of coupon campaign  
    Return Type

        Add active //The field which is used for campaign activation, pausing and archiving (see <<resources-coupon-campaign-put>>).

## 2020-04-14

### What's Changed
---
* `POST` /coupon-campaigns Create coupon campaign  
    Parameter

        Add .maxNumberOfRedemptions //The maximum number of coupon code redemptions for a campaign. Is validated against the aggregated redemptions counter of all coupon codes that are part of the coupon campaign.
        Delete .maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign  
    Parameter

        Add .maxNumberOfRedemptions //The maximum number of coupon code redemptions for a campaign. Is validated against the aggregated redemptions counter of all coupon codes that are part of the coupon campaign.
        Delete .maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.
    Return Type

        Add maxNumberOfRedemptions //The maximum number of coupon code redemptions for a campaign. Is validated against the aggregated redemptions counter of all coupon codes that are part of the coupon campaign.
        Add totalNumberOfRedemptions //The sum of the redemption counters of all coupon codes in the given campaign.
        Delete maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.
* `GET` /coupon-campaigns/{couponCampaignId} Show details of coupon campaign  
    Return Type

        Add maxNumberOfRedemptions //The maximum number of coupon code redemptions for a campaign. Is validated against the aggregated redemptions counter of all coupon codes that are part of the coupon campaign.
        Add totalNumberOfRedemptions //The sum of the redemption counters of all coupon codes in the given campaign.
        Delete maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.

## 2020-04-07

### What's New
---
* `GET` /products/{productId}/variation-attributes List variation attributes
* `GET` /products/{productId}/variation-attributes/{variationAttributeId} Show variation attribute details


### What's Changed
---
* `POST` /coupon-campaigns Create coupon campaign  
    Parameter

        Add .maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.
* `GET` /coupon-campaigns/{couponCampaignId} Show details of coupon campaign  
    Return Type

        Add maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.
* `PUT` /coupon-campaigns/{couponCampaignId} Update coupon campaign  
    Parameter

        Add .maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.
    Return Type

        Add maxNumberOfUses //The maximum number of coupon code redemptions for a campaign which is validated against the aggregated usage counter from all of its coupon codes.


## 2020-04-06

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        customerEmail Notes Filters by the customer email address of the order. change into Filters by a partial match with the customer email address of the order.
        orderNumber Notes Filters by the order number. change into Filters by a partial match with the order number.
        invoiceNumber Notes Filters by the invoice number for the order. change into Filters by a partial match with the invoice number for the order.

## 2020-04-03

### What's New
---
* `POST` /products/{productId}/variation-attributes/{variationAttributeId}/values Create variation attribute values

### What's Changed
---
* `POST` /products/{productId}/variations/images Add multiple variation images to multiple variations  
    Parameter

        Add fileName //The file name of the image. Must be provided for each image to be uploaded.
        Add Content-Type //The content type of the request. Must be `multipart/form-data`.

## 2020-03-31

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add paymentMethodId //Filters by the ID of the payment method used for the order.
        Add shippingMethodId //Filters by the ID of the shipping method used for the order.
        paymentMethod Notes Filters by the payment method used for the order. change into Filters by a partial match with the payment method name used for the order.
        shippingMethod Notes Filters by the shipping method used for the order. change into Filters by a partial match with the shipping method name used for the order.

## 2020-03-30

### What's New
---
* `PUT` /products/{productId}/availability/update-stock-threshold Update reserve stock of product
* `PUT` /products/{productId}/variation-attributes/{variationAttributeId} Update variation attribute

### What's Deprecated
---
* `POST` /products/{productId}/variation-attributes/{variationAttributeId} Update variation attribute

## 2020-03-27

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add shippingAddress //Filters by a partial match with the address fields of the shipping address of the order, e.g. street, city.
        billingAddress Notes Filters by a partial match with the `displayAddressLines` of the billing address of the order, e.g. the customer name. change into Filters by a partial match with the address fields of the billing address of the order, e.g. street, city.
* `PATCH` /shop Update shop partially  
    Parameter

        Delete .defaultCurrency //The default currency of the shop.
        Delete .currencies //List of currencies that are supported by this shop. Defaults to `defaultCurrency`. The `defaultCurrency` is always included in this list.

## 2020-03-26

### What's New
---
* `POST` /products/{productId}/variations/images Add multiple variation images to multiple variations

## 2020-03-24

### What's Changed
---
* `GET` /orders List orders  
    Parameter

        customerEmail Notes The customer email address of the order. change into Filters by the customer email address of the order.
        customerName Notes Filters by a partial match with the customer's name (any of first name, middle name, last name, company name) used in billing address or shipping address. change into Filters by a partial match with the customer name (first name, middle name, last name, and/or company name) used in the billing or shipping address of the order.

## 2020-03-23

### What's New
---
* `PUT` /products/{productId}/variation-attributes Sets the order of the variation attributes of a product


## 2020-03-19

### What's New
---
* `POST` /carts/{cartId}/coupon Redeem coupon for cart


## 2020-03-17

### What's New
---
* `PUT` /products/{productId}/variation-attributes/{variationAttributeId}/values Sort variation attribute values


### What's Changed
---
* `GET` /orders List orders  
    Parameter

        Add customerName //Filters by a partial match with the customer's name (any of first name, middle name, last name, company name) used in billing address or shipping address.

## 2020-03-17

### What's New
---
* `GET` /product-view/products/{productId}/cross-sells/{crossSellId} List products of a cross-sell resource

## 2020-03-16

### What's New
---
* `GET` /product-view/products/{productId}/media Get product media

### What's Changed
---
* `GET` /orders/{orderId} Show order details  
    Return Type

        Add couponLineItem //The coupon information.

## 2020-03-13

### What's New
---
* `DELETE` /products/{productId}/variation-attributes/{variationAttributeId}/values Delete variation attribute values


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
