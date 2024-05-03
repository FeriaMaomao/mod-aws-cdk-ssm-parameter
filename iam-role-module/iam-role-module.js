// const cdk = require('aws-cdk-lib');
// const iam = require('aws-cdk-lib/aws-iam');

// const iamRoleModuleProps = {
//   roleName: '',
//   description: '',
//   policyName: '',
//   actions: [],
//   resources: [],
//   ServicePrincipal: []
// };

// // Parameter to IAM Role
// class iamRoleModule extends cdk.Construct {
//   constructor(scope, id, props) {
//     super(scope, id);

//     // Create Role with OIDC
//     const role = new iam.Role(this, 'Role', {
//       roleName: props.roleName, // Custom Role Name
//       description: props.description, // Custom Description to Role
//       assumedBy: new iam.ServicePrincipal(props.ServicePrincipal),
//     });

//     // Create Policy
//     const policy = new iam.Policy(this, 'Policy', {
//       policyName: props.policyName, // Custom Policy Name
//       statements: [
//         new iam.PolicyStatement({
//           effect: iam.Effect.ALLOW,
//           actions: props.actions, // Allowable Action
//           resources: props.resources // Resource Allowed Access
//         })
//       ]
//     });

//     // Attaching the Policy to the OIDC Role
//     role.attachInlinePolicy(policy);
//   }
// }

// module.exports = { iamRoleModule };


const cdk = require('aws-cdk-lib');
const iam = require('aws-cdk-lib/aws-iam');

class aimRoleModule extends cdk.Construct {
  constructor(scope, id, props) {
    super(scope, id);

    Object.entries(props.roles).forEach(([roleKey, roleProps]) => {
      // Crear un nuevo rol para cada conjunto de propiedades
      const role = new iam.Role(this, roleProps.name, {
        roleName: roleProps.name,
        description: roleProps.description,
        assumedBy: new iam.ServicePrincipal(roleProps.ServicePrincipal),
      });

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

module.exports = { aimRoleModule };
