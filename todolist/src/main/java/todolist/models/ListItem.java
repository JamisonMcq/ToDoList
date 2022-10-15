package todolist.models;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "listitems")
public class ListItem {
    @GenericGenerator(name = "generator", strategy = "increment")
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "generator")
    private int id;
    private String title;
    private String description;
    @Column(name = "doby")
    private LocalDate doBy;

    public ListItem() {
    }

    public ListItem(int id, String title, String description, LocalDate doBy) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.doBy = doBy;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDoBy() {
        return doBy;
    }

    public void setDoBy(LocalDate doBy) {
        this.doBy = doBy;
    }

    @Override
    public String toString() {
        return "ListItem{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", doby=" + doBy +
                '}';
    }
}
