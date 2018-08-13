package notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotesServiceImpl implements NotesService {
  @Autowired
  private NotesRepository repository;

  @Override
  public Note create(Note note) {
    return repository.save(note);
  }

  @Override
  public Note findById(int id) {
    return repository.findOne(id);
  }

  @Override
  public Note update(Note note) {
    //TODO - add implementation
    return null;
  }

  @Override
  public Note delete(int id) {
    Note note = findById(id);
    if (note != null) {
      repository.delete(note);
    }
    return note;
  }

  @Override
  public List<Note> findAll() {
    return repository.findAll();
  }
}
