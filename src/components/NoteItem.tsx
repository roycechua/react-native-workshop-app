import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
    note: string,
    onDelete: VoidFunction
	onGoToNoteDetail: VoidFunction
    customTextStyle?: StyleProp<TextStyle>
}

const NoteItem: FunctionComponent<Props> = (props: Props) => {
    const {note, onDelete, onGoToNoteDetail, customTextStyle} = props;
	return (
		<View style={styles.noteContainer}>
			<TouchableOpacity onPress={onGoToNoteDetail} style={{flex:1, padding:15}}>
				<Text style={customTextStyle}>{note}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={onDelete}
				style={{padding:15}}
			>
				<AntDesign name="close" size={24} color="red" />
			</TouchableOpacity>
		</View>
	);
};

export default NoteItem;

const styles = StyleSheet.create({
    noteContainer: {
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
})
