/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comexample/barcode_scanner/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
