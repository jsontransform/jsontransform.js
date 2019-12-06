require("nodash").install(global);

function isletterlike(char) {
  return isLetter(char) || isDigit(char);
}

function parsequoted(string) {
  if (head(string) != "'") {
    return false;
  }
  let r = span(compose(not, eq("'")), tail(string));
  if (head(r.snd()) != "'") {
    return false;
  }
  return Tuple(r.fst(), tail(r.snd()));
}

function parsename(string) {
  if (!isLetter(head(string))) {
    return false;
  }
  return span(isletterlike, string);
}

function parseelement(string) {
  return parsequoted(string) || parsename(string);
}

function parseindex(string) {
  if (head(string) != "[") {
    return false;
  }
  let r = parseelement(tail(string));
  if (!r) {
    return false;
  }
  if (head(r.snd()) != "]") {
    return false;
  }
  return Tuple(r.fst(), tail(r.snd()));
}

function parsesub(string) {
  if (head(string) != ".") {
    return false;
  }
  return parseelement(tail(string));
}

function parsepath(path) {
  let r = parseelement(path);
  let p = [];
  if (!r) {
    return false;
  }
  p.push(r.fst());
  while (!isEmpty(r.snd())) {
    r = parsesub(r.snd()) || parseindex(r.snd());
    if (!r) {
      return false;
    }
    p.push(r.fst());
  }
  return p;
}

module.exports = parsepath;