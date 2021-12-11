import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamsList = {
	Home: undefined;
};

type Props = {};

const Stack = createNativeStackNavigator();

const MainNavigationContainer: FunctionComponent<Props> = (props: Props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: "myApp",
						// headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigationContainer;

const styles = StyleSheet.create({});
