import React, { useState } from "react";

const url = "http://localhost:5000/api/message/post";

const MessageForm = () => {
    const [message, setMessage] = useState("");

    const inputHandler = (e) => {
        setMessage(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                content: message,
            }),
            headers: { "Content-Type": "application/json; charset=utf-8" },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        setMessage("");
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Aa"
                    onChange={inputHandler}
                    value={message}
                />
                <button type="submit" value="Submit" />
            </form>
        </>
    );
};

export default MessageForm;
