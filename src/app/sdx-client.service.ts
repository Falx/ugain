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
  clientId: 'ugain-new_4ea5225b-1104-499d-832c-f0f963248b2c',
  clientSecret:
    'a0141a51dde777114d432e3f260b00986cef92c364e1f65b2d6fd4e5181198f024752eda113deef03b23bef072618eec9314c8202fa91ee8d6b0eb6266f4e445',
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
