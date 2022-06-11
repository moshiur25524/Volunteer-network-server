const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleWare

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_PASS}:${process.env.DB_USER}@cluster0.4ffbska.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const ServiceCollection = client.db("volunteerNetwork").collection("volServices");
  console.log('db working');
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res)=>{
    res.send('Volunteer Network Server')
})

app.listen(port, ()=>{
    console.log('listening', port);
})