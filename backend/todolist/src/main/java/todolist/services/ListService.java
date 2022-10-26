package todolist.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todolist.models.ListItem;
import todolist.repos.ListRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ListService {
    @Autowired
    private ListRepo listRepo;

    public ListService(ListRepo listRepo) {
        this.listRepo = listRepo;
    }

    public List<ListItem> getAllListItems(){
        return listRepo.findAll();
    }

    public ListItem saveListItem(ListItem listItem){
        return listRepo.save(listItem);
    }

    public Optional<ListItem> findById(int id){
        return listRepo.findById(id);
    }

    public void delete(int id) {
        listRepo.deleteById(id);
    }
}
