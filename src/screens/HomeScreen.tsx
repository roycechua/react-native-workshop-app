import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Constants from "expo-constants";
import NoteItem from "../components/NoteItem";
import { AntDesign } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import axios from "axios"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, setNote } from "../redux/notesSlice";
import constants from "../utils/constants";

const HomeScreen: FunctionComponent = (props) => {
	const notes = useSelector(state => state.notes.notes)
	const dispatch = useDispatch()

	const fetchNotes = async () => {
		try {
			console.log("Fetching notes")
			const response = await axios.get(`${constants.BASE_URL}`)
			if(response.status == 200) {
				console.log(response.status)
				dispatch(setNote(response.data))
			}
		} catch (error) {
			Alert.alert("request status", JSON.stringify(error))
		}
	}

	const handleDelete = async (id: number) => {
		try {
			const response = await axios.delete(`${constants.BASE_URL}/notes/${id}`);
			if(response.status == 200) {
				Alert.alert("Delete Status", "Delete Success")
				dispatch(deleteNote(id))
			}
		} catch (error) {
			Alert.alert("Delete Status", "Deletion failed")
		}
	}

	useEffect(() => {
		fetchNotes();
	}, [])

	const renderItem = ({item}) => (
		<NoteItem 
			note={item.note}
			onDelete={()=>{handleDelete(item.id)}}
			onGoToNoteDetail={()=>{props.navigation.navigate("NoteDetails", {id:item.id})}}
		/>
	)

	const renderItemSeparatorComponent = () =><Spacer space={5}/>

	return (
		<View style={styles.container}>
			<View style={{flexDirection:"row", alignItems: "center"}}>
				<Text style={styles.headerText}>My Notes</Text>
				<Spacer space={2}/>
				<TouchableOpacity onPress={()=>{props.navigation.navigate("AddNote")}}>
					<AntDesign name="pluscircle" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<Spacer space={5}/>
			<FlatList 
				data={notes}
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
