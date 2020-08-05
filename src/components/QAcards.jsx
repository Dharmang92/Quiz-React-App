import React from "react";
import Card from "react-bootstrap/Card";
import uuid from "uuid";
import { useState, useEffect } from "react";

const QAcards = ({ result }) => {
    const [ticked, setTicked] = useState([]);
    let count = 1;
    const ans = [];

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };

    // result is array of objects.
    const getOptions = (q) => {
        ans.push(q.correct_answer);
        let options = [q.correct_answer, ...q.incorrect_answers];
        options = shuffle(options);
        // console.log(options);
        // Math.random() * (4 - 1) + 1 => random no. between 1 and 4.
        return options;
    };

    const getValues = () => {
        let arr = [];
        for (let i = 1; i <= 10; i++) {
            document.getElementsByName("options" + i).forEach((btn) => {
                if (btn.checked) {
                    arr.concat(btn.value);
                    setTicked(ticked.concat(btn.value));
                }
            });
        }
    };

    const checkAns = () => {
        getValues();
        let score = 0;
        console.log(ans.filter((value) => ticked.includes(value)));
        console.log(ticked);
    };

    return (
        <div>
            {/* q is object in the array of 10 questions. */}
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
                                                name={"options" + (count - 1)}
                                                type="radio"
                                                value={option}
                                            />
                                            <label
                                                className="label"
                                                htmlFor={"option" + (count - 1)}
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
                <button>Next Questions</button>
                <button onClick={checkAns}>Submit</button>
            </div>
        </div>
    );
};

export default QAcards;
