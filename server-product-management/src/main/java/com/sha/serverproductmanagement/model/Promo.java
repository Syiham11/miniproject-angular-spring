package com.sha.serverproductmanagement.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "promo")
public class Promo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="code")
    private String code;

    @Column(name="discount")
    private String discount;
}
