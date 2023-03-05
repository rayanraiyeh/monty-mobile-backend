const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors')

var fs = require('file-system');
const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.post('/save_jobs_details', async function (req, res) {
  try {
    var body = req.body
    var now = new Date();
    var logfile_name = './LOG/Jobs-Details' + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + '-' + now.getTime() + '.json'
    fs.writeFileSync(logfile_name, JSON.stringify(body));
    res.status(200).json({message:"Successfully saved"});
  }
  catch(error) {
    res.status(500).json({message:'error' })
  }
})
app.listen(3001, () => console.log('This app is listening on port 3001.'));