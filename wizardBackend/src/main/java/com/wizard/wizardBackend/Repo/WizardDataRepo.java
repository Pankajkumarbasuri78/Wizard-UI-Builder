package com.wizard.wizardBackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wizard.wizardBackend.Modal.WizardData;

@Repository
public interface WizardDataRepo extends JpaRepository<WizardData,Long>{
    
}
