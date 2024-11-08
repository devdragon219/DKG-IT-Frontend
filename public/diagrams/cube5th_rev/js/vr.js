if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

let V_5TH_ANIMATION = true;
let Upper_Lower_Wheel = true;

let object, position, globe;
let camera, scene, renderer, light;

let test = 1; // normal speed
let previewtime = 1;
// let test = 0.3; // fast speed
let prevElemValues = {};
let oldValues = {};

let camDeltaY, camDeltaZ;

let combinedDescription = [];

checkWindowWidth();

let themeDark = false;

let sectionModels = [];
let clicksEnabled = false;
let hoversEnabled = true;
let interactions = [];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let INTERSECTED;

let particleSystem = new THREE.Group();
let group = new THREE.Group();
let clock = new THREE.Clock();

let cubeAutoRotationAllowed = true;

let oneTime = false;

let morphedVertices = [];
let animationTimeMS = [];

let cubeGroup = new THREE.Group();

let controls;

let plus, planePBG2, planePBG3, planeShutter, question;

let down = false;
let colors = [];
let morphAnimationDone = true;
let lastMophAnimUpdateMS = Date.now();

let deltaY = -15;

let bar = 0;
let barwidth = 250;

let smokeParticles = [];
let mesh, geometry, material, cube, bg;

let isDraggingEnable = false;
let isDragging = false;
let startMousePosition;
let endMousePosition;

let start_time = Date.now();

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let targetGeom, startGeometry;

let DarkWebMonitoring, ThreatIntelligence, DataLeakageMonitoring, BrandMonitoring, AttackSurfaceMonitoring;
let sphere;

let cylinderType = false;

let cylinder1 = new THREE.Group();
let cylinder2 = new THREE.Group();
let cylinder3 = new THREE.Group();

let spotLight1, spotLight2, spotLight3;

const hero = document.querySelector('.hero');

let structuredData = {};
let textFont;
let textures=[];
const fontLoader = new THREE.FontLoader();
fontLoader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
    textFont = font;
} );
loadData();

THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {

    bar = Math.floor( barwidth * loaded / total );
    $("#bar").css("width", ""+bar+"px");
    if (loaded/total == 1) {
        $('#progressbar').fadeOut('300');
        $( "#progress" ).fadeOut('300');
        $(".loader2").fadeOut("slow");

    }
};
let onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        //let percentComplete = xhr.loaded / xhr.total * 100;
        //console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
};
let onError = function ( xhr ) { };
objLoader = new THREE.OBJLoader(); 

function loadData(){

const apiUrl = "/api/diagrams";
const params = new URLSearchParams(window.location.search);
const KEY = "slug";


window.onmessage = (e) => {
    if (e.data?.name === "parentMessage") {
      if (e.data.data?.originalData) {
        structuredData = e.data.data.originalData;
        init();
        animate();
        letsFly();
      }
    }
  };

  if (params.has(KEY)) {
    const key = params.get(KEY);
    let url = `${apiUrl}/${key}`;
    
    if (key.includes("demo_example")) {
      const type = key.split("?")[1];
  
      url = `/diagrams/${type}/data.json`;
    }
    if (key.includes("lyme_overview_cube")) {
        V_5TH_ANIMATION = false;
    }
    if (key.includes("bi")) {
        Upper_Lower_Wheel = false;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data?.originalData) {
          structuredData = data.originalData;
          init();
          animate();
          letsFly();
        }
        if (data?.source?.originalData) {
          structuredData = data.source.originalData
          init();
          animate();
          letsFly();
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }
 
}


function init() {
    let canvas1 = document.getElementById( 'canvas1' );

    camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 220;

    //

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x000000 );

    let light = new THREE.AmbientLight( 0xffffff, 0.4 ); // soft white light
    scene.add( light );

    let directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	directionalLight.position.set( -1, 2, 2 );
	// scene.add( directionalLight );

    let textureBG= new THREE.TextureLoader().load( 'tex/bg-plane.png' );
    textureBG.minFilter = THREE.LinearFilter;
    let geometryBG = new THREE.PlaneGeometry( 600, 1800, 32 );
    let materialBG = new THREE.MeshPhongMaterial( {map: textureBG, color: 0x1679A9, side: THREE.DoubleSide, transparent:true, opacity: 1} );
    let planeBG = new THREE.Mesh( geometryBG, materialBG );
    planeBG.rotation.x = -Math.PI/2;
    planeBG.position.z = -3500;
    planeBG.receiveShadow = true;
    planeBG.position.y = -50;
    // scene.add( planeBG );

    pointLight = new THREE.PointLight( 0x74BAFA, 5, 200 );
    pointLight.position.set( -100, 30, -3200 );
    scene.add( pointLight );

    pointLight = new THREE.PointLight( 0x74BAFA, 5, 200 );
    pointLight.position.set( 100, 30, -2800 );
    scene.add( pointLight );

    const geometryPBG = new THREE.PlaneGeometry( 160, 240 );
    const materialPBG = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const planePBG = new THREE.Mesh( geometryPBG, materialPBG );
    planePBG.position.set(-250,40,-3200);
    // scene.add( planePBG );

    let PBGtex = new THREE.TextureLoader().load( 'tex/circle2.jpg' );
    let PBGtex2 = new THREE.TextureLoader().load( 'tex/circle.jpg' );

    const geometryPBG2 = new THREE.PlaneGeometry( 1400, 1400 );
    const materialPBG2 = new THREE.MeshLambertMaterial( {map: PBGtex, alphaMap : PBGtex, color: 0xffffff, blending:1, transparent: true, side: THREE.DoubleSide} );
    planePBG2 = new THREE.Mesh( geometryPBG2, materialPBG2 );
    planePBG2.rotation.x = Math.PI/2;
    planePBG2.position.set(0,-90,-3200);
    planePBG2.visible = Upper_Lower_Wheel;
    scene.add(planePBG2);

    const geometryPBG3 = new THREE.PlaneGeometry( 460, 460 );
    const materialPBG3 = new THREE.MeshLambertMaterial( {map: PBGtex2, alphaMap : PBGtex2, color: 0xffffff, blending:1, transparent: true, side: THREE.DoubleSide} );
    planePBG3 = new THREE.Mesh( geometryPBG3, materialPBG3 );
    planePBG3.rotation.x = Math.PI/2;
    planePBG3.position.set(0,200,-3200);
    planePBG3.visible = Upper_Lower_Wheel;
    scene.add(planePBG3);

    const geometryShutter = new THREE.PlaneGeometry( 1400, 1400 );
    const materialShutter = new THREE.MeshLambertMaterial( {color: 0x000000, blending:1, transparent: true, opacity: 0, side: THREE.DoubleSide} );
    planeShutter = new THREE.Mesh( geometryShutter, materialShutter );
    // planeShutter.rotation.x = Math.PI/2;
    planeShutter.position.set(0,0,-3000);
    scene.add( planeShutter );


    let cubeScale = 0.8;
    scene.add(cubeGroup);
    cubeGroup.position.set(0, 50, -3200);
    cubeGroup.scale.set(cubeScale,cubeScale,cubeScale);

    let totalPlanes = 16;
    let planeCount = Math.sqrt(totalPlanes);
    let planeWidth = 30;
    let planeHeight = 30;
    let paddingX = 5;
    let paddingY = 5;

    if (!Upper_Lower_Wheel) {
        planeWidth = 43;
        planeHeight = 43;
    }
    let totalWidth = planeCount * (planeWidth+paddingX);
    let totalHeight = planeCount * (planeHeight+paddingY);
    const baseElemGeometry = new THREE.PlaneGeometry( planeWidth, planeHeight, 1 );

    let fontSize = 50;
    let baseY = 220;
    let bitmap = document.createElement('canvas');
    let maxWidth = bitmap.width
    let g = bitmap.getContext('2d');
    bitmap.width = 512;
    bitmap.height = 512;
    let width = bitmap.width;
    let x = 40;

    let img = new Image();
    img.src = "tex/periodicbg.png";
    img.onload = function () {

        let cubeSides = [];

        let cubeFrontSide = new THREE.Group();
        cubeFrontSide.rotation.x = 0;
        cubeFrontSide.rotation.y = 0;
        cubeFrontSide.rotation.z = 0;
        cubeFrontSide.position.x = 0;
        cubeFrontSide.position.y = 0;
        cubeFrontSide.position.z = totalWidth/2;
        cubeGroup.add(cubeFrontSide);
        cubeSides.push(cubeFrontSide);

        let cubeRightSide = new THREE.Group();
        cubeRightSide.rotation.x = 0;
        cubeRightSide.rotation.y = Math.PI/2;
        cubeRightSide.rotation.z = 0;
        cubeRightSide.position.x = totalWidth/2;
        cubeRightSide.position.y = 0;
        cubeRightSide.position.z = 0;
        cubeGroup.add(cubeRightSide);
        cubeSides.push(cubeRightSide);

        let cubeBackSide = new THREE.Group();
        cubeBackSide.rotation.x = 0;
        cubeBackSide.rotation.y = Math.PI;
        cubeBackSide.rotation.z = 0;
        cubeBackSide.position.x = 0;
        cubeBackSide.position.y = 0;
        cubeBackSide.position.z = -totalWidth/2;
        cubeGroup.add(cubeBackSide);
        cubeSides.push(cubeBackSide);

        let cubeLeftSide = new THREE.Group();
        cubeLeftSide.rotation.x = 0;
        cubeLeftSide.rotation.y = -Math.PI/2;
        cubeLeftSide.rotation.z = 0;
        cubeLeftSide.position.x = -totalWidth/2;
        cubeLeftSide.position.y = 0;
        cubeLeftSide.position.z = 0;
        cubeGroup.add(cubeLeftSide);
        cubeSides.push(cubeLeftSide);

        let cubeTopSide = new THREE.Group();
        cubeTopSide.rotation.x = -Math.PI / 2;
        cubeTopSide.rotation.y = 0;
        cubeTopSide.rotation.z = 0;
        cubeTopSide.position.x = 0;
        cubeTopSide.position.y = totalWidth/2;
        cubeTopSide.position.z = 0;
        cubeGroup.add(cubeTopSide);
        cubeSides.push(cubeTopSide);

        let cubeBottomSide = new THREE.Group();
        cubeBottomSide.rotation.x = Math.PI/ 2;
        cubeBottomSide.rotation.y = 0;
        cubeBottomSide.rotation.z = 0;
        cubeBottomSide.position.x = 0;
        cubeBottomSide.position.y = -totalWidth/2;
        cubeBottomSide.position.z = 0;
        cubeGroup.add(cubeBottomSide);
        cubeSides.push(cubeBottomSide);

        let statusMap = new Map();

        // Assuming structuredData is already defined and contains quadrants data
        let sideButtonsContainer = document.getElementById("side-buttons-container");
        if (Upper_Lower_Wheel) {
            document.querySelector('.side-buttons').style.top = '25vh';
            document.querySelector('#menu-buttons').style.top = '25vh';
        } else {
            document.querySelector('.side-buttons').style.top = '31vh';
            document.querySelector('#menu-buttons').style.top = '31vh';
        }
        for (let quadrantIdx = 0; quadrantIdx < structuredData.quadrants.length; quadrantIdx++) {
            let quadrant = structuredData.quadrants[quadrantIdx];

            // Only add the side button if quadrant.title is not empty
            if (quadrant.title) {
                // Create the side button element
                let sideButton = document.createElement('div');
                sideButton.className = 'side-button';
                sideButton.id = 'side-button-' + quadrantIdx;

                // Create the span element and set its content
                let spanElement = document.createElement('span');
                spanElement.className = 'special';
                spanElement.innerHTML = quadrant.title;

                // Append the span to the side button
                sideButton.appendChild(spanElement);

                // Append the side button to the container
                sideButtonsContainer.appendChild(sideButton);

                // Proceed with drawing elements
                for (let childIdx = 0; childIdx < Math.min(quadrant.children.length, 16); childIdx++) {
                    let child = quadrant.children[childIdx];

                    if (!statusMap.has(child.status))
                        statusMap.set(child.status, 0);
                    statusMap.set(child.status, statusMap.get(child.status) + 1);

                    drawElem(
                        quadrantIdx,
                        returnPeriodicName(child.name),
                        createCanvasTexture(child.name.trim()),
                        childIdx % 4,
                        Math.trunc(childIdx / 4),
                        cubeSides[quadrantIdx],
                        child.name.trim(),
                        quadrant.title,
                        child
                    );
                }
            }
        }

        // setup right side menu links
        let menuParent = document.getElementById("menu-buttons");
        structuredData.menu.forEach(menuItem => {
            let element = document.createElement("div");
            element.classList.add("side-button");
            element.onclick = () => {
                window.open(menuItem.href, '_blank').focus();
            };
            element.innerHTML = menuItem.title;
            menuParent.appendChild(element);
        });
    }

    var createCanvasTexture = function (text) {
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 512;
        ctx.save();
        ctx.clearRect(0, 0, bitmap.width, bitmap.height);
        ctx.drawImage(img, 0, 0);
        ctx.font = fontSize+'px MTS Sans';
        ctx.textAlign = "left";
        ctx.fillStyle = 'white';
        let lines = fragmentText(text, width - parseInt(fontSize+'px',0), ctx);
        lines.forEach(function(line, i) {
            ctx.fillText(line, x, baseY + (i + 1) * parseInt(fontSize+'px',0));
        });
        ctx.restore();
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    };

    function drawElem(i, periodicName, tex, line, row, cubeSide, name, quadrantName, object){

        let elem = new THREE.Group();

        let textMat = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, side: THREE.DoubleSide});

        let textGeom = new THREE.TextGeometry( periodicName, {
            font: textFont,
            size: 6,
            height: 1,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 4
        } );

        let textPeriodicMesh = new THREE.Mesh(textGeom, textMat);
        textPeriodicMesh.position.set(-12,5, -0.5);
        elem.add(textPeriodicMesh);

        let baseElemMaterial = new THREE.MeshBasicMaterial( {map: tex, color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending} );

        let planeBG = new THREE.Mesh(baseElemGeometry, baseElemMaterial);

        for (let i = 1; i < combinedDescription.length; i++) {
            if (name.toLowerCase() == combinedDescription[i].name.toLowerCase()){
                planeBG.description = combinedDescription[i].description;
                planeBG.material.color.r = 0;
            } else {
                planeBG.material.color.g = 0;
            }
        }

        planeBG.name = name;
        planeBG.quadrant = quadrantName;
        planeBG.description = object.description;
        planeBG.url = object.url;
        planeBG.status = object.status;
        elem.add(planeBG);
        elem.position.x = (planeWidth+paddingX) * line - totalWidth/2 +(planeWidth+paddingX)/2;
        elem.position.y = -(planeHeight + paddingY) * row + totalHeight / 2 - (planeHeight + paddingY) / 2;
        elem.position.z = 0;
        cubeSide.add(elem);
    }

    function fragmentText(text, maxWidth, g) {
        var words = text.split(' '),
            lines = [],
            line = "";
        if (g.measureText(text).width < maxWidth) {
            return [text];
        }
        while (words.length > 0) {
            while (g.measureText(words[0]).width >= maxWidth) {
                var tmp = words[0];
                words[0] = tmp.slice(0, -1);
                if (words.length > 1) {
                    words[1] = tmp.slice(-1) + words[1];
                } else {
                    words.push(tmp.slice(-1));
                }
            }
            if (g.measureText(line + words[0]).width < maxWidth) {
                line += words.shift() + " ";
            } else {
                lines.push(line);
                line = "";
            }
            if (words.length === 0) {
                lines.push(line);
            }
        }
        return lines;
    }

    spotLight1 = createSpotlight( 0xFF0000 );
    spotLight2 = createSpotlight( 0x00FF7F );
    spotLight3 = createSpotlight( 0x7F00FF );

    spotLight1.position.set( -100, 50, -3000 );
    spotLight2.position.set( 0, 40, -3000 );
    spotLight3.position.set( - 150, 40, -3000 );

    // spotLight1.target = cylinder1;
    // spotLight1.lookAt(cylinder1.position);

    lightHelper1 = new THREE.SpotLightHelper( spotLight1 );
    lightHelper2 = new THREE.SpotLightHelper( spotLight2 );
    lightHelper3 = new THREE.SpotLightHelper( spotLight3 );

    // scene.add( spotLight1, spotLight2, spotLight3 );
    scene.add( spotLight1 );
    // scene.add( lightHelper1, lightHelper2, lightHelper3 );
    // scene.add( lightHelper1 );

    function createSpotlight( color ) {
        const newObj = new THREE.SpotLight( color, 2 );
        newObj.castShadow = true;
        newObj.angle = 0.3;
        newObj.penumbra = 0.2;
        newObj.decay = 2;
        newObj.distance = 150;
        return newObj;
    }

    light = new THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0,1);
    scene.add(light);

    smokeTexture = THREE.ImageUtils.loadTexture('tex/smoke-element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x0181CD, map: smokeTexture, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending});
    smokeGeo = new THREE.PlaneGeometry(300,300);

    scene.add(particleSystem);

    for (let p = 0; p < 250; p++) {
        let particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        if (p<150){
            particle.position.set(Math.random()*1000-500,Math.random()*300-150,-Math.random()*2000-200);
        } else {
            particle.position.set(Math.random()*1400-700,Math.random()*300-150,-Math.random()*2000-4000);
        }
        particle.rotation.z = Math.random() * Math.PI * 2;
        particleSystem.add(particle);
        smokeParticles.push(particle);

    }

    objLoader.load('models/vp.obj', function(object3d){
        geometry = new THREE.Geometry();
        startGeometry = new THREE.Geometry();
        let color = new THREE.Color();

        object3d.scale.set(0.1,0.1,0.1)

        object3d.traverse( function ( child ) {
            // let probability = Math.random();
            if ( child.geometry !== undefined ) {

                let geom = child.geometry;
                let vertices = geom.vertices;

                let distance = 120;

                for ( let i = 0; i < vertices.length; i ++ ) {

                    let vertex = new THREE.Vector3();
                    vertex.x = vertices[i].x;
                    vertex.y = vertices[i].y+deltaY;
                    vertex.z = vertices[i].z;

                    let tmp_vertex = new THREE.Vector3();
                    let theta = THREE.Math.randFloatSpread(360);
                    let phi = THREE.Math.randFloatSpread(360);

                    tmp_vertex.x = distance * Math.sin(theta) * Math.cos(phi);
                    tmp_vertex.y = distance * Math.sin(theta) * Math.sin(phi);
                    tmp_vertex.z = distance * Math.cos(theta);

                    color.setRGB( 1, 1, 1 );
                    colors.push( color.r, color.g, color.b );

                    geometry.vertices.push( tmp_vertex );
                    startGeometry.vertices.push( vertex );

                }
            }
        });

        let particleTexture = new THREE.TextureLoader().load( "tex/particle.png" );
        let material2 = new THREE.PointsMaterial( { color: 0x3168E2, size: 6, sizeAttenuation: false, map: particleTexture, alphaTest: 0.5, transparent: true, blending: THREE.AdditiveBlending } );
        plus = new THREE.Points( geometry, material2 );
        plus.frustumCulled = false;
        plus.position.y = 20;
        if (V_5TH_ANIMATION) {
          scene.add(plus);
        } 
    });
    if (V_5TH_ANIMATION) {
        hero.style.display = 'block';
    } else {
        previewtime = 0.3;
        hero.style.display = 'none';
    } 
    if (Upper_Lower_Wheel) {
        hero.style.display = 'block';
    } else {
        previewtime = 0;
        hero.style.display = 'none';
    }
    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setClearColor( 0xff0000, 1 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    canvas1.appendChild( renderer.domElement );

    document.addEventListener('mouseup', onDocumentMouseUp, false);
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener( 'resize', onWindowResize, false );

}



function modRound(value, precision){

    let precision_number = Math.pow(10, precision);
    return Math.round(value * precision_number) / precision_number;

}
function checkWindowWidth(){
    if (window.innerWidth>640){
        camDeltaY = 0;
        camDeltaZ = 0;
    } else {
        camDeltaY = 150;
        camDeltaZ = 200;
    }
}
function onWindowResize() {
    checkWindowWidth();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseDown(e) {
    isDragging = true;
    startMousePosition = { x: e.clientX, y: e.clientY };

    if (clicksEnabled && hoversEnabled){
        
        if (INTERSECTED) {
            $('.back-btn').css('display', 'none');

            moveSideButtonsBack();

            let nameToCheck = INTERSECTED.name;
            for (let i = 0; i < interactions.length; i++) (function(i) {
                window.setTimeout(function() {
                    if (nameToCheck !== interactions[i].name){
                        rotateElem(interactions[i].parent, -Math.PI/2)
                    } else {
                        //
                    }
                }, i * 50)
            }(i));

            shutThePlane(0.8);

            bringForward(INTERSECTED.parent);

            if (window.innerWidth<640){
                $('.close').css('top','30px');
                $('.close').css('right','10px');
            } else {
                $('.close').css('top','90px');
            }
            $('.list-container').css('display','block');
            $('.list-container').css('transform','translate3d(0, -0px, 0)').css('opacity','1');
            $('#header-element').html(INTERSECTED.name);
            $('.list-header').html('<div class="cont"><div class="actual"><div class="header">' + INTERSECTED.name + '</div></div></div>');
            $('.main-container').html(INTERSECTED.description);
            $('#status-container').html("");
            $('#url-container').html(INTERSECTED.url ? `<a href="${INTERSECTED.url}">${INTERSECTED.url}</a>` : '');
            // $('#status-container').html("Status: " + INTERSECTED.status);
            $('.c-name').html('<div class="mini-hdr">Quadrant data</div>' + INTERSECTED.quadrant);
        }
    }
};

function onDocumentMouseMove( e ) {
    e.preventDefault();
    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
}

function onDocumentMouseUp(e) {

    if (isDraggingEnable && isDragging) {
        isDragging = false;
        endMousePosition = { x: e.clientX, y: e.clientY };
        handleMouseUp();
    }

}

function handleMouseUp() {
  
        const deltaX = endMousePosition.x - startMousePosition.x;
        const deltaY = endMousePosition.y - startMousePosition.y;

        if(deltaX !== deltaY) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal drag
                if (deltaX !== 0) {
                    if (deltaX > 0) {
                        // Right drag
                        RotateCubeByMouseDrag('right');
                    } else {
                        // Left drag
                        RotateCubeByMouseDrag('left');
                    }
                }
               
            } else {

                if (deltaY !== 0) {
                    // Vertical drag
                    if (deltaY > 0) {
                        // Down drag
                        RotateCubeByMouseDrag('down');
                    } else {
                        // Up drag
                        RotateCubeByMouseDrag('up');
                    }
                }
                
            }
        }
   
}

var activeSide = -1;

const rotationDirection = [
    [1,5,3,4],
    [2,5,0,4],
    [3,5,1,4],
    [0,5,2,4],
    [1,0,3,2],
    [1,2,3,0],
]

let axis = [["x", 1], ["y", 1], ["z", 1]];

const directionIndices = {
    'left': 0,
    'up': 1,
    'right': 2,
    'down': 3,
}

function RotateCubeByMouseDrag(direction) {
    let targetRotationValue = { x: cubeGroup.rotation.x, y: cubeGroup.rotation.y, z: cubeGroup.rotation.z };
    const dir = directionIndices[direction]
    activeSide = rotationDirection[activeSide][dir]

    let temp;
    switch (direction) {
        case 'right':
            targetRotationValue[axis[1][0]] += axis[1][1] * Math.PI / 2;
            temp = axis[0];
            axis[0] = axis[2];
            axis[2] = temp;
            axis[2][1] = -axis[2][1];
            break;
        case 'left':
            targetRotationValue[axis[1][0]] -= axis[1][1] * Math.PI / 2;
            temp = axis[0];
            axis[0] = axis[2];
            axis[2] = temp;
            axis[0][1] = -axis[0][1];
            break;
        case 'down':
            targetRotationValue[axis[0][0]] += axis[0][1] * Math.PI / 2;
            temp = axis[1];
            axis[1] = axis[2];
            axis[2] = temp;
            axis[1][1] = -axis[1][1];
            break;
        case 'up':
            targetRotationValue[axis[0][0]] -= axis[0][1] * Math.PI / 2;
            temp = axis[1];
            axis[1] = axis[2];
            axis[2] = temp;
            axis[2][1] = -axis[2][1];
            break;
    }

    new TWEEN.Tween(cubeGroup.rotation)
        .to({ x: targetRotationValue.x, y: targetRotationValue.y, z: targetRotationValue.z }, 600)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
            // Determine which side is in front after rotation
            UpdateBrightness(activeSide)
            
        })
        .onComplete(() => {
            console.log(targetRotationValue);
            console.log("///////", axis);

        })
        .start();
}

function UpdateBrightness (q) {
    for (let i = 0; i < cubeGroup.children.length; i++) {
    if (i == parseInt(q)) {
        for (let j = 0; j < cubeGroup.children[i].children.length; j++) {
            changeBrightness(cubeGroup.children[i].children[j].children[0], 0.8);
            changeBrightness(cubeGroup.children[i].children[j].children[1], 0.8);
            interactions.push(cubeGroup.children[i].children[j].children[1]);
        }
    } else {
        for (let j = 0; j < cubeGroup.children[i].children.length; j++) {
            changeBrightness(cubeGroup.children[i].children[j].children[0], 0.05);
            changeBrightness(cubeGroup.children[i].children[j].children[1], 0.05);
        }
    }
}
}

function animate() {

    delta = clock.getDelta();

    renderer.render( scene, camera );

    if (cubeAutoRotationAllowed){
        cubeGroup.rotation.y += 0.004;
        if (cubeGroup.rotation.y > Math.PI*2){
            cubeGroup.rotation.y = 0;
        }
    }

    planePBG2.rotation.z += 0.001;
    planePBG3.rotation.z += 0.001;

    checkIntersections();

    evolveSmoke();
    updateMorphAnimation();
    TWEEN.update();
    requestAnimationFrame( animate );

}
function shutThePlane(opa){
    let cpA = {opacity: planeShutter.material.opacity};
    let tpA = {opacity: opa};
    let tween = new TWEEN.Tween(cpA).to(tpA, 600);
    // tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {

        planeShutter.material.opacity = cpA.opacity;

    });
    tween.start();
}
function rotateElem(elem, angle){
    let cpA = {rotX: elem.rotation.x};
    let tpA = {rotX: angle};
    let tween = new TWEEN.Tween(cpA).to(tpA, 200);
    // tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {

        elem.rotation.x = cpA.rotX;

    });
    tween.start();
}
function bringForward(elem){

    clicksEnabled = false;
    hoversEnabled = false;
    $('html,body').css('cursor', 'default');

    prevElemValues = {posX: elem.position.x, posY: elem.position.y, posZ: elem.position.z, rotX: elem.rotation.x, rotY: elem.rotation.y};

    oldValues = {posX: elem.position.x, posY: elem.position.y, posZ: elem.position.z, rotX: elem.rotation.x, rotY: elem.rotation.y};

    let cpA = prevElemValues;
    let tpA = {posX: -60, posY: 20, posZ: elem.position.z + 350, rotX: Math.PI*2, rotY: Math.PI/180*25};
    let tween = new TWEEN.Tween(cpA).to(tpA, 500*test);
    tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {

        elem.position.set(cpA.posX, cpA.posY, cpA.posZ);
        elem.rotation.x = cpA.rotX;
        elem.rotation.y = cpA.rotY;

    });
    tween.start();
}
function sendBackward(elem){

    clicksEnabled = true;
    hoversEnabled = true;

    let cpA = {posX: elem.position.x, posY: elem.position.y, posZ: elem.position.z, rotX: elem.rotation.x, rotY: elem.rotation.y};
    let tpA = oldValues;
    let tween = new TWEEN.Tween(cpA).to(tpA, 500*test);
    tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {

        elem.position.set(cpA.posX, cpA.posY, cpA.posZ);
        elem.rotation.x = cpA.rotX;
        elem.rotation.y = cpA.rotY;

    });
    tween.start();

    tween.onComplete(function(){
        $('.list-container').css('display','none');
    })

}
function evolveSmoke() {
    let sp = smokeParticles.length;
    while(sp--) {
        if (sp%2){
            smokeParticles[sp].rotation.z += (delta * 0.3);
        } else {
            smokeParticles[sp].rotation.z -= (delta * 0.3);
        }
    }
}
function updateMorphAnimation() {

    if (!morphAnimationDone) {

        let frameTime = (Date.now() - lastMophAnimUpdateMS);
        lastMophAnimUpdateMS = Date.now();

        plus.geometry.verticesNeedUpdate = true;

        let transitionDone = true;
        for (let i = 0; i < geometry.vertices.length; i++) {

            let dAnimationProgress = Math.min(frameTime / animationTimeMS[i], 1);
            animationTimeMS[i] -= frameTime;

            let CG = {
                x: modRound(geometry.vertices[i].x, 8),
                y: modRound(geometry.vertices[i].y, 8),
                z: modRound(geometry.vertices[i].z, 8)
            };

            let OG = {
                x: modRound(targetGeom.vertices[i].x, 8),
                y: modRound(targetGeom.vertices[i].y, 8),
                z: modRound(targetGeom.vertices[i].z, 8)
            };

            morphedVertices[i] = morphedVertices[i] || {};

            ['x', 'y', 'z'].forEach(function(dim) {
                if (Math.abs(CG[dim] - OG[dim]) !== 0) {
                    if ( CG[dim] < OG[dim] ) {
                        geometry.vertices[i][dim] += (OG[dim] - CG[dim]) * dAnimationProgress;
                    } else {
                        geometry.vertices[i][dim] -= (CG[dim] - OG[dim]) * dAnimationProgress;
                    }
                    transitionDone = false;
                } else {
                    morphedVertices[i][dim] = true;
                }
            });
        }

        if (transitionDone)
            morphAnimationDone = true;
    }

}

// harmony must be 0-1
function morphGeometry(targetGeometry, targetRotation=null, durationMS=1000, harmony=0.8) {
    if (targetGeometry === targetGeom)
        return;

    targetGeom = targetGeometry;
    morphAnimationDone = false;

    if (animationTimeMS.length !== geometry.vertices.length)
        animationTimeMS.length = geometry.vertices.length;
    for (let i = 0; i < geometry.vertices.length; i++)
        animationTimeMS[i] = durationMS * (1 - (1 - harmony) * Math.random());
    lastMophAnimUpdateMS = Date.now();

    if (targetRotation !== null)
    {
        let rot = {r: plus.rotation.y} ;
        let tween = new TWEEN.Tween(rot).to({r: targetRotation}, durationMS);
        tween.easing(TWEEN.Easing.Quartic.Out);
        tween.onUpdate(function () { plus.rotation.y = rot.r; });
        tween.start();
    }
}
function checkIntersections(){
    // find intersections
    raycaster.setFromCamera( mouse, camera );
    const intersects = raycaster.intersectObjects( interactions );

    if (hoversEnabled){
        if ( intersects.length > 0 ) {

            if ( INTERSECTED != intersects[ 0 ].object ) {
                $('html,body').css('cursor', 'pointer');
                INTERSECTED = intersects[ 0 ].object;
                // INTERSECTED.material.opacity = 1;
            }
        } else {

            if (INTERSECTED){
                // INTERSECTED.material.opacity = 0.8;
            }

            INTERSECTED = null;

            $('.popup').css('display','none');
            $('html,body').css('cursor', 'default');

        }
    }
}

/**
 * @param planeWidth
 * @param planeHeight
 * @param planeCount planes per level
 * @param paddingX
 * @param paddingY
 * @param rowIndex position in current level
 * @param level
 * @param rotation optional parameter for animations (rotates cylinder)
 */
function calcPlaneTransforms(planeWidth, planeHeight, planeCount, levelCount, posX, posZ, posY, paddingX, paddingY, rowIndex, level, rotation=0)
{
    let angularIncrement = 2 * Math.PI / planeCount;
    let radius = (planeWidth + paddingX) / (2 * Math.sin(angularIncrement/2));
    rotation += angularIncrement * rowIndex;

    let position = new THREE.Vector3();

    position.x = Math.sin(rotation) * radius + posX;
    position.z = Math.cos(rotation) * radius + posZ;
    position.y = (planeHeight + paddingY) * (level - levelCount / 2) + posY;

    return {rotation: new THREE.Vector3(0, rotation, 0), position: position, radius};
}

$('body').on('click', '.side-button', function(element) {
    const sideButton = $(element.target).closest('.side-button'); 
    activeSide = sideButton.index();

    isDraggingEnable = true;
    let clickedId = $(this).attr('id');

    if (!clickedId)
        return;

    let quadrant = clickedId.substr(clickedId.length - 1);


    cubeAutoRotationAllowed = false;

    rotateCube(quadrant);

    if($('.back-btn').css('display') === 'none'){
        $('.back-btn').css('display', 'block');
        $('.back-btn').css('opacity', 0).animate({opacity: 1}, 1500);
    }
});



$('body').on('click', '.view-btn', function() {
    if(INTERSECTED.url) {
        window.open(INTERSECTED.url, '_blank');
    }
})

$('body').on('click', '.back-btn', function() {
    isDraggingEnable = false;
    cubeAutoRotationAllowed = true;

    for (let i = 0;i < cubeGroup.children.length;i++){
            for (let j = 0;j < cubeGroup.children[i].children.length;j++) {
                changeBrightness(cubeGroup.children[i].children[j].children[0], 0.8);
                changeBrightness(cubeGroup.children[i].children[j].children[1], 0.8);
                interactions.push(cubeGroup.children[i].children[j].children[1]);
            }
    }

    let cpA = {rot: 0, camPosY: camera.position.y, camPosZ: camera.position.z};
    let tpA = {rot: 0, camPosY: 100+camDeltaY, camPosZ: -2400};
    let tween = new TWEEN.Tween(cpA).to(tpA, 500);
    // tween.easing(TWEEN.Easing.Quartic.InOut);
    tween.onUpdate(function () {

        clicksEnabled = false;

        cubeGroup.rotation.y = cpA.rot;
        camera.position.y = cpA.camPosY;
        camera.position.z = cpA.camPosZ;

    });
    tween.onComplete(function () {

        clicksEnabled = false;

    });
    tween.start();

    $(this).animate({opacity: 0}, 1000, function() {
        $(this).css('display', 'none');
    });

});

$('body').on('click', '.close', function() {

    $('.back-btn').css('display', 'block');
    $('.close').css('top','-90px');
    
    for (let i=0; i<interactions.length; i++) (function(i) {
        window.setTimeout(function() {
           rotateElem(interactions[i].parent, 0);
        }, i*50)
    }(i));

    shutThePlane(0);

    $('.list-container').css('transform','translate3d(0, -60px, 0)').css('opacity','0');
    sendBackward(INTERSECTED.parent);
    moveSideButtons();

});

function rotateCube(q) {
    interactions = [];

    let rotateAngles = [
        { y: 0, x: 0, z: 0 },                   // Front
        { y: -Math.PI / 2, x: 0, z: 0 },        // Right
        { y: Math.PI, x: 0, z: 0 },             // Back
        { y: Math.PI / 2, x: 0, z: 0 },         // Left
        { y: 0, x: Math.PI / 2, z: 0 },         // Top
        { y: 0, x: -Math.PI / 2, z: 0 }         // Bottom
    ];

    const defaultAxis = [
        [["x", 1], ["y", 1], ["z", 1]],
        [["z", -1], ["y", 1], ["x", 1]],
        [["x", -1], ["y", 1], ["z", -1]],
        [["z", 1], ["y", 1], ["x", -1]],
        [["x", 1], ["z", -1], ["y", 1]],
        [["x", 1], ["z", 1], ["y", -1]]
    ];

    let targetRotation = rotateAngles[q];
    axis = defaultAxis[q];

    // Shortest path calculation
    let shortestRotation = {
        y: ((targetRotation.y - cubeGroup.rotation.y + Math.PI) % (2 * Math.PI)) - Math.PI,
        x: ((targetRotation.x - cubeGroup.rotation.x + Math.PI) % (2 * Math.PI)) - Math.PI,
        z: ((targetRotation.z - cubeGroup.rotation.z + Math.PI) % (2 * Math.PI)) - Math.PI
    };

    for (let i = 0; i < cubeGroup.children.length; i++) {
        if (i == parseInt(q)) {
            for (let j = 0; j < cubeGroup.children[i].children.length; j++) {
                changeBrightness(cubeGroup.children[i].children[j].children[0], 0.8);
                changeBrightness(cubeGroup.children[i].children[j].children[1], 0.8);
                interactions.push(cubeGroup.children[i].children[j].children[1]);
            }
        } else {
            for (let j = 0; j < cubeGroup.children[i].children.length; j++) {
                changeBrightness(cubeGroup.children[i].children[j].children[0], 0.05);
                changeBrightness(cubeGroup.children[i].children[j].children[1], 0.05);
            }
        }
    }

    let cpA = {
        rotY: cubeGroup.rotation.y,
        rotX: cubeGroup.rotation.x,
        rotZ: cubeGroup.rotation.z,
        camPosY: camera.position.y,
        camPosZ: camera.position.z
    };

    let tpA = {
        rotY: cubeGroup.rotation.y + shortestRotation.y,
        rotX: cubeGroup.rotation.x + shortestRotation.x,
        rotZ: cubeGroup.rotation.z + shortestRotation.z,
        camPosY: 55 + camDeltaY,
        camPosZ: -2700 + camDeltaZ
    };

    let tween = new TWEEN.Tween(cpA).to(tpA, 1800);
    tween.easing(TWEEN.Easing.Quartic.Out);

    tween.onUpdate(function () {
        clicksEnabled = false;
        cubeGroup.rotation.y = cpA.rotY;
        cubeGroup.rotation.x = cpA.rotX;
        cubeGroup.rotation.z = cpA.rotZ;
        camera.position.y = cpA.camPosY;
        camera.position.z = cpA.camPosZ;
    });

    tween.onComplete(function () {
        clicksEnabled = true;
        cubeGroup.rotation.y = targetRotation.y;
        cubeGroup.rotation.x = targetRotation.x;
        cubeGroup.rotation.z = targetRotation.z;
    });

    tween.start();
}



function changeBrightness(obj, opa){

    let cpA = {opacity: obj.material.opacity};
    let tpA = {opacity: opa};
    let tween = new TWEEN.Tween(cpA).to(tpA, 3000);
    tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {

        obj.material.opacity = cpA.opacity;

    });
    tween.start();
}

function returnPeriodicName(phrase){
    let firstLetter;
    let secondLetter = 'starting_value';
    if (phrase[0] !== ' '){
        firstLetter = phrase[0];
    } else {
        firstLetter = phrase[1];
    }
    for (let i = 0; i < phrase.length; i++) {
        if (i>1){
            if ((phrase[i] == ' ')&&(secondLetter=='starting_value')){
                secondLetter = phrase[i+1].toLowerCase();
            }
            if ((checkCase(phrase[i])=='upper case')&&(secondLetter=='starting_value')&&( phrase[i].toUpperCase() != phrase[i].toLowerCase() )){
                secondLetter = phrase[i].toLowerCase();
            }

        }
    }
    if (secondLetter == 'starting_value'){
        secondLetter = phrase[1];
    }
    return firstLetter+secondLetter;
}

function checkCase(ch) {
    if (!isNaN(ch * 1)){
        return 'ch is numeric';
    }
    else {
        if (ch == ch.toUpperCase()) {
            return 'upper case';
        }
        if (ch == ch.toLowerCase()){
            return 'lower case';
        }
    }
}

function letsFly(){

    let duration = 5000*previewtime;
    let cpA = {camPosZ: 220, camPosY: 0, opacity: 0, camLookY: 0};
    let tpA = {camPosZ: -2400, camPosY: 100+camDeltaY, opacity: 1, camLookY: 0};
    let tween = new TWEEN.Tween(cpA).to(tpA, duration);
    tween.easing(TWEEN.Easing.Quartic.InOut);
    tween.onUpdate(function () {
        camera.position.z = cpA.camPosZ;
        camera.position.y = cpA.camPosY;
        camera.lookAt(new THREE.Vector3(0,cpA.camLookY,-4200));
    });

    let cpA2 = {posY: 180};
    let tpA2 = {posY: -240};
    let tween2 = new TWEEN.Tween(cpA2).to(tpA2, 2400);
    tween2.easing(TWEEN.Easing.Quartic.InOut);
    tween2.onUpdate(function () {
        $('.hero').css('bottom', cpA2.posY+'px');
    });

    let cpAS = {i:0};
    let tpAS = {i:6000};
    let tweenS = new TWEEN.Tween(cpAS).to(tpAS, 8000*(previewtime+0.01));
    tweenS.onUpdate(function () {
        if (cpAS.i>2500){
            launchMorph();
            oneTime = true;
        }
    });

    tweenS.start();
    tweenS.onComplete(function(){
        tween.start();
        tween2.start();
    });

    let cpA3 = {i:0};
    let tpA3 = {i:0};
    let tween3 = new TWEEN.Tween(cpA3).to(tpA3, 1200);
    tween3.onUpdate(function () {
        // sdfsdf
    });
    tween3.onComplete(function(){

    });

    tween.onComplete(function(){
        tween3.start();
        moveSideButtons();
    });



    function launchMorph(){
        if (!oneTime){
            morphGeometry(startGeometry, Math.PI, 4000);
        }
    }

}

function moveSideButtons(){
    $('.side-buttons').css('display','block');

    for (let i = 0; i< 6; i++) (function(i) {
        window.setTimeout(function() {
            translateObject(i,-120,0, 0,1, 90, 0);
        }, i * 100)
    }(i));

    let menuParent = document.getElementById("menu-buttons");
    menuParent.style.display = "block";

    for (let i = 0; i < menuParent.children.length; i++) {
        window.setTimeout(function() {
            translateObjectByRef(menuParent.children[i], -120,0, 0,1, 90, 0);
        }, i * 100)
    }
}

function moveSideButtonsBack(){
    for (let i=0; i<6; i++) (function(i) {
        window.setTimeout(function() {
            translateObject(i,0,-120, 1,0, 0, 90);
        }, i*100)
    }(i));

    let menuParent = document.getElementById("menu-buttons");
    for (let i = 0; i < menuParent.children.length; i++) {
        window.setTimeout(function() {
            translateObjectByRef(menuParent.children[i], 0,-120, 1,0, 0, 90);
        }, i*100)
    }
}

function translateObject(obj, from, to, opa1, opa2, rot1, rot2) {
    let cpA = {posX: from, opacity: opa1, rotX:rot1};
    let tpA = {posX: to, opacity: opa2, rotX:rot2};
    let tween = new TWEEN.Tween(cpA).to(tpA, 1200);
    tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {

        $('#side-button-'+ obj).css('transform', 'translate3d(0, '+ cpA.posX +'px, 0) perspective(200px) rotateX('+ cpA.rotX +'deg)');
        $('#side-button-'+ obj).css('opacity', cpA.opacity);

    });
    tween.start();
    tween.onComplete(function(){
        if (obj == 3 && opa2 == 0){
            $('.side-buttons').css('display','none');
        }
    })
}

function translateObjectByRef(obj, from, to, opa1, opa2, rot1, rot2) {
    let cpA = {posX: from, opacity: opa1, rotX:rot1};
    let tpA = {posX: to, opacity: opa2, rotX:rot2};
    let tween = new TWEEN.Tween(cpA).to(tpA, 600);
    tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {

        obj.style.transform =  'translate3d(0, '+cpA.posX+'px, 0) perspective(200px) rotateX('+cpA.rotX+'deg)';
        obj.style.opacity = cpA.opacity;

    });
    tween.start();
    tween.onComplete(function(){
        // if (obj==3&&opa2==0){
        //     $('.side-buttons').css('display','none');
        // }
    })
}
