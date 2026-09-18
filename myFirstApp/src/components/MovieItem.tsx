import { StyleSheet, Text, View } from 'react-native';

type MovieItemProps = {
    name: string;
    year: number;
};

function MovieItem({ name, year }: MovieItemProps) {
    return (
        <View style={styles.movieCard}>
            <Text style={styles.movieName}>{name}</Text>
            <Text style={styles.movieYear}>{year}</Text>
        </View>
    );
}

export default MovieItem;

const styles = StyleSheet.create({
    movieCard: {
        backgroundColor: '#5e0acc',
        padding: 16,
        marginVertical: 8,
        borderRadius: 10,
    },

    movieName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    movieYear: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
});