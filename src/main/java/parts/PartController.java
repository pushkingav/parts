package parts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api"})
public class PartController {
  @Autowired
  private PartService partService;

  @PostMapping
  public Part create(@RequestBody Part part) {
    return partService.create(part);
  }

  @GetMapping(path ={"/{id}"})
  public Part findOne(@PathVariable("id") int id) {
    return partService.findById(id);
  }

  @PutMapping
  public Part update(@RequestBody Part part) {
    return partService.update(part);
  }

  @DeleteMapping(path ={"/{id}"})
  public Part delete(@PathVariable("id") int id) {
    return partService.delete(id);
  }

  @GetMapping
  public List findAll() {
    return partService.findAll();
  }

}
