import { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
            <Button
                title='Add New Goal'
                color="#9580ff"
                onPress={startAddGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                    return (
                        <GoalItem
                            text={itemData.item.text}
                            id={itemData.item.id}
                            onDeleteItem={deleteGoalHandler} />
                    );
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}

                alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#101116',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
});