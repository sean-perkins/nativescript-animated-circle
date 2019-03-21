var AnimatedCircle = require('nativescript-animated-circle').AnimatedCircle;
var animatedCircle = new AnimatedCircle();

describe('greet function', function() {
  it('exists', function() {
    expect(animatedCircle.greet).toBeDefined();
  });

  it('returns a string', function() {
    expect(animatedCircle.greet()).toEqual('Hello, NS');
  });
});
