import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ConversationSchema = new Schema({
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    members: { type: Array, required: true },
    messages: { type: Array, required: true },
    mainEmote: { type: String, required: true }
}, {
    timestamps: true
});

export default mongoose.model('Conversation', ConversationSchema);