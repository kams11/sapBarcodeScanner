sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("com.example.barcodescanner.controller.Main", {
             onInit:function(){
      this.scanningStarted=false;
    },
    startScanning:function(){

      this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(true);
      if(this.scanningStarted == false){
        this.scanningStarted = true;
      ScanditSDK.configure("AUlizzRbFxQDBTOXSA8Tv0ApoDD8QfwzPkFzXTR+3/V7fhX+00QyNsxsia3zLYfB+3SHf+pnPmSOePUONWdL3KpOZhS9S8qa4Gl5SOIwyB+7CguHwQgxPhckZ/oUEUQUoI4t0NTeDAiMqod5K8edB8Q1oH4eB5mzAWIdJYvkFClKbKc/qX15fQ/aKU3xE28tmICswvrKSHHr/SkjJwSU/8R20YPSzUVhS9jTJB+xViLshVsshPoz2Xbdkq+aJGVKMyWdwCrrNHbWyXVqdBi00PDu28UXcTZkN7mw9elk7rq7Ll//Cc6yGuZnfRJ4AGIE+XygV356t1eFkZASNUaSq8pVJIY+Ej34/tQU1AiI6ENBdK/60qd5+6wD4vLwdztx4Xcbtn7R5hhPoQOd9M0+0DNS7kkoN900l7mrF3WWjMtL9DH+3hjOF8iG7am0vGjiIz9Kxw+OSEZVxmw0AbjcbpZt48hT7yvgJIUVbqUsXmV2wd7XPq8Zd/wkdaK2zgSKCfZzr+N3Lt+0EkUAye+kDQ3MS2VmrSrgJXpUc+c0xFlJJM849xYKTijGgwVyXWMuk/nW9gPH7RHVJzYu9P+VIEZNewsKTrw3+2x0Z6Gya/jCzIAuHuEF1V/fQDj2o13LycmOm9K5+lOCjnJ4nPO/8ouKRl8qvPsD8wZzkvNfq8EaMubjq4IbLaaY6wJnMDt+LprZ09QOEU1oJE68HUX4m78SPddYtaAJyfAnexiLX426zdzvT2SM25j2UJEuksK6RGEtwT3Ps7C2pKMQZlrNN3njyp2tka8IR5nfEbC6rA==", {
        engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
      })
        .then(() => {
          return ScanditSDK.BarcodePicker.create(document.getElementById(this.getView().createId("scandit-barcode-picker")), {
            scanSettings: new ScanditSDK.ScanSettings({ enabledSymbologies: ["ean8", "ean13", "upca", "upce"] }),
          });
        })
        .then((barcodePicker) => {
          barcodePicker.on("scan", (scanResult) => {
            MessageBox.alert(`Scanned Value ${scanResult.barcodes[0].data}`);
          });
        });
      }
    },
    stopScanning: function(){ 
    this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(false);
    MessageBox.alert("Barcode Scanning stopped");
    }
  });
});