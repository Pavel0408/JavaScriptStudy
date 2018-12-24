export function removeClass(obj, cls) {
  let ownCls = obj.className;
  if (!ownCls) {
    return;
  }
  ownCls = ownCls.split(` `);
  let counter;
  do {
    counter = 0;
    ownCls.forEach((element, index) => {
      if (element === cls) {
        ownCls.splice(index, 1);
        counter++;
      }


    });
  } while (counter !== 0);
  obj.className = ownCls.join(` `);
  obj.className = obj.className.trim();
}

