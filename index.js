module.exports = DisjointSet;

function DisjointSet(payload) {
  this.payload = payload;
  this.parent = this;
  this.rank = 0;
}

DisjointSet.prototype.find = find;
DisjointSet.prototype.union = union;

function find() {
  var parent = this.parent;
  if (parent !== this) {
    // compress so that in future we ran faster:
    this.parent = parent.find();
  }

  return this.parent;
}

function union(y) {
  var ourParent = this.find();
  var theirParent = y.find();

  if (theirParent === ourParent) return; // we are in the same set

  if (ourParent.rank < theirParent.rank) {
    ourParent.parent = theirParent;
  } else if (ourParent.rank > theirParent.rank) {
    theirParent.parent = ourParent;
  } else {
    theirParent.parent = ourParent;
    ourParent.rank += 1;
  }
}
