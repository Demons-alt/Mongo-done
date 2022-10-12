const express = require('express');
const PermisionRouter = express.Router();

const {
    getAllpermis,
    addPermis,
    getOnepermis,
    updatePermis,
    deletePermis
} = require('../../controller/mongoosController');



PermisionRouter.delete('/permis/:Idpermis/delete',deletePermis)
PermisionRouter.put('/permis/:Idpermis/edit', updatePermis)
PermisionRouter.get('/permis/:Idpermis', getOnepermis)
PermisionRouter.post('/permis/add', addPermis)
PermisionRouter.get('/permis', getAllpermis)
PermisionRouter.get('/', (req, res) => {
  res.send('This is Permision Page')
})

module.exports = PermisionRouter