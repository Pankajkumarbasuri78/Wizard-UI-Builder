package com.wizard.wizardBackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wizard.wizardBackend.Modal.WizardForm;

@Repository
public interface WizardFormRepo extends JpaRepository<WizardForm,Long>{
    
}
