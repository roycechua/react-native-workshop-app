import React, {FunctionComponent, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlice";
import constants from "../utils/constants";

const AddNoteScreen: FunctionComponent = (props) => {
    const [note, setNote] = useState("");
    const dispatch = useDispatch();

    const handleAddNote = async () => {
        try {
            const response = await axios.post(`${constants.BASE_URL}/notes`, {
                data: {
                    note: note
                }
            });

            dispatch(addNote(response.data.data))
            Alert.alert("Add Note Status", response.data.message)
            props.navigation.goBack()
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}>Note:</Text>
            <TextInput
                style={styles.formInput}
                value={note}
                onChangeText={setNote}
                autoCapitalize={"none"}
                spellCheck={false}
            />
            <View style={{margin:5}} />
            <Button
                title="Add Note"
                color="#A4C936"
                onPress={handleAddNote}
            />
        </View>
    )
}

export default AddNoteScreen;

const styles = StyleSheet.create({
    container: {
        padding:10
    },
    formLabel: {
        fontSize: 20
    },
    formInput: {
        marginVertical: 5,
        padding:5,
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:10
    }
})