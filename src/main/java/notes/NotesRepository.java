package notes;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface NotesRepository extends Repository<Note, Integer>  {
  void delete(Note note);
  List findAll();
  Note findOne(Integer id);
  Note save(Note note);
}
