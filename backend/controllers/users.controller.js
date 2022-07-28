import { User } from "../models/index.js";

class UsersController {
    // [GET]
    get(req, res) {
        User.findOne({ username: req.params.username }, (err, doc) => {
            if (err) {
                console.log("Errors detected while getting user\n");
                console.error(err);
            }
            if (doc) {
                res.json(doc);
            } else {
                res.status(404).send("User not found");
            }
        });
    }

    // [POST]
    post(req, res) {
        // const user = new User({
        //     // name: req.body.name,
        //     // avatar: req.body.avatar,
        //     // conversations: req.body.conversations
        // });
        // user.save();
    }
}

export default new UsersController();
