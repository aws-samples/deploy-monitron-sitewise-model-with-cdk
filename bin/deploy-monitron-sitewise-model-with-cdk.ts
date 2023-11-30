#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

//This CDK script is responsable to create a new Amazon Monitron Model in the Sitewise that can be used
//to created multiple Monitron assets
import * as cdk from 'aws-cdk-lib';
import { CdkMonitronSitewiseStack } from '../lib/deploy-monitron-sitewise-model-with-cdk-stack';

const app = new cdk.App();
new CdkMonitronSitewiseStack(app, 'CdkMonitronSitewiseStack');
