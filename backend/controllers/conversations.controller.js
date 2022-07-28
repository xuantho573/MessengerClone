import { Conversation } from "../models/index.js";

class ConversationsController {
    // [GET]
    get(req, res, next) {
        Conversation.findById(req.params.id, (err, doc) => {
            if (err) {
                console.log("Errors detected while getting conversations\n");
                console.error(err);
            }
            if (doc) {
                res.json(doc);
            } else {
                res.status(404).send("Conversation not found");
            }
        });
        next();
    }

    // [POST]
    post(req, res, next) {
        const Conversations = new Conversation({});
        Conversation.save();
    }
}

export default new ConversationsController();
