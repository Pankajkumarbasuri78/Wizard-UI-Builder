package com.wizard.wizardBackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wizard.wizardBackend.Modal.Response;

@Repository
public interface ResponseRepo extends JpaRepository<Response,Long> {

    @Query("SELECT c from Response c WHERE c.name = :name AND c.wizardId = :id")
Response findByNameAndWizarId(@Param("name")String name, @Param("id")Long id);



} 
