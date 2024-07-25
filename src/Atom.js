import { atom } from "recoil";

export const UserData = atom({
    key: 'UserData',
    default: {
        id: "",
    }
});

export const ReservationData = atom({
    key: 'ReservationData',
    default: {
        userName: "",
        userFaculty: "",
        date: new Date(),
        startTime: "",
        endTime: "",
        capacity: "",
        roomId: "",
        groupname: "",
        purpose: "",
        
    }
});

export const AvailableRooms = atom({
    key: 'AvailableRooms',
    default: []
});