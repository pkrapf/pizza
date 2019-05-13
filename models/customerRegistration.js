const pool = require("../connection").pool;
const bcrypt = require("bcrypt");

function create(req, res){
    pool.query("SELECT * FROM customer WHERE email = ?", 
    [req.body.email], (err, queryReturn)=>{
        if(queryReturn[0]){
            return res.send("EMAIL ALREADY EXISTS")
        }
        let password = bcrypt.hashSync(req.body.password, 5);
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let phone = req.body.phone;
        let streetAddress = req.body.streetAddress;
        let city = req.body.city;
        let state = req.body.state;
        console.log(state);
        let zipCode = req.body.zipCode; 
        let email = req.body.email;
        pool.query("INSERT INTO customer (firstName, lastName, phone, streetAddress, city, state, zipCode, email, password) VALUES(?,?,?,?,?,?,?,?,?)", 
            [firstName, lastName, phone, streetAddress, city, state, zipCode, email, password], (err, result)=>{
            if(!err){
                return res.send({msg:"Signed Up!"});
            }
            console.log(err);
            res.status(500).send({error: "SOMETHING BROKE"})
        })
    })    
}

module.exports.create = create;