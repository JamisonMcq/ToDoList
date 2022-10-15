package todolist.models;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "listitems")
public class ListItem {
    @GenericGenerator(name = "generator", strategy = "increment")
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "generator")
    private int id;

    private String title;
    private String description;
    private Timestamp posted;

    public ListItem() {
    }

    public ListItem(int id, String title, String description, Timestamp posted) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.posted = posted;
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

    public Timestamp getPosted() {
        return posted;
    }

    public void setPosted(Timestamp posted) {
        this.posted = posted;
    }

    @Override
    public String toString() {
        return "ListItem{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", posted=" + posted +
                '}';
    }
}
