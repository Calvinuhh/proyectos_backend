const validator = require("validator");
const Article = require("../models/article");

const prueba = (req, res) => {
  return res.status(200).json({
    message: "Soy una accion de prueba",
  });
};

const crear = (req, res) => {
  let parametros = req.body;

  try {
    let validar_titulo =
      !validator.isEmpty(parametros.title) &&
      validator.isLength(parametros.title, { min: 5, max: 25 });

    let validar_contenido = !validator.isEmpty(parametros.content);

    if (!validar_titulo || !validar_contenido) {
      throw new Error("No se ha validado la informacion");
    }
  } catch (error) {
    return res.status(400).json({
      status: error,
      message: "Faltan datos por enviar",
    });
  }

  const article = new Article(parametros);

  article
    .save()
    .then((articleSaved) => {
      if (!articleSaved) {
        return res.status(400).json({
          status: "error",
          message: "Missing data to send",
        });
      }

      return res.status(200).json({
        status: "success",
        article: articleSaved,
        message: "article saved successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  prueba,
  crear,
};
