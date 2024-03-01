const { Router } = require("express");
const { prueba, crear } = require("../controllers/article");

const router = Router();

router.get("/prueba", prueba);
router.post("/crear", crear)

module.exports = router;
