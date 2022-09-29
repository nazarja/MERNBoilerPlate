const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.methods.stripObject = result => {
    result = result.toObject();
    delete result.__v;
    delete result.password;
    return result;
};

module.exports = User = mongoose.model('User', UserSchema);