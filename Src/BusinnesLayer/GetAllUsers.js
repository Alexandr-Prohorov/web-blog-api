const User = require("../Models/User")
const SuccessResourceCollection = require("../Resources/SuccessResourseCollection")

class GetAllUsers {
    async constructorUsers() {
        const users = await User.findAll().then((res) => {
            return SuccessResourceCollection(res);
        })
        return users
    }
}

module.exports = new GetAllUsers()