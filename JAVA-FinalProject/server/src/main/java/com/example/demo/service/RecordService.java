package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Record;
import com.example.demo.repository.RecordRepository;

@Service
public class RecordService {

    private RecordRepository recordRepository;

    @Autowired
    public RecordService(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

    public Record createRecord(Record record){
        return recordRepository.save(record);
    }

    public List<Record> getRecords(){
        return recordRepository.findAll();
    }

    public Record deleteRecord(Long id){
        Record record = recordRepository.findById(id).orElse(null);
        recordRepository.delete(record);
        return record;
    }
}
