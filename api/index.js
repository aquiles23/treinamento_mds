const express = require('express');
const userRouter = require('./routers/userRouter')

const app = express();


function postHome(req, res, next) {
    res.status(201).send(req.body);
    next();
}

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send({ saudacao: "olá" });
    next();
});

app.post('/', postHome);

app.route('/storage')
    .get((req, res, next) => {
        res.send({
            storage: "storage"
        });
        next();
    })
    .post((req, res, next) => {
        res.status(201).send(req.body);
        next();
    });

app.use('/user',userRouter);
app.listen(3000, () => {
    console.log('hello world');
})