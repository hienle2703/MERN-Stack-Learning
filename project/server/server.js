import { app } from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(process.env);
  console.log(
    `Server is listening on port ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
  );
});
