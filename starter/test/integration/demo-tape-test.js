var assert = require('assert');

describe('TXTing top Justin Bieber song', function() {
  it('successfully sends a message', function(done) {
    var exec = require('child_process').exec;
    exec('./bin/demo-tape', function(error, stdout, stderr) {
      assert.equal(error, null);
      assert.ok(stdout.includes('Texted'));
      done();
    });
  });
});
