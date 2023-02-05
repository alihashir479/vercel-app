import express from 'express'

const app = express()


app.get('/', () => {
    res.send('vercel res')
})
app.listen(5000, () => {
    console.log('app is running')
})