package homework.backend.controller;

import homework.backend.model.User;
import homework.backend.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @ApiOperation("User login api")
    @GetMapping("/login")
    public Map<String, Object> UserLogin(@RequestParam(value = "name") String name,
                                         @RequestParam(value = "password") String password) {
        Map<String, Object> response = new HashMap<>();
        if(userService.login(name, password)) {
            User user = userService.getInfoByName(name);
            response.put("code", 200);
            Map<String, Object> data = new HashMap<>();
            System.out.println(user.getToken());
            data.put("token", user.getToken());
            response.put("data", data);
        }
        else{
            response.put("code", 401);
        }
        return response;
    }

    @ApiOperation("Get user info api")
    @GetMapping("/userinfo")
    public Map<String, Object> UserInfo(@RequestParam(value = "token") String token) {
        Map<String, Object> response = new HashMap<>();
        User currentOnlineUser = userService.getInfoByToken(token);
        response.put("code", 200);
        Map<String, Object> data = new HashMap<>();
        data.put("roles", currentOnlineUser.getRoles());
        data.put("name", currentOnlineUser.getName());
        data.put("avatar", currentOnlineUser.getAvatar());
        data.put("introduction", currentOnlineUser.getIntroduction());
        response.put("data", data);
        return response;
    }
}
