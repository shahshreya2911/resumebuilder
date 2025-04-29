const mongoose = require('mongoose');
const URL = 'mongodb+srv://shahshreya591:pT1MyYWV0OshFE4U@cluster0.dyelrcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongo DB connection successful');
})
connection.on('error', (error) => {
    console.log(error);
})