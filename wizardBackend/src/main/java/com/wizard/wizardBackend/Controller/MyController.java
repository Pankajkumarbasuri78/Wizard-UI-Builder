package com.wizard.wizardBackend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wizard.wizardBackend.Modal.Response;
import com.wizard.wizardBackend.Modal.WizardData;
import com.wizard.wizardBackend.Repo.ResponseRepo;
import com.wizard.wizardBackend.Services.WizardDataService;

@RestController
@CrossOrigin("*")
public class MyController {

    @Autowired
    private WizardDataService wizardDataService;

    @Autowired
    private ResponseRepo responseRepo;

    @GetMapping("/")
    public String check() {
        return "Wizard";
    }

    @PostMapping("/saveData")
    public ResponseEntity<?> saveData(@RequestBody String jsonData) {

        WizardData json = wizardDataService.saveData(jsonData);
        // System.out.println(json);

        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @PostMapping("/saveData/{id}")
    public ResponseEntity<?> saveDataWithAnswer(@RequestBody String jsonData, @PathVariable long id) {

        WizardData json = wizardDataService.saveDataWithAnswer(jsonData, id);
        System.out.println(json.getJsonData());

        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @PostMapping("/saveUserRes/{id}")
    public ResponseEntity<?> saveResponse(@RequestBody String jsonData, @PathVariable long id) {

        Response json = wizardDataService.saveResponse(jsonData, id);
        System.out.println(json.getJsonDataResponse());

        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @GetMapping("/getData")
    public List<WizardData> getAllData() {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);
        List<WizardData> list = wizardDataService.getAllData();
        return list;

    }

    @GetMapping("/getDataRes")
    public List<Response> getAllDataRes() {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);
        List<Response> list = responseRepo.findAll();
        return list;

    }

    @GetMapping("/getData/{id}")
    public Optional<WizardData> getData(@PathVariable Long id) {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);

        return wizardDataService.getData(id);

    }

    @DeleteMapping("/deleteData/{id}")
    public ResponseEntity<String> deleteDataById(@PathVariable Long id) {
        try {
            wizardDataService.deleteDataById(id);
            return new ResponseEntity<>("Data with ID " + id + " deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting data with ID " + id, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
