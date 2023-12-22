package com.wizard.wizardBackend.Controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wizard.wizardBackend.Modal.WizardData;
import com.wizard.wizardBackend.Services.WizardDataService;






@RestController
public class MyController {


    @Autowired
    private WizardDataService wizardDataService;
    

    @GetMapping("/")
    public String check() {
        return "Wizard";
    }
    
    @PostMapping("/saveData")
    public ResponseEntity<String> saveData(@RequestBody String jsonData)
    {

        String json = wizardDataService.saveData(jsonData);

        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @GetMapping("/getData")
    public List<WizardData> getAllData()
    {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);
        List<WizardData> list = wizardDataService.getAllData();
        return list;

    }

    @GetMapping("/getData/{id}")
    public Optional<WizardData> getData(@PathVariable Long id)
    {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);

        return wizardDataService.getData(id);

    }
    
}
