// Define a simple mongoose schema and model

import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: String,
    email: String,
});
const User = model('User', userSchema);

export default User;
