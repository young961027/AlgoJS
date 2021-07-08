function level1(id) {
  id = id.toLowerCase();
  return id;
}
function level2(id, table) {
  for (let i of id) {
    if (table.indexOf(i.charCodeAt()) === -1) {
      id = id.replace(i, '');
    }
  }
  return id;
}
function level3(id) {
  let swch = 0;
  while (swch === 0) {
    swch = 1;
    for (let i = 0; i < id.length - 1; i++) {
      if (id[i] === '.' && id[i + 1] === '.') {
        id = id.substring(0, i) + id.substring(i + 1, id.length);
        swch = 0;
      }
    }
  }
  return id;
}
function level4(id) {
  let ch = 0;
  while (ch === 0) {
    ch = 1;
    if (id.indexOf('.') === 0) {
      id = id.substring(1, id.length);
      ch = 0;
      if (id.length === 0) ch = 1;
    }
  }
  while (ch === 1) {
    ch = 0;
    if (id.lastIndexOf('.') === id.length - 1 && id.length !== 0) {
      id = id.substring(0, id.length - 1);
      ch = 1;
    }
  }
  return id;
}
function level5(id) {
  if (id.length === 0) id = 'a';
  return id;
}
function level6(id) {
  if (id.length > 15) {
    id = id.slice(0, 15);
    if (id[14] === '.') id = id.slice(0, 14);
  }
  return id;
}
function level7(id) {
  while (id.length < 3) {
    id = id + id[id.length - 1];
  }
  return id;
}

function solution(new_id) {
  let ascii = [95];
  for (let i = 45; i < 58; i++) {
    if (i !== 47) ascii.push(i);
  }
  for (let i = 97; i < 123; i++) {
    ascii.push(i);
  }
  let id1 = level1(new_id);
  let id2 = level2(id1, ascii);
  let id3 = level3(id2);
  let id4 = level4(id3);
  let id5 = level5(id4);
  let id6 = level6(id5);
  return level7(id6);
}
