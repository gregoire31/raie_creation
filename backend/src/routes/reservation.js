var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.post('/allReservations', function (req, res) {
    let date = req.body.date
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("raieCreation");

        dbo.collection("customers").find({ "idReservation": date }).toArray(function (err, result) {
            if (err) throw err;
            db.close()
            res.json({data : result});

        });

    })
})



router.post('/addReservation', function (req, res) {

    let date = req.body.date
    let heureReservation = req.body.heure
    let nomClient = req.body.nomClient
    let numeroClient = req.body.numeroClient


    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("raieCreation");

        var promise1 = new Promise(function (resolve, reject) {
            dbo.collection("customers").find({ "idReservation": date }).toArray(function (err, result) {

                resolve(result)

            });
        }).then(data => {

            if (data.length > 0) {

                let nouvelleReservation = { heureReservation : heureReservation, nomClient :nomClient, numeroClient: numeroClient}


                
                let ancienneReservation = data[0].reservation
                ancienneReservation.push(nouvelleReservation)
                
                let reservationUpdated = ancienneReservation

                dbo.collection("customers").findOneAndUpdate({ "idReservation": date }, {$set: { reservation: reservationUpdated }}, {upsert: true}, function(err,doc) {
                    if (err) throw err;
                    console.log("1 document updated");
                    db.close();
                    res.json({data : reservationUpdated})
                  });  
            }   
            else {
                let reservation = [{ heureReservation : heureReservation, nomClient :nomClient, numeroClient: numeroClient}]
                dbo.collection("customers").insertOne({"idReservation": date, reservation}, function(err, response) {
                    if (err) throw err;
                    
                    console.log(response);
                    db.close();
                    res.json({data : reservation})
                  });
            }
        })


    })
})


module.exports = router;

  