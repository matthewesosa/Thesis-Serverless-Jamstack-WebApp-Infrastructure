var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Accessibilities",
  KeySchema: [
    // Partition Key
    { AttributeName: "name", KeyType: "HASH" }
  ],
  AttributeDefinitions: [
    { AttributeName: "name", AttributeType: "S" }
  ],

  BillingMode: "PAY_PER_REQUEST" // Use on-demand capacity mode
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});