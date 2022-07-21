import Message from "../models/Messages.model.js";

class MessagesConttroller {
    // [GET]
    get(req, res, next) {
        Message.findById(req.params.id, (err, message) => {
            if (err) {
                console.log(err);
            }
            if (message) {
                res.json(message);
            } else {
                res.status(404).send("Message not found");
            }
        });
    }
}

export default new MessagesConttroller();
