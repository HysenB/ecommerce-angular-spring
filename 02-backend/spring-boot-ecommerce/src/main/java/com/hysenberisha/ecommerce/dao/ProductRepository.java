package com.hysenberisha.ecommerce.dao;

import com.hysenberisha.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
