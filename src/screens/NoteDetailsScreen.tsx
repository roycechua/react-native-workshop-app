import axios from "axios";
import React, { FunctionComponent, useState } from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const NoteDetailsScreen: FunctionComponent = (props) => {
    const {navigation, route} = props;
    const { id } =  route.params;

    const [data] = useSelector(state => state.notes.notes.filter(note=>note.id===id))
    const dispatch = useDispatch()

    const [newNote, setNewNote] = useState(data.note)

    const handleUpdate = () => {
        // axios.put(`/notes/${id}`)
        // dispatch 
        navigation.goBack()
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