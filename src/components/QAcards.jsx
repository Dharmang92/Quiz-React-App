import React from "react";
import Card from "react-bootstrap/Card";
import uuid from "uuid";

const QAcards = ({ result }) => {
    let count = 1;
    // result is array of objects.
    const getOptions = (q) => {
        const options = [q.correct_answer, ...q.incorrect_answers];
        // console.log(options);
        // Math.random() * (4 - 1) + 1 => random no. between 1 and 4.
        // console.log((Math.random() * 3 + 1).toFixed(0));
        console.log(options);
        return options;
    };

    const handleOpt = () => {
        console.log();
    };

    return result.map((q) => {
        // this Card already has className of "card". others too in bootstrap like card-text
        return (
            <Card key={uuid.v4()}>
                <Card.Title>
                    {count++}. {q.question}
                </Card.Title>
                <Card.Body>
                    <Card.Text>
                        {getOptions(q).map((option) => {
                            return (
                                <div className="opt-container">
                                    <input
                                        className="radio"
                                        name={"options" + count}
                                        type="radio"
                                        value={option}
                                        onChange={handleOpt}
                                    />
                                    <label
                                        className="label"
                                        htmlFor={"option" + count}
                                    >
                                        {option}
                                    </label>
                                </div>
                            );
                        })}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    });
};

export default QAcards;
