package homework.backend.service;

import homework.backend.model.ACManagement;

import java.util.List;

public interface ACService {

    List<ACManagement> getACList();

    Integer getOnlineACNumber();
}
