const cdk = require('aws-cdk-lib');
const iam = require('aws-cdk-lib/aws-iam');
const { Construct } = require('constructs');

// Class to IAM Role
class iamRoleModule extends Construct {
  constructor(scope, id, props) {
    super(scope, id);

    Object.entries(props.roles).forEach(([roleKey, roleProps]) => {
      // Create Role for each properties
      const role = new iam.Role(this, roleProps.name, {
        roleName: roleProps.name,
        description: roleProps.description,
        assumedBy: new iam.ServicePrincipal(roleProps.ServicePrincipal),
      });

      // Create Policy for each properties
      const policy = new iam.Policy(this, `${roleProps.name}-Policy`, {
        policyName: roleProps.policyName,
        statements: [
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: roleProps.actions,
            resources: roleProps.resources
          })
        ]
      });

      role.attachInlinePolicy(policy);
    });
  }
}

module.exports = { iamRoleModule };
