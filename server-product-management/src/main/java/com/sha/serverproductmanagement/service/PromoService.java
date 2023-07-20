package com.sha.serverproductmanagement.service;

import com.sha.serverproductmanagement.model.Product;
import com.sha.serverproductmanagement.model.Promo;

import java.util.List;

public interface PromoService {
    Promo savePromo(Promo promo);

    Promo updatePromo(Promo promo);

    void deletePromo(Long promoId);

     List<Promo> findAllPromo();

}
