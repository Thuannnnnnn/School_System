const EventsModel = require("../model/Events")

const ClassController = {
    async getNew(req, res) {
        try {
            const result = await EventsModel.getEvents()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            throw new error("fail get news")
        }
    },

    
};

module.exports = ClassController
