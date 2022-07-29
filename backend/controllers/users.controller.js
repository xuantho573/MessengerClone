import { User } from "../models/index.js";

class UsersController {
    // [GET]
    async get(req, res) {
        try {
            const user = await User.findOne({ username: req.params.username });

            if (user) {
                res.status(200).json({
                    success: true,
                    msg: `Get user's information successfully!`,
                    data: user,
                });
            } else {
                res.status(404).json({
                    success: false,
                    msg: "There is no user with the given username!",
                });
            }
        } catch (err) {
            console.log("Errors detected while getting user\n");
            res.status(404).json({
                success: false,
                msg: `Something happens while getting user's information!`,
            });
        }
    }

    // [POST] [register new user]
    async register(req, res) {
        try {
            const existedUser = await User.findOne({
                username: req.params.username,
            });
            if (existedUser) {
                res.json({
                    success: false,
                    msg: `There is already a user with the given username, please try another one!`,
                });
            } else {
                const user = new User();
                user.username = req.params.username;
                user.password = req.params.password;
                user.name = req.params.name;
                user.avatar = req.params.avatar;
                user.save();
                res.status(201).json({
                    success: true,
                    msg: `New account registered successfully!`,
                    data: user,
                });
            }
        } catch (err) {
            console.log(`Error detected while trying to register a new user\n`);
            res.json({
                success: false,
                msg: `Something happens while creating new account, please try again\n`,
            });
        }
    }

    // [POST] [login user]
    async login(req, res) {
        try {
            const user = await User.findOne({ username: req.params.username });
            if (!user || user.password !== req.params.password) {
                res.status(404).json({
                    success: false,
                    msg: `Your username or password is incorrect, please try again!`,
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: `Logged in successfully!`,
                });
            }
        } catch (err) {
            console.log(`Error detected while trying to log a user in!`);
            res.status(401).json({
                success: false,
                msg: `Something happens while trying to identify you, please try again!`,
            });
        }
    }
}

export default new UsersController();
