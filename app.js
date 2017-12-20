const Proxy = require("./");
const proxy = new Proxy({
  host: "pool.electroneum.hashvault.pro",
  port: 80,
  dynamicPool: true,
  diff: 100
});
proxy.listen(11111);