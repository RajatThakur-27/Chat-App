const mongoose = require('mongoose');

const url = `mongodb+srv://rajatthakur:qVpp6AbBBzYriyRW@cluster0.rmj1fha.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error',e));