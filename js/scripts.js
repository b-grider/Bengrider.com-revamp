// Cesium.CesiumWidget is similar to Cesium.Viewer, but
// is trimmed down.  It is just a widget for the 3D globe;
// it does not include the animation, imagery selection,
// and other widgets, nor does it depend on the third-party
// Knockout library.

/*var widget = new Cesium.CesiumWidget('cesiumContainer');*/
var viewer = new Cesium.Viewer('cesiumContainer');
var scene = viewer.scene;
var primitives = scene.primitives;

function addBillboard() {
    Sandcastle.declare(addBillboard);

    var billboards = scene.primitives.add(new Cesium.BillboardCollection());
    billboards.add({
        image : '../images/Cesium_Logo_overlay.png',
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883)
    });
}

/*
 var billboards = scene.primitives.add(new Cesium.BillboardCollection());
    billboards.add({
        image : "../images/Cesium_Logo_overlay.png",
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883)
    });*/