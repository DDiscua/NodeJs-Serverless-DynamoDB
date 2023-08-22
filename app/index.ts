
import serverless from "serverless-http";
import express from "express";
import { addOrUpdateCharacter, getCharacters, getCharaterById } from "./services";
import { getVariables } from "./envVariables";

const app = express();
app.use(express.json());


app.get("/characters", async (req, res, next) => {

    try {
        const characters = await getCharacters();

        return res.status(200).json({
            result: characters.Items,
            count: characters.Count,
            message: "success",
        });
    } catch (err) {
        return res.status(500).json({
            result: [],
            count: 0,
            message: err,
        });
    }
});

app.get("/characters/:id", async (req, res, next) => {
    try {
        const id = req.params.id;

        const character = await getCharaterById(id);

        return res.status(200).json({
            result: character.Item,
            message: "success",
        });

    } catch (err) {
        return res.status(500).json({
            result: {},
            message: err,
        });
    }
});


app.get("/envVariables", async (req, res, next) => {
    try {

        const variables = getVariables();

        return res.status(200).json({
            result: variables,
            message: "success",
        });

    } catch (err) {
        return res.status(500).json({
            result: {},
            message: err,
        });
    }
});

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send();
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500).send();
});

export const handler = serverless(app);



