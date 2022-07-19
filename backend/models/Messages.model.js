import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const MessageSchema = new Schema(
    {
        author: { type: ObjectId, required: true },
        content: { type: String, required: true },
        hiddenForUsers: { type: [ObjectId], required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Message", MessageSchema);
