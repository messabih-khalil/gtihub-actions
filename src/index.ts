import express, { Request, Response } from 'express';
import User from './models';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;
// mongodb+srv://<username>:<password>@cluster0.hzmqegq.mongodb.net/?retryWrites=true&w=majority
const [dbUser, dbPassword, dbHost] = [
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD,
    process.env.MONGO_HOST,
];

app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(
        `mongodb://${dbUser}:${dbPassword}@${dbHost}/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.post('/users', async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await User.create({
        name,
        email,
    });

    res.status(201).json(user);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
