const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


router.post('/', async (req, res) => {
  try {
    const data = req.body

    const newMenuItem = new MenuItem(data);

    const response = await newMenuItem.save();
    console.log('data saved succesfully');
    res.status(200).json(response);

  }

  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data fetched succesfully');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


router.get('/:tasteType', async (req, res) => {

  try {
    const tasteType = req.params.tasteType;
    if (tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'salty' || tasteType == 'spicy') {
      const response = await MenuItem.find({ taste: tasteType });
      console.log('RESPONSE fetched succesfully');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" })
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const MenuItemId = req.params.id;
    const updatedMenuItemData = req.body;

    const response = await MenuItem.findByIdAndUpdate(MenuItemId, updatedMenuItemData, {
      new: true,
      runValidators: true
    })

    if (!response) {
      return res.statusMessage(404).json({ error: 'MenuItem not found' });
    }
    console.log('data updated succesfully');
    res.status(200).json(response);
  }
  catch {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const MenuItemIdId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(MenuItemIdId);

    if (!response) {
      return res.status(404).json({ error: 'MenuItem not found' });
    }

    console.log('data deleted successfully');
    res.status(200).json({ message: 'MenuItem data deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//  comment added for testing purpose
module.exports = router;