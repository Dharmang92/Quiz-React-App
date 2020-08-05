import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import uuid from "uuid";
import { useEffect } from "react";

const QAcards = ({ result }) => {
    const [group, setGroup] = useState([]);
    const [answer, setAnswer] = useState({});
    let count = 1;

    // result is array of objects.
    const getOptions = (q) => {
        const options = [q.correct_answer, ...q.incorrect_answers];
        // console.log(options);
        // Math.random() * (4 - 1) + 1 => random no. between 1 and 4.
        // console.log((Math.random() * 3 + 1).toFixed(0));
        // console.log(options);
        return options;
    };

    return (
        <div>
            {result.map((q) => {
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
                                                // onSelect={checkAns(event, q)}
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
            })}
            <div className="btn-container">
                <button onClick={() => {}}>Next Questions</button>
                <button onClick={() => {}}>Submit</button>
            </div>
        </div>
    );
};

export default QAcards;
