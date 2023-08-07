#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NodeAppCdkStack } from '../lib/node-app-cdk-stack';
import {MyPipelineStack} from "../lib/pipeline-stack";

const app = new cdk.App();
new NodeAppCdkStack(app, 'NodeAppCdkStack', {
    env: {account: '781666490500', region: 'eu-central-1'}
});

new MyPipelineStack(app, 'MyPipelineStack', {
    env: {account: '781666490500', region: 'eu-central-1'}
});
