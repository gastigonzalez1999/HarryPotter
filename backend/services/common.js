const totalRegister = async (Model) => await Model.countDocuments()

const findById = async (Model, id) => await Model.findById(id);

const findAll = async (Model, page  = 0) => {
    const limitResponse  = parseInt(process.env.LIMIT_RESPONSE);
    try {
        return await Model.find()
            .limit(limitResponse)
            .skip(page === 0 || page === 1 ? 0 : (page -1)* limitResponse);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { totalRegister, findById, findAll };
