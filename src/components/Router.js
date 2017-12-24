import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Easing, Animated, Image, StyleSheet } from 'react-native';
import Main from './Main/Main';
import Fitness from './Main/Fitness/Fitness';
import Menu from './Main/Menu';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Home from './Home/Home';
import WorkoutSchedule from './WorkoutSchedule/WorkoutSchedule';
import MyWeight from './MyWeight/MyWeight';
import Settings from './Settings/Settings';
import RateTheApp from './RateTheApp/RateTheApp';
import Support from './Support/Support';
import StepOne from './Step/StepOne';
import MainExercises from './Exercises/MainExercises';
import ExercisesFullBody from './Exercises/ExercisesFullBody';
import ExercisesUpperBody from './Exercises/ExercisesUpperBody';
import ExercisesMiddleBody from './Exercises/ExercisesMiddleBody';
import ExercisesLowerBody from './Exercises/ExercisesLowerBody';
import VideoTraining from './VideoTraining/VideoTraining';
import PrepareRunScreen from './RunTracker/screens/PrepareRunScreen';
import RunningScreen from './RunTracker/screens/RunningScreen';
import ResultScreen from './RunTracker/screens/ResultScreen';
import BasicFlatList from './Tips/BasicFlatList';
import TipsItem from './Tips/TipsItem';
import TipOne from './Tips/DetailTips/TipOne';
import { DEVICE_HEIGHT } from './Constants/AppConstants';
import { BACKGROUND_TABBAR } from './Constants/Color';
// import SignInTwo from './Authentication/SignIn/SignInTwo';
import SignUpTwo from './Authentication/SignUp/SignUpTwo';
import SignIn from './Authentication/SignIn';

export const MainStack = StackNavigator({
    ManHinh_SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_StepOne: {
        screen: StepOne,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_Fitness: {
        screen: Fitness,
        navigationOptions: {
           header: null
        }
    },
    ManHinh_Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_Menu: {
        screen: Menu,
        navigationOptions: {

        }
    },
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_WorkoutSchedule: {
        screen: WorkoutSchedule,
        navigationOptions: {
            title: 'Workout Schedule',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_MyWeight: {
        screen: MyWeight,
        navigationOptions: {
            title: 'Your Weight',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
            headerTintColor: '#F66D6A',
        }   
    },
    ManHinh_RateTheApp: {
        screen: RateTheApp,
        navigationOptions: {
            title: 'Rate the app! Please 5 stars ^_^',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_Support: {
        screen: Support,
        navigationOptions: {
            title: 'Support',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            title: 'Change your infomation',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_MainExercises: {
        screen: MainExercises,
        navigationOptions: {
            title: 'Exercises',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_VideoTraining: {
        screen: VideoTraining,
        navigationOptions: {
            title: 'Fitness for WeightLoss',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_BasicFlatList: {
        screen: BasicFlatList,
        navigationOptions: {
            title: 'Tips for all weight loss',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_TipsItem: {
        screen: TipsItem
    },
    ManHinh_TipOne: {
        screen: TipOne,
        navigationOptions: {
            title: 'Details tips',
            headerTintColor: '#F66D6A',
        }
    },
    ManHinh_RunTracker: { screen: PrepareRunScreen },
    ManHinh_Running: { screen: RunningScreen },
    ManHinh_Result: { screen: ResultScreen }
});
export const ExercisesFullBodyStack = StackNavigator({
    ManHinh_FullBody: {
        screen: ExercisesFullBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image 
                    source={require('../Media/appicon/ic_fullbody.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            header: null
            
        }
    }
});
export const ExercisesUpperBodyStack = StackNavigator({
    ManHinh_UpperBody: {
        screen: ExercisesUpperBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image 
                    source={require('../Media/appicon/ic_topbody.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            header: null
        }
    }
});
export const ExercisesMiddleBodyStack = StackNavigator({
    ManHinh_MiddleBody: {
        screen: ExercisesMiddleBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image 
                    source={require('../Media/appicon/ic_middlebody.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            header: null
        }
    }
});
export const ExercisesLowerBodyStack = StackNavigator({
    ManHinh_LowerBody: {
        screen: ExercisesLowerBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image 
                    source={require('../Media/appicon/ic_lowerbody.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            header: null
        }
    }
});

// set exercisestab
export const ExercisesTab = TabNavigator({
    FullBody: {
        screen: ExercisesFullBodyStack,
        navigationOptions: {
            tabBarLabel: 'Full body',
        }
    },
    UpperBody: {
        screen: ExercisesUpperBodyStack,
        navigationOptions: {
            tabBarLabel: 'Top body'
        }
    },
    MidBody: {
        screen: ExercisesMiddleBodyStack,
        navigationOptions: {
            tabBarLabel: 'Mid body'
        }
    },
    LowerBody: {
        screen: ExercisesLowerBodyStack,
        navigationOptions: {
            tabBarLabel: 'Bottom body'
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        style: {
            backgroundColor: BACKGROUND_TABBAR
        },
        labelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
        },
        tabStyle: {
            height: DEVICE_HEIGHT / 11
        },
        activeTintColor: '#F66D6A',
        showIcon: true,
        upperCaseLabel: false,
        pressColor: '#F66D6A'
    },

});

// set menu
export const SideMenu = DrawerNavigator({
    // ưu tiên hiển thị MainStack trước
    MainTab: {
        screen: MainStack
    },
}, {
    drawerWidth: 330,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
});

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    }
});
// export const RunTrackerStack = StackNavigator(
//     {
//         PrepareRunScreen: { screen: PrepareRunScreen },
//         RunningScreen: { screen: RunningScreen },
//         ResultScreen: { screen: ResultScreen }
//     },
//     {
//         mode: 'card',
//         headerMode: 'screen',
//         initialRouteName: 'PrepareRunScreen',
//         navigationOptions: {
//             gesturesEnabled: false,
//         },
//         transitionConfig: () => ({
//             transitionSpec: {
//               duration: 300,
//               easing: Easing.out(Easing.poly(4)),
//               timing: Animated.timing,
//             },
//             screenInterpolator: (sceneProps) => {
//               const { layout, position, scene } = sceneProps;
//               const { index } = scene;

//               const height = layout.initHeight;
//               const translateY = position.interpolate({
//                 inputRange: [index - 1, index, index + 1],
//                 outputRange: [height, 0, 0],
//               });

//               const opacity = position.interpolate({
//                 inputRange: [index - 1, index - 0.99, index],
//                 outputRange: [0, 1, 1],
//               });

//               return { opacity, transform: [{ translateY }] };
//             },
//         }),
//     }
// );
