import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateGeoCoordinatesInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  /** Optional URI to use as an identifier for the new instance. One of the 'id' or 'slug' fields must be set! */
  id?: InputMaybe<Scalars['ID']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  /** Optional slug that is combined with the context of the request to generate an identifier for the new instance. One of the 'id' or 'slug' fields must be set! */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostalAddressInput = {
  addressCountry?: InputMaybe<Scalars['String']['input']>;
  addressLocality?: InputMaybe<Scalars['String']['input']>;
  addressRegion?: InputMaybe<Scalars['String']['input']>;
  /** Optional URI to use as an identifier for the new instance. One of the 'id' or 'slug' fields must be set! */
  id?: InputMaybe<Scalars['ID']['input']>;
  postOfficeBoxNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Optional slug that is combined with the context of the request to generate an identifier for the new instance. One of the 'id' or 'slug' fields must be set! */
  slug?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePublicToiletInput = {
  AccessStatus?: InputMaybe<Scalars['String']['input']>;
  AdultToilets?: InputMaybe<Scalars['String']['input']>;
  ChildrensToilets?: InputMaybe<Scalars['String']['input']>;
  CleaningCompany?: InputMaybe<Scalars['String']['input']>;
  DiaperChangingTables?: InputMaybe<Scalars['String']['input']>;
  Neighbourhood?: InputMaybe<Scalars['String']['input']>;
  OpeninghoursId?: InputMaybe<Scalars['String']['input']>;
  PotableWaterAccessPoints?: InputMaybe<Scalars['String']['input']>;
  Restroom_attendant?: InputMaybe<Scalars['String']['input']>;
  Supervision?: InputMaybe<Scalars['String']['input']>;
  Toilets?: InputMaybe<Scalars['String']['input']>;
  Urinals?: InputMaybe<Scalars['String']['input']>;
  WaterAccessPoints?: InputMaybe<Scalars['String']['input']>;
  WebPage?: InputMaybe<Scalars['String']['input']>;
  buildingsType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional URI to use as an identifier for the new instance. One of the 'id' or 'slug' fields must be set! */
  id?: InputMaybe<Scalars['ID']['input']>;
  identifier: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  locationType?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  openingHours?: InputMaybe<Scalars['String']['input']>;
  /** Optional slug that is combined with the context of the request to generate an identifier for the new instance. One of the 'id' or 'slug' fields must be set! */
  slug?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  statusCode?: InputMaybe<Scalars['String']['input']>;
};

export type GeoCoordinates = {
  __typename?: 'GeoCoordinates';
  address?: Maybe<Scalars['String']['output']>;
  /** Auto-generated property that will be assigned to the 'iri' of the Thing that is being queried. */
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
};

export type GeoCoordinatesMutation = {
  __typename?: 'GeoCoordinatesMutation';
  delete: GeoCoordinates;
  update: GeoCoordinates;
};


export type GeoCoordinatesMutationUpdateArgs = {
  input: UpdateGeoCoordinatesInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGeoCoordinates: GeoCoordinates;
  createPostalAddress: PostalAddress;
  createPublicToilet: PublicToilet;
  mutateGeoCoordinates?: Maybe<GeoCoordinatesMutation>;
  mutatePostalAddress?: Maybe<PostalAddressMutation>;
  mutatePublicToilet?: Maybe<PublicToiletMutation>;
};


export type MutationCreateGeoCoordinatesArgs = {
  input: CreateGeoCoordinatesInput;
};


export type MutationCreatePostalAddressArgs = {
  input: CreatePostalAddressInput;
};


export type MutationCreatePublicToiletArgs = {
  input: CreatePublicToiletInput;
};


export type MutationMutateGeoCoordinatesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMutatePostalAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMutatePublicToiletArgs = {
  id: Scalars['ID']['input'];
};

export type PostalAddress = {
  __typename?: 'PostalAddress';
  addressCountry?: Maybe<Scalars['String']['output']>;
  addressLocality?: Maybe<Scalars['String']['output']>;
  addressRegion?: Maybe<Scalars['String']['output']>;
  /** Auto-generated property that will be assigned to the 'iri' of the Thing that is being queried. */
  id: Scalars['ID']['output'];
  postOfficeBoxNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
};

export type PostalAddressMutation = {
  __typename?: 'PostalAddressMutation';
  delete: PostalAddress;
  update: PostalAddress;
};


export type PostalAddressMutationUpdateArgs = {
  input: UpdatePostalAddressInput;
};

export type PublicToilet = {
  __typename?: 'PublicToilet';
  AccessStatus?: Maybe<Scalars['String']['output']>;
  AdultToilets?: Maybe<Scalars['String']['output']>;
  ChildrensToilets?: Maybe<Scalars['String']['output']>;
  CleaningCompany?: Maybe<Scalars['String']['output']>;
  DiaperChangingTables?: Maybe<Scalars['String']['output']>;
  Neighbourhood?: Maybe<Scalars['String']['output']>;
  OpeninghoursId?: Maybe<Scalars['String']['output']>;
  PotableWaterAccessPoints?: Maybe<Scalars['String']['output']>;
  Restroom_attendant?: Maybe<Scalars['String']['output']>;
  Supervision?: Maybe<Scalars['String']['output']>;
  Toilets?: Maybe<Scalars['String']['output']>;
  Urinals?: Maybe<Scalars['String']['output']>;
  WaterAccessPoints?: Maybe<Scalars['String']['output']>;
  WebPage?: Maybe<Scalars['String']['output']>;
  address: PostalAddress;
  buildingsType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  geo: GeoCoordinates;
  /** Auto-generated property that will be assigned to the 'iri' of the Thing that is being queried. */
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  locationType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  openingHours?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['String']['output']>;
};

export type PublicToiletMutation = {
  __typename?: 'PublicToiletMutation';
  clearAddress: PublicToilet;
  clearGeo: PublicToilet;
  delete: PublicToilet;
  linkAddress: PublicToilet;
  linkGeo: PublicToilet;
  setAddress: PublicToilet;
  setGeo: PublicToilet;
  unlinkAddress: PublicToilet;
  unlinkGeo: PublicToilet;
  update: PublicToilet;
};


export type PublicToiletMutationLinkAddressArgs = {
  id: Scalars['ID']['input'];
};


export type PublicToiletMutationLinkGeoArgs = {
  id: Scalars['ID']['input'];
};


export type PublicToiletMutationSetAddressArgs = {
  input: CreatePostalAddressInput;
};


export type PublicToiletMutationSetGeoArgs = {
  input: CreateGeoCoordinatesInput;
};


export type PublicToiletMutationUnlinkAddressArgs = {
  id: Scalars['ID']['input'];
};


export type PublicToiletMutationUnlinkGeoArgs = {
  id: Scalars['ID']['input'];
};


export type PublicToiletMutationUpdateArgs = {
  input: UpdatePublicToiletInput;
};

export type Query = {
  __typename?: 'Query';
  geoCoordinates?: Maybe<GeoCoordinates>;
  geoCoordinatesCollection?: Maybe<Array<Maybe<GeoCoordinates>>>;
  postalAddress?: Maybe<PostalAddress>;
  postalAddressCollection?: Maybe<Array<Maybe<PostalAddress>>>;
  publicToilet?: Maybe<PublicToilet>;
  publicToiletCollection?: Maybe<Array<Maybe<PublicToilet>>>;
};


export type QueryGeoCoordinatesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostalAddressArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPublicToiletArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGeoCoordinatesInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostalAddressInput = {
  addressCountry?: InputMaybe<Scalars['String']['input']>;
  addressLocality?: InputMaybe<Scalars['String']['input']>;
  addressRegion?: InputMaybe<Scalars['String']['input']>;
  postOfficeBoxNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePublicToiletInput = {
  AccessStatus?: InputMaybe<Scalars['String']['input']>;
  AdultToilets?: InputMaybe<Scalars['String']['input']>;
  ChildrensToilets?: InputMaybe<Scalars['String']['input']>;
  CleaningCompany?: InputMaybe<Scalars['String']['input']>;
  DiaperChangingTables?: InputMaybe<Scalars['String']['input']>;
  Neighbourhood?: InputMaybe<Scalars['String']['input']>;
  OpeninghoursId?: InputMaybe<Scalars['String']['input']>;
  PotableWaterAccessPoints?: InputMaybe<Scalars['String']['input']>;
  Restroom_attendant?: InputMaybe<Scalars['String']['input']>;
  Supervision?: InputMaybe<Scalars['String']['input']>;
  Toilets?: InputMaybe<Scalars['String']['input']>;
  Urinals?: InputMaybe<Scalars['String']['input']>;
  WaterAccessPoints?: InputMaybe<Scalars['String']['input']>;
  WebPage?: InputMaybe<Scalars['String']['input']>;
  buildingsType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  locationType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openingHours?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  statusCode?: InputMaybe<Scalars['String']['input']>;
};

export type ListToiletsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListToiletsQuery = { __typename?: 'Query', publicToiletCollection?: Array<{ __typename?: 'PublicToilet', id: string, name: string, Toilets?: string | null, Urinals?: string | null, DiaperChangingTables?: string | null, Neighbourhood?: string | null, geo: { __typename?: 'GeoCoordinates', latitude?: string | null, longitude?: string | null } } | null> | null };

export type GetToiletQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetToiletQuery = { __typename?: 'Query', publicToilet?: { __typename?: 'PublicToilet', id: string, name: string, openingHours?: string | null, Toilets?: string | null, Urinals?: string | null, DiaperChangingTables?: string | null, Neighbourhood?: string | null, image?: string | null, WebPage?: string | null, PotableWaterAccessPoints?: string | null, Supervision?: string | null, description?: string | null, geo: { __typename?: 'GeoCoordinates', latitude?: string | null, longitude?: string | null }, address: { __typename?: 'PostalAddress', streetAddress?: string | null } } | null };


export const ListToiletsDocument = gql`
    query listToilets {
  publicToiletCollection {
    id
    name
    Toilets
    Urinals
    DiaperChangingTables
    Neighbourhood
    geo {
      latitude
      longitude
    }
  }
}
    `;
export const GetToiletDocument = gql`
    query getToilet($id: String!) {
  publicToilet(id: $id) {
    id
    name
    geo {
      latitude
      longitude
    }
    openingHours
    Toilets
    Urinals
    DiaperChangingTables
    Neighbourhood
    address {
      streetAddress
    }
    image
    WebPage
    PotableWaterAccessPoints
    Supervision
    description
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    listToilets(variables?: ListToiletsQueryVariables, options?: C): Promise<ListToiletsQuery> {
      return requester<ListToiletsQuery, ListToiletsQueryVariables>(ListToiletsDocument, variables, options) as Promise<ListToiletsQuery>;
    },
    getToilet(variables: GetToiletQueryVariables, options?: C): Promise<GetToiletQuery> {
      return requester<GetToiletQuery, GetToiletQueryVariables>(GetToiletDocument, variables, options) as Promise<GetToiletQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const getSolidClient = <C, E>(requester: Requester<C, E>): Sdk => getSdk<C, E>(requester);
export const GRAPHQL_SCHEMA = `schema {
  query: Query
  mutation: Mutation
}

directive @is(class: String) on OBJECT | INPUT_OBJECT

directive @property(iri: String) on FIELD_DEFINITION | INPUT_FIELD_DEFINITION

directive @identifier on FIELD_DEFINITION

type Query {
  geoCoordinates(id: String): GeoCoordinates
  geoCoordinatesCollection: [GeoCoordinates]
  postalAddress(id: String): PostalAddress
  postalAddressCollection: [PostalAddress]
  publicToilet(id: String): PublicToilet
  publicToiletCollection: [PublicToilet]
}

type Mutation {
  createGeoCoordinates(input: CreateGeoCoordinatesInput!): GeoCoordinates!
  createPostalAddress(input: CreatePostalAddressInput!): PostalAddress!
  createPublicToilet(input: CreatePublicToiletInput!): PublicToilet!
  mutateGeoCoordinates(id: ID!): GeoCoordinatesMutation
  mutatePostalAddress(id: ID!): PostalAddressMutation
  mutatePublicToilet(id: ID!): PublicToiletMutation
}

type GeoCoordinates @is(class: "http://schema.org/GeoCoordinates") {
  "Auto-generated property that will be assigned to the 'iri' of the Thing that is being queried."
  id: ID! @identifier
  address: String @property(iri: "http://schema.org/address")
  latitude: String @property(iri: "http://schema.org/latitude")
  longitude: String @property(iri: "http://schema.org/longitude")
}

type GeoCoordinatesMutation @is(class: "http://schema.org/GeoCoordinates") {
  delete: GeoCoordinates!
  update(input: UpdateGeoCoordinatesInput!): GeoCoordinates!
}

type PostalAddress @is(class: "http://schema.org/PostalAddress") {
  "Auto-generated property that will be assigned to the 'iri' of the Thing that is being queried."
  id: ID! @identifier
  addressCountry: String @property(iri: "http://schema.org/addressCountry")
  addressLocality: String @property(iri: "http://schema.org/addressLocality")
  addressRegion: String @property(iri: "http://schema.org/addressRegion")
  postalCode: String @property(iri: "http://schema.org/postalCode")
  postOfficeBoxNumber: String @property(iri: "http://schema.org/postOfficeBoxNumber")
  streetAddress: String @property(iri: "http://schema.org/streetAddress")
}

type PostalAddressMutation @is(class: "http://schema.org/PostalAddress") {
  delete: PostalAddress!
  update(input: UpdatePostalAddressInput!): PostalAddress!
}

type PublicToilet @is(class: "http://schema.org/PublicToilet") {
  "Auto-generated property that will be assigned to the 'iri' of the Thing that is being queried."
  id: ID! @identifier
  AccessStatus: String @property(iri: "http://stad.gent/data/ns/AccessStatus")
  address: PostalAddress! @property(iri: "http://schema.org/address")
  AdultToilets: String @property(iri: "http://stad.gent/data/ns/AdultToilets")
  buildingsType: String @property(iri: "http://dbpedia.org/ontology/buildingsType")
  ChildrensToilets: String @property(iri: "http://stad.gent/data/ns/ChildrensToilets")
  CleaningCompany: String @property(iri: "http://stad.gent/data/ns/CleaningCompany")
  description: String @property(iri: "http://schema.org/description")
  DiaperChangingTables: String @property(iri: "http://stad.gent/data/ns/DiaperChangingTables")
  geo: GeoCoordinates! @property(iri: "http://schema.org/geo")
  identifier: String! @property(iri: "http://purl.org/dc/terms/identifier")
  image: String @property(iri: "http://schema.org/image")
  locationType: String @property(iri: "http://stad.gent/data/ns/locationType")
  name: String! @property(iri: "http://xmlns.com/foaf/0.1/name")
  Neighbourhood: String @property(iri: "http://dbpedia.org/resource/Neighbourhood")
  openingHours: String @property(iri: "http://schema.org/openingHours")
  OpeninghoursId: String @property(iri: "http://stad.gent/data/ns/OpeninghoursId")
  PotableWaterAccessPoints: String @property(iri: "http://stad.gent/data/ns/PotableWaterAccessPoints")
  Restroom_attendant: String @property(iri: "http://dbpedia.org/resource/Restroom_attendant")
  source: String @property(iri: "http://purl.org/dc/terms/source")
  statusCode: String @property(iri: "http://purl.org/oslo/ns/localgov#statusCode")
  Supervision: String @property(iri: "http://stad.gent/data/ns/Supervision")
  Toilets: String @property(iri: "http://stad.gent/data/ns/Toilets")
  Urinals: String @property(iri: "http://stad.gent/data/ns/Urinals")
  WaterAccessPoints: String @property(iri: "http://stad.gent/data/ns/WaterAccessPoints")
  WebPage: String @property(iri: "http://schema.org/WebPage")
}

type PublicToiletMutation @is(class: "http://schema.org/PublicToilet") {
  delete: PublicToilet!
  update(input: UpdatePublicToiletInput!): PublicToilet!
  clearAddress: PublicToilet!
  clearGeo: PublicToilet!
  linkAddress(id: ID!): PublicToilet!
  linkGeo(id: ID!): PublicToilet!
  setAddress(input: CreatePostalAddressInput!): PublicToilet!
  setGeo(input: CreateGeoCoordinatesInput!): PublicToilet!
  unlinkAddress(id: ID!): PublicToilet!
  unlinkGeo(id: ID!): PublicToilet!
}

input CreateGeoCoordinatesInput @is(class: "http://schema.org/GeoCoordinates") {
  "Optional URI to use as an identifier for the new instance. One of the 'id' or 'slug' fields must be set!"
  id: ID
  "Optional slug that is combined with the context of the request to generate an identifier for the new instance. One of the 'id' or 'slug' fields must be set!"
  slug: String
  address: String @property(iri: "http://schema.org/address")
  latitude: String @property(iri: "http://schema.org/latitude")
  longitude: String @property(iri: "http://schema.org/longitude")
}

input CreatePostalAddressInput @is(class: "http://schema.org/PostalAddress") {
  "Optional URI to use as an identifier for the new instance. One of the 'id' or 'slug' fields must be set!"
  id: ID
  "Optional slug that is combined with the context of the request to generate an identifier for the new instance. One of the 'id' or 'slug' fields must be set!"
  slug: String
  addressCountry: String @property(iri: "http://schema.org/addressCountry")
  addressLocality: String @property(iri: "http://schema.org/addressLocality")
  addressRegion: String @property(iri: "http://schema.org/addressRegion")
  postalCode: String @property(iri: "http://schema.org/postalCode")
  postOfficeBoxNumber: String @property(iri: "http://schema.org/postOfficeBoxNumber")
  streetAddress: String @property(iri: "http://schema.org/streetAddress")
}

input CreatePublicToiletInput @is(class: "http://schema.org/PublicToilet") {
  "Optional URI to use as an identifier for the new instance. One of the 'id' or 'slug' fields must be set!"
  id: ID
  "Optional slug that is combined with the context of the request to generate an identifier for the new instance. One of the 'id' or 'slug' fields must be set!"
  slug: String
  AccessStatus: String @property(iri: "http://stad.gent/data/ns/AccessStatus")
  AdultToilets: String @property(iri: "http://stad.gent/data/ns/AdultToilets")
  buildingsType: String @property(iri: "http://dbpedia.org/ontology/buildingsType")
  ChildrensToilets: String @property(iri: "http://stad.gent/data/ns/ChildrensToilets")
  CleaningCompany: String @property(iri: "http://stad.gent/data/ns/CleaningCompany")
  description: String @property(iri: "http://schema.org/description")
  DiaperChangingTables: String @property(iri: "http://stad.gent/data/ns/DiaperChangingTables")
  identifier: String! @property(iri: "http://purl.org/dc/terms/identifier")
  image: String @property(iri: "http://schema.org/image")
  locationType: String @property(iri: "http://stad.gent/data/ns/locationType")
  name: String! @property(iri: "http://xmlns.com/foaf/0.1/name")
  Neighbourhood: String @property(iri: "http://dbpedia.org/resource/Neighbourhood")
  openingHours: String @property(iri: "http://schema.org/openingHours")
  OpeninghoursId: String @property(iri: "http://stad.gent/data/ns/OpeninghoursId")
  PotableWaterAccessPoints: String @property(iri: "http://stad.gent/data/ns/PotableWaterAccessPoints")
  Restroom_attendant: String @property(iri: "http://dbpedia.org/resource/Restroom_attendant")
  source: String @property(iri: "http://purl.org/dc/terms/source")
  statusCode: String @property(iri: "http://purl.org/oslo/ns/localgov#statusCode")
  Supervision: String @property(iri: "http://stad.gent/data/ns/Supervision")
  Toilets: String @property(iri: "http://stad.gent/data/ns/Toilets")
  Urinals: String @property(iri: "http://stad.gent/data/ns/Urinals")
  WaterAccessPoints: String @property(iri: "http://stad.gent/data/ns/WaterAccessPoints")
  WebPage: String @property(iri: "http://schema.org/WebPage")
}

input UpdateGeoCoordinatesInput @is(class: "http://schema.org/GeoCoordinates") {
  address: String @property(iri: "http://schema.org/address")
  latitude: String @property(iri: "http://schema.org/latitude")
  longitude: String @property(iri: "http://schema.org/longitude")
}

input UpdatePostalAddressInput @is(class: "http://schema.org/PostalAddress") {
  addressCountry: String @property(iri: "http://schema.org/addressCountry")
  addressLocality: String @property(iri: "http://schema.org/addressLocality")
  addressRegion: String @property(iri: "http://schema.org/addressRegion")
  postalCode: String @property(iri: "http://schema.org/postalCode")
  postOfficeBoxNumber: String @property(iri: "http://schema.org/postOfficeBoxNumber")
  streetAddress: String @property(iri: "http://schema.org/streetAddress")
}

input UpdatePublicToiletInput @is(class: "http://schema.org/PublicToilet") {
  AccessStatus: String @property(iri: "http://stad.gent/data/ns/AccessStatus")
  AdultToilets: String @property(iri: "http://stad.gent/data/ns/AdultToilets")
  buildingsType: String @property(iri: "http://dbpedia.org/ontology/buildingsType")
  ChildrensToilets: String @property(iri: "http://stad.gent/data/ns/ChildrensToilets")
  CleaningCompany: String @property(iri: "http://stad.gent/data/ns/CleaningCompany")
  description: String @property(iri: "http://schema.org/description")
  DiaperChangingTables: String @property(iri: "http://stad.gent/data/ns/DiaperChangingTables")
  identifier: String @property(iri: "http://purl.org/dc/terms/identifier")
  image: String @property(iri: "http://schema.org/image")
  locationType: String @property(iri: "http://stad.gent/data/ns/locationType")
  name: String @property(iri: "http://xmlns.com/foaf/0.1/name")
  Neighbourhood: String @property(iri: "http://dbpedia.org/resource/Neighbourhood")
  openingHours: String @property(iri: "http://schema.org/openingHours")
  OpeninghoursId: String @property(iri: "http://stad.gent/data/ns/OpeninghoursId")
  PotableWaterAccessPoints: String @property(iri: "http://stad.gent/data/ns/PotableWaterAccessPoints")
  Restroom_attendant: String @property(iri: "http://dbpedia.org/resource/Restroom_attendant")
  source: String @property(iri: "http://purl.org/dc/terms/source")
  statusCode: String @property(iri: "http://purl.org/oslo/ns/localgov#statusCode")
  Supervision: String @property(iri: "http://stad.gent/data/ns/Supervision")
  Toilets: String @property(iri: "http://stad.gent/data/ns/Toilets")
  Urinals: String @property(iri: "http://stad.gent/data/ns/Urinals")
  WaterAccessPoints: String @property(iri: "http://stad.gent/data/ns/WaterAccessPoints")
  WebPage: String @property(iri: "http://schema.org/WebPage")
}`;