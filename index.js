dom.window.gameLoaded = () => {
  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 8082;
  }
  server.listen(port, function () {
    console.log(`Listening on ${server.address().port}`);
  });
};
