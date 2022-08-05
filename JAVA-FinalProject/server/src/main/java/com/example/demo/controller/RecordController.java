package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Record;
import com.example.demo.service.RecordService;

@RestController
@RequestMapping("/records")
public class RecordController {

    private RecordService recordService;

    @Autowired
    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @PostMapping
    public Record createRecord(@RequestBody Record record){
        return recordService.createRecord(record);
    }

    @GetMapping
    public List<Record> getRecords(){
        return recordService.getRecords();
    }

    @DeleteMapping(value = "{id}")
    public Record deleteRecord(@PathVariable final Long id){
        return recordService.deleteRecord(id);
    }
}
