package com.wizard.wizardBackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wizard.wizardBackend.Modal.Response;

@Repository
public interface ResponseRepo extends JpaRepository<Response,Long> {

    
} 
