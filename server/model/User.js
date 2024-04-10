const { query } = require("../connectDB");
const UserModel = {
    async getUserByEmail(email) {
        const queryText = `SELECT *
        FROM public."User"
        WHERE "email" = $1`
        const values = [email]
        try {
            const result = await query(queryText, values)
            return result.rows
        } catch (error) {
            console.log(error)
            throw new error
        }
    }
}
module.exports = UserModel