function mainGalaxy(){

	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();


	var menuHidden = true;
	var data;
	
	var chunkSize = 4;
	var textureArray = [];
	var itemCount;
	var maxCap = 1800000000;
	var colors = [
		'FE72A1',
		'6E90FE',
		'D35AFF',
		'7ADED1',
		'ADFD73'
	]
	var options2 = {
		capitalizationFilterEnabled: false,
		showLogos: true
	};

	var companiesArray = [];

	var hoversEnabled = true;
	var clicksEnabled = true;

	var spriteArray = [];

	var smallDotSize = 0.003;
	var bigDotSize = 0.007;

	var bigDotSize = 0.9;

	var prevObject, ourObject, shutter;

	var interactions = [];
	var spriteMaterial = [];

	var bar = 0;
	var barwidth = 250;
	var graph = new THREE.Group();
	var torusGroup = new THREE.Group();

	var assets_loaded = false;

	var camera, scene, raycaster, renderer, container;
	var mouse = new THREE.Vector2(), INTERSECTED;

	var textures = [];
	getJson();
	var urlToLoad = 'https://platform.dkv.global/api/aa_v2/filter/23/comps-1/?sort=fund_total&per_page=500'
	function getJson() {

		$.getJSON('finished.json')
		.done(function(info){

			console.log('NEW database: ',info);
			data = info;
			galaxyInit();

		});
	}

	function onCompanyChange(company) {
		if (!company.excluded) {
			console.log('FILTERED COMPANY CHANGED: ', company);
		}
	}	

	function galaxyInit() {
		container = document.getElementById("container");

		// scene
		scene = new THREE.Scene();

		// camera
		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100000 );
		camera.position.set(0,0,60);

		scene.add( camera );

		renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setClearColor( 0x000000, 0 );
		renderer.setPixelRatio( window.devicePixelRatio );

		container.appendChild( renderer.domElement );

		var geometry = new THREE.PlaneGeometry( 100, 100, 32 );
		var material = new THREE.MeshPhongMaterial( {color: 0x111111, side: THREE.DoubleSide} );
		var plane = new THREE.Mesh( geometry, material );
		plane.position.z = -25;

		var light = new THREE.PointLight( 0xFE72A1, 1, 60 );
		light.position.set( 15, -8, -10 );
		scene.add( light );

		var geometry = new THREE.SphereGeometry( 0.2, 8, 8 );
		var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
		lock = new THREE.Mesh( geometry, material );
		// lock.position.y = 850;
		lock.visible = false;
		graph.add( lock );

		var geometry = new THREE.PlaneGeometry( 1000, 1000, 8 );
		var material = new THREE.MeshBasicMaterial( { color: 0x505050, transparent: true, opacity: 0 } );
		shutter = new THREE.Mesh( geometry, material );
		shutter.position.z = 0.05;
		shutter.visible = true;
		graph.add( shutter );

		
		// graph.rotation.y = Math.PI/180*90;
		scene.add(graph);
		
		standardMap = createTexture( '#ffffff', '#111111' );

		var sectorCount = dataObject.sectors.length;

		// Object.keys(data.sectors).forEach((sector, ix) => createTorus(ix));
		
		torusGroup.rotation.y = Math.PI;
		// scene.add(torusGroup);

		const sortBySector = {};

		function findInSector(id) {
			let resultIndex;
			Object.keys(sortBySector).forEach((sector, ix) => {
				const company = sortBySector[sector].find(item => item.id === id);
				if (company) {
					resultIndex = ix;
				}
			})
			return resultIndex;
		}

		// function createTorus(i){
		// 	var geometry = new THREE.TorusGeometry( 15, 0.2, 2, 32, Math.PI*2/sectorCount-0.1 );
		// 	var material = new THREE.MeshBasicMaterial( { color: 0x1D1D1D } );
		// 	// material.color.setHex('0x'+colors[i]);
		// 	var torus = new THREE.Mesh( geometry, material );
		// 	torus.color = '0x'+colors[i];
		// 	torus.type = 'torus';
		// 	torus.sector = i+1;
		// 	torus.rotation.z = Math.PI*2/sectorCount*(i+1)+Math.PI/2+0.04;
		// 	torus.position.z = -25;
		// 	torusGroup.add( torus );
		// 	interactions.push(torus);

		// 	var geometry2 = new THREE.TorusGeometry( 8.8, 6, 2, 32, Math.PI*2/sectorCount );
		// 	var material2 = new THREE.MeshBasicMaterial( { color: 0x1D1D1D, transparent:true, opacity:0.4 } );
		// 	// material.color.setHex('0x'+colors[i]);
		// 	var torus2 = new THREE.Mesh( geometry2, material2 );
		// 	torus2.color = '0x'+colors[i];
		// 	torus2.type = 'torus2';
		// 	torus2.sector = i+1;
		// 	torus2.rotation.z = Math.PI*2/sectorCount*(i+1)+Math.PI/2+0.04;
		// 	torus2.position.z = -25;
		// 	torusGroup.add( torus2 );
		// 	interactions.push(torus2);

		// }

		dataObject.sectors.forEach((sector, ix) => {
			spriteMaterial[ix] = new THREE.SpriteMaterial( { map: standardMap, sizeAttenuation: false } );
			spriteMaterial[ix].color.setHex('0x'+sector.baseColor);
			spriteMaterial[ix].colorToReturn = sector.baseColor;
			console.log('SECTOR COLOR: ', sector.color);
		})

		dataObject.companies.forEach(item => {

			var companyGroup = new THREE.Group;
			companyGroup.companyId = item.id;
			companiesArray.push(companyGroup);
			// console.log(companyGroup.companyId);
			var sector = findInSector(item.id)

			if (data.deg) {
				var angle = data.deg;
			} else {
				var angle = Math.random()*Math.PI*2/sectorCount+Math.PI*2/sectorCount*sector;
			}
			var capitalization = Math.random()*maxCap+200000;

			if (item.image) {
				spriteMap = new THREE.TextureLoader().load( "img/storage/logos"+item.image , function(texture) {
					// texture.minFilter = THREE.LinearFilter;
					aspectRatio = texture.image.width / texture.image.height;
					if (aspectRatio > 1) {
						item.companyLogo.scale.set(1*0.7, 1 / aspectRatio*0.7, 1);
					} else if (aspectRatio < 1) {
						item.companyLogo.scale.set(aspectRatio*0.7, 1*0.7, 1);
					}
				});
			} else {
				var spriteMap = textureArray[i];
			}
			
			if ( options2.showLogos ) {
				dotSize = bigDotSize;
			} else {
				dotSize = smallDotSize;
			}
			
			var spriteMaterial2 = new THREE.SpriteMaterial( { map: standardMap, sizeAttenuation: true, depthTest: true } );
			spriteMaterial2.color.setHex('0xffffff');
			var company = new THREE.Sprite( spriteMaterial2 );
			company.scale.set(dotSize, dotSize, 1);
			// company.scale.set(1, 1, 1);
			company.angle = angle;
			company.type = 'company';
			// company.sector = findInSector(item.id);
			company.sector = item.sector;
			company.name = item.name;
			for (var i = 0;i<dataObject.sectors.length;i++) {
				if (company.sector == dataObject.sectors[i].id){
					var outerColor = '0x'+dataObject.sectors[i].baseColor;
				}
			}
			company.zoomable = true;
			company.name = item.name;
			// console.log(company.name);
			company.capitalization = capitalization;
			company.pos = {x:item.x,y:item.y};
			// console.log(company.material);
			// var rad = capitalization/maxCap*20;
			var outerRingMat = new THREE.SpriteMaterial( { map: new THREE.TextureLoader().load("tex/outer-ring.png"), color: 0xffffff, sizeAttenuation: true, transparent: true, depthTest: true } );
			var outerRing = new THREE.Sprite( outerRingMat );
			outerRing.scale.set(dotSize*1.15, dotSize*1.15, 1);
			outerRingMat.color.setHex(outerColor);
			
			// if (item.radius) {
			// 	var rad = item.radius/100
			// } else {
			// 	var rad = Math.random()*8;
			// }
			
			// outer sphere
			// var rad =8;
			
			
			// var rad = Math.random()*16 +2;
			// var sphericalCoords = new THREE.Spherical();
			// sphericalCoords.set(  rad+2, company.angle, 0 );
			// companyGroup.position.setFromSpherical( sphericalCoords );
			companyGroup.position.set(item.x/100, item.y/100, 0+Math.random()*0.01);
			// outerRing.position.setFromSpherical( sphericalCoords );
			company.position.z = company.position.z-0.001;
			// outerRing.position.z = outerRing.position.z+0.02;
			// company.position.x = capitalization/maxCap*50-25;

			graph.add( companyGroup );
			companyGroup.add( company );
			companyGroup.add( outerRing );
			// console.log(company);
			interactions.push( company );
			
			var companyLogoMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff, sizeAttenuation: true, transparent: true, depthTest: true } );
			// var companyLogoMaterial = new THREE.MeshStandardMaterial( { map: spriteMap, color: 0xffffff, transparent: true, side:THREE.DoubleSide } );

			// var geometry = new THREE.CircleBufferGeometry( 0.5, 32 );
			// var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
			// item.companyLogo = new THREE.Mesh( geometry, companyLogoMaterial );
			// item.companyLogo.rotation.y = -Math.PI/180*90;

			item.companyLogo = new THREE.Sprite( companyLogoMaterial );
			if ( options2.showLogos ) {
				item.companyLogo.visible = true;
			} else {
				item.companyLogo.visible = false;
			}
			company.add(item.companyLogo);
			
			
		})


		THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {

		    bar = Math.floor( barwidth * loaded / total );
		    $("#bar").css("width", ""+bar+"px");
		    // console.log(loaded/total);
		    if (loaded/total == 1) {
		        $('#progressbar').fadeOut('300');
		        $( "#progress" ).fadeOut('300');
		        $(".loader2").fadeOut("slow");
		        animate();

		    }
		};
		var onProgress = function ( xhr ) {
		    if ( xhr.lengthComputable ) {
		        //var percentComplete = xhr.loaded / xhr.total * 100;
		        //console.log( Math.round(percentComplete, 2) + '% downloaded' );
		    }
		};
		var onError = function ( xhr ) { };
		// var objLoader = new THREE.OBJLoader();

		// light
		var ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
		scene.add( ambientLight );

		raycaster = new THREE.Raycaster();

		// document.addEventListener('mousewheel', onDocumentMouseWheel, false);

		window.addEventListener( 'resize', onWindowResize, false );
		document.addEventListener('mousedown', onDocumentMouseDown, false);
		document.addEventListener('mousemove', onDocumentMouseMove, false);
		
		if ( options2.capitalizationFilterEnabled ) {
			updateLogos();
		}
	}

	// function properZoom(event) {



	// 		console.log('wheel')
	// 		var factor = 1.5;
	// 		var mX = (event.clientX / jQuery(container).width()) * 2 - 1;
	// 		var mY = -(event.clientY / jQuery(container).height()) * 2 + 1;
	// 		var vector = new THREE.Vector3(mX, mY, 0.1);
	
	// 		vector.unproject(camera);
	// 		vector.sub(camera.position);
	// 		if (event.deltaY < 0) {
	// 			camera.position.addVectors(camera.position, vector.setLength(factor));
	// 			controls.target.addVectors(controls.target, vector.setLength(factor));
	// 		} else {
	// 			camera.position.subVectors(camera.position, vector.setLength(factor));
	// 			controls.target.subVectors(controls.target, vector.setLength(factor));
	// 		}

	// }
	//
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}
	function onDocumentMouseDown(e) {
		// console.log('mouse pressed');
		if (clicksEnabled){
			if (INTERSECTED) {
				hoversEnabled = false;
				clicksEnabled = false;
				var companyName = INTERSECTED.name;
	
				
				ourObject = INTERSECTED.parent;
				$('html,body').css('cursor', 'default');
	
				// ourObject.scale.set(2,2,1);
				console.log('mouse pressed', INTERSECTED.parent.position, ourObject);
				
				var cpA = { x: graph.position.x, y: graph.position.y, z: graph.position.z };
				var tpA = { x: -INTERSECTED.parent.position.x, y: -INTERSECTED.parent.position.y, z:50 };
				var tween = new TWEEN.Tween(cpA).to(tpA, 1200);
				tween.easing(TWEEN.Easing.Quartic.Out);
				tween.onUpdate(function () {
					graph.position.x = cpA.x;
					graph.position.y = cpA.y;
					graph.position.z = cpA.z;
				});
				tween.start();
				tween.onComplete(function(){
					console.log('tw ')
					tween2.start();
					ourObject.position.z = 0.1;
					$('.popup').css('display','none');
					$('.centered').fadeOut(300);
				})
	
				var cpA2 = { scale: ourObject.scale.x, opacity: 0 };
				var tpA2 = { scale: 2, opacity: 0.9 };
				var tween2 = new TWEEN.Tween(cpA2).to(tpA2, 400);
				tween2.easing(TWEEN.Easing.Quartic.Out);
				tween2.onUpdate(function () {
					ourObject.scale.set(cpA2.scale,cpA2.scale,1);
					shutter.material.opacity = cpA2.opacity;
				});
				tween2.onComplete(function(){
					$('.company-popup').css('display','flex');
					// $('.company-popup').html(
					// 	'<div class="header">'+companyName+'</div>');
				})
				
			}
		}

	}
	function onDocumentMouseMove( event ) {
		event.preventDefault();
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	}
	function checkIntersections(){	
		// find intersections
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( interactions );
		if (hoversEnabled){
			if ( intersects.length > 0 ) {
				if ( INTERSECTED != intersects[ 0 ].object ) {
					if (prevObject){
						prevObject.scale.set(1,1,1);
						prevObject.position.z = 0+Math.random()*0.05;
					}
					INTERSECTED = intersects[ 0 ].object;
					// console.log(INTERSECTED,INTERSECTED.parent.children[0].excluded);
					if ((INTERSECTED.type=='company')&&(INTERSECTED.parent.visible)){

	
						lock.position.x = INTERSECTED.parent.position.x;
						lock.position.y = INTERSECTED.parent.position.y;
						$('.popup').css('display','block');
						$('.popup').html('<div class="cont"><div class="actual"><div class="header">'+INTERSECTED.name+'</div></div></div>');
	
						prevObject = INTERSECTED.parent;
	
						var cpA = { scale: INTERSECTED.parent.scale.x };
						var tpA = { scale: 1.2 };
						var tween = new TWEEN.Tween(cpA).to(tpA, 400);
						tween.easing(TWEEN.Easing.Quartic.Out);
						tween.onUpdate(function () {
							prevObject.scale.set(cpA.scale,cpA.scale,1);
						});
						tween.start();
	
	
						INTERSECTED.parent.position.z = INTERSECTED.parent.position.z+0.001;
						
						// console.log(INTERSECTED.parent.children[0].children[0].material.map.image.currentSrc);
	
						$('html,body').css('cursor', 'pointer');
	
					}
	
				}
			} else {
	
				if (prevObject){
	
					prevObject.position.z = 0;
	
					var cpA = { scale: prevObject.scale.x };
					var tpA = { scale: 1 };
					var tween = new TWEEN.Tween(cpA).to(tpA, 400);
					tween.easing(TWEEN.Easing.Quartic.Out);
					tween.onUpdate(function () {
						prevObject.scale.set(cpA.scale,cpA.scale,1);
					});
					tween.start();
	
				}
				INTERSECTED = null;			
				
				$('.popup').css('display','none');
				$('html,body').css('cursor', 'default');
	
			}
		}
	}
	// function onDocumentMouseMove(event) {
    //     // the following line would stop any other event handler from firing
    //     // (such as the mouse's TrackballControls)
    //     event.preventDefault();
    // //   console.log(INTERSECTED);
    //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    //     raycaster.setFromCamera(mouse, camera);

    //     if (INTERSECTED) {

    //         if (INTERSECTED.type == 'answer') {


	// 		}
	// 		if (INTERSECTED.type == 'company') {
	// 			console.log('Hovered company: ',INTERSECTED.name)

	// 		}
			
	// 		if (INTERSECTED.type == 'torus') {
	// 			var currentSector = INTERSECTED.sector;
	// 			returnSectorColor();
	// 			console.log(currentSector)
	// 			highLightSector(currentSector);
	// 			INTERSECTED.material.color.setHex(INTERSECTED.color);

	// 		}
	// 		if (INTERSECTED.type == 'torus2') {

	// 			var currentSector = INTERSECTED.sector;
	// 			returnSectorColor();
	// 			console.log(currentSector)
	// 			highLightSector(currentSector);
	// 			for ( var i = 0; i <torusGroup.children.length; i++){
	// 				if ((torusGroup.children[i].sector==INTERSECTED.sector)&&(torusGroup.children[i].type =='torus')){
	// 					torusGroup.children[i].material.color.setHex(torusGroup.children[i].color);
	// 				} else {
	// 					if (torusGroup.children[i].type =='torus'){
	// 						torusGroup.children[i].material.color.setHex(0x1D1D1D);
	// 					}
	// 				}
	// 			}

    //         }

    //     }

    //     var intersects = raycaster.intersectObjects(interactions);
    //     if (intersects.length > 0) {
    //         //   console.log(intersects[ 0 ].object);
    //         if (INTERSECTED != intersects[0].object) {
    //             if (INTERSECTED) INTERSECTED.material.opacity = 0;
    //             INTERSECTED = intersects[0].object;
    //             for (var i = 0; i < interactions.length; i++) {
	// 				if (INTERSECTED.type == 'torus') {

	// 					INTERSECTED.material.opacity = 1;
	// 				}
	// 				if (INTERSECTED.type == 'torus2') {
	// 					INTERSECTED.material.opacity = 0;
	// 				}
    //             }
    //             // INTERSECTED.material.opacity = 0.8;
    //             $('html,body').css('cursor', 'pointer');
    //         }
    //     } else {
    //         // console.log(INTERSECTED);

    //         if (INTERSECTED) {

	// 			// INTERSECTED.material.opacity = 1;

	// 			if (INTERSECTED.type == 'torus') {
	// 				INTERSECTED.material.color.setHex('0x1D1D1D');
	// 				returnSectorColor();
	// 			}

	// 			if (INTERSECTED.type == 'torus2') {
	// 				INTERSECTED.material.opacity = 0;
	// 				returnSectorColor();
	// 			}

    //         }

    //         $('html,body').css('cursor', 'default');
    //         INTERSECTED = null;
    //     }
    //     // if (interactions.type !== 'disabled') {


	// }
	function updateStickyDiv() {

		var pos = new THREE.Vector3();
		pos = pos.setFromMatrixPosition(lock.matrixWorld);
		pos.project(camera);
		
		var widthHalf = window.innerWidth / 2;
		var heightHalf = window.innerHeight / 2;
		
		pos.x = (pos.x * widthHalf) + widthHalf;
		pos.y = - (pos.y * heightHalf) + heightHalf;
		pos.z = 0;
	
		$('.popup').css('left',pos.x+'px');
		$('.popup').css('top',pos.y+'px');
	
	}
	function highLightSector(currentSector) {

		for ( var i = 0; i < spriteMaterial.length; i ++ ) {
			if ( currentSector !== i+1 ) {
				makeGrey(spriteMaterial[i]);
			}
		}

		// for ( var i = 0; i < itemCount; i ++ ) {
		// 	if (graph.children[i].sector !== currentSector) {
		// 		graph.children[i].material.color.setHex('0x3d3d3d');
		// 	}
		// }
	}
	function makeGrey(mat){
		var cpA = {cR: mat.color.r, cG: mat.color.g, cB: mat.color.b };
		var tpA = {cR: 61/255, cG: 61/255, cB: 61/255};
		var tween = new TWEEN.Tween(cpA).to(tpA, 300);
		// tween.easing(TWEEN.Easing.Quartic.Out);
		tween.onUpdate(function () {
			mat.color.r = cpA.cR;
			mat.color.g = cpA.cG;
			mat.color.b = cpA.cB;
		});
		tween.start();

	}
	function returnColor(mat){

		var colorToReturn = mat.colorToReturn;

		var rgba = hexToRgbA('#'+colorToReturn);

		var cpA = {cR: mat.color.r, cG: mat.color.g, cB: mat.color.b };
		var tpA = {cR: rgba.r/255, cG: rgba.g/255, cB: rgba.b/255};
		var tween = new TWEEN.Tween(cpA).to(tpA, 300);
		// tween.easing(TWEEN.Easing.Quartic.Out);
		tween.onUpdate(function () {
			mat.color.r = cpA.cR;
			mat.color.g = cpA.cG;
			mat.color.b = cpA.cB;
		});
		tween.start();

	}
	function returnSectorColor(){
		for ( var i = 0; i < spriteMaterial.length; i ++ ) {
			returnColor(spriteMaterial[i]);
		}
	}
	function createTexture( from, to ) {
		var canvas = document.createElement( 'canvas' );
		canvas.width = 64;
		canvas.height = 64;
		var context = canvas.getContext('2d');

		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;
		var radius = 32;
  
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = from;
		context.fill();

		// var transparent = 'transparent';

		// context.lineWidth = 5;
		// context.strokeStyle = to;
		// context.stroke();
		// var context = canvas.getContext( '2d' );
		// var gradient = context.createRadialGradient( 32, 32, 0, 32, 32, 32 );
		// gradient.addColorStop( 0.6, from );
		// gradient.addColorStop( 1, transparent );
		// context.fillStyle = gradient;
		// context.fillRect( 0, 0, canvas.width, canvas.height );



		var texture = new THREE.CanvasTexture( canvas );
		texture.transparent = true;
		texture.minFilter = THREE.LinearFilter;
		return texture;
	}

	// function updateLogos() {

	// 	var camZ = camera.position.z;
	// 	var camMin = controls.minDistance = 10;
	// 	var camMax = controls.maxDistance = 80;
	// 	var camRange = camMax - camMin;
	// 	var camRatio = 1-(camZ-camMin)/camRange;


	// 	for ( var i = 0; i < graph.children.length; i ++ ) {
	// 		obj = graph.children[i];
	// 		if ( graph.children[i].capitalization/maxCap < camRatio-0.1 ) {
	// 			graph.children[i].visible = false;
	// 		} else {
	// 			graph.children[i].visible = true;
	// 		}
	// 		if (( graph.children[i].capitalization/maxCap <= camRatio+0.1 ) && (graph.children[i].capitalization/maxCap >= camRatio-0.1)){
	// 			// graph.children[i].material.map = textureArray[i];
	// 			// graph.children[i].children[0].visible = true;
	// 			// graph.children[i].material.sizeAttenuation = true;
	// 			// graph.children[i].scale.set(0.05, 0.05, 1);
	// 			graph.children[i].children[0].visible = true;
				
	// 			if (obj.zoomable = true) {
	// 				zoomIn(obj);
	// 				obj.zoomed = true;
	// 			}
	// 		} else {
	// 			if ((obj.zoomed) || (obj.zoomable = true)) {
	// 				zoomOut(obj);
	// 			}
	// 			graph.children[i].children[0].visible = false;
	// 			// graph.children[i].material.map = standardMap;
	// 			// graph.children[i].children[0].visible = false;
	// 			// graph.children[i].scale.set(0.005, 0.005, 1);
	// 			// graph.children[i].material.sizeAttenuation = false;
	// 			// graph.children[i].material.color.setHex('0xFE72A1');
	// 		}
	// 	}


	// }

	function updateLogos() {

		var camZ = graph.position.z;
		var camMin = 80;
		var camMax = 10;
		var camRange = camMin - camMax;
		var camRatio = 1-(camZ)/camRange;

		console.log('camZ: ', camZ,camRatio);


		for ( var i = 0; i < graph.children.length; i ++ ) {
			obj = graph.children[i];
			if ( graph.children[i].capitalization/maxCap > camRatio-0.1 ) {
				graph.children[i].visible = true;
			} else {
				graph.children[i].visible = false;
			}
			if (( graph.children[i].capitalization/maxCap <= camRatio+0.1 ) && (graph.children[i].capitalization/maxCap >= camRatio-0.1)){
				// graph.children[i].material.map = textureArray[i];
				// graph.children[i].children[0].visible = true;
				// graph.children[i].material.sizeAttenuation = true;
				// graph.children[i].scale.set(0.05, 0.05, 1);
				graph.children[i].children[0].visible = true;
				
				if (obj.zoomable = true) {
					zoomIn(obj);
					obj.zoomed = true;
				}
			} else {
				if ((obj.zoomed) || (obj.zoomable = true)) {
					zoomOut(obj);
				}
				graph.children[i].children[0].visible = false;
				// graph.children[i].material.map = standardMap;
				// graph.children[i].children[0].visible = false;
				// graph.children[i].scale.set(0.005, 0.005, 1);
				// graph.children[i].material.sizeAttenuation = false;
				// graph.children[i].material.color.setHex('0xFE72A1');
			}
		}


	}
	function updateCompanyFilter(){
		for ( var i = 0; i < dataObject.companies.length; i ++ ) {
			for ( var j = 0; j < dataObject.companies.length; j ++ ) {
				if ( dataObject.companies[i].id == companiesArray[j].companyId  ){
					
					if ( dataObject.companies[i].excluded ){
						companiesArray[j].visible = false;
					} else {
						companiesArray[j].visible = true;
					}
				}
			}
		}
	}
	function zoomIn(obj){
		var cpA = {scale: obj.scale.x};
		var tpA = {scale: bigDotSize};
		var tween = new TWEEN.Tween(cpA).to(tpA, 1000);
		tween.easing(TWEEN.Easing.Quartic.Out);
		tween.onUpdate(function () {
			obj.zoomable = false;
			obj.scale.set(cpA.scale, cpA.scale, 1);


		});
		tween.start();
		tween.onComplete(function () {
			obj.zoomable = true;

		});
	}

	function zoomOut(obj){
		var cpA = {scale: obj.scale.x};
		var tpA = {scale: smallDotSize};
		var tween = new TWEEN.Tween(cpA).to(tpA, 1000);
		tween.easing(TWEEN.Easing.Quartic.Out);
		tween.onUpdate(function () {
			obj.zoomable = false;
			obj.scale.set(cpA.scale, cpA.scale, 1);


		});
		tween.start();
		tween.onComplete(function () {
			obj.zoomable = true;

		});
	}

	function animate() {

		TWEEN.update();
		checkIntersections();
		renderer.render( scene, camera );

		updateStickyDiv();

		requestAnimationFrame( animate );
	}

	$('html').bind('mousewheel', function(e){

			// properZoom(e);

			// console.log(mouse);

			if(e.originalEvent.wheelDelta /120 > 0) {
				if (graph.position.z<50){
					// graph.position.z +=2;

					// graph.position.x += -mouse.x;
					// graph.position.y += -mouse.y;

					var cpA = { x: graph.position.x, y: graph.position.y, z: graph.position.z };
					var tpA = { x: graph.position.x-mouse.x*4, y: graph.position.y-mouse.y*4, z: graph.position.z+7 };
					var tween = new TWEEN.Tween(cpA).to(tpA, 400);
					tween.easing(TWEEN.Easing.Quartic.Out);
					tween.onUpdate(function () {
						graph.position.x = cpA.x;
						graph.position.y = cpA.y;
						graph.position.z = cpA.z;
					});
					tween.start();
					
					// for (var i=0;i<interactions.length;i++){
					// 	if (interactions[i].type=='company'){
					// 		interactions[i].scale.set(interactions[i].scale.x+graph.position.z/20000,interactions[i].scale.y+graph.position.z/20000,1);
					// 		interactions[i].parent.children[1].scale.set(interactions[i].scale.x+graph.position.z/20000,interactions[i].scale.y+graph.position.z/20000,1);
					// 	}
					// }
				}
			}
			else{
				if (graph.position.z>0) {
					// graph.position.z -=2;

					// graph.position.x += mouse.x;
					// graph.position.y += mouse.y;

					var cpA = { x: graph.position.x, y: graph.position.y, z: graph.position.z };
					var tpA = { x: graph.position.x+mouse.x*4, y: graph.position.y+mouse.y*4, z: graph.position.z-7 };
					var tween = new TWEEN.Tween(cpA).to(tpA, 400);
					tween.easing(TWEEN.Easing.Quartic.Out);
					tween.onUpdate(function () {
						graph.position.x = cpA.x;
						graph.position.y = cpA.y;
						graph.position.z = cpA.z;
					});
					tween.start();
					
					// for (var i=0;i<interactions.length;i++){
					// 	if (interactions[i].type=='company'){
					// 		interactions[i].scale.set(interactions[i].scale.x-graph.position.z/20000,interactions[i].scale.y-graph.position.z/20000,1);
					// 		interactions[i].parent.children[1].scale.set(interactions[i].scale.x-graph.position.z/20000,interactions[i].scale.y-graph.position.z/20000,1);
					// 	}
					// }
				}
			}



			if ( options2.capitalizationFilterEnabled ) {
				updateLogos();
			}
			if ( graph.position.z > 1 ) {
				torusGroup.position.z = 1000;
			} else {
				torusGroup.position.z = 0;
				graph.position.x = 0;
				graph.position.y = 0;

				// var cpA = { x: graph.position.x, y: graph.position.y, z: graph.position.z };
				// var tpA = { x: 0, y: 0, z: 0 };
				// var tween = new TWEEN.Tween(cpA).to(tpA, 400);
				// tween.easing(TWEEN.Easing.Quartic.Out);
				// tween.onUpdate(function () {
				// 	graph.position.x = cpA.x;
				// 	graph.position.y = cpA.y;
				// 	graph.position.z = cpA.z;
				// });
				// tween.start();
			}

	});

	function hexToRgbA(hex){
		var c;
		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			c= hex.substring(1).split('');
			if(c.length== 3){
				c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c= '0x'+c.join('');
			// return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
			var rgba = {r:(c>>16)&255, g:(c>>8)&255, b:c&255, a:1};
			return rgba;
		}
		throw new Error('Bad Hex');
	}
	$(document.body).on('click', '.close' ,function(){
		console.log('close pressed');
		$('.company-popup').fadeOut(300);

		var cpA2 = { scale: ourObject.scale.x, opacity: 0.9 };
		var tpA2 = { scale: 1, opacity: 0 };
		var tween2 = new TWEEN.Tween(cpA2).to(tpA2, 400);
		tween2.easing(TWEEN.Easing.Quartic.Out);
		tween2.onUpdate(function () {
			ourObject.scale.set(cpA2.scale,cpA2.scale,1);
			shutter.material.opacity = cpA2.opacity;
		});
		tween2.onComplete(function(){
			clicksEnabled = true;
			hoversEnabled = true;
			$('.centered').fadeIn(300);
		})
		tween2.start();

	});
	$( ".group" ).mouseover(function() {
		clicksEnabled = false;
	});
	$( ".group" ).mouseout(function() {
		clicksEnabled = true;
	});


	
}