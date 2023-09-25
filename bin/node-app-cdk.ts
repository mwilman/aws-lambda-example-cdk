#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NodeAppCdkStack } from '../lib/node-app-cdk-stack';

const app = new cdk.App();
new NodeAppCdkStack(app, 'NodeAppCdkStack', {
    env: {account: '781666490500', region: 'eu-central-1'}
});
