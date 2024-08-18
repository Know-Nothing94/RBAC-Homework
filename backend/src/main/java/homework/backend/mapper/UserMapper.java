package homework.backend.mapper;

import java.util.List;
import homework.backend.model.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("select * from user where token = #{token}")
    User getUserByToken(@Param("token") String token);

    @Select("select * from user where name = #{name}")
    User getUserByName(@Param("name") String name);

    @Select("select exists(select * from user where name = #{name})")
    Integer checkUserExist(@Param("name") String name);
}
