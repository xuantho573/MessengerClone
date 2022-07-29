import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import styles from "../../Styling/Login.module.css";

const Login = ({ url }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const user = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const response = await user.json();
            if (response.success) {
                navigate("../", { replace: true });
            } else {
                setWarning(response.msg);
            }
        } catch (err) {}
    };

    return (
        <div id={styles.container} className="col-1">
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
                            setWarning("");
                        }}
                        value={username}
                    ></input>
                    <input
                        placeholder="Mật khẩu"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setWarning("");
                        }}
                        value={password}
                    ></input>
                    <p className="warning">{warning}</p>
                    <button type="submit">Tiếp tục</button>
                </form>
                <a href="/">Quên mật khẩu?</a>
            </div>
        </div>
    );
};

export default Login;
