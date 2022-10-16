package todolist.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todolist.models.ListItem;
import todolist.repos.ListRepo;

import java.util.List;

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

    public void delete(int id) {
        listRepo.deleteById(id);
    }
}
