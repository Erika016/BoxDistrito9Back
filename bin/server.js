const app = require('../app');
const os = require("os");

app.set('port', process.env.PORT || 8000);
const port = app.get("port");

app.listen(app.get("port"), (req, res) => {
    console.log("\nServer running...");
    console.log("Server on : ", os.type())
    console.log(`Server on port: ${port}`);

});