import {
  LOADER,
  SHOW_ALERT,
  STORE_TOKEN,
  USER_DATA,
  INTEREST_LIST,
  SHOW_CATEGORY,
  FRIEND_REQUEST_LIST,
  REPORT_REASON_LIST,
  PROFILE_TAB,
  SETTINGS,
  PROMOTE_AD,
  PAYMENT_METHODS,
  SAVE_LOCATION,
  RECENT_SEARCH,
  SET_ROUTE_NAME,
  SET_JOIN_TYPE_DETAIL,
  PRIVACY,
  APP_UPDATE,
  SOCIAL_LOGIN,
  HANDLE_RELOAD,
  HOME_DATA,
  DATA,
  SENT_LIKE,
  NOTIFICATION_COUNT,
  PROFILE_DATA,
  PROFILE_SELECTED_TAB,
  REMINDER_LIST,
  HANDLE_RELOAD_PUBLIC,
  HANDLE_SCROLL_TO_TOP,
  HANDLE_RELOAD_NOTIFIICATION,
} from '../../constants/constants';
import {networkApi} from '../../http/api';
import {url, urlEndPoints} from '../../http/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {da} from 'date-fns/locale';
import {getVersion} from 'react-native-device-info';
import {Platform} from 'react-native';

import {commonAction, joinDataAction} from '../../redux/actions';
import {Alert} from 'react-native';
// import { store } from '../../../App'
// import { commonAction } from "../../redux/actions"

const showLoader = () => {
  return async dispatch => {
    dispatch({
      type: LOADER,
      payload: true,
    });
  };
};
const hideLoader = () => {
  return async dispatch => {
    dispatch({
      type: LOADER,
      payload: false,
    });
  };
};
const handleAlert = (obj = {}) => {
  return async dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: obj,
    });
  };
};
const storeToken = token => {
  return async dispatch => {
    dispatch({
      type: STORE_TOKEN,
      payload: token,
    });
  };
};
const setUserData = data => {
  return async dispatch => {
    dispatch({
      type: USER_DATA,
      payload: data,
    });
  };
};
const getUserProfile = (token, loading = true) => {
  return async dispatch => {
    try {
      dispatch({
        type: LOADER,
        payload: loading,
      });
      const apiUrl = `${url.apiUrl}${urlEndPoints.userProfile}`;
      const userDataResponse = await networkApi(apiUrl, 'POST');
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (userDataResponse?.status) {
        saveDataToLocal(userDataResponse?.data);
        dispatch({
          type: USER_DATA,
          payload: userDataResponse?.data,
        });
        dispatch({
          type: PROFILE_DATA,
          payload: {data: userDataResponse?.data},
        });
        dispatch({
          type: PROFILE_SELECTED_TAB,
          payload: userDataResponse?.data?.default_page,
        });
      }
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
      console.log('error_Profile', error);
    }
  };
};
const saveDataToLocal = async homeData => {
  await AsyncStorage.setItem('IMPORT_USER_DATA', JSON.stringify(homeData));
};
const getInterestList = () => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.interestList}`;
      const res = await networkApi(apiUrl, 'GET');
      const {data} = res;
      if (res?.status) {
        dispatch({
          type: INTEREST_LIST,
          payload: data,
        });
      }
    } catch (error) {
      console.log('error_InterestList', error);
    }
  };
};

const getPrivacyPolicy = () => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.privacyPolicy}`;
      const response = await networkApi(apiUrl, 'GET');
      const {data} = response;
      if (response?.status) {
        dispatch({
          type: PRIVACY,
          payload: data,
        });
      }
    } catch (error) {
      console.log('error_PrivacyPolicy', error);
    }
  };
};

const sendAppUpdateVersion = () => {
  return async dispatch => {
    try {
      let versionNumber = getVersion();

      let body = {
        version: versionNumber,
        os_type: Platform.OS,
      };
      const apiUrl = `${url.apiUrl}${urlEndPoints.checkAppUpdateVersion}`;
      const response = await networkApi(apiUrl, 'POST', body);
      const {data} = response;
      if (response?.status) {
        dispatch({
          type: APP_UPDATE,
          payload: data,
        });
      }
    } catch (error) {}
  };
};

const checkSocialLogin = () => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.allowSocialLogin}`;
      const response = await networkApi(apiUrl, 'GET');
      const {data} = response;
      if (response?.status) {
        dispatch({
          type: SOCIAL_LOGIN,
          payload: data,
        });
      }
    } catch (error) {}
  };
};

const handleShowCategory = obj => {
  return async dispatch => {
    dispatch({
      type: SHOW_CATEGORY,
      payload: obj,
    });
  };
};
const handleLikes = (type = 'event', id, updatesApi, page, adId) => {
  return async dispatch => {
    try {
      // dispatch({
      //   type: LOADER,
      //   payload: true,
      // });
      const apiUrl = `${url.apiUrl}${urlEndPoints.toggleLikes}`;
      const body = new FormData();
      body.append('likeable_type', 'event');
      body.append('likeable_id', id);

      if (type === 'Advertisement') {
        body.append('type', type);
        body.append('advertisement_id', adId);
      }
      const headers = {
        'Content-Type': 'multipart/form-data',
        // Authorization: 'Bearer ' + token,
      };
      const response = await networkApi(apiUrl, 'POST', body, headers);
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        // updatesApi(1, false);
        dispatch(joinDataAction.setDataToList(response?.data));
        //getLikesData()
      }
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
      console.log('error===>', error);
    }
  };
};
const getFriendRequestsList = (loading = true, page = 1) => {
  return async dispatch => {
    try {
      dispatch({
        type: LOADER,
        payload: loading,
      });
      const apiUrl = `${url.apiUrl}${urlEndPoints.friendRequests}`;
      const response = await networkApi(apiUrl);
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        dispatch({
          type: FRIEND_REQUEST_LIST,
          payload: response?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
      console.log('getFriendRequestsList__error', error);
    }
  };
};
const getReportReasonsList = (loading = true) => {
  return async dispatch => {
    try {
      dispatch({
        type: LOADER,
        payload: loading,
      });
      const apiUrl = `${url.apiUrl}${urlEndPoints.reportReasons}`;
      const response = await networkApi(apiUrl);
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        dispatch({
          type: REPORT_REASON_LIST,
          payload: response?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
      console.log('getReportReasonsList__error', error);
    }
  };
};
const getProfileTabList = (loading = true) => {
  return async dispatch => {
    try {
      dispatch({
        type: LOADER,
        payload: loading,
      });
      const apiUrl = `${url.apiUrl}${urlEndPoints.defaultPages}`;
      const response = await networkApi(apiUrl);
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        dispatch({
          type: PROFILE_TAB,
          payload: response?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: LOADER,
        payload: false,
      });
      console.log('getProfileTabList__error', error);
    }
  };
};
const getSettingsData = () => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.settings}`;
      const response = await networkApi(apiUrl);
      if (response?.status) {
        dispatch({
          type: SETTINGS,
          payload: response?.settings,
        });
      }
    } catch (error) {
      console.log('getSettingsData__error', error);
    }
  };
};
const storePromoteAdd = obj => {
  return async dispatch => {
    dispatch({
      type: PROMOTE_AD,
      payload: obj,
    });
  };
};
const getPaymentMethods = () => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.paymentMethods}`;
      const response = await networkApi(apiUrl);
      if (response?.status) {
        dispatch({
          type: PAYMENT_METHODS,
          payload: response?.payment_methods,
        });
      }
    } catch (error) {
      console.log('getPaymentMethods__error', error);
    }
  };
};
const saveLocation = location => {
  return async dispatch => {
    dispatch({
      type: SAVE_LOCATION,
      payload: location,
    });
  };
};
const saveRecentSearch = obj => {
  return async dispatch => {
    dispatch({
      type: RECENT_SEARCH,
      payload: obj,
    });
    await AsyncStorage.setItem('recent_search_list', JSON.stringify(obj));
  };
};
const setRouteName = (payload = 'Home') => {
  return async dispatch => {
    dispatch({
      type: SET_ROUTE_NAME,
      payload,
    });
  };
};
const getJoinTypeDetails = token => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.joinTypes}`;
      const response = await networkApi(apiUrl, 'GET');
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        dispatch({
          type: SET_JOIN_TYPE_DETAIL,
          payload: response?.data,
        });
      }
    } catch (error) {}
  };
};
const handleReload = val => {
  return async dispatch => {
    dispatch({
      type: HANDLE_RELOAD,
      payload: val,
    });
  };
};
const handleReloadNotification = val => {
  return async dispatch => {
    dispatch({
      type: HANDLE_RELOAD_NOTIFIICATION,
      payload: val,
    });
  };
};
const handleReloadPublic = val => {
  return async dispatch => {
    dispatch({
      type: HANDLE_RELOAD_PUBLIC,
      payload: val,
    });
  };
};
const handleScrollToTop = val => {
  return async dispatch => {
    dispatch({
      type: HANDLE_SCROLL_TO_TOP,
      payload: val,
    });
  };
};

const unReadNotification = () => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.unMarkNotification}`;
      const response = await networkApi(apiUrl, 'POST');
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        dispatch({
          type: NOTIFICATION_COUNT,
          payload: response?.data,
        });
        dispatch(commonAction.getUserProfile());
      }
    } catch (error) {}
  };
};

const reminderLists = () => {
  return async dispatch => {
    try {
      const apiUrl = `${url.apiUrl}${urlEndPoints.reminderList}`;
      const response = await networkApi(apiUrl, 'GET');
      dispatch({
        type: LOADER,
        payload: false,
      });
      if (response?.status) {
        dispatch({
          type: REMINDER_LIST,
          payload: response?.data,
        });
      }
    } catch (error) {
      console.log('error_reminderLists', error);
    }
  };
};

export default {
  showLoader,
  hideLoader,
  handleAlert,
  storeToken,
  getUserProfile,
  getInterestList,
  handleShowCategory,
  handleLikes,
  getFriendRequestsList,
  getReportReasonsList,
  getProfileTabList,
  getSettingsData,
  storePromoteAdd,
  getPaymentMethods,
  saveLocation,
  saveRecentSearch,
  setRouteName,
  setUserData,
  getJoinTypeDetails,
  getPrivacyPolicy,
  handleReload,
  handleReloadNotification,
  handleReloadPublic,
  unReadNotification,
  reminderLists,
  sendAppUpdateVersion,
  checkSocialLogin,
  handleScrollToTop
};
