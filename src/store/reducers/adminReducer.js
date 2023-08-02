import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: [],
    allScheduleTime: [],

    allRequiredDoctorInfor: [],


    // dien chuan 
    isLoadingTypeof: false,
    items: [],
    typeof: [],
    itemsCayLan: [],
    itemsQueDo: [],
    itemsThietBi: [],
    itemsSach: [],
    allItemsName: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state
            }

        case actionTypes.FETCH_GENDER_FAIDED:
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state
            }
           
        // dien chuan

        case actionTypes.FETCH_TYPEOF_START:
            let copyStateTypeof = { ...state };
            copyStateTypeof.isLoadingTypeof = true;
            return {
                ...copyStateTypeof
            }

        case actionTypes.FETCH_TYPEOF_SUCCESS:
            state.typeof = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_TYPEOF_FAIDED:
            state.typeof = [];
            return {
                ...state
            }


        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_POSITION_FAIlDED:
            state.positions = [];
            return {
                ...state
            }


        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_ROLE_FAILDED:
            state.roles = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USERS_FAILDED:
            state.users = [];
            return {
                ...state
            }

        // dien chuan

        case actionTypes.FETCH_ALL_ITEMS_SUCCESS:
            state.items = action.items;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_ITEMS_FAILDED:
            state.items = [];
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_DOCTORS_FAILDED:
            state.topDoctors = [];
            return {
                ...state
            }

        //dien chuan
        case actionTypes.FETCH_ITEMS_CAYLAN_SUCCESS:
            state.itemsCayLan = action.dataItemsCayLan;
            return {
                ...state
            }

        case actionTypes.FETCH_ITEMS_CAYLAN_FAILDED:
            state.itemsCayLan = [];
            return {
                ...state
            }
        
            case actionTypes.FETCH_ITEMS_QUEDO_SUCCESS:
                state.itemsQueDo = action.dataItemsQueDo;
                return {
                    ...state
                }
    
            case actionTypes.FETCH_ITEMS_QUEDO_FAILDED:
                state.itemsQueDo = [];
                return {
                    ...state
                }

                case actionTypes.FETCH_ITEMS_THIETBI_SUCCESS:
                    state.itemsThietBi = action.dataItemsThietBi;
                    return {
                        ...state
                    }
        
                case actionTypes.FETCH_ITEMS_THIETBI_FAILDED:
                    state.itemsThietBi = [];
                    return {
                        ...state
                    }
                
                    case actionTypes.FETCH_ITEMS_SACH_SUCCESS:
                        state.itemsSach = action.dataItemsSach;
                        return {
                            ...state
                        }
            
                    case actionTypes.FETCH_ITEMS_SACH_FAILDED:
                        state.itemsSach = [];
                        return {
                            ...state
                        }

        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
            state.allDoctors = action.dataDr;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_DOCTORS_FAILDED:
            state.allDoctors = [];
            return {
                ...state
            }

        //dien chuan
        case actionTypes.FETCH_ALL_ITEMS_NAME_SUCCESS:
            state.allItemsName = action.dataItems;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_ITEMS_NAME_FAILDED:
            state.allItemsName = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS:
            state.allScheduleTime = action.dataTime;
            return {
                ...state
            }

        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED:
            state.allScheduleTime = [];
            return {
                ...state
            }

        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS:
            state.allRequiredDoctorInfor = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAIDED:
            state.allRequiredDoctorInfor = [];
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;