package notes;

import java.util.Date;
import java.util.Objects;

public class Note {
    private String name;
    private String text;
    private Date dateCreated;
    private int id;

    public Note(String name, String text, Date dateCreated, int id) {
      this.name = name;
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

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
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
