const express = require('express');
const partnerController = require('../controllers/partnerController'); // Adjust the path as necessary

const router = express.Router();

// Define routes for partner operations
router
    .route('/partners')
    .get(partnerController.getAllPartners) // Get all partners
    .post(partnerController.createPartner); // Add a route for creating a new partner (you'll need to implement this function in the controller)

router
    .route('/partners/:id')
    .get(partnerController.getPartnerById); // Get partner by ID

router
    .route('/partners/profession/:profession')
    .get(partnerController.getPartnersByProfession); // Get partners by profession

module.exports = router;
