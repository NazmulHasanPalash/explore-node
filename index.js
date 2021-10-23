const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
const handler = (req, res) => {
    res.send('Hello node js');
}
app.get('/', handler);
app.listen(port, () => {
    console.log(port);
})
const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' }
]
app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes
            (search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});
// app . Method
app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    //res.send(JSON.stringify(newUser))
    res.json(newUser);

})
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)

});
app.listen(port => {
    console.log(port);
})