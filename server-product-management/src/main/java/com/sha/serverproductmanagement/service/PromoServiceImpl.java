package com.sha.serverproductmanagement.service;

import com.sha.serverproductmanagement.model.Promo;
import com.sha.serverproductmanagement.repository.PromoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PromoServiceImpl implements PromoService {

    @Autowired
    private PromoRepository promoRepository;

    @Override
    public Promo savePromo(final Promo promo) {
        promoRepository.save(promo);
        return promo;
    }

    @Override
    public Promo updatePromo(final Promo promo){
        return promoRepository.save(promo);
    }

    @Override
    public void deletePromo(final Long promoId) {
      promoRepository.deleteById(promoId);
    }

    @Override
    public List<Promo> findAllPromo() {
        return promoRepository.findAll();
    }
}
