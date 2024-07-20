const connection = require("../config/db");
const Emp_model = require("../Models/EmpModel");
const dotenv = require("dotenv");
dotenv.config({path: "./dev.env"});
module.exports ={
    //addEmp
    addEmp: async(req,res) =>{
        let{firstName,lastName,email,dob,gender,education,company,experience,package } = {...req.body,};
        try {
            connection.query(Emp_model.addEmployee, [firstName,lastName,email,dob,
                gender,education,company,experience,package],
                (error , result ) =>
                    {
                        if(!result || error){
                            return res.status(500).json({message: 'error'});
                        }
                        return res.status(200).json({message: 'success'});
                    })
        }
        catch(error){
            return res.status(500).json({message: 'error 2'});

        }
    },
    
//Fonction qui ramène les données de la base de données 
 getEmp:async(req,res) => {
    try{
        connection.query(Emp_model.getEmployee, 
            (error, result) =>{
                
                if(!result || error){
                    return res.status(500).json({message: 'error'});
                }
                return res.status(200).json({result:result});
            }
        )
    }
    catch(error){
        return res.status(500).json({message: 'error 2'});
    } 

 },

updateEmp:async(req,res) =>{ 
    let {id} = req.params; 
    
    let{firstName,lastName,email,dob,gender,education,company,experience,package } = {...req.body,};
    try {
        
        connection.query(Emp_model.updateEmp, [firstName,lastName,email,dob,
            gender,education,company,experience,package,id],
            (error , result ) =>
                {
                    if(!result || error){
                        return res.status(500).json({message: 'error'});
                    }
                    return res.status(200).json({message: 'success'});
                })
    }
    catch(error){
        return res.status(500).json({message: 'error 2'});

    }
},

deleteEmp:async(req,res) =>{
    let {id} = req.params; 
try{
    connection.query(
        Emp_model.deleteEmp,id, (error,result) =>{
            if (!result || error){
              return  res.status(500).json({message: 'error'})
            }
            return res.status(200).json({message: 'success'})
        }
    )
    
}
catch(error){
    return res.status(500).json({message: 'error 2'});

}
},

}