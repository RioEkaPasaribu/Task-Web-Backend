const express = require("express");
const dotenv = require("dotenv");
const notesRoutes = require("./routes/notesRoutes");
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
