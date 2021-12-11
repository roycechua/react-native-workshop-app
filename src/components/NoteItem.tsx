import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
    note: string,
    onDelete: VoidFunction
    customTextStyle?: StyleProp<TextStyle>
}

const NoteItem: FunctionComponent<Props> = (props: Props) => {
    const {note, onDelete, customTextStyle} = props;
	return (
		<View style={styles.noteContainer}>
			<Text style={customTextStyle}>{note}</Text>
			<TouchableOpacity
				onPress={onDelete}
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
		padding: 15,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
})
