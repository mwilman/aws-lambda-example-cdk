import * as cdk from 'aws-cdk-lib'
import * as lambda from "aws-cdk-lib/aws-lambda";
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";

export class NodeAppCdkStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new NodejsFunction(this, 'LambdaTSFunction', {
            entry: 'src/index.ts',
            handler: 'index.handler',
            memorySize: 1024,
            runtime: lambda.Runtime.NODEJS_14_X,
            timeout: cdk.Duration.seconds(300),
        });
    }
}
