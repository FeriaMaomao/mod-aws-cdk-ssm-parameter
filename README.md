# mod-aws-cdk-iam-role

[![CDK](https://img.shields.io/badge/CDK-2.138.0-yellow)](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

> Module that allows the creation of OIDC IAM Role and its dependencies.
>
> ## Table of Contents

- [mod-aws-cdk-iam-role](#mod-aws-cdk-iam-role)
  - [Table of Contents](#Table-of-Contents)
  - [Diagram](#Diagram)
  - [Prerequisites](#Prerequisites)
  - [Providers](#Providers)
  - [Inputs](#Inputs)
  - [Outputs](#Outputs)
  - [Example usage](#Example-usage)
  - [Basic Invocation Example](#Basic-Invocation-Example)
  - [Custom Invocation Example](#Custom-Invocation-Example)

## Diagram

![](./images/IAM%20Roles.png)

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](http://git-scm.com/)
- [Node](https://nodejs.org/en/download)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## Requirements

![NPM](https://img.shields.io/badge/NPM%20INSTALL-grey?style=for-the-badge&logo=NPM)



## Providers

| Name | Version |
| ---- | ------- |
| ![AWS](https://img.shields.io/badge/AWS-gree)  | ![N/A](https://img.shields.io/badge/N/A-grey)     |

## Inputs

| Name                  | Description                                                                                                                        | Type     | Default | Required |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | :------: |
| roleName                 | Custom Role Name.                                                                                                            | `string`    | n/a     |   yes    |
| description                  | Custom Description to Role.                                                                                                       | `string`    | n/a     |   yes    |
| policyName    | Custom Policy Name.                                                                    | `string` | n/a   |    yes    |
| actions           | Allowable Action to Role                                                                                                           | `string[]` | n/a    |    yes    |
| resources | Resource Allowed Access.                                                       | `string[]` | n/a |    yes    |


## Outputs

| Name  | Description                                 |
| ----- | ------------------------------------------- |
| ![N/A](https://img.shields.io/badge/N/A-grey) | ![N/A](https://img.shields.io/badge/N/A-grey) |

## Example usage

- This module creates an OIDC Provider, a Role that takes the OIDC as a Trust Entity Configuration, a policy to allow actions on resources and finally attaches the policy to the role.


### Basic Invocation Example with one Role

```CDK
Add in package.json

"dependencies": {
    "aws-cdk-lib": "latest",
    "constructs": "latest",
    "iamRoleModule": "gitlab:mauriciogonzalezferia/mod-aws-cdk-iam-role"
  }

#################################################################

const cdk = require('aws-cdk-lib');
const iam = require('aws-cdk-lib/aws-iam');
const { iamRoleModule } = require('iamRoleModule/iam-role-module');

// Your Custom Stack
class CdkRoleStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Inside your custom stack
    // Create Role
    new iamRoleModule(this, 'iamRoleModule', {
      roles: {
        example: {
          name: 'Custom Role Name',
          description: 'Description for the role',
          policyName: 'Policy Custom name',
          actions: ['s3:*'],    // Allow Actions Services
          resources: ['*'],    // Allow on Resources or ARN
          ServicePrincipal: 'ec2.amazonaws.com'   // Assume Policy on Service - Trusted Config
        }
      }
    });
  }
}

module.exports = { CdkRoleStack };   // Your Custom Stack

```

### Custom Invocation Example with 2 or more Roles

```CDK
Add in package.json

"dependencies": {
    "aws-cdk-lib": "latest",
    "constructs": "latest",
    "iamRoleModule": "gitlab:mauriciogonzalezferia/mod-aws-cdk-iam-role"
  }

#################################################################

const cdk = require('aws-cdk-lib');
const iam = require('aws-cdk-lib/aws-iam');
const { iamRoleModule } = require('iamRoleModule/iam-role-module');

// Your Custom Stack
class CdkRoleStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Inside your custom stack
    // Create Role
    new iamRoleModule(this, 'iamRoleModule', {
      roles: {
        example: {
          name: 'example-role',
          description: 'Description for the role',
          policyName: 'Policy Custom name',
          actions: ['*'],    // Allow Actions Services
          resources: ['*'],    // Allow on Resources or ARN
          ServicePrincipal: 'ec2.amazonaws.com'   // Assume Policy on Service - Trusted Config
        },
        example2: {
          name: 'Custom Role Name',
          description: 'Description for the role',
          policyName: 'Policy Custom name',
          actions: ['*'],    // Allow Actions Services
          resources: ['*'],    // Allow on Resources or ARN
          ServicePrincipal: 'lambda.amazonaws.com'   // Assume Policy on Service - Trusted Config
        },
        example3: {
          name: 'Custom Role Name',
          description: 'Description for the role',
          policyName: 'Policy Custom name',
          actions: ['*'],    // Allow Actions Services
          resources: ['*'],    // Allow on Resources or ARN
          ServicePrincipal: 's3.amazonaws.com'   // Assume Policy on Service - Trusted Config
        }
      }
    });
  }
}

module.exports = { CdkRoleStack };   // Your Custom Stack

```

