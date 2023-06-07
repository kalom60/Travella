import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
