const authRoute = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../../db/models");
const generateTokens = require("../../../utils/generateTokens");
const cookiesConfig = require("../../configs/cookiesConfig");
const basicValidateFields = require("../../utils/basicValidateFields");


authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const targetUser = await User.findOne({ where: { email } });
    if (!targetUser)
      return res.status(401).json({ message: "Неверный email или пароль" });

    const isValid = await bcrypt.compare(password, targetUser.password);
    if (!isValid)
      return res.status(401).json({ message: "Неверный email или пароль" });

    const user = targetUser.get();
    delete user.password;

    const { accessToken, refreshToken } = generateTokens({ user });

    res.cookie("refreshToken", refreshToken, cookiesConfig);
    res.json({ user, accessToken, message: "OK" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

authRoute.post("/registration", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password );
  const errors = basicValidateFields(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }
  try {
    const targetUser = await User.findOne({ where: { email } });
    if (targetUser)
      return res.status(400).json({ message: "Пользователь уже существует" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    const user = newUser.get();
    delete user.password;

    const { accessToken, refreshToken } = generateTokens({ user });

    res.cookie("refreshToken", refreshToken, cookiesConfig);

    res.json({ user, accessToken, message: "OK" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

authRoute.get("/logout", async (req, res) => {
  res.clearCookie("refreshToken").json({ message: "OK" });
});

module.exports = authRoute;