var DisjointSet = require('../');
var test = require('tap').test;

test('it can make set', function(t) {
  var a = new DisjointSet('a');
  var b = new DisjointSet('b');

  t.ok(a !== b, 'two sets are different');
  t.equals(a.parent, a, 'Parent of root element is root');
  t.equals(b.parent, b, 'Parent of root element is root');
  t.equals(a.payload, 'a', 'Payload is stored');
  t.equals(b.payload, 'b', 'Payload is stored');

  t.end();
});

test('it can find', function (t) {
  var a = new DisjointSet('a');
  var representative = a.find();

  t.equals(representative, a, 'Root node can be found');
  t.end();
});

test('it can unite sets', function(t) {
  var a = new DisjointSet('a');
  var b = new DisjointSet('b');
  var c = new DisjointSet('c');

  a.union(b);
  c.union(b);

  t.equals(b.find(), c.find(), 'Sets b and c are united');
  t.equals(a.find(), c.find(), 'Sets a and c are united');

  t.end();
});
