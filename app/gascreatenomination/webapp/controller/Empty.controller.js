sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("gascreatenomination.controller.Empty", {
        onInit : function (){},
        onBack : function(){
            console.log("clicked");
            // var oAppCon = this.getView().getParent().getParent();
            // oAppCon.to("View1");
             var oRouter = this.getOwnerComponent().getRouter()

            oRouter.navTo("TgView1");

        }


    });
    
});