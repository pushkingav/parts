package notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api"})
public class NoteController {
  @Autowired
  private NoteService noteService;

  @PostMapping
  public Note create(@RequestBody Note note) {
    return noteService.create(note);
  }

  @GetMapping(path ={"/{id}"})
  public Note findOne(@PathVariable("id") int id) {
    return noteService.findById(id);
  }

  @PutMapping
  public Note update(@RequestBody Note note) {
    return noteService.update(note);
  }

  @DeleteMapping(path ={"/{id}"})
  public Note delete(@PathVariable("id") int id) {
    return noteService.delete(id);
  }

  @GetMapping
  public List findAll() {
    return noteService.findAll();
  }

}
