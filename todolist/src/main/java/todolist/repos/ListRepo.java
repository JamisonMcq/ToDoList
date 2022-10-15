package todolist.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import todolist.models.ListItem;

@Repository
public interface ListRepo extends JpaRepository<ListItem, Integer> {
}
