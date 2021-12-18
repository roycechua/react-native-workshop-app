import React, {FunctionComponent, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import axios from "axios";

const AddNoteScreen: FunctionComponent = () => {
    const [note, setNote] = useState("");

    const handleAddNote = async () => {
        try {
            const response = await axios.post("http://c35b-180-190-33-171.ngrok.io/notes", {
                data: {
                    note: note
                }
            });

            console.log(response.data)
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