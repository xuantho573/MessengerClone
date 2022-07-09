

import Conversation from '../models/Conversations.model.js';
import connection from '../connection.js';



class ConversationsController {

    // [GET]
    get(req, res) {
        Conversation.findById(req.params.id, (err, doc) => {
            if (err) { 
                console.log('Errors detected while getting conversations\n');
                console.error(err);
            }
            if (doc) {
                res.json(doc);
            } else {
                res.status(404).send('Conversation not found');
            }
        })
    }

    // [POST]
    post(req, res) {
        const Conversations = new Conversation({

        });
        Conversation.save();
    }
}

export default new ConversationsController;