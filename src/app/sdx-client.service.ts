import { Injectable } from '@angular/core';
import {
  SolidLDPBackend,
  SolidLDPContext,
  StaticTargetResolver,
} from '@solidlab/sdx-sdk';
import { SolidClientCredentials } from '@solidlab/sdx-sdk/dist/commons/auth/solid-client-credentials';
import {
  GRAPHQL_SCHEMA,
  Sdk,
  getSolidClient,
} from 'src/.sdx-gen/sdk.generated';

const clientCredentials: SolidClientCredentials = {
  clientId: 'ugain_d1d53aa3-e84f-428d-86cf-7dab3ac0e151',
  clientSecret:
    '25d660225bb92fe7a77bc86a74b870147897a73395a52fa4bd136d4416390684d7e7b9bc291547ea3382de2bb1069ba5958d54021861a7b35c6df7d0f7c68783',
  identityServerUrl: 'http://localhost:3000',
};
const schema = GRAPHQL_SCHEMA;

@Injectable({
  providedIn: 'root',
})
export class SdxClientService {
  private client: Sdk;

  constructor() {
    // Client setup
    const resolver = new StaticTargetResolver(
      'http://localhost:3000/datasets/public-toilets.ttl'
    );
    const defaultContext = new SolidLDPContext(resolver);
    const { requester } = new SolidLDPBackend({
      defaultContext,
      clientCredentials,
      schema,
    });
    this.client = getSolidClient(requester);
  }

  async listToilets() {
    return (await this.client.listToilets()).publicToiletCollection;
  }

  async getToilet(id: string) {
    return (await this.client.getToilet({ id })).publicToilet;
  }
}
