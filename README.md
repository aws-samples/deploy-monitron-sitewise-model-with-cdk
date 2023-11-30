# Authors
* **Leo Simberg**: IoT Partner Solutions Architect

# Creating the Amazon Monitron Model in the AWS IoT Sitewise using CDK

 This exemplifies the process of creating an AWS Monitron Model within AWS Sitewise using the AWS Cloud Development Kit (CDK). The resulting model enables the construction of Amazon Monitron Assets on AWS IoT Sitewise, facilitating the reception of data directly from Monitron Devices.

**Amazon Monitron** - [Service Site](https://aws.amazon.com/monitron/)

**AWS IoT Sitewise** - [Service Site](https://aws.amazon.com/iot-sitewise/)

**How to use CDK** - [CDK Workshop](https://cdkworkshop.com/)


## Prerequisites

Before you begin, ensure that you have the following prerequisites:

- [Node.js](https://nodejs.org/) installed (CDK is based on Node.js).
- AWS CDK installed globally. You can install it using npm:
  ```bash
  npm install -g aws-cdk

- AWS CLI configured with appropriate credentials.


## Installation
1. Clone this repository:

```bash
git clone git@github.com:aws-samples/deploy-monitron-sitewise-model-with-cdk.git
```

2. Change into the project directory:
```bash
cd deploy-monitron-sitewise-model-with-cdk
```

3. Install dependencies:
```bash
npm install
```

## Usage
1. Deploy the CDK application to create the Sitewise models and assets on AWS using a terminal.

```bash
cdk deploy
```

## Cleanup
To remove the deployed resources, run the following command:

```bash
cdk destroy
```

### Contributing
Contributions to improve and extend this sample project are welcome! If you find a bug or have an idea for an enhancement, please open an issue or submit a pull request.

### License
This library is licensed under the MIT-0 License. See the LICENSE file.

### 
# Special Thanks
* Bin Qiu: Partner Solutions Architect 
* Nick White: Partner Solutions Architect
