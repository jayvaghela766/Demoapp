import isEmpty from 'lodash/isEmpty';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {store} from '../../App';

const debug = true;

async function networkApi(
  url,
  method = 'GET',
  body = {},
  headers = {},
  isHtmlResponse = false,
) {
  const {lang} = store?.getState()?.i18nState;
  const {token} = store?.getState()?.commonReducer;



  const headerParam = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    // language: lang,
    // DevTest: 1,
    ...headers,
  };
  // console.log("url==>", url);
  // console.log("method==>", method);
  // console.log("body==>", body);
  // console.log("headers==>", headers);
  if (token) headerParam['Authorization'] = `Bearer ${token}`;
  return new Promise(async function (resolve, reject) {
    try {
      const resBody = {
        method,
        url,
        headers: headerParam,
        //  data: body || {}
      };
      if (!isEmpty(body)) {
        resBody.data = body;
      }
      // if (method.toUpperCase() != "GET")
      //     resBody.data = body

      // debug && console.log("resBody==>", JSON.stringify(resBody));
      let response = await axios(resBody);
      // debug && console.log("123123123", JSON.stringify(response.data))
      if (response.status === 401) {
        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('IMPORT_HOME');
        await AsyncStorage.removeItem('IMPORT_EXPLORE');
        await AsyncStorage.removeItem('IMPORT_NOTIFICATION');
        await AsyncStorage.removeItem('IMPORT_USER_DATA');
        // RootNavigation.navigate('SignInScreen');
      } else {
        if (isHtmlResponse) {
          const responseJSON = await response.text();
          resolve(responseJSON);
        } else {
          const responseJSON = response.data;
          if (responseJSON.status) {
            resolve(responseJSON);
          } else {
            if (responseJSON && responseJSON.message) {
              reject(responseJSON.message);
            } else if (responseJSON) {
              reject(responseJSON);
            }
          }
        }
      }
    } catch (error) {
      debug && console.log(`error APi: ${error}} `, JSON.stringify(error));
      reject(error);
    }
  });
}

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
}

export {networkApi, navigate, setTopLevelNavigator};

// import _ from "lodash"
// import { CommonActions } from '@react-navigation/native';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { store } from "../../App"
// // import { UserAction, LoadingAction } from "./../redux/actions"
// import * as RootNavigation from '../routeNavigation';
// const debug = true

// async function networkApi(url, method = 'GET', body = {}, headers = {}, isHtmlResponse = false) {
//     const AuthorizationToken = await AsyncStorage.getItem("access_token");
//     const { lang = "en" } = store.getState().i18nState
//     const headerParam = {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         // "Bypass-Tunnel-Reminder": "dgdg",
//         // language: lang,
//         // Authorization: 'Bearer ' + AuthorizationToken,
//         ...headers
//     }
//     if (method != "PUT" && AuthorizationToken)
//         headerParam["Authorization"] = `Bearer ${AuthorizationToken}`

//     debug && console.log(`URL : ${url}`)
//     debug && console.log(`METHOD : ${method}`)
//     debug && console.log(`body : ${JSON.stringify(body)}`)
//     debug && console.log(`HEADER : ${JSON.stringify(headerParam)}`)
//     debug && console.log(`isHtmlResponse : ${isHtmlResponse}`)

//     let promise = new Promise(async function (resolve, reject) {
//         try {
//             // let response = await axios({
//             //     method,
//             //     url,
//             //     data: body,
//             //     headers: headerParam
//             // });
//             const params = {
//                 method: method.toUpperCase(),
//                 headers: headerParam,
//             }
//             if (method.toUpperCase() != "GET")
//                 params.body = JSON.stringify(body)
//             let response = await fetch(url, params)
//             // if (method.toUpperCase() != "GET") {
//             //     console.log(`body : ${body}`)
//             //     response.body = body
//             // }

//             debug && console.log("123123123", JSON.stringify(response))
//             if (response.status === 401) {
//                 await AsyncStorage.removeItem("access_token")
//                 await AsyncStorage.removeItem("user_id")
//                 // UserAction.setUserDetails()
//                 // UserAction.setToken()
//                 //console.log(set);
//                 // LoadingAction.hideLoader()
//                 RootNavigation.navigate('Login', { is401: true });
//                 //navigate('SplashScreen')
//             } else {
//                 if (isHtmlResponse) {
//                     const responseJSON = await response.text()
//                     resolve(responseJSON)
//                 } else if (response.status === 500) {
//                     reject("Something went wrong !!!")
//                 } else {
//                     // console.log("response_______", response.json());
//                     const responseJSON = await response.json()
//                     console.log("JSON_______", responseJSON);

//                     if (responseJSON.status == 200 /* || response.ok */) {
//                         // if (responseJSON.response.status == 200) {
//                         resolve(responseJSON)
//                         // } else {
//                         //     reject(responseJSON.response)
//                         // }

//                         debug && console.log(`responseJSON :`, "URl : ", url, "METHOD : ", method, "HEADER : ", headerParam, "BODY : ", body, "RESPONSE : ", JSON.stringify(responseJSON))

//                     } else {
//                         debug && console.log(`responseJSON : ${JSON.stringify(responseJSON)}`)

//                         if (responseJSON && responseJSON.message) {
//                             response.status === 201 ? resolve(responseJSON) : reject(responseJSON.message)
//                         } else if (responseJSON) {
//                             reject(responseJSON)
//                         }
//                         // console.log(`responseJSON : ${JSON.stringify(responseJSON)}`)
//                     }
//                 }
//             }

//         } catch (error) {
//             debug && console.log(`error APi: ${error})
//         } `)
//             reject(error)
//         }
//     });

//     return promise
// }

// let _navigator;

// function setTopLevelNavigator(navigatorRef) {
//     _navigator = navigatorRef;
// }

// function navigate(routeName, params) {
//     _navigator.dispatch(
//         CommonActions.navigate({
//             routeName,
//             params,
//         })
//     );
// }

// export {
//     networkApi,
//     navigate,
//     setTopLevelNavigator,

// }
