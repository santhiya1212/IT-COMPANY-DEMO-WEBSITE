import Query from "../models/Query.js";

export const createQuery = async(req,res)=>{

    try{

        const query = await Query.create(req.body);

        res.status(201).json({

            success:true,

            message:"Query Submitted Successfully",

            query

        });

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};