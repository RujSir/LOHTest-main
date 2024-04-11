const express = require('express')
const mongoose = require('mongoose')
const port = 5000


const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.knkingd.mongodb.net/tester').then((value) => {
    console.info('Connected to MongoDB');
}).catch((e) => {
    console.error('Connection error', e.message);
});

const navigationSchema = new mongoose.Schema({
    id: Number,
    key: String,
    name: String,
    type: String,
    icon: String,
    navigation_id: { type: Number, default: null }, 
    comment: String,
    sequence: Number,
    active: Boolean
  });

  const webCategorySchema = new mongoose.Schema({
    id: Number,
    title_th: String,
    title_en: String,
    parent_id: { type: Number, default: null },
    link: String,
    image: String,
    status: String,
    sequence: Number
  });
  
  
  
  const Navigation = mongoose.model('Navigation', navigationSchema, 'navigations');

  const WebCategory = mongoose.model('WebCategory', webCategorySchema, 'web_categories');

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', async (req, res) => {
    res.send('Hello World!')
})


app.get('/navigations', async (req, res) => {
    try {
      const navigations = await Navigation.find();
      // console.log(navigations);
      const formattedNavigations = navigations.map(navigation => ({
        id: navigation.id,
        key: navigation.key,
        name: navigation.name,
        type: navigation.type,
        icon: navigation.icon,
        navigation_id: navigation.navigation_id,
        comment: navigation.comment,
        sequence: navigation.sequence,
        active: navigation.active
      }));
  
      res.json(formattedNavigations); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get('/web_categories', async (req, res) => {
    try {
      const categories = await WebCategory.find();
      // console.log(categories);
      const structuredCategories = structureCategories(categories);
      res.json(structuredCategories);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  function structureCategories(categories) {
    let map = {}, structuredCategories = [], category, i;
    for (i = 0; i < categories.length; i++) {
      category = categories[i];
      map[category.id] = i; 
      categories[i].children = []; 
    }
   
    for (i = 0; i < categories.length; i++) {
      category = categories[i];
      if (category.parent_id !== null) {
        categories[map[category.parent_id]].children.push(category);
      } else {
        structuredCategories.push(category); 
      }
    }
    return structuredCategories;
  }
