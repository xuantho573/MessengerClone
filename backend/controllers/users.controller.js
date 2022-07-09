import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import User from '../models/Users.model.js';

dotenv.config();

mongoose.connect(process.env.DATABASE_ENTRY);

class UserController {
    // [GET]
    get(req, res) {
        User.findById(req.params.id, (err, docs) => {
            if (err) { 
                console.log('Errors detected while getting user\n');
                console.error(err);
            }
            if (docs) res.send(docs);
            else {
                res.status(404).send('Resource not found')
            }
        })
    }

    // [POST]
    post(req, res) {
        const user = new User({
            name: req.body.name,
            avatar: req.body.avatar,
            conversations: req.body.conversations
        });
        user.save();
    }
}

export default new UserController