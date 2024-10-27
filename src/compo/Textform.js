import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("hello");

    const onUpper = () => {
        setText(text.toUpperCase());
    };

    const onLower = () => {
        setText(text.toLowerCase());
    };

    const countCharacters = () => {
        alert("Number of Characters: " + text.length);
    };

    const countWords = () => {
        const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
        alert("Number of Words: " + wordCount);
    };

    const replaceWord = () => {
        const target = prompt("Enter the word you want to replace:");
        const replacement = prompt("Enter the replacement word:");
        if (target && replacement) {
            const replacedText = text.replaceAll(target, replacement);
            setText(replacedText);
        }
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container my-3">
            <h1 className="headi" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="my-box" className="form-label" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Enter Text</label>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleChange}
                    id="my-box"
                    rows="8"
                    placeholder="Type your text here..."
                ></textarea>
                <button className="btn my-2 mx-2 btn-primary" onClick={onUpper}>Uppercase</button>
                <button className="btn my-2 mx-2 btn-primary" onClick={onLower}>Lowercase</button>
                <button className="btn my-2 mx-2 btn-primary" onClick={countCharacters}>Character Count</button>
                <button className="btn my-2 mx-2 btn-primary" onClick={countWords}>Word Count</button>
                <button className="btn my-2 mx-2 btn-primary" onClick={replaceWord}>Replace Word</button>
            </div>
            <div className="container">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your Text Summary</h2>
                <p className="ana my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    {text.length} characters, {text.trim().split(/\s+/).length} words, {((text.trim().split(/\s+/).length) / 230).toFixed(2)} minutes to read
                </p>
            </div>
            <div className="container">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h2>
                <p className="my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text || "Nothing to preview."}</p>
            </div>
        </div>
    );
}
