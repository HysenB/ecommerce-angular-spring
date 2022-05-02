package com.hysenberisha.ecommerce.service;

import com.hysenberisha.ecommerce.dto.Purchase;
import com.hysenberisha.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

}
