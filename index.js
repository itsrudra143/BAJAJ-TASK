const express = require("express");

const app = express();
const port = 5000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      error: "Invalid input: 'data' key is missing or is not an array.",
    });
  }

  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;

  data.forEach((item) => {
    if (typeof item === "string" && /^[a-zA-Z]$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else if (!isNaN(item)) {
      const num = Number(item);
      sum += num;
      if (num % 2 === 0) {
        even_numbers.push(String(num));
      } else {
        odd_numbers.push(String(num));
      }
    } else if (typeof item === "string") {
      special_characters.push(item);
    }
  });

  let concat_string = "";
  const reversedAlphabets = [...alphabets]
    .map((a) => a.toLowerCase())
    .reverse();
  for (let i = 0; i < reversedAlphabets.length; i++) {
    if (i % 2 === 0) {
      concat_string += reversedAlphabets[i].toUpperCase();
    } else {
      concat_string += reversedAlphabets[i].toLowerCase();
    }
  }

  const response = {
    is_success: true,
    user_id: "rudrakshi_sharma",
    email: "rudrakshi747.be22@chitkara.edu.in",
    roll_number: "2210990747",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: String(sum),
    concat_string,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
