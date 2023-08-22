import axios from 'axios';
import { addOrUpdateCharacter } from './services';
import * as dotenv from 'dotenv';
dotenv.config();

const API_URL = process.env.API_URL || "";


export const getData = async () => {
    const { data: characters } = await axios.get(API_URL);

    return characters;
}

export const bulkData = async () => {
    try {
        const data = await getData();

        const charactersPromises = data.map(async (character: any, i: number) => {
            addOrUpdateCharacter({ ...character, id: i + '' });
        });

        await Promise.all(charactersPromises);
    } catch (err: any) {
        throw new Error(err.message);
    }
};