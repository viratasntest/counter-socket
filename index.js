var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var cors = require("cors");

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.get("/", function (req, res) {
  res.send("Welcome");
});

io.on("connection", function (socket) {
  //when user click the button
  socket.on("clicked1", function (arr) {
    io.emit("click_count1", arr);
  });
});

http.listen(3000, function () {
  console.log("listening on 3000");
});
