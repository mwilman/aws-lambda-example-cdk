import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import {NodeAppCdkStack} from "./node-app-cdk-stack";

export class MyPipelineAppStageDev extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const lambdaStack = new NodeAppCdkStack(this, 'LambdaStackDev');
    }
}