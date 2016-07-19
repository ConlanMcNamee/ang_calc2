var express = require('express');
var app = express();

app.use('/', express.static('public'));


app.get('/calculate', function(req, res) {
  var operations = {
    subtract: function(a, b) {
      return a - b;
    },
    add: function(a, b) {
      return a + b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      return a / b;
    }
  };

  var operands = JSON.parse(req.query.operands);
  var operation = operations[req.query.operation];
  var result = operation(Number(operands.a), Number(operands.b));

  res.send({answer: result });
})


app.listen((process.env.PORT || 3000), function() {
  console.log('server is started on port 3000');
})
