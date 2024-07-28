import express from 'express'

const app = express()


app.use(express.static('public'))


app.get('/about', (req, res)=>{
    res.send('about page')
})

app.get('/weather', (req, res)=>{
    res.send('show weather page')
})

app.get('/help', (req, res)=>{
    res.send('help here')
})

app.listen(3000, ()=> {
    console.log('yolo, we listening from port 3000')
})