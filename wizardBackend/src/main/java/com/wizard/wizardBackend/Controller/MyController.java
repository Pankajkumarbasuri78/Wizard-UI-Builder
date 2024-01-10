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

    

    @GetMapping("/getData")
    public List<WizardData> getAllData() {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);
        List<WizardData> list = wizardDataService.getAllData();
        return list;

    }

    @GetMapping("/getData/{id}")
    public Optional<WizardData> getData(@PathVariable("id") Long id) {
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

    //response

     @GetMapping("/getDataRes")
    public List<Response> getAllDataRes() {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);
        List<Response> list = responseRepo.findAll();
        return list;

    }

    @GetMapping("/getDataRes/{id}")
    public Optional<Response> getResDataById(@PathVariable("id") Long wizardId) {
        // Optional<WizardData> JsonData = wizardDataService.getData(id);
        Optional<Response> list = responseRepo.findById(wizardId);
        System.out.println(list);
        return list;

    }

    // @PostMapping("/saveUserRes/{id}")
    // public ResponseEntity<?> saveResponse(@RequestBody String jsonData, @PathVariable long id) {

    //     Response json = wizardDataService.saveResponse(jsonData, id);
    //     System.out.println(json.getJsonDataResponse());

    //     return new ResponseEntity<>(json, HttpStatus.OK);
    // }
    @PostMapping("/saveUserRes/{id}/{name}")
    public ResponseEntity<?> saveResponse(@RequestBody String jsonData, @PathVariable("id") long id, @PathVariable("name") String name) {

        Response json = wizardDataService.saveResponse(jsonData, id,name);
        System.out.println(json.getJsonDataResponse());

        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @PostMapping("/checkUserRes/{id}/{name}")
    public ResponseEntity<String> checkUserRes(@PathVariable("id") Long id, @PathVariable("name") String name){

        String message = wizardDataService.checkUserRes(id,name);
        
        return new ResponseEntity<>(message,HttpStatus.OK);
    }

    @DeleteMapping("/deleteDataRes/{id}")
    public ResponseEntity<String> deleteDataResById(@PathVariable Long id) {
        try {
            responseRepo.deleteById(id);
            return new ResponseEntity<>("Data with ID " + id + " deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting data with ID " + id, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/pankajRes")
    public ResponseEntity<?> saveResponseData(@RequestBody String jsonData) {

        // Response json = wizardDataService.saveResponse(jsonData);
        // System.out.println(json.getJsonDataResponse());

        return new ResponseEntity<>(jsonData, HttpStatus.OK);
    }

}
