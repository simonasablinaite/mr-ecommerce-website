const port = 7000;
const express = require("express");
const app = express();
const mogoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors());

// Prisijungimas prie DB su MongoDB:
mongoose.connect("mongodb+srv://MR:duomeNysMdB22@cluster0.adl5x.mongodb.net/ecommerce");

// API sukūrimas:
app.get("/", (req, res) => {
   res.send("Express programa veikia");
});

// Vaizdų saugojimo "variklis":
const storage = multer.diskStorage({
   destination: "./upload/images",
   filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
   }
});

const upload = multer({ storage: storage });

// Sukurti vaizdų įkėlimo galutinį tašką:
app.use("/images", express.static('upload/images'));


app.post("/upload", upload.single("product"), (req, res) => {
   res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
   });
});

// Produktų sukūrimo schema:
const Product = mongoose.model("Product", {
   id: {
      type: Number,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
   category: {
      type: String,
      required: true,
   },
   new_price: {
      type: Number,
      required: true,
   },
   old_price: {
      type: Number,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
   available: {
      type: Boolean,
      default: true,
   }
})

// Sukuriamas endpointas produktų pridėjimui:

app.post("/addproduct", async (req, res) => {
   let products = await Product.find({});
   let id;

   if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
   } else { 
      id = 1;
   }

   const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
   });
   console.log(product);
   await product.save();
   console.log("Saved");
   res.json({
      success: true,
      name: req.body.name
   });
});

// API sukūrimas produktų ištrynimui:
app.post("/removeproduct", async (req, res) => {
   await Product.findOneAndDelete({ id: req.body.id });
   console.log("Ištrinta");
   res.json({
      success: true,
      name: req.body.name,
   });
});

// API sukūrimas gauti viesiems produktams:
app.get("/allproducts", async (req, res) => {
   let products = await Product.find({});
   console.log("Visi produktai");
   res.send(products);
})

// Vartotojo paskyros modelis:
const Users = mongoose.model('Users', {
   name: {
      type: String,
   },
   email: {
      type: String,
      unique: true,
   },
   password: {
      type: String,
   },
   cartData: {
      type: Object,
   },
   date: {
      type: Date,
      default: Date.now,
   }
})

// Galutinio tasko sukurimas prisiregistravusiam vartotojui:
app.post('/signup', async (req, res) => {
   let check = await Users.findOne({ email: req.body.email });

   if (check) {
      return res.status(400).json({ success: false, errors: "Toks vartotojas jau egzistuoja" })
   }
   let cart = {};

   for (let i = 0; i < 300; i++) {
      cart[i] = 0;

   }
   const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
   })

   await user.save();

   const data = {
      user: {
         id: user.id
      }
   }

   const token = jwt.sign(data, "secret_ecom");
   res.json({ success: true, token })
})

// Sukuriamas galutinis taskas prisujungusiam vartotojui:
app.post('/login', async (req, res) => {
   let user = await Users.findOne({ email: req.body.email });

   if (user) {
      const passCompare = req.body.password === user.password;

      if (passCompare) {
         const data = {
            user: {
               id: user.id
            }
         }
         const token = jwt.sign(data, 'secret_ecom');
         res.json({ success: true, token });
      } else {
         res.json({ success: false, errors: "Neteisingas slaptažodis" });
      }
   } else {
      res.json({ success: false, errors: "Neteisingas email adresas" })
   }
})

// Sukuriama galutine vieta "nauja kolekcija" prekėms:
app.get('/newcollections', async (req, res) => {
   let products = await Product.find({});
   let newcollection = products.slice(1).slice(-8);

   console.log('NewCollection fetched');
   res.send(newcollection);
})

// Sukuriama galutine vieta "populiariausi maketai" prekėms:
app.get('/popularingifts', async (req, res) => {
   let products = await Product.find({ category: "dovanų idėjos" });
   let popular_in_gifts = products.slice(0, 4);

   console.log("Popular in gifts fetched");

   res.send(popular_in_gifts);
})

// Sukuriama tarpine programa vartotojui gauti:
const fetchUser = async (req, res, next) => {
   const token = req.header('auth-token');

   if (!token) {
      res.status(401).send({ errors: "Patvirtinkite naudodami galiojantį prieigos raktą" })
   } else {
      try {
         const data = jwt.verify(token, 'secret_ecom');
         req.user = data.user;
         next();
      } catch (error) {
         res.status(401).send({ errors: "Patvirtinkite naudodami galiojantį prieigos raktą" })
      }
   }
}

// Sukuriama galutine vieta "prideti prekes i krepseli" prekėms:
app.post('/addtocart', fetchUser, async (req, res) => {
   // console.log(req.body, req.user);
   console.log("Pridėta", req.body.itemId);

   let userData = await Users.findOne({ _id: req.user.id });
   userData.cartData[req.body.itemId] += 1;
   await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
   res.send("Pridėta");
})

// Sukuriama galutine vieta "pasalinti preke is krepselio" prekėms:
app.post('/removefromcart', fetchUser, async (req, res) => {
   console.log("Pašalinta", req.body.itemId);
   let userData = await Users.findOne({ _id: req.user.id });

   if (userData.cartData[req.body.itemId] > 0)
      userData.cartData[req.body.itemId] -= 1;
   await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
   res.send("Pašalinta");
})

// Sukuriama galutine vieta krepselyje esanciu prekiu gavimui:
app.post('/getcart', fetchUser, async (req, res) => {
   console.log('GetCart');
   let userData = await Users.findOne({ _id: req.user.id });
   res.json(userData.cartData);
})

app.listen(port, (error) => {
   if (!error) {
      console.log("Serveris sukasi ant " + port + " porto");
   } else {
      console.log("Error: " + error);
   }
});
