package parts;

import java.util.List;

public interface PartService {
  Part create(Part part);
  Part findById(int id);
  Part update(Part part);
  Part delete(int id);
  List<Part> findAll();
}
