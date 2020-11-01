import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@examples.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@examples.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@examples.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users