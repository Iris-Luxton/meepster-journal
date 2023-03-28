import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

const createToken = (_id) => {
    return jwt.sign({_id: _id }, process.env.SECRET, { expiresIn: '3d'})
}
const secretKey = 'your-secret-key';


const getUserByEmailAndPassword = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      return null;
    }
    const passwordMatch = await user.checkPassword(password);
    if (!passwordMatch) {
      return null;
    }
    return user;
  };

const register = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await User.signup(email, password)
        // Create a token
        const token = createToken(user._id);
        res.status(200).json ({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // res.json({ token });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        // Create a token
        const token = createToken(user._id);
        res.status(200).json ({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    }
  export default { register, login };