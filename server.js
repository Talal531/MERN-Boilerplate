const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {

    //dumy data -- this data actually comers from mongodb
    const customers = [
        {id: 1, firstName: 'Steve', lastName: 'Smith' },
        {id: 2, firstName: 'John', lastName: 'Doe' },
        {id: 3, firstName: 'John', lastName: 'Smith' },
        {id: 4, firstName: 'David', lastName: 'Botham' },
    ];

    res.send(customers);
});

app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
});