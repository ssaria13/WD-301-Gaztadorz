const express = require('express');
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 5038;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CONNECTION_STRING = "mongodb+srv://aublisber13:ksnluvpsh2313@cluster0.yl5ogkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "MyDb";

let database;

MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.error("Error connecting to MongoDB:", error);
        return;
    }
    database = client.db(DATABASE_NAME);
    console.log("Connected to Cluster 0");
});

// Get all contact messages
app.get('/api/contact', async (req, res) => {
    try {
        const contact = await database.collection("contact").find({}).toArray();
        res.json(contact);
    } catch (error) {
        console.error("Error fetching contact messages:", error);
        res.status(500).json({ error: "Failed to fetch contact messages" });
    }
});

// Add a new contact message
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const result = await database.collection("contact").insertOne({ name, email, message });
        res.json({ id: result.insertedId, name, email, message });
    } catch (error) {
        console.error("Error adding contact message:", error);
        res.status(500).json({ error: "Failed to add contact message" });
    }
});

// Delete a contact message
app.delete('/api/contact/:id', async (req, res) => {
    try {
        const messageId = req.params.id;
        await database.collection("contact").deleteOne({ _id: ObjectId(messageId) });
        res.json("Contact message deleted successfully");
    } catch (error) {
        console.error("Error deleting contact message:", error);
        res.status(500).json({ error: "Failed to delete contact message" });
    }
});

app.put('/api/contact/:id', async (req, res) => {
    try {
        const messageId = req.params.id;
        const { name, email, message } = req.body;
        await database.collection("contact").updateOne({ _id: ObjectId(messageId) }, { $set: { name, email, message } });
        res.json("Contact message updated successfully");
    } catch (error) {
        console.error("Error updating contact message:", error);
        res.status(500).json({ error: "Failed to update contact message" });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
