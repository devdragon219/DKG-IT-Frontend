if (!Detector.webgl) Detector.addGetWebGLMessage();

let object, position, globe;
let camera, scene, renderer, light;

const orderLinks = [];

let test = 1; // normal speed
// test = 0.2; // fast speed with additional test parameters
// test = 0.1; // ultra fast with helpers OFF
let prevElemValues = {};
let oldValues = {};

let currentBook;

let camDeltaY, camDeltaZ;

let radius = 120;

const ROTATION_SPEED = 0.002 * 144;
let rotationCubeDelta = ROTATION_SPEED;

let gui;

let covers = [];
let books = [];
let booksLength = 7;

checkWindowWidth();

let themeDark = false;

let sectionModels = [];
let clicksEnabled = false;
let hoversEnabled = false;
let interactions = [];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let INTERSECTED;

let particleSystem = new THREE.Group();

let starParticleCount = 1000;
let currentlyDrawnStars = 0;
let starParticleSystem;

let group = new THREE.Group();
let clock = new THREE.Clock();

let cubeRotationAllowed = true;

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

let lightHelper;
let targetObject;

let flyInComplete = false;

let shadowCameraHelper;

let mouseX = 0,
  mouseY = 0;
let start_time = Date.now();

let booksContainer = new THREE.Group();

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let targetGeom, startGeometry;

let DarkWebMonitoring,
  ThreatIntelligence,
  DataLeakageMonitoring,
  BrandMonitoring,
  AttackSurfaceMonitoring;
let sphere;

let cylinderType = false;

let cylinder1 = new THREE.Group();
let cylinder2 = new THREE.Group();
let cylinder3 = new THREE.Group();

let spotLight1, spotLight2, spotLight3;

let structuredData = {};
let textFont;
let textures = [];
const fontLoader = new THREE.FontLoader();
let booksData;

for (let i = 0; i < booksLength; i++) {
  covers[i] = new THREE.TextureLoader().load("");
}

fontLoader.load("fonts/helvetiker_regular.typeface.json", function (font) {
  textFont = font;
});

const apiUrl = "/api/diagrams";
const params = new URLSearchParams(window.location.search);
const KEY = "slug";

window.onmessage = (e) => {
  if (e.data?.name === "parentMessage") {
    if (e.data.data?.originalData) {
      booksData = e.data.data.originalData.data;
      booksLength = e.data.data.originalData.data.length;

      if (booksLength > 10) {
        radius = radius + booksLength * 5;
      }
      for (let i = 0; i < booksLength; i++) {
        covers[i] = new THREE.TextureLoader().load("");
      }

      init();
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
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.originalData) {
        booksData = data.originalData.data;
        booksLength = e.data.data.originalData.data.length;
        if (booksLength > 10) {
          radius = radius + booksLength * 5;
        }
        for (let i = 0; i < booksLength; i++) {
          covers[i] = new THREE.TextureLoader().load("");
        }
        init();
      }
      if (data?.source?.originalData) {
        booksData = data.source.originalData.data;
        booksLength = data.source.originalData.data.length;
        if (booksLength > 10) {
          radius = radius + booksLength * 5;
        }
        for (let i = 0; i < booksLength; i++) {
          covers[i] = new THREE.TextureLoader().load("");
        }
        init();
      }
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}

// loadData();

function loadData() {
  $.ajax({
    url: "books.json",
    dataType: "json",
    crossDomain: true,
  }).done(function (data) {
    booksData = data.data;

    init();
  });
}

THREE.DefaultLoadingManager.onProgress = function (item, loaded, total) {
  bar = Math.floor((barwidth * loaded) / total);
  $("#bar").css("width", "" + bar + "px");
  if (loaded / total == 1 && loaded !== 1) {
    $("#progressbar").fadeOut("300");
    $("#progress").fadeOut("600");
    $(".loader2").fadeOut("slow");
    animate();
    letsFly();
  }
};
let onProgress = function (xhr) {
  if (xhr.lengthComputable) {
    //let percentComplete = xhr.loaded / xhr.total * 100;
    //console.log( Math.round(percentComplete, 2) + '% downloaded' );
  }
};
let onError = function (xhr) {};
objLoader = new THREE.OBJLoader();

THREE.Object3D.prototype.deepClone = function (recursive) {
  return new this.constructor().deepCopy(this, recursive);
};

THREE.Object3D.prototype.deepCopy = function (source, recursive) {
  if (recursive === undefined) recursive = true;

  this.name = source.name;

  this.up.copy(source.up);

  this.position.copy(source.position);
  this.quaternion.copy(source.quaternion);
  this.scale.copy(source.scale);

  this.matrix.copy(source.matrix);
  this.matrixWorld.copy(source.matrixWorld);
  if (source.material) {
    //changed
    this.material = source.material.clone();
  }
  if (source.geometry) {
    //changed
    this.geometry = source.geometry.clone();
  }
  this.matrixAutoUpdate = source.matrixAutoUpdate;
  this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

  this.layers.mask = source.layers.mask;
  this.visible = source.visible;

  this.castShadow = source.castShadow;
  this.receiveShadow = source.receiveShadow;

  this.frustumCulled = source.frustumCulled;
  this.renderOrder = source.renderOrder;

  this.userData = JSON.parse(JSON.stringify(source.userData));

  if (recursive === true) {
    for (var i = 0; i < source.children.length; i++) {
      var child = source.children[i];
      this.add(child.deepClone()); //changed
    }
  }

  return this;
};

function init() {
  let canvas1 = document.getElementById("canvas1");

  camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    1,
    20000
  );
  camera.position.z = 220;

  //

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const geometryPBG = new THREE.PlaneGeometry(160, 240);
  const materialPBG = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
  });
  const planePBG = new THREE.Mesh(geometryPBG, materialPBG);
  planePBG.position.set(-250, 40, -3200);
  // scene.add( planePBG );

  let sphereTex = new THREE.TextureLoader().load("tex/png/gridhalf.png");
  sphereTex.wrapS = sphereTex.wrapT = THREE.RepeatWrapping;
  sphereTex.offset.set(0, 0);
  sphereTex.repeat.set(4, 4);
  let PBGtex2 = new THREE.TextureLoader().load("tex/png/circle white.png");
  // let sinusTex = new THREE.TextureLoader().load( 'tex/png/circle dotted.png' );
  let PBtex = new THREE.TextureLoader().load("tex/main_bg2.jpg");

  const geometryBPlane = new THREE.PlaneGeometry(3900, 2800);
  const materialBPlane = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    map: PBtex,
  });
  backPlane = new THREE.Mesh(geometryBPlane, materialBPlane);
  backPlane.scale.set(2.7, 2.7, 2.7);
  // backPlane.rotation.x = Math.PI/2;
  backPlane.position.set(0, -500, -9800);
  scene.add(backPlane);

  const geometryPBG2 = new THREE.PlaneGeometry(400, 400);
  const materialPBG2 = new THREE.MeshLambertMaterial({
    map: PBGtex2,
    color: 0xffffff,
    blending: THREE.AdditiveBlending,
    transparent: true,
    side: THREE.DoubleSide,
  });
  planePBG2 = new THREE.Mesh(geometryPBG2, materialPBG2);
  planePBG2.rotation.x = (Math.PI / 180) * 85;
  planePBG2.receiveShadow = true;
  planePBG2.position.set(0, -120, -3200);
  scene.add(planePBG2);

  const geometryPBG3 = new THREE.PlaneGeometry(260, 260);
  const materialPBG3 = new THREE.MeshStandardMaterial({
    map: PBGtex2,
    color: 0xffffff,
    blending: THREE.AdditiveBlending,
    transparent: true,
    side: THREE.DoubleSide,
  });
  planePBG3 = new THREE.Mesh(geometryPBG3, materialPBG3);
  planePBG3.rotation.x = (Math.PI / 180) * 85;
  planePBG3.position.set(0, 120, -3200);
  scene.add(planePBG3);

  const geometryShutter = new THREE.PlaneGeometry(1400, 1400);
  const materialShutter = new THREE.MeshLambertMaterial({
    color: 0x000000,
    blending: 1,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });
  planeShutter = new THREE.Mesh(geometryShutter, materialShutter);
  // planeShutter.rotation.x = Math.PI/2;
  planeShutter.position.set(0, 0, -3000);
  scene.add(planeShutter);

  const geometrySphere = new THREE.SphereGeometry(220, 32, 32);
  const materialSphere = new THREE.MeshBasicMaterial({
    map: sphereTex,
    color: 0xffffff,
    transparent: true,
    opacity: 0.6,
    side: THREE.BackSide,
  });
  const sphere = new THREE.Mesh(geometrySphere, materialSphere);
  sphere.scale.set(1.2, 1, 1);
  sphere.position.set(0, 20, 0);
  booksContainer.add(sphere);

  // const geometrySinusPlane = new THREE.PlaneGeometry( 260, 260 );
  // const materialSinusPlane = new THREE.MeshStandardMaterial( {map: sinusTex, color: 0xffffff, blending:THREE.AdditiveBlending, transparent: true, side: THREE.DoubleSide} );
  // sinusPlane = new THREE.Mesh( geometrySinusPlane, materialSinusPlane );
  // sinusPlane.rotation.x = Math.PI/180*85;
  // sinusPlane.position.set(0,120,0);
  // booksContainer.add( sinusPlane );

  // LIGHTS

  let pLight = new THREE.PointLight(0xffffff, 0.3, 700);
  pLight.position.set(240, -30, -2950);
  scene.add(pLight);

  let pLight2 = new THREE.PointLight(0xffffff, 0.3, 700);
  pLight2.position.set(-240, -30, -2950);
  scene.add(pLight2);

  let spotLight = new THREE.SpotLight(0xffffff, 0.5);
  spotLight.position.set(-60, 100, -2500);
  spotLight.angle = 0.57;
  spotLight.penumbra = 0.8;
  spotLight.decay = 1;
  spotLight.distance = 2000;

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 800;
  spotLight.shadow.focus = 1;

  // console.log(spotLight)

  targetObject = new THREE.Object3D();
  targetObject.position.set(-75, 55, -2900);
  scene.add(targetObject);

  if (test == 0.2) {
    const geometryC = new THREE.BoxGeometry(10, 10, 10);
    const materialC = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometryC, materialC);
    cube.position.set(100, 0, -3300);
    scene.add(cube);

    lightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(lightHelper);
    shadowCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
    scene.add(shadowCameraHelper);
  }

  spotLight.target = targetObject;

  scene.add(spotLight);

  let light = new THREE.AmbientLight(0xffffff, 0.4); // soft white light
  scene.add(light);

  let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-1, 2, 2);
  // scene.add( directionalLight );

  function buildGui() {
    gui = new dat.GUI();

    const params = {
      "light color": spotLight.color.getHex(),
      intensity: spotLight.intensity,
      distance: spotLight.distance,
      angle: spotLight.angle,
      penumbra: spotLight.penumbra,
      decay: spotLight.decay,
      focus: spotLight.shadow.focus,
      posX: spotLight.position.x,
      posY: spotLight.position.y,
      posZ: spotLight.position.z,
      tX: targetObject.position.x,
      tY: targetObject.position.y,
      tZ: targetObject.position.z,
    };

    gui.addColor(params, "light color").onChange(function (val) {
      spotLight.color.setHex(val);
    });

    gui.add(params, "intensity", 0, 2).onChange(function (val) {
      spotLight.intensity = val;
    });

    gui.add(params, "distance", 50, 2000).onChange(function (val) {
      spotLight.distance = val;
    });

    gui.add(params, "angle", 0, Math.PI / 3).onChange(function (val) {
      spotLight.angle = val;
    });

    gui.add(params, "penumbra", 0, 1).onChange(function (val) {
      spotLight.penumbra = val;
    });

    gui.add(params, "decay", 1, 2).onChange(function (val) {
      spotLight.decay = val;
    });

    gui.add(params, "focus", 0, 1).onChange(function (val) {
      spotLight.shadow.focus = val;
    });

    gui.add(params, "posX", -300, 1000).onChange(function (val) {
      spotLight.position.x = val;
    });

    gui.add(params, "posY", -300, 1000).onChange(function (val) {
      spotLight.position.y = val;
    });

    gui.add(params, "posZ", -4500, -2500).onChange(function (val) {
      spotLight.position.z = val;
    });

    gui.add(params, "tX", -300, 1000).onChange(function (val) {
      targetObject.position.x = val;
      cube.position.x = val;
    });

    gui.add(params, "tY", -300, 1000).onChange(function (val) {
      targetObject.position.y = val;
      cube.position.y = val;
    });

    gui.add(params, "tZ", -4500, -2500).onChange(function (val) {
      targetObject.position.z = val;
      cube.position.z = val;
    });

    gui.open();
  }

  if (test == 0.2) {
    buildGui();
  }

  // Instantiate a loader
  const glftLoader = new THREE.GLTFLoader();

  // Load a glTF resource
  glftLoader.load(
    // resource URL
    "models/book/book_3.glb",
    // called when the resource is loaded
    function (gltf) {
      let book = gltf.scene;

      booksContainer.position.z = -3200;
      booksContainer.rotation.x = (-Math.PI / 180) * 6;
      scene.add(booksContainer);

      let childNamesOrder = [
        "Default_light",
        "Object002",
        "papers2",
        "pages",
        "book",
        "cover",
      ];

      for (let i = 0; i < booksLength; i++) {
        books[i] = book.deepClone(true);
        console.log(booksLength, 121212123333);
        let childrenInOrder = [];
        for (let c = 0; c < 6; c++) {
          for (let s = 0; s < 6; s++) {
            if (books[i].children[s].name === childNamesOrder[c]) {
              childrenInOrder[c] = books[i].children[s];
              if (childrenInOrder[c].material !== undefined)
                childrenInOrder[c].material.color.setRGB(1, 1, 1);
            }
          }
        }
        books[i].children = childrenInOrder;
        console.log(books[i].children[5].material);

        let cover = covers[i];
        console.log(covers, books, 121212);
        cover.flipY = false;

        books[i].children[4].material.map = cover;
        books[i].children[4].material.map.anisotropy =
          renderer.capabilities.getMaxAnisotropy();
        books[i].children[4].material.needsUpdate = true;
        books[i].children[4].material.map.needsUpdate = true;

        books[i].children[5].material.map = cover;
        books[i].children[5].material.map.anisotropy =
          renderer.capabilities.getMaxAnisotropy();
        books[i].children[5].material.needsUpdate = true;
        books[i].children[5].material.map.needsUpdate = true;

        let angle = ((2 * Math.PI) / booksLength) * i;
        let posX = Math.sin(angle) * radius;
        let posZ = Math.cos(angle) * radius;
        books[i].position.set(posX, -20, posZ);
        books[i].rotation.y = angle;
        books[i].castShadow = true;
        books[i].receiveShadow = true;

        booksContainer.add(books[i]);

        const geometryHover = new THREE.BoxGeometry(75, 100, 20);
        let materialHover = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        let hoverCube = new THREE.Mesh(geometryHover, materialHover);
        hoverCube.name = booksData[i]?.name;
        hoverCube.content = booksData[i]?.teaser;
        hoverCube.video = booksData[i]?.video;
        hoverCube.pages = booksData[i]?.pages;
        hoverCube.release = booksData[i]?.release;
        hoverCube.orderLink = orderLinks[i];
        hoverCube.position.y = 2;
        hoverCube.angle = angle;
        books[i].add(hoverCube);
        interactions.push(hoverCube);

        console.log(hoverCube.name, hoverCube.orderLink);

        // console.log("Book", i, ": ", books[i]);
        // console.log("Book", i, ": ", books[i].children[5].material.map);
      }

      // lazily load high res texture
      for (let i = 0; i < booksLength; i++) {
        // var textureLoader = new THREE.TextureLoader();
        // textureLoader.crossOrigin = null;

        // textureLoader.load(booksData[i].img, function (texture) {
        //   console.log(texture, 111111);
        //   texture.flipY = false;

        //   books[i].children[4].material.map = texture;
        //   books[i].children[4].material.map.anisotropy =
        //     renderer.capabilities.getMaxAnisotropy();
        //   books[i].children[4].material.map.needsUpdate = true;

        //   books[i].children[5].material.map = texture;
        //   books[i].children[5].material.map.anisotropy =
        //     renderer.capabilities.getMaxAnisotropy();
        //   books[i].children[5].material.map.needsUpdate = true;
        //   console.log(books, 22222);
        // });

        new THREE.TextureLoader().load(booksData[i].img, function (texture) {
          texture.flipY = false;

          books[i].children[4].material.map = texture;
          books[i].children[4].material.map.anisotropy =
            renderer.capabilities.getMaxAnisotropy();
          books[i].children[4].material.map.needsUpdate = true;

          books[i].children[5].material.map = texture;
          books[i].children[5].material.map.anisotropy =
            renderer.capabilities.getMaxAnisotropy();
          books[i].children[5].material.map.needsUpdate = true;
        });
      }

      // for (let i=0; i<6; i++){
      //     interactions.push(books[i])
      // }

      gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Group
      gltf.scenes; // Array<THREE.Group>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object
    },
    // called while loading is progressing
    function (xhr) {
      // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened ", error);
    }
  );

  // GLTFloader.load(
  //     // resource URL
  //     'models/platform.glb',
  //     // called when the resource is loaded
  //     function ( gltf ) {
  //
  //         platform = gltf.scene;
  //         // platform.position.z = -3200;
  //         platform.position.y = -120;
  //         // platform.rotation.x = -Math.PI/180*6;
  //         platform.scale.set(1.4,1.4,1.4);
  //         platform.children[0].children[0].material.emissive.r = 0;
  //         platform.children[0].children[0].material.emissive.g = 0.8745;
  //         platform.children[0].children[0].material.emissive.b = 0.9058;
  //         booksContainer.add(platform)
  //         console.log('platform',platform)
  //
  //
  //     },
  //     // called while loading is progressing
  //     function ( xhr ) {
  //
  //         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  //
  //     },
  //     // called when loading has errors
  //     function ( error ) {
  //
  //         console.log( 'An error happened' );
  //
  //     }
  // );

  smokeTexture = new THREE.TextureLoader().load("tex/Smoke-Element.png");
  smokeMaterial = new THREE.MeshLambertMaterial({
    color: 0x0181cd,
    map: smokeTexture,
    transparent: true,
    opacity: 0.2,
    blending: THREE.AdditiveBlending,
  });
  smokeGeo = new THREE.PlaneGeometry(300, 300);

  scene.add(particleSystem);

  for (let p = 0; p < 250; p++) {
    let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    if (p < 150) {
      particle.position.set(
        Math.random() * 1000 - 500,
        Math.random() * 300 - 150,
        -Math.random() * 2000 - 200
      );
    } else {
      particle.position.set(
        Math.random() * 1400 - 700,
        Math.random() * 300 - 150,
        -Math.random() * 2000 - 4000
      );
    }
    particle.rotation.z = Math.random() * Math.PI * 2;
    particleSystem.add(particle);
    smokeParticles.push(particle);
  }

  let particleGeometry = new THREE.BufferGeometry();
  let particleMaterial = new THREE.PointsMaterial({ size: 0.005 });

  let starParticleCount = 1000;

  let particlePositions = new Float32Array(starParticleCount * 3);

  for (let p = 0; p < starParticleCount; p++) {
    let y = Math.random();
    let radius = Math.abs(y - 0.5) * 2 * 0.8 + 0.2;
    let x = (Math.random() * 2 - 1) * radius;
    let z = (Math.random() * 2 - 1) * radius;

    particlePositions[p * 3 + 0] = x * 100;
    particlePositions[p * 3 + 1] = y * 300 - 150;
    particlePositions[p * 3 + 2] = z * 100;
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
  );

  starParticleSystem = new THREE.Points(particleGeometry, particleMaterial);
  starParticleSystem.position.set(0, 0, -3200);
  starParticleSystem.geometry.setDrawRange(0, 0);
  currentlyDrawnStars = 0;
  scene.add(starParticleSystem);

  let particleTexture = new THREE.TextureLoader().load("tex/particle.png");

  objLoader.load("models/VP.obj", function (object3d) {
    geometry = new THREE.Geometry();
    startGeometry = new THREE.Geometry();
    let color = new THREE.Color();

    object3d.scale.set(0.1, 0.1, 0.1);

    object3d.traverse(function (child) {
      // let probability = Math.random();

      if (child.geometry !== undefined) {
        let geom = child.geometry;
        let vertices = geom.vertices;

        let distance = 120;

        for (let i = 0; i < vertices.length; i++) {
          let vertex = new THREE.Vector3();
          vertex.x = vertices[i].x;
          vertex.y = vertices[i].y + deltaY;
          vertex.z = vertices[i].z;

          let tmp_vertex = new THREE.Vector3();
          let theta = THREE.Math.randFloatSpread(360);
          let phi = THREE.Math.randFloatSpread(360);

          tmp_vertex.x = distance * Math.sin(theta) * Math.cos(phi);
          tmp_vertex.y = distance * Math.sin(theta) * Math.sin(phi);
          tmp_vertex.z = distance * Math.cos(theta);

          color.setRGB(1, 1, 1);
          colors.push(color.r, color.g, color.b);

          geometry.vertices.push(tmp_vertex);
          startGeometry.vertices.push(vertex);
        }
      }
    });

    let material2 = new THREE.PointsMaterial({
      color: 0x3168e2,
      size: 6,
      sizeAttenuation: false,
      map: particleTexture,
      alphaTest: 0.5,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    // let material2 = new THREE.PointsMaterial( { color: 0x33B8FF, size: 3, sizeAttenuation: false, map: generateSprite(), alphaTest: 0.5, transparent: true } );
    plus = new THREE.Points(geometry, material2);
    plus.frustumCulled = false;
    plus.position.y = 20;
    scene.add(plus);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x041623, 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  canvas1.appendChild(renderer.domElement);
  // renderer.autoClear = false;

  document.addEventListener("mousedown", onDocumentMouseDown, false);
  document.addEventListener("mousemove", onDocumentMouseMove, false);
  window.addEventListener("resize", onWindowResize, false);
}

function modRound(value, precision) {
  let precision_number = Math.pow(10, precision);
  return Math.round(value * precision_number) / precision_number;
}
function checkWindowWidth() {
  camDeltaY = 0;
  camDeltaZ = 0;

  // if (window.innerWidth>640){
  //     camDeltaY = 0;
  //     camDeltaZ = 0;
  // } else {
  //     camDeltaY = 150;
  //     camDeltaZ = 200;
  // }
}
function onWindowResize() {
  checkWindowWidth();

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
function onDocumentMouseDown(e) {
  if (clicksEnabled && hoversEnabled) {
    if (INTERSECTED) {
      moveSideButtonsBack();

      currentBook = INTERSECTED;

      // booksContainer.rotation.y = -INTERSECTED.angle;

      let cpA = { rotX: booksContainer.rotation.y };
      let tpA = { rotX: -currentBook.angle };
      let tween = new TWEEN.Tween(cpA).to(tpA, 800);
      tween.easing(TWEEN.Easing.Quartic.Out);
      tween.onUpdate(function () {
        booksContainer.rotation.y = cpA.rotX;
        clicksEnabled = false;
        hoversEnabled = false;
      });
      tween.start();

      rotationCubeDelta = 0;
      shutThePlane(0.8);

      // if (window.innerWidth<640){
      //     $('.close').css('top','30px');
      //     $('.close').css('right','10px');
      // } else {
      //     $('.close').css('top','90px');
      // }

      bringForward(currentBook.parent, currentBook.angle);

      window.setTimeout(function () {
        // booksContainer.rotation.y = -INTERSECTED.angle;

        shutThePlane(0.8);

        // bringForward(currentBook.parent, currentBook.angle);

        if (window.innerWidth < 640) {
          $(".close").css("top", "30px").css("right", "10px");
        } else {
          $(".close").css("top", "90px");
        }
        $(".list-container")
          .css("display", "inline-block")
          .css("transform", "translate3d(0, -0px, 0)")
          .css("opacity", "1");
        $(".description-section")
          .css("transform", "translate3d(0, 0, 0)")
          .css("opacity", "1");
        $("#header-element").html(currentBook.name);
        $(".list-header").html(
          '<div class="cont"><div class="actual"><div class="header">' +
            currentBook.name +
            "</div></div></div>"
        );
        $(".main-container").html(currentBook.content);
        $("#video-container").html();
        $("#publish-date").html(currentBook.release);
        $("#pages").html(currentBook.pages);
        document.getElementById("order-button-ref").href =
          currentBook.orderLink;
      }, 810);
    }
  }
}

function animate() {
  delta = clock.getDelta();

  renderer.render(scene, camera);

  if (cubeRotationAllowed) {
    cubeGroup.rotation.y += 0.004 * 144 * delta;
    if (cubeGroup.rotation.y > Math.PI * 2) {
      cubeGroup.rotation.y = 0;
    }
  }
  if (test == 0.2) {
    lightHelper.update();
    shadowCameraHelper.update();
  }

  // fade in star particles in the center
  if (flyInComplete && currentlyDrawnStars < starParticleCount) {
    currentlyDrawnStars += Math.ceil((starParticleCount / 10) * delta);
    currentlyDrawnStars = Math.min(currentlyDrawnStars, starParticleCount);
    starParticleSystem.geometry.setDrawRange(0, currentlyDrawnStars);
  }

  // update rotation
  booksContainer.rotation.y -= rotationCubeDelta * delta;
  starParticleSystem.rotation.y -= rotationCubeDelta * delta;

  // sinusPlane.rotation.x += 0.001;
  // sinusPlane.rotation.z += 0.001;

  planePBG2.rotation.z += 0.002 * 144 * delta;
  planePBG3.rotation.z += 0.002 * 144 * delta;

  checkIntersections();

  evolveSmoke();
  updateMorphAnimation();
  TWEEN.update();
  requestAnimationFrame(animate);
}
function shutThePlane(opa) {
  let cpA = { opacity: planeShutter.material.opacity };
  let tpA = { opacity: opa };
  let tween = new TWEEN.Tween(cpA).to(tpA, 600);
  // tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    planeShutter.material.opacity = cpA.opacity;
  });
  tween.start();
}
function rotateElem(elem, angle) {
  let cpA = { rotX: elem.rotation.x };
  let tpA = { rotX: angle };
  let tween = new TWEEN.Tween(cpA).to(tpA, 600);
  // tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    elem.rotation.x = cpA.rotX;
  });
  tween.start();
}
function bringForward(elem, angle) {
  clicksEnabled = false;
  hoversEnabled = false;
  $("html,body").css("cursor", "default");
  // console.log('MOVING!')

  prevElemValues = {
    posX: elem.position.x,
    posY: elem.position.y,
    posZ: elem.position.z,
    rotCover: elem.children[5].rotation.z,
  };

  oldValues = {
    posX: elem.position.x,
    posY: elem.position.y,
    posZ: elem.position.z,
    rotCover: elem.children[5].rotation.z,
  };

  let posX = Math.sin(angle) * (radius + 300);
  let posY = elem.position.y;
  let posZ = Math.cos(angle) * (radius + 300);

  let cpA = prevElemValues;
  let tpA = {
    posX: posX,
    posY: posY,
    posZ: posZ,
    rotCover: (-Math.PI / 180) * 180,
  };
  let tween = new TWEEN.Tween(cpA).to(tpA, 1000 * test);
  tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    elem.position.set(cpA.posX, cpA.posY, cpA.posZ);
    elem.children[5].rotation.z = cpA.rotCover;
  });
  tween.start();

  tween.onComplete(function () {
    let myVideo = document.getElementById("info-video");
    // myVideo.play();
  });
}
function sendBackward(elem) {
  // console.log(elem)

  let posX = Math.sin(elem.children[6].angle) * radius;
  let posY = elem.position.y;
  let posZ = Math.cos(elem.children[6].angle) * radius;

  let cpA = {
    posX: elem.position.x,
    posY: elem.position.y,
    posZ: elem.position.z,
    rotCover: elem.children[6].rotation.z,
  };
  let tpA = { posX: posX, posY: posY, posZ: posZ, rotCover: 0 };
  let tween = new TWEEN.Tween(cpA).to(tpA, 300 * test);
  tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    elem.position.set(cpA.posX, cpA.posY, cpA.posZ);
    elem.children[5].rotation.z = cpA.rotCover;
  });
  tween.start();

  tween.onComplete(function () {
    $(".list-container").css("display", "none");
  });

  clicksEnabled = true;
  hoversEnabled = true;
}
function evolveSmoke() {
  let sp = smokeParticles.length;
  while (sp--) {
    if (sp % 2) {
      smokeParticles[sp].rotation.z += delta * 0.3;
    } else {
      smokeParticles[sp].rotation.z -= delta * 0.3;
    }
  }
}
function updateMorphAnimation() {
  if (!morphAnimationDone) {
    let frameTime = Date.now() - lastMophAnimUpdateMS;
    lastMophAnimUpdateMS = Date.now();

    plus.geometry.verticesNeedUpdate = true;

    let transitionDone = true;
    for (let i = 0; i < geometry.vertices.length; i++) {
      let dAnimationProgress = Math.min(frameTime / animationTimeMS[i], 1);
      animationTimeMS[i] -= frameTime;

      let CG = {
        x: modRound(geometry.vertices[i].x, 8),
        y: modRound(geometry.vertices[i].y, 8),
        z: modRound(geometry.vertices[i].z, 8),
      };

      let OG = {
        x: modRound(targetGeom.vertices[i].x, 8),
        y: modRound(targetGeom.vertices[i].y, 8),
        z: modRound(targetGeom.vertices[i].z, 8),
      };

      morphedVertices[i] = morphedVertices[i] || {};

      ["x", "y", "z"].forEach(function (dim) {
        if (Math.abs(CG[dim] - OG[dim]) !== 0) {
          if (CG[dim] < OG[dim]) {
            geometry.vertices[i][dim] +=
              (OG[dim] - CG[dim]) * dAnimationProgress;
          } else {
            geometry.vertices[i][dim] -=
              (CG[dim] - OG[dim]) * dAnimationProgress;
          }
          transitionDone = false;
        } else {
          morphedVertices[i][dim] = true;
        }
      });
    }

    if (transitionDone) morphAnimationDone = true;
  }
}

// harmony must be 0-1
function morphGeometry(
  targetGeometry,
  targetRotation = null,
  durationMS = 1000,
  harmony = 0.8
) {
  if (targetGeometry === targetGeom) return;

  targetGeom = targetGeometry;
  morphAnimationDone = false;

  if (animationTimeMS.length !== geometry.vertices.length)
    animationTimeMS.length = geometry.vertices.length;
  for (let i = 0; i < geometry.vertices.length; i++)
    animationTimeMS[i] = durationMS * (1 - (1 - harmony) * Math.random());
  lastMophAnimUpdateMS = Date.now();

  if (targetRotation !== null) {
    let rot = { r: plus.rotation.y };
    let tween = new TWEEN.Tween(rot).to({ r: targetRotation }, durationMS);
    tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {
      plus.rotation.y = rot.r;
    });
    tween.start();
  }
}
function checkIntersections() {
  // find intersections
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(interactions);

  if (hoversEnabled) {
    if (intersects.length > 0) {
      // console.log(INTERSECTED.name)

      if (INTERSECTED != intersects[0].object) {
        $("html,body").css("cursor", "pointer");
        INTERSECTED = intersects[0].object;

        // console.log(INTERSECTED.name);

        for (let i = 0; i < interactions.length; i++) {
          interactions[i].material.opacity = 0;
        }
        INTERSECTED.material.opacity = 0.1;
      }
    } else {
      if (INTERSECTED) {
        INTERSECTED.material.opacity = 0;
      }

      INTERSECTED = null;

      $(".popup").css("display", "none");
      $("html,body").css("cursor", "default");
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
// function calcPlaneTransforms(planeWidth, planeHeight, planeCount, levelCount, posX, posZ, posY, paddingX, paddingY, rowIndex, level, rotation=0)
// {
//     let angularIncrement = 2 * Math.PI / planeCount;
//     let radius = (planeWidth + paddingX) / (2 * Math.sin(angularIncrement/2));
//     rotation += angularIncrement * rowIndex;
//
//     let position = new THREE.Vector3();
//
//     position.x = Math.sin(rotation) * radius + posX;
//     position.z = Math.cos(rotation) * radius + posZ;
//     position.y = (planeHeight + paddingY) * (level - levelCount / 2) + posY;
//
//     return {rotation: new THREE.Vector3(0, rotation, 0), position: position, radius};
// }

$("body").on("click", ".side-button", function () {
  let clickedId = $(this).attr("id");

  let quadrant = clickedId.substr(clickedId.length - 1);

  console.log(clickedId);
  if (
    clickedId !== "side-button-4" &&
    clickedId !== "side-button-5" &&
    clickedId !== "side-button-6" &&
    clickedId !== "side-button-7"
  ) {
    cubeRotationAllowed = false;
    rotateCube(quadrant);
  }
});

$("body").on("click", ".close", function () {
  $(".close").css("top", "-90px");
  for (let i = 0; i < interactions.length; i++)
    (function (i) {
      window.setTimeout(function () {
        rotateElem(interactions[i].parent, 0);
      }, i * 50);
    })(i);
  clicksEnabled = true;
  hoversEnabled = true;

  rotationCubeDelta = ROTATION_SPEED;

  shutThePlane(0);

  $(".list-container")
    .css("transform", "translate3d(0, -60px, 0)")
    .css("opacity", "0");
  $(".description-section")
    .css("transform", "translate3d(320px, 0, 0)")
    .css("opacity", "0");
  sendBackward(currentBook.parent);
  moveSideButtons();
});

function rotateCube(q) {
  interactions = [];

  let rotateAngle;

  if (q == 0) {
    rotateAngle = 0;
  }
  if (q == 1) {
    rotateAngle = -Math.PI / 2;
  }
  if (q == 2) {
    rotateAngle = Math.PI / 2;
  }
  if (q == 3) {
    rotateAngle = Math.PI;
  }

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
  // console.log(interactions)

  function changeBrightness(obj, opa) {
    let cpA = { opacity: obj.material.opacity };
    let tpA = { opacity: opa };
    let tween = new TWEEN.Tween(cpA).to(tpA, 3000);
    tween.easing(TWEEN.Easing.Quartic.Out);
    tween.onUpdate(function () {
      obj.material.opacity = cpA.opacity;
    });
    tween.start();
  }

  let cpA = {
    rot: cubeGroup.rotation.y,
    camPosY: camera.position.y,
    camPosZ: camera.position.z,
  };
  let tpA = {
    rot: rotateAngle,
    camPosY: 35 + camDeltaY,
    camPosZ: -2700 + camDeltaZ,
  };
  let tween = new TWEEN.Tween(cpA).to(tpA, 2000);
  tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    clicksEnabled = false;

    cubeGroup.rotation.y = cpA.rot;
    camera.position.y = cpA.camPosY;
    camera.position.z = cpA.camPosZ;
  });
  tween.onComplete(function () {
    clicksEnabled = true;
  });
  tween.start();
}

// $('.side-button').click(function(){
//
// }

function returnPeriodicName(phrase) {
  let firstLetter;
  let secondLetter = "starting_value";
  if (phrase[0] !== " ") {
    firstLetter = phrase[0];
  } else {
    firstLetter = phrase[1];
  }
  for (let i = 0; i < phrase.length; i++) {
    if (i > 1) {
      if (phrase[i] == " " && secondLetter == "starting_value") {
        secondLetter = phrase[i + 1].toLowerCase();
      }
      if (
        checkCase(phrase[i]) == "upper case" &&
        secondLetter == "starting_value" &&
        phrase[i].toUpperCase() != phrase[i].toLowerCase()
      ) {
        secondLetter = phrase[i].toLowerCase();
      }
    }
  }
  if (secondLetter == "starting_value") {
    secondLetter = phrase[1];
  }
  return firstLetter + secondLetter;
}

function checkCase(ch) {
  if (!isNaN(ch * 1)) {
    return "ch is numeric";
  } else {
    if (ch == ch.toUpperCase()) {
      return "upper case";
    }
    if (ch == ch.toLowerCase()) {
      return "lower case";
    }
  }
}

function letsFly() {
  // console.log('enter');

  let duration = 5000 * test;
  let cpA = { camPosZ: 220, camPosY: 0, opacity: 0, camLookY: 0 };
  let tpA = {
    camPosZ: -2650 + camDeltaZ,
    camPosY: 45 + camDeltaY,
    opacity: 1,
    camLookY: -70,
  };
  let tween = new TWEEN.Tween(cpA).to(tpA, duration);
  tween.easing(TWEEN.Easing.Quartic.InOut);
  tween.onUpdate(function () {
    camera.position.z = cpA.camPosZ;
    camera.position.y = cpA.camPosY;
    camera.lookAt(new THREE.Vector3(0, cpA.camLookY, -4200));
    // sphere.material.opacity = cpA.opacity;
    // sphere.position.z = cpA.camPosZ-265;
    // let scaleFactor = 2-cpA.opacity;
    // sphere.scale.set(scaleFactor,scaleFactor,scaleFactor)
    // for (var i=0;i<cubeGroup.children.length;i++){
    //     for (var j=0;j<cubeGroup.children[i].children.length;j++){
    //         cubeGroup.children[i].children[j].material.opacity = cpA.opacity;
    //         cubeGroup.children[i].children[j].material.opacity = cpA.opacity;
    //         cubeGroup.children[i].children[j].material.opacity = cpA.opacity;
    //     }
    // }
  });

  let cpA2 = { posY: 180 };
  let tpA2 = { posY: -240 };
  let tween2 = new TWEEN.Tween(cpA2).to(tpA2, 2400);
  tween2.easing(TWEEN.Easing.Quartic.InOut);
  tween2.onUpdate(function () {
    $(".hero").css("bottom", cpA2.posY + "px");
  });

  // let cpAS = {i:0};
  // let tpAS = {i:6000};
  // let tweenS = new TWEEN.Tween(cpAS).to(tpAS, 5000*test);
  // tweenS.onUpdate(function () {
  //     if (cpAS.i>100){ // pause before actual fly
  //         launchMorph();
  //         oneTime = true;
  //     }
  // });
  //
  // tweenS.start();
  // tweenS.onComplete(function(){
  // });

  tween.start();
  tween2.start();
  let cpA3 = { i: 0 };
  let tpA3 = { i: 0 };
  let tween3 = new TWEEN.Tween(cpA3).to(tpA3, 1200);
  tween3.onUpdate(function () {
    // sdfsdf
  });
  tween3.onComplete(function () {
    flyInComplete = true;
  });

  tween.onComplete(function () {
    tween3.start();
    moveSideButtons();
    clicksEnabled = true;
    hoversEnabled = true;
  });

  function launchMorph() {
    if (!oneTime) {
      console.log("ONE TIME GOGO");
      morphGeometry(startGeometry, Math.PI, 4000);
    }
  }
}

function moveSideButtons() {
  $(".side-buttons").css("display", "block");
  $(".side-buttons2").css("display", "block");
  for (let i = 0; i < 8; i++)
    (function (i) {
      window.setTimeout(function () {
        translateObject(i, -120, 0, 0, 1, 90, 0);
      }, i * 200);
    })(i);
}

function moveSideButtonsBack() {
  for (let i = 0; i < 4; i++)
    (function (i) {
      window.setTimeout(function () {
        translateObject(i, 0, -120, 1, 0, 0, 90);
      }, i * 200);
    })(i);
}

function translateObject(obj, from, to, opa1, opa2, rot1, rot2) {
  let cpA = { posX: from, opacity: opa1, rotX: rot1 };
  let tpA = { posX: to, opacity: opa2, rotX: rot2 };
  let tween = new TWEEN.Tween(cpA).to(tpA, 1200);
  tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    $("#side-button-" + obj).css(
      "transform",
      "translate3d(0, " +
        cpA.posX +
        "px, 0) perspective(200px) rotateX(" +
        cpA.rotX +
        "deg)"
    );
    $("#side-button-" + obj).css("opacity", cpA.opacity);
  });
  tween.start();
  tween.onComplete(function () {
    if (obj == 3 && opa2 == 0) {
      $(".side-buttons").css("display", "none");
    }
  });
}
