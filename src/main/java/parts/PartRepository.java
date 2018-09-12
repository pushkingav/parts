package parts;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PartRepository extends Repository<Part, Integer>  {
  void delete(Part part);
  List<Part> findAll();
  Part findById(int id);
  Part save(Part part);

  @Query("select MIN(quantity) from Part where iRequired = true")
  Integer inStockCount();
}
