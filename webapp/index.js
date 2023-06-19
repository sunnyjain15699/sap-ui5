sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    "use strict";
    new ComponentContainer({
        name: "sap-ui5",
        settings: {
            id:"walkthrough"
        },
        async: true
    }).placeAt("div")


})