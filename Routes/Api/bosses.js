const express =require("express");
const router = express.Router();
const bosses = require("../../Model/bosses");
const uuid = require("uuid")

router.get('/', function(req,res){
    res.json(bosses);
})

router.get('/:id', (req,res) =>{
    const found = bosses.some(boss => boss.id === parseInt(req.params.id))
    if (found){
    res.json(bosses.filter(boss => boss.id === parseInt(req.params.id)))}
    else{res.status(400).json({msg:`No member with id of ${req.params.id}`})}
})
router.post('/',(req, res)=>{
const newBosses = {
    id: uuid.v4(),
    name: req.body.name,
    status: req.body.status,
    richenough: req.body.richenough
};
if(!newBosses.name || !newBosses.status){
    return res.status(400).json({msg: "please include name and status"})
}
bosses.push(newBosses);
res.json(bosses)
})

module.exports = router;