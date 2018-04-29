/*!
 * JEC JARS Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-jars" {

export function CONNECT(params?: HttpMethodParams): Function;
export function CookieParam(target: any, propertyKey: string | symbol, parameterIndex: number): void;
export interface HttpMethodParams {
    route?: string;
    consumes?: string;
    produces?: string;
    crossDomainPolicy?: string;
}
export interface RoutePathParams {
    path: string;
    ref: string;
    version?: RootPathVersion;
    consumes?: string;
    produces?: string;
    crossDomainPolicy?: string;
}
export function DELETE(params?: HttpMethodParams): Function;
export function Destroy(): Function;
export function Exit(target: Object, propertyKey: string | symbol, parameterIndex: number): void;
export function GET(params?: HttpMethodParams): Function;
export function HEAD(params?: HttpMethodParams): Function;
export function Init(): Function;
export function OPTIONS(params?: HttpMethodParams): Function;
export function PathParam(target: any, propertyKey: string | symbol, parameterIndex: number): void;
export function POST(params?: HttpMethodParams): Function;
export function PUT(params?: HttpMethodParams): Function;
export function QueryParam(target: any, propertyKey: string | symbol, parameterIndex: number): void;
export function RequestBody(target: any, propertyKey: string | symbol, parameterIndex: number): void;
export function RequestParam(target: any, propertyKey: string | symbol, parameterIndex: number): void;
export function ResourcePath(path: string): Function;
export function RootPath(params: RoutePathParams): Function;
export function RootPathRefs(pathRefs: string[]): Function;
export function TRACE(params?: HttpMethodParams): Function;
export class JarsError extends Error {
    constructor(message: string);
}
export class JarsConnectorRefs {
    static readonly COOKIE_PARAM_CONNECTOR_REF: string;
    static readonly CONNECT_CONNECTOR_REF: string;
    static readonly DELETE_CONNECTOR_REF: string;
    static readonly DESTROY_CONNECTOR_REF: string;
    static readonly EXIT_CONNECTOR_REF: string;
    static readonly GET_CONNECTOR_REF: string;
    static readonly HEAD_CONNECTOR_REF: string;
    static readonly INIT_CONNECTOR_REF: string;
    static readonly OPTIONS_CONNECTOR_REF: string;
    static readonly PATH_PARAM_CONNECTOR_REF: string;
    static readonly POST_CONNECTOR_REF: string;
    static readonly PUT_CONNECTOR_REF: string;
    static readonly QUERY_PARAM_CONNECTOR_REF: string;
    static readonly REQUEST_BODY_CONNECTOR_REF: string;
    static readonly REQUEST_PARAM_CONNECTOR_REF: string;
    static readonly RESOURCE_PATH_CONNECTOR_REF: string;
    static readonly ROOT_PATH_CONNECTOR_REF: string;
    static readonly ROOT_PATH_REFS_CONNECTOR_REF: string;
    static readonly TRACE_CONNECTOR_REF: string;
}
export interface RootPathVersion {
    major: number;
    minor: number;
    prefix: string;
}
}