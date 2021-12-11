import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Constants from "expo-constants";
import NoteItem from "../components/NoteItem";
import { AntDesign } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import axios from "axios"

const HomeScreen: FunctionComponent = () => {
	const [data, setData] = useState([]);

	const fetchNotes = () => {
		console.log("Fetching notes")
		axios.get("https://2464-180-190-44-156.ngrok.io")
		.then((response) => {
			console.log(response.status)
			setData(response.data)
		}).catch((error) => {
			Alert.alert("request status", JSON.stringify(error))
		})
	}

	useEffect(() => {
		fetchNotes();
	}, [])

	const renderItem = ({item}) => (
		<NoteItem 
			note={item.note}
			onDelete={()=>{console.log("Delete this note")}}
		/>
	)

	const renderItemSeparatorComponent = () =><Spacer space={5}/>

	return (
		<View style={styles.container}>
			<View style={{flexDirection:"row", alignItems: "center"}}>
				<Text style={styles.headerText}>My Notes</Text>
				<Spacer space={2}/>
				<AntDesign name="pluscircle" size={24} color="black" />
			</View>
			<Spacer space={5}/>
			<FlatList 
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
				ItemSeparatorComponent={renderItemSeparatorComponent}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,
	},
	headerText: {
		fontSize: 24,
	},

});