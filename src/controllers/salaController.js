const salaModel = require("../models/salaModel")

exports.get=async()=>{
    return salaModel.listarSalas()
}



exports.get=async()=>{
    return {"status": "OK", "controller":"Sala"}
}



exports.get=()=>{
    let salaModel = require('../model/salaModel')
    return salaModel.listarSalas()
}