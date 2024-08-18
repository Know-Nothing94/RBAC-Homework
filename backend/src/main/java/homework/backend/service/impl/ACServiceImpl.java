package homework.backend.service.impl;

import homework.backend.mapper.ACMapper;
import homework.backend.model.ACManagement;
import homework.backend.service.ACService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ACServiceImpl implements ACService {

    @Autowired
    private ACMapper ACMapper;

    /**
     * @desc get AC List
     * @return AC List
     */
    @Override
    public List<ACManagement> getACList() {
        return ACMapper.getACList();
    }

    /**
     * @desc get online AC number
     * @return count
     */
    @Override
    public Integer getOnlineACNumber() {
        return ACMapper.getOnlineACNumber();
    }
}
