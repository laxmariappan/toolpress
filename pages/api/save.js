import { APP_BASE_URL } from "config";

export default function (req, res) {
  fetch(`${APP_BASE_URL}/wp-json/wp/v2/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization:
        "Bearer " +
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZWFjdC50ZXN0IiwiaWF0IjoxNjMxOTkxODg1LCJuYmYiOjE2MzE5OTE4ODUsImV4cCI6MTYzMjU5NjY4NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoxLCJkZXZpY2UiOiIiLCJwYXNzIjoiNDZiNThiNmQ0YWYyNzhmNDU2OGM2YWU0ZjNjZDY1MGUifX19.mi29vyPQtqTQqxlILRqpxY4nzny7t9S2tevaZvzL8O0",
    },
    body: JSON.stringify({
      title: req.body.name,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "publish",
      categories: req.body.category,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
