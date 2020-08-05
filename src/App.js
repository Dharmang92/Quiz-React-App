import React, { useState, useEffect } from "react";
import QAcards from "./components/QAcards";
import "./index.css";

function App() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setResult(data.results);
                setLoading(false);
            });
    }, []); // giving empty array in dependency will only run once.

    return (
        <>
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div>
                    <QAcards result={result} />
                    <div className="btn-container">
                        <button onClick="">Next Questions</button>
                        <button onClick="">Submit</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
