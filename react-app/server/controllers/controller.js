import Questions from "../models/questionSchema.js";
import Item from "../models/itemSchema.js";
import Tango from "../models/tangoSchema.js";

// if you want to display that item only
export async function getItems(req, res){
    try {
        const itemname = req.body.itemname;
        if (!itemname) {
            const items = await Item.find()
            return res.json(items);
        }
// if item is not available we will create new record for that item
        const itemFound = await Item.findOne({itemname});
        const item = itemFound ? itemFound : await Item.create({itemname});
        res.json(item)
    } catch (error) {
        res.json(error)
    }
}
export async function insertItems(req, res){
    console.log(req);
    const itemname = req.body.itemname;
    console.log({ itemname });
    const result = await Item.create({ itemname });
    res.json(result);
}
export async function dropItems(req, res){
    const itemname = req.body.itemname;
    try {
         const item = await Item.findOne({ itemname: itemname });
         if (item) {
            const itemId = item._id;
            await Item.findByIdAndDelete(itemId);
            res.json({ msg: `item with itemname ${itemname} deleted successfully` });
         } else {
            res.status(404).json({ msg: "item not found" });
         }
    } catch (error) {
         res.json({ error })
    }
 }
export async function getTango (req, res) {
    try {
      const tango = await Tango.find();
      // console.log(tango[0]._id)
      res.json(tango);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
// simply create new record for that item
export async function insertTango(req, res){
    const { word, romaji, meaning } = req.body;
  try {
    const newTango = await Tango.create({
      word: word,
      romaji: romaji,
      meaning: meaning
    });

    res.status(201).json({ message: 'Tango created successfully', tango: newTango });
  } catch (err) {
    res.status(500).json({ message: 'Error creating tango', error: err });
  }
}
export async function updateTango (req, res) {
    console.log(req.body)
    const newWord = req.body.updatedRow.word;
    const newRomaji = req.body.updatedRow.romaji;
    const newMeaning = req.body.updatedRow.meaning;
    const id = req.body.id;
    try {
        var doc = await Tango.findById (id);
        doc.word = newWord;
        doc.romaji = newRomaji;
        doc.meaning = newMeaning;
        console.log(doc);
        doc.save();
      } catch (err) {
      res.status(400).json({ message: err.message });
      }
      res.send(doc);
    };
 export async function dropTango(req, res) {
    const id = req.body.id;
    console.log(req.body);
    try {
      const result = await Tango.findByIdAndRemove(id).exec();
      console.log(`Deleting Tango with id ${id}`);
      if (!result) {
        return res.status(404).json({ message: 'Tango entry not found' });
      }
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
 }
/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
/** insert all questinos */
export async function insertQuestions(req, res){
    // try {
    //     Questions.insertMany({ questions, answers }, function(err, data){
    //         res.json({ msg: "Data Saved Successfully...!"})
    //     })
    // } catch (error) {
    //     res.json({ error })
    // }
    const question = req.body.question;
    const options = req.body.options;

    console.log({question, options});

    const result = await Questions.create({question, options});
    res.json(result);
}
/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}