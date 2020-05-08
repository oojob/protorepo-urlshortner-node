// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 27 2020
//
// UrlShortner entity related messages.
// This file is resposible for all operation related to UrlShortner entity.
//
// @authors nirajgeorgian@oojob.io (Niraj Kishore)
//
// Copyright (c) 2020 - oojob
//
'use strict';
var grpc = require('grpc');
var services_urlshortner_service_pb = require('./service_pb.js');
var oojob_protobuf_health_pb = require('@oojob/oojob-protobuf/health_pb.js');

function serialize_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_urlshortner_UrlSHortnerResponse(arg) {
  if (!(arg instanceof services_urlshortner_service_pb.UrlSHortnerResponse)) {
    throw new Error('Expected argument of type urlshortner.UrlSHortnerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_urlshortner_UrlSHortnerResponse(buffer_arg) {
  return services_urlshortner_service_pb.UrlSHortnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_urlshortner_UrlShortner(arg) {
  if (!(arg instanceof services_urlshortner_service_pb.UrlShortner)) {
    throw new Error('Expected argument of type urlshortner.UrlShortner');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_urlshortner_UrlShortner(buffer_arg) {
  return services_urlshortner_service_pb.UrlShortner.deserializeBinary(new Uint8Array(buffer_arg));
}


var UrlShortnerServiceService = exports.UrlShortnerServiceService = {
  generateUrl: {
    path: '/urlshortner.UrlShortnerService/GenerateUrl',
    requestStream: false,
    responseStream: false,
    requestType: services_urlshortner_service_pb.UrlShortner,
    responseType: services_urlshortner_service_pb.UrlSHortnerResponse,
    requestSerialize: serialize_urlshortner_UrlShortner,
    requestDeserialize: deserialize_urlshortner_UrlShortner,
    responseSerialize: serialize_urlshortner_UrlSHortnerResponse,
    responseDeserialize: deserialize_urlshortner_UrlSHortnerResponse,
  },
  check: {
    path: '/urlshortner.UrlShortnerService/Check',
    requestStream: false,
    responseStream: false,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_oojob_protobuf_HealthCheckResponse,
  },
  watch: {
    path: '/urlshortner.UrlShortnerService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_oojob_protobuf_HealthCheckResponse,
  },
};

exports.UrlShortnerServiceClient = grpc.makeGenericClientConstructor(UrlShortnerServiceService);
