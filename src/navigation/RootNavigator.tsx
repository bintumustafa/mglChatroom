import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Index from "/home/bintumustafa/Bureau/projetMob2022/mglChatroom/src/screens/Index"
import SignIn from "/home/bintumustafa/Bureau/projetMob2022/mglChatroom/src/screens/SignIn"
import SignUp from "/home/bintumustafa/Bureau/projetMob2022/mglChatroom/src/screens/SignUp"
import NumChecking from "/home/bintumustafa/Bureau/projetMob2022/mglChatroom/src/screens/NumChecking"
import ProfilePic from "//home/bintumustafa/Bureau/projetMob2022/mglChatroom/src/screens/ProfilePic"
import Chats from "/home/bintumustafa/Bureau/projetMob2022/mglChatroom/src/screens/Chats"



export type RouteParams = {
    Index : undefined;
    SignIn : undefined;
    SignUp : undefined;
    Numchecking : undefined;
    ProfilePic : undefined;
    Chats : undefined;
}

const Stack = createStackNavigator<RouteParams>();
export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Index" component={Index} /*options={{animation:"slide from right"}}*//>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Numchecking" component={NumChecking}/>
                <Stack.Screen name="ProfilePic" component={ProfilePic}/>
                <Stack.Screen name="Chats" component={Chats}/>
            </Stack.Group>
        </Stack.Navigator>
    );
};