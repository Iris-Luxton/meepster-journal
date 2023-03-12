import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import User from "../models/userSchema.js";

// import questions, { answers } from '../database/data.js'

/** get all users */
/**
 * 1) get All users route -> GET method
 * 2) create one user (add it into the DB) -> POST
 * 3) get ONE user (based on user ID) -> GET use same route as #1
 * 4) delete ONE user -> DELETE
 */

export async function getUsers(req, res){
    try {
        const username = req.body.username;

        if (!username) {
            const users = await User.find()
            return res.json(users);
        }

        const userFound = await User.findOne({username});
        const user = userFound ? userFound : await User.create({username});
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

export async function insertUsers(req, res){
    console.log(req);
    const username = req.body.username;
    console.log({ username });
    const result = await User.create({ username });
    res.json(result);
}

export async function dropUsers(req, res){

    const username = req.body.username;
    try {
         const user = await User.findOne({ username: username });
         if (user) {
            const userId = user._id;
            await User.findByIdAndDelete(userId);
            res.json({ msg: `User with username ${username} deleted successfully` });
         } else {
            res.status(404).json({ msg: "User not found" });
         }
    } catch (error) {
         res.json({ error })
    }
 }
 
// .delete(controller.dropUsers)
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

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req, res){
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}