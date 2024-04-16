const NewsModel = require("../model/News")

const ClassController = {
    async getNew(req, res) {
        try {
            const result = await NewsModel.getNews()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            throw new error("fail get news")
        }
    },

    
};

module.exports = ClassController
