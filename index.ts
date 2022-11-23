import express from "express";

const app = express();

let users = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'bek'
    },
    {
        id: 3,
        name: 'chris'
    }
] as { id: number, name: string }[]

app.get('/users', (req, res) => {
    console.log(req.query)
    console.log('who get in here/users');
    res.json(users.find(user => user.name === req.query.name) ?? users);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
