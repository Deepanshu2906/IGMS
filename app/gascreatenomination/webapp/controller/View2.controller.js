sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gascreatenomination.controller.View2", {
            onInit: function () {
                 this.Router = this.getOwnerComponent().getRouter();
                 // we pass forcefully pass this controller object to getView
                 this.Router.getRoute("second").attachPatternMatched(this.herculis, this);
            }  ,
            herculis : function (oEvent){
                //  console.log("clicked new fruit");
                //  debugger;
                var contractId = oEvent.getParameter("arguments").contractId;
                
                var sPath =  "/Contracts/"+contractId
                // console.log(sPath,contractId);
                this.getView().bindElement(sPath);
            },
            onBack : function(){
                // var oAppCon = this.getView().getParent().getParent();
                // oAppCon.to("View1");
                // we provide here route name it will automatically render master and detail page
                this.Router.navTo("first")
            }
        });
    });