import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddNoteScreen from "../screens/AddNoteScreen";

export type RootStackParamsList = {
	Home: undefined;
};

type Props = {};

const Stack = createNativeStackNavigator();

const MainNavigationContainer: FunctionComponent<Props> = (props: Props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="AddNote">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: "AudioNotes",
						// headerShown: false,
					}}
				/>
				<Stack.Screen
					name="AddNote"
					component={AddNoteScreen}
					options={{
						title: "Add Note"
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigationContainer;

const styles = StyleSheet.create({});
