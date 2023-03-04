const express = require('express')
const port = process.env.port || 8000
const app = express() 

app.get('/parkingLot/:currentLoacation', function(req, res, next){
    var location = "KellyEngineeringCenter"
    if (req.params.currentLoacation == location){
        res.status(200).send({
            "parking_lot_name": "Johnson Hall",
            "number_of_empty_parking_lots": 12,
            "total_number_of_parking_lots": 36,
            "timestamp": "2022-11-11T02:10:15.429085",
            "image_url": "https://s3-us-west-2.amazonaws.com/detectionlog/prediction_images/2022-11-11T02:10:15.429085_3j9p928.jpg",
            "parking_lot_time_limit": "2 Hr Parking [ 8.30 am to 5.30 am]",
            "parking_charges": "Pay at Pay Station [ 2$ per Hr ]"
        }
        )
    }
    else if(req.params.currentLoacation === "Tebeau Hall"){
        res.status(200).send({
            "parking_lot_name": "Tebeau Hall",
            "number_of_empty_parking_lots": 20,
            "total_number_of_parking_lots": 56,
            "timestamp": "2022-11-11T02:10:15.429085",
            "image_url": "https://s3-us-west-2.amazonaws.com/detectionlog/prediction_images/2022-11-11T02:10:15.429085_3j9p928.jpg",
            "parking_lot_time_limit": "2 Hr Parking [ 8.30 am to 5.30 am]",
            "parking_charges": "Pay at Pay Station [ 2$ per Hr ]"
        }
        )
    }  
    next()
    })
app.listen(port, function(){
    console.log("Server is listening on port: ", port)
})

