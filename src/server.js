const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(_dirname + '/dist/New folder'));
app.get('*',function(res,res){
    res.sendFile(path.join(__dirname + '/dist/New folder/index.html'));

})
app.listen(process.env.PORT || 8000)
