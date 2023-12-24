package com.wizard.wizardBackend.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wizard.wizardBackend.Modal.WizardData;
import com.wizard.wizardBackend.Repo.WizardDataRepo;

@Service
public class WizardDataService {

    @Autowired
    private WizardDataRepo wizardDataRepo;

    public String saveData(String jsonData) {
        WizardData wizardData = new WizardData();
        wizardData.setJsonData(jsonData);
        wizardDataRepo.save(wizardData);
        return jsonData;
    }

    public Optional<WizardData> getData(Long id) {

        return wizardDataRepo.findById(id);
    }

    public List<WizardData> getAllData() {
        return wizardDataRepo.findAll();
    }
    
}