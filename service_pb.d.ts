// package: urlshortner
// file: services/urlshortner/service.proto

import * as jspb from "google-protobuf";
import * as oojob_github_com_protobuf_health_pb from "../../oojob/github.com/protobuf/health_pb";

export class UrlShortner extends jspb.Message {
  getLongUrl(): string;
  setLongUrl(value: string): void;

  getShortUrl(): string;
  setShortUrl(value: string): void;

  getViews(): number;
  setViews(value: number): void;

  getIsMobile(): boolean;
  setIsMobile(value: boolean): void;

  getOperatingSystem(): string;
  setOperatingSystem(value: string): void;

  getIpAddress(): string;
  setIpAddress(value: string): void;

  getUserAgent(): string;
  setUserAgent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlShortner.AsObject;
  static toObject(includeInstance: boolean, msg: UrlShortner): UrlShortner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlShortner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlShortner;
  static deserializeBinaryFromReader(message: UrlShortner, reader: jspb.BinaryReader): UrlShortner;
}

export namespace UrlShortner {
  export type AsObject = {
    longUrl: string,
    shortUrl: string,
    views: number,
    isMobile: boolean,
    operatingSystem: string,
    ipAddress: string,
    userAgent: string,
  }
}

export class UrlSHortnerResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlSHortnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UrlSHortnerResponse): UrlSHortnerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlSHortnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlSHortnerResponse;
  static deserializeBinaryFromReader(message: UrlSHortnerResponse, reader: jspb.BinaryReader): UrlSHortnerResponse;
}

export namespace UrlSHortnerResponse {
  export type AsObject = {
    status: boolean,
  }
}

