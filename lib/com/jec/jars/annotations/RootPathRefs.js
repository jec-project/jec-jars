"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JarsConnectorRefs_1 = require("../jcad/JarsConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function RootPathRefs(pathRefs) {
    return function (target) {
        var ctx = CTXM.getContext(JarsConnectorRefs_1.JarsConnectorRefs.ROOT_PATH_REFS_CONNECTOR_REF);
        return DCM.getDecorator(JarsConnectorRefs_1.JarsConnectorRefs.ROOT_PATH_REFS_CONNECTOR_REF, ctx)
            .decorate(target, pathRefs);
    };
}
exports.RootPathRefs = RootPathRefs;
