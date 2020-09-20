import axios from "axios";


export default{
    getEmployees: function(){
        return new Promise((resolve, reject)=>{
            axios
                .get("https://randomuser.me/api/?results=15&inc=name,location,email,dob,phone,id,picture")
                .then(res =>{
                    const employees = res.data.results
                    resolve(employees)
                })
                .catch(err=>{
                    console.log("Error in API Call");
                    reject(err);
                });
        });
    },
};