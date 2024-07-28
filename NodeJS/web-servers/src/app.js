import express from 'express'

const app = express()

app.get('', (req, res) => {
    res.send('Hellow exp')
})

app.listen(3000, ()=> {
    console.log('yolo, we listening from port 3000')
})