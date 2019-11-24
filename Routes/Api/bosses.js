const express =require("express");
const router = express.Router();
const bosses = require("../../Model/bosses");

router.get('/', function(req,res){
    res.json(bosses);
})

router.get('/:id', (req,res) =>{
    const found = bosses.some(boss => boss.id === parseInt(req.params.id))
    if (found){
    res.json(bosses.filter(boss => boss.id === parseInt(req.params.id)))}
    else{res.status(400).json({msg:`No member with id of ${req.params.id}`})}
})

module.exports = router;