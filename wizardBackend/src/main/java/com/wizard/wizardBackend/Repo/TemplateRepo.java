package com.wizard.wizardBackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wizard.wizardBackend.Modal.Template;

public interface TemplateRepo extends JpaRepository <Template,Integer>{
    
}
