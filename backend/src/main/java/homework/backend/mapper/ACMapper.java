package homework.backend.mapper;

import homework.backend.model.ACManagement;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ACMapper {

    @Select("select * from acmanagement")
    List<ACManagement> getACList();

    @Select("select count(*) from acmanagement where status = 'online'")
    Integer getOnlineACNumber();
}
