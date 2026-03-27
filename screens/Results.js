import React from 'react';
import { View, Text, Button } from 'react-native';

const Results = ({ scorePercentage, correctCount, incorrectCount, detailedAnswers, onRetry }) => {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Quiz Results</Text>
            <Text style={{ fontSize: 18 }}>Score: {scorePercentage}%</Text>
            <Text style={{ fontSize: 18 }}>Correct Answers: {correctCount}</Text>
            <Text style={{ fontSize: 18 }}>Incorrect Answers: {incorrectCount}</Text>
            <Text style={{ fontSize: 20, marginTop: 10 }}>Detailed Answer Breakdown:</Text>
            {detailedAnswers.map((answer, index) => (
                <Text key={index} style={{ marginVertical: 5 }}>{index + 1}. {answer.question} - {answer.correct ? 'Correct' : 'Incorrect'}</Text>
            ))}
            <Button title="Retry Quiz" onPress={onRetry} />
        </View>
    );
};

export default Results;