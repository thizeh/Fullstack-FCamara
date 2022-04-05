package br.com.technicalshare.springboot;

import br.com.technicalshare.springboot.model.Mentores;
import br.com.technicalshare.springboot.repository.MentoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private MentoresRepository mentoresRepository;

	@Override
	public void run(String... args) throws Exception {
		Mentores mentores = new Mentores();
		mentores.setFirsName("Thiago");
		mentores.setLastName("Oliveira");
		mentores.setEmailId("thiago@email.com");
		mentoresRepository.save(mentores);

		Mentores mentores1 = new Mentores();
		mentores1.setFirsName("Paulo");
		mentores1.setLastName("Santos");
		mentores1.setEmailId("paulo@email.com");
		mentoresRepository.save(mentores1);

		Mentores mentores2 = new Mentores();
		mentores2.setFirsName("Cristiano");
		mentores2.setLastName("Barros");
		mentores2.setEmailId("cristiano@email.com");
		mentoresRepository.save(mentores2);
	}
}
