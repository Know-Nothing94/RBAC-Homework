package homework.backend.controller;

import homework.backend.model.ACManagement;
import homework.backend.service.ACService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/AC")
public class ACController {

    @Autowired
    private ACService ACService;

    @ApiOperation("Get AC list api")
    @GetMapping("/getACList")
    public Map<String, Object> getACList() {
        Map<String, Object> response = new HashMap<>();
        response.put("code", 200);
        Map<String, Object> data = new HashMap<>();
        List<ACManagement> ACList = ACService.getACList();
        data.put("list", ACList);
        response.put("data", data);
        return response;
    }

    @ApiOperation("Get AC count")
    @GetMapping("/getNum")
    public Map<String, Object> getNum() {
        Map<String, Object> response = new HashMap<>();
        response.put("code", 200);
        Map<String, Object> data = new HashMap<>();
        data.put("total", ACService.getACList().size());
        data.put("onlineTotal", ACService.getOnlineACNumber());
        response.put("data", data);
        return response;
    }
}
