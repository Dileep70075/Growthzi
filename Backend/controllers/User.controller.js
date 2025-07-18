const bcrypt = require('bcrypt');
const User = require("../models/Signup.model");
const jwt = require("jsonwebtoken");
const DeletedUser = require("../models/DeleteUser.model");
const TextContent = require("../models/TextContent");
const Vision = require("../models/TextByUser");

exports.saveOrUpdateText = async (req, res) => {
  try {
    const { name, email, text } = req.body;

    console.log('Received from frontend:', req.body); // ✅ Log to backend terminal

    if (!name || !email || !text) {
      return res.status(400).json({ message: 'Name, email, and text are required.' });
    }

    let entry = await Vision.findOne({ email });

    if (entry) {
      entry.name = name;
      entry.text = text;
      await entry.save();
    } else {
      entry = await Vision.create({ name, email, text });
    }

    res.status(200).json({
      message: 'Text saved successfully',
      data: entry,
    });

  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};

exports.createTextContent = async (req, res) => {
  try {
    const { text } = req.body;
    const newContent = new TextContent({ text });
    // Do NOT save to database
    res.status(200).json(newContent);
  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};
exports.updateTextContent = async (req, res) => {
  try {
    const { newText } = req.body;

    // Step 1: Find the existing content (assuming only one document)
    const existingContent = await TextContent.findOne();

    // Step 2: If content not found
    if (!existingContent) {
      return res.status(400).json({ message: 'TextContent not found' });
    }

    // Step 3: Show updated data but do NOT save to database
    const previewContent = { ...existingContent.toObject(), text: newText };

    // Step 4: Success response
    res.json({
      message: 'Preview of updated text (not saved to DB).',
      content: previewContent,
    });

  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, 
      // dob
     } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, 
    
     });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!", newUser });
  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};
exports.loginUser = async (req, res) => {
  try {
    if (!req.body.email)
        return res.status(200).json({ message: 'please get email', success: false })
    else if (!req.body.password)
        return res.status(200).json({ message: 'please get password', success: false })
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        const isMatch = await bcrypt.compare(req.body.password, existingUser.password);
        if (isMatch) {
            const token = await jwt.sign({ userId: existingUser._id }, 'shhhhh');
            return res.status(200).json({ message: 'login successful', success: true, data: existingUser, token: token });
        } else {
            return res.status(200).json({ message: 'password not matched', success: false });
        }
    } else {
        return res.status(200).json({ message: 'user not found', success: false });
    }
}
catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "User ID not provided", success: false });
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "User not found", success: false });
    }
    const deletedUser = new DeletedUser({
      name: user.name,
      email: user.email,
      photo: user.photo,
      dob: user.dob,
    });

    await deletedUser.save();
    await User.findByIdAndUpdate(
      id,
      { $set:{status: "deleted"} },
      { new: true }
    );

    return res.status(200).json({ message: "User deleted and backed up successfully", success: true });
  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ status: "active" });
    res.status(200).json(users);
  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(400).json({ message: "User not found" });

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (err) {
  console.error(err);
  return new Response("Internal Server Error", { status: 500 });
}
};

