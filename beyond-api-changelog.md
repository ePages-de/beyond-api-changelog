# Beyond API Changelog

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
