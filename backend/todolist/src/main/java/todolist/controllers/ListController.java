package todolist.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todolist.models.ListItem;
import todolist.repos.ListRepo;
import todolist.services.ListService;
import java.util.List;

@RestController
@RequestMapping("api/")
//@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"}, allowCredentials = "true")
public class ListController {

    private ListService listService;
    private ListRepo listRepo;

    @Autowired
    public ListController(ListService listService, ListRepo listRepo) {
        this.listService = listService;
        this.listRepo = listRepo;
    }

    @GetMapping("list")
    public ResponseEntity getAllList(){
        List<ListItem> allList = listService.getAllListItems();
        return ResponseEntity.ok(allList);
    }

    @PostMapping("new")
    public ResponseEntity createItem(@RequestBody ListItem item){
        return ResponseEntity.status(HttpStatus.CREATED).body(listService.saveListItem(item));
    }
}
