(this["webpackJsonpreact-three-test"]=this["webpackJsonpreact-three-test"]||[]).push([[0],{26:function(e,t,r){e.exports=r(32)},30:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var n=r(23),a=r.n(n),o=r(0),c=r.n(o),i=r(6),s=(r(30),r(2)),u=function(){return Math.round(1e7*Math.random())};var l=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("boxBufferGeometry",{args:[1,1,1]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var m=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("circleBufferGeometry",{args:[1,32]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var f=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("coneBufferGeometry",{args:[1,1,32]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var b=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("cylinderBufferGeometry",{args:[1,1,1,32]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var h=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("dodecahedronBufferGeometry",{args:[1]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var E=function(e){var t=Object(o.useRef)();Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01}));var r=new s.Shape,n=-2.5,a=-5;return r.moveTo(0,-2.5),r.bezierCurveTo(0,-2.5,-.5,a,n,a),r.bezierCurveTo(-5.5,a,-5.5,-1.5,-5.5,-1.5),r.bezierCurveTo(-5.5,.5,-4,2.7,0,4.5),r.bezierCurveTo(3.5,2.7,5.5,-.5,5.5,-1.5),r.bezierCurveTo(5.5,-1.5,5.5,a,2.5,a),r.bezierCurveTo(1,a,0,-2.5,0,-2.5),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.15,.15,.15],geometry:new s.ExtrudeBufferGeometry(r,{steps:2,depth:2,bevelEnabled:!0,bevelThickness:1,bevelSize:1,bevelSegments:2})}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var v=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("icosahedronBufferGeometry",{args:[1]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var g=function(e){var t=Object(o.useRef)();Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01}));for(var r=[],n=0;n<10;++n)r.push(new s.Vector2(3*Math.sin(.2*n)+3,.8*(n-5)));return c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.15,.15,.15],geometry:new s.LatheBufferGeometry(r)}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var j=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("octahedronBufferGeometry",{args:[1]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var O=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.15,.15,.15],geometry:new s.ParametricBufferGeometry((function(e,t,r){var n,a;t*=Math.PI,e*=2*Math.PI,(t*=2)<Math.PI?(n=3*Math.cos(t)*(1+Math.sin(t))+2*(1-Math.cos(t)/2)*Math.cos(t)*Math.cos(e),a=-8*Math.sin(t)-2*(1-Math.cos(t)/2)*Math.sin(t)*Math.cos(e)):(n=3*Math.cos(t)*(1+Math.sin(t))+2*(1-Math.cos(t)/2)*Math.cos(e+Math.PI),a=-8*Math.sin(t));var o=-2*(1-Math.cos(t)/2)*Math.sin(e);r.set(n,o,a).multiplyScalar(.75)}),25,25)}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var y=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("planeBufferGeometry",{args:[1.5,1.5,2,2]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var d=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.15,.15,.15],geometry:new s.PolyhedronBufferGeometry([-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1,1,-1,1,1],[2,1,0,0,3,2,0,4,7,7,3,0,0,1,5,5,4,0,1,2,6,6,5,1,2,3,7,7,6,2,4,5,6,6,7,4],7,2)}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var M=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("ringBufferGeometry",{args:[.5,1,18]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var p=function(e){var t=Object(o.useRef)();Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01}));var r=new s.Shape;return r.moveTo(5,5),r.bezierCurveTo(5,5,4,0,0,0),r.bezierCurveTo(-6,0,-6,7,-6,7),r.bezierCurveTo(-6,11,-3,15.4,5,19),r.bezierCurveTo(12,15.4,16,11,16,7),r.bezierCurveTo(16,7,16,0,10,0),r.bezierCurveTo(7,0,5,5,5,5),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.1,.1,.1],geometry:new s.ShapeBufferGeometry(r)}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var S=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("sphereBufferGeometry",{args:[1,18]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var P=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[1,1,1]}),c.a.createElement("tetrahedronBufferGeometry",{args:[1]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var x=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.7,.7,.7]}),c.a.createElement("torusBufferGeometry",{args:[1,.5,10,10]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var B=function(e){var t=Object(o.useRef)();return Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.6,.6,.6]}),c.a.createElement("torusKnotBufferGeometry",{args:[1,.5,20,40,2,3]}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))},G=r(1),R=r(5),D=r(3),w=r(4);var T=function(e){var t=Object(o.useRef)();Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01}));var r=new(function(e){Object(D.a)(r,e);var t=Object(w.a)(r);function r(e){var n;return Object(G.a)(this,r),(n=t.call(this)).scale=e,n}return Object(R.a)(r,[{key:"getPoint",value:function(e){var t=3*e-1.5,r=Math.sin(2*Math.PI*e);return new s.Vector3(t,r,0).multiplyScalar(this.scale)}}]),r}(s.Curve))(4);return c.a.createElement("mesh",Object.assign({},e,{ref:t,scale:[.2,.2,.2],geometry:new s.TubeBufferGeometry(r,20,1,8,!1)}),c.a.createElement("meshPhongMaterial",{color:u(),side:s.DoubleSide}))};var z=function(e){var t=Object(o.useRef)();Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01}));var r=new s.EdgesGeometry(new s.BoxBufferGeometry(2,2,2),30);return c.a.createElement("lineSegments",Object.assign({},e,{ref:t,scale:[.7,.7,.7],geometry:r}),c.a.createElement("lineBasicMaterial",{color:"#000000"}))};var C=function(e){var t=Object(o.useRef)();Object(i.b)((function(){return t.current.rotation.x=t.current.rotation.y+=.01}));var r=new s.WireframeGeometry(new s.BoxBufferGeometry(2,2,2));return c.a.createElement("lineSegments",Object.assign({},e,{ref:t,scale:[.7,.7,.7],geometry:r}),c.a.createElement("lineBasicMaterial",{color:"#000000"}))};a.a.render(c.a.createElement(i.a,null,c.a.createElement("ambientLight",null),c.a.createElement("pointLight",{position:[-1,2,4]}),c.a.createElement("pointLight",{position:[1,-2,-4]}),c.a.createElement(l,{position:[-6,5,-4]}),c.a.createElement(m,{position:[-3,5,-4]}),c.a.createElement(f,{position:[0,5,-4]}),c.a.createElement(b,{position:[3,5,-4]}),c.a.createElement(h,{position:[6,5,-4]}),c.a.createElement(E,{position:[-6,2.5,-4]}),c.a.createElement(v,{position:[-3,2.5,-4]}),c.a.createElement(g,{position:[0,2.5,-4]}),c.a.createElement(j,{position:[3,2.5,-4]}),c.a.createElement(O,{position:[6,2.5,-4]}),c.a.createElement(y,{position:[-6,0,-4]}),c.a.createElement(d,{position:[-3,0,-4]}),c.a.createElement(M,{position:[0,0,-4]}),c.a.createElement(p,{position:[3,0,-4]}),c.a.createElement(S,{position:[6,0,-4]}),c.a.createElement(P,{position:[-6,-2.5,-4]}),c.a.createElement(x,{position:[0,-2.5,-4]}),c.a.createElement(B,{position:[3,-2.5,-4]}),c.a.createElement(T,{position:[6,-2.5,-4]}),c.a.createElement(z,{position:[-2,-5,-4]}),c.a.createElement(C,{position:[2,-5,-4]})),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.44e1af1a.chunk.js.map