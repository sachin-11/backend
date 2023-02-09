const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json({ message: 'Hello backend'})
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})
