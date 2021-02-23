export default function orderByProps(obj, properties) {
  let res = [];
  for (const param in obj) {
    if (properties.includes(param)) {
      res.splice(properties.indexOf(param), 0, { key: param, value: obj[param] });
    } else {
      res.push({ key: param, value: obj[param] });
    }
  }
  const { length } = properties;
  res = res.slice(0, length).concat(res.slice(length).sort((a, b) => a.key.localeCompare(b.key)));
  return res;
}
