package homework.backend.service;

import homework.backend.model.User;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface UserService {

    Boolean login(String name, String password);

    User getInfoByToken(String token);

    User getInfoByName(String name);

    boolean checkUserExist(String name);
}
