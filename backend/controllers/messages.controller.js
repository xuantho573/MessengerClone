import Message from "../models/Messages.model.js";

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
        next();
    }
}

export default new MessagesConttroller();
