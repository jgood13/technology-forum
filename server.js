const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
var exphbs = require("express-handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exhbs.create({});

app.engine(
  "handlebars",
  hbs.engine({
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "handlebars");

const sess = {
  secret: "challenge14",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
