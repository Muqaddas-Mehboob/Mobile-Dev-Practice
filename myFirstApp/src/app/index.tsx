import * as Device from 'expo-device';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from '../components/GoalItem';
import MovieItem from '@/components/MovieItem';

type Movie = {
    name: string;
    year: number;
};

export default function HomeScreen() {
    // const [enteredGoalText, setEnteredGoalText] = useState('');
    // const [goalList, setGoalList] = useState<string[]>([]);
    // function goalInputHandler(enteredText: string) {
    //     setEnteredGoalText(enteredText);
    // }
    // function addGoalHandler() {
    //     setGoalList((goal) => [...goal, enteredGoalText]);
    //     setEnteredGoalText('');
    // }
    // function clearGoals() {
    //     setGoalList([]);
    // }

    // const [enteredGoalText, setEnteredGoalText] = useState('');
    // const [goalList, setGoalList] = useState<string[]>([]);
    // function goalInputHandler(enteredText: string) {
    //     setEnteredGoalText(enteredText);
    // }
    // function addGoalHandler() {
    //     setGoalList((goal) => [...goal, enteredGoalText]);
    //     setEnteredGoalText('');
    // }
    // function clearGoals() {
    //     setGoalList([]);
    // }

    // const [enteredGoalText, setEnteredGoalText] = useState('');
    // type Goal = { text: string; id: string };
    // const nextId = useRef(1);
    // const [goalList, setGoalList] = useState<Goal[]>([]);
    // function goalInputHandler(enteredText: string) {
    //     setEnteredGoalText(enteredText);
    // }
    // function addGoalHandler() {
    //     setGoalList((currentGoals) => [
    //         ...currentGoals,
    //         { text: enteredGoalText, id: nextId.current.toString() },
    //     ]);
    //     nextId.current++;
    //     setEnteredGoalText('');
    // }
    // function clearGoals() {
    //     setGoalList([]);
    // }

    const [movies, setMovies] = useState<Movie[]>([
        {
            name: 'Anabelle',
            year: 2010,
        },
        {
            name: 'Insidious',
            year: 2014,
        },
        {
            name: 'The Twilight Saga',
            year: 2008,
        },
        {
            name: 'Conjuring',
            year: 2019,
        },
        {
            name: 'Anabelle Return',
            year: 2021,
        },
    ]);

    return (

        // ACTIVITY:

        <View style={styles.container}>

            <Text style={styles.heading}>
                My Favourite Movies
            </Text>

            <FlatList
                data={movies}
                renderItem={(itemData) => (
                    <MovieItem
                        key={itemData.index}
                        name={itemData.item.name}
                        year={itemData.item.year}
                    />
                )}
            />

        </View>



        // TASK 6:

        // <GoalItem text={"enteredGoalText"} />

        // TASK 5:

        // <View style={styles.appContainer}>

        //     <View style={styles.inputContainer}>
        //         <TextInput
        //             style={styles.textInput}
        //             onChangeText={goalInputHandler}
        //             placeholder="Enter Your Goal"
        //             value={enteredGoalText}
        //         />

        //         <Button
        //             title="Add Goals"
        //             onPress={addGoalHandler}
        //         />
        //     </View>

        //     <View style={styles.goalsContainer}>
        //         <Button
        //             title="Clear"
        //             onPress={clearGoals}
        //         />

        //         <FlatList
        //             data={goalList}
        //             renderItem={(itemData) => {
        //                 return (
        //                     <View style={styles.goalItem}>
        //                         <Text style={styles.goalText}>
        //                             {itemData.item.text}
        //                         </Text>
        //                     </View>
        //                 );
        //             }}
        //             keyExtractor={(item) => item.id}
        //             alwaysBounceVertical={false}
        //         />
        //     </View>

        // </View>

        // TASK 4

        // <View style={styles.appContainer}>
        //     <View style={styles.inputContainer}>
        //         <TextInput
        //             style={styles.textInput}
        //             onChangeText={goalInputHandler}
        //             placeholder="Enter Your Goal"
        //             value={enteredGoalText}
        //         />

        //         <Button title="Add Goal" onPress={addGoalHandler} />
        //     </View>

        //     <Button title="Clear" onPress={clearGoals} />

        //     <ScrollView
        //         style={styles.goalsContainer}
        //         alwaysBounceVertical={false}
        //     >
        //         {goalList.map((goal, index) => (
        //             <View style={styles.goalItem} key={index}>
        //                 <Text style={styles.goalText}>{goal}</Text>
        //             </View>
        //         ))}
        //     </ScrollView>
        // </View>

        // // TASK 1:

        // <View style={styles.appContainer}>
        //     <View style={styles.inputContainer}>
        //         <TextInput
        //             style={styles.textInput}
        //             onChangeText={goalInputHandler}
        //             placeholder="Enter Your Goal"
        //             value={enteredGoalText}
        //         />
        //         <Button title="Add Goals" onPress={addGoalHandler} />
        //     </View>
        //     {/* // TASK 3:  */}
        //     <View>{goalList.map((goal) => (
        //         <Text style={styles.goalItem} key={goal}>
        //             {goal}
        //         </Text>
        //     ))}
        //         <Button title="Clear" onPress={clearGoals} />
        //     </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});

// const styles = StyleSheet.create({
// goalItem: {
// margin: 8,
// padding: 8,
// borderRadius: 6,
// backgroundColor: '#5e0acc',
// },
// goalText: {
// color: 'white',
// },
// });

// const styles = StyleSheet.create({
//     appContainer: {
//         flex: 1,
//         paddingTop: 40,
//         paddingHorizontal: 10,
//     },

//     inputContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingBottom: 10,
//         marginBottom: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#cc8e8e',
//     },

//     textInput: {
//         borderWidth: 1,
//         borderColor: '#353131',
//         width: '75%',
//         marginRight: 8,
//         padding: 8,
//     },

//     // IMPORTANT
//     goalsContainer: {
//         flex: 1,
//     },

//     goalItem: {
//         margin: 8,
//         padding: 12,
//         borderRadius: 6,
//         backgroundColor: '#5e0acc',
//     },

//     goalText: {
//         color: 'white',
//         fontSize: 16,
//     },
// });

// const styles = StyleSheet.create({
//     appContainer: {
//         flex: 1,
//         paddingTop: 40,
//         paddingHorizontal: 10,
//     },

//     inputContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingBottom: 10,
//         marginBottom: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#cc8e8e',
//     },

//     textInput: {
//         borderWidth: 1,
//         borderColor: '#353131',
//         width: '75%',
//         marginRight: 8,
//         padding: 8,
//     },

//     goalsContainer: {
//         flex: 1,
//     },

//     goalItem: {
//         margin: 8,
//         padding: 8,
//         borderRadius: 6,
//         backgroundColor: '#5e0acc',
//     },

//     goalText: {
//         color: 'white',
//     },
// });
// const styles = StyleSheet.create({
//     appContainer: {
//         paddingTop: 40,
//         paddingHorizontal: 10,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingBottom: 10,
//         marginBottom: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#cc8e8e',
//     },
//     textInput: {
//         borderWidth: 1,
//         borderColor: '#353131',
//         width: '80%',
//         marginRight: 8,
//         padding: 8,
//     },

//     // TASK 2: Add a style for the goal items
//     goalItem: {
//         margin: 8,
//         padding: 8,
//         borderRadius: 6,
//         backgroundColor: '#5e0acc',
//         color: 'white',
//     }
// });