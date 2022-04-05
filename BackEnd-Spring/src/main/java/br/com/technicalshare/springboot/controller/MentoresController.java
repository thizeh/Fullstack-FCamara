package br.com.technicalshare.springboot.controller;

import br.com.technicalshare.springboot.model.Mentores;
import br.com.technicalshare.springboot.repository.MentoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mentores")
public class MentoresController {

    @Autowired
    private MentoresRepository mentoresRepository;

    @GetMapping
    public List<Mentores> getAllMentores(){
        return mentoresRepository.findAll();
    }
}
