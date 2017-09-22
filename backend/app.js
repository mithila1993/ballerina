const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;
var admin = require("firebase-admin");
const FirebaseREST = require('firebase-rest').default;

var serviceAccount = require("./react-note-a8f4e-firebase-adminsdk-gki6z-359cf18199.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-note-a8f4e.firebaseio.com"
});

var client = new Client();

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

var db = admin.database();
var ref = db.ref().child("react");

var jsonClient = new FirebaseREST.JSONClient('https://react-note-a8f4e.firebaseio.com');

// jsonClient.put('/react', {
//     alanisawesome: {
//       date_of_birth: "JuneHeeeee",
//       full_name: "Alaeeeeeeeen "
//     },
//     gracehop: {
//       date_of_birth: "9,eeeeeeeeeeeee 1906",
//       full_name: "Graeeeeeeeeeece"
//     }
//   });

// var pm = jsonClient.get('/react').then(res => console.log(res))
// console.log(jsonClient.get('/react'));


app.post('/getLocations',(req,res)=>{
    const typedWord = req.body.city;

    // var jsonClient = new FirebaseREST.JSONClient('https://react-note-a8f4e.firebaseio.com');
    // jsonClient.put('/react', {
    //         alanisawesome: {
    //           date_of_birth: typedWord,
    //           full_name: "Abbbbbbn "
    //         },
    //         gracehop: {
    //           date_of_birth: "9,xxxxxx 1906",
    //           full_name: "Grauuuuuuuu"
    //         }
        //   });

        // const typedName = req.body.name;
        // const typedEmail = req.body.email;
        // const typedPass = req.body.pass;
        
        // var jsonClient = new FirebaseREST.JSONClient('https://react-note-a8f4e.firebaseio.com');
        // jsonClient.put('/react', {
        //         Events: {
        //           Name: typedName,
        //           Email: typedEmail,
        //           Pass: typedPass
        //         },
                
        //       });
        // });
    
    jsonClient.get('/react').then((data)=>{
        res({msg:true,data:data})
    });

    
    
})

// app.post('/getLocations',(req,res)=>{
//     const typedWord = req.body.city;

//     client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+typedWord+"top+sights&key=AIzaSyBvyTz6Cjpod6dsKnVC_1CZZ3LK15-wpSQ", function (data, response) {
//         res.json({msg:true,data:data})
        
//      });
// })

app.listen(3003,()=>{
    console.log('listening ')
})  