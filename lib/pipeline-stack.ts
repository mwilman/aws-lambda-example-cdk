import {Construct} from 'constructs';
import {CodePipeline, CodePipelineSource, ManualApprovalStep, ShellStep} from 'aws-cdk-lib/pipelines';
import {Stack, StackProps} from "aws-cdk-lib";
import {MyPipelineAppStageDev} from "./my-pipeline-stage-dev";
import {MyPipelineAppStageProd} from "./my-pipeline-stage-prod";

export class MyPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'Pipeline', {
            pipelineName: 'MyPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.connection('mwilman/aws-lambda-example-cdk', 'master', {
                    connectionArn: 'arn:aws:codestar-connections:eu-central-1:781666490500:connection/2456ebe6-f7f6-4c7c-9863-d2be3a8f168a'
                }),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });

        const testingStage = pipeline.addStage(new MyPipelineAppStageDev(this, 'testing', {
            env: { account: '781666490500', region: 'eu-central-1' }
        }));

        testingStage.addPost(new ManualApprovalStep('approval'));

        const prod = pipeline.addStage(new MyPipelineAppStageProd(this, 'prod', {
            env: { account: '781666490500', region: 'eu-central-1' }
        }));
    }
}