import { FORM_REGISTER, SET_JOIN_DETAILS, SET_PROFILE_UPDATE } from "../../constants/constants"
import { networkApi } from '../../http/api'
import { url, urlEndPoints } from '../../http/apiConfig'


const addForm = (obj = {}) => {
    return async dispatch => {
        dispatch({
            type: FORM_REGISTER, payload: obj
        })
    }
}

const setJoinDetails = (payload = {}) => {
    return async dispatch => {
        dispatch({
            type: SET_JOIN_DETAILS, payload
        })
    }
}
const setProfileUpdateForm = (payload = {}) => {
    return async dispatch => {
        dispatch({
            type: SET_PROFILE_UPDATE, payload
        })
    }
}

export default { addForm, setJoinDetails, setProfileUpdateForm }