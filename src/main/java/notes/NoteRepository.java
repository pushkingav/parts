package notes;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface NoteRepository extends Repository<Note, Integer>  {
  void delete(Note note);
  List findAll();
  Note findOne(int id);
  Note save(Note note);
}
