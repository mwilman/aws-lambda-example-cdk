import * as cdk from 'aws-cdk-lib'
import * as lambda from "aws-cdk-lib/aws-lambda";
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import {AttributeType, Table} from "aws-cdk-lib/aws-dynamodb";
import {LambdaIntegration, RestApi} from "aws-cdk-lib/aws-apigateway";

export class NodeAppCdkStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const dynamoLambda = new NodejsFunction(this, 'LambdaTSFunction', {
            entry: 'src/index.ts',
            handler: 'index.handler',
            memorySize: 1024,
            bundling: {
                minify: true
            },
            runtime: lambda.Runtime.NODEJS_14_X,
            timeout: cdk.Duration.seconds(300),
        });

        const table = new Table(this, "Hello", {
            partitionKey: { name: "name", type: AttributeType.STRING },
        });

        // permissions to lambda to dynamo table
        table.grantReadWriteData(dynamoLambda);

        // create the API Gateway with one method and path
        const api = new RestApi(this, "hello-api");

        api.root
            .resourceForPath("hello")
            .addMethod("GET", new LambdaIntegration(dynamoLambda));
    }
}
