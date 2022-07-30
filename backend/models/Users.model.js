import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    salt: { type: String, required: true },
    name: { type: String, required: true },
    conversations: { type: [ObjectId], required: true },
    avatar: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);
