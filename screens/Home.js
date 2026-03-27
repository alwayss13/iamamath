import React, { useState } from 'react';

const HomeScreen = () => {
    const [numQuestions, setNumQuestions] = useState(0);

    const handleInputChange = (event) => {
        setNumQuestions(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to start the quiz with numQuestions
        console.log(`Starting quiz with ${numQuestions} questions`);
    };

    return (
        <div>
            <h1>Welcome to the Quiz</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Number of Questions:
                    <input
                        type="number"
                        value={numQuestions}
                        onChange={handleInputChange}
                        min="1"
                        required
                    />
                </label>
                <button type="submit">Start Quiz</button>
            </form>
        </div>
    );
};

export default HomeScreen;