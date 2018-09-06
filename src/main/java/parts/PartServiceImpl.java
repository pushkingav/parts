package parts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartServiceImpl implements PartService {
  @Autowired
  private PartRepository repository;

  @Override
  public Part create(Part part) {
    return repository.save(part);
  }

  @Override
  public Part findById(int id) {
    return repository.findById(id);
  }

  @Override
  public Part update(Part part) {
    return repository.save(part);
  }

  @Override
  public Part delete(int id) {
    Part part = findById(id);
    if (part != null) {
      repository.delete(part);
    }
    return part;
  }

  @Override
  public List<Part> findAll() {
    return repository.findAll();
  }
}
