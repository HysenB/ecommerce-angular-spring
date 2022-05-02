package com.hysenberisha.ecommerce.dto;

import com.hysenberisha.ecommerce.entity.Address;
import com.hysenberisha.ecommerce.entity.Customer;
import com.hysenberisha.ecommerce.entity.Order;
import com.hysenberisha.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;



}
