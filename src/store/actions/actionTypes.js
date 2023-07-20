const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',


    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAIDED: 'FETCH_GENDER_FAIDED',

    //dien chuan
    FETCH_TYPEOF_START: 'FETCH_TYPEOF_START',
    FETCH_TYPEOF_SUCCESS: 'FETCH_TYPEOF_SUCCESS',
    FETCH_TYPEOF_FAIDED: 'FETCH_TYPEOF_FAIDED',

    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAIlDED: 'FETCH_POSITION_FAIlDED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILDED: 'FETCH_ROLE_FAILDED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILDED: 'CREATE_USER_FAILDED',
    

    // dien chuan
    CREATE_ITEM_SUCCESS: 'CREATE_ITEM_SUCCESS',
    CREATE_ITEM_FAILDED: 'CREATE_ITEM_FAILDED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILDED: 'EDIT_USER_FAILDED',

    //ddien chuan
    EDIT_ITEM_SUCCESS: 'EDIT_ITEM_SUCCESS',
    EDIT_ITEM_FAILDED: 'EDIT_ITEM_FAILDED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILDED: 'DELETE_USER_FAILDED',

    // dien chuan
    DELETE_ITEM_SUCCESS: 'DELETE_ITEM_SUCCESS',
    DELETE_ITEM_FAILDED: 'DELETE_ITEM_FAILDED',


    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILDED: 'FETCH_ALL_USERS_FAILDED',

    // dien chuan

    FETCH_ALL_ITEMS_SUCCESS: 'FETCH_ALL_ITEMS_SUCCESS',
    FETCH_ALL_ITEMS_FAILDED: 'FETCH_ALL_ITEMS_FAILDED',

    FETCH_TOP_DOCTORS_SUCCESS: 'FETCH_TOP_DOCTORS_SUCCESS',
    FETCH_TOP_DOCTORS_FAILDED: 'FETCH_TOP_DOCTORS_FAILDED',

    // dien chuan
    FETCH_ITEMS_CAYLAN_SUCCESS: 'FETCH_ITEMS_CAYLAN_SUCCESS',
    FETCH_ITEMS_CAYLAN_FAILDED: 'FETCH_ITEMS_CAYLAN_FAILDED',

    FETCH_ITEMS_QUEDO_SUCCESS: 'FETCH_ITEMS_QUEDO_SUCCESS',
    FETCH_ITEMS_QUEDO_FAILDED: 'FETCH_ITEMS_QUEDO_FAILDED',

    FETCH_ITEMS_THIETBI_SUCCESS: 'FETCH_ITEMS_THIETBI_SUCCESS',
    FETCH_ITEMS_THIETBI_FAILDED: 'FETCH_ITEMS_THIETBI_FAILDED',

    FETCH_ITEMS_SACH_SUCCESS: 'FETCH_ITEMS_SACH_SUCCESS',
    FETCH_ITEMS_SACH_FAILDED: 'FETCH_ITEMS_SACH_FAILDED',

    FETCH_ALL_DOCTORS_SUCCESS: 'FETCH_ALL_DOCTORS_SUCCESS',
    FETCH_ALL_DOCTORS_FAILDED: 'FETCH_ALL_DOCTORS_FAILDED',

    //dien chuan
    FETCH_ALL_ITEMS_NAME_SUCCESS: 'FETCH_ALL_ITEMS_NAME_SUCCESS',
    FETCH_ALL_ITEMS_NAME_FAILDED: 'FETCH_ALL_ITEMS_NAME_FAILDED',

    SAVE_DETAIL_DOCTOR_SUCCESS: 'SAVE_DETAIL_DOCTOR_SUCCESS',
    SAVE_DETAIL_DOCTOR_FAILDED: 'SAVE_DETAIL_DOCTOR_FAILDED',

    //dien chuan
    SAVE_DETAIL_ITEMS_SUCCESS: 'SAVE_DETAIL_ITEMS_SUCCESS',
    SAVE_DETAIL_ITEMS_FAILDED: 'SAVE_DETAIL_ITEMS_FAILDED',

    FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS: 'FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS',
    FETCH_ALLCODE_SCHEDULE_TIME_FAILDED: 'FETCH_ALLCODE_SCHEDULE_TIME_FAILDED',

    FETCH_REQUIRED_DOCTOR_INFOR_START: 'FETCH_REQUIRED_DOCTOR_INFOR_START',
    FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS: 'FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS',
    FETCH_REQUIRED_DOCTOR_INFOR_FAIDED: 'FETCH_REQUIRED_DOCTOR_INFOR_FAIDED',
})

export default actionTypes;