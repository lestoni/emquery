const assert = require('assert');
const emquery = require('./');

describe('emquery', function() {
  const data = {
    credentials: {
      username: "lestoni",
      gender: "male",
      contacts: {
        email: 'tonimut7@gmail',
        phone: '+00 00 00 00'
      }
    },
    id: "7gq35tf6132r"
  };

  it('should return parsed query', function(){
    const query = emquery(data);

    assert.ok(query);
    assert.notEqual(Object.keys(query).indexOf('credentials.contacts.phone'), -1);
  });
});
