const z = require("zod")

const winnerSchema = z.object({
    name: z.string().min(3,{message:"O nome precisa ter no minimo 3 caracteres"}).max(200,{message:"O nome pode ter no máximo 200 caracteres"}),
    prize:z.string().min(2,{message:"A descrição do premio deve ter no minimo 2 caracteres"}).max(200,{message:"A descrição do premio deve ter no máximo 200 caracteres"}),
    date:z.string().date({message:"Por favor inseria a data no normal YYYY-MMM-DD"})
})

function validateWinnerSchema(req,res,next
  ) {
    try {
        winnerSchema.parse(req.body);
      next();
    } catch (err) {
      console.log(err);
      res.status(400).json(err.issues)
    }
  }


module.exports = validateWinnerSchema
  