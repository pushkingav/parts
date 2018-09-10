package parts;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "parts")
public class Part {
  @Id
  @Column
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column
  private String title;
  @Column
  private int quantity;
  @Column
  private boolean iRequired;

  public Part(String title, int quantity, boolean iRequired) {
    this.title = title;
    this.quantity = quantity;
    this.iRequired = iRequired;
  }

  public Part() {}


  public int getId() {
      return id;
    }

  public void setId(int id) {
      this.id = id;
    }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public boolean isiRequired() {
    return iRequired;
  }

  public void setiRequired(boolean iRequired) {
    this.iRequired = iRequired;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Part part = (Part) o;
    return iRequired == part.iRequired &&
      Objects.equals(title, part.title);
  }

  @Override
  public int hashCode() {
    return Objects.hash(title, iRequired);
  }
}
