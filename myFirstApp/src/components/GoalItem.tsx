import { StyleSheet, Text, View } from 'react-native';

type GoalItemProps = {
    text: string;
};

function GoalItem({ text }: GoalItemProps) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },

    goalText: {
        color: 'white',
        fontSize: 16,
    },
});