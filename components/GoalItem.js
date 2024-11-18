import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#9580ff' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#21222c',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: '#84f0ed',
        padding: 8,
    },
})