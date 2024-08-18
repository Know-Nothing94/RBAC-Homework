package homework.backend.service.impl;

import homework.backend.mapper.UserMapper;
import homework.backend.model.User;
import homework.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserMapper userMapper;

    /**
     * @desc check user login
     * @param name
     * @param password
     * @return 1(have user) / 0(no user)
     */
    @Override
    public Boolean login(String name, String password) {
        if(userMapper.checkUserExist(name).equals(1)) {
            User user = userMapper.getUserByName(name);
            if(user.getPassword().equals(password)) {
                return true;
            }
            else
                return false;
        }
        else
            return false;
    }

    /**
     * @desc get user info by token
     * @param token
     * @return user info
     */
    @Override
    public User getInfoByToken(String token) {
        return userMapper.getUserByToken(token);
    }

    /**
     * @desc get user info by name
     * @param name
     * @return user info
     */
    @Override
    public User getInfoByName(String name) {
        return userMapper.getUserByName(name);
    }

    /**
     * @desc check user exists
     * @param name
     * @return boolean
     */
    @Override
    public boolean checkUserExist(String name) {
        if(userMapper.checkUserExist(name).equals(1)) {
            return true;
        }
        else{
            return false;
        }
    }
}
