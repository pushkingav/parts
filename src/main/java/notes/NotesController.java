package notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api"})
public class NotesController {
  @Autowired
  private NotesService notesService;

  @PostMapping
  public Note create(@RequestBody Note note) {
    return notesService.create(note);
  }

  @GetMapping(path ={"/{id}"})
  public Note findOne(@PathVariable("id") int id) {
    return notesService.findById(id);
  }

  @PutMapping
  public Note update(@RequestBody Note note) {
    return notesService.update(note);
  }

  @DeleteMapping(path ={"/{id}"})
  public Note delete(@PathVariable("id") int id) {
    return notesService.delete(id);
  }

  @GetMapping
  public List findAll() {
    return notesService.findAll();
  }

}
