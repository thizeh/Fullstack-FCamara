package br.com.technicalshare.springboot.controller;

import br.com.technicalshare.springboot.model.Mentores;
import br.com.technicalshare.springboot.repository.MentoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
