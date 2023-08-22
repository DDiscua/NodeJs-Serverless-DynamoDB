# Serverless application with Express and DynamoDB

This is a simgle app using AWS serverless and express,

## Run de project

After install dependencies create a .env file and set up the proper variables(see .env-example)

- TABLE_NAME=YOUR DYNAMO DB Table name
- ACCESS_KEY_ID= YOUR ACCESS KEY (with proper permissions)
- SECRET_ACCESS_KEY=YOUR SECRET KEY (with proper permissions)
- REGION= YOUR AWS REGION
- API_URL='https://hp-api.onrender.com/api/characters'


First we need to build our application using the following command: 

``` npm run build ```

Then use the following command to run serverless offline:

``` serverless offline```

Or use 

``` serverless deploy ```

## Medium

https://medium.com/@ddiscua/aws-serverless-app-using-nodejs-serverless-framework-and-dynamo-db-4f7d158a9af0