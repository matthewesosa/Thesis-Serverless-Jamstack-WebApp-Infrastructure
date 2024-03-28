var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "MenuLinks",
  KeySchema: [
    // Partition Key
    { AttributeName: "href", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "text", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "class", AttributeType: "S" },
    { AttributeName: "href", AttributeType: "S" },
    { AttributeName: "text", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "ClassIndex",
      KeySchema: [
        { AttributeName: "href", KeyType: "HASH" },
        { AttributeName: "class", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    }
  ], 
  BillingMode: "PAY_PER_REQUEST" // Use on-demand capacity mode
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});