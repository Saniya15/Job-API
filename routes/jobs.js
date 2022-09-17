const express=require('express')
const router=express.Router()
const{
    getAllJobs,
    getJob,
    CreateJob,
    UpdateJob,
    deleteJob
     }=require('../controllers/jobs')
router.route('/').post(CreateJob).get(getAllJobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(UpdateJob)
module.exports=router