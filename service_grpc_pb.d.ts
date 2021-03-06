// GENERATED CODE -- DO NOT EDIT!

// package: urlshortner
// file: services/urlshortner/service.proto

import * as services_urlshortner_service_pb from "./service_pb";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as grpc from "grpc";

interface IUrlShortnerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateUrl: grpc.MethodDefinition<services_urlshortner_service_pb.UrlShortner, services_urlshortner_service_pb.UrlSHortnerResponse>;
  check: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const UrlShortnerServiceService: IUrlShortnerServiceService;

export class UrlShortnerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generateUrl(argument: services_urlshortner_service_pb.UrlShortner, callback: grpc.requestCallback<services_urlshortner_service_pb.UrlSHortnerResponse>): grpc.ClientUnaryCall;
  generateUrl(argument: services_urlshortner_service_pb.UrlShortner, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_urlshortner_service_pb.UrlSHortnerResponse>): grpc.ClientUnaryCall;
  generateUrl(argument: services_urlshortner_service_pb.UrlShortner, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_urlshortner_service_pb.UrlSHortnerResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}
