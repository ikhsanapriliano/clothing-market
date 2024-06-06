import app from "./middlewares";

const port = 3000;

app.listen(port, () => {
  console.log(`Your app is running on http://localhost:${port}`);
});
