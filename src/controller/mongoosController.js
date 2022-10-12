const Permis = require('../models/PermisonModel');
const BaseRespon = require('../helper/BaseRespon');
const RedisService = require('../module/RedisConnect');

// menampilkan semua data
const getAllpermis = async(req, res) => {
    
    try {
        const permis = await Permis.find()
        // return BaseRespon.Success(res, permis)
        if (permis == null) {
            const zero = {
                message : 'no data to display ',
            }
            return BaseRespon.Success(res, zero)
        }
        try {
            const dataRedis = await RedisService.get('AllData')
            if(dataRedis) {
                console.log('data in redis')
                // return res.send(JSON.parse(dataRedis))
                return BaseRespon.Success(res, JSON.parse(dataRedis))
            }
    
            console.log('store data in redis');
            await RedisService.setEx('AllData',10,JSON.stringify(permis))
            BaseRespon.Success(res, permis)
        } catch (error) {
            console.log(error)
            return BaseRespon.Failed(res, 'gagal' , error)
            
        }
    } catch (error) {
        return BaseRespon.Failed(res, error)
        console.log(error);
    }
    

    


}

//get One Data
const getOnepermis = async(req, res) => {
    const Id = req.params.Idpermis
    
    try {
        const permis = await Permis.findById(Id)
        // return BaseRespon.Success(res, permis)
        if (!permis) {
            return BaseRespon.flexibelRes(res, true, 'not found', 404)
        }
        try {
            const dataRedis = await RedisService.get('OneData')
            if(dataRedis) {
                console.log('data in redis')
                // return res.send(JSON.parse(dataRedis))
                return BaseRespon.Success(res, JSON.parse(dataRedis))
            }
    
            console.log('store data in redis');
            await RedisService.setEx('OneData',10,JSON.stringify(permis))
            BaseRespon.Success(res, permis)
        } catch (error) {
            console.log(error)
            return BaseRespon.Failed(res, 'gagal' , error)
            
        }
    } catch (error) {
        return BaseRespon.Failed(res, error)
        
    }
    


}

// tambah satu data
const addPermis = async(req, res) => {
    const permis = new Permis(req.body)
    
    try {
        const addPermis = await permis.save()
        const data = await Permis.find()
        return BaseRespon.Success(res, data)
    } catch (error) {
        console.log(error);
    }
}

//Update Peroduct
const updatePermis = async(req, res) => {
    const Id = {_id:req.params.Idpermis}
    const Data = req.body
    const Cek = await Permis.findById(Id)
    if (!Cek) {
        return BaseRespon.Success(res, "notfound")
    }
     try {
        const updatePermis = await Permis.findOneAndUpdate(Id, {$set: Data})
        return BaseRespon.Success(res, updatePermis)
     } catch (error) {
        return BaseRespon.Failed(res, error)
        
     }
}

//Delete Data
const deletePermis = async(req,res) => {
    const Id = req.params.Idpermis
    const Cek = await Permis.findById(Id)
    if (!Cek) {
        return BaseRespon.Success(res, "not found")
    } try {
        const deletePermis = await Permis.deleteOne({_id : Id})
        return BaseRespon.flexibelRes(res,'deleted',deletePermis ,200)
    } catch (error) {
        return BaseRespon.Failed(res, error)
    }
}

module.exports = {
    getAllpermis,
    getOnepermis,
    addPermis,
    updatePermis,
    deletePermis,

}