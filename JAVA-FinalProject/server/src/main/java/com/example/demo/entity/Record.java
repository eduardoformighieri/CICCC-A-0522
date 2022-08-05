package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String convertionType;

    private String valueToBeConverted;
    private String fromUnity;

    private String convertedValue;
    private String toUnity;

    public Record() {}
}
