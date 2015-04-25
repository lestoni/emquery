## emquery
[![Build Status](https://travis-ci.org/lestoni/emquery.svg)](https://travis-ci.org/lestoni/emquery)

construct a mongodb query update for embedded documents.

Works great with mongoose. Basically the idea is to ease the updating of
embedded documents with mongodb's `$set` operator.

## install

```sh
  $ npm install emquery
```

## example

```sh
  $ node example.js
```

```javascript
  var emquery = require('emquery');

  var UserModel = require('../models/user');

  app.put('/users/:id', function updateUser(req, res, next) {
    var updates = {
      $set: emquery(req.body);
    };

    User.findByIdAndUpdate(user._id, updates, function(err, user) {
      if(err) return next(err);
      res.json(user);
    });
  });
```

## API

### emquery({}#object} = require('emquery')

Pass in the object to parsed to a query.

## license

MIT
