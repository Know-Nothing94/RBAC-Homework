package homework.backend.model;

import java.util.Date;


/**
 * 空调类
 */
public class ACManagement {

    private String id;

    private Integer roomID;

    private String roomName;

    private String status;

    private String keepTime;

    private String ACStatus;

    private String type;

    private String curTem;

    private String setTem;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getRoomID() {
        return roomID;
    }

    public void setRoomID(Integer roomID) {
        this.roomID = roomID;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getKeepTime() {
        return keepTime;
    }

    public String getACStatus() {
        return ACStatus;
    }

    public String getCurTem() {
        return curTem;
    }

    public String getType() {
        return type;
    }

    public String getStatus() {
        return status;
    }

    public String getSetTem() {
        return setTem;
    }

    public void setACStatus(String ACStatus) {
        this.ACStatus = ACStatus;
    }

    public void setCurrentTemp(String curTem) {
        this.curTem = curTem;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setSetTem(String setTem) {
        this.setTem = setTem;
    }

    public void setKeepTime(String keepTime) {
        this.keepTime = keepTime;
    }
}
