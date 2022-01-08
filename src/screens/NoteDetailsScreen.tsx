import axios from "axios";
import React, { FunctionComponent, useState } from "react";
import {View, Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../redux/notesSlice";
import constants from "../utils/constants";

const NoteDetailsScreen: FunctionComponent = (props) => {
    const {navigation, route} = props;
    const { id } =  route.params;

    const [data] = useSelector(state => state.notes.notes.filter(note=>note.id===id))
    const dispatch = useDispatch()

    const [newNote, setNewNote] = useState(data.note)

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${constants.BASE_URL}/notes/${id}`, {
                data: {
                    id: id,
                    note: newNote
                }
            })
            if(response.status==200) {
                Alert.alert("Update Success", "Update Successful")
                dispatch(updateNote(response.data.data))
                navigation.goBack()
            }
        } catch (error) {
            Alert.alert("Update Error", "Error encountered while updating the data")
        }
    }

    return (
        <View>
            <Text>Note Details of note#{id}</Text>
            <TextInput
                value={newNote}
                onChangeText={setNewNote}
            />
            <Button 
                title="Update Note"
                onPress={handleUpdate}
            />
        </View>
    )
}

export default NoteDetailsScreen