import axios from '../axios';
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    //template string
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
//dien chuan
const getAllItems = (inputId) => {
    //template string
    return axios.get(`/api/get-all-item?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('check data from service : ', data)
    return axios.post('/api/create-new-user', data)
}
//dien chuan
const createNewItemService = (data) => {
    console.log('check data from service : ', data)
    return axios.post('/api/create-new-item', data)
}

const deteleUserService = (userId) => {
    // return axios.delete('/api/delete-user', stringt)
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
//dien chuan
const deteleItemService = (itemId) => {
    return axios.delete('/api/delete-item', {
        data: {
            id: itemId
        }
    });
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

// dien chuan
const editItemService = (inputData) => {
    return axios.put('/api/edit-items', inputData);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
// dien chuan
const getAllCodeServiceItems = (inputType) => {
    return axios.get(`/api/allcode-item?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

//dien chuan
const getItmesHomeServiceCayLan = (limit) => {
    return axios.get(`/api/get-items-caylan?limit=${limit}`)
}

const getItmesHomeServiceQueDo = (limit) => {
    return axios.get(`/api/get-items-quedo?limit=${limit}`)
}

const getItmesHomeServiceThietBi = (limit) => {
    return axios.get(`/api/get-items-thietbi?limit=${limit}`)
}

const getItmesHomeServiceSach = (limit) => {
    return axios.get(`/api/get-items-sach?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}

//dien chuan

const getAllItemsName = () => {
    return axios.get(`/api/get-all-items-name`)
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-infor-doctors', data)
}

// dien chuan

const saveDetailItemsService = (data) => {
    return axios.post('/api/save-infor-items-name', data)
}

const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}

//dien chuan 
const getDetailInforItems = (inputId) => {
    return axios.get(`/api/get-detail-items-by-id?id=${inputId}`)
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}

const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}

const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}

const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`)
}

const postPatientBookAppointment = (data) => {
    return axios.post('/api/patient-book-appointment', data)
}

const postVerifyBookAppointment = (data) => {
    return axios.post('/api/verify-book-appointment', data)
}

const createNewSpecialty = (data) => {
    return axios.post('/api/create-new-specialty', data)
}

const getAllSpecialty = () => {
    return axios.get(`/api/get-specialty`)
}

const getAllClinic = () => {
    return axios.get(`/api/get-clinic`)
}

const getAllDetailSpecialtyById = (data) => {
    return axios.get(`/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`)
}

const getAllDetailClinicById = (data) => {
    return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`)
}



const createNewClinic = (data) => {
    return axios.post('/api/create-new-clinic', data)
}


const getAllPatientForDoctor = (data) => {
    return axios.get(`/api/get-list-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`)
}


const postSendRemedy = (data) => {
    return axios.post('/api/send-remedy', data)
}
export {
    handleLoginApi, getAllUsers,
    createNewUserService, deteleUserService,
    editUserService, getAllCodeService, getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctorService,
    getDetailInforDoctor, saveBulkScheduleDoctor,
    getScheduleDoctorByDate, getExtraInforDoctorById,
    getProfileDoctorById, postPatientBookAppointment,
    postVerifyBookAppointment, createNewSpecialty,
    getAllSpecialty, getAllDetailSpecialtyById,
    createNewClinic,
    getAllClinic, getAllDetailClinicById,
    getAllPatientForDoctor, postSendRemedy,
    // dien chuan
    createNewItemService,getAllItems,deteleItemService,getAllCodeServiceItems,
    getItmesHomeServiceCayLan,getItmesHomeServiceQueDo,getItmesHomeServiceThietBi,getItmesHomeServiceSach,
    getAllItemsName,saveDetailItemsService,
    editItemService, getDetailInforItems
}