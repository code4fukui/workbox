export const flat = (objarray) => {
  if (!Array.isArray(objarray)) {
    throw new Error("is not array");
  }
  const res = [];
  for (const o of objarray) {
    const data = {};

    const add = (name, val) => {
      if (data[name]) {
        //throw new Error("exists same name!");
        for (let i = 2;; i++) {
          const name2 = name + "_" + i;
          if (data[name2] == undefined) {
            data[name2] = val;
            break;
          }
        }
      } else {
        data[name] = val;
      }
    };
    const f = (obj) => {
      if (typeof obj == "object") {
        for (const name in obj) {
          if (Array.isArray(obj[name])) {
            for (const o of obj[name]) {
              if (typeof o == "object") {
                f(o);
              } else {
                add(name, o);
              }
            }
          } else if (typeof obj[name] == "object") {
            f(obj[name]);
          } else {
            add(name, obj[name]);
          }
        }
      } else {
        throw new Error("is not object array");
      }
    };
    f(o);
    res.push(data);
  }
  return res;
};
