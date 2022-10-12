const app = require('./src/router/app');
const Client = require('./src/module/RedisConnect');
const port = 3000


app.listen(port, async()=> {
    await Client.connect();
    console.log(`this app runing on port ${port}`);
})

