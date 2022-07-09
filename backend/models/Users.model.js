import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { type: String, required: true },
    conversations: { type: Array, required: true },
    avatar: { type: String, required: true }
});

module.exports = mongoose.model('UserSchema', UserSchema);