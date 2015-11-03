# ngraph.disjoint-set [![Build Status](https://travis-ci.org/anvaka/ngraph.disjoint-set.svg)](https://travis-ci.org/anvaka/ngraph.disjoint-set)

[Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)

# usage

``` js
var DisjointSet = require('ngraph.disjoint-set');

// we can create two separate sets:
var a = new DisjointSet();
var b = new DisjointSet();

// Unite them:
a.union(b);

// After sets are united, searching for representative element of the set
// should result in exact same element:
asssert(a.find() === b.find());
```

Optionally you can pass payload to identify element of the set:

``` js
var DisjointSet = require('ngraph.disjoint-set');

// we can create two separate sets:
var a = new DisjointSet('a');
assert(a.payload === 'a');
```

## Performance

Worst-case running time of `O(α(N))` per `union()`, `find()` operations.
Creation of a new set is `O(1)`.

α(N) is inverse of Ackerman function; In practice the amortized running time
per operation is a small constant (less than 5 for all parctical values of n).

# install

With [npm](https://npmjs.org) do:

```
npm install ngraph.disjoint-set
```

# license

MIT
