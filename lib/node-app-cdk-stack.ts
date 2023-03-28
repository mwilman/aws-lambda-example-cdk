import * as cdk from 'aws-cdk-lib'
import * as lambda from "aws-cdk-lib/aws-lambda";

export class NodeAppCdkStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new lambda.Function(this, 'LambdaNodeStack', {
            code: lambda.Code.fromAsset('./src'),
            functionName: "lambdaNode",
            handler: 'index.handler',
            memorySize: 1024,
            runtime: lambda.Runtime.NODEJS_14_X,
            timeout: cdk.Duration.seconds(300),
        });
    }
}
