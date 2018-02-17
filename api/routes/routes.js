var express = require("express");
var router = express.Router();
var model = require("../model/task")

router.get('/tasks', function(req,res){
    //var tasks = [{name:'eat'},{name:"work"},{name:"sleep"}];
    res.send(model.tasks);
})

module.exports = router;