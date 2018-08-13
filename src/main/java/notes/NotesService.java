package notes;

import java.util.List;

public interface NotesService {
  Note create(Note note);
  Note findById(int id);
  Note update(Note note);
  Note delete(int id);
  List<Note> findAll();
}
