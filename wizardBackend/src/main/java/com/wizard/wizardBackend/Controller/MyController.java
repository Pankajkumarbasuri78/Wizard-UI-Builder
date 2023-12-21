package com.wizard.wizardBackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wizard.wizardBackend.Modal.Template;
import com.wizard.wizardBackend.Repo.TemplateRepo;

// import com.wizard.wizardBackend.Modal.WizardForm;
// import com.wizard.wizardBackend.Services.WizardFormService;



@RestController
public class MyController {

    // @Autowired
    // private WizardFormService wizardFormService;

    @Autowired
    private TemplateRepo templateRepo;

    @GetMapping("/")
    public String check() {
        return "Wizard";
    }
    
    // @PostMapping("/addQ")
    // public List<WizardForm> addQ(@RequestBody List<WizardForm> data) {
        
    //     System.out.println("hello");
    //     return wizardFormService.addQ(data);
    // }

    @PostMapping("/addData")
    public Template addData(@RequestBody Template template)
    {
        return templateRepo.save(template);
    }
    
    
}
