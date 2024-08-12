import { log } from 'react-native-reanimated';
import {
  HOME_DATA,
  NOTIFICATION,
  EXPLORE_DATA,
  EXPLORE_DATA_PAGE,
  HOME_DATA_PAGE,
  LOADER,
  REFRESH,
  CURRENT_PAGE,
  SET_DATA_TO_LIST,
  IMPORT_HOME,
  IMPORT_EXPLORE,
  NOTIFICATION_DATA_PAGE,
  PROFILE_DATA,
  PROFILE_SELECTED_TAB,
  PROFILE_JOINED_TAB,
  PROFILE_CREATED_TAB,
  PROFILE_LIKED_TAB,
  PROFILE_CALENDER_TAB,
  PROFILE_JOINS_TAB_PAGE,
  PROFILE_CREATED_TAB_PAGE,
  PROFILE_JOINED_TAB_PAGE,
  PROFILE_LIKED_TAB_PAGE,
  PROFILE_CALENDER_TAB_PAGE,
  PROFILE_JOINS_TAB,
  SET_PROFILE_DATA_TO_LIST,
  RESET_STATE_PROFILE,
  PROFILE_BACK,
  RESET_CALENDER_DATA,
  USER_PROFILE_JOINS_TAB,
  USER_PROFILE_CREATED_TAB,
  USER_PROFILE_JOINED_TAB,
  USER_PROFILE_LIKED_TAB,
  USER_PROFILE_CALENDER_TAB,
  USER_PROFILE_JOINS_TAB_PAGE,
  USER_PROFILE_CREATED_TAB_PAGE,
  USER_PROFILE_JOINED_TAB_PAGE,
  USER_PROFILE_LIKED_TAB_PAGE,
  USER_PROFILE_CALENDER_TAB_PAGE,
  HANDLE_MARKE_DATE,
  SET_USER_PROFILE_DATA_TO_LIST,
  SET_DATA_TO_USER_LIST,
} from '../../constants/constants';
import { networkApi } from '../../http/api';
import { url, urlEndPoints } from '../../http/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
const getHomeData = (
  page = 1,
  type = 'EXPLORE',
  loading = false,
  pagination = false,
) => {
  const actions = {
    EXPLORE: EXPLORE_DATA,
    HOME: HOME_DATA,
  };
  const actions_page = {
    HOME: HOME_DATA_PAGE,
    EXPLORE: EXPLORE_DATA_PAGE,
  };
  return async dispatch => {
    try {
      if (loading) {
        dispatch({
          type: LOADER,
          payload: true,
        });
      }
      const apiUrl = `${url.apiUrl}${urlEndPoints.eventsList(page)}`;
      const response = await networkApi(apiUrl, 'POST', { type });
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        saveDataToLocal(response?.data, type);
        pagination
          ? dispatch({
            type: actions_page[type],
            payload: {
              data: response?.data.filter(
                contest => contest.is_event_unavailable == false,
              ),
              meta: response?.meta,
            },
          })
          : dispatch({
            type: actions[type],
            payload: {
              data: response?.data.filter(
                contest => contest.is_event_unavailable == false,
              ),
              meta: response?.meta,
            },
          });
      }
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
    }
  };
};

const getProfileData = (
  page = 1,
  body,
  type = '',
  loading = false,
  pagination = false,
) => {
  const actions = {
    JOINS: PROFILE_JOINS_TAB,
    CREATED: PROFILE_CREATED_TAB,
    JOINED: PROFILE_JOINED_TAB,
    LIKED: PROFILE_LIKED_TAB,
    CALENDAR: PROFILE_CALENDER_TAB,
  };
  const actions_page = {
    JOINS: PROFILE_JOINS_TAB_PAGE,
    CREATED: PROFILE_CREATED_TAB_PAGE,
    JOINED: PROFILE_JOINED_TAB_PAGE,
    LIKED: PROFILE_LIKED_TAB_PAGE,
    CALENDAR: PROFILE_CALENDER_TAB_PAGE,
  };


  return async dispatch => {
    try {
      if (loading) {
        dispatch({
          type: LOADER,
          payload: true,
        });
      }
      return new Promise(async function (resolve, reject) {
        const apiUrl = `${url.apiUrl}${type == 'CALENDAR' ? urlEndPoints.eventsByDate(page) : urlEndPoints.eventsList(page)}`;
        const response = await networkApi(apiUrl, 'POST', body);
        dispatch({
          type: LOADER,
          payload: false,
        });
        if (response?.status) {
          pagination
            ? dispatch({
              type: actions_page[type],
              payload: {
                data: response?.data.filter(
                  contest => contest.is_event_unavailable == false,
                ),
                meta: response?.meta,
              },
            })
            : dispatch({
              type: actions[type],
              payload: {
                data: response?.data.filter(
                  contest => contest.is_event_unavailable == false,
                ),
                meta: response?.meta,
              },
            });
          resolve(response);
        }
      })
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
    }
  };
};

const getUserProfileData = (
  page = 1,
  body,
  type = '',
  loading = false,
  pagination = false,
) => {
  const actions = {
    JOINS: USER_PROFILE_JOINS_TAB,
    CREATED: USER_PROFILE_CREATED_TAB,
    JOINED: USER_PROFILE_JOINED_TAB,
    LIKED: USER_PROFILE_LIKED_TAB,
    CALENDAR: USER_PROFILE_CALENDER_TAB,
  };
  const actions_page = {
    JOINS: USER_PROFILE_JOINS_TAB_PAGE,
    CREATED: USER_PROFILE_CREATED_TAB_PAGE,
    JOINED: USER_PROFILE_JOINED_TAB_PAGE,
    LIKED: USER_PROFILE_LIKED_TAB_PAGE,
    CALENDAR: USER_PROFILE_CALENDER_TAB_PAGE,
  };


  return async dispatch => {
    try {
      if (loading) {
        dispatch({
          type: LOADER,
          payload: true,
        });
      }
      return new Promise(async function (resolve, reject) {
        const apiUrl = `${url.apiUrl}${type == 'CALENDAR' ? urlEndPoints.eventsByDate(page) : urlEndPoints.eventsList(page)}`;
        const response = await networkApi(apiUrl, 'POST', body);
        dispatch({
          type: LOADER,
          payload: false,
        });
        if (response?.status) {
          pagination
            ? dispatch({
              type: actions_page[type],
              payload: {
                data: response?.data.filter(
                  contest => contest.is_event_unavailable == false,
                ),
                meta: response?.meta,
              },
            })
            : dispatch({
              type: actions[type],
              payload: {
                data: response?.data.filter(
                  contest => contest.is_event_unavailable == false,
                ),
                meta: response?.meta,
              },
            });
          resolve(response);
        }
      })
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
    }
  };
}

const profileBack = value => {
  return async dispatch => {
    dispatch({
      type: PROFILE_BACK,
      payload: value,
    });
  };
};

const resetProfileData = () => {
  return async dispatch => {
    dispatch({
      type: RESET_STATE_PROFILE,
    });
  };
};
const resetCalenderData = () => {
  return async dispatch => {
    dispatch({
      type: RESET_CALENDER_DATA,
    });
  };
};
const getNotificationData = (page = 1, loading = true, pagination = false) => {
  return async dispatch => {
    try {
      if (loading) {
        dispatch({
          type: LOADER,
          payload: true,
        });
      }
      const apiUrl = `${url.apiUrl}${urlEndPoints.notifications(page)}`;
      const response = await networkApi(apiUrl, 'GET');
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        saveDataToLocal(response?.data, NOTIFICATION);
        pagination
          ? dispatch({
            type: NOTIFICATION_DATA_PAGE,
            payload: {
              data: response?.data,
              meta: response?.meta,
            },
          })
          : dispatch({
            type: NOTIFICATION,
            payload: {
              data: response?.data,
              meta: response?.meta,
            },
          });
      }
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
      console.log('error_getNotificationData', error);
    }
  };
};

const setProfileTab = payload => {
  return async dispatch => {
    dispatch({
      type: PROFILE_SELECTED_TAB,
      payload: payload,
    });
  };
};

const setDataToList = payload => {
  return async dispatch => {
    dispatch({
      type: SET_DATA_TO_LIST,
      payload: payload,
    });
  };
};
const setDataToUserList = payload => {
  return async dispatch => {
    dispatch({
      type: SET_DATA_TO_USER_LIST,
      payload: payload,
    });
  };
};
const setProfileDataToList = payload => {
  return async dispatch => {
    dispatch({
      type: SET_PROFILE_DATA_TO_LIST,
      payload: payload,
    });
  };
};
const setUserProfileDataToList = payload => {
  return async dispatch => {
    dispatch({
      type: SET_USER_PROFILE_DATA_TO_LIST,
      payload: payload,
    });
  };
};
const refreshingPage = value => {
  return async dispatch => {
    dispatch({
      type: REFRESH,
      payload: value,
    });
  };
};

const saveDataToLocal = async (homeData, type) => {
  type == 'HOME'
    ? await AsyncStorage.setItem('IMPORT_HOME', JSON.stringify(homeData))
    : type == 'EXPLORE'
      ? await AsyncStorage.setItem('IMPORT_EXPLORE', JSON.stringify(homeData))
      : await AsyncStorage.setItem(
        'IMPORT_NOTIFICATION',
        JSON.stringify(homeData),
      );
};
const handleMarkDate = (value) => {
  return async dispatch => {
    dispatch({
      type: HANDLE_MARKE_DATE,
      payload: value,
    });
  };
};
export default {
  getHomeData,
  getNotificationData,
  refreshingPage,
  setDataToList,
  setProfileTab,
  getProfileData,
  setProfileDataToList,
  resetProfileData,
  profileBack,
  resetCalenderData,
  getUserProfileData,
  handleMarkDate,
  setUserProfileDataToList,
  setDataToUserList
};
