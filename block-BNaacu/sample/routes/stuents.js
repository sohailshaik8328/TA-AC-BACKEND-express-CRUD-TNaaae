let express = require('express');
let router = express.Router();

router.get('/new', (req, res) => {
    let list = ["ankit", "suraj", "prashant", "ravi"]
    res.render('students', {list : list});
})

router.post('/', (req, res) => {
    res.json(req.body);
})

router.get('/', (req, res) => {
    res.json(req.body);
})

router.get('/:id', (req, res) => {
    let student = {
        name : "rahul",
        email : "rahul@altcampus.io"
    }
    res.render('studentDetail', {student : student })
})

module.exports = router;