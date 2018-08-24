package notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {
  @Autowired
  private NoteRepository repository;

  @Override
  public Note create(Note note) {
    return repository.save(note);
  }

  @Override
  public Note findById(int id) {
    return repository.findById(id);
  }

  @Override
  public Note update(Note note) {
    return repository.save(note);
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
