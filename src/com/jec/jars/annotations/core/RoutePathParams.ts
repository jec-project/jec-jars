//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import {RootPathVersion} from "../../RootPathVersion";

/**
 * The <code>RoutePathParams</code> interface defines the API you must implement 
 * to create objects passed as parameter of the JARS <code>@RootPath</code>
 * annotation.
 */
export interface RoutePathParams {
  
  /**
   * Specifies the URI path for the associated <code>@RootPath</code>
   * annotation.
   */
  path:string;

  /**
   * Specifies the reference for the associated <code>@RootPath</code>
   * annotation. This parameter is used by the <code>@RootPathRefs</code>
   * annotation to referer to the associated <code>@RootPath</code> annotation.
   */
  ref:string;

  /**
   * Specifies the version for the associated <code>@RootPath</code> annotation.
   */
  version?:RootPathVersion;
  
  /**
   * Specifies the MIME media types of representations all resources can respond
   * to for the specified path.
   */
  consumes?:string;
  
  /**
   * Specifies the MIME media types of representations all resources can produce
   * for the specified path.
   */
  produces?:string;
  
  /**
   * Specifies the cross domain access policy for the specified path.
   */
  crossDomainPolicy?:string;
}
