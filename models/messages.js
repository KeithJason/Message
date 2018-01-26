const db = require("../db/index.js");
const messages = {};

const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
        body: "Let's grab lunch at Milliways tomorrow!",
        to: "+16314337404",
        from: "+14158141829",
        mediaUrl: "http://www.example.com/cheeseburger.png"
    })
    .then(message => console.log(message.sid));
// .then(
//     message => process.stdout.write(message.sid));
//     res.locals.messageData = message;
//     );

// messages.allMessages = (req, res, next) => {
//     db
//         .manyOrNone("SELECT * FROM beers")
//         .then(data => {
//             res.locals.allBeersData = data;
//             next();
//         })
//         .catch(error => {
//             console.log("error encountered in beers.allBeers. Error:", error);
//             next(error);
//         });
// };

// beers.findById = (req, res, next) => {
//     const id = req.params.beerId;
//     db
//         .one("SELECT * FROM beers WHERE beers.id = ${id}", { id: id })
//         .then(data => {
//             res.locals.beerData = data;
//             next();
//         })
//         .catch(error => {
//             console.log("error encountered in beers.findById. Error:", error);
//             next(error);
//         });
// };

// beers.create = (req, res, next) => {
//     db
//         .one(
//             "INSERT INTO beers (name, category, country, alcohol, price) VALUES ($1, $2, $3, $4, $5) RETURNING id;",
//             [
//                 req.body.name,
//                 req.body.category,
//                 req.body.country,
//                 req.body.alcohol,
//                 req.body.price
//             ]
//         )
//         .then(data => {
//             res.locals.newBeerId = data.id;
//             next();
//         })
//         .catch(error => {
//             console.log("error encountered in beers.create. Error:", error);
//             next(error);
//         });
// };

// beers.destroy = (req, res, next) => {
//     db
//         .none("DELETE FROM beers WHERE id = $1", [req.params.beerId])
//         .then(() => {
//             next();
//         })
//         .catch(error => {
//             console.log("error encountered in beers.destroy. error:", error);
//             next(error);
//         });
// };

// beers.update = (req, res, next) => {
//     db
//         .one(
//             "UPDATE beers SET name = $1, category = $2, country = $3, alcohol = $4, price = $5 WHERE id = $6 RETURNING *;",
//             [
//                 req.body.name,
//                 req.body.category,
//                 req.body.country,
//                 req.body.alcohol,
//                 req.body.price,
//                 req.params.beerId
//             ]
//         )
//         .then(data => {
//             res.locals.updatedBeerData = data;
//             next();
//         })
//         .catch(error => {
//             console.log("error encountered in beers.update. Error:", error);
//             next(error);
//         });
// };

module.exports = messages;
