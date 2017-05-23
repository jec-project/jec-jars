"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JarsConnectorRefs_1 = require("../jcad/JarsConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function CookieParam(target, propertyKey, parameterIndex) {
    var ctx = CTXM.getContext(JarsConnectorRefs_1.JarsConnectorRefs.COOKIE_PARAM_CONNECTOR_REF);
    DCM.getDecorator(JarsConnectorRefs_1.JarsConnectorRefs.COOKIE_PARAM_CONNECTOR_REF, ctx)
        .decorate(target, propertyKey, parameterIndex);
}
exports.CookieParam = CookieParam;
