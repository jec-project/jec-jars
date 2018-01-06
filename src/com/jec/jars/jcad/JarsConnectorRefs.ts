//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

/**
 * The <code>JarsConnectorRefs</code> class provides static constants that
 * define the references of the JARS decorator connectors.
 */
export class JarsConnectorRefs {
  
  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@CookieParam</code> decorator.
   */
  public static readonly COOKIE_PARAM_CONNECTOR_REF:string =
                                         "com.jec.jars.annotations.CookieParam";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@CONNECT</code> decorator.
   */
  public static readonly CONNECT_CONNECTOR_REF:string =
                                             "com.jec.jars.annotations.CONNECT";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@DELETE</code> decorator.
   */
  public static readonly DELETE_CONNECTOR_REF:string =
                                              "com.jec.jars.annotations.DELETE";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@Destroy</code> decorator.
   */
  public static readonly DESTROY_CONNECTOR_REF:string =
                                             "com.jec.jars.annotations.Destroy";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@Exit</code> decorator.
   */
  public static readonly EXIT_CONNECTOR_REF:string =
                                                "com.jec.jars.annotations.Exit";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@GET</code> decorator.
   */
  public static readonly GET_CONNECTOR_REF:string =
                                                 "com.jec.jars.annotations.GET";
  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@HEAD</code> decorator.
   */
  public static readonly HEAD_CONNECTOR_REF:string =
                                                "com.jec.jars.annotations.HEAD";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@Init</code> decorator.
   */
  public static readonly INIT_CONNECTOR_REF:string =
                                                "com.jec.jars.annotations.Init";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@OPTIONS</code> decorator.
   */
  public static readonly OPTIONS_CONNECTOR_REF:string =
                                             "com.jec.jars.annotations.OPTIONS";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@PathParam</code> decorator.
   */
  public static readonly PATH_PARAM_CONNECTOR_REF:string =
                                           "com.jec.jars.annotations.PathParam";
  
  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@POST</code> decorator.
   */
  public static readonly POST_CONNECTOR_REF:string =
                                                "com.jec.jars.annotations.POST";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@PUT</code> decorator.
   */
  public static readonly PUT_CONNECTOR_REF:string =
                                                 "com.jec.jars.annotations.PUT";
  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@QueryParam</code> decorator.
   */
  public static readonly QUERY_PARAM_CONNECTOR_REF:string =
                                          "com.jec.jars.annotations.QueryParam";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@RequestBody</code> decorator.
   */
  public static readonly REQUEST_BODY_CONNECTOR_REF:string =
                                         "com.jec.jars.annotations.RequestBody";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@RequestParam</code> decorator.
   */
  public static readonly REQUEST_PARAM_CONNECTOR_REF:string =
                                        "com.jec.jars.annotations.RequestParam";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@ResourcePath</code> decorator.
   */
  public static readonly RESOURCE_PATH_CONNECTOR_REF:string =
                                        "com.jec.jars.annotations.ResourcePath";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@RootPath</code> decorator.
   */
  public static readonly ROOT_PATH_CONNECTOR_REF:string =
                                            "com.jec.jars.annotations.RootPath";

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@RootPathRefs</code> decorator.
   */
  public static readonly ROOT_PATH_REFS_CONNECTOR_REF:string =
                                        "com.jec.jars.annotations.RootPathRefs";
  
  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@TRACE</code> decorator.
   */
  public static readonly TRACE_CONNECTOR_REF:string =
                                               "com.jec.jars.annotations.TRACE";
                                     
}
