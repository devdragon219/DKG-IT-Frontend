$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas({
      textColour: "#ffffff",
      outlineThickness: 1,
      maxSpeed: 0.03,
      depth: 0.75,
      reverse: true,
      outlineColour: "#FF4996",
      textColour: "#FF4996",
    })
  ) {
    // TagCanvas failed to load
    $("#myCanvasContainer").hide();
  }
  // your other jQuery stuff here...

  $("#filter-category-select").change(function () {
    const selectedKey = $(this).val();
    showSelectedFilter(selectedKey);
    companiesArray = [];
    galaxyInit();
  });
});

const options = {
  jsonPath: "./companies.json",
  logos: true,
  deep: true,
  colors: ["FE72A1", "6E90FE", "D35AFF", "7ADED1", "ADFD73"],
  sectorColors2: [
    ["DF5946", "F98475", "FEADA3"],
    ["FFAA19", "FCBF66", "FFDDAA"],
    ["D52468", "F56CA0", "FAB0CD"],
  ],
  sectorColors3: [
    ["2AA2D8", "60E0E3", "A5EDEF"],
    ["FF9F80", "FFDB66", "FFEFB9"],
    ["E261AB", "EFA5CF", "F5CBE3"],
  ],
  sectorColors: [
    ["FF4996", "FE7376", "FF9C58"],
    ["4C4CE2", "9D60E6", "FE6EEA"],
    ["EAD859", "95CC67", "2ACC6C"],
  ],
  panCakes: {
    pc1: { pZ: -4, w: 8 },
    pc2: { pZ: -14, w: 12 },
  },
  filterTimeout: 500,
};
$(".bar.color1").css(
  "border",
  "0.08em solid #" + options.sectorColors[0][0] + ""
);
$(".bar.color2").css(
  "border",
  "0.08em solid #" + options.sectorColors[1][0] + ""
);
$(".bar.color3").css(
  "border",
  "0.08em solid #" + options.sectorColors[2][0] + ""
);

$(".number.color1").css("color", "#" + options.sectorColors[0][0] + "");
$(".number.color2").css("color", "#" + options.sectorColors[1][0] + "");
$(".number.color3").css("color", "#" + options.sectorColors[2][0] + "");

let currentFilterCategory = "capitalization";
const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5000+",
];

function updateRangeSlider() {
  let maxVal = 200;
  let step = 0.1;
  let value = 0;
  let label = "Capitalization greater than:";
  let minVal = 0.1;

  if (currentFilterCategory === "founded_year") {
    maxVal = 2024;
    step = 1;
    value = 2000;
    label = "Foundation year greater than:";
    minVal = 1900;
  } else if (currentFilterCategory === "number_of_employees") {
    maxVal = employeeRanges.length - 1;
    step = 1;
    value = 0;
    label = "Number of Employees greater than:";
    minVal = 0;
  }

  $(".range-label").text(label);
  $(".range-slider__range")
    .attr("max", maxVal)
    .attr("min", minVal)
    .attr("step", step)
    .val(value);

  // $(".range-slider__value").text(
  //   currentFilterCategory === "number_of_employees"
  //     ? employeeRanges[value]
  //     : currentFilterCategory === "capitalization"
  //     ? `${value} m`
  //     : value
  // );

  $("#range-actual-value").val(value);

  $(".range-slider__range").on("input", function () {
    console.log('update value:', this.value);
    $(this)
        .next(value)
        .html(
          '<span class="little">$</span><b>' +
            this.value +
            '</b><span class="little"> m</span>'
        );
    var c12 = scene.getObjectByName("c12");
    var c22 = scene.getObjectByName("c22");
    c12.material.opacity = 0.15;
    c22.material.opacity = 0.15;
  });
}

function populateFilterOptions(options) {
  const filterSelect = $("#filter-category-select");
  filterSelect.empty();
  if(options && options.length){
    options.forEach((option) => {
      filterSelect.append(new Option(option.label, option.key));
      if(option.type === 'text'){
        filtersList.push({
          id: `filter-${option.key}`,
          key: option.key,
          comparison: (companyValue, filterValue) =>
            companyValue
          .toString()
          .toLowerCase()
          .includes(filterValue.toLowerCase().trim()),
        })
      }
    });
  }

  console.log('filter List:', filtersList);
  createFilterInputs(options);

  if (options?.length > 0) {
    currentFilterCategory = options[0].key;
    showSelectedFilter(currentFilterCategory);
  }
}

function filterObject() {
  const range_value = parseFloat(
    $("#filter-capitalization").val() ||
      $(".filter-capitalization")
        .text()
        .replace(/[^\d.-]/g, "")
  );

  console.log("CURRENTFILTESR:", currentFilters);

  dataObject.companies.forEach((company) => {
    let filterValue = 0;
    let rangePass = true;
    let inputFilterPass = true;

    if (currentFilters.capitalization) {
      filterValue = company.capitalization;
      rangePass = parseInt(filterValue) >= parseInt(range_value);
    }

    inputFilterPass = Object.keys(currentFilters).every((filterKey) => {
      if (currentFilters[filterKey] && company[filterKey]) {
        return currentFilters[filterKey].comparison(
          company[filterKey],
          currentFilters[filterKey].value
        );
      }
      return true;
    });

    company["excluded"] = !rangePass || !inputFilterPass;
    if (company["excluded"]) company.onChange();
  });

  updateCounters();
  updateCompanyFilter();
}

function maintainTorusScale() {
  const investorTorusScale = 1; // Define the consistent scale for the torus objects
  const companyTorusScale = 1;

  // Find and scale the torus objects if they exist in the scene
  scene.traverse((child) => {
    if (child.type === "investorTorus") {
      child.scale.set(investorTorusScale, investorTorusScale, 1);
    } else if (child.type === "companyTorus") {
      child.scale.set(companyTorusScale, companyTorusScale, 1);
    }
  });
}

function updatePancakes(scaledVal, range = 200) {
  var val = scaledVal * (200 / range);
  var c1 = scene.getObjectByName("c1");
  var c12 = scene.getObjectByName("c12");

  var c2 = scene.getObjectByName("c2");
  var c22 = scene.getObjectByName("c22");

  var realValue = val / 10 - 20;

  c1.position.z = realValue / 2 - 0.01;
  c12.position.z = realValue / 2 - 0.01;

  c2.position.z = realValue - (20 + realValue) / 2 - 0.02;
  c22.position.z = realValue - (20 + realValue) / 2 - 0.02;

  var scaleFactor1 = Math.max(-1 / (20 / realValue));
  var scaleFactor2 = Math.max(1 - scaleFactor1);

  c1.scale.set(1, scaleFactor1, 1);
  c12.scale.set(1, scaleFactor1, 1);
  c2.scale.set(1, scaleFactor2, 1);
  c22.scale.set(1, scaleFactor2, 1);

  for (var i = 0; i < companiesArray.length; i++) {
    if (val > companiesArray[i].capitalization) {
      dataObject.companies[i].excluded = true;
      companiesArray[i].visible = false;
    } else {
      dataObject.companies[i].excluded = false;
      companiesArray[i].visible = true;
    }
  }
  updateCounters();
}

var fullCompanyData;
var counters = [];
var hoverRatio = 0.2;

var companyCategories = [];

var emptyTexture;

var returnGraph = true;

var outerRingMat, flatRingMat;

var mouse3D = new THREE.Vector3(0, 0, 0);
var scrollable = false;
var dragable;
if (options.deep) {
  dragable = true;
  $(".slider").css("display", "block");
} else {
  dragable = false;
  $(".slider").css("display", "none");
}

var oldRot = 0;

const filtersList = [
  // {
  //   id: "filter__name",
  //   key: "Company_Name",
  //   comparison: (companyValue, filterValue) =>
  //     companyValue
  //       .toString()
  //       .toLowerCase()
  //       .includes(filterValue.toLowerCase().trim()),
  // },
  // {
  //   id: "filter__location",
  //   key: "Company_Location",
  //   comparison: (companyValue, filterValue) =>
  //     companyValue
  //       .toString()
  //       .toLowerCase()
  //       .includes(filterValue.toLowerCase().trim()),
  // },
];

const dataObject = {
  companies: [],
  sectors: [],
};

function render(info) {
  setTimeout(() => {
    jsonFileData = info;

    for (var i = 0; i < info.originalData.length; i++) {
      companyCategories.indexOf(info.originalData[i].Market) === -1
        ? companyCategories.push(info.originalData[i].Market)
        : console.log("This item already exists");
    }

    processResponse(jsonFileData);

    galaxyInit();
    renderInit();
  }, 2000);
}

const apiUrl = "/api/diagrams";
const params = new URLSearchParams(window.location.search);
console.log("ad",params);
const KEY = "slug";

window.onmessage = (e) => {
  if (e.data?.name === "parentMessage") {
    if (e.data.data?.originalData) {
      render(e.data.data);
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
        render(data);
      }
      if (data?.source?.originalData) {
        render(data.source);
      }
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}

function getJson() {
  var urlToLoad =
    "https://platform.dkv.global/api/tube-companies/?dashboard=digital-uk-ecosystem&top=500";
  //var urlToLoad = 'https://platform.dkv.global/api/aa_v2/filter/23/comps-1/?sort=fund_total&per_page=500'
  // var urlToLoad = 'https://platform.dkv.global/dashboards/api/company-details/?slug=atomwise' // 1 company data

  $.getJSON(urlToLoad).done(function () {
    jsonFileData = info;

    console.log("Companies: ", info);

    for (var i = 0; i < info.length; i++) {
      companyCategories.indexOf(info[i].Market) === -1
        ? companyCategories.push(info[i].Market)
        : console.log("This item already exists");
    }

    processResponse(jsonFileData);

    galaxyInit();
    renderInit();
  });
}

function processResponse(res) {
  for (var i = 0; i < res.originalData.length; i++) {
    dataObject.companies.push(res.originalData[i]);
  }

  // TODO: REMOVE!
  for (var i = 0; i < 3; i++) {
    const sector = {
      id: "sector-" + (i + 1),
      label: "Sector " + (i + 1),
      baseColor: options.colors[i],
      subSectors: [],
    };
    dataObject.sectors.push(sector);
  }
  dataObject.filterOptions = res.filterOptions;
  console.log(dataObject);

  populateFilterOptions(dataObject.filterOptions);
  return;
  // TODO: REMOVE!

  dataObject.sectors = Object.keys(res.sectors).map((key, index) => {
    const jsonSector = JSON.parse(JSON.stringify(res.sectors[key]));
    console.log(jsonSector);
    const sector = {
      id: jsonSector.id,
      label: jsonSector.label,
      baseColor: options.colors[index],
      subSectors: [],
    };
    dataObject.sectors.push(sector);
  });
}

function createFilterInputs(filterOptions) {
  console.log("FILTEROPTION:", options);

  const filterContainer = document.getElementById("filter-container");
  const filterBox = document.getElementById("filter-box");
  if(filterOptions && filterOptions.length){
    filterBox.style.display = 'block';
    filterOptions.forEach((option) => {
      let filterElement;
      if (option.type === "range") {
        filterElement = `
                <div class="filter-field" id="filter-field-${option.key}" style="display: none;">
                    <input type="range" id="filter-${option.key}" min="${option.min}" max="${option.max}" step="${option.step}" value="${option.min}">
                    <span id="filter-${option.key}-value" class="range-slider__value">${option.min}</span>
                </div>
            `;
      } else if (option.type === "select") {
        filterElement = `
                <div class="filter-field" id="filter-field-${
                  option.key
                }" style="display: none;">
                    <select id="filter-${option.key}">
                        ${option.options
                          .map((o) => `<option value="${o}">${o}</option>`)
                          .join("")}
                    </select>
                </div>
            `;
      } else if(option.type === 'text') {
        filterElement = `
                <div class="location-input-container">
                  <div class="filter-field" id="filter-field-${option.key}" style="display: none;">
                    <input type="text" id="filter-${option.key}" style="padding-top: 30px; font-size: 15px" required="required" />
                    <label for="name">Type ${option.label} here</label>
                    <div class="bar2"></div>
                  </div>
                </div>
            `;
      }
  
      filterContainer.insertAdjacentHTML("beforeend", filterElement);
  
      // Add event listeners for the filters
      if (option.type === "range") {
        document
          .getElementById(`filter-${option.key}`)
          .addEventListener("input", (e) => {
            document.getElementById(`filter-${option.key}-value`).textContent =
              e.target.value;
              currentFilters = {};
            currentFilters[option.key] = {
              value: e.target.value,
              comparison: (companyValue, filterValue) =>
                companyValue >= filterValue,
            };
            updatePancakes(e.target.value - e.target.min, e.target.max - e.target.min);
            filterObject();
          });
      } else if (option.type === "select") {
        document
          .getElementById(`filter-${option.key}`)
          .addEventListener("change", (e) => {
              currentFilters = {};
            currentFilters[option.key] = {
              value: e.target.value,
              comparison: (companyValue, filterValue) =>
                companyValue === filterValue,
            };
           filterObject();
          });
      } else if (option.type === 'text') {
        document.getElementById(`filter-${option.key}`)
        .addEventListener("keydown", (ev) => {
          handleFilter(ev, option.key, (companyValue, filterValue) =>
            companyValue
          .toString()
          .toLowerCase()
          .includes(filterValue.toLowerCase().trim()));
        });
  
        document.getElementById(`filter-${option.key}`).addEventListener("change", (ev) => {
          handleFilter(ev, option.key, (companyValue, filterValue) =>
            companyValue
          .toString()
          .toLowerCase()
          .includes(filterValue.toLowerCase().trim()));
        });
      }
    });
  } else {
    filterBox.style.display = 'none';
  }
}

function showSelectedFilter(selectedKey) {
  // Hide all filter fields
  document
    .querySelectorAll(".filter-field")
    .forEach((field) => (field.style.display = "none"));
  // Show the selected filter field
  document.getElementById(`filter-field-${selectedKey}`).style.display =
    "block";
  currentFilterCategory = selectedKey;
}

function renderInit() {
  // renderCircle();
  console.log("hi");
  dataObject.companies.forEach((company) => {
    company["onChange"] = () => onCompanyChange(company);
    renderCompany(company);
  });
  dataObject.sectors.forEach((sector) => {
    renderSector(sector);
  });
}

// ### FILTERS ###

let currentFilters = {};

let filterTimeout;

filtersList?.forEach((filter) => {
  currentFilters[filter.key] = undefined;
  document.getElementById(filter.id).addEventListener("keydown", (ev) => {
    handleFilter(ev, filter.key, filter.comparison);
  });
  document.getElementById(filter.id).addEventListener("change", (ev) => {
    handleFilter(ev, filter.key, filter.comparison);
  });
});

function handleFilter(ev, key, comparison) {
  if (ev.key !== "Enter") {
    checkTimer(() => setFilters(key, ev.target.value, comparison));
  } else {
    clearTimeout(filterTimeout);
    setFilters(key, ev.target.value, comparison);
  }
}

function checkTimer(cb) {
  if (filterTimeout) {
    clearTimeout(filterTimeout);
  }
  filterTimeout = setTimeout(cb, options.filterTimeout);
}

function setFilters(key, value, comparison) {
  currentFilters = {};
  currentFilters[key] = {
    value: value,
    comparison: comparison,
  };
  filterObject();
  checkFilters();
}
function checkFilters() {
  var searchField = $("#filter__name");

  if (searchField.val() != "") {
    $(".close-search").css("display", "block");
  } else {
    $(".close-search").css("display", "none");
  }

  // var searchFieldLocation = $("#filter__location");

  // if (searchFieldLocation.val() != "") {
  //   $(".close-search-location").css("display", "block");
  // } else {
  //   $(".close-search-location").css("display", "none");
  // }

  var searchFieldYear = $("#filter__founded_year");

  if (searchFieldYear.val() != "") {
    $(".close-search-year").css("display", "block");
  } else {
    $(".close-search-year").css("display", "none");
  }
}

if (!Detector.webgl) Detector.addGetWebGLMessage();

var menuHidden = true;
var data;

var chunkSize = 4;
var textureArray = [];
var itemCount;
var maxCap = 1800000000;
var colors = ["FE72A1", "6E90FE", "D35AFF", "7ADED1", "ADFD73"];
var options2 = {
  capitalizationFilterEnabled: false,
  showLogos: true,
};

var companiesArray = [];

var hoversEnabled = true;
var clicksEnabled = true;
var zoomEnabled = true;

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
var graphContainer = new THREE.Group();

var assets_loaded = false;

var camera, scene, raycaster, renderer, container;
var mouse = new THREE.Vector2(),
  INTERSECTED;

var textures = [];

function onCompanyChange(company) {
  if (!company.excluded) {
    console.log("FILTERED COMPANY CHANGED: ", company);
  }
}

var isDragging = false;

var previousMousePosition = {
  x: 0,
  y: 0,
};

function updateCounters() {
  dataObject.sectors.forEach((sector, ix) => {
    counters[ix] = 0;
    for (var i = 0; i < dataObject.companies.length; i++) {
      if (
        dataObject.companies[i].sector == sector.id &&
        !dataObject.companies[i].excluded
      ) {
        counters[ix]++;
      }
    }
  });

  var totalCount = 0;
  for (var i = 0; i < counters.length; i++) {
    totalCount += counters[i];
  }
  // console.log(totalCount);
  for (var i = 0; i < 100; i++) {
    $("#counter0").removeClass("p" + i);
    $("#counter1").removeClass("p" + i);
    $("#counter2").removeClass("p" + i);
  }
  $("#counter0").addClass("p" + Math.round((counters[0] / totalCount) * 100));
  $("#counter1").addClass("p" + Math.round((counters[1] / totalCount) * 100));
  $("#counter2").addClass("p" + Math.round((counters[2] / totalCount) * 100));

  $("#counter0 span.number").text(counters[0]);
  $("#counter1 span.number").text(counters[1]);
  $("#counter2 span.number").text(counters[2]);

  $("#c0-1").text(counters[0]);
  $("#c1-1").text(counters[1]);
  $("#c2-1").text(counters[2]);

  var c0cap = Math.round(Math.random() * 100 * 10) / 10;
  var c1cap = Math.round(Math.random() * 100 * 10) / 10;
  var c2cap = Math.round(Math.random() * 100 * 10) / 10;

  var c0g = Math.round(Math.random() * 30 * 10) / 10;
  var c1g = Math.round(Math.random() * 30 * 10) / 10;
  var c2g = Math.round(Math.random() * 30 * 10) / 10;

  $("#c0-2").text("$" + c0cap);
  $("#c1-2").text("$" + c1cap);
  $("#c2-2").text("$" + c2cap);

  $("#c0-3").text("+" + c0g);
  $("#c1-3").text("+" + c1g);
  $("#c2-3").text("+" + c2g);

  var tempArray = [];

  for (var i = 0; i < dataObject.companies.length; i++) {
    if (!dataObject.companies[i].excluded) {
      tempArray.push(dataObject.companies[i]);
    }
  }
}
function getSubsectionIndex(company) {
  //FIX1
  // filter by year
  if (company.capitalization > 155) return 0;
  if (company.capitalization > 95) return 1;
  return 2;
}
function galaxyInit() {
  const sectionPaddingTop = 0.1; // Adjust this value as needed
  const sectionPaddingSide = 0.75; // Adjust this value as needed

  // Define sector angles and radii
  const companySectorAngleStart = 0;
  const companySectorAngleLength = Math.PI * 2; // Full circle for outer sector
  const investorSectorAngleStart = 0;
  const investorSectorAngleLength = Math.PI * 2; // Full circle for inner sector

  const companyRadiusStart = 20;
  const companyRadiusEnd = 30;

  const investorRadiusStart = 10;
  const investorRadiusEnd = 20;

  container = document.getElementById("container");
  while(container.children.length > 0) {
    container.removeChild(container.children[0])
  }

  // Clear the Scene
  if(scene) {
    while (scene.children.length > 0) {
      let object = scene.children[0];
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      }
      scene.remove(object);
    }
  }
  scene = new THREE.Scene();
  
  // Clear the Graph Container
  while(graphContainer?.children.length > 0) {
    let object = graphContainer.children[0];
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      if(Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose())
      } else {
        object.material.dispse();
      }
    }
    graphContainer.remove(object)
  }
  
  // Clear the Graph
  while(graph?.children.length > 0) {
    let object = graph.children[0];
    if(object.geometry) object.geometry.dispose()
      if(object.material) {
        if(Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose())
        } else {
          object.material.dispose();
        }
      }
      graph.remove(object)
    }
    
    // // scene
    // var scene = new THREE.Scene()
    
    // camera
    if(!camera) {
      camera = new THREE.PerspectiveCamera(
        40,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 110);
  }
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  scene.add(graphContainer);

  var geometry = new THREE.SphereGeometry(0.2, 8, 8);
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  lock = new THREE.Mesh(geometry, material);
  // lock.position.y = 850;
  lock.visible = false;

  graph.add(lock);

  var geometry = new THREE.PlaneGeometry(1000, 1000, 8);
  var material = new THREE.MeshBasicMaterial({
    color: 0x293048,
    transparent: true,
    opacity: 0,
  });
  shutter = new THREE.Mesh(geometry, material);
  shutter.position.z = 1;
  shutter.visible = false;
  // shutter.material.depthWrite = false;
  graph.add(shutter);

  graph.position.y = -2;
  graph.position.z = 10;

  // Create tori
  function createTorus(innerRadius, outerRadius, color) {
    const geometry = new THREE.TorusGeometry(
      (innerRadius + outerRadius) / 2,
      (outerRadius - innerRadius) / 2,
      2,
      64
    );
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const torus = new THREE.Mesh(geometry, material);
    torus.rotation.x = Math.PI;
    torus.rotation.y = Math.PI;
    torus.position.z = 0;
    return torus;
  }

  // Add investor torus
  var investorTorus = createTorus(
    investorRadiusEnd,
    investorRadiusEnd + 0.15,
    0x2acc6c
  );
  investorTorus.type = "investorTorus";
  graph.add(investorTorus);

  // Add company torus
  var companyTorus = createTorus(
    companyRadiusEnd,
    companyRadiusEnd + 0.15,
    0xff4996
  );
  companyTorus.type = "companyTorus";
  graph.add(companyTorus);

  graphContainer.add(graph);

  console.log("RADIUSN:", investorRadiusEnd, companyRadiusEnd);

  var sectorCount = dataObject.sectors.length;

  const sortBySector = {};

  function findInSector(id) {
    let resultIndex;
    Object.keys(sortBySector).forEach((sector, ix) => {
      const company = sortBySector[sector].find((item) => item.id === id);
      if (company) {
        resultIndex = ix;
      }
    });
    return resultIndex;
  }
  $(renderer.domElement)
    .on("mousedown", function (e) {
      if (dragable) {
        isDragging = true;
      }
      $(".not").fadeOut(300);
    })
    .on("mousemove", function (e) {
      //console.log(e);
      var deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y,
      };
      var factor = 1.4;
      if (graphContainer.rotation.y < -factor) {
        graphContainer.rotation.y = -factor;
      }
      if (graphContainer.rotation.y > factor) {
        graphContainer.rotation.y = factor;
      }

      // console.log(graphContainer.rotation.y);
      if (
        isDragging &&
        graphContainer.rotation.y >= -factor &&
        graphContainer.rotation.y <= factor
      ) {
        var deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(0, (deltaMove.x * Math.PI) / 180 / 5, 0, "XYZ")
        );

        var deltaZ = Math.abs(graphContainer.rotation.y);
        graphContainer.scale.set(1, 1, 1 + deltaZ * 2);

        graphContainer.quaternion.multiplyQuaternions(
          deltaRotationQuaternion,
          graphContainer.quaternion
        );
      }

      previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY,
      };
    });
  $(document).on("mouseup", function (e) {
    isDragging = false;
  });

  function getSphericalCoordinates(
    thetaStart,
    thetaLength,
    radiusStart,
    radiusLength,
    iconSize,
    sectionPaddingTop,
    sectionPaddingSide,
    iconCount
  ) {
    var sphericalPositionArray = [];
    var firstLineRadius =
      radiusStart + radiusLength - sectionPaddingTop - iconSize / 2;
    var minRadius = radiusStart + sectionPaddingTop + iconSize / 2;
    var lineHeight = (iconSize / 2) * (1 + sectionPaddingTop);
    var iconDistance = iconSize * (0.5 + sectionPaddingSide);
    var iconCountRemaining = iconCount;

    for (var line = 0; iconCountRemaining > 0; line++) {
      if (firstLineRadius - line * lineHeight < minRadius) {
        break;
      }
      var lineRadius = firstLineRadius - line * lineHeight;
      var linePaddingAngle = Math.atan(
        (sectionPaddingSide + iconSize / 2) / lineRadius
      );
      var lineAngleStart = thetaStart + linePaddingAngle;
      var lineUsableAngle = thetaLength - 2 * linePaddingAngle;
      var lineUsableLength = lineRadius * lineUsableAngle;
      var lineMaxIconCount = Math.floor(lineUsableLength / iconDistance) + 1;
      var lineIconCount = Math.min(iconCountRemaining, lineMaxIconCount);
      var lineIconAngleDistance = lineUsableAngle / (lineIconCount - 1);

      for (var i = 0; i < lineIconCount; i++) {
        sphericalPositionArray.push(lineRadius);
        sphericalPositionArray.push(lineAngleStart + i * lineIconAngleDistance);
        sphericalPositionArray.push(0);
      }
      iconCountRemaining -= lineIconCount;
    }
    var radiusUsed =
      radiusStart +
      radiusLength -
      (firstLineRadius - line * lineHeight) +
      iconSize / 2 +
      sectionPaddingTop;
    return { coords: sphericalPositionArray, radiusUsed: radiusUsed };
  }

  updateRangeSlider();
  updateCounters();

  // panCakes
  var panCakesAmount = 2;

  var geometry = new THREE.CylinderGeometry(31, 31, 20, 64);
  var material = new THREE.MeshPhongMaterial({
    side: THREE.BackSide,
    color: 0x2acc6c,
    transparent: true,
    opacity: 0.05,
  });
  var material2 = new THREE.MeshPhongMaterial({
    side: THREE.BackSide,
    wireframe: true,
    color: 0x2acc6c,
    transparent: true,
    opacity: 0.05,
  });
  var cylinder = new THREE.Mesh(geometry, material);
  var cylinder2 = cylinder.clone();
  cylinder2.material = material2;
  cylinder.rotation.x = -Math.PI / 2;
  cylinder2.rotation.x = -Math.PI / 2;
  cylinder.position.set(0,0,-10);
  cylinder2.position.set(0,0,-10);
  cylinder.renderOrder = 100500;
  cylinder.name = "c2";
  cylinder.type = "cylinder";
  cylinder2.type = "cylinder";
  cylinder2.name = "c22";

  graph.add(cylinder);
  graph.add(cylinder2);

  var geometry = new THREE.CylinderGeometry(31, 31, 20, 64);
  var material = new THREE.MeshPhongMaterial({
    side: THREE.BackSide,
    color: 0xff4996,
    transparent: true,
    opacity: 0.05,
  });
  var material2 = new THREE.MeshPhongMaterial({
    side: THREE.BackSide,
    wireframe: true,
    color: 0xff4996,
    transparent: true,
    opacity: 0.05,
  });
  var cylinder = new THREE.Mesh(geometry, material);
  var cylinder2 = cylinder.clone();
  cylinder2.material = material2;
  cylinder.rotation.x = -Math.PI / 2;
  cylinder2.rotation.x = -Math.PI / 2;
  cylinder.position.set(0,0,-10);
  cylinder2.position.set(0,0,-10);
  cylinder.renderOrder = 100500;
  cylinder.name = "c1";
  cylinder.type = "cylinder";
  cylinder2.type = "cylinder";
  cylinder2.name = "c12";

  graph.add(cylinder);
  graph.add(cylinder2);

  standardMap = new THREE.TextureLoader().load("tex/flat-ring.png");
  emptyTexture = new THREE.TextureLoader().load("tex/flat-ring.png");

  // for (var i=0;i<panCakesAmount;i++){
  // 	var geometry = new THREE.CylinderGeometry( 17, 17, 32, 32 );
  // 	var material = new THREE.MeshBasicMaterial( {color: 0xffff00, transparent:true, opacity:0.2} );
  // 	var cylinder = new THREE.Mesh( geometry, material );
  // 	cylinder.rotation.x = -Math.PI/2;
  // 	cylinder.renderOrder = 100500;
  // 	graph.add( cylinder );
  // }

  dataObject.companies.forEach((item, index) => {
    item["image"] = "/" + item.Company_Name + ".png";
    item["excluded"] = false;

    if (item["Market"] === "Company") {
      item["sector"] = dataObject.sectors[0].id;
    } else if (item["Market"] === "Investor") {
      item["sector"] = dataObject.sectors[1].id;
    } else {
      if (index < 1000) {
        item["sector"] = dataObject.sectors[0].id;
      } else {
        item["sector"] = dataObject.sectors[1].id;
      }
    }

    
    var companyGroup = new THREE.Group();
    companyGroup.companyId = item.id;
    companiesArray.push(companyGroup);
    // console.log(companyGroup.companyId);
    var sector = findInSector(item.id);

    if (data.deg) {
      var angle = data.deg;
    } else {
      var angle =
        (Math.random() * Math.PI * 2) / sectorCount +
        ((Math.PI * 2) / sectorCount) * sector;
    }

    // TURN LOGOS OFF

    if (options.logos) {
      if (item.image) {
        spriteMap = new THREE.TextureLoader().load(
          `${
            item?.logo?.includes("http")
              ? item?.logo
              : "https://platform.dkv.global/files/" + item.logo
          }`,
          function (texture) {
            // texture.minFilter = THREE.LinearFilter;
            aspectRatio = texture.image.width / texture.image.height;
            if (aspectRatio > 1) {
              item.companyLogo.scale.set(1 * 0.7, (1 / aspectRatio) * 0.7, 1);
            } else if (aspectRatio < 1) {
              item.companyLogo.scale.set(aspectRatio * 0.7, 1 * 0.7, 1);
            }
          }
        );
      } else {
        var spriteMap = emptyTexture;
      }
    } else {
      var spriteMap = emptyTexture;
    }

    if (options2.showLogos) {
      dotSize = bigDotSize;
    } else {
      dotSize = smallDotSize;
    }

    var spriteMaterial2 = new THREE.SpriteMaterial({
      map: standardMap,
      sizeAttenuation: true,
      alphaTest: 0.5,
    });
    spriteMaterial2.color.setHex("0xffffff");
    var company = new THREE.Sprite(spriteMaterial2);
    company.scale.set(dotSize, dotSize, 1);
    // company.renderOrder = 6;
    company.angle = angle;
    company.type = "company";
    company.sector = item.sector;
    company.name = item.Company_Name;
    company.zoomable = true;
    var virtualCapitalization = Math.round(Math.random() * 200 * 10) / 10 + 1;
    if (item.capitalization) {
      var cap = item.capitalization;
      company.capitalization = item.capitalization;
      companyGroup.capitalization = item.capitalization;
    } else {
      item.capitalization = virtualCapitalization;
      companyGroup.capitalization = virtualCapitalization;
      var cap = virtualCapitalization;
    }

    // if(item.Company_Founded_Year)
    //   companyGroup.Company_Founded_Year = item.Company_Founded_Year
    // if(item.Company_Number_of_Employees)
    //   companyGroup.Company_Number_of_Employees = item.Company_Number_of_Employees
    
    dataObject.filterOptions?.forEach(option => {
      if (item[option.key]) {
        companyGroup[option.key] = item[option.key];
      }
    })
    company.pos = { x: item.x, y: item.y };

    company.fullData = {
      name: item.Company_Name,
      capitalization: cap,
      industry: item.Market,
      location: item.Company_Location,
      technology: item.Technology,
      cbRank: item.CB_Rank,
      description: item.Company_Description,
      founded: item.Company_Founded_Year,
      employees: item.Company_Number_of_Employees,
      linkedin: item.Company_LinkedIn_Link,
      email: item.Company_Contact_Email,
      url: item.Company_Domain,
    };

    item.fullData = company.fullData;

    for (var i = 0; i < dataObject.sectors.length; i++) {
      dataObject.sectors[i].on = true;
      if (company.sector == dataObject.sectors[i].id) {
        var subsectionIndex = getSubsectionIndex(company);
        var colorString =
          options.sectorColors[i].length > subsectionIndex
            ? options.sectorColors[i][subsectionIndex]
            : options.sectorColors[i][0];
        var outerColor = "0x" + colorString;
      }
    }

    outerRingMat = new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("tex/outer-ring.png"),
      color: 0xffffff,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.5,
    });
    var outerRing = new THREE.Sprite(outerRingMat);
    outerRing.scale.set(dotSize * 1.3, dotSize * 1.3, 1);
    outerRing.name = "outerRing";
    outerRing.position.z = 0.002;
    // outerRing.renderOrder = 2;
    outerRingMat.color.setHex(outerColor);

    flatRingMat = new THREE.SpriteMaterial({
      map: standardMap,
      color: 0xffffff,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.5,
    });
    var flatRing = new THREE.Sprite(flatRingMat);
    flatRing.scale.set(dotSize * 1.15, dotSize * 1.15, 1);
    flatRing.name = "flatRing";
    // flatRing.visible = false;
    flatRing.position.z = 0.004;
    // flatRing.renderOrder = 4;
    flatRingMat.color.setHex(outerColor);

    companyGroup.scale.set(hoverRatio, hoverRatio, 1);

    graph.add(companyGroup);
    companyGroup.add(company);
    companyGroup.add(outerRing);
    companyGroup.add(flatRing);
    // console.log(company);
    interactions.push(company);

    var companyLogoMaterial = new THREE.SpriteMaterial({
      map: spriteMap,
      color: 0xffffff,
      transparent: true,
      sizeAttenuation: true,
      alphaTest: 0.5,
    });

    item.companyLogo = new THREE.Sprite(companyLogoMaterial);
    // item.companyLogo.renderOrder = 1;
    // item.companyLogo.position.z = -0.001;
    if (options2.showLogos) {
      item.companyLogo.visible = true;
    } else {
      item.companyLogo.visible = false;
    }
    company.add(item.companyLogo);
  });

  dataObject.companies.forEach((company, index) => {
    var currentSector;
    dataObject.sectors.forEach((sector) => {
      if (company.sector == sector.id) currentSector = sector;
    });

    var subsectionIndex = getSubsectionIndex(company);

    while (currentSector.subSectors.length <= subsectionIndex)
      currentSector.subSectors.push({
        count: 0,
        currentIndex: 0,
        sphericalPositions: [],
      });
    currentSector.subSectors[subsectionIndex].count++;
  });

  updateCounters();
  updatePancakes(1);

  dataObject.sectors.forEach((sector, index) => {
    var countBefore = 0;
    var countTotal = 0;
    for (var i = 0; i < counters.length; i++) {
      countTotal += counters[i];
      if (i < index) countBefore += counters[i];
    }

    var startAngle = Math.PI * 2 * (countBefore / countTotal);
    var alphaAngle = Math.PI * 2 * (counters[index] / countTotal);

    var startRadius = 1;
    var endRadius = 31;

    var currentSubSectorEndRadius = endRadius;

    var totalSectionArea =
      Math.PI * (Math.pow(endRadius, 2) - Math.pow(startRadius, 2));
  });
  dataObject.companies.forEach((item, companyIndex) => {
    var thetaAngle;
    if (options.deep) {
      thetaAngle = Math.PI / 2;
    } else {
      thetaAngle = Math.PI / 2;
    }

    dataObject.sectors.forEach((sector, i) => {
      if (item.sector == sector.id) {
        var subSectionIndex = getSubsectionIndex(item);

        // Determine the sector-specific positioning
        var startAngle, angleLength, radiusStart, radiusEnd;
        if (sector.id === "sector-1") {
          // Companies sector
          startAngle = companySectorAngleStart;
          angleLength = companySectorAngleLength;
          radiusStart = companyRadiusStart;
          radiusEnd = companyRadiusEnd;
        } else if (sector.id === "sector-2") {
          // Investors sector
          startAngle = investorSectorAngleStart;
          angleLength = investorSectorAngleLength;
          radiusStart = investorRadiusStart;
          radiusEnd = investorRadiusEnd;
        }

        var sphericalCoords = getSphericalCoordinates(
          startAngle,
          angleLength,
          radiusStart,
          radiusEnd - radiusStart,
          dotSize,
          sectionPaddingTop,
          sectionPaddingSide,
          sector.subSectors[subSectionIndex].count
        ).coords;

        companiesArray[companyIndex].position.setFromSpherical(
          new THREE.Spherical(
            sphericalCoords[
              sector.subSectors[subSectionIndex].currentIndex * 3
            ],
            sphericalCoords[
              sector.subSectors[subSectionIndex].currentIndex * 3 + 1
            ],
            thetaAngle
          )
        );

        if (options.deep) {
          const current = dataObject.filterOptions?.filter(item => item.key === currentFilterCategory)[0];
          if(current?.key.includes('capitalization') || current?.key.includes('Company_Founded_Year')){
            companiesArray[companyIndex].position.z =
            // companiesArray[companyIndex].capitalization / 10 - 20;
            (companiesArray[companyIndex][currentFilterCategory] - current.min) / ((current.max - current.min) / 20) - 20;
          } else {
            companiesArray[companyIndex].position.z = companiesArray[companyIndex].capitalization / 10 - 20;
          }
        }
        sector.subSectors[subSectionIndex].currentIndex++;
      }
    });
  });

  // console.log("GRAPH ***", graph)

  THREE.DefaultLoadingManager.onProgress = function (item, loaded, total) {
    bar = Math.floor((barwidth * loaded) / total);
    var percent = ((100 * loaded) / total).toFixed(2);
    $("#bar").css("width", "" + bar + "px");
    $("#percent").html(percent + " %");
    // console.log(loaded/total);
    if (loaded / total == 1) {
      $("#progressbar").fadeOut("300");
      $("#progress").fadeOut("300");
      $(".loader2").fadeOut("slow");
      animate();
      initialAnimation();
    }
  };
  var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      //var percentComplete = xhr.loaded / xhr.total * 100;
      //console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
  };
  var onError = function (xhr) {};
  // var objLoader = new THREE.OBJLoader();

  // light
  var ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  raycaster = new THREE.Raycaster();
  // console.log("SCENE***: ", scene)
  // document.addEventListener('mousewheel', onDocumentMouseWheel, false);

  window.addEventListener("resize", onWindowResize, false);
  document.addEventListener("mousedown", onDocumentMouseDown, false);
  document.addEventListener("mousemove", onDocumentMouseMove, false);

  if (options2.capitalizationFilterEnabled) {
    updateLogos();
  }
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function onDocumentMouseDown(e) {
  console.log('mouse pressed');
  if (clicksEnabled && !e.target.classList.contains('close') ) {
    if (INTERSECTED) {
      $(".filters-container").css("display", "none");
      console.log("fulldata:", INTERSECTED);
      hoversEnabled = false;
      clicksEnabled = false;
      zoomEnabled = false;
      var companyName = INTERSECTED.name;

      ourObject = INTERSECTED.parent;
      ourObject.prevPos = ourObject.position.z;
      $("html,body").css("cursor", "default");

      $(".slider").css("bottom", "-120px");

      $(".cloud-container").fadeOut(300);

      // ourObject.scale.set(2,2,1);
      console.log("mouse pressed", INTERSECTED.parent.position, ourObject);

      makeBig();

      oldRot = graph.rotation.y;

      var cpA = {
        x: graphContainer.position.x,
        y: graphContainer.position.y,
        z: graphContainer.position.z,
        r: graphContainer.rotation.y,
      };
      var tpA = {
        x: -INTERSECTED.parent.position.x,
        y: -INTERSECTED.parent.position.y,
        z: 50,
        r: 0,
      };
      var tween = new TWEEN.Tween(cpA).to(tpA, 1200);
      tween.easing(TWEEN.Easing.Quartic.Out);
      tween.onUpdate(function () {
        graphContainer.position.x = cpA.x;
        graphContainer.position.y = cpA.y;
        graphContainer.position.z = cpA.z;

        graphContainer.rotation.y = cpA.r;
      });
      tween.start();
      tween.onComplete(function () {
        console.log("tw ");
        tween2.start();
        ourObject.position.z = 1;
        $(".popup").css("display", "none");
        $(".centered").fadeOut(300);
        $(".uil").fadeOut(300);
        $(".uir").fadeOut(300);
      });

      var cpA2 = { scale: ourObject.scale.x, opacity: 0 };
      var tpA2 = { scale: 8, opacity: 1 };
      var tween2 = new TWEEN.Tween(cpA2).to(tpA2, 400);
      tween2.easing(TWEEN.Easing.Quartic.Out);
      tween2.onUpdate(function () {
        ourObject.scale.set(cpA2.scale, cpA2.scale, 1);
        shutter.material.opacity = cpA2.opacity;
      });
      tween2.onComplete(function () {
        var fullData = INTERSECTED.fullData;
        shutter.visible = true;
        console.log("KEKW", INTERSECTED);
        $(".company-popup").css("display", "flex");
        $(".main-info").html(
          '<div class="lname">Name: <span class="value">' +
            fullData.name +
            "</span></div>" +
            '<div class="lname">Capitalization: <span class="value">$ ' +
            fullData.capitalization +
            " m</span></div>" +
            '<div class="lname">Industry: <span class="value">' +
            fullData.industry +
            "</span></div>" +
            '<div class="lname">Technology: <span class="value">' +
            fullData.technology +
            "</span></div>" +
            '<div class="lname">Location: <span class="value">' +
            fullData.location +
            "</span></div>" +
            '<div class="lname">Founded date: <span class="value">' +
            fullData.founded +
            "</span></div>" +
            '<div class="lname">Employees number: <span class="value">' +
            fullData.employees +
            "</span></div>" +
            '<div class="lname">CB Rank: <span class="value">' +
            fullData.cbRank +
            "</span></div>"
        );
        $(".company-description").html(
          '<div class="scrollbar2 style-1">' + fullData.description + "</div>"
        );
        $(".contacts").html(
          '<div class="lname">Website: <span class="value">' +
            fullData.url +
            "</span></div>" +
            '<div class="lname">Email: <span class="value">' +
            fullData.email +
            "</span></div>" +
            '<div class="lname">Twitter: <span class="value">' +
            fullData.linkedin +
            "</span></div>"
        );
      });
    }
  }
}
function onDocumentMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
function initialAnimation() {
  var cpA = { rot: graphContainer.rotation.y };
  var tpA = { rot: 0.8 };
  var tween = new TWEEN.Tween(cpA).to(tpA, 1200);
  tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    graphContainer.rotation.y = cpA.rot;
    var deltaZ = Math.abs(graphContainer.rotation.y);
    graphContainer.scale.set(1, 1, 1 + deltaZ * 2);
  });
  tween.start();
}
function checkIntersections() {
  // find intersections
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(interactions);
  if (hoversEnabled) {
    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {
        if (prevObject) {
          prevObject.scale.set(1 * hoverRatio, 1 * hoverRatio, 1);
          if (!options.deep) {
            prevObject.position.z = 0 + Math.random() * 0.05;
          }
        }
        INTERSECTED = intersects[0].object;
        if (INTERSECTED.type == "company" && INTERSECTED.parent.visible) {
          lock.position.x = INTERSECTED.parent.position.x;
          lock.position.y = INTERSECTED.parent.position.y;
          $(".popup").css("display", "block");
          $(".popup").html(
            '<div class="cont"><div class="actual"><div class="header">' +
              INTERSECTED.name +
              "</div></div></div>"
          );

          prevObject = INTERSECTED.parent;

          var cpA = { scale: INTERSECTED.parent.scale.x };
          var tpA = { scale: 1.2 * hoverRatio };
          var tween = new TWEEN.Tween(cpA).to(tpA, 400);
          tween.easing(TWEEN.Easing.Quartic.Out);
          tween.onUpdate(function () {
            prevObject.scale.set(cpA.scale, cpA.scale, 1);
          });
          tween.start();

          INTERSECTED.parent.position.z = INTERSECTED.parent.position.z + 0.001;

          $("html,body").css("cursor", "pointer");
        }

        if (INTERSECTED.type == "label") {
          clicksEnabled = false;

          lock.position.x = 0;
          lock.position.y = -3;
          $(".popup").css("display", "block");
          $(".popup").html(
            '<div class="cont"><div class="actual"><div class="header">' +
              INTERSECTED.label +
              "</div></div></div>"
          );

          $("html,body").css("cursor", "pointer");
        }
      }
    } else {
      clicksEnabled = true;

      if (prevObject) {
        if (!options.deep) {
          prevObject.position.z = 0;
        }

        var cpA = { scale: prevObject.scale.x };
        var tpA = { scale: 1 * hoverRatio };
        var tween = new TWEEN.Tween(cpA).to(tpA, 400);
        tween.easing(TWEEN.Easing.Quartic.Out);
        tween.onUpdate(function () {
          prevObject.scale.set(cpA.scale, cpA.scale, 1);
        });
        tween.start();
      }
      INTERSECTED = null;

      $(".popup").css("display", "none");
      $("html,body").css("cursor", "default");
    }
  }
}
function updateStickyDiv() {
  var pos = new THREE.Vector3();
  pos = pos.setFromMatrixPosition(lock.matrixWorld);
  pos.project(camera);

  var widthHalf = window.innerWidth / 2;
  var heightHalf = window.innerHeight / 2;

  pos.x = pos.x * widthHalf + widthHalf;
  pos.y = -(pos.y * heightHalf) + heightHalf;
  pos.z = 0;

  $(".popup").css("left", pos.x + "px");
  $(".popup").css("top", pos.y + "px");
}
function highLightSector(currentSector) {
  for (var i = 0; i < spriteMaterial.length; i++) {
    if (currentSector !== i + 1) {
      makeGrey(spriteMaterial[i]);
    }
  }
}
function makeGrey(mat) {
  var cpA = { cR: mat.color.r, cG: mat.color.g, cB: mat.color.b };
  var tpA = { cR: 61 / 255, cG: 61 / 255, cB: 61 / 255 };
  var tween = new TWEEN.Tween(cpA).to(tpA, 300);
  tween.onUpdate(function () {
    mat.color.r = cpA.cR;
    mat.color.g = cpA.cG;
    mat.color.b = cpA.cB;
  });
  tween.start();
}
function returnColor(mat) {
  var colorToReturn = mat.colorToReturn;

  var rgba = hexToRgbA("#" + colorToReturn);

  var cpA = { cR: mat.color.r, cG: mat.color.g, cB: mat.color.b };
  var tpA = { cR: rgba.r / 255, cG: rgba.g / 255, cB: rgba.b / 255 };
  var tween = new TWEEN.Tween(cpA).to(tpA, 300);
  tween.onUpdate(function () {
    mat.color.r = cpA.cR;
    mat.color.g = cpA.cG;
    mat.color.b = cpA.cB;
  });
  tween.start();
}
function returnSectorColor() {
  for (var i = 0; i < spriteMaterial.length; i++) {
    returnColor(spriteMaterial[i]);
  }
}

function updateCompanyFilter() {
  for (var i = 0; i < dataObject.companies.length; i++) {
    for (var k = 0; k < dataObject.sectors.length; k++) {
      if (dataObject.sectors[k].id == dataObject.companies[i].sector)
        companiesArray[i].visible =
          !dataObject.companies[i].excluded && dataObject.sectors[k].on;
    }
  }
}

function zoomIn(obj) {
  var cpA = { scale: obj.scale.x };
  var tpA = { scale: bigDotSize };
  var tween = new TWEEN.Tween(cpA).to(tpA, 1000);
  tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    obj.zoomable = false;
    obj.scale.set(cpA.scale, cpA.scale, 1);
    maintainTorusScale();
  });
  tween.start();
  tween.onComplete(function () {
    obj.zoomable = true;
  });
}

function zoomOut(obj) {
  var cpA = { scale: obj.scale.x };
  var tpA = { scale: smallDotSize };
  var tween = new TWEEN.Tween(cpA).to(tpA, 1000);
  tween.easing(TWEEN.Easing.Quartic.Out);
  tween.onUpdate(function () {
    obj.zoomable = false;
    obj.scale.set(cpA.scale, cpA.scale, 1);
    maintainTorusScale();
  });
  tween.start();
  tween.onComplete(function () {
    obj.zoomable = true;
  });
}

function animate() {
  TWEEN.update();
  checkIntersections();
  renderer.render(scene, camera);

  updateStickyDiv();

  maintainTorusScale();

  requestAnimationFrame(animate);
}

$("html").bind("mousewheel", function (e) {
  if (zoomEnabled) {
    $(".not").fadeOut(300);
    if (e.originalEvent.wheelDelta / 120 > 0) {
      if (graphContainer.position.z < 50) {
        var cpA = {
          x: graphContainer.position.x,
          y: graphContainer.position.y,
          z: graphContainer.position.z,
        };
        var tpA = {
          x: graphContainer.position.x - mouse.x * 6,
          y: graphContainer.position.y - mouse.y * 6,
          z: graphContainer.position.z + 9,
        };
        var tween = new TWEEN.Tween(cpA).to(tpA, 400);
        tween.easing(TWEEN.Easing.Quartic.Out);
        tween.onUpdate(function () {
          graphContainer.position.x = cpA.x;
          graphContainer.position.y = cpA.y;
          graphContainer.position.z = cpA.z;
        });
        tween.start();
      }
    } else {
      if (graphContainer.position.z > 0) {
        var cpA = {
          x: graphContainer.position.x,
          y: graphContainer.position.y,
          z: graphContainer.position.z,
        };
        var tpA = {
          x: graphContainer.position.x + mouse.x * 6,
          y: graphContainer.position.y + mouse.y * 6,
          z: graphContainer.position.z - 9,
        };
        var tween = new TWEEN.Tween(cpA).to(tpA, 400);
        tween.easing(TWEEN.Easing.Quartic.Out);
        tween.onUpdate(function () {
          graphContainer.position.x = cpA.x;
          graphContainer.position.y = cpA.y;
          graphContainer.position.z = cpA.z;
        });
        tween.start();
      }
    }

    if (options2.capitalizationFilterEnabled) {
      updateLogos();
    }
    if (graphContainer.position.z > 1) {
      makeBig();
      $(".uir").fadeOut(600);
    } else {
      makeSmall();
      $(".uir").fadeIn(600);

      if (returnGraph) {
        var cpA = {
          x: graphContainer.position.x,
          y: graphContainer.position.y,
          z: graphContainer.position.z,
        };
        var tpA = { x: 0, y: -2, z: 0 };
        var tween = new TWEEN.Tween(cpA).to(tpA, 400);
        tween.easing(TWEEN.Easing.Quartic.Out);
        tween.onUpdate(function () {
          graphContainer.position.x = cpA.x;
          graphContainer.position.y = cpA.y;
          graphContainer.position.z = cpA.z;
          returnGraph = false;
        });
        tween.start();
        tween.onComplete(function () {
          returnGraph = true;
        });
      }
    }
  }
});
function makeBig() {
  hoverRatio = 1;
  for (var i = 0; i < graph.children.length; i++) {
    if (
      graph.children[i].type !== "torus2" &&
      graph.children[i].type !== "cylinder"
    ) {
      graph.children[i].scale.set(1, 1, 1);
    }
    if (graph.children[i].type == "Group") {
      graph.children[i].children[2].visible = false;
    }
  }
}
function makeSmall() {
  hoverRatio = 0.2;
  for (var i = 0; i < graph.children.length; i++) {
    if (
      graph.children[i].type !== "torus2" &&
      graph.children[i].type !== "cylinder"
    ) {
      graph.children[i].scale.set(0.2, 0.2, 1);
    }
    if (graph.children[i].type == "Group") {
      graph.children[i].children[2].visible = true;
    }
  }
}
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    // return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    var rgba = { r: (c >> 16) & 255, g: (c >> 8) & 255, b: c & 255, a: 1 };
    return rgba;
  }
  throw new Error("Bad Hex");
}
$(document.body).on("click", ".close", function () {
  console.log("close pressed");
  $(".filters-container").css("display", "block");
  $(".company-popup").fadeOut(300);
  $(".cloud-container").fadeIn(300);
  shutter.visible = false;

  $(".slider").css("bottom", "30px");

  var cpA2 = {
    scale: ourObject.scale.x,
    opacity: 1,
    r: graphContainer.rotation.y,
    z: graphContainer.position.z,
  };
  var tpA2 = { scale: 1, opacity: 0, r: oldRot, z: 20 };
  var tween2 = new TWEEN.Tween(cpA2).to(tpA2, 400);
  tween2.easing(TWEEN.Easing.Quartic.Out);
  tween2.onUpdate(function () {
    ourObject.scale.set(cpA2.scale, cpA2.scale, 1);
    shutter.material.opacity = cpA2.opacity;
    graphContainer.rotation.y = cpA2.r;
    graphContainer.position.z = cpA2.z;
  });
  tween2.onComplete(function () {
    clicksEnabled = true;
    hoversEnabled = true;
    zoomEnabled = true;
    ourObject.position.z = ourObject.prevPos;
    $(".centered").fadeIn(300);
    $(".uil").fadeIn(300);
    $(".uir").fadeIn(300);
  });
  tween2.start();
});
$(document.body).on("click", ".close-search", function () {
  var searchField = $("#filter__name");
  searchField.val("");
  searchField.change();
  currentFilters["Company_Name"] = undefined;
  checkFilters();
  filterObject();
});

$(document.body).on("click", ".close-search-location", function () {
  var searchField = $("#filter__location");
  searchField.val("");
  searchField.change();
  currentFilters["Company_Location"] = undefined;
  checkFilters();
  filterObject();
});

$(document.body).on("click", ".close-search-year", function () {
  var searchField = $("#filter__founded_year");
  searchField.val("");
  searchField.change();
  currentFilters["Company_Founded_Year"] = undefined;
  checkFilters();
  filterObject();
});

$(document.body).on("click", ".clr", function () {
  var newColors;
  if ($(this).attr("id") == "clr1") {
    newColors = options.sectorColors;
  }
  if ($(this).attr("id") == "clr2") {
    newColors = options.sectorColors2;
  }
  if ($(this).attr("id") == "clr3") {
    newColors = options.sectorColors3;
  }
  console.log(newColors);
  dataObject.companies.forEach((item, index) => {
    for (var i = 0; i < dataObject.sectors.length; i++) {
      if (item.sector == dataObject.sectors[i].id) {
        var subsectionIndex = getSubsectionIndex(item);
        var colorString =
          newColors[i].length > subsectionIndex
            ? newColors[i][subsectionIndex]
            : newColors[i][0];
        var outerColor = "0x" + colorString;
      }
    }
    outerRingMat.color.setHex(outerColor);
    flatRingMat.color.setHex(outerColor);
  });
});

// $(".range-slider__range").on("input change", function () {
//   const value = parseInt(this.value);
//   let actualValue = value;
//   if (currentFilterCategory === "number_of_employees") {
//     $(".range-slider__value").text(employeeRanges[value]);
//     actualValue = value;
//   } else {
//     $(".range-slider__value").text(this.value);
//     actualValue = this.value;
//   }
//   $("#range-actual-value").val(actualValue);
//   filterObject();
// });

$(".scrollbar").mouseover(function () {
  zoomEnabled = false;
});
$(".scrollbar").mouseout(function () {
  zoomEnabled = true;
});
$(".group").mouseover(function () {
  clicksEnabled = false;
});
$(".group").mouseout(function () {
  clicksEnabled = true;
});
$(document.body).on("click", ".c100", function () {
  var id = this.id;
  var lastChar = id.substr(id.length - 1);
  var sectorHovered = dataObject.sectors[lastChar].id;

  if ($(this).hasClass("on")) {
    $(this).removeClass("on");
    $(this).addClass("off");
    dataObject.sectors[lastChar].on = false;
    for (var i = 0; i < companiesArray.length; i++) {
      if (companiesArray[i].children[0].sector == sectorHovered) {
        companiesArray[i].visible = false;
      }
    }
    for (var i = 0; i < graph.children.length; i++) {
      if (
        graph.children[i].type == "investorTorus" &&
        $(this).hasClass("p26")
      ) {
        graph.children[i].visible = false;
      }

      if (graph.children[i].type == "companyTorus" && $(this).hasClass("p74")) {
        graph.children[i].visible = false;
      }
    }
  } else {
    $(this).removeClass("off");
    $(this).addClass("on");
    dataObject.sectors[lastChar].on = true;
    for (var i = 0; i < companiesArray.length; i++) {
      if (
        companiesArray[i].children[0].sector == sectorHovered &&
        !dataObject.companies[i].excluded
      ) {
        companiesArray[i].visible = true;
      }
    }
    for (var i = 0; i < graph.children.length; i++) {
      if (
        graph.children[i].type == "investorTorus" &&
        $(this).hasClass("p26")
      ) {
        graph.children[i].visible = true;
      }

      if (graph.children[i].type == "companyTorus" && $(this).hasClass("p74")) {
        graph.children[i].visible = true;
      }
    }
  }
});

$(document.body).on("click", ".switcher", function () {
  if ($(".switcher").hasClass("on")) {
    $(".switcher").removeClass("on");
    $("html,body").removeClass("light");
    $(".c100").removeClass("light");
    $(".bar2").removeClass("light");
    $("label").removeClass("light");
    $("input").removeClass("light");
    $(".header-big").removeClass("light");
    $(".count").removeClass("light");
    $(".scrollbar").removeClass("light");
  } else {
    $(".switcher").addClass("on");
    $("html,body").addClass("light");
    $(".c100").addClass("light");
    $(".bar2").addClass("light");
    $("label").addClass("light");
    $("input").addClass("light");
    $(".header-big").addClass("light");
    $(".count").addClass("light");
    $(".scrollbar").addClass("light");
  }
});
$(document.body).on("click", ".company-list", function () {
  $(".list-container").fadeIn(500);

  hoversEnabled = false;

  var companiesList = [];
  var totalCounter = 0;
  var counter = 0;
  var listContainer1 = $(".list1");
  var listContainer2 = $(".list2");
  var listContainer3 = $(".list3");

  listContainer1.html("");
  listContainer2.html("");
  listContainer3.html("");

  for (var i = 0; i < dataObject.companies.length; i++) {
    if (!dataObject.companies[i].excluded && companiesArray[i].visible) {
      totalCounter++;
      companiesList.push(dataObject.companies[i]);
    }
  }

  var colAmount = Math.round(totalCounter / 3) + 1;

  console.log("col amount: ", colAmount);

  for (var i = 0; i < dataObject.companies.length; i++) {
    if (!dataObject.companies[i].excluded && companiesArray[i].visible) {
      counter++;
      var element =
        '<div class="list-item" id="' +
        i +
        '">' +
        '<div class="name">' +
        counter +
        ". " +
        dataObject.companies[i].Company_Name +
        "</div>" +
        '<div class="year">Founded: <span class="highlight">' +
        dataObject.companies[i].Company_Founded_Year +
        "</span></div>" +
        '<div class="cap">Capitalization: $ <span class="highlight">' +
        dataObject.companies[i].fullData.capitalization +
        " m</span></div>" +
        "</div>";
      if (counter <= colAmount) {
        listContainer1.append(element);
      } else if (counter <= colAmount * 2) {
        listContainer2.append(element);
      } else {
        listContainer3.append(element);
      }
    }
  }
});
$(document.body).on("click", ".close-list", function () {
  $(".list-container").fadeOut(500);
  hoversEnabled = true;
});
$(document.body).on("click", ".list-item", function () {
  var id = $(this).attr("id");
  var fullData = dataObject.companies[id].fullData;
  $(".main-info2").html(
    '<div class="lname">Name: <span class="value">' +
      fullData.name +
      "</span></div>" +
      '<div class="lname">Capitalization: <span class="value">$ ' +
      fullData.capitalization +
      " m</span></div>" +
      '<div class="lname">Industry: <span class="value">' +
      fullData.industry +
      "</span></div>" +
      '<div class="lname">Technology: <span class="value">' +
      fullData.technology +
      "</span></div>" +
      '<div class="lname">Location: <span class="value">' +
      fullData.location +
      "</span></div>" +
      '<div class="lname">Founded date: <span class="value">' +
      fullData.founded +
      "</span></div>" +
      '<div class="lname">Employees number: <span class="value">' +
      fullData.employees +
      "</span></div>" +
      '<div class="lname">CB Rank: <span class="value">' +
      fullData.cbRank +
      "</span></div>" +
      '<div class="scrollbar4 style-1">' +
      fullData.description +
      "</div>" +
      '<div class="lname">Website: <span class="value">' +
      fullData.url +
      "</span></div>" +
      '<div class="lname">Email: <span class="value">' +
      fullData.email +
      "</span></div>" +
      '<div class="lname">Twitter: <span class="value">' +
      fullData.linkedin +
      "</span></div>"
  );
});
$(document.body).on("click", ".cloud-link", function (event) {
  event.preventDefault();

  var clickedId = $(this).attr("id").slice(6);

  var companyCategory = companyCategories[clickedId];

  console.log(clickedId, " -x- ", companyCategory);
  for (var i = 0; i < dataObject.companies.length; i++) {
    if (dataObject.companies[i].Market) {
      if (dataObject.companies[i].Market == companyCategory) {
        console.log(
          dataObject.companies[i].Market,
          " -compare- ",
          companyCategory
        );

        companiesArray[i].visible = true;
        dataObject.companies[i].excluded = false;
      } else {
        companiesArray[i].visible = false;
        dataObject.companies[i].excluded = true;
      }
    } else {
      companiesArray[i].visible = true;
    }
  }
  updateCounters();
});

$(document.body).on("click", ".company-reset", function () {
  for (var i = 0; i < dataObject.companies.length; i++) {
    if (dataObject.companies[i].Market) {
      dataObject.companies[i].excluded = false;
      companiesArray[i].visible = true;
    }
  }

  updateCounters();
});
