import React, { FunctionComponent } from "react"
import {View} from "react-native"

type Props = {
    space: number
}

const Spacer: FunctionComponent<Props> = (props: Props) => {
    const {space} = props;
    return (
        <View style={{margin:space}} />
    )
}

export default Spacer;