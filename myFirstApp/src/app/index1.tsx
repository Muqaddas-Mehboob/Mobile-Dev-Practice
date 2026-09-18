// import * as Device from 'expo-device';
// import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { AnimatedIcon } from '@/components/animated-icon';
// import { HintRow } from '@/components/hint-row';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { WebBadge } from '@/components/web-badge';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
// import { useState } from 'react';

// // function getDevMenuHint() {
// //   if (Platform.OS === 'web') {
// //     return <ThemedText type="small">use browser devtools</ThemedText>;
// //   }
// //   if (Device.isDevice) {
// //     return (
// //       <ThemedText type="small">
// //         shake device or press <ThemedText type="code">m</ThemedText> in terminal
// //       </ThemedText>
// //     );
// //   }
// //   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
// //   return (
// //     <ThemedText type="small">
// //       press <ThemedText type="code">{shortcut}</ThemedText>
// //     </ThemedText>
// //   );
// // }

// export default function HomeScreen() {
//   const [enteredGoalText, setEnteredGoalText] = useState('');

//   function goalInputHandler(enteredText: string) {
//     setEnteredGoalText(enteredText)
//   }

//   function addGoalHandler() {
//     console.log(enteredGoalText)
//   }
   
//   return (

//     // TASK 12:

//     // <View style={styles.screen}>
//     //   <View style={styles.barRow}>
//     //     <View style={styles.red} />
//     //     <View style={{ flex: 2 }} />
//     //   </View>
//     //   <View style={styles.barRow}>
//     //     <View style={styles.orange} />
//     //     <View style={{ flex: 65 }} />
//     //   </View>
//     //   <View style={styles.barRow}>
//     //     <View style={styles.green} />
//     //     <View style={{ flex: 80 }} />
//     //   </View>

//     // </View>

//     // TASK 11:

//     // <View style={styles.container}>
//     //   <View style={styles.box1}>
//     //     <View style={styles.box2}>
//     //       <View style={styles.box3}>
//     //         <View style={styles.box4}>
//     //           <View style={styles.box5} />
//     //         </View>
//     //       </View>
//     //     </View>
//     //   </View>

//     // </View>

//     // TASK 10:

//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.textInput}
//           onChangeText={goalInputHandler}
//           placeholder="Enter Your Goal" />
//         <Button title="Add Goals"
//           onPress={addGoalHandler} />
//       </View>
//       <View>
//         <Text >List of Goals</Text></View>
//     </View>

//     // TASK 9:

//     // <View style={styles.container}>
//     //   <View style={[styles.box, { backgroundColor: 'red', flex: 1 }]}>
//     //     <Text>1</Text>
//     //   </View>
//     //   <View style={[styles.box, { backgroundColor: 'blue', flex: 2 }]}>
//     //     <Text>2</Text>
//     //   </View>
//     //   <View style={[styles.box, { backgroundColor: 'green', flex: 2 }]}>
//     //     <Text>3</Text>
//     //   </View>
//     // </View>

//     // TASK 8

//     // <View style={styles.appContainer}>
//     //   <View style={styles.inputContainer}>
//     //     <TextInput style={styles.textInput} placeholder="Enter Your Goal" />
//     //     <Button title="Add Goals" />
//     //   </View>
//     //   <View>
//     //     <Text >List of Goals</Text></View>
//     // </View>

//     // TASK 7:

//     // <View style={styles.container}>
//     //   <View>
//     //     <TextInput placeholder="Enter Your Goal" />
//     //     <Button title="Add Goals" />
//     //   </View>
//     //   <View>
//     //     <Text style={styles.textf}>List of Goals</Text></View>
//     // </View>

//     // TASK 6

//     // <View style={styles.container}>
//     //   <View>
//     //     <TextInput placeholder="Enter Your Goal" />
//     //     <Button title="Add Goals" />
//     //   </View>
//     //   <View>
//     //     <Text style={styles.textf}>List of
//     //       Goals</Text></View>
//     // </View>


//     // TASK 2, 3, 4, 5
//     // <View style={{
//     //   flex: 1,
//     //   backgroundColor: '#e3f994',
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     // }}>
//     /* <View>
//       <TextInput placeholder="Enter Your Goal" />
//       <Button title="Add Goals" />
//     </View>
//     <View>
//       <Text style={{
//         margin: 16, borderColor: 'green',
//         borderWidth: 2
//       }}>List of Goals</Text></View>
//   </View> */

//     // TASK 1:

//     // <View style={styles.container}>
//     //   <TextInput placeholder="Enter Your Goal" />
//     //   <Button title="Add Goals" />
//     //   <Text>Hello World!!!!</Text>
//     // </View>

//     // <ThemedView style={styles.container}>
//     //   <SafeAreaView style={styles.safeArea}>
//     //     <ThemedView style={styles.heroSection}>
//     //       <AnimatedIcon />
//     //       <ThemedText type="title" style={styles.title}>
//     //         Welcome to&nbsp;Expo
//     //       </ThemedText>
//     //     </ThemedView>

//     //     <ThemedText type="code" style={styles.code}>
//     //       get started
//     //     </ThemedText>

//     //     <ThemedView type="backgroundElement" style={styles.stepContainer}>
//     //       <HintRow
//     //         title="Try editing"
//     //         hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
//     //       />
//     //       <HintRow title="Dev tools" hint={getDevMenuHint()} />
//     //       <HintRow
//     //         title="Fresh start"
//     //         hint={<ThemedText type="code">npm run reset-project</ThemedText>}
//     //       />
//     //     </ThemedView>

//     //     {Platform.OS === 'web' && <WebBadge />}
//     //   </SafeAreaView>
//     // </ThemedView>
//   );
// }


// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     backgroundColor: '#F0F7FC',
// //   },

// //   barRow: {
// //     flexDirection: 'row',
// //   },

// //   red: {
// //     flex: 8,
// //     paddingVertical: 20,
// //     backgroundColor: '#F23B3B',
// //   },

// //   orange: {
// //     flex: 35,
// //     paddingVertical: 20,
// //     backgroundColor: '#F5A623',
// //   },

// //   green: {
// //     flex: 20,
// //     paddingVertical: 20,
// //     backgroundColor: '#45B96B',
// //   },
// // });


// const styles = StyleSheet.create({
//   appContainer: {
//     paddingTop: 40,
//     paddingHorizontal: 10,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: "space-between",
//     paddingBottom: 10,
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cc8e8e'
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#353131',
//     width: '80%',
//     marginRight: 8,
//     padding: 8
//   }
// });

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 50,
// //     flexDirection: 'row',
// //     width: "80%",
// //     height: 300,
// //     justifyContent: 'space-between',
// //   },
// //   box: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // const styles = StyleSheet.create({
// //   appContainer: {
// //     paddingTop: 40,
// //     paddingHorizontal: 10,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     justifyContent: "space-between",
// //     paddingBottom: 10,
// //     marginBottom: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#cc8e8e'
// //   },
// //   textInput: {
// //     borderWidth: 1,
// //     borderColor: '#353131',
// //     width: '80%',
// //     marginRight: 8,
// //     padding: 8
// //   }
// // });

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingTop: 40,
// //     paddingHorizontal: 10,
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   textf: {
// //     margin: 16,
// //     padding: 16,
// //     borderWidth: 2,
// //     borderColor: '#bb5555',
// //   }
// // });


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   textf: {
// //     margin: 16,
// //     padding: 16,
// //     borderWidth: 2,
// //     borderColor: '#bb5555',
// //   }
// // });

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     flexDirection: 'row',
// //   },
// //   safeArea: {
// //     flex: 1,
// //     paddingHorizontal: Spacing.four,
// //     alignItems: 'center',
// //     gap: Spacing.three,
// //     paddingBottom: BottomTabInset + Spacing.three,
// //     maxWidth: MaxContentWidth,
// //   },
// //   heroSection: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flex: 1,
// //     paddingHorizontal: Spacing.four,
// //     gap: Spacing.four,
// //   },
// //   title: {
// //     textAlign: 'center',
// //   },
// //   code: {
// //     textTransform: 'uppercase',
// //   },
// //   stepContainer: {
// //     gap: Spacing.three,
// //     alignSelf: 'stretch',
// //     paddingHorizontal: Spacing.three,
// //     paddingVertical: Spacing.four,
// //     borderRadius: Spacing.four,
// //   },
// // });
