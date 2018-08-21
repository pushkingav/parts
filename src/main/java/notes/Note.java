package notes;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "notes")
public class Note {
  @Id
  @Column
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column
  private String title;
  @Column
  private String text;
  @Column
  private Date dateCreated;

    public Note(String title, String text, Date dateCreated, Integer id) {
      this.title = title;
      this.text = text;
      this.dateCreated = dateCreated;
      this.id = id;
    }

    public Note() {
    }

    public String getText() {
      return text;
    }

    public void setText(String text) {
      this.text = text;
    }

    public Date getDateCreated() {
      return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
      this.dateCreated = dateCreated;
    }

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

  @Override
    public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;
      Note note = (Note) o;
      return id == note.id &&
        Objects.equals(text, note.text) &&
        Objects.equals(dateCreated, note.dateCreated);
    }

    @Override
    public int hashCode() {
      return Objects.hash(text, dateCreated, id);
    }
}
