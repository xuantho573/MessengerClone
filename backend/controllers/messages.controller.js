import { Message } from "../models/index.js";

class MessagesConttroller {
    // [GET]
    get(req, res, next) {
        Message.findById(req.params.id, (err, message) => {
            if (err) {
                console.log(`Errors detected while getting message\n`);
                console.error(err);
            }
            if (message) {
                res.json(message);
            } else {
                res.status(404).send("Message not found");
            }
        });
    }

    // [POST]
    async post(req, res, next) {
        try {
            await Message.create({
                author: req.body.author,
                content: req.body.content,
                hiddenForUsers: [],
            });
        } catch (err) {
            console.log(`Error while creating message\n`);
            console.error(err);
        }
    }
}

export default new MessagesConttroller();
