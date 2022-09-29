const User = require('../models/UserModel');
const { hashPassword, comparePassword } = require('../utils/crypto');

const signUpUser = async data => {
    return await User.findOne({ username: data.username })
        .then(async result => {
            if (result) return null;
            else {
                const user = new User({
                    ...data,
                    password: await hashPassword(data.password)
                });
                await user.save();
                return true;
            };
        });
};

const signInUser = async data => {
    return await User.findOne({ username: data.username })
        .then(async result => {
            if (result) {
                if (await comparePassword(data.password, result.password)) {
                    return result.stripObject(result);
                }
                else return null;
            };
            return null;
        });
};

const refreshUser = async _id => {
    return await User.findById(_id)
        .then(result => {
            if (result) return result.stripObject(result);
            else return null;
        });
};

module.exports = { signUpUser, signInUser, refreshUser };