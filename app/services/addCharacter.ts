import { dynamodb, TABLE_NAME } from "../config"

const addOrUpdateCharacter = async (item: Object) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Item: item
        };

        const result = await dynamodb.put(params).promise();

        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}


export { addOrUpdateCharacter }