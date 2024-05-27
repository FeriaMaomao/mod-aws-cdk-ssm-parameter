const cdk = require('aws-cdk-lib');
const ssm = require('aws-cdk-lib/aws-ssm');
const { Construct } = require('constructs');

// Class to SSM Parameter
class ssmParameterModule extends Construct {
  constructor(scope, id, props) {
    super(scope, id);

    Object.entries(props.parameters).forEach(([parameterKey, parameterProps]) => {
      
      // Create SSM Parameter for each properties
      const parameter = new ssm.StringParameter(this, parameterKey, {
        parameterName: parameterProps.name,
        stringValue: parameterProps.value,
      });
    });
  }
}

module.exports = { ssmParameterModule };
