package br.com.technicalshare.springboot.controller;

import br.com.technicalshare.springboot.exception.ResourceNotFoundException;
import br.com.technicalshare.springboot.model.Mentores;
import br.com.technicalshare.springboot.repository.MentoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/mentores")
public class MentoresController {

    @Autowired
    private MentoresRepository mentoresRepository;

    @GetMapping
    public List<Mentores> getAllMentores(){
        return mentoresRepository.findAll();
    }

    // cria Rest API dos mentores
    @PostMapping
    public Mentores createMentores(@RequestBody Mentores mentores){
        return mentoresRepository.save(mentores);
    }

    // cria o get mentor by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Mentores> getMentoresById(@PathVariable long id) {
        Mentores mentores = mentoresRepository.findById(id)
                .orElseThrow(() -> new ResourceAccessException("O Mentor com esse id não existe" + id));
        return ResponseEntity.ok(mentores);
    }

    // cria o update mentor REST API
    @PutMapping("{id}")
    public ResponseEntity<Mentores> updateMentores(@PathVariable long id,@RequestBody Mentores mentoresDetails){
        Mentores updateMentores = mentoresRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("O Mentor com esse id não existe" + id));

        updateMentores.setFirstName(mentoresDetails.getFirstName());
        updateMentores.setLastName(mentoresDetails.getLastName());
        updateMentores.setEmailId(mentoresDetails.getEmailId());

        mentoresRepository.save(updateMentores);

        return ResponseEntity.ok(updateMentores);
    }
}
