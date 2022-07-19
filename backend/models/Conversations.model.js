import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const ConversationSchema = new Schema(
    {
        name: { type: String, required: true },
        avatar: { type: String, required: true },
        members: { type: [ObjectId], required: true },
        messages: { type: [ObjectId], required: true },
        mainEmote: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Conversation", ConversationSchema);
