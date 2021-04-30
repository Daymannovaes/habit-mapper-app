// @todo think of a better name for this file
import Amplify from 'aws-amplify';
import awsExports from '@habit-mapper-app/infrastructure/aws';

function configureAwsAmplify() {
  Amplify.configure(awsExports);
}

export function configure(app): void {
  configureAwsAmplify();
}
