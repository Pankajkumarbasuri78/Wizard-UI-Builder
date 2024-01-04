package com.wizard.wizardBackend.Services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wizard.wizardBackend.Modal.Response;
import com.wizard.wizardBackend.Modal.WizardData;
import com.wizard.wizardBackend.Repo.ResponseRepo;
import com.wizard.wizardBackend.Repo.WizardDataRepo;

@Service
public class WizardDataService {

    @Autowired
    private WizardDataRepo wizardDataRepo;

    @Autowired
    private ResponseRepo responseRepo;

    public WizardData saveData(String jsonData) {
        WizardData wizardData = new WizardData();
        wizardData.setJsonData(jsonData);
        WizardData res =wizardDataRepo.save(wizardData);
        System.out.println(res.getId());
        return res;
    }

    public Optional<WizardData> getData(Long id) {

        return wizardDataRepo.findById(id);
    }

    public List<WizardData> getAllData() {
        return wizardDataRepo.findAll();
    }

    

    public WizardData saveDataWithAnswer(String jsonData, long id) {
        // wizardDataRepo.deleteById(id);
        // WizardData wizardData = new WizardData();
        // wizardData.setJsonData(jsonData);
        // WizardData res =wizardDataRepo.save(wizardData);
        WizardData newWizardData= WizardData.builder()
            .id(id)
            .jsonData(jsonData)
            .build();
        
        WizardData res= wizardDataRepo.save(newWizardData);
        return res;
    }

    public Response saveResponse(String jsonData, long id, String name) {

        Response userData = responseRepo.findByNameAndWizarId(name,id);
        if(userData == null){
           Response newResponseData= Response.builder()
            .wizardId(id)
            .name(name)
            .jsonDataResponse(jsonData)
            .build();
        
        Response res= responseRepo.save(newResponseData);
        return res;
        }

        // System.out.println(userData.getId());

        userData.setJsonDataResponse(jsonData);
        
       return responseRepo.save(userData);

    }

    public void deleteDataById(Long id) {
        wizardDataRepo.deleteById(id);
    }
    
}
