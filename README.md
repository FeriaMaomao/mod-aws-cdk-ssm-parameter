# mod-aws-cdk-ssm-parameter

[![CDK](https://img.shields.io/badge/CDK-2.138.0-yellow)](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

> Module that allows the creation of Parameters in SSM and its dependencies.

>
> ## Table of Contents

- [mod-aws-cdk-ssm-parameter](#mod-aws-cdk-ssm-parameter)
  - [Table of Contents](#Table-of-Contents)
  - [Diagram](#Diagram)
  - [Prerequisites](#Prerequisites)
  - [Providers](#Providers)
  - [Inputs](#Inputs)
  - [Outputs](#Outputs)
  - [Example usage](#Example-usage)
  - [Basic Invocation Example](#Basic%20Invocation%20Example%20with%20one%20Parameter)
  - [Custom Invocation Example](#Custom%20Invocation%20Example%20with%202%20or%20more%20Parameters)

## Diagram

![](./images/ssm%20parameters.png)

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
| name                 | Custom Path Name.                                                                                                            | `string`    | n/a     |   yes    |
| value    | Custom Value.                                                                    | `string` | n/a   |    yes    |



## Outputs

| Name  | Description                                 |
| ----- | ------------------------------------------- |
| ![N/A](https://img.shields.io/badge/N/A-grey) | ![N/A](https://img.shields.io/badge/N/A-grey) |

## Example usage

- This module allows the creation of one or more parameters as necessary.


### Basic Invocation Example with one Parameter

```CDK
Add in package.json

"dependencies": {
    "aws-cdk-lib": "latest",
    "constructs": "latest",
    "ssmParameterModule": "gitlab:mauriciogonzalezferia/mod-aws-cdk-ssm-parameter"
  }

#################################################################

const cdk = require('aws-cdk-lib');
const ssm = require('aws-cdk-lib/aws-ssm');
const { ssmParameterModule } = require('ssmParameterModule/ssm-parameter-module');

// Your Custom Stack
class CdkSSMStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Inside your custom stack
    // Create SSM Parameter
    new ssmParameterModule(this, 'ssmParameterModule', {
      parameters: {
        example: {
          name: 'Custom  Name',
          value: 'Custom Value',
        }
      }
    });
  }
}

module.exports = { CdkSSMStack };   // Your Custom Stack

```

### Custom Invocation Example with 2 or more Parameters

```CDK
Add in package.json

"dependencies": {
    "aws-cdk-lib": "latest",
    "constructs": "latest",
    "ssmParameterModule": "gitlab:mauriciogonzalezferia/mod-aws-cdk-ssm-parameter"
  }

#################################################################

const cdk = require('aws-cdk-lib');
const ssm = require('aws-cdk-lib/aws-ssm');
const { ssmParameterModule } = require('ssmParameterModule/ssm-parameter-module');

// Your Custom Stack
class CdkSSMStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Inside your custom stack
    // Create SSM Parameter
    new ssmParameterModule(this, 'ssmParameterModule', {
      parameters: {
        example: {
          name: 'Custom  Name',
          value: 'Custom Value',
        },
        example2: {
          name: 'Custom  Name',
          value: 'Custom Value',
        },
        example3: {
          name: 'Custom  Name',
          value: 'Custom Value',
        }
      }
    });
  }
}

module.exports = { CdkSSMStack };   // Your Custom Stack

```

