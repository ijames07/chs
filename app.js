const Proxy = require("./");
const proxy = new Proxy({
  host: "pool.electroneum.hashvault.pro",
  port: 80,
  dynamicPool: true
});
proxy.listen(11111);
