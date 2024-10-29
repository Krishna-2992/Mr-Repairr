const { Partner } = require('../models/partner'); // Assuming the model is stored in models folder

// Get all partners
const getAllPartners = async (req, res) => {
    try {
        const partners = await Partner.find(); // Retrieve all partners
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving partners', error });
    }
};

// Get partners by profession
const getPartnersByProfession = async (req, res) => {
    const { profession } = req.params; // Assuming profession is passed as a URL parameter
    console.log("profession", profession)
    try {
        const partners = await Partner.find({ profession }); // Retrieve partners based on profession
        if (partners.length === 0) {
            return res.status(404).json({ message: 'No partners found for this profession' });
        }
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving partners', error });
    }
};

// Get partner by ID
const getPartnerById = async (req, res) => {
    const { id } = req.params; // Assuming id is passed as a URL parameter
    console.log(id)
    try {
        const partner = await Partner.findById(id); // Retrieve partner by their MongoDB _id
        if (!partner) {
            return res.status(404).json({ message: 'Partner not found' });
        }
        res.status(200).json(partner);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving partner', error });
    }
};

const createPartner = async (req, res) => {
    const { name, age, gender, contactNumber, profession, address, serviceLocation } = req.body;
    try {
        const newPartner = await Partner.create({ name, age, gender, contactNumber, profession, address, serviceLocation });
        res.status(201).json(newPartner);
    } catch (error) {
        res.status(500).json({ message: 'Error creating partner', error });
    }
}

const contactPartner = async (req, res) => {
    console.log("contacting the partners from backend")
    res.status(201).json({
        data: "Contacting the partners from backend"
    });
}

// Exporting the functions to use them in routes
module.exports = {
    getAllPartners,
    getPartnersByProfession,
    getPartnerById,
    createPartner
};
