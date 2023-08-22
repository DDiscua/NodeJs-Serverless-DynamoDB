import { dynamodb, TABLE_NAME } from "../config"

const getCharacters = async () => {
    try {
        const params = {
            TableName: TABLE_NAME
        };

        const result = await dynamodb.scan(params).promise();

        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }

}


export { getCharacters }