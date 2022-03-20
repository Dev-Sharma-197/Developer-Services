const mongoose = require("mongoose");
const uri = `mongodb+srv://Dev_sharma_19:Dev%409728942296@mycluster-dev.fpezx.mongodb.net/devtest?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected ...")
})
.catch(err => console.log(err)) 