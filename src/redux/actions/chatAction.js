import { CHATS, CHAT_HISTORY, CHAT_USERS } from "../../constants/constants"
import orderBy from "lodash/orderBy"

const setChat = (payload = []) => {
    return async dispatch => {
        dispatch({
            type: CHATS, payload: orderBy(payload, "createdAt", "desc")
        })
    }
}

const setChatHistory = (payload = []) => {
    return async dispatch => {
        dispatch({
            type: CHAT_HISTORY, payload: orderBy(payload, "lastUpdatedAt", "desc")
        })
    }
}

const setChatUsers = (payload = []) => {
    return async dispatch => {
        dispatch({
            type: CHAT_USERS, payload
        })
    }
}

export default { setChat, setChatHistory, setChatUsers }