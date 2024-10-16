import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"] 
  },
  role: {
    type: String,
    default: 'admin',
    immutable: true 
  },
  password: { 
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"]
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;