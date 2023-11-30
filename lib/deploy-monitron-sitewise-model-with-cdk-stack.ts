// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import * as cdk from 'aws-cdk-lib';
import * as sitewise from 'aws-cdk-lib/aws-iotsitewise';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import { MonitronModel } from './models/monitron-model-constructor';

 
// Main Stack that will create the model
export class CdkMonitronSitewiseStack extends cdk.Stack {
  public monitronModel: MonitronModel;
  
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /**************************************************************************/
    /*                            Create Models                               */
    /**************************************************************************/

    //Create the Monitron Model
    this.monitronModel = new MonitronModel(this, 'MonitronModel', {});
  

  
  }
}
