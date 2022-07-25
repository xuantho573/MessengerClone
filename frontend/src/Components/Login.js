import React, { useState } from "react";
import { useCookies } from "react-cookie";

import styles from "../Styling/Login.module.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    const submitHandler = (e) => {
        e.preventDefault();
        fetch()
            .then((res) => res.json())
            .then((user) => {
                setCookie("Name", username, {
                    path: "/login",
                    maxAge: 60 * 60 * 24 * 30,
                });
                setCookie("Password", password, {
                    path: "/login",
                    maxAge: 60 * 60 * 24 * 30,
                });
            });
    };

    return (
        <div id={styles.container}>
            <div id={styles.container_form}>
                <div>
                    <h2>Kết nối với những người bạn yêu quý.</h2>
                </div>
                <form onSubmit={submitHandler} id={styles.form}>
                    <input
                        placeholder="Email hoặc số điện thoại"
                        type="text"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        value={username}
                    ></input>
                    <input
                        placeholder="Mật khẩu"
                        type="text"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                    ></input>
                    <button type="submit">Tiếp tục</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
