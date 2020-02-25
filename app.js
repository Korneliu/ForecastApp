const path = require('path')
const express = require('express')

const app = express()

const pubicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(pubicDirectoryPath))

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/about', (req, res) => {

})




app.listen(3000, () => {
    console.log('Server is up on port 3000')
})