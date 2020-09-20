
module.exports = {
    //get all items
    async index(req, res, next) {
        try {

            res.json({ message: "Ok" })
        } catch (error) {
            res.json(error)
        }
    },
    // get item with ID
    async show(req, res, next) {
        try {

            res.json({ message: "show" })
        } catch (error) {
            res.status(404).json(error)
        }
    },
    // save item in DB
    async store(req, res, next) {

        res.json({ message: "store" })

    },
    //Delete Item from DB
    async destroy(req, res, next) {
        res.json({ message: "destroy" })
    },
    // Update Item 
    async update(req, res, next) {
        res.json({ message: "update" })
    }
}