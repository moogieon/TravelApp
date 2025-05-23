import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useContext} from 'react';
import {GlobalContext} from '../../App';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from '@emotion/native';
import MainPage from '../screen/units/MainPage/MainPage.container';
import AreaPage from '../screen/units/AreaPage/AreaPage.container';
import BoardDetailPage from '../screen/units/BoardDetailPage/BoardDetailPage.container';
import BoardWritePage from '../screen/units/BoardWritePage/BoardWritePage.container';
import MapPage from '../screen/units/MapPage/MapPage.container';
import ScrapListPage from '../screen/units/ScrapListPage/ScrapListPage.container';
import MyPage from '../screen/units/MyPage/MyPage.container';
import UserPage from '../screen/units/UserPage/UserPage.container';
import CommentAlarmPage from '../screen/units/CommentAlarmPage/CommentAlarmPage.container';
import Search from '../screen/commons/Search/Search.container';
import BoardCommentList from '../screen/commons/BoardComment/list/BoardCommentList.container';
import {gql, useMutation} from '@apollo/client';
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const ScrapStack = createNativeStackNavigator();
const MypageStack = createNativeStackNavigator();
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const LOGIN_USER_WITH_FIREBASE = gql`
  mutation loginUserwithFB($name: String!, $email: String!) {
    loginUserWithFB(name: $name, email: $email) {
      accessToken
    }
  }
`;

// Initialize Apollo Client

GoogleSignin.configure({
  webClientId:
    '130512445436-afrk54n1cvkdtc8v6vcch03n3pmcq3qg.apps.googleusercontent.com',
});

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginSplashImg = styled.ImageBackground`
  width: 100%;
`;
const HomeStackScreen = ({route, navigation}) => {
  const tabHiddenRoutes = ['BoardCommentList', 'Search'];
  if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
    navigation.setOptions({
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        height: 60,
        alignItems: 'center',
      },
    });
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={MainPage}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Write"
        component={BoardWritePage}
        options={{
          title: '동행찾기 글쓰기',
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="AreaPage"
        component={AreaPage}
        options={{
          title: 'AreaPage',
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="CommentAlarmpage"
        component={CommentAlarmPage}
        options={{title: 'CommentAlarmpage', headerShown: false}}
      />
      <HomeStack.Screen
        name="BoardDetailPage"
        component={BoardDetailPage}
        options={{title: 'BoardDetailPage', headerShown: false}}
      />
      <HomeStack.Screen
        name="UserPage"
        component={UserPage}
        options={{title: 'UserPage', headerShown: false}}
      />

      <HomeStack.Screen
        name="BoardCommentList"
        // tabBarStyle={{display: 'none'}}
        component={BoardCommentList}
        options={{
          title: 'BoardCommentList',
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={MapPage}
        options={{title: 'Map', headerShown: false}}
      />
      <MapStack.Screen
        name="BoardDetailPage"
        component={BoardDetailPage}
        options={{title: 'BoardDetailPage', headerShown: false}}
      />
    </MapStack.Navigator>
  );
};

const ScrapStackScreen = () => {
  return (
    <ScrapStack.Navigator>
      <ScrapStack.Screen
        name="Scrap"
        component={ScrapListPage}
        options={{title: 'Scrap', headerShown: false}}
      />
    </ScrapStack.Navigator>
  );
};

const MypageStackScreen = () => {
  return (
    <MypageStack.Navigator>
      <MypageStack.Screen
        name="Mypage"
        component={MyPage}
        options={{title: 'Mypage', headerShown: false}}
      />

      <MypageStack.Screen
        name="UserPage"
        component={UserPage}
        options={{title: 'UserPage', headerShown: false}}
      />
      <MypageStack.Screen
        name="CommentAlarmpage"
        component={CommentAlarmPage}
        options={{
          title: 'CommentAlarmpage',
          headerShown: false,
        }}
      />
      <MypageStack.Screen
        name="BoardDetailPage"
        component={BoardDetailPage}
        options={{title: 'BoardDetailPage', headerShown: false}}
      />
    </MypageStack.Navigator>
  );
};

export default function Tabs() {
  const [isLogin, setIsLogin] = useState(false);
  const TabNaviRounded = {
    unmountOnBlur: true,
    tabBarStyle: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,

      backgroundColor: 'white',
      position: 'absolute',
      height: 60,
      alignItems: 'center',
    },
  };
  const {accessToken, setAccessToken} = useContext(GlobalContext);

  const [loginuserwithFB] = useMutation(LOGIN_USER_WITH_FIREBASE);

  return (
    <>
      {accessToken !== '' && (
        <>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'HomeStack') {
                  iconName = focused ? 'home' : 'home-outline';
                  size = 24;
                }
                if (route.name === 'MapStack') {
                  iconName = focused ? 'map' : 'map-outline';
                  size = 24;
                }
                if (route.name === 'ScrapStack') {
                  iconName = focused ? 'bookmark' : 'bookmark-outline';
                  size = 24;
                }
                if (route.name === 'MypageStack') {
                  iconName = focused ? 'person' : 'person-outline';
                  size = 24;
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },

              tabBarActiveTintColor: '#FFBE2B',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
              tabBarShowLabel: false,
            })}>
            <Tab.Screen
              name="HomeStack"
              component={HomeStackScreen}
              options={TabNaviRounded}
            />
            <Tab.Screen
              name="MapStack"
              component={MapStackScreen}
              options={TabNaviRounded}
            />
            <Tab.Screen
              name="ScrapStack"
              component={ScrapStackScreen}
              options={TabNaviRounded}
            />
            <Tab.Screen
              name="MypageStack"
              component={MypageStackScreen}
              options={TabNaviRounded}
            />
          </Tab.Navigator>
        </>
      )}
      {accessToken === '' && (
        <LoginSplashImg
          source={require('../Assets/SplashScreen_Login.png')}
          resizeMode="cover">
          <Wrapper>
            {/* <LoginStack.Navigator>
            <LoginStack.Screen
              name="Login"
              component={LoginPage}
              options={{title: 'Login하세용', headerShown: false}}
            />
          </LoginStack.Navigator> */}
            <GoogleSigninButton
              style={{width: 200, height: 50}}
              onPress={async () => {
                const {idToken} = await GoogleSignin.signIn();

                // console.log(idToken);

                // Create a Google credential with the token
                const googleCredential =
                  auth.GoogleAuthProvider.credential(idToken);

                // Sign-in the user with the credential
                const result = await auth().signInWithCredential(
                  googleCredential,
                );

                const aaa = result?.additionalUserInfo?.profile?.name;
                const bbb = result?.additionalUserInfo?.profile?.email;
                try {
                  const result2 = await loginuserwithFB({
                    variables: {
                      name: aaa,
                      email: bbb,
                    },
                  });
                  // console.log(result2?.data?.loginUserWithFB?.accessToken);
                  setAccessToken(result2?.data?.loginUserWithFB?.accessToken);
                } catch (error) {
                  console.log(error.message);
                }

                setIsLogin(true);
              }}
            />
          </Wrapper>
        </LoginSplashImg>
      )}
    </>
  );
}
