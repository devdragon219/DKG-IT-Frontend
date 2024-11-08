export const UK_MAP_UI = `
<!DOCTYPE html>
<html class="dark-layout" lang="ena" data-layout="dark-layout" data-textdirection="ltr">
<!-- BEGIN: Head-->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <title>Uk Iframe</title>

    <link rel="apple-touch-icon" href="https://platform.dkv.global/files/new_design/app-assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" type="image/x-icon" href="{% static 'favicon.png' %}">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
          rel="stylesheet">

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="https://platform.dkv.global/files/new_design/app-assets/css/bootstrap.css">
    <link rel="stylesheet" href="https://platform.dkv.global/files/new_design/app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="https://platform.dkv.global/files/new_design/app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="https://platform.dkv.global/files/new_design/app-assets/css/components.css">
    <link rel="stylesheet" type="text/css"
          href="https://platform.dkv.global/files/new_design/app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css"
          href="https://platform.dkv.global/files/new_design/app-assets/css/themes/bordered-layout.css">
    <link rel="stylesheet" type="text/css"
          href="https://platform.dkv.global/files/new_design/app-assets/css/themes/semi-dark-layout.css">

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css"
          href="https://platform.dkv.global/files/new_design/app-assets/css/core/menu/menu-types/vertical-menu.css">
    <link rel="stylesheet" type="text/css"
          href="https://platform.dkv.global/files/new_design/app-assets/css/pages/dashboard-ecommerce.css">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="https://platform.dkv.global/files/new_design/assets/css/style.css">
    <!-- END: Custom CSS-->
    <script src="https://platform.dkv.global/js/konva.min.js"></script>
    <script src="https://platform.dkv.global/js/iframe_uk_map.js"></script>
    <script src="https://platform.dkv.global/js/chart.min.js"></script>

    <!-- Hotjar Tracking Code for platform.dkv.global -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2633755,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>

    <style type="text/css">
        .white-shadow {
            position: absolute;
            top: -10px;
            left: -10px;
            width: calc(100% + 20px);
            height: calc(100% + 20px);
            border-radius: 50%;
            background-image: radial-gradient(white, transparent);
            opacity: 0;
        }

        .ambilight::after {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            content: "";
            width: 100%;
            height: 100%;
            background-color: white;
            -webkit-filter: blur(8px);
        }

        ::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 6px;
            height: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #192136;
            margin-left: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background: #7367f0;;
            border-radius: 4px !important;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
            -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
        }

        .activetbody {
            color: #fff;
            background-color: #7367f0;
            text-decoration: none;
        }

        .line {
            border-radius: 14px;
            height: 0.5vw;
            margin-bottom: 0;
            background: pink;
            width: 100%;
            margin-top: 2px;
        }

        .line-container {
            border-radius: 14px;
            background: #464857;
            margin-bottom: 40px;
        }

        .line-crit-word {
            display: inline;
            font-size: 12px;
        }

        .ambilight::before {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            content: "";
            width: 100%;
            height: 100%;
            background-color: black;
            -webkit-filter: blur(13px);
        }

        .flourish-credit {
            display: none !important;
        }

        .flourish-embed {
            background-color: black !important;
        }

        #parameters-table-body > tr > td:nth-child(2) {
            width: 50px;
            font-size: 11px;
        }

        .table th,
        .table td {
            padding: 0.72rem;
        }

        .card-statistics {
            padding: 7px 10px !important;
        }

        .card-statistics .avatar-content {
            width: 48px;
            height: 48px;
        }

        .card-statistics .avatar-content .avatar-icon {
            width: 24px;
            height: 24px;
        }

        .colorHandle:hover {
            background-color: #303a57;
        }

        .max-height {
            max-height: 450px;
        }

        .mt-mb {
            margin-top: -12px;
            margin-bottom: -10px;
        }

        .content-africa {
            margin-bottom: -100px;
        }

        .mt-200 {
            margin-left: -50px;
        }

        @media (min-width: 2000px) {
            .mt-200 {
                margin-left: -20px;
            }
        }

        /* .map_block_height {
            height: 540px;
        } */

        .risk_top {
            margin-top: 200px;
        }

        @media (max-width: 575.98px) {
            .content_block_mobile {
                margin-top: 10%;
            }

            .map_block_height {
                height: 640px;
            }

            .risk_top {
                margin-top: 166px;
            }

            .chart_1 {
                width: 700px;
            }

            .chart_1_scroll {
                overflow-x: auto;
            }
        }

        @media (max-width: 1880px) {
            .mt-200 {
                margin-left: -36px;
            }
        }

        body {
            overflow-x: hidden;
        }

        .main-menu .navbar-header {
            height: 5.5rem;
        }

        .main-menu .navbar-header .navbar-brand .brand-text {
            font-size: 1rem;
            line-height: 1;


        }

        .table-pos {
            margin-top: -13rem;
            margin-left: 26px;
            width: 40%;
            height: 394px;
        }

        tr {
            font-size: 11px;
            height: 25px;
            width: 30px;
        }

        td {
            padding: 0;
        }


        @media (max-width: 1610px) {
            .table-pos {
                margin-top: -7rem;
                margin-left: 30px;
                width: 95%;
                height: 204px;
            }

            .risk_top {
                margin-top: 166px;
            }
        }

        @media (max-width: 1386px) {
            .table-pos {
                margin-top: -12rem;
                margin-left: 30px;
                width: 95%;
                height: 258px;
            }
        }

        @media (max-width: 1200px) {
            .table-pos {
                margin-top: -10rem;
                margin-left: 30px;
                width: 95%;
                height: 246px;
            }
        }

        @media (max-width: 1000px) {
            .table-pos {
                margin-top: -36rem;
                margin-left: 442px;
                width: 42%;
                height: 374px;
            }

            .map-card {
                height: 47rem;
            }
        }

        @media (max-width: 768px) {
            .table-pos {
                margin-top: -36rem;
                margin-left: 429px;
                width: 40%;
                height: 374px;;
            }

            .map-card {
                flex: 0 0 100%;
                max-width: 100%;
                height: 47rem;
            }
        }


        @media (min-width: 1880px) {
            .table-pos {
                margin-top: -12rem;
                margin-left: 37px;
                width: 41%;
                height: 315px;
            }

            .risk_top {
                margin-top: 166px;
            }
        }

        @media (min-width: 2000px) {
            .table-pos {
                margin-top: -12rem;
                margin-left: 8px;
                width: 40%;
                height: 315px;
            }
        }

        @media (min-width: 2250px) {
            .table-pos {
                margin-top: -12rem;
                margin-left: 10px;
                width: 33%;
                height: 222px;
            }
        }

        @media (min-width: 2600px) {
            .table-pos {
                margin-top: -12rem;
                margin-left: 13px;
                width: 30%;
                height: 222px;
            }
        }

        @media (min-width: 2900px) {
            .table-pos {
                margin-top: -34rem;
                margin-left: 41rem;
                width: 30%;
                height: 510px;
            }
        }

        .main-menu .navbar-header .navbar-brand .brand-logo img {
            width: 160px;
            height: 70px;
            max-width: none;
        }

        .main-menu .navbar-header {
            height: 7.45rem;
        }
        /* .header-navbar.floating-nav{
            width: calc(100vw - (100vw - 100%) - calc(2rem * 2) - 0px) !important;
        } */
        html .content.app-content {
        padding: calc(0rem + -0.55rem + 1.3rem) 2rem 0 !important;
        }
        html .content {
            margin-left: 0px !important;
        }
    </style>

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="vertical-layout vertical-menu-modern  navbar-floating footer-static  " data-open="click"
      data-menu="vertical-menu-modern" data-col="">
<div class="app-content content dark-layout" id="uk-map-page">
    <!-- <div class="content-overlay"></div> -->
    <!-- <div class="header-navbar-shadow"></div> -->
    <div class="content-wrapper content_block_mobile">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <!-- Dashboard Ecommerce Starts -->
            <section id="dashboard-ecommerce" class='charity-dash'>
                <div class="row match-height">
                    <!-- Statistics Card -->
                    <!--/ Statistics Card -->
                </div>
                <div class="row match-height">
                    <div class="col-lg-4 col-12"></div>
                    <div class="col-lg-4 col-12" style="max-width:44%">
                        <div class="card card-tiny-line-stats ambilight" id="uk-map-card">
                            <div class="card-body pb-50 map_block_height" id="map-parent">
                                <h6 id="head-text" style="margin-top: 10px; text-align: center;"></h6>
                                <div>
                                    <div id="map" style="height: 590px; z-index: 0;"></div>
                                    <div style="margin-top: 0px !important;">
                                        <div style="margin-left:10%;" class="risk_top">
                                            <h6>&nbsp;</h6>
                                        </div>
                                        <div style="margin-left:10%;width: 79%;display: flex;
                                            flex-direction: row;
                                            align-items: flex-end;
                                            justify-content: space-between;">
                                        <span class="line-crit-word" style=" text-align: justify;">No
                                            data</span>
                                            <span class="line-crit-word" style=" text-align: justify;">Minor</span>
                                            <span class="line-crit-word" style=" text-align: justify;">Medium</span>
                                            <span class="line-crit-word" style=" text-align: justify;">High</span>
                                            <span id="lastCritLabel" class="line-crit-word"
                                                  style="width: 20%; text-align: right;">Extreme</span>
                                        </div>
                                        <div id="lineForCritical" style="margin-left: 10%;width: 80%;">
                                            <div class="line-container">
                                                <div class="val-1 line line" style="background: linear-gradient(to right, rgb(252, 252, 252) 0%, rgb(38, 126, 211) 100%); width: 100%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12"></div>
                </div>
            </section>
        
        </div>
        <!--/ Revenue Report Card -->
    </div>

</div>
<footer class="footer footer-static footer-light">
</footer>
<button class="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up"></i></button>
<!-- END: Footer-->


<!-- BEGIN: Vendor JS-->
<script src="https://platform.dkv.global/files/new_design/app-assets/vendors/js/vendors.min.js"></script>
<!-- BEGIN Vendor JS-->
<!-- BEGIN: Theme JS-->
<script src="https://platform.dkv.global/files/new_design/app-assets/js/core/app-menu.js"></script>
<script src="https://platform.dkv.global/files/new_design/app-assets/js/core/app.js"></script>
<script src="https://platform.dkv.global/files/new_design/app-assets/js/scripts/customizer.min.js"></script>
<!-- END: Theme JS-->
</body>
<!-- END: Body-->

</html>`;

export const country_value = {
  "South West": "300",
  "South East": "234",
  "England": "123",
  "East Midlands": "567",
  "West Midlands": "456",
  "Wales": "345",
  "North West": "123",
  "Yorks/Humber": "678",
  "North East": "345",
  "Scotland": "456",
  "Northern Ireland": "123",
  "London": "567",
};

export const city_value = {
  London: "4978",
  Manchester: "157",
  Edinburgh: "133",
  Cambridge: "119",
  Bristol: "118",
  Birmingham: "90",
  Leeds: "83",
  Glasgow: "65",
  Belfast: "63",
  Nottingham: "43",
  "Newcastle Upon Tyne": "40",
  Sheffield: "39",
  Cardiff: "37",
  Liverpool: "34",
  Coventry: "33",
  Guildford: "33",
  "Milton Keynes": "30",
  Southampton: "24",
  Norwich: "23",
  Leicester: "21",
  Northampton: "19",
  Oxford: "18",
  Reading: "17",
  Basingstoke: "17",
  Cheltenham: "17",
  York: "17",
  "Covent Garden": "16",
  Harrow: "16",
  Aberdeen: "16",
  Slough: "15",
  Warrington: "15",
  Bedford: "15",
  Farnborough: "14",
  Watford: "14",
  Hove: "13",
  Croydon: "13",
  Stockport: "12",
  Harrogate: "12",
  Ipswich: "11",
  Newbury: "11",
  Crawley: "11",
  Wokingham: "11",
  Kent: "11",
  Derby: "11",
  Maidenhead: "11",
  Swindon: "10",
  Colchester: "10",
  Dundee: "10",
  "Saint Albans": "10",
  Bracknell: "10",
  Poole: "10",
  Woking: "10",
  Luton: "10",
  Banbury: "10",
  Gloucester: "9",
  Stevenage: "9",
  Middlesbrough: "9",
  Gateshead: "9",
  "Hemel Hempstead": "9",
  Hatfield: "9",
  Doncaster: "9",
  Abingdon: "9",
  Solihull: "9",
  Telford: "9",
  Altrincham: "8",
  Bolton: "8",
  Chippenham: "8",
  Chelmsford: "8",
  Wakefield: "8",
  Durham: "8",
  Redditch: "8",
  Huddersfield: "8",
  "High Wycombe": "8",
  Peterborough: "7",
  Loughborough: "7",
  Plymouth: "7",
  Leatherhead: "7",
  Aylesbury: "7",
  Camberley: "7",
  Didcot: "7",
  Warwick: "6",
  Horsham: "6",
  Lisburn: "6",
  Blackburn: "6",
  "Tunbridge Wells": "6",
  Chesterfield: "6",
  "Leamington Spa": "6",
  Dartford: "6",
  Brighton: "6",
  Bradford: "6",
  Lewes: "6",
  Maidstone: "6",
  Chorley: "6",
  Farnham: "6",
  Worthing: "6",
  Swansea: "6",
  Cranfield: "6",
  Winchester: "6",
  Northwich: "6",
  Marlow: "6",
  "Kingston Upon Thames": "6",
  Worcester: "6",
  Crewe: "6",
  Weybridge: "6",
  Windsor: "6",
  Bridgwater: "5",
  Wolverhampton: "5",
  Hitchin: "5",
  Richmond: "5",
  Uxbridge: "5",
  Sevenoaks: "5",
  Livingston: "5",
  Christchurch: "5",
  Bromsgrove: "5",
  Hull: "5",
  Canterbury: "5",
  Sutton: "5",
  Mayfair: "5",
  Rickmansworth: "5",
  Witney: "5",
  Cirencester: "5",
  Romsey: "5",
  Penryn: "5",
  Romford: "5",
  "Stratford-upon-avon": "5",
  Buckingham: "5",
  Daresbury: "5",
  Hastings: "5",
  Shoreditch: "4",
  "North Shields": "4",
  "Staines-upon-thames": "4",
  Sunderland: "4",
  Edgware: "4",
  Epsom: "4",
  Halesowen: "4",
  Knaresborough: "4",
  Godalming: "4",
  Lichfield: "4",
  Hook: "4",
  Fareham: "4",
  Barnet: "4",
  Theale: "4",
  "Sutton Coldfield": "4",
  Tewkesbury: "4",
  Stroud: "4",
  Stafford: "4",
  Portsmouth: "4",
  Bromley: "4",
  Rochdale: "4",
  Tamworth: "4",
  Eastleigh: "4",
  Hessle: "4",
  Skipton: "4",
  Rochester: "4",
  Berkhamsted: "4",
  Macclesfield: "4",
  Dover: "4",
  Darlington: "4",
  Carlisle: "4",
  Corsham: "4",
  Dunstable: "4",
  "West Malling": "4",
  Newport: "4",
  Wetherby: "4",
  Kettering: "4",
  Chester: "4",
  "Welwyn Garden City": "4",
  Halifax: "4",
  "Kings Langley": "4",
  Chichester: "4",
  Wickford: "3",
  Stourbridge: "3",
  Burnley: "3",
  "Newcastle Under Lyme": "3",
  Ilford: "3",
  Rotherham: "3",
  Malvern: "3",
  Braintree: "3",
  Wilmslow: "3",
  "Stoke-on-trent": "3",
  Knutsford: "3",
  "Henley On Thames": "3",
  Billericay: "3",
  Oldbury: "3",
  Enfield: "3",
  Surbiton: "3",
  Bury: "3",
  Egham: "3",
  Grantham: "3",
  Stanmore: "3",
  Kidderminster: "3",
  Teddington: "3",
  Chesham: "3",
  Sale: "3",
  "Bury Saint Edmunds": "3",
  Harwell: "3",
  Salford: "3",
  "Market Harborough": "3",
  Westminster: "3",
  Redhill: "3",
  Wigan: "3",
  Burnham: "3",
  "Thames Ditton": "3",
  Winnersh: "3",
  Alcester: "3",
  Southport: "3",
  Barking: "3",
  Sedgefield: "3",
  Headington: "3",
  Daventry: "3",
  Sandwich: "3",
  Yeovil: "3",
  "Clay Cross": "3",
  Ashford: "3",
  Bournemouth: "3",
  Whitchurch: "3",
  Bushey: "3",
  Dorchester: "3",
  Scarborough: "3",
  Littlehampton: "3",
  Letchworth: "3",
  Borehamwood: "3",
  Royston: "3",
  Frome: "3",
  Brough: "3",
  Cramlington: "3",
  Amersham: "3",
  Fleet: "3",
  Snodland: "3",
  Reigate: "3",
  Sittingbourne: "3",
  Brentwood: "3",
  "Saffron Walden": "3",
  Brentford: "3",
  Andover: "3",
  Claygate: "3",
  Malton: "2",
  Wallasey: "2",
  Stocksfield: "2",
  "Burton-on-trent": "2",
  "King's Lynn": "2",
  Newmarket: "2",
  Chobham: "2",
  Wembley: "2",
  Birkenhead: "2",
  Bellshill: "2",
  Ealing: "2",
  Mitcham: "2",
  Mildenhall: "2",
  Biggleswade: "2",
  "New Malden": "2",
  "Potters Bar": "2",
  Derry: "2",
  Spalding: "2",
  Lymington: "2",
  Hamble: "2",
  Petersfield: "2",
  Waterlooville: "2",
  Ringwood: "2",
  Edenbridge: "2",
  Aldershot: "2",
  Wells: "2",
  Gravesend: "2",
  Chartham: "2",
  Paisley: "2",
  Uppingham: "2",
  Tring: "2",
  Shrewsbury: "2",
  Twickenham: "2",
  Shefford: "2",
  Chatham: "2",
  Wallingford: "2",
  Oadby: "2",
  Boston: "2",
  "West Burton": "2",
  Stamford: "2",
  Oldham: "2",
  "Ashby De La Zouch": "2",
  Hyde: "2",
  Rawtenstall: "2",
  Barnsley: "2",
  Colne: "2",
  Rugeley: "2",
  Thame: "2",
  Haslingden: "2",
  Nelson: "2",
  Padiham: "2",
  Worsley: "2",
  "White Waltham": "2",
  Whyteleafe: "2",
  "Kingston Upon Hull": "2",
  Winsford: "2",
  Kenilworth: "2",
  Rugby: "2",
  Aberystwyth: "2",
  Crowborough: "2",
  Devizes: "2",
  Falmer: "2",
  Trowbridge: "2",
  Whitley: "2",
  Bexhill: "2",
  Caerphilly: "2",
  Nuneaton: "2",
  "Waltham Abbey": "2",
  "Newcastle upon Tyne": "2",
  Benfleet: "2",
  Maldon: "2",
  Witham: "2",
  Basildon: "2",
  Avonmouth: "2",
  Runcorn: "2",
  Congleton: "2",
  Haslemere: "2",
  Antrim: "2",
  Ulverston: "2",
  Gilsland: "2",
  Featherstone: "2",
  Staplefield: "2",
  Billingham: "2",
  "Haywards Heath": "2",
  Swadlincote: "2",
  "East Grinstead": "2",
  Redruth: "2",
  "Burgess Hill": "2",
  "Shoreham-by-sea": "2",
  Hayle: "2",
  Sidcup: "2",
  "East Preston": "2",
  Aldridge: "2",
  Brighouse: "2",
  Wimborne: "2",
  Tipton: "2",
  Edgbaston: "2",
  Quedgeley: "2",
  Aldermaston: "2",
  Thatcham: "2",
  Kensington: "2",
  Hammersmith: "2",
  Isleworth: "2",
  "Sunbury-on-Thames": "2",
  Ascot: "2",
  Hackney: "2",
  Erith: "2",
  Chiswick: "2",
  Hillington: "2",
  Chessington: "2",
  "Hatch End": "2",
  "Woodford Green": "2",
  Wimbledon: "2",
  Beckenham: "2",
  Purley: "2",
  Hounslow: "2",
  Wallington: "2",
  Orpington: "2",
  Northwood: "2",
  Helsinki: "2",
  Castleford: "1",
  Yeadon: "1",
  Bampton: "1",
  Zug: "1",
  Selby: "1",
  Otley: "1",
  Bicester: "1",
  "Gilling East": "1",
  Upton: "1",
  Ilkley: "1",
  Summertown: "1",
  Shrivenham: "1",
  Elland: "1",
  Batley: "1",
  Hampshire: "1",
  Flockton: "1",
  Faringdon: "1",
  Eindhoven: "1",
  Cleckheaton: "1",
  Bingley: "1",
  Charlbury: "1",
  Heckmondwike: "1",
  Adel: "1",
  Bloxham: "1",
  Horsforth: "1",
  Fictional: "1",
  Guisborough: "1",
  Saltaire: "1",
  Ampthill: "1",
  Zurich: "1",
  "Higham Ferrers": "1",
  Mansfield: "1",
  "Chipping Norton": "1",
  Edington: "1",
  "Castle Combe": "1",
  Sywell: "1",
  Annesley: "1",
  Corby: "1",
  Marlborough: "1",
  Brixworth: "1",
  Haltwhistle: "1",
  Alnwick: "1",
  Westbury: "1",
  Hallow: "1",
  Bewdley: "1",
  Evesham: "1",
  Hertfordshire: "1",
  "Berwick-upon-tweed": "1",
  Hexham: "1",
  "Broad Town": "1",
  Calne: "1",
  Shipley: "1",
  "Kirkby In Ashfield": "1",
  Rushden: "1",
  Rothbury: "1",
  Malmesbury: "1",
  "Chipping Warden": "1",
  Silverstone: "1",
  Ollerton: "1",
  Copenhagen: "1",
  Worksop: "1",
  Beeston: "1",
  Newton: "1",
  Warminster: "1",
  "Bradford-on-avon": "1",
  Atlanta: "1",
  Retford: "1",
  "Yardley Hastings": "1",
  "Braintree Technologies is from Braintree": "1",
  Antwerp: "1",
  Ripponden: "1",
  Kempston: "1",
  Ellon: "1",
  "Aley Green": "1",
  Cheadle: "1",
  Addlestone: "1",
  "West Byfleet": "1",
  Gomshall: "1",
  Hersham: "1",
  Brookwood: "1",
  Elford: "1",
  Gorseinon: "1",
  Tickhill: "1",
  Burntwood: "1",
  Chapeltown: "1",
  "Whitley Bay": "1",
  Newcastle: "1",
  Stockton: "1",
  "Royal Leamington Spa": "1",
  "Bidford-on-avon": "1",
  Southam: "1",
  Auckley: "1",
  Westcott: "1",
  Cannock: "1",
  Lanark: "1",
  Stowmarket: "1",
  Caterham: "1",
  Merstham: "1",
  Warlingham: "1",
  Byfleet: "1",
  Stoneleigh: "1",
  Holton: "1",
  Hadleigh: "1",
  Eye: "1",
  Wisley: "1",
  "Stoke-on-Trent": "1",
  Bungay: "1",
  Haverhill: "1",
  Woodbridge: "1",
  Risby: "1",
  Felixstowe: "1",
  "Sunbury-on-thames": "1",
  Kippen: "1",
  "East Molesey": "1",
  "Leighton Buzzard": "1",
  Ayr: "1",
  "Hook Norton": "1",
  Oakham: "1",
  Kingswinford: "1",
  Bridgnorth: "1",
  "Craven Arms": "1",
  Rustington: "1",
  Billingshurst: "1",
  Oswestry: "1",
  Balcombe: "1",
  Ludlow: "1",
  Pulborough: "1",
  Blythe: "1",
  "Builth Wells": "1",
  Blackford: "1",
  Tenby: "1",
  Fishguard: "1",
  Steyning: "1",
  Lavant: "1",
  Hassocks: "1",
  Gatwick: "1",
  "Market Drayton": "1",
  "West Bromwich": "1",
  Clevedon: "1",
  Bath: "1",
  Coleshill: "1",
  "Henley In Arden": "1",
  Blagdon: "1",
  Humber: "1",
  Wrington: "1",
  "Stratford On Avon": "1",
  Templecombe: "1",
  Crewkerne: "1",
  Langport: "1",
  Paulton: "1",
  Crowcombe: "1",
  Chard: "1",
  Williton: "1",
  Hatton: "1",
  Radstock: "1",
  Portishead: "1",
  Cradley: "1",
  "Brierley Hill": "1",
  Henfield: "1",
  Cheshunt: "1",
  Northallerton: "1",
  Milton: "1",
  Brixham: "1",
  Totnes: "1",
  Braunton: "1",
  Stalbridge: "1",
  Wareham: "1",
  Blandford: "1",
  Dalbeattie: "1",
  Stotfold: "1",
  "Broughty Ferry": "1",
  Cottingham: "1",
  Grimston: "1",
  "Stamford Bridge": "1",
  Rye: "1",
  Nutley: "1",
  Ilfracombe: "1",
  Lympstone: "1",
  Torquay: "1",
  Cullompton: "1",
  Chagford: "1",
  Paignton: "1",
  Ashburton: "1",
  Tiverton: "1",
  Exeter: "1",
  "Ottery Saint Mary": "1",
  "Clyst Honiton": "1",
  Seaton: "1",
  "Stoke Gabriel": "1",
  Honiton: "1",
  "Newton Abbot": "1",
  Barnstaple: "1",
  "Weston Upon Trent": "1",
  Portslade: "1",
  Eastbourne: "1",
  Uckfield: "1",
  Grays: "1",
  "Richmond Upon Thames": "1",
  Acton: "1",
  Greenford: "1",
  Southall: "1",
  Barbican: "1",
  "West Drayton": "1",
  Maisemore: "1",
  Stonehouse: "1",
  Dursley: "1",
  Kemble: "1",
  Crowthorne: "1",
  Kelty: "1",
  Grangemouth: "1",
  Loughton: "1",
  Rochford: "1",
  Battle: "1",
  "Great Baddow": "1",
  "Buckhurst Hill": "1",
  "Great Chesterford": "1",
  Copford: "1",
  "Southend-on-sea": "1",
  "Burnham On Crouch": "1",
  "East Tilbury": "1",
  Rayleigh: "1",
  "Clacton-on-sea": "1",
  Dunmow: "1",
  "Earls Colne": "1",
  Epping: "1",
  Stansted: "1",
  "South Queensferry": "1",
  Hilton: "1",
  Buxton: "1",
  "Whaley Bridge": "1",
  "Farnham Common": "1",
  Llanelli: "1",
  "Saint Mellons": "1",
  Llanishen: "1",
  Haddenham: "1",
  Stanground: "1",
  Barton: "1",
  "Market Hill": "1",
  Stokenchurch: "1",
  Bletchley: "1",
  Willen: "1",
  "Princes Risborough": "1",
  Wycombe: "1",
  Winslow: "1",
  "Bourne End": "1",
  "Steeple Claydon": "1",
  Neston: "1",
  Waddesdon: "1",
  Brightwalton: "1",
  Wooburn: "1",
  Kingsey: "1",
  Sunningdale: "1",
  Bridgend: "1",
  Pencoed: "1",
  Blackmill: "1",
  "Saint Boswells": "1",
  Galashiels: "1",
  Kelso: "1",
  Chirnside: "1",
  "Ebbw Vale": "1",
  Bray: "1",
  Lymm: "1",
  Nantwich: "1",
  Tideswell: "1",
  Bude: "1",
  Ashbourne: "1",
  Ripley: "1",
  Prestatyn: "1",
  Denbigh: "1",
  Brigham: "1",
  Staveley: "1",
  Kendal: "1",
  Appleby: "1",
  "Teesside County Borough": "1",
  Chilton: "1",
  "Stockton-on-tees": "1",
  "Bishop Auckland": "1",
  "Newton Aycliffe": "1",
  Stanley: "1",
  Liskeard: "1",
  "Alderley Edge": "1",
  Penzance: "1",
  Truro: "1",
  Saltash: "1",
  Newquay: "1",
  "Saint Austell": "1",
  "Colwyn Bay": "1",
  Llandudno: "1",
  "Penmaen-mawr": "1",
  Frodsham: "1",
  Bollington: "1",
  Chelford: "1",
  Woolston: "1",
  Ashley: "1",
  "Ellesmere Port": "1",
  Hoxton: "1",
  Rainham: "1",
  Morden: "1",
  "Paddock Wood": "1",
  Ormskirk: "1",
  Cleveleys: "1",
  "Bamber Bridge": "1",
  Clitheroe: "1",
  Higham: "1",
  "Borough Green": "1",
  Lenham: "1",
  Westerham: "1",
  Hildenborough: "1",
  Tonbridge: "1",
  Wrotham: "1",
  Margate: "1",
  Pembury: "1",
  Folkestone: "1",
  Cranbrook: "1",
  "Lower Darwen": "1",
  Cowes: "1",
  Shanklin: "1",
  Gaerwen: "1",
  Inverness: "1",
  Carrbridge: "1",
  "Park Street": "1",
  Twyford: "1",
  "Waltham Cross": "1",
  Hertford: "1",
  Redbourn: "1",
  "Bricket Wood": "1",
  Aldbury: "1",
  Buntingford: "1",
  Ware: "1",
  Barrowford: "1",
  Blackpool: "1",
  Banchory: "1",
  Magor: "1",
  Cumbernauld: "1",
  Motherwell: "1",
  Coatbridge: "1",
  Feltwell: "1",
  Wymondham: "1",
  Cromer: "1",
  "Downham Market": "1",
  Brundall: "1",
  "Great Yarmouth": "1",
  Holt: "1",
  Denver: "1",
  Forres: "1",
  Monmouth: "1",
  Chepstow: "1",
  Abergavenny: "1",
  Skelmersdale: "1",
  "Saint Helens": "1",
  Irby: "1",
  "St. Helens": "1",
  Flitton: "1",
  Londonderry: "1",
  Lincoln: "1",
  "South Hykeham": "1",
  Gainsborough: "1",
  Coalville: "1",
  Kibworth: "1",
  Syston: "1",
  Mountsorrel: "1",
  Burscough: "1",
  Morecambe: "1",
  Welwyn: "1",
  Westmill: "1",
  Kingston: "1",
  Keston: "1",
  "Kingston upon Thames": "1",
  "South Kensington": "1",
  Millbank: "1",
  "Camden Town": "1",
  "New Southgate": "1",
  Lambeth: "1",
  Southwark: "1",
  Hayes: "1",
  Woodley: "1",
  Heathrow: "1",
  Hampton: "1",
  Holborn: "1",
  Farringdon: "1",
  Carshalton: "1",
  Wandsworth: "1",
  "Belle Vue": "1",
  "Harrow On The Hill": "1",
  Greenwich: "1",
  Finchley: "1",
  Upminster: "1",
  Dagenham: "1",
  "South Croydon": "1",
  Chislehurst: "1",
  Bloomsbury: "1",
  Dalston: "1",
  Walthamstow: "1",
  london: "1",
  Finsbury: "1",
  Stepney: "1",
  Hanwell: "1",
  Tottington: "1",
  Horwich: "1",
  Northaw: "1",
  Brockenhurst: "1",
  Harpenden: "1",
  "Little Wymondley": "1",
  Elstree: "1",
  "Ross On Wye": "1",
  Leominster: "1",
  Havant: "1",
  Clanfield: "1",
  Blackbushe: "1",
  "New Milton": "1",
  "Lee On Solent": "1",
  Liphook: "1",
  Gosport: "1",
  Stockbridge: "1",
  Horndean: "1",
  "Chandlers Ford": "1",
  Carrington: "1",
  Fordingbridge: "1",
  Odiham: "1",
  Whiteley: "1",
  Cosham: "1",
  Alton: "1",
  "Marston Moretaine": "1",
  Llanbedr: "1",
  Heywood: "1",
  "Ashton-under-lyne": "1",
  Wythenshawe: "1",
  Farnworth: "1",
  Bredbury: "1",
  "Little Lever": "1",
  Ramsbottom: "1",
  Osaka: "1",
};

export const colours = {
  "South West": "#569cc6",
  "South East": "#abcfe4",
  England: "#398bbc",
  "East Midlands": "#569cc6",
  "West Midlands": "#398bbc",
  Wales: "#abcfe4",
  "North West": "#98c3de",
  "Yorks/Humber": "#abcfe4",
  "North East": "#398bbc",
  Scotland: "#abcfe4",
  "Northern Ireland": "#569cc6",
  London: "#abcfe4",
};

export const coordinates_for_display_name = {
  Scotland: {
    X: 260,
    Y: 110,
  },
  Wales: {
    X: 211,
    Y: 510,
  },
  "Northern Ireland": {
    X: 25,
    Y: 349,
  },
  "West Midlands": {
    X: 258,
    Y: 523,
  },
  "South West": {
    X: 274,
    Y: 620,
  },
  "South East": {
    X: 301,
    Y: 620,
  },
  England: {
    X: 389,
    Y: 550,
  },
  "East Midlands": {
    X: 314,
    Y: 500,
  },
  "North West": {
    X: 214,
    Y: 383,
  },
  "Yorks/Humber": {
    X: 305,
    Y: 412,
  },
  "North East": {
    X: 273,
    Y: 313,
  },
};

export const map_data = {
  polygons: [
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.241185,54.723335],[-1.251865,54.719623],[-1.270252,54.727169],[-1.305521,54.717522],[-1.301327,54.708101],[-1.319329,54.691357],[-1.344526,54.691121],[-1.330946,54.682134],[-1.347852,54.662421],[-1.341254,54.650212],[-1.380898,54.643917],[-1.335061,54.631324],[-1.328864,54.644002],[-1.316364,54.645235],[-1.299014,54.627982],[-1.256717,54.623351],[-1.23421,54.628877],[-1.209393,54.621685],[-1.19228,54.629466],[-1.18825,54.632605],[-1.173166,54.633715],[-1.157637,54.648206],[-1.175883,54.65342],[-1.199107,54.680586],[-1.194373,54.686053],[-1.192106,54.692529],[-1.188864,54.692412],[-1.188042,54.693362],[-1.196256,54.698584],[-1.174193,54.691882],[-1.174015,54.691875],[-1.176169,54.697686],[-1.240994,54.723194],[-1.241185,54.723335]]]}',
      metadata: ["Hartlepool"],

      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.198605,54.582868],[-1.252359,54.591315],[-1.262559,54.570293],[-1.282626,54.565284],[-1.270612,54.556024],[-1.285432,54.53625],[-1.282249,54.51838],[-1.234866,54.510316],[-1.146197,54.502822],[-1.137369,54.514995],[-1.15974,54.515837],[-1.16132,54.524979],[-1.199063,54.544497],[-1.166644,54.554234],[-1.198605,54.582868]]]}',
      metadata: ["Middlesbrough"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.791803,54.558313],[-0.794251,54.558443],[-0.844236,54.56971],[-0.853434,54.57178],[-0.898265,54.571266],[-0.93627,54.588109],[-0.947077,54.58741],[-0.961483,54.584913],[-1.000544,54.593238],[-1.036272,54.609194],[-1.040498,54.610786],[-1.041326,54.611449],[-1.05258,54.616469],[-1.072342,54.620163],[-1.112781,54.627709],[-1.125629,54.638077],[-1.136929,54.643188],[-1.135389,54.629695],[-1.154332,54.627703],[-1.150841,54.615136],[-1.13229,54.608574],[-1.151776,54.614531],[-1.157534,54.605417],[-1.146747,54.599082],[-1.160189,54.6045],[-1.197516,54.58211],[-1.187718,54.589741],[-1.198605,54.582868],[-1.166644,54.554234],[-1.199063,54.544497],[-1.16132,54.524979],[-1.15974,54.515837],[-1.137369,54.514995],[-1.146197,54.502822],[-1.11838,54.498199],[-1.094524,54.50676],[-1.036851,54.494044],[-1.003401,54.503012],[-0.952952,54.488036],[-0.880825,54.497047],[-0.848531,54.487973],[-0.848647,54.530004],[-0.826985,54.548575],[-0.800419,54.551011],[-0.791803,54.558313]]]}',
      metadata: ["Redcar and Cleveland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.19228,54.629466],[-1.209393,54.621685],[-1.23421,54.628877],[-1.256717,54.623351],[-1.299014,54.627982],[-1.316364,54.645235],[-1.328864,54.644002],[-1.335061,54.631324],[-1.380898,54.643917],[-1.412823,54.616592],[-1.450914,54.610514],[-1.438355,54.59508],[-1.423327,54.603127],[-1.407292,54.593728],[-1.411346,54.564819],[-1.446756,54.555668],[-1.449607,54.532968],[-1.421485,54.519638],[-1.434905,54.487493],[-1.432118,54.479455],[-1.412786,54.477195],[-1.407089,54.49353],[-1.39505,54.48568],[-1.381011,54.494029],[-1.372562,54.472307],[-1.364417,54.465952],[-1.344915,54.472408],[-1.343629,54.464155],[-1.300337,54.47585],[-1.280979,54.490443],[-1.257403,54.487322],[-1.256675,54.501108],[-1.234866,54.510316],[-1.282249,54.51838],[-1.285432,54.53625],[-1.270612,54.556024],[-1.282626,54.565284],[-1.262559,54.570293],[-1.252359,54.591315],[-1.198605,54.582868],[-1.187718,54.589741],[-1.185579,54.591406],[-1.159975,54.611329],[-1.167964,54.629335],[-1.172978,54.621542],[-1.200652,54.622944],[-1.19228,54.629466]]]}',
      metadata: ["Stockton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.438355,54.59508],[-1.451705,54.590828],[-1.468688,54.600559],[-1.526764,54.596454],[-1.558644,54.592117],[-1.552824,54.582342],[-1.576266,54.580198],[-1.593409,54.595077],[-1.584193,54.610486],[-1.606218,54.60344],[-1.606764,54.61754],[-1.682422,54.617771],[-1.679312,54.585973],[-1.694028,54.586894],[-1.708984,54.574142],[-1.709282,54.563179],[-1.691207,54.556245],[-1.705274,54.549172],[-1.696926,54.536006],[-1.657937,54.534589],[-1.654675,54.52465],[-1.633774,54.525364],[-1.633329,54.514111],[-1.611485,54.520001],[-1.602637,54.510582],[-1.581069,54.512846],[-1.591881,54.504301],[-1.579215,54.505188],[-1.58298,54.497101],[-1.555195,54.484978],[-1.545673,54.471238],[-1.519833,54.471047],[-1.528837,54.484814],[-1.514132,54.483775],[-1.511341,54.475012],[-1.491775,54.4862],[-1.499052,54.475678],[-1.475373,54.473845],[-1.472052,54.4556],[-1.45615,54.452449],[-1.462791,54.461392],[-1.453414,54.466015],[-1.463799,54.473551],[-1.459193,54.494268],[-1.474558,54.500711],[-1.458508,54.503919],[-1.434905,54.487493],[-1.421485,54.519638],[-1.449607,54.532968],[-1.446756,54.555668],[-1.411346,54.564819],[-1.407292,54.593728],[-1.423327,54.603127],[-1.438355,54.59508]]]}',
      metadata: ["Darlington"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.595223,53.322454],[-2.619125,53.331071],[-2.606607,53.342996],[-2.631468,53.346034],[-2.630622,53.36405],[-2.674641,53.353664],[-2.678689,53.354782],[-2.699352,53.35671],[-2.718998,53.344838],[-2.754337,53.343159],[-2.763392,53.327675],[-2.752432,53.31476],[-2.752486,53.314731],[-2.739292,53.30687],[-2.723525,53.31314],[-2.700801,53.305807],[-2.685152,53.315451],[-2.641557,53.305035],[-2.645061,53.310135],[-2.624123,53.309398],[-2.619935,53.320321],[-2.609087,53.312071],[-2.595223,53.322454]]],[[[-2.690633,53.385388],[-2.712803,53.390626],[-2.715227,53.399035],[-2.745175,53.402096],[-2.757654,53.380738],[-2.776671,53.381059],[-2.787302,53.35629],[-2.818807,53.348001],[-2.81878,53.339772],[-2.832457,53.337289],[-2.827952,53.331459],[-2.826661,53.331657],[-2.788631,53.32254],[-2.777691,53.32928],[-2.784288,53.336431],[-2.77822,53.332626],[-2.759134,53.349607],[-2.764491,53.355286],[-2.734309,53.347775],[-2.693379,53.361816],[-2.690881,53.360806],[-2.690633,53.385388]]]]}',
      metadata: ["Halton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.489714,53.460282],[-2.496334,53.480929],[-2.552639,53.467813],[-2.549076,53.461486],[-2.57039,53.458476],[-2.576743,53.446057],[-2.585296,53.439807],[-2.598685,53.450414],[-2.596231,53.442666],[-2.627462,53.434413],[-2.639136,53.444391],[-2.67717,53.452786],[-2.682076,53.438901],[-2.668514,53.440907],[-2.675268,53.432965],[-2.663555,53.428714],[-2.676317,53.387619],[-2.690633,53.385388],[-2.690881,53.360806],[-2.675188,53.354455],[-2.678689,53.354782],[-2.674641,53.353664],[-2.630622,53.36405],[-2.631468,53.346034],[-2.606607,53.342996],[-2.619125,53.331071],[-2.595223,53.322454],[-2.58629,53.329397],[-2.561875,53.323343],[-2.518393,53.34239],[-2.52105,53.3479],[-2.486878,53.367904],[-2.43988,53.366663],[-2.42659,53.387462],[-2.478454,53.396219],[-2.449378,53.415891],[-2.489714,53.460282]]]}',
      metadata: ["Warrington"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.410989,53.705137],[-2.433869,53.719182],[-2.440068,53.749418],[-2.45178,53.756454],[-2.446317,53.76659],[-2.465808,53.780813],[-2.551298,53.756388],[-2.561602,53.746901],[-2.539793,53.702192],[-2.515375,53.691669],[-2.532344,53.664902],[-2.511323,53.626995],[-2.479195,53.617036],[-2.4597,53.620043],[-2.438724,53.646045],[-2.421696,53.623836],[-2.379132,53.63087],[-2.370328,53.631534],[-2.362747,53.655401],[-2.371236,53.667081],[-2.374424,53.687254],[-2.398348,53.69156],[-2.410989,53.705137]]]}',
      metadata: ["Blackburn with Darwen"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.010653,53.826194],[-3.01975,53.8686],[-3.047856,53.874437],[-3.050013,53.851645],[-3.057105,53.776535],[-3.032823,53.780862],[-3.028801,53.773117],[-2.996478,53.774504],[-3.003887,53.791342],[-2.983357,53.793803],[-2.995004,53.818489],[-3.010653,53.826194]]]}',
      metadata: ["Blackpool"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.251337,53.733609],[-0.241403,53.754909],[-0.254201,53.763501],[-0.252325,53.781328],[-0.27825,53.78206],[-0.316134,53.81327],[-0.362338,53.804928],[-0.359405,53.793404],[-0.39222,53.791133],[-0.38811,53.769345],[-0.418204,53.760632],[-0.422276,53.75098],[-0.401939,53.749987],[-0.422301,53.731504],[-0.419109,53.719602],[-0.331215,53.738313],[-0.28664,53.742545],[-0.251337,53.733609]]]}',
      metadata: ["Hull"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.112915,53.575105],[0.131304,53.588142],[0.142437,53.597287],[0.112925,53.575305],[0.111474,53.574223],[0.111381,53.574017],[0.112915,53.575105]]],[[[-0.212665,54.157734],[-0.229747,54.13244],[-0.26542,54.140559],[-0.304236,54.136262],[-0.323842,54.150297],[-0.346397,54.146873],[-0.374927,54.154113],[-0.390747,54.176521],[-0.41825,54.174063],[-0.433169,54.164073],[-0.427094,54.137443],[-0.45854,54.125974],[-0.454351,54.116763],[-0.465942,54.107633],[-0.524612,54.085475],[-0.563137,54.094],[-0.615523,54.070494],[-0.660317,54.0631],[-0.644654,54.055113],[-0.659484,54.03717],[-0.687039,54.030768],[-0.683502,54.008802],[-0.730489,54.012701],[-0.734257,54.030259],[-0.799191,54.019055],[-0.800705,54.024119],[-0.878444,54.017185],[-0.893903,53.999535],[-0.925295,53.991518],[-0.934106,53.968456],[-0.921212,53.960422],[-0.9216,53.921416],[-0.94952,53.893915],[-0.920844,53.89062],[-0.923518,53.880766],[-0.948227,53.86161],[-0.940611,53.823518],[-0.920106,53.816093],[-0.934499,53.801777],[-0.928254,53.765598],[-0.973606,53.749877],[-0.960737,53.736016],[-0.910951,53.73267],[-0.903739,53.718359],[-0.957715,53.714835],[-0.96265,53.700796],[-0.980486,53.70504],[-0.980328,53.696942],[-1.038926,53.693882],[-1.061658,53.706766],[-1.074934,53.703996],[-1.081046,53.684615],[-1.10357,53.669557],[-1.048663,53.656057],[-0.946845,53.659142],[-0.865339,53.637708],[-0.848264,53.633037],[-0.788743,53.65921],[-0.772136,53.664075],[-0.7745,53.656209],[-0.721768,53.679361],[-0.702456,53.677491],[-0.699136,53.690388],[-0.699725,53.695693],[-0.709978,53.695864],[-0.698526,53.697733],[-0.712492,53.702335],[-0.742599,53.706982],[-0.69598,53.704362],[-0.671612,53.721843],[-0.618534,53.73051],[-0.637249,53.728893],[-0.630218,53.733994],[-0.583338,53.7266],[-0.542565,53.708443],[-0.486295,53.71354],[-0.419208,53.719581],[-0.419109,53.719602],[-0.422301,53.731504],[-0.401939,53.749987],[-0.422276,53.75098],[-0.418204,53.760632],[-0.38811,53.769345],[-0.39222,53.791133],[-0.359405,53.793404],[-0.362338,53.804928],[-0.316134,53.81327],[-0.27825,53.78206],[-0.252325,53.781328],[-0.254201,53.763501],[-0.241403,53.754909],[-0.251337,53.733609],[-0.250157,53.73331],[-0.245133,53.736559],[-0.247305,53.741171],[-0.244041,53.737532],[-0.244333,53.737176],[-0.243074,53.729465],[-0.230224,53.733553],[-0.227146,53.708496],[-0.214019,53.708867],[-0.184284,53.689117],[-0.143677,53.662105],[-0.103431,53.635285],[-0.053896,53.629079],[0.032467,53.649346],[0.081428,53.640446],[0.115317,53.623209],[0.142362,53.609437],[0.144683,53.604608],[0.142478,53.59732],[0.146641,53.600739],[0.145639,53.607767],[0.119361,53.657739],[0.117246,53.661754],[0.116534,53.663106],[-0.037126,53.788886],[-0.092082,53.841084],[-0.156013,53.901614],[-0.173653,53.934389],[-0.213086,54.007459],[-0.212837,54.022723],[-0.212283,54.056572],[-0.166815,54.098864],[-0.166437,54.098896],[-0.104482,54.104146],[-0.076305,54.11636],[-0.0797,54.118714],[-0.097022,54.129257],[-0.164363,54.145856],[-0.21251,54.157692],[-0.212665,54.157734]]]]}',
      metadata: ["East Riding of Yorkshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.015354,53.528122],[-0.008541,53.555669],[-0.00352,53.54672],[-0.015038,53.551509],[-0.062363,53.582712],[-0.064957,53.583372],[-0.079273,53.576956],[-0.093844,53.581156],[-0.186724,53.632277],[-0.200724,53.639966],[-0.200792,53.640021],[-0.232617,53.624003],[-0.292115,53.613267],[-0.248476,53.593664],[-0.251396,53.584653],[-0.234669,53.58625],[-0.222559,53.568017],[-0.195185,53.571619],[-0.189341,53.565923],[-0.219883,53.532606],[-0.21059,53.531706],[-0.204086,53.511767],[-0.210605,53.486288],[-0.188565,53.484538],[-0.181805,53.468649],[-0.15368,53.465678],[-0.149228,53.4467],[-0.131879,53.435939],[-0.120344,53.433565],[-0.082209,53.451151],[-0.107821,53.469863],[-0.089804,53.477682],[-0.095488,53.485989],[-0.075262,53.489336],[-0.065045,53.51874],[-0.014799,53.515369],[0.015354,53.528122]]]}',
      metadata: ["North East Lincolnshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-0.52077,53.685219],[-0.553717,53.690332],[-0.535748,53.681256],[-0.52077,53.685219]]],[[[-0.200792,53.640021],[-0.203333,53.642042],[-0.237856,53.663571],[-0.252344,53.68099],[-0.29415,53.714142],[-0.387605,53.702189],[-0.390496,53.689247],[-0.394944,53.700048],[-0.442571,53.697331],[-0.442844,53.689281],[-0.443416,53.697354],[-0.470576,53.698225],[-0.487082,53.69161],[-0.523513,53.676994],[-0.586254,53.693339],[-0.610655,53.714458],[-0.639504,53.710169],[-0.694909,53.694523],[-0.684916,53.672834],[-0.691739,53.678753],[-0.698494,53.684611],[-0.699136,53.690388],[-0.702456,53.677491],[-0.721768,53.679361],[-0.7745,53.656209],[-0.772136,53.664075],[-0.788743,53.65921],[-0.848264,53.633037],[-0.865339,53.637708],[-0.897926,53.583277],[-0.901118,53.568724],[-0.890995,53.566559],[-0.901266,53.547908],[-0.892295,53.537467],[-0.943716,53.530643],[-0.950009,53.513657],[-0.932094,53.510672],[-0.935565,53.502517],[-0.900471,53.475156],[-0.920247,53.465508],[-0.916249,53.460296],[-0.871919,53.466311],[-0.797483,53.455064],[-0.784365,53.46338],[-0.784389,53.476669],[-0.771568,53.479202],[-0.76811,53.498926],[-0.752114,53.500531],[-0.739592,53.519936],[-0.624491,53.512839],[-0.629753,53.458219],[-0.551789,53.45952],[-0.471749,53.474873],[-0.48663,53.48047],[-0.488384,53.50486],[-0.405075,53.517617],[-0.408145,53.532109],[-0.430665,53.546337],[-0.501229,53.537461],[-0.490927,53.545875],[-0.467018,53.548961],[-0.429001,53.574525],[-0.416963,53.563215],[-0.335939,53.558627],[-0.300743,53.595284],[-0.308555,53.614329],[-0.292115,53.613267],[-0.232617,53.624003],[-0.200792,53.640021]]]]}',
      metadata: ["North Lincolnshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.925295,53.991518],[-0.994837,53.983064],[-0.97193,53.996696],[-0.97542,54.00475],[-0.984782,54.002679],[-0.966845,54.022976],[-1.002085,54.055263],[-1.014377,54.049322],[-1.059712,54.056607],[-1.058734,54.047845],[-1.089408,54.048015],[-1.120282,54.029045],[-1.140797,54.029859],[-1.149091,54.002947],[-1.136998,53.991083],[-1.151912,53.989178],[-1.17551,54.002197],[-1.191935,54.000519],[-1.182103,53.985345],[-1.216519,53.98559],[-1.223706,53.974829],[-1.195638,53.92238],[-1.105103,53.875733],[-1.0912,53.885816],[-1.06496,53.874586],[-1.008205,53.889995],[-0.992833,53.875211],[-0.944072,53.888122],[-0.923518,53.880766],[-0.920844,53.89062],[-0.94952,53.893915],[-0.9216,53.921416],[-0.921212,53.960422],[-0.934106,53.968456],[-0.925295,53.991518]]]}',
      metadata: ["York"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.388263,52.901468],[-1.383074,52.925932],[-1.423964,52.935651],[-1.409281,52.950323],[-1.468552,52.950662],[-1.474631,52.965928],[-1.495405,52.965879],[-1.508029,52.937452],[-1.544068,52.924208],[-1.556852,52.914679],[-1.541691,52.88954],[-1.503112,52.884845],[-1.494513,52.870079],[-1.464086,52.87256],[-1.446227,52.861309],[-1.423567,52.865078],[-1.418913,52.884546],[-1.402772,52.900462],[-1.388263,52.901468]]]}',
      metadata: ["Derby"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.048613,52.654996],[-1.075079,52.669626],[-1.118812,52.673186],[-1.129225,52.66539],[-1.143262,52.687157],[-1.157252,52.691523],[-1.178066,52.678035],[-1.185289,52.660644],[-1.190656,52.640394],[-1.207252,52.642588],[-1.215981,52.634534],[-1.165559,52.613081],[-1.174224,52.592926],[-1.15789,52.590822],[-1.160942,52.582531],[-1.149496,52.581024],[-1.143619,52.588025],[-1.120171,52.597544],[-1.103651,52.595912],[-1.096614,52.616491],[-1.07049,52.618067],[-1.046962,52.63462],[-1.048613,52.654996]]]}',
      metadata: ["Leicester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.495026,52.640236],[-0.523586,52.665234],[-0.506674,52.659526],[-0.456191,52.670393],[-0.434055,52.683705],[-0.430443,52.705422],[-0.494531,52.709653],[-0.542434,52.723281],[-0.539974,52.738402],[-0.572636,52.753109],[-0.605444,52.750493],[-0.610288,52.759821],[-0.664101,52.75671],[-0.751698,52.736712],[-0.776484,52.743934],[-0.813435,52.72913],[-0.821753,52.715675],[-0.786045,52.694741],[-0.782042,52.669481],[-0.808693,52.646126],[-0.805825,52.620688],[-0.82095,52.596455],[-0.792435,52.597614],[-0.765264,52.58247],[-0.759894,52.564906],[-0.738864,52.548883],[-0.742206,52.539486],[-0.713658,52.524964],[-0.674864,52.558638],[-0.603019,52.588591],[-0.586972,52.587429],[-0.581547,52.595868],[-0.571904,52.585803],[-0.558118,52.594484],[-0.544174,52.592888],[-0.552939,52.601349],[-0.540261,52.625966],[-0.517397,52.64238],[-0.495026,52.640236]]]}',
      metadata: ["Rutland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.086115,52.94857],[-1.120107,52.967825],[-1.122786,52.983467],[-1.142489,52.986288],[-1.138255,52.994844],[-1.153656,52.997185],[-1.143513,53.006501],[-1.182746,53.018569],[-1.209883,53.018143],[-1.225148,53.008096],[-1.219107,52.991499],[-1.203352,52.987529],[-1.226178,52.981142],[-1.246839,52.984543],[-1.231979,52.967643],[-1.246891,52.953196],[-1.182301,52.917336],[-1.199009,52.909479],[-1.210899,52.912153],[-1.21392,52.904415],[-1.176426,52.889068],[-1.158604,52.900062],[-1.152289,52.937026],[-1.141883,52.93199],[-1.13176,52.942816],[-1.099677,52.941975],[-1.086115,52.94857]]]}',
      metadata: ["Nottingham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.618035,52.306957],[-2.623934,52.321394],[-2.666066,52.342301],[-2.689128,52.316605],[-2.679811,52.312023],[-2.71425,52.308878],[-2.766987,52.336113],[-2.74838,52.334902],[-2.732767,52.355532],[-2.79242,52.356864],[-2.792505,52.375284],[-2.807329,52.375911],[-2.805433,52.388252],[-2.818223,52.39123],[-2.855018,52.395485],[-2.888457,52.385154],[-2.893135,52.374088],[-2.917685,52.386288],[-2.922311,52.375147],[-2.900805,52.36727],[-2.926143,52.366995],[-2.938889,52.361058],[-2.933149,52.350052],[-2.954651,52.349155],[-2.966801,52.329449],[-3.000866,52.321766],[-3.012608,52.279169],[-2.949635,52.269468],[-2.977182,52.259686],[-3.005776,52.26426],[-3.035861,52.256757],[-3.048318,52.250233],[-3.044215,52.237927],[-3.073037,52.235877],[-3.072092,52.213087],[-3.102082,52.20272],[-3.094651,52.183742],[-3.12243,52.16342],[-3.098896,52.154734],[-3.082543,52.163047],[-3.072538,52.155773],[-3.09369,52.144306],[-3.135873,52.137908],[-3.141921,52.127867],[-3.104985,52.116728],[-3.105466,52.105386],[-3.122715,52.103158],[-3.125896,52.078311],[-3.090588,52.050513],[-3.086287,52.040194],[-3.099199,52.022686],[-3.067368,51.983143],[-3.025945,51.957282],[-3.008123,51.927131],[-2.976665,51.92749],[-2.971846,51.904982],[-2.877835,51.933814],[-2.844935,51.922026],[-2.86192,51.914018],[-2.841908,51.917726],[-2.836101,51.906045],[-2.768428,51.880541],[-2.778799,51.865859],[-2.738849,51.836617],[-2.719605,51.848919],[-2.715128,51.840244],[-2.697302,51.844809],[-2.693296,51.833841],[-2.666198,51.835624],[-2.650401,51.826125],[-2.63671,51.843095],[-2.625467,51.838964],[-2.601217,51.856216],[-2.582817,51.849577],[-2.580641,51.861671],[-2.531624,51.860772],[-2.508624,51.885169],[-2.487795,51.880418],[-2.439358,51.897396],[-2.448185,51.918668],[-2.466043,51.927975],[-2.465487,51.951696],[-2.500906,51.960609],[-2.492245,51.964129],[-2.494913,51.981075],[-2.470993,51.994736],[-2.491985,52.007662],[-2.478932,52.02253],[-2.464079,52.023274],[-2.463256,52.01434],[-2.436547,52.014796],[-2.437294,51.997167],[-2.413196,51.99409],[-2.399018,51.996146],[-2.392892,52.012959],[-2.351379,52.021359],[-2.337963,52.089885],[-2.352147,52.103486],[-2.351402,52.144624],[-2.379321,52.155112],[-2.415195,52.14524],[-2.435175,52.168217],[-2.421948,52.172475],[-2.407839,52.202751],[-2.392679,52.208615],[-2.403894,52.22145],[-2.3844,52.225235],[-2.423065,52.237261],[-2.464858,52.234374],[-2.474702,52.241359],[-2.468099,52.256038],[-2.427996,52.27061],[-2.451403,52.285083],[-2.503113,52.27745],[-2.495651,52.256942],[-2.52582,52.248097],[-2.531673,52.253277],[-2.574206,52.252731],[-2.628969,52.240373],[-2.628297,52.261165],[-2.597931,52.281618],[-2.639877,52.286375],[-2.663208,52.303921],[-2.618035,52.306957]]]}',
      metadata: ["Herefordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.312208,52.740867],[-2.385031,52.789553],[-2.371414,52.795285],[-2.377655,52.811643],[-2.416347,52.827006],[-2.472895,52.820803],[-2.456255,52.784186],[-2.47281,52.780422],[-2.489704,52.782973],[-2.477121,52.799379],[-2.486507,52.805246],[-2.503028,52.796604],[-2.521989,52.798951],[-2.537515,52.785109],[-2.53381,52.794119],[-2.551835,52.802535],[-2.582786,52.805625],[-2.598007,52.797969],[-2.592244,52.77685],[-2.621003,52.776522],[-2.632331,52.759591],[-2.643128,52.767085],[-2.663415,52.760441],[-2.66024,52.731625],[-2.59742,52.718251],[-2.62255,52.699032],[-2.555647,52.671098],[-2.548457,52.654713],[-2.501774,52.629019],[-2.438111,52.614559],[-2.436635,52.627094],[-2.418295,52.633775],[-2.419029,52.662892],[-2.376548,52.739597],[-2.357929,52.731213],[-2.315576,52.732947],[-2.312208,52.740867]]]}',
      metadata: ["Telford and Wrekin"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.181207,53.089797],[-2.198615,53.092719],[-2.238761,53.073339],[-2.202517,53.01996],[-2.215487,53.015305],[-2.204341,52.981398],[-2.212514,52.980579],[-2.181609,52.946206],[-2.176898,52.953707],[-2.162595,52.953365],[-2.145711,52.976111],[-2.130403,52.971176],[-2.121657,52.956086],[-2.081218,52.966906],[-2.088128,52.973852],[-2.079239,52.9745],[-2.091888,52.985608],[-2.088571,52.997139],[-2.104948,52.997694],[-2.103467,53.010858],[-2.123737,53.021638],[-2.131779,53.047334],[-2.116583,53.048033],[-2.1254,53.064579],[-2.161147,53.07012],[-2.1717,53.089447],[-2.181207,53.089797]]]}',
      metadata: ["Stoke"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.294616,51.428802],[-2.312616,51.422446],[-2.325028,51.436991],[-2.34329,51.439533],[-2.469452,51.415902],[-2.480955,51.421578],[-2.492726,51.418152],[-2.491716,51.429035],[-2.510462,51.428782],[-2.526291,51.434777],[-2.536007,51.411137],[-2.560875,51.411721],[-2.570754,51.399369],[-2.590132,51.397545],[-2.603116,51.388824],[-2.622704,51.389409],[-2.614052,51.380879],[-2.626953,51.387134],[-2.630023,51.375213],[-2.644405,51.375134],[-2.658972,51.341507],[-2.676535,51.341969],[-2.668751,51.360784],[-2.679703,51.360125],[-2.694194,51.379857],[-2.690501,51.349528],[-2.707892,51.337803],[-2.687182,51.330358],[-2.694879,51.318094],[-2.638698,51.294823],[-2.627493,51.282871],[-2.557824,51.302661],[-2.497221,51.290841],[-2.506356,51.278991],[-2.478001,51.273097],[-2.473792,51.277987],[-2.451723,51.274251],[-2.400917,51.3048],[-2.387181,51.294643],[-2.289091,51.325272],[-2.300927,51.333223],[-2.296409,51.342662],[-2.344338,51.345564],[-2.292056,51.36957],[-2.296788,51.394887],[-2.281812,51.397228],[-2.290862,51.405712],[-2.278541,51.415882],[-2.294616,51.428802]]]}',
      metadata: ["Bath and North East Somerset"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.830546,51.466455],[-2.852772,51.452862],[-2.857666,51.448252],[-2.830546,51.466455]]],[[[-2.68461,51.480486],[-2.716482,51.500608],[-2.727309,51.501886],[-2.68461,51.480486]]],[[[-2.729075,51.502094],[-2.730525,51.502265],[-2.732591,51.492487],[-2.743334,51.493089],[-2.732566,51.492463],[-2.729075,51.502094]]],[[[-2.68461,51.480486],[-2.661723,51.48651],[-2.634864,51.467186],[-2.625801,51.448755],[-2.640083,51.440463],[-2.629525,51.437372],[-2.633286,51.403476],[-2.590132,51.397545],[-2.570754,51.399369],[-2.560875,51.411721],[-2.536007,51.411137],[-2.526291,51.434777],[-2.510462,51.428782],[-2.539346,51.445791],[-2.52177,51.4501],[-2.512246,51.462333],[-2.515865,51.493867],[-2.551851,51.492249],[-2.58815,51.501235],[-2.580988,51.517409],[-2.652541,51.513098],[-2.673814,51.544431],[-2.707746,51.516781],[-2.718218,51.50824],[-2.708816,51.497799],[-2.68461,51.480486]]]]}',
      metadata: ["Bristol"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.986955,51.311459],[-2.986357,51.312464],[-2.98665,51.312781],[-2.986955,51.311459]]],[[[-2.990114,51.316545],[-2.994277,51.321065],[-3.000138,51.322129],[-2.990114,51.316545]]],[[[-2.727309,51.501886],[-2.729075,51.502094],[-2.732566,51.492463],[-2.743334,51.493089],[-2.755746,51.493784],[-2.799866,51.485198],[-2.830546,51.466455],[-2.857666,51.448252],[-2.864669,51.441653],[-2.912798,51.396241],[-2.890458,51.3875],[-2.917313,51.395866],[-2.939279,51.391023],[-2.939644,51.396416],[-2.971026,51.390754],[-2.980824,51.388429],[-2.963051,51.382934],[-2.962201,51.374765],[-2.967497,51.363665],[-2.994576,51.356524],[-2.982788,51.349149],[-2.985854,51.334934],[-2.989613,51.317492],[-2.982976,51.312015],[-2.988104,51.306477],[-2.98982,51.299035],[-2.972619,51.295712],[-2.962039,51.304791],[-2.93688,51.303079],[-2.897104,51.290615],[-2.88492,51.306665],[-2.877146,51.300063],[-2.810236,51.301424],[-2.818673,51.326365],[-2.764644,51.322577],[-2.694879,51.318094],[-2.687182,51.330358],[-2.707892,51.337803],[-2.690501,51.349528],[-2.694194,51.379857],[-2.679703,51.360125],[-2.668751,51.360784],[-2.676535,51.341969],[-2.658972,51.341507],[-2.644405,51.375134],[-2.630023,51.375213],[-2.626953,51.387134],[-2.614052,51.380879],[-2.622704,51.389409],[-2.603116,51.388824],[-2.590132,51.397545],[-2.633286,51.403476],[-2.629525,51.437372],[-2.640083,51.440463],[-2.625801,51.448755],[-2.634864,51.467186],[-2.661723,51.48651],[-2.68461,51.480486],[-2.727309,51.501886]]]]}',
      metadata: ["North Somerset"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.291637,51.593696],[-2.331063,51.591602],[-2.365581,51.603735],[-2.370577,51.597614],[-2.394657,51.597369],[-2.38891,51.62754],[-2.400475,51.635143],[-2.385989,51.639943],[-2.442984,51.652492],[-2.490675,51.644834],[-2.48964,51.663962],[-2.540813,51.682397],[-2.542355,51.68154],[-2.534789,51.677284],[-2.569106,51.655547],[-2.575462,51.631386],[-2.579286,51.629507],[-2.62779,51.605646],[-2.663446,51.573624],[-2.673814,51.544431],[-2.652541,51.513098],[-2.580988,51.517409],[-2.58815,51.501235],[-2.551851,51.492249],[-2.515865,51.493867],[-2.512246,51.462333],[-2.52177,51.4501],[-2.539346,51.445791],[-2.510462,51.428782],[-2.491716,51.429035],[-2.492726,51.418152],[-2.480955,51.421578],[-2.469452,51.415902],[-2.34329,51.439533],[-2.325028,51.436991],[-2.312616,51.422446],[-2.294616,51.428802],[-2.285125,51.457845],[-2.295743,51.45859],[-2.290466,51.486651],[-2.311423,51.487373],[-2.324324,51.497509],[-2.252388,51.526874],[-2.266502,51.536262],[-2.2603,51.569901],[-2.272559,51.57759],[-2.282746,51.578517],[-2.291637,51.593696]]]}',
      metadata: ["South Gloucestershire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.173212,50.42389],[-4.185283,50.426424],[-4.17667,50.422569],[-4.173212,50.42389]]],[[[-4.123127,50.346781],[-4.090618,50.340897],[-4.052944,50.35652],[-4.0502,50.377471],[-4.027061,50.379032],[-4.021169,50.391777],[-4.03965,50.40142],[-4.07151,50.40185],[-4.082667,50.424656],[-4.109541,50.432095],[-4.113488,50.444154],[-4.135663,50.432928],[-4.155856,50.436427],[-4.165651,50.426778],[-4.163527,50.427589],[-4.165478,50.419724],[-4.192324,50.424684],[-4.195205,50.419118],[-4.204426,50.401294],[-4.204672,50.399073],[-4.194543,50.392086],[-4.179781,50.396628],[-4.192917,50.390076],[-4.190621,50.385014],[-4.182234,50.377973],[-4.184307,50.371079],[-4.182501,50.367091],[-4.174372,50.366776],[-4.16368,50.369449],[-4.164084,50.358918],[-4.154381,50.367548],[-4.152829,50.362422],[-4.140929,50.36222],[-4.133479,50.363284],[-4.132733,50.36208],[-4.115704,50.361786],[-4.101437,50.382691],[-4.099782,50.379273],[-4.112436,50.359435],[-4.105387,50.356507],[-4.130826,50.358999],[-4.123515,50.347184],[-4.123127,50.346781]]]]}',
      metadata: ["Plymouth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.50911,50.516619],[-3.520905,50.517684],[-3.529951,50.504587],[-3.564774,50.486967],[-3.569782,50.490703],[-3.58425,50.477723],[-3.586885,50.45223],[-3.625075,50.441286],[-3.628043,50.425989],[-3.599047,50.409269],[-3.579851,50.410205],[-3.574778,50.394152],[-3.544256,50.373483],[-3.507715,50.378943],[-3.507645,50.379168],[-3.482388,50.400027],[-3.512986,50.405628],[-3.505182,50.400005],[-3.511915,50.395899],[-3.519522,50.403175],[-3.544831,50.402106],[-3.559536,50.423344],[-3.5565,50.429419],[-3.54067,50.46107],[-3.515934,50.453763],[-3.480594,50.463518],[-3.514842,50.481758],[-3.509135,50.516579],[-3.50911,50.516619]]]}',
      metadata: ["Torbay"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.683059,51.69011],[-1.696831,51.692042],[-1.711055,51.671793],[-1.727554,51.66721],[-1.753793,51.662215],[-1.788617,51.667002],[-1.799081,51.662505],[-1.788583,51.632714],[-1.827847,51.625326],[-1.842303,51.61256],[-1.831857,51.596729],[-1.837561,51.587242],[-1.823733,51.582209],[-1.843146,51.578659],[-1.845189,51.561718],[-1.860104,51.565244],[-1.865122,51.559591],[-1.849277,51.553309],[-1.853824,51.546302],[-1.83008,51.51544],[-1.836974,51.510903],[-1.84689,51.524321],[-1.837585,51.500837],[-1.81345,51.507042],[-1.797797,51.484446],[-1.774331,51.482455],[-1.715737,51.488383],[-1.719082,51.500706],[-1.602812,51.518295],[-1.647691,51.571952],[-1.655045,51.576506],[-1.67654,51.569439],[-1.691111,51.583524],[-1.690617,51.60545],[-1.66701,51.616264],[-1.673736,51.62285],[-1.659954,51.634991],[-1.691938,51.652165],[-1.700189,51.670742],[-1.683059,51.69011]]]}',
      metadata: ["Swindon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.031271,52.661533],[-0.063714,52.675233],[-0.087753,52.666786],[-0.102196,52.672206],[-0.141062,52.651507],[-0.18002,52.660561],[-0.192868,52.652439],[-0.212501,52.666679],[-0.260754,52.651418],[-0.28924,52.670276],[-0.335037,52.674866],[-0.350222,52.661615],[-0.405681,52.648046],[-0.452695,52.654278],[-0.494773,52.640314],[-0.470921,52.623559],[-0.492665,52.5819],[-0.478815,52.573645],[-0.415381,52.578743],[-0.39684,52.582998],[-0.385451,52.56719],[-0.348478,52.56437],[-0.325458,52.552889],[-0.332736,52.546545],[-0.29329,52.506889],[-0.269295,52.520825],[-0.24478,52.522999],[-0.234837,52.543667],[-0.217664,52.537923],[-0.200398,52.545216],[-0.18785,52.541863],[-0.197873,52.550806],[-0.18698,52.568507],[-0.012752,52.594246],[-0.031271,52.661533]]]}',
      metadata: ["Peterborough"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.385616,51.91568],[-0.419065,51.912304],[-0.421682,51.925681],[-0.436107,51.927666],[-0.485701,51.922701],[-0.482276,51.907795],[-0.505923,51.900612],[-0.455275,51.882287],[-0.422775,51.854552],[-0.39586,51.870581],[-0.369755,51.868115],[-0.354834,51.874015],[-0.349899,51.878708],[-0.37749,51.898433],[-0.385616,51.91568]]]}',
      metadata: ["Luton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.625905,51.532249],[0.626697,51.532128],[0.627086,51.532578],[0.627427,51.533091],[0.645829,51.539222],[0.626607,51.536602],[0.625905,51.532249]]],[[[0.820841,51.540857],[0.819168,51.542207],[0.788991,51.542444],[0.78669,51.552943],[0.675334,51.572868],[0.638951,51.576801],[0.632077,51.570529],[0.626873,51.538257],[0.646411,51.53955],[0.648005,51.538353],[0.669513,51.538474],[0.782096,51.521336],[0.820841,51.540857]]]]}',
      metadata: ["Southend-on-Sea"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.548787,51.512629],[0.548272,51.515505],[0.54358,51.515565],[0.548787,51.512629]]],[[[0.508833,51.534563],[0.484842,51.547876],[0.466764,51.546726],[0.461618,51.553697],[0.427691,51.545131],[0.41868,51.556617],[0.393532,51.557655],[0.391862,51.567191],[0.382605,51.565824],[0.313035,51.565818],[0.334024,51.540504],[0.265347,51.53215],[0.263683,51.51787],[0.253834,51.517886],[0.248965,51.528674],[0.237176,51.519334],[0.241919,51.50796],[0.226597,51.506563],[0.229965,51.499366],[0.214157,51.49604],[0.211793,51.489753],[0.281446,51.461393],[0.297781,51.472202],[0.302381,51.472639],[0.31841,51.474159],[0.340863,51.452334],[0.405311,51.453987],[0.433902,51.46147],[0.444111,51.493457],[0.445567,51.498014],[0.435805,51.500117],[0.42337,51.514533],[0.441789,51.500827],[0.54125,51.512578],[0.521688,51.516237],[0.508833,51.534563]]]]}',
      metadata: ["Thurrock"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.608114,51.401544],[0.597015,51.39608],[0.615324,51.395384],[0.608114,51.401544]]],[[[0.582573,51.403134],[0.564436,51.407955],[0.56152,51.402233],[0.582573,51.403134]]],[[[0.63237,51.388936],[0.619609,51.38816],[0.612055,51.378845],[0.596739,51.386826],[0.602098,51.390635],[0.594531,51.386549],[0.585648,51.388731],[0.560969,51.39479],[0.537549,51.410281],[0.522582,51.3851],[0.515656,51.400355],[0.532457,51.412675],[0.563549,51.409551],[0.587043,51.413451],[0.610877,51.417402],[0.623751,51.424116],[0.617351,51.42843],[0.605211,51.420548],[0.618998,51.437461],[0.636038,51.446243],[0.658921,51.447367],[0.672,51.448007],[0.677839,51.433178],[0.710337,51.434831],[0.723477,51.444513],[0.720508,51.459763],[0.700321,51.472596],[0.671337,51.472265],[0.690283,51.459378],[0.659953,51.477669],[0.615242,51.475111],[0.590772,51.479371],[0.546076,51.487138],[0.468462,51.482658],[0.458123,51.466958],[0.467729,51.464296],[0.454345,51.46342],[0.45756,51.458296],[0.48796,51.443285],[0.489235,51.415326],[0.47514,51.412947],[0.467687,51.398301],[0.451853,51.398321],[0.453322,51.391379],[0.431109,51.388033],[0.401283,51.352955],[0.39992,51.344457],[0.418595,51.347912],[0.453486,51.34061],[0.456234,51.368763],[0.503027,51.354719],[0.505846,51.342937],[0.525641,51.334717],[0.544004,51.327896],[0.563457,51.338743],[0.601404,51.333301],[0.634908,51.36637],[0.623293,51.369223],[0.626122,51.378813],[0.63237,51.388936]]]]}',
      metadata: ["Medway"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.667634,51.384571],[-0.69654,51.41091],[-0.676261,51.431583],[-0.631309,51.414455],[-0.630553,51.442192],[-0.661982,51.444319],[-0.656756,51.461494],[-0.672746,51.457849],[-0.688866,51.46696],[-0.714418,51.467144],[-0.724526,51.456139],[-0.764628,51.459723],[-0.782565,51.46869],[-0.80002,51.441182],[-0.792505,51.40885],[-0.801521,51.405301],[-0.78884,51.371751],[-0.813571,51.370318],[-0.837349,51.352871],[-0.775466,51.331959],[-0.735335,51.36501],[-0.667634,51.384571]]]}',
      metadata: ["Bracknell Forest"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.226792,51.535158],[-1.260656,51.53779],[-1.328721,51.563712],[-1.342403,51.543686],[-1.367321,51.552467],[-1.383779,51.540426],[-1.404858,51.547235],[-1.422769,51.535765],[-1.426591,51.545599],[-1.447832,51.536427],[-1.464423,51.538517],[-1.470744,51.528607],[-1.512939,51.55076],[-1.530959,51.546069],[-1.555008,51.553371],[-1.581187,51.536995],[-1.584708,51.524912],[-1.582291,51.494112],[-1.523991,51.447481],[-1.526614,51.423931],[-1.565119,51.422043],[-1.571053,51.415578],[-1.552988,51.410044],[-1.555603,51.395584],[-1.495449,51.369664],[-1.500608,51.356268],[-1.485711,51.347683],[-1.498299,51.329376],[-1.429693,51.33653],[-1.44411,51.354928],[-1.428439,51.35669],[-1.411068,51.372852],[-1.349532,51.367106],[-1.25114,51.372041],[-1.176894,51.357324],[-1.13859,51.357191],[-1.115791,51.360466],[-1.115457,51.374215],[-1.086619,51.383916],[-1.050016,51.358148],[-0.986124,51.362848],[-0.981725,51.375749],[-1.011884,51.392867],[-1.001148,51.426382],[-1.033983,51.452728],[-1.049185,51.451411],[-1.052975,51.46037],[-1.036557,51.475227],[-1.05135,51.49186],[-1.087882,51.485754],[-1.10218,51.489674],[-1.113186,51.509592],[-1.142053,51.516195],[-1.140375,51.542911],[-1.20465,51.528395],[-1.204644,51.537604],[-1.226792,51.535158]]]}',
      metadata: ["West Berkshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.949168,51.459513],[-0.955184,51.465334],[-0.941137,51.474978],[-0.957487,51.493081],[-0.998399,51.484305],[-1.013564,51.466292],[-1.036557,51.475227],[-1.052975,51.46037],[-1.049185,51.451411],[-1.033983,51.452728],[-1.001148,51.426382],[-0.9737,51.409781],[-0.961926,51.412345],[-0.943399,51.42931],[-0.945215,51.44617],[-0.928475,51.445162],[-0.949168,51.459513]]]}',
      metadata: ["Reading"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.490025,51.494748],[-0.53182,51.493394],[-0.526981,51.509506],[-0.568709,51.511269],[-0.575095,51.5293],[-0.567256,51.532981],[-0.589868,51.522677],[-0.630536,51.538895],[-0.659945,51.528447],[-0.659271,51.504902],[-0.642212,51.500627],[-0.62653,51.504414],[-0.607716,51.497252],[-0.600576,51.502304],[-0.565568,51.491342],[-0.560551,51.497212],[-0.534355,51.486785],[-0.524359,51.471528],[-0.509701,51.469176],[-0.490025,51.494748]]]}',
      metadata: ["Slough"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.642212,51.500627],[-0.633882,51.492382],[-0.652125,51.485494],[-0.703165,51.511107],[-0.691203,51.556819],[-0.696474,51.565204],[-0.711675,51.564667],[-0.718102,51.57755],[-0.757217,51.564845],[-0.773709,51.567173],[-0.792964,51.551359],[-0.842744,51.544759],[-0.853907,51.526073],[-0.81739,51.507238],[-0.829375,51.487069],[-0.821784,51.472602],[-0.833754,51.464099],[-0.818086,51.443191],[-0.80002,51.441182],[-0.782565,51.46869],[-0.764628,51.459723],[-0.724526,51.456139],[-0.714418,51.467144],[-0.688866,51.46696],[-0.672746,51.457849],[-0.656756,51.461494],[-0.661982,51.444319],[-0.630553,51.442192],[-0.631309,51.414455],[-0.676261,51.431583],[-0.69654,51.41091],[-0.667634,51.384571],[-0.616344,51.38354],[-0.618495,51.392388],[-0.593939,51.441661],[-0.571675,51.451008],[-0.522765,51.4353],[-0.540613,51.457852],[-0.524359,51.471528],[-0.534355,51.486785],[-0.560551,51.497212],[-0.565568,51.491342],[-0.600576,51.502304],[-0.607716,51.497252],[-0.62653,51.504414],[-0.642212,51.500627]]]}',
      metadata: ["Windsor and Maidenhead"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.842744,51.544759],[-0.879723,51.562128],[-0.896882,51.544863],[-0.900134,51.536661],[-0.878512,51.523486],[-0.870253,51.503629],[-0.89385,51.496643],[-0.921698,51.467931],[-0.949168,51.459513],[-0.928475,51.445162],[-0.945215,51.44617],[-0.943399,51.42931],[-0.961926,51.412345],[-0.9737,51.409781],[-1.001148,51.426382],[-1.011884,51.392867],[-0.981725,51.375749],[-0.986124,51.362848],[-0.98674,51.359856],[-0.923695,51.36601],[-0.877856,51.352591],[-0.837349,51.352871],[-0.813571,51.370318],[-0.78884,51.371751],[-0.801521,51.405301],[-0.792505,51.40885],[-0.80002,51.441182],[-0.818086,51.443191],[-0.833754,51.464099],[-0.821784,51.472602],[-0.829375,51.487069],[-0.81739,51.507238],[-0.853907,51.526073],[-0.842744,51.544759]]]}',
      metadata: ["Wokingham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.59181,52.110692],[-0.607249,52.133869],[-0.635452,52.139254],[-0.640782,52.152772],[-0.630671,52.154924],[-0.627447,52.181545],[-0.668136,52.195034],[-0.705456,52.191571],[-0.749735,52.166877],[-0.777975,52.168732],[-0.792091,52.151329],[-0.807588,52.156979],[-0.814041,52.142472],[-0.831967,52.143684],[-0.828205,52.132611],[-0.88072,52.126332],[-0.887016,52.114209],[-0.87145,52.111753],[-0.869531,52.100038],[-0.846713,52.091509],[-0.831418,52.071947],[-0.8395,52.063828],[-0.862679,52.060934],[-0.852447,52.050705],[-0.871326,52.040252],[-0.819818,52.012286],[-0.80366,51.985523],[-0.761997,51.985558],[-0.740379,51.969863],[-0.713941,51.977871],[-0.713113,51.98981],[-0.652978,51.969229],[-0.645681,51.972228],[-0.66169,51.999736],[-0.643477,52.010855],[-0.651024,52.018486],[-0.6402,52.024066],[-0.643047,52.037249],[-0.668976,52.048717],[-0.59181,52.110692]]]}',
      metadata: ["Milton Keynes"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.13501,50.886635],[-0.168126,50.880748],[-0.168612,50.892368],[-0.182423,50.888325],[-0.187734,50.86857],[-0.226719,50.878181],[-0.239238,50.867886],[-0.244971,50.863809],[-0.216816,50.827641],[-0.216034,50.827584],[-0.192761,50.823863],[-0.110237,50.813176],[-0.110444,50.81066],[-0.091879,50.807673],[-0.092384,50.810761],[-0.042833,50.799767],[-0.038564,50.799077],[-0.038477,50.799057],[-0.016002,50.814875],[-0.020428,50.82183],[-0.045968,50.821825],[-0.036843,50.841239],[-0.073442,50.841245],[-0.084928,50.87312],[-0.097519,50.877945],[-0.1218,50.873428],[-0.135284,50.878105],[-0.13501,50.886635]]]}',
      metadata: ["Brighton and Hove"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-1.09261,50.815111],[-1.096496,50.820639],[-1.101475,50.813592],[-1.09261,50.815111]]],[[[-1.044231,50.831694],[-1.075813,50.837007],[-1.084469,50.82482],[-1.100223,50.826687],[-1.094028,50.823008],[-1.090632,50.816497],[-1.094714,50.8118],[-1.091179,50.809069],[-1.111521,50.806902],[-1.109825,50.796156],[-1.108924,50.790438],[-1.095339,50.781712],[-1.088594,50.777714],[-1.028863,50.78936],[-1.03102,50.795528],[-1.031434,50.796712],[-1.033835,50.795551],[-1.044248,50.790515],[-1.044246,50.795637],[-1.044231,50.831694]]],[[[-1.156943,50.837526],[-1.156929,50.838304],[-1.161294,50.838113],[-1.156943,50.837526]]],[[[-1.15433,50.844895],[-1.171221,50.840832],[-1.171185,50.839977],[-1.15433,50.844895]]],[[[-1.15433,50.844895],[-1.149166,50.843527],[-1.11891,50.835502],[-1.118438,50.837246],[-1.15433,50.844895]]],[[[-1.023952,50.831586],[-1.022636,50.852101],[-1.054015,50.856551],[-1.115848,50.858272],[-1.11399,50.843517],[-1.102708,50.846078],[-1.106307,50.837894],[-1.088652,50.828453],[-1.078007,50.837318],[-1.036311,50.835426],[-1.024974,50.826442],[-1.023952,50.831586]]]]}',
      metadata: ["Portsmouth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.379892,50.947518],[-1.40614,50.956127],[-1.423663,50.947233],[-1.449546,50.949911],[-1.47706,50.928669],[-1.474514,50.924286],[-1.465123,50.910344],[-1.447056,50.903792],[-1.442612,50.9112],[-1.432463,50.90733],[-1.399021,50.894568],[-1.393254,50.883029],[-1.387964,50.906905],[-1.376275,50.910689],[-1.371704,50.91213],[-1.384874,50.903996],[-1.384317,50.891552],[-1.365129,50.880027],[-1.362876,50.87875],[-1.321978,50.900953],[-1.333357,50.919883],[-1.357933,50.930731],[-1.35469,50.941022],[-1.379892,50.947518]]]}',
      metadata: ["Southampton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.30376,50.764774],[-1.311098,50.767045],[-1.314696,50.765466],[-1.353296,50.73909],[-1.395285,50.728817],[-1.403568,50.726557],[-1.384822,50.722476],[-1.408119,50.719081],[-1.397743,50.710448],[-1.411903,50.714477],[-1.413056,50.703532],[-1.414237,50.715303],[-1.412986,50.718624],[-1.42201,50.724616],[-1.411753,50.724376],[-1.417013,50.725236],[-1.428067,50.725883],[-1.434687,50.723274],[-1.469464,50.709556],[-1.50393,50.705653],[-1.496585,50.700935],[-1.499835,50.697954],[-1.50967,50.705815],[-1.501568,50.706807],[-1.520416,50.707125],[-1.522127,50.707022],[-1.548224,50.678281],[-1.586543,50.663125],[-1.484412,50.666761],[-1.448082,50.643825],[-1.435683,50.640281],[-1.38897,50.626915],[-1.373883,50.618015],[-1.345102,50.601023],[-1.301251,50.575574],[-1.1854,50.597245],[-1.176028,50.616784],[-1.16036,50.649412],[-1.152615,50.652907],[-1.131724,50.662328],[-1.098545,50.664969],[-1.070236,50.687501],[-1.070377,50.687581],[-1.085974,50.694327],[-1.108292,50.693503],[-1.10289,50.699879],[-1.096091,50.694389],[-1.1087,50.720703],[-1.151182,50.732359],[-1.15458,50.73329],[-1.20867,50.734731],[-1.214535,50.734153],[-1.215929,50.734923],[-1.216655,50.734942],[-1.21643,50.735199],[-1.22788,50.741518],[-1.234914,50.743276],[-1.242522,50.738537],[-1.247786,50.751865],[-1.27459,50.765438],[-1.291383,50.762579],[-1.282959,50.730033],[-1.294895,50.761981],[-1.296097,50.761776],[-1.30376,50.764774]]]}',
      metadata: ["Isle of Wight"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.559411,54.882037],[-1.579909,54.87777],[-1.594164,54.902019],[-1.65056,54.879324],[-1.649319,54.892987],[-1.675576,54.898097],[-1.674778,54.90956],[-1.69169,54.902598],[-1.698633,54.909054],[-1.724908,54.9088],[-1.736204,54.918581],[-1.768745,54.906726],[-1.781757,54.911543],[-1.794926,54.903547],[-1.821013,54.905662],[-1.854437,54.891185],[-1.870104,54.850866],[-1.914043,54.839529],[-1.913765,54.833997],[-1.932681,54.854187],[-1.949057,54.852967],[-1.980236,54.868183],[-2.000967,54.869668],[-2.039757,54.848292],[-2.082476,54.838222],[-2.139789,54.841871],[-2.16947,54.80361],[-2.198601,54.806736],[-2.218907,54.782377],[-2.282678,54.798252],[-2.31209,54.791015],[-2.325747,54.726629],[-2.355743,54.697652],[-2.351769,54.685931],[-2.327288,54.670728],[-2.292875,54.663885],[-2.287979,54.65048],[-2.324938,54.63165],[-2.304515,54.596198],[-2.209488,54.551713],[-2.197531,54.532704],[-2.172398,54.532444],[-2.158997,54.47203],[-2.170213,54.458199],[-2.116596,54.462263],[-2.043198,54.483599],[-2.04473,54.475186],[-1.996764,54.466903],[-1.97006,54.451522],[-1.942543,54.453395],[-1.85913,54.481858],[-1.857801,54.50354],[-1.839433,54.508437],[-1.792976,54.484492],[-1.776132,54.506729],[-1.779697,54.531873],[-1.733091,54.527736],[-1.721311,54.542302],[-1.696926,54.536006],[-1.705274,54.549172],[-1.691207,54.556245],[-1.709282,54.563179],[-1.708984,54.574142],[-1.694028,54.586894],[-1.679312,54.585973],[-1.682422,54.617771],[-1.606764,54.61754],[-1.606218,54.60344],[-1.584193,54.610486],[-1.593409,54.595077],[-1.576266,54.580198],[-1.552824,54.582342],[-1.558644,54.592117],[-1.526764,54.596454],[-1.468688,54.600559],[-1.451705,54.590828],[-1.438355,54.59508],[-1.450914,54.610514],[-1.412823,54.616592],[-1.380898,54.643917],[-1.341254,54.650212],[-1.347852,54.662421],[-1.330946,54.682134],[-1.344526,54.691121],[-1.319329,54.691357],[-1.301327,54.708101],[-1.305521,54.717522],[-1.270252,54.727169],[-1.251865,54.719623],[-1.241185,54.723335],[-1.280927,54.752826],[-1.302044,54.768473],[-1.329376,54.838101],[-1.320852,54.837577],[-1.347332,54.860417],[-1.421536,54.839476],[-1.412955,54.823655],[-1.422552,54.803171],[-1.490726,54.799304],[-1.481856,54.809651],[-1.50428,54.83123],[-1.50667,54.871141],[-1.531782,54.878188],[-1.56181,54.875717],[-1.559411,54.882037]]]}',
      metadata: ["County Durham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.313998,53.357425],[-2.339875,53.367378],[-2.375784,53.365351],[-2.42659,53.387462],[-2.43988,53.366663],[-2.486878,53.367904],[-2.52105,53.3479],[-2.518393,53.34239],[-2.493968,53.343299],[-2.512281,53.321346],[-2.498006,53.289909],[-2.453171,53.284551],[-2.427461,53.26117],[-2.414455,53.268319],[-2.394115,53.266754],[-2.364152,53.248501],[-2.349026,53.249012],[-2.3638,53.223571],[-2.396289,53.234362],[-2.401172,53.221759],[-2.414182,53.2193],[-2.410161,53.205696],[-2.372554,53.195583],[-2.368731,53.182933],[-2.37832,53.172013],[-2.39211,53.179915],[-2.406367,53.174087],[-2.430663,53.197965],[-2.456557,53.202613],[-2.457374,53.176694],[-2.443477,53.170838],[-2.44376,53.159883],[-2.468867,53.152737],[-2.499741,53.164152],[-2.542924,53.149772],[-2.572403,53.163472],[-2.583581,53.155498],[-2.596505,53.158872],[-2.59209,53.144505],[-2.625284,53.150847],[-2.641263,53.128421],[-2.65973,53.130716],[-2.671145,53.11587],[-2.706054,53.118509],[-2.711364,53.093642],[-2.731739,53.091809],[-2.752929,53.069226],[-2.718263,53.044214],[-2.702411,53.054321],[-2.668817,53.038654],[-2.699292,52.995439],[-2.674662,52.985663],[-2.632651,52.996671],[-2.594889,52.979607],[-2.597693,52.963006],[-2.586414,52.955379],[-2.561263,52.964952],[-2.529516,52.947165],[-2.521428,52.974265],[-2.481153,52.958818],[-2.434614,52.969521],[-2.436761,52.986256],[-2.380794,52.998411],[-2.383045,53.007787],[-2.370468,53.014576],[-2.384227,53.026168],[-2.381249,53.052551],[-2.347586,53.05617],[-2.318051,53.081359],[-2.293376,53.078326],[-2.253248,53.093977],[-2.247407,53.08985],[-2.211315,53.115824],[-2.155645,53.159619],[-2.141411,53.156652],[-2.140439,53.183813],[-2.112077,53.16866],[-2.070233,53.171686],[-2.046527,53.192648],[-2.000202,53.193737],[-1.987408,53.213586],[-1.990265,53.222999],[-1.974859,53.231061],[-2.009482,53.260652],[-2.006785,53.354572],[-2.031058,53.370262],[-2.040564,53.374088],[-2.068078,53.357394],[-2.095179,53.366081],[-2.123196,53.361947],[-2.139025,53.367317],[-2.151191,53.348133],[-2.144099,53.342871],[-2.160648,53.327315],[-2.194163,53.33865],[-2.180977,53.344044],[-2.185441,53.35266],[-2.24079,53.359574],[-2.256447,53.360677],[-2.301359,53.340121],[-2.29693,53.348584],[-2.313998,53.357425]]]}',
      metadata: ["Cheshire East"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.699292,52.995439],[-2.668817,53.038654],[-2.702411,53.054321],[-2.718263,53.044214],[-2.752929,53.069226],[-2.731739,53.091809],[-2.711364,53.093642],[-2.706054,53.118509],[-2.671145,53.11587],[-2.65973,53.130716],[-2.641263,53.128421],[-2.625284,53.150847],[-2.59209,53.144505],[-2.596505,53.158872],[-2.583581,53.155498],[-2.572403,53.163472],[-2.542924,53.149772],[-2.499741,53.164152],[-2.468867,53.152737],[-2.44376,53.159883],[-2.443477,53.170838],[-2.457374,53.176694],[-2.456557,53.202613],[-2.430663,53.197965],[-2.406367,53.174087],[-2.39211,53.179915],[-2.37832,53.172013],[-2.368731,53.182933],[-2.372554,53.195583],[-2.410161,53.205696],[-2.414182,53.2193],[-2.401172,53.221759],[-2.396289,53.234362],[-2.3638,53.223571],[-2.349026,53.249012],[-2.364152,53.248501],[-2.394115,53.266754],[-2.414455,53.268319],[-2.427461,53.26117],[-2.453171,53.284551],[-2.498006,53.289909],[-2.512281,53.321346],[-2.493968,53.343299],[-2.518393,53.34239],[-2.561875,53.323343],[-2.58629,53.329397],[-2.595223,53.322454],[-2.609087,53.312071],[-2.619935,53.320321],[-2.624123,53.309398],[-2.645061,53.310135],[-2.641557,53.305035],[-2.685152,53.315451],[-2.700801,53.305807],[-2.723525,53.31314],[-2.739292,53.30687],[-2.752486,53.314731],[-2.752789,53.31457],[-2.788796,53.295409],[-2.815956,53.306163],[-2.846383,53.306944],[-2.839601,53.298737],[-2.857281,53.286908],[-2.855568,53.292022],[-2.900534,53.29701],[-2.88947,53.28964],[-2.901651,53.295416],[-2.928636,53.308202],[-2.928816,53.308364],[-2.931603,53.306069],[-2.939551,53.310416],[-2.968033,53.301255],[-2.992738,53.307109],[-3.02614,53.297749],[-3.074166,53.316381],[-3.109048,53.297047],[-3.096317,53.29395],[-3.113871,53.294372],[-3.123004,53.289304],[-3.105207,53.291636],[-3.120268,53.288577],[-3.109613,53.28258],[-3.096981,53.289348],[-3.107449,53.28191],[-3.102261,53.280743],[-3.089205,53.286115],[-3.098633,53.279927],[-3.102904,53.280478],[-3.108103,53.278339],[-3.077549,53.279578],[-3.110061,53.276795],[-3.085549,53.272254],[-3.088812,53.268],[-3.107245,53.271974],[-3.107398,53.271765],[-3.086076,53.25683],[-3.086015,53.256799],[-3.036024,53.251805],[-2.998378,53.235859],[-2.922299,53.189293],[-2.927839,53.171411],[-2.995088,53.154196],[-2.979498,53.150622],[-2.963813,53.132758],[-2.910232,53.112639],[-2.881099,53.121604],[-2.902074,53.092039],[-2.875722,53.081522],[-2.881644,53.074392],[-2.861475,53.06066],[-2.872555,53.058616],[-2.85924,53.054256],[-2.870118,53.045361],[-2.855715,53.037256],[-2.861044,53.022849],[-2.844062,53.017668],[-2.835996,52.99715],[-2.803311,52.989594],[-2.768275,52.994861],[-2.75994,52.98642],[-2.726841,52.983273],[-2.699292,52.995439]]]}',
      metadata: ["Cheshire West and Chester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.378938,52.891721],[-2.440412,52.881227],[-2.446142,52.874008],[-2.470841,52.905869],[-2.437123,52.943599],[-2.425269,52.949999],[-2.405602,52.947294],[-2.412899,52.96174],[-2.386208,52.953217],[-2.379718,52.976065],[-2.368731,52.979359],[-2.380794,52.998411],[-2.436761,52.986256],[-2.434614,52.969521],[-2.481153,52.958818],[-2.521428,52.974265],[-2.529516,52.947165],[-2.561263,52.964952],[-2.586414,52.955379],[-2.597693,52.963006],[-2.594889,52.979607],[-2.632651,52.996671],[-2.674662,52.985663],[-2.699292,52.995439],[-2.726841,52.983273],[-2.735294,52.969946],[-2.724178,52.957122],[-2.728439,52.925302],[-2.755326,52.924628],[-2.798848,52.895759],[-2.841015,52.942624],[-2.883539,52.946639],[-2.887431,52.95253],[-2.928889,52.938679],[-2.959813,52.95117],[-2.97503,52.968985],[-2.982022,52.959198],[-3.009649,52.956199],[-3.035079,52.929481],[-3.076513,52.925479],[-3.095953,52.930282],[-3.114162,52.893978],[-3.147504,52.890169],[-3.135524,52.885014],[-3.152417,52.878748],[-3.127713,52.867103],[-3.163015,52.847491],[-3.15126,52.842565],[-3.167888,52.819267],[-3.168205,52.807328],[-3.15319,52.806369],[-3.160855,52.795745],[-3.118287,52.783582],[-3.086632,52.795593],[-3.091682,52.786663],[-3.079516,52.771514],[-3.047789,52.772643],[-3.05258,52.76869],[-3.038977,52.770401],[-3.035094,52.764009],[-3.017199,52.767664],[-3.01079,52.758564],[-3.02181,52.751941],[-2.991993,52.743756],[-2.99132,52.733818],[-2.965066,52.732268],[-2.961079,52.716466],[-2.978103,52.715357],[-2.977592,52.726592],[-3.000555,52.720275],[-3.020357,52.725102],[-3.022486,52.706668],[-3.047048,52.691266],[-3.03858,52.675373],[-3.051113,52.647366],[-3.083566,52.641293],[-3.059799,52.630721],[-3.073187,52.628963],[-3.093623,52.609339],[-3.089558,52.599506],[-3.117414,52.585763],[-3.139501,52.58572],[-3.111495,52.541364],[-3.137045,52.534045],[-3.133064,52.527471],[-3.085412,52.534503],[-3.087276,52.551332],[-3.01423,52.575497],[-2.994164,52.552911],[-3.003874,52.519833],[-3.032379,52.523731],[-3.029202,52.501268],[-3.111017,52.498935],[-3.180214,52.473934],[-3.19724,52.475989],[-3.235543,52.442504],[-3.219545,52.421253],[-3.178837,52.409397],[-3.154447,52.387715],[-3.110607,52.377193],[-3.060664,52.34824],[-3.040174,52.344326],[-2.974503,52.354701],[-2.954651,52.349155],[-2.933149,52.350052],[-2.938889,52.361058],[-2.926143,52.366995],[-2.900805,52.36727],[-2.922311,52.375147],[-2.917685,52.386288],[-2.893135,52.374088],[-2.888457,52.385154],[-2.855018,52.395485],[-2.818223,52.39123],[-2.805433,52.388252],[-2.807329,52.375911],[-2.792505,52.375284],[-2.79242,52.356864],[-2.732767,52.355532],[-2.74838,52.334902],[-2.766987,52.336113],[-2.71425,52.308878],[-2.679811,52.312023],[-2.689128,52.316605],[-2.666066,52.342301],[-2.623934,52.321394],[-2.618035,52.306957],[-2.574853,52.317576],[-2.562644,52.311137],[-2.562219,52.333108],[-2.53915,52.344139],[-2.512129,52.33711],[-2.513205,52.329214],[-2.481796,52.331078],[-2.488327,52.355398],[-2.47477,52.367146],[-2.414923,52.368255],[-2.410474,52.387153],[-2.390673,52.381528],[-2.367352,52.388063],[-2.335533,52.385347],[-2.372946,52.401964],[-2.363528,52.439426],[-2.31175,52.437531],[-2.287382,52.455317],[-2.312749,52.489209],[-2.29139,52.51168],[-2.260943,52.524102],[-2.269215,52.530689],[-2.256405,52.541796],[-2.282477,52.553396],[-2.261938,52.56906],[-2.300293,52.593027],[-2.322024,52.593636],[-2.323799,52.612953],[-2.281584,52.605874],[-2.256171,52.609798],[-2.232894,52.647694],[-2.234709,52.655854],[-2.247687,52.65666],[-2.238715,52.663701],[-2.247729,52.683074],[-2.30304,52.682953],[-2.319908,52.695398],[-2.324834,52.705336],[-2.308604,52.720746],[-2.315576,52.732947],[-2.357929,52.731213],[-2.376548,52.739597],[-2.419029,52.662892],[-2.418295,52.633775],[-2.436635,52.627094],[-2.438111,52.614559],[-2.501774,52.629019],[-2.548457,52.654713],[-2.555647,52.671098],[-2.62255,52.699032],[-2.59742,52.718251],[-2.66024,52.731625],[-2.663415,52.760441],[-2.643128,52.767085],[-2.632331,52.759591],[-2.621003,52.776522],[-2.592244,52.77685],[-2.598007,52.797969],[-2.582786,52.805625],[-2.551835,52.802535],[-2.53381,52.794119],[-2.537515,52.785109],[-2.521989,52.798951],[-2.503028,52.796604],[-2.486507,52.805246],[-2.477121,52.799379],[-2.489704,52.782973],[-2.47281,52.780422],[-2.456255,52.784186],[-2.472895,52.820803],[-2.416347,52.827006],[-2.393756,52.83662],[-2.378938,52.891721]]]}',
      metadata: ["Shropshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.335226,50.646541],[-4.348941,50.689538],[-4.369341,50.702341],[-4.361586,50.718767],[-4.384996,50.74775],[-4.381063,50.770538],[-4.393506,50.778248],[-4.414417,50.774396],[-4.408723,50.762417],[-4.423947,50.764549],[-4.45133,50.785654],[-4.493502,50.792912],[-4.446791,50.808224],[-4.442235,50.846958],[-4.433657,50.865513],[-4.420959,50.866086],[-4.462683,50.91349],[-4.456058,50.928869],[-4.545973,50.928806],[-4.546067,50.928374],[-4.561879,50.912049],[-4.569916,50.903748],[-4.566816,50.888742],[-4.559268,50.865705],[-4.559866,50.855057],[-4.558351,50.847707],[-4.556117,50.836862],[-4.546672,50.829953],[-4.557323,50.828897],[-4.558683,50.828762],[-4.561944,50.781332],[-4.585506,50.770887],[-4.625326,50.753214],[-4.63457,50.745137],[-4.634522,50.74096],[-4.63969,50.740661],[-4.640284,50.740142],[-4.648698,50.740138],[-4.653878,50.739838],[-4.654576,50.716267],[-4.681005,50.704467],[-4.681131,50.703643],[-4.680246,50.695994],[-4.726062,50.684062],[-4.729785,50.67361],[-4.733063,50.674282],[-4.735051,50.671503],[-4.741094,50.675929],[-4.743294,50.67638],[-4.764463,50.669821],[-4.764497,50.66959],[-4.760581,50.653323],[-4.758718,50.65285],[-4.770442,50.622372],[-4.789469,50.604437],[-4.790583,50.602641],[-4.791659,50.602372],[-4.79622,50.598071],[-4.827129,50.593007],[-4.832439,50.592136],[-4.838225,50.594415],[-4.86989,50.595386],[-4.869986,50.59537],[-4.867525,50.588975],[-4.880553,50.584067],[-4.885229,50.582305],[-4.898906,50.583612],[-4.908289,50.584507],[-4.915495,50.591458],[-4.921444,50.59324],[-4.935376,50.586896],[-4.928234,50.582877],[-4.9158,50.575878],[-4.931444,50.564811],[-4.926371,50.545286],[-4.92473,50.531176],[-4.930907,50.530003],[-4.935114,50.548987],[-4.949594,50.556562],[-4.94512,50.569147],[-4.972077,50.55778],[-4.983866,50.542211],[-5.035943,50.549486],[-5.036525,50.549559],[-5.022638,50.526539],[-5.026911,50.523978],[-5.028357,50.517651],[-5.024045,50.508721],[-5.046807,50.497827],[-5.034827,50.493687],[-5.036036,50.488824],[-5.039666,50.47402],[-5.031864,50.467617],[-5.042058,50.46429],[-5.042605,50.462062],[-5.043788,50.442229],[-5.054777,50.425727],[-5.077535,50.415842],[-5.095528,50.424006],[-5.099803,50.425633],[-5.102435,50.413114],[-5.108783,50.412858],[-5.146384,50.405601],[-5.147188,50.405344],[-5.146128,50.40051],[-5.144891,50.397147],[-5.145335,50.396888],[-5.143586,50.388905],[-5.157683,50.389586],[-5.146485,50.375265],[-5.153846,50.346137],[-5.181491,50.340335],[-5.200611,50.320143],[-5.234121,50.318351],[-5.235461,50.300686],[-5.242111,50.293104],[-5.243696,50.286872],[-5.249523,50.28465],[-5.251346,50.28257],[-5.281373,50.270655],[-5.289185,50.261046],[-5.303758,50.261728],[-5.324807,50.244265],[-5.367002,50.236422],[-5.368377,50.236166],[-5.378101,50.244071],[-5.395253,50.240516],[-5.393625,50.225574],[-5.413477,50.209806],[-5.433698,50.193729],[-5.436808,50.193524],[-5.469165,50.199866],[-5.472005,50.20807],[-5.472397,50.209201],[-5.477303,50.218973],[-5.48156,50.219156],[-5.53654,50.216445],[-5.538784,50.216244],[-5.559216,50.205428],[-5.590855,50.188663],[-5.60006,50.19305],[-5.600707,50.193302],[-5.606574,50.188016],[-5.628009,50.168408],[-5.628336,50.168394],[-5.629073,50.16773],[-5.642267,50.167286],[-5.67306,50.166244],[-5.710116,50.127422],[-5.709559,50.126302],[-5.688586,50.090296],[-5.691663,50.087986],[-5.714058,50.063885],[-5.713137,50.062329],[-5.694624,50.054479],[-5.692577,50.054014],[-5.690358,50.049491],[-5.680871,50.036792],[-5.676733,50.035653],[-5.653578,50.041914],[-5.648431,50.043827],[-5.636314,50.039991],[-5.632792,50.042294],[-5.619141,50.051218],[-5.585362,50.051636],[-5.577229,50.051774],[-5.542175,50.070569],[-5.533292,50.088511],[-5.539569,50.095533],[-5.548832,50.105259],[-5.548427,50.105438],[-5.549361,50.106482],[-5.531035,50.114268],[-5.530108,50.123712],[-5.483902,50.127552],[-5.46708,50.120768],[-5.463478,50.122732],[-5.434778,50.107728],[-5.429154,50.105455],[-5.42936,50.096906],[-5.391778,50.103501],[-5.36319,50.088995],[-5.362514,50.089078],[-5.346307,50.09216],[-5.34355,50.091424],[-5.339116,50.091972],[-5.316305,50.085223],[-5.279422,50.056373],[-5.280047,50.04186],[-5.261774,50.03429],[-5.261752,50.034243],[-5.256755,50.023401],[-5.25647,50.023191],[-5.256579,50.02302],[-5.255933,50.021617],[-5.26702,50.00671],[-5.268399,50.004556],[-5.257688,49.995582],[-5.245098,49.9854],[-5.245187,49.985103],[-5.243991,49.9841],[-5.245675,49.976171],[-5.232844,49.973557],[-5.219547,49.971445],[-5.219112,49.970023],[-5.210156,49.960194],[-5.18587,49.962983],[-5.188767,49.973877],[-5.166628,50.003772],[-5.122587,50.009239],[-5.10131,50.004248],[-5.091161,50.015713],[-5.096803,50.026367],[-5.073454,50.033668],[-5.068842,50.035109],[-5.066052,50.039582],[-5.057817,50.052779],[-5.067734,50.067625],[-5.075675,50.068407],[-5.079594,50.068793],[-5.076597,50.082793],[-5.075999,50.085581],[-5.076771,50.085521],[-5.117903,50.082281],[-5.096943,50.087197],[-5.094849,50.089144],[-5.101692,50.092941],[-5.106552,50.094186],[-5.135733,50.091375],[-5.138856,50.094246],[-5.150593,50.093105],[-5.147638,50.085343],[-5.1544,50.092735],[-5.172316,50.090991],[-5.159519,50.093991],[-5.162766,50.095948],[-5.163458,50.095889],[-5.163566,50.09643],[-5.169132,50.099783],[-5.1649,50.1126],[-5.163572,50.100394],[-5.160508,50.097021],[-5.145938,50.098624],[-5.144591,50.107167],[-5.1411,50.104563],[-5.137909,50.111724],[-5.130339,50.110194],[-5.138153,50.102366],[-5.135126,50.100108],[-5.121933,50.099977],[-5.094812,50.10228],[-5.081769,50.109395],[-5.093693,50.126069],[-5.079725,50.13158],[-5.073086,50.134198],[-5.076531,50.140478],[-5.055061,50.148285],[-5.044546,50.144735],[-5.041991,50.143952],[-5.049241,50.155739],[-5.050585,50.155427],[-5.06352,50.151597],[-5.081555,50.160051],[-5.102252,50.169744],[-5.081978,50.166626],[-5.076613,50.1658],[-5.077511,50.166814],[-5.071643,50.165035],[-5.054467,50.162389],[-5.052879,50.163549],[-5.047705,50.171608],[-5.05119,50.177133],[-5.0773,50.184221],[-5.054352,50.180328],[-5.063432,50.196186],[-5.05897,50.193244],[-5.043922,50.20331],[-5.048076,50.209026],[-5.043079,50.2043],[-5.038977,50.212664],[-5.031316,50.210672],[-5.028244,50.215712],[-5.029234,50.222838],[-5.01677,50.226348],[-5.021556,50.244693],[-5.014441,50.227089],[-5.005997,50.227606],[-5.024106,50.222503],[-5.026678,50.218283],[-5.027518,50.21048],[-5.02849,50.209937],[-5.02841,50.209916],[-5.026773,50.203962],[-5.034832,50.203918],[-5.025604,50.182219],[-5.014355,50.190474],[-5.015617,50.186004],[-5.015237,50.186151],[-5.016219,50.183873],[-5.023709,50.157331],[-4.995739,50.162237],[-5.003956,50.150716],[-5.004014,50.150709],[-5.004065,50.150603],[-5.009404,50.150021],[-5.017663,50.148967],[-5.014392,50.14504],[-5.009095,50.139529],[-4.98197,50.151806],[-4.973603,50.185648],[-4.955906,50.202934],[-4.933738,50.207093],[-4.916987,50.197235],[-4.903176,50.206599],[-4.878696,50.224297],[-4.862456,50.236028],[-4.818921,50.231593],[-4.809451,50.225992],[-4.805212,50.223485],[-4.798503,50.219515],[-4.798352,50.226261],[-4.798263,50.2302],[-4.784022,50.236122],[-4.780962,50.23748],[-4.785546,50.245571],[-4.766987,50.25664],[-4.785684,50.261757],[-4.787018,50.2695],[-4.781243,50.290134],[-4.764134,50.300421],[-4.752649,50.298508],[-4.766134,50.319371],[-4.766049,50.319475],[-4.766916,50.320829],[-4.756848,50.33107],[-4.756495,50.331159],[-4.756472,50.331187],[-4.755611,50.331382],[-4.689461,50.34805],[-4.688082,50.339744],[-4.682425,50.338011],[-4.684919,50.320685],[-4.684825,50.320123],[-4.67255,50.313876],[-4.667615,50.323079],[-4.642129,50.332113],[-4.631082,50.339016],[-4.63442,50.334844],[-4.634057,50.334973],[-4.629659,50.334578],[-4.608835,50.337945],[-4.638387,50.329885],[-4.638465,50.329787],[-4.633163,50.324348],[-4.606652,50.328961],[-4.598415,50.323887],[-4.578492,50.33257],[-4.538958,50.323722],[-4.538304,50.323844],[-4.498019,50.336616],[-4.497525,50.33739],[-4.472689,50.333209],[-4.450635,50.348189],[-4.451101,50.350919],[-4.43658,50.361021],[-4.410224,50.364147],[-4.308151,50.361397],[-4.294475,50.356574],[-4.281481,50.354495],[-4.239654,50.337212],[-4.22917,50.333504],[-4.219524,50.324606],[-4.223619,50.312765],[-4.223198,50.311664],[-4.221476,50.311965],[-4.210192,50.318257],[-4.189464,50.317546],[-4.188402,50.317731],[-4.201271,50.332873],[-4.19959,50.333426],[-4.170594,50.346814],[-4.171554,50.357225],[-4.172689,50.358573],[-4.207616,50.346907],[-4.197116,50.359563],[-4.208851,50.368635],[-4.209185,50.368651],[-4.208926,50.368693],[-4.209235,50.368932],[-4.194784,50.371857],[-4.209468,50.385666],[-4.202214,50.388383],[-4.230766,50.390432],[-4.230845,50.390514],[-4.233015,50.393556],[-4.227302,50.393297],[-4.22675,50.393512],[-4.211472,50.404681],[-4.210408,50.418831],[-4.209911,50.42544],[-4.223872,50.421983],[-4.238312,50.439043],[-4.222281,50.426236],[-4.200788,50.436397],[-4.2152,50.466686],[-4.229445,50.455837],[-4.23853,50.463933],[-4.218082,50.475943],[-4.220869,50.498073],[-4.199357,50.492369],[-4.180705,50.503728],[-4.18575,50.508357],[-4.202793,50.50318],[-4.207307,50.533563],[-4.232295,50.531017],[-4.247891,50.543922],[-4.271526,50.536585],[-4.259285,50.545847],[-4.279516,50.569173],[-4.27115,50.582214],[-4.28587,50.584731],[-4.286142,50.575008],[-4.291328,50.583858],[-4.306915,50.578585],[-4.31163,50.586077],[-4.300323,50.633839],[-4.325592,50.637726],[-4.335226,50.646541]]]}',
      metadata: ["Cornwall"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-6.349051,49.89822],[-6.352767,49.889226],[-6.342346,49.882885],[-6.341261,49.882341],[-6.338337,49.893413],[-6.337797,49.893129],[-6.328514,49.892052],[-6.328423,49.892456],[-6.349051,49.89822]]],[[[-6.275837,49.921227],[-6.27663,49.928782],[-6.297775,49.936794],[-6.312125,49.928536],[-6.310358,49.919517],[-6.309094,49.916618],[-6.327644,49.912575],[-6.326637,49.911623],[-6.320515,49.908905],[-6.313645,49.912804],[-6.313532,49.913142],[-6.313361,49.912965],[-6.312878,49.913239],[-6.306088,49.905426],[-6.303938,49.903196],[-6.303004,49.911533],[-6.287829,49.910022],[-6.275837,49.921227]]],[[[-6.331908,49.939592],[-6.319972,49.952472],[-6.320666,49.954068],[-6.346464,49.966925],[-6.344317,49.960569],[-6.33248,49.939505],[-6.331908,49.939592]]],[[[-6.349494,49.951921],[-6.348074,49.955653],[-6.35872,49.967013],[-6.360297,49.948978],[-6.355735,49.946451],[-6.349494,49.951921]]],[[[-6.293566,49.978329],[-6.293675,49.978181],[-6.292159,49.974414],[-6.295411,49.97584],[-6.303684,49.964675],[-6.302305,49.963206],[-6.286143,49.956869],[-6.283852,49.956337],[-6.263164,49.96238],[-6.261732,49.962863],[-6.288749,49.966172],[-6.289708,49.969907],[-6.293566,49.978329]]]]}',
      metadata: ["Isles of Scilly"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.788617,51.667002],[-1.811942,51.703146],[-1.823171,51.673484],[-1.815851,51.663045],[-1.850484,51.656285],[-1.873884,51.68259],[-1.899013,51.679687],[-1.876598,51.651596],[-1.920905,51.657244],[-1.94206,51.670417],[-1.963057,51.658656],[-1.950519,51.636963],[-1.977327,51.638091],[-1.995307,51.651364],[-2.015592,51.650516],[-2.057174,51.672443],[-2.152538,51.590342],[-2.179491,51.600046],[-2.190012,51.592503],[-2.206552,51.595949],[-2.207426,51.603401],[-2.241867,51.592107],[-2.245117,51.581409],[-2.272559,51.57759],[-2.2603,51.569901],[-2.266502,51.536262],[-2.252388,51.526874],[-2.324324,51.497509],[-2.311423,51.487373],[-2.290466,51.486651],[-2.295743,51.45859],[-2.285125,51.457845],[-2.294616,51.428802],[-2.278541,51.415882],[-2.290862,51.405712],[-2.281812,51.397228],[-2.296788,51.394887],[-2.292056,51.36957],[-2.344338,51.345564],[-2.296409,51.342662],[-2.300927,51.333223],[-2.289091,51.325272],[-2.273095,51.322879],[-2.271955,51.314254],[-2.285068,51.309457],[-2.28068,51.293463],[-2.265253,51.29622],[-2.253497,51.289835],[-2.245341,51.253876],[-2.29837,51.175437],[-2.346305,51.130511],[-2.344539,51.124678],[-2.364528,51.118879],[-2.362529,51.101624],[-2.325853,51.079676],[-2.26862,51.068741],[-2.242274,51.071178],[-2.193209,51.037712],[-2.172566,51.001073],[-2.119764,50.978191],[-2.120671,50.961539],[-2.101792,50.944986],[-2.068313,50.951194],[-2.036559,50.972177],[-1.994036,50.975728],[-1.98521,50.984756],[-1.956821,50.98983],[-1.949936,50.982311],[-1.927876,50.997697],[-1.886741,50.999528],[-1.874482,51.006331],[-1.873984,50.984441],[-1.853381,51.00468],[-1.835813,51.009422],[-1.815422,50.985923],[-1.800314,50.991395],[-1.754402,50.977892],[-1.719617,50.97678],[-1.66166,50.945278],[-1.634965,50.959242],[-1.619751,50.958567],[-1.602923,50.978522],[-1.619642,50.982996],[-1.628885,50.999032],[-1.597339,51.009753],[-1.599397,51.023729],[-1.632376,51.03278],[-1.63494,51.040561],[-1.627729,51.078011],[-1.637311,51.092165],[-1.62625,51.117338],[-1.662975,51.127192],[-1.654044,51.156283],[-1.672368,51.178544],[-1.668835,51.190772],[-1.694097,51.204043],[-1.689695,51.214828],[-1.633541,51.217516],[-1.607426,51.25277],[-1.577636,51.255631],[-1.54516,51.245098],[-1.536035,51.24853],[-1.52982,51.260514],[-1.540513,51.260833],[-1.542584,51.281251],[-1.522807,51.287058],[-1.519511,51.295939],[-1.533562,51.316224],[-1.527507,51.338466],[-1.498299,51.329376],[-1.485711,51.347683],[-1.500608,51.356268],[-1.495449,51.369664],[-1.555603,51.395584],[-1.552988,51.410044],[-1.571053,51.415578],[-1.565119,51.422043],[-1.526614,51.423931],[-1.523991,51.447481],[-1.582291,51.494112],[-1.584708,51.524912],[-1.602812,51.518295],[-1.719082,51.500706],[-1.715737,51.488383],[-1.774331,51.482455],[-1.797797,51.484446],[-1.81345,51.507042],[-1.837585,51.500837],[-1.84689,51.524321],[-1.836974,51.510903],[-1.83008,51.51544],[-1.853824,51.546302],[-1.849277,51.553309],[-1.865122,51.559591],[-1.860104,51.565244],[-1.845189,51.561718],[-1.843146,51.578659],[-1.823733,51.582209],[-1.837561,51.587242],[-1.831857,51.596729],[-1.842303,51.61256],[-1.827847,51.625326],[-1.788583,51.632714],[-1.799081,51.662505],[-1.788617,51.667002]]]}',
      metadata: ["Wiltshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.249785,52.184371],[-0.240723,52.190193],[-0.261845,52.209867],[-0.296284,52.210487],[-0.285614,52.237277],[-0.293209,52.240516],[-0.335249,52.242882],[-0.343469,52.241874],[-0.341011,52.230647],[-0.374376,52.232998],[-0.382341,52.271126],[-0.372175,52.2735],[-0.37501,52.280469],[-0.421767,52.284947],[-0.435761,52.296657],[-0.436089,52.314471],[-0.465366,52.322953],[-0.51983,52.317693],[-0.514051,52.314697],[-0.541969,52.289942],[-0.53119,52.270402],[-0.541972,52.256073],[-0.565693,52.253468],[-0.586335,52.272831],[-0.610617,52.279498],[-0.653655,52.268289],[-0.637332,52.227318],[-0.668136,52.195034],[-0.627447,52.181545],[-0.630671,52.154924],[-0.640782,52.152772],[-0.635452,52.139254],[-0.607249,52.133869],[-0.59181,52.110692],[-0.583233,52.104549],[-0.589186,52.097499],[-0.540956,52.081627],[-0.508515,52.054543],[-0.499672,52.075565],[-0.471527,52.088009],[-0.440437,52.063374],[-0.403087,52.069223],[-0.384902,52.075575],[-0.381287,52.093465],[-0.344804,52.115956],[-0.361082,52.144168],[-0.346235,52.145972],[-0.321553,52.16879],[-0.306026,52.165559],[-0.289117,52.190926],[-0.249785,52.184371]]]}',
      metadata: ["Bedford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.249785,52.184371],[-0.289117,52.190926],[-0.306026,52.165559],[-0.321553,52.16879],[-0.346235,52.145972],[-0.361082,52.144168],[-0.344804,52.115956],[-0.381287,52.093465],[-0.384902,52.075575],[-0.403087,52.069223],[-0.440437,52.063374],[-0.471527,52.088009],[-0.499672,52.075565],[-0.508515,52.054543],[-0.540956,52.081627],[-0.589186,52.097499],[-0.583233,52.104549],[-0.59181,52.110692],[-0.668976,52.048717],[-0.643047,52.037249],[-0.6402,52.024066],[-0.651024,52.018486],[-0.643477,52.010855],[-0.66169,51.999736],[-0.645681,51.972228],[-0.652978,51.969229],[-0.702157,51.909119],[-0.692703,51.900151],[-0.672969,51.901753],[-0.65198,51.886791],[-0.620089,51.885486],[-0.583564,51.870324],[-0.537629,51.831411],[-0.543651,51.824518],[-0.553629,51.826713],[-0.519729,51.805095],[-0.502283,51.815459],[-0.511193,51.825894],[-0.501818,51.836795],[-0.471196,51.845468],[-0.478298,51.853137],[-0.47042,51.85571],[-0.447525,51.847602],[-0.421501,51.850205],[-0.404859,51.840607],[-0.373363,51.829229],[-0.363308,51.842105],[-0.339486,51.849606],[-0.354834,51.874015],[-0.369755,51.868115],[-0.39586,51.870581],[-0.422775,51.854552],[-0.455275,51.882287],[-0.505923,51.900612],[-0.482276,51.907795],[-0.485701,51.922701],[-0.436107,51.927666],[-0.421682,51.925681],[-0.419065,51.912304],[-0.385616,51.91568],[-0.405607,51.932454],[-0.391303,51.977021],[-0.37963,51.977958],[-0.382989,51.951818],[-0.374105,51.947769],[-0.350225,51.957578],[-0.349264,51.97117],[-0.367158,51.983761],[-0.311555,51.98211],[-0.296089,52.002192],[-0.282416,52.001564],[-0.270626,51.979622],[-0.247983,51.98508],[-0.244079,51.999023],[-0.201256,52.009825],[-0.219493,52.036741],[-0.194983,52.062415],[-0.172619,52.06021],[-0.157281,52.080547],[-0.144445,52.138204],[-0.154352,52.144408],[-0.171535,52.139503],[-0.234804,52.144727],[-0.216624,52.158736],[-0.260694,52.176401],[-0.249785,52.184371]]]}',
      metadata: ["Central Bedfordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-1.779088,55.685678],[-1.7898,55.687602],[-1.814861,55.689236],[-1.85105,55.688471],[-1.854787,55.680436],[-1.815478,55.682157],[-1.802855,55.668349],[-1.778656,55.667595],[-1.779088,55.685678]]],[[[-1.461824,55.07435],[-1.46458,55.077604],[-1.472501,55.084237],[-1.478443,55.07874],[-1.485887,55.095441],[-1.491453,55.100096],[-1.492504,55.110271],[-1.493879,55.113353],[-1.498842,55.124469],[-1.505855,55.129778],[-1.527659,55.137182],[-1.568807,55.130889],[-1.533943,55.137596],[-1.559033,55.146668],[-1.533252,55.139063],[-1.52002,55.138826],[-1.521939,55.143576],[-1.500383,55.127918],[-1.493755,55.12238],[-1.493976,55.124516],[-1.510008,55.142197],[-1.519399,55.149285],[-1.519844,55.153035],[-1.526141,55.159971],[-1.540269,55.161611],[-1.525157,55.162639],[-1.511815,55.183571],[-1.511307,55.183652],[-1.499172,55.185685],[-1.514758,55.204905],[-1.522173,55.209844],[-1.52228,55.214173],[-1.563641,55.26505],[-1.564129,55.265494],[-1.564159,55.265687],[-1.569022,55.271658],[-1.570355,55.290534],[-1.568473,55.293355],[-1.549321,55.322043],[-1.564382,55.333835],[-1.572874,55.338576],[-1.586601,55.33602],[-1.591679,55.348629],[-1.601404,55.36858],[-1.602205,55.369733],[-1.602223,55.370258],[-1.608925,55.383992],[-1.611658,55.385008],[-1.58028,55.406781],[-1.578285,55.416798],[-1.57832,55.416831],[-1.578267,55.416889],[-1.575561,55.43046],[-1.590503,55.437725],[-1.590507,55.438903],[-1.593365,55.440349],[-1.591992,55.473146],[-1.591184,55.492411],[-1.612874,55.49678],[-1.612594,55.499934],[-1.613523,55.500252],[-1.612454,55.501518],[-1.61145,55.512839],[-1.616184,55.512929],[-1.611014,55.517748],[-1.610656,55.521778],[-1.642043,55.537558],[-1.631478,55.54423],[-1.631464,55.548345],[-1.618943,55.552142],[-1.618784,55.552242],[-1.639307,55.569039],[-1.642123,55.571143],[-1.642049,55.571281],[-1.645551,55.574145],[-1.652154,55.571352],[-1.639599,55.578405],[-1.650381,55.583398],[-1.662023,55.58692],[-1.667069,55.591121],[-1.684188,55.599038],[-1.722617,55.616792],[-1.74544,55.61896],[-1.770377,55.603408],[-1.785829,55.61709],[-1.755789,55.618316],[-1.754518,55.623397],[-1.790845,55.647344],[-1.789149,55.653348],[-1.7882,55.656711],[-1.79502,55.659177],[-1.79179,55.653353],[-1.790196,55.650478],[-1.808361,55.634397],[-1.841477,55.643021],[-1.855095,55.653444],[-1.87163,55.666091],[-1.873211,55.682778],[-1.885574,55.684784],[-1.874159,55.683932],[-1.870607,55.6986],[-1.90267,55.708722],[-1.907548,55.709862],[-1.910143,55.71108],[-1.938096,55.719891],[-1.957437,55.733236],[-1.957847,55.733428],[-1.958691,55.734101],[-2.001578,55.763648],[-2.004242,55.765481],[-2.001578,55.765386],[-1.988,55.764902],[-1.988639,55.768943],[-2.001578,55.780881],[-2.034358,55.811085],[-2.034496,55.811209],[-2.086123,55.793045],[-2.085639,55.76204],[-2.107642,55.759888],[-2.117637,55.738775],[-2.144019,55.739349],[-2.150576,55.723154],[-2.17652,55.718838],[-2.167231,55.706035],[-2.218659,55.675907],[-2.218453,55.66426],[-2.248346,55.65215],[-2.234369,55.641042],[-2.30579,55.647044],[-2.336005,55.632481],[-2.324311,55.626166],[-2.308626,55.628876],[-2.316094,55.620458],[-2.289232,55.603774],[-2.288811,55.580307],[-2.240307,55.555627],[-2.228846,55.509519],[-2.202649,55.489541],[-2.201336,55.475268],[-2.165521,55.468382],[-2.188078,55.462115],[-2.194858,55.44459],[-2.231282,55.428429],[-2.260611,55.432934],[-2.313254,55.406789],[-2.335629,55.408208],[-2.344947,55.399313],[-2.330021,55.381242],[-2.346233,55.373061],[-2.33753,55.367191],[-2.378912,55.349169],[-2.399505,55.348221],[-2.414997,55.358922],[-2.475393,55.35474],[-2.52027,55.323047],[-2.559008,55.317853],[-2.573363,55.296884],[-2.609238,55.283248],[-2.626656,55.262221],[-2.646771,55.260044],[-2.611451,55.247134],[-2.630229,55.244791],[-2.631414,55.223698],[-2.666815,55.22158],[-2.68979,55.188984],[-2.674555,55.175891],[-2.677324,55.155488],[-2.656939,55.136132],[-2.598903,55.124576],[-2.593539,55.105096],[-2.568426,55.096261],[-2.562136,55.083462],[-2.502574,55.090759],[-2.486086,55.082444],[-2.503985,55.06243],[-2.48305,55.040019],[-2.572852,55.016398],[-2.573311,54.987638],[-2.601429,54.97134],[-2.595569,54.963481],[-2.568492,54.958362],[-2.567649,54.940856],[-2.545273,54.929172],[-2.566221,54.919238],[-2.576414,54.896717],[-2.60543,54.884382],[-2.573352,54.853546],[-2.582671,54.845867],[-2.558307,54.816725],[-2.523882,54.806032],[-2.495409,54.810307],[-2.460596,54.834171],[-2.423114,54.842636],[-2.411624,54.856431],[-2.389985,54.832155],[-2.348429,54.807079],[-2.327385,54.805332],[-2.31209,54.791015],[-2.282678,54.798252],[-2.218907,54.782377],[-2.198601,54.806736],[-2.16947,54.80361],[-2.139789,54.841871],[-2.082476,54.838222],[-2.039757,54.848292],[-2.000967,54.869668],[-1.980236,54.868183],[-1.949057,54.852967],[-1.932681,54.854187],[-1.913765,54.833997],[-1.914043,54.839529],[-1.870104,54.850866],[-1.854437,54.891185],[-1.821013,54.905662],[-1.852721,54.917414],[-1.841149,54.929725],[-1.826952,54.930226],[-1.83369,54.953313],[-1.812813,54.976322],[-1.78835,54.984256],[-1.769757,54.980984],[-1.773842,55.004139],[-1.756563,55.003263],[-1.750245,55.024021],[-1.694884,55.042927],[-1.71376,55.065479],[-1.647681,55.079389],[-1.637894,55.064769],[-1.57854,55.063081],[-1.57508,55.05562],[-1.557041,55.054178],[-1.539868,55.061591],[-1.53234,55.054149],[-1.510284,55.055009],[-1.508632,55.04802],[-1.487814,55.053592],[-1.492329,55.066058],[-1.461824,55.07435]]]]}',
      metadata: ["Northumberland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.803905,50.795965],[-1.83385,50.800042],[-1.845232,50.809606],[-1.864599,50.80662],[-1.873383,50.76338],[-1.893755,50.780075],[-1.914734,50.77335],[-1.919506,50.784002],[-1.932832,50.780009],[-1.939158,50.798707],[-1.957946,50.789306],[-2.005875,50.790926],[-1.999133,50.788128],[-2.009321,50.782589],[-2.013529,50.737054],[-2.040307,50.71895],[-2.001358,50.71034],[-1.988462,50.707485],[-2.001358,50.720806],[-2.011503,50.731279],[-2.001359,50.734071],[-1.989815,50.737247],[-1.99501,50.729859],[-1.984297,50.719302],[-1.992131,50.712689],[-1.958192,50.715606],[-1.952272,50.704133],[-1.933997,50.699147],[-1.946866,50.682649],[-1.912765,50.704423],[-1.891302,50.710362],[-1.88527,50.713409],[-1.877141,50.714277],[-1.866868,50.717116],[-1.837538,50.718498],[-1.81819,50.720554],[-1.81193,50.719698],[-1.804173,50.72006],[-1.748809,50.711077],[-1.748534,50.71137],[-1.739481,50.724435],[-1.746122,50.715506],[-1.761271,50.718013],[-1.761807,50.723096],[-1.757319,50.731055],[-1.742339,50.723525],[-1.730758,50.730326],[-1.72899,50.732211],[-1.727146,50.732447],[-1.724455,50.734027],[-1.717955,50.734714],[-1.692535,50.737398],[-1.691855,50.737329],[-1.681819,50.75185],[-1.744169,50.747455],[-1.73896,50.763271],[-1.748846,50.779494],[-1.785496,50.764752],[-1.803905,50.795965]]]}',
      metadata: ["Bournemouth, Christchurch and Poole"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-1.95624,50.691963],[-1.96526,50.694823],[-1.988038,50.69245],[-1.961585,50.686282],[-1.95624,50.691963]]],[[[-2.325853,51.079676],[-2.349978,51.068801],[-2.330014,51.041345],[-2.381348,51.004922],[-2.376921,50.990765],[-2.354897,50.990881],[-2.344557,50.978829],[-2.414928,50.960583],[-2.427991,50.971387],[-2.447178,50.96785],[-2.442867,50.95966],[-2.456204,50.949344],[-2.490345,50.972772],[-2.502347,50.993836],[-2.526416,50.991908],[-2.547435,50.999542],[-2.545423,50.985081],[-2.556207,50.979535],[-2.57463,50.986694],[-2.586023,50.976869],[-2.595845,50.98134],[-2.603387,50.976344],[-2.5982,50.948574],[-2.616094,50.940581],[-2.60404,50.926725],[-2.624065,50.907867],[-2.609572,50.891554],[-2.616101,50.881634],[-2.660611,50.887105],[-2.71439,50.871144],[-2.714556,50.863894],[-2.757499,50.866903],[-2.792294,50.852818],[-2.811425,50.86341],[-2.828957,50.84866],[-2.886244,50.85059],[-2.930159,50.840928],[-2.954321,50.821173],[-2.961303,50.815555],[-2.892804,50.804777],[-2.886644,50.794807],[-2.954334,50.76771],[-2.935063,50.754266],[-2.953067,50.728497],[-2.947433,50.718361],[-2.911754,50.733784],[-2.908525,50.733361],[-2.905504,50.73296],[-2.85142,50.725814],[-2.793352,50.718111],[-2.637417,50.663999],[-2.566901,50.629561],[-2.544136,50.618424],[-2.531126,50.612054],[-2.4503,50.56122],[-2.456731,50.513087],[-2.455609,50.513952],[-2.418626,50.546275],[-2.419995,50.555134],[-2.428377,50.566059],[-2.42218,50.569263],[-2.437696,50.569972],[-2.460504,50.57101],[-2.460542,50.571059],[-2.460596,50.571061],[-2.461405,50.572148],[-2.469533,50.58241],[-2.497274,50.596439],[-2.540836,50.618439],[-2.566926,50.631597],[-2.611527,50.654062],[-2.56704,50.641073],[-2.560437,50.639143],[-2.535146,50.618517],[-2.533907,50.618471],[-2.517486,50.617865],[-2.495667,50.602888],[-2.497058,50.597307],[-2.470399,50.583148],[-2.469915,50.58358],[-2.470204,50.583967],[-2.450313,50.601073],[-2.432379,50.596237],[-2.449047,50.60145],[-2.447992,50.60257],[-2.450981,50.603782],[-2.441441,50.609682],[-2.444748,50.609257],[-2.459671,50.607798],[-2.444919,50.609364],[-2.452522,50.614095],[-2.447909,50.618834],[-2.43943,50.627544],[-2.427334,50.633715],[-2.425564,50.635134],[-2.424618,50.635099],[-2.422781,50.636036],[-2.394853,50.63667],[-2.367285,50.632958],[-2.338942,50.631889],[-2.330744,50.628026],[-2.284081,50.62171],[-2.266974,50.619389],[-2.250344,50.617131],[-2.24389,50.616471],[-2.222911,50.619482],[-2.198503,50.62298],[-2.197988,50.622605],[-2.197516,50.622678],[-2.172571,50.615198],[-2.157983,50.615464],[-2.146042,50.608478],[-2.134546,50.612649],[-2.133826,50.61216],[-2.133457,50.612281],[-2.110708,50.598648],[-2.065886,50.593737],[-2.064358,50.593649],[-2.064311,50.593564],[-2.06396,50.593525],[-2.056991,50.580353],[-2.054872,50.576528],[-2.026346,50.589002],[-1.951229,50.594564],[-1.943937,50.607517],[-1.947742,50.607848],[-1.955566,50.608296],[-1.955597,50.60853],[-1.955974,50.608563],[-1.956423,50.614728],[-1.956726,50.617002],[-1.956596,50.6171],[-1.956614,50.617342],[-1.953505,50.619686],[-1.923765,50.642096],[-1.926433,50.64251],[-1.940611,50.640928],[-1.946353,50.645603],[-1.949812,50.646139],[-1.949212,50.64793],[-1.951843,50.650071],[-1.943162,50.665979],[-1.94112,50.672069],[-1.949811,50.680188],[-1.97096,50.66926],[-1.968098,50.660431],[-1.983519,50.667047],[-1.978317,50.676945],[-1.993285,50.667259],[-1.999797,50.675748],[-2.001356,50.675047],[-2.010486,50.670938],[-2.011419,50.68271],[-2.021643,50.682102],[-2.02706,50.668062],[-2.028983,50.674389],[-2.04713,50.670429],[-2.026627,50.678089],[-2.025154,50.684466],[-2.052974,50.677886],[-2.024721,50.687623],[-2.034766,50.702096],[-2.018487,50.700742],[-2.026087,50.70743],[-2.054455,50.699854],[-2.065807,50.68699],[-2.078913,50.689522],[-2.078974,50.690201],[-2.079342,50.694285],[-2.079506,50.694678],[-2.071089,50.698124],[-2.073733,50.705961],[-2.057676,50.705594],[-2.071901,50.707915],[-2.067514,50.715072],[-2.042731,50.714524],[-2.042501,50.71746],[-2.041814,50.725938],[-2.053812,50.728997],[-2.027514,50.729244],[-2.040746,50.719047],[-2.040307,50.71895],[-2.013529,50.737054],[-2.009321,50.782589],[-1.999133,50.788128],[-2.005875,50.790926],[-1.957946,50.789306],[-1.939158,50.798707],[-1.932832,50.780009],[-1.919506,50.784002],[-1.914734,50.77335],[-1.893755,50.780075],[-1.873383,50.76338],[-1.864599,50.80662],[-1.845232,50.809606],[-1.83385,50.800042],[-1.803905,50.795965],[-1.811893,50.808642],[-1.803401,50.830339],[-1.790615,50.836314],[-1.802473,50.842963],[-1.80711,50.863315],[-1.830009,50.855274],[-1.853539,50.86346],[-1.848556,50.889887],[-1.816542,50.903948],[-1.810658,50.927203],[-1.84184,50.93168],[-1.873644,50.917226],[-1.920841,50.961407],[-1.955466,50.978266],[-1.956821,50.98983],[-1.98521,50.984756],[-1.994036,50.975728],[-2.036559,50.972177],[-2.068313,50.951194],[-2.101792,50.944986],[-2.120671,50.961539],[-2.119764,50.978191],[-2.172566,51.001073],[-2.193209,51.037712],[-2.242274,51.071178],[-2.26862,51.068741],[-2.325853,51.079676]]]]}',
      metadata: ["Dorset"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.871326,52.040252],[-0.877469,52.029972],[-0.890118,52.031561],[-0.90603,52.021221],[-0.951873,52.081534],[-0.967805,52.070911],[-1.026318,52.075682],[-1.042327,52.07371],[-1.027668,52.063734],[-1.062065,52.062735],[-1.121987,52.045147],[-1.136665,52.022243],[-1.118086,52.015426],[-1.053121,52.002453],[-1.095167,51.957432],[-1.078951,51.943366],[-1.054616,51.947959],[-1.086673,51.922646],[-1.079356,51.917222],[-1.093519,51.893937],[-1.068975,51.887263],[-1.077605,51.876731],[-1.064642,51.868697],[-1.061978,51.844127],[-1.047123,51.839814],[-1.078449,51.829255],[-1.121599,51.845342],[-1.140676,51.83469],[-1.110097,51.817305],[-1.12489,51.807511],[-1.123541,51.794181],[-1.106361,51.781631],[-1.083239,51.780518],[-1.080852,51.756554],[-1.045471,51.744599],[-1.030435,51.744929],[-1.029783,51.757889],[-0.986131,51.75212],[-0.979796,51.760705],[-0.953674,51.757855],[-0.924074,51.747707],[-0.888377,51.719227],[-0.894773,51.692522],[-0.879896,51.680865],[-0.897896,51.676401],[-0.877707,51.668385],[-0.917729,51.6724],[-0.932213,51.664868],[-0.927251,51.651444],[-0.950726,51.650741],[-0.934586,51.636699],[-0.95003,51.628907],[-0.938566,51.617943],[-0.943075,51.604887],[-0.916868,51.599313],[-0.94153,51.585461],[-0.938602,51.571042],[-0.901701,51.556086],[-0.896882,51.544863],[-0.879723,51.562128],[-0.842744,51.544759],[-0.792964,51.551359],[-0.773709,51.567173],[-0.757217,51.564845],[-0.718102,51.57755],[-0.711675,51.564667],[-0.696474,51.565204],[-0.691203,51.556819],[-0.703165,51.511107],[-0.652125,51.485494],[-0.633882,51.492382],[-0.642212,51.500627],[-0.659271,51.504902],[-0.659945,51.528447],[-0.630536,51.538895],[-0.589868,51.522677],[-0.567256,51.532981],[-0.575095,51.5293],[-0.568709,51.511269],[-0.526981,51.509506],[-0.53182,51.493394],[-0.490025,51.494748],[-0.483162,51.507128],[-0.495487,51.538545],[-0.476621,51.559189],[-0.500596,51.59969],[-0.520595,51.601844],[-0.539261,51.638039],[-0.536892,51.660624],[-0.522778,51.658398],[-0.520995,51.668045],[-0.505108,51.673077],[-0.524273,51.682113],[-0.548696,51.682671],[-0.544017,51.696817],[-0.56321,51.71188],[-0.550414,51.723043],[-0.553645,51.734018],[-0.574879,51.736969],[-0.58638,51.752116],[-0.612936,51.747427],[-0.669664,51.76616],[-0.690191,51.792339],[-0.685394,51.800186],[-0.709295,51.82054],[-0.723653,51.817773],[-0.745249,51.838376],[-0.720268,51.856147],[-0.696389,51.858137],[-0.686768,51.84924],[-0.695451,51.84111],[-0.667187,51.815804],[-0.63294,51.819946],[-0.581826,51.806905],[-0.560656,51.830083],[-0.553629,51.826713],[-0.543651,51.824518],[-0.537629,51.831411],[-0.583564,51.870324],[-0.620089,51.885486],[-0.65198,51.886791],[-0.672969,51.901753],[-0.692703,51.900151],[-0.702157,51.909119],[-0.652978,51.969229],[-0.713113,51.98981],[-0.713941,51.977871],[-0.740379,51.969863],[-0.761997,51.985558],[-0.80366,51.985523],[-0.819818,52.012286],[-0.871326,52.040252]]]}',
      metadata: ["Buckinghamshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.165415,52.234462],[0.155281,52.23723],[0.147525,52.229785],[0.12987,52.23565],[0.068639,52.216109],[0.104715,52.190656],[0.10343,52.157942],[0.141756,52.171005],[0.154927,52.164623],[0.162629,52.172481],[0.181329,52.169491],[0.182686,52.198111],[0.167344,52.204148],[0.175844,52.217241],[0.154851,52.226487],[0.165415,52.234462]]]}',
      metadata: ["Cambridge"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.429344,52.436427],[0.428529,52.454653],[0.380706,52.479539],[0.367062,52.501174],[0.309361,52.513622],[0.256476,52.507714],[0.246041,52.499891],[0.236319,52.507291],[0.123842,52.42097],[0.126471,52.437855],[0.106639,52.425337],[0.087367,52.429765],[0.055277,52.414435],[0.043647,52.418125],[0.056199,52.397835],[0.034421,52.38575],[0.051366,52.358179],[0.043868,52.352886],[0.081896,52.334955],[0.139897,52.320713],[0.162054,52.324311],[0.16823,52.317566],[0.197133,52.324303],[0.204734,52.316795],[0.248817,52.322854],[0.241685,52.291148],[0.211581,52.269918],[0.220618,52.263541],[0.21047,52.24946],[0.229498,52.236585],[0.225295,52.2317],[0.321939,52.17884],[0.394915,52.15797],[0.417276,52.159307],[0.435916,52.159495],[0.452191,52.173204],[0.47073,52.163259],[0.491333,52.165102],[0.514484,52.226779],[0.494931,52.239258],[0.480337,52.232682],[0.426965,52.253603],[0.414518,52.247861],[0.421335,52.239691],[0.371249,52.226556],[0.342684,52.242343],[0.360893,52.249422],[0.340003,52.267688],[0.358997,52.297543],[0.382723,52.293266],[0.424206,52.255872],[0.498803,52.273021],[0.504769,52.284716],[0.457618,52.316251],[0.431377,52.315825],[0.424222,52.329216],[0.442501,52.348832],[0.407617,52.361574],[0.374777,52.409729],[0.429344,52.436427]]]}',
      metadata: ["East Cambridgeshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.171626,52.738032],[0.132975,52.739304],[0.089012,52.72363],[0.063627,52.727392],[0.044149,52.714382],[0.048566,52.681402],[0.0215,52.664887],[-0.031271,52.661533],[-0.012752,52.594246],[-0.18698,52.568507],[-0.197873,52.550806],[-0.18785,52.541863],[-0.114436,52.48904],[-0.097652,52.501705],[-0.090424,52.496212],[-0.070883,52.505892],[-0.069675,52.516859],[-0.048165,52.510879],[-0.038855,52.473286],[0.008952,52.454579],[0.033819,52.429003],[0.019028,52.414199],[0.034421,52.38575],[0.056199,52.397835],[0.043647,52.418125],[0.055277,52.414435],[0.087367,52.429765],[0.106639,52.425337],[0.126471,52.437855],[0.123842,52.42097],[0.236319,52.507291],[0.206123,52.519635],[0.230591,52.52791],[0.205847,52.533851],[0.213145,52.538172],[0.203872,52.545405],[0.214626,52.549107],[0.20514,52.547901],[0.204708,52.554656],[0.217238,52.560594],[0.205632,52.565569],[0.218412,52.572599],[0.191597,52.598961],[0.2193,52.621812],[0.169925,52.650435],[0.183842,52.655662],[0.184717,52.677895],[0.153571,52.682223],[0.171626,52.738032]]]}',
      metadata: ["Fenland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.18785,52.541863],[-0.200398,52.545216],[-0.217664,52.537923],[-0.234837,52.543667],[-0.24478,52.522999],[-0.269295,52.520825],[-0.29329,52.506889],[-0.332736,52.546545],[-0.325458,52.552889],[-0.348478,52.56437],[-0.385451,52.56719],[-0.39684,52.582998],[-0.415381,52.578743],[-0.407291,52.564055],[-0.419594,52.558962],[-0.401283,52.538685],[-0.413603,52.52568],[-0.354345,52.506495],[-0.3594,52.489859],[-0.34159,52.466943],[-0.370217,52.43993],[-0.362408,52.433531],[-0.417073,52.411599],[-0.44151,52.384996],[-0.495946,52.379516],[-0.488519,52.374024],[-0.4987,52.360096],[-0.477682,52.34892],[-0.483264,52.340903],[-0.466657,52.338928],[-0.465366,52.322953],[-0.436089,52.314471],[-0.435761,52.296657],[-0.421767,52.284947],[-0.37501,52.280469],[-0.372175,52.2735],[-0.382341,52.271126],[-0.374376,52.232998],[-0.341011,52.230647],[-0.343469,52.241874],[-0.335249,52.242882],[-0.293209,52.240516],[-0.285614,52.237277],[-0.296284,52.210487],[-0.261845,52.209867],[-0.240723,52.190193],[-0.249785,52.184371],[-0.260694,52.176401],[-0.216624,52.158736],[-0.189534,52.169206],[-0.15619,52.167246],[-0.138032,52.184493],[-0.100398,52.182837],[-0.108127,52.206883],[-0.152807,52.211997],[-0.175885,52.197256],[-0.195609,52.20449],[-0.187017,52.228794],[-0.149041,52.22595],[-0.13222,52.243262],[-0.157122,52.254308],[-0.173685,52.255779],[-0.177496,52.250291],[-0.184123,52.260775],[-0.175477,52.280217],[-0.142655,52.283192],[-0.12115,52.257339],[-0.102271,52.277671],[-0.085388,52.272502],[-0.057728,52.291756],[-0.046464,52.314659],[-0.014609,52.312727],[0.00959,52.341718],[0.043868,52.352886],[0.051366,52.358179],[0.034421,52.38575],[0.019028,52.414199],[0.033819,52.429003],[0.008952,52.454579],[-0.038855,52.473286],[-0.048165,52.510879],[-0.069675,52.516859],[-0.070883,52.505892],[-0.090424,52.496212],[-0.097652,52.501705],[-0.114436,52.48904],[-0.18785,52.541863]]]}',
      metadata: ["Huntingdonshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.417276,52.159307],[0.394915,52.15797],[0.321939,52.17884],[0.225295,52.2317],[0.229498,52.236585],[0.21047,52.24946],[0.220618,52.263541],[0.211581,52.269918],[0.241685,52.291148],[0.248817,52.322854],[0.204734,52.316795],[0.197133,52.324303],[0.16823,52.317566],[0.162054,52.324311],[0.139897,52.320713],[0.081896,52.334955],[0.043868,52.352886],[0.00959,52.341718],[-0.014609,52.312727],[-0.046464,52.314659],[-0.057728,52.291756],[-0.085388,52.272502],[-0.102271,52.277671],[-0.12115,52.257339],[-0.142655,52.283192],[-0.175477,52.280217],[-0.184123,52.260775],[-0.177496,52.250291],[-0.173685,52.255779],[-0.157122,52.254308],[-0.13222,52.243262],[-0.149041,52.22595],[-0.187017,52.228794],[-0.195609,52.20449],[-0.175885,52.197256],[-0.152807,52.211997],[-0.108127,52.206883],[-0.100398,52.182837],[-0.138032,52.184493],[-0.15619,52.167246],[-0.189534,52.169206],[-0.216624,52.158736],[-0.234804,52.144727],[-0.171535,52.139503],[-0.154352,52.144408],[-0.144445,52.138204],[-0.157281,52.080547],[-0.147505,52.069403],[-0.155121,52.053061],[-0.13373,52.046233],[-0.126568,52.020922],[-0.01928,52.063536],[0.004083,52.049793],[0.040306,52.053327],[0.068127,52.005789],[0.092254,52.021654],[0.105736,52.060261],[0.119078,52.059963],[0.128135,52.047323],[0.151117,52.052852],[0.166396,52.048191],[0.16757,52.055],[0.189922,52.060201],[0.183194,52.073183],[0.203459,52.092674],[0.235208,52.089],[0.251573,52.076786],[0.276229,52.092638],[0.286012,52.090408],[0.324674,52.072783],[0.345959,52.049717],[0.389695,52.036467],[0.379613,52.049563],[0.404638,52.065502],[0.394997,52.095968],[0.381804,52.102701],[0.38959,52.117471],[0.418283,52.134356],[0.417276,52.159307]],[[0.165415,52.234462],[0.154851,52.226487],[0.175844,52.217241],[0.167344,52.204148],[0.182686,52.198111],[0.181329,52.169491],[0.162629,52.172481],[0.154927,52.164623],[0.141756,52.171005],[0.10343,52.157942],[0.104715,52.190656],[0.068639,52.216109],[0.12987,52.23565],[0.147525,52.229785],[0.155281,52.23723],[0.165415,52.234462]]]}',
      metadata: ["South Cambridgeshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.119027,54.926212],[-3.138065,54.929351],[-3.153396,54.931876],[-3.204397,54.95374],[-3.232087,54.953085],[-3.250439,54.945096],[-3.268845,54.937078],[-3.265281,54.943044],[-3.285142,54.941556],[-3.304204,54.92768],[-3.314284,54.920338],[-3.308508,54.911635],[-3.271729,54.899515],[-3.252448,54.911195],[-3.249539,54.900721],[-3.263812,54.889085],[-3.262459,54.895115],[-3.275046,54.887843],[-3.287257,54.891492],[-3.285626,54.878306],[-3.338041,54.900277],[-3.367462,54.891073],[-3.399858,54.867415],[-3.437763,54.801904],[-3.43686,54.758512],[-3.458204,54.746184],[-3.506873,54.718032],[-3.507288,54.71741],[-3.493933,54.712518],[-3.507673,54.716833],[-3.514474,54.706655],[-3.519205,54.692689],[-3.551975,54.666624],[-3.571479,54.651091],[-3.551272,54.648181],[-3.544335,54.647181],[-3.55127,54.648125],[-3.571712,54.650905],[-3.579924,54.652306],[-3.565879,54.612286],[-3.572548,54.600689],[-3.554226,54.596443],[-3.546333,54.607125],[-3.511135,54.604786],[-3.489479,54.597799],[-3.481127,54.58119],[-3.446219,54.58155],[-3.433989,54.597475],[-3.393405,54.586009],[-3.376146,54.573256],[-3.360085,54.537954],[-3.305784,54.530134],[-3.224716,54.502336],[-3.212156,54.493675],[-3.219321,54.482024],[-3.167139,54.454111],[-3.136444,54.470746],[-3.112573,54.461491],[-3.109479,54.474004],[-3.097753,54.471903],[-3.076214,54.489366],[-3.014835,54.499843],[-3.015314,54.525594],[-3.025761,54.530096],[-3.016777,54.56159],[-3.028793,54.566927],[-3.018282,54.574995],[-3.037065,54.580987],[-3.007491,54.595348],[-3.034341,54.602778],[-3.044707,54.614296],[-3.086949,54.612645],[-3.094294,54.64387],[-3.090099,54.660265],[-3.054604,54.679757],[-3.087191,54.686092],[-3.08192,54.695254],[-3.063799,54.700082],[-2.992275,54.696243],[-2.983748,54.72095],[-3.026151,54.747827],[-2.991404,54.761278],[-2.984438,54.776158],[-2.987938,54.793719],[-3.009321,54.791071],[-3.001762,54.800242],[-3.026771,54.801203],[-3.030734,54.826779],[-3.047457,54.833495],[-3.029018,54.839761],[-3.02271,54.852404],[-3.066208,54.85495],[-3.070543,54.86071],[-3.054924,54.865639],[-3.072367,54.876054],[-3.057174,54.886746],[-3.070879,54.889711],[-3.078355,54.90463],[-3.126362,54.905508],[-3.119027,54.926212]]]}',
      metadata: ["Allerdale"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.242936,54.098939],[-3.245605,54.109859],[-3.266874,54.141921],[-3.252287,54.15037],[-3.276382,54.142886],[-3.268554,54.107371],[-3.22374,54.061767],[-3.209913,54.047671],[-3.173161,54.047077],[-3.173027,54.055273],[-3.174101,54.048294],[-3.178588,54.055265],[-3.204892,54.051617],[-3.210266,54.065196],[-3.223997,54.070487],[-3.226816,54.071573],[-3.224149,54.075635],[-3.220955,54.080498],[-3.224337,54.082007],[-3.247193,54.092203],[-3.24316,54.09752],[-3.252463,54.095765],[-3.242936,54.098939]]],[[[-3.149141,54.093552],[-3.149618,54.093944],[-3.144776,54.099493],[-3.174868,54.114765],[-3.159634,54.134952],[-3.162907,54.158881],[-3.142597,54.16526],[-3.163767,54.192364],[-3.147627,54.218476],[-3.167646,54.203152],[-3.200522,54.208228],[-3.202676,54.210857],[-3.205945,54.209702],[-3.213078,54.207181],[-3.214845,54.185635],[-3.223075,54.187778],[-3.217156,54.17749],[-3.22708,54.174789],[-3.257569,54.166481],[-3.249423,54.154726],[-3.236964,54.154684],[-3.242101,54.109329],[-3.224683,54.093763],[-3.220178,54.089734],[-3.214785,54.098054],[-3.191703,54.103063],[-3.173689,54.083323],[-3.178034,54.074917],[-3.171427,54.079634],[-3.150744,54.06481],[-3.172452,54.081761],[-3.149141,54.093552]]]]}',
      metadata: ["Barrow-in-Furness"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.582671,54.845867],[-2.573352,54.853546],[-2.60543,54.884382],[-2.576414,54.896717],[-2.566221,54.919238],[-2.545273,54.929172],[-2.567649,54.940856],[-2.568492,54.958362],[-2.595569,54.963481],[-2.601429,54.97134],[-2.573311,54.987638],[-2.572852,55.016398],[-2.48305,55.040019],[-2.503985,55.06243],[-2.486086,55.082444],[-2.502574,55.090759],[-2.562136,55.083462],[-2.568426,55.096261],[-2.593539,55.105096],[-2.598903,55.124576],[-2.656939,55.136132],[-2.677324,55.155488],[-2.674555,55.175891],[-2.68979,55.188984],[-2.703405,55.173211],[-2.784875,55.141775],[-2.825503,55.138314],[-2.827608,55.124837],[-2.85854,55.108349],[-2.886292,55.09481],[-2.896879,55.07795],[-2.940429,55.069128],[-2.936407,55.059586],[-2.958594,55.049295],[-3.050929,55.052804],[-3.05342,55.047284],[-3.025875,55.036459],[-3.053065,54.992096],[-3.048315,54.983397],[-3.049699,54.983526],[-3.060342,54.984518],[-3.06335,54.983491],[-3.085418,54.965167],[-3.111608,54.957628],[-3.105599,54.950668],[-3.117272,54.955911],[-3.103815,54.948602],[-3.095705,54.946222],[-3.127072,54.950916],[-3.114194,54.947196],[-3.121948,54.944539],[-3.113893,54.940706],[-3.125198,54.944048],[-3.118937,54.934574],[-3.084087,54.929844],[-3.118933,54.925384],[-3.11893,54.925549],[-3.118675,54.925759],[-3.118795,54.926173],[-3.119027,54.926212],[-3.126362,54.905508],[-3.078355,54.90463],[-3.070879,54.889711],[-3.057174,54.886746],[-3.072367,54.876054],[-3.054924,54.865639],[-3.070543,54.86071],[-3.066208,54.85495],[-3.02271,54.852404],[-3.029018,54.839761],[-3.047457,54.833495],[-3.030734,54.826779],[-3.026771,54.801203],[-3.001762,54.800242],[-3.009321,54.791071],[-2.987938,54.793719],[-2.984438,54.776158],[-2.944784,54.784044],[-2.921082,54.809207],[-2.904414,54.813019],[-2.907409,54.821958],[-2.881471,54.823498],[-2.86306,54.837254],[-2.799378,54.818718],[-2.756428,54.822858],[-2.749577,54.829127],[-2.705663,54.816363],[-2.689716,54.819356],[-2.701224,54.833605],[-2.680137,54.835317],[-2.65533,54.854769],[-2.603769,54.853344],[-2.582671,54.845867]]]}',
      metadata: ["Carlisle"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.167139,54.454111],[-3.219321,54.482024],[-3.212156,54.493675],[-3.224716,54.502336],[-3.305784,54.530134],[-3.360085,54.537954],[-3.376146,54.573256],[-3.393405,54.586009],[-3.433989,54.597475],[-3.446219,54.58155],[-3.481127,54.58119],[-3.489479,54.597799],[-3.511135,54.604786],[-3.546333,54.607125],[-3.554226,54.596443],[-3.572548,54.600689],[-3.586275,54.56482],[-3.59111,54.552173],[-3.6068,54.533129],[-3.607777,54.530997],[-3.609309,54.530082],[-3.613279,54.525261],[-3.638936,54.512026],[-3.543429,54.441023],[-3.502997,54.410865],[-3.478441,54.38643],[-3.435296,54.343411],[-3.417303,54.348975],[-3.410128,54.350387],[-3.423638,54.338358],[-3.421155,54.284658],[-3.393726,54.254013],[-3.342016,54.208264],[-3.321706,54.190261],[-3.297987,54.188652],[-3.28769,54.19707],[-3.254234,54.191543],[-3.239286,54.203262],[-3.245155,54.209303],[-3.251498,54.215831],[-3.254123,54.210301],[-3.265871,54.213398],[-3.228945,54.237632],[-3.225712,54.239753],[-3.22818,54.249384],[-3.229289,54.249172],[-3.24367,54.246425],[-3.229312,54.24996],[-3.222948,54.251526],[-3.229518,54.256852],[-3.233693,54.260236],[-3.230481,54.269826],[-3.230922,54.31468],[-3.24187,54.323527],[-3.207085,54.352958],[-3.194599,54.354351],[-3.170758,54.39973],[-3.115261,54.415021],[-3.123996,54.427507],[-3.135978,54.421883],[-3.157018,54.430281],[-3.167139,54.454111]]]}',
      metadata: ["Copeland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.31209,54.791015],[-2.327385,54.805332],[-2.348429,54.807079],[-2.389985,54.832155],[-2.411624,54.856431],[-2.423114,54.842636],[-2.460596,54.834171],[-2.495409,54.810307],[-2.523882,54.806032],[-2.558307,54.816725],[-2.582671,54.845867],[-2.603769,54.853344],[-2.65533,54.854769],[-2.680137,54.835317],[-2.701224,54.833605],[-2.689716,54.819356],[-2.705663,54.816363],[-2.749577,54.829127],[-2.756428,54.822858],[-2.799378,54.818718],[-2.86306,54.837254],[-2.881471,54.823498],[-2.907409,54.821958],[-2.904414,54.813019],[-2.921082,54.809207],[-2.944784,54.784044],[-2.984438,54.776158],[-2.991404,54.761278],[-3.026151,54.747827],[-2.983748,54.72095],[-2.992275,54.696243],[-3.063799,54.700082],[-3.08192,54.695254],[-3.087191,54.686092],[-3.054604,54.679757],[-3.090099,54.660265],[-3.094294,54.64387],[-3.086949,54.612645],[-3.044707,54.614296],[-3.034341,54.602778],[-3.007491,54.595348],[-3.037065,54.580987],[-3.018282,54.574995],[-3.028793,54.566927],[-3.016777,54.56159],[-3.025761,54.530096],[-3.015314,54.525594],[-3.014835,54.499843],[-3.013753,54.494711],[-2.980477,54.495954],[-2.96636,54.482232],[-2.955347,54.484532],[-2.919819,54.464779],[-2.906278,54.481348],[-2.875618,54.481101],[-2.865343,54.490143],[-2.838496,54.476154],[-2.815925,54.474612],[-2.806877,54.48206],[-2.789177,54.464982],[-2.703934,54.432207],[-2.689216,54.445755],[-2.686804,54.426665],[-2.640277,54.404346],[-2.603976,54.406929],[-2.58347,54.38765],[-2.575254,54.391985],[-2.552433,54.386962],[-2.538224,54.394225],[-2.513691,54.367934],[-2.483653,54.377352],[-2.462729,54.368384],[-2.443772,54.376028],[-2.420874,54.365845],[-2.382318,54.371315],[-2.367712,54.356071],[-2.344648,54.359629],[-2.317043,54.376311],[-2.29744,54.376899],[-2.291784,54.390905],[-2.305507,54.39712],[-2.308146,54.419794],[-2.292865,54.439307],[-2.249539,54.451943],[-2.189316,54.448978],[-2.177508,54.461626],[-2.170213,54.458199],[-2.158997,54.47203],[-2.172398,54.532444],[-2.197531,54.532704],[-2.209488,54.551713],[-2.304515,54.596198],[-2.324938,54.63165],[-2.287979,54.65048],[-2.292875,54.663885],[-2.327288,54.670728],[-2.351769,54.685931],[-2.355743,54.697652],[-2.325747,54.726629],[-2.31209,54.791015]]]}',
      metadata: ["Eden"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.367712,54.356071],[-2.382318,54.371315],[-2.420874,54.365845],[-2.443772,54.376028],[-2.462729,54.368384],[-2.483653,54.377352],[-2.513691,54.367934],[-2.538224,54.394225],[-2.552433,54.386962],[-2.575254,54.391985],[-2.58347,54.38765],[-2.603976,54.406929],[-2.640277,54.404346],[-2.686804,54.426665],[-2.689216,54.445755],[-2.703934,54.432207],[-2.789177,54.464982],[-2.806877,54.48206],[-2.815925,54.474612],[-2.838496,54.476154],[-2.865343,54.490143],[-2.875618,54.481101],[-2.906278,54.481348],[-2.919819,54.464779],[-2.955347,54.484532],[-2.96636,54.482232],[-2.980477,54.495954],[-3.013753,54.494711],[-3.014835,54.499843],[-3.076214,54.489366],[-3.097753,54.471903],[-3.109479,54.474004],[-3.112573,54.461491],[-3.136444,54.470746],[-3.167139,54.454111],[-3.157018,54.430281],[-3.135978,54.421883],[-3.123996,54.427507],[-3.115261,54.415021],[-3.170758,54.39973],[-3.194599,54.354351],[-3.207085,54.352958],[-3.24187,54.323527],[-3.230922,54.31468],[-3.230481,54.269826],[-3.229951,54.271409],[-3.227836,54.27772],[-3.229118,54.259972],[-3.210309,54.254046],[-3.197735,54.228903],[-3.179699,54.238818],[-3.203282,54.212335],[-3.203222,54.212195],[-3.202714,54.211719],[-3.202439,54.211535],[-3.20235,54.211406],[-3.202028,54.211086],[-3.202676,54.210857],[-3.200522,54.208228],[-3.167646,54.203152],[-3.147627,54.218476],[-3.163767,54.192364],[-3.142597,54.16526],[-3.162907,54.158881],[-3.159634,54.134952],[-3.174868,54.114765],[-3.144776,54.099493],[-3.149618,54.093944],[-3.149141,54.093552],[-3.149102,54.093571],[-3.105743,54.119038],[-3.060854,54.162043],[-3.063519,54.186163],[-3.034359,54.211299],[-3.032788,54.212652],[-3.032948,54.211311],[-3.034745,54.196295],[-3.022954,54.19156],[-3.038661,54.197251],[-3.010282,54.176908],[-3.005031,54.180278],[-3.006489,54.172249],[-2.989419,54.179455],[-2.999865,54.154764],[-2.92536,54.150292],[-2.920228,54.154669],[-2.908327,54.164815],[-2.920457,54.165012],[-2.922274,54.165042],[-2.920477,54.165912],[-2.899419,54.176109],[-2.910704,54.17954],[-2.89609,54.18118],[-2.902041,54.189385],[-2.88724,54.19907],[-2.84251,54.205591],[-2.864136,54.191997],[-2.863536,54.18255],[-2.837914,54.174226],[-2.837217,54.174172],[-2.798982,54.197741],[-2.768232,54.185964],[-2.734387,54.184111],[-2.736489,54.169027],[-2.679876,54.161135],[-2.639964,54.202045],[-2.624957,54.195569],[-2.576078,54.195595],[-2.459585,54.239568],[-2.460863,54.226716],[-2.405632,54.224915],[-2.39678,54.239381],[-2.373021,54.240099],[-2.362317,54.249753],[-2.337657,54.237599],[-2.319096,54.257156],[-2.324522,54.303184],[-2.309841,54.324315],[-2.367712,54.356071]]]}',
      metadata: ["South Lakeland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.37365,53.107856],[-1.448252,53.103674],[-1.495366,53.133965],[-1.523511,53.12043],[-1.531104,53.100481],[-1.512059,53.093365],[-1.519345,53.08624],[-1.533603,53.086944],[-1.553273,53.069018],[-1.591439,53.054734],[-1.580972,53.042297],[-1.598567,53.03047],[-1.584878,53.020387],[-1.566326,53.022469],[-1.576111,53.017685],[-1.566746,53.013697],[-1.578755,53.014687],[-1.576798,53.002063],[-1.599266,52.998424],[-1.602144,52.98544],[-1.571437,52.973995],[-1.571043,52.966567],[-1.599394,52.962588],[-1.607137,52.947172],[-1.604054,52.936813],[-1.570102,52.935795],[-1.544068,52.924208],[-1.508029,52.937452],[-1.495405,52.965879],[-1.474631,52.965928],[-1.478735,52.982552],[-1.409302,52.977015],[-1.385414,52.982297],[-1.371031,52.973087],[-1.332792,52.978143],[-1.307444,53.003655],[-1.331986,53.031145],[-1.335868,53.052966],[-1.344428,53.065543],[-1.331635,53.080988],[-1.360742,53.090402],[-1.37365,53.107856]]]}',
      metadata: ["Amber Valley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.209424,53.217697],[-1.201997,53.235555],[-1.213027,53.247672],[-1.20245,53.26122],[-1.17469,53.265165],[-1.181542,53.270032],[-1.166488,53.277655],[-1.180117,53.287135],[-1.176627,53.305132],[-1.199743,53.31144],[-1.203239,53.304223],[-1.230688,53.30856],[-1.243868,53.30157],[-1.282011,53.309463],[-1.321895,53.309067],[-1.310674,53.297948],[-1.324141,53.295109],[-1.316702,53.281657],[-1.301302,53.263892],[-1.331263,53.257232],[-1.319202,53.239582],[-1.310594,53.216051],[-1.3185,53.185923],[-1.356783,53.185475],[-1.378265,53.173725],[-1.352842,53.158751],[-1.377826,53.136101],[-1.37365,53.107856],[-1.360742,53.090402],[-1.331635,53.080988],[-1.302883,53.088202],[-1.309251,53.09677],[-1.300619,53.102049],[-1.32178,53.13065],[-1.323447,53.162342],[-1.300712,53.164215],[-1.295962,53.171225],[-1.259925,53.164479],[-1.240446,53.178651],[-1.196936,53.184818],[-1.209424,53.217697]]]}',
      metadata: ["Bolsover"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.316702,53.281657],[-1.333634,53.289758],[-1.366892,53.289184],[-1.377053,53.299044],[-1.399278,53.281972],[-1.41544,53.287639],[-1.439036,53.28021],[-1.457069,53.283745],[-1.4642,53.267999],[-1.480601,53.263345],[-1.471134,53.259413],[-1.481711,53.246481],[-1.471363,53.236183],[-1.484168,53.230711],[-1.479526,53.222229],[-1.441205,53.220631],[-1.440001,53.213593],[-1.420843,53.212442],[-1.401008,53.213957],[-1.400798,53.234282],[-1.380341,53.243797],[-1.350862,53.246389],[-1.347064,53.23954],[-1.319202,53.239582],[-1.331263,53.257232],[-1.301302,53.263892],[-1.316702,53.281657]]]}',
      metadata: ["Chesterfield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.599093,53.311318],[-1.609202,53.322664],[-1.625494,53.316424],[-1.632727,53.320839],[-1.612303,53.343219],[-1.590548,53.345921],[-1.663549,53.366595],[-1.653818,53.391911],[-1.673312,53.369393],[-1.671213,53.349367],[-1.696867,53.334805],[-1.700449,53.323625],[-1.727588,53.319144],[-1.730206,53.33863],[-1.760663,53.338239],[-1.822626,53.302812],[-1.817516,53.282564],[-1.790287,53.256412],[-1.844378,53.250411],[-1.874266,53.226847],[-1.831253,53.210649],[-1.831605,53.197588],[-1.842424,53.194762],[-1.872708,53.215658],[-1.882646,53.203305],[-1.886945,53.217733],[-1.897598,53.210453],[-1.910756,53.221695],[-1.918557,53.217986],[-1.898633,53.199957],[-1.860732,53.188426],[-1.81254,53.154343],[-1.821876,53.136704],[-1.783726,53.102828],[-1.794239,53.088394],[-1.775653,53.059355],[-1.778981,53.044844],[-1.758931,53.037316],[-1.762405,52.999858],[-1.826781,52.977086],[-1.829799,52.945706],[-1.856576,52.923391],[-1.82821,52.884428],[-1.777221,52.883815],[-1.746003,52.868693],[-1.736561,52.89522],[-1.748955,52.912493],[-1.714467,52.909586],[-1.708228,52.922005],[-1.678204,52.921586],[-1.658911,52.902587],[-1.650235,52.944567],[-1.607137,52.947172],[-1.599394,52.962588],[-1.571043,52.966567],[-1.571437,52.973995],[-1.602144,52.98544],[-1.599266,52.998424],[-1.576798,53.002063],[-1.578755,53.014687],[-1.566746,53.013697],[-1.576111,53.017685],[-1.566326,53.022469],[-1.584878,53.020387],[-1.598567,53.03047],[-1.580972,53.042297],[-1.591439,53.054734],[-1.553273,53.069018],[-1.533603,53.086944],[-1.519345,53.08624],[-1.512059,53.093365],[-1.531104,53.100481],[-1.523511,53.12043],[-1.495366,53.133965],[-1.549967,53.185456],[-1.548295,53.199918],[-1.515603,53.202706],[-1.56902,53.223129],[-1.572056,53.241013],[-1.557176,53.249561],[-1.56578,53.261428],[-1.584937,53.262697],[-1.589392,53.278739],[-1.578665,53.28647],[-1.597442,53.295757],[-1.599093,53.311318]]]}',
      metadata: ["Derbyshire Dales"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.239706,52.892289],[-1.246215,52.902986],[-1.281801,52.910293],[-1.281031,52.949158],[-1.292501,52.955574],[-1.287749,52.969662],[-1.307444,53.003655],[-1.332792,52.978143],[-1.371031,52.973087],[-1.385414,52.982297],[-1.409302,52.977015],[-1.478735,52.982552],[-1.474631,52.965928],[-1.468552,52.950662],[-1.409281,52.950323],[-1.423964,52.935651],[-1.383074,52.925932],[-1.388263,52.901468],[-1.339298,52.889688],[-1.34991,52.88071],[-1.319307,52.872869],[-1.267889,52.873369],[-1.240055,52.880109],[-1.239706,52.892289]]]}',
      metadata: ["Erewash"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.822229,53.521091],[-1.841821,53.519909],[-1.873493,53.54043],[-1.894109,53.533612],[-1.909621,53.538391],[-1.926781,53.520949],[-1.921973,53.509955],[-1.951333,53.504199],[-1.963386,53.509827],[-1.98782,53.48111],[-1.985792,53.455227],[-2.008235,53.441549],[-2.004216,53.435922],[-2.014228,53.439763],[-2.026255,53.429865],[-2.013697,53.41589],[-1.992329,53.415193],[-2.004643,53.386327],[-2.033775,53.375542],[-2.031058,53.370262],[-2.006785,53.354572],[-2.009482,53.260652],[-1.974859,53.231061],[-1.990265,53.222999],[-1.987408,53.213586],[-1.962365,53.226242],[-1.956707,53.213748],[-1.898633,53.199957],[-1.918557,53.217986],[-1.910756,53.221695],[-1.897598,53.210453],[-1.886945,53.217733],[-1.882646,53.203305],[-1.872708,53.215658],[-1.842424,53.194762],[-1.831605,53.197588],[-1.831253,53.210649],[-1.874266,53.226847],[-1.844378,53.250411],[-1.790287,53.256412],[-1.817516,53.282564],[-1.822626,53.302812],[-1.760663,53.338239],[-1.730206,53.33863],[-1.727588,53.319144],[-1.700449,53.323625],[-1.696867,53.334805],[-1.671213,53.349367],[-1.673312,53.369393],[-1.653818,53.391911],[-1.704965,53.405056],[-1.708532,53.417339],[-1.739762,53.420988],[-1.745323,53.462175],[-1.768437,53.464767],[-1.801471,53.480992],[-1.796288,53.503153],[-1.822229,53.521091]]]}',
      metadata: ["High Peak"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.324669,53.32881],[-1.337751,53.315848],[-1.386739,53.317632],[-1.386572,53.334903],[-1.411034,53.341992],[-1.420866,53.334568],[-1.441972,53.337492],[-1.45988,53.330689],[-1.455224,53.321869],[-1.467913,53.31712],[-1.502132,53.317582],[-1.536769,53.304749],[-1.56173,53.306411],[-1.561731,53.315971],[-1.580534,53.311738],[-1.584902,53.321588],[-1.599093,53.311318],[-1.597442,53.295757],[-1.578665,53.28647],[-1.589392,53.278739],[-1.584937,53.262697],[-1.56578,53.261428],[-1.557176,53.249561],[-1.572056,53.241013],[-1.56902,53.223129],[-1.515603,53.202706],[-1.548295,53.199918],[-1.549967,53.185456],[-1.495366,53.133965],[-1.448252,53.103674],[-1.37365,53.107856],[-1.377826,53.136101],[-1.352842,53.158751],[-1.378265,53.173725],[-1.356783,53.185475],[-1.3185,53.185923],[-1.310594,53.216051],[-1.319202,53.239582],[-1.347064,53.23954],[-1.350862,53.246389],[-1.380341,53.243797],[-1.400798,53.234282],[-1.401008,53.213957],[-1.420843,53.212442],[-1.440001,53.213593],[-1.441205,53.220631],[-1.479526,53.222229],[-1.484168,53.230711],[-1.471363,53.236183],[-1.481711,53.246481],[-1.471134,53.259413],[-1.480601,53.263345],[-1.4642,53.267999],[-1.457069,53.283745],[-1.439036,53.28021],[-1.41544,53.287639],[-1.399278,53.281972],[-1.377053,53.299044],[-1.366892,53.289184],[-1.333634,53.289758],[-1.316702,53.281657],[-1.324141,53.295109],[-1.310674,53.297948],[-1.321895,53.309067],[-1.282011,53.309463],[-1.295678,53.315037],[-1.288589,53.326228],[-1.299023,53.332512],[-1.324669,53.32881]]]}',
      metadata: ["North East Derbyshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.544068,52.924208],[-1.570102,52.935795],[-1.604054,52.936813],[-1.607137,52.947172],[-1.650235,52.944567],[-1.658911,52.902587],[-1.678204,52.921586],[-1.708228,52.922005],[-1.714467,52.909586],[-1.748955,52.912493],[-1.736561,52.89522],[-1.746003,52.868693],[-1.725322,52.859663],[-1.704344,52.866681],[-1.700609,52.860584],[-1.690272,52.864469],[-1.626755,52.854437],[-1.585352,52.831715],[-1.610495,52.816404],[-1.591827,52.809491],[-1.58887,52.799866],[-1.614345,52.788274],[-1.61113,52.781404],[-1.666537,52.784723],[-1.704158,52.732079],[-1.656608,52.721748],[-1.655042,52.698799],[-1.597541,52.700422],[-1.550041,52.720317],[-1.54464,52.731694],[-1.562493,52.750587],[-1.552787,52.763333],[-1.50498,52.767609],[-1.493984,52.759047],[-1.468445,52.766877],[-1.455882,52.777095],[-1.462779,52.786863],[-1.442391,52.792983],[-1.443562,52.802744],[-1.417704,52.801616],[-1.387936,52.833098],[-1.394323,52.836773],[-1.361211,52.855186],[-1.351173,52.853289],[-1.344863,52.867533],[-1.325332,52.865982],[-1.319307,52.872869],[-1.34991,52.88071],[-1.339298,52.889688],[-1.388263,52.901468],[-1.402772,52.900462],[-1.418913,52.884546],[-1.423567,52.865078],[-1.446227,52.861309],[-1.464086,52.87256],[-1.494513,52.870079],[-1.503112,52.884845],[-1.541691,52.88954],[-1.556852,52.914679],[-1.544068,52.924208]]]}',
      metadata: ["South Derbyshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.457077,50.676547],[-3.457893,50.675771],[-3.456761,50.674965],[-3.457077,50.676547]]],[[[-3.052423,50.908264],[-3.126341,50.901718],[-3.144178,50.891395],[-3.176156,50.877084],[-3.207315,50.877057],[-3.217565,50.892847],[-3.233064,50.89502],[-3.282685,50.866302],[-3.281422,50.855734],[-3.328303,50.857029],[-3.348168,50.846736],[-3.343568,50.825834],[-3.357011,50.826903],[-3.355898,50.833905],[-3.367624,50.829534],[-3.359959,50.811877],[-3.410391,50.804669],[-3.429733,50.812082],[-3.443328,50.800414],[-3.460821,50.803375],[-3.483312,50.791984],[-3.480749,50.799367],[-3.502517,50.799045],[-3.496751,50.816955],[-3.507365,50.827397],[-3.504997,50.814391],[-3.526683,50.797535],[-3.524711,50.787003],[-3.572012,50.788534],[-3.563353,50.775005],[-3.547416,50.772983],[-3.556807,50.75795],[-3.570544,50.760237],[-3.585483,50.743874],[-3.569669,50.74501],[-3.552025,50.745131],[-3.512739,50.761455],[-3.465207,50.745022],[-3.471422,50.698814],[-3.459598,50.689165],[-3.460887,50.695619],[-3.452483,50.683357],[-3.451103,50.68223],[-3.451471,50.68188],[-3.415517,50.62934],[-3.42147,50.622858],[-3.424036,50.617299],[-3.414836,50.615721],[-3.389701,50.611403],[-3.361872,50.606616],[-3.357969,50.611777],[-3.352362,50.619188],[-3.348526,50.620067],[-3.347992,50.620625],[-3.340659,50.621868],[-3.306728,50.629629],[-3.308807,50.647594],[-3.300951,50.63212],[-3.28962,50.642249],[-3.257774,50.673237],[-3.192131,50.684517],[-3.133798,50.684957],[-3.096078,50.685226],[-3.095283,50.686117],[-3.08244,50.701615],[-3.054867,50.702524],[-3.053445,50.704106],[-3.029732,50.699026],[-3.026915,50.698882],[-2.947718,50.718238],[-2.947433,50.718361],[-2.953067,50.728497],[-2.935063,50.754266],[-2.954334,50.76771],[-2.886644,50.794807],[-2.892804,50.804777],[-2.961303,50.815555],[-2.954321,50.821173],[-2.969827,50.83418],[-2.973581,50.855712],[-3.036806,50.851065],[-3.032632,50.861639],[-3.054786,50.874618],[-3.052423,50.908264]]]]}',
      metadata: ["East Devon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.451471,50.68188],[-3.451103,50.68223],[-3.452483,50.683357],[-3.451471,50.68188]]],[[[-3.459598,50.689165],[-3.471422,50.698814],[-3.465207,50.745022],[-3.512739,50.761455],[-3.552025,50.745131],[-3.569669,50.74501],[-3.562821,50.706949],[-3.539092,50.692918],[-3.494506,50.692806],[-3.469475,50.678298],[-3.469735,50.681216],[-3.469828,50.682253],[-3.46829,50.683171],[-3.457893,50.675771],[-3.457077,50.676547],[-3.459598,50.689165]]]]}',
      metadata: ["Exeter"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.144178,50.891395],[-3.187871,50.910421],[-3.166479,50.947713],[-3.25483,50.941846],[-3.293847,50.955139],[-3.33367,50.982788],[-3.378664,50.977509],[-3.380488,51.018486],[-3.414174,51.019703],[-3.421304,51.030778],[-3.460194,51.025217],[-3.483366,51.033831],[-3.504268,51.030113],[-3.520428,51.025871],[-3.518881,51.014796],[-3.535049,51.003347],[-3.603208,51.007233],[-3.605118,50.990224],[-3.628816,51.005774],[-3.619703,50.968325],[-3.597847,50.96721],[-3.596115,50.943988],[-3.612634,50.926582],[-3.627487,50.919587],[-3.728058,50.910765],[-3.734684,50.89066],[-3.744806,50.890303],[-3.753583,50.876814],[-3.783321,50.902483],[-3.816911,50.901795],[-3.816797,50.914591],[-3.830016,50.906875],[-3.904158,50.905087],[-3.920247,50.897715],[-3.898574,50.877525],[-3.92593,50.869602],[-3.903544,50.847944],[-3.884303,50.848172],[-3.899665,50.834509],[-3.877751,50.818887],[-3.839085,50.818367],[-3.835901,50.792974],[-3.845573,50.781589],[-3.822041,50.781],[-3.805839,50.759014],[-3.836295,50.732172],[-3.818597,50.716964],[-3.766259,50.727565],[-3.735593,50.703184],[-3.72424,50.715597],[-3.737514,50.723531],[-3.723342,50.728154],[-3.708342,50.748725],[-3.680143,50.749928],[-3.671795,50.763974],[-3.619946,50.750985],[-3.608868,50.754217],[-3.585483,50.743874],[-3.570544,50.760237],[-3.556807,50.75795],[-3.547416,50.772983],[-3.563353,50.775005],[-3.572012,50.788534],[-3.524711,50.787003],[-3.526683,50.797535],[-3.504997,50.814391],[-3.507365,50.827397],[-3.496751,50.816955],[-3.502517,50.799045],[-3.480749,50.799367],[-3.483312,50.791984],[-3.460821,50.803375],[-3.443328,50.800414],[-3.429733,50.812082],[-3.410391,50.804669],[-3.359959,50.811877],[-3.367624,50.829534],[-3.355898,50.833905],[-3.357011,50.826903],[-3.343568,50.825834],[-3.348168,50.846736],[-3.328303,50.857029],[-3.281422,50.855734],[-3.282685,50.866302],[-3.233064,50.89502],[-3.217565,50.892847],[-3.207315,50.877057],[-3.176156,50.877084],[-3.144178,50.891395]]]}',
      metadata: ["Mid Devon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.720561,51.233058],[-3.720799,51.233083],[-3.769779,51.237662],[-3.786774,51.246159],[-3.81033,51.232228],[-3.811448,51.232311],[-3.813531,51.231117],[-3.853675,51.234564],[-3.854344,51.234398],[-3.892031,51.22377],[-3.923484,51.23138],[-3.925706,51.231874],[-3.951325,51.221834],[-3.95433,51.220557],[-3.95462,51.220542],[-3.958252,51.219118],[-4.005974,51.217262],[-4.027951,51.216401],[-4.029084,51.215758],[-4.038746,51.206673],[-4.087823,51.21732],[-4.091953,51.216402],[-4.09809,51.210884],[-4.113615,51.211582],[-4.177636,51.197308],[-4.18573,51.198441],[-4.201607,51.200285],[-4.210645,51.190546],[-4.229263,51.18848],[-4.21148,51.178392],[-4.216183,51.151607],[-4.223753,51.144235],[-4.261342,51.142891],[-4.258361,51.141244],[-4.250428,51.137591],[-4.23589,51.130894],[-4.240182,51.121032],[-4.236478,51.119961],[-4.222454,51.117695],[-4.216849,51.076388],[-4.189146,51.066252],[-4.185397,51.076213],[-4.166597,51.080471],[-4.163135,51.100731],[-4.163746,51.083577],[-4.15295,51.080208],[-4.151615,51.073531],[-4.179777,51.067497],[-4.179719,51.04874],[-4.188847,51.041188],[-4.202736,51.020641],[-4.178395,51.024316],[-4.160348,51.014416],[-4.116089,51.019297],[-4.120963,51.010894],[-4.086127,51.00273],[-4.06398,51.01031],[-4.0343,51.007621],[-4.036081,50.9812],[-4.011546,50.967342],[-3.983652,50.982118],[-3.95829,50.981482],[-3.960847,50.955923],[-3.993894,50.948426],[-3.996655,50.925979],[-3.954206,50.917689],[-3.904417,50.927398],[-3.904158,50.905087],[-3.830016,50.906875],[-3.816797,50.914591],[-3.816911,50.901795],[-3.783321,50.902483],[-3.753583,50.876814],[-3.744806,50.890303],[-3.734684,50.89066],[-3.728058,50.910765],[-3.627487,50.919587],[-3.612634,50.926582],[-3.596115,50.943988],[-3.597847,50.96721],[-3.619703,50.968325],[-3.628816,51.005774],[-3.605118,50.990224],[-3.603208,51.007233],[-3.614655,51.01549],[-3.594471,51.055195],[-3.646709,51.058059],[-3.692407,51.080592],[-3.719955,51.080815],[-3.804289,51.115685],[-3.834491,51.138381],[-3.839175,51.176923],[-3.786303,51.171927],[-3.724984,51.179592],[-3.733201,51.222725],[-3.720561,51.233058]]]}',
      metadata: ["North Devon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.152017,50.463665],[-4.15497,50.463711],[-4.160521,50.456093],[-4.152017,50.463665]]],[[[-3.58425,50.477723],[-3.603095,50.484507],[-3.613843,50.4693],[-3.64524,50.461127],[-3.658932,50.464581],[-3.65549,50.472061],[-3.669922,50.462112],[-3.711674,50.482378],[-3.737402,50.506344],[-3.75634,50.510412],[-3.768276,50.501565],[-3.758858,50.466819],[-3.776675,50.463949],[-3.798272,50.48942],[-3.775891,50.495574],[-3.791775,50.501429],[-3.784758,50.517716],[-3.799501,50.521704],[-3.799243,50.536237],[-3.827215,50.516362],[-3.844596,50.534364],[-3.871285,50.534091],[-3.875604,50.542531],[-3.889161,50.536319],[-3.892602,50.513852],[-3.880236,50.485675],[-3.898983,50.472776],[-3.948779,50.488656],[-3.945788,50.498268],[-3.955969,50.500243],[-4.007901,50.469674],[-4.023054,50.468729],[-4.023779,50.462071],[-4.060237,50.45402],[-4.077792,50.469907],[-4.107268,50.450387],[-4.108567,50.46297],[-4.151872,50.463662],[-4.156458,50.446351],[-4.162655,50.44941],[-4.168897,50.444595],[-4.173878,50.437754],[-4.180985,50.435267],[-4.189814,50.428451],[-4.185283,50.426424],[-4.173212,50.42389],[-4.165651,50.426778],[-4.155856,50.436427],[-4.135663,50.432928],[-4.113488,50.444154],[-4.109541,50.432095],[-4.082667,50.424656],[-4.07151,50.40185],[-4.03965,50.40142],[-4.021169,50.391777],[-4.027061,50.379032],[-4.0502,50.377471],[-4.052944,50.35652],[-4.090618,50.340897],[-4.123127,50.346781],[-4.123057,50.346708],[-4.123275,50.346353],[-4.123095,50.336412],[-4.119641,50.335845],[-4.119016,50.319377],[-4.055988,50.311357],[-4.053217,50.317723],[-4.033269,50.313432],[-4.061408,50.308422],[-4.07102,50.304828],[-4.042845,50.295393],[-4.016259,50.299243],[-3.991948,50.307481],[-3.974756,50.30524],[-3.952737,50.308415],[-3.952587,50.308196],[-3.948474,50.3098],[-3.946828,50.306769],[-3.943674,50.295896],[-3.917731,50.296056],[-3.914918,50.294281],[-3.910296,50.294069],[-3.897946,50.286379],[-3.899207,50.284364],[-3.895088,50.281763],[-3.870968,50.281256],[-3.865355,50.284619],[-3.869644,50.27907],[-3.876881,50.280286],[-3.881745,50.276526],[-3.875425,50.272288],[-3.859119,50.261359],[-3.858104,50.260666],[-3.85897,50.245091],[-3.859114,50.242511],[-3.867252,50.241465],[-3.867974,50.239699],[-3.844248,50.22771],[-3.819696,50.216428],[-3.804351,50.213327],[-3.786673,50.210837],[-3.781937,50.229573],[-3.777723,50.231369],[-3.769951,50.239423],[-3.775306,50.243773],[-3.767256,50.242215],[-3.766877,50.242608],[-3.761491,50.241099],[-3.758808,50.240579],[-3.761538,50.246609],[-3.764877,50.253979],[-3.774064,50.257011],[-3.767278,50.263088],[-3.756494,50.254673],[-3.756669,50.252608],[-3.749175,50.255973],[-3.754563,50.242401],[-3.753818,50.239787],[-3.724021,50.247171],[-3.720276,50.248099],[-3.722707,50.247191],[-3.739118,50.241061],[-3.726312,50.236654],[-3.761338,50.236247],[-3.773484,50.224284],[-3.737502,50.21482],[-3.720912,50.202457],[-3.698133,50.213463],[-3.683499,50.221083],[-3.680961,50.222405],[-3.640739,50.221759],[-3.64395,50.224697],[-3.659195,50.238096],[-3.659058,50.238516],[-3.659565,50.23898],[-3.656535,50.248152],[-3.642651,50.290133],[-3.613116,50.317538],[-3.611414,50.317895],[-3.611223,50.318067],[-3.592449,50.321868],[-3.572427,50.326058],[-3.563551,50.335357],[-3.570976,50.344234],[-3.576738,50.346224],[-3.576758,50.351144],[-3.584433,50.360313],[-3.580546,50.372114],[-3.580555,50.372204],[-3.594354,50.380735],[-3.594663,50.382037],[-3.594987,50.382247],[-3.59467,50.382067],[-3.594712,50.382244],[-3.568557,50.36881],[-3.575582,50.363907],[-3.57628,50.363271],[-3.564263,50.352714],[-3.568168,50.35068],[-3.573532,50.347828],[-3.57181,50.347047],[-3.551181,50.338274],[-3.540078,50.337032],[-3.51856,50.346061],[-3.517866,50.346444],[-3.507715,50.378943],[-3.544256,50.373483],[-3.574778,50.394152],[-3.579851,50.410205],[-3.599047,50.409269],[-3.628043,50.425989],[-3.625075,50.441286],[-3.586885,50.45223],[-3.58425,50.477723]]]]}',
      metadata: ["South Hams"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.585483,50.743874],[-3.608868,50.754217],[-3.619946,50.750985],[-3.671795,50.763974],[-3.680143,50.749928],[-3.708342,50.748725],[-3.723342,50.728154],[-3.737514,50.723531],[-3.72424,50.715597],[-3.735593,50.703184],[-3.735076,50.695896],[-3.811444,50.691244],[-3.797217,50.674915],[-3.811996,50.658997],[-3.804646,50.655906],[-3.843459,50.647078],[-3.882482,50.596724],[-3.869755,50.571135],[-3.875604,50.542531],[-3.871285,50.534091],[-3.844596,50.534364],[-3.827215,50.516362],[-3.799243,50.536237],[-3.799501,50.521704],[-3.784758,50.517716],[-3.791775,50.501429],[-3.775891,50.495574],[-3.798272,50.48942],[-3.776675,50.463949],[-3.758858,50.466819],[-3.768276,50.501565],[-3.75634,50.510412],[-3.737402,50.506344],[-3.711674,50.482378],[-3.669922,50.462112],[-3.65549,50.472061],[-3.658932,50.464581],[-3.64524,50.461127],[-3.613843,50.4693],[-3.603095,50.484507],[-3.58425,50.477723],[-3.569782,50.490703],[-3.564774,50.486967],[-3.529951,50.504587],[-3.520905,50.517684],[-3.50911,50.516619],[-3.506541,50.520764],[-3.497413,50.538285],[-3.50981,50.542857],[-3.501056,50.545917],[-3.499848,50.540531],[-3.468441,50.562976],[-3.466976,50.578114],[-3.426294,50.610961],[-3.42497,50.612028],[-3.427082,50.611354],[-3.427789,50.610943],[-3.443854,50.601588],[-3.444535,50.605777],[-3.445151,50.60558],[-3.444544,50.605831],[-3.445341,50.610726],[-3.446356,50.616962],[-3.446816,50.617187],[-3.446987,50.620839],[-3.451264,50.647084],[-3.468195,50.663954],[-3.469475,50.678298],[-3.494506,50.692806],[-3.539092,50.692918],[-3.562821,50.706949],[-3.569669,50.74501],[-3.585483,50.743874]]]}',
      metadata: ["Teignbridge"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.188847,51.041188],[-4.197923,51.033677],[-4.190667,51.054777],[-4.210201,51.052425],[-4.217296,51.064961],[-4.240977,51.046415],[-4.242599,51.041418],[-4.249245,51.039936],[-4.282335,51.013981],[-4.302996,50.997755],[-4.342994,50.988964],[-4.390903,50.994676],[-4.42444,51.013133],[-4.425442,51.013661],[-4.525651,51.022301],[-4.540991,50.951755],[-4.545973,50.928806],[-4.456058,50.928869],[-4.462683,50.91349],[-4.420959,50.866086],[-4.433657,50.865513],[-4.442235,50.846958],[-4.446791,50.808224],[-4.493502,50.792912],[-4.45133,50.785654],[-4.423947,50.764549],[-4.408723,50.762417],[-4.414417,50.774396],[-4.393506,50.778248],[-4.381063,50.770538],[-4.384996,50.74775],[-4.361586,50.718767],[-4.369341,50.702341],[-4.348941,50.689538],[-4.335226,50.646541],[-4.312714,50.662451],[-4.222203,50.671246],[-4.212609,50.678032],[-4.214734,50.688785],[-4.231989,50.695422],[-4.234867,50.713446],[-4.22685,50.742139],[-4.185928,50.757703],[-4.205795,50.774913],[-4.166419,50.787],[-4.19077,50.789643],[-4.168764,50.797656],[-4.17721,50.807165],[-4.158239,50.815458],[-4.164018,50.830896],[-4.140741,50.832114],[-4.12872,50.844107],[-4.102878,50.835435],[-4.103132,50.850297],[-4.085409,50.857737],[-4.089934,50.86738],[-4.06868,50.874613],[-4.051985,50.862642],[-4.039951,50.868537],[-4.036317,50.859351],[-3.995023,50.869199],[-3.995399,50.851848],[-3.958918,50.855384],[-3.940414,50.825555],[-3.899665,50.834509],[-3.884303,50.848172],[-3.903544,50.847944],[-3.92593,50.869602],[-3.898574,50.877525],[-3.920247,50.897715],[-3.904158,50.905087],[-3.904417,50.927398],[-3.954206,50.917689],[-3.996655,50.925979],[-3.993894,50.948426],[-3.960847,50.955923],[-3.95829,50.981482],[-3.983652,50.982118],[-4.011546,50.967342],[-4.036081,50.9812],[-4.0343,51.007621],[-4.06398,51.01031],[-4.086127,51.00273],[-4.120963,51.010894],[-4.116089,51.019297],[-4.160348,51.014416],[-4.178395,51.024316],[-4.202736,51.020641],[-4.188847,51.041188]]],[[[-4.653245,51.162334],[-4.677405,51.202477],[-4.680572,51.172425],[-4.670925,51.158464],[-4.653245,51.162334]]]]}',
      metadata: ["Torridge"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.180985,50.435267],[-4.173878,50.437754],[-4.168897,50.444595],[-4.180985,50.435267]]],[[[-3.899665,50.834509],[-3.940414,50.825555],[-3.958918,50.855384],[-3.995399,50.851848],[-3.995023,50.869199],[-4.036317,50.859351],[-4.039951,50.868537],[-4.051985,50.862642],[-4.06868,50.874613],[-4.089934,50.86738],[-4.085409,50.857737],[-4.103132,50.850297],[-4.102878,50.835435],[-4.12872,50.844107],[-4.140741,50.832114],[-4.164018,50.830896],[-4.158239,50.815458],[-4.17721,50.807165],[-4.168764,50.797656],[-4.19077,50.789643],[-4.166419,50.787],[-4.205795,50.774913],[-4.185928,50.757703],[-4.22685,50.742139],[-4.234867,50.713446],[-4.231989,50.695422],[-4.214734,50.688785],[-4.212609,50.678032],[-4.222203,50.671246],[-4.312714,50.662451],[-4.335226,50.646541],[-4.325592,50.637726],[-4.300323,50.633839],[-4.31163,50.586077],[-4.306915,50.578585],[-4.291328,50.583858],[-4.286142,50.575008],[-4.28587,50.584731],[-4.27115,50.582214],[-4.279516,50.569173],[-4.259285,50.545847],[-4.271526,50.536585],[-4.247891,50.543922],[-4.232295,50.531017],[-4.207307,50.533563],[-4.202793,50.50318],[-4.18575,50.508357],[-4.180705,50.503728],[-4.199357,50.492369],[-4.220869,50.498073],[-4.218082,50.475943],[-4.23853,50.463933],[-4.229445,50.455837],[-4.2152,50.466686],[-4.200788,50.436397],[-4.199654,50.436933],[-4.191313,50.435375],[-4.185079,50.434211],[-4.160521,50.456093],[-4.15497,50.463711],[-4.152017,50.463665],[-4.151827,50.463834],[-4.151872,50.463662],[-4.108567,50.46297],[-4.107268,50.450387],[-4.077792,50.469907],[-4.060237,50.45402],[-4.023779,50.462071],[-4.023054,50.468729],[-4.007901,50.469674],[-3.955969,50.500243],[-3.945788,50.498268],[-3.948779,50.488656],[-3.898983,50.472776],[-3.880236,50.485675],[-3.892602,50.513852],[-3.889161,50.536319],[-3.875604,50.542531],[-3.869755,50.571135],[-3.882482,50.596724],[-3.843459,50.647078],[-3.804646,50.655906],[-3.811996,50.658997],[-3.797217,50.674915],[-3.811444,50.691244],[-3.735076,50.695896],[-3.735593,50.703184],[-3.766259,50.727565],[-3.818597,50.716964],[-3.836295,50.732172],[-3.805839,50.759014],[-3.822041,50.781],[-3.845573,50.781589],[-3.835901,50.792974],[-3.839085,50.818367],[-3.877751,50.818887],[-3.899665,50.834509]]]]}',
      metadata: ["West Devon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.339176,50.799037],[0.297768,50.81291],[0.2769,50.804766],[0.267351,50.810562],[0.258805,50.799376],[0.245878,50.805489],[0.227723,50.800872],[0.233878,50.795415],[0.216419,50.77472],[0.209823,50.738534],[0.209966,50.738486],[0.260356,50.73858],[0.266411,50.743232],[0.310002,50.776684],[0.339176,50.799037]]]}',
      metadata: ["Eastbourne"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.657924,50.869759],[0.620898,50.884184],[0.603728,50.878549],[0.53695,50.894825],[0.520026,50.877386],[0.521189,50.851744],[0.508573,50.85087],[0.502769,50.842513],[0.524857,50.845219],[0.645706,50.866731],[0.657924,50.869759]]]}',
      metadata: ["Hastings"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.150105,50.758664],[0.143686,50.792768],[0.11923,50.794234],[0.097934,50.82032],[0.127327,50.856761],[0.114639,50.87068],[0.098498,50.869993],[0.091881,50.884947],[0.121914,50.915281],[0.057304,50.926091],[0.04823,50.946512],[0.053552,50.967846],[0.039013,50.96662],[0.02729,50.980904],[0.011166,50.977618],[0.00379,50.993659],[-0.01641,51.002514],[-0.024604,50.980025],[-0.061592,50.97842],[-0.073619,50.991675],[-0.115215,50.976077],[-0.104171,50.946477],[-0.119726,50.942341],[-0.13501,50.886635],[-0.135284,50.878105],[-0.1218,50.873428],[-0.097519,50.877945],[-0.084928,50.87312],[-0.073442,50.841245],[-0.036843,50.841239],[-0.045968,50.821825],[-0.020428,50.82183],[-0.016002,50.814875],[-0.038477,50.799057],[-0.014958,50.793452],[0.033733,50.78183],[0.057757,50.776086],[0.055888,50.781636],[0.058352,50.781673],[0.058336,50.782144],[0.059549,50.78169],[0.068354,50.781819],[0.106948,50.763937],[0.121967,50.758304],[0.148939,50.759056],[0.150105,50.758664]]]}',
      metadata: ["Lewes"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.605391,51.01207],[0.568381,51.003815],[0.541907,51.011006],[0.5376,51.021674],[0.472315,51.030442],[0.463267,51.054787],[0.418267,51.062627],[0.396474,51.083096],[0.395772,51.073913],[0.361353,51.065277],[0.3466,51.0241],[0.354012,51.017528],[0.328659,51.012882],[0.321586,50.996684],[0.324025,50.962921],[0.343584,50.959147],[0.335933,50.953044],[0.34269,50.939441],[0.366808,50.932977],[0.357762,50.917303],[0.374303,50.898393],[0.367896,50.887952],[0.379054,50.883536],[0.416084,50.896911],[0.435503,50.893899],[0.449085,50.878951],[0.441197,50.86783],[0.375413,50.840605],[0.378235,50.820486],[0.500712,50.842261],[0.502769,50.842513],[0.508573,50.85087],[0.521189,50.851744],[0.520026,50.877386],[0.53695,50.894825],[0.603728,50.878549],[0.620898,50.884184],[0.657924,50.869759],[0.658577,50.869921],[0.729731,50.913419],[0.774906,50.927336],[0.772009,50.93125],[0.844462,50.924852],[0.854954,50.923922],[0.867891,50.933262],[0.855968,50.953129],[0.841401,50.957609],[0.812942,50.942],[0.784328,50.97723],[0.777135,50.975428],[0.778957,50.989492],[0.740611,51.000677],[0.706771,50.993602],[0.676956,51.003299],[0.661355,51.017787],[0.605391,51.01207]]]}',
      metadata: ["Rother"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.160748,51.137319],[0.133117,51.147279],[0.050017,51.14265],[0.027361,51.139851],[0.028153,51.11772],[0.044561,51.110644],[0.018619,51.103576],[0.009505,51.110392],[0.010473,51.102182],[-0.036213,51.09343],[-0.026852,51.075113],[-0.013257,51.073967],[-0.008548,51.056458],[0.013726,51.057013],[-0.003002,51.047564],[-0.001565,51.035755],[-0.021914,51.026512],[-0.01641,51.002514],[0.00379,50.993659],[0.011166,50.977618],[0.02729,50.980904],[0.039013,50.96662],[0.053552,50.967846],[0.04823,50.946512],[0.057304,50.926091],[0.121914,50.915281],[0.091881,50.884947],[0.098498,50.869993],[0.114639,50.87068],[0.127327,50.856761],[0.097934,50.82032],[0.11923,50.794234],[0.143686,50.792768],[0.150105,50.758664],[0.155532,50.756836],[0.209823,50.738534],[0.216419,50.77472],[0.233878,50.795415],[0.227723,50.800872],[0.245878,50.805489],[0.258805,50.799376],[0.267351,50.810562],[0.2769,50.804766],[0.297768,50.81291],[0.339176,50.799037],[0.339307,50.799138],[0.377492,50.820354],[0.378235,50.820486],[0.375413,50.840605],[0.441197,50.86783],[0.449085,50.878951],[0.435503,50.893899],[0.416084,50.896911],[0.379054,50.883536],[0.367896,50.887952],[0.374303,50.898393],[0.357762,50.917303],[0.366808,50.932977],[0.34269,50.939441],[0.335933,50.953044],[0.343584,50.959147],[0.324025,50.962921],[0.321586,50.996684],[0.328659,51.012882],[0.354012,51.017528],[0.3466,51.0241],[0.361353,51.065277],[0.395772,51.073913],[0.396474,51.083096],[0.373904,51.088465],[0.35082,51.084068],[0.35896,51.104479],[0.334703,51.105565],[0.325177,51.122917],[0.273935,51.120079],[0.275671,51.112355],[0.244534,51.11488],[0.226284,51.124468],[0.171628,51.11541],[0.151201,51.12383],[0.160748,51.137319]]]}',
      metadata: ["Wealden"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.562475,51.617853],[0.520823,51.618791],[0.514681,51.626967],[0.50483,51.621716],[0.458963,51.623828],[0.446828,51.626669],[0.442935,51.646655],[0.402328,51.650995],[0.375127,51.615173],[0.382605,51.565824],[0.391862,51.567191],[0.393532,51.557655],[0.41868,51.556617],[0.427691,51.545131],[0.461618,51.553697],[0.466764,51.546726],[0.484842,51.547876],[0.508833,51.534563],[0.506244,51.538251],[0.518009,51.529974],[0.518042,51.529956],[0.543035,51.534684],[0.542845,51.571627],[0.565919,51.588245],[0.549035,51.596578],[0.562475,51.617853]]]}',
      metadata: ["Basildon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.78147,51.966513],[0.772261,51.970425],[0.774633,51.982592],[0.759668,51.985429],[0.761149,51.997483],[0.738527,52.010699],[0.740634,52.031202],[0.714397,52.027319],[0.696512,52.039302],[0.6994,52.048438],[0.716263,52.048687],[0.703178,52.065273],[0.712118,52.072242],[0.684204,52.086969],[0.656901,52.085442],[0.582133,52.075852],[0.551487,52.06881],[0.542263,52.057759],[0.511054,52.059831],[0.501679,52.053853],[0.466667,52.078456],[0.453623,52.068147],[0.438278,52.072333],[0.404638,52.065502],[0.379613,52.049563],[0.389695,52.036467],[0.394032,52.031841],[0.43139,52.038933],[0.437755,52.014047],[0.413839,52.011682],[0.426944,51.986759],[0.423623,51.973217],[0.412476,51.971061],[0.430053,51.953821],[0.421393,51.926304],[0.433016,51.924798],[0.467205,51.878656],[0.513505,51.864397],[0.519262,51.850449],[0.534184,51.810919],[0.523791,51.803428],[0.572098,51.751901],[0.593366,51.755449],[0.598702,51.750416],[0.618606,51.762565],[0.647504,51.761511],[0.633341,51.776123],[0.651172,51.784887],[0.659756,51.805678],[0.678691,51.810645],[0.697269,51.829127],[0.708909,51.818904],[0.721332,51.830236],[0.711904,51.834531],[0.74159,51.839676],[0.733144,51.848462],[0.750344,51.853602],[0.752926,51.863132],[0.736607,51.87168],[0.716405,51.871253],[0.72276,51.878794],[0.699525,51.903445],[0.726228,51.905841],[0.749491,51.95469],[0.764042,51.95432],[0.78147,51.966513]]]}',
      metadata: ["Braintree"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.402328,51.650995],[0.400251,51.662247],[0.41256,51.670896],[0.401498,51.682421],[0.377518,51.69872],[0.360551,51.690384],[0.346633,51.693905],[0.333999,51.717013],[0.323062,51.714168],[0.302125,51.680965],[0.265383,51.699637],[0.232546,51.683847],[0.239134,51.674172],[0.215027,51.674853],[0.208157,51.660971],[0.190858,51.65982],[0.19299,51.653099],[0.175703,51.655792],[0.200312,51.624936],[0.224088,51.631738],[0.252194,51.617769],[0.264562,51.608321],[0.254009,51.601598],[0.269879,51.599575],[0.29029,51.564299],[0.313035,51.565818],[0.382605,51.565824],[0.375127,51.615173],[0.402328,51.650995]]]}',
      metadata: ["Brentwood"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.626607,51.536602],[0.624353,51.536294],[0.624283,51.536429],[0.609033,51.534826],[0.625905,51.532249],[0.626607,51.536602]]],[[[0.632077,51.570529],[0.565919,51.588245],[0.542845,51.571627],[0.543035,51.534684],[0.518042,51.529956],[0.54358,51.515565],[0.548272,51.515505],[0.548787,51.512629],[0.553654,51.509884],[0.573364,51.507856],[0.59263,51.512133],[0.636859,51.521936],[0.618446,51.520273],[0.622104,51.526851],[0.593932,51.535025],[0.572105,51.541351],[0.594071,51.53747],[0.60833,51.534948],[0.625793,51.538129],[0.626453,51.538229],[0.626873,51.538257],[0.632077,51.570529]]]]}',
      metadata: ["Castle Point"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.519262,51.850449],[0.445681,51.828873],[0.431061,51.831826],[0.424032,51.854159],[0.413172,51.856659],[0.403521,51.840276],[0.414322,51.814242],[0.404615,51.807422],[0.40003,51.812762],[0.384165,51.797074],[0.36157,51.80115],[0.362617,51.794907],[0.340581,51.794478],[0.332198,51.779629],[0.3467,51.767596],[0.347451,51.73044],[0.333999,51.717013],[0.346633,51.693905],[0.360551,51.690384],[0.377518,51.69872],[0.401498,51.682421],[0.41256,51.670896],[0.400251,51.662247],[0.402328,51.650995],[0.442935,51.646655],[0.446828,51.626669],[0.458963,51.623828],[0.50483,51.621716],[0.514681,51.626967],[0.520823,51.618791],[0.562475,51.617853],[0.586922,51.62339],[0.58799,51.630873],[0.649007,51.636598],[0.628712,51.639515],[0.619766,51.67534],[0.608837,51.681947],[0.612603,51.698758],[0.601865,51.710228],[0.611153,51.722787],[0.589498,51.730173],[0.593366,51.755449],[0.572098,51.751901],[0.523791,51.803428],[0.534184,51.810919],[0.519262,51.850449]]]}',
      metadata: ["Chelmsford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.945555,51.774698],[0.999991,51.793141],[0.999129,51.801935],[0.965847,51.808676],[0.942774,51.806746],[0.924587,51.795598],[0.901838,51.786126],[0.902362,51.773704],[0.945555,51.774698]]],[[[0.980128,51.844657],[0.979673,51.846658],[0.977822,51.847248],[0.980128,51.844657]]],[[[1.024712,51.954902],[0.99871,51.963967],[0.970983,51.962408],[0.96259,51.977165],[0.942911,51.97069],[0.925169,51.976194],[0.889688,51.973387],[0.85024,51.960767],[0.82465,51.96855],[0.810877,51.960696],[0.78147,51.966513],[0.764042,51.95432],[0.749491,51.95469],[0.726228,51.905841],[0.699525,51.903445],[0.72276,51.878794],[0.716405,51.871253],[0.736607,51.87168],[0.752926,51.863132],[0.750344,51.853602],[0.733144,51.848462],[0.74159,51.839676],[0.711904,51.834531],[0.721332,51.830236],[0.708909,51.818904],[0.721664,51.810005],[0.71333,51.80846],[0.718171,51.797363],[0.75423,51.800969],[0.77909,51.811563],[0.811855,51.799119],[0.815929,51.789247],[0.803929,51.789705],[0.836966,51.779517],[0.842862,51.78103],[0.829891,51.788998],[0.84169,51.7823],[0.848686,51.787267],[0.872288,51.78323],[0.866462,51.792792],[0.892418,51.779157],[0.89876,51.79271],[0.904144,51.804207],[0.921563,51.803854],[0.937033,51.805778],[0.920749,51.805001],[0.916172,51.811448],[0.959908,51.810232],[0.991184,51.807253],[0.943448,51.822178],[0.955606,51.829393],[0.961931,51.833145],[0.965771,51.822633],[0.982242,51.817389],[0.966444,51.829411],[0.977496,51.835625],[0.977522,51.840891],[0.977554,51.847334],[0.96501,51.851333],[0.978104,51.854043],[0.978321,51.872162],[0.952853,51.88031],[0.962638,51.890728],[0.948809,51.896752],[0.957143,51.903648],[0.931203,51.919724],[0.957634,51.937311],[1.00578,51.935602],[1.024712,51.954902]]]]}',
      metadata: ["Colchester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.3467,51.767596],[0.299366,51.77186],[0.295617,51.790265],[0.237678,51.779775],[0.231548,51.795161],[0.196661,51.795791],[0.188443,51.819655],[0.166252,51.822154],[0.172583,51.816304],[0.158309,51.813517],[0.146141,51.796244],[0.168019,51.782784],[0.147397,51.757568],[0.102443,51.746295],[0.0926,51.736176],[0.063838,51.751525],[0.057664,51.779674],[0.026799,51.77418],[0.014029,51.76438],[0.001168,51.745056],[-0.013511,51.742217],[-0.019743,51.703216],[-0.011919,51.680878],[-0.01226,51.646229],[0.02272,51.641115],[0.021819,51.628833],[0.072832,51.604687],[0.138184,51.623545],[0.200312,51.624936],[0.175703,51.655792],[0.19299,51.653099],[0.190858,51.65982],[0.208157,51.660971],[0.215027,51.674853],[0.239134,51.674172],[0.232546,51.683847],[0.265383,51.699637],[0.302125,51.680965],[0.323062,51.714168],[0.333999,51.717013],[0.347451,51.73044],[0.3467,51.767596]]]}',
      metadata: ["Epping Forest"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.057664,51.779674],[0.063838,51.751525],[0.0926,51.736176],[0.102443,51.746295],[0.147397,51.757568],[0.168019,51.782784],[0.146141,51.796244],[0.057664,51.779674]]]}',
      metadata: ["Harlow"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.787703,51.722315],[0.769754,51.726827],[0.754635,51.724862],[0.770131,51.719052],[0.787703,51.722315]]],[[[0.721175,51.73065],[0.708131,51.71964],[0.72617,51.717051],[0.721175,51.73065]]],[[[0.838019,51.773366],[0.833494,51.769256],[0.856199,51.767655],[0.838019,51.773366]]],[[[0.842862,51.78103],[0.836966,51.779517],[0.803929,51.789705],[0.815929,51.789247],[0.811855,51.799119],[0.77909,51.811563],[0.75423,51.800969],[0.718171,51.797363],[0.71333,51.80846],[0.721664,51.810005],[0.708909,51.818904],[0.697269,51.829127],[0.678691,51.810645],[0.659756,51.805678],[0.651172,51.784887],[0.633341,51.776123],[0.647504,51.761511],[0.618606,51.762565],[0.598702,51.750416],[0.593366,51.755449],[0.589498,51.730173],[0.611153,51.722787],[0.601865,51.710228],[0.612603,51.698758],[0.608837,51.681947],[0.619766,51.67534],[0.628712,51.639515],[0.649007,51.636598],[0.740346,51.632543],[0.764706,51.63847],[0.780515,51.630628],[0.793874,51.625705],[0.859509,51.621333],[0.88787,51.622105],[0.904317,51.622549],[0.934452,51.632837],[0.941718,51.661912],[0.942238,51.663991],[0.932673,51.666578],[0.944306,51.673929],[0.933905,51.673365],[0.946371,51.675609],[0.932787,51.67509],[0.946473,51.677408],[0.931537,51.679205],[0.948693,51.683261],[0.932144,51.685891],[0.946952,51.685477],[0.938106,51.688399],[0.947075,51.687163],[0.938513,51.691777],[0.94901,51.729461],[0.930958,51.746029],[0.926854,51.746272],[0.895595,51.7433],[0.894597,51.743205],[0.88393,51.735686],[0.852214,51.713309],[0.819712,51.721081],[0.793479,51.718078],[0.797561,51.707945],[0.771582,51.704061],[0.766958,51.702745],[0.756937,51.690726],[0.737835,51.687204],[0.769186,51.708359],[0.746034,51.704864],[0.747006,51.711469],[0.711208,51.713486],[0.699233,51.726174],[0.705529,51.723814],[0.713726,51.737606],[0.735909,51.729472],[0.776743,51.743983],[0.788632,51.736653],[0.792292,51.745191],[0.841564,51.738761],[0.853022,51.741972],[0.847456,51.747488],[0.856195,51.743786],[0.882688,51.757685],[0.861582,51.763097],[0.85045,51.757026],[0.853089,51.764578],[0.831807,51.769517],[0.83683,51.773908],[0.854523,51.771762],[0.890847,51.767348],[0.877376,51.779241],[0.877254,51.779348],[0.876819,51.779366],[0.843301,51.78076],[0.842862,51.78103]]]]}',
      metadata: ["Maldon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.837491,51.585177],[0.830144,51.595966],[0.808066,51.585627],[0.82295,51.564882],[0.837491,51.585177]]],[[[0.88447,51.568501],[0.929867,51.592446],[0.957517,51.620532],[0.887429,51.615157],[0.874375,51.614151],[0.866826,51.595186],[0.837997,51.593619],[0.840078,51.582023],[0.83865,51.581478],[0.82578,51.564467],[0.840146,51.561637],[0.86637,51.558941],[0.88447,51.568501]]],[[[0.780515,51.630628],[0.764706,51.63847],[0.740346,51.632543],[0.649007,51.636598],[0.58799,51.630873],[0.586922,51.62339],[0.562475,51.617853],[0.549035,51.596578],[0.565919,51.588245],[0.632077,51.570529],[0.638951,51.576801],[0.675334,51.572868],[0.78669,51.552943],[0.788991,51.542444],[0.819168,51.542207],[0.820841,51.540857],[0.820968,51.540921],[0.85075,51.556339],[0.817754,51.561916],[0.808115,51.578715],[0.793422,51.576392],[0.805899,51.586075],[0.76434,51.58323],[0.796393,51.586392],[0.819074,51.597596],[0.81197,51.603131],[0.820427,51.598914],[0.85402,51.595832],[0.857805,51.607577],[0.863896,51.608792],[0.86544,51.615431],[0.807842,51.622435],[0.784389,51.624284],[0.763667,51.636833],[0.780515,51.630628]]]]}',
      metadata: ["Rochford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[1.221792,51.872035],[1.224667,51.880299],[1.218687,51.878148],[1.206748,51.870677],[1.221792,51.872035]]],[[[1.262904,51.880217],[1.255049,51.874526],[1.263741,51.873044],[1.262904,51.880217]]],[[[1.25745,51.883465],[1.229692,51.88147],[1.226422,51.875308],[1.244593,51.868885],[1.25745,51.883465]]],[[[1.233952,51.893679],[1.231559,51.887494],[1.242674,51.886586],[1.233952,51.893679]]],[[[1.06868,51.950423],[1.047712,51.959498],[1.024712,51.954902],[1.00578,51.935602],[0.957634,51.937311],[0.931203,51.919724],[0.957143,51.903648],[0.948809,51.896752],[0.962638,51.890728],[0.952853,51.88031],[0.978321,51.872162],[0.978104,51.854043],[0.96501,51.851333],[0.977554,51.847334],[0.977555,51.847549],[0.977822,51.847248],[0.979673,51.846658],[0.980128,51.844657],[0.983617,51.840736],[0.985187,51.838972],[1.020955,51.834775],[0.984083,51.835056],[1.012836,51.80486],[1.054433,51.810836],[1.063177,51.817549],[1.046242,51.822875],[1.067783,51.821083],[1.064207,51.817225],[1.060416,51.811694],[1.043791,51.802451],[1.01779,51.8012],[1.043376,51.769708],[1.054721,51.769508],[1.128892,51.775434],[1.231837,51.81759],[1.253065,51.833588],[1.266122,51.843422],[1.287944,51.862364],[1.290538,51.873202],[1.290188,51.87431],[1.263943,51.886208],[1.269901,51.877306],[1.286065,51.875742],[1.267787,51.877113],[1.268509,51.863635],[1.269932,51.863625],[1.269145,51.851779],[1.266605,51.863649],[1.2526,51.863751],[1.250004,51.856121],[1.249215,51.862308],[1.2358,51.861444],[1.232438,51.855073],[1.22641,51.872127],[1.211586,51.866354],[1.19424,51.869001],[1.178191,51.871448],[1.194675,51.875131],[1.209101,51.878352],[1.209842,51.878517],[1.199016,51.884778],[1.212441,51.890364],[1.228299,51.890538],[1.212035,51.896627],[1.22601,51.90379],[1.234135,51.903286],[1.250956,51.90224],[1.246276,51.895745],[1.252019,51.902174],[1.258,51.912011],[1.252882,51.9146],[1.249718,51.916201],[1.28512,51.936864],[1.2966,51.935588],[1.296132,51.936959],[1.29086,51.948683],[1.27712,51.939168],[1.246151,51.948466],[1.22733,51.939457],[1.199343,51.940833],[1.180548,51.941752],[1.170124,51.948004],[1.119476,51.940054],[1.061862,51.945954],[1.053918,51.953001],[1.065888,51.949016],[1.06868,51.950423]]]]}',
      metadata: ["Tendring"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.389695,52.036467],[0.345959,52.049717],[0.324674,52.072783],[0.286012,52.090408],[0.276229,52.092638],[0.251573,52.076786],[0.235208,52.089],[0.203459,52.092674],[0.183194,52.073183],[0.189922,52.060201],[0.16757,52.055],[0.166396,52.048191],[0.151117,52.052852],[0.128135,52.047323],[0.119078,52.059963],[0.105736,52.060261],[0.092254,52.021654],[0.068127,52.005789],[0.069061,51.984043],[0.096461,51.984326],[0.107012,51.971818],[0.124847,51.923608],[0.124761,51.884586],[0.183854,51.893501],[0.174976,51.882813],[0.195594,51.868086],[0.170468,51.861622],[0.166252,51.822154],[0.188443,51.819655],[0.196661,51.795791],[0.231548,51.795161],[0.237678,51.779775],[0.295617,51.790265],[0.299366,51.77186],[0.3467,51.767596],[0.332198,51.779629],[0.340581,51.794478],[0.362617,51.794907],[0.36157,51.80115],[0.384165,51.797074],[0.40003,51.812762],[0.404615,51.807422],[0.414322,51.814242],[0.403521,51.840276],[0.413172,51.856659],[0.424032,51.854159],[0.431061,51.831826],[0.445681,51.828873],[0.519262,51.850449],[0.513505,51.864397],[0.467205,51.878656],[0.433016,51.924798],[0.421393,51.926304],[0.430053,51.953821],[0.412476,51.971061],[0.423623,51.973217],[0.426944,51.986759],[0.413839,52.011682],[0.437755,52.014047],[0.43139,52.038933],[0.394032,52.031841],[0.389695,52.036467]]]}',
      metadata: ["Uttlesford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.010215,51.902924],[-2.0379,51.905276],[-2.039943,51.922411],[-2.106565,51.938882],[-2.103251,51.923361],[-2.109622,51.915854],[-2.12468,51.919341],[-2.142418,51.884509],[-2.126196,51.887541],[-2.127758,51.879719],[-2.097519,51.878864],[-2.070757,51.865027],[-2.047277,51.858341],[-2.025252,51.864284],[-2.010215,51.902924]]]}',
      metadata: ["Cheltenham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.665754,51.987489],[-1.666173,51.996918],[-1.617533,52.033437],[-1.624418,52.038981],[-1.663866,52.031277],[-1.693981,52.039528],[-1.688636,52.051833],[-1.705141,52.059707],[-1.701731,52.072809],[-1.712953,52.066585],[-1.730671,52.073399],[-1.728561,52.10012],[-1.746022,52.09296],[-1.767649,52.112593],[-1.802289,52.096941],[-1.812737,52.078744],[-1.818943,52.085404],[-1.831753,52.072769],[-1.84662,52.079421],[-1.874406,52.069991],[-1.863449,52.053418],[-1.834589,52.043733],[-1.825023,52.030933],[-1.83905,52.006783],[-1.806875,52.002673],[-1.812199,51.988019],[-1.865364,51.995159],[-1.883426,51.983613],[-1.868465,51.980591],[-1.8745,51.965098],[-1.89707,51.960325],[-1.91093,51.969385],[-1.931661,51.957325],[-1.923187,51.934889],[-1.887206,51.926193],[-1.887861,51.911888],[-1.868404,51.908068],[-1.880735,51.896791],[-1.853609,51.89343],[-1.896016,51.8943],[-1.912159,51.887601],[-1.929407,51.904695],[-1.961197,51.902518],[-1.994169,51.914977],[-2.010215,51.902924],[-2.025252,51.864284],[-2.047277,51.858341],[-2.070757,51.865027],[-2.082138,51.854922],[-2.09841,51.85656],[-2.114895,51.82279],[-2.134254,51.819919],[-2.115636,51.799458],[-2.08381,51.78895],[-2.07297,51.769744],[-2.102652,51.767278],[-2.105985,51.744036],[-2.089633,51.746994],[-2.068624,51.738461],[-2.083517,51.735814],[-2.084693,51.728316],[-2.13447,51.723216],[-2.123853,51.705328],[-2.149892,51.68934],[-2.200625,51.692839],[-2.211845,51.682245],[-2.18755,51.670298],[-2.192108,51.659761],[-2.232723,51.66092],[-2.24705,51.676345],[-2.287164,51.680636],[-2.283443,51.665761],[-2.3236,51.633086],[-2.31434,51.625056],[-2.29376,51.632514],[-2.277229,51.619629],[-2.291637,51.593696],[-2.282746,51.578517],[-2.272559,51.57759],[-2.245117,51.581409],[-2.241867,51.592107],[-2.207426,51.603401],[-2.206552,51.595949],[-2.190012,51.592503],[-2.179491,51.600046],[-2.152538,51.590342],[-2.057174,51.672443],[-2.015592,51.650516],[-1.995307,51.651364],[-1.977327,51.638091],[-1.950519,51.636963],[-1.963057,51.658656],[-1.94206,51.670417],[-1.920905,51.657244],[-1.876598,51.651596],[-1.899013,51.679687],[-1.873884,51.68259],[-1.850484,51.656285],[-1.815851,51.663045],[-1.823171,51.673484],[-1.811942,51.703146],[-1.788617,51.667002],[-1.753793,51.662215],[-1.727554,51.66721],[-1.711055,51.671793],[-1.696831,51.692042],[-1.683059,51.69011],[-1.668459,51.680438],[-1.648254,51.684087],[-1.688,51.712045],[-1.695871,51.723537],[-1.687021,51.739884],[-1.700705,51.770584],[-1.719489,51.783212],[-1.681932,51.803993],[-1.686462,51.834456],[-1.676385,51.85031],[-1.686868,51.8655],[-1.667112,51.877],[-1.658652,51.896551],[-1.633051,51.899225],[-1.64553,51.922294],[-1.615189,51.937682],[-1.632491,51.955651],[-1.662529,51.964005],[-1.665754,51.987489]]]}',
      metadata: ["Cotswold"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.351379,52.021359],[-2.392892,52.012959],[-2.399018,51.996146],[-2.413196,51.99409],[-2.437294,51.997167],[-2.436547,52.014796],[-2.463256,52.01434],[-2.464079,52.023274],[-2.478932,52.02253],[-2.491985,52.007662],[-2.470993,51.994736],[-2.494913,51.981075],[-2.492245,51.964129],[-2.500906,51.960609],[-2.465487,51.951696],[-2.466043,51.927975],[-2.448185,51.918668],[-2.439358,51.897396],[-2.487795,51.880418],[-2.508624,51.885169],[-2.531624,51.860772],[-2.580641,51.861671],[-2.582817,51.849577],[-2.601217,51.856216],[-2.625467,51.838964],[-2.63671,51.843095],[-2.650401,51.826125],[-2.660871,51.822754],[-2.659539,51.810682],[-2.678538,51.802845],[-2.669811,51.794273],[-2.680452,51.768929],[-2.662692,51.753895],[-2.672225,51.736363],[-2.687541,51.730426],[-2.668441,51.705789],[-2.683791,51.700628],[-2.669169,51.69315],[-2.672253,51.681],[-2.656864,51.674504],[-2.686402,51.663155],[-2.665923,51.664324],[-2.680332,51.647547],[-2.668514,51.645631],[-2.663302,51.635612],[-2.660176,51.6296],[-2.656641,51.6228],[-2.656908,51.621997],[-2.651587,51.609617],[-2.648867,51.631286],[-2.610012,51.672659],[-2.580035,51.688166],[-2.566542,51.69514],[-2.546223,51.683716],[-2.542355,51.68154],[-2.540813,51.682397],[-2.502665,51.693299],[-2.472568,51.740928],[-2.437113,51.757333],[-2.408619,51.749839],[-2.386301,51.758094],[-2.392513,51.777272],[-2.416616,51.785122],[-2.444325,51.784041],[-2.451809,51.796401],[-2.422078,51.818581],[-2.411219,51.805649],[-2.378525,51.794626],[-2.351578,51.795963],[-2.346345,51.802656],[-2.358491,51.807565],[-2.362484,51.82271],[-2.349702,51.829741],[-2.351775,51.846225],[-2.346867,51.854508],[-2.315978,51.86086],[-2.334703,51.875741],[-2.319817,51.888501],[-2.289956,51.894341],[-2.297212,51.902904],[-2.28361,51.923297],[-2.295326,51.933227],[-2.283304,51.951814],[-2.267545,51.953189],[-2.270556,51.968939],[-2.300433,51.966775],[-2.31262,51.976505],[-2.326539,51.975791],[-2.32471,52.003567],[-2.352543,52.013535],[-2.351379,52.021359]]]}',
      metadata: ["Forest of Dean"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.187683,51.845029],[-2.177258,51.855877],[-2.196385,51.865544],[-2.199121,51.880624],[-2.238053,51.88326],[-2.26787,51.87518],[-2.274294,51.863014],[-2.287826,51.859911],[-2.279274,51.844616],[-2.298227,51.832602],[-2.299085,51.824634],[-2.262855,51.80758],[-2.249345,51.825223],[-2.227488,51.828311],[-2.223362,51.821169],[-2.187683,51.845029]]]}',
      metadata: ["Gloucester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.298227,51.832602],[-2.307467,51.846878],[-2.351775,51.846225],[-2.349702,51.829741],[-2.362484,51.82271],[-2.358491,51.807565],[-2.346345,51.802656],[-2.351578,51.795963],[-2.378525,51.794626],[-2.411219,51.805649],[-2.422078,51.818581],[-2.451809,51.796401],[-2.444325,51.784041],[-2.416616,51.785122],[-2.392513,51.777272],[-2.386301,51.758094],[-2.408619,51.749839],[-2.437113,51.757333],[-2.472568,51.740928],[-2.502665,51.693299],[-2.540813,51.682397],[-2.48964,51.663962],[-2.490675,51.644834],[-2.442984,51.652492],[-2.385989,51.639943],[-2.400475,51.635143],[-2.38891,51.62754],[-2.394657,51.597369],[-2.370577,51.597614],[-2.365581,51.603735],[-2.331063,51.591602],[-2.291637,51.593696],[-2.277229,51.619629],[-2.29376,51.632514],[-2.31434,51.625056],[-2.3236,51.633086],[-2.283443,51.665761],[-2.287164,51.680636],[-2.24705,51.676345],[-2.232723,51.66092],[-2.192108,51.659761],[-2.18755,51.670298],[-2.211845,51.682245],[-2.200625,51.692839],[-2.149892,51.68934],[-2.123853,51.705328],[-2.13447,51.723216],[-2.084693,51.728316],[-2.083517,51.735814],[-2.068624,51.738461],[-2.089633,51.746994],[-2.105985,51.744036],[-2.102652,51.767278],[-2.07297,51.769744],[-2.08381,51.78895],[-2.115636,51.799458],[-2.134254,51.819919],[-2.160084,51.824564],[-2.187683,51.845029],[-2.223362,51.821169],[-2.227488,51.828311],[-2.249345,51.825223],[-2.262855,51.80758],[-2.299085,51.824634],[-2.298227,51.832602]]]}',
      metadata: ["Stroud"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.83905,52.006783],[-1.913446,52.044461],[-1.93173,52.029959],[-1.951388,52.037725],[-1.984136,52.035879],[-2.038356,52.004601],[-2.049514,52.003796],[-2.060784,52.014681],[-2.084873,52.010479],[-2.112198,52.015345],[-2.140687,51.999464],[-2.149655,52.011256],[-2.139397,52.027892],[-2.11722,52.033614],[-2.118384,52.042109],[-2.171381,52.047574],[-2.180679,52.041728],[-2.176906,52.022559],[-2.187683,52.01908],[-2.16463,51.996143],[-2.180749,51.999615],[-2.185084,51.990561],[-2.220613,51.995497],[-2.25136,51.966565],[-2.270556,51.968939],[-2.267545,51.953189],[-2.283304,51.951814],[-2.295326,51.933227],[-2.28361,51.923297],[-2.297212,51.902904],[-2.289956,51.894341],[-2.319817,51.888501],[-2.334703,51.875741],[-2.315978,51.86086],[-2.346867,51.854508],[-2.351775,51.846225],[-2.307467,51.846878],[-2.298227,51.832602],[-2.279274,51.844616],[-2.287826,51.859911],[-2.274294,51.863014],[-2.26787,51.87518],[-2.238053,51.88326],[-2.199121,51.880624],[-2.196385,51.865544],[-2.177258,51.855877],[-2.187683,51.845029],[-2.160084,51.824564],[-2.134254,51.819919],[-2.114895,51.82279],[-2.09841,51.85656],[-2.082138,51.854922],[-2.070757,51.865027],[-2.097519,51.878864],[-2.127758,51.879719],[-2.126196,51.887541],[-2.142418,51.884509],[-2.12468,51.919341],[-2.109622,51.915854],[-2.103251,51.923361],[-2.106565,51.938882],[-2.039943,51.922411],[-2.0379,51.905276],[-2.010215,51.902924],[-1.994169,51.914977],[-1.961197,51.902518],[-1.929407,51.904695],[-1.912159,51.887601],[-1.896016,51.8943],[-1.853609,51.89343],[-1.880735,51.896791],[-1.868404,51.908068],[-1.887861,51.911888],[-1.887206,51.926193],[-1.923187,51.934889],[-1.931661,51.957325],[-1.91093,51.969385],[-1.89707,51.960325],[-1.8745,51.965098],[-1.868465,51.980591],[-1.883426,51.983613],[-1.865364,51.995159],[-1.812199,51.988019],[-1.806875,52.002673],[-1.83905,52.006783]]]}',
      metadata: ["Tewkesbury"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.986124,51.362848],[-1.050016,51.358148],[-1.086619,51.383916],[-1.115457,51.374215],[-1.115791,51.360466],[-1.13859,51.357191],[-1.176894,51.357324],[-1.25114,51.372041],[-1.349532,51.367106],[-1.411068,51.372852],[-1.428439,51.35669],[-1.44411,51.354928],[-1.429693,51.33653],[-1.418409,51.326478],[-1.428651,51.30039],[-1.416766,51.283069],[-1.45994,51.255562],[-1.428715,51.234414],[-1.428095,51.225036],[-1.383666,51.2149],[-1.368862,51.202407],[-1.358178,51.212021],[-1.341245,51.205443],[-1.340939,51.184579],[-1.308823,51.194739],[-1.228212,51.190568],[-1.206561,51.180702],[-1.191663,51.18472],[-1.185572,51.163989],[-1.21436,51.158705],[-1.213398,51.151951],[-1.184445,51.144311],[-1.174289,51.13354],[-1.131805,51.143623],[-1.104921,51.163149],[-1.07425,51.164452],[-1.071104,51.187756],[-0.985883,51.190436],[-0.975475,51.225915],[-0.98311,51.235308],[-0.974796,51.238519],[-0.993708,51.244417],[-0.978043,51.275129],[-0.981726,51.286631],[-1.002278,51.293989],[-0.983823,51.308466],[-0.981001,51.337229],[-0.994604,51.342311],[-0.98674,51.359856],[-0.986124,51.362848]]]}',
      metadata: ["Basingstoke and Deane"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.759334,51.103259],[-0.749273,51.103246],[-0.745526,51.112188],[-0.769281,51.117142],[-0.798396,51.152527],[-0.834204,51.147582],[-0.825443,51.181357],[-0.848912,51.210716],[-0.904308,51.209909],[-0.951176,51.200447],[-0.973759,51.186022],[-0.985883,51.190436],[-1.071104,51.187756],[-1.07425,51.164452],[-1.104921,51.163149],[-1.131805,51.143623],[-1.112017,51.136586],[-1.095043,51.140346],[-1.093925,51.107768],[-1.072073,51.107086],[-1.108544,51.086199],[-1.081683,51.046426],[-1.053741,51.047186],[-1.074503,51.032623],[-1.062341,51.020329],[-1.069513,50.993695],[-1.063366,50.977692],[-1.045236,50.968632],[-1.046166,50.954577],[-1.03569,50.951517],[-1.048479,50.902641],[-1.034116,50.904163],[-1.018681,50.909038],[-0.960443,50.872184],[-0.963608,50.867252],[-0.938608,50.873721],[-0.957581,50.89063],[-0.940245,50.918054],[-0.924013,50.924199],[-0.94211,50.942894],[-0.931847,50.94558],[-0.907864,50.994241],[-0.893347,51.002743],[-0.896993,51.02201],[-0.852811,51.044843],[-0.842848,51.066887],[-0.797763,51.063556],[-0.780787,51.079375],[-0.753481,51.086456],[-0.759334,51.103259],[-0.768913,51.10327],[-0.759444,51.103573],[-0.759334,51.103259]]]}',
      metadata: ["East Hampshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.265316,50.897979],[-1.264674,50.926275],[-1.29248,50.9487],[-1.258154,50.978342],[-1.293428,50.974145],[-1.290575,50.98287],[-1.322366,50.987653],[-1.327678,50.98012],[-1.346635,50.981342],[-1.342765,50.990889],[-1.353468,50.998159],[-1.392975,51.004361],[-1.396466,50.968503],[-1.374034,50.953976],[-1.379892,50.947518],[-1.35469,50.941022],[-1.357933,50.930731],[-1.333357,50.919883],[-1.321978,50.900953],[-1.362876,50.87875],[-1.311147,50.849396],[-1.310816,50.85077],[-1.316941,50.87612],[-1.304019,50.878908],[-1.302894,50.883566],[-1.288088,50.895657],[-1.265316,50.897979]]]}',
      metadata: ["Eastleigh"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-1.310816,50.85077],[-1.311147,50.849396],[-1.310378,50.848959],[-1.310816,50.85077]]],[[[-1.265316,50.897979],[-1.288088,50.895657],[-1.302894,50.883566],[-1.304019,50.878908],[-1.302617,50.879211],[-1.300647,50.879636],[-1.30289,50.877012],[-1.307323,50.841293],[-1.214165,50.809274],[-1.213833,50.809008],[-1.179596,50.813181],[-1.189113,50.822672],[-1.176974,50.837424],[-1.179508,50.837313],[-1.179071,50.837662],[-1.178116,50.838143],[-1.171888,50.856605],[-1.171221,50.840832],[-1.15433,50.844895],[-1.118438,50.837246],[-1.11692,50.842852],[-1.11399,50.843517],[-1.115848,50.858272],[-1.143187,50.858501],[-1.150002,50.879382],[-1.167218,50.889433],[-1.195813,50.885],[-1.197961,50.875896],[-1.215957,50.875049],[-1.230327,50.86077],[-1.255243,50.873103],[-1.265316,50.897979]]]]}',
      metadata: ["Fareham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.156943,50.837526],[-1.161294,50.838113],[-1.176974,50.837424],[-1.189113,50.822672],[-1.179596,50.813181],[-1.213833,50.809008],[-1.198577,50.796799],[-1.189856,50.789817],[-1.150387,50.776277],[-1.142074,50.773422],[-1.137226,50.775869],[-1.111949,50.789526],[-1.140689,50.783453],[-1.117831,50.792189],[-1.119826,50.796232],[-1.123692,50.804063],[-1.137106,50.802291],[-1.123804,50.806161],[-1.145767,50.825962],[-1.149501,50.825117],[-1.15719,50.823376],[-1.156943,50.837526]]]}',
      metadata: ["Gosport"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.837349,51.352871],[-0.877856,51.352591],[-0.923695,51.36601],[-0.98674,51.359856],[-0.994604,51.342311],[-0.981001,51.337229],[-0.983823,51.308466],[-1.002278,51.293989],[-0.981726,51.286631],[-0.978043,51.275129],[-0.993708,51.244417],[-0.974796,51.238519],[-0.98311,51.235308],[-0.975475,51.225915],[-0.985883,51.190436],[-0.973759,51.186022],[-0.951176,51.200447],[-0.904308,51.209909],[-0.848912,51.210716],[-0.80475,51.245065],[-0.807524,51.275292],[-0.790292,51.282196],[-0.80239,51.292759],[-0.797277,51.303924],[-0.778651,51.317486],[-0.762903,51.318731],[-0.775466,51.331959],[-0.837349,51.352871]]]}',
      metadata: ["Hart"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-0.950971,50.82379],[-0.967569,50.834822],[-0.990075,50.826982],[-0.983269,50.820733],[-0.994524,50.798367],[-1.025082,50.796025],[-1.024999,50.795478],[-1.02389,50.788153],[-0.959548,50.779648],[-0.938871,50.777638],[-0.937591,50.787324],[-0.958866,50.781155],[-0.951227,50.787019],[-0.967368,50.787187],[-0.959264,50.79491],[-0.952747,50.801119],[-0.973332,50.809034],[-0.957216,50.807573],[-0.950971,50.82379]]],[[[-0.938608,50.873721],[-0.963608,50.867252],[-0.960443,50.872184],[-1.018681,50.909038],[-1.034116,50.904163],[-1.049131,50.891466],[-1.035022,50.88063],[-1.047381,50.86575],[-1.054617,50.867449],[-1.054015,50.856551],[-1.022636,50.852101],[-1.023952,50.831586],[-1.023641,50.833152],[-1.023483,50.833412],[-1.022016,50.835317],[-1.022116,50.835803],[-1.02064,50.839004],[-1.002623,50.843132],[-1.000771,50.851383],[-0.998764,50.841599],[-0.981242,50.834937],[-0.974512,50.842186],[-0.934486,50.845865],[-0.92645,50.864092],[-0.938608,50.873721]]]]}',
      metadata: ["Havant"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-1.55515,50.714348],[-1.556478,50.707681],[-1.551177,50.706141],[-1.55515,50.714348]]],[[[-1.474514,50.924286],[-1.466763,50.910938],[-1.465123,50.910344],[-1.474514,50.924286]]],[[[-1.619751,50.958567],[-1.634965,50.959242],[-1.66166,50.945278],[-1.719617,50.97678],[-1.754402,50.977892],[-1.800314,50.991395],[-1.815422,50.985923],[-1.835813,51.009422],[-1.853381,51.00468],[-1.873984,50.984441],[-1.874482,51.006331],[-1.886741,50.999528],[-1.927876,50.997697],[-1.949936,50.982311],[-1.956821,50.98983],[-1.955466,50.978266],[-1.920841,50.961407],[-1.873644,50.917226],[-1.84184,50.93168],[-1.810658,50.927203],[-1.816542,50.903948],[-1.848556,50.889887],[-1.853539,50.86346],[-1.830009,50.855274],[-1.80711,50.863315],[-1.802473,50.842963],[-1.790615,50.836314],[-1.803401,50.830339],[-1.811893,50.808642],[-1.803905,50.795965],[-1.785496,50.764752],[-1.748846,50.779494],[-1.73896,50.763271],[-1.744169,50.747455],[-1.681819,50.75185],[-1.691855,50.737329],[-1.640443,50.732114],[-1.629268,50.728786],[-1.560044,50.708716],[-1.580478,50.718273],[-1.558488,50.720793],[-1.530995,50.736974],[-1.541881,50.739778],[-1.525925,50.744568],[-1.535287,50.763863],[-1.519592,50.754125],[-1.502435,50.753952],[-1.434179,50.765443],[-1.410486,50.76942],[-1.409618,50.769723],[-1.399556,50.774172],[-1.400139,50.774058],[-1.392638,50.777418],[-1.412993,50.783972],[-1.408184,50.785735],[-1.398333,50.784159],[-1.37549,50.784806],[-1.375033,50.785007],[-1.372623,50.784886],[-1.344982,50.785663],[-1.324687,50.803845],[-1.319798,50.805201],[-1.308598,50.814798],[-1.308428,50.816029],[-1.309453,50.817263],[-1.311475,50.813429],[-1.325975,50.816507],[-1.325941,50.816685],[-1.326091,50.816603],[-1.325935,50.816715],[-1.324104,50.826193],[-1.339417,50.826643],[-1.34027,50.842691],[-1.360563,50.842874],[-1.357472,50.849502],[-1.378243,50.854641],[-1.426645,50.89676],[-1.432583,50.897478],[-1.459115,50.900682],[-1.478258,50.911936],[-1.48776,50.907578],[-1.488988,50.910268],[-1.490754,50.915852],[-1.48878,50.910398],[-1.478993,50.916539],[-1.474054,50.911698],[-1.481976,50.92831],[-1.484103,50.930497],[-1.503077,50.936193],[-1.509969,50.950108],[-1.531084,50.951237],[-1.544532,50.969281],[-1.584075,50.962118],[-1.590083,50.951264],[-1.619751,50.958567]]]]}',
      metadata: ["New Forest"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.731094,51.280362],[-0.744167,51.309295],[-0.762903,51.318731],[-0.778651,51.317486],[-0.797277,51.303924],[-0.80239,51.292759],[-0.790292,51.282196],[-0.807524,51.275292],[-0.80475,51.245065],[-0.80174,51.239039],[-0.776089,51.241956],[-0.74554,51.230456],[-0.729326,51.256112],[-0.731094,51.280362]]]}',
      metadata: ["Rushmoor"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.498299,51.329376],[-1.527507,51.338466],[-1.533562,51.316224],[-1.519511,51.295939],[-1.522807,51.287058],[-1.542584,51.281251],[-1.540513,51.260833],[-1.52982,51.260514],[-1.536035,51.24853],[-1.54516,51.245098],[-1.577636,51.255631],[-1.607426,51.25277],[-1.633541,51.217516],[-1.689695,51.214828],[-1.694097,51.204043],[-1.668835,51.190772],[-1.672368,51.178544],[-1.654044,51.156283],[-1.662975,51.127192],[-1.62625,51.117338],[-1.637311,51.092165],[-1.627729,51.078011],[-1.63494,51.040561],[-1.632376,51.03278],[-1.599397,51.023729],[-1.597339,51.009753],[-1.628885,50.999032],[-1.619642,50.982996],[-1.602923,50.978522],[-1.619751,50.958567],[-1.590083,50.951264],[-1.584075,50.962118],[-1.544532,50.969281],[-1.531084,50.951237],[-1.509969,50.950108],[-1.503077,50.936193],[-1.484103,50.930497],[-1.485713,50.932152],[-1.485781,50.932912],[-1.485086,50.932786],[-1.481713,50.9303],[-1.478164,50.928835],[-1.479648,50.934579],[-1.477322,50.928547],[-1.477077,50.928698],[-1.47706,50.928669],[-1.449546,50.949911],[-1.423663,50.947233],[-1.40614,50.956127],[-1.379892,50.947518],[-1.374034,50.953976],[-1.396466,50.968503],[-1.392975,51.004361],[-1.441891,51.025166],[-1.456471,51.040972],[-1.441025,51.05735],[-1.41547,51.062672],[-1.411643,51.069709],[-1.414535,51.095692],[-1.436293,51.097889],[-1.436132,51.112379],[-1.431417,51.116786],[-1.407535,51.11113],[-1.407277,51.120484],[-1.370223,51.129142],[-1.377764,51.136331],[-1.347696,51.159525],[-1.336877,51.159106],[-1.308823,51.194739],[-1.340939,51.184579],[-1.341245,51.205443],[-1.358178,51.212021],[-1.368862,51.202407],[-1.383666,51.2149],[-1.428095,51.225036],[-1.428715,51.234414],[-1.45994,51.255562],[-1.416766,51.283069],[-1.428651,51.30039],[-1.418409,51.326478],[-1.429693,51.33653],[-1.498299,51.329376]]]}',
      metadata: ["Test Valley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.131805,51.143623],[-1.174289,51.13354],[-1.184445,51.144311],[-1.213398,51.151951],[-1.21436,51.158705],[-1.185572,51.163989],[-1.191663,51.18472],[-1.206561,51.180702],[-1.228212,51.190568],[-1.308823,51.194739],[-1.336877,51.159106],[-1.347696,51.159525],[-1.377764,51.136331],[-1.370223,51.129142],[-1.407277,51.120484],[-1.407535,51.11113],[-1.431417,51.116786],[-1.436132,51.112379],[-1.436293,51.097889],[-1.414535,51.095692],[-1.411643,51.069709],[-1.41547,51.062672],[-1.441025,51.05735],[-1.456471,51.040972],[-1.441891,51.025166],[-1.392975,51.004361],[-1.353468,50.998159],[-1.342765,50.990889],[-1.346635,50.981342],[-1.327678,50.98012],[-1.322366,50.987653],[-1.290575,50.98287],[-1.293428,50.974145],[-1.258154,50.978342],[-1.29248,50.9487],[-1.264674,50.926275],[-1.265316,50.897979],[-1.255243,50.873103],[-1.230327,50.86077],[-1.215957,50.875049],[-1.197961,50.875896],[-1.195813,50.885],[-1.167218,50.889433],[-1.150002,50.879382],[-1.143187,50.858501],[-1.115848,50.858272],[-1.054015,50.856551],[-1.054617,50.867449],[-1.047381,50.86575],[-1.035022,50.88063],[-1.049131,50.891466],[-1.034116,50.904163],[-1.048479,50.902641],[-1.03569,50.951517],[-1.046166,50.954577],[-1.045236,50.968632],[-1.063366,50.977692],[-1.069513,50.993695],[-1.062341,51.020329],[-1.074503,51.032623],[-1.053741,51.047186],[-1.081683,51.046426],[-1.108544,51.086199],[-1.072073,51.107086],[-1.093925,51.107768],[-1.095043,51.140346],[-1.112017,51.136586],[-1.131805,51.143623]]]}',
      metadata: ["Winchester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.014029,51.76438],[0.005574,51.780069],[-0.018133,51.780519],[-0.021676,51.773535],[-0.047896,51.768813],[-0.058309,51.734702],[-0.098654,51.735946],[-0.114083,51.720807],[-0.105779,51.691876],[-0.011919,51.680878],[-0.019743,51.703216],[-0.013511,51.742217],[0.001168,51.745056],[0.014029,51.76438]]]}',
      metadata: ["Broxbourne"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.404859,51.840607],[-0.421501,51.850205],[-0.447525,51.847602],[-0.47042,51.85571],[-0.478298,51.853137],[-0.471196,51.845468],[-0.501818,51.836795],[-0.511193,51.825894],[-0.502283,51.815459],[-0.519729,51.805095],[-0.553629,51.826713],[-0.560656,51.830083],[-0.581826,51.806905],[-0.63294,51.819946],[-0.667187,51.815804],[-0.695451,51.84111],[-0.686768,51.84924],[-0.696389,51.858137],[-0.720268,51.856147],[-0.745249,51.838376],[-0.723653,51.817773],[-0.709295,51.82054],[-0.685394,51.800186],[-0.690191,51.792339],[-0.669664,51.76616],[-0.612936,51.747427],[-0.58638,51.752116],[-0.574879,51.736969],[-0.553645,51.734018],[-0.550414,51.723043],[-0.56321,51.71188],[-0.544017,51.696817],[-0.548696,51.682671],[-0.524273,51.682113],[-0.515495,51.706578],[-0.464105,51.695352],[-0.440261,51.701014],[-0.450085,51.725532],[-0.42208,51.740837],[-0.422832,51.76599],[-0.440584,51.786878],[-0.413368,51.791185],[-0.411968,51.800279],[-0.428829,51.806765],[-0.414112,51.819086],[-0.416276,51.835761],[-0.404859,51.840607]]]}',
      metadata: ["Dacorum"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.255136,51.729537],[-0.26479,51.738019],[-0.284303,51.732998],[-0.286409,51.721105],[-0.276954,51.721285],[-0.301976,51.708067],[-0.300019,51.696525],[-0.322332,51.69348],[-0.326857,51.703483],[-0.354108,51.69894],[-0.355325,51.690598],[-0.371999,51.687591],[-0.375358,51.692512],[-0.368766,51.678327],[-0.386808,51.663227],[-0.371634,51.643434],[-0.377373,51.637733],[-0.362621,51.623505],[-0.316672,51.640536],[-0.30445,51.636349],[-0.257333,51.641832],[-0.250583,51.656057],[-0.212135,51.661354],[-0.203353,51.670126],[-0.191067,51.663897],[-0.181961,51.668683],[-0.163493,51.688115],[-0.163118,51.699858],[-0.183327,51.706522],[-0.219914,51.713724],[-0.238972,51.706142],[-0.255136,51.729537]]]}',
      metadata: ["Hertsmere"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.068127,52.005789],[0.040306,52.053327],[0.004083,52.049793],[-0.01928,52.063536],[-0.126568,52.020922],[-0.13373,52.046233],[-0.155121,52.053061],[-0.147505,52.069403],[-0.157281,52.080547],[-0.172619,52.06021],[-0.194983,52.062415],[-0.219493,52.036741],[-0.201256,52.009825],[-0.244079,51.999023],[-0.247983,51.98508],[-0.270626,51.979622],[-0.282416,52.001564],[-0.296089,52.002192],[-0.311555,51.98211],[-0.367158,51.983761],[-0.349264,51.97117],[-0.350225,51.957578],[-0.374105,51.947769],[-0.382989,51.951818],[-0.37963,51.977958],[-0.391303,51.977021],[-0.405607,51.932454],[-0.385616,51.91568],[-0.37749,51.898433],[-0.349899,51.878708],[-0.354834,51.874015],[-0.339486,51.849606],[-0.319398,51.836655],[-0.273535,51.835365],[-0.247791,51.84623],[-0.241624,51.835299],[-0.22491,51.833234],[-0.225758,51.844544],[-0.212926,51.851396],[-0.205963,51.846399],[-0.214571,51.839603],[-0.198912,51.844146],[-0.20669,51.854263],[-0.196832,51.85938],[-0.172785,51.856588],[-0.164495,51.861833],[-0.173585,51.875331],[-0.191903,51.882924],[-0.204204,51.880138],[-0.234372,51.905255],[-0.22657,51.930114],[-0.184606,51.932413],[-0.162181,51.920341],[-0.145626,51.933989],[-0.119283,51.928298],[-0.120165,51.942188],[-0.110154,51.941901],[-0.107012,51.953959],[-0.074657,51.971164],[-0.06554,51.956845],[-0.04019,51.967701],[-0.048201,51.979449],[-0.030629,51.983814],[-0.023734,51.99717],[-0.003036,51.993446],[0.00247,51.983054],[0.035026,51.989629],[0.069061,51.984043],[0.068127,52.005789]]]}',
      metadata: ["North Hertfordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.375558,51.692912],[-0.380775,51.706989],[-0.404991,51.712544],[-0.40246,51.721159],[-0.42208,51.740837],[-0.450085,51.725532],[-0.440261,51.701014],[-0.464105,51.695352],[-0.515495,51.706578],[-0.524273,51.682113],[-0.505108,51.673077],[-0.520995,51.668045],[-0.522778,51.658398],[-0.536892,51.660624],[-0.539261,51.638039],[-0.520595,51.601844],[-0.500596,51.59969],[-0.496846,51.631733],[-0.457131,51.612294],[-0.440575,51.620073],[-0.404004,51.613184],[-0.362621,51.623505],[-0.377373,51.637733],[-0.431121,51.642096],[-0.424448,51.654982],[-0.439543,51.67275],[-0.428291,51.670554],[-0.431448,51.682352],[-0.402413,51.701943],[-0.375558,51.692912]]]}',
      metadata: ["Three Rivers"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.375558,51.692912],[-0.402413,51.701943],[-0.431448,51.682352],[-0.428291,51.670554],[-0.439543,51.67275],[-0.424448,51.654982],[-0.431121,51.642096],[-0.377373,51.637733],[-0.371634,51.643434],[-0.386808,51.663227],[-0.368766,51.678327],[-0.375358,51.692512],[-0.375558,51.692912]]]}',
      metadata: ["Watford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.973279,51.268595],[0.955032,51.270246],[0.949122,51.256034],[0.923651,51.259393],[0.91953,51.251103],[0.863494,51.238872],[0.859874,51.230838],[0.841768,51.237102],[0.822169,51.224348],[0.795118,51.228534],[0.792658,51.238073],[0.782455,51.239365],[0.745478,51.209326],[0.716902,51.211182],[0.709782,51.199618],[0.683746,51.191126],[0.684947,51.178696],[0.664551,51.171348],[0.639475,51.141293],[0.603697,51.131718],[0.609024,51.117869],[0.590369,51.11134],[0.596624,51.09025],[0.629378,51.091421],[0.646675,51.083281],[0.611717,51.063546],[0.5935,51.041852],[0.605391,51.01207],[0.661355,51.017787],[0.676956,51.003299],[0.706771,50.993602],[0.740611,51.000677],[0.778957,50.989492],[0.830872,51.049371],[0.839094,51.031354],[0.85481,51.031763],[0.853441,51.043149],[0.869685,51.044113],[0.870435,51.05231],[0.894482,51.036986],[0.903325,51.050462],[0.934274,51.061147],[0.944753,51.054869],[0.968929,51.062926],[0.967347,51.076898],[0.985173,51.0976],[0.979767,51.112187],[0.995589,51.122371],[1.012118,51.1172],[1.029241,51.132538],[1.008622,51.145003],[1.016923,51.161201],[0.998437,51.164741],[1.00397,51.180053],[0.9894,51.190233],[1.005398,51.208486],[0.986174,51.235868],[0.998202,51.251366],[0.973279,51.268595]]]}',
      metadata: ["Ashford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.250098,51.329336],[1.213831,51.356772],[1.212874,51.366044],[1.229274,51.365146],[1.224832,51.37934],[1.224183,51.379333],[1.159689,51.374724],[1.033181,51.365577],[1.005246,51.3492],[0.950462,51.345608],[0.958152,51.337954],[0.971965,51.338244],[1.016985,51.312935],[1.006659,51.309637],[1.005968,51.283783],[0.973279,51.268595],[0.998202,51.251366],[0.986174,51.235868],[1.005398,51.208486],[0.9894,51.190233],[1.00397,51.180053],[1.049578,51.184988],[1.058258,51.205004],[1.091198,51.189016],[1.108972,51.186962],[1.118146,51.196328],[1.116033,51.1878],[1.147638,51.177178],[1.15363,51.190911],[1.163444,51.184215],[1.180839,51.19048],[1.194578,51.184144],[1.222194,51.207395],[1.197144,51.219636],[1.185549,51.21782],[1.211545,51.252427],[1.192641,51.257189],[1.194823,51.269317],[1.212346,51.282689],[1.200001,51.291573],[1.205084,51.30081],[1.229384,51.316066],[1.220546,51.323697],[1.234174,51.326126],[1.232297,51.332324],[1.250098,51.329336]]]}',
      metadata: ["Canterbury"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.315244,51.464904],[0.301805,51.461203],[0.274501,51.453676],[0.221174,51.478801],[0.203353,51.454328],[0.172854,51.443245],[0.164328,51.428585],[0.155875,51.430877],[0.152932,51.408708],[0.199759,51.417976],[0.213529,51.404849],[0.207532,51.396844],[0.238273,51.3963],[0.245745,51.407712],[0.274894,51.407457],[0.336679,51.386544],[0.344624,51.393411],[0.326328,51.442803],[0.310685,51.453045],[0.315244,51.464904]]]}',
      metadata: ["Dartford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.250098,51.329336],[1.232297,51.332324],[1.234174,51.326126],[1.220546,51.323697],[1.229384,51.316066],[1.205084,51.30081],[1.200001,51.291573],[1.212346,51.282689],[1.194823,51.269317],[1.192641,51.257189],[1.211545,51.252427],[1.185549,51.21782],[1.197144,51.219636],[1.222194,51.207395],[1.194578,51.184144],[1.180839,51.19048],[1.163444,51.184215],[1.15363,51.190911],[1.147638,51.177178],[1.143731,51.165776],[1.160999,51.158307],[1.170735,51.163136],[1.190659,51.154016],[1.207678,51.156834],[1.211065,51.151477],[1.171554,51.124237],[1.197368,51.118149],[1.194939,51.10303],[1.204372,51.097192],[1.220013,51.097498],[1.221142,51.098089],[1.226443,51.098507],[1.29904,51.112278],[1.300238,51.11268],[1.302303,51.113373],[1.317272,51.112198],[1.327887,51.111363],[1.313655,51.114785],[1.317655,51.114488],[1.310114,51.11679],[1.323073,51.114085],[1.316506,51.123045],[1.338474,51.127428],[1.343334,51.121768],[1.342738,51.130212],[1.342908,51.130259],[1.342871,51.131005],[1.376768,51.140804],[1.395378,51.156465],[1.405371,51.174734],[1.404923,51.223758],[1.394604,51.255837],[1.380824,51.290282],[1.371361,51.313905],[1.357892,51.311492],[1.358463,51.312003],[1.345305,51.307973],[1.250098,51.329336]]]}',
      metadata: ["Dover"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.45756,51.458296],[0.459296,51.45553],[0.440255,51.447425],[0.381992,51.443505],[0.325274,51.450241],[0.315395,51.464946],[0.315244,51.464904],[0.310685,51.453045],[0.326328,51.442803],[0.344624,51.393411],[0.336679,51.386544],[0.341604,51.329216],[0.380221,51.329836],[0.37911,51.338022],[0.401283,51.352955],[0.431109,51.388033],[0.453322,51.391379],[0.451853,51.398321],[0.467687,51.398301],[0.47514,51.412947],[0.489235,51.415326],[0.48796,51.443285],[0.45756,51.458296]]]}',
      metadata: ["Gravesham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.601404,51.333301],[0.563457,51.338743],[0.544004,51.327896],[0.525641,51.334717],[0.511616,51.306435],[0.492519,51.304567],[0.499044,51.296775],[0.477656,51.272275],[0.432525,51.27012],[0.431312,51.2491],[0.409578,51.253012],[0.378699,51.235044],[0.408802,51.221668],[0.400345,51.198572],[0.384255,51.198262],[0.416401,51.180548],[0.440754,51.176513],[0.467697,51.156206],[0.469385,51.143067],[0.496896,51.144776],[0.533106,51.134153],[0.56195,51.143259],[0.559065,51.133945],[0.579306,51.144636],[0.575673,51.156113],[0.593516,51.153305],[0.601856,51.159016],[0.6172,51.148276],[0.64034,51.152474],[0.632545,51.145296],[0.639475,51.141293],[0.664551,51.171348],[0.684947,51.178696],[0.683746,51.191126],[0.709782,51.199618],[0.716902,51.211182],[0.745478,51.209326],[0.782455,51.239365],[0.792658,51.238073],[0.790547,51.261781],[0.776784,51.266564],[0.761955,51.256378],[0.749641,51.258644],[0.760064,51.279314],[0.743627,51.278577],[0.713817,51.299408],[0.673845,51.293272],[0.664321,51.328929],[0.639452,51.336756],[0.613412,51.334939],[0.604424,51.325697],[0.601404,51.333301]]]}',
      metadata: ["Maidstone"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.336679,51.386544],[0.274894,51.407457],[0.245745,51.407712],[0.238273,51.3963],[0.207532,51.396844],[0.213529,51.404849],[0.199759,51.417976],[0.152932,51.408708],[0.148869,51.408429],[0.162384,51.39249],[0.147741,51.392801],[0.152058,51.369694],[0.136958,51.344175],[0.118456,51.344148],[0.117904,51.329663],[0.085029,51.316023],[0.085693,51.293084],[0.042396,51.292673],[0.058243,51.247778],[0.033599,51.214338],[0.0526,51.180624],[0.050017,51.14265],[0.133117,51.147279],[0.160748,51.137319],[0.180372,51.13179],[0.212148,51.151615],[0.190971,51.171378],[0.226962,51.184154],[0.250811,51.200577],[0.207917,51.210589],[0.201946,51.220553],[0.21234,51.224598],[0.200542,51.233759],[0.223083,51.244906],[0.230963,51.23223],[0.247013,51.237686],[0.247332,51.255294],[0.263841,51.255786],[0.258453,51.297292],[0.265144,51.313637],[0.284563,51.325012],[0.285766,51.344995],[0.304675,51.350806],[0.30689,51.343126],[0.341604,51.329216],[0.336679,51.386544]]]}',
      metadata: ["Sevenoaks"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.147638,51.177178],[1.116033,51.1878],[1.118146,51.196328],[1.108972,51.186962],[1.091198,51.189016],[1.058258,51.205004],[1.049578,51.184988],[1.00397,51.180053],[0.998437,51.164741],[1.016923,51.161201],[1.008622,51.145003],[1.029241,51.132538],[1.012118,51.1172],[0.995589,51.122371],[0.979767,51.112187],[0.985173,51.0976],[0.967347,51.076898],[0.968929,51.062926],[0.944753,51.054869],[0.934274,51.061147],[0.903325,51.050462],[0.894482,51.036986],[0.870435,51.05231],[0.869685,51.044113],[0.853441,51.043149],[0.85481,51.031763],[0.839094,51.031354],[0.830872,51.049371],[0.778957,50.989492],[0.777135,50.975428],[0.784328,50.97723],[0.812942,50.942],[0.841401,50.957609],[0.855968,50.953129],[0.867891,50.933262],[0.854954,50.923922],[0.855079,50.92391],[0.97794,50.912221],[0.978011,50.912456],[0.970986,50.941615],[0.96443,50.968799],[0.982065,50.999259],[0.985935,51.009248],[0.989925,51.012822],[0.996748,51.024587],[1.060448,51.059119],[1.07002,51.060323],[1.07577,51.06314],[1.194779,51.075956],[1.185506,51.079422],[1.205855,51.090085],[1.20589,51.091037],[1.215055,51.094903],[1.220013,51.097498],[1.204372,51.097192],[1.194939,51.10303],[1.197368,51.118149],[1.171554,51.124237],[1.211065,51.151477],[1.207678,51.156834],[1.190659,51.154016],[1.170735,51.163136],[1.160999,51.158307],[1.143731,51.165776],[1.147638,51.177178]]]}',
      metadata: ["Folkestone and Hythe"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.682969,51.412645],[0.665929,51.406282],[0.672639,51.398406],[0.69451,51.396764],[0.682969,51.412645]]],[[[0.950462,51.345608],[0.950403,51.345604],[0.896773,51.341438],[0.915341,51.329378],[0.894603,51.336339],[0.880106,51.328668],[0.897167,51.344191],[0.870974,51.354043],[0.866161,51.355852],[0.817193,51.356353],[0.816233,51.346181],[0.813562,51.358487],[0.766854,51.362319],[0.734508,51.345713],[0.764353,51.362868],[0.763713,51.381956],[0.726279,51.399143],[0.716211,51.413102],[0.727789,51.420448],[0.696545,51.419996],[0.714357,51.384177],[0.695247,51.379791],[0.70292,51.392438],[0.686969,51.391661],[0.670097,51.373292],[0.648011,51.397555],[0.62695,51.374746],[0.634545,51.389068],[0.63237,51.388936],[0.626122,51.378813],[0.623293,51.369223],[0.634908,51.36637],[0.601404,51.333301],[0.604424,51.325697],[0.613412,51.334939],[0.639452,51.336756],[0.664321,51.328929],[0.673845,51.293272],[0.713817,51.299408],[0.743627,51.278577],[0.760064,51.279314],[0.749641,51.258644],[0.761955,51.256378],[0.776784,51.266564],[0.790547,51.261781],[0.792658,51.238073],[0.795118,51.228534],[0.822169,51.224348],[0.841768,51.237102],[0.859874,51.230838],[0.863494,51.238872],[0.91953,51.251103],[0.923651,51.259393],[0.949122,51.256034],[0.955032,51.270246],[0.973279,51.268595],[1.005968,51.283783],[1.006659,51.309637],[1.016985,51.312935],[0.971965,51.338244],[0.958152,51.337954],[0.950462,51.345608]]],[[[0.678799,51.423519],[0.660058,51.417626],[0.687777,51.414434],[0.678799,51.423519]]],[[[0.901367,51.416826],[0.875095,51.419823],[0.823924,51.425642],[0.791397,51.439331],[0.780871,51.441305],[0.749377,51.446059],[0.735437,51.424373],[0.74688,51.415338],[0.732453,51.408946],[0.721659,51.414425],[0.732678,51.400277],[0.764273,51.388261],[0.766187,51.36997],[0.806291,51.372289],[0.839447,51.363645],[0.851299,51.364834],[0.840528,51.371647],[0.856695,51.364926],[0.857698,51.370398],[0.871641,51.364721],[0.896804,51.354468],[0.950173,51.372132],[0.901367,51.416826]]]]}',
      metadata: ["Swale"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.358463,51.312003],[1.377755,51.32926],[1.423554,51.324339],[1.41457,51.327492],[1.423178,51.331376],[1.424691,51.326007],[1.445905,51.358397],[1.445904,51.358442],[1.441937,51.387167],[1.424961,51.393778],[1.392337,51.393222],[1.38363,51.392025],[1.315074,51.380313],[1.224832,51.37934],[1.229274,51.365146],[1.212874,51.366044],[1.213831,51.356772],[1.250098,51.329336],[1.345305,51.307973],[1.358463,51.312003]]]}',
      metadata: ["Thanet"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.525641,51.334717],[0.505846,51.342937],[0.503027,51.354719],[0.456234,51.368763],[0.453486,51.34061],[0.418595,51.347912],[0.39992,51.344457],[0.401283,51.352955],[0.37911,51.338022],[0.380221,51.329836],[0.341604,51.329216],[0.30689,51.343126],[0.304675,51.350806],[0.285766,51.344995],[0.284563,51.325012],[0.265144,51.313637],[0.258453,51.297292],[0.263841,51.255786],[0.247332,51.255294],[0.247013,51.237686],[0.230963,51.23223],[0.223083,51.244906],[0.200542,51.233759],[0.21234,51.224598],[0.201946,51.220553],[0.207917,51.210589],[0.250811,51.200577],[0.226962,51.184154],[0.277306,51.174693],[0.308817,51.199959],[0.341687,51.192789],[0.367514,51.194872],[0.369168,51.201617],[0.384255,51.198262],[0.400345,51.198572],[0.408802,51.221668],[0.378699,51.235044],[0.409578,51.253012],[0.431312,51.2491],[0.432525,51.27012],[0.477656,51.272275],[0.499044,51.296775],[0.492519,51.304567],[0.511616,51.306435],[0.525641,51.334717]]]}',
      metadata: ["Tonbridge and Malling"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.384255,51.198262],[0.369168,51.201617],[0.367514,51.194872],[0.341687,51.192789],[0.308817,51.199959],[0.277306,51.174693],[0.226962,51.184154],[0.190971,51.171378],[0.212148,51.151615],[0.180372,51.13179],[0.160748,51.137319],[0.151201,51.12383],[0.171628,51.11541],[0.226284,51.124468],[0.244534,51.11488],[0.275671,51.112355],[0.273935,51.120079],[0.325177,51.122917],[0.334703,51.105565],[0.35896,51.104479],[0.35082,51.084068],[0.373904,51.088465],[0.396474,51.083096],[0.418267,51.062627],[0.463267,51.054787],[0.472315,51.030442],[0.5376,51.021674],[0.541907,51.011006],[0.568381,51.003815],[0.605391,51.01207],[0.5935,51.041852],[0.611717,51.063546],[0.646675,51.083281],[0.629378,51.091421],[0.596624,51.09025],[0.590369,51.11134],[0.609024,51.117869],[0.603697,51.131718],[0.639475,51.141293],[0.632545,51.145296],[0.64034,51.152474],[0.6172,51.148276],[0.601856,51.159016],[0.593516,51.153305],[0.575673,51.156113],[0.579306,51.144636],[0.559065,51.133945],[0.56195,51.143259],[0.533106,51.134153],[0.496896,51.144776],[0.469385,51.143067],[0.467697,51.156206],[0.440754,51.176513],[0.416401,51.180548],[0.384255,51.198262]]]}',
      metadata: ["Tunbridge Wells"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.112279,53.805708],[-2.128623,53.819796],[-2.196095,53.825277],[-2.20754,53.811404],[-2.22397,53.81785],[-2.261069,53.807767],[-2.269805,53.815004],[-2.294694,53.808439],[-2.301965,53.821079],[-2.313205,53.812465],[-2.342306,53.794827],[-2.314109,53.747039],[-2.295272,53.75199],[-2.268597,53.742281],[-2.251685,53.755043],[-2.232654,53.737635],[-2.173294,53.723012],[-2.131174,53.751544],[-2.136363,53.780104],[-2.124816,53.788055],[-2.128359,53.799031],[-2.112279,53.805708]]]}',
      metadata: ["Burnley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.561602,53.746901],[-2.577237,53.751146],[-2.611855,53.738571],[-2.629755,53.717292],[-2.651929,53.711964],[-2.658449,53.717696],[-2.671492,53.710805],[-2.677595,53.693699],[-2.658028,53.690695],[-2.658823,53.680685],[-2.708206,53.68153],[-2.71254,53.671334],[-2.73355,53.674283],[-2.730039,53.686214],[-2.746602,53.692708],[-2.820127,53.687138],[-2.821473,53.662625],[-2.795953,53.615962],[-2.781001,53.623471],[-2.758735,53.614652],[-2.736168,53.623685],[-2.70969,53.617809],[-2.694568,53.626645],[-2.699449,53.614299],[-2.689313,53.604303],[-2.634592,53.608283],[-2.625907,53.593683],[-2.595926,53.610815],[-2.569278,53.595597],[-2.511323,53.626995],[-2.532344,53.664902],[-2.515375,53.691669],[-2.539793,53.702192],[-2.561602,53.746901]]]}',
      metadata: ["Chorley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.794018,53.751782],[-2.803834,53.749116],[-2.7939,53.751296],[-2.794018,53.751782]]],[[[-2.794018,53.751782],[-2.798612,53.770788],[-2.780531,53.78795],[-2.825994,53.819987],[-2.84087,53.831278],[-2.869423,53.830913],[-2.857587,53.842607],[-2.890146,53.846039],[-2.875561,53.857933],[-2.904325,53.864846],[-2.94364,53.850724],[-2.956418,53.861294],[-2.974981,53.863154],[-2.981924,53.858176],[-2.96557,53.847311],[-2.961778,53.828347],[-3.010653,53.826194],[-2.995004,53.818489],[-2.983357,53.793803],[-3.003887,53.791342],[-2.996478,53.774504],[-3.028801,53.773117],[-3.032823,53.780862],[-3.057105,53.776535],[-3.038742,53.74719],[-2.976407,53.734047],[-2.944998,53.736152],[-2.952976,53.73293],[-2.933805,53.73168],[-2.91098,53.732594],[-2.899106,53.733068],[-2.856862,53.738201],[-2.858716,53.750638],[-2.855546,53.738386],[-2.794018,53.751782]]]]}',
      metadata: ["Fylde"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.342306,53.794827],[-2.365575,53.793105],[-2.369953,53.801538],[-2.398512,53.803334],[-2.396737,53.816619],[-2.465808,53.780813],[-2.446317,53.76659],[-2.45178,53.756454],[-2.440068,53.749418],[-2.433869,53.719182],[-2.410989,53.705137],[-2.344184,53.72245],[-2.325771,53.734354],[-2.326148,53.747336],[-2.314109,53.747039],[-2.342306,53.794827]]]}',
      metadata: ["Hyndburn"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.460863,54.226716],[-2.459585,54.239568],[-2.576078,54.195595],[-2.624957,54.195569],[-2.639964,54.202045],[-2.679876,54.161135],[-2.736489,54.169027],[-2.734387,54.184111],[-2.768232,54.185964],[-2.798982,54.197741],[-2.837217,54.174172],[-2.837914,54.174226],[-2.828336,54.153294],[-2.810594,54.155001],[-2.827825,54.147555],[-2.824556,54.140333],[-2.809815,54.132327],[-2.802057,54.143342],[-2.79841,54.127392],[-2.780296,54.135605],[-2.8266,54.100433],[-2.821496,54.08897],[-2.814273,54.094911],[-2.819497,54.088841],[-2.846633,54.077638],[-2.870103,54.076251],[-2.882427,54.072379],[-2.906272,54.039395],[-2.917565,54.034335],[-2.918767,54.033796],[-2.912419,54.033762],[-2.921467,54.032586],[-2.921749,54.032459],[-2.924431,54.031257],[-2.917428,54.028146],[-2.904027,54.022189],[-2.900132,53.99198],[-2.886063,53.991051],[-2.887322,54.001792],[-2.881015,53.989473],[-2.877916,54.006284],[-2.864733,54.005036],[-2.870984,54.014429],[-2.860492,54.003867],[-2.84494,54.014858],[-2.853311,54.005579],[-2.835189,54.011084],[-2.832765,53.998505],[-2.82297,53.99486],[-2.856046,53.999573],[-2.879238,53.979139],[-2.871948,53.970311],[-2.835871,53.963746],[-2.853963,53.965214],[-2.836333,53.95463],[-2.861876,53.964625],[-2.857248,53.957606],[-2.869376,53.959748],[-2.861036,53.955037],[-2.886784,53.958355],[-2.864092,53.953332],[-2.881738,53.946591],[-2.87965,53.945461],[-2.88063,53.94395],[-2.88027,53.943491],[-2.881023,53.943345],[-2.885245,53.936839],[-2.864367,53.91808],[-2.803688,53.935754],[-2.813645,53.945849],[-2.796422,53.97547],[-2.757868,53.963109],[-2.755375,53.952331],[-2.741476,53.956857],[-2.735237,53.974526],[-2.715656,53.980244],[-2.702049,53.943556],[-2.687917,53.949702],[-2.648217,53.948922],[-2.643043,53.957588],[-2.616902,53.952212],[-2.557526,53.974912],[-2.580653,54.000118],[-2.572186,54.014623],[-2.547106,54.014077],[-2.52731,54.026245],[-2.501419,54.020754],[-2.492257,54.040074],[-2.46955,54.046212],[-2.464347,54.075279],[-2.509526,54.095425],[-2.52401,54.094622],[-2.564741,54.127038],[-2.560504,54.153052],[-2.533979,54.157693],[-2.460863,54.226716]]]}',
      metadata: ["Lancaster"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.04613,53.850141],[-2.089915,53.868182],[-2.081447,53.87568],[-2.103019,53.890941],[-2.113346,53.915627],[-2.132224,53.926509],[-2.182281,53.93539],[-2.184522,53.952264],[-2.245841,53.933263],[-2.224317,53.890616],[-2.319118,53.861512],[-2.317928,53.846922],[-2.333645,53.840631],[-2.302573,53.836395],[-2.317137,53.827854],[-2.313205,53.812465],[-2.301965,53.821079],[-2.294694,53.808439],[-2.269805,53.815004],[-2.261069,53.807767],[-2.22397,53.81785],[-2.20754,53.811404],[-2.196095,53.825277],[-2.128623,53.819796],[-2.112279,53.805708],[-2.061251,53.825635],[-2.046925,53.82951],[-2.04613,53.850141]]]}',
      metadata: ["Pendle"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.599488,53.781471],[-2.595669,53.796642],[-2.624714,53.815565],[-2.607898,53.838772],[-2.62936,53.859987],[-2.625381,53.880298],[-2.645231,53.893758],[-2.685707,53.890943],[-2.709817,53.853642],[-2.746386,53.85103],[-2.736158,53.823446],[-2.759264,53.826371],[-2.770689,53.84042],[-2.800135,53.833138],[-2.797864,53.824588],[-2.825994,53.819987],[-2.780531,53.78795],[-2.798612,53.770788],[-2.794018,53.751782],[-2.7939,53.751296],[-2.732037,53.757642],[-2.712365,53.748233],[-2.678987,53.753035],[-2.665913,53.748517],[-2.656568,53.760558],[-2.622092,53.770876],[-2.633858,53.782376],[-2.599488,53.781471]]]}',
      metadata: ["Preston"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.184522,53.952264],[-2.196018,53.969576],[-2.225736,53.961099],[-2.232015,53.97123],[-2.221063,53.977928],[-2.230345,53.98153],[-2.29432,53.974433],[-2.319151,53.993842],[-2.339923,53.989428],[-2.352358,53.994674],[-2.35231,54.010539],[-2.33956,54.009433],[-2.357323,54.019117],[-2.374073,54.049089],[-2.425826,54.038095],[-2.46955,54.046212],[-2.492257,54.040074],[-2.501419,54.020754],[-2.52731,54.026245],[-2.547106,54.014077],[-2.572186,54.014623],[-2.580653,54.000118],[-2.557526,53.974912],[-2.616902,53.952212],[-2.643043,53.957588],[-2.648217,53.948922],[-2.626437,53.938564],[-2.613403,53.908256],[-2.625145,53.894641],[-2.645231,53.893758],[-2.625381,53.880298],[-2.62936,53.859987],[-2.607898,53.838772],[-2.624714,53.815565],[-2.595669,53.796642],[-2.599488,53.781471],[-2.547505,53.775871],[-2.545543,53.769205],[-2.564273,53.762012],[-2.551298,53.756388],[-2.465808,53.780813],[-2.396737,53.816619],[-2.398512,53.803334],[-2.369953,53.801538],[-2.365575,53.793105],[-2.342306,53.794827],[-2.313205,53.812465],[-2.317137,53.827854],[-2.302573,53.836395],[-2.333645,53.840631],[-2.317928,53.846922],[-2.319118,53.861512],[-2.224317,53.890616],[-2.245841,53.933263],[-2.184522,53.952264]]]}',
      metadata: ["Ribble Valley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.173294,53.723012],[-2.232654,53.737635],[-2.251685,53.755043],[-2.268597,53.742281],[-2.295272,53.75199],[-2.314109,53.747039],[-2.326148,53.747336],[-2.325771,53.734354],[-2.344184,53.72245],[-2.410989,53.705137],[-2.398348,53.69156],[-2.374424,53.687254],[-2.371236,53.667081],[-2.316757,53.654987],[-2.298985,53.666705],[-2.295273,53.640395],[-2.271787,53.614514],[-2.256769,53.620398],[-2.269866,53.646137],[-2.245878,53.663522],[-2.217729,53.668981],[-2.205229,53.654349],[-2.182407,53.648258],[-2.185396,53.638224],[-2.161353,53.641374],[-2.146328,53.682232],[-2.173294,53.723012]]]}',
      metadata: ["Rossendale"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.847744,53.726405],[-2.860075,53.73357],[-2.866176,53.732745],[-2.847744,53.726405]]],[[[-2.551298,53.756388],[-2.564273,53.762012],[-2.545543,53.769205],[-2.547505,53.775871],[-2.599488,53.781471],[-2.633858,53.782376],[-2.622092,53.770876],[-2.656568,53.760558],[-2.665913,53.748517],[-2.678987,53.753035],[-2.712365,53.748233],[-2.732037,53.757642],[-2.7939,53.751296],[-2.803834,53.749116],[-2.810297,53.747365],[-2.855388,53.735129],[-2.844669,53.730112],[-2.844978,53.733724],[-2.83596,53.736951],[-2.842826,53.731559],[-2.836099,53.724787],[-2.821194,53.730334],[-2.83546,53.724344],[-2.833022,53.721337],[-2.832424,53.721131],[-2.831853,53.719895],[-2.828311,53.715526],[-2.826994,53.714339],[-2.827664,53.714729],[-2.830128,53.716162],[-2.823982,53.702854],[-2.833133,53.695514],[-2.820127,53.687138],[-2.746602,53.692708],[-2.730039,53.686214],[-2.73355,53.674283],[-2.71254,53.671334],[-2.708206,53.68153],[-2.658823,53.680685],[-2.658028,53.690695],[-2.677595,53.693699],[-2.671492,53.710805],[-2.658449,53.717696],[-2.651929,53.711964],[-2.629755,53.717292],[-2.611855,53.738571],[-2.577237,53.751146],[-2.561602,53.746901],[-2.551298,53.756388]]]]}',
      metadata: ["South Ribble"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.831853,53.719895],[-2.832424,53.721131],[-2.833022,53.721337],[-2.831853,53.719895]]],[[[-2.830128,53.716162],[-2.831417,53.716912],[-2.847744,53.726405],[-2.866176,53.732745],[-2.910853,53.726693],[-2.915122,53.726114],[-2.929326,53.724203],[-2.914269,53.710908],[-2.938284,53.724919],[-2.948153,53.711544],[-2.926178,53.704661],[-2.93184,53.700009],[-2.943797,53.708144],[-2.954968,53.704029],[-2.93668,53.701912],[-2.951122,53.699768],[-2.937098,53.695096],[-2.956228,53.6975],[-2.955446,53.696727],[-2.955204,53.696492],[-2.95415,53.695418],[-2.950461,53.691708],[-2.950306,53.691549],[-2.949758,53.690998],[-2.946786,53.688018],[-2.940143,53.658611],[-2.967259,53.631329],[-2.981823,53.622205],[-2.997889,53.626667],[-3.028822,53.60232],[-3.035986,53.587218],[-3.020709,53.583675],[-3.02262,53.569598],[-3.040388,53.565272],[-3.046699,53.542958],[-2.975826,53.515288],[-2.962964,53.523706],[-2.977614,53.545923],[-2.947893,53.544354],[-2.923009,53.52522],[-2.881716,53.520544],[-2.887994,53.503829],[-2.865155,53.492087],[-2.849836,53.493139],[-2.844421,53.48413],[-2.824964,53.485209],[-2.81674,53.512174],[-2.782476,53.53143],[-2.768872,53.513571],[-2.730521,53.5206],[-2.717926,53.527211],[-2.704819,53.559192],[-2.719223,53.576114],[-2.693352,53.589429],[-2.689313,53.604303],[-2.699449,53.614299],[-2.694568,53.626645],[-2.70969,53.617809],[-2.736168,53.623685],[-2.758735,53.614652],[-2.781001,53.623471],[-2.795953,53.615962],[-2.821473,53.662625],[-2.820127,53.687138],[-2.833133,53.695514],[-2.823982,53.702854],[-2.830128,53.716162]]]]}',
      metadata: ["West Lancashire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.88063,53.94395],[-2.87965,53.945461],[-2.881738,53.946591],[-2.882479,53.946308],[-2.88063,53.94395]]],[[[-2.648217,53.948922],[-2.687917,53.949702],[-2.702049,53.943556],[-2.715656,53.980244],[-2.735237,53.974526],[-2.741476,53.956857],[-2.755375,53.952331],[-2.757868,53.963109],[-2.796422,53.97547],[-2.813645,53.945849],[-2.803688,53.935754],[-2.864367,53.91808],[-2.885245,53.936839],[-2.881023,53.943345],[-2.906157,53.938487],[-2.915512,53.940926],[-2.930095,53.944726],[-2.915618,53.945796],[-2.91068,53.946161],[-2.915655,53.947486],[-2.924998,53.949974],[-2.999572,53.928598],[-3.009456,53.900743],[-3.008478,53.928944],[-3.049783,53.919997],[-3.047735,53.875719],[-3.047856,53.874437],[-3.01975,53.8686],[-3.010653,53.826194],[-2.961778,53.828347],[-2.96557,53.847311],[-2.981924,53.858176],[-2.974981,53.863154],[-2.956418,53.861294],[-2.94364,53.850724],[-2.904325,53.864846],[-2.875561,53.857933],[-2.890146,53.846039],[-2.857587,53.842607],[-2.869423,53.830913],[-2.84087,53.831278],[-2.825994,53.819987],[-2.797864,53.824588],[-2.800135,53.833138],[-2.770689,53.84042],[-2.759264,53.826371],[-2.736158,53.823446],[-2.746386,53.85103],[-2.709817,53.853642],[-2.685707,53.890943],[-2.645231,53.893758],[-2.625145,53.894641],[-2.613403,53.908256],[-2.626437,53.938564],[-2.648217,53.948922]]]]}',
      metadata: ["Wyre"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.185289,52.660644],[-1.199682,52.664402],[-1.232198,52.640747],[-1.261802,52.637066],[-1.240758,52.633617],[-1.261877,52.628212],[-1.257413,52.616253],[-1.274479,52.61617],[-1.274584,52.600984],[-1.298372,52.585874],[-1.296801,52.579817],[-1.269967,52.574797],[-1.272916,52.565972],[-1.302023,52.561389],[-1.323709,52.567794],[-1.334887,52.560193],[-1.334847,52.533025],[-1.317966,52.515117],[-1.325088,52.501042],[-1.305948,52.493395],[-1.231841,52.555379],[-1.202133,52.52744],[-1.184275,52.527499],[-1.121257,52.545187],[-1.075889,52.538866],[-1.059392,52.55893],[-1.082894,52.556579],[-1.09579,52.565553],[-1.123597,52.568913],[-1.130179,52.562248],[-1.143619,52.588025],[-1.149496,52.581024],[-1.160942,52.582531],[-1.15789,52.590822],[-1.174224,52.592926],[-1.165559,52.613081],[-1.215981,52.634534],[-1.207252,52.642588],[-1.190656,52.640394],[-1.185289,52.660644]]]}',
      metadata: ["Blaby"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.036289,52.815877],[-1.071738,52.814011],[-1.074435,52.824727],[-1.116942,52.819577],[-1.130893,52.805827],[-1.163276,52.806522],[-1.197729,52.789412],[-1.225886,52.791678],[-1.261927,52.810453],[-1.276449,52.800328],[-1.27867,52.783177],[-1.318961,52.785389],[-1.334792,52.7631],[-1.332379,52.753018],[-1.304754,52.748465],[-1.287487,52.733972],[-1.266865,52.747451],[-1.251117,52.740873],[-1.247141,52.736369],[-1.282713,52.714642],[-1.280899,52.691816],[-1.259011,52.682072],[-1.244331,52.684464],[-1.226949,52.670004],[-1.21214,52.674446],[-1.199682,52.664402],[-1.185289,52.660644],[-1.178066,52.678035],[-1.157252,52.691523],[-1.143262,52.687157],[-1.129225,52.66539],[-1.118812,52.673186],[-1.075079,52.669626],[-1.048613,52.654996],[-1.013679,52.655081],[-0.980283,52.681853],[-0.960167,52.673107],[-0.948924,52.680381],[-1.007976,52.696393],[-1.015593,52.710824],[-1.001051,52.723662],[-1.019911,52.72698],[-1.030382,52.756186],[-1.045909,52.766032],[-1.036289,52.815877]]]}',
      metadata: ["Charnwood"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.808693,52.646126],[-0.822272,52.647254],[-0.809528,52.657612],[-0.829549,52.658753],[-0.833981,52.672705],[-0.858745,52.673763],[-0.855546,52.684974],[-0.893363,52.673671],[-0.911926,52.677172],[-0.91605,52.671141],[-0.948924,52.680381],[-0.960167,52.673107],[-0.980283,52.681853],[-1.013679,52.655081],[-1.048613,52.654996],[-1.046962,52.63462],[-1.07049,52.618067],[-1.062479,52.604247],[-1.041358,52.59801],[-1.075354,52.574735],[-1.082894,52.556579],[-1.059392,52.55893],[-1.075889,52.538866],[-1.121257,52.545187],[-1.184275,52.527499],[-1.202133,52.52744],[-1.231841,52.555379],[-1.305948,52.493395],[-1.201613,52.396732],[-1.183992,52.392171],[-1.149353,52.397041],[-1.12927,52.416103],[-1.084382,52.436298],[-1.049985,52.422208],[-1.034274,52.436285],[-1.044511,52.445748],[-1.000693,52.47094],[-0.951908,52.477424],[-0.942192,52.467773],[-0.901281,52.459756],[-0.882396,52.471283],[-0.898048,52.486918],[-0.882126,52.493166],[-0.883443,52.51397],[-0.86881,52.526954],[-0.796161,52.516365],[-0.774867,52.518276],[-0.756156,52.510995],[-0.713658,52.524964],[-0.742206,52.539486],[-0.738864,52.548883],[-0.759894,52.564906],[-0.765264,52.58247],[-0.792435,52.597614],[-0.82095,52.596455],[-0.805825,52.620688],[-0.808693,52.646126]]]}',
      metadata: ["Harborough"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.199682,52.664402],[-1.21214,52.674446],[-1.226949,52.670004],[-1.244331,52.684464],[-1.259011,52.682072],[-1.280899,52.691816],[-1.282713,52.714642],[-1.351096,52.694157],[-1.3426,52.690202],[-1.360587,52.676476],[-1.401916,52.67208],[-1.424203,52.684003],[-1.445742,52.663958],[-1.477019,52.677715],[-1.494014,52.669048],[-1.502361,52.677633],[-1.536825,52.665736],[-1.551771,52.667455],[-1.544517,52.644608],[-1.571354,52.635272],[-1.554454,52.614761],[-1.560757,52.596156],[-1.527155,52.582738],[-1.522868,52.570601],[-1.459994,52.55159],[-1.417344,52.534455],[-1.325088,52.501042],[-1.317966,52.515117],[-1.334847,52.533025],[-1.334887,52.560193],[-1.323709,52.567794],[-1.302023,52.561389],[-1.272916,52.565972],[-1.269967,52.574797],[-1.296801,52.579817],[-1.298372,52.585874],[-1.274584,52.600984],[-1.274479,52.61617],[-1.257413,52.616253],[-1.261877,52.628212],[-1.240758,52.633617],[-1.261802,52.637066],[-1.232198,52.640747],[-1.199682,52.664402]]]}',
      metadata: ["Hinckley and Bosworth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.664101,52.75671],[-0.682248,52.812165],[-0.742723,52.883157],[-0.766592,52.886798],[-0.758468,52.90049],[-0.776859,52.904809],[-0.75495,52.949556],[-0.778437,52.959314],[-0.778279,52.976923],[-0.79615,52.976732],[-0.812851,52.957464],[-0.820022,52.960464],[-0.833909,52.945881],[-0.824361,52.94179],[-0.862893,52.913114],[-0.857634,52.905642],[-0.916925,52.878932],[-0.940574,52.876856],[-0.928121,52.866083],[-0.959504,52.843782],[-0.977075,52.840738],[-0.982709,52.820675],[-1.021933,52.822052],[-1.036289,52.815877],[-1.045909,52.766032],[-1.030382,52.756186],[-1.019911,52.72698],[-1.001051,52.723662],[-1.015593,52.710824],[-1.007976,52.696393],[-0.948924,52.680381],[-0.91605,52.671141],[-0.911926,52.677172],[-0.893363,52.673671],[-0.855546,52.684974],[-0.858745,52.673763],[-0.833981,52.672705],[-0.829549,52.658753],[-0.809528,52.657612],[-0.822272,52.647254],[-0.808693,52.646126],[-0.782042,52.669481],[-0.786045,52.694741],[-0.821753,52.715675],[-0.813435,52.72913],[-0.776484,52.743934],[-0.751698,52.736712],[-0.664101,52.75671]]]}',
      metadata: ["Melton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.261927,52.810453],[-1.274363,52.83613],[-1.267889,52.873369],[-1.319307,52.872869],[-1.325332,52.865982],[-1.344863,52.867533],[-1.351173,52.853289],[-1.361211,52.855186],[-1.394323,52.836773],[-1.387936,52.833098],[-1.417704,52.801616],[-1.443562,52.802744],[-1.442391,52.792983],[-1.462779,52.786863],[-1.455882,52.777095],[-1.468445,52.766877],[-1.493984,52.759047],[-1.50498,52.767609],[-1.552787,52.763333],[-1.562493,52.750587],[-1.54464,52.731694],[-1.550041,52.720317],[-1.597541,52.700422],[-1.589645,52.687261],[-1.551771,52.667455],[-1.536825,52.665736],[-1.502361,52.677633],[-1.494014,52.669048],[-1.477019,52.677715],[-1.445742,52.663958],[-1.424203,52.684003],[-1.401916,52.67208],[-1.360587,52.676476],[-1.3426,52.690202],[-1.351096,52.694157],[-1.282713,52.714642],[-1.247141,52.736369],[-1.251117,52.740873],[-1.266865,52.747451],[-1.287487,52.733972],[-1.304754,52.748465],[-1.332379,52.753018],[-1.334792,52.7631],[-1.318961,52.785389],[-1.27867,52.783177],[-1.276449,52.800328],[-1.261927,52.810453]]]}',
      metadata: ["North West Leicestershire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.082894,52.556579],[-1.075354,52.574735],[-1.041358,52.59801],[-1.062479,52.604247],[-1.07049,52.618067],[-1.096614,52.616491],[-1.103651,52.595912],[-1.120171,52.597544],[-1.143619,52.588025],[-1.130179,52.562248],[-1.123597,52.568913],[-1.09579,52.565553],[-1.082894,52.556579]]]}',
      metadata: ["Oadby and Wigston"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.199586,53.032645],[0.192894,53.037682],[0.14971,53.057385],[0.137083,53.086692],[0.087488,53.071645],[0.036202,53.069497],[0.045229,53.030067],[-0.007061,53.00112],[-0.115893,53.010645],[-0.19612,53.069557],[-0.210939,53.069942],[-0.224945,53.029999],[-0.189891,52.99641],[-0.246705,52.928832],[-0.156586,52.912095],[-0.142652,52.884908],[-0.118583,52.88238],[-0.084794,52.864546],[-0.040349,52.868451],[0.027125,52.898494],[0.03812,52.905179],[0.038379,52.905869],[0.053181,52.916181],[0.078379,52.932033],[0.072307,52.932022],[0.079759,52.939201],[0.081916,52.94128],[0.151425,53.008107],[0.199586,53.032645]]]}',
      metadata: ["Boston"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.199586,53.032645],[0.244553,53.04862],[0.236045,53.053054],[0.248588,53.051883],[0.242868,53.057177],[0.248825,53.052194],[0.25824,53.056451],[0.268904,53.063166],[0.257194,53.063775],[0.287476,53.074885],[0.281788,53.080104],[0.288436,53.075736],[0.315672,53.088739],[0.299241,53.09073],[0.318864,53.091071],[0.319193,53.091742],[0.334949,53.0944],[0.334088,53.086734],[0.337606,53.101426],[0.337989,53.101781],[0.349234,53.112168],[0.34938,53.114003],[0.355613,53.19207],[0.321808,53.266469],[0.274451,53.332229],[0.260508,53.359265],[0.231399,53.402401],[0.214158,53.415997],[0.214376,53.408633],[0.212233,53.415793],[0.206383,53.410186],[0.212145,53.416088],[0.21252,53.416068],[0.213085,53.41661],[0.189483,53.417326],[0.21105,53.417396],[0.191214,53.437427],[0.175425,53.436993],[0.190483,53.438297],[0.179382,53.443441],[0.165327,53.473814],[0.173633,53.471022],[0.166168,53.477099],[0.146702,53.492935],[0.138648,53.494898],[0.14321,53.485419],[0.134576,53.484919],[0.129307,53.499222],[0.109426,53.504968],[0.108894,53.505122],[0.109372,53.503864],[0.11288,53.494621],[0.108887,53.494089],[0.102879,53.493288],[0.108698,53.490277],[0.121294,53.483758],[0.108669,53.489698],[0.103866,53.491957],[0.10862,53.488708],[0.115104,53.484277],[0.108409,53.484447],[0.1008,53.484639],[0.101288,53.494571],[0.090734,53.491912],[0.084494,53.499431],[0.086714,53.515663],[0.076557,53.513173],[0.026825,53.529708],[0.061089,53.512373],[0.044425,53.514235],[0.040698,53.507974],[0.036051,53.521686],[0.036921,53.51051],[0.035321,53.519181],[0.020563,53.518403],[0.033515,53.522144],[0.017632,53.525495],[0.015354,53.528122],[-0.014799,53.515369],[-0.065045,53.51874],[-0.075262,53.489336],[-0.095488,53.485989],[-0.089804,53.477682],[-0.107821,53.469863],[-0.082209,53.451151],[-0.120344,53.433565],[-0.131879,53.435939],[-0.180524,53.440702],[-0.214468,53.428638],[-0.206023,53.408435],[-0.229394,53.398058],[-0.204871,53.371886],[-0.255899,53.344142],[-0.255252,53.33004],[-0.275518,53.321827],[-0.293313,53.334477],[-0.310261,53.320003],[-0.295572,53.302982],[-0.317461,53.298251],[-0.316443,53.279472],[-0.301896,53.27534],[-0.300825,53.263974],[-0.289818,53.263989],[-0.300434,53.262088],[-0.280243,53.249765],[-0.276005,53.234184],[-0.302263,53.210425],[-0.28965,53.179366],[-0.226237,53.1249],[-0.219319,53.096251],[-0.196597,53.083438],[-0.19612,53.069557],[-0.115893,53.010645],[-0.007061,53.00112],[0.045229,53.030067],[0.036202,53.069497],[0.087488,53.071645],[0.137083,53.086692],[0.14971,53.057385],[0.192894,53.037682],[0.199586,53.032645]]]}',
      metadata: ["East Lindsey"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.495118,53.225259],[-0.496012,53.247191],[-0.514295,53.253981],[-0.595112,53.24517],[-0.570727,53.229612],[-0.615666,53.221911],[-0.619735,53.208056],[-0.564429,53.187003],[-0.552843,53.186326],[-0.54884,53.205863],[-0.539576,53.203953],[-0.530239,53.2175],[-0.495118,53.225259]]]}',
      metadata: ["Lincoln"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.595112,53.24517],[-0.622481,53.25813],[-0.648377,53.253168],[-0.648464,53.243413],[-0.666577,53.239702],[-0.675872,53.217644],[-0.697616,53.220237],[-0.714753,53.207608],[-0.730569,53.210756],[-0.764019,53.182575],[-0.71816,53.177288],[-0.715375,53.136883],[-0.732407,53.127802],[-0.716755,53.116185],[-0.729618,53.097902],[-0.695132,53.06629],[-0.713467,53.066047],[-0.716204,53.059059],[-0.70593,53.052003],[-0.689889,53.059763],[-0.584939,53.045677],[-0.522814,53.049642],[-0.526173,52.969387],[-0.543157,52.971743],[-0.554099,52.954431],[-0.517846,52.960288],[-0.510006,52.947573],[-0.494153,52.953847],[-0.479488,52.931424],[-0.493975,52.920738],[-0.489208,52.91347],[-0.469756,52.901188],[-0.445332,52.900572],[-0.437341,52.886996],[-0.365824,52.897931],[-0.357893,52.915651],[-0.32283,52.91753],[-0.256496,52.905883],[-0.246705,52.928832],[-0.189891,52.99641],[-0.224945,53.029999],[-0.210939,53.069942],[-0.19612,53.069557],[-0.196597,53.083438],[-0.219319,53.096251],[-0.226237,53.1249],[-0.28965,53.179366],[-0.319404,53.184948],[-0.352433,53.227921],[-0.381868,53.231958],[-0.495118,53.225259],[-0.530239,53.2175],[-0.539576,53.203953],[-0.54884,53.205863],[-0.552843,53.186326],[-0.564429,53.187003],[-0.619735,53.208056],[-0.615666,53.221911],[-0.570727,53.229612],[-0.595112,53.24517]]]}',
      metadata: ["North Kesteven"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.027125,52.898494],[-0.040349,52.868451],[-0.084794,52.864546],[-0.118583,52.88238],[-0.142652,52.884908],[-0.156586,52.912095],[-0.246705,52.928832],[-0.256496,52.905883],[-0.269519,52.876957],[-0.25703,52.867187],[-0.270888,52.872108],[-0.276332,52.861204],[-0.260669,52.771018],[-0.30668,52.743436],[-0.26718,52.699086],[-0.212501,52.666679],[-0.192868,52.652439],[-0.18002,52.660561],[-0.141062,52.651507],[-0.102196,52.672206],[-0.087753,52.666786],[-0.063714,52.675233],[-0.031271,52.661533],[0.0215,52.664887],[0.048566,52.681402],[0.044149,52.714382],[0.063627,52.727392],[0.089012,52.72363],[0.132975,52.739304],[0.171626,52.738032],[0.186323,52.735349],[0.272209,52.772806],[0.245084,52.784524],[0.265744,52.813906],[0.245249,52.822181],[0.216813,52.820883],[0.204373,52.781568],[0.214918,52.822849],[0.21508,52.82848],[0.197208,52.829749],[0.214268,52.828951],[0.176332,52.874116],[0.150287,52.882393],[0.136017,52.874521],[0.145014,52.885092],[0.079819,52.897535],[0.076991,52.898074],[0.073378,52.906085],[0.056376,52.903393],[0.069158,52.908216],[0.068551,52.918735],[0.040831,52.906587],[0.037422,52.903324],[0.038075,52.905061],[0.027125,52.898494]]]}',
      metadata: ["South Holland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.256496,52.905883],[-0.32283,52.91753],[-0.357893,52.915651],[-0.365824,52.897931],[-0.437341,52.886996],[-0.445332,52.900572],[-0.469756,52.901188],[-0.489208,52.91347],[-0.493975,52.920738],[-0.479488,52.931424],[-0.494153,52.953847],[-0.510006,52.947573],[-0.517846,52.960288],[-0.554099,52.954431],[-0.543157,52.971743],[-0.526173,52.969387],[-0.522814,53.049642],[-0.584939,53.045677],[-0.689889,53.059763],[-0.70593,53.052003],[-0.716204,53.059059],[-0.749552,53.055116],[-0.760826,53.02941],[-0.788414,53.025853],[-0.795825,53.010598],[-0.804086,53.012505],[-0.778279,52.976923],[-0.778437,52.959314],[-0.75495,52.949556],[-0.776859,52.904809],[-0.758468,52.90049],[-0.766592,52.886798],[-0.742723,52.883157],[-0.682248,52.812165],[-0.664101,52.75671],[-0.610288,52.759821],[-0.605444,52.750493],[-0.572636,52.753109],[-0.539974,52.738402],[-0.542434,52.723281],[-0.494531,52.709653],[-0.430443,52.705422],[-0.434055,52.683705],[-0.456191,52.670393],[-0.506674,52.659526],[-0.523586,52.665234],[-0.495026,52.640236],[-0.494773,52.640314],[-0.452695,52.654278],[-0.405681,52.648046],[-0.350222,52.661615],[-0.335037,52.674866],[-0.28924,52.670276],[-0.260754,52.651418],[-0.212501,52.666679],[-0.26718,52.699086],[-0.30668,52.743436],[-0.260669,52.771018],[-0.276332,52.861204],[-0.270888,52.872108],[-0.25703,52.867187],[-0.269519,52.876957],[-0.256496,52.905883]]]}',
      metadata: ["South Kesteven"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.292115,53.613267],[-0.308555,53.614329],[-0.300743,53.595284],[-0.335939,53.558627],[-0.416963,53.563215],[-0.429001,53.574525],[-0.467018,53.548961],[-0.490927,53.545875],[-0.501229,53.537461],[-0.430665,53.546337],[-0.408145,53.532109],[-0.405075,53.517617],[-0.488384,53.50486],[-0.48663,53.48047],[-0.471749,53.474873],[-0.551789,53.45952],[-0.629753,53.458219],[-0.624491,53.512839],[-0.739592,53.519936],[-0.752114,53.500531],[-0.76811,53.498926],[-0.771568,53.479202],[-0.784389,53.476669],[-0.784365,53.46338],[-0.797483,53.455064],[-0.820515,53.440748],[-0.818092,53.426979],[-0.788624,53.415261],[-0.77714,53.396914],[-0.790443,53.385854],[-0.775236,53.377759],[-0.791132,53.363552],[-0.774459,53.364432],[-0.758616,53.353838],[-0.766474,53.330107],[-0.749955,53.324218],[-0.747138,53.304333],[-0.750967,53.293602],[-0.763502,53.299438],[-0.778125,53.283854],[-0.76428,53.272739],[-0.777074,53.246908],[-0.735083,53.243874],[-0.734151,53.254004],[-0.688027,53.258391],[-0.666577,53.239702],[-0.648464,53.243413],[-0.648377,53.253168],[-0.622481,53.25813],[-0.595112,53.24517],[-0.514295,53.253981],[-0.496012,53.247191],[-0.495118,53.225259],[-0.381868,53.231958],[-0.352433,53.227921],[-0.319404,53.184948],[-0.28965,53.179366],[-0.302263,53.210425],[-0.276005,53.234184],[-0.280243,53.249765],[-0.300434,53.262088],[-0.289818,53.263989],[-0.300825,53.263974],[-0.301896,53.27534],[-0.316443,53.279472],[-0.317461,53.298251],[-0.295572,53.302982],[-0.310261,53.320003],[-0.293313,53.334477],[-0.275518,53.321827],[-0.255252,53.33004],[-0.255899,53.344142],[-0.204871,53.371886],[-0.229394,53.398058],[-0.206023,53.408435],[-0.214468,53.428638],[-0.180524,53.440702],[-0.131879,53.435939],[-0.149228,53.4467],[-0.15368,53.465678],[-0.181805,53.468649],[-0.188565,53.484538],[-0.210605,53.486288],[-0.204086,53.511767],[-0.21059,53.531706],[-0.219883,53.532606],[-0.189341,53.565923],[-0.195185,53.571619],[-0.222559,53.568017],[-0.234669,53.58625],[-0.251396,53.584653],[-0.248476,53.593664],[-0.292115,53.613267]]]}',
      metadata: ["West Lindsey"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.993596,52.79836],[0.967663,52.807738],[0.936844,52.795581],[0.938442,52.787973],[0.917646,52.803312],[0.890789,52.790717],[0.865419,52.807428],[0.839443,52.811127],[0.795831,52.769097],[0.707939,52.788472],[0.690081,52.770032],[0.688725,52.751972],[0.668133,52.740557],[0.701127,52.736191],[0.718227,52.721794],[0.711029,52.709006],[0.687779,52.697935],[0.653758,52.704064],[0.647749,52.690678],[0.626019,52.701814],[0.61199,52.699971],[0.550982,52.680521],[0.564736,52.67159],[0.562177,52.655296],[0.578508,52.653515],[0.564176,52.596466],[0.530523,52.576093],[0.536616,52.565804],[0.579834,52.559572],[0.613367,52.531634],[0.582501,52.451861],[0.641833,52.450965],[0.666323,52.462508],[0.683973,52.453165],[0.718653,52.449708],[0.668498,52.408974],[0.690769,52.397531],[0.737589,52.395138],[0.747405,52.383187],[0.765966,52.390357],[0.808172,52.389524],[0.84093,52.400796],[0.866873,52.390346],[0.930232,52.388838],[0.967471,52.370113],[1.029957,52.378735],[1.021417,52.405972],[1.034102,52.415777],[1.021268,52.416379],[1.042799,52.425654],[1.057136,52.420091],[1.07315,52.454755],[1.094649,52.460277],[1.078953,52.507009],[1.095289,52.518322],[1.0614,52.537184],[1.033789,52.537472],[0.973509,52.554794],[0.947028,52.575833],[0.962188,52.581177],[0.953712,52.584942],[0.963778,52.594644],[1.039486,52.588173],[1.036901,52.615798],[1.018866,52.615746],[1.023553,52.639752],[1.043096,52.646512],[1.054432,52.663329],[1.07465,52.638168],[1.078985,52.64874],[1.097695,52.649757],[1.108322,52.682523],[1.084247,52.702543],[1.105203,52.714693],[1.088553,52.723195],[1.080244,52.740957],[1.05109,52.750413],[1.044772,52.769043],[1.000241,52.765785],[0.993596,52.79836]]]}',
      metadata: ["Breckland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.549214,52.681542],[1.518943,52.686966],[1.512245,52.681635],[1.511944,52.690035],[1.494892,52.687173],[1.48811,52.693283],[1.473965,52.689308],[1.460957,52.705665],[1.441428,52.701451],[1.434446,52.689575],[1.418574,52.6919],[1.423986,52.703458],[1.402444,52.7157],[1.405901,52.732514],[1.397331,52.729106],[1.38766,52.740007],[1.357006,52.746271],[1.314792,52.779696],[1.308199,52.80681],[1.288883,52.804668],[1.274125,52.81882],[1.254589,52.813447],[1.251083,52.820522],[1.214388,52.829714],[1.193388,52.815318],[1.172597,52.830614],[1.156455,52.8217],[1.14527,52.823907],[1.149601,52.812105],[1.101789,52.829344],[1.087902,52.815847],[1.035263,52.811827],[1.02228,52.800031],[0.993596,52.79836],[1.000241,52.765785],[1.044772,52.769043],[1.05109,52.750413],[1.080244,52.740957],[1.088553,52.723195],[1.105203,52.714693],[1.084247,52.702543],[1.108322,52.682523],[1.097695,52.649757],[1.135245,52.642859],[1.147296,52.671366],[1.173765,52.665167],[1.190742,52.678543],[1.205098,52.660021],[1.218275,52.672808],[1.234188,52.668076],[1.248508,52.647743],[1.284262,52.657643],[1.262859,52.677406],[1.282945,52.677335],[1.29233,52.684935],[1.300184,52.676856],[1.292601,52.654928],[1.322977,52.645024],[1.340572,52.649708],[1.325285,52.623184],[1.328167,52.623245],[1.361779,52.623956],[1.369332,52.624114],[1.389074,52.604991],[1.389533,52.604546],[1.400331,52.611999],[1.413628,52.621172],[1.434697,52.620057],[1.454539,52.59456],[1.484684,52.587779],[1.497793,52.571319],[1.518438,52.575831],[1.522406,52.562709],[1.540584,52.555593],[1.546027,52.555855],[1.591806,52.558043],[1.607525,52.574033],[1.623019,52.574231],[1.646812,52.589092],[1.63101,52.592502],[1.641977,52.604228],[1.677175,52.614019],[1.644209,52.630405],[1.60533,52.624024],[1.590484,52.638229],[1.568081,52.637851],[1.549214,52.681542]]]}',
      metadata: ["Broadland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.740235,52.532086],[1.740232,52.53257],[1.73315,52.556569],[1.740055,52.567576],[1.740021,52.574228],[1.743559,52.574279],[1.736966,52.647463],[1.699455,52.719894],[1.697566,52.723536],[1.674865,52.742578],[1.639293,52.73432],[1.619313,52.717586],[1.550661,52.699365],[1.549214,52.681542],[1.568081,52.637851],[1.590484,52.638229],[1.60533,52.624024],[1.644209,52.630405],[1.677175,52.614019],[1.641977,52.604228],[1.63101,52.592502],[1.646812,52.589092],[1.648565,52.57626],[1.605825,52.544871],[1.628582,52.526018],[1.667714,52.550245],[1.702008,52.544661],[1.726004,52.530642],[1.740235,52.532086]]]}',
      metadata: ["Great Yarmouth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.781704,52.978368],[0.781524,52.978398],[0.750587,52.976744],[0.764477,52.976594],[0.753635,52.975088],[0.757834,52.969381],[0.731604,52.96114],[0.731746,52.97271],[0.7476,52.9726],[0.746303,52.966185],[0.750537,52.97258],[0.748045,52.974802],[0.715512,52.971847],[0.693799,52.978983],[0.680041,52.969479],[0.70007,52.973528],[0.684717,52.967496],[0.678876,52.967316],[0.643469,52.966219],[0.638619,52.970868],[0.668846,52.970059],[0.671583,52.977515],[0.622777,52.973787],[0.626239,52.967392],[0.613926,52.966009],[0.617747,52.97273],[0.587927,52.977071],[0.603482,52.965792],[0.59008,52.964678],[0.592219,52.970961],[0.586989,52.96595],[0.586381,52.9729],[0.576264,52.964022],[0.561638,52.971907],[0.569349,52.975301],[0.541635,52.975171],[0.49025,52.947996],[0.480283,52.931515],[0.444878,52.872859],[0.449586,52.842418],[0.44456,52.853438],[0.433003,52.8531],[0.405081,52.837693],[0.411648,52.832556],[0.402614,52.836828],[0.372988,52.82063],[0.357554,52.812184],[0.372569,52.812932],[0.38121,52.813361],[0.372476,52.811232],[0.358255,52.807762],[0.370303,52.802364],[0.362774,52.801672],[0.371289,52.789418],[0.374153,52.785294],[0.381463,52.78876],[0.374647,52.784329],[0.389333,52.753547],[0.39227,52.747387],[0.388535,52.753563],[0.370922,52.782669],[0.362446,52.796662],[0.353827,52.806312],[0.345327,52.803297],[0.352091,52.80936],[0.33893,52.807649],[0.345887,52.813599],[0.334355,52.810202],[0.344591,52.814268],[0.315489,52.818836],[0.290377,52.813127],[0.287556,52.819234],[0.278396,52.816115],[0.285058,52.811826],[0.267447,52.813218],[0.265744,52.813906],[0.245084,52.784524],[0.272209,52.772806],[0.186323,52.735349],[0.171626,52.738032],[0.153571,52.682223],[0.184717,52.677895],[0.183842,52.655662],[0.169925,52.650435],[0.2193,52.621812],[0.191597,52.598961],[0.218412,52.572599],[0.205632,52.565569],[0.217238,52.560594],[0.204708,52.554656],[0.20514,52.547901],[0.214626,52.549107],[0.203872,52.545405],[0.213145,52.538172],[0.205847,52.533851],[0.230591,52.52791],[0.206123,52.519635],[0.236319,52.507291],[0.246041,52.499891],[0.256476,52.507714],[0.309361,52.513622],[0.367062,52.501174],[0.380706,52.479539],[0.428529,52.454653],[0.429344,52.436427],[0.445539,52.447372],[0.523662,52.44818],[0.554705,52.456025],[0.582501,52.451861],[0.613367,52.531634],[0.579834,52.559572],[0.536616,52.565804],[0.530523,52.576093],[0.564176,52.596466],[0.578508,52.653515],[0.562177,52.655296],[0.564736,52.67159],[0.550982,52.680521],[0.61199,52.699971],[0.626019,52.701814],[0.647749,52.690678],[0.653758,52.704064],[0.687779,52.697935],[0.711029,52.709006],[0.718227,52.721794],[0.701127,52.736191],[0.668133,52.740557],[0.688725,52.751972],[0.690081,52.770032],[0.707939,52.788472],[0.756337,52.816439],[0.725084,52.842873],[0.727774,52.855339],[0.79097,52.859883],[0.794872,52.88351],[0.806896,52.879438],[0.821569,52.892857],[0.81699,52.900067],[0.789872,52.899851],[0.781704,52.978368]]],[[[0.695431,52.986916],[0.686501,52.987708],[0.680117,52.987387],[0.658054,52.986273],[0.680071,52.986641],[0.685886,52.986737],[0.682108,52.977412],[0.685418,52.983228],[0.696513,52.980883],[0.690356,52.986994],[0.697612,52.980671],[0.703373,52.985221],[0.700925,52.979171],[0.703496,52.983765],[0.711043,52.978697],[0.718928,52.98277],[0.716592,52.977357],[0.721725,52.982491],[0.751004,52.978173],[0.695431,52.986916]]]]}',
      metadata: ["King's Lynn and West Norfolk"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.912456,52.963997],[0.902494,52.965993],[0.89168,52.961905],[0.912456,52.963997]]],[[[0.905253,52.968058],[0.894187,52.970777],[0.886149,52.964063],[0.875651,52.967305],[0.88661,52.962576],[0.879713,52.959103],[0.905253,52.968058]]],[[[0.878114,52.975862],[0.866598,52.978681],[0.854816,52.966749],[0.867869,52.973427],[0.872053,52.969136],[0.866719,52.976116],[0.883725,52.965037],[0.878114,52.975862]]],[[[1.674865,52.742578],[1.586461,52.801701],[1.560117,52.815407],[1.432138,52.881789],[1.360097,52.90988],[1.301047,52.932846],[1.272292,52.93587],[1.124224,52.951323],[1.010221,52.973518],[1.006856,52.974304],[0.977624,52.979851],[0.974973,52.980354],[0.958006,52.969305],[0.969859,52.971359],[0.977078,52.971912],[1.002948,52.973891],[1.030528,52.966608],[1.010602,52.955019],[1.014508,52.963],[0.983986,52.963798],[0.976453,52.962827],[0.936508,52.95767],[0.920984,52.966191],[0.914623,52.963665],[0.916903,52.962456],[0.910637,52.963322],[0.909321,52.956877],[0.905443,52.962437],[0.869618,52.954788],[0.851018,52.957777],[0.845365,52.977655],[0.812508,52.973275],[0.781704,52.978368],[0.789872,52.899851],[0.81699,52.900067],[0.821569,52.892857],[0.806896,52.879438],[0.794872,52.88351],[0.79097,52.859883],[0.727774,52.855339],[0.725084,52.842873],[0.756337,52.816439],[0.707939,52.788472],[0.795831,52.769097],[0.839443,52.811127],[0.865419,52.807428],[0.890789,52.790717],[0.917646,52.803312],[0.938442,52.787973],[0.936844,52.795581],[0.967663,52.807738],[0.993596,52.79836],[1.02228,52.800031],[1.035263,52.811827],[1.087902,52.815847],[1.101789,52.829344],[1.149601,52.812105],[1.14527,52.823907],[1.156455,52.8217],[1.172597,52.830614],[1.193388,52.815318],[1.214388,52.829714],[1.251083,52.820522],[1.254589,52.813447],[1.274125,52.81882],[1.288883,52.804668],[1.308199,52.80681],[1.314792,52.779696],[1.357006,52.746271],[1.38766,52.740007],[1.397331,52.729106],[1.405901,52.732514],[1.402444,52.7157],[1.423986,52.703458],[1.418574,52.6919],[1.434446,52.689575],[1.441428,52.701451],[1.460957,52.705665],[1.473965,52.689308],[1.48811,52.693283],[1.494892,52.687173],[1.511944,52.690035],[1.512245,52.681635],[1.518943,52.686966],[1.549214,52.681542],[1.550661,52.699365],[1.619313,52.717586],[1.639293,52.73432],[1.674865,52.742578]]]]}',
      metadata: ["North Norfolk"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.328167,52.623245],[1.325285,52.623184],[1.340572,52.649708],[1.322977,52.645024],[1.292601,52.654928],[1.300184,52.676856],[1.29233,52.684935],[1.282945,52.677335],[1.262859,52.677406],[1.284262,52.657643],[1.248508,52.647743],[1.235454,52.640933],[1.20389,52.644704],[1.212954,52.627165],[1.230565,52.630927],[1.231453,52.618104],[1.243546,52.617135],[1.257913,52.59809],[1.278581,52.596703],[1.286402,52.596178],[1.328167,52.623245]]]}',
      metadata: ["Norwich"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.328167,52.623245],[1.286402,52.596178],[1.278581,52.596703],[1.257913,52.59809],[1.243546,52.617135],[1.231453,52.618104],[1.230565,52.630927],[1.212954,52.627165],[1.20389,52.644704],[1.235454,52.640933],[1.248508,52.647743],[1.234188,52.668076],[1.218275,52.672808],[1.205098,52.660021],[1.190742,52.678543],[1.173765,52.665167],[1.147296,52.671366],[1.135245,52.642859],[1.097695,52.649757],[1.078985,52.64874],[1.07465,52.638168],[1.054432,52.663329],[1.043096,52.646512],[1.023553,52.639752],[1.018866,52.615746],[1.036901,52.615798],[1.039486,52.588173],[0.963778,52.594644],[0.953712,52.584942],[0.962188,52.581177],[0.947028,52.575833],[0.973509,52.554794],[1.033789,52.537472],[1.0614,52.537184],[1.095289,52.518322],[1.078953,52.507009],[1.094649,52.460277],[1.07315,52.454755],[1.057136,52.420091],[1.042799,52.425654],[1.021268,52.416379],[1.034102,52.415777],[1.021417,52.405972],[1.029957,52.378735],[1.068186,52.378521],[1.213867,52.35539],[1.259997,52.371099],[1.286235,52.39069],[1.316303,52.387391],[1.347101,52.404411],[1.363658,52.427479],[1.407914,52.444409],[1.432592,52.445342],[1.433268,52.45596],[1.411018,52.461597],[1.42015,52.471047],[1.44617,52.456008],[1.480743,52.471892],[1.508022,52.461752],[1.52973,52.468347],[1.557823,52.457696],[1.56802,52.474631],[1.58619,52.478693],[1.618505,52.463277],[1.634543,52.462955],[1.646549,52.472003],[1.658827,52.468404],[1.682472,52.495051],[1.672081,52.503867],[1.65428,52.501417],[1.628582,52.526018],[1.605825,52.544871],[1.648565,52.57626],[1.646812,52.589092],[1.623019,52.574231],[1.607525,52.574033],[1.591806,52.558043],[1.546027,52.555855],[1.540584,52.555593],[1.522406,52.562709],[1.518438,52.575831],[1.497793,52.571319],[1.484684,52.587779],[1.454539,52.59456],[1.434697,52.620057],[1.413628,52.621172],[1.400331,52.611999],[1.389533,52.604546],[1.389074,52.604991],[1.369332,52.624114],[1.361779,52.623956],[1.328167,52.623245]]]}',
      metadata: ["South Norfolk"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.664142,52.454477],[-0.631894,52.464599],[-0.627813,52.479492],[-0.601379,52.48682],[-0.596387,52.496944],[-0.609297,52.508632],[-0.59764,52.511979],[-0.635643,52.515954],[-0.671966,52.506826],[-0.665337,52.517968],[-0.635843,52.523892],[-0.643134,52.536357],[-0.669461,52.544914],[-0.674864,52.558638],[-0.713658,52.524964],[-0.756156,52.510995],[-0.774867,52.518276],[-0.796161,52.516365],[-0.807932,52.506564],[-0.786111,52.495186],[-0.771634,52.472048],[-0.741568,52.470131],[-0.737881,52.458146],[-0.720222,52.456779],[-0.684808,52.47827],[-0.671311,52.468919],[-0.683757,52.462183],[-0.669878,52.463756],[-0.664142,52.454477]]]}',
      metadata: ["Corby"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.901281,52.459756],[-0.942192,52.467773],[-0.951908,52.477424],[-1.000693,52.47094],[-1.044511,52.445748],[-1.034274,52.436285],[-1.049985,52.422208],[-1.084382,52.436298],[-1.12927,52.416103],[-1.149353,52.397041],[-1.183992,52.392171],[-1.201613,52.396732],[-1.174973,52.35629],[-1.23339,52.346516],[-1.265355,52.328361],[-1.209234,52.315204],[-1.233783,52.290328],[-1.21573,52.266378],[-1.232999,52.253259],[-1.266891,52.235242],[-1.284644,52.238577],[-1.25478,52.198889],[-1.281195,52.191953],[-1.275085,52.167683],[-1.255274,52.16465],[-1.253713,52.155807],[-1.23393,52.147796],[-1.223176,52.160412],[-1.197983,52.155195],[-1.193441,52.16024],[-1.187828,52.144488],[-1.138031,52.146255],[-1.157518,52.169507],[-1.1442,52.166031],[-1.137232,52.173272],[-1.128585,52.167894],[-1.126892,52.185706],[-1.095583,52.178916],[-1.08315,52.193526],[-1.038421,52.195674],[-1.065188,52.228239],[-0.997405,52.247676],[-0.989099,52.257545],[-0.961756,52.259475],[-0.898043,52.280668],[-0.885118,52.275389],[-0.873937,52.282707],[-0.827576,52.280984],[-0.809141,52.275328],[-0.81795,52.309596],[-0.785779,52.330617],[-0.788655,52.347307],[-0.796317,52.361663],[-0.831109,52.376173],[-0.84057,52.392847],[-0.873695,52.402674],[-0.890537,52.398594],[-0.886937,52.423354],[-0.864328,52.434225],[-0.904384,52.442171],[-0.901281,52.459756]]]}',
      metadata: ["Daventry"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.495026,52.640236],[-0.517397,52.64238],[-0.540261,52.625966],[-0.552939,52.601349],[-0.544174,52.592888],[-0.558118,52.594484],[-0.571904,52.585803],[-0.581547,52.595868],[-0.586972,52.587429],[-0.603019,52.588591],[-0.674864,52.558638],[-0.669461,52.544914],[-0.643134,52.536357],[-0.635843,52.523892],[-0.665337,52.517968],[-0.671966,52.506826],[-0.635643,52.515954],[-0.59764,52.511979],[-0.609297,52.508632],[-0.596387,52.496944],[-0.601379,52.48682],[-0.627813,52.479492],[-0.631894,52.464599],[-0.664142,52.454477],[-0.654483,52.448165],[-0.658711,52.434282],[-0.627603,52.434874],[-0.613775,52.41964],[-0.628391,52.382624],[-0.6211,52.369374],[-0.63236,52.361574],[-0.622796,52.342007],[-0.641251,52.317193],[-0.638094,52.299242],[-0.610617,52.279498],[-0.586335,52.272831],[-0.565693,52.253468],[-0.541972,52.256073],[-0.53119,52.270402],[-0.541969,52.289942],[-0.514051,52.314697],[-0.51983,52.317693],[-0.465366,52.322953],[-0.466657,52.338928],[-0.483264,52.340903],[-0.477682,52.34892],[-0.4987,52.360096],[-0.488519,52.374024],[-0.495946,52.379516],[-0.44151,52.384996],[-0.417073,52.411599],[-0.362408,52.433531],[-0.370217,52.43993],[-0.34159,52.466943],[-0.3594,52.489859],[-0.354345,52.506495],[-0.413603,52.52568],[-0.401283,52.538685],[-0.419594,52.558962],[-0.407291,52.564055],[-0.415381,52.578743],[-0.478815,52.573645],[-0.492665,52.5819],[-0.470921,52.623559],[-0.494773,52.640314],[-0.495026,52.640236]]]}',
      metadata: ["East Northamptonshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.796161,52.516365],[-0.86881,52.526954],[-0.883443,52.51397],[-0.882126,52.493166],[-0.898048,52.486918],[-0.882396,52.471283],[-0.901281,52.459756],[-0.904384,52.442171],[-0.864328,52.434225],[-0.886937,52.423354],[-0.890537,52.398594],[-0.873695,52.402674],[-0.84057,52.392847],[-0.831109,52.376173],[-0.796317,52.361663],[-0.788655,52.347307],[-0.778819,52.353754],[-0.747845,52.347215],[-0.727038,52.361213],[-0.700457,52.364373],[-0.685456,52.349962],[-0.65358,52.348119],[-0.63236,52.361574],[-0.6211,52.369374],[-0.628391,52.382624],[-0.613775,52.41964],[-0.627603,52.434874],[-0.658711,52.434282],[-0.654483,52.448165],[-0.664142,52.454477],[-0.669878,52.463756],[-0.683757,52.462183],[-0.671311,52.468919],[-0.684808,52.47827],[-0.720222,52.456779],[-0.737881,52.458146],[-0.741568,52.470131],[-0.771634,52.472048],[-0.786111,52.495186],[-0.807932,52.506564],[-0.796161,52.516365]]]}',
      metadata: ["Kettering"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.809141,52.275328],[-0.827576,52.280984],[-0.873937,52.282707],[-0.885118,52.275389],[-0.898043,52.280668],[-0.961756,52.259475],[-0.96766,52.218682],[-0.894324,52.186104],[-0.892291,52.196952],[-0.878187,52.195063],[-0.837009,52.211688],[-0.830135,52.22346],[-0.840979,52.236971],[-0.791416,52.242242],[-0.809141,52.275328]]]}',
      metadata: ["Northampton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.791416,52.242242],[-0.840979,52.236971],[-0.830135,52.22346],[-0.837009,52.211688],[-0.878187,52.195063],[-0.892291,52.196952],[-0.894324,52.186104],[-0.96766,52.218682],[-0.961756,52.259475],[-0.989099,52.257545],[-0.997405,52.247676],[-1.065188,52.228239],[-1.038421,52.195674],[-1.08315,52.193526],[-1.095583,52.178916],[-1.126892,52.185706],[-1.128585,52.167894],[-1.137232,52.173272],[-1.1442,52.166031],[-1.157518,52.169507],[-1.138031,52.146255],[-1.187828,52.144488],[-1.193441,52.16024],[-1.197983,52.155195],[-1.223176,52.160412],[-1.23393,52.147796],[-1.253713,52.155807],[-1.255274,52.16465],[-1.275085,52.167683],[-1.281195,52.191953],[-1.313135,52.190468],[-1.331897,52.168485],[-1.248085,52.097161],[-1.321165,52.087019],[-1.31816,52.079921],[-1.297509,52.078057],[-1.31292,52.051453],[-1.278164,52.014273],[-1.283397,51.979547],[-1.241612,51.986293],[-1.19626,51.977431],[-1.163823,51.993412],[-1.134329,51.997296],[-1.118086,52.015426],[-1.136665,52.022243],[-1.121987,52.045147],[-1.062065,52.062735],[-1.027668,52.063734],[-1.042327,52.07371],[-1.026318,52.075682],[-0.967805,52.070911],[-0.951873,52.081534],[-0.90603,52.021221],[-0.890118,52.031561],[-0.877469,52.029972],[-0.871326,52.040252],[-0.852447,52.050705],[-0.862679,52.060934],[-0.8395,52.063828],[-0.831418,52.071947],[-0.846713,52.091509],[-0.869531,52.100038],[-0.87145,52.111753],[-0.887016,52.114209],[-0.88072,52.126332],[-0.828205,52.132611],[-0.831967,52.143684],[-0.814041,52.142472],[-0.807588,52.156979],[-0.792091,52.151329],[-0.777975,52.168732],[-0.749735,52.166877],[-0.705456,52.191571],[-0.727573,52.238196],[-0.762195,52.248769],[-0.791416,52.242242]]]}',
      metadata: ["South Northamptonshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.63236,52.361574],[-0.65358,52.348119],[-0.685456,52.349962],[-0.700457,52.364373],[-0.727038,52.361213],[-0.747845,52.347215],[-0.778819,52.353754],[-0.788655,52.347307],[-0.785779,52.330617],[-0.81795,52.309596],[-0.809141,52.275328],[-0.791416,52.242242],[-0.762195,52.248769],[-0.727573,52.238196],[-0.705456,52.191571],[-0.668136,52.195034],[-0.637332,52.227318],[-0.653655,52.268289],[-0.610617,52.279498],[-0.638094,52.299242],[-0.641251,52.317193],[-0.622796,52.342007],[-0.63236,52.361574]]]}',
      metadata: ["Wellingborough"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.004508,54.172884],[-2.045785,54.18188],[-2.060872,54.210325],[-2.100031,54.231966],[-2.140472,54.225295],[-2.151602,54.23559],[-2.171945,54.228478],[-2.197798,54.247379],[-2.229217,54.252179],[-2.28332,54.238561],[-2.29276,54.252622],[-2.305107,54.249344],[-2.319096,54.257156],[-2.337657,54.237599],[-2.362317,54.249753],[-2.373021,54.240099],[-2.39678,54.239381],[-2.405632,54.224915],[-2.460863,54.226716],[-2.533979,54.157693],[-2.560504,54.153052],[-2.564741,54.127038],[-2.52401,54.094622],[-2.509526,54.095425],[-2.464347,54.075279],[-2.46955,54.046212],[-2.425826,54.038095],[-2.374073,54.049089],[-2.357323,54.019117],[-2.33956,54.009433],[-2.35231,54.010539],[-2.352358,53.994674],[-2.339923,53.989428],[-2.319151,53.993842],[-2.29432,53.974433],[-2.230345,53.98153],[-2.221063,53.977928],[-2.232015,53.97123],[-2.225736,53.961099],[-2.196018,53.969576],[-2.184522,53.952264],[-2.182281,53.93539],[-2.132224,53.926509],[-2.113346,53.915627],[-2.103019,53.890941],[-2.081447,53.87568],[-2.089915,53.868182],[-2.04613,53.850141],[-2.021751,53.871538],[-1.982359,53.868862],[-1.979419,53.901132],[-1.952567,53.903533],[-1.976867,53.926418],[-1.963076,53.933404],[-1.966186,53.951555],[-1.893768,53.955261],[-1.883632,53.963165],[-1.878882,53.954274],[-1.816733,53.978139],[-1.834913,54.013529],[-1.848046,54.013671],[-1.85347,54.028774],[-1.872439,54.035674],[-1.873526,54.046043],[-1.853725,54.053122],[-1.840588,54.070576],[-1.905616,54.122473],[-1.948948,54.125831],[-1.963587,54.15213],[-1.972492,54.158085],[-1.992544,54.15528],[-2.004508,54.172884]]]}',
      metadata: ["Craven"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.146197,54.502822],[-1.234866,54.510316],[-1.256675,54.501108],[-1.257403,54.487322],[-1.280979,54.490443],[-1.300337,54.47585],[-1.343629,54.464155],[-1.344915,54.472408],[-1.364417,54.465952],[-1.372562,54.472307],[-1.381011,54.494029],[-1.39505,54.48568],[-1.407089,54.49353],[-1.412786,54.477195],[-1.432118,54.479455],[-1.434905,54.487493],[-1.458508,54.503919],[-1.474558,54.500711],[-1.459193,54.494268],[-1.463799,54.473551],[-1.453414,54.466015],[-1.462791,54.461392],[-1.45615,54.452449],[-1.472052,54.4556],[-1.48634,54.453389],[-1.482757,54.447863],[-1.514852,54.452151],[-1.546158,54.444534],[-1.544047,54.424221],[-1.574614,54.418505],[-1.560913,54.400821],[-1.584323,54.364411],[-1.606224,54.363779],[-1.615234,54.357067],[-1.608618,54.35084],[-1.643187,54.343481],[-1.637652,54.321438],[-1.651061,54.294367],[-1.675823,54.28516],[-1.705261,54.285543],[-1.684469,54.261601],[-1.6751,54.247082],[-1.648628,54.250213],[-1.636371,54.239464],[-1.646805,54.236854],[-1.625388,54.230333],[-1.624614,54.209941],[-1.640645,54.192677],[-1.623075,54.185896],[-1.59513,54.190361],[-1.588883,54.196767],[-1.598292,54.200641],[-1.583465,54.204701],[-1.553047,54.191094],[-1.495098,54.203301],[-1.484628,54.22031],[-1.474776,54.206208],[-1.442625,54.216035],[-1.432177,54.186078],[-1.394056,54.181467],[-1.332523,54.148406],[-1.34074,54.107725],[-1.327755,54.101724],[-1.347242,54.099153],[-1.338034,54.0819],[-1.310437,54.080739],[-1.287327,54.061538],[-1.277268,54.035091],[-1.224394,54.034648],[-1.218434,54.014435],[-1.20678,54.016206],[-1.17551,54.002197],[-1.151912,53.989178],[-1.136998,53.991083],[-1.149091,54.002947],[-1.140797,54.029859],[-1.120282,54.029045],[-1.089408,54.048015],[-1.058734,54.047845],[-1.059712,54.056607],[-1.039096,54.075709],[-1.060159,54.085345],[-1.039465,54.098384],[-1.043779,54.107487],[-1.016258,54.107924],[-1.013071,54.13462],[-1.088708,54.16292],[-1.080607,54.172101],[-1.099156,54.185307],[-1.125913,54.180487],[-1.168714,54.202476],[-1.189319,54.200197],[-1.199899,54.212914],[-1.197018,54.241095],[-1.20838,54.236371],[-1.215064,54.241518],[-1.205456,54.251319],[-1.219748,54.286574],[-1.248026,54.309062],[-1.246593,54.331538],[-1.266004,54.345068],[-1.238481,54.37595],[-1.208742,54.373783],[-1.172193,54.381871],[-1.157545,54.349266],[-1.121801,54.345242],[-1.122232,54.331184],[-1.099034,54.329192],[-1.078163,54.360248],[-1.066211,54.362668],[-1.078824,54.388213],[-1.070427,54.395769],[-1.081811,54.405025],[-1.059381,54.412578],[-1.04839,54.452146],[-1.033941,54.45899],[-0.972092,54.460846],[-0.983516,54.478877],[-1.016454,54.476643],[-1.036851,54.494044],[-1.094524,54.50676],[-1.11838,54.498199],[-1.146197,54.502822]]]}',
      metadata: ["Hambleton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.17551,54.002197],[-1.20678,54.016206],[-1.218434,54.014435],[-1.224394,54.034648],[-1.277268,54.035091],[-1.287327,54.061538],[-1.310437,54.080739],[-1.338034,54.0819],[-1.347242,54.099153],[-1.327755,54.101724],[-1.34074,54.107725],[-1.332523,54.148406],[-1.394056,54.181467],[-1.432177,54.186078],[-1.442625,54.216035],[-1.474776,54.206208],[-1.484628,54.22031],[-1.495098,54.203301],[-1.553047,54.191094],[-1.583465,54.204701],[-1.598292,54.200641],[-1.588883,54.196767],[-1.59513,54.190361],[-1.623075,54.185896],[-1.640645,54.192677],[-1.624614,54.209941],[-1.625388,54.230333],[-1.646805,54.236854],[-1.636371,54.239464],[-1.648628,54.250213],[-1.6751,54.247082],[-1.684469,54.261601],[-1.737122,54.254236],[-1.755963,54.239364],[-1.823333,54.247487],[-1.816304,54.240698],[-1.828065,54.231639],[-1.879446,54.220277],[-1.886448,54.210011],[-1.969924,54.191333],[-2.004508,54.172884],[-1.992544,54.15528],[-1.972492,54.158085],[-1.963587,54.15213],[-1.948948,54.125831],[-1.905616,54.122473],[-1.840588,54.070576],[-1.853725,54.053122],[-1.873526,54.046043],[-1.872439,54.035674],[-1.85347,54.028774],[-1.848046,54.013671],[-1.834913,54.013529],[-1.816733,53.978139],[-1.878882,53.954274],[-1.860126,53.932658],[-1.8362,53.93142],[-1.847689,53.940773],[-1.805089,53.939023],[-1.775979,53.921488],[-1.745626,53.923004],[-1.727216,53.910197],[-1.717959,53.908543],[-1.707083,53.919131],[-1.684627,53.910588],[-1.655083,53.912484],[-1.651673,53.905663],[-1.620537,53.903395],[-1.599993,53.909776],[-1.587487,53.901248],[-1.583625,53.909294],[-1.551844,53.90294],[-1.548793,53.910914],[-1.498781,53.915307],[-1.462715,53.906015],[-1.432997,53.910805],[-1.432601,53.927237],[-1.40671,53.92785],[-1.397182,53.942535],[-1.340405,53.945888],[-1.344712,53.939502],[-1.306962,53.934424],[-1.308992,53.924098],[-1.29418,53.927064],[-1.30731,53.921494],[-1.297204,53.921682],[-1.300588,53.907486],[-1.313723,53.904702],[-1.288493,53.904329],[-1.273538,53.893595],[-1.27027,53.916975],[-1.260798,53.919871],[-1.269672,53.934966],[-1.235278,53.935009],[-1.221788,53.925044],[-1.195638,53.92238],[-1.223706,53.974829],[-1.216519,53.98559],[-1.182103,53.985345],[-1.191935,54.000519],[-1.17551,54.002197]]]}',
      metadata: ["Harrogate"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.696926,54.536006],[-1.721311,54.542302],[-1.733091,54.527736],[-1.779697,54.531873],[-1.776132,54.506729],[-1.792976,54.484492],[-1.839433,54.508437],[-1.857801,54.50354],[-1.85913,54.481858],[-1.942543,54.453395],[-1.97006,54.451522],[-1.996764,54.466903],[-2.04473,54.475186],[-2.043198,54.483599],[-2.116596,54.462263],[-2.170213,54.458199],[-2.177508,54.461626],[-2.189316,54.448978],[-2.249539,54.451943],[-2.292865,54.439307],[-2.308146,54.419794],[-2.305507,54.39712],[-2.291784,54.390905],[-2.29744,54.376899],[-2.317043,54.376311],[-2.344648,54.359629],[-2.367712,54.356071],[-2.309841,54.324315],[-2.324522,54.303184],[-2.319096,54.257156],[-2.305107,54.249344],[-2.29276,54.252622],[-2.28332,54.238561],[-2.229217,54.252179],[-2.197798,54.247379],[-2.171945,54.228478],[-2.151602,54.23559],[-2.140472,54.225295],[-2.100031,54.231966],[-2.060872,54.210325],[-2.045785,54.18188],[-2.004508,54.172884],[-1.969924,54.191333],[-1.886448,54.210011],[-1.879446,54.220277],[-1.828065,54.231639],[-1.816304,54.240698],[-1.823333,54.247487],[-1.755963,54.239364],[-1.737122,54.254236],[-1.684469,54.261601],[-1.705261,54.285543],[-1.675823,54.28516],[-1.651061,54.294367],[-1.637652,54.321438],[-1.643187,54.343481],[-1.608618,54.35084],[-1.615234,54.357067],[-1.606224,54.363779],[-1.584323,54.364411],[-1.560913,54.400821],[-1.574614,54.418505],[-1.544047,54.424221],[-1.546158,54.444534],[-1.514852,54.452151],[-1.482757,54.447863],[-1.48634,54.453389],[-1.472052,54.4556],[-1.475373,54.473845],[-1.499052,54.475678],[-1.491775,54.4862],[-1.511341,54.475012],[-1.514132,54.483775],[-1.528837,54.484814],[-1.519833,54.471047],[-1.545673,54.471238],[-1.555195,54.484978],[-1.58298,54.497101],[-1.579215,54.505188],[-1.591881,54.504301],[-1.581069,54.512846],[-1.602637,54.510582],[-1.611485,54.520001],[-1.633329,54.514111],[-1.633774,54.525364],[-1.654675,54.52465],[-1.657937,54.534589],[-1.696926,54.536006]]]}',
      metadata: ["Richmondshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.41825,54.174063],[-0.441423,54.215761],[-0.520018,54.197766],[-0.537734,54.200431],[-0.550411,54.192576],[-0.566418,54.202388],[-0.586262,54.198634],[-0.618225,54.204973],[-0.597949,54.234838],[-0.613114,54.269658],[-0.605298,54.297148],[-0.567293,54.311392],[-0.622034,54.344418],[-0.632616,54.375952],[-0.66132,54.36651],[-0.669525,54.374369],[-0.687233,54.373109],[-0.711192,54.357178],[-0.732324,54.355279],[-0.753122,54.368592],[-0.794219,54.354356],[-0.823634,54.382518],[-0.950443,54.408858],[-0.98784,54.395954],[-1.026873,54.415344],[-1.059381,54.412578],[-1.081811,54.405025],[-1.070427,54.395769],[-1.078824,54.388213],[-1.066211,54.362668],[-1.078163,54.360248],[-1.099034,54.329192],[-1.122232,54.331184],[-1.121801,54.345242],[-1.157545,54.349266],[-1.172193,54.381871],[-1.208742,54.373783],[-1.238481,54.37595],[-1.266004,54.345068],[-1.246593,54.331538],[-1.248026,54.309062],[-1.219748,54.286574],[-1.205456,54.251319],[-1.215064,54.241518],[-1.20838,54.236371],[-1.197018,54.241095],[-1.199899,54.212914],[-1.189319,54.200197],[-1.168714,54.202476],[-1.125913,54.180487],[-1.099156,54.185307],[-1.080607,54.172101],[-1.088708,54.16292],[-1.013071,54.13462],[-1.016258,54.107924],[-1.043779,54.107487],[-1.039465,54.098384],[-1.060159,54.085345],[-1.039096,54.075709],[-1.059712,54.056607],[-1.014377,54.049322],[-1.002085,54.055263],[-0.966845,54.022976],[-0.984782,54.002679],[-0.97542,54.00475],[-0.97193,53.996696],[-0.994837,53.983064],[-0.925295,53.991518],[-0.893903,53.999535],[-0.878444,54.017185],[-0.800705,54.024119],[-0.799191,54.019055],[-0.734257,54.030259],[-0.730489,54.012701],[-0.683502,54.008802],[-0.687039,54.030768],[-0.659484,54.03717],[-0.644654,54.055113],[-0.660317,54.0631],[-0.615523,54.070494],[-0.563137,54.094],[-0.524612,54.085475],[-0.465942,54.107633],[-0.454351,54.116763],[-0.45854,54.125974],[-0.427094,54.137443],[-0.433169,54.164073],[-0.41825,54.174063]]]}',
      metadata: ["Ryedale"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.212665,54.157734],[-0.245193,54.166475],[-0.27689,54.186124],[-0.281992,54.203505],[-0.283823,54.209736],[-0.280548,54.210952],[-0.280705,54.211601],[-0.277444,54.212105],[-0.265491,54.216544],[-0.355181,54.244279],[-0.365827,54.247365],[-0.366138,54.24766],[-0.36872,54.248457],[-0.396691,54.274527],[-0.384878,54.288065],[-0.384767,54.288225],[-0.407436,54.293462],[-0.417081,54.331444],[-0.432692,54.340167],[-0.461491,54.385692],[-0.461667,54.38597],[-0.463607,54.389033],[-0.490976,54.407667],[-0.49769,54.409605],[-0.503741,54.408355],[-0.511786,54.413674],[-0.524202,54.417255],[-0.527929,54.424341],[-0.528715,54.42486],[-0.528474,54.425377],[-0.532719,54.433446],[-0.520839,54.446263],[-0.554426,54.469656],[-0.573628,54.48132],[-0.610367,54.493514],[-0.623877,54.495466],[-0.670416,54.500771],[-0.682059,54.519609],[-0.683472,54.520226],[-0.692783,54.520693],[-0.699121,54.527058],[-0.712806,54.53303],[-0.734515,54.530204],[-0.743496,54.528198],[-0.764777,54.54825],[-0.766824,54.550177],[-0.784595,54.55793],[-0.791803,54.558313],[-0.800419,54.551011],[-0.826985,54.548575],[-0.848647,54.530004],[-0.848531,54.487973],[-0.880825,54.497047],[-0.952952,54.488036],[-1.003401,54.503012],[-1.036851,54.494044],[-1.016454,54.476643],[-0.983516,54.478877],[-0.972092,54.460846],[-1.033941,54.45899],[-1.04839,54.452146],[-1.059381,54.412578],[-1.026873,54.415344],[-0.98784,54.395954],[-0.950443,54.408858],[-0.823634,54.382518],[-0.794219,54.354356],[-0.753122,54.368592],[-0.732324,54.355279],[-0.711192,54.357178],[-0.687233,54.373109],[-0.669525,54.374369],[-0.66132,54.36651],[-0.632616,54.375952],[-0.622034,54.344418],[-0.567293,54.311392],[-0.605298,54.297148],[-0.613114,54.269658],[-0.597949,54.234838],[-0.618225,54.204973],[-0.586262,54.198634],[-0.566418,54.202388],[-0.550411,54.192576],[-0.537734,54.200431],[-0.520018,54.197766],[-0.441423,54.215761],[-0.41825,54.174063],[-0.390747,54.176521],[-0.374927,54.154113],[-0.346397,54.146873],[-0.323842,54.150297],[-0.304236,54.136262],[-0.26542,54.140559],[-0.229747,54.13244],[-0.212665,54.157734]]]}',
      metadata: ["Scarborough"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.195638,53.92238],[-1.221788,53.925044],[-1.235278,53.935009],[-1.269672,53.934966],[-1.260798,53.919871],[-1.27027,53.916975],[-1.273538,53.893595],[-1.288493,53.904329],[-1.313723,53.904702],[-1.322271,53.900457],[-1.312603,53.865317],[-1.35297,53.856751],[-1.326557,53.840423],[-1.336097,53.83359],[-1.303623,53.816536],[-1.314872,53.809557],[-1.31381,53.781556],[-1.290386,53.763194],[-1.294942,53.755463],[-1.312239,53.755889],[-1.315357,53.743681],[-1.302043,53.741725],[-1.268702,53.71498],[-1.229573,53.714905],[-1.226541,53.709883],[-1.219812,53.714419],[-1.198818,53.700733],[-1.199015,53.694888],[-1.244417,53.69243],[-1.255476,53.645418],[-1.232844,53.621112],[-1.217469,53.624224],[-1.209827,53.643164],[-1.190313,53.635917],[-1.152298,53.642777],[-1.135407,53.632729],[-1.121744,53.646719],[-1.066072,53.648891],[-1.048663,53.656057],[-1.10357,53.669557],[-1.081046,53.684615],[-1.074934,53.703996],[-1.061658,53.706766],[-1.038926,53.693882],[-0.980328,53.696942],[-0.980486,53.70504],[-0.96265,53.700796],[-0.957715,53.714835],[-0.903739,53.718359],[-0.910951,53.73267],[-0.960737,53.736016],[-0.973606,53.749877],[-0.928254,53.765598],[-0.934499,53.801777],[-0.920106,53.816093],[-0.940611,53.823518],[-0.948227,53.86161],[-0.923518,53.880766],[-0.944072,53.888122],[-0.992833,53.875211],[-1.008205,53.889995],[-1.06496,53.874586],[-1.0912,53.885816],[-1.105103,53.875733],[-1.195638,53.92238]]]}',
      metadata: ["Selby"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.259925,53.164479],[-1.295962,53.171225],[-1.300712,53.164215],[-1.323447,53.162342],[-1.32178,53.13065],[-1.300619,53.102049],[-1.309251,53.09677],[-1.302883,53.088202],[-1.331635,53.080988],[-1.344428,53.065543],[-1.335868,53.052966],[-1.303525,53.041884],[-1.284826,53.048227],[-1.253434,53.039793],[-1.229064,53.022744],[-1.225148,53.008096],[-1.209883,53.018143],[-1.182746,53.018569],[-1.182055,53.048405],[-1.217424,53.049029],[-1.231289,53.062065],[-1.22587,53.081499],[-1.164251,53.103269],[-1.177891,53.11481],[-1.239918,53.139587],[-1.240983,53.153096],[-1.255324,53.154616],[-1.259925,53.164479]]]}',
      metadata: ["Ashfield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.797483,53.455064],[-0.871919,53.466311],[-0.916249,53.460296],[-0.920247,53.465508],[-0.900471,53.475156],[-0.935565,53.502517],[-0.953259,53.484424],[-0.985978,53.471673],[-0.99567,53.436927],[-1.014347,53.426295],[-1.030515,53.425195],[-1.03095,53.43098],[-1.080439,53.426868],[-1.116041,53.407349],[-1.115579,53.397186],[-1.134608,53.390032],[-1.130537,53.375571],[-1.146033,53.369041],[-1.13854,53.355908],[-1.162613,53.356844],[-1.156843,53.34497],[-1.141007,53.346748],[-1.138718,53.341383],[-1.199743,53.31144],[-1.176627,53.305132],[-1.180117,53.287135],[-1.166488,53.277655],[-1.181542,53.270032],[-1.17469,53.265165],[-1.20245,53.26122],[-1.213027,53.247672],[-1.201997,53.235555],[-1.209424,53.217697],[-1.123807,53.224645],[-1.103296,53.235607],[-1.027632,53.261035],[-1.007011,53.236318],[-0.967542,53.235334],[-0.947263,53.22583],[-0.94892,53.214119],[-0.894248,53.223671],[-0.857839,53.212207],[-0.83982,53.21892],[-0.821571,53.20135],[-0.787293,53.204565],[-0.780363,53.196398],[-0.777074,53.246908],[-0.76428,53.272739],[-0.778125,53.283854],[-0.763502,53.299438],[-0.750967,53.293602],[-0.747138,53.304333],[-0.749955,53.324218],[-0.766474,53.330107],[-0.758616,53.353838],[-0.774459,53.364432],[-0.791132,53.363552],[-0.775236,53.377759],[-0.790443,53.385854],[-0.77714,53.396914],[-0.788624,53.415261],[-0.818092,53.426979],[-0.820515,53.440748],[-0.797483,53.455064]]]}',
      metadata: ["Bassetlaw"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.225148,53.008096],[-1.229064,53.022744],[-1.253434,53.039793],[-1.284826,53.048227],[-1.303525,53.041884],[-1.335868,53.052966],[-1.331986,53.031145],[-1.307444,53.003655],[-1.287749,52.969662],[-1.292501,52.955574],[-1.281031,52.949158],[-1.281801,52.910293],[-1.246215,52.902986],[-1.239706,52.892289],[-1.220493,52.895564],[-1.21392,52.904415],[-1.210899,52.912153],[-1.199009,52.909479],[-1.182301,52.917336],[-1.246891,52.953196],[-1.231979,52.967643],[-1.246839,52.984543],[-1.226178,52.981142],[-1.203352,52.987529],[-1.219107,52.991499],[-1.225148,53.008096]]]}',
      metadata: ["Broxtowe"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.007086,52.985457],[-1.038118,52.99563],[-1.034087,53.004879],[-1.052449,53.010514],[-1.02973,53.024256],[-1.080664,53.052471],[-1.093431,53.067353],[-1.088598,53.077575],[-1.13039,53.073609],[-1.120643,53.086749],[-1.140148,53.092352],[-1.139287,53.099645],[-1.164251,53.103269],[-1.22587,53.081499],[-1.231289,53.062065],[-1.217424,53.049029],[-1.182055,53.048405],[-1.182746,53.018569],[-1.143513,53.006501],[-1.153656,52.997185],[-1.138255,52.994844],[-1.142489,52.986288],[-1.122786,52.983467],[-1.120107,52.967825],[-1.086115,52.94857],[-1.073338,52.955891],[-1.041462,52.951303],[-1.037563,52.983584],[-1.016553,52.980244],[-1.007086,52.985457]]]}',
      metadata: ["Gedling"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.177891,53.11481],[-1.147123,53.121955],[-1.120217,53.119081],[-1.130141,53.141618],[-1.111056,53.153428],[-1.153021,53.175137],[-1.111227,53.198926],[-1.094764,53.228614],[-1.103296,53.235607],[-1.123807,53.224645],[-1.209424,53.217697],[-1.196936,53.184818],[-1.240446,53.178651],[-1.259925,53.164479],[-1.255324,53.154616],[-1.240983,53.153096],[-1.239918,53.139587],[-1.177891,53.11481]]]}',
      metadata: ["Mansfield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.666577,53.239702],[-0.688027,53.258391],[-0.734151,53.254004],[-0.735083,53.243874],[-0.777074,53.246908],[-0.780363,53.196398],[-0.787293,53.204565],[-0.821571,53.20135],[-0.83982,53.21892],[-0.857839,53.212207],[-0.894248,53.223671],[-0.94892,53.214119],[-0.947263,53.22583],[-0.967542,53.235334],[-1.007011,53.236318],[-1.027632,53.261035],[-1.103296,53.235607],[-1.094764,53.228614],[-1.111227,53.198926],[-1.153021,53.175137],[-1.111056,53.153428],[-1.130141,53.141618],[-1.120217,53.119081],[-1.147123,53.121955],[-1.177891,53.11481],[-1.164251,53.103269],[-1.139287,53.099645],[-1.140148,53.092352],[-1.120643,53.086749],[-1.13039,53.073609],[-1.088598,53.077575],[-1.093431,53.067353],[-1.080664,53.052471],[-1.02973,53.024256],[-1.052449,53.010514],[-1.034087,53.004879],[-1.038118,52.99563],[-1.007086,52.985457],[-0.975962,52.986326],[-0.91012,53.035928],[-0.87978,53.006353],[-0.864553,53.011344],[-0.822917,53.000986],[-0.815158,52.985661],[-0.836072,52.967921],[-0.820022,52.960464],[-0.812851,52.957464],[-0.79615,52.976732],[-0.778279,52.976923],[-0.804086,53.012505],[-0.795825,53.010598],[-0.788414,53.025853],[-0.760826,53.02941],[-0.749552,53.055116],[-0.716204,53.059059],[-0.713467,53.066047],[-0.695132,53.06629],[-0.729618,53.097902],[-0.716755,53.116185],[-0.732407,53.127802],[-0.715375,53.136883],[-0.71816,53.177288],[-0.764019,53.182575],[-0.730569,53.210756],[-0.714753,53.207608],[-0.697616,53.220237],[-0.675872,53.217644],[-0.666577,53.239702]]]}',
      metadata: ["Newark and Sherwood"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.820022,52.960464],[-0.836072,52.967921],[-0.815158,52.985661],[-0.822917,53.000986],[-0.864553,53.011344],[-0.87978,53.006353],[-0.91012,53.035928],[-0.975962,52.986326],[-1.007086,52.985457],[-1.016553,52.980244],[-1.037563,52.983584],[-1.041462,52.951303],[-1.073338,52.955891],[-1.086115,52.94857],[-1.099677,52.941975],[-1.13176,52.942816],[-1.141883,52.93199],[-1.152289,52.937026],[-1.158604,52.900062],[-1.176426,52.889068],[-1.21392,52.904415],[-1.220493,52.895564],[-1.239706,52.892289],[-1.240055,52.880109],[-1.267889,52.873369],[-1.274363,52.83613],[-1.261927,52.810453],[-1.225886,52.791678],[-1.197729,52.789412],[-1.163276,52.806522],[-1.130893,52.805827],[-1.116942,52.819577],[-1.074435,52.824727],[-1.071738,52.814011],[-1.036289,52.815877],[-1.021933,52.822052],[-0.982709,52.820675],[-0.977075,52.840738],[-0.959504,52.843782],[-0.928121,52.866083],[-0.940574,52.876856],[-0.916925,52.878932],[-0.857634,52.905642],[-0.862893,52.913114],[-0.824361,52.94179],[-0.833909,52.945881],[-0.820022,52.960464]]]}',
      metadata: ["Rushcliffe"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.118086,52.015426],[-1.134329,51.997296],[-1.163823,51.993412],[-1.19626,51.977431],[-1.241612,51.986293],[-1.283397,51.979547],[-1.278164,52.014273],[-1.31292,52.051453],[-1.297509,52.078057],[-1.31816,52.079921],[-1.321165,52.087019],[-1.248085,52.097161],[-1.331897,52.168485],[-1.348708,52.135132],[-1.366147,52.136075],[-1.393303,52.118963],[-1.370842,52.117534],[-1.35777,52.10131],[-1.3854,52.094146],[-1.425855,52.118249],[-1.453458,52.113009],[-1.447188,52.097625],[-1.477302,52.101351],[-1.487804,52.093957],[-1.522826,51.996843],[-1.493668,51.974899],[-1.454077,51.979671],[-1.437372,51.989193],[-1.409652,51.972708],[-1.401868,51.97987],[-1.377319,51.979637],[-1.361396,51.968537],[-1.361858,51.948375],[-1.332465,51.942149],[-1.339952,51.934901],[-1.298919,51.913156],[-1.303691,51.902612],[-1.291333,51.896681],[-1.297992,51.888393],[-1.286253,51.874838],[-1.302113,51.869116],[-1.296745,51.8611],[-1.333994,51.862479],[-1.339175,51.856173],[-1.342001,51.830181],[-1.326695,51.826616],[-1.338341,51.819952],[-1.322343,51.78784],[-1.304986,51.789801],[-1.30282,51.780965],[-1.28365,51.796272],[-1.258094,51.793511],[-1.252704,51.786499],[-1.241964,51.809996],[-1.194519,51.796994],[-1.187317,51.812136],[-1.16741,51.813778],[-1.154076,51.796634],[-1.126818,51.799503],[-1.123541,51.794181],[-1.12489,51.807511],[-1.110097,51.817305],[-1.140676,51.83469],[-1.121599,51.845342],[-1.078449,51.829255],[-1.047123,51.839814],[-1.061978,51.844127],[-1.064642,51.868697],[-1.077605,51.876731],[-1.068975,51.887263],[-1.093519,51.893937],[-1.079356,51.917222],[-1.086673,51.922646],[-1.054616,51.947959],[-1.078951,51.943366],[-1.095167,51.957432],[-1.053121,52.002453],[-1.118086,52.015426]]]}',
      metadata: ["Cherwell"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.252704,51.786499],[-1.258094,51.793511],[-1.28365,51.796272],[-1.30282,51.780965],[-1.290738,51.750715],[-1.24131,51.72516],[-1.222289,51.710984],[-1.189586,51.714562],[-1.190313,51.727046],[-1.175794,51.733482],[-1.193988,51.73653],[-1.194385,51.756664],[-1.180208,51.765865],[-1.220815,51.772258],[-1.252704,51.786499]]]}',
      metadata: ["Oxford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.123541,51.794181],[-1.126818,51.799503],[-1.154076,51.796634],[-1.16741,51.813778],[-1.187317,51.812136],[-1.194519,51.796994],[-1.241964,51.809996],[-1.252704,51.786499],[-1.220815,51.772258],[-1.180208,51.765865],[-1.194385,51.756664],[-1.193988,51.73653],[-1.175794,51.733482],[-1.190313,51.727046],[-1.189586,51.714562],[-1.222289,51.710984],[-1.24131,51.72516],[-1.22213,51.688291],[-1.226805,51.676092],[-1.250036,51.666593],[-1.278112,51.668658],[-1.289468,51.646913],[-1.280522,51.643025],[-1.263081,51.650093],[-1.219055,51.641869],[-1.243067,51.622517],[-1.265385,51.618889],[-1.27327,51.611635],[-1.265063,51.603753],[-1.290225,51.577897],[-1.269286,51.584572],[-1.230062,51.580327],[-1.203872,51.592136],[-1.226792,51.535158],[-1.204644,51.537604],[-1.20465,51.528395],[-1.140375,51.542911],[-1.142053,51.516195],[-1.113186,51.509592],[-1.10218,51.489674],[-1.087882,51.485754],[-1.05135,51.49186],[-1.036557,51.475227],[-1.013564,51.466292],[-0.998399,51.484305],[-0.957487,51.493081],[-0.941137,51.474978],[-0.955184,51.465334],[-0.949168,51.459513],[-0.921698,51.467931],[-0.89385,51.496643],[-0.870253,51.503629],[-0.878512,51.523486],[-0.900134,51.536661],[-0.896882,51.544863],[-0.901701,51.556086],[-0.938602,51.571042],[-0.94153,51.585461],[-0.916868,51.599313],[-0.943075,51.604887],[-0.938566,51.617943],[-0.95003,51.628907],[-0.934586,51.636699],[-0.950726,51.650741],[-0.927251,51.651444],[-0.932213,51.664868],[-0.917729,51.6724],[-0.877707,51.668385],[-0.897896,51.676401],[-0.879896,51.680865],[-0.894773,51.692522],[-0.888377,51.719227],[-0.924074,51.747707],[-0.953674,51.757855],[-0.979796,51.760705],[-0.986131,51.75212],[-1.029783,51.757889],[-1.030435,51.744929],[-1.045471,51.744599],[-1.080852,51.756554],[-1.083239,51.780518],[-1.106361,51.781631],[-1.123541,51.794181]]]}',
      metadata: ["South Oxfordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.30282,51.780965],[-1.304986,51.789801],[-1.322343,51.78784],[-1.363785,51.772107],[-1.368715,51.723737],[-1.39192,51.706296],[-1.459009,51.713304],[-1.464557,51.69963],[-1.479039,51.70385],[-1.489866,51.694016],[-1.545188,51.703239],[-1.575645,51.700089],[-1.598563,51.687909],[-1.606045,51.692256],[-1.648254,51.684087],[-1.668459,51.680438],[-1.683059,51.69011],[-1.700189,51.670742],[-1.691938,51.652165],[-1.659954,51.634991],[-1.673736,51.62285],[-1.66701,51.616264],[-1.690617,51.60545],[-1.691111,51.583524],[-1.67654,51.569439],[-1.655045,51.576506],[-1.647691,51.571952],[-1.602812,51.518295],[-1.584708,51.524912],[-1.581187,51.536995],[-1.555008,51.553371],[-1.530959,51.546069],[-1.512939,51.55076],[-1.470744,51.528607],[-1.464423,51.538517],[-1.447832,51.536427],[-1.426591,51.545599],[-1.422769,51.535765],[-1.404858,51.547235],[-1.383779,51.540426],[-1.367321,51.552467],[-1.342403,51.543686],[-1.328721,51.563712],[-1.260656,51.53779],[-1.226792,51.535158],[-1.203872,51.592136],[-1.230062,51.580327],[-1.269286,51.584572],[-1.290225,51.577897],[-1.265063,51.603753],[-1.27327,51.611635],[-1.265385,51.618889],[-1.243067,51.622517],[-1.219055,51.641869],[-1.263081,51.650093],[-1.280522,51.643025],[-1.289468,51.646913],[-1.278112,51.668658],[-1.250036,51.666593],[-1.226805,51.676092],[-1.22213,51.688291],[-1.24131,51.72516],[-1.290738,51.750715],[-1.30282,51.780965]]]}',
      metadata: ["Vale of White Horse"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.322343,51.78784],[-1.338341,51.819952],[-1.326695,51.826616],[-1.342001,51.830181],[-1.339175,51.856173],[-1.333994,51.862479],[-1.296745,51.8611],[-1.302113,51.869116],[-1.286253,51.874838],[-1.297992,51.888393],[-1.291333,51.896681],[-1.303691,51.902612],[-1.298919,51.913156],[-1.339952,51.934901],[-1.332465,51.942149],[-1.361858,51.948375],[-1.361396,51.968537],[-1.377319,51.979637],[-1.401868,51.97987],[-1.409652,51.972708],[-1.437372,51.989193],[-1.454077,51.979671],[-1.493668,51.974899],[-1.522826,51.996843],[-1.557224,51.991658],[-1.549671,51.98086],[-1.563539,51.97704],[-1.600302,51.976942],[-1.591634,51.97045],[-1.612342,51.955403],[-1.665754,51.987489],[-1.662529,51.964005],[-1.632491,51.955651],[-1.615189,51.937682],[-1.64553,51.922294],[-1.633051,51.899225],[-1.658652,51.896551],[-1.667112,51.877],[-1.686868,51.8655],[-1.676385,51.85031],[-1.686462,51.834456],[-1.681932,51.803993],[-1.719489,51.783212],[-1.700705,51.770584],[-1.687021,51.739884],[-1.695871,51.723537],[-1.688,51.712045],[-1.648254,51.684087],[-1.606045,51.692256],[-1.598563,51.687909],[-1.575645,51.700089],[-1.545188,51.703239],[-1.489866,51.694016],[-1.479039,51.70385],[-1.464557,51.69963],[-1.459009,51.713304],[-1.39192,51.706296],[-1.368715,51.723737],[-1.363785,51.772107],[-1.322343,51.78784]]]}',
      metadata: ["West Oxfordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.346305,51.130511],[-2.29837,51.175437],[-2.245341,51.253876],[-2.253497,51.289835],[-2.265253,51.29622],[-2.28068,51.293463],[-2.285068,51.309457],[-2.271955,51.314254],[-2.273095,51.322879],[-2.289091,51.325272],[-2.387181,51.294643],[-2.400917,51.3048],[-2.451723,51.274251],[-2.473792,51.277987],[-2.478001,51.273097],[-2.506356,51.278991],[-2.497221,51.290841],[-2.557824,51.302661],[-2.627493,51.282871],[-2.638698,51.294823],[-2.694879,51.318094],[-2.764644,51.322577],[-2.765631,51.309031],[-2.732787,51.304116],[-2.732988,51.282217],[-2.714969,51.281743],[-2.720591,51.275588],[-2.709893,51.270108],[-2.7272,51.261217],[-2.73869,51.266448],[-2.77804,51.246911],[-2.779743,51.229904],[-2.751538,51.224192],[-2.745944,51.206272],[-2.793837,51.204342],[-2.807044,51.179753],[-2.83795,51.190518],[-2.842688,51.172941],[-2.786014,51.15295],[-2.796786,51.128207],[-2.786113,51.11243],[-2.824313,51.120366],[-2.819873,51.107933],[-2.747127,51.095336],[-2.734446,51.106747],[-2.707413,51.091632],[-2.715469,51.07772],[-2.705853,51.072034],[-2.708154,51.080208],[-2.697343,51.07623],[-2.674514,51.083425],[-2.663959,51.099267],[-2.648233,51.10207],[-2.634399,51.088235],[-2.642527,51.082641],[-2.632629,51.06328],[-2.598012,51.070281],[-2.601304,51.084649],[-2.586048,51.084462],[-2.60116,51.08898],[-2.598099,51.098407],[-2.57924,51.08878],[-2.5217,51.101188],[-2.482075,51.119288],[-2.453838,51.122794],[-2.428155,51.143288],[-2.37146,51.143455],[-2.346305,51.130511]]]}',
      metadata: ["Mendip"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.000138,51.322129],[-3.03547,51.328536],[-3.012062,51.32103],[-3.021538,51.265474],[-3.000508,51.241619],[-2.999089,51.224978],[-2.984286,51.220426],[-2.998936,51.223172],[-3.002265,51.225954],[-3.022655,51.196282],[-3.03255,51.194576],[-3.019263,51.218476],[-3.054017,51.206206],[-3.051655,51.20326],[-3.067474,51.19446],[-3.085468,51.196079],[-3.116233,51.176054],[-3.11373,51.169911],[-3.15754,51.16367],[-3.178679,51.146705],[-3.205468,51.142806],[-3.215884,51.129557],[-3.168425,51.104307],[-3.142166,51.109279],[-3.140858,51.099515],[-3.159951,51.09086],[-3.137964,51.072195],[-3.046452,51.06556],[-3.02468,51.059843],[-3.031212,51.047914],[-3.016239,51.05479],[-2.99745,51.053784],[-2.982153,51.040821],[-2.957783,51.047431],[-2.926826,51.061527],[-2.948752,51.073508],[-2.925265,51.08513],[-2.912195,51.08516],[-2.888193,51.069099],[-2.877434,51.081281],[-2.857295,51.077947],[-2.849945,51.103175],[-2.819873,51.107933],[-2.824313,51.120366],[-2.786113,51.11243],[-2.796786,51.128207],[-2.786014,51.15295],[-2.842688,51.172941],[-2.83795,51.190518],[-2.807044,51.179753],[-2.793837,51.204342],[-2.745944,51.206272],[-2.751538,51.224192],[-2.779743,51.229904],[-2.77804,51.246911],[-2.73869,51.266448],[-2.7272,51.261217],[-2.709893,51.270108],[-2.720591,51.275588],[-2.714969,51.281743],[-2.732988,51.282217],[-2.732787,51.304116],[-2.765631,51.309031],[-2.764644,51.322577],[-2.818673,51.326365],[-2.810236,51.301424],[-2.877146,51.300063],[-2.88492,51.306665],[-2.897104,51.290615],[-2.93688,51.303079],[-2.962039,51.304791],[-2.972619,51.295712],[-2.98982,51.299035],[-2.988104,51.306477],[-2.993163,51.301011],[-2.986955,51.311459],[-2.98665,51.312781],[-2.989873,51.316283],[-2.990114,51.316545],[-3.000138,51.322129]]]}',
      metadata: ["Sedgemoor"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.346305,51.130511],[-2.37146,51.143455],[-2.428155,51.143288],[-2.453838,51.122794],[-2.482075,51.119288],[-2.5217,51.101188],[-2.57924,51.08878],[-2.598099,51.098407],[-2.60116,51.08898],[-2.586048,51.084462],[-2.601304,51.084649],[-2.598012,51.070281],[-2.632629,51.06328],[-2.642527,51.082641],[-2.634399,51.088235],[-2.648233,51.10207],[-2.663959,51.099267],[-2.674514,51.083425],[-2.697343,51.07623],[-2.708154,51.080208],[-2.705853,51.072034],[-2.715469,51.07772],[-2.707413,51.091632],[-2.734446,51.106747],[-2.747127,51.095336],[-2.819873,51.107933],[-2.849945,51.103175],[-2.857295,51.077947],[-2.877434,51.081281],[-2.888193,51.069099],[-2.893108,51.055035],[-2.883844,51.045787],[-2.950477,51.011269],[-2.944311,51.003273],[-2.978662,50.99762],[-2.980461,50.964992],[-3.007708,50.957071],[-3.032821,50.936308],[-3.088377,50.938007],[-3.084572,50.921645],[-3.052423,50.908264],[-3.054786,50.874618],[-3.032632,50.861639],[-3.036806,50.851065],[-2.973581,50.855712],[-2.969827,50.83418],[-2.954321,50.821173],[-2.930159,50.840928],[-2.886244,50.85059],[-2.828957,50.84866],[-2.811425,50.86341],[-2.792294,50.852818],[-2.757499,50.866903],[-2.714556,50.863894],[-2.71439,50.871144],[-2.660611,50.887105],[-2.616101,50.881634],[-2.609572,50.891554],[-2.624065,50.907867],[-2.60404,50.926725],[-2.616094,50.940581],[-2.5982,50.948574],[-2.603387,50.976344],[-2.595845,50.98134],[-2.586023,50.976869],[-2.57463,50.986694],[-2.556207,50.979535],[-2.545423,50.985081],[-2.547435,50.999542],[-2.526416,50.991908],[-2.502347,50.993836],[-2.490345,50.972772],[-2.456204,50.949344],[-2.442867,50.95966],[-2.447178,50.96785],[-2.427991,50.971387],[-2.414928,50.960583],[-2.344557,50.978829],[-2.354897,50.990881],[-2.376921,50.990765],[-2.381348,51.004922],[-2.330014,51.041345],[-2.349978,51.068801],[-2.325853,51.079676],[-2.362529,51.101624],[-2.364528,51.118879],[-2.344539,51.124678],[-2.346305,51.130511]]]}',
      metadata: ["South Somerset"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.95457,52.662641],[-1.95925,52.684149],[-1.915511,52.710639],[-1.937701,52.716273],[-1.910807,52.751191],[-1.911637,52.759271],[-1.943944,52.77376],[-1.97313,52.761558],[-2.017583,52.759265],[-2.026802,52.736318],[-2.030994,52.705306],[-2.054632,52.690059],[-2.051883,52.678705],[-2.004079,52.668683],[-1.98655,52.640409],[-1.960963,52.642815],[-1.95457,52.662641]]]}',
      metadata: ["Cannock Chase"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.746003,52.868693],[-1.777221,52.883815],[-1.82821,52.884428],[-1.856576,52.923391],[-1.829799,52.945706],[-1.826781,52.977086],[-1.762405,52.999858],[-1.758931,53.037316],[-1.778981,53.044844],[-1.79466,53.039336],[-1.784865,53.024584],[-1.796001,53.013209],[-1.813139,53.029387],[-1.830482,53.032972],[-1.856033,53.034097],[-1.871595,53.020032],[-1.884177,53.020055],[-1.880595,52.994602],[-1.859909,52.977769],[-1.925467,52.963191],[-1.903549,52.946013],[-1.910186,52.939809],[-1.926893,52.941297],[-1.94051,52.931476],[-1.971116,52.940791],[-2.041526,52.917477],[-2.01275,52.906581],[-1.999704,52.892268],[-1.97966,52.893279],[-1.960537,52.870227],[-1.935985,52.87061],[-1.936785,52.848093],[-1.967871,52.824361],[-1.951327,52.807428],[-1.901943,52.795322],[-1.889879,52.800374],[-1.853735,52.782322],[-1.842357,52.795932],[-1.817846,52.793125],[-1.809504,52.783143],[-1.82842,52.769042],[-1.817526,52.755191],[-1.790532,52.753786],[-1.784169,52.745804],[-1.767146,52.750807],[-1.750603,52.739148],[-1.704158,52.732079],[-1.666537,52.784723],[-1.61113,52.781404],[-1.614345,52.788274],[-1.58887,52.799866],[-1.591827,52.809491],[-1.610495,52.816404],[-1.585352,52.831715],[-1.626755,52.854437],[-1.690272,52.864469],[-1.700609,52.860584],[-1.704344,52.866681],[-1.725322,52.859663],[-1.746003,52.868693]]]}',
      metadata: ["East Staffordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.704158,52.732079],[-1.750603,52.739148],[-1.767146,52.750807],[-1.784169,52.745804],[-1.790532,52.753786],[-1.817526,52.755191],[-1.82842,52.769042],[-1.809504,52.783143],[-1.817846,52.793125],[-1.842357,52.795932],[-1.853735,52.782322],[-1.889879,52.800374],[-1.901943,52.795322],[-1.951327,52.807428],[-1.958131,52.798491],[-1.943944,52.77376],[-1.911637,52.759271],[-1.910807,52.751191],[-1.937701,52.716273],[-1.915511,52.710639],[-1.95925,52.684149],[-1.95457,52.662641],[-1.945402,52.656299],[-1.933569,52.66161],[-1.910878,52.656501],[-1.918015,52.649895],[-1.905084,52.643208],[-1.915985,52.635286],[-1.886088,52.615412],[-1.892266,52.599152],[-1.872564,52.584945],[-1.853954,52.601925],[-1.828129,52.608722],[-1.796528,52.599123],[-1.788081,52.587863],[-1.742408,52.594325],[-1.729311,52.587933],[-1.700393,52.590913],[-1.691512,52.617508],[-1.702206,52.61585],[-1.731333,52.632787],[-1.734466,52.644594],[-1.722439,52.651385],[-1.684309,52.647247],[-1.644943,52.657517],[-1.589645,52.687261],[-1.597541,52.700422],[-1.655042,52.698799],[-1.656608,52.721748],[-1.704158,52.732079]]]}',
      metadata: ["Lichfield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.181207,53.089797],[-2.211315,53.115824],[-2.247407,53.08985],[-2.253248,53.093977],[-2.293376,53.078326],[-2.318051,53.081359],[-2.347586,53.05617],[-2.381249,53.052551],[-2.384227,53.026168],[-2.370468,53.014576],[-2.383045,53.007787],[-2.380794,52.998411],[-2.368731,52.979359],[-2.379718,52.976065],[-2.386208,52.953217],[-2.412899,52.96174],[-2.405602,52.947294],[-2.425269,52.949999],[-2.437123,52.943599],[-2.470841,52.905869],[-2.446142,52.874008],[-2.440412,52.881227],[-2.378938,52.891721],[-2.379172,52.912887],[-2.357917,52.918597],[-2.34737,52.91411],[-2.319912,52.932432],[-2.264112,52.923696],[-2.27802,52.951247],[-2.270147,52.963478],[-2.212514,52.980579],[-2.204341,52.981398],[-2.215487,53.015305],[-2.202517,53.01996],[-2.238761,53.073339],[-2.198615,53.092719],[-2.181207,53.089797]]]}',
      metadata: ["Newcastle-under-Lyme"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.026802,52.736318],[-2.043401,52.761349],[-2.076164,52.766967],[-2.065964,52.773547],[-2.095164,52.786433],[-2.098961,52.773233],[-2.114582,52.768806],[-2.147043,52.782584],[-2.160735,52.742744],[-2.1779,52.744011],[-2.187729,52.732989],[-2.216802,52.73292],[-2.245346,52.715164],[-2.274956,52.742789],[-2.312208,52.740867],[-2.315576,52.732947],[-2.308604,52.720746],[-2.324834,52.705336],[-2.319908,52.695398],[-2.30304,52.682953],[-2.247729,52.683074],[-2.238715,52.663701],[-2.247687,52.65666],[-2.234709,52.655854],[-2.232894,52.647694],[-2.256171,52.609798],[-2.281584,52.605874],[-2.323799,52.612953],[-2.322024,52.593636],[-2.300293,52.593027],[-2.261938,52.56906],[-2.282477,52.553396],[-2.256405,52.541796],[-2.269215,52.530689],[-2.260943,52.524102],[-2.29139,52.51168],[-2.312749,52.489209],[-2.287382,52.455317],[-2.294964,52.448948],[-2.269505,52.438616],[-2.167707,52.42378],[-2.164851,52.430204],[-2.176483,52.454822],[-2.16742,52.471541],[-2.19194,52.503455],[-2.144211,52.517074],[-2.15221,52.525696],[-2.135587,52.534461],[-2.133487,52.554067],[-2.175535,52.554407],[-2.180337,52.574505],[-2.206696,52.585179],[-2.189186,52.588775],[-2.196397,52.606615],[-2.169157,52.609338],[-2.168351,52.61999],[-2.131644,52.637623],[-2.101241,52.635053],[-2.081002,52.611905],[-2.050718,52.620523],[-2.030123,52.616955],[-2.029466,52.625674],[-1.98655,52.640409],[-2.004079,52.668683],[-2.051883,52.678705],[-2.054632,52.690059],[-2.030994,52.705306],[-2.026802,52.736318]]]}',
      metadata: ["South Staffordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.088128,52.973852],[-2.081218,52.966906],[-2.121657,52.956086],[-2.130403,52.971176],[-2.145711,52.976111],[-2.162595,52.953365],[-2.176898,52.953707],[-2.181609,52.946206],[-2.212514,52.980579],[-2.270147,52.963478],[-2.27802,52.951247],[-2.264112,52.923696],[-2.319912,52.932432],[-2.34737,52.91411],[-2.357917,52.918597],[-2.379172,52.912887],[-2.378938,52.891721],[-2.393756,52.83662],[-2.416347,52.827006],[-2.377655,52.811643],[-2.371414,52.795285],[-2.385031,52.789553],[-2.312208,52.740867],[-2.274956,52.742789],[-2.245346,52.715164],[-2.216802,52.73292],[-2.187729,52.732989],[-2.1779,52.744011],[-2.160735,52.742744],[-2.147043,52.782584],[-2.114582,52.768806],[-2.098961,52.773233],[-2.095164,52.786433],[-2.065964,52.773547],[-2.076164,52.766967],[-2.043401,52.761349],[-2.026802,52.736318],[-2.017583,52.759265],[-1.97313,52.761558],[-1.943944,52.77376],[-1.958131,52.798491],[-1.951327,52.807428],[-1.967871,52.824361],[-1.936785,52.848093],[-1.935985,52.87061],[-1.960537,52.870227],[-1.97966,52.893279],[-1.999704,52.892268],[-2.01275,52.906581],[-2.041526,52.917477],[-2.063043,52.922439],[-2.043032,52.951353],[-2.088128,52.973852]]]}',
      metadata: ["Stafford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.898633,53.199957],[-1.956707,53.213748],[-1.962365,53.226242],[-1.987408,53.213586],[-2.000202,53.193737],[-2.046527,53.192648],[-2.070233,53.171686],[-2.112077,53.16866],[-2.140439,53.183813],[-2.141411,53.156652],[-2.155645,53.159619],[-2.211315,53.115824],[-2.181207,53.089797],[-2.1717,53.089447],[-2.161147,53.07012],[-2.1254,53.064579],[-2.116583,53.048033],[-2.131779,53.047334],[-2.123737,53.021638],[-2.103467,53.010858],[-2.104948,52.997694],[-2.088571,52.997139],[-2.091888,52.985608],[-2.079239,52.9745],[-2.088128,52.973852],[-2.043032,52.951353],[-2.063043,52.922439],[-2.041526,52.917477],[-1.971116,52.940791],[-1.94051,52.931476],[-1.926893,52.941297],[-1.910186,52.939809],[-1.903549,52.946013],[-1.925467,52.963191],[-1.859909,52.977769],[-1.880595,52.994602],[-1.884177,53.020055],[-1.871595,53.020032],[-1.856033,53.034097],[-1.830482,53.032972],[-1.813139,53.029387],[-1.796001,53.013209],[-1.784865,53.024584],[-1.79466,53.039336],[-1.778981,53.044844],[-1.775653,53.059355],[-1.794239,53.088394],[-1.783726,53.102828],[-1.821876,53.136704],[-1.81254,53.154343],[-1.860732,53.188426],[-1.898633,53.199957]]]}',
      metadata: ["Staffordshire Moorlands"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.700393,52.590913],[-1.66564,52.592252],[-1.643777,52.603355],[-1.642422,52.64094],[-1.63292,52.643481],[-1.644943,52.657517],[-1.684309,52.647247],[-1.722439,52.651385],[-1.734466,52.644594],[-1.731333,52.632787],[-1.702206,52.61585],[-1.691512,52.617508],[-1.700393,52.590913]]]}',
      metadata: ["Tamworth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[1.282172,51.971078],[1.282601,51.966099],[1.285873,51.964647],[1.282172,51.971078]]],[[[1.15903,52.031961],[1.15639,52.034777],[1.150519,52.033722],[1.15903,52.031961]]],[[[0.814169,52.170733],[0.786919,52.177894],[0.768689,52.175],[0.759129,52.157513],[0.741992,52.159331],[0.738336,52.169971],[0.722799,52.165104],[0.715964,52.179281],[0.698145,52.181308],[0.6917,52.157581],[0.645374,52.160177],[0.626895,52.128991],[0.656901,52.085442],[0.684204,52.086969],[0.712118,52.072242],[0.703178,52.065273],[0.716263,52.048687],[0.6994,52.048438],[0.696512,52.039302],[0.714397,52.027319],[0.740634,52.031202],[0.738527,52.010699],[0.761149,51.997483],[0.759668,51.985429],[0.774633,51.982592],[0.772261,51.970425],[0.78147,51.966513],[0.810877,51.960696],[0.82465,51.96855],[0.85024,51.960767],[0.889688,51.973387],[0.925169,51.976194],[0.942911,51.97069],[0.96259,51.977165],[0.970983,51.962408],[0.99871,51.963967],[1.024712,51.954902],[1.047712,51.959498],[1.06868,51.950423],[1.085728,51.959009],[1.130372,51.953522],[1.163517,51.970593],[1.18778,51.955532],[1.200316,51.954488],[1.219771,51.952866],[1.24295,51.961395],[1.272122,51.957112],[1.275547,51.957632],[1.267257,51.987818],[1.211833,51.996454],[1.203659,52.001352],[1.180082,52.01547],[1.177634,52.016935],[1.169872,52.02039],[1.167335,52.023098],[1.149789,52.033591],[1.129577,52.029955],[1.112944,52.034578],[1.107277,52.046519],[1.122021,52.061522],[1.109197,52.071004],[1.064862,52.065388],[1.046293,52.078105],[1.035982,52.068361],[1.003808,52.09861],[0.970778,52.095671],[0.97312,52.106923],[0.951547,52.110578],[0.93805,52.157541],[0.89237,52.150472],[0.893883,52.157678],[0.88158,52.154701],[0.868823,52.165577],[0.826064,52.162586],[0.814169,52.170733]]]]}',
      metadata: ["Babergh"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[1.17183,52.020409],[1.167335,52.023098],[1.169872,52.02039],[1.17183,52.020409]]],[[[1.157839,52.088752],[1.142292,52.09447],[1.138533,52.088393],[1.110933,52.089204],[1.109197,52.071004],[1.122021,52.061522],[1.107277,52.046519],[1.112944,52.034578],[1.129577,52.029955],[1.149789,52.033591],[1.149066,52.034022],[1.150519,52.033722],[1.15639,52.034777],[1.15903,52.031961],[1.160715,52.031613],[1.166238,52.029856],[1.178847,52.021547],[1.182542,52.020512],[1.209477,52.020769],[1.22361,52.029434],[1.201795,52.037348],[1.206455,52.064019],[1.189894,52.08045],[1.164258,52.0795],[1.157839,52.088752]]]]}',
      metadata: ["Ipswich"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[1.157839,52.088752],[1.177767,52.1207],[1.169469,52.13125],[1.191403,52.139984],[1.213965,52.166539],[1.239843,52.170429],[1.254173,52.188131],[1.25673,52.198365],[1.241809,52.201751],[1.247452,52.228897],[1.286731,52.240544],[1.301018,52.259016],[1.339767,52.265926],[1.341269,52.284448],[1.327591,52.298479],[1.347296,52.293405],[1.344432,52.28209],[1.355657,52.274077],[1.401645,52.285698],[1.38414,52.294106],[1.384022,52.310667],[1.357476,52.322157],[1.357405,52.337274],[1.409509,52.363265],[1.374857,52.394677],[1.347101,52.404411],[1.316303,52.387391],[1.286235,52.39069],[1.259997,52.371099],[1.213867,52.35539],[1.068186,52.378521],[1.029957,52.378735],[0.967471,52.370113],[0.953171,52.356061],[0.957339,52.340372],[0.932697,52.33573],[0.925708,52.327361],[0.931124,52.312869],[0.900152,52.298916],[0.882935,52.300137],[0.887357,52.292719],[0.873625,52.299508],[0.843084,52.284917],[0.856327,52.268442],[0.842594,52.268027],[0.843865,52.2598],[0.825826,52.266515],[0.799441,52.264713],[0.797581,52.25123],[0.82713,52.238968],[0.815155,52.20391],[0.838129,52.195341],[0.836274,52.182169],[0.814169,52.170733],[0.826064,52.162586],[0.868823,52.165577],[0.88158,52.154701],[0.893883,52.157678],[0.89237,52.150472],[0.93805,52.157541],[0.951547,52.110578],[0.97312,52.106923],[0.970778,52.095671],[1.003808,52.09861],[1.035982,52.068361],[1.046293,52.078105],[1.064862,52.065388],[1.109197,52.071004],[1.110933,52.089204],[1.138533,52.088393],[1.142292,52.09447],[1.157839,52.088752]]]}',
      metadata: ["Mid Suffolk"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.317698,51.393667],[-0.327818,51.391837],[-0.359139,51.411903],[-0.38335,51.408538],[-0.409579,51.404657],[-0.432213,51.38399],[-0.4426,51.389822],[-0.457991,51.380567],[-0.475478,51.364089],[-0.466971,51.356575],[-0.481156,51.349358],[-0.463654,51.340616],[-0.462344,51.32996],[-0.437163,51.327447],[-0.445699,51.324141],[-0.439961,51.304657],[-0.409538,51.303144],[-0.405326,51.294892],[-0.394742,51.297948],[-0.396926,51.312817],[-0.360316,51.311803],[-0.330656,51.32901],[-0.33051,51.348419],[-0.307365,51.378384],[-0.317698,51.393667]]]}',
      metadata: ["Elmbridge"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.220942,51.329863],[-0.229823,51.336523],[-0.217264,51.343387],[-0.222736,51.357086],[-0.245405,51.366845],[-0.24503,51.380034],[-0.261149,51.3796],[-0.285438,51.364249],[-0.306192,51.335084],[-0.272234,51.29233],[-0.264399,51.299545],[-0.247126,51.298044],[-0.242968,51.32128],[-0.220942,51.329863]]]}',
      metadata: ["Epsom and Ewell"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.394742,51.297948],[-0.405326,51.294892],[-0.409538,51.303144],[-0.439961,51.304657],[-0.445699,51.324141],[-0.437163,51.327447],[-0.462344,51.32996],[-0.488959,51.329898],[-0.475467,51.316361],[-0.500848,51.306564],[-0.510298,51.313121],[-0.529805,51.297558],[-0.540223,51.300972],[-0.549191,51.28466],[-0.534168,51.273709],[-0.54437,51.265504],[-0.600757,51.286113],[-0.618173,51.28271],[-0.647891,51.304355],[-0.646792,51.311902],[-0.687496,51.313812],[-0.703639,51.284163],[-0.731094,51.280362],[-0.729326,51.256112],[-0.74554,51.230456],[-0.748305,51.210676],[-0.731758,51.196922],[-0.706561,51.202711],[-0.688263,51.188714],[-0.663407,51.200246],[-0.64812,51.175837],[-0.631155,51.184129],[-0.634479,51.202109],[-0.614114,51.208054],[-0.5925,51.202884],[-0.584865,51.198599],[-0.593697,51.191257],[-0.577338,51.188112],[-0.573769,51.198315],[-0.555559,51.199258],[-0.532445,51.213448],[-0.505637,51.205019],[-0.505343,51.183603],[-0.457066,51.174951],[-0.443917,51.183592],[-0.418565,51.173181],[-0.408337,51.175707],[-0.409878,51.1927],[-0.438437,51.209679],[-0.425676,51.230323],[-0.434648,51.239906],[-0.396964,51.237889],[-0.387143,51.265082],[-0.394742,51.297948]]]}',
      metadata: ["Guildford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.272234,51.29233],[-0.306192,51.335084],[-0.330656,51.32901],[-0.360316,51.311803],[-0.396926,51.312817],[-0.394742,51.297948],[-0.387143,51.265082],[-0.396964,51.237889],[-0.434648,51.239906],[-0.425676,51.230323],[-0.438437,51.209679],[-0.409878,51.1927],[-0.408337,51.175707],[-0.418565,51.173181],[-0.419204,51.105205],[-0.391525,51.116511],[-0.300347,51.124736],[-0.254613,51.13905],[-0.255168,51.144141],[-0.214235,51.148463],[-0.212142,51.155455],[-0.176706,51.16685],[-0.189819,51.181414],[-0.209701,51.172309],[-0.243069,51.182834],[-0.2429,51.189507],[-0.212821,51.193319],[-0.234758,51.206086],[-0.22507,51.212322],[-0.235368,51.222353],[-0.250728,51.227077],[-0.22598,51.253787],[-0.265744,51.261387],[-0.272234,51.29233]]]}',
      metadata: ["Mole Valley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.156524,51.321485],[-0.197319,51.343595],[-0.220942,51.329863],[-0.242968,51.32128],[-0.247126,51.298044],[-0.264399,51.299545],[-0.272234,51.29233],[-0.265744,51.261387],[-0.22598,51.253787],[-0.250728,51.227077],[-0.235368,51.222353],[-0.22507,51.212322],[-0.234758,51.206086],[-0.212821,51.193319],[-0.2429,51.189507],[-0.243069,51.182834],[-0.209701,51.172309],[-0.189819,51.181414],[-0.176706,51.16685],[-0.140462,51.160047],[-0.127719,51.16504],[-0.143508,51.186535],[-0.135854,51.212047],[-0.145502,51.210734],[-0.154961,51.23069],[-0.145663,51.251346],[-0.126802,51.261737],[-0.124293,51.286759],[-0.137314,51.300781],[-0.155318,51.301274],[-0.156524,51.321485]]]}',
      metadata: ["Reigate and Banstead"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.522765,51.4353],[-0.571675,51.451008],[-0.593939,51.441661],[-0.618495,51.392388],[-0.573954,51.370822],[-0.569625,51.360337],[-0.555234,51.361936],[-0.548549,51.348021],[-0.515625,51.338858],[-0.481156,51.349358],[-0.466971,51.356575],[-0.475478,51.364089],[-0.457991,51.380567],[-0.477113,51.390318],[-0.48525,51.387181],[-0.493203,51.411887],[-0.512428,51.417221],[-0.510389,51.429783],[-0.522765,51.4353]]]}',
      metadata: ["Runnymede"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.509701,51.469176],[-0.524359,51.471528],[-0.540613,51.457852],[-0.522765,51.4353],[-0.510389,51.429783],[-0.512428,51.417221],[-0.493203,51.411887],[-0.48525,51.387181],[-0.477113,51.390318],[-0.457991,51.380567],[-0.4426,51.389822],[-0.432213,51.38399],[-0.409579,51.404657],[-0.38335,51.408538],[-0.391317,51.422315],[-0.456468,51.438107],[-0.458649,51.456305],[-0.509701,51.469176]]]}',
      metadata: ["Spelthorne"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.548549,51.348021],[-0.555234,51.361936],[-0.569625,51.360337],[-0.573954,51.370822],[-0.618495,51.392388],[-0.616344,51.38354],[-0.667634,51.384571],[-0.735335,51.36501],[-0.775466,51.331959],[-0.762903,51.318731],[-0.744167,51.309295],[-0.731094,51.280362],[-0.703639,51.284163],[-0.687496,51.313812],[-0.646792,51.311902],[-0.623506,51.319906],[-0.62592,51.334837],[-0.576898,51.336264],[-0.548549,51.348021]]]}',
      metadata: ["Surrey Heath"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.002255,51.329135],[-0.037892,51.338704],[-0.051307,51.322448],[-0.078924,51.319769],[-0.091168,51.301473],[-0.124293,51.286759],[-0.126802,51.261737],[-0.145663,51.251346],[-0.154961,51.23069],[-0.145502,51.210734],[-0.135854,51.212047],[-0.143508,51.186535],[-0.127719,51.16504],[-0.140462,51.160047],[-0.13296,51.158884],[-0.137572,51.14216],[0.027361,51.139851],[0.050017,51.14265],[0.0526,51.180624],[0.033599,51.214338],[0.058243,51.247778],[0.042396,51.292673],[0.032909,51.307521],[0.015009,51.291786],[0.002255,51.329135]]]}',
      metadata: ["Tandridge"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-0.759334,51.103259],[-0.759444,51.103573],[-0.768913,51.10327],[-0.759334,51.103259]]],[[[-0.759334,51.103259],[-0.753481,51.086456],[-0.696752,51.071492],[-0.629371,51.088993],[-0.601139,51.0797],[-0.577593,51.086654],[-0.539216,51.082025],[-0.534979,51.093579],[-0.505377,51.088262],[-0.492127,51.094484],[-0.419204,51.105205],[-0.418565,51.173181],[-0.443917,51.183592],[-0.457066,51.174951],[-0.505343,51.183603],[-0.505637,51.205019],[-0.532445,51.213448],[-0.555559,51.199258],[-0.573769,51.198315],[-0.577338,51.188112],[-0.593697,51.191257],[-0.584865,51.198599],[-0.5925,51.202884],[-0.614114,51.208054],[-0.634479,51.202109],[-0.631155,51.184129],[-0.64812,51.175837],[-0.663407,51.200246],[-0.688263,51.188714],[-0.706561,51.202711],[-0.731758,51.196922],[-0.748305,51.210676],[-0.74554,51.230456],[-0.776089,51.241956],[-0.80174,51.239039],[-0.80475,51.245065],[-0.848912,51.210716],[-0.825443,51.181357],[-0.834204,51.147582],[-0.798396,51.152527],[-0.769281,51.117142],[-0.745526,51.112188],[-0.749273,51.103246],[-0.759334,51.103259]]]]}',
      metadata: ["Waverley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.462344,51.32996],[-0.463654,51.340616],[-0.481156,51.349358],[-0.515625,51.338858],[-0.548549,51.348021],[-0.576898,51.336264],[-0.62592,51.334837],[-0.623506,51.319906],[-0.646792,51.311902],[-0.647891,51.304355],[-0.618173,51.28271],[-0.600757,51.286113],[-0.54437,51.265504],[-0.534168,51.273709],[-0.549191,51.28466],[-0.540223,51.300972],[-0.529805,51.297558],[-0.510298,51.313121],[-0.500848,51.306564],[-0.475467,51.316361],[-0.488959,51.329898],[-0.462344,51.32996]]]}',
      metadata: ["Woking"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.551771,52.667455],[-1.589645,52.687261],[-1.644943,52.657517],[-1.63292,52.643481],[-1.642422,52.64094],[-1.643777,52.603355],[-1.66564,52.592252],[-1.700393,52.590913],[-1.729311,52.587933],[-1.742408,52.594325],[-1.788081,52.587863],[-1.763546,52.570979],[-1.77423,52.564628],[-1.755998,52.555382],[-1.749086,52.531422],[-1.728878,52.524563],[-1.75381,52.521213],[-1.753523,52.512967],[-1.677154,52.436357],[-1.666586,52.435472],[-1.662287,52.444299],[-1.641397,52.443344],[-1.624452,52.463539],[-1.595487,52.45592],[-1.589863,52.461912],[-1.561192,52.455223],[-1.539791,52.464799],[-1.530357,52.470415],[-1.545175,52.472656],[-1.514823,52.476267],[-1.514297,52.48286],[-1.553391,52.513406],[-1.556036,52.531932],[-1.486653,52.540389],[-1.459994,52.55159],[-1.522868,52.570601],[-1.527155,52.582738],[-1.560757,52.596156],[-1.554454,52.614761],[-1.571354,52.635272],[-1.544517,52.644608],[-1.551771,52.667455]]]}',
      metadata: ["North Warwickshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.417344,52.534455],[-1.459994,52.55159],[-1.486653,52.540389],[-1.556036,52.531932],[-1.553391,52.513406],[-1.514297,52.48286],[-1.514823,52.476267],[-1.545175,52.472656],[-1.530357,52.470415],[-1.539791,52.464799],[-1.505034,52.450089],[-1.491982,52.458585],[-1.459053,52.455158],[-1.437622,52.468047],[-1.410411,52.466566],[-1.405028,52.476377],[-1.405462,52.513134],[-1.428868,52.516191],[-1.417344,52.534455]]]}',
      metadata: ["Nuneaton and Bedworth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.325088,52.501042],[-1.417344,52.534455],[-1.428868,52.516191],[-1.405462,52.513134],[-1.405028,52.476377],[-1.410411,52.466566],[-1.437622,52.468047],[-1.459053,52.455158],[-1.423932,52.432979],[-1.438046,52.410257],[-1.431394,52.396869],[-1.464014,52.373267],[-1.464914,52.358078],[-1.448051,52.353677],[-1.456199,52.346777],[-1.443643,52.345536],[-1.435976,52.328417],[-1.406973,52.319121],[-1.419408,52.303754],[-1.389152,52.300857],[-1.309015,52.257473],[-1.287803,52.273626],[-1.259478,52.256503],[-1.232999,52.253259],[-1.21573,52.266378],[-1.233783,52.290328],[-1.209234,52.315204],[-1.265355,52.328361],[-1.23339,52.346516],[-1.174973,52.35629],[-1.201613,52.396732],[-1.305948,52.493395],[-1.325088,52.501042]]]}',
      metadata: ["Rugby"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.775752,52.347964],[-1.807801,52.366608],[-1.872034,52.367599],[-1.888974,52.361093],[-1.864831,52.333093],[-1.868569,52.314589],[-1.880934,52.310933],[-1.886479,52.286633],[-1.915977,52.275034],[-1.937401,52.276153],[-1.934611,52.252018],[-1.917465,52.218184],[-1.935634,52.204121],[-1.941641,52.177406],[-1.960407,52.168672],[-1.935483,52.169557],[-1.944302,52.155333],[-1.921887,52.153006],[-1.903473,52.133451],[-1.885118,52.146853],[-1.89423,52.148251],[-1.889772,52.156213],[-1.866927,52.153008],[-1.854188,52.138521],[-1.839672,52.152714],[-1.823348,52.145925],[-1.823217,52.136382],[-1.808434,52.139876],[-1.785789,52.132198],[-1.795766,52.124347],[-1.757659,52.116076],[-1.767649,52.112593],[-1.746022,52.09296],[-1.728561,52.10012],[-1.730671,52.073399],[-1.712953,52.066585],[-1.701731,52.072809],[-1.705141,52.059707],[-1.688636,52.051833],[-1.693981,52.039528],[-1.663866,52.031277],[-1.624418,52.038981],[-1.617533,52.033437],[-1.666173,51.996918],[-1.665754,51.987489],[-1.612342,51.955403],[-1.591634,51.97045],[-1.600302,51.976942],[-1.563539,51.97704],[-1.549671,51.98086],[-1.557224,51.991658],[-1.522826,51.996843],[-1.487804,52.093957],[-1.477302,52.101351],[-1.447188,52.097625],[-1.453458,52.113009],[-1.425855,52.118249],[-1.3854,52.094146],[-1.35777,52.10131],[-1.370842,52.117534],[-1.393303,52.118963],[-1.366147,52.136075],[-1.348708,52.135132],[-1.331897,52.168485],[-1.313135,52.190468],[-1.281195,52.191953],[-1.25478,52.198889],[-1.284644,52.238577],[-1.266891,52.235242],[-1.232999,52.253259],[-1.259478,52.256503],[-1.287803,52.273626],[-1.309015,52.257473],[-1.389152,52.300857],[-1.419408,52.303754],[-1.424734,52.294283],[-1.448472,52.294072],[-1.435215,52.272788],[-1.477657,52.261741],[-1.499986,52.237589],[-1.513996,52.241835],[-1.528199,52.22515],[-1.560059,52.231647],[-1.574398,52.216196],[-1.602023,52.225257],[-1.621227,52.213807],[-1.625896,52.226285],[-1.606955,52.23789],[-1.624941,52.238442],[-1.621362,52.244421],[-1.645929,52.258271],[-1.669209,52.258],[-1.676482,52.269754],[-1.667636,52.285498],[-1.68549,52.282801],[-1.723764,52.29846],[-1.733828,52.293516],[-1.761665,52.308006],[-1.775752,52.347964]]]}',
      metadata: ["Stratford-on-Avon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.464014,52.373267],[-1.504499,52.377807],[-1.513912,52.369062],[-1.524651,52.379401],[-1.552412,52.363892],[-1.567607,52.384689],[-1.601067,52.389299],[-1.622507,52.366164],[-1.648418,52.356743],[-1.660888,52.36567],[-1.684448,52.363189],[-1.693885,52.351013],[-1.718546,52.355738],[-1.720471,52.372568],[-1.734971,52.370243],[-1.746167,52.354935],[-1.779224,52.36454],[-1.775752,52.347964],[-1.761665,52.308006],[-1.733828,52.293516],[-1.723764,52.29846],[-1.68549,52.282801],[-1.667636,52.285498],[-1.676482,52.269754],[-1.669209,52.258],[-1.645929,52.258271],[-1.621362,52.244421],[-1.624941,52.238442],[-1.606955,52.23789],[-1.625896,52.226285],[-1.621227,52.213807],[-1.602023,52.225257],[-1.574398,52.216196],[-1.560059,52.231647],[-1.528199,52.22515],[-1.513996,52.241835],[-1.499986,52.237589],[-1.477657,52.261741],[-1.435215,52.272788],[-1.448472,52.294072],[-1.424734,52.294283],[-1.419408,52.303754],[-1.406973,52.319121],[-1.435976,52.328417],[-1.443643,52.345536],[-1.456199,52.346777],[-1.448051,52.353677],[-1.464914,52.358078],[-1.464014,52.373267]]]}',
      metadata: ["Warwick"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.244971,50.863809],[-0.255303,50.871551],[-0.256579,50.862335],[-0.340901,50.862623],[-0.364598,50.874526],[-0.367453,50.860532],[-0.355465,50.827096],[-0.333138,50.817356],[-0.33264,50.817424],[-0.297658,50.823386],[-0.277874,50.826752],[-0.26831,50.826123],[-0.249113,50.826408],[-0.251485,50.830155],[-0.216816,50.827641],[-0.244971,50.863809]]]}',
      metadata: ["Adur"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.553103,50.901517],[-0.617385,50.905562],[-0.649202,50.900012],[-0.654945,50.905679],[-0.650345,50.866945],[-0.681125,50.863285],[-0.692031,50.84966],[-0.689897,50.812815],[-0.719107,50.805248],[-0.734741,50.809443],[-0.73476,50.793663],[-0.755092,50.790685],[-0.749832,50.781506],[-0.764797,50.773647],[-0.763755,50.772481],[-0.763041,50.772871],[-0.750431,50.762605],[-0.750597,50.762262],[-0.750833,50.762114],[-0.751037,50.761975],[-0.75127,50.761815],[-0.751952,50.761348],[-0.7531,50.760562],[-0.752293,50.759659],[-0.734011,50.76615],[-0.725552,50.771534],[-0.712709,50.773708],[-0.702168,50.777446],[-0.626923,50.788188],[-0.568358,50.798031],[-0.554952,50.798412],[-0.541992,50.800248],[-0.435963,50.803139],[-0.435749,50.803169],[-0.446007,50.839854],[-0.4223,50.840677],[-0.422794,50.860235],[-0.40928,50.852264],[-0.381583,50.863168],[-0.367453,50.860532],[-0.364598,50.874526],[-0.363896,50.88848],[-0.380064,50.885593],[-0.392716,50.893373],[-0.413161,50.879588],[-0.41174,50.886559],[-0.430516,50.892973],[-0.439984,50.877527],[-0.451502,50.895467],[-0.464921,50.883971],[-0.476588,50.885056],[-0.482842,50.899097],[-0.493117,50.885263],[-0.499918,50.899883],[-0.524792,50.882984],[-0.538179,50.886223],[-0.548874,50.880089],[-0.561038,50.88785],[-0.542965,50.891216],[-0.553103,50.901517]]]}',
      metadata: ["Arun"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-0.752293,50.759659],[-0.7531,50.760562],[-0.753129,50.760542],[-0.754291,50.758949],[-0.752293,50.759659]]],[[[-0.492127,51.094484],[-0.505377,51.088262],[-0.534979,51.093579],[-0.539216,51.082025],[-0.577593,51.086654],[-0.601139,51.0797],[-0.629371,51.088993],[-0.696752,51.071492],[-0.753481,51.086456],[-0.780787,51.079375],[-0.797763,51.063556],[-0.842848,51.066887],[-0.852811,51.044843],[-0.896993,51.02201],[-0.893347,51.002743],[-0.907864,50.994241],[-0.931847,50.94558],[-0.94211,50.942894],[-0.924013,50.924199],[-0.940245,50.918054],[-0.957581,50.89063],[-0.938608,50.873721],[-0.92645,50.864092],[-0.934486,50.845865],[-0.932478,50.846049],[-0.942627,50.815381],[-0.907918,50.79853],[-0.913081,50.839952],[-0.894037,50.83809],[-0.892172,50.818431],[-0.8768,50.811464],[-0.865492,50.826992],[-0.865362,50.827171],[-0.86548,50.827505],[-0.869929,50.840068],[-0.86518,50.839907],[-0.858413,50.839677],[-0.861226,50.828008],[-0.851188,50.827646],[-0.865752,50.816251],[-0.868759,50.813898],[-0.865835,50.812858],[-0.842722,50.804634],[-0.81976,50.81686],[-0.813787,50.833936],[-0.807741,50.830526],[-0.825464,50.804397],[-0.844579,50.799294],[-0.86603,50.804804],[-0.877512,50.807751],[-0.892012,50.794291],[-0.905157,50.78208],[-0.910882,50.781291],[-0.91214,50.783457],[-0.908045,50.787035],[-0.915353,50.788992],[-0.915317,50.780679],[-0.906839,50.774322],[-0.880906,50.764819],[-0.859551,50.759732],[-0.844101,50.751314],[-0.823544,50.743763],[-0.818663,50.738834],[-0.789162,50.722484],[-0.784753,50.726241],[-0.749959,50.756688],[-0.751059,50.75726],[-0.761754,50.751183],[-0.77184,50.763521],[-0.786849,50.759866],[-0.763755,50.772481],[-0.764797,50.773647],[-0.749832,50.781506],[-0.755092,50.790685],[-0.73476,50.793663],[-0.734741,50.809443],[-0.719107,50.805248],[-0.689897,50.812815],[-0.692031,50.84966],[-0.681125,50.863285],[-0.650345,50.866945],[-0.654945,50.905679],[-0.649202,50.900012],[-0.617385,50.905562],[-0.553103,50.901517],[-0.551499,50.91325],[-0.536969,50.916754],[-0.556066,50.923477],[-0.568709,50.942512],[-0.549674,50.953983],[-0.533749,50.950245],[-0.524857,50.987038],[-0.507268,50.99053],[-0.517645,50.998554],[-0.51068,51.007818],[-0.486221,51.010106],[-0.475855,51.020957],[-0.473194,51.03385],[-0.483927,51.040992],[-0.475639,51.056378],[-0.484127,51.056811],[-0.478407,51.066472],[-0.492127,51.094484]]]]}',
      metadata: ["Chichester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.140462,51.160047],[-0.176706,51.16685],[-0.212142,51.155455],[-0.214235,51.148463],[-0.255168,51.144141],[-0.254613,51.13905],[-0.200274,51.139092],[-0.236892,51.109441],[-0.232491,51.097351],[-0.219372,51.099566],[-0.211978,51.086585],[-0.173845,51.089322],[-0.145185,51.102641],[-0.137572,51.14216],[-0.13296,51.158884],[-0.140462,51.160047]]]}',
      metadata: ["Crawley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.211978,51.086585],[-0.219372,51.099566],[-0.232491,51.097351],[-0.236892,51.109441],[-0.200274,51.139092],[-0.254613,51.13905],[-0.300347,51.124736],[-0.391525,51.116511],[-0.419204,51.105205],[-0.492127,51.094484],[-0.478407,51.066472],[-0.484127,51.056811],[-0.475639,51.056378],[-0.483927,51.040992],[-0.473194,51.03385],[-0.475855,51.020957],[-0.486221,51.010106],[-0.51068,51.007818],[-0.517645,50.998554],[-0.507268,50.99053],[-0.524857,50.987038],[-0.533749,50.950245],[-0.549674,50.953983],[-0.568709,50.942512],[-0.556066,50.923477],[-0.536969,50.916754],[-0.551499,50.91325],[-0.553103,50.901517],[-0.542965,50.891216],[-0.561038,50.88785],[-0.548874,50.880089],[-0.538179,50.886223],[-0.524792,50.882984],[-0.499918,50.899883],[-0.493117,50.885263],[-0.482842,50.899097],[-0.476588,50.885056],[-0.464921,50.883971],[-0.451502,50.895467],[-0.439984,50.877527],[-0.430516,50.892973],[-0.41174,50.886559],[-0.413161,50.879588],[-0.392716,50.893373],[-0.380064,50.885593],[-0.363896,50.88848],[-0.364598,50.874526],[-0.340901,50.862623],[-0.256579,50.862335],[-0.255303,50.871551],[-0.244971,50.863809],[-0.239238,50.867886],[-0.24866,50.873071],[-0.244154,50.907363],[-0.223784,50.911784],[-0.231943,50.935815],[-0.224456,50.942946],[-0.24087,50.952715],[-0.232015,51.010847],[-0.245297,51.012332],[-0.236649,51.021084],[-0.249081,51.024947],[-0.246937,51.033507],[-0.219159,51.037922],[-0.226758,51.041568],[-0.222628,51.060211],[-0.211746,51.064643],[-0.211978,51.086585]]]}',
      metadata: ["Horsham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.01641,51.002514],[-0.021914,51.026512],[-0.001565,51.035755],[-0.003002,51.047564],[0.013726,51.057013],[-0.008548,51.056458],[-0.013257,51.073967],[-0.026852,51.075113],[-0.036213,51.09343],[0.010473,51.102182],[0.009505,51.110392],[0.018619,51.103576],[0.044561,51.110644],[0.028153,51.11772],[0.027361,51.139851],[-0.137572,51.14216],[-0.145185,51.102641],[-0.173845,51.089322],[-0.211978,51.086585],[-0.211746,51.064643],[-0.222628,51.060211],[-0.226758,51.041568],[-0.219159,51.037922],[-0.246937,51.033507],[-0.249081,51.024947],[-0.236649,51.021084],[-0.245297,51.012332],[-0.232015,51.010847],[-0.24087,50.952715],[-0.224456,50.942946],[-0.231943,50.935815],[-0.223784,50.911784],[-0.244154,50.907363],[-0.24866,50.873071],[-0.239238,50.867886],[-0.226719,50.878181],[-0.187734,50.86857],[-0.182423,50.888325],[-0.168612,50.892368],[-0.168126,50.880748],[-0.13501,50.886635],[-0.119726,50.942341],[-0.104171,50.946477],[-0.115215,50.976077],[-0.073619,50.991675],[-0.061592,50.97842],[-0.024604,50.980025],[-0.01641,51.002514]]]}',
      metadata: ["Mid Sussex"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.367453,50.860532],[-0.381583,50.863168],[-0.40928,50.852264],[-0.422794,50.860235],[-0.4223,50.840677],[-0.446007,50.839854],[-0.435749,50.803169],[-0.333138,50.817356],[-0.355465,50.827096],[-0.367453,50.860532]]]}',
      metadata: ["Worthing"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.01699,52.432683],[-2.036988,52.427546],[-2.037881,52.441558],[-2.055783,52.441306],[-2.062467,52.427431],[-2.068052,52.435195],[-2.084821,52.432198],[-2.098565,52.445284],[-2.136027,52.426268],[-2.164851,52.430204],[-2.167707,52.42378],[-2.158264,52.409284],[-2.134036,52.4103],[-2.126248,52.403304],[-2.137701,52.393899],[-2.119213,52.357889],[-2.137169,52.34998],[-2.127727,52.352238],[-2.131471,52.34708],[-2.113283,52.337162],[-2.124055,52.314503],[-2.085164,52.313499],[-2.09169,52.288561],[-2.00246,52.279582],[-2.002018,52.288139],[-1.984151,52.2921],[-1.982006,52.308306],[-1.955061,52.32101],[-1.891869,52.321426],[-1.880934,52.310933],[-1.868569,52.314589],[-1.864831,52.333093],[-1.888974,52.361093],[-1.872034,52.367599],[-1.845498,52.399782],[-1.868747,52.404738],[-1.882697,52.399813],[-1.913675,52.407464],[-1.934315,52.387236],[-1.953614,52.393371],[-1.998486,52.381138],[-2.033641,52.402328],[-1.986037,52.416726],[-2.01699,52.432683]]]}',
      metadata: ["Bromsgrove"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.266415,52.323605],[-2.27389,52.328932],[-2.299164,52.32236],[-2.310932,52.34055],[-2.334023,52.318924],[-2.363283,52.314851],[-2.369865,52.32681],[-2.434128,52.322656],[-2.420992,52.33306],[-2.414923,52.368255],[-2.47477,52.367146],[-2.488327,52.355398],[-2.481796,52.331078],[-2.513205,52.329214],[-2.512129,52.33711],[-2.53915,52.344139],[-2.562219,52.333108],[-2.562644,52.311137],[-2.574853,52.317576],[-2.618035,52.306957],[-2.663208,52.303921],[-2.639877,52.286375],[-2.597931,52.281618],[-2.628297,52.261165],[-2.628969,52.240373],[-2.574206,52.252731],[-2.531673,52.253277],[-2.52582,52.248097],[-2.495651,52.256942],[-2.503113,52.27745],[-2.451403,52.285083],[-2.427996,52.27061],[-2.468099,52.256038],[-2.474702,52.241359],[-2.464858,52.234374],[-2.423065,52.237261],[-2.3844,52.225235],[-2.403894,52.22145],[-2.392679,52.208615],[-2.407839,52.202751],[-2.421948,52.172475],[-2.435175,52.168217],[-2.415195,52.14524],[-2.379321,52.155112],[-2.351402,52.144624],[-2.352147,52.103486],[-2.337963,52.089885],[-2.351379,52.021359],[-2.352543,52.013535],[-2.32471,52.003567],[-2.326539,51.975791],[-2.31262,51.976505],[-2.300433,51.966775],[-2.270556,51.968939],[-2.25136,51.966565],[-2.220613,51.995497],[-2.185084,51.990561],[-2.180749,51.999615],[-2.16463,51.996143],[-2.187683,52.01908],[-2.176906,52.022559],[-2.180679,52.041728],[-2.171381,52.047574],[-2.175392,52.058651],[-2.158128,52.061227],[-2.149978,52.075426],[-2.158319,52.08453],[-2.148754,52.103251],[-2.196406,52.124835],[-2.164922,52.142829],[-2.189576,52.14602],[-2.203372,52.167317],[-2.227695,52.163676],[-2.247183,52.16956],[-2.252608,52.183495],[-2.261879,52.181953],[-2.248774,52.210749],[-2.234886,52.211457],[-2.243272,52.221854],[-2.231834,52.249906],[-2.251894,52.266756],[-2.275071,52.272264],[-2.266415,52.323605]]]}',
      metadata: ["Malvern Hills"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.880934,52.310933],[-1.891869,52.321426],[-1.955061,52.32101],[-1.982006,52.308306],[-1.984151,52.2921],[-2.002018,52.288139],[-2.00246,52.279582],[-2.01553,52.270002],[-2.016739,52.237275],[-1.967585,52.237025],[-1.934611,52.252018],[-1.937401,52.276153],[-1.915977,52.275034],[-1.886479,52.286633],[-1.880934,52.310933]]]}',
      metadata: ["Redditch"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.203372,52.167317],[-2.171152,52.18456],[-2.157408,52.213143],[-2.221576,52.231405],[-2.243272,52.221854],[-2.234886,52.211457],[-2.248774,52.210749],[-2.261879,52.181953],[-2.252608,52.183495],[-2.247183,52.16956],[-2.227695,52.163676],[-2.203372,52.167317]]]}',
      metadata: ["Worcester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.137169,52.34998],[-2.174619,52.316655],[-2.17088,52.331641],[-2.190464,52.328936],[-2.210477,52.355183],[-2.245684,52.361036],[-2.249514,52.345672],[-2.271776,52.332632],[-2.260368,52.328307],[-2.266415,52.323605],[-2.275071,52.272264],[-2.251894,52.266756],[-2.231834,52.249906],[-2.243272,52.221854],[-2.221576,52.231405],[-2.157408,52.213143],[-2.171152,52.18456],[-2.203372,52.167317],[-2.189576,52.14602],[-2.164922,52.142829],[-2.196406,52.124835],[-2.148754,52.103251],[-2.158319,52.08453],[-2.149978,52.075426],[-2.158128,52.061227],[-2.175392,52.058651],[-2.171381,52.047574],[-2.118384,52.042109],[-2.11722,52.033614],[-2.139397,52.027892],[-2.149655,52.011256],[-2.140687,51.999464],[-2.112198,52.015345],[-2.084873,52.010479],[-2.060784,52.014681],[-2.049514,52.003796],[-2.038356,52.004601],[-1.984136,52.035879],[-1.951388,52.037725],[-1.93173,52.029959],[-1.913446,52.044461],[-1.83905,52.006783],[-1.825023,52.030933],[-1.834589,52.043733],[-1.863449,52.053418],[-1.874406,52.069991],[-1.84662,52.079421],[-1.831753,52.072769],[-1.818943,52.085404],[-1.812737,52.078744],[-1.802289,52.096941],[-1.767649,52.112593],[-1.757659,52.116076],[-1.795766,52.124347],[-1.785789,52.132198],[-1.808434,52.139876],[-1.823217,52.136382],[-1.823348,52.145925],[-1.839672,52.152714],[-1.854188,52.138521],[-1.866927,52.153008],[-1.889772,52.156213],[-1.89423,52.148251],[-1.885118,52.146853],[-1.903473,52.133451],[-1.921887,52.153006],[-1.944302,52.155333],[-1.935483,52.169557],[-1.960407,52.168672],[-1.941641,52.177406],[-1.935634,52.204121],[-1.917465,52.218184],[-1.934611,52.252018],[-1.967585,52.237025],[-2.016739,52.237275],[-2.01553,52.270002],[-2.00246,52.279582],[-2.09169,52.288561],[-2.085164,52.313499],[-2.124055,52.314503],[-2.113283,52.337162],[-2.131471,52.34708],[-2.127727,52.352238],[-2.137169,52.34998]]]}',
      metadata: ["Wychavon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.167707,52.42378],[-2.269505,52.438616],[-2.294964,52.448948],[-2.287382,52.455317],[-2.31175,52.437531],[-2.363528,52.439426],[-2.372946,52.401964],[-2.335533,52.385347],[-2.367352,52.388063],[-2.390673,52.381528],[-2.410474,52.387153],[-2.414923,52.368255],[-2.420992,52.33306],[-2.434128,52.322656],[-2.369865,52.32681],[-2.363283,52.314851],[-2.334023,52.318924],[-2.310932,52.34055],[-2.299164,52.32236],[-2.27389,52.328932],[-2.266415,52.323605],[-2.260368,52.328307],[-2.271776,52.332632],[-2.249514,52.345672],[-2.245684,52.361036],[-2.210477,52.355183],[-2.190464,52.328936],[-2.17088,52.331641],[-2.174619,52.316655],[-2.137169,52.34998],[-2.119213,52.357889],[-2.137701,52.393899],[-2.126248,52.403304],[-2.134036,52.4103],[-2.158264,52.409284],[-2.167707,52.42378]]]}',
      metadata: ["Wyre Forest"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.273535,51.835365],[-0.319398,51.836655],[-0.339486,51.849606],[-0.363308,51.842105],[-0.373363,51.829229],[-0.404859,51.840607],[-0.416276,51.835761],[-0.414112,51.819086],[-0.428829,51.806765],[-0.411968,51.800279],[-0.413368,51.791185],[-0.440584,51.786878],[-0.422832,51.76599],[-0.42208,51.740837],[-0.40246,51.721159],[-0.404991,51.712544],[-0.380775,51.706989],[-0.375558,51.692912],[-0.375358,51.692512],[-0.371999,51.687591],[-0.355325,51.690598],[-0.354108,51.69894],[-0.326857,51.703483],[-0.322332,51.69348],[-0.300019,51.696525],[-0.301976,51.708067],[-0.276954,51.721285],[-0.286409,51.721105],[-0.284303,51.732998],[-0.26479,51.738019],[-0.255136,51.729537],[-0.244428,51.731892],[-0.242381,51.745],[-0.275838,51.772249],[-0.277543,51.797786],[-0.243263,51.812384],[-0.273535,51.835365]]]}',
      metadata: ["St Albans"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.172785,51.856588],[-0.196832,51.85938],[-0.20669,51.854263],[-0.198912,51.844146],[-0.214571,51.839603],[-0.205963,51.846399],[-0.212926,51.851396],[-0.225758,51.844544],[-0.22491,51.833234],[-0.241624,51.835299],[-0.247791,51.84623],[-0.273535,51.835365],[-0.243263,51.812384],[-0.277543,51.797786],[-0.275838,51.772249],[-0.242381,51.745],[-0.244428,51.731892],[-0.255136,51.729537],[-0.238972,51.706142],[-0.219914,51.713724],[-0.183327,51.706522],[-0.163118,51.699858],[-0.163493,51.688115],[-0.105779,51.691876],[-0.114083,51.720807],[-0.098654,51.735946],[-0.092141,51.743209],[-0.101194,51.745133],[-0.138408,51.737276],[-0.141441,51.773736],[-0.166704,51.792554],[-0.147972,51.79902],[-0.183598,51.815066],[-0.168476,51.830416],[-0.178528,51.841185],[-0.16676,51.844177],[-0.172785,51.856588]]]}',
      metadata: ["Welwyn Hatfield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.069061,51.984043],[0.035026,51.989629],[0.00247,51.983054],[-0.003036,51.993446],[-0.023734,51.99717],[-0.030629,51.983814],[-0.048201,51.979449],[-0.04019,51.967701],[-0.06554,51.956845],[-0.074657,51.971164],[-0.107012,51.953959],[-0.110154,51.941901],[-0.120165,51.942188],[-0.119283,51.928298],[-0.145626,51.933989],[-0.162181,51.920341],[-0.153019,51.898998],[-0.161178,51.884985],[-0.151296,51.885393],[-0.146817,51.870572],[-0.173585,51.875331],[-0.164495,51.861833],[-0.172785,51.856588],[-0.16676,51.844177],[-0.178528,51.841185],[-0.168476,51.830416],[-0.183598,51.815066],[-0.147972,51.79902],[-0.166704,51.792554],[-0.141441,51.773736],[-0.138408,51.737276],[-0.101194,51.745133],[-0.092141,51.743209],[-0.098654,51.735946],[-0.058309,51.734702],[-0.047896,51.768813],[-0.021676,51.773535],[-0.018133,51.780519],[0.005574,51.780069],[0.014029,51.76438],[0.026799,51.77418],[0.057664,51.779674],[0.146141,51.796244],[0.158309,51.813517],[0.172583,51.816304],[0.166252,51.822154],[0.170468,51.861622],[0.195594,51.868086],[0.174976,51.882813],[0.183854,51.893501],[0.124761,51.884586],[0.124847,51.923608],[0.107012,51.971818],[0.096461,51.984326],[0.069061,51.984043]]]}',
      metadata: ["East Hertfordshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.162181,51.920341],[-0.184606,51.932413],[-0.22657,51.930114],[-0.234372,51.905255],[-0.204204,51.880138],[-0.191903,51.882924],[-0.173585,51.875331],[-0.146817,51.870572],[-0.151296,51.885393],[-0.161178,51.884985],[-0.153019,51.898998],[-0.162181,51.920341]]]}',
      metadata: ["Stevenage"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[1.17183,52.020409],[1.169872,52.02039],[1.177634,52.016935],[1.17183,52.020409]]],[[[1.740235,52.532086],[1.726004,52.530642],[1.702008,52.544661],[1.667714,52.550245],[1.628582,52.526018],[1.65428,52.501417],[1.672081,52.503867],[1.682472,52.495051],[1.658827,52.468404],[1.646549,52.472003],[1.634543,52.462955],[1.618505,52.463277],[1.58619,52.478693],[1.56802,52.474631],[1.557823,52.457696],[1.52973,52.468347],[1.508022,52.461752],[1.480743,52.471892],[1.44617,52.456008],[1.42015,52.471047],[1.411018,52.461597],[1.433268,52.45596],[1.432592,52.445342],[1.407914,52.444409],[1.363658,52.427479],[1.347101,52.404411],[1.374857,52.394677],[1.409509,52.363265],[1.357405,52.337274],[1.357476,52.322157],[1.384022,52.310667],[1.38414,52.294106],[1.401645,52.285698],[1.355657,52.274077],[1.344432,52.28209],[1.347296,52.293405],[1.327591,52.298479],[1.341269,52.284448],[1.339767,52.265926],[1.301018,52.259016],[1.286731,52.240544],[1.247452,52.228897],[1.241809,52.201751],[1.25673,52.198365],[1.254173,52.188131],[1.239843,52.170429],[1.213965,52.166539],[1.191403,52.139984],[1.169469,52.13125],[1.177767,52.1207],[1.157839,52.088752],[1.164258,52.0795],[1.189894,52.08045],[1.206455,52.064019],[1.201795,52.037348],[1.22361,52.029434],[1.209477,52.020769],[1.182542,52.020512],[1.202729,52.014856],[1.204588,52.014335],[1.280275,51.993084],[1.282172,51.971078],[1.285873,51.964647],[1.31568,51.951411],[1.315702,51.951292],[1.319972,51.933163],[1.344503,51.956925],[1.388102,51.978494],[1.391481,51.98938],[1.360744,52.006265],[1.395343,51.99939],[1.393682,51.986535],[1.431947,52.007132],[1.462497,52.046643],[1.462701,52.046714],[1.46324,52.048282],[1.45112,52.044179],[1.5005,52.070321],[1.501258,52.070722],[1.503668,52.070688],[1.517957,52.075874],[1.541448,52.079787],[1.561224,52.088396],[1.567756,52.091459],[1.56715,52.090975],[1.56223,52.087656],[1.541582,52.079182],[1.535285,52.077103],[1.499821,52.061643],[1.4772,52.05177],[1.579526,52.087369],[1.580044,52.088576],[1.580107,52.08872],[1.620571,52.182648],[1.623114,52.188538],[1.633251,52.276837],[1.634365,52.277898],[1.634503,52.27902],[1.649971,52.300189],[1.665114,52.307159],[1.672415,52.3141],[1.674868,52.313639],[1.703226,52.359983],[1.727887,52.400199],[1.731863,52.427796],[1.734573,52.447968],[1.734807,52.448204],[1.734944,52.449153],[1.756232,52.471486],[1.710872,52.474818],[1.757665,52.476934],[1.756581,52.471975],[1.763706,52.481647],[1.740235,52.532086]]]]}',
      metadata: ["East Suffolk"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.967471,52.370113],[0.930232,52.388838],[0.866873,52.390346],[0.84093,52.400796],[0.808172,52.389524],[0.765966,52.390357],[0.747405,52.383187],[0.737589,52.395138],[0.690769,52.397531],[0.668498,52.408974],[0.718653,52.449708],[0.683973,52.453165],[0.666323,52.462508],[0.641833,52.450965],[0.582501,52.451861],[0.554705,52.456025],[0.523662,52.44818],[0.445539,52.447372],[0.429344,52.436427],[0.374777,52.409729],[0.407617,52.361574],[0.442501,52.348832],[0.424222,52.329216],[0.431377,52.315825],[0.457618,52.316251],[0.504769,52.284716],[0.498803,52.273021],[0.424206,52.255872],[0.382723,52.293266],[0.358997,52.297543],[0.340003,52.267688],[0.360893,52.249422],[0.342684,52.242343],[0.371249,52.226556],[0.421335,52.239691],[0.414518,52.247861],[0.426965,52.253603],[0.480337,52.232682],[0.494931,52.239258],[0.514484,52.226779],[0.491333,52.165102],[0.47073,52.163259],[0.452191,52.173204],[0.435916,52.159495],[0.417276,52.159307],[0.418283,52.134356],[0.38959,52.117471],[0.381804,52.102701],[0.394997,52.095968],[0.404638,52.065502],[0.438278,52.072333],[0.453623,52.068147],[0.466667,52.078456],[0.501679,52.053853],[0.511054,52.059831],[0.542263,52.057759],[0.551487,52.06881],[0.582133,52.075852],[0.656901,52.085442],[0.626895,52.128991],[0.645374,52.160177],[0.6917,52.157581],[0.698145,52.181308],[0.715964,52.179281],[0.722799,52.165104],[0.738336,52.169971],[0.741992,52.159331],[0.759129,52.157513],[0.768689,52.175],[0.786919,52.177894],[0.814169,52.170733],[0.836274,52.182169],[0.838129,52.195341],[0.815155,52.20391],[0.82713,52.238968],[0.797581,52.25123],[0.799441,52.264713],[0.825826,52.266515],[0.843865,52.2598],[0.842594,52.268027],[0.856327,52.268442],[0.843084,52.284917],[0.873625,52.299508],[0.887357,52.292719],[0.882935,52.300137],[0.900152,52.298916],[0.931124,52.312869],[0.925708,52.327361],[0.932697,52.33573],[0.957339,52.340372],[0.953171,52.356061],[0.967471,52.370113]]]}',
      metadata: ["West Suffolk"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.054017,51.206206],[-3.054764,51.205942],[-3.076322,51.201252],[-3.125497,51.21136],[-3.146632,51.209439],[-3.153942,51.208774],[-3.277365,51.179569],[-3.400808,51.182382],[-3.43268,51.20045],[-3.447602,51.208902],[-3.470408,51.20815],[-3.495732,51.223646],[-3.542165,51.232257],[-3.578709,51.232142],[-3.62124,51.216643],[-3.622481,51.217448],[-3.633041,51.223723],[-3.720169,51.233016],[-3.720561,51.233058],[-3.733201,51.222725],[-3.724984,51.179592],[-3.786303,51.171927],[-3.839175,51.176923],[-3.834491,51.138381],[-3.804289,51.115685],[-3.719955,51.080815],[-3.692407,51.080592],[-3.646709,51.058059],[-3.594471,51.055195],[-3.614655,51.01549],[-3.603208,51.007233],[-3.535049,51.003347],[-3.518881,51.014796],[-3.520428,51.025871],[-3.504268,51.030113],[-3.483366,51.033831],[-3.460194,51.025217],[-3.421304,51.030778],[-3.414174,51.019703],[-3.380488,51.018486],[-3.378664,50.977509],[-3.33367,50.982788],[-3.293847,50.955139],[-3.25483,50.941846],[-3.166479,50.947713],[-3.187871,50.910421],[-3.144178,50.891395],[-3.126341,50.901718],[-3.052423,50.908264],[-3.084572,50.921645],[-3.088377,50.938007],[-3.032821,50.936308],[-3.007708,50.957071],[-2.980461,50.964992],[-2.978662,50.99762],[-2.944311,51.003273],[-2.950477,51.011269],[-2.883844,51.045787],[-2.893108,51.055035],[-2.888193,51.069099],[-2.912195,51.08516],[-2.925265,51.08513],[-2.948752,51.073508],[-2.926826,51.061527],[-2.957783,51.047431],[-2.982153,51.040821],[-2.99745,51.053784],[-3.016239,51.05479],[-3.031212,51.047914],[-3.02468,51.059843],[-3.046452,51.06556],[-3.137964,51.072195],[-3.159951,51.09086],[-3.140858,51.099515],[-3.142166,51.109279],[-3.168425,51.104307],[-3.215884,51.129557],[-3.205468,51.142806],[-3.178679,51.146705],[-3.15754,51.16367],[-3.11373,51.169911],[-3.116233,51.176054],[-3.085468,51.196079],[-3.067474,51.19446],[-3.051655,51.20326],[-3.054017,51.206206]]]}',
      metadata: ["Somerset West and Taunton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.379132,53.63087],[-2.421696,53.623836],[-2.438724,53.646045],[-2.4597,53.620043],[-2.479195,53.617036],[-2.511323,53.626995],[-2.569278,53.595597],[-2.595926,53.610815],[-2.625907,53.593683],[-2.577663,53.581059],[-2.559625,53.561231],[-2.569604,53.547855],[-2.533747,53.523014],[-2.505846,53.538992],[-2.451097,53.528605],[-2.437147,53.542253],[-2.354388,53.526241],[-2.353696,53.535057],[-2.338194,53.533614],[-2.34148,53.545882],[-2.373589,53.553914],[-2.358978,53.552937],[-2.356032,53.560667],[-2.373989,53.570838],[-2.377057,53.592917],[-2.362994,53.610307],[-2.379436,53.620298],[-2.379132,53.63087]]]}',
      metadata: ["Bolton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.271787,53.614514],[-2.295273,53.640395],[-2.298985,53.666705],[-2.316757,53.654987],[-2.371236,53.667081],[-2.362747,53.655401],[-2.370328,53.631534],[-2.379132,53.63087],[-2.379436,53.620298],[-2.362994,53.610307],[-2.377057,53.592917],[-2.373989,53.570838],[-2.356032,53.560667],[-2.358978,53.552937],[-2.373589,53.553914],[-2.34148,53.545882],[-2.338194,53.533614],[-2.310473,53.527187],[-2.290796,53.512021],[-2.256966,53.517946],[-2.246645,53.529236],[-2.264114,53.52469],[-2.268271,53.537426],[-2.251737,53.544609],[-2.23723,53.538861],[-2.243305,53.571704],[-2.25924,53.58527],[-2.273334,53.579316],[-2.282374,53.583888],[-2.245079,53.600139],[-2.271787,53.614514]]]}',
      metadata: ["Bury"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.23723,53.538861],[-2.251737,53.544609],[-2.268271,53.537426],[-2.264114,53.52469],[-2.246645,53.529236],[-2.256966,53.517946],[-2.245227,53.512157],[-2.255423,53.499119],[-2.245137,53.486087],[-2.26532,53.472729],[-2.253687,53.459946],[-2.300186,53.436416],[-2.273621,53.422501],[-2.27778,53.415508],[-2.297716,53.408362],[-2.319919,53.411624],[-2.285665,53.376245],[-2.298595,53.360825],[-2.313998,53.357425],[-2.29693,53.348584],[-2.301359,53.340121],[-2.256447,53.360677],[-2.24079,53.359574],[-2.246828,53.39606],[-2.212595,53.406968],[-2.213428,53.418915],[-2.18854,53.436653],[-2.176471,53.433099],[-2.17288,53.448001],[-2.158451,53.454937],[-2.146828,53.467659],[-2.168064,53.480088],[-2.16303,53.492849],[-2.17871,53.50585],[-2.154761,53.518033],[-2.186014,53.529059],[-2.218725,53.543907],[-2.23723,53.538861]]]}',
      metadata: ["Manchester"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.009471,53.61678],[-2.023036,53.615839],[-2.026816,53.624167],[-2.035827,53.602932],[-2.059882,53.592487],[-2.110638,53.599709],[-2.125845,53.586498],[-2.156586,53.582287],[-2.15093,53.567124],[-2.171993,53.558232],[-2.16944,53.546159],[-2.186014,53.529059],[-2.154761,53.518033],[-2.17871,53.50585],[-2.16303,53.492849],[-2.136125,53.491928],[-2.093258,53.520617],[-2.054148,53.522269],[-2.054917,53.531393],[-1.963386,53.509827],[-1.951333,53.504199],[-1.921973,53.509955],[-1.926781,53.520949],[-1.909621,53.538391],[-1.912885,53.551644],[-1.942726,53.561641],[-2.009471,53.61678]]]}',
      metadata: ["Oldham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.026816,53.624167],[-2.051242,53.683692],[-2.092906,53.670161],[-2.118085,53.671245],[-2.134127,53.685734],[-2.142258,53.678006],[-2.146328,53.682232],[-2.161353,53.641374],[-2.185396,53.638224],[-2.182407,53.648258],[-2.205229,53.654349],[-2.217729,53.668981],[-2.245878,53.663522],[-2.269866,53.646137],[-2.256769,53.620398],[-2.271787,53.614514],[-2.245079,53.600139],[-2.282374,53.583888],[-2.273334,53.579316],[-2.25924,53.58527],[-2.243305,53.571704],[-2.23723,53.538861],[-2.218725,53.543907],[-2.186014,53.529059],[-2.16944,53.546159],[-2.171993,53.558232],[-2.15093,53.567124],[-2.156586,53.582287],[-2.125845,53.586498],[-2.110638,53.599709],[-2.059882,53.592487],[-2.035827,53.602932],[-2.026816,53.624167]]]}',
      metadata: ["Rochdale"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.338194,53.533614],[-2.353696,53.535057],[-2.354388,53.526241],[-2.437147,53.542253],[-2.451097,53.528605],[-2.414539,53.514893],[-2.438507,53.492402],[-2.434469,53.465044],[-2.489714,53.460282],[-2.449378,53.415891],[-2.419583,53.429319],[-2.396318,53.458426],[-2.354977,53.474017],[-2.322059,53.48017],[-2.281586,53.464866],[-2.26532,53.472729],[-2.245137,53.486087],[-2.255423,53.499119],[-2.245227,53.512157],[-2.256966,53.517946],[-2.290796,53.512021],[-2.310473,53.527187],[-2.338194,53.533614]]]}',
      metadata: ["Salford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.026255,53.429865],[-2.079803,53.426177],[-2.08904,53.43731],[-2.102439,53.43261],[-2.116009,53.440731],[-2.14169,53.438251],[-2.158451,53.454937],[-2.17288,53.448001],[-2.176471,53.433099],[-2.18854,53.436653],[-2.213428,53.418915],[-2.212595,53.406968],[-2.246828,53.39606],[-2.24079,53.359574],[-2.185441,53.35266],[-2.180977,53.344044],[-2.194163,53.33865],[-2.160648,53.327315],[-2.144099,53.342871],[-2.151191,53.348133],[-2.139025,53.367317],[-2.123196,53.361947],[-2.095179,53.366081],[-2.068078,53.357394],[-2.040564,53.374088],[-2.031058,53.370262],[-2.033775,53.375542],[-2.004643,53.386327],[-1.992329,53.415193],[-2.013697,53.41589],[-2.026255,53.429865]]]}',
      metadata: ["Stockport"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.963386,53.509827],[-2.054917,53.531393],[-2.054148,53.522269],[-2.093258,53.520617],[-2.136125,53.491928],[-2.16303,53.492849],[-2.168064,53.480088],[-2.146828,53.467659],[-2.158451,53.454937],[-2.14169,53.438251],[-2.116009,53.440731],[-2.102439,53.43261],[-2.08904,53.43731],[-2.079803,53.426177],[-2.026255,53.429865],[-2.014228,53.439763],[-2.004216,53.435922],[-2.008235,53.441549],[-1.985792,53.455227],[-1.98782,53.48111],[-1.963386,53.509827]]]}',
      metadata: ["Tameside"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.26532,53.472729],[-2.281586,53.464866],[-2.322059,53.48017],[-2.354977,53.474017],[-2.396318,53.458426],[-2.419583,53.429319],[-2.449378,53.415891],[-2.478454,53.396219],[-2.42659,53.387462],[-2.375784,53.365351],[-2.339875,53.367378],[-2.313998,53.357425],[-2.298595,53.360825],[-2.285665,53.376245],[-2.319919,53.411624],[-2.297716,53.408362],[-2.27778,53.415508],[-2.273621,53.422501],[-2.300186,53.436416],[-2.253687,53.459946],[-2.26532,53.472729]]]}',
      metadata: ["Trafford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.625907,53.593683],[-2.634592,53.608283],[-2.689313,53.604303],[-2.693352,53.589429],[-2.719223,53.576114],[-2.704819,53.559192],[-2.717926,53.527211],[-2.730521,53.5206],[-2.698893,53.502032],[-2.666296,53.499757],[-2.64554,53.480252],[-2.612138,53.481138],[-2.615359,53.463601],[-2.576743,53.446057],[-2.57039,53.458476],[-2.549076,53.461486],[-2.552639,53.467813],[-2.496334,53.480929],[-2.489714,53.460282],[-2.434469,53.465044],[-2.438507,53.492402],[-2.414539,53.514893],[-2.451097,53.528605],[-2.505846,53.538992],[-2.533747,53.523014],[-2.569604,53.547855],[-2.559625,53.561231],[-2.577663,53.581059],[-2.625907,53.593683]]]}',
      metadata: ["Wigan"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.824964,53.485209],[-2.844421,53.48413],[-2.849836,53.493139],[-2.865155,53.492087],[-2.887994,53.503829],[-2.922615,53.474983],[-2.914378,53.465005],[-2.900315,53.469159],[-2.867855,53.449295],[-2.865927,53.418302],[-2.892411,53.410762],[-2.85622,53.39496],[-2.837194,53.399741],[-2.821955,53.380667],[-2.856165,53.378815],[-2.853496,53.363514],[-2.840406,53.347331],[-2.818807,53.348001],[-2.787302,53.35629],[-2.776671,53.381059],[-2.757654,53.380738],[-2.745175,53.402096],[-2.786776,53.401188],[-2.776201,53.426687],[-2.80503,53.43866],[-2.795069,53.44323],[-2.804408,53.467236],[-2.818712,53.466891],[-2.824964,53.485209]]]}',
      metadata: ["Knowsley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.818807,53.348001],[-2.840406,53.347331],[-2.853496,53.363514],[-2.856165,53.378815],[-2.821955,53.380667],[-2.837194,53.399741],[-2.85622,53.39496],[-2.892411,53.410762],[-2.865927,53.418302],[-2.867855,53.449295],[-2.900315,53.469159],[-2.914378,53.465005],[-2.922615,53.474983],[-2.956307,53.472993],[-2.973823,53.462757],[-2.974915,53.443324],[-3.008629,53.437881],[-3.001845,53.410326],[-2.974652,53.378777],[-2.902708,53.345557],[-2.878158,53.334199],[-2.854428,53.327399],[-2.827952,53.331459],[-2.832457,53.337289],[-2.81878,53.339772],[-2.818807,53.348001]]]}',
      metadata: ["Liverpool"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.730521,53.5206],[-2.768872,53.513571],[-2.782476,53.53143],[-2.81674,53.512174],[-2.824964,53.485209],[-2.818712,53.466891],[-2.804408,53.467236],[-2.795069,53.44323],[-2.80503,53.43866],[-2.776201,53.426687],[-2.786776,53.401188],[-2.745175,53.402096],[-2.715227,53.399035],[-2.712803,53.390626],[-2.690633,53.385388],[-2.676317,53.387619],[-2.663555,53.428714],[-2.675268,53.432965],[-2.668514,53.440907],[-2.682076,53.438901],[-2.67717,53.452786],[-2.639136,53.444391],[-2.627462,53.434413],[-2.596231,53.442666],[-2.598685,53.450414],[-2.585296,53.439807],[-2.576743,53.446057],[-2.615359,53.463601],[-2.612138,53.481138],[-2.64554,53.480252],[-2.666296,53.499757],[-2.698893,53.502032],[-2.730521,53.5206]]]}',
      metadata: ["St. Helens"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.95415,53.695418],[-2.962301,53.693805],[-2.950461,53.691708],[-2.95415,53.695418]]],[[[-2.949758,53.690998],[-2.946254,53.679248],[-2.957495,53.683286],[-2.953717,53.691613],[-2.960734,53.685816],[-2.959984,53.691788],[-2.971565,53.692274],[-2.967261,53.698448],[-2.977644,53.685741],[-2.987214,53.689256],[-2.982866,53.682586],[-3.014069,53.679149],[-3.010041,53.672222],[-3.005663,53.664692],[-3.058718,53.621202],[-3.104239,53.55446],[-3.101899,53.53714],[-3.085747,53.525404],[-3.068317,53.5199],[-3.062759,53.52995],[-3.063737,53.505469],[-3.056237,53.492049],[-3.04137,53.465422],[-3.008752,53.438381],[-3.008629,53.437881],[-2.974915,53.443324],[-2.973823,53.462757],[-2.956307,53.472993],[-2.922615,53.474983],[-2.887994,53.503829],[-2.881716,53.520544],[-2.923009,53.52522],[-2.947893,53.544354],[-2.977614,53.545923],[-2.962964,53.523706],[-2.975826,53.515288],[-3.046699,53.542958],[-3.040388,53.565272],[-3.02262,53.569598],[-3.020709,53.583675],[-3.035986,53.587218],[-3.028822,53.60232],[-2.997889,53.626667],[-2.981823,53.622205],[-2.967259,53.631329],[-2.940143,53.658611],[-2.946786,53.688018],[-2.949758,53.690998]]]]}',
      metadata: ["Sefton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North West",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.113871,53.294372],[-3.114091,53.294377],[-3.116308,53.293108],[-3.116573,53.292959],[-3.117061,53.292684],[-3.11835,53.29196],[-3.123004,53.289304],[-3.113871,53.294372]]],[[[-2.928816,53.308364],[-2.934278,53.313287],[-3.002545,53.374702],[-3.041181,53.442924],[-3.177625,53.399708],[-3.204075,53.383249],[-3.106045,53.313574],[-3.136413,53.32841],[-3.135647,53.315782],[-3.122689,53.317421],[-3.129313,53.31437],[-3.119067,53.316217],[-3.126454,53.313595],[-3.120576,53.311682],[-3.112634,53.309095],[-3.126821,53.306337],[-3.107134,53.301732],[-3.128726,53.306192],[-3.128137,53.304574],[-3.130749,53.30727],[-3.126739,53.300737],[-3.123935,53.300238],[-3.133032,53.299708],[-3.134414,53.308013],[-3.13798,53.29764],[-3.127436,53.294353],[-3.116157,53.300819],[-3.123916,53.296072],[-3.112619,53.295214],[-3.10929,53.297105],[-3.109048,53.297047],[-3.074166,53.316381],[-3.02614,53.297749],[-2.992738,53.307109],[-2.968033,53.301255],[-2.939551,53.310416],[-2.931603,53.306069],[-2.928816,53.308364]]]]}',
      metadata: ["Wirral"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.348733,53.583348],[-1.376703,53.606478],[-1.40036,53.598671],[-1.447631,53.612739],[-1.483709,53.594869],[-1.49512,53.60319],[-1.496562,53.597374],[-1.518671,53.599719],[-1.530781,53.593129],[-1.560453,53.607552],[-1.586453,53.607174],[-1.587978,53.593487],[-1.601752,53.587759],[-1.596199,53.576987],[-1.615632,53.563028],[-1.648234,53.562195],[-1.669466,53.553228],[-1.723178,53.559927],[-1.741555,53.541071],[-1.771877,53.533853],[-1.804283,53.537013],[-1.822229,53.521091],[-1.796288,53.503153],[-1.801471,53.480992],[-1.783648,53.484799],[-1.738708,53.477152],[-1.731983,53.490897],[-1.701089,53.503121],[-1.606591,53.492907],[-1.549658,53.478494],[-1.539047,53.461715],[-1.551262,53.446204],[-1.532927,53.438315],[-1.513171,53.451423],[-1.514814,53.463667],[-1.494749,53.486269],[-1.455219,53.471751],[-1.452207,53.484929],[-1.441051,53.491105],[-1.427965,53.485854],[-1.380099,53.514228],[-1.312443,53.513794],[-1.281283,53.516492],[-1.286172,53.52676],[-1.275726,53.529837],[-1.293809,53.53581],[-1.297657,53.551496],[-1.326807,53.558185],[-1.348733,53.583348]]]}',
      metadata: ["Barnsley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.865339,53.637708],[-0.946845,53.659142],[-1.048663,53.656057],[-1.066072,53.648891],[-1.121744,53.646719],[-1.135407,53.632729],[-1.152298,53.642777],[-1.190313,53.635917],[-1.209827,53.643164],[-1.217469,53.624224],[-1.232844,53.621112],[-1.229174,53.616876],[-1.24825,53.616353],[-1.258028,53.591997],[-1.288249,53.580732],[-1.30782,53.575367],[-1.348733,53.583348],[-1.326807,53.558185],[-1.297657,53.551496],[-1.293809,53.53581],[-1.275726,53.529837],[-1.286172,53.52676],[-1.281283,53.516492],[-1.312443,53.513794],[-1.310058,53.497933],[-1.289064,53.491041],[-1.29849,53.475587],[-1.269817,53.485846],[-1.249926,53.476824],[-1.258155,53.454983],[-1.238099,53.432755],[-1.170291,53.435302],[-1.160493,53.424352],[-1.13602,53.424483],[-1.145946,53.412325],[-1.116041,53.407349],[-1.080439,53.426868],[-1.03095,53.43098],[-1.030515,53.425195],[-1.014347,53.426295],[-0.99567,53.436927],[-0.985978,53.471673],[-0.953259,53.484424],[-0.935565,53.502517],[-0.932094,53.510672],[-0.950009,53.513657],[-0.943716,53.530643],[-0.892295,53.537467],[-0.901266,53.547908],[-0.890995,53.566559],[-0.901118,53.568724],[-0.897926,53.583277],[-0.865339,53.637708]]]}',
      metadata: ["Doncaster"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.312443,53.513794],[-1.380099,53.514228],[-1.427965,53.485854],[-1.441051,53.491105],[-1.452207,53.484929],[-1.455219,53.471751],[-1.441535,53.445434],[-1.408504,53.420349],[-1.380439,53.424169],[-1.39353,53.420003],[-1.375798,53.393674],[-1.391398,53.383321],[-1.331977,53.352356],[-1.324669,53.32881],[-1.299023,53.332512],[-1.288589,53.326228],[-1.295678,53.315037],[-1.282011,53.309463],[-1.243868,53.30157],[-1.230688,53.30856],[-1.203239,53.304223],[-1.199743,53.31144],[-1.138718,53.341383],[-1.141007,53.346748],[-1.156843,53.34497],[-1.162613,53.356844],[-1.13854,53.355908],[-1.146033,53.369041],[-1.130537,53.375571],[-1.134608,53.390032],[-1.115579,53.397186],[-1.116041,53.407349],[-1.145946,53.412325],[-1.13602,53.424483],[-1.160493,53.424352],[-1.170291,53.435302],[-1.238099,53.432755],[-1.258155,53.454983],[-1.249926,53.476824],[-1.269817,53.485846],[-1.29849,53.475587],[-1.289064,53.491041],[-1.310058,53.497933],[-1.312443,53.513794]]]}',
      metadata: ["Rotherham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "East Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.455219,53.471751],[-1.494749,53.486269],[-1.514814,53.463667],[-1.513171,53.451423],[-1.532927,53.438315],[-1.551262,53.446204],[-1.539047,53.461715],[-1.549658,53.478494],[-1.606591,53.492907],[-1.701089,53.503121],[-1.731983,53.490897],[-1.738708,53.477152],[-1.783648,53.484799],[-1.801471,53.480992],[-1.768437,53.464767],[-1.745323,53.462175],[-1.739762,53.420988],[-1.708532,53.417339],[-1.704965,53.405056],[-1.653818,53.391911],[-1.663549,53.366595],[-1.590548,53.345921],[-1.612303,53.343219],[-1.632727,53.320839],[-1.625494,53.316424],[-1.609202,53.322664],[-1.599093,53.311318],[-1.584902,53.321588],[-1.580534,53.311738],[-1.561731,53.315971],[-1.56173,53.306411],[-1.536769,53.304749],[-1.502132,53.317582],[-1.467913,53.31712],[-1.455224,53.321869],[-1.45988,53.330689],[-1.441972,53.337492],[-1.420866,53.334568],[-1.411034,53.341992],[-1.386572,53.334903],[-1.386739,53.317632],[-1.337751,53.315848],[-1.324669,53.32881],[-1.331977,53.352356],[-1.391398,53.383321],[-1.375798,53.393674],[-1.39353,53.420003],[-1.380439,53.424169],[-1.408504,53.420349],[-1.441535,53.445434],[-1.455219,53.471751]]]}',
      metadata: ["Sheffield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.637894,55.064769],[-1.647681,55.079389],[-1.71376,55.065479],[-1.694884,55.042927],[-1.750245,55.024021],[-1.756563,55.003263],[-1.773842,55.004139],[-1.769757,54.980984],[-1.747127,54.981766],[-1.719662,54.967484],[-1.700393,54.970783],[-1.640074,54.959266],[-1.594333,54.970605],[-1.553882,54.959085],[-1.535525,54.965235],[-1.529213,54.983341],[-1.562981,54.992317],[-1.558504,55.005544],[-1.600266,55.009838],[-1.587383,55.025778],[-1.592638,55.03894],[-1.638508,55.041551],[-1.637894,55.064769]]]}',
      metadata: ["Newcastle"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.474518,54.986444],[-1.474502,54.986475],[-1.530844,54.984015],[-1.502521,54.988492],[-1.517827,54.996387],[-1.501781,54.988527],[-1.456021,54.988663],[-1.429851,55.013282],[-1.421751,55.013659],[-1.41679,55.01653],[-1.40287,55.014563],[-1.420714,55.019579],[-1.444305,55.051032],[-1.450531,55.055197],[-1.449947,55.058546],[-1.461794,55.074314],[-1.461824,55.07435],[-1.492329,55.066058],[-1.487814,55.053592],[-1.508632,55.04802],[-1.510284,55.055009],[-1.53234,55.054149],[-1.539868,55.061591],[-1.557041,55.054178],[-1.57508,55.05562],[-1.57854,55.063081],[-1.637894,55.064769],[-1.638508,55.041551],[-1.592638,55.03894],[-1.587383,55.025778],[-1.600266,55.009838],[-1.558504,55.005544],[-1.562981,54.992317],[-1.529213,54.983341],[-1.474518,54.986444]]]}',
      metadata: ["North Tyneside"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.364,54.943874],[-1.363971,54.944119],[-1.356618,54.965266],[-1.3766,54.977656],[-1.410905,54.9989],[-1.409185,55.001064],[-1.412227,55.00617],[-1.418604,55.003231],[-1.419979,55.004536],[-1.425637,55.006415],[-1.449432,54.984351],[-1.471878,54.986077],[-1.456554,54.977436],[-1.480486,54.974901],[-1.474518,54.986444],[-1.529213,54.983341],[-1.535525,54.965235],[-1.51533,54.95735],[-1.511218,54.931666],[-1.419371,54.929924],[-1.364,54.943874]]]}',
      metadata: ["South Tyneside"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.347332,54.860417],[-1.347569,54.860622],[-1.361607,54.898227],[-1.35636,54.910849],[-1.357642,54.917189],[-1.370968,54.911705],[-1.363478,54.922769],[-1.358644,54.922138],[-1.358941,54.923608],[-1.36613,54.926108],[-1.365301,54.933027],[-1.364,54.943874],[-1.419371,54.929924],[-1.511218,54.931666],[-1.568891,54.924625],[-1.55708,54.909211],[-1.559411,54.882037],[-1.56181,54.875717],[-1.531782,54.878188],[-1.50667,54.871141],[-1.50428,54.83123],[-1.481856,54.809651],[-1.490726,54.799304],[-1.422552,54.803171],[-1.412955,54.823655],[-1.421536,54.839476],[-1.347332,54.860417]]]}',
      metadata: ["Sunderland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.788081,52.587863],[-1.796528,52.599123],[-1.828129,52.608722],[-1.853954,52.601925],[-1.872564,52.584945],[-1.878716,52.569434],[-1.918157,52.547307],[-1.93315,52.545813],[-1.929441,52.531299],[-1.961981,52.528416],[-1.963025,52.504897],[-1.938132,52.498425],[-1.950777,52.483247],[-1.964007,52.481986],[-1.977897,52.467165],[-2.013243,52.462191],[-2.01699,52.432683],[-1.986037,52.416726],[-2.033641,52.402328],[-1.998486,52.381138],[-1.953614,52.393371],[-1.934315,52.387236],[-1.913675,52.407464],[-1.882697,52.399813],[-1.868747,52.404738],[-1.866645,52.411045],[-1.844496,52.410253],[-1.834644,52.417433],[-1.800317,52.458298],[-1.779146,52.450155],[-1.759601,52.451911],[-1.755783,52.49948],[-1.799447,52.504293],[-1.753523,52.512967],[-1.75381,52.521213],[-1.728878,52.524563],[-1.749086,52.531422],[-1.755998,52.555382],[-1.77423,52.564628],[-1.763546,52.570979],[-1.788081,52.587863]]]}',
      metadata: ["Birmingham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.459053,52.455158],[-1.491982,52.458585],[-1.505034,52.450089],[-1.539791,52.464799],[-1.561192,52.455223],[-1.589863,52.461912],[-1.595487,52.45592],[-1.595229,52.439926],[-1.608271,52.438841],[-1.61445,52.427968],[-1.602176,52.416057],[-1.601067,52.389299],[-1.567607,52.384689],[-1.552412,52.363892],[-1.524651,52.379401],[-1.513912,52.369062],[-1.504499,52.377807],[-1.464014,52.373267],[-1.431394,52.396869],[-1.438046,52.410257],[-1.423932,52.432979],[-1.459053,52.455158]]]}',
      metadata: ["Coventry"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.073942,52.54988],[-2.079779,52.557027],[-2.108244,52.543945],[-2.121454,52.556935],[-2.133487,52.554067],[-2.135587,52.534461],[-2.15221,52.525696],[-2.144211,52.517074],[-2.19194,52.503455],[-2.16742,52.471541],[-2.176483,52.454822],[-2.164851,52.430204],[-2.136027,52.426268],[-2.098565,52.445284],[-2.084821,52.432198],[-2.068052,52.435195],[-2.062467,52.427431],[-2.055783,52.441306],[-2.037881,52.441558],[-2.036988,52.427546],[-2.01699,52.432683],[-2.013243,52.462191],[-2.022749,52.480551],[-2.059017,52.461975],[-2.09709,52.468395],[-2.064323,52.487169],[-2.057258,52.512271],[-2.07959,52.524085],[-2.073942,52.54988]]]}',
      metadata: ["Dudley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.918157,52.547307],[-1.933927,52.560034],[-1.951069,52.556833],[-1.964143,52.563227],[-1.975497,52.55556],[-2.010978,52.569065],[-2.050982,52.552729],[-2.073942,52.54988],[-2.07959,52.524085],[-2.057258,52.512271],[-2.064323,52.487169],[-2.09709,52.468395],[-2.059017,52.461975],[-2.022749,52.480551],[-2.013243,52.462191],[-1.977897,52.467165],[-1.964007,52.481986],[-1.950777,52.483247],[-1.938132,52.498425],[-1.963025,52.504897],[-1.961981,52.528416],[-1.929441,52.531299],[-1.93315,52.545813],[-1.918157,52.547307]]]}',
      metadata: ["Sandwell"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.595487,52.45592],[-1.624452,52.463539],[-1.641397,52.443344],[-1.662287,52.444299],[-1.666586,52.435472],[-1.677154,52.436357],[-1.753523,52.512967],[-1.799447,52.504293],[-1.755783,52.49948],[-1.759601,52.451911],[-1.779146,52.450155],[-1.800317,52.458298],[-1.834644,52.417433],[-1.844496,52.410253],[-1.866645,52.411045],[-1.868747,52.404738],[-1.845498,52.399782],[-1.872034,52.367599],[-1.807801,52.366608],[-1.775752,52.347964],[-1.779224,52.36454],[-1.746167,52.354935],[-1.734971,52.370243],[-1.720471,52.372568],[-1.718546,52.355738],[-1.693885,52.351013],[-1.684448,52.363189],[-1.660888,52.36567],[-1.648418,52.356743],[-1.622507,52.366164],[-1.601067,52.389299],[-1.602176,52.416057],[-1.61445,52.427968],[-1.608271,52.438841],[-1.595229,52.439926],[-1.595487,52.45592]]]}',
      metadata: ["Solihull"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.872564,52.584945],[-1.892266,52.599152],[-1.886088,52.615412],[-1.915985,52.635286],[-1.905084,52.643208],[-1.918015,52.649895],[-1.910878,52.656501],[-1.933569,52.66161],[-1.945402,52.656299],[-1.95457,52.662641],[-1.960963,52.642815],[-1.98655,52.640409],[-2.029466,52.625674],[-2.030123,52.616955],[-2.050718,52.620523],[-2.054599,52.600848],[-2.077824,52.58606],[-2.050022,52.572141],[-2.061953,52.558249],[-2.050982,52.552729],[-2.010978,52.569065],[-1.975497,52.55556],[-1.964143,52.563227],[-1.951069,52.556833],[-1.933927,52.560034],[-1.918157,52.547307],[-1.878716,52.569434],[-1.872564,52.584945]]]}',
      metadata: ["Walsall"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "West Midlands",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.050718,52.620523],[-2.081002,52.611905],[-2.101241,52.635053],[-2.131644,52.637623],[-2.168351,52.61999],[-2.169157,52.609338],[-2.196397,52.606615],[-2.189186,52.588775],[-2.206696,52.585179],[-2.180337,52.574505],[-2.175535,52.554407],[-2.133487,52.554067],[-2.121454,52.556935],[-2.108244,52.543945],[-2.079779,52.557027],[-2.073942,52.54988],[-2.050982,52.552729],[-2.061953,52.558249],[-2.050022,52.572141],[-2.077824,52.58606],[-2.054599,52.600848],[-2.050718,52.620523]]]}',
      metadata: ["Wolverhampton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.878882,53.954274],[-1.883632,53.963165],[-1.893768,53.955261],[-1.966186,53.951555],[-1.963076,53.933404],[-1.976867,53.926418],[-1.952567,53.903533],[-1.979419,53.901132],[-1.982359,53.868862],[-2.021751,53.871538],[-2.04613,53.850141],[-2.046925,53.82951],[-2.061251,53.825635],[-1.986765,53.796151],[-1.980849,53.786353],[-1.928172,53.787577],[-1.873403,53.77869],[-1.872653,53.754941],[-1.855456,53.748308],[-1.827836,53.763733],[-1.809368,53.764381],[-1.770086,53.726252],[-1.760909,53.734645],[-1.745901,53.73449],[-1.747225,53.746814],[-1.733765,53.746918],[-1.714432,53.762458],[-1.681621,53.756469],[-1.649564,53.768198],[-1.640406,53.779684],[-1.674233,53.780005],[-1.682271,53.786415],[-1.711996,53.78307],[-1.695092,53.857538],[-1.715286,53.866245],[-1.760511,53.863609],[-1.800424,53.885965],[-1.787465,53.8969],[-1.756355,53.884706],[-1.725431,53.885689],[-1.717058,53.892262],[-1.732049,53.895943],[-1.727216,53.910197],[-1.745626,53.923004],[-1.775979,53.921488],[-1.805089,53.939023],[-1.847689,53.940773],[-1.8362,53.93142],[-1.860126,53.932658],[-1.878882,53.954274]]]}',
      metadata: ["Bradford"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.770086,53.726252],[-1.809368,53.764381],[-1.827836,53.763733],[-1.855456,53.748308],[-1.872653,53.754941],[-1.873403,53.77869],[-1.928172,53.787577],[-1.980849,53.786353],[-1.986765,53.796151],[-2.061251,53.825635],[-2.112279,53.805708],[-2.128359,53.799031],[-2.124816,53.788055],[-2.136363,53.780104],[-2.131174,53.751544],[-2.173294,53.723012],[-2.146328,53.682232],[-2.142258,53.678006],[-2.134127,53.685734],[-2.118085,53.671245],[-2.092906,53.670161],[-2.051242,53.683692],[-2.026816,53.624167],[-2.023036,53.615839],[-2.009471,53.61678],[-1.972744,53.625773],[-1.934152,53.64834],[-1.894599,53.645422],[-1.843566,53.666122],[-1.853683,53.672538],[-1.825724,53.670256],[-1.747302,53.694595],[-1.731283,53.680372],[-1.735871,53.713243],[-1.753637,53.72586],[-1.770086,53.726252]]]}',
      metadata: ["Calderdale"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.681621,53.756469],[-1.714432,53.762458],[-1.733765,53.746918],[-1.747225,53.746814],[-1.745901,53.73449],[-1.760909,53.734645],[-1.770086,53.726252],[-1.753637,53.72586],[-1.735871,53.713243],[-1.731283,53.680372],[-1.747302,53.694595],[-1.825724,53.670256],[-1.853683,53.672538],[-1.843566,53.666122],[-1.894599,53.645422],[-1.934152,53.64834],[-1.972744,53.625773],[-2.009471,53.61678],[-1.942726,53.561641],[-1.912885,53.551644],[-1.909621,53.538391],[-1.894109,53.533612],[-1.873493,53.54043],[-1.841821,53.519909],[-1.822229,53.521091],[-1.804283,53.537013],[-1.771877,53.533853],[-1.741555,53.541071],[-1.723178,53.559927],[-1.669466,53.553228],[-1.648234,53.562195],[-1.615632,53.563028],[-1.596199,53.576987],[-1.601752,53.587759],[-1.587978,53.593487],[-1.586453,53.607174],[-1.613676,53.624573],[-1.624902,53.653642],[-1.590626,53.660664],[-1.615217,53.677581],[-1.59192,53.689335],[-1.602499,53.692172],[-1.598376,53.699781],[-1.571122,53.706405],[-1.592204,53.718536],[-1.623372,53.718547],[-1.637882,53.747729],[-1.658444,53.745458],[-1.681621,53.756469]]]}',
      metadata: ["Kirklees"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.313723,53.904702],[-1.300588,53.907486],[-1.297204,53.921682],[-1.30731,53.921494],[-1.29418,53.927064],[-1.308992,53.924098],[-1.306962,53.934424],[-1.344712,53.939502],[-1.340405,53.945888],[-1.397182,53.942535],[-1.40671,53.92785],[-1.432601,53.927237],[-1.432997,53.910805],[-1.462715,53.906015],[-1.498781,53.915307],[-1.548793,53.910914],[-1.551844,53.90294],[-1.583625,53.909294],[-1.587487,53.901248],[-1.599993,53.909776],[-1.620537,53.903395],[-1.651673,53.905663],[-1.655083,53.912484],[-1.684627,53.910588],[-1.707083,53.919131],[-1.717959,53.908543],[-1.727216,53.910197],[-1.732049,53.895943],[-1.717058,53.892262],[-1.725431,53.885689],[-1.756355,53.884706],[-1.787465,53.8969],[-1.800424,53.885965],[-1.760511,53.863609],[-1.715286,53.866245],[-1.695092,53.857538],[-1.711996,53.78307],[-1.682271,53.786415],[-1.674233,53.780005],[-1.640406,53.779684],[-1.649564,53.768198],[-1.681621,53.756469],[-1.658444,53.745458],[-1.637882,53.747729],[-1.623372,53.718547],[-1.592204,53.718536],[-1.571122,53.706405],[-1.559323,53.698984],[-1.510396,53.72969],[-1.495728,53.722308],[-1.488298,53.727757],[-1.443149,53.728227],[-1.399722,53.719309],[-1.302043,53.741725],[-1.315357,53.743681],[-1.312239,53.755889],[-1.294942,53.755463],[-1.290386,53.763194],[-1.31381,53.781556],[-1.314872,53.809557],[-1.303623,53.816536],[-1.336097,53.83359],[-1.326557,53.840423],[-1.35297,53.856751],[-1.312603,53.865317],[-1.322271,53.900457],[-1.313723,53.904702]]]}',
      metadata: ["Leeds"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Yorks/Humber",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.232844,53.621112],[-1.255476,53.645418],[-1.244417,53.69243],[-1.199015,53.694888],[-1.198818,53.700733],[-1.219812,53.714419],[-1.226541,53.709883],[-1.229573,53.714905],[-1.268702,53.71498],[-1.302043,53.741725],[-1.399722,53.719309],[-1.443149,53.728227],[-1.488298,53.727757],[-1.495728,53.722308],[-1.510396,53.72969],[-1.559323,53.698984],[-1.571122,53.706405],[-1.598376,53.699781],[-1.602499,53.692172],[-1.59192,53.689335],[-1.615217,53.677581],[-1.590626,53.660664],[-1.624902,53.653642],[-1.613676,53.624573],[-1.586453,53.607174],[-1.560453,53.607552],[-1.530781,53.593129],[-1.518671,53.599719],[-1.496562,53.597374],[-1.49512,53.60319],[-1.483709,53.594869],[-1.447631,53.612739],[-1.40036,53.598671],[-1.376703,53.606478],[-1.348733,53.583348],[-1.30782,53.575367],[-1.288249,53.580732],[-1.258028,53.591997],[-1.24825,53.616353],[-1.229174,53.616876],[-1.232844,53.621112]]]}',
      metadata: ["Wakefield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "North East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-1.769757,54.980984],[-1.78835,54.984256],[-1.812813,54.976322],[-1.83369,54.953313],[-1.826952,54.930226],[-1.841149,54.929725],[-1.852721,54.917414],[-1.821013,54.905662],[-1.794926,54.903547],[-1.781757,54.911543],[-1.768745,54.906726],[-1.736204,54.918581],[-1.724908,54.9088],[-1.698633,54.909054],[-1.69169,54.902598],[-1.674778,54.90956],[-1.675576,54.898097],[-1.649319,54.892987],[-1.65056,54.879324],[-1.594164,54.902019],[-1.579909,54.87777],[-1.559411,54.882037],[-1.55708,54.909211],[-1.568891,54.924625],[-1.511218,54.931666],[-1.51533,54.95735],[-1.535525,54.965235],[-1.553882,54.959085],[-1.594333,54.970605],[-1.640074,54.959266],[-1.700393,54.970783],[-1.719662,54.967484],[-1.747127,54.981766],[-1.769757,54.980984]]]}',
      metadata: ["Gateshead"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "London",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.080183,51.506872],[-0.078529,51.521512],[-0.085233,51.520348],[-0.10529,51.518555],[-0.111568,51.515335],[-0.111444,51.509775],[-0.109174,51.509874],[-0.080183,51.506872]]]}',
      metadata: ["City of London"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.160117,51.511781],[0.190222,51.552652],[0.18518,51.565513],[0.161894,51.561617],[0.146704,51.568797],[0.148206,51.598968],[0.126387,51.586725],[0.131579,51.571824],[0.118901,51.557371],[0.09352,51.545858],[0.068362,51.54439],[0.072745,51.529275],[0.092602,51.525698],[0.098129,51.514951],[0.12687,51.519567],[0.158741,51.512265],[0.160117,51.511781]]]}',
      metadata: ["Barking and Dagenham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.181961,51.668683],[-0.191067,51.663897],[-0.203353,51.670126],[-0.212135,51.661354],[-0.250583,51.656057],[-0.257333,51.641832],[-0.30445,51.636349],[-0.267113,51.600372],[-0.248234,51.584314],[-0.25113,51.570284],[-0.233417,51.571983],[-0.213487,51.555191],[-0.171232,51.572418],[-0.157131,51.586191],[-0.156483,51.605325],[-0.151331,51.597471],[-0.138706,51.610186],[-0.144495,51.615509],[-0.129094,51.632265],[-0.154732,51.655545],[-0.185893,51.662845],[-0.181961,51.668683]]]}',
      metadata: ["Barnet"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.162514,51.504796],[0.120234,51.511451],[0.118677,51.511317],[0.124191,51.476849],[0.098244,51.475452],[0.082313,51.466641],[0.087427,51.443284],[0.07536,51.431987],[0.107023,51.414264],[0.148869,51.408429],[0.152932,51.408708],[0.155875,51.430877],[0.164328,51.428585],[0.172854,51.443245],[0.203353,51.454328],[0.221174,51.478801],[0.217618,51.480475],[0.183617,51.481055],[0.169216,51.498865],[0.168814,51.499362],[0.162514,51.504796]]]}',
      metadata: ["Bexley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.213487,51.555191],[-0.233417,51.571983],[-0.25113,51.570284],[-0.248234,51.584314],[-0.267113,51.600372],[-0.290406,51.593544],[-0.282465,51.585035],[-0.304697,51.587053],[-0.326642,51.578775],[-0.322148,51.569677],[-0.335556,51.556557],[-0.307735,51.545879],[-0.307454,51.533087],[-0.282457,51.538649],[-0.284241,51.528913],[-0.246282,51.532738],[-0.228441,51.530319],[-0.216021,51.52792],[-0.205142,51.532956],[-0.196479,51.527639],[-0.191468,51.536292],[-0.213487,51.555191]]]}',
      metadata: ["Brent"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.07536,51.431987],[0.061705,51.4237],[0.029379,51.441705],[0.036276,51.422418],[0.025459,51.428973],[-0.010312,51.413578],[-0.030216,51.425683],[-0.073907,51.426213],[-0.078288,51.420605],[-0.078557,51.419874],[-0.068202,51.403488],[-0.036523,51.388432],[-0.036903,51.377017],[-0.026767,51.379376],[0.002255,51.329135],[0.015009,51.291786],[0.032909,51.307521],[0.042396,51.292673],[0.085693,51.293084],[0.085029,51.316023],[0.117904,51.329663],[0.118456,51.344148],[0.136958,51.344175],[0.152058,51.369694],[0.147741,51.392801],[0.162384,51.39249],[0.148869,51.408429],[0.107023,51.414264],[0.07536,51.431987]]]}',
      metadata: ["Bromley"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.142396,51.569106],[-0.171232,51.572418],[-0.213487,51.555191],[-0.191468,51.536292],[-0.152685,51.537511],[-0.129335,51.513473],[-0.111568,51.515335],[-0.10529,51.518555],[-0.122564,51.530753],[-0.142396,51.569106]]]}',
      metadata: ["Camden"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.078557,51.419874],[-0.112632,51.423244],[-0.127725,51.412316],[-0.12414,51.39761],[-0.134322,51.390847],[-0.116842,51.345763],[-0.144576,51.342088],[-0.145577,51.323493],[-0.156524,51.321485],[-0.155318,51.301274],[-0.137314,51.300781],[-0.124293,51.286759],[-0.091168,51.301473],[-0.078924,51.319769],[-0.051307,51.322448],[-0.037892,51.338704],[0.002255,51.329135],[-0.026767,51.379376],[-0.036903,51.377017],[-0.036523,51.388432],[-0.068202,51.403488],[-0.078557,51.419874]]]}',
      metadata: ["Croydon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.246282,51.532738],[-0.284241,51.528913],[-0.282457,51.538649],[-0.307454,51.533087],[-0.307735,51.545879],[-0.335556,51.556557],[-0.377843,51.554977],[-0.398706,51.547897],[-0.395286,51.542552],[-0.419452,51.540332],[-0.37619,51.528817],[-0.406918,51.499666],[-0.371851,51.490476],[-0.350619,51.499107],[-0.311911,51.491971],[-0.294015,51.501559],[-0.280772,51.502848],[-0.267677,51.493919],[-0.253041,51.501422],[-0.246282,51.532738]]]}',
      metadata: ["Ealing"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.011919,51.680878],[-0.105779,51.691876],[-0.163493,51.688115],[-0.181961,51.668683],[-0.185893,51.662845],[-0.154732,51.655545],[-0.129094,51.632265],[-0.144495,51.615509],[-0.138706,51.610186],[-0.041391,51.605647],[-0.01226,51.646229],[-0.011919,51.680878]]]}',
      metadata: ["Enfield"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-0.019565,51.478165],[-0.017082,51.480405],[-0.022016,51.483672],[-0.019565,51.478165]]],[[[-0.008484,51.487089],[-0.010688,51.487047],[-0.008561,51.486576],[-0.008484,51.487089]]],[[[0.118677,51.511317],[0.093561,51.50915],[0.090812,51.507918],[0.082016,51.500445],[0.076677,51.495908],[0.058031,51.494049],[0.021572,51.493952],[0.015466,51.4972],[0.006901,51.501755],[0.002003,51.50436],[0.001403,51.504234],[0.001489,51.501848],[0.00197,51.488511],[-0.019152,51.477239],[-0.015062,51.468044],[0.017963,51.47383],[0.009962,51.459395],[0.029379,51.441705],[0.061705,51.4237],[0.07536,51.431987],[0.087427,51.443284],[0.082313,51.466641],[0.098244,51.475452],[0.124191,51.476849],[0.118677,51.511317]]]]}',
      metadata: ["Greenwich"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.017174,51.551577],[-0.028391,51.56102],[-0.047079,51.562592],[-0.061159,51.577786],[-0.097742,51.573623],[-0.104374,51.564767],[-0.076559,51.54784],[-0.097032,51.533003],[-0.085233,51.520348],[-0.078529,51.521512],[-0.062434,51.535532],[-0.01655,51.54333],[-0.017174,51.551577]]]}',
      metadata: ["Hackney"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.228441,51.530319],[-0.246282,51.532738],[-0.253041,51.501422],[-0.243367,51.487892],[-0.229959,51.487929],[-0.221737,51.472332],[-0.190529,51.464275],[-0.17775,51.47754],[-0.214177,51.500834],[-0.228441,51.530319]]]}',
      metadata: ["Hammersmith and Fulham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.041391,51.605647],[-0.138706,51.610186],[-0.151331,51.597471],[-0.156483,51.605325],[-0.157131,51.586191],[-0.171232,51.572418],[-0.142396,51.569106],[-0.119535,51.575507],[-0.104374,51.564767],[-0.097742,51.573623],[-0.061159,51.577786],[-0.041391,51.605647]]]}',
      metadata: ["Haringey"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.30445,51.636349],[-0.316672,51.640536],[-0.362621,51.623505],[-0.404004,51.613184],[-0.377843,51.554977],[-0.335556,51.556557],[-0.322148,51.569677],[-0.326642,51.578775],[-0.304697,51.587053],[-0.282465,51.585035],[-0.290406,51.593544],[-0.267113,51.600372],[-0.30445,51.636349]]]}',
      metadata: ["Harrow"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.168814,51.499362],[0.164695,51.504453],[0.162514,51.504796],[0.168814,51.499362]]],[[[0.313035,51.565818],[0.29029,51.564299],[0.269879,51.599575],[0.254009,51.601598],[0.264562,51.608321],[0.252194,51.617769],[0.224088,51.631738],[0.200312,51.624936],[0.138184,51.623545],[0.148206,51.598968],[0.146704,51.568797],[0.161894,51.561617],[0.18518,51.565513],[0.190222,51.552652],[0.160117,51.511781],[0.178515,51.505298],[0.182018,51.498628],[0.187658,51.487885],[0.210576,51.490248],[0.211793,51.489753],[0.214157,51.49604],[0.229965,51.499366],[0.226597,51.506563],[0.241919,51.50796],[0.237176,51.519334],[0.248965,51.528674],[0.253834,51.517886],[0.263683,51.51787],[0.265347,51.53215],[0.334024,51.540504],[0.313035,51.565818]]]]}',
      metadata: ["Havering"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.404004,51.613184],[-0.440575,51.620073],[-0.457131,51.612294],[-0.496846,51.631733],[-0.500596,51.59969],[-0.476621,51.559189],[-0.495487,51.538545],[-0.483162,51.507128],[-0.490025,51.494748],[-0.509701,51.469176],[-0.458649,51.456305],[-0.44395,51.453291],[-0.411132,51.469888],[-0.416918,51.482476],[-0.406918,51.499666],[-0.37619,51.528817],[-0.419452,51.540332],[-0.395286,51.542552],[-0.398706,51.547897],[-0.377843,51.554977],[-0.404004,51.613184]]]}',
      metadata: ["Hillingdon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.253041,51.501422],[-0.267677,51.493919],[-0.280772,51.502848],[-0.294015,51.501559],[-0.311911,51.491971],[-0.350619,51.499107],[-0.371851,51.490476],[-0.406918,51.499666],[-0.416918,51.482476],[-0.411132,51.469888],[-0.44395,51.453291],[-0.458649,51.456305],[-0.456468,51.438107],[-0.391317,51.422315],[-0.366823,51.441623],[-0.387816,51.449438],[-0.373024,51.457473],[-0.326934,51.457011],[-0.292096,51.487282],[-0.257493,51.471206],[-0.243367,51.487892],[-0.253041,51.501422]]]}',
      metadata: ["Hounslow"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.104374,51.564767],[-0.119535,51.575507],[-0.142396,51.569106],[-0.122564,51.530753],[-0.10529,51.518555],[-0.085233,51.520348],[-0.097032,51.533003],[-0.076559,51.54784],[-0.104374,51.564767]]]}',
      metadata: ["Islington"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.216021,51.52792],[-0.228441,51.530319],[-0.214177,51.500834],[-0.17775,51.47754],[-0.149806,51.484546],[-0.158458,51.502226],[-0.179521,51.497766],[-0.216021,51.52792]]]}',
      metadata: ["Kensington and Chelsea"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.251085,51.432558],[-0.254066,51.437288],[-0.28656,51.420185],[-0.290616,51.42899],[-0.310651,51.43221],[-0.308789,51.401917],[-0.317698,51.393667],[-0.307365,51.378384],[-0.33051,51.348419],[-0.330656,51.32901],[-0.306192,51.335084],[-0.285438,51.364249],[-0.261149,51.3796],[-0.24503,51.380034],[-0.239691,51.389274],[-0.251085,51.432558]]]}',
      metadata: ["Kingston"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.078288,51.420605],[-0.101383,51.451924],[-0.090039,51.466066],[-0.108225,51.480307],[-0.109174,51.509874],[-0.111444,51.509775],[-0.129471,51.485891],[-0.151212,51.465861],[-0.143611,51.441839],[-0.135888,51.441976],[-0.140359,51.419264],[-0.148065,51.41287],[-0.127725,51.412316],[-0.112632,51.423244],[-0.078557,51.419874],[-0.078288,51.420605]]]}',
      metadata: ["Lambeth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.022016,51.483672],[-0.024829,51.485535],[-0.032295,51.492975],[-0.053972,51.487938],[-0.041643,51.455005],[-0.061801,51.447787],[-0.073907,51.426213],[-0.030216,51.425683],[-0.010312,51.413578],[0.025459,51.428973],[0.036276,51.422418],[0.029379,51.441705],[0.009962,51.459395],[0.017963,51.47383],[-0.015062,51.468044],[-0.019152,51.477239],[-0.022675,51.475358],[-0.019565,51.478165],[-0.022016,51.483672]]]}',
      metadata: ["Lewisham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.140359,51.419264],[-0.181939,51.424731],[-0.190027,51.441465],[-0.251085,51.432558],[-0.239691,51.389274],[-0.21808,51.380182],[-0.209784,51.3883],[-0.188399,51.385434],[-0.174813,51.393413],[-0.165215,51.387972],[-0.134322,51.390847],[-0.12414,51.39761],[-0.127725,51.412316],[-0.148065,51.41287],[-0.140359,51.419264]]]}',
      metadata: ["Merton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.093561,51.50915],[0.092114,51.509025],[0.090812,51.507918],[0.093561,51.50915]]],[[[0.068362,51.54439],[0.050345,51.564022],[0.046273,51.55483],[0.020474,51.556128],[-0.017174,51.551577],[-0.01655,51.54333],[-0.021129,51.536508],[0.005704,51.507586],[0.008127,51.508103],[0.009187,51.50833],[0.015725,51.503064],[0.017577,51.501572],[0.02025,51.499419],[0.060386,51.498359],[0.065782,51.500733],[0.098129,51.514951],[0.092602,51.525698],[0.072745,51.529275],[0.068362,51.54439]]]]}',
      metadata: ["Newham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.138184,51.623545],[0.072832,51.604687],[0.021819,51.628833],[0.008694,51.61907],[0.021444,51.611803],[0.012096,51.592691],[0.020474,51.556128],[0.046273,51.55483],[0.050345,51.564022],[0.068362,51.54439],[0.09352,51.545858],[0.118901,51.557371],[0.131579,51.571824],[0.126387,51.586725],[0.148206,51.598968],[0.138184,51.623545]]]}',
      metadata: ["Redbridge"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.221737,51.472332],[-0.229959,51.487929],[-0.243367,51.487892],[-0.257493,51.471206],[-0.292096,51.487282],[-0.326934,51.457011],[-0.373024,51.457473],[-0.387816,51.449438],[-0.366823,51.441623],[-0.391317,51.422315],[-0.38335,51.408538],[-0.359139,51.411903],[-0.327818,51.391837],[-0.317698,51.393667],[-0.308789,51.401917],[-0.310651,51.43221],[-0.290616,51.42899],[-0.28656,51.420185],[-0.254066,51.437288],[-0.241599,51.443118],[-0.259111,51.454953],[-0.256188,51.462834],[-0.23329,51.463972],[-0.232733,51.472511],[-0.221737,51.472332]]]}',
      metadata: ["Richmond upon Thames"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.080183,51.506872],[-0.109174,51.509874],[-0.108225,51.480307],[-0.090039,51.466066],[-0.101383,51.451924],[-0.078288,51.420605],[-0.073907,51.426213],[-0.061801,51.447787],[-0.041643,51.455005],[-0.053972,51.487938],[-0.032295,51.492975],[-0.032378,51.493058],[-0.03475,51.502461],[-0.03589,51.506977],[-0.053873,51.50278],[-0.062954,51.50066],[-0.068369,51.50302],[-0.072976,51.505028],[-0.080183,51.506872]]]}',
      metadata: ["Southwark"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.134322,51.390847],[-0.165215,51.387972],[-0.174813,51.393413],[-0.188399,51.385434],[-0.209784,51.3883],[-0.21808,51.380182],[-0.239691,51.389274],[-0.24503,51.380034],[-0.245405,51.366845],[-0.222736,51.357086],[-0.217264,51.343387],[-0.229823,51.336523],[-0.220942,51.329863],[-0.197319,51.343595],[-0.156524,51.321485],[-0.145577,51.323493],[-0.144576,51.342088],[-0.116842,51.345763],[-0.134322,51.390847]]]}',
      metadata: ["Sutton"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[0.002003,51.50436],[0.001387,51.504687],[0.001403,51.504234],[0.002003,51.50436]]],[[[0.005704,51.507586],[-0.021129,51.536508],[-0.01655,51.54333],[-0.062434,51.535532],[-0.078529,51.521512],[-0.080183,51.506872],[-0.072976,51.505028],[-0.079369,51.507813],[-0.059843,51.502879],[-0.059694,51.502842],[-0.05962,51.502876],[-0.045493,51.509395],[-0.029856,51.508908],[-0.028277,51.502352],[-0.025374,51.4903],[-0.010688,51.487047],[-0.008484,51.487089],[-0.006248,51.50198],[-0.005774,51.505135],[0.005704,51.507586]]]]}',
      metadata: ["Tower Hamlets"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[0.021819,51.628833],[0.02272,51.641115],[-0.01226,51.646229],[-0.041391,51.605647],[-0.061159,51.577786],[-0.047079,51.562592],[-0.028391,51.56102],[-0.017174,51.551577],[0.020474,51.556128],[0.012096,51.592691],[0.021444,51.611803],[0.008694,51.61907],[0.021819,51.628833]]]}',
      metadata: ["Waltham Forest"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "South East",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.140359,51.419264],[-0.135888,51.441976],[-0.143611,51.441839],[-0.151212,51.465861],[-0.129471,51.485891],[-0.149806,51.484546],[-0.17775,51.47754],[-0.190529,51.464275],[-0.221737,51.472332],[-0.232733,51.472511],[-0.23329,51.463972],[-0.256188,51.462834],[-0.259111,51.454953],[-0.241599,51.443118],[-0.254066,51.437288],[-0.251085,51.432558],[-0.190027,51.441465],[-0.181939,51.424731],[-0.140359,51.419264]]]}',
      metadata: ["Wandsworth"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "England",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-0.111568,51.515335],[-0.129335,51.513473],[-0.152685,51.537511],[-0.191468,51.536292],[-0.196479,51.527639],[-0.205142,51.532956],[-0.216021,51.52792],[-0.179521,51.497766],[-0.158458,51.502226],[-0.149806,51.484546],[-0.129471,51.485891],[-0.111444,51.509775],[-0.111568,51.515335]]]}',
      metadata: ["Westminster"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-5.868254,54.688869],[-5.889809,54.69593],[-5.888922,54.710462],[-5.901788,54.708751],[-5.910598,54.71621],[-5.892323,54.745278],[-5.90518,54.750526],[-5.896841,54.758928],[-5.905932,54.765761],[-5.887432,54.772394],[-5.900783,54.780288],[-5.92204,54.772278],[-5.94858,54.780152],[-5.962652,54.773601],[-5.97392,54.783224],[-5.986825,54.77399],[-6.012104,54.788306],[-6.009844,54.800095],[-6.054109,54.798282],[-6.048793,54.791776],[-6.066924,54.797186],[-6.079835,54.796308],[-6.073013,54.791693],[-6.102651,54.792569],[-6.111328,54.807088],[-6.172018,54.811869],[-6.198456,54.806338],[-6.198856,54.798008],[-6.227208,54.788479],[-6.267677,54.798915],[-6.263155,54.790801],[-6.288316,54.789656],[-6.302229,54.796341],[-6.321433,54.790694],[-6.345431,54.80109],[-6.384702,54.779141],[-6.433597,54.789391],[-6.477057,54.780904],[-6.477787,54.772764],[-6.457201,54.761829],[-6.495926,54.713665],[-6.469192,54.685245],[-6.407098,54.648826],[-6.425998,54.568223],[-6.323747,54.591284],[-6.304635,54.572876],[-6.281173,54.580019],[-6.294514,54.59667],[-6.263657,54.59793],[-6.236707,54.587982],[-6.217477,54.602046],[-6.191917,54.600421],[-6.145535,54.611136],[-6.148067,54.620753],[-6.122852,54.617638],[-6.087312,54.624353],[-6.045533,54.605894],[-6.041069,54.612931],[-6.021146,54.611701],[-6.023539,54.628747],[-5.986407,54.659428],[-5.970875,54.645307],[-5.948791,54.652365],[-5.950696,54.665004],[-5.912862,54.647981],[-5.895703,54.67406],[-5.868254,54.688869]]]}',
      metadata: ["Antrim and Newtownabbey"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-6.304635,54.572876],[-6.323747,54.591284],[-6.425998,54.568223],[-6.541269,54.542103],[-6.591779,54.503437],[-6.629453,54.503818],[-6.650689,54.48671],[-6.649806,54.470024],[-6.697082,54.442243],[-6.710108,54.4039],[-6.728148,54.401653],[-6.734995,54.409157],[-6.760959,54.406971],[-6.793727,54.415039],[-6.807526,54.398973],[-6.804662,54.379618],[-6.837032,54.335592],[-6.863924,54.330091],[-6.852882,54.297654],[-6.850953,54.29198],[-6.861462,54.281113],[-6.875016,54.287332],[-6.878019,54.279062],[-6.827743,54.261446],[-6.816168,54.223008],[-6.800406,54.221104],[-6.801018,54.213195],[-6.775583,54.1989],[-6.755946,54.199036],[-6.740804,54.181913],[-6.721034,54.181992],[-6.710102,54.19804],[-6.69186,54.200229],[-6.644055,54.179754],[-6.599912,54.218947],[-6.585206,54.213543],[-6.571991,54.224204],[-6.525002,54.237227],[-6.504102,54.225686],[-6.46678,54.25498],[-6.457873,54.252108],[-6.439095,54.267483],[-6.401668,54.273035],[-6.368444,54.265308],[-6.351443,54.274001],[-6.33105,54.263174],[-6.288497,54.265044],[-6.279123,54.271762],[-6.254006,54.257788],[-6.241494,54.263727],[-6.212344,54.258615],[-6.181422,54.244182],[-6.188932,54.23754],[-6.160282,54.21891],[-6.13657,54.243128],[-6.106863,54.240107],[-6.070112,54.254401],[-6.050378,54.243928],[-6.038844,54.263136],[-6.075679,54.26348],[-6.062637,54.271449],[-6.072353,54.279569],[-6.058857,54.280897],[-6.059872,54.291399],[-6.104398,54.318483],[-6.098418,54.326563],[-6.063585,54.326923],[-6.018541,54.370478],[-6.020777,54.377533],[-6.041402,54.378743],[-6.037139,54.384263],[-6.064245,54.387262],[-6.055283,54.403484],[-6.086368,54.410146],[-6.133825,54.435709],[-6.158942,54.434228],[-6.156523,54.444152],[-6.210184,54.432741],[-6.208796,54.445007],[-6.258051,54.47954],[-6.239192,54.495363],[-6.273166,54.519554],[-6.27772,54.557432],[-6.304635,54.572876]]]}',
      metadata: ["Armagh City, Banbridge and Craigavon"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-5.912862,54.647981],[-5.950696,54.665004],[-5.948791,54.652365],[-5.970875,54.645307],[-5.986407,54.659428],[-6.023539,54.628747],[-6.021146,54.611701],[-6.041069,54.612931],[-6.045533,54.605894],[-6.041,54.564092],[-6.059769,54.555167],[-6.041184,54.546766],[-6.016635,54.550821],[-5.975745,54.530588],[-5.941391,54.543668],[-5.933175,54.540193],[-5.912152,54.566669],[-5.88918,54.561782],[-5.82318,54.581483],[-5.809099,54.615521],[-5.83073,54.610583],[-5.829268,54.616752],[-5.858505,54.62356],[-5.855103,54.633676],[-5.912862,54.647981]]]}',
      metadata: ["Belfast"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-5.976929,55.056297],[-6.042466,55.052966],[-6.062249,55.060088],[-6.052815,55.065746],[-6.058731,55.081233],[-6.035968,55.103247],[-6.041193,55.131015],[-6.025486,55.140447],[-6.026893,55.161226],[-6.051127,55.175758],[-6.062228,55.198881],[-6.08683,55.203747],[-6.116135,55.209535],[-6.139217,55.223847],[-6.145954,55.228022],[-6.156754,55.22325],[-6.178059,55.21383],[-6.236185,55.202676],[-6.268442,55.219388],[-6.289427,55.230247],[-6.312665,55.229813],[-6.332565,55.239645],[-6.368139,55.245834],[-6.404733,55.233784],[-6.409307,55.232277],[-6.454951,55.23906],[-6.475885,55.252159],[-6.530588,55.233719],[-6.52852,55.224979],[-6.546127,55.216022],[-6.5529,55.220078],[-6.601366,55.207262],[-6.606438,55.20592],[-6.649591,55.205061],[-6.650195,55.205407],[-6.662888,55.212677],[-6.661011,55.204993],[-6.659496,55.19879],[-6.714522,55.190952],[-6.721882,55.189902],[-6.724583,55.173218],[-6.752623,55.168547],[-6.874721,55.16807],[-6.913683,55.174422],[-6.961677,55.193107],[-6.965921,55.194757],[-6.966034,55.192929],[-6.968822,55.147889],[-6.989993,55.10955],[-7.017784,55.101123],[-7.020089,55.100424],[-7.015605,55.083767],[-7.013806,55.07708],[-7.014701,55.076556],[-7.0459,55.058274],[-7.041712,55.053036],[-7.050001,55.056902],[-7.051407,55.049538],[-7.110159,55.042517],[-7.147039,55.046724],[-7.165882,55.033957],[-7.133126,55.004901],[-7.126661,54.985273],[-7.081031,54.985815],[-7.093707,54.959081],[-7.087638,54.927447],[-7.043604,54.913962],[-7.034614,54.888427],[-7.019298,54.886967],[-7.039198,54.867419],[-7.038841,54.845496],[-7.015285,54.835268],[-7.006926,54.820911],[-6.98738,54.832985],[-6.971826,54.828199],[-6.946234,54.833745],[-6.912064,54.820377],[-6.886983,54.831795],[-6.8866,54.852997],[-6.857274,54.857586],[-6.850915,54.850933],[-6.802558,54.846559],[-6.782373,54.862113],[-6.78495,54.86999],[-6.768239,54.873168],[-6.75755,54.903049],[-6.775805,54.913755],[-6.738122,54.928806],[-6.707488,54.931761],[-6.690286,54.916257],[-6.656948,54.922401],[-6.643457,54.937341],[-6.617489,54.938211],[-6.58503,54.923515],[-6.555153,54.937073],[-6.536834,54.933533],[-6.537601,54.952019],[-6.499898,54.91876],[-6.467829,54.924853],[-6.422146,54.916775],[-6.42844,54.936618],[-6.407823,54.940487],[-6.448199,54.964646],[-6.427006,54.964115],[-6.423611,54.972952],[-6.401386,54.966612],[-6.390571,54.981547],[-6.357028,54.975378],[-6.345592,54.988043],[-6.322979,54.979132],[-6.323751,55.010219],[-6.279225,55.004803],[-6.204355,55.029623],[-6.18522,55.026092],[-6.180801,55.034431],[-6.16529,55.030677],[-6.131641,54.9882],[-6.097978,54.983954],[-6.024712,55.036957],[-6.014124,55.035516],[-5.976929,55.056297]]],[[[-6.16976,55.301578],[-6.239963,55.31208],[-6.270005,55.306963],[-6.286095,55.293449],[-6.193036,55.292627],[-6.200822,55.275393],[-6.189916,55.258465],[-6.16976,55.301578]]]]}',
      metadata: ["Causeway Coast and Glens"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-7.147039,55.046724],[-7.156519,55.059031],[-7.224866,55.061064],[-7.232809,55.048212],[-7.251769,55.04417],[-7.245533,55.063512],[-7.255548,55.065451],[-7.254378,55.060011],[-7.264866,55.066636],[-7.289201,55.047412],[-7.299432,55.056125],[-7.318346,55.045086],[-7.32439,55.046262],[-7.346205,55.050504],[-7.391444,55.022347],[-7.405581,55.00331],[-7.391459,54.997844],[-7.394812,54.994649],[-7.407046,54.982986],[-7.407456,54.963656],[-7.392084,54.945433],[-7.447339,54.935042],[-7.443095,54.871342],[-7.484026,54.823812],[-7.52539,54.808739],[-7.528257,54.807693],[-7.549306,54.789354],[-7.547548,54.755348],[-7.534209,54.747088],[-7.543331,54.742674],[-7.578402,54.741752],[-7.579283,54.75044],[-7.588551,54.743695],[-7.59568,54.743613],[-7.617598,54.74336],[-7.636621,54.751501],[-7.697031,54.72377],[-7.71161,54.726097],[-7.735303,54.716913],[-7.749947,54.704254],[-7.788673,54.719616],[-7.804709,54.718652],[-7.817697,54.733809],[-7.836674,54.736429],[-7.879472,54.702669],[-7.900944,54.702697],[-7.918113,54.702717],[-7.921013,54.695965],[-7.89884,54.688247],[-7.898041,54.687968],[-7.898724,54.68745],[-7.913867,54.675952],[-7.909863,54.66818],[-7.894335,54.657264],[-7.893282,54.656523],[-7.856589,54.650475],[-7.854527,54.631924],[-7.828334,54.633041],[-7.813259,54.643884],[-7.772464,54.621502],[-7.757881,54.625025],[-7.742984,54.61855],[-7.741595,54.617946],[-7.740148,54.618685],[-7.708368,54.634902],[-7.706486,54.620281],[-7.706396,54.619581],[-7.693484,54.619111],[-7.703482,54.608459],[-7.657561,54.626678],[-7.617073,54.625067],[-7.615323,54.632888],[-7.596244,54.634792],[-7.572901,54.62964],[-7.574616,54.640162],[-7.561683,54.647364],[-7.550305,54.647225],[-7.550475,54.638643],[-7.51039,54.653805],[-7.494593,54.649294],[-7.484203,54.654161],[-7.447869,54.640967],[-7.391708,54.693089],[-7.319271,54.713319],[-7.320551,54.732048],[-7.305717,54.738498],[-7.283659,54.740556],[-7.261008,54.730957],[-7.226214,54.751988],[-7.117286,54.749376],[-7.080729,54.765785],[-7.00539,54.77985],[-6.940005,54.773586],[-6.922093,54.77312],[-6.902901,54.783818],[-6.922424,54.802542],[-6.912064,54.820377],[-6.946234,54.833745],[-6.971826,54.828199],[-6.98738,54.832985],[-7.006926,54.820911],[-7.015285,54.835268],[-7.038841,54.845496],[-7.039198,54.867419],[-7.019298,54.886967],[-7.034614,54.888427],[-7.043604,54.913962],[-7.087638,54.927447],[-7.093707,54.959081],[-7.081031,54.985815],[-7.126661,54.985273],[-7.133126,55.004901],[-7.165882,55.033957],[-7.147039,55.046724]]]}',
      metadata: ["Derry City and Strabane"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-6.940005,54.773586],[-7.00539,54.77985],[-7.080729,54.765785],[-7.117286,54.749376],[-7.226214,54.751988],[-7.261008,54.730957],[-7.283659,54.740556],[-7.305717,54.738498],[-7.320551,54.732048],[-7.319271,54.713319],[-7.391708,54.693089],[-7.447869,54.640967],[-7.484203,54.654161],[-7.494593,54.649294],[-7.51039,54.653805],[-7.550475,54.638643],[-7.550305,54.647225],[-7.561683,54.647364],[-7.574616,54.640162],[-7.572901,54.62964],[-7.596244,54.634792],[-7.615323,54.632888],[-7.617073,54.625067],[-7.657561,54.626678],[-7.703482,54.608459],[-7.751475,54.598799],[-7.762293,54.585868],[-7.794042,54.581588],[-7.796591,54.571624],[-7.833242,54.552342],[-7.823909,54.544405],[-7.850512,54.533003],[-7.876381,54.533179],[-7.949724,54.533645],[-7.970317,54.54729],[-8.005966,54.545942],[-8.041755,54.506492],[-8.042606,54.487723],[-8.089038,54.48709],[-8.098614,54.484213],[-8.091113,54.476347],[-8.113183,54.47638],[-8.11475,54.469058],[-8.175707,54.464898],[-8.177484,54.464776],[-8.175572,54.464008],[-8.143056,54.45092],[-8.161529,54.441615],[-8.123234,54.419754],[-8.084137,54.397397],[-8.057394,54.365742],[-8.031352,54.356682],[-8.000288,54.358096],[-7.961651,54.312435],[-7.910888,54.296],[-7.9015,54.301429],[-7.880937,54.291893],[-7.861886,54.293487],[-7.873207,54.27952],[-7.872803,54.266209],[-7.860465,54.26026],[-7.860425,54.252769],[-7.860242,54.217554],[-7.829857,54.207174],[-7.811472,54.200887],[-7.767995,54.209424],[-7.739193,54.203523],[-7.685428,54.207762],[-7.676535,54.181977],[-7.65612,54.185663],[-7.628502,54.169241],[-7.610404,54.143797],[-7.57457,54.141498],[-7.565728,54.126587],[-7.547388,54.122112],[-7.528141,54.135756],[-7.512605,54.13146],[-7.479329,54.122248],[-7.468502,54.140785],[-7.44234,54.153903],[-7.409553,54.156213],[-7.420389,54.136854],[-7.372784,54.139522],[-7.391898,54.120202],[-7.363521,54.13144],[-7.346173,54.116503],[-7.327065,54.124594],[-7.318828,54.113347],[-7.305329,54.123356],[-7.339495,54.14669],[-7.310214,54.167309],[-7.279765,54.167627],[-7.283801,54.153852],[-7.301331,54.144327],[-7.285441,54.13636],[-7.308936,54.132113],[-7.300706,54.121488],[-7.279506,54.12238],[-7.252518,54.155683],[-7.258143,54.164487],[-7.24027,54.169685],[-7.258248,54.177377],[-7.259059,54.192242],[-7.232977,54.197797],[-7.249213,54.197899],[-7.248062,54.204417],[-7.231855,54.205569],[-7.220847,54.215811],[-7.216703,54.215774],[-7.198787,54.215611],[-7.188274,54.224873],[-7.17111,54.217592],[-7.144952,54.224715],[-7.146041,54.23975],[-7.158991,54.243667],[-7.142244,54.255621],[-7.160646,54.273616],[-7.179296,54.272577],[-7.173752,54.284284],[-7.172907,54.286066],[-7.212193,54.299602],[-7.197867,54.311065],[-7.179149,54.30969],[-7.18883,54.337649],[-7.200963,54.341774],[-7.227118,54.326976],[-7.246193,54.326972],[-7.271949,54.344101],[-7.280524,54.371575],[-7.334429,54.371683],[-7.331448,54.404711],[-7.362245,54.419637],[-7.367021,54.437511],[-7.334695,54.44487],[-7.294821,54.443553],[-7.270575,54.453688],[-7.27256,54.460376],[-7.252941,54.450997],[-7.235788,54.454496],[-7.216427,54.467302],[-7.198614,54.46625],[-7.202865,54.477885],[-7.160152,54.472504],[-7.1352,54.481369],[-7.121162,54.475446],[-7.123863,54.48475],[-7.108075,54.485927],[-7.099371,54.500322],[-7.072152,54.507909],[-7.07292,54.502762],[-7.039467,54.505541],[-7.029091,54.525813],[-7.008796,54.524585],[-6.974513,54.543674],[-6.985668,54.557163],[-6.969474,54.569639],[-6.988582,54.581461],[-6.969654,54.579553],[-6.966958,54.597064],[-6.947998,54.607963],[-6.961257,54.612331],[-6.988459,54.651917],[-6.969381,54.663692],[-7.002599,54.671463],[-6.994215,54.705828],[-7.011148,54.717916],[-6.991422,54.740776],[-6.940754,54.752189],[-6.940005,54.773586]]]}',
      metadata: ["Fermanagh and Omagh"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-6.045533,54.605894],[-6.087312,54.624353],[-6.122852,54.617638],[-6.148067,54.620753],[-6.145535,54.611136],[-6.191917,54.600421],[-6.217477,54.602046],[-6.236707,54.587982],[-6.263657,54.59793],[-6.294514,54.59667],[-6.281173,54.580019],[-6.304635,54.572876],[-6.27772,54.557432],[-6.273166,54.519554],[-6.239192,54.495363],[-6.258051,54.47954],[-6.208796,54.445007],[-6.210184,54.432741],[-6.156523,54.444152],[-6.158942,54.434228],[-6.133825,54.435709],[-6.086368,54.410146],[-6.055283,54.403484],[-6.064245,54.387262],[-6.037139,54.384263],[-6.041402,54.378743],[-6.020777,54.377533],[-6.018541,54.370478],[-5.970311,54.384381],[-5.950026,54.379474],[-5.938437,54.383869],[-5.950711,54.403729],[-5.924269,54.423923],[-5.929572,54.430307],[-5.914825,54.433339],[-5.915433,54.449961],[-5.899739,54.454749],[-5.902235,54.462163],[-5.876392,54.467215],[-5.871226,54.47943],[-5.823468,54.495411],[-5.833075,54.501336],[-5.826788,54.525454],[-5.792911,54.545716],[-5.79914,54.560628],[-5.788942,54.571094],[-5.757469,54.581449],[-5.773456,54.593952],[-5.77098,54.613295],[-5.786393,54.619573],[-5.809099,54.615521],[-5.82318,54.581483],[-5.88918,54.561782],[-5.912152,54.566669],[-5.933175,54.540193],[-5.941391,54.543668],[-5.975745,54.530588],[-6.016635,54.550821],[-6.041184,54.546766],[-6.059769,54.555167],[-6.041,54.564092],[-6.045533,54.605894]]]}',
      metadata: ["Lisburn and Castlereagh"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-5.868254,54.688869],[-5.857118,54.693451],[-5.790241,54.720926],[-5.754882,54.721346],[-5.728627,54.735767],[-5.710109,54.74593],[-5.688047,54.766959],[-5.689649,54.803706],[-5.725149,54.848018],[-5.739384,54.852323],[-5.762619,54.859345],[-5.765901,54.852278],[-5.779806,54.858683],[-5.78333,54.851084],[-5.797604,54.852154],[-5.828275,54.874252],[-5.837199,54.880675],[-5.844296,54.900754],[-5.858283,54.898743],[-5.878055,54.90764],[-5.918987,54.961753],[-5.990073,54.984515],[-5.963191,55.044181],[-5.969345,55.04961],[-5.976929,55.056297],[-6.014124,55.035516],[-6.024712,55.036957],[-6.097978,54.983954],[-6.131641,54.9882],[-6.16529,55.030677],[-6.180801,55.034431],[-6.18522,55.026092],[-6.204355,55.029623],[-6.279225,55.004803],[-6.323751,55.010219],[-6.322979,54.979132],[-6.345592,54.988043],[-6.357028,54.975378],[-6.390571,54.981547],[-6.401386,54.966612],[-6.423611,54.972952],[-6.427006,54.964115],[-6.448199,54.964646],[-6.407823,54.940487],[-6.42844,54.936618],[-6.422146,54.916775],[-6.467829,54.924853],[-6.499898,54.91876],[-6.506293,54.908258],[-6.457289,54.824492],[-6.470958,54.812467],[-6.477057,54.780904],[-6.433597,54.789391],[-6.384702,54.779141],[-6.345431,54.80109],[-6.321433,54.790694],[-6.302229,54.796341],[-6.288316,54.789656],[-6.263155,54.790801],[-6.267677,54.798915],[-6.227208,54.788479],[-6.198856,54.798008],[-6.198456,54.806338],[-6.172018,54.811869],[-6.111328,54.807088],[-6.102651,54.792569],[-6.073013,54.791693],[-6.079835,54.796308],[-6.066924,54.797186],[-6.048793,54.791776],[-6.054109,54.798282],[-6.009844,54.800095],[-6.012104,54.788306],[-5.986825,54.77399],[-5.97392,54.783224],[-5.962652,54.773601],[-5.94858,54.780152],[-5.92204,54.772278],[-5.900783,54.780288],[-5.887432,54.772394],[-5.905932,54.765761],[-5.896841,54.758928],[-5.90518,54.750526],[-5.892323,54.745278],[-5.910598,54.71621],[-5.901788,54.708751],[-5.888922,54.710462],[-5.889809,54.69593],[-5.868254,54.688869]]]}',
      metadata: ["Mid and East Antrim"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-6.499898,54.91876],[-6.537601,54.952019],[-6.536834,54.933533],[-6.555153,54.937073],[-6.58503,54.923515],[-6.617489,54.938211],[-6.643457,54.937341],[-6.656948,54.922401],[-6.690286,54.916257],[-6.707488,54.931761],[-6.738122,54.928806],[-6.775805,54.913755],[-6.75755,54.903049],[-6.768239,54.873168],[-6.78495,54.86999],[-6.782373,54.862113],[-6.802558,54.846559],[-6.850915,54.850933],[-6.857274,54.857586],[-6.8866,54.852997],[-6.886983,54.831795],[-6.912064,54.820377],[-6.922424,54.802542],[-6.902901,54.783818],[-6.922093,54.77312],[-6.940005,54.773586],[-6.940754,54.752189],[-6.991422,54.740776],[-7.011148,54.717916],[-6.994215,54.705828],[-7.002599,54.671463],[-6.969381,54.663692],[-6.988459,54.651917],[-6.961257,54.612331],[-6.947998,54.607963],[-6.966958,54.597064],[-6.969654,54.579553],[-6.988582,54.581461],[-6.969474,54.569639],[-6.985668,54.557163],[-6.974513,54.543674],[-7.008796,54.524585],[-7.029091,54.525813],[-7.039467,54.505541],[-7.07292,54.502762],[-7.072152,54.507909],[-7.099371,54.500322],[-7.108075,54.485927],[-7.123863,54.48475],[-7.121162,54.475446],[-7.1352,54.481369],[-7.160152,54.472504],[-7.202865,54.477885],[-7.198614,54.46625],[-7.216427,54.467302],[-7.235788,54.454496],[-7.252941,54.450997],[-7.27256,54.460376],[-7.270575,54.453688],[-7.294821,54.443553],[-7.334695,54.44487],[-7.367021,54.437511],[-7.362245,54.419637],[-7.331448,54.404711],[-7.334429,54.371683],[-7.280524,54.371575],[-7.271949,54.344101],[-7.246193,54.326972],[-7.227118,54.326976],[-7.200963,54.341774],[-7.18883,54.337649],[-7.15272,54.335226],[-7.103501,54.355902],[-7.109705,54.368316],[-7.072399,54.388351],[-7.057316,54.411024],[-7.029073,54.421326],[-6.995823,54.40537],[-6.978795,54.40859],[-6.959649,54.392248],[-6.92975,54.384442],[-6.923752,54.382875],[-6.929194,54.379818],[-6.932718,54.377837],[-6.928889,54.377279],[-6.911188,54.374701],[-6.906371,54.35043],[-6.876042,54.346572],[-6.863924,54.330091],[-6.837032,54.335592],[-6.804662,54.379618],[-6.807526,54.398973],[-6.793727,54.415039],[-6.760959,54.406971],[-6.734995,54.409157],[-6.728148,54.401653],[-6.710108,54.4039],[-6.697082,54.442243],[-6.649806,54.470024],[-6.650689,54.48671],[-6.629453,54.503818],[-6.591779,54.503437],[-6.541269,54.542103],[-6.425998,54.568223],[-6.407098,54.648826],[-6.469192,54.685245],[-6.495926,54.713665],[-6.457201,54.761829],[-6.477787,54.772764],[-6.477057,54.780904],[-6.470958,54.812467],[-6.457289,54.824492],[-6.506293,54.908258],[-6.499898,54.91876]]]}',
      metadata: ["Mid Ulster"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-5.515972,54.324339],[-5.548385,54.373759],[-5.584473,54.391681],[-5.595484,54.406893],[-5.583747,54.449515],[-5.628218,54.464988],[-5.63848,54.457501],[-5.667357,54.460962],[-5.701745,54.446381],[-5.722859,54.447714],[-5.735969,54.46389],[-5.79108,54.463619],[-5.823468,54.495411],[-5.871226,54.47943],[-5.876392,54.467215],[-5.902235,54.462163],[-5.899739,54.454749],[-5.915433,54.449961],[-5.914825,54.433339],[-5.929572,54.430307],[-5.924269,54.423923],[-5.950711,54.403729],[-5.938437,54.383869],[-5.950026,54.379474],[-5.970311,54.384381],[-6.018541,54.370478],[-6.063585,54.326923],[-6.098418,54.326563],[-6.104398,54.318483],[-6.059872,54.291399],[-6.058857,54.280897],[-6.072353,54.279569],[-6.062637,54.271449],[-6.075679,54.26348],[-6.038844,54.263136],[-6.050378,54.243928],[-6.070112,54.254401],[-6.106863,54.240107],[-6.13657,54.243128],[-6.160282,54.21891],[-6.188932,54.23754],[-6.181422,54.244182],[-6.212344,54.258615],[-6.241494,54.263727],[-6.254006,54.257788],[-6.279123,54.271762],[-6.288497,54.265044],[-6.33105,54.263174],[-6.351443,54.274001],[-6.368444,54.265308],[-6.401668,54.273035],[-6.439095,54.267483],[-6.457873,54.252108],[-6.46678,54.25498],[-6.504102,54.225686],[-6.525002,54.237227],[-6.571991,54.224204],[-6.585206,54.213543],[-6.599912,54.218947],[-6.644055,54.179754],[-6.62975,54.153305],[-6.646028,54.125862],[-6.648547,54.121612],[-6.661223,54.122665],[-6.645073,54.095949],[-6.658884,54.096133],[-6.658166,54.076203],[-6.668979,54.072807],[-6.623838,54.036487],[-6.594943,54.044596],[-6.586614,54.057553],[-6.584926,54.057066],[-6.557942,54.04928],[-6.531967,54.059652],[-6.510528,54.052671],[-6.471271,54.066295],[-6.477758,54.07711],[-6.456039,54.072544],[-6.443526,54.056465],[-6.411995,54.063075],[-6.39127,54.058836],[-6.363526,54.072606],[-6.36639,54.113643],[-6.339947,54.111908],[-6.336355,54.094722],[-6.318012,54.090962],[-6.309022,54.106709],[-6.290882,54.112675],[-6.284525,54.109857],[-6.254086,54.096354],[-6.198099,54.09817],[-6.183194,54.073649],[-6.159387,54.064957],[-6.094949,54.062642],[-6.073075,54.045904],[-6.098509,54.048565],[-6.107571,54.040174],[-6.062722,54.022736],[-6.0137,54.041891],[-5.988164,54.057598],[-5.996155,54.061295],[-5.97377,54.062262],[-5.963046,54.062724],[-5.951946,54.077794],[-5.896926,54.104704],[-5.877577,54.153113],[-5.871776,54.167604],[-5.892866,54.205426],[-5.829727,54.241945],[-5.833319,54.251251],[-5.85009,54.25332],[-5.814383,54.28648],[-5.815861,54.259147],[-5.833832,54.256662],[-5.821572,54.242857],[-5.692754,54.251312],[-5.684515,54.248829],[-5.677099,54.246593],[-5.660181,54.225615],[-5.636356,54.24227],[-5.639806,54.262989],[-5.634379,54.252431],[-5.624024,54.255783],[-5.618174,54.246173],[-5.608763,54.248714],[-5.607972,54.265421],[-5.590577,54.263792],[-5.56032,54.286483],[-5.550541,54.306351],[-5.525783,54.310349],[-5.531631,54.315804],[-5.515972,54.324339]]]}',
      metadata: ["Newry, Mourne and Down"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Northern Ireland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-5.521307,54.676398],[-5.533994,54.681732],[-5.545419,54.672867],[-5.524516,54.668961],[-5.521307,54.676398]]],[[[-5.515972,54.324339],[-5.496764,54.333282],[-5.497642,54.344636],[-5.498172,54.351488],[-5.481276,54.356677],[-5.493026,54.365308],[-5.489691,54.376394],[-5.460185,54.386351],[-5.464238,54.414606],[-5.480046,54.428436],[-5.435623,54.45711],[-5.442005,54.47562],[-5.432784,54.487327],[-5.463565,54.498443],[-5.475857,54.525134],[-5.485765,54.546621],[-5.477249,54.564054],[-5.521615,54.597617],[-5.534073,54.622445],[-5.530189,54.644975],[-5.583902,54.677676],[-5.632571,54.679638],[-5.639121,54.667205],[-5.656013,54.670974],[-5.672531,54.662972],[-5.680015,54.668845],[-5.720663,54.667029],[-5.722403,54.667935],[-5.741014,54.677623],[-5.805398,54.659049],[-5.855103,54.633676],[-5.858505,54.62356],[-5.829268,54.616752],[-5.83073,54.610583],[-5.809099,54.615521],[-5.786393,54.619573],[-5.77098,54.613295],[-5.773456,54.593952],[-5.757469,54.581449],[-5.788942,54.571094],[-5.79914,54.560628],[-5.792911,54.545716],[-5.826788,54.525454],[-5.833075,54.501336],[-5.823468,54.495411],[-5.79108,54.463619],[-5.735969,54.46389],[-5.722859,54.447714],[-5.701745,54.446381],[-5.667357,54.460962],[-5.63848,54.457501],[-5.628218,54.464988],[-5.583747,54.449515],[-5.595484,54.406893],[-5.584473,54.391681],[-5.548385,54.373759],[-5.515972,54.324339]]]]}',
      metadata: ["Ards and North Down"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.628347,56.13277],[-3.644786,56.137619],[-3.636661,56.151289],[-3.647857,56.159677],[-3.593132,56.173076],[-3.597977,56.181091],[-3.58234,56.184422],[-3.57515,56.196087],[-3.618151,56.20561],[-3.638063,56.196854],[-3.651068,56.202971],[-3.666936,56.188628],[-3.686454,56.195853],[-3.73682,56.18905],[-3.752188,56.211908],[-3.780879,56.217227],[-3.82945,56.196549],[-3.858173,56.164523],[-3.854257,56.152887],[-3.877869,56.14996],[-3.857495,56.135313],[-3.885083,56.129096],[-3.864674,56.11891],[-3.869768,56.107724],[-3.848311,56.119616],[-3.834397,56.115826],[-3.838357,56.103719],[-3.821546,56.100719],[-3.797692,56.10741],[-3.79342,56.104572],[-3.797241,56.108955],[-3.775801,56.09379],[-3.766324,56.099022],[-3.775995,56.092991],[-3.774085,56.091721],[-3.739414,56.077113],[-3.714622,56.104487],[-3.674474,56.100232],[-3.672583,56.107799],[-3.628787,56.110441],[-3.663939,56.123046],[-3.628347,56.13277]]]}',
      metadata: ["Clackmannanshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.060342,54.984518],[-3.061933,54.984667],[-3.06335,54.983491],[-3.060342,54.984518]]],[[[-3.986226,55.464052],[-4.017109,55.447113],[-4.002482,55.436627],[-4.090845,55.412066],[-4.107486,55.369043],[-4.08573,55.351261],[-4.119136,55.322271],[-4.113589,55.302311],[-4.139331,55.284592],[-4.171635,55.294349],[-4.202858,55.318234],[-4.239515,55.321435],[-4.257669,55.305286],[-4.301266,55.31045],[-4.31292,55.291516],[-4.360151,55.257988],[-4.377383,55.201456],[-4.39219,55.202467],[-4.409267,55.179228],[-4.409567,55.151551],[-4.439174,55.137883],[-4.442689,55.168438],[-4.461847,55.17022],[-4.478621,55.152926],[-4.564967,55.158015],[-4.584001,55.141977],[-4.623171,55.140784],[-4.658316,55.119936],[-4.662032,55.08975],[-4.625223,55.068449],[-4.634784,55.051024],[-4.645815,55.048771],[-4.64674,55.056382],[-4.715172,55.037511],[-4.741457,55.047309],[-4.761074,55.037975],[-4.775992,55.041838],[-4.789167,55.031054],[-4.802353,55.044393],[-4.830605,55.034641],[-4.841056,55.044745],[-4.884551,55.038903],[-4.89473,55.060862],[-4.923046,55.066208],[-4.933399,55.064372],[-4.930781,55.051382],[-4.960559,55.021501],[-4.97806,55.022121],[-4.973231,55.011537],[-5.039724,54.997749],[-4.995922,54.936217],[-4.996165,54.932199],[-4.992129,54.926184],[-4.996764,54.922315],[-4.99737,54.912325],[-5.030282,54.906248],[-5.061584,54.924477],[-5.063884,54.931127],[-5.070518,54.936033],[-5.072663,54.956497],[-5.075099,54.963528],[-5.061332,54.967834],[-5.100019,55.018319],[-5.12923,55.009604],[-5.137922,55.007008],[-5.157088,55.008611],[-5.173005,54.995395],[-5.178592,54.986731],[-5.18049,54.969368],[-5.177733,54.966943],[-5.185075,54.915244],[-5.16901,54.893344],[-5.138244,54.85133],[-5.122791,54.843691],[-5.116113,54.840431],[-5.053623,54.809878],[-5.042356,54.792202],[-5.01061,54.783375],[-5.004308,54.755205],[-5.000595,54.754012],[-4.986745,54.749945],[-4.992518,54.735094],[-4.992548,54.734997],[-4.957359,54.72854],[-4.965999,54.718668],[-4.966934,54.7176],[-4.947786,54.700501],[-4.972182,54.689929],[-4.97258,54.689754],[-4.964838,54.664048],[-4.922477,54.643432],[-4.874851,54.633257],[-4.852787,54.637214],[-4.853458,54.637284],[-4.877181,54.639152],[-4.883733,54.653554],[-4.86676,54.681928],[-4.90568,54.701061],[-4.910983,54.720003],[-4.917478,54.743176],[-4.961108,54.804062],[-4.936082,54.832637],[-4.850862,54.858375],[-4.858157,54.868323],[-4.866177,54.867204],[-4.874059,54.864765],[-4.877341,54.865645],[-4.88553,54.8645],[-4.878658,54.869908],[-4.875123,54.865955],[-4.863601,54.868001],[-4.856083,54.870326],[-4.83381,54.863397],[-4.817846,54.866991],[-4.805607,54.855347],[-4.784975,54.835702],[-4.777247,54.831947],[-4.708656,54.823888],[-4.671173,54.799765],[-4.600707,54.776916],[-4.571695,54.738199],[-4.545105,54.733203],[-4.544347,54.728257],[-4.543684,54.723932],[-4.54315,54.723114],[-4.534655,54.719771],[-4.527904,54.720416],[-4.510602,54.710299],[-4.484431,54.699983],[-4.484078,54.699844],[-4.392966,54.677361],[-4.34971,54.708653],[-4.367061,54.722599],[-4.364646,54.731357],[-4.364989,54.741038],[-4.360509,54.768821],[-4.371092,54.772047],[-4.360165,54.777602],[-4.369407,54.792902],[-4.346644,54.790597],[-4.341251,54.799054],[-4.354517,54.813372],[-4.414075,54.82804],[-4.422266,54.86395],[-4.421204,54.871868],[-4.431963,54.875813],[-4.428316,54.884061],[-4.396264,54.89378],[-4.404677,54.898809],[-4.400391,54.910971],[-4.399152,54.914485],[-4.399088,54.919587],[-4.396899,54.91104],[-4.393818,54.899003],[-4.381726,54.900618],[-4.391688,54.898281],[-4.383342,54.877715],[-4.362675,54.863201],[-4.307001,54.844707],[-4.272796,54.839188],[-4.257415,54.837326],[-4.226855,54.865443],[-4.202775,54.867822],[-4.223266,54.848977],[-4.224729,54.839662],[-4.212508,54.836897],[-4.219579,54.825374],[-4.213512,54.818486],[-4.213016,54.818574],[-4.213152,54.818077],[-4.209213,54.813604],[-4.180485,54.808599],[-4.17984,54.799868],[-4.16077,54.781006],[-4.15966,54.780345],[-4.138809,54.775914],[-4.121515,54.787865],[-4.123838,54.780484],[-4.120611,54.777698],[-4.111494,54.777492],[-4.106433,54.767881],[-4.094346,54.765819],[-4.090035,54.773658],[-4.089981,54.773859],[-4.106192,54.778436],[-4.089893,54.781885],[-4.091316,54.814384],[-4.066392,54.831738],[-4.063923,54.833456],[-4.072058,54.81767],[-4.067803,54.813816],[-4.055138,54.825552],[-4.045625,54.815452],[-4.063865,54.783771],[-4.052372,54.774121],[-4.044739,54.769873],[-4.006016,54.774567],[-3.984831,54.768523],[-3.868621,54.808522],[-3.831406,54.821292],[-3.827692,54.825472],[-3.863743,54.845917],[-3.85309,54.850859],[-3.835308,54.845975],[-3.861087,54.864568],[-3.842898,54.867649],[-3.822951,54.846971],[-3.807111,54.845601],[-3.826181,54.861481],[-3.819935,54.886733],[-3.812725,54.872347],[-3.787937,54.853119],[-3.764807,54.856485],[-3.759906,54.85801],[-3.727583,54.880123],[-3.675464,54.893759],[-3.698588,54.880407],[-3.595222,54.872858],[-3.596089,54.882968],[-3.562974,54.907324],[-3.572477,54.923707],[-3.583128,54.924367],[-3.589515,54.924763],[-3.583988,54.97466],[-3.606392,54.974427],[-3.576175,54.980657],[-3.591069,54.998364],[-3.580814,55.01401],[-3.564297,54.986569],[-3.560359,54.98002],[-3.52267,54.965386],[-3.47599,54.966804],[-3.437288,54.989041],[-3.431573,54.994204],[-3.408468,54.974409],[-3.37034,54.97067],[-3.339235,54.974063],[-3.329159,54.978737],[-3.33707,54.980759],[-3.269163,54.965508],[-3.268333,54.969997],[-3.251291,54.972499],[-3.246862,54.973149],[-3.241019,54.968034],[-3.204711,54.978354],[-3.149569,54.963838],[-3.108445,54.978673],[-3.091241,54.9754],[-3.075209,54.980621],[-3.082741,54.987316],[-3.074792,54.981329],[-3.057973,54.990767],[-3.057646,54.991813],[-3.053452,54.992805],[-3.053065,54.992096],[-3.025875,55.036459],[-3.05342,55.047284],[-3.050929,55.052804],[-2.958594,55.049295],[-2.936407,55.059586],[-2.940429,55.069128],[-2.896879,55.07795],[-2.886292,55.09481],[-2.85854,55.108349],[-2.865117,55.135326],[-2.896916,55.146683],[-2.904752,55.173669],[-2.888187,55.207866],[-2.861916,55.223286],[-2.863842,55.236352],[-2.921445,55.236722],[-2.905013,55.257184],[-2.884926,55.262692],[-2.898488,55.283503],[-2.917059,55.277412],[-2.962084,55.290266],[-2.995929,55.269088],[-3.010169,55.267435],[-3.019934,55.279142],[-3.042956,55.271532],[-3.054655,55.280725],[-3.046641,55.295515],[-3.099085,55.331682],[-3.102026,55.351587],[-3.109733,55.34803],[-3.127239,55.359741],[-3.174503,55.346792],[-3.179254,55.360468],[-3.21739,55.376134],[-3.303664,55.342363],[-3.32026,55.349352],[-3.315484,55.366596],[-3.303833,55.368888],[-3.311673,55.379634],[-3.302763,55.39377],[-3.243587,55.427685],[-3.279607,55.435253],[-3.293445,55.430916],[-3.310982,55.444828],[-3.331627,55.441056],[-3.354322,55.412517],[-3.362326,55.416994],[-3.401402,55.408055],[-3.42049,55.415995],[-3.472128,55.403756],[-3.507378,55.412265],[-3.531399,55.396436],[-3.549831,55.398985],[-3.558168,55.388113],[-3.578494,55.384963],[-3.572692,55.355103],[-3.588269,55.346175],[-3.573965,55.328361],[-3.607028,55.325827],[-3.621552,55.316542],[-3.618656,55.295745],[-3.663613,55.291751],[-3.678364,55.308948],[-3.711157,55.323159],[-3.72018,55.350245],[-3.711044,55.363242],[-3.75366,55.374941],[-3.764594,55.401102],[-3.816403,55.427269],[-3.825499,55.444416],[-3.895436,55.459758],[-3.924348,55.456328],[-3.950982,55.462592],[-3.96979,55.454364],[-3.986226,55.464052]]]]}',
      metadata: ["Dumfries and Galloway"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.246893,55.679049],[-4.324937,55.688275],[-4.333401,55.700274],[-4.353194,55.697416],[-4.384494,55.72298],[-4.400625,55.713598],[-4.43902,55.735044],[-4.468564,55.732518],[-4.458382,55.750861],[-4.485784,55.74968],[-4.493439,55.76258],[-4.507079,55.763086],[-4.529908,55.744573],[-4.579224,55.712286],[-4.610712,55.676542],[-4.638333,55.672506],[-4.596756,55.655077],[-4.603784,55.647342],[-4.593639,55.644154],[-4.571918,55.6484],[-4.546486,55.667007],[-4.530808,55.659471],[-4.492621,55.665068],[-4.496192,55.656491],[-4.557235,55.646714],[-4.569555,55.632628],[-4.558743,55.625219],[-4.588444,55.618219],[-4.579338,55.603656],[-4.592211,55.59795],[-4.568254,55.60187],[-4.568522,55.59287],[-4.53607,55.591692],[-4.538708,55.5751],[-4.516946,55.571385],[-4.518224,55.565377],[-4.454533,55.562045],[-4.437146,55.56788],[-4.436227,55.560928],[-4.40949,55.553286],[-4.399138,55.510806],[-4.418661,55.506628],[-4.416087,55.500801],[-4.439578,55.504384],[-4.440454,55.493825],[-4.458965,55.483591],[-4.471938,55.485916],[-4.493494,55.470145],[-4.493455,55.45734],[-4.481127,55.457893],[-4.474854,55.448305],[-4.493324,55.438444],[-4.471303,55.428977],[-4.454366,55.430842],[-4.450435,55.411943],[-4.501896,55.399122],[-4.527771,55.409132],[-4.535108,55.423849],[-4.565082,55.426308],[-4.571178,55.404393],[-4.603462,55.39496],[-4.587473,55.396838],[-4.563389,55.386417],[-4.544931,55.395957],[-4.52817,55.39182],[-4.519811,55.383574],[-4.564604,55.357486],[-4.528793,55.349715],[-4.495607,55.324073],[-4.474129,55.325177],[-4.465939,55.315288],[-4.43796,55.307796],[-4.458627,55.285244],[-4.429105,55.254024],[-4.4502,55.237396],[-4.451828,55.211278],[-4.476596,55.199146],[-4.461847,55.17022],[-4.442689,55.168438],[-4.439174,55.137883],[-4.409567,55.151551],[-4.409267,55.179228],[-4.39219,55.202467],[-4.377383,55.201456],[-4.360151,55.257988],[-4.31292,55.291516],[-4.301266,55.31045],[-4.257669,55.305286],[-4.239515,55.321435],[-4.202858,55.318234],[-4.171635,55.294349],[-4.139331,55.284592],[-4.113589,55.302311],[-4.119136,55.322271],[-4.08573,55.351261],[-4.107486,55.369043],[-4.090845,55.412066],[-4.002482,55.436627],[-4.017109,55.447113],[-3.986226,55.464052],[-4.016824,55.472961],[-4.011616,55.482852],[-4.025688,55.492452],[-3.958704,55.540788],[-3.957046,55.555751],[-3.972409,55.556458],[-3.976393,55.564656],[-3.997,55.563536],[-4.039576,55.592371],[-4.081566,55.567579],[-4.126309,55.565674],[-4.147716,55.572733],[-4.224663,55.550486],[-4.228178,55.560066],[-4.242639,55.562135],[-4.202473,55.583045],[-4.194674,55.600718],[-4.174991,55.604837],[-4.205279,55.614859],[-4.201905,55.626929],[-4.221601,55.635095],[-4.21696,55.647196],[-4.246893,55.679049]]]}',
      metadata: ["East Ayrshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.365378,55.945364],[-2.366746,55.945956],[-2.393472,55.956478],[-2.399722,55.966763],[-2.408102,55.97139],[-2.419475,55.97057],[-2.445256,55.987912],[-2.45502,55.989692],[-2.463078,55.989207],[-2.472951,55.992958],[-2.507851,55.999305],[-2.512122,56.006448],[-2.542296,56.005171],[-2.553108,55.996402],[-2.573868,56.011587],[-2.575025,56.012433],[-2.575385,56.01158],[-2.581088,55.998023],[-2.598799,55.997688],[-2.604151,56.005697],[-2.607411,56.006105],[-2.623901,55.996849],[-2.61236,56.006725],[-2.605238,56.007324],[-2.595587,56.004624],[-2.592894,56.011497],[-2.591622,56.014741],[-2.587973,56.011521],[-2.582938,56.007077],[-2.5866,56.011527],[-2.59078,56.016605],[-2.584298,56.021392],[-2.595694,56.027474],[-2.613919,56.033038],[-2.620432,56.047975],[-2.63756,56.053803],[-2.660644,56.059317],[-2.757124,56.058896],[-2.78648,56.065676],[-2.815881,56.062359],[-2.838357,56.041233],[-2.854559,56.039095],[-2.865782,56.036406],[-2.864106,56.023125],[-2.842294,56.015043],[-2.890755,56.010226],[-2.890594,56.009708],[-2.886053,55.995133],[-2.91529,55.975237],[-2.962886,55.971024],[-2.964021,55.970923],[-3.001621,55.956661],[-3.010091,55.95285],[-3.011559,55.952888],[-3.01207,55.952694],[-3.013998,55.95295],[-3.042949,55.953688],[-3.052697,55.942924],[-3.049569,55.94909],[-3.076991,55.946849],[-3.088577,55.931385],[-3.077844,55.919366],[-3.017745,55.901634],[-2.988806,55.912828],[-2.966911,55.91185],[-2.937159,55.863491],[-2.913542,55.856568],[-2.894506,55.859323],[-2.899043,55.850752],[-2.862187,55.839857],[-2.846244,55.818961],[-2.777198,55.8443],[-2.739921,55.828186],[-2.669264,55.846549],[-2.643235,55.840928],[-2.648423,55.833641],[-2.594178,55.828672],[-2.581339,55.845486],[-2.554882,55.839089],[-2.53451,55.860931],[-2.533464,55.871274],[-2.570021,55.892144],[-2.554529,55.900076],[-2.562716,55.906634],[-2.554404,55.911523],[-2.504723,55.91193],[-2.466839,55.884366],[-2.365378,55.945364]]]}',
      metadata: ["East Lothian"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.250741,55.784886],[-4.268246,55.79164],[-4.260682,55.811014],[-4.292625,55.813936],[-4.326238,55.808445],[-4.333448,55.792874],[-4.372059,55.794765],[-4.367453,55.8177],[-4.381414,55.823148],[-4.400557,55.810945],[-4.465805,55.804726],[-4.472714,55.797793],[-4.495143,55.801445],[-4.495768,55.790733],[-4.521959,55.774416],[-4.541934,55.778526],[-4.550936,55.766382],[-4.529908,55.744573],[-4.507079,55.763086],[-4.493439,55.76258],[-4.485784,55.74968],[-4.458382,55.750861],[-4.468564,55.732518],[-4.43902,55.735044],[-4.400625,55.713598],[-4.384494,55.72298],[-4.353194,55.697416],[-4.333401,55.700274],[-4.324937,55.688275],[-4.246893,55.679049],[-4.221602,55.691532],[-4.223122,55.727554],[-4.275049,55.754337],[-4.282559,55.768304],[-4.253398,55.772677],[-4.250741,55.784886]]]}',
      metadata: ["East Renfrewshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-7.611964,56.783998],[-7.616425,56.784796],[-7.643063,56.789557],[-7.660769,56.785337],[-7.653432,56.783119],[-7.637009,56.778153],[-7.611964,56.783998]]],[[[-7.622119,56.802549],[-7.623251,56.81977],[-7.624062,56.829313],[-7.659112,56.822123],[-7.648224,56.812641],[-7.648488,56.812453],[-7.666346,56.799711],[-7.641624,56.796391],[-7.622119,56.802549]]],[[[-7.561349,56.854039],[-7.576389,56.860817],[-7.577176,56.86101],[-7.581062,56.860679],[-7.593465,56.859622],[-7.598136,56.84935],[-7.579182,56.848089],[-7.568688,56.84739],[-7.561349,56.854039]]],[[[-7.49902,56.884012],[-7.49753,56.896419],[-7.498489,56.89761],[-7.524627,56.901965],[-7.526857,56.902256],[-7.539268,56.898335],[-7.537767,56.896051],[-7.526617,56.8872],[-7.506819,56.882622],[-7.49902,56.884012]]],[[[-7.441776,56.919012],[-7.440581,56.92221],[-7.443212,56.921787],[-7.451207,56.920074],[-7.445491,56.911901],[-7.441776,56.919012]]],[[[-7.346834,56.994845],[-7.350247,56.999266],[-7.350619,56.999478],[-7.350678,56.999439],[-7.357716,56.994056],[-7.346834,56.994845]]],[[[-7.365752,57.000387],[-7.367982,57.000481],[-7.377116,57.000223],[-7.361805,56.991887],[-7.365752,57.000387]]],[[[-7.350169,57.018745],[-7.360369,57.013403],[-7.362201,57.012222],[-7.329923,57.006166],[-7.330071,57.013517],[-7.331312,57.013879],[-7.336268,57.010498],[-7.350169,57.018745]]],[[[-7.324608,57.025912],[-7.335529,57.023109],[-7.344127,57.020691],[-7.334483,57.017508],[-7.324194,57.015643],[-7.324608,57.025912]]],[[[-7.533014,56.946223],[-7.567859,56.947711],[-7.565376,56.944812],[-7.561249,56.942443],[-7.573056,56.933644],[-7.557904,56.930318],[-7.54657,56.928471],[-7.546553,56.927825],[-7.541856,56.926793],[-7.545307,56.920712],[-7.559592,56.92189],[-7.561606,56.921929],[-7.549221,56.909205],[-7.503931,56.916881],[-7.503845,56.917264],[-7.503352,56.921672],[-7.534309,56.921663],[-7.517698,56.933792],[-7.515129,56.93352],[-7.49862,56.932393],[-7.542411,56.939426],[-7.532722,56.946128],[-7.531265,56.947428],[-7.517091,56.946926],[-7.503914,56.946473],[-7.505171,56.958037],[-7.504604,56.956958],[-7.504686,56.957733],[-7.501599,56.951232],[-7.501296,56.950656],[-7.481783,56.954111],[-7.482014,56.952005],[-7.482146,56.946222],[-7.436022,56.948636],[-7.442473,56.961369],[-7.440219,56.961347],[-7.440597,56.962456],[-7.433517,56.961283],[-7.427069,56.96122],[-7.42355,56.973347],[-7.422858,56.975731],[-7.422844,56.975803],[-7.42283,56.975827],[-7.422593,56.975856],[-7.407087,56.979535],[-7.406883,56.988213],[-7.421077,56.991629],[-7.421967,56.991843],[-7.410238,56.993863],[-7.405377,56.98751],[-7.378501,56.980336],[-7.379005,56.990089],[-7.401487,57.000048],[-7.410715,56.995044],[-7.430298,57.001872],[-7.407761,57.003404],[-7.428593,57.012135],[-7.428027,57.011988],[-7.42919,57.012445],[-7.425129,57.011237],[-7.407961,57.006782],[-7.445953,57.019764],[-7.419619,57.041822],[-7.450242,57.057597],[-7.454217,57.045677],[-7.456969,57.024137],[-7.461982,57.022379],[-7.462293,57.021444],[-7.465965,57.020982],[-7.4846,57.014442],[-7.528588,57.013082],[-7.528713,57.013066],[-7.501332,57.003551],[-7.515197,56.998336],[-7.511222,56.989148],[-7.514371,56.988624],[-7.514097,56.988121],[-7.51811,56.988002],[-7.526125,56.986668],[-7.524566,56.985772],[-7.513038,56.980847],[-7.514059,56.979732],[-7.51392,56.979652],[-7.514183,56.979597],[-7.519372,56.973923],[-7.554677,56.96839],[-7.558206,56.963462],[-7.561608,56.955976],[-7.531902,56.947281],[-7.537738,56.947616],[-7.533014,56.946223]]],[[[-7.371349,57.052046],[-7.389432,57.062183],[-7.389902,57.061929],[-7.400911,57.049974],[-7.398425,57.044962],[-7.3953,57.042901],[-7.371349,57.052046]]],[[[-7.43533,57.065227],[-7.436129,57.065658],[-7.442674,57.06847],[-7.446357,57.066352],[-7.45051,57.063524],[-7.43533,57.065227]]],[[[-7.310095,57.089483],[-7.308397,57.08999],[-7.311822,57.089904],[-7.309912,57.061273],[-7.292273,57.052518],[-7.291279,57.053152],[-7.280702,57.060171],[-7.277789,57.062104],[-7.281087,57.062874],[-7.291546,57.065315],[-7.299088,57.067015],[-7.298812,57.06701],[-7.299379,57.067143],[-7.281773,57.067686],[-7.277792,57.067809],[-7.268674,57.090923],[-7.301424,57.086979],[-7.310095,57.089483]]],[[[-7.189845,57.410047],[-7.189858,57.410685],[-7.217663,57.405144],[-7.233122,57.392263],[-7.233708,57.391492],[-7.231532,57.390938],[-7.219341,57.388883],[-7.21636,57.389548],[-7.21891,57.39021],[-7.202986,57.392534],[-7.189536,57.395535],[-7.189703,57.40341],[-7.197025,57.401623],[-7.189845,57.410047]]],[[[-7.325809,57.405601],[-7.329566,57.399481],[-7.3297,57.399262],[-7.340866,57.402557],[-7.384767,57.392313],[-7.378049,57.395255],[-7.391974,57.39832],[-7.404154,57.39499],[-7.412357,57.387181],[-7.428675,57.38828],[-7.429521,57.388049],[-7.403674,57.357947],[-7.402842,57.347341],[-7.402429,57.346765],[-7.402093,57.33777],[-7.401818,57.334269],[-7.39973,57.307575],[-7.388423,57.297642],[-7.396833,57.301684],[-7.420508,57.288581],[-7.422198,57.280324],[-7.420901,57.279864],[-7.422449,57.279097],[-7.428995,57.247091],[-7.458188,57.24092],[-7.435452,57.236408],[-7.42331,57.216571],[-7.416257,57.172175],[-7.408956,57.160405],[-7.413556,57.155143],[-7.41334,57.153781],[-7.412636,57.149339],[-7.406949,57.139265],[-7.404683,57.13763],[-7.405658,57.136977],[-7.400431,57.127712],[-7.399818,57.127617],[-7.399623,57.12628],[-7.392408,57.113481],[-7.373519,57.103875],[-7.320567,57.105218],[-7.31756,57.098879],[-7.301474,57.11091],[-7.287527,57.108021],[-7.283545,57.107196],[-7.279704,57.108136],[-7.233646,57.096842],[-7.229286,57.095936],[-7.233928,57.1041],[-7.218722,57.110597],[-7.230023,57.111687],[-7.215496,57.110608],[-7.211856,57.117448],[-7.232658,57.126405],[-7.234404,57.125228],[-7.240863,57.119561],[-7.241185,57.120658],[-7.243924,57.118811],[-7.246306,57.135781],[-7.255805,57.137695],[-7.284901,57.142586],[-7.292324,57.141565],[-7.333452,57.1359],[-7.334375,57.136623],[-7.334838,57.136557],[-7.334605,57.136803],[-7.356023,57.153577],[-7.355777,57.153647],[-7.355948,57.153695],[-7.355687,57.153672],[-7.344859,57.156725],[-7.330857,57.16067],[-7.327448,57.157467],[-7.321076,57.151478],[-7.293247,57.147651],[-7.290443,57.14729],[-7.29057,57.147359],[-7.308517,57.151012],[-7.308569,57.157194],[-7.310396,57.158192],[-7.321211,57.164097],[-7.308586,57.159232],[-7.308593,57.16005],[-7.273523,57.150923],[-7.26462,57.151899],[-7.244642,57.163647],[-7.244604,57.16368],[-7.244782,57.164267],[-7.264804,57.192038],[-7.266986,57.193336],[-7.263444,57.202074],[-7.26184,57.207326],[-7.267588,57.21084],[-7.299803,57.215353],[-7.29994,57.215583],[-7.300749,57.215583],[-7.30372,57.220958],[-7.308576,57.229739],[-7.309184,57.229644],[-7.320093,57.224321],[-7.318428,57.223274],[-7.349535,57.225381],[-7.355454,57.23436],[-7.363566,57.243714],[-7.358905,57.239592],[-7.363005,57.245808],[-7.348037,57.237302],[-7.348625,57.242894],[-7.345801,57.240161],[-7.34526,57.243277],[-7.335433,57.230583],[-7.334061,57.230719],[-7.307264,57.23657],[-7.306294,57.238826],[-7.305977,57.239561],[-7.302347,57.237643],[-7.302266,57.23766],[-7.301809,57.237358],[-7.283176,57.227506],[-7.291354,57.230454],[-7.287489,57.2279],[-7.298241,57.232936],[-7.300966,57.233917],[-7.301432,57.232965],[-7.30281,57.225635],[-7.27758,57.224469],[-7.267594,57.224145],[-7.266866,57.224862],[-7.242699,57.248815],[-7.252145,57.259259],[-7.253012,57.26021],[-7.253145,57.260364],[-7.227131,57.282211],[-7.209489,57.281234],[-7.203266,57.280917],[-7.201631,57.283383],[-7.192101,57.298583],[-7.198693,57.306352],[-7.220519,57.300766],[-7.228045,57.323882],[-7.236628,57.323844],[-7.271861,57.323042],[-7.294697,57.337141],[-7.293417,57.336768],[-7.294016,57.337109],[-7.275743,57.331618],[-7.263745,57.328119],[-7.263971,57.329394],[-7.265003,57.332937],[-7.230841,57.335665],[-7.236273,57.341022],[-7.227549,57.339859],[-7.220808,57.348871],[-7.220748,57.348989],[-7.233938,57.34174],[-7.254203,57.343399],[-7.261021,57.341801],[-7.264602,57.344249],[-7.270093,57.344697],[-7.273605,57.350063],[-7.270268,57.34978],[-7.241866,57.349906],[-7.241044,57.352655],[-7.246126,57.355348],[-7.275758,57.367521],[-7.293656,57.370728],[-7.310956,57.372209],[-7.287227,57.379874],[-7.277323,57.377686],[-7.283887,57.37318],[-7.26717,57.373817],[-7.267892,57.375206],[-7.278232,57.381383],[-7.288047,57.384132],[-7.319143,57.382589],[-7.318329,57.392159],[-7.328656,57.393235],[-7.332167,57.3936],[-7.329454,57.39871],[-7.325809,57.405601]]],[[[-7.219962,57.411983],[-7.2212,57.413559],[-7.223999,57.413579],[-7.232693,57.411381],[-7.23194,57.411243],[-7.219962,57.411983]]],[[[-7.336592,57.480088],[-7.329947,57.48441],[-7.341916,57.484054],[-7.347601,57.483884],[-7.350193,57.494039],[-7.364227,57.492598],[-7.367905,57.491898],[-7.378994,57.474674],[-7.410022,57.470327],[-7.406368,57.460646],[-7.40231,57.459691],[-7.404976,57.456954],[-7.397126,57.436131],[-7.393911,57.433451],[-7.395581,57.432031],[-7.392599,57.424112],[-7.376795,57.422141],[-7.344367,57.421446],[-7.331723,57.41428],[-7.304433,57.398799],[-7.309902,57.405683],[-7.291639,57.409814],[-7.26292,57.399034],[-7.291119,57.409931],[-7.312155,57.417528],[-7.31385,57.418141],[-7.238049,57.401741],[-7.254196,57.412103],[-7.233299,57.413646],[-7.235153,57.413659],[-7.210509,57.415324],[-7.206228,57.415639],[-7.224181,57.426615],[-7.202004,57.424277],[-7.204738,57.429423],[-7.215999,57.436272],[-7.24485,57.437911],[-7.221652,57.430989],[-7.233808,57.430198],[-7.232731,57.429719],[-7.234689,57.430141],[-7.247693,57.429293],[-7.28358,57.438079],[-7.275227,57.438872],[-7.275398,57.438909],[-7.270058,57.439362],[-7.264451,57.439894],[-7.278571,57.446955],[-7.267704,57.445737],[-7.270624,57.452846],[-7.264666,57.449186],[-7.264931,57.450929],[-7.255208,57.443455],[-7.250187,57.44447],[-7.250032,57.454],[-7.247046,57.451188],[-7.251659,57.459281],[-7.242967,57.447348],[-7.24269,57.447086],[-7.223934,57.446321],[-7.218405,57.44616],[-7.241485,57.450919],[-7.244742,57.460528],[-7.235893,57.460685],[-7.235508,57.461399],[-7.233189,57.460732],[-7.206744,57.461194],[-7.229284,57.470639],[-7.238239,57.466967],[-7.239628,57.4648],[-7.24013,57.466192],[-7.243645,57.464749],[-7.248543,57.471545],[-7.242119,57.471711],[-7.242771,57.473517],[-7.246708,57.474953],[-7.250858,57.473134],[-7.247508,57.460427],[-7.256104,57.466753],[-7.266841,57.463249],[-7.282396,57.473296],[-7.262683,57.472193],[-7.259031,57.478312],[-7.296237,57.477737],[-7.291234,57.48058],[-7.294619,57.480676],[-7.28873,57.482003],[-7.286458,57.483294],[-7.29496,57.485251],[-7.299989,57.485225],[-7.309133,57.479246],[-7.336592,57.480088]]],[[[-7.143993,57.500564],[-7.143614,57.500883],[-7.1571,57.503179],[-7.157984,57.503317],[-7.155072,57.496848],[-7.15191,57.49623],[-7.143993,57.500564]]],[[[-7.160239,57.494296],[-7.160602,57.494677],[-7.169144,57.502126],[-7.186881,57.502357],[-7.192066,57.5009],[-7.176992,57.491118],[-7.178395,57.491483],[-7.177281,57.491097],[-7.180109,57.491929],[-7.204073,57.498163],[-7.204328,57.49773],[-7.20722,57.490692],[-7.205511,57.489292],[-7.188972,57.484123],[-7.191732,57.478006],[-7.180566,57.468852],[-7.179373,57.469312],[-7.17028,57.475412],[-7.174243,57.481338],[-7.158048,57.483708],[-7.175262,57.487405],[-7.168423,57.490543],[-7.170584,57.491948],[-7.165842,57.491727],[-7.160239,57.494296]]],[[[-7.247941,57.501809],[-7.232202,57.503753],[-7.238115,57.504169],[-7.252813,57.503094],[-7.250909,57.499857],[-7.262715,57.502368],[-7.262877,57.502357],[-7.262828,57.502392],[-7.263416,57.502517],[-7.291217,57.490815],[-7.272918,57.496628],[-7.245955,57.478919],[-7.245392,57.478794],[-7.232722,57.485473],[-7.231928,57.483436],[-7.23026,57.484187],[-7.230268,57.479423],[-7.206222,57.476007],[-7.20892,57.480371],[-7.22199,57.488821],[-7.218417,57.495719],[-7.220287,57.49874],[-7.237961,57.496652],[-7.247941,57.501809]]],[[[-7.620658,57.512065],[-7.623874,57.511187],[-7.623937,57.510482],[-7.620658,57.512065]]],[[[-7.606735,57.518779],[-7.602566,57.523076],[-7.605935,57.532998],[-7.606601,57.533199],[-7.621899,57.52697],[-7.622475,57.526721],[-7.623115,57.519617],[-7.620473,57.512154],[-7.606735,57.518779]]],[[[-7.640079,57.524755],[-7.645506,57.53487],[-7.645955,57.535202],[-7.677903,57.52038],[-7.640079,57.524755]]],[[[-7.363254,57.555367],[-7.362781,57.555172],[-7.359818,57.555114],[-7.363254,57.555367]]],[[[-7.405799,57.55465],[-7.429007,57.565169],[-7.433747,57.569552],[-7.433795,57.569544],[-7.437572,57.56386],[-7.426458,57.55322],[-7.407851,57.553096],[-7.405799,57.55465]]],[[[-7.167591,57.629723],[-7.176986,57.628263],[-7.15939,57.622833],[-7.167591,57.629723]]],[[[-7.050449,57.657744],[-7.053306,57.66123],[-7.058989,57.654064],[-7.047784,57.650341],[-7.047263,57.650228],[-7.050449,57.657744]]],[[[-7.292434,57.653276],[-7.295154,57.65357],[-7.292368,57.652272],[-7.292434,57.653276]]],[[[-7.116044,57.662304],[-7.12061,57.659648],[-7.099654,57.65087],[-7.104476,57.650631],[-7.099985,57.648778],[-7.137829,57.639343],[-7.134682,57.650592],[-7.135063,57.650645],[-7.155282,57.651187],[-7.152893,57.650187],[-7.176468,57.650203],[-7.165684,57.648724],[-7.172068,57.644768],[-7.16486,57.644052],[-7.165119,57.643514],[-7.165604,57.637034],[-7.167937,57.63766],[-7.169409,57.6346],[-7.168935,57.634208],[-7.169566,57.634274],[-7.169746,57.6339],[-7.147311,57.62837],[-7.116681,57.634174],[-7.129032,57.627457],[-7.113771,57.632262],[-7.129245,57.627341],[-7.132487,57.625577],[-7.100306,57.607947],[-7.092489,57.614567],[-7.063117,57.640304],[-7.064393,57.641226],[-7.080678,57.648215],[-7.093581,57.646752],[-7.116044,57.662304]]],[[[-7.094658,57.665835],[-7.096091,57.667439],[-7.098653,57.665973],[-7.102452,57.663527],[-7.091199,57.659895],[-7.094658,57.665835]]],[[[-7.385663,57.659718],[-7.390431,57.658697],[-7.388127,57.657784],[-7.385663,57.659718]]],[[[-7.09661,57.669963],[-7.097306,57.67046],[-7.103254,57.673616],[-7.108,57.669178],[-7.09661,57.669963]]],[[[-7.287868,57.667889],[-7.306355,57.662796],[-7.309841,57.660956],[-7.28368,57.654876],[-7.287868,57.667889]]],[[[-7.376128,57.667832],[-7.382716,57.668535],[-7.423945,57.664381],[-7.439384,57.661214],[-7.437333,57.660294],[-7.413619,57.655535],[-7.398445,57.659741],[-7.39328,57.653739],[-7.388406,57.657565],[-7.392041,57.65889],[-7.376128,57.667832]]],[[[-7.033292,57.70687],[-7.038363,57.705324],[-7.040862,57.704562],[-7.038145,57.703761],[-7.0248,57.699826],[-7.033292,57.70687]]],[[[-7.275198,57.715446],[-7.292314,57.719549],[-7.29312,57.719306],[-7.299349,57.707159],[-7.279744,57.699999],[-7.275198,57.715446]]],[[[-7.145864,57.726579],[-7.144205,57.729402],[-7.166629,57.738619],[-7.170292,57.738269],[-7.198301,57.733904],[-7.228139,57.707227],[-7.198392,57.704196],[-7.195956,57.710369],[-7.183585,57.703399],[-7.182903,57.703014],[-7.183346,57.70266],[-7.182888,57.702613],[-7.184615,57.701646],[-7.207936,57.682991],[-7.220827,57.6888],[-7.223673,57.688821],[-7.243805,57.67178],[-7.260509,57.667957],[-7.26084,57.667703],[-7.261225,57.667793],[-7.278332,57.663875],[-7.246443,57.653346],[-7.263878,57.655939],[-7.253806,57.652625],[-7.268626,57.647513],[-7.286826,57.652531],[-7.279392,57.647327],[-7.291641,57.641206],[-7.292331,57.65171],[-7.298559,57.653938],[-7.337188,57.658103],[-7.319483,57.672535],[-7.323631,57.682612],[-7.310263,57.686498],[-7.309937,57.687433],[-7.314718,57.694081],[-7.321363,57.691147],[-7.323909,57.686873],[-7.341324,57.682326],[-7.344938,57.680728],[-7.340083,57.66845],[-7.367998,57.661138],[-7.376848,57.658819],[-7.369525,57.651834],[-7.382883,57.630784],[-7.416842,57.639279],[-7.409256,57.643213],[-7.419775,57.65151],[-7.42242,57.652559],[-7.440213,57.653275],[-7.449404,57.663119],[-7.460918,57.657968],[-7.476081,57.661257],[-7.492411,57.659994],[-7.494631,57.659245],[-7.485691,57.650539],[-7.503596,57.638505],[-7.503498,57.638189],[-7.49906,57.630659],[-7.500967,57.630077],[-7.500075,57.627217],[-7.524954,57.622743],[-7.526416,57.622296],[-7.51432,57.619287],[-7.517026,57.612639],[-7.516597,57.612266],[-7.517232,57.612133],[-7.52021,57.604811],[-7.530989,57.60256],[-7.534006,57.608598],[-7.545503,57.606173],[-7.548075,57.605029],[-7.504349,57.58323],[-7.490875,57.585703],[-7.497491,57.594471],[-7.482979,57.590588],[-7.493735,57.582836],[-7.483573,57.567975],[-7.445062,57.570034],[-7.443348,57.570288],[-7.429738,57.578405],[-7.441827,57.587779],[-7.364348,57.555819],[-7.354841,57.555018],[-7.352324,57.554969],[-7.311261,57.554167],[-7.33774,57.547211],[-7.341081,57.552983],[-7.351791,57.551348],[-7.355421,57.550793],[-7.351275,57.547839],[-7.34424,57.542823],[-7.350307,57.54125],[-7.359011,57.538992],[-7.372505,57.539126],[-7.36704,57.548902],[-7.376341,57.542313],[-7.382191,57.546026],[-7.386526,57.535392],[-7.403382,57.548425],[-7.403581,57.548344],[-7.373229,57.515483],[-7.358891,57.499937],[-7.354585,57.501406],[-7.347888,57.514934],[-7.349557,57.516492],[-7.358433,57.524776],[-7.348459,57.528674],[-7.344004,57.530414],[-7.345244,57.541901],[-7.325844,57.535263],[-7.316962,57.524471],[-7.322976,57.517619],[-7.327382,57.512598],[-7.313094,57.508415],[-7.31179,57.508604],[-7.297518,57.511343],[-7.307564,57.51827],[-7.312591,57.521736],[-7.305763,57.518346],[-7.29373,57.512371],[-7.277281,57.515989],[-7.263154,57.502804],[-7.275821,57.51749],[-7.276061,57.517772],[-7.24588,57.507026],[-7.226852,57.508933],[-7.239158,57.511441],[-7.234114,57.513169],[-7.23615,57.514072],[-7.233112,57.513513],[-7.228966,57.514933],[-7.208205,57.508924],[-7.206272,57.508567],[-7.225614,57.514991],[-7.223033,57.517991],[-7.224226,57.518495],[-7.222857,57.518196],[-7.221284,57.520023],[-7.176597,57.508352],[-7.155643,57.511137],[-7.168695,57.513224],[-7.169501,57.513251],[-7.146509,57.516438],[-7.143888,57.525066],[-7.135078,57.554039],[-7.1657,57.554554],[-7.165659,57.547367],[-7.196363,57.548876],[-7.284559,57.552643],[-7.28432,57.545612],[-7.306471,57.554085],[-7.293276,57.560189],[-7.298228,57.568019],[-7.290075,57.563006],[-7.272464,57.554664],[-7.283393,57.560332],[-7.28908,57.562876],[-7.28835,57.562901],[-7.288639,57.563051],[-7.254187,57.564122],[-7.256324,57.573976],[-7.254459,57.569899],[-7.25452,57.570604],[-7.248463,57.559092],[-7.249566,57.559201],[-7.249078,57.558135],[-7.267082,57.559293],[-7.259111,57.553683],[-7.257531,57.553794],[-7.212924,57.560291],[-7.222355,57.564289],[-7.203012,57.561732],[-7.20287,57.561753],[-7.201662,57.561553],[-7.180629,57.558769],[-7.1874,57.566165],[-7.173874,57.565363],[-7.169314,57.562057],[-7.152789,57.558723],[-7.117662,57.566184],[-7.110302,57.578364],[-7.101877,57.593486],[-7.151531,57.586235],[-7.163144,57.587619],[-7.157188,57.594584],[-7.169577,57.593975],[-7.182227,57.592959],[-7.177424,57.593589],[-7.18685,57.593124],[-7.171123,57.594415],[-7.164856,57.595237],[-7.181672,57.596883],[-7.164165,57.596921],[-7.172553,57.604111],[-7.155036,57.597016],[-7.163038,57.601826],[-7.153699,57.608526],[-7.182516,57.611508],[-7.152829,57.612956],[-7.152792,57.613001],[-7.190953,57.614574],[-7.183678,57.617753],[-7.197952,57.620483],[-7.20012,57.620071],[-7.199335,57.620747],[-7.204301,57.621696],[-7.188961,57.631067],[-7.218851,57.638801],[-7.218731,57.638813],[-7.219118,57.638907],[-7.215813,57.639086],[-7.193332,57.64119],[-7.204551,57.644512],[-7.186586,57.646309],[-7.173074,57.644875],[-7.188875,57.64765],[-7.192457,57.657224],[-7.213947,57.657194],[-7.19256,57.6575],[-7.19163,57.657225],[-7.167428,57.657254],[-7.184561,57.661194],[-7.172429,57.660828],[-7.17377,57.669456],[-7.16449,57.663673],[-7.1589,57.668221],[-7.156246,57.676852],[-7.19501,57.690867],[-7.191623,57.693299],[-7.175614,57.709761],[-7.169872,57.708907],[-7.166188,57.711548],[-7.1726,57.719344],[-7.152831,57.717261],[-7.145864,57.726579]]],[[[-7.079862,57.74421],[-7.087887,57.748888],[-7.093281,57.739665],[-7.09333,57.739512],[-7.062271,57.732942],[-7.079862,57.74421]]],[[[-7.075814,57.752319],[-7.082259,57.773665],[-7.095215,57.769677],[-7.098216,57.768462],[-7.07563,57.751387],[-7.075814,57.752319]]],[[[-7.200259,57.77257],[-7.214597,57.784788],[-7.229551,57.785439],[-7.265418,57.774003],[-7.265871,57.773557],[-7.241258,57.75975],[-7.222758,57.760169],[-7.200259,57.77257]]],[[[-7.248574,57.800279],[-7.245271,57.801745],[-7.258186,57.80475],[-7.256736,57.797472],[-7.248574,57.800279]]],[[[-6.703277,57.879335],[-6.692448,57.873521],[-6.70164,57.874234],[-6.70127,57.873215],[-6.714006,57.87503],[-6.704027,57.863268],[-6.699636,57.87079],[-6.699576,57.870758],[-6.699491,57.871231],[-6.68357,57.862832],[-6.683821,57.862478],[-6.683674,57.862401],[-6.683975,57.862261],[-6.688188,57.856318],[-6.677787,57.853285],[-6.683067,57.8594],[-6.681817,57.859448],[-6.681862,57.859486],[-6.680394,57.859503],[-6.671367,57.85985],[-6.670986,57.849767],[-6.641351,57.856497],[-6.651385,57.870808],[-6.703277,57.879335]]],[[[-6.744963,57.871532],[-6.739904,57.874178],[-6.74776,57.879201],[-6.74652,57.87107],[-6.744963,57.871532]]],[[[-6.360988,57.904278],[-6.362115,57.904464],[-6.381441,57.902606],[-6.358576,57.894873],[-6.352611,57.880068],[-6.360988,57.904278]]],[[[-6.335584,57.907982],[-6.342887,57.901941],[-6.324864,57.898342],[-6.335584,57.907982]]],[[[-8.615353,57.828004],[-8.612258,57.816721],[-8.610236,57.80935],[-8.584941,57.806654],[-8.579559,57.80126],[-8.576111,57.80035],[-8.570451,57.810571],[-8.568091,57.810754],[-8.550013,57.812404],[-8.558329,57.819533],[-8.565164,57.825389],[-8.593378,57.826955],[-8.598485,57.819815],[-8.615353,57.828004]]],[[[-8.624814,57.833665],[-8.649996,57.827959],[-8.631324,57.824594],[-8.624814,57.833665]]],[[[-6.989246,57.907302],[-6.989927,57.909362],[-7.008488,57.921668],[-7.041398,57.912382],[-7.048827,57.897178],[-7.065043,57.895699],[-7.077546,57.894557],[-7.085986,57.893726],[-7.083132,57.88743],[-7.0776,57.875218],[-7.062764,57.879525],[-7.054236,57.882],[-7.051076,57.888712],[-7.048239,57.894737],[-7.034827,57.88936],[-7.015461,57.88159],[-7.01388,57.880973],[-6.996529,57.88873],[-6.995675,57.89091],[-6.989246,57.907302]]],[[[-8.49069,57.876787],[-8.499708,57.866929],[-8.487415,57.863713],[-8.49069,57.876787]]],[[[-6.420129,58.005417],[-6.442294,58.005074],[-6.444145,57.99775],[-6.412245,57.997876],[-6.420129,58.005417]]],[[[-6.712868,57.994249],[-6.725784,58.007863],[-6.738867,58.002149],[-6.740737,58.001277],[-6.723776,57.985522],[-6.712868,57.994249]]],[[[-7.105378,58.016831],[-7.107499,58.028731],[-7.132777,58.037985],[-7.169875,58.026773],[-7.165909,58.020424],[-7.158348,58.013374],[-7.153428,58.008843],[-7.132904,58.01165],[-7.103637,58.004546],[-7.105378,58.016831]]],[[[-6.609123,58.085349],[-6.609188,58.085454],[-6.609516,58.0853],[-6.609123,58.085349]]],[[[-6.59493,58.087116],[-6.602731,58.086635],[-6.602935,58.086119],[-6.59493,58.087116]]],[[[-6.437025,58.102369],[-6.431501,58.10573],[-6.432585,58.107046],[-6.442685,58.104055],[-6.448418,58.099775],[-6.447521,58.099536],[-6.437025,58.102369]]],[[[-7.127439,58.085704],[-7.128494,58.085953],[-7.135923,58.075195],[-7.118882,58.073256],[-7.127439,58.085704]]],[[[-6.922896,58.195031],[-6.93044,58.193472],[-6.933796,58.192722],[-6.921691,58.189466],[-6.922896,58.195031]]],[[[-6.877594,58.208281],[-6.877138,58.208482],[-6.89451,58.218801],[-6.887284,58.204096],[-6.877594,58.208281]]],[[[-6.935696,58.22992],[-6.936207,58.240911],[-6.941111,58.240267],[-6.951167,58.238897],[-6.935693,58.22812],[-6.935696,58.22992]]],[[[-6.84955,58.256817],[-6.889286,58.260164],[-6.887179,58.254986],[-6.87712,58.230246],[-6.876952,58.229877],[-6.871303,58.227486],[-6.862116,58.224012],[-6.870556,58.240199],[-6.871889,58.24243],[-6.871569,58.242139],[-6.871768,58.242521],[-6.853731,58.22591],[-6.858937,58.215368],[-6.875553,58.220172],[-6.867238,58.207463],[-6.804331,58.20731],[-6.783577,58.201039],[-6.785341,58.218873],[-6.79537,58.21991],[-6.798214,58.219467],[-6.817534,58.235686],[-6.817903,58.229345],[-6.818834,58.229923],[-6.81859,58.228627],[-6.833937,58.239254],[-6.836889,58.232126],[-6.839615,58.237853],[-6.84955,58.256817]]],[[[-6.859057,58.260537],[-6.883187,58.269965],[-6.87938,58.260401],[-6.874581,58.259937],[-6.859057,58.260537]]],[[[-6.828624,58.204403],[-6.841852,58.19679],[-6.847697,58.198495],[-6.855251,58.196118],[-6.860634,58.187691],[-6.860767,58.187744],[-6.859131,58.181181],[-6.861709,58.182361],[-6.875718,58.186608],[-6.869137,58.17268],[-6.871186,58.1727],[-6.870693,58.171793],[-6.872541,58.172714],[-6.882044,58.172807],[-6.883465,58.169518],[-6.868323,58.12867],[-6.858833,58.110935],[-6.864421,58.118128],[-6.863627,58.115983],[-6.869081,58.124125],[-6.889374,58.150212],[-6.889894,58.15516],[-6.892319,58.158771],[-6.89317,58.186263],[-6.893258,58.187103],[-6.933301,58.186186],[-6.962775,58.203408],[-6.962679,58.203387],[-6.962481,58.203329],[-6.945257,58.198718],[-6.943956,58.20428],[-6.912545,58.203409],[-6.911188,58.203383],[-6.909604,58.208838],[-6.90856,58.21313],[-6.941104,58.218103],[-6.95528,58.232241],[-6.95857,58.234572],[-6.970126,58.219332],[-6.974578,58.221845],[-6.976214,58.22022],[-6.992659,58.232043],[-6.99459,58.233131],[-7.026717,58.232302],[-7.024135,58.244277],[-7.048823,58.232469],[-7.064762,58.196461],[-7.059318,58.193654],[-7.042283,58.188123],[-7.031388,58.200714],[-7.018137,58.184038],[-7.00708,58.184202],[-7.017682,58.183465],[-7.019691,58.184015],[-7.037386,58.183751],[-7.042874,58.170989],[-7.053115,58.185446],[-7.056886,58.180128],[-7.059217,58.180913],[-7.059263,58.180731],[-7.083341,58.189028],[-7.084096,58.189282],[-7.094876,58.186156],[-7.10451,58.183356],[-7.089309,58.164094],[-7.093097,58.160162],[-7.092772,58.159506],[-7.094209,58.159007],[-7.101318,58.151624],[-7.101445,58.151617],[-7.115853,58.150851],[-7.108636,58.143916],[-7.110008,58.143519],[-7.117425,58.137238],[-7.126867,58.138641],[-7.129495,58.137881],[-7.135443,58.122862],[-7.128338,58.119259],[-7.113392,58.113978],[-7.112616,58.111282],[-7.10982,58.109863],[-7.104752,58.083935],[-7.10146,58.072477],[-7.092657,58.069303],[-7.077618,58.067718],[-7.083272,58.065918],[-7.07262,58.062074],[-7.067308,58.061349],[-7.06955,58.066682],[-7.066128,58.068056],[-7.033661,58.081078],[-7.03185,58.079705],[-7.02895,58.080734],[-7.024859,58.074401],[-7.020497,58.071091],[-7.023833,58.069735],[-7.059135,58.055378],[-7.046186,58.054885],[-7.020879,58.053981],[-7.021682,58.053832],[-7.061728,58.041356],[-7.061706,58.041006],[-7.038814,58.033747],[-6.981581,58.047907],[-6.98132,58.047911],[-6.909337,58.051014],[-6.922458,58.048885],[-6.906297,58.049148],[-6.940354,58.045979],[-7.01959,58.033075],[-7.031299,58.029443],[-7.052429,58.010024],[-7.054618,58.010799],[-7.056061,58.008792],[-7.08239,58.020512],[-7.082645,58.019979],[-7.090086,58.004436],[-7.090975,58.001435],[-7.091717,58.001027],[-7.092459,57.999477],[-7.114164,57.988665],[-7.091661,57.993957],[-7.090224,57.994906],[-7.079994,57.967132],[-7.075243,57.967838],[-7.058024,57.970394],[-7.056286,57.961764],[-7.022741,57.952269],[-6.995499,57.954667],[-7.00803,57.963863],[-6.999837,57.965558],[-6.969823,57.950009],[-6.943875,57.95069],[-6.92188,57.940301],[-6.902524,57.950422],[-6.901696,57.950853],[-6.913999,57.936306],[-6.91331,57.93622],[-6.851681,57.933232],[-6.849589,57.934626],[-6.83959,57.928234],[-6.843015,57.927849],[-6.842676,57.927583],[-6.865749,57.924219],[-6.864231,57.922535],[-6.817666,57.902219],[-6.813924,57.900929],[-6.845459,57.905241],[-6.851232,57.899569],[-6.875001,57.900455],[-6.91843,57.910841],[-6.919141,57.910698],[-6.940999,57.90282],[-6.946772,57.905138],[-6.949029,57.904684],[-6.956793,57.892437],[-6.960254,57.886974],[-6.905532,57.868771],[-6.920431,57.865268],[-6.939237,57.872002],[-6.951315,57.864612],[-6.951935,57.877414],[-6.957737,57.867538],[-6.983708,57.86324],[-6.992856,57.868498],[-6.997983,57.845625],[-7.020518,57.83879],[-7.023997,57.834965],[-7.068314,57.823603],[-7.069158,57.824015],[-7.075446,57.822103],[-7.070925,57.811121],[-7.081243,57.81328],[-7.082247,57.830392],[-7.101956,57.839987],[-7.105339,57.841275],[-7.133543,57.837389],[-7.120342,57.816753],[-7.083767,57.806955],[-7.054451,57.778106],[-7.048165,57.775546],[-7.031276,57.768663],[-7.030789,57.772438],[-7.031405,57.775649],[-7.014017,57.769861],[-7.014838,57.769656],[-7.014154,57.769409],[-7.015128,57.769584],[-7.024329,57.767295],[-7.023075,57.763845],[-7.009047,57.753762],[-7.002611,57.752816],[-6.974728,57.729069],[-6.965279,57.729871],[-6.965472,57.730107],[-6.978773,57.743639],[-6.9446,57.738755],[-6.937063,57.758315],[-6.93384,57.758814],[-6.931138,57.763848],[-6.929588,57.759473],[-6.901313,57.763846],[-6.899208,57.764307],[-6.899278,57.764362],[-6.920825,57.774983],[-6.914321,57.776085],[-6.920431,57.780843],[-6.922898,57.781432],[-6.920776,57.781112],[-6.922518,57.782469],[-6.872946,57.773895],[-6.873429,57.775101],[-6.883037,57.7956],[-6.881472,57.795171],[-6.883628,57.800547],[-6.862339,57.794741],[-6.86209,57.794805],[-6.871309,57.797617],[-6.869192,57.797694],[-6.870838,57.797893],[-6.856619,57.798616],[-6.863124,57.812893],[-6.860493,57.810181],[-6.857677,57.807313],[-6.856438,57.808863],[-6.853092,57.813684],[-6.852868,57.813328],[-6.852672,57.813573],[-6.846648,57.803417],[-6.846249,57.802781],[-6.833661,57.814727],[-6.862827,57.8333],[-6.861068,57.832599],[-6.862703,57.833661],[-6.847279,57.827101],[-6.84481,57.834496],[-6.82333,57.812789],[-6.821096,57.812083],[-6.812576,57.809648],[-6.806886,57.815585],[-6.791602,57.804812],[-6.797808,57.834038],[-6.797727,57.834009],[-6.797817,57.834421],[-6.772989,57.825796],[-6.766946,57.83162],[-6.765341,57.833795],[-6.763485,57.827886],[-6.760932,57.822276],[-6.760193,57.823271],[-6.759454,57.828797],[-6.757316,57.827148],[-6.755223,57.829966],[-6.751017,57.822287],[-6.750822,57.822136],[-6.736596,57.826851],[-6.736727,57.827306],[-6.750458,57.842164],[-6.756557,57.842396],[-6.774072,57.867498],[-6.803904,57.867168],[-6.8129,57.882013],[-6.812049,57.881972],[-6.801546,57.885512],[-6.793043,57.881039],[-6.789849,57.880882],[-6.79042,57.884167],[-6.802843,57.897522],[-6.802914,57.897602],[-6.784693,57.899054],[-6.773968,57.899907],[-6.77304,57.899494],[-6.742342,57.885799],[-6.741485,57.885698],[-6.725731,57.884995],[-6.66551,57.882292],[-6.670142,57.899932],[-6.678794,57.903009],[-6.713551,57.915357],[-6.673797,57.917213],[-6.673798,57.917295],[-6.704488,57.951284],[-6.706343,57.953046],[-6.727632,57.952933],[-6.734679,57.952896],[-6.745204,57.952838],[-6.734685,57.952943],[-6.725388,57.953035],[-6.723902,57.95305],[-6.723886,57.953103],[-6.723139,57.955533],[-6.721578,57.961892],[-6.73006,57.976536],[-6.738388,57.99021],[-6.739635,57.990374],[-6.756835,57.992634],[-6.760634,58.003404],[-6.742032,58.008461],[-6.724052,58.013345],[-6.695321,58.03035],[-6.672087,58.04449],[-6.671381,58.053755],[-6.677589,58.055107],[-6.695131,58.058155],[-6.586408,58.053212],[-6.621792,58.046916],[-6.632928,58.054735],[-6.665011,58.053116],[-6.665012,58.053085],[-6.664258,58.04252],[-6.680765,58.032316],[-6.712443,58.011254],[-6.702136,57.960444],[-6.651001,57.917681],[-6.646914,57.922065],[-6.644924,57.924277],[-6.644863,57.924265],[-6.644537,57.924615],[-6.632207,57.921823],[-6.632531,57.923059],[-6.634138,57.927176],[-6.633423,57.926456],[-6.633834,57.928019],[-6.623854,57.916843],[-6.60634,57.917257],[-6.64619,57.964087],[-6.641214,57.961167],[-6.641541,57.961576],[-6.612195,57.950131],[-6.611603,57.949435],[-6.609062,57.949868],[-6.609528,57.947001],[-6.582318,57.915038],[-6.577118,57.910508],[-6.573007,57.924611],[-6.564088,57.914495],[-6.566075,57.919752],[-6.540316,57.916482],[-6.549112,57.958089],[-6.519318,57.926968],[-6.501854,57.940379],[-6.484912,57.938717],[-6.471822,57.937507],[-6.46834,57.961328],[-6.448905,57.965642],[-6.451126,57.988687],[-6.472203,57.999899],[-6.47481,58.001222],[-6.475507,58.001246],[-6.580094,58.003421],[-6.561117,58.004167],[-6.570846,58.004496],[-6.532658,58.005281],[-6.525917,58.005544],[-6.526014,58.006371],[-6.528199,58.016332],[-6.523743,58.014052],[-6.504292,58.007996],[-6.490785,58.008927],[-6.499908,58.01659],[-6.499947,58.016621],[-6.470465,58.00942],[-6.469842,58.010021],[-6.467478,58.018271],[-6.463738,58.015909],[-6.459708,58.019794],[-6.44959,58.005881],[-6.438397,58.017061],[-6.411287,58.007579],[-6.388457,57.999998],[-6.358312,58.039385],[-6.407644,58.045093],[-6.439973,58.048822],[-6.408094,58.04874],[-6.373818,58.048642],[-6.367465,58.064719],[-6.381245,58.067883],[-6.368903,58.076392],[-6.373363,58.077396],[-6.381215,58.079074],[-6.378781,58.092403],[-6.38369,58.090312],[-6.397029,58.084448],[-6.400662,58.091805],[-6.398648,58.091941],[-6.398733,58.092276],[-6.383851,58.092944],[-6.383448,58.092971],[-6.400095,58.097256],[-6.399019,58.097731],[-6.403154,58.098994],[-6.394891,58.099552],[-6.39382,58.100025],[-6.396352,58.104707],[-6.397029,58.103595],[-6.397995,58.107745],[-6.399785,58.111054],[-6.41523,58.106457],[-6.435256,58.100492],[-6.434934,58.100405],[-6.420457,58.09937],[-6.416545,58.100174],[-6.414412,58.099854],[-6.402698,58.098098],[-6.414298,58.098929],[-6.417993,58.099194],[-6.428819,58.091862],[-6.431982,58.089719],[-6.432103,58.089735],[-6.465611,58.095262],[-6.471328,58.090374],[-6.472705,58.089197],[-6.479512,58.090086],[-6.509125,58.093949],[-6.519756,58.088661],[-6.526235,58.085438],[-6.557355,58.08732],[-6.563135,58.087668],[-6.565405,58.081796],[-6.566036,58.082115],[-6.567111,58.079068],[-6.575301,58.086675],[-6.575577,58.086932],[-6.578006,58.088157],[-6.590836,58.087368],[-6.603006,58.085939],[-6.603112,58.085671],[-6.605812,58.078827],[-6.609061,58.085227],[-6.609859,58.085133],[-6.624207,58.078163],[-6.634437,58.084533],[-6.63471,58.084703],[-6.532736,58.096569],[-6.541173,58.099581],[-6.530764,58.096798],[-6.517376,58.098349],[-6.510243,58.10298],[-6.498168,58.100571],[-6.459543,58.105031],[-6.458018,58.105343],[-6.428698,58.125703],[-6.447953,58.129152],[-6.444381,58.12365],[-6.458145,58.130706],[-6.468283,58.126441],[-6.468261,58.126637],[-6.468135,58.12738],[-6.466999,58.13458],[-6.494782,58.142419],[-6.486061,58.14076],[-6.492936,58.142988],[-6.422182,58.128772],[-6.418143,58.129947],[-6.401067,58.134911],[-6.370531,58.131498],[-6.369357,58.142525],[-6.370612,58.142713],[-6.417491,58.137063],[-6.418308,58.138386],[-6.419174,58.138249],[-6.423488,58.137569],[-6.42402,58.147631],[-6.424087,58.147739],[-6.424025,58.147714],[-6.424028,58.147775],[-6.420166,58.146243],[-6.408846,58.14175],[-6.37573,58.150551],[-6.367493,58.152771],[-6.387716,58.179303],[-6.385674,58.180652],[-6.371553,58.190908],[-6.384507,58.188868],[-6.396288,58.199012],[-6.394281,58.202615],[-6.396872,58.20609],[-6.38763,58.214551],[-6.387524,58.214648],[-6.391707,58.207108],[-6.359633,58.203442],[-6.352874,58.188663],[-6.330702,58.194858],[-6.329514,58.195977],[-6.328822,58.195383],[-6.321689,58.197375],[-6.32146,58.201269],[-6.295014,58.204817],[-6.290623,58.206041],[-6.250935,58.179598],[-6.207386,58.189016],[-6.207268,58.192011],[-6.208089,58.19897],[-6.179153,58.203811],[-6.178898,58.203862],[-6.153822,58.220813],[-6.153652,58.220929],[-6.165184,58.228582],[-6.13567,58.258984],[-6.15744,58.263743],[-6.16525,58.257514],[-6.172284,58.251409],[-6.203305,58.247429],[-6.224555,58.227296],[-6.284864,58.206661],[-6.291687,58.209288],[-6.303656,58.211012],[-6.313623,58.217728],[-6.34319,58.229093],[-6.334646,58.222151],[-6.357617,58.217455],[-6.380691,58.222421],[-6.361502,58.226886],[-6.363939,58.238866],[-6.346048,58.235262],[-6.348796,58.229457],[-6.319088,58.244549],[-6.328195,58.259521],[-6.318698,58.269964],[-6.281035,58.269865],[-6.280505,58.271556],[-6.280845,58.276781],[-6.281499,58.286841],[-6.283807,58.287623],[-6.276606,58.294026],[-6.243946,58.295468],[-6.242354,58.295668],[-6.246747,58.306908],[-6.233887,58.315276],[-6.233092,58.317234],[-6.213813,58.328327],[-6.198453,58.338306],[-6.195952,58.338596],[-6.194435,58.339467],[-6.162372,58.342592],[-6.218548,58.368181],[-6.190049,58.408271],[-6.168208,58.417284],[-6.167157,58.429979],[-6.196383,58.446765],[-6.186446,58.459756],[-6.180996,58.466876],[-6.226786,58.489373],[-6.222477,58.500087],[-6.222341,58.500687],[-6.261784,58.51582],[-6.282274,58.509499],[-6.278487,58.504825],[-6.271122,58.499342],[-6.30018,58.480414],[-6.333162,58.478599],[-6.35466,58.459022],[-6.372937,58.45352],[-6.435862,58.434545],[-6.454901,58.423264],[-6.497073,58.398241],[-6.519225,58.397095],[-6.547135,58.365074],[-6.582398,58.363442],[-6.617558,58.346789],[-6.632758,58.345564],[-6.639271,58.343243],[-6.640739,58.344919],[-6.645651,58.344523],[-6.643038,58.339957],[-6.647711,58.344356],[-6.646089,58.345287],[-6.650931,58.353745],[-6.652506,58.353474],[-6.686179,58.332886],[-6.686628,58.33245],[-6.686835,58.332484],[-6.689139,58.331074],[-6.695361,58.333891],[-6.706262,58.33569],[-6.710376,58.334081],[-6.744171,58.313996],[-6.754581,58.306161],[-6.781769,58.305185],[-6.804359,58.304371],[-6.79536,58.296687],[-6.811006,58.288617],[-6.825262,58.280961],[-6.778626,58.28193],[-6.772117,58.282064],[-6.778455,58.280667],[-6.77966,58.280401],[-6.77678,58.280386],[-6.786433,58.278908],[-6.817418,58.272071],[-6.811149,58.257878],[-6.809133,58.253311],[-6.791665,58.249643],[-6.792948,58.249182],[-6.789037,58.248469],[-6.801149,58.24623],[-6.801263,58.246189],[-6.78899,58.236066],[-6.786162,58.235261],[-6.776989,58.236087],[-6.775807,58.238313],[-6.774183,58.236339],[-6.77363,58.236389],[-6.746735,58.214428],[-6.739887,58.213318],[-6.736692,58.204861],[-6.750859,58.207886],[-6.758665,58.20457],[-6.760564,58.199445],[-6.759976,58.198693],[-6.749259,58.195066],[-6.739667,58.195867],[-6.739156,58.191647],[-6.73759,58.191116],[-6.735067,58.197923],[-6.707731,58.184544],[-6.706827,58.184094],[-6.714806,58.183581],[-6.725011,58.182194],[-6.715475,58.169366],[-6.732672,58.17547],[-6.73414,58.166325],[-6.749716,58.192145],[-6.758933,58.186886],[-6.766122,58.189055],[-6.771512,58.190681],[-6.781009,58.189825],[-6.782093,58.187837],[-6.781988,58.189737],[-6.782743,58.189669],[-6.790176,58.196305],[-6.826187,58.204212],[-6.828624,58.204403]]],[[[-5.812981,59.119007],[-5.82497,59.132904],[-5.822648,59.126045],[-5.84057,59.115954],[-5.812981,59.119007]]]]}',
      metadata: ["Na h-Eileanan Siar"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.775995,56.092991],[-3.776441,56.092713],[-3.774085,56.091721],[-3.775995,56.092991]]],[[[-3.508993,56.001135],[-3.516329,56.001773],[-3.52366,56.003509],[-3.59754,56.020969],[-3.605824,56.019982],[-3.675037,56.011712],[-3.690664,56.001332],[-3.69346,55.999474],[-3.690952,56.001328],[-3.671467,56.015723],[-3.680444,56.030276],[-3.693387,56.023961],[-3.682057,56.035659],[-3.714633,56.028728],[-3.71674,56.026673],[-3.754294,56.020275],[-3.719047,56.027788],[-3.728447,56.03233],[-3.730765,56.046945],[-3.733132,56.061858],[-3.737833,56.066015],[-3.769094,56.076641],[-3.79342,56.104572],[-3.797692,56.10741],[-3.821546,56.100719],[-3.83589,56.084648],[-3.797899,56.065419],[-3.81533,56.061198],[-3.814263,56.052803],[-3.89673,56.045421],[-3.973355,56.048623],[-3.978651,56.03937],[-4.020121,56.028037],[-4.030341,56.009733],[-3.988418,56.007789],[-3.974635,55.990877],[-3.989324,55.987284],[-3.985231,55.982782],[-3.964811,55.987102],[-3.945515,55.982439],[-3.949722,55.971443],[-3.93587,55.962283],[-3.860339,55.959234],[-3.90381,55.937942],[-3.833029,55.9078],[-3.809169,55.904858],[-3.822555,55.896491],[-3.782106,55.90163],[-3.732168,55.935331],[-3.703345,55.934558],[-3.667577,55.945435],[-3.674212,55.953924],[-3.652931,55.959259],[-3.656992,55.964777],[-3.59996,55.996841],[-3.5364,55.985723],[-3.508993,56.001135]]]]}',
      metadata: ["Falkirk"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-5.871035,56.661607],[-5.882198,56.670044],[-5.895996,56.66125],[-5.893011,56.656469],[-5.889541,56.651054],[-5.871035,56.661607]]],[[[-5.918311,56.664894],[-5.928131,56.669502],[-5.930267,56.667826],[-5.940796,56.659101],[-5.94058,56.667085],[-5.941057,56.667712],[-5.948001,56.658306],[-5.931775,56.657921],[-5.917638,56.658423],[-5.905446,56.658854],[-5.918311,56.664894]]],[[[-5.87669,56.810645],[-5.887087,56.792032],[-5.851309,56.785936],[-5.830832,56.795011],[-5.809216,56.79352],[-5.87669,56.810645]]],[[[-6.265676,56.84798],[-6.265836,56.848096],[-6.265634,56.847616],[-6.262428,56.839997],[-6.264686,56.839296],[-6.267769,56.838339],[-6.277443,56.835335],[-6.27632,56.834006],[-6.270323,56.828013],[-6.263566,56.829456],[-6.247821,56.832816],[-6.235805,56.822963],[-6.228694,56.834937],[-6.219914,56.830688],[-6.221867,56.839903],[-6.223016,56.845323],[-6.25498,56.840234],[-6.265676,56.84798]]],[[[-5.888316,56.926132],[-5.900245,56.919749],[-5.886151,56.919941],[-5.888316,56.926132]]],[[[-6.111718,56.924506],[-6.127313,56.936244],[-6.138611,56.944207],[-6.162278,56.936306],[-6.158653,56.915006],[-6.177869,56.915308],[-6.186373,56.915121],[-6.201919,56.909308],[-6.208073,56.904936],[-6.209074,56.896943],[-6.207527,56.887727],[-6.170153,56.874206],[-6.162855,56.872001],[-6.148792,56.871683],[-6.139086,56.871984],[-6.126775,56.889351],[-6.117118,56.888028],[-6.116346,56.888665],[-6.111718,56.924506]]],[[[-6.329967,57.060374],[-6.351243,57.04896],[-6.363768,57.051865],[-6.397789,57.042699],[-6.409633,57.029335],[-6.449807,57.011856],[-6.460053,57.007394],[-6.375833,56.973181],[-6.371278,56.956549],[-6.369557,56.952226],[-6.311141,56.934868],[-6.277875,56.954633],[-6.256925,56.967065],[-6.239359,57.001761],[-6.238318,57.004753],[-6.241338,57.00531],[-6.279638,57.011755],[-6.25292,57.018713],[-6.247533,57.020115],[-6.260208,57.036761],[-6.288431,57.046323],[-6.329967,57.060374]]],[[[-6.49725,57.055448],[-6.513098,57.052219],[-6.511197,57.044121],[-6.489721,57.049059],[-6.465399,57.044291],[-6.49725,57.055448]]],[[[-6.488369,57.067153],[-6.493941,57.068318],[-6.525199,57.06935],[-6.558986,57.064974],[-6.560091,57.062684],[-6.574118,57.063012],[-6.592395,57.060638],[-6.597546,57.058332],[-6.607924,57.047639],[-6.605171,57.046091],[-6.58454,57.044941],[-6.557655,57.053395],[-6.549692,57.05812],[-6.497915,57.055908],[-6.488547,57.056004],[-6.488106,57.05791],[-6.488369,57.067153]]],[[[-5.781594,57.145946],[-5.787347,57.149319],[-5.791518,57.146975],[-5.793594,57.143549],[-5.781594,57.145946]]],[[[-6.183418,57.162777],[-6.205682,57.165998],[-6.221378,57.158635],[-6.21466,57.152836],[-6.227181,57.157998],[-6.255956,57.149546],[-6.232415,57.131506],[-6.214963,57.133199],[-6.204016,57.136031],[-6.208947,57.147885],[-6.21024,57.150786],[-6.182365,57.152588],[-6.183418,57.162777]]],[[[-5.84771,57.274205],[-5.859254,57.281346],[-5.869964,57.277699],[-5.864481,57.268477],[-5.84771,57.274205]]],[[[-5.883353,57.309727],[-5.892866,57.315204],[-5.891005,57.305604],[-5.883353,57.309727]]],[[[-5.928986,57.280946],[-5.926114,57.307499],[-5.988458,57.323999],[-5.998376,57.324914],[-6.011124,57.321948],[-6.016235,57.320366],[-6.02242,57.305808],[-6.016787,57.298392],[-6.007306,57.288618],[-5.98304,57.27531],[-5.980358,57.273838],[-5.928986,57.280946]]],[[[-5.854766,57.357336],[-5.8455,57.335029],[-5.821618,57.334485],[-5.835296,57.351318],[-5.84124,57.338248],[-5.854766,57.357336]]],[[[-6.492293,57.345123],[-6.513184,57.331283],[-6.492464,57.330412],[-6.492293,57.345123]]],[[[-6.025335,57.495434],[-6.034101,57.489666],[-6.025247,57.479723],[-6.025335,57.495434]]],[[[-5.97839,57.494585],[-5.995415,57.505299],[-5.994408,57.499307],[-5.99207,57.493613],[-5.993404,57.493334],[-5.993345,57.492983],[-6.019988,57.479925],[-6.019996,57.47997],[-6.022753,57.476922],[-6.019202,57.472932],[-6.029444,57.469435],[-6.011315,57.465095],[-6.01783,57.45461],[-6.056635,57.45976],[-6.084861,57.421321],[-6.07527,57.384324],[-6.074233,57.380316],[-6.088033,57.350893],[-6.08268,57.349713],[-6.077378,57.350276],[-6.076262,57.348298],[-6.066002,57.346035],[-6.067,57.333673],[-6.050269,57.328382],[-6.021136,57.333339],[-5.99277,57.358188],[-5.992974,57.366866],[-5.993068,57.370866],[-5.993437,57.371126],[-6.014989,57.386263],[-6.018653,57.388835],[-6.032346,57.429445],[-6.00305,57.459176],[-5.983028,57.479463],[-5.97839,57.494585]]],[[[-5.995499,57.509302],[-6.003021,57.515746],[-6.009123,57.51455],[-6.013021,57.513785],[-6.01047,57.512739],[-6.008862,57.512174],[-5.992588,57.50645],[-5.995499,57.509302]]],[[[-6.647239,57.524797],[-6.649822,57.514206],[-6.640459,57.511635],[-6.638487,57.5116],[-6.647239,57.524797]]],[[[-5.96727,57.580319],[-5.965461,57.572703],[-5.966784,57.573207],[-5.966232,57.571869],[-5.978768,57.577148],[-5.978805,57.577128],[-5.975046,57.571133],[-5.981982,57.57535],[-5.983089,57.574731],[-5.989483,57.569229],[-5.988431,57.566758],[-5.976352,57.549687],[-5.980654,57.54848],[-5.979902,57.546712],[-5.996015,57.544167],[-6.001111,57.542736],[-5.993912,57.535789],[-5.980443,57.540441],[-5.997889,57.527538],[-5.978321,57.51449],[-5.954058,57.568025],[-5.953848,57.568486],[-5.96727,57.580319]]],[[[-6.352659,57.708114],[-6.342351,57.685024],[-6.353572,57.671206],[-6.361704,57.667996],[-6.382796,57.659665],[-6.409145,57.660301],[-6.406268,57.65052],[-6.427704,57.64215],[-6.394238,57.612724],[-6.394608,57.585174],[-6.38988,57.585463],[-6.359428,57.588947],[-6.382585,57.563109],[-6.394508,57.569471],[-6.394593,57.56933],[-6.395204,57.55692],[-6.389826,57.549276],[-6.36706,57.531436],[-6.376184,57.530139],[-6.36516,57.515166],[-6.344607,57.503871],[-6.341892,57.502411],[-6.304604,57.482334],[-6.323843,57.484952],[-6.325118,57.483905],[-6.31179,57.455168],[-6.326251,57.458961],[-6.335279,57.490014],[-6.339894,57.485607],[-6.344994,57.480737],[-6.349483,57.495257],[-6.350516,57.496947],[-6.35144,57.49733],[-6.372301,57.502481],[-6.374831,57.500251],[-6.39961,57.528703],[-6.399814,57.508842],[-6.426524,57.496092],[-6.434729,57.484048],[-6.432418,57.470481],[-6.438731,57.478901],[-6.441766,57.481181],[-6.45263,57.48066],[-6.427099,57.518255],[-6.461752,57.499557],[-6.462175,57.4999],[-6.465671,57.498069],[-6.463367,57.500868],[-6.504319,57.53405],[-6.540884,57.547937],[-6.547463,57.548015],[-6.565514,57.548227],[-6.582686,57.588357],[-6.634776,57.60853],[-6.635374,57.603765],[-6.634745,57.582869],[-6.639012,57.574787],[-6.640713,57.561232],[-6.652282,57.549634],[-6.654446,57.54553],[-6.65381,57.545167],[-6.642313,57.551314],[-6.641652,57.552058],[-6.628737,57.545055],[-6.560581,57.508027],[-6.567921,57.493324],[-6.598479,57.509915],[-6.618547,57.501566],[-6.62837,57.502329],[-6.637471,57.502508],[-6.613384,57.467404],[-6.619788,57.46254],[-6.623518,57.459199],[-6.621479,57.458376],[-6.610582,57.456561],[-6.603912,57.460659],[-6.597763,57.454424],[-6.596441,57.454204],[-6.595186,57.45181],[-6.573863,57.430168],[-6.581869,57.431933],[-6.584937,57.421453],[-6.596902,57.44168],[-6.601783,57.445577],[-6.603752,57.445974],[-6.61408,57.441212],[-6.619959,57.431992],[-6.639676,57.442734],[-6.672276,57.47285],[-6.715451,57.512643],[-6.716673,57.513756],[-6.748125,57.500091],[-6.749535,57.483648],[-6.742952,57.464601],[-6.719976,57.449736],[-6.738458,57.452288],[-6.780176,57.457778],[-6.789652,57.421041],[-6.767229,57.428933],[-6.743122,57.417619],[-6.729136,57.395307],[-6.738925,57.389325],[-6.734683,57.385384],[-6.719478,57.371678],[-6.714019,57.37048],[-6.701802,57.371091],[-6.691639,57.365566],[-6.680964,57.363221],[-6.657651,57.358094],[-6.656541,57.35785],[-6.656246,57.357906],[-6.650517,57.356524],[-6.624645,57.350825],[-6.582126,57.333004],[-6.563555,57.338619],[-6.56898,57.367344],[-6.57298,57.388491],[-6.552157,57.385458],[-6.54219,57.397255],[-6.541962,57.393212],[-6.535175,57.398372],[-6.538405,57.413466],[-6.516555,57.393209],[-6.524635,57.369429],[-6.524182,57.369708],[-6.494073,57.398556],[-6.492066,57.404251],[-6.490048,57.402408],[-6.488711,57.403688],[-6.488369,57.400874],[-6.482629,57.395629],[-6.486222,57.383183],[-6.485898,57.380515],[-6.467807,57.377972],[-6.475529,57.370708],[-6.479861,57.366632],[-6.473012,57.364126],[-6.454523,57.359886],[-6.457801,57.339198],[-6.449312,57.342036],[-6.446391,57.347302],[-6.431869,57.347865],[-6.383599,57.363974],[-6.40293,57.355038],[-6.402983,57.341463],[-6.402636,57.339881],[-6.355302,57.323718],[-6.345464,57.310307],[-6.339442,57.305283],[-6.31814,57.301463],[-6.306207,57.299321],[-6.317908,57.299491],[-6.332762,57.299706],[-6.330808,57.298075],[-6.33475,57.299735],[-6.347773,57.299922],[-6.3676,57.313555],[-6.430284,57.339872],[-6.430654,57.339985],[-6.430624,57.33935],[-6.426854,57.323065],[-6.433443,57.325013],[-6.478228,57.312595],[-6.482783,57.310979],[-6.481885,57.292309],[-6.473814,57.289697],[-6.458567,57.286265],[-6.451491,57.262428],[-6.405007,57.232239],[-6.360143,57.236205],[-6.354221,57.240114],[-6.343159,57.252958],[-6.349212,57.229942],[-6.352436,57.229683],[-6.352959,57.228396],[-6.38196,57.225536],[-6.383869,57.222732],[-6.37148,57.204583],[-6.3593,57.194921],[-6.351259,57.188538],[-6.343453,57.186097],[-6.335315,57.18666],[-6.318192,57.19265],[-6.310456,57.19661],[-6.306129,57.198825],[-6.293751,57.205157],[-6.284834,57.201357],[-6.285251,57.197853],[-6.284456,57.197745],[-6.285371,57.196844],[-6.286607,57.186448],[-6.303257,57.174185],[-6.322312,57.160139],[-6.301994,57.163334],[-6.209676,57.177806],[-6.185613,57.175322],[-6.174058,57.174545],[-6.168129,57.198552],[-6.165296,57.19748],[-6.164962,57.198675],[-6.158865,57.195045],[-6.1307,57.184373],[-6.123388,57.194686],[-6.119034,57.189698],[-6.110325,57.186329],[-6.110723,57.180173],[-6.101949,57.170112],[-6.112667,57.137212],[-6.10872,57.135557],[-6.083777,57.126751],[-6.073863,57.138428],[-6.049751,57.175762],[-6.049948,57.180586],[-6.036572,57.182472],[-6.029682,57.184563],[-6.03322,57.205838],[-6.036884,57.227835],[-6.011265,57.206542],[-6.002933,57.199611],[-5.991677,57.168557],[-5.971815,57.17119],[-5.935398,57.17601],[-5.918748,57.173655],[-5.901333,57.172013],[-5.89759,57.179668],[-5.877978,57.176092],[-5.838024,57.189755],[-5.866417,57.171369],[-5.873837,57.170493],[-5.920075,57.161852],[-5.940023,57.146499],[-5.965775,57.141572],[-5.969247,57.13971],[-5.975321,57.13034],[-5.997756,57.124111],[-6.005045,57.114767],[-5.984988,57.107386],[-6,57.104012],[-6.00817,57.090105],[-5.999475,57.073922],[-6.02396,57.070479],[-6.035981,57.052509],[-6.029274,57.040192],[-6.017656,57.031285],[-6.018231,57.019893],[-6.017546,57.018633],[-6.014178,57.021179],[-6.010758,57.025122],[-6.00973,57.024539],[-6.009395,57.024793],[-6.001822,57.020151],[-5.983597,57.027587],[-5.972685,57.032036],[-5.966918,57.029934],[-5.939524,57.038037],[-5.899589,57.05792],[-5.902139,57.063574],[-5.89372,57.061168],[-5.893304,57.062777],[-5.896389,57.068106],[-5.890524,57.073548],[-5.888527,57.081282],[-5.879272,57.083983],[-5.860015,57.101827],[-5.853273,57.11156],[-5.827898,57.107609],[-5.804297,57.121082],[-5.805926,57.137035],[-5.797874,57.137638],[-5.791209,57.139972],[-5.805794,57.145744],[-5.800963,57.152644],[-5.800682,57.16636],[-5.808473,57.176165],[-5.800536,57.173472],[-5.800518,57.174354],[-5.787379,57.169007],[-5.78106,57.166862],[-5.737631,57.180429],[-5.673237,57.206712],[-5.669368,57.20889],[-5.668387,57.218704],[-5.66723,57.235408],[-5.648929,57.253784],[-5.647578,57.25514],[-5.64914,57.255916],[-5.667089,57.264834],[-5.708637,57.262235],[-5.729615,57.260761],[-5.72931,57.260936],[-5.732004,57.260767],[-5.713857,57.269791],[-5.711329,57.271239],[-5.753458,57.274701],[-5.811418,57.256874],[-5.812999,57.256843],[-5.863661,57.241612],[-5.85173,57.254065],[-5.885792,57.237971],[-5.914235,57.241325],[-5.904689,57.252883],[-5.922041,57.262748],[-5.936633,57.258886],[-5.982258,57.268082],[-5.993871,57.270419],[-5.997281,57.272619],[-5.997864,57.272743],[-6.008185,57.279651],[-6.020647,57.287683],[-6.036117,57.282735],[-6.073808,57.269342],[-6.074462,57.270456],[-6.083046,57.267705],[-6.075561,57.272329],[-6.077807,57.276154],[-6.046124,57.290503],[-6.041644,57.293267],[-6.057031,57.313664],[-6.117437,57.313681],[-6.168422,57.295387],[-6.131914,57.316254],[-6.104137,57.319184],[-6.106466,57.331732],[-6.106851,57.332022],[-6.10656,57.332241],[-6.107116,57.335233],[-6.098664,57.338196],[-6.09611,57.340122],[-6.097561,57.34113],[-6.104213,57.341454],[-6.104266,57.33842],[-6.116944,57.341745],[-6.146212,57.371033],[-6.13112,57.382501],[-6.128541,57.38446],[-6.12628,57.390236],[-6.138143,57.404451],[-6.139744,57.405483],[-6.175695,57.402278],[-6.180697,57.406219],[-6.184006,57.406204],[-6.202136,57.390487],[-6.197733,57.412139],[-6.181096,57.412619],[-6.146466,57.429628],[-6.145732,57.430085],[-6.142812,57.443404],[-6.137144,57.474393],[-6.148481,57.499969],[-6.138768,57.54651],[-6.146812,57.561834],[-6.148802,57.565623],[-6.137237,57.587736],[-6.150594,57.586519],[-6.191309,57.633252],[-6.235352,57.637362],[-6.25107,57.673475],[-6.303209,57.691591],[-6.301628,57.692571],[-6.296705,57.707233],[-6.296906,57.707572],[-6.330731,57.699605],[-6.352659,57.708114]]],[[[-5.789756,57.736757],[-5.820269,57.736726],[-5.822418,57.73057],[-5.801176,57.726517],[-5.789756,57.736757]]],[[[-6.295798,57.725666],[-6.298483,57.728926],[-6.30578,57.725391],[-6.295137,57.722632],[-6.293333,57.72222],[-6.295798,57.725666]]],[[[-3.943449,57.852694],[-3.964477,57.851836],[-3.926615,57.841774],[-3.943449,57.852694]]],[[[-5.601868,57.830169],[-5.633779,57.847861],[-5.63945,57.833199],[-5.60327,57.821349],[-5.601868,57.830169]]],[[[-5.459488,57.878985],[-5.472596,57.896292],[-5.477403,57.888017],[-5.478232,57.884459],[-5.459176,57.878448],[-5.459488,57.878985]]],[[[-5.210465,57.947165],[-5.210555,57.948134],[-5.216401,57.948519],[-5.228082,57.949287],[-5.239374,57.947788],[-5.234576,57.942475],[-5.233199,57.942126],[-5.212581,57.938446],[-5.210465,57.947165]]],[[[-5.440769,57.963666],[-5.446687,57.96702],[-5.453042,57.962452],[-5.440769,57.963666]]],[[[-5.510469,57.955802],[-5.497632,57.957594],[-5.509373,57.968009],[-5.525743,57.961074],[-5.519494,57.954614],[-5.510469,57.955802]]],[[[-5.338884,57.985185],[-5.348346,57.992039],[-5.34605,57.97982],[-5.338884,57.985185]]],[[[-5.434768,58.009162],[-5.440032,58.012574],[-5.445993,58.015907],[-5.454504,58.013312],[-5.458243,58.01212],[-5.44757,58.003882],[-5.434768,58.009162]]],[[[-5.384924,58.007157],[-5.38672,58.007418],[-5.403487,58.009857],[-5.401367,58.011556],[-5.39747,58.017244],[-5.409247,58.023837],[-5.421724,58.005403],[-5.397214,58.000174],[-5.384924,58.007157]]],[[[-5.42894,58.04132],[-5.423703,58.047432],[-5.442014,58.050227],[-5.444796,58.047995],[-5.448006,58.041734],[-5.437265,58.038731],[-5.432273,58.038277],[-5.42894,58.04132]]],[[[-5.261974,58.267314],[-5.279968,58.257779],[-5.277398,58.257226],[-5.247727,58.251491],[-5.241816,58.25244],[-5.241124,58.260439],[-5.257966,58.259992],[-5.261974,58.267314]]],[[[-5.166709,58.382533],[-5.179741,58.389472],[-5.182997,58.389212],[-5.203267,58.383993],[-5.206739,58.379793],[-5.203172,58.37631],[-5.17182,58.374088],[-5.166709,58.382533]]],[[[-4.295508,58.547519],[-4.295648,58.550036],[-4.300775,58.549528],[-4.303921,58.548648],[-4.295889,58.544417],[-4.295508,58.547519]]],[[[-4.335828,58.551284],[-4.333193,58.561792],[-4.346205,58.560701],[-4.347773,58.557015],[-4.346023,58.555929],[-4.349029,58.554061],[-4.350345,58.550965],[-4.346534,58.550214],[-4.336573,58.550277],[-4.335828,58.551284]]],[[[-4.351373,58.562842],[-4.35157,58.562854],[-4.355275,58.561669],[-4.350261,58.558558],[-4.351373,58.562842]]],[[[-3.762943,57.630523],[-3.791519,57.623184],[-3.824146,57.609681],[-3.828928,57.605966],[-3.859962,57.592346],[-3.860626,57.591787],[-3.869007,57.591085],[-3.870163,57.590605],[-3.887414,57.58954],[-3.930982,57.585873],[-3.945135,57.589113],[-3.990823,57.597157],[-3.963473,57.586673],[-4.009592,57.600291],[-4.010985,57.600701],[-4.012539,57.600974],[-4.016887,57.592607],[-4.058278,57.590856],[-4.076285,57.582615],[-4.047364,57.576773],[-4.040713,57.560149],[-4.102376,57.535069],[-4.112772,57.516061],[-4.147383,57.51843],[-4.14832,57.501688],[-4.178319,57.485274],[-4.234339,57.495696],[-4.228069,57.469205],[-4.23738,57.495387],[-4.242871,57.494023],[-4.288663,57.481154],[-4.300357,57.484936],[-4.349299,57.486815],[-4.325519,57.492453],[-4.372836,57.485625],[-4.336154,57.49144],[-4.343174,57.494375],[-4.372467,57.49282],[-4.359392,57.494721],[-4.395711,57.49934],[-4.38789,57.504158],[-4.373331,57.497478],[-4.371463,57.503035],[-4.35631,57.503007],[-4.382971,57.511603],[-4.33842,57.508375],[-4.234408,57.500776],[-4.227908,57.506615],[-4.187932,57.546086],[-4.174447,57.566206],[-4.140539,57.577458],[-4.136356,57.577169],[-4.132941,57.578318],[-4.091331,57.574132],[-4.112944,57.590095],[-4.102035,57.607459],[-4.093956,57.612593],[-4.045074,57.643618],[-3.994515,57.676489],[-4.013998,57.679908],[-4.036342,57.683823],[-4.085692,57.664786],[-4.127814,57.659114],[-4.165303,57.656936],[-4.165689,57.675869],[-4.231827,57.667729],[-4.359804,57.612371],[-4.360786,57.613786],[-4.374242,57.607636],[-4.388767,57.600994],[-4.392468,57.594168],[-4.393332,57.598905],[-4.398848,57.596381],[-4.403417,57.593554],[-4.402497,57.594711],[-4.406793,57.592745],[-4.407886,57.59309],[-4.415576,57.605832],[-4.412963,57.606902],[-4.38306,57.619137],[-4.380906,57.621843],[-4.347428,57.641968],[-4.347029,57.642306],[-4.337855,57.65007],[-4.304984,57.656461],[-4.298994,57.665084],[-4.284187,57.66474],[-4.283837,57.665219],[-4.301066,57.667626],[-4.288938,57.681219],[-4.239416,57.67999],[-4.238118,57.680438],[-4.239351,57.687992],[-4.207426,57.692651],[-4.167787,57.685127],[-4.073084,57.732287],[-4.049962,57.729412],[-4.017329,57.739821],[-4.009463,57.742329],[-4.007805,57.729581],[-4.016221,57.719909],[-4.036303,57.696805],[-4.03587,57.695268],[-4.014833,57.694959],[-3.982743,57.694481],[-3.974983,57.694661],[-3.916323,57.752563],[-3.852654,57.796048],[-3.793317,57.836452],[-3.772053,57.86686],[-3.784489,57.864877],[-3.812955,57.860219],[-3.828383,57.835367],[-3.859236,57.824516],[-3.909149,57.822665],[-3.952213,57.812267],[-3.959129,57.816835],[-3.947392,57.813526],[-3.909657,57.830123],[-3.893561,57.82514],[-3.907041,57.831273],[-3.960853,57.845949],[-4.022058,57.824455],[-4.046517,57.815851],[-4.037345,57.812111],[-4.048117,57.815287],[-4.048222,57.816546],[-4.098974,57.837215],[-4.099049,57.837231],[-4.10894,57.834866],[-4.109837,57.839508],[-4.110629,57.839675],[-4.112781,57.834157],[-4.138658,57.844016],[-4.138721,57.843979],[-4.119347,57.829207],[-4.163845,57.833676],[-4.193784,57.862642],[-4.262089,57.854473],[-4.267063,57.855045],[-4.296951,57.8519],[-4.300165,57.861816],[-4.305504,57.864929],[-4.337031,57.879993],[-4.320814,57.873851],[-4.344305,57.88753],[-4.295421,57.864226],[-4.289431,57.861954],[-4.273242,57.861403],[-4.27113,57.861804],[-4.27163,57.869743],[-4.232494,57.875133],[-4.213127,57.872821],[-4.212404,57.872958],[-4.210638,57.872524],[-4.175064,57.868269],[-4.166586,57.861676],[-4.161125,57.86033],[-4.135278,57.870164],[-4.13445,57.85919],[-4.144192,57.856153],[-4.141122,57.855395],[-4.121087,57.855704],[-4.111688,57.848499],[-4.07285,57.867172],[-4.036758,57.867542],[-4.024249,57.863504],[-4.011382,57.859347],[-4.013099,57.890747],[-3.992208,57.90308],[-4.001369,57.926389],[-4.009471,57.932389],[-4.004662,57.928516],[-4.027836,57.927228],[-4.033274,57.926925],[-4.068985,57.936796],[-4.081901,57.951324],[-4.054515,57.954642],[-4.046841,57.944096],[-4.029039,57.948543],[-4.008665,57.953627],[-4.028324,57.935867],[-4.029907,57.934436],[-4.028244,57.934454],[-4.003807,57.934707],[-3.983274,57.969562],[-3.966096,57.973026],[-3.871638,57.996399],[-3.84759,58.00658],[-3.833304,58.038894],[-3.804269,58.057055],[-3.745362,58.068199],[-3.697858,58.091415],[-3.673826,58.103143],[-3.65835,58.112601],[-3.651995,58.113785],[-3.651165,58.114189],[-3.658746,58.120093],[-3.643375,58.11539],[-3.637943,58.116402],[-3.622435,58.123051],[-3.612633,58.131593],[-3.509747,58.171234],[-3.508439,58.171792],[-3.506293,58.173724],[-3.428117,58.246602],[-3.424082,58.246235],[-3.38636,58.266867],[-3.381596,58.270451],[-3.365582,58.274037],[-3.297359,58.289285],[-3.291052,58.297808],[-3.265545,58.300557],[-3.220745,58.305404],[-3.155874,58.343265],[-3.107919,58.37118],[-3.086785,58.418275],[-3.083689,58.42036],[-3.070439,58.432194],[-3.0818,58.440935],[-3.122833,58.44878],[-3.060573,58.441797],[-3.049148,58.475722],[-3.05029,58.477525],[-3.078933,58.47679],[-3.104111,58.474113],[-3.108879,58.476014],[-3.112032,58.475932],[-3.11443,58.478226],[-3.119257,58.480149],[-3.120153,58.483701],[-3.151362,58.513517],[-3.134033,58.500906],[-3.128768,58.517775],[-3.12936,58.520114],[-3.127668,58.521299],[-3.127086,58.523161],[-3.125759,58.527408],[-3.067816,58.564156],[-3.060017,58.581316],[-3.072272,58.592074],[-3.042783,58.59807],[-3.034676,58.619164],[-3.025205,58.643774],[-3.048486,58.645012],[-3.099972,58.646671],[-3.157641,58.637263],[-3.159144,58.638329],[-3.161272,58.637988],[-3.176207,58.650414],[-3.189923,58.660121],[-3.226649,58.649741],[-3.277539,58.653327],[-3.31001,58.642955],[-3.344532,58.646704],[-3.355957,58.664938],[-3.376801,58.672165],[-3.381044,58.670338],[-3.408023,58.658712],[-3.413553,58.640445],[-3.379414,58.629037],[-3.349373,58.618985],[-3.352489,58.601465],[-3.368411,58.595248],[-3.370796,58.59568],[-3.371836,58.59454],[-3.41675,58.603987],[-3.462567,58.612249],[-3.502186,58.603448],[-3.526875,58.58764],[-3.512965,58.599343],[-3.525151,58.59689],[-3.552108,58.608284],[-3.53763,58.621104],[-3.535872,58.622952],[-3.630903,58.614841],[-3.632574,58.615272],[-3.633239,58.615217],[-3.634533,58.615777],[-3.655827,58.621266],[-3.662116,58.616048],[-3.672708,58.606544],[-3.673602,58.606512],[-3.673701,58.606429],[-3.67402,58.606497],[-3.696084,58.605705],[-3.698977,58.604789],[-3.72221,58.595119],[-3.740849,58.587356],[-3.776458,58.568005],[-3.779991,58.562895],[-3.800588,58.573543],[-3.800787,58.573613],[-3.859028,58.562814],[-3.89946,58.56603],[-3.905433,58.563232],[-3.909025,58.559012],[-3.906946,58.558827],[-3.900376,58.537665],[-3.910888,58.556822],[-3.911531,58.559235],[-3.920906,58.56007],[-3.931368,58.572049],[-3.933055,58.57318],[-3.943016,58.567056],[-3.944506,58.56782],[-3.944583,58.567774],[-3.944856,58.567999],[-3.957078,58.574262],[-3.95762,58.574221],[-4.004413,58.563501],[-4.018542,58.600523],[-4.019024,58.601657],[-4.025469,58.590868],[-4.043482,58.591117],[-4.047455,58.571968],[-4.064613,58.565327],[-4.071354,58.562717],[-4.072016,58.554134],[-4.072934,58.554396],[-4.073505,58.550542],[-4.081158,58.556742],[-4.090422,58.559384],[-4.093993,58.556746],[-4.126055,58.569399],[-4.128822,58.566386],[-4.131936,58.562324],[-4.132521,58.562358],[-4.132829,58.562023],[-4.152914,58.563341],[-4.156632,58.548033],[-4.176264,58.540788],[-4.186722,58.545778],[-4.208369,58.552045],[-4.211958,58.551573],[-4.20966,58.541823],[-4.213843,58.541447],[-4.213313,58.530041],[-4.240385,58.537335],[-4.240531,58.537007],[-4.221178,58.508889],[-4.211563,58.494901],[-4.222458,58.508867],[-4.236111,58.526351],[-4.26539,58.526648],[-4.266224,58.517932],[-4.26796,58.535221],[-4.270457,58.537436],[-4.299291,58.543113],[-4.331066,58.540353],[-4.352055,58.537399],[-4.383932,58.509578],[-4.403056,58.505982],[-4.419273,58.49501],[-4.420658,58.493408],[-4.4355,58.493818],[-4.44997,58.495218],[-4.4268,58.488768],[-4.439948,58.491384],[-4.443008,58.485908],[-4.450482,58.492212],[-4.442927,58.475837],[-4.42961,58.4811],[-4.423135,58.474232],[-4.43496,58.478351],[-4.446274,58.472679],[-4.476063,58.439977],[-4.473118,58.448411],[-4.483828,58.446894],[-4.459454,58.461513],[-4.478699,58.452812],[-4.444135,58.474961],[-4.451766,58.483909],[-4.459981,58.473122],[-4.45563,58.493807],[-4.450123,58.497117],[-4.454987,58.496199],[-4.439305,58.504928],[-4.40921,58.521662],[-4.419306,58.525462],[-4.420392,58.524902],[-4.420541,58.525927],[-4.430212,58.529565],[-4.4241,58.549675],[-4.436847,58.556244],[-4.455571,58.547723],[-4.456886,58.561572],[-4.457515,58.561762],[-4.492322,58.568097],[-4.496991,58.573658],[-4.509419,58.577399],[-4.540447,58.578489],[-4.584973,58.577829],[-4.591698,58.574274],[-4.598705,58.563556],[-4.594567,58.536992],[-4.593282,58.534672],[-4.615818,58.513158],[-4.615975,58.513857],[-4.620478,58.509536],[-4.618042,58.523064],[-4.618186,58.523707],[-4.642307,58.520445],[-4.642475,58.520388],[-4.669686,58.497635],[-4.664437,58.482738],[-4.724649,58.465446],[-4.736335,58.449553],[-4.757064,58.448843],[-4.71168,58.496197],[-4.71041,58.496987],[-4.712268,58.496346],[-4.707082,58.499555],[-4.653362,58.532752],[-4.664126,58.5486],[-4.654828,58.551318],[-4.663519,58.552432],[-4.703175,58.556168],[-4.717919,58.570302],[-4.734791,58.566377],[-4.735751,58.56859],[-4.735972,58.568568],[-4.739128,58.576373],[-4.742474,58.584081],[-4.754178,58.58714],[-4.766765,58.590428],[-4.768051,58.605181],[-4.791755,58.60078],[-4.765686,58.580566],[-4.79667,58.576251],[-4.805697,58.563867],[-4.78888,58.553075],[-4.778198,58.551185],[-4.812814,58.510786],[-4.802252,58.534227],[-4.831186,58.522511],[-4.793334,58.54632],[-4.809066,58.553701],[-4.818927,58.562265],[-4.819081,58.562722],[-4.820526,58.562598],[-4.821425,58.56967],[-4.822199,58.571964],[-4.821732,58.572086],[-4.824861,58.596694],[-4.848853,58.599448],[-4.876387,58.614959],[-4.936241,58.616917],[-4.946,58.608469],[-4.954854,58.610974],[-4.956195,58.610487],[-5.003462,58.624712],[-5.006992,58.625709],[-5.010698,58.591122],[-5.013407,58.589972],[-5.01529,58.579192],[-5.013968,58.577698],[-5.05091,58.540797],[-5.065494,58.539377],[-5.072178,58.536531],[-5.086157,58.537362],[-5.091215,58.536869],[-5.093785,58.535121],[-5.113429,58.521759],[-5.125446,58.490038],[-5.125809,58.489081],[-5.114912,58.478553],[-5.101757,58.482736],[-5.088813,58.478635],[-5.083062,58.476812],[-5.086377,58.469249],[-5.055767,58.463921],[-5.077071,58.456967],[-5.016593,58.452308],[-5.01571,58.445086],[-4.991007,58.440316],[-5.001236,58.436062],[-4.993933,58.423402],[-5.031924,58.44867],[-5.045855,58.44975],[-5.077096,58.451041],[-5.07745,58.45089],[-5.065146,58.445979],[-5.085954,58.446046],[-5.087259,58.44605],[-5.10026,58.440551],[-5.084783,58.437761],[-5.08301,58.437489],[-5.085215,58.437618],[-5.102769,58.438639],[-5.115704,58.427935],[-5.083552,58.418618],[-5.072413,58.415387],[-5.083222,58.41484],[-5.110137,58.413473],[-5.099391,58.408772],[-5.093345,58.406845],[-5.090817,58.40695],[-5.082583,58.407539],[-5.068615,58.408538],[-5.066687,58.414447],[-5.06664,58.414808],[-5.031249,58.410546],[-5.040058,58.410914],[-5.032481,58.409839],[-5.051722,58.411401],[-5.052377,58.411428],[-5.070753,58.402402],[-5.066111,58.40287],[-5.054077,58.404427],[-5.062921,58.397616],[-5.062372,58.397524],[-5.032215,58.392827],[-5.044518,58.386218],[-5.036986,58.383251],[-5.019596,58.376818],[-5.021147,58.377009],[-5.019848,58.376497],[-5.045295,58.373317],[-5.039092,58.379219],[-5.05958,58.38174],[-5.068035,58.381999],[-5.06687,58.384326],[-5.069336,58.388688],[-5.075228,58.387429],[-5.077996,58.392827],[-5.087453,58.390847],[-5.093935,58.388497],[-5.089872,58.394018],[-5.116252,58.395864],[-5.132191,58.406173],[-5.141969,58.412045],[-5.153271,58.400825],[-5.144461,58.385284],[-5.175929,58.361952],[-5.154585,58.352902],[-5.182876,58.351075],[-5.182317,58.350704],[-5.174672,58.350552],[-5.175092,58.345905],[-5.159501,58.335543],[-5.158704,58.335326],[-5.158888,58.335135],[-5.158083,58.3346],[-5.169599,58.32203],[-5.169377,58.321902],[-5.159025,58.320545],[-5.146361,58.327119],[-5.144519,58.32634],[-5.143121,58.327469],[-5.127497,58.319943],[-5.146746,58.311943],[-5.140539,58.311416],[-5.127322,58.310619],[-5.128255,58.310223],[-5.147066,58.302239],[-5.144705,58.301409],[-5.134295,58.298157],[-5.137467,58.294241],[-5.139546,58.291339],[-5.120687,58.293881],[-5.120704,58.293793],[-5.120622,58.293805],[-5.120044,58.28356],[-5.122575,58.283953],[-5.122882,58.282339],[-5.126536,58.284568],[-5.132758,58.285533],[-5.134299,58.27791],[-5.134285,58.277872],[-5.122925,58.281956],[-5.123181,58.280255],[-5.108024,58.283319],[-5.108967,58.27469],[-5.107763,58.274209],[-5.060925,58.258783],[-5.054489,58.257224],[-5.030697,58.255205],[-5.021911,58.258743],[-5.031812,58.262166],[-5.009075,58.263899],[-4.920615,58.255866],[-4.995008,58.250902],[-4.950259,58.232039],[-4.938953,58.217003],[-4.998245,58.238986],[-5.007467,58.254896],[-5.020943,58.25758],[-5.025556,58.250209],[-5.023752,58.249771],[-5.026749,58.249971],[-5.053667,58.246895],[-5.054387,58.24599],[-5.055867,58.246643],[-5.056272,58.246597],[-5.09167,58.262422],[-5.10911,58.270099],[-5.131364,58.263184],[-5.128889,58.259818],[-5.127056,58.258954],[-5.125983,58.259199],[-5.123676,58.254166],[-5.120026,58.247414],[-5.128727,58.258573],[-5.151729,58.253321],[-5.15252,58.253663],[-5.154081,58.252742],[-5.165528,58.258359],[-5.172107,58.244122],[-5.158483,58.233626],[-5.161746,58.235374],[-5.158825,58.232964],[-5.170373,58.239996],[-5.17332,58.241574],[-5.173225,58.241779],[-5.174028,58.245501],[-5.175869,58.247018],[-5.181135,58.251072],[-5.203647,58.246461],[-5.205115,58.247426],[-5.220046,58.254046],[-5.229198,58.245219],[-5.232039,58.253106],[-5.241123,58.251795],[-5.241689,58.249365],[-5.241378,58.251758],[-5.247747,58.250838],[-5.242748,58.249761],[-5.304002,58.227],[-5.310456,58.224157],[-5.317941,58.238079],[-5.318827,58.239126],[-5.343521,58.242845],[-5.337708,58.251088],[-5.33744,58.251694],[-5.367738,58.251238],[-5.37604,58.264218],[-5.403714,58.236855],[-5.404195,58.235578],[-5.361749,58.217897],[-5.332239,58.180627],[-5.317576,58.178052],[-5.305511,58.176187],[-5.305893,58.175998],[-5.30413,58.175688],[-5.318046,58.169938],[-5.309974,58.162346],[-5.278785,58.166971],[-5.280214,58.166416],[-5.309632,58.155002],[-5.269435,58.147587],[-5.237644,58.155471],[-5.239545,58.146595],[-5.244908,58.147611],[-5.25207,58.14746],[-5.258304,58.137538],[-5.269451,58.137507],[-5.298054,58.136974],[-5.275041,58.126784],[-5.263166,58.121522],[-5.262203,58.121105],[-5.262164,58.121078],[-5.298344,58.119887],[-5.302887,58.119733],[-5.278871,58.114623],[-5.27922,58.11428],[-5.278961,58.114221],[-5.28425,58.109348],[-5.285795,58.107834],[-5.274476,58.11088],[-5.2667,58.101804],[-5.277212,58.096958],[-5.275228,58.084737],[-5.27502,58.084423],[-5.287463,58.083089],[-5.286266,58.080956],[-5.279196,58.073728],[-5.282243,58.073784],[-5.299591,58.065425],[-5.300556,58.064229],[-5.323899,58.067908],[-5.339329,58.080275],[-5.340535,58.080114],[-5.352655,58.074945],[-5.356968,58.057687],[-5.380575,58.087411],[-5.39485,58.093137],[-5.426726,58.10591],[-5.436224,58.102181],[-5.44614,58.097715],[-5.446485,58.080016],[-5.457857,58.076983],[-5.443991,58.062074],[-5.412545,58.052781],[-5.419789,58.033975],[-5.420155,58.032952],[-5.415733,58.032492],[-5.362409,58.028135],[-5.360997,58.026793],[-5.357029,58.026378],[-5.347294,58.013537],[-5.355262,58.006654],[-5.330663,58.006661],[-5.307631,57.988528],[-5.309838,57.982357],[-5.310818,57.978983],[-5.246145,57.97087],[-5.225493,57.958008],[-5.192234,57.957456],[-5.192395,57.949124],[-5.192489,57.944268],[-5.184587,57.94932],[-5.173915,57.95614],[-5.176337,57.949527],[-5.179456,57.941009],[-5.22145,57.925678],[-5.223539,57.924878],[-5.16654,57.901607],[-5.187456,57.904781],[-5.165557,57.892692],[-5.152339,57.895952],[-5.132825,57.879973],[-5.100496,57.870102],[-5.071279,57.827177],[-5.086092,57.829938],[-5.127115,57.874902],[-5.151221,57.875608],[-5.224023,57.910231],[-5.242371,57.912755],[-5.239655,57.917641],[-5.297277,57.910378],[-5.298379,57.91051],[-5.298696,57.910472],[-5.309153,57.9118],[-5.330408,57.914342],[-5.340034,57.922196],[-5.362287,57.937709],[-5.370841,57.930722],[-5.371258,57.930128],[-5.371555,57.930139],[-5.372048,57.929736],[-5.379422,57.930063],[-5.404292,57.931161],[-5.39402,57.912631],[-5.393642,57.912405],[-5.340086,57.906461],[-5.311051,57.87878],[-5.247458,57.867095],[-5.231551,57.847075],[-5.325443,57.865831],[-5.347372,57.885242],[-5.364891,57.890857],[-5.376071,57.894418],[-5.422285,57.90912],[-5.435223,57.884812],[-5.43106,57.883001],[-5.439211,57.877313],[-5.440951,57.874041],[-5.453986,57.866995],[-5.45668,57.865114],[-5.455435,57.857037],[-5.454863,57.856462],[-5.455329,57.85635],[-5.454492,57.850919],[-5.488066,57.856122],[-5.523344,57.865169],[-5.536242,57.867936],[-5.536552,57.868553],[-5.540562,57.86958],[-5.544376,57.884077],[-5.552597,57.900376],[-5.560375,57.902571],[-5.556223,57.907559],[-5.560746,57.916515],[-5.564211,57.917933],[-5.566744,57.917237],[-5.577719,57.910297],[-5.581385,57.919554],[-5.618402,57.924338],[-5.620638,57.922594],[-5.652145,57.894117],[-5.655867,57.889017],[-5.652983,57.887651],[-5.64688,57.885208],[-5.647251,57.884934],[-5.643215,57.883021],[-5.655531,57.878821],[-5.655838,57.878594],[-5.64241,57.856047],[-5.604999,57.850557],[-5.58192,57.836074],[-5.597686,57.801876],[-5.580488,57.798849],[-5.579139,57.790484],[-5.579424,57.790445],[-5.579372,57.790413],[-5.582862,57.789971],[-5.604675,57.786961],[-5.606356,57.791606],[-5.608385,57.796193],[-5.622147,57.789811],[-5.596294,57.773207],[-5.603518,57.765103],[-5.622907,57.767817],[-5.668831,57.80005],[-5.661385,57.822681],[-5.662147,57.823893],[-5.676343,57.833411],[-5.685028,57.834543],[-5.682909,57.837811],[-5.69169,57.843693],[-5.691666,57.843742],[-5.692576,57.843832],[-5.683518,57.865069],[-5.683969,57.865311],[-5.710882,57.867026],[-5.726135,57.867996],[-5.739972,57.866017],[-5.760511,57.870174],[-5.761093,57.87021],[-5.778993,57.858794],[-5.789904,57.859788],[-5.810704,57.858399],[-5.813763,57.85542],[-5.807909,57.823844],[-5.801069,57.793377],[-5.812246,57.752208],[-5.812874,57.749892],[-5.759829,57.731436],[-5.696835,57.730152],[-5.696351,57.730142],[-5.685846,57.717651],[-5.69351,57.711724],[-5.675052,57.71326],[-5.671659,57.701418],[-5.687845,57.699117],[-5.681992,57.68901],[-5.684254,57.689935],[-5.683905,57.689051],[-5.703349,57.697742],[-5.707434,57.699412],[-5.730855,57.698537],[-5.729521,57.70075],[-5.737998,57.708294],[-5.789194,57.697412],[-5.786802,57.683712],[-5.818603,57.639525],[-5.818729,57.639274],[-5.80008,57.640591],[-5.788598,57.636206],[-5.784047,57.635789],[-5.763335,57.626548],[-5.755622,57.623597],[-5.733122,57.606445],[-5.727642,57.585417],[-5.68575,57.576942],[-5.685393,57.576162],[-5.68145,57.567556],[-5.701452,57.57068],[-5.703821,57.563987],[-5.679149,57.556037],[-5.670292,57.553181],[-5.668529,57.545647],[-5.634318,57.555528],[-5.59006,57.556496],[-5.533773,57.552228],[-5.523779,57.543858],[-5.534922,57.531226],[-5.562036,57.538644],[-5.562539,57.531982],[-5.577338,57.536319],[-5.574024,57.529374],[-5.580664,57.534701],[-5.62314,57.532287],[-5.621607,57.521143],[-5.655824,57.545606],[-5.650192,57.51157],[-5.649645,57.50891],[-5.654966,57.512855],[-5.69205,57.52929],[-5.697251,57.530041],[-5.698105,57.531971],[-5.699096,57.532409],[-5.707945,57.554189],[-5.70887,57.556275],[-5.71704,57.551759],[-5.706598,57.53971],[-5.727245,57.547624],[-5.741663,57.543182],[-5.741816,57.544188],[-5.742723,57.543974],[-5.743355,57.553982],[-5.768268,57.559435],[-5.790766,57.57304],[-5.811617,57.585636],[-5.820252,57.577252],[-5.822832,57.577537],[-5.823954,57.576726],[-5.829125,57.578232],[-5.836254,57.579019],[-5.838856,57.571585],[-5.872878,57.474141],[-5.854393,57.4433],[-5.829662,57.441419],[-5.828588,57.440624],[-5.806145,57.439033],[-5.820903,57.423782],[-5.823414,57.416316],[-5.81468,57.403761],[-5.807478,57.39891],[-5.812203,57.400199],[-5.807013,57.392732],[-5.806007,57.391284],[-5.808023,57.392701],[-5.820643,57.401573],[-5.819601,57.39235],[-5.819168,57.388514],[-5.822258,57.389156],[-5.822531,57.386878],[-5.830016,57.39077],[-5.831266,57.391029],[-5.821956,57.363458],[-5.813381,57.362276],[-5.808075,57.376238],[-5.788357,57.346378],[-5.787734,57.346448],[-5.738453,57.353608],[-5.716744,57.362523],[-5.688721,57.378484],[-5.662134,57.386595],[-5.64608,57.391488],[-5.622574,57.401104],[-5.607688,57.42106],[-5.614536,57.400769],[-5.612398,57.398453],[-5.59406,57.39097],[-5.603188,57.388475],[-5.602731,57.387979],[-5.625397,57.3824],[-5.633942,57.380061],[-5.635388,57.369056],[-5.6166,57.365812],[-5.597887,57.36501],[-5.607386,57.361395],[-5.604211,57.356132],[-5.601594,57.355244],[-5.556073,57.357946],[-5.502839,57.390905],[-5.506206,57.393217],[-5.492891,57.401849],[-5.46708,57.418564],[-5.442166,57.422693],[-5.4354,57.415358],[-5.446521,57.403128],[-5.457441,57.39111],[-5.471478,57.384159],[-5.472569,57.382792],[-5.506144,57.366975],[-5.534536,57.352882],[-5.577296,57.353795],[-5.582223,57.343494],[-5.650422,57.33442],[-5.656961,57.334706],[-5.661683,57.334912],[-5.65725,57.337615],[-5.645958,57.344499],[-5.646143,57.345641],[-5.655773,57.344655],[-5.663705,57.340402],[-5.685833,57.341408],[-5.684905,57.336997],[-5.681454,57.328257],[-5.668634,57.327251],[-5.680954,57.32699],[-5.68055,57.325967],[-5.692051,57.326754],[-5.69747,57.326639],[-5.716749,57.315123],[-5.729425,57.296646],[-5.718129,57.28352],[-5.71828,57.283518],[-5.727581,57.282979],[-5.725407,57.282875],[-5.655482,57.285111],[-5.652121,57.286005],[-5.647906,57.287126],[-5.618994,57.274186],[-5.600102,57.281145],[-5.592574,57.270851],[-5.55823,57.283578],[-5.555292,57.276745],[-5.53509,57.28216],[-5.52922,57.280186],[-5.526462,57.280599],[-5.526152,57.279154],[-5.521738,57.277669],[-5.518856,57.281809],[-5.517334,57.289414],[-5.516769,57.284806],[-5.513426,57.289609],[-5.498991,57.292804],[-5.490969,57.305052],[-5.486846,57.307869],[-5.484302,57.309922],[-5.460424,57.310654],[-5.486531,57.306074],[-5.488623,57.297187],[-5.497797,57.288332],[-5.513741,57.277922],[-5.469125,57.247203],[-5.456191,57.239939],[-5.415552,57.230036],[-5.409795,57.230965],[-5.405657,57.232686],[-5.408439,57.231184],[-5.403932,57.231911],[-5.390543,57.233064],[-5.404491,57.231376],[-5.4119,57.224283],[-5.423,57.213651],[-5.449337,57.223259],[-5.476741,57.233246],[-5.531294,57.271223],[-5.583917,57.255689],[-5.595934,57.258716],[-5.615742,57.254858],[-5.636843,57.249981],[-5.647382,57.238146],[-5.656412,57.227999],[-5.655793,57.227845],[-5.646148,57.225667],[-5.621305,57.220052],[-5.622182,57.218386],[-5.631719,57.200253],[-5.643232,57.19612],[-5.662964,57.189032],[-5.688575,57.173042],[-5.693014,57.169074],[-5.691778,57.167205],[-5.688062,57.167628],[-5.689081,57.163126],[-5.682404,57.153024],[-5.662607,57.143484],[-5.659626,57.142659],[-5.638104,57.144027],[-5.610893,57.145751],[-5.561539,57.133606],[-5.552655,57.112634],[-5.527318,57.101861],[-5.526976,57.101856],[-5.490928,57.105371],[-5.487393,57.101281],[-5.487065,57.101276],[-5.483361,57.104135],[-5.426697,57.115187],[-5.391813,57.108932],[-5.481997,57.10122],[-5.486252,57.099209],[-5.509537,57.097425],[-5.519994,57.081433],[-5.56721,57.096006],[-5.59201,57.119197],[-5.636223,57.124866],[-5.653859,57.127122],[-5.722013,57.118196],[-5.725524,57.101173],[-5.79443,57.067122],[-5.79673,57.065915],[-5.781618,57.044294],[-5.762045,57.051443],[-5.756192,57.041487],[-5.743745,57.030825],[-5.727496,57.035484],[-5.70763,57.041176],[-5.701499,57.039559],[-5.684014,57.037268],[-5.681241,57.03421],[-5.663986,57.029651],[-5.680483,57.025825],[-5.682725,57.023447],[-5.679003,57.011042],[-5.671109,57.003182],[-5.661202,56.994368],[-5.657284,56.993071],[-5.62242,56.983588],[-5.619552,56.982807],[-5.616445,56.982846],[-5.551829,56.998896],[-5.535292,57.000997],[-5.524024,56.994397],[-5.589295,56.980322],[-5.603518,56.984466],[-5.629262,56.972922],[-5.635618,56.969797],[-5.708658,56.991023],[-5.724505,57.014206],[-5.727442,57.018305],[-5.824478,57.008553],[-5.835498,56.99731],[-5.847215,56.972584],[-5.847151,56.972566],[-5.827934,56.973959],[-5.81716,56.960673],[-5.843136,56.966518],[-5.846428,56.964708],[-5.859476,56.947531],[-5.859434,56.946224],[-5.852859,56.94077],[-5.865424,56.934989],[-5.866757,56.933601],[-5.855961,56.926891],[-5.871719,56.928433],[-5.874772,56.925253],[-5.875962,56.925429],[-5.883417,56.9199],[-5.872481,56.909725],[-5.850571,56.91327],[-5.843165,56.907645],[-5.851359,56.901458],[-5.851131,56.899694],[-5.853275,56.900011],[-5.861636,56.893696],[-5.861847,56.899156],[-5.894009,56.904258],[-5.899796,56.895072],[-5.910559,56.893663],[-5.923442,56.890196],[-5.92282,56.887931],[-5.918352,56.88284],[-5.887174,56.874187],[-5.863786,56.884221],[-5.830294,56.887402],[-5.827581,56.888343],[-5.827291,56.887687],[-5.80541,56.88976],[-5.804965,56.889993],[-5.788427,56.891367],[-5.737722,56.896148],[-5.72986,56.892355],[-5.740409,56.888706],[-5.740508,56.888501],[-5.728061,56.88588],[-5.725596,56.885429],[-5.72576,56.885396],[-5.723526,56.884925],[-5.731398,56.884229],[-5.755633,56.879209],[-5.788861,56.859715],[-5.753903,56.854874],[-5.726225,56.851033],[-5.720113,56.855886],[-5.690331,56.879512],[-5.689008,56.879285],[-5.688685,56.879545],[-5.678128,56.879735],[-5.677562,56.87732],[-5.665999,56.875334],[-5.676483,56.872723],[-5.676002,56.870673],[-5.69854,56.863462],[-5.705989,56.856307],[-5.71918,56.843628],[-5.760094,56.847367],[-5.770696,56.844245],[-5.785932,56.836678],[-5.795206,56.837023],[-5.813849,56.831525],[-5.816704,56.828028],[-5.829093,56.834784],[-5.857943,56.830142],[-5.862791,56.820656],[-5.865004,56.810662],[-5.746762,56.784158],[-5.780073,56.782678],[-5.795307,56.790948],[-5.800797,56.787265],[-5.80385,56.783986],[-5.813642,56.785305],[-5.822838,56.785697],[-5.831038,56.769891],[-5.852644,56.779794],[-5.85505,56.767596],[-5.858154,56.777866],[-5.860893,56.778574],[-5.862325,56.778136],[-5.886934,56.785277],[-5.8896,56.766484],[-5.861855,56.758493],[-5.852842,56.762246],[-5.852438,56.752578],[-5.847553,56.750548],[-5.844574,56.751218],[-5.834131,56.744971],[-5.84655,56.750132],[-5.852034,56.747119],[-5.840512,56.74026],[-5.870228,56.741677],[-5.869694,56.755478],[-5.886392,56.763334],[-5.909454,56.749631],[-5.928371,56.761386],[-5.965328,56.78432],[-5.972167,56.778196],[-5.980949,56.769052],[-5.982233,56.769178],[-5.982391,56.769036],[-5.99674,56.770603],[-6.013845,56.77228],[-6.005662,56.763136],[-6.014885,56.769323],[-6.017389,56.763895],[-6.049772,56.766601],[-6.05963,56.757555],[-6.117969,56.765601],[-6.167797,56.751497],[-6.179867,56.753925],[-6.186051,56.754706],[-6.185595,56.745488],[-6.181469,56.744178],[-6.18397,56.736943],[-6.185176,56.737027],[-6.1851,56.735488],[-6.20011,56.738072],[-6.201657,56.73818],[-6.211226,56.725707],[-6.211405,56.725723],[-6.226773,56.726019],[-6.218789,56.704311],[-6.218319,56.70315],[-6.188116,56.688016],[-6.142226,56.68317],[-6.117305,56.695395],[-6.115635,56.694712],[-6.109902,56.69747],[-6.111468,56.693005],[-6.101798,56.689043],[-6.09641,56.687887],[-6.05152,56.69304],[-6.030203,56.680307],[-5.987418,56.684874],[-5.974267,56.672428],[-5.972414,56.681781],[-5.945712,56.688641],[-5.93823,56.683682],[-5.934601,56.686011],[-5.926214,56.675713],[-5.919569,56.676996],[-5.904109,56.679996],[-5.895908,56.673921],[-5.893506,56.673809],[-5.860879,56.6809],[-5.835553,56.674909],[-5.779205,56.705946],[-5.777674,56.716795],[-5.769843,56.708275],[-5.769499,56.708177],[-5.71804,56.709857],[-5.663959,56.680092],[-5.616016,56.689088],[-5.544596,56.687782],[-5.65957,56.676567],[-5.687332,56.6847],[-5.704193,56.682187],[-5.721064,56.696788],[-5.746817,56.701944],[-5.747143,56.7018],[-5.746759,56.70169],[-5.805531,56.67348],[-5.819126,56.666945],[-5.83228,56.663922],[-5.839777,56.660581],[-5.850467,56.65974],[-5.876574,56.65373],[-5.876618,56.650123],[-5.868908,56.642538],[-5.841194,56.634578],[-5.838697,56.631287],[-5.827408,56.628071],[-5.830686,56.62115],[-5.847001,56.628259],[-5.883196,56.640444],[-5.891545,56.6394],[-5.90626,56.657808],[-5.909598,56.657391],[-5.909318,56.657384],[-5.923575,56.652317],[-5.935927,56.654093],[-6.00451,56.645475],[-6.000971,56.619811],[-5.978329,56.61035],[-5.95964,56.582447],[-5.906655,56.552343],[-5.904588,56.551167],[-5.883149,56.547815],[-5.784123,56.532808],[-5.748711,56.564322],[-5.748181,56.564838],[-5.748278,56.564707],[-5.748127,56.564841],[-5.740473,56.56222],[-5.771397,56.532545],[-5.764676,56.526782],[-5.754754,56.518853],[-5.745633,56.525054],[-5.695562,56.512263],[-5.684067,56.49737],[-5.573445,56.539377],[-5.552093,56.551207],[-5.526861,56.573449],[-5.494858,56.603775],[-5.50746,56.610479],[-5.528504,56.61624],[-5.514257,56.614093],[-5.518923,56.616574],[-5.490744,56.610547],[-5.488323,56.610182],[-5.483954,56.617434],[-5.470271,56.615281],[-5.434162,56.642762],[-5.398782,56.646892],[-5.385107,56.655777],[-5.355611,56.675747],[-5.360829,56.682642],[-5.350044,56.686584],[-5.3273,56.694888],[-5.308113,56.707846],[-5.304769,56.708001],[-5.298339,56.712278],[-5.306422,56.713991],[-5.297982,56.712515],[-5.297916,56.712188],[-5.288362,56.710163],[-5.284129,56.700629],[-5.274059,56.712412],[-5.269444,56.713587],[-5.242651,56.720403],[-5.256509,56.731999],[-5.253356,56.734326],[-5.233595,56.755993],[-5.240256,56.766754],[-5.2195,56.76567],[-5.181015,56.789011],[-5.12432,56.825205],[-5.12357,56.82686],[-5.123805,56.834065],[-5.149146,56.838627],[-5.179819,56.846601],[-5.253627,56.842904],[-5.321318,56.85055],[-5.329104,56.857749],[-5.192053,56.854692],[-5.14277,56.839053],[-5.122461,56.839093],[-5.116015,56.839204],[-5.115993,56.839105],[-5.111139,56.839113],[-5.102072,56.826594],[-5.098287,56.834749],[-5.084457,56.83262],[-5.108908,56.822829],[-5.111933,56.820486],[-5.111716,56.81949],[-5.211505,56.74313],[-5.229095,56.729423],[-5.247405,56.703029],[-5.185545,56.699944],[-5.185708,56.691944],[-5.167953,56.692611],[-5.162629,56.684872],[-5.012881,56.71402],[-4.969455,56.714557],[-5.051099,56.704887],[-5.106345,56.69187],[-5.116323,56.680886],[-5.146847,56.677108],[-5.186159,56.68878],[-5.223766,56.686136],[-5.252535,56.665517],[-5.253044,56.666922],[-5.275267,56.669987],[-5.277381,56.669928],[-5.317391,56.65341],[-5.326416,56.647119],[-5.300867,56.64731],[-5.298687,56.643624],[-5.297719,56.643514],[-5.298327,56.643015],[-5.29592,56.638945],[-5.325008,56.620691],[-5.325037,56.620672],[-5.297372,56.598001],[-5.274671,56.600722],[-5.249668,56.59216],[-5.216473,56.602157],[-5.213821,56.631917],[-5.152978,56.62667],[-5.15307,56.612825],[-5.118843,56.616564],[-5.079951,56.609454],[-5.086745,56.596242],[-5.108902,56.587487],[-5.095432,56.573882],[-5.099674,56.555286],[-5.114463,56.547972],[-5.097525,56.535734],[-5.078657,56.559882],[-5.064669,56.562905],[-5.096048,56.528521],[-5.061743,56.527107],[-5.051885,56.536177],[-4.99432,56.542131],[-4.985127,56.556487],[-4.971142,56.554566],[-4.951532,56.56368],[-4.947472,56.575727],[-4.878522,56.56605],[-4.83861,56.57384],[-4.830025,56.569218],[-4.8011,56.573599],[-4.779443,56.587769],[-4.726188,56.587807],[-4.702229,56.605555],[-4.686575,56.600628],[-4.626424,56.615597],[-4.636796,56.625025],[-4.618326,56.637781],[-4.629811,56.655016],[-4.664137,56.639797],[-4.71542,56.642328],[-4.717536,56.676588],[-4.657569,56.674742],[-4.592016,56.693182],[-4.591208,56.704469],[-4.605917,56.707959],[-4.575995,56.734789],[-4.589872,56.759881],[-4.546793,56.772367],[-4.549653,56.781947],[-4.520512,56.805259],[-4.469098,56.777858],[-4.441844,56.773843],[-4.374264,56.832259],[-4.343325,56.821287],[-4.33051,56.823931],[-4.329722,56.836968],[-4.303959,56.851397],[-4.227696,56.857603],[-4.216954,56.869],[-4.1994,56.870443],[-4.191918,56.877467],[-4.205541,56.884447],[-4.174492,56.911707],[-4.168271,56.904698],[-4.111458,56.894731],[-4.040887,56.896174],[-4.034756,56.901488],[-4.022892,56.888753],[-4.01155,56.898021],[-3.999385,56.89029],[-3.967763,56.89928],[-3.969406,56.929377],[-3.950685,56.947116],[-3.938613,56.948621],[-3.936367,56.935429],[-3.900288,56.931841],[-3.894724,56.922756],[-3.854833,56.922788],[-3.824278,56.938387],[-3.801646,56.93588],[-3.787843,56.963231],[-3.760391,56.974385],[-3.74823,56.993109],[-3.744396,57.016712],[-3.757391,57.037797],[-3.73244,57.056743],[-3.747101,57.057667],[-3.758064,57.069306],[-3.749733,57.076283],[-3.714891,57.078988],[-3.683694,57.095239],[-3.654698,57.115902],[-3.61636,57.11271],[-3.583256,57.136249],[-3.560358,57.141055],[-3.53609,57.167261],[-3.51592,57.165296],[-3.487743,57.177475],[-3.452279,57.176889],[-3.432102,57.204163],[-3.446798,57.212084],[-3.429673,57.223317],[-3.463813,57.238862],[-3.447601,57.256496],[-3.461317,57.27237],[-3.449232,57.280925],[-3.493875,57.296167],[-3.493878,57.30485],[-3.394567,57.371074],[-3.398767,57.3829],[-3.385683,57.388807],[-3.412844,57.423645],[-3.433289,57.420984],[-3.47088,57.43342],[-3.502772,57.460678],[-3.566255,57.446928],[-3.60985,57.447358],[-3.617764,57.435438],[-3.659853,57.428155],[-3.700604,57.43623],[-3.682708,57.489831],[-3.705345,57.512326],[-3.690886,57.520227],[-3.722322,57.528642],[-3.711828,57.534082],[-3.729716,57.560981],[-3.712288,57.567175],[-3.748682,57.590892],[-3.738753,57.598179],[-3.762943,57.630523]]],[[[-3.105565,58.671453],[-3.100601,58.684641],[-3.115712,58.69643],[-3.138728,58.667001],[-3.105565,58.671453]]]]}',
      metadata: ["Highland"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.616386,55.930439],[-4.745367,55.944275],[-4.777088,55.960732],[-4.798735,55.962607],[-4.803175,55.956806],[-4.806212,55.958066],[-4.806288,55.957962],[-4.811379,55.960208],[-4.817768,55.962857],[-4.878518,55.942559],[-4.879146,55.939194],[-4.881964,55.918446],[-4.882416,55.915112],[-4.881691,55.914768],[-4.871409,55.909887],[-4.880847,55.903412],[-4.896195,55.892877],[-4.892723,55.881681],[-4.888382,55.87478],[-4.888381,55.874699],[-4.844224,55.875259],[-4.799697,55.892608],[-4.794168,55.87223],[-4.750922,55.849763],[-4.729383,55.853268],[-4.701201,55.840915],[-4.643322,55.839081],[-4.62302,55.849831],[-4.622807,55.861594],[-4.597299,55.862396],[-4.610385,55.869067],[-4.599099,55.879673],[-4.61915,55.889029],[-4.613215,55.906031],[-4.635026,55.913726],[-4.616386,55.930439]]]}',
      metadata: ["Inverclyde"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.846244,55.818961],[-2.862187,55.839857],[-2.899043,55.850752],[-2.894506,55.859323],[-2.913542,55.856568],[-2.937159,55.863491],[-2.966911,55.91185],[-2.988806,55.912828],[-3.017745,55.901634],[-3.077844,55.919366],[-3.088577,55.931385],[-3.111672,55.92969],[-3.117677,55.91345],[-3.092675,55.899802],[-3.162438,55.889086],[-3.201545,55.894821],[-3.209088,55.883253],[-3.238412,55.88274],[-3.253927,55.868578],[-3.265732,55.876102],[-3.295542,55.86622],[-3.350673,55.827133],[-3.369036,55.824109],[-3.345119,55.792973],[-3.294349,55.796302],[-3.292776,55.780562],[-3.274369,55.775347],[-3.235907,55.779123],[-3.22571,55.787025],[-3.214328,55.783984],[-3.195597,55.802123],[-3.185094,55.80174],[-3.181039,55.781341],[-3.167785,55.779519],[-3.174796,55.772046],[-3.153995,55.76106],[-3.161198,55.748992],[-3.143993,55.740052],[-3.151124,55.725545],[-3.128268,55.710347],[-3.09188,55.722133],[-3.103375,55.737126],[-3.075259,55.759767],[-2.951621,55.818952],[-2.941072,55.79456],[-2.929001,55.793158],[-2.901963,55.809156],[-2.883753,55.807199],[-2.870409,55.824096],[-2.846244,55.818961]]]}',
      metadata: ["Midlothian"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.801504,57.69514],[-2.801558,57.695108],[-2.832626,57.690354],[-2.847909,57.706129],[-2.869368,57.705565],[-2.880262,57.704562],[-2.92929,57.69092],[-2.933526,57.6872],[-2.993903,57.672896],[-3.007463,57.669107],[-3.027162,57.663599],[-3.097153,57.675577],[-3.105226,57.668239],[-3.113596,57.675864],[-3.100268,57.675769],[-3.174056,57.688002],[-3.227028,57.703287],[-3.2636,57.713648],[-3.263927,57.713914],[-3.28012,57.718572],[-3.255837,57.704811],[-3.283136,57.717708],[-3.278718,57.724444],[-3.341987,57.724894],[-3.344799,57.724391],[-3.460159,57.703674],[-3.497541,57.704188],[-3.496658,57.679104],[-3.528486,57.664411],[-3.545119,57.664132],[-3.581951,57.662465],[-3.588947,57.663386],[-3.62429,57.662774],[-3.583003,57.646065],[-3.5895,57.630789],[-3.599708,57.633784],[-3.607991,57.62712],[-3.601179,57.633745],[-3.621225,57.638358],[-3.635736,57.632328],[-3.630453,57.639277],[-3.640853,57.636461],[-3.632354,57.639638],[-3.639258,57.641037],[-3.641841,57.640423],[-3.641425,57.6295],[-3.652136,57.637976],[-3.641885,57.641569],[-3.624094,57.644639],[-3.6197,57.655275],[-3.644029,57.663165],[-3.677607,57.659219],[-3.689552,57.657813],[-3.702609,57.646377],[-3.753776,57.629434],[-3.721738,57.644478],[-3.73316,57.644731],[-3.762351,57.630675],[-3.762943,57.630523],[-3.738753,57.598179],[-3.748682,57.590892],[-3.712288,57.567175],[-3.729716,57.560981],[-3.711828,57.534082],[-3.722322,57.528642],[-3.690886,57.520227],[-3.705345,57.512326],[-3.682708,57.489831],[-3.700604,57.43623],[-3.659853,57.428155],[-3.617764,57.435438],[-3.60985,57.447358],[-3.566255,57.446928],[-3.502772,57.460678],[-3.47088,57.43342],[-3.433289,57.420984],[-3.412844,57.423645],[-3.385683,57.388807],[-3.398767,57.3829],[-3.394567,57.371074],[-3.493878,57.30485],[-3.493875,57.296167],[-3.449232,57.280925],[-3.461317,57.27237],[-3.447601,57.256496],[-3.463813,57.238862],[-3.429673,57.223317],[-3.446798,57.212084],[-3.432102,57.204163],[-3.452279,57.176889],[-3.487743,57.177475],[-3.51592,57.165296],[-3.53609,57.167261],[-3.560358,57.141055],[-3.583256,57.136249],[-3.61636,57.11271],[-3.654698,57.115902],[-3.683694,57.095239],[-3.664913,57.068441],[-3.646481,57.088343],[-3.593256,57.08404],[-3.557728,57.096382],[-3.55263,57.082618],[-3.538433,57.090821],[-3.516813,57.086372],[-3.486282,57.094519],[-3.449121,57.092214],[-3.422733,57.105368],[-3.410212,57.098255],[-3.37814,57.097798],[-3.355969,57.110146],[-3.336342,57.110981],[-3.322479,57.130408],[-3.349375,57.148121],[-3.341757,57.156374],[-3.356708,57.166679],[-3.353523,57.178159],[-3.313852,57.192281],[-3.279623,57.19016],[-3.265773,57.203215],[-3.242571,57.202144],[-3.245188,57.219552],[-3.208523,57.256123],[-3.164913,57.262239],[-3.143233,57.277916],[-3.110244,57.277129],[-3.092394,57.284266],[-3.054052,57.275116],[-3.043715,57.278746],[-3.019068,57.261659],[-2.984235,57.277739],[-2.976684,57.298877],[-2.951868,57.31824],[-2.972178,57.32808],[-2.969876,57.351369],[-2.983532,57.363282],[-2.954484,57.377816],[-2.989228,57.398691],[-3.024049,57.405158],[-3.00681,57.420646],[-2.955485,57.438522],[-3.010631,57.442875],[-3.019943,57.44951],[-2.972557,57.496693],[-2.916749,57.495018],[-2.91959,57.506283],[-2.886435,57.521884],[-2.88593,57.532371],[-2.866283,57.52965],[-2.833478,57.538412],[-2.820961,57.535081],[-2.817053,57.519878],[-2.788581,57.508273],[-2.758878,57.521845],[-2.760644,57.513826],[-2.741894,57.504021],[-2.717957,57.500953],[-2.708306,57.510991],[-2.694597,57.507977],[-2.692761,57.516381],[-2.649825,57.529555],[-2.68577,57.538986],[-2.708395,57.53055],[-2.719956,57.564214],[-2.749517,57.567559],[-2.747266,57.57967],[-2.77565,57.584131],[-2.792258,57.605069],[-2.810643,57.609936],[-2.772391,57.649888],[-2.803168,57.665526],[-2.801504,57.69514]]]}',
      metadata: ["Moray"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-5.184669,55.432367],[-5.191882,55.432179],[-5.186447,55.431758],[-5.184669,55.432367]]],[[[-5.07178,55.523313],[-5.082287,55.537077],[-5.083684,55.533724],[-5.086732,55.525819],[-5.063831,55.512564],[-5.07178,55.523313]]],[[[-5.266449,55.72106],[-5.26713,55.720971],[-5.293251,55.713989],[-5.294292,55.713057],[-5.289693,55.706954],[-5.287638,55.705668],[-5.288735,55.705683],[-5.286205,55.702326],[-5.316144,55.70588],[-5.326844,55.689034],[-5.364888,55.678264],[-5.395035,55.627165],[-5.395268,55.611321],[-5.390889,55.606636],[-5.337589,55.549521],[-5.348982,55.537277],[-5.35492,55.51147],[-5.355381,55.506734],[-5.327053,55.498029],[-5.313203,55.464998],[-5.293198,55.456734],[-5.263061,55.446066],[-5.261197,55.443499],[-5.251382,55.439437],[-5.196609,55.433833],[-5.164067,55.439421],[-5.158286,55.441399],[-5.154349,55.441087],[-5.137897,55.443906],[-5.112361,55.439864],[-5.083583,55.454521],[-5.094783,55.491678],[-5.079262,55.509857],[-5.125117,55.524133],[-5.128636,55.531602],[-5.082917,55.552708],[-5.108717,55.571753],[-5.134762,55.577793],[-5.151191,55.581346],[-5.151249,55.581612],[-5.160318,55.583712],[-5.153004,55.589657],[-5.153122,55.590195],[-5.145376,55.595856],[-5.128096,55.609889],[-5.129862,55.613583],[-5.16112,55.678854],[-5.183552,55.69184],[-5.202252,55.702656],[-5.266449,55.72106]]],[[[-4.938255,55.735071],[-4.96787,55.721704],[-4.954643,55.710714],[-4.938255,55.735071]]],[[[-4.893649,55.76578],[-4.904531,55.792859],[-4.914069,55.789778],[-4.92957,55.784457],[-4.947132,55.743751],[-4.946956,55.74331],[-4.930256,55.752377],[-4.913938,55.753985],[-4.913852,55.744785],[-4.901671,55.752878],[-4.893649,55.76578]]],[[[-4.750922,55.849763],[-4.794168,55.87223],[-4.799697,55.892608],[-4.844224,55.875259],[-4.888381,55.874699],[-4.887726,55.817867],[-4.873629,55.799643],[-4.873127,55.798995],[-4.857639,55.77895],[-4.857485,55.777286],[-4.855184,55.774213],[-4.856417,55.765733],[-4.85567,55.757655],[-4.857342,55.746881],[-4.86939,55.748213],[-4.876011,55.748944],[-4.873379,55.730336],[-4.894194,55.736485],[-4.894739,55.736341],[-4.892839,55.734993],[-4.886996,55.733354],[-4.889841,55.732864],[-4.884822,55.729302],[-4.902998,55.722228],[-4.90545,55.699107],[-4.864747,55.684914],[-4.862497,55.684129],[-4.815143,55.64792],[-4.81973,55.644702],[-4.816523,55.64165],[-4.818902,55.639757],[-4.798535,55.638779],[-4.795955,55.631327],[-4.79453,55.630512],[-4.781129,55.631604],[-4.778414,55.632758],[-4.775994,55.632022],[-4.754804,55.633744],[-4.750609,55.624292],[-4.715753,55.613664],[-4.70788,55.609026],[-4.698206,55.605775],[-4.695716,55.604151],[-4.688501,55.597604],[-4.675097,55.589699],[-4.668788,55.579703],[-4.658333,55.570201],[-4.658441,55.56842],[-4.647811,55.563358],[-4.592211,55.59795],[-4.579338,55.603656],[-4.588444,55.618219],[-4.558743,55.625219],[-4.569555,55.632628],[-4.557235,55.646714],[-4.496192,55.656491],[-4.492621,55.665068],[-4.530808,55.659471],[-4.546486,55.667007],[-4.571918,55.6484],[-4.593639,55.644154],[-4.603784,55.647342],[-4.596756,55.655077],[-4.638333,55.672506],[-4.610712,55.676542],[-4.579224,55.712286],[-4.529908,55.744573],[-4.550936,55.766382],[-4.574642,55.783452],[-4.616536,55.761496],[-4.630781,55.76444],[-4.633733,55.77604],[-4.66112,55.759701],[-4.685697,55.803737],[-4.720456,55.805107],[-4.73035,55.811013],[-4.72235,55.820786],[-4.783709,55.839789],[-4.750922,55.849763]]]]}',
      metadata: ["North Ayrshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.034496,55.811209],[-2.059159,55.833215],[-2.06978,55.842683],[-2.076903,55.872628],[-2.089033,55.87002],[-2.091064,55.8777],[-2.091662,55.877878],[-2.103622,55.875654],[-2.129658,55.889185],[-2.131951,55.889866],[-2.132067,55.890436],[-2.134536,55.891718],[-2.132701,55.893539],[-2.137268,55.915872],[-2.137935,55.917005],[-2.175159,55.916222],[-2.2237,55.933003],[-2.259156,55.9238],[-2.32167,55.929459],[-2.330437,55.93025],[-2.365378,55.945364],[-2.466839,55.884366],[-2.504723,55.91193],[-2.554404,55.911523],[-2.562716,55.906634],[-2.554529,55.900076],[-2.570021,55.892144],[-2.533464,55.871274],[-2.53451,55.860931],[-2.554882,55.839089],[-2.581339,55.845486],[-2.594178,55.828672],[-2.648423,55.833641],[-2.643235,55.840928],[-2.669264,55.846549],[-2.739921,55.828186],[-2.777198,55.8443],[-2.846244,55.818961],[-2.870409,55.824096],[-2.883753,55.807199],[-2.901963,55.809156],[-2.929001,55.793158],[-2.941072,55.79456],[-2.951621,55.818952],[-3.075259,55.759767],[-3.103375,55.737126],[-3.09188,55.722133],[-3.128268,55.710347],[-3.151124,55.725545],[-3.143993,55.740052],[-3.161198,55.748992],[-3.153995,55.76106],[-3.174796,55.772046],[-3.167785,55.779519],[-3.181039,55.781341],[-3.185094,55.80174],[-3.195597,55.802123],[-3.214328,55.783984],[-3.22571,55.787025],[-3.235907,55.779123],[-3.274369,55.775347],[-3.292776,55.780562],[-3.294349,55.796302],[-3.345119,55.792973],[-3.369036,55.824109],[-3.394763,55.81974],[-3.435529,55.805496],[-3.439401,55.784594],[-3.471635,55.77097],[-3.456056,55.763618],[-3.439521,55.724044],[-3.419247,55.71058],[-3.398385,55.716536],[-3.396984,55.710454],[-3.485736,55.649023],[-3.481704,55.616431],[-3.530019,55.611397],[-3.526883,55.59702],[-3.488476,55.562668],[-3.503418,55.547442],[-3.486602,55.517053],[-3.504428,55.512468],[-3.522179,55.490263],[-3.518474,55.473778],[-3.539565,55.443172],[-3.507378,55.412265],[-3.472128,55.403756],[-3.42049,55.415995],[-3.401402,55.408055],[-3.362326,55.416994],[-3.354322,55.412517],[-3.331627,55.441056],[-3.310982,55.444828],[-3.293445,55.430916],[-3.279607,55.435253],[-3.243587,55.427685],[-3.302763,55.39377],[-3.311673,55.379634],[-3.303833,55.368888],[-3.315484,55.366596],[-3.32026,55.349352],[-3.303664,55.342363],[-3.21739,55.376134],[-3.179254,55.360468],[-3.174503,55.346792],[-3.127239,55.359741],[-3.109733,55.34803],[-3.102026,55.351587],[-3.099085,55.331682],[-3.046641,55.295515],[-3.054655,55.280725],[-3.042956,55.271532],[-3.019934,55.279142],[-3.010169,55.267435],[-2.995929,55.269088],[-2.962084,55.290266],[-2.917059,55.277412],[-2.898488,55.283503],[-2.884926,55.262692],[-2.905013,55.257184],[-2.921445,55.236722],[-2.863842,55.236352],[-2.861916,55.223286],[-2.888187,55.207866],[-2.904752,55.173669],[-2.896916,55.146683],[-2.865117,55.135326],[-2.85854,55.108349],[-2.827608,55.124837],[-2.825503,55.138314],[-2.784875,55.141775],[-2.703405,55.173211],[-2.68979,55.188984],[-2.666815,55.22158],[-2.631414,55.223698],[-2.630229,55.244791],[-2.611451,55.247134],[-2.646771,55.260044],[-2.626656,55.262221],[-2.609238,55.283248],[-2.573363,55.296884],[-2.559008,55.317853],[-2.52027,55.323047],[-2.475393,55.35474],[-2.414997,55.358922],[-2.399505,55.348221],[-2.378912,55.349169],[-2.33753,55.367191],[-2.346233,55.373061],[-2.330021,55.381242],[-2.344947,55.399313],[-2.335629,55.408208],[-2.313254,55.406789],[-2.260611,55.432934],[-2.231282,55.428429],[-2.194858,55.44459],[-2.188078,55.462115],[-2.165521,55.468382],[-2.201336,55.475268],[-2.202649,55.489541],[-2.228846,55.509519],[-2.240307,55.555627],[-2.288811,55.580307],[-2.289232,55.603774],[-2.316094,55.620458],[-2.308626,55.628876],[-2.324311,55.626166],[-2.336005,55.632481],[-2.30579,55.647044],[-2.234369,55.641042],[-2.248346,55.65215],[-2.218453,55.66426],[-2.218659,55.675907],[-2.167231,55.706035],[-2.17652,55.718838],[-2.150576,55.723154],[-2.144019,55.739349],[-2.117637,55.738775],[-2.107642,55.759888],[-2.085639,55.76204],[-2.086123,55.793045],[-2.034496,55.811209]]]}',
      metadata: ["Scottish Borders"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-5.106759,55.251776],[-5.108891,55.253164],[-5.114756,55.256245],[-5.120294,55.255806],[-5.122029,55.253294],[-5.119849,55.248128],[-5.118148,55.247568],[-5.106759,55.251776]]],[[[-4.461847,55.17022],[-4.476596,55.199146],[-4.451828,55.211278],[-4.4502,55.237396],[-4.429105,55.254024],[-4.458627,55.285244],[-4.43796,55.307796],[-4.465939,55.315288],[-4.474129,55.325177],[-4.495607,55.324073],[-4.528793,55.349715],[-4.564604,55.357486],[-4.519811,55.383574],[-4.52817,55.39182],[-4.544931,55.395957],[-4.563389,55.386417],[-4.587473,55.396838],[-4.603462,55.39496],[-4.571178,55.404393],[-4.565082,55.426308],[-4.535108,55.423849],[-4.527771,55.409132],[-4.501896,55.399122],[-4.450435,55.411943],[-4.454366,55.430842],[-4.471303,55.428977],[-4.493324,55.438444],[-4.474854,55.448305],[-4.481127,55.457893],[-4.493455,55.45734],[-4.493494,55.470145],[-4.471938,55.485916],[-4.458965,55.483591],[-4.440454,55.493825],[-4.439578,55.504384],[-4.416087,55.500801],[-4.418661,55.506628],[-4.399138,55.510806],[-4.40949,55.553286],[-4.436227,55.560928],[-4.437146,55.56788],[-4.454533,55.562045],[-4.518224,55.565377],[-4.516946,55.571385],[-4.538708,55.5751],[-4.53607,55.591692],[-4.568522,55.59287],[-4.568254,55.60187],[-4.592211,55.59795],[-4.647811,55.563358],[-4.658441,55.56842],[-4.659244,55.555241],[-4.658542,55.552411],[-4.659426,55.552245],[-4.659702,55.547705],[-4.685491,55.546587],[-4.622314,55.515727],[-4.620391,55.508829],[-4.632844,55.518464],[-4.620163,55.49825],[-4.628571,55.477251],[-4.644057,55.470579],[-4.621608,55.45957],[-4.645722,55.469582],[-4.645993,55.465609],[-4.645034,55.457566],[-4.646634,55.456228],[-4.647387,55.445183],[-4.647936,55.437128],[-4.653479,55.44137],[-4.713007,55.43289],[-4.753527,55.416233],[-4.769562,55.400579],[-4.774767,55.359885],[-4.824895,55.335766],[-4.84533,55.324943],[-4.836093,55.283141],[-4.852742,55.260776],[-4.864027,55.245599],[-4.855297,55.244092],[-4.864973,55.245377],[-4.860231,55.227129],[-4.910756,55.198397],[-4.941505,55.164144],[-4.991805,55.143451],[-5.006373,55.093281],[-5.024419,55.076838],[-5.052447,55.051268],[-5.060269,55.025546],[-5.039754,54.997791],[-5.039724,54.997749],[-4.973231,55.011537],[-4.97806,55.022121],[-4.960559,55.021501],[-4.930781,55.051382],[-4.933399,55.064372],[-4.923046,55.066208],[-4.89473,55.060862],[-4.884551,55.038903],[-4.841056,55.044745],[-4.830605,55.034641],[-4.802353,55.044393],[-4.789167,55.031054],[-4.775992,55.041838],[-4.761074,55.037975],[-4.741457,55.047309],[-4.715172,55.037511],[-4.64674,55.056382],[-4.645815,55.048771],[-4.634784,55.051024],[-4.625223,55.068449],[-4.662032,55.08975],[-4.658316,55.119936],[-4.623171,55.140784],[-4.584001,55.141977],[-4.564967,55.158015],[-4.478621,55.152926],[-4.461847,55.17022]]]]}',
      metadata: ["South Ayrshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.107032,55.834653],[-4.111151,55.825868],[-4.130597,55.83328],[-4.172507,55.822967],[-4.18049,55.835609],[-4.198829,55.833648],[-4.203007,55.84413],[-4.220433,55.833104],[-4.227576,55.840815],[-4.233752,55.818656],[-4.225488,55.812173],[-4.21453,55.815072],[-4.204285,55.800446],[-4.22393,55.791944],[-4.226698,55.781275],[-4.250741,55.784886],[-4.253398,55.772677],[-4.282559,55.768304],[-4.275049,55.754337],[-4.223122,55.727554],[-4.221602,55.691532],[-4.246893,55.679049],[-4.21696,55.647196],[-4.221601,55.635095],[-4.201905,55.626929],[-4.205279,55.614859],[-4.174991,55.604837],[-4.194674,55.600718],[-4.202473,55.583045],[-4.242639,55.562135],[-4.228178,55.560066],[-4.224663,55.550486],[-4.147716,55.572733],[-4.126309,55.565674],[-4.081566,55.567579],[-4.039576,55.592371],[-3.997,55.563536],[-3.976393,55.564656],[-3.972409,55.556458],[-3.957046,55.555751],[-3.958704,55.540788],[-4.025688,55.492452],[-4.011616,55.482852],[-4.016824,55.472961],[-3.986226,55.464052],[-3.96979,55.454364],[-3.950982,55.462592],[-3.924348,55.456328],[-3.895436,55.459758],[-3.825499,55.444416],[-3.816403,55.427269],[-3.764594,55.401102],[-3.75366,55.374941],[-3.711044,55.363242],[-3.72018,55.350245],[-3.711157,55.323159],[-3.678364,55.308948],[-3.663613,55.291751],[-3.618656,55.295745],[-3.621552,55.316542],[-3.607028,55.325827],[-3.573965,55.328361],[-3.588269,55.346175],[-3.572692,55.355103],[-3.578494,55.384963],[-3.558168,55.388113],[-3.549831,55.398985],[-3.531399,55.396436],[-3.507378,55.412265],[-3.539565,55.443172],[-3.518474,55.473778],[-3.522179,55.490263],[-3.504428,55.512468],[-3.486602,55.517053],[-3.503418,55.547442],[-3.488476,55.562668],[-3.526883,55.59702],[-3.530019,55.611397],[-3.481704,55.616431],[-3.485736,55.649023],[-3.396984,55.710454],[-3.398385,55.716536],[-3.419247,55.71058],[-3.439521,55.724044],[-3.456056,55.763618],[-3.471635,55.77097],[-3.547064,55.790733],[-3.554999,55.785691],[-3.591509,55.810216],[-3.69867,55.794629],[-3.732716,55.77787],[-3.744012,55.782009],[-3.766412,55.770053],[-3.888225,55.759122],[-3.918597,55.734758],[-3.930123,55.748509],[-3.973719,55.767096],[-4.001665,55.77043],[-3.999146,55.778908],[-4.048416,55.797261],[-4.045826,55.811717],[-4.107032,55.834653]]]}',
      metadata: ["South Lanarkshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.82945,56.196549],[-3.843888,56.201814],[-3.847202,56.225972],[-3.873135,56.214462],[-3.900704,56.234103],[-3.916295,56.224927],[-3.940362,56.228019],[-4.005281,56.274934],[-4.037562,56.269111],[-4.038547,56.280263],[-4.052206,56.273491],[-4.078503,56.289915],[-4.084079,56.280889],[-4.115694,56.281031],[-4.139871,56.29782],[-4.188206,56.304218],[-4.237264,56.329034],[-4.222628,56.342302],[-4.24203,56.352781],[-4.240623,56.384391],[-4.196452,56.386696],[-4.202051,56.457819],[-4.161892,56.444727],[-4.134435,56.464024],[-4.098618,56.465345],[-4.108229,56.488358],[-4.127551,56.501278],[-4.154482,56.510285],[-4.194444,56.49532],[-4.296886,56.475044],[-4.331225,56.539018],[-4.365033,56.547091],[-4.378494,56.533592],[-4.441978,56.525737],[-4.477391,56.51301],[-4.494355,56.512657],[-4.507416,56.523363],[-4.528795,56.518566],[-4.528502,56.504898],[-4.577263,56.50522],[-4.625147,56.486484],[-4.628472,56.474307],[-4.639066,56.476037],[-4.655348,56.473034],[-4.665531,56.46008],[-4.700073,56.467354],[-4.726405,56.459489],[-4.733388,56.434242],[-4.768074,56.436492],[-4.798602,56.416779],[-4.811659,56.417598],[-4.812636,56.398108],[-4.854477,56.370411],[-4.783173,56.343856],[-4.792819,56.333127],[-4.785787,56.323735],[-4.739897,56.331914],[-4.721849,56.321468],[-4.715904,56.329985],[-4.695701,56.322472],[-4.658469,56.321929],[-4.676703,56.312872],[-4.670659,56.302513],[-4.682108,56.297839],[-4.660306,56.281143],[-4.697125,56.274441],[-4.701416,56.254659],[-4.685014,56.21608],[-4.69564,56.200134],[-4.655591,56.164989],[-4.640008,56.12232],[-4.590424,56.110881],[-4.605309,56.08889],[-4.598188,56.084226],[-4.58737,56.073224],[-4.53235,56.073423],[-4.506307,56.058591],[-4.504863,56.067574],[-4.47548,56.061218],[-4.480501,56.051455],[-4.498936,56.047616],[-4.482395,56.011521],[-4.469705,56.00196],[-4.447802,56.004095],[-4.430339,55.979024],[-4.402037,55.971829],[-4.366374,55.980412],[-4.33521,55.959415],[-4.2864,55.957782],[-4.288637,55.966831],[-4.272652,55.965344],[-4.275028,55.993219],[-4.299538,56.017371],[-4.281417,56.028416],[-4.256994,56.017227],[-4.222531,56.02033],[-4.198047,56.010121],[-4.162723,56.030291],[-4.152376,56.008036],[-4.123465,56.009976],[-4.096102,56.027501],[-4.020121,56.028037],[-3.978651,56.03937],[-3.973355,56.048623],[-3.89673,56.045421],[-3.814263,56.052803],[-3.81533,56.061198],[-3.797899,56.065419],[-3.83589,56.084648],[-3.821546,56.100719],[-3.838357,56.103719],[-3.834397,56.115826],[-3.848311,56.119616],[-3.869768,56.107724],[-3.864674,56.11891],[-3.885083,56.129096],[-3.857495,56.135313],[-3.877869,56.14996],[-3.854257,56.152887],[-3.858173,56.164523],[-3.82945,56.196549]]]}',
      metadata: ["Stirling"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.061126,57.212271],[-2.128248,57.227444],[-2.143127,57.211286],[-2.174668,57.210264],[-2.205276,57.231475],[-2.22743,57.228257],[-2.24119,57.235338],[-2.261863,57.228487],[-2.275098,57.234272],[-2.279592,57.201213],[-2.29506,57.197638],[-2.254293,57.158395],[-2.277294,57.128946],[-2.304178,57.123416],[-2.351185,57.135632],[-2.360924,57.111243],[-2.330951,57.101496],[-2.284048,57.103324],[-2.290685,57.088323],[-2.317017,57.080021],[-2.307644,57.076175],[-2.270105,57.079359],[-2.259378,57.095215],[-2.235233,57.094304],[-2.171664,57.114096],[-2.126074,57.118411],[-2.118687,57.090421],[-2.085244,57.085852],[-2.085013,57.086181],[-2.073068,57.103687],[-2.072659,57.103687],[-2.046881,57.140158],[-2.055615,57.144889],[-2.078228,57.141294],[-2.095024,57.145393],[-2.061058,57.145679],[-2.076197,57.149158],[-2.078051,57.174796],[-2.107875,57.176737],[-2.077564,57.176078],[-2.061382,57.211932],[-2.061126,57.212271]]]}',
      metadata: ["Aberdeen City"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.061126,57.212271],[-2.016842,57.270636],[-2.001648,57.290615],[-1.989905,57.306041],[-1.987116,57.31026],[-1.977912,57.316924],[-1.974399,57.321455],[-1.923567,57.356202],[-1.910179,57.365862],[-1.858807,57.389679],[-1.858608,57.392163],[-1.860578,57.40707],[-1.848989,57.416279],[-1.839674,57.412768],[-1.831949,57.415248],[-1.803907,57.45014],[-1.801011,57.453739],[-1.79745,57.455083],[-1.779271,57.465294],[-1.776175,57.472747],[-1.794556,57.483606],[-1.794235,57.483821],[-1.796081,57.484711],[-1.784924,57.490064],[-1.776567,57.495665],[-1.775509,57.496465],[-1.783753,57.491762],[-1.790319,57.494952],[-1.792208,57.494758],[-1.792001,57.495769],[-1.793937,57.496709],[-1.791522,57.498095],[-1.790678,57.502203],[-1.786369,57.501054],[-1.775131,57.507505],[-1.77188,57.497249],[-1.76794,57.505156],[-1.772798,57.508336],[-1.811475,57.518093],[-1.812961,57.52289],[-1.797284,57.517499],[-1.798647,57.525244],[-1.804718,57.529212],[-1.802305,57.546007],[-1.804136,57.556391],[-1.826479,57.56777],[-1.826376,57.614502],[-1.859193,57.627577],[-1.878295,57.633815],[-1.881475,57.636444],[-1.886774,57.638552],[-1.8907,57.634156],[-1.908329,57.658629],[-1.93125,57.677539],[-1.945881,57.680982],[-1.954106,57.676897],[-1.953992,57.674956],[-1.970845,57.668578],[-1.95706,57.675429],[-1.979997,57.678967],[-1.986401,57.679504],[-1.986865,57.680025],[-1.996441,57.6815],[-2.00167,57.693177],[-2.00422,57.69887],[-2.042338,57.691698],[-2.118052,57.701104],[-2.191915,57.671318],[-2.211687,57.679555],[-2.263316,57.679295],[-2.268195,57.681707],[-2.270822,57.681788],[-2.285888,57.690447],[-2.297549,57.696203],[-2.325473,57.686882],[-2.325662,57.680411],[-2.324944,57.6775],[-2.336962,57.672854],[-2.344574,57.669909],[-2.346523,57.670593],[-2.346847,57.670483],[-2.348954,57.671446],[-2.36193,57.675998],[-2.396479,57.668275],[-2.497197,57.673115],[-2.498221,57.672607],[-2.513621,57.661766],[-2.513675,57.659316],[-2.528244,57.651464],[-2.514743,57.660976],[-2.520926,57.670584],[-2.553394,57.670629],[-2.558419,57.67351],[-2.56155,57.673581],[-2.569013,57.679583],[-2.574465,57.682706],[-2.58054,57.679313],[-2.581515,57.678653],[-2.581707,57.678661],[-2.583743,57.677523],[-2.638224,57.68019],[-2.667551,57.690584],[-2.672543,57.688181],[-2.683718,57.682801],[-2.712194,57.692026],[-2.714234,57.692648],[-2.740186,57.681885],[-2.742759,57.683623],[-2.768092,57.693411],[-2.777871,57.692415],[-2.790597,57.69965],[-2.798113,57.697145],[-2.801504,57.69514],[-2.803168,57.665526],[-2.772391,57.649888],[-2.810643,57.609936],[-2.792258,57.605069],[-2.77565,57.584131],[-2.747266,57.57967],[-2.749517,57.567559],[-2.719956,57.564214],[-2.708395,57.53055],[-2.68577,57.538986],[-2.649825,57.529555],[-2.692761,57.516381],[-2.694597,57.507977],[-2.708306,57.510991],[-2.717957,57.500953],[-2.741894,57.504021],[-2.760644,57.513826],[-2.758878,57.521845],[-2.788581,57.508273],[-2.817053,57.519878],[-2.820961,57.535081],[-2.833478,57.538412],[-2.866283,57.52965],[-2.88593,57.532371],[-2.886435,57.521884],[-2.91959,57.506283],[-2.916749,57.495018],[-2.972557,57.496693],[-3.019943,57.44951],[-3.010631,57.442875],[-2.955485,57.438522],[-3.00681,57.420646],[-3.024049,57.405158],[-2.989228,57.398691],[-2.954484,57.377816],[-2.983532,57.363282],[-2.969876,57.351369],[-2.972178,57.32808],[-2.951868,57.31824],[-2.976684,57.298877],[-2.984235,57.277739],[-3.019068,57.261659],[-3.043715,57.278746],[-3.054052,57.275116],[-3.092394,57.284266],[-3.110244,57.277129],[-3.143233,57.277916],[-3.164913,57.262239],[-3.208523,57.256123],[-3.245188,57.219552],[-3.242571,57.202144],[-3.265773,57.203215],[-3.279623,57.19016],[-3.313852,57.192281],[-3.353523,57.178159],[-3.356708,57.166679],[-3.341757,57.156374],[-3.349375,57.148121],[-3.322479,57.130408],[-3.336342,57.110981],[-3.355969,57.110146],[-3.37814,57.097798],[-3.410212,57.098255],[-3.422733,57.105368],[-3.449121,57.092214],[-3.486282,57.094519],[-3.516813,57.086372],[-3.538433,57.090821],[-3.55263,57.082618],[-3.557728,57.096382],[-3.593256,57.08404],[-3.646481,57.088343],[-3.664913,57.068441],[-3.683694,57.095239],[-3.714891,57.078988],[-3.749733,57.076283],[-3.758064,57.069306],[-3.747101,57.057667],[-3.73244,57.056743],[-3.757391,57.037797],[-3.744396,57.016712],[-3.74823,56.993109],[-3.760391,56.974385],[-3.787843,56.963231],[-3.801646,56.93588],[-3.783498,56.923081],[-3.740686,56.933608],[-3.710269,56.913579],[-3.683552,56.916116],[-3.675471,56.932442],[-3.654735,56.932898],[-3.645821,56.923043],[-3.583217,56.931035],[-3.558717,56.900346],[-3.56846,56.894622],[-3.560782,56.884103],[-3.537655,56.892255],[-3.52925,56.883607],[-3.502541,56.887112],[-3.465707,56.872811],[-3.429832,56.886546],[-3.421287,56.879573],[-3.404962,56.884021],[-3.372138,56.874615],[-3.337062,56.895839],[-3.284854,56.907267],[-3.284247,56.928557],[-3.269936,56.919876],[-3.232551,56.917716],[-3.173916,56.900398],[-3.160447,56.906822],[-3.120338,56.888447],[-3.106754,56.895037],[-3.110773,56.918732],[-3.08317,56.958432],[-3.02634,56.972773],[-2.954079,56.966801],[-2.944675,56.973771],[-2.910245,56.975788],[-2.912959,56.981636],[-2.892429,56.986804],[-2.851087,56.972566],[-2.833166,56.977007],[-2.824509,56.961936],[-2.765049,56.959776],[-2.74002,56.948487],[-2.724687,56.92583],[-2.686753,56.915066],[-2.680963,56.887981],[-2.661147,56.88572],[-2.670556,56.842281],[-2.65097,56.822597],[-2.652787,56.810422],[-2.63161,56.809077],[-2.616241,56.783455],[-2.530303,56.785252],[-2.462195,56.747567],[-2.424983,56.753459],[-2.424102,56.754943],[-2.399408,56.774267],[-2.375845,56.773622],[-2.370915,56.782229],[-2.329049,56.795174],[-2.325889,56.79615],[-2.305814,56.810004],[-2.287918,56.827453],[-2.280241,56.827632],[-2.277299,56.829659],[-2.274703,56.845532],[-2.268757,56.845059],[-2.229803,56.867119],[-2.223699,56.874793],[-2.21583,56.89471],[-2.196931,56.908406],[-2.196543,56.908893],[-2.196776,56.91116],[-2.200584,56.948182],[-2.191262,56.950795],[-2.191241,56.950963],[-2.209168,56.967642],[-2.177405,56.979566],[-2.161387,57.017969],[-2.092174,57.067983],[-2.085244,57.085852],[-2.118687,57.090421],[-2.126074,57.118411],[-2.171664,57.114096],[-2.235233,57.094304],[-2.259378,57.095215],[-2.270105,57.079359],[-2.307644,57.076175],[-2.317017,57.080021],[-2.290685,57.088323],[-2.284048,57.103324],[-2.330951,57.101496],[-2.360924,57.111243],[-2.351185,57.135632],[-2.304178,57.123416],[-2.277294,57.128946],[-2.254293,57.158395],[-2.29506,57.197638],[-2.279592,57.201213],[-2.275098,57.234272],[-2.261863,57.228487],[-2.24119,57.235338],[-2.22743,57.228257],[-2.205276,57.231475],[-2.174668,57.210264],[-2.143127,57.211286],[-2.128248,57.227444],[-2.061126,57.212271]]]}',
      metadata: ["Aberdeenshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-5.572362,55.286648],[-5.597401,55.278683],[-5.569431,55.277953],[-5.572362,55.286648]]],[[[-5.541838,55.421392],[-5.541225,55.422556],[-5.538717,55.427317],[-5.545488,55.426228],[-5.551261,55.424103],[-5.545862,55.422421],[-5.542241,55.421293],[-5.541838,55.421392]]],[[[-6.138796,55.620608],[-6.150348,55.615692],[-6.153026,55.614405],[-6.142273,55.613354],[-6.138796,55.620608]]],[[[-5.730853,55.710829],[-5.711934,55.722499],[-5.723024,55.729883],[-5.740506,55.723841],[-5.739805,55.717904],[-5.736927,55.707308],[-5.738598,55.707673],[-5.738576,55.707483],[-5.74613,55.709198],[-5.774342,55.676848],[-5.770499,55.667759],[-5.759625,55.668012],[-5.763721,55.645824],[-5.734421,55.659372],[-5.734786,55.662892],[-5.736528,55.67713],[-5.717998,55.685214],[-5.734368,55.684354],[-5.725233,55.695405],[-5.721929,55.699629],[-5.730853,55.710829]]],[[[-5.147458,55.78472],[-5.161267,55.804647],[-5.1673,55.792422],[-5.167991,55.79102],[-5.158168,55.776413],[-5.147458,55.78472]]],[[[-5.062004,55.85907],[-5.07294,55.860615],[-5.087283,55.861685],[-5.086877,55.862583],[-5.092246,55.86334],[-5.084274,55.868343],[-5.078368,55.881405],[-5.113731,55.892413],[-5.158386,55.92094],[-5.177352,55.924257],[-5.180676,55.924578],[-5.214776,55.905514],[-5.221419,55.901178],[-5.212323,55.884781],[-5.169283,55.851767],[-5.129236,55.845222],[-5.143032,55.812729],[-5.138097,55.802107],[-5.12673,55.809482],[-5.123998,55.793531],[-5.120364,55.772291],[-5.119906,55.772389],[-5.098394,55.77749],[-5.097722,55.777139],[-5.093573,55.778027],[-5.060937,55.758505],[-5.053764,55.733256],[-5.028046,55.721995],[-5.004152,55.730625],[-5.005546,55.732243],[-5.031968,55.756779],[-5.001053,55.769976],[-5.001083,55.770071],[-5.015218,55.796249],[-5.022297,55.809346],[-5.024722,55.843371],[-5.057194,55.838877],[-5.057297,55.839399],[-5.058889,55.839197],[-5.062004,55.85907]]],[[[-6.12323,55.929036],[-6.12727,55.937923],[-6.163899,55.928357],[-6.173699,55.925795],[-6.197396,55.926738],[-6.204097,55.92321],[-6.214741,55.912559],[-6.26873,55.886795],[-6.268231,55.882054],[-6.285648,55.878709],[-6.285738,55.878666],[-6.285983,55.878645],[-6.3115,55.87374],[-6.304806,55.866684],[-6.32833,55.833592],[-6.318741,55.821893],[-6.334943,55.822221],[-6.346092,55.834512],[-6.327559,55.891461],[-6.39206,55.858093],[-6.415035,55.851778],[-6.419299,55.854675],[-6.429504,55.860206],[-6.454646,55.852439],[-6.464914,55.827757],[-6.455391,55.825256],[-6.456504,55.809152],[-6.469746,55.802009],[-6.48695,55.792716],[-6.467931,55.786193],[-6.457138,55.78249],[-6.465571,55.765607],[-6.470578,55.755577],[-6.467473,55.754085],[-6.464158,55.753259],[-6.460686,55.752395],[-6.461085,55.752213],[-6.463892,55.750936],[-6.49754,55.735618],[-6.49892,55.733438],[-6.506963,55.71894],[-6.496321,55.715972],[-6.496761,55.714584],[-6.493122,55.713094],[-6.498233,55.709934],[-6.499487,55.70597],[-6.520551,55.696124],[-6.525697,55.692938],[-6.509787,55.676845],[-6.488241,55.671018],[-6.456495,55.686163],[-6.414763,55.706042],[-6.371795,55.744671],[-6.369496,55.748276],[-6.350225,55.781547],[-6.348199,55.781637],[-6.346598,55.784142],[-6.261051,55.784745],[-6.252803,55.778952],[-6.261875,55.76384],[-6.278178,55.758729],[-6.331502,55.741986],[-6.340097,55.729596],[-6.340896,55.720673],[-6.341256,55.716135],[-6.311303,55.71937],[-6.287523,55.702191],[-6.265512,55.669051],[-6.263839,55.666746],[-6.263875,55.666582],[-6.25817,55.657982],[-6.266786,55.653222],[-6.266824,55.653044],[-6.26715,55.65302],[-6.27347,55.649527],[-6.303782,55.648682],[-6.313697,55.639163],[-6.33344,55.619661],[-6.339187,55.591094],[-6.314154,55.588908],[-6.313976,55.588324],[-6.313915,55.588318],[-6.313875,55.587994],[-6.312076,55.582115],[-6.269177,55.579161],[-6.267839,55.579068],[-6.267713,55.579212],[-6.258782,55.589403],[-6.253415,55.590112],[-6.240229,55.592456],[-6.211622,55.620157],[-6.217735,55.630529],[-6.193951,55.632967],[-6.186014,55.623339],[-6.16552,55.630818],[-6.149392,55.625565],[-6.132345,55.631898],[-6.086286,55.648987],[-6.074273,55.642301],[-6.074153,55.643407],[-6.073363,55.663208],[-6.072053,55.66267],[-6.07185,55.664537],[-6.057783,55.659481],[-6.054716,55.66416],[-6.055279,55.667644],[-6.051164,55.669581],[-6.049875,55.671546],[-6.021433,55.68356],[-6.020137,55.684169],[-6.022794,55.684038],[-6.02978,55.682784],[-6.02927,55.683717],[-6.030824,55.68364],[-6.025294,55.694825],[-6.028845,55.694548],[-6.036425,55.692248],[-6.038842,55.702738],[-6.039984,55.705678],[-6.039692,55.706425],[-6.04044,55.709666],[-6.036664,55.714182],[-6.032002,55.726112],[-6.052834,55.741959],[-6.052688,55.742493],[-6.052792,55.742558],[-6.052075,55.744739],[-6.046912,55.763644],[-6.0523,55.766397],[-6.083979,55.782578],[-6.104031,55.812882],[-6.103924,55.817049],[-6.107731,55.852782],[-6.13207,55.889644],[-6.120398,55.92163],[-6.12323,55.929036]]],[[[-5.67222,55.958189],[-5.667039,55.963199],[-5.672947,55.958168],[-5.680296,55.951906],[-5.690069,55.956785],[-5.699005,55.947095],[-5.69922,55.932965],[-5.698489,55.932767],[-5.67222,55.958189]]],[[[-6.208803,56.024659],[-6.210568,56.027574],[-6.226374,56.028471],[-6.238005,56.02724],[-6.269677,56.022847],[-6.262477,56.018852],[-6.261124,56.018652],[-6.262138,56.018664],[-6.252867,56.013517],[-6.255133,56.007084],[-6.255211,56.001667],[-6.23741,56.007272],[-6.231142,56.018986],[-6.226942,56.019143],[-6.21438,56.020999],[-6.213208,56.019655],[-6.209239,56.019803],[-6.208803,56.024659]]],[[[-6.21481,56.028964],[-6.216899,56.028961],[-6.216585,56.028177],[-6.21481,56.028964]]],[[[-6.13308,56.121241],[-6.135524,56.123354],[-6.136173,56.123914],[-6.147685,56.132987],[-6.171133,56.122154],[-6.18083,56.117672],[-6.181288,56.115503],[-6.181265,56.104858],[-6.183517,56.104955],[-6.184219,56.10163],[-6.197363,56.105546],[-6.208793,56.106032],[-6.235199,56.091538],[-6.24756,56.083382],[-6.253497,56.075357],[-6.241316,56.072567],[-6.258342,56.065796],[-6.245609,56.063354],[-6.254307,56.059923],[-6.255022,56.056244],[-6.247855,56.055249],[-6.256238,56.049992],[-6.256272,56.049814],[-6.257547,56.04917],[-6.275847,56.037686],[-6.268937,56.038751],[-6.246342,56.045376],[-6.249671,56.034235],[-6.228711,56.034264],[-6.22179,56.041142],[-6.217452,56.030339],[-6.18635,56.0427],[-6.18235,56.052174],[-6.193716,56.059801],[-6.195645,56.060747],[-6.195377,56.060916],[-6.196664,56.061779],[-6.17935,56.071497],[-6.171723,56.075775],[-6.167266,56.078573],[-6.13308,56.121241]]],[[[-5.709294,56.149545],[-5.714855,56.148448],[-5.723961,56.146294],[-5.722315,56.138613],[-5.722375,56.138611],[-5.722121,56.137556],[-5.745939,56.137619],[-5.745843,56.135806],[-5.745514,56.129621],[-5.785187,56.108439],[-5.800449,56.111773],[-5.821358,56.089595],[-5.858425,56.077801],[-5.881754,56.070369],[-5.940267,56.042533],[-5.950005,56.037533],[-6.000547,55.989279],[-6.006342,55.973026],[-5.994073,55.975724],[-5.940373,55.960372],[-5.938785,55.960565],[-5.924078,55.962877],[-5.914237,55.974506],[-5.895145,55.974262],[-5.893609,55.981944],[-5.893515,55.9824],[-5.882478,55.969887],[-5.85481,55.990328],[-5.848732,55.978177],[-5.914963,55.956323],[-6.024464,55.947173],[-6.026998,55.94696],[-6.086767,55.900252],[-6.094811,55.877225],[-6.096564,55.871874],[-6.086313,55.863466],[-6.087142,55.831305],[-6.064656,55.806089],[-6.03593,55.795457],[-5.963873,55.792585],[-5.939642,55.825951],[-5.944359,55.829509],[-5.950913,55.834364],[-5.950883,55.83443],[-5.951106,55.834597],[-5.936519,55.867399],[-5.917154,55.872568],[-5.90237,55.867169],[-5.901449,55.870238],[-5.897395,55.889886],[-5.881666,55.891499],[-5.88693,55.879022],[-5.872865,55.889807],[-5.876155,55.905206],[-5.845044,55.940336],[-5.844807,55.941176],[-5.841461,55.953023],[-5.836437,55.970796],[-5.835487,55.970931],[-5.83544,55.971087],[-5.832685,55.971329],[-5.820379,55.97308],[-5.793061,56.013211],[-5.783422,56.015036],[-5.776634,56.016801],[-5.68755,56.111433],[-5.6874,56.129182],[-5.696131,56.137306],[-5.709294,56.149545]]],[[[-5.672338,56.168218],[-5.675965,56.191722],[-5.69007,56.200809],[-5.69218,56.200164],[-5.740067,56.180534],[-5.743924,56.177176],[-5.744255,56.161451],[-5.700576,56.159629],[-5.672338,56.168218]]],[[[-5.588717,56.207398],[-5.591295,56.223039],[-5.609029,56.229795],[-5.609581,56.228687],[-5.611292,56.195388],[-5.588717,56.207398]]],[[[-5.801878,56.221673],[-5.799863,56.229018],[-5.818782,56.216385],[-5.801878,56.221673]]],[[[-5.698428,56.223762],[-5.694818,56.229102],[-5.692098,56.234044],[-5.713504,56.213545],[-5.715165,56.211856],[-5.704068,56.212855],[-5.703558,56.213205],[-5.703409,56.212915],[-5.702393,56.213006],[-5.697008,56.201996],[-5.685434,56.203002],[-5.698428,56.223762]]],[[[-5.75339,56.2418],[-5.75394,56.249795],[-5.77763,56.237073],[-5.75339,56.2418]]],[[[-5.609406,56.265752],[-5.612617,56.263503],[-5.623692,56.255665],[-5.619426,56.251039],[-5.609406,56.265752]]],[[[-5.626453,56.253805],[-5.624675,56.255052],[-5.638991,56.270055],[-5.647329,56.25441],[-5.665659,56.218949],[-5.664645,56.217767],[-5.635199,56.190693],[-5.633027,56.197576],[-5.634393,56.219014],[-5.617715,56.247704],[-5.618973,56.249073],[-5.619743,56.24988],[-5.619975,56.249524],[-5.626453,56.253805]]],[[[-5.66102,56.289552],[-5.654096,56.291018],[-5.6567,56.294694],[-5.664052,56.289444],[-5.66102,56.289552]]],[[[-5.585535,56.324314],[-5.592773,56.320178],[-5.611503,56.309469],[-5.606305,56.314576],[-5.608638,56.315929],[-5.611718,56.314906],[-5.616228,56.319495],[-5.618143,56.321443],[-5.619096,56.321996],[-5.622991,56.319297],[-5.654192,56.297656],[-5.633586,56.290822],[-5.627228,56.266977],[-5.626074,56.266019],[-5.599161,56.279961],[-5.611317,56.292864],[-5.590228,56.301751],[-5.588818,56.305643],[-5.585535,56.324314]]],[[[-6.356165,56.29564],[-6.354453,56.298772],[-6.37028,56.300528],[-6.373522,56.300292],[-6.378829,56.294839],[-6.385187,56.288305],[-6.385422,56.287959],[-6.371735,56.291619],[-6.362274,56.284465],[-6.356165,56.29564]]],[[[-6.407065,56.314473],[-6.397445,56.323766],[-6.386483,56.349595],[-6.386642,56.350947],[-6.390965,56.349623],[-6.426393,56.337337],[-6.421884,56.325135],[-6.427866,56.32242],[-6.440453,56.309668],[-6.430434,56.308078],[-6.421568,56.306804],[-6.407065,56.314473]]],[[[-5.489077,56.421079],[-5.498191,56.425025],[-5.51363,56.416826],[-5.522859,56.411196],[-5.563362,56.40824],[-5.567115,56.40416],[-5.58897,56.380386],[-5.564604,56.382109],[-5.553836,56.378622],[-5.560047,56.370439],[-5.551588,56.372754],[-5.489077,56.421079]]],[[[-5.67557,56.4348],[-5.677577,56.434049],[-5.675524,56.432537],[-5.67557,56.4348]]],[[[-6.152832,56.447317],[-6.165902,56.443354],[-6.164486,56.438709],[-6.162841,56.43606],[-6.152832,56.447317]]],[[[-6.079453,56.463869],[-6.088421,56.469891],[-6.089635,56.47015],[-6.092387,56.468803],[-6.100286,56.464204],[-6.08007,56.463238],[-6.079453,56.463869]]],[[[-6.226391,56.499433],[-6.227106,56.499693],[-6.229674,56.499168],[-6.232835,56.494083],[-6.245702,56.495885],[-6.25128,56.494743],[-6.268442,56.478575],[-6.268606,56.478421],[-6.263054,56.475768],[-6.247066,56.472272],[-6.244553,56.466922],[-6.24213,56.465764],[-6.22388,56.469495],[-6.222055,56.471072],[-6.21274,56.471772],[-6.208547,56.472628],[-6.208573,56.472085],[-6.208173,56.472115],[-6.204547,56.461979],[-6.200309,56.461394],[-6.189139,56.46591],[-6.188518,56.466571],[-6.160072,56.463392],[-6.141782,56.471303],[-6.153962,56.482465],[-6.154161,56.482647],[-6.154569,56.482444],[-6.162058,56.478716],[-6.165975,56.482061],[-6.173356,56.488363],[-6.177566,56.482872],[-6.177837,56.482981],[-6.17861,56.482019],[-6.226391,56.499433]]],[[[-6.291211,56.497522],[-6.301088,56.493598],[-6.301229,56.491014],[-6.302847,56.492899],[-6.307335,56.491116],[-6.306997,56.481072],[-6.281704,56.4831],[-6.279994,56.478177],[-6.278528,56.473956],[-6.273126,56.478414],[-6.254008,56.494184],[-6.255656,56.493846],[-6.272573,56.489626],[-6.291211,56.497522]]],[[[-5.408899,56.526527],[-5.408904,56.535808],[-5.412012,56.535389],[-5.425338,56.527962],[-5.428252,56.525201],[-5.408899,56.526527]]],[[[-5.430907,56.559885],[-5.435825,56.55861],[-5.455943,56.549772],[-5.470162,56.558304],[-5.470303,56.558355],[-5.46783,56.549141],[-5.522364,56.512511],[-5.528529,56.510834],[-5.53303,56.507923],[-5.571299,56.497736],[-5.574561,56.483442],[-5.57636,56.475552],[-5.584134,56.470538],[-5.597918,56.461419],[-5.573419,56.471309],[-5.507001,56.498072],[-5.501428,56.502608],[-5.430907,56.559885]]],[[[-6.754799,56.51433],[-6.764363,56.518811],[-6.767189,56.516503],[-6.765191,56.514317],[-6.755376,56.514064],[-6.754799,56.51433]]],[[[-5.384725,56.59567],[-5.400473,56.590878],[-5.402538,56.589958],[-5.39755,56.579284],[-5.397154,56.5786],[-5.384725,56.59567]]],[[[-5.096048,56.528521],[-5.129196,56.493061],[-5.119096,56.489002],[-5.131285,56.492671],[-5.144476,56.482323],[-5.13557,56.476971],[-5.157115,56.471961],[-5.190403,56.44847],[-5.22371,56.440012],[-5.227606,56.445534],[-5.233943,56.438811],[-5.234949,56.436691],[-5.245659,56.437279],[-5.248678,56.437444],[-5.266978,56.45792],[-5.269304,56.450518],[-5.286107,56.448667],[-5.316065,56.457746],[-5.323287,56.454095],[-5.329317,56.450638],[-5.329754,56.450824],[-5.330353,56.450522],[-5.343109,56.456511],[-5.350476,56.459647],[-5.414247,56.449735],[-5.414911,56.455241],[-5.436108,56.447338],[-5.441011,56.455603],[-5.447362,56.453256],[-5.46124,56.447934],[-5.47905,56.438514],[-5.483861,56.435903],[-5.472752,56.41292],[-5.514083,56.395624],[-5.538199,56.359683],[-5.520147,56.345338],[-5.51852,56.346413],[-5.497063,56.361638],[-5.496032,56.361252],[-5.492861,56.363343],[-5.494429,56.360652],[-5.481723,56.355662],[-5.480665,56.355499],[-5.481304,56.355738],[-5.47661,56.356594],[-5.454155,56.367227],[-5.449193,56.361585],[-5.471836,56.357463],[-5.479691,56.355134],[-5.479959,56.355235],[-5.481103,56.35448],[-5.49889,56.352133],[-5.520136,56.340422],[-5.520309,56.340515],[-5.520443,56.340439],[-5.521089,56.340938],[-5.536898,56.349495],[-5.539082,56.349464],[-5.542692,56.344666],[-5.552771,56.347142],[-5.577683,56.333207],[-5.581264,56.320512],[-5.591876,56.282846],[-5.590693,56.282648],[-5.5792,56.28388],[-5.595987,56.250132],[-5.58306,56.248242],[-5.581683,56.248151],[-5.561874,56.260727],[-5.55372,56.260498],[-5.533456,56.259927],[-5.517275,56.25961],[-5.505201,56.270117],[-5.493803,56.27022],[-5.497325,56.26431],[-5.49464,56.262364],[-5.481309,56.25695],[-5.55184,56.24023],[-5.565559,56.236972],[-5.548684,56.23054],[-5.547138,56.22218],[-5.540766,56.217486],[-5.549523,56.21522],[-5.566542,56.210814],[-5.563082,56.208088],[-5.557283,56.203878],[-5.600468,56.161138],[-5.600735,56.159193],[-5.597471,56.159418],[-5.600996,56.148322],[-5.587765,56.153454],[-5.604268,56.140024],[-5.613857,56.132215],[-5.614623,56.131563],[-5.598348,56.132734],[-5.592429,56.140369],[-5.579414,56.157147],[-5.556794,56.16796],[-5.53315,56.181186],[-5.535632,56.178067],[-5.533404,56.17913],[-5.525765,56.187652],[-5.51754,56.1867],[-5.508092,56.191206],[-5.501332,56.186076],[-5.542484,56.141813],[-5.542721,56.141557],[-5.568567,56.1137],[-5.568044,56.11289],[-5.562662,56.105169],[-5.547693,56.110554],[-5.550443,56.106829],[-5.547681,56.100758],[-5.538959,56.100658],[-5.530288,56.100557],[-5.53811,56.091406],[-5.544651,56.08375],[-5.537463,56.084366],[-5.52888,56.085102],[-5.528405,56.074843],[-5.509426,56.078528],[-5.521063,56.070112],[-5.536676,56.075785],[-5.550465,56.080791],[-5.553302,56.091076],[-5.584654,56.091751],[-5.63265,56.052538],[-5.635777,56.029148],[-5.656698,56.022901],[-5.708321,55.957107],[-5.714803,55.948829],[-5.713577,55.949378],[-5.698671,55.957397],[-5.676721,55.969195],[-5.686271,55.95777],[-5.687839,55.955892],[-5.683043,55.957866],[-5.668263,55.963945],[-5.654745,55.977299],[-5.670396,55.973187],[-5.672787,55.978507],[-5.65198,56.000674],[-5.637984,56.011209],[-5.636194,56.012727],[-5.636507,56.01232],[-5.635714,56.012917],[-5.658341,55.983706],[-5.658191,55.983698],[-5.640241,55.989919],[-5.621833,56.007505],[-5.613258,56.016935],[-5.622562,56.023228],[-5.625286,56.024232],[-5.624049,56.024234],[-5.624619,56.024619],[-5.612084,56.024255],[-5.579554,56.054586],[-5.588346,56.045462],[-5.580324,56.052666],[-5.609041,56.023961],[-5.608993,56.023966],[-5.592667,56.030585],[-5.586819,56.039063],[-5.588655,56.032212],[-5.566562,56.041161],[-5.566783,56.040984],[-5.566176,56.041276],[-5.598108,56.015973],[-5.565631,56.030032],[-5.57249,56.017078],[-5.575562,56.016083],[-5.577573,56.013194],[-5.593103,56.010402],[-5.596082,56.009437],[-5.654373,55.958721],[-5.665109,55.949363],[-5.669083,55.943348],[-5.688404,55.910895],[-5.687646,55.909171],[-5.681443,55.907809],[-5.679591,55.890845],[-5.677846,55.886874],[-5.628549,55.917093],[-5.609005,55.929213],[-5.569018,55.937433],[-5.593242,55.919548],[-5.63418,55.880852],[-5.657375,55.850258],[-5.664812,55.831445],[-5.664391,55.7993],[-5.63988,55.7868],[-5.607983,55.79506],[-5.612421,55.790652],[-5.604815,55.791723],[-5.617797,55.78531],[-5.619783,55.783335],[-5.617555,55.78071],[-5.607778,55.776884],[-5.600359,55.777518],[-5.606589,55.775201],[-5.615387,55.760926],[-5.615408,55.760651],[-5.58944,55.767176],[-5.57589,55.780016],[-5.574393,55.776863],[-5.525727,55.794353],[-5.511857,55.802845],[-5.50951,55.804281],[-5.470176,55.833562],[-5.445924,55.857165],[-5.435512,55.857201],[-5.478999,55.804018],[-5.510553,55.788363],[-5.521824,55.782766],[-5.553442,55.767051],[-5.569826,55.766926],[-5.619957,55.709745],[-5.676549,55.682441],[-5.663071,55.667837],[-5.67237,55.632721],[-5.687938,55.598053],[-5.692729,55.587372],[-5.716174,55.573478],[-5.703761,55.532584],[-5.713699,55.520563],[-5.716231,55.442441],[-5.72222,55.426725],[-5.750313,55.424736],[-5.752234,55.423347],[-5.755649,55.414271],[-5.796271,55.391171],[-5.802086,55.302974],[-5.798766,55.301819],[-5.754882,55.28958],[-5.719903,55.29327],[-5.687974,55.308756],[-5.6036,55.307515],[-5.561829,55.323709],[-5.520335,55.361239],[-5.526437,55.391845],[-5.54193,55.407897],[-5.552365,55.41765],[-5.577016,55.414612],[-5.579038,55.413866],[-5.579862,55.414261],[-5.584044,55.413744],[-5.594693,55.420994],[-5.596531,55.422245],[-5.603629,55.425643],[-5.601268,55.425468],[-5.603739,55.427149],[-5.580614,55.424189],[-5.550502,55.434326],[-5.545516,55.466216],[-5.543582,55.467387],[-5.543501,55.467802],[-5.51038,55.487606],[-5.504243,55.527121],[-5.48998,55.529929],[-5.489942,55.531512],[-5.492719,55.570522],[-5.488937,55.572751],[-5.488647,55.58466],[-5.487648,55.578937],[-5.470247,55.582376],[-5.466916,55.571257],[-5.466797,55.571159],[-5.458453,55.576425],[-5.469109,55.604446],[-5.483659,55.642642],[-5.448777,55.687679],[-5.451034,55.707126],[-5.394305,55.752044],[-5.350727,55.766145],[-5.327599,55.764579],[-5.314577,55.783141],[-5.317609,55.788453],[-5.339756,55.827213],[-5.385197,55.862476],[-5.40656,55.863272],[-5.415005,55.863567],[-5.41496,55.863584],[-5.415072,55.863588],[-5.414329,55.863815],[-5.396029,55.870527],[-5.413052,55.889887],[-5.402589,55.888266],[-5.40254,55.888268],[-5.403536,55.888749],[-5.417765,55.893783],[-5.418185,55.895818],[-5.419513,55.896459],[-5.42833,55.944955],[-5.428721,55.946847],[-5.44476,55.964767],[-5.451107,55.971854],[-5.44834,55.989309],[-5.44605,56.020707],[-5.443341,56.02081],[-5.440626,56.037901],[-5.430476,56.034772],[-5.428275,56.017205],[-5.413517,56.00447],[-5.406734,56.001134],[-5.399907,56.003958],[-5.394363,56.007339],[-5.389075,56.00481],[-5.362322,56.023135],[-5.360955,56.023056],[-5.358208,56.025433],[-5.34553,56.022228],[-5.341138,56.050603],[-5.326197,56.058006],[-5.326799,56.058793],[-5.33582,56.065514],[-5.330395,56.063494],[-5.333945,56.068133],[-5.321319,56.068615],[-5.320816,56.059927],[-5.31875,56.059158],[-5.305748,56.061303],[-5.283423,56.089176],[-5.284372,56.085742],[-5.282181,56.089128],[-5.256712,56.097238],[-5.23612,56.128412],[-5.192565,56.149411],[-5.146001,56.156638],[-5.11741,56.17069],[-5.104181,56.201798],[-5.054489,56.245768],[-5.039765,56.234084],[-4.996859,56.242354],[-4.931491,56.269316],[-4.92617,56.265005],[-5.060783,56.207843],[-5.08313,56.167178],[-5.100913,56.156821],[-5.203173,56.128571],[-5.210238,56.10514],[-5.284712,56.055042],[-5.298037,56.036232],[-5.301506,56.02364],[-5.312375,56.015968],[-5.315231,56.011931],[-5.31826,56.011813],[-5.338939,55.997202],[-5.344146,55.98301],[-5.346378,55.971256],[-5.335919,55.961811],[-5.327035,55.955886],[-5.333668,55.949022],[-5.343823,55.92226],[-5.336791,55.919746],[-5.352218,55.898267],[-5.347747,55.887699],[-5.313584,55.877762],[-5.316866,55.871003],[-5.311512,55.875423],[-5.311515,55.875378],[-5.311214,55.875631],[-5.311567,55.87455],[-5.312689,55.856663],[-5.304406,55.855486],[-5.311949,55.852864],[-5.311042,55.853003],[-5.291864,55.857616],[-5.290763,55.85611],[-5.290312,55.856179],[-5.29012,55.855231],[-5.285086,55.84834],[-5.256215,55.851742],[-5.252671,55.84633],[-5.226013,55.837233],[-5.222114,55.832255],[-5.20749,55.827873],[-5.204413,55.828268],[-5.208671,55.856314],[-5.242191,55.894389],[-5.240138,55.896065],[-5.236348,55.904274],[-5.223998,55.90924],[-5.202789,55.926535],[-5.197082,55.931185],[-5.195868,55.933078],[-5.195508,55.940066],[-5.199811,55.955937],[-5.194597,55.957762],[-5.193887,55.971531],[-5.193115,55.986483],[-5.189109,55.971655],[-5.178652,55.932892],[-5.111734,55.901529],[-5.07719,55.898128],[-5.082398,55.938446],[-5.083141,55.939371],[-5.117357,55.97214],[-5.121018,55.986451],[-5.12929,55.996716],[-5.12563,56.004463],[-5.126022,56.00599],[-5.125394,56.004963],[-5.123173,56.009664],[-5.106572,55.974099],[-5.104875,55.971315],[-5.068503,55.952197],[-5.044928,55.870918],[-5.031223,55.868892],[-4.978878,55.861769],[-4.934081,55.943486],[-4.930712,55.943964],[-4.91068,55.963306],[-4.908631,55.967069],[-4.923837,55.974816],[-4.931975,55.978046],[-4.960852,55.989498],[-4.961882,56.005774],[-4.939409,55.994515],[-4.939365,55.994532],[-4.897618,55.984102],[-4.914431,56.051279],[-4.893344,56.070964],[-4.875619,56.087494],[-4.908679,56.11209],[-4.899762,56.14659],[-4.916673,56.164542],[-4.901783,56.169026],[-4.882979,56.141941],[-4.886963,56.109111],[-4.862179,56.100017],[-4.861807,56.100363],[-4.861987,56.099947],[-4.861632,56.099817],[-4.831946,56.123525],[-4.789659,56.181997],[-4.752536,56.203788],[-4.749681,56.195464],[-4.769869,56.187152],[-4.83906,56.113528],[-4.878607,56.053461],[-4.87172,56.0297],[-4.852443,55.989888],[-4.847435,55.987856],[-4.824384,55.984767],[-4.767664,55.988052],[-4.77041,56.000733],[-4.792846,56.000833],[-4.83715,56.049768],[-4.830556,56.079826],[-4.802459,56.037657],[-4.787651,56.024372],[-4.789417,56.01805],[-4.787458,56.015102],[-4.727126,55.999824],[-4.721301,55.998611],[-4.721114,55.9983],[-4.70074,55.99313],[-4.692125,55.983522],[-4.685062,55.975641],[-4.700709,55.975242],[-4.701725,55.967286],[-4.683704,55.970901],[-4.666437,55.958364],[-4.609885,55.946619],[-4.602231,55.958024],[-4.624947,55.972402],[-4.616229,55.987354],[-4.65989,56.002747],[-4.652935,56.008105],[-4.63033,56.002671],[-4.629672,56.009974],[-4.601532,56.020224],[-4.62194,56.045013],[-4.598188,56.084226],[-4.605309,56.08889],[-4.590424,56.110881],[-4.640008,56.12232],[-4.655591,56.164989],[-4.69564,56.200134],[-4.685014,56.21608],[-4.701416,56.254659],[-4.697125,56.274441],[-4.660306,56.281143],[-4.682108,56.297839],[-4.670659,56.302513],[-4.676703,56.312872],[-4.658469,56.321929],[-4.695701,56.322472],[-4.715904,56.329985],[-4.721849,56.321468],[-4.739897,56.331914],[-4.785787,56.323735],[-4.792819,56.333127],[-4.783173,56.343856],[-4.854477,56.370411],[-4.812636,56.398108],[-4.811659,56.417598],[-4.798602,56.416779],[-4.768074,56.436492],[-4.733388,56.434242],[-4.726405,56.459489],[-4.700073,56.467354],[-4.665531,56.46008],[-4.655348,56.473034],[-4.639066,56.476037],[-4.670833,56.479752],[-4.686206,56.490547],[-4.658299,56.510683],[-4.653723,56.52601],[-4.659453,56.534452],[-4.697625,56.541044],[-4.697585,56.549956],[-4.599524,56.576659],[-4.55984,56.573003],[-4.609817,56.61481],[-4.626424,56.615597],[-4.686575,56.600628],[-4.702229,56.605555],[-4.726188,56.587807],[-4.779443,56.587769],[-4.8011,56.573599],[-4.830025,56.569218],[-4.83861,56.57384],[-4.878522,56.56605],[-4.947472,56.575727],[-4.951532,56.56368],[-4.971142,56.554566],[-4.985127,56.556487],[-4.99432,56.542131],[-5.051885,56.536177],[-5.061743,56.527107],[-5.096048,56.528521]]],[[[-6.726291,56.540797],[-6.731019,56.543437],[-6.741543,56.543991],[-6.754541,56.555874],[-6.779067,56.536936],[-6.780449,56.537459],[-6.780491,56.537426],[-6.780566,56.537504],[-6.789847,56.541014],[-6.794769,56.537387],[-6.795658,56.536194],[-6.79617,56.536354],[-6.797852,56.535114],[-6.814154,56.541977],[-6.818009,56.543182],[-6.821918,56.542071],[-6.871324,56.521277],[-6.874267,56.51871],[-6.879627,56.520372],[-6.898268,56.526146],[-6.902666,56.524831],[-6.912056,56.530415],[-6.912837,56.530657],[-6.951018,56.528984],[-6.976728,56.515339],[-6.983958,56.507214],[-6.997367,56.504374],[-6.999053,56.503478],[-6.991927,56.503583],[-6.987696,56.503969],[-6.987697,56.503646],[-6.986128,56.503669],[-6.973772,56.488378],[-6.979979,56.452014],[-6.980013,56.451815],[-6.97924,56.452044],[-6.954862,56.459271],[-6.951815,56.457048],[-6.942099,56.45551],[-6.934139,56.444145],[-6.932728,56.443114],[-6.894071,56.445281],[-6.894203,56.453203],[-6.894783,56.455411],[-6.898711,56.470351],[-6.877703,56.48836],[-6.875508,56.488375],[-6.81145,56.488798],[-6.795092,56.505753],[-6.796325,56.506476],[-6.813394,56.512388],[-6.804262,56.523408],[-6.780223,56.524374],[-6.775026,56.525068],[-6.774597,56.5246],[-6.725645,56.526551],[-6.726291,56.540797]]],[[[-5.097525,56.535734],[-5.114463,56.547972],[-5.099674,56.555286],[-5.095432,56.573882],[-5.108902,56.587487],[-5.086745,56.596242],[-5.079951,56.609454],[-5.118843,56.616564],[-5.15307,56.612825],[-5.152978,56.62667],[-5.213821,56.631917],[-5.216473,56.602157],[-5.249668,56.59216],[-5.274671,56.600722],[-5.297372,56.598001],[-5.325037,56.620672],[-5.383756,56.582156],[-5.38778,56.575285],[-5.369396,56.565909],[-5.390355,56.559548],[-5.391065,56.568779],[-5.408273,56.56068],[-5.41672,56.539022],[-5.39322,56.543739],[-5.382797,56.524158],[-5.374036,56.529325],[-5.366451,56.523836],[-5.367052,56.523485],[-5.366797,56.52348],[-5.319965,56.547788],[-5.282095,56.548338],[-5.231478,56.56389],[-5.261116,56.554062],[-5.245897,56.553036],[-5.249701,56.548543],[-5.29643,56.54645],[-5.333692,56.521],[-5.381633,56.510816],[-5.386128,56.512334],[-5.389776,56.5102],[-5.393345,56.514771],[-5.400626,56.517228],[-5.398356,56.521185],[-5.401891,56.525709],[-5.432054,56.521598],[-5.473463,56.482301],[-5.473857,56.481901],[-5.451632,56.487978],[-5.458905,56.474713],[-5.422826,56.504801],[-5.419526,56.507551],[-5.421238,56.504845],[-5.427045,56.49567],[-5.423339,56.493731],[-5.422205,56.494341],[-5.420165,56.49207],[-5.405356,56.484317],[-5.405892,56.476167],[-5.400985,56.470696],[-5.406578,56.465754],[-5.407026,56.45894],[-5.399445,56.45891],[-5.366737,56.458983],[-5.365003,56.462792],[-5.361955,56.470128],[-5.34648,56.471782],[-5.288199,56.460444],[-5.256745,56.464036],[-5.247422,56.457921],[-5.230226,56.446636],[-5.183556,56.461331],[-5.155912,56.50127],[-5.134336,56.503444],[-5.097525,56.535734]]],[[[-6.11263,56.643899],[-6.128587,56.655864],[-6.152372,56.647197],[-6.166176,56.641754],[-6.198255,56.642339],[-6.19853,56.632046],[-6.200224,56.632655],[-6.200248,56.632528],[-6.202249,56.633383],[-6.20816,56.635507],[-6.194604,56.623737],[-6.197873,56.624716],[-6.197374,56.624221],[-6.208982,56.628043],[-6.227005,56.633437],[-6.226978,56.614179],[-6.211907,56.603139],[-6.22359,56.604685],[-6.18963,56.585748],[-6.20275,56.591379],[-6.188288,56.582385],[-6.238306,56.605978],[-6.253359,56.613068],[-6.253932,56.613314],[-6.269359,56.605413],[-6.271309,56.603714],[-6.272549,56.603778],[-6.274568,56.602743],[-6.323767,56.606161],[-6.315203,56.577085],[-6.299106,56.577203],[-6.282985,56.578432],[-6.284421,56.57731],[-6.279718,56.577343],[-6.305213,56.558442],[-6.319944,56.556739],[-6.334001,56.554106],[-6.340471,56.537211],[-6.286794,56.523464],[-6.251115,56.526599],[-6.229819,56.528785],[-6.229104,56.528527],[-6.225353,56.528856],[-6.148724,56.500177],[-6.137897,56.491423],[-6.147792,56.482671],[-6.149301,56.481336],[-6.14679,56.481257],[-6.1359,56.481962],[-6.123203,56.473074],[-6.086542,56.478698],[-6.047507,56.485987],[-6.03599,56.488134],[-6.032573,56.489637],[-6.013269,56.499922],[-6.004165,56.496512],[-6.003168,56.496761],[-5.995321,56.493197],[-6.003122,56.496121],[-6.002915,56.493251],[-6.000092,56.492685],[-5.999235,56.481567],[-6.001971,56.48013],[-6.001815,56.47797],[-6.05476,56.45137],[-6.125209,56.44858],[-6.130609,56.445984],[-6.151161,56.413079],[-6.205993,56.385223],[-6.209354,56.372284],[-6.194854,56.358846],[-6.105756,56.3669],[-6.095282,56.370667],[-6.072512,56.383854],[-6.059418,56.375841],[-6.04674,56.382345],[-6.024631,56.394027],[-6.024155,56.393924],[-6.022728,56.394655],[-5.979305,56.385886],[-6.008332,56.387686],[-6.013771,56.387096],[-6.003295,56.378411],[-6.018649,56.364507],[-6.070858,56.356492],[-6.103133,56.342278],[-6.13033,56.346749],[-6.141931,56.337296],[-6.144975,56.337614],[-6.14542,56.337327],[-6.158831,56.339061],[-6.177747,56.341033],[-6.183832,56.338622],[-6.18497,56.337718],[-6.17655,56.334324],[-6.190299,56.332205],[-6.208225,56.335554],[-6.24856,56.343077],[-6.236444,56.315706],[-6.297851,56.324377],[-6.267383,56.324298],[-6.272794,56.336763],[-6.285769,56.336842],[-6.286528,56.332917],[-6.289354,56.336864],[-6.289635,56.336866],[-6.294551,56.34412],[-6.294636,56.344238],[-6.2949,56.344254],[-6.351246,56.346707],[-6.376906,56.308804],[-6.346798,56.305989],[-6.348142,56.295923],[-6.349623,56.28483],[-6.329154,56.284717],[-6.329485,56.282683],[-6.323033,56.282633],[-6.323538,56.270602],[-6.320226,56.269629],[-6.269463,56.273996],[-6.264978,56.264907],[-6.264553,56.264364],[-6.262887,56.266471],[-6.249957,56.285714],[-6.24786,56.285462],[-6.245396,56.288575],[-6.225469,56.283376],[-6.21572,56.286525],[-6.203211,56.290976],[-6.202265,56.290867],[-6.198599,56.29205],[-6.142883,56.284402],[-6.126605,56.296727],[-6.07898,56.302382],[-6.074956,56.301199],[-6.044165,56.293086],[-6.017134,56.307122],[-5.986802,56.322854],[-5.934424,56.321535],[-5.924584,56.327453],[-5.901817,56.346402],[-5.883406,56.352189],[-5.876674,56.356228],[-5.852353,56.353901],[-5.846168,56.345553],[-5.883346,56.324812],[-5.888958,56.321678],[-5.882906,56.320486],[-5.843191,56.312651],[-5.8399,56.312001],[-5.834094,56.310871],[-5.827634,56.313134],[-5.745802,56.34175],[-5.69542,56.370581],[-5.691288,56.382578],[-5.693521,56.382782],[-5.709219,56.383763],[-5.721226,56.381339],[-5.791283,56.365853],[-5.786113,56.368213],[-5.794897,56.366433],[-5.75814,56.381213],[-5.754515,56.394611],[-5.731768,56.39606],[-5.748194,56.413497],[-5.734096,56.411254],[-5.713177,56.413767],[-5.710983,56.414604],[-5.711145,56.414011],[-5.710647,56.414071],[-5.71381,56.404244],[-5.717516,56.390653],[-5.679489,56.383706],[-5.652623,56.415472],[-5.663681,56.421159],[-5.664518,56.421072],[-5.665734,56.422214],[-5.667677,56.423213],[-5.675264,56.419625],[-5.675501,56.431386],[-5.678121,56.433846],[-5.695376,56.427391],[-5.679457,56.440987],[-5.664106,56.432591],[-5.670397,56.428761],[-5.670334,56.428715],[-5.652293,56.425027],[-5.652278,56.454568],[-5.652372,56.456689],[-5.66156,56.448185],[-5.68336,56.451839],[-5.680162,56.457482],[-5.693865,56.466977],[-5.713269,56.474752],[-5.717372,56.483252],[-5.72009,56.485132],[-5.741528,56.481905],[-5.768436,56.489284],[-5.774293,56.494604],[-5.796868,56.515094],[-5.823618,56.517226],[-5.824591,56.506233],[-5.830849,56.508691],[-5.831025,56.508444],[-5.845028,56.514259],[-5.863744,56.521603],[-5.903117,56.518018],[-5.920252,56.516454],[-5.932797,56.521707],[-5.945725,56.521633],[-5.95149,56.518045],[-5.975264,56.531526],[-5.963385,56.537088],[-5.983582,56.570861],[-5.989372,56.579688],[-6.01223,56.58797],[-6.032507,56.61024],[-6.053186,56.616223],[-6.067367,56.619881],[-6.066988,56.620213],[-6.06968,56.620991],[-6.058257,56.628078],[-6.058344,56.628198],[-6.06656,56.638585],[-6.11263,56.643899]]],[[[-6.453415,56.68778],[-6.46361,56.690195],[-6.469603,56.691428],[-6.473379,56.686829],[-6.494739,56.690502],[-6.492725,56.681857],[-6.503855,56.68568],[-6.506598,56.678699],[-6.527327,56.676594],[-6.534338,56.673546],[-6.547397,56.660011],[-6.570067,56.652239],[-6.571636,56.651701],[-6.571578,56.651167],[-6.582218,56.648071],[-6.584828,56.647175],[-6.612239,56.637763],[-6.615893,56.623604],[-6.618958,56.622789],[-6.619182,56.622276],[-6.625662,56.621006],[-6.63713,56.617955],[-6.65539,56.593521],[-6.660642,56.593928],[-6.674015,56.592617],[-6.675675,56.595092],[-6.678794,56.595333],[-6.685312,56.592073],[-6.696098,56.582769],[-6.699403,56.585021],[-6.70902,56.580207],[-6.709759,56.579142],[-6.695118,56.563233],[-6.681959,56.564957],[-6.681591,56.565574],[-6.678156,56.580434],[-6.672458,56.580859],[-6.670984,56.583325],[-6.647576,56.582938],[-6.638199,56.573362],[-6.635641,56.576593],[-6.624977,56.592488],[-6.610922,56.575295],[-6.600983,56.58909],[-6.600133,56.585527],[-6.593531,56.585702],[-6.580254,56.591855],[-6.566741,56.586498],[-6.565547,56.594673],[-6.563102,56.594685],[-6.554074,56.59473],[-6.530962,56.610154],[-6.529148,56.609162],[-6.523301,56.613191],[-6.53407,56.639427],[-6.506018,56.616651],[-6.505732,56.616837],[-6.474295,56.651205],[-6.45268,56.674796],[-6.453415,56.68778]]]]}',
      metadata: ["Argyll and Bute"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.076991,55.946849],[-3.07768,55.946793],[-3.096338,55.951656],[-3.099083,55.951925],[-3.100389,55.952711],[-3.116264,55.956846],[-3.182337,55.991395],[-3.199344,55.980326],[-3.218246,55.98055],[-3.220719,55.987869],[-3.221917,55.980787],[-3.222575,55.98768],[-3.225856,55.987131],[-3.26279,55.979157],[-3.283668,55.981104],[-3.298002,55.982439],[-3.30378,55.975263],[-3.351966,56.00158],[-3.372006,55.995319],[-3.382275,55.991623],[-3.383465,55.991736],[-3.389691,55.989789],[-3.414738,55.992699],[-3.414052,55.994646],[-3.420596,55.995267],[-3.425348,55.993823],[-3.425964,55.993877],[-3.429703,55.981812],[-3.448266,55.977575],[-3.443374,55.961485],[-3.424913,55.953755],[-3.449529,55.950936],[-3.41811,55.933618],[-3.431119,55.931828],[-3.444197,55.907742],[-3.387708,55.902854],[-3.413813,55.878354],[-3.396589,55.868732],[-3.41684,55.860353],[-3.42014,55.846006],[-3.395975,55.831736],[-3.394763,55.81974],[-3.369036,55.824109],[-3.350673,55.827133],[-3.295542,55.86622],[-3.265732,55.876102],[-3.253927,55.868578],[-3.238412,55.88274],[-3.209088,55.883253],[-3.201545,55.894821],[-3.162438,55.889086],[-3.092675,55.899802],[-3.117677,55.91345],[-3.111672,55.92969],[-3.088577,55.931385],[-3.076991,55.946849]]]}',
      metadata: ["City of Edinburgh"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.393185,55.889146],[-4.4841,55.928276],[-4.575461,55.934112],[-4.614363,55.930221],[-4.616386,55.930439],[-4.635026,55.913726],[-4.613215,55.906031],[-4.61915,55.889029],[-4.599099,55.879673],[-4.610385,55.869067],[-4.597299,55.862396],[-4.622807,55.861594],[-4.62302,55.849831],[-4.643322,55.839081],[-4.701201,55.840915],[-4.729383,55.853268],[-4.750922,55.849763],[-4.783709,55.839789],[-4.72235,55.820786],[-4.73035,55.811013],[-4.720456,55.805107],[-4.685697,55.803737],[-4.66112,55.759701],[-4.633733,55.77604],[-4.630781,55.76444],[-4.616536,55.761496],[-4.574642,55.783452],[-4.550936,55.766382],[-4.541934,55.778526],[-4.521959,55.774416],[-4.495768,55.790733],[-4.495143,55.801445],[-4.472714,55.797793],[-4.465805,55.804726],[-4.400557,55.810945],[-4.381414,55.823148],[-4.368029,55.84544],[-4.380873,55.856342],[-4.364671,55.855324],[-4.353434,55.873738],[-4.393185,55.889146]]]}',
      metadata: ["Renfrewshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.402037,55.971829],[-4.430339,55.979024],[-4.447802,56.004095],[-4.469705,56.00196],[-4.482395,56.011521],[-4.498936,56.047616],[-4.480501,56.051455],[-4.47548,56.061218],[-4.504863,56.067574],[-4.506307,56.058591],[-4.53235,56.073423],[-4.58737,56.073224],[-4.598188,56.084226],[-4.62194,56.045013],[-4.601532,56.020224],[-4.629672,56.009974],[-4.63033,56.002671],[-4.652935,56.008105],[-4.65989,56.002747],[-4.616229,55.987354],[-4.624947,55.972402],[-4.602231,55.958024],[-4.609885,55.946619],[-4.609615,55.946563],[-4.563408,55.935314],[-4.575461,55.934112],[-4.4841,55.928276],[-4.393185,55.889146],[-4.375475,55.900024],[-4.389953,55.910511],[-4.379617,55.92098],[-4.402037,55.971829]]]}',
      metadata: ["West Dunbartonshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.425964,55.993877],[-3.508993,56.001135],[-3.5364,55.985723],[-3.59996,55.996841],[-3.656992,55.964777],[-3.652931,55.959259],[-3.674212,55.953924],[-3.667577,55.945435],[-3.703345,55.934558],[-3.732168,55.935331],[-3.782106,55.90163],[-3.822555,55.896491],[-3.831249,55.89359],[-3.822857,55.883869],[-3.795507,55.873515],[-3.773417,55.880992],[-3.762229,55.872693],[-3.725147,55.884854],[-3.711922,55.882071],[-3.711127,55.873799],[-3.750248,55.858999],[-3.739782,55.830504],[-3.715072,55.814054],[-3.741633,55.799406],[-3.733469,55.793033],[-3.744012,55.782009],[-3.732716,55.77787],[-3.69867,55.794629],[-3.591509,55.810216],[-3.554999,55.785691],[-3.547064,55.790733],[-3.471635,55.77097],[-3.439401,55.784594],[-3.435529,55.805496],[-3.394763,55.81974],[-3.395975,55.831736],[-3.42014,55.846006],[-3.41684,55.860353],[-3.396589,55.868732],[-3.413813,55.878354],[-3.387708,55.902854],[-3.444197,55.907742],[-3.431119,55.931828],[-3.41811,55.933618],[-3.449529,55.950936],[-3.424913,55.953755],[-3.443374,55.961485],[-3.448266,55.977575],[-3.429703,55.981812],[-3.425964,55.993877]]]}',
      metadata: ["West Lothian"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.424983,56.753459],[-2.462195,56.747567],[-2.530303,56.785252],[-2.616241,56.783455],[-2.63161,56.809077],[-2.652787,56.810422],[-2.65097,56.822597],[-2.670556,56.842281],[-2.661147,56.88572],[-2.680963,56.887981],[-2.686753,56.915066],[-2.724687,56.92583],[-2.74002,56.948487],[-2.765049,56.959776],[-2.824509,56.961936],[-2.833166,56.977007],[-2.851087,56.972566],[-2.892429,56.986804],[-2.912959,56.981636],[-2.910245,56.975788],[-2.944675,56.973771],[-2.954079,56.966801],[-3.02634,56.972773],[-3.08317,56.958432],[-3.110773,56.918732],[-3.106754,56.895037],[-3.120338,56.888447],[-3.160447,56.906822],[-3.173916,56.900398],[-3.232551,56.917716],[-3.269936,56.919876],[-3.284247,56.928557],[-3.284854,56.907267],[-3.337062,56.895839],[-3.372138,56.874615],[-3.407022,56.843406],[-3.351637,56.820276],[-3.366731,56.813436],[-3.357642,56.804434],[-3.389798,56.769234],[-3.37784,56.75323],[-3.357841,56.747654],[-3.363947,56.738118],[-3.352784,56.726151],[-3.306808,56.702711],[-3.308529,56.689948],[-3.283801,56.677796],[-3.284477,56.665723],[-3.26411,56.670596],[-3.212743,56.655379],[-3.151321,56.653167],[-3.153673,56.637908],[-3.178137,56.635598],[-3.171352,56.62612],[-3.191284,56.621949],[-3.153064,56.613876],[-3.165867,56.5989],[-3.14404,56.59556],[-3.110189,56.613956],[-3.088144,56.613186],[-3.13266,56.579091],[-3.190205,56.561295],[-3.164045,56.53814],[-3.173024,56.526192],[-3.212066,56.524285],[-3.184648,56.507786],[-3.191567,56.503287],[-3.142043,56.487551],[-3.143628,56.479744],[-3.118743,56.476827],[-3.119612,56.467669],[-3.089427,56.466937],[-3.098041,56.47925],[-3.051091,56.482532],[-3.052033,56.496853],[-3.031726,56.502457],[-2.969604,56.494226],[-2.947203,56.503982],[-2.896508,56.493194],[-2.838353,56.492487],[-2.845715,56.4779],[-2.839693,56.473688],[-2.838656,56.47407],[-2.794961,56.480491],[-2.749803,56.46841],[-2.733158,56.466109],[-2.716038,56.495362],[-2.651724,56.520875],[-2.63674,56.526809],[-2.606193,56.550348],[-2.605569,56.550499],[-2.537505,56.566888],[-2.537522,56.575982],[-2.522463,56.580725],[-2.482302,56.619327],[-2.480245,56.621354],[-2.494897,56.629777],[-2.502335,56.630423],[-2.511306,56.651606],[-2.483575,56.67165],[-2.45993,56.67706],[-2.444721,56.684243],[-2.440264,56.69269],[-2.442524,56.701866],[-2.454614,56.703475],[-2.438381,56.730876],[-2.424983,56.753459]]]}',
      metadata: ["Angus"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.839693,56.473688],[-2.845715,56.4779],[-2.838353,56.492487],[-2.896508,56.493194],[-2.947203,56.503982],[-2.969604,56.494226],[-3.031726,56.502457],[-3.052033,56.496853],[-3.051091,56.482532],[-3.098041,56.47925],[-3.089427,56.466937],[-3.087476,56.461922],[-3.057853,56.463042],[-3.052069,56.458331],[-3.05193,56.458382],[-3.039299,56.451005],[-3.003119,56.451233],[-2.939302,56.464676],[-2.922312,56.465959],[-2.915258,56.467514],[-2.909807,56.466901],[-2.890046,56.468388],[-2.870954,56.462528],[-2.87017,56.462439],[-2.839693,56.473688]]]}',
      metadata: ["Dundee City"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.152376,56.008036],[-4.162723,56.030291],[-4.198047,56.010121],[-4.222531,56.02033],[-4.256994,56.017227],[-4.281417,56.028416],[-4.299538,56.017371],[-4.275028,55.993219],[-4.272652,55.965344],[-4.288637,55.966831],[-4.2864,55.957782],[-4.33521,55.959415],[-4.366374,55.980412],[-4.402037,55.971829],[-4.379617,55.92098],[-4.346215,55.916492],[-4.348485,55.905235],[-4.32784,55.89969],[-4.290421,55.911792],[-4.301264,55.916363],[-4.29805,55.929167],[-4.268383,55.928493],[-4.236359,55.896837],[-4.180416,55.904909],[-4.19449,55.913115],[-4.17159,55.91673],[-4.129644,55.911256],[-4.109142,55.9175],[-4.111365,55.92327],[-4.05793,55.92351],[-4.07144,55.943916],[-4.046862,55.952262],[-4.062778,55.968204],[-4.122999,55.953089],[-4.112842,55.976987],[-4.152376,56.008036]]]}',
      metadata: ["East Dunbartonshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.739414,56.077113],[-3.739291,56.077061],[-3.686345,56.048052],[-3.61751,56.055963],[-3.608081,56.04617],[-3.606911,56.046142],[-3.593848,56.045825],[-3.590433,56.059462],[-3.575524,56.058865],[-3.549915,56.041791],[-3.540683,56.04024],[-3.521682,56.041733],[-3.463299,56.030234],[-3.455939,56.02037],[-3.442803,56.017909],[-3.448864,56.021608],[-3.43846,56.023781],[-3.41837,56.016109],[-3.412828,56.016588],[-3.391416,56.006107],[-3.388057,56.022502],[-3.402773,56.024144],[-3.395419,56.029156],[-3.37414,56.027449],[-3.350132,56.030237],[-3.334502,56.039571],[-3.322257,56.033578],[-3.294962,56.052958],[-3.287538,56.05125],[-3.28392,56.053114],[-3.284271,56.056171],[-3.266183,56.059404],[-3.243576,56.055109],[-3.234238,56.054664],[-3.216753,56.063851],[-3.17438,56.0626],[-3.151445,56.113497],[-3.151016,56.1167],[-3.14982,56.117098],[-3.14946,56.117895],[-3.146017,56.118365],[-3.107316,56.131242],[-3.05447,56.162687],[-3.054403,56.16274],[-3.054356,56.162755],[-3.0462,56.167601],[-3.004897,56.185583],[-3.007376,56.180432],[-3.005864,56.181333],[-2.998592,56.188578],[-2.996654,56.190508],[-3.014368,56.194188],[-2.996308,56.192391],[-2.969004,56.203276],[-2.961659,56.207644],[-2.95765,56.207799],[-2.943348,56.213494],[-2.914828,56.209446],[-2.914118,56.209473],[-2.913032,56.209191],[-2.889952,56.205909],[-2.872579,56.197858],[-2.878504,56.19464],[-2.87638,56.192863],[-2.86603,56.192985],[-2.867838,56.189565],[-2.869171,56.187043],[-2.833717,56.184967],[-2.818937,56.189661],[-2.813559,56.183782],[-2.812259,56.183705],[-2.801001,56.190017],[-2.781604,56.200886],[-2.770732,56.203039],[-2.770436,56.203196],[-2.706601,56.217927],[-2.704119,56.22266],[-2.697395,56.220048],[-2.692441,56.221189],[-2.647069,56.247381],[-2.62951,56.257504],[-2.602855,56.263519],[-2.595777,56.269867],[-2.588908,56.280183],[-2.630394,56.292874],[-2.648092,56.307898],[-2.660383,56.318324],[-2.777457,56.332703],[-2.779759,56.335875],[-2.783443,56.337813],[-2.790245,56.335001],[-2.784493,56.338365],[-2.790486,56.341516],[-2.806168,56.3445],[-2.819773,56.367855],[-2.83886,56.352931],[-2.863899,56.363981],[-2.84548,56.369411],[-2.839043,56.371308],[-2.810919,56.391256],[-2.808254,56.441536],[-2.865506,56.440131],[-2.879793,56.450014],[-2.916341,56.451567],[-2.921859,56.451424],[-2.974399,56.427753],[-2.989987,56.42072],[-3.039647,56.415668],[-3.190993,56.366573],[-3.226316,56.35507],[-3.274625,56.35064],[-3.255642,56.346268],[-3.25603,56.340097],[-3.300621,56.31398],[-3.293698,56.288704],[-3.324829,56.282801],[-3.335533,56.28945],[-3.383664,56.268781],[-3.353305,56.255272],[-3.367491,56.239761],[-3.279984,56.233846],[-3.290233,56.224981],[-3.264869,56.220055],[-3.274928,56.214164],[-3.260947,56.196138],[-3.309125,56.185305],[-3.296535,56.170576],[-3.316418,56.166485],[-3.345447,56.172941],[-3.371718,56.1644],[-3.369912,56.14584],[-3.416635,56.138421],[-3.453703,56.150378],[-3.540007,56.146462],[-3.546102,56.158524],[-3.563963,56.159811],[-3.582887,56.150872],[-3.580952,56.13931],[-3.628347,56.13277],[-3.663939,56.123046],[-3.628787,56.110441],[-3.672583,56.107799],[-3.674474,56.100232],[-3.714622,56.104487],[-3.739414,56.077113]]]}',
      metadata: ["Fife"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.801646,56.93588],[-3.824278,56.938387],[-3.854833,56.922788],[-3.894724,56.922756],[-3.900288,56.931841],[-3.936367,56.935429],[-3.938613,56.948621],[-3.950685,56.947116],[-3.969406,56.929377],[-3.967763,56.89928],[-3.999385,56.89029],[-4.01155,56.898021],[-4.022892,56.888753],[-4.034756,56.901488],[-4.040887,56.896174],[-4.111458,56.894731],[-4.168271,56.904698],[-4.174492,56.911707],[-4.205541,56.884447],[-4.191918,56.877467],[-4.1994,56.870443],[-4.216954,56.869],[-4.227696,56.857603],[-4.303959,56.851397],[-4.329722,56.836968],[-4.33051,56.823931],[-4.343325,56.821287],[-4.374264,56.832259],[-4.441844,56.773843],[-4.469098,56.777858],[-4.520512,56.805259],[-4.549653,56.781947],[-4.546793,56.772367],[-4.589872,56.759881],[-4.575995,56.734789],[-4.605917,56.707959],[-4.591208,56.704469],[-4.592016,56.693182],[-4.657569,56.674742],[-4.717536,56.676588],[-4.71542,56.642328],[-4.664137,56.639797],[-4.629811,56.655016],[-4.618326,56.637781],[-4.636796,56.625025],[-4.626424,56.615597],[-4.609817,56.61481],[-4.55984,56.573003],[-4.599524,56.576659],[-4.697585,56.549956],[-4.697625,56.541044],[-4.659453,56.534452],[-4.653723,56.52601],[-4.658299,56.510683],[-4.686206,56.490547],[-4.670833,56.479752],[-4.639066,56.476037],[-4.628472,56.474307],[-4.625147,56.486484],[-4.577263,56.50522],[-4.528502,56.504898],[-4.528795,56.518566],[-4.507416,56.523363],[-4.494355,56.512657],[-4.477391,56.51301],[-4.441978,56.525737],[-4.378494,56.533592],[-4.365033,56.547091],[-4.331225,56.539018],[-4.296886,56.475044],[-4.194444,56.49532],[-4.154482,56.510285],[-4.127551,56.501278],[-4.108229,56.488358],[-4.098618,56.465345],[-4.134435,56.464024],[-4.161892,56.444727],[-4.202051,56.457819],[-4.196452,56.386696],[-4.240623,56.384391],[-4.24203,56.352781],[-4.222628,56.342302],[-4.237264,56.329034],[-4.188206,56.304218],[-4.139871,56.29782],[-4.115694,56.281031],[-4.084079,56.280889],[-4.078503,56.289915],[-4.052206,56.273491],[-4.038547,56.280263],[-4.037562,56.269111],[-4.005281,56.274934],[-3.940362,56.228019],[-3.916295,56.224927],[-3.900704,56.234103],[-3.873135,56.214462],[-3.847202,56.225972],[-3.843888,56.201814],[-3.82945,56.196549],[-3.780879,56.217227],[-3.752188,56.211908],[-3.73682,56.18905],[-3.686454,56.195853],[-3.666936,56.188628],[-3.651068,56.202971],[-3.638063,56.196854],[-3.618151,56.20561],[-3.57515,56.196087],[-3.58234,56.184422],[-3.597977,56.181091],[-3.593132,56.173076],[-3.647857,56.159677],[-3.636661,56.151289],[-3.644786,56.137619],[-3.628347,56.13277],[-3.580952,56.13931],[-3.582887,56.150872],[-3.563963,56.159811],[-3.546102,56.158524],[-3.540007,56.146462],[-3.453703,56.150378],[-3.416635,56.138421],[-3.369912,56.14584],[-3.371718,56.1644],[-3.345447,56.172941],[-3.316418,56.166485],[-3.296535,56.170576],[-3.309125,56.185305],[-3.260947,56.196138],[-3.274928,56.214164],[-3.264869,56.220055],[-3.290233,56.224981],[-3.279984,56.233846],[-3.367491,56.239761],[-3.353305,56.255272],[-3.383664,56.268781],[-3.335533,56.28945],[-3.324829,56.282801],[-3.293698,56.288704],[-3.300621,56.31398],[-3.25603,56.340097],[-3.255642,56.346268],[-3.274625,56.35064],[-3.27711,56.350411],[-3.296133,56.352882],[-3.301224,56.353542],[-3.29626,56.356637],[-3.294205,56.357918],[-3.263816,56.362719],[-3.260479,56.366134],[-3.229194,56.368178],[-3.228818,56.368238],[-3.126563,56.431087],[-3.052069,56.458331],[-3.057853,56.463042],[-3.087476,56.461922],[-3.089427,56.466937],[-3.119612,56.467669],[-3.118743,56.476827],[-3.143628,56.479744],[-3.142043,56.487551],[-3.191567,56.503287],[-3.184648,56.507786],[-3.212066,56.524285],[-3.173024,56.526192],[-3.164045,56.53814],[-3.190205,56.561295],[-3.13266,56.579091],[-3.088144,56.613186],[-3.110189,56.613956],[-3.14404,56.59556],[-3.165867,56.5989],[-3.153064,56.613876],[-3.191284,56.621949],[-3.171352,56.62612],[-3.178137,56.635598],[-3.153673,56.637908],[-3.151321,56.653167],[-3.212743,56.655379],[-3.26411,56.670596],[-3.284477,56.665723],[-3.283801,56.677796],[-3.308529,56.689948],[-3.306808,56.702711],[-3.352784,56.726151],[-3.363947,56.738118],[-3.357841,56.747654],[-3.37784,56.75323],[-3.389798,56.769234],[-3.357642,56.804434],[-3.366731,56.813436],[-3.351637,56.820276],[-3.407022,56.843406],[-3.372138,56.874615],[-3.404962,56.884021],[-3.421287,56.879573],[-3.429832,56.886546],[-3.465707,56.872811],[-3.502541,56.887112],[-3.52925,56.883607],[-3.537655,56.892255],[-3.560782,56.884103],[-3.56846,56.894622],[-3.558717,56.900346],[-3.583217,56.931035],[-3.645821,56.923043],[-3.654735,56.932898],[-3.675471,56.932442],[-3.683552,56.916116],[-3.710269,56.913579],[-3.740686,56.933608],[-3.783498,56.923081],[-3.801646,56.93588]]]}',
      metadata: ["Perth and Kinross"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.180416,55.904909],[-4.236359,55.896837],[-4.268383,55.928493],[-4.29805,55.929167],[-4.301264,55.916363],[-4.290421,55.911792],[-4.32784,55.89969],[-4.348485,55.905235],[-4.346215,55.916492],[-4.379617,55.92098],[-4.389953,55.910511],[-4.375475,55.900024],[-4.393185,55.889146],[-4.353434,55.873738],[-4.364671,55.855324],[-4.380873,55.856342],[-4.368029,55.84544],[-4.381414,55.823148],[-4.367453,55.8177],[-4.372059,55.794765],[-4.333448,55.792874],[-4.326238,55.808445],[-4.292625,55.813936],[-4.260682,55.811014],[-4.268246,55.79164],[-4.250741,55.784886],[-4.226698,55.781275],[-4.22393,55.791944],[-4.204285,55.800446],[-4.21453,55.815072],[-4.225488,55.812173],[-4.233752,55.818656],[-4.227576,55.840815],[-4.220433,55.833104],[-4.203007,55.84413],[-4.198829,55.833648],[-4.18049,55.835609],[-4.172507,55.822967],[-4.130597,55.83328],[-4.111151,55.825868],[-4.107032,55.834653],[-4.102169,55.84251],[-4.074704,55.84412],[-4.088392,55.853842],[-4.071705,55.861266],[-4.078807,55.8816],[-4.107292,55.88745],[-4.164381,55.883579],[-4.161513,55.897968],[-4.180416,55.904909]]]}',
      metadata: ["Glasgow City"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Scotland",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-4.020121,56.028037],[-4.096102,56.027501],[-4.123465,56.009976],[-4.152376,56.008036],[-4.112842,55.976987],[-4.122999,55.953089],[-4.062778,55.968204],[-4.046862,55.952262],[-4.07144,55.943916],[-4.05793,55.92351],[-4.111365,55.92327],[-4.109142,55.9175],[-4.129644,55.911256],[-4.17159,55.91673],[-4.19449,55.913115],[-4.180416,55.904909],[-4.161513,55.897968],[-4.164381,55.883579],[-4.107292,55.88745],[-4.078807,55.8816],[-4.071705,55.861266],[-4.088392,55.853842],[-4.074704,55.84412],[-4.102169,55.84251],[-4.107032,55.834653],[-4.045826,55.811717],[-4.048416,55.797261],[-3.999146,55.778908],[-4.001665,55.77043],[-3.973719,55.767096],[-3.930123,55.748509],[-3.918597,55.734758],[-3.888225,55.759122],[-3.766412,55.770053],[-3.744012,55.782009],[-3.733469,55.793033],[-3.741633,55.799406],[-3.715072,55.814054],[-3.739782,55.830504],[-3.750248,55.858999],[-3.711127,55.873799],[-3.711922,55.882071],[-3.725147,55.884854],[-3.762229,55.872693],[-3.773417,55.880992],[-3.795507,55.873515],[-3.822857,55.883869],[-3.831249,55.89359],[-3.822555,55.896491],[-3.809169,55.904858],[-3.833029,55.9078],[-3.90381,55.937942],[-3.860339,55.959234],[-3.93587,55.962283],[-3.949722,55.971443],[-3.945515,55.982439],[-3.964811,55.987102],[-3.985231,55.982782],[-3.989324,55.987284],[-3.974635,55.990877],[-3.988418,56.007789],[-4.030341,56.009733],[-4.020121,56.028037]]]}',
      metadata: ["North Lanarkshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.643979,53.32043],[-4.647259,53.320832],[-4.62361,53.329572],[-4.661929,53.318883],[-4.682152,53.322647],[-4.696215,53.307145],[-4.67773,53.298293],[-4.68018,53.29434],[-4.682763,53.283511],[-4.677711,53.282771],[-4.655757,53.286143],[-4.652705,53.287437],[-4.651598,53.287906],[-4.649996,53.287498],[-4.617285,53.279147],[-4.625574,53.269282],[-4.608517,53.255913],[-4.612349,53.248285],[-4.610511,53.245444],[-4.600747,53.2416],[-4.597032,53.240408],[-4.567397,53.243882],[-4.556717,53.245668],[-4.572686,53.261615],[-4.561834,53.263998],[-4.584511,53.26325],[-4.576416,53.272428],[-4.597359,53.274374],[-4.598016,53.282732],[-4.609897,53.279339],[-4.586937,53.288883],[-4.583786,53.290193],[-4.584983,53.301179],[-4.611191,53.30278],[-4.620448,53.312336],[-4.620895,53.312657],[-4.631357,53.307826],[-4.625234,53.318132],[-4.625302,53.31814],[-4.627708,53.314464],[-4.6482,53.318667],[-4.643979,53.32043]]],[[[-4.409374,53.423659],[-4.425045,53.429965],[-4.431466,53.428284],[-4.450301,53.423052],[-4.450441,53.415977],[-4.450208,53.412894],[-4.47812,53.422233],[-4.491921,53.411185],[-4.503806,53.409986],[-4.505264,53.409262],[-4.505674,53.409797],[-4.509475,53.409413],[-4.510082,53.415566],[-4.510814,53.416523],[-4.529798,53.40606],[-4.564653,53.404212],[-4.574112,53.403469],[-4.555124,53.373735],[-4.561241,53.363167],[-4.571162,53.33752],[-4.577826,53.334487],[-4.582164,53.326978],[-4.579231,53.324076],[-4.562363,53.316752],[-4.563142,53.299444],[-4.529725,53.309511],[-4.572079,53.289205],[-4.57479,53.287904],[-4.578838,53.289059],[-4.58351,53.290392],[-4.581193,53.289008],[-4.576183,53.286014],[-4.588615,53.281283],[-4.560337,53.264549],[-4.554233,53.267633],[-4.555477,53.249676],[-4.535896,53.236978],[-4.523486,53.232583],[-4.523157,53.237578],[-4.512737,53.238618],[-4.521818,53.231992],[-4.523527,53.231957],[-4.523886,53.226501],[-4.497342,53.207226],[-4.504224,53.187107],[-4.48832,53.186606],[-4.488038,53.185189],[-4.487507,53.185127],[-4.487781,53.183899],[-4.48645,53.177209],[-4.466735,53.182256],[-4.466788,53.184186],[-4.460094,53.194625],[-4.466137,53.18337],[-4.443579,53.155035],[-4.443503,53.15505],[-4.396863,53.187881],[-4.396141,53.188106],[-4.385015,53.191573],[-4.38506,53.191358],[-4.389592,53.169711],[-4.395056,53.168646],[-4.419794,53.163817],[-4.40758,53.144343],[-4.410054,53.141552],[-4.413532,53.136314],[-4.398688,53.144976],[-4.39587,53.144237],[-4.395752,53.144303],[-4.394258,53.143814],[-4.393665,53.143659],[-4.328944,53.126656],[-4.355027,53.134416],[-4.337571,53.142785],[-4.336188,53.147538],[-4.340118,53.148588],[-4.330927,53.165618],[-4.33441,53.148958],[-4.318609,53.149981],[-4.317675,53.14415],[-4.218526,53.185621],[-4.212704,53.196761],[-4.205002,53.213069],[-4.203988,53.213427],[-4.202773,53.21575],[-4.170837,53.225155],[-4.159236,53.233893],[-4.115946,53.24931],[-4.097903,53.257313],[-4.08227,53.271756],[-4.081736,53.275259],[-4.044488,53.306617],[-4.040162,53.310605],[-4.103098,53.317399],[-4.119701,53.319186],[-4.143348,53.305318],[-4.182094,53.296982],[-4.204079,53.292245],[-4.210778,53.296454],[-4.214511,53.298798],[-4.204259,53.31381],[-4.219102,53.319021],[-4.233852,53.340622],[-4.230063,53.35775],[-4.264777,53.360812],[-4.279991,53.376092],[-4.276356,53.371062],[-4.295692,53.364623],[-4.269379,53.390547],[-4.287231,53.416917],[-4.290023,53.414209],[-4.293014,53.411072],[-4.305214,53.41383],[-4.326563,53.417646],[-4.334388,53.413284],[-4.338795,53.419606],[-4.356363,53.414215],[-4.3682,53.424059],[-4.402575,53.420922],[-4.409374,53.423659]]]]}',
      metadata: ["Isle of Anglesey"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.780223,52.75899],[-4.779898,52.766095],[-4.793428,52.768496],[-4.801652,52.745081],[-4.780223,52.75899]]],[[[-4.209426,53.203031],[-4.209476,53.202995],[-4.209479,53.202929],[-4.209426,53.203031]]],[[[-3.457982,52.984888],[-3.504542,52.96535],[-3.533808,52.973686],[-3.58299,52.967537],[-3.610788,52.996014],[-3.599622,53.01169],[-3.615321,53.01135],[-3.67295,52.997052],[-3.683026,52.986844],[-3.735342,52.979851],[-3.769723,52.959304],[-3.813224,52.949372],[-3.841033,52.962297],[-3.849375,52.977325],[-3.89656,52.994898],[-3.887811,53.011588],[-3.898936,53.020567],[-3.985423,53.010653],[-3.997214,53.037651],[-3.977062,53.068933],[-3.991323,53.076494],[-3.986675,53.084202],[-4.013598,53.089705],[-4.014103,53.103556],[-4.031338,53.105647],[-4.021014,53.124587],[-3.99549,53.125034],[-4.020119,53.124822],[-4.008626,53.142683],[-3.970329,53.160186],[-3.964975,53.18339],[-3.939047,53.200111],[-3.935293,53.214875],[-3.979355,53.231891],[-3.998201,53.248387],[-4.007301,53.246822],[-4.007388,53.246924],[-4.085574,53.225647],[-4.091084,53.236697],[-4.099028,53.234412],[-4.106264,53.232329],[-4.113244,53.236883],[-4.114472,53.231407],[-4.122372,53.237075],[-4.159833,53.223894],[-4.167004,53.221369],[-4.199319,53.20998],[-4.210245,53.187091],[-4.210338,53.185166],[-4.211371,53.184731],[-4.212107,53.183187],[-4.243632,53.170458],[-4.263842,53.154402],[-4.277427,53.14269],[-4.273622,53.13281],[-4.283146,53.139489],[-4.305691,53.129841],[-4.311885,53.127125],[-4.313033,53.114695],[-4.313777,53.106631],[-4.305835,53.107867],[-4.319327,53.092796],[-4.333831,53.113991],[-4.333245,53.1143],[-4.319616,53.121485],[-4.324112,53.121762],[-4.324405,53.121634],[-4.33891,53.12137],[-4.346596,53.114276],[-4.346527,53.114039],[-4.336402,53.07913],[-4.338328,53.074066],[-4.340662,53.052],[-4.352048,53.037954],[-4.353855,53.033194],[-4.386417,53.012863],[-4.410158,52.998022],[-4.427861,52.99847],[-4.437505,52.998319],[-4.47159,52.966739],[-4.519599,52.940319],[-4.560082,52.937728],[-4.567448,52.948547],[-4.570571,52.938883],[-4.599911,52.928938],[-4.615149,52.923768],[-4.632157,52.905968],[-4.649699,52.906187],[-4.649764,52.906186],[-4.65094,52.905001],[-4.668827,52.880076],[-4.678017,52.877687],[-4.696065,52.859459],[-4.726165,52.853512],[-4.722537,52.836269],[-4.766936,52.796709],[-4.733627,52.782374],[-4.732322,52.781854],[-4.720903,52.80282],[-4.688442,52.793856],[-4.677332,52.798893],[-4.66561,52.805087],[-4.664365,52.80477],[-4.661305,52.806157],[-4.644011,52.799834],[-4.642617,52.800658],[-4.612546,52.822612],[-4.60477,52.823002],[-4.601473,52.824947],[-4.536183,52.800281],[-4.542573,52.786489],[-4.528028,52.777703],[-4.514851,52.792967],[-4.486515,52.794816],[-4.486444,52.795033],[-4.489874,52.808009],[-4.499858,52.812272],[-4.497376,52.825659],[-4.506154,52.824975],[-4.496065,52.831415],[-4.496381,52.832609],[-4.470937,52.847441],[-4.470329,52.847829],[-4.476512,52.857672],[-4.467158,52.862624],[-4.45995,52.86963],[-4.450405,52.871489],[-4.442524,52.875657],[-4.39758,52.882219],[-4.397582,52.882378],[-4.415126,52.885231],[-4.407382,52.891736],[-4.403295,52.884176],[-4.397643,52.88828],[-4.397678,52.891693],[-4.389091,52.894488],[-4.387203,52.895857],[-4.379956,52.895392],[-4.326654,52.891951],[-4.316314,52.908692],[-4.263835,52.910597],[-4.284723,52.917152],[-4.261276,52.910893],[-4.236915,52.91564],[-4.227569,52.918455],[-4.224983,52.917963],[-4.219099,52.919108],[-4.152059,52.906362],[-4.126633,52.929118],[-4.128633,52.921903],[-4.110397,52.919979],[-4.119187,52.918977],[-4.103535,52.908934],[-4.083744,52.919146],[-4.076771,52.922741],[-4.047658,52.926879],[-4.05907,52.916009],[-4.07185,52.917037],[-4.073785,52.915224],[-4.083099,52.905709],[-4.085564,52.90319],[-4.083023,52.904143],[-4.068633,52.909542],[-4.08284,52.900325],[-4.082958,52.900249],[-4.08648,52.901961],[-4.145247,52.893746],[-4.118968,52.847959],[-4.128486,52.828714],[-4.129023,52.827083],[-4.114894,52.832095],[-4.107925,52.826645],[-4.118682,52.83029],[-4.139612,52.815464],[-4.133859,52.824228],[-4.135041,52.823686],[-4.150601,52.80828],[-4.100602,52.758997],[-4.074881,52.733593],[-4.05893,52.717819],[-4.036245,52.721069],[-4.023204,52.736102],[-3.989167,52.736077],[-4.0115,52.713136],[-4.016235,52.720616],[-4.05144,52.703766],[-4.049839,52.715395],[-4.057305,52.687315],[-4.072329,52.679775],[-4.095009,52.668384],[-4.128602,52.611735],[-4.126517,52.607409],[-4.099923,52.579184],[-4.065879,52.542989],[-4.064389,52.541403],[-3.960487,52.560666],[-3.939821,52.5607],[-3.941632,52.557955],[-3.941797,52.557819],[-3.932931,52.552978],[-3.926609,52.560767],[-3.928853,52.571461],[-3.915355,52.578589],[-3.88378,52.577135],[-3.875271,52.592928],[-3.841884,52.599855],[-3.85045,52.620636],[-3.834614,52.633059],[-3.840714,52.650903],[-3.808096,52.677945],[-3.759352,52.669446],[-3.743907,52.681309],[-3.71676,52.678779],[-3.709368,52.671082],[-3.683928,52.693858],[-3.656375,52.691373],[-3.602017,52.704986],[-3.599294,52.725882],[-3.583514,52.738623],[-3.608713,52.794022],[-3.597058,52.814054],[-3.586476,52.827717],[-3.56817,52.822896],[-3.566673,52.83008],[-3.505285,52.841957],[-3.483012,52.865454],[-3.473562,52.871267],[-3.489968,52.895789],[-3.465115,52.92027],[-3.491428,52.933686],[-3.446713,52.963238],[-3.448745,52.973827],[-3.436785,52.980848],[-3.457982,52.984888]]]]}',
      metadata: ["Gwynedd"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.505185,53.31354],[-3.506175,53.310687],[-3.508641,53.313556],[-3.51145,53.316823],[-3.547503,53.306907],[-3.605809,53.290837],[-3.706901,53.293738],[-3.732118,53.300362],[-3.734136,53.304339],[-3.73911,53.314136],[-3.764872,53.318842],[-3.775049,53.328237],[-3.775222,53.328292],[-3.803144,53.32477],[-3.818805,53.322791],[-3.833007,53.338027],[-3.872947,53.339272],[-3.875303,53.33728],[-3.84451,53.318967],[-3.83547,53.302822],[-3.822951,53.280438],[-3.830052,53.286178],[-3.82639,53.281382],[-3.844792,53.294679],[-3.983486,53.259471],[-4.007388,53.246924],[-4.007301,53.246822],[-3.998201,53.248387],[-3.979355,53.231891],[-3.935293,53.214875],[-3.939047,53.200111],[-3.964975,53.18339],[-3.970329,53.160186],[-4.008626,53.142683],[-4.020119,53.124822],[-3.99549,53.125034],[-4.021014,53.124587],[-4.031338,53.105647],[-4.014103,53.103556],[-4.013598,53.089705],[-3.986675,53.084202],[-3.991323,53.076494],[-3.977062,53.068933],[-3.997214,53.037651],[-3.985423,53.010653],[-3.898936,53.020567],[-3.887811,53.011588],[-3.89656,52.994898],[-3.849375,52.977325],[-3.841033,52.962297],[-3.813224,52.949372],[-3.769723,52.959304],[-3.735342,52.979851],[-3.683026,52.986844],[-3.67295,52.997052],[-3.615321,53.01135],[-3.599622,53.01169],[-3.610788,52.996014],[-3.58299,52.967537],[-3.533808,52.973686],[-3.504542,52.96535],[-3.457982,52.984888],[-3.454591,52.997926],[-3.481184,53.018523],[-3.476275,53.02642],[-3.489658,53.037859],[-3.462609,53.046211],[-3.486888,53.065923],[-3.486929,53.08405],[-3.509867,53.076353],[-3.51571,53.089799],[-3.564931,53.094656],[-3.593058,53.078456],[-3.601618,53.08521],[-3.555954,53.10667],[-3.563343,53.119484],[-3.534072,53.139948],[-3.461014,53.164994],[-3.474459,53.176372],[-3.466025,53.220781],[-3.5092,53.241646],[-3.526343,53.240423],[-3.533079,53.248869],[-3.518338,53.256374],[-3.521919,53.283393],[-3.496482,53.302273],[-3.505185,53.31354]]]}',
      metadata: ["Conwy"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.129616,53.072368],[-3.151764,53.092963],[-3.145908,53.10395],[-3.176762,53.116087],[-3.182346,53.154037],[-3.208226,53.159844],[-3.244152,53.152298],[-3.271206,53.157466],[-3.280978,53.16859],[-3.275172,53.179421],[-3.307698,53.197714],[-3.304215,53.208031],[-3.317085,53.209995],[-3.322379,53.220409],[-3.30444,53.232924],[-3.333807,53.236663],[-3.361755,53.253083],[-3.329625,53.273367],[-3.357034,53.283928],[-3.356037,53.29727],[-3.375131,53.291654],[-3.394341,53.301708],[-3.381308,53.315827],[-3.400598,53.313827],[-3.393463,53.326983],[-3.388347,53.323233],[-3.36818,53.335238],[-3.366695,53.3514],[-3.480563,53.32838],[-3.502603,53.318005],[-3.503742,53.317469],[-3.503919,53.317184],[-3.505185,53.31354],[-3.496482,53.302273],[-3.521919,53.283393],[-3.518338,53.256374],[-3.533079,53.248869],[-3.526343,53.240423],[-3.5092,53.241646],[-3.466025,53.220781],[-3.474459,53.176372],[-3.461014,53.164994],[-3.534072,53.139948],[-3.563343,53.119484],[-3.555954,53.10667],[-3.601618,53.08521],[-3.593058,53.078456],[-3.564931,53.094656],[-3.51571,53.089799],[-3.509867,53.076353],[-3.486929,53.08405],[-3.486888,53.065923],[-3.462609,53.046211],[-3.489658,53.037859],[-3.476275,53.02642],[-3.481184,53.018523],[-3.454591,52.997926],[-3.457982,52.984888],[-3.436785,52.980848],[-3.448745,52.973827],[-3.446713,52.963238],[-3.491428,52.933686],[-3.465115,52.92027],[-3.489968,52.895789],[-3.473562,52.871267],[-3.483012,52.865454],[-3.467247,52.862078],[-3.388824,52.87607],[-3.375015,52.892453],[-3.348875,52.916332],[-3.353315,52.921972],[-3.32434,52.931844],[-3.314308,52.946801],[-3.297402,52.942967],[-3.23744,52.951013],[-3.197975,52.944206],[-3.096726,52.959248],[-3.1107,52.961725],[-3.092149,52.964276],[-3.090295,52.971619],[-3.111281,52.969389],[-3.105179,52.973372],[-3.122288,52.97676],[-3.120551,52.985545],[-3.148765,52.998577],[-3.13089,53.023876],[-3.14779,53.043807],[-3.129616,53.072368]]]}',
      metadata: ["Denbighshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.107398,53.271765],[-3.111344,53.266363],[-3.101723,53.267221],[-3.112263,53.262665],[-3.095486,53.262127],[-3.094462,53.261391],[-3.092584,53.260187],[-3.091618,53.25963],[-3.091419,53.25951],[-3.086076,53.25683],[-3.107398,53.271765]]],[[[-3.086015,53.256799],[-3.085963,53.256773],[-3.0856,53.256638],[-3.109357,53.257608],[-3.073825,53.242003],[-3.059273,53.245748],[-3.075166,53.241084],[-3.072186,53.235373],[-3.077007,53.242739],[-3.081038,53.244704],[-3.089321,53.244738],[-3.084935,53.240234],[-3.094652,53.244824],[-3.066146,53.227134],[-3.108952,53.240916],[-3.201219,53.293614],[-3.20168,53.293783],[-3.247022,53.310427],[-3.258274,53.314552],[-3.259546,53.319152],[-3.259671,53.318491],[-3.264638,53.324672],[-3.273218,53.320663],[-3.298326,53.33208],[-3.312446,53.342318],[-3.310843,53.355572],[-3.36343,53.352058],[-3.366695,53.3514],[-3.36818,53.335238],[-3.388347,53.323233],[-3.393463,53.326983],[-3.400598,53.313827],[-3.381308,53.315827],[-3.394341,53.301708],[-3.375131,53.291654],[-3.356037,53.29727],[-3.357034,53.283928],[-3.329625,53.273367],[-3.361755,53.253083],[-3.333807,53.236663],[-3.30444,53.232924],[-3.322379,53.220409],[-3.317085,53.209995],[-3.304215,53.208031],[-3.307698,53.197714],[-3.275172,53.179421],[-3.280978,53.16859],[-3.271206,53.157466],[-3.244152,53.152298],[-3.208226,53.159844],[-3.182346,53.154037],[-3.176762,53.116087],[-3.145908,53.10395],[-3.151764,53.092963],[-3.129616,53.072368],[-3.07134,53.089611],[-3.058851,53.085332],[-3.035045,53.096795],[-3.027559,53.092973],[-3.029148,53.103515],[-2.996852,53.129935],[-2.963813,53.132758],[-2.979498,53.150622],[-2.995088,53.154196],[-2.927839,53.171411],[-2.922299,53.189293],[-2.998378,53.235859],[-3.036024,53.251805],[-3.086015,53.256799]]]]}',
      metadata: ["Flintshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.726841,52.983273],[-2.75994,52.98642],[-2.768275,52.994861],[-2.803311,52.989594],[-2.835996,52.99715],[-2.844062,53.017668],[-2.861044,53.022849],[-2.855715,53.037256],[-2.870118,53.045361],[-2.85924,53.054256],[-2.872555,53.058616],[-2.861475,53.06066],[-2.881644,53.074392],[-2.875722,53.081522],[-2.902074,53.092039],[-2.881099,53.121604],[-2.910232,53.112639],[-2.963813,53.132758],[-2.996852,53.129935],[-3.029148,53.103515],[-3.027559,53.092973],[-3.035045,53.096795],[-3.058851,53.085332],[-3.07134,53.089611],[-3.129616,53.072368],[-3.14779,53.043807],[-3.13089,53.023876],[-3.148765,52.998577],[-3.120551,52.985545],[-3.122288,52.97676],[-3.105179,52.973372],[-3.111281,52.969389],[-3.090295,52.971619],[-3.092149,52.964276],[-3.1107,52.961725],[-3.096726,52.959248],[-3.197975,52.944206],[-3.23744,52.951013],[-3.297402,52.942967],[-3.314308,52.946801],[-3.32434,52.931844],[-3.353315,52.921972],[-3.348875,52.916332],[-3.375015,52.892453],[-3.345651,52.892541],[-3.261803,52.866609],[-3.233003,52.867011],[-3.205365,52.893129],[-3.174382,52.901576],[-3.147504,52.890169],[-3.114162,52.893978],[-3.095953,52.930282],[-3.076513,52.925479],[-3.035079,52.929481],[-3.009649,52.956199],[-2.982022,52.959198],[-2.97503,52.968985],[-2.959813,52.95117],[-2.928889,52.938679],[-2.887431,52.95253],[-2.883539,52.946639],[-2.841015,52.942624],[-2.798848,52.895759],[-2.755326,52.924628],[-2.728439,52.925302],[-2.724178,52.957122],[-2.735294,52.969946],[-2.726841,52.983273]]]}',
      metadata: ["Wrexham"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.758102,52.128234],[-3.742051,52.139299],[-3.752272,52.197614],[-3.744208,52.246305],[-3.753433,52.251761],[-3.731638,52.271451],[-3.70717,52.274058],[-3.73309,52.290304],[-3.727736,52.305826],[-3.745011,52.317566],[-3.70513,52.341455],[-3.658167,52.347649],[-3.685479,52.368221],[-3.697201,52.36693],[-3.71205,52.413356],[-3.771617,52.442152],[-3.766407,52.469304],[-3.744798,52.474633],[-3.733261,52.50659],[-3.812467,52.478911],[-3.826756,52.484794],[-3.843996,52.512039],[-3.840862,52.551355],[-3.859466,52.560844],[-3.926609,52.560767],[-3.932931,52.552978],[-3.941797,52.557819],[-3.94923,52.551676],[-3.955964,52.555401],[-3.984473,52.53626],[-3.96668,52.530733],[-3.997039,52.534839],[-3.985659,52.517604],[-4.001469,52.532773],[-4.039187,52.526785],[-4.041521,52.526506],[-4.056268,52.532335],[-4.05174,52.481554],[-4.057949,52.476918],[-4.070542,52.464151],[-4.086276,52.427009],[-4.090182,52.398402],[-4.135742,52.330616],[-4.140381,52.322502],[-4.207514,52.263659],[-4.320836,52.215378],[-4.324967,52.213614],[-4.343201,52.211031],[-4.350534,52.209992],[-4.356593,52.214669],[-4.357353,52.215256],[-4.377442,52.215785],[-4.377621,52.21575],[-4.377863,52.215586],[-4.379752,52.214204],[-4.428928,52.178185],[-4.439872,52.173654],[-4.445081,52.170126],[-4.450584,52.169218],[-4.45451,52.167592],[-4.456628,52.16822],[-4.460048,52.167655],[-4.462135,52.169852],[-4.466915,52.171268],[-4.470988,52.160278],[-4.501675,52.143985],[-4.50618,52.140187],[-4.509606,52.139771],[-4.518605,52.134987],[-4.545584,52.133294],[-4.563452,52.142578],[-4.567616,52.144379],[-4.582799,52.137973],[-4.583703,52.137981],[-4.641845,52.138276],[-4.686221,52.129712],[-4.688001,52.108578],[-4.688374,52.104138],[-4.688635,52.104221],[-4.681748,52.085175],[-4.669679,52.08037],[-4.680338,52.06372],[-4.66492,52.057808],[-4.647027,52.078367],[-4.631187,52.055961],[-4.607776,52.062153],[-4.570259,52.058869],[-4.559755,52.043727],[-4.544928,52.044244],[-4.541077,52.052127],[-4.535622,52.044361],[-4.50196,52.042586],[-4.48745,52.04907],[-4.463654,52.036537],[-4.448732,52.044145],[-4.411101,52.041837],[-4.398842,52.034635],[-4.384897,52.040022],[-4.350615,52.026756],[-4.334743,52.04133],[-4.305788,52.038613],[-4.301072,52.051643],[-4.288967,52.052785],[-4.282498,52.03981],[-4.234476,52.038215],[-4.205844,52.062573],[-4.191456,52.059326],[-4.164156,52.068153],[-4.158564,52.08121],[-4.147274,52.080797],[-4.158761,52.086893],[-4.144004,52.094271],[-4.100055,52.096061],[-4.058099,52.113879],[-4.018123,52.097144],[-3.940489,52.138448],[-3.906722,52.119788],[-3.860104,52.142196],[-3.794418,52.117138],[-3.7861,52.104557],[-3.758102,52.128234]]]}',
      metadata: ["Ceredigion"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.674773,51.637642],[-4.703135,51.642264],[-4.709515,51.642177],[-4.703472,51.632025],[-4.684057,51.629915],[-4.674773,51.637642]]],[[[-5.271983,51.695691],[-5.270093,51.695961],[-5.26465,51.701836],[-5.273617,51.703431],[-5.278859,51.70002],[-5.287946,51.693527],[-5.271983,51.695691]]],[[[-5.299711,51.744962],[-5.309706,51.741134],[-5.312874,51.738837],[-5.311443,51.734626],[-5.308108,51.732052],[-5.293036,51.728319],[-5.281419,51.736746],[-5.281258,51.736045],[-5.269623,51.734582],[-5.269485,51.734618],[-5.27446,51.736435],[-5.299711,51.744962]]],[[[-5.329811,51.877703],[-5.338528,51.879132],[-5.353371,51.863767],[-5.33336,51.853752],[-5.329811,51.877703]]],[[[-4.559755,52.043727],[-4.570259,52.058869],[-4.607776,52.062153],[-4.631187,52.055961],[-4.647027,52.078367],[-4.66492,52.057808],[-4.680338,52.06372],[-4.669679,52.08037],[-4.681748,52.085175],[-4.688635,52.104221],[-4.731541,52.117868],[-4.749204,52.104207],[-4.747015,52.102336],[-4.74144,52.098633],[-4.759052,52.076771],[-4.791431,52.058457],[-4.835087,52.050833],[-4.83796,52.050302],[-4.838295,52.049874],[-4.844201,52.03615],[-4.837967,52.03342],[-4.841326,52.024757],[-4.838836,52.024182],[-4.814345,52.018527],[-4.878887,52.019028],[-4.882574,52.020908],[-4.885594,52.020794],[-4.910145,52.034582],[-4.914935,52.022323],[-4.916202,52.019081],[-4.919709,52.010099],[-4.926731,52.008931],[-4.969937,51.997285],[-4.969235,51.994931],[-4.989735,52.000701],[-4.986412,52.002387],[-4.991165,52.004243],[-4.993117,52.004069],[-4.992453,52.004746],[-4.992491,52.004761],[-4.988666,52.008607],[-4.982697,52.014693],[-4.982616,52.01469],[-4.970407,52.012795],[-4.986809,52.016056],[-4.986982,52.0164],[-4.987105,52.016427],[-4.989521,52.021474],[-4.991804,52.026034],[-5.020734,52.020353],[-5.047095,52.025576],[-5.071272,52.030094],[-5.086371,52.017954],[-5.089528,52.015414],[-5.089624,52.015315],[-5.087053,52.013603],[-5.073015,52.004624],[-5.073339,52.004467],[-5.072581,52.003963],[-5.095638,51.993636],[-5.094918,51.993239],[-5.079912,51.985355],[-5.085797,51.968235],[-5.103223,51.969259],[-5.104559,51.968642],[-5.107114,51.961181],[-5.120475,51.961289],[-5.121861,51.960648],[-5.124598,51.961322],[-5.143445,51.96147],[-5.150325,51.955084],[-5.154065,51.948297],[-5.157436,51.948482],[-5.157716,51.948222],[-5.18583,51.950034],[-5.196418,51.950611],[-5.202299,51.942735],[-5.210136,51.932234],[-5.236249,51.929507],[-5.259161,51.914844],[-5.305539,51.908302],[-5.31459,51.902014],[-5.303776,51.903665],[-5.295852,51.893321],[-5.315974,51.884749],[-5.307371,51.875021],[-5.307462,51.874926],[-5.307333,51.87478],[-5.31975,51.861697],[-5.318307,51.861929],[-5.29756,51.866103],[-5.29628,51.860746],[-5.282555,51.870232],[-5.245795,51.87351],[-5.229731,51.871408],[-5.221008,51.873178],[-5.215926,51.8696],[-5.198289,51.867287],[-5.197001,51.868235],[-5.189318,51.87389],[-5.194621,51.867193],[-5.182297,51.867436],[-5.182284,51.867236],[-5.179503,51.867247],[-5.181593,51.861049],[-5.145208,51.86343],[-5.139855,51.863808],[-5.139827,51.863781],[-5.13778,51.863914],[-5.123121,51.851916],[-5.116047,51.83729],[-5.102886,51.810053],[-5.107647,51.774176],[-5.118582,51.768256],[-5.160299,51.772128],[-5.18611,51.753628],[-5.188919,51.753948],[-5.203185,51.755572],[-5.210866,51.733915],[-5.254024,51.738186],[-5.253545,51.737774],[-5.232574,51.724917],[-5.21221,51.722967],[-5.209376,51.719249],[-5.190962,51.709525],[-5.187186,51.708862],[-5.188279,51.689914],[-5.184196,51.686821],[-5.175603,51.680308],[-5.157318,51.687975],[-5.158125,51.701721],[-5.149618,51.702366],[-5.168519,51.706777],[-5.169999,51.730967],[-5.158206,51.715068],[-5.134731,51.715974],[-5.124584,51.717436],[-5.115908,51.710376],[-5.105257,51.736076],[-5.093024,51.740467],[-5.105134,51.723588],[-5.099746,51.718967],[-5.097817,51.720014],[-5.090285,51.71085],[-5.085119,51.706415],[-5.063216,51.707228],[-5.06324,51.706867],[-5.059632,51.706962],[-5.060921,51.708196],[-5.03457,51.710746],[-5.022601,51.708008],[-5.013887,51.717176],[-5.019205,51.70723],[-4.984922,51.699379],[-4.943232,51.705238],[-4.946318,51.703664],[-4.895563,51.709935],[-4.886874,51.730286],[-4.902498,51.741557],[-4.895096,51.761285],[-4.912864,51.771527],[-4.886096,51.771023],[-4.898017,51.739567],[-4.882942,51.733917],[-4.884825,51.71902],[-4.872074,51.717663],[-4.88682,51.716755],[-4.891183,51.706036],[-4.94923,51.702179],[-4.976673,51.688175],[-4.976566,51.687582],[-4.973495,51.678901],[-4.975464,51.681497],[-4.975352,51.680875],[-4.9863,51.684005],[-4.981451,51.689121],[-5.007489,51.687321],[-5.027561,51.695033],[-5.051185,51.693872],[-5.046553,51.676247],[-5.073895,51.677854],[-5.088136,51.684696],[-5.07591,51.687911],[-5.076314,51.688106],[-5.103966,51.691961],[-5.105098,51.692059],[-5.125672,51.681621],[-5.123375,51.671197],[-5.065071,51.66339],[-5.062148,51.658823],[-5.05007,51.639944],[-5.05941,51.620603],[-5.00759,51.608569],[-4.975448,51.610339],[-4.948348,51.597011],[-4.925059,51.597189],[-4.923376,51.599171],[-4.922998,51.611431],[-4.896434,51.610125],[-4.89865,51.627152],[-4.89114,51.62951],[-4.861992,51.638656],[-4.861718,51.639189],[-4.860789,51.647108],[-4.845358,51.646473],[-4.83078,51.64686],[-4.825797,51.645666],[-4.812879,51.645131],[-4.781517,51.635038],[-4.781165,51.634954],[-4.777117,51.64243],[-4.75594,51.644006],[-4.756851,51.653684],[-4.711141,51.651753],[-4.714281,51.658785],[-4.70011,51.667708],[-4.693354,51.67196],[-4.701873,51.674543],[-4.697202,51.686291],[-4.680244,51.697281],[-4.684033,51.700866],[-4.692699,51.705402],[-4.692098,51.708494],[-4.69657,51.712723],[-4.676273,51.727156],[-4.632852,51.735198],[-4.632175,51.735187],[-4.622582,51.768126],[-4.64397,51.776521],[-4.634119,51.785014],[-4.644594,51.797275],[-4.61694,51.811615],[-4.645792,51.831339],[-4.704263,51.83912],[-4.708618,51.847268],[-4.694102,51.85962],[-4.706714,51.888878],[-4.723103,51.895698],[-4.713538,51.899238],[-4.713428,51.915786],[-4.667889,51.934078],[-4.635611,51.918596],[-4.599954,51.94093],[-4.577685,51.931914],[-4.54155,51.956551],[-4.493311,51.96131],[-4.487111,51.988683],[-4.512275,51.994914],[-4.523012,52.011252],[-4.546398,52.019058],[-4.559755,52.043727]]]]}',
      metadata: ["Pembrokeshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.315014,51.666939],[-4.315473,51.675923],[-4.329922,51.675638],[-4.337645,51.675485],[-4.321654,51.666409],[-4.314917,51.665036],[-4.315014,51.666939]]],[[[-3.758102,52.128234],[-3.7861,52.104557],[-3.794418,52.117138],[-3.860104,52.142196],[-3.906722,52.119788],[-3.940489,52.138448],[-4.018123,52.097144],[-4.058099,52.113879],[-4.100055,52.096061],[-4.144004,52.094271],[-4.158761,52.086893],[-4.147274,52.080797],[-4.158564,52.08121],[-4.164156,52.068153],[-4.191456,52.059326],[-4.205844,52.062573],[-4.234476,52.038215],[-4.282498,52.03981],[-4.288967,52.052785],[-4.301072,52.051643],[-4.305788,52.038613],[-4.334743,52.04133],[-4.350615,52.026756],[-4.384897,52.040022],[-4.398842,52.034635],[-4.411101,52.041837],[-4.448732,52.044145],[-4.463654,52.036537],[-4.48745,52.04907],[-4.50196,52.042586],[-4.535622,52.044361],[-4.541077,52.052127],[-4.544928,52.044244],[-4.559755,52.043727],[-4.546398,52.019058],[-4.523012,52.011252],[-4.512275,51.994914],[-4.487111,51.988683],[-4.493311,51.96131],[-4.54155,51.956551],[-4.577685,51.931914],[-4.599954,51.94093],[-4.635611,51.918596],[-4.667889,51.934078],[-4.713428,51.915786],[-4.713538,51.899238],[-4.723103,51.895698],[-4.706714,51.888878],[-4.694102,51.85962],[-4.708618,51.847268],[-4.704263,51.83912],[-4.645792,51.831339],[-4.61694,51.811615],[-4.644594,51.797275],[-4.634119,51.785014],[-4.64397,51.776521],[-4.622582,51.768126],[-4.632175,51.735187],[-4.60816,51.73478],[-4.606473,51.734751],[-4.571802,51.736977],[-4.559024,51.741983],[-4.463219,51.731683],[-4.42366,51.740735],[-4.417782,51.745292],[-4.458988,51.760459],[-4.462752,51.769121],[-4.44888,51.770114],[-4.403832,51.757276],[-4.363463,51.796501],[-4.326464,51.801351],[-4.324016,51.801521],[-4.36613,51.787185],[-4.376045,51.753876],[-4.365555,51.73792],[-4.321711,51.734494],[-4.318511,51.735395],[-4.295456,51.741884],[-4.318446,51.73412],[-4.325023,51.731897],[-4.318245,51.730204],[-4.301949,51.726132],[-4.309791,51.721451],[-4.315012,51.72626],[-4.314847,51.719212],[-4.317802,51.721533],[-4.32178,51.724657],[-4.32249,51.716587],[-4.323846,51.724097],[-4.336464,51.717511],[-4.335443,51.723097],[-4.35621,51.721824],[-4.356595,51.724148],[-4.357515,51.729697],[-4.362985,51.724669],[-4.360546,51.730291],[-4.379926,51.732138],[-4.348324,51.695107],[-4.31565,51.679401],[-4.308699,51.676057],[-4.291236,51.667652],[-4.264204,51.673303],[-4.286022,51.676501],[-4.289087,51.67695],[-4.215441,51.685314],[-4.182339,51.680725],[-4.180558,51.678506],[-4.170069,51.665429],[-4.16879,51.678724],[-4.168589,51.680813],[-4.168467,51.67873],[-4.167609,51.664067],[-4.146162,51.654682],[-4.133213,51.66538],[-4.129425,51.657942],[-4.083518,51.663667],[-4.08205,51.664254],[-4.089659,51.6717],[-4.081346,51.674904],[-4.08049,51.669689],[-4.08113,51.68031],[-4.081356,51.684054],[-4.081406,51.684112],[-4.08136,51.684122],[-4.081643,51.688804],[-4.067327,51.690657],[-4.071778,51.699056],[-4.059179,51.700312],[-4.054897,51.707523],[-4.056324,51.713197],[-4.044001,51.706681],[-4.049657,51.712046],[-4.043453,51.706629],[-4.049303,51.729594],[-4.001594,51.762613],[-3.999804,51.774151],[-3.96519,51.763705],[-3.936505,51.771355],[-3.918425,51.775301],[-3.887206,51.768798],[-3.882096,51.787905],[-3.899882,51.803631],[-3.865456,51.810347],[-3.818578,51.802348],[-3.80669,51.787952],[-3.772646,51.846022],[-3.713837,51.887126],[-3.713683,51.905936],[-3.727518,51.910514],[-3.720936,51.941312],[-3.699906,51.946089],[-3.711204,51.961879],[-3.670017,52.004213],[-3.668272,52.025432],[-3.647137,52.038789],[-3.67905,52.060612],[-3.667131,52.074299],[-3.723095,52.085214],[-3.728799,52.093983],[-3.714076,52.104971],[-3.720319,52.117502],[-3.758102,52.128234]]]]}',
      metadata: ["Carmarthenshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-4.333944,51.565029],[-4.309496,51.558384],[-4.309534,51.55913],[-4.309726,51.56292],[-4.311319,51.561828],[-4.333944,51.565029]]],[[[-4.311814,51.604052],[-4.312161,51.610903],[-4.316433,51.609176],[-4.311804,51.603853],[-4.311814,51.604052]]],[[[-4.083518,51.663667],[-4.081683,51.663895],[-4.08205,51.664254],[-4.083518,51.663667]]],[[[-4.08136,51.684122],[-4.081406,51.684112],[-4.081356,51.684054],[-4.08136,51.684122]]],[[[-4.059179,51.700312],[-4.053233,51.700905],[-4.054897,51.707523],[-4.059179,51.700312]]],[[[-3.936505,51.771355],[-3.96519,51.763705],[-3.999804,51.774151],[-4.001594,51.762613],[-4.049303,51.729594],[-4.043453,51.706629],[-4.043279,51.706476],[-4.04365,51.706234],[-4.05369,51.708903],[-4.051395,51.699845],[-4.068607,51.680531],[-4.069228,51.679835],[-4.071538,51.68048],[-4.077162,51.68205],[-4.074614,51.680425],[-4.062432,51.672657],[-4.081328,51.662099],[-4.048568,51.655698],[-4.105397,51.652654],[-4.116333,51.64472],[-4.087179,51.647982],[-4.137447,51.642121],[-4.132975,51.632494],[-4.158473,51.634316],[-4.154726,51.627797],[-4.164327,51.628181],[-4.1557,51.626554],[-4.164148,51.627962],[-4.158876,51.624235],[-4.173201,51.616126],[-4.165892,51.628174],[-4.192047,51.624136],[-4.187795,51.61696],[-4.197785,51.622322],[-4.186363,51.626713],[-4.217684,51.635556],[-4.208896,51.624931],[-4.21955,51.631549],[-4.22465,51.627695],[-4.220907,51.625488],[-4.212962,51.624168],[-4.205537,51.616422],[-4.222292,51.625718],[-4.225374,51.626229],[-4.223723,51.620968],[-4.228712,51.63036],[-4.233888,51.622856],[-4.232264,51.631504],[-4.24556,51.617989],[-4.23253,51.642246],[-4.242466,51.646352],[-4.2306,51.647737],[-4.245504,51.647589],[-4.279651,51.615911],[-4.309206,51.609618],[-4.289006,51.576351],[-4.308161,51.563022],[-4.278818,51.561503],[-4.210784,51.537149],[-4.194806,51.548264],[-4.175122,51.544866],[-4.152875,51.542501],[-4.15644,51.56195],[-4.103714,51.577774],[-4.111325,51.56995],[-4.064352,51.557255],[-4.034994,51.570107],[-4.024329,51.563149],[-4.021213,51.564282],[-4.010553,51.568157],[-3.982147,51.564866],[-3.98065,51.564945],[-3.9766,51.56868],[-3.986387,51.573219],[-3.986301,51.573338],[-4.000583,51.580034],[-3.9939,51.598697],[-3.958343,51.612185],[-3.929096,51.613446],[-3.928763,51.608196],[-3.928733,51.613462],[-3.929303,51.616713],[-3.92715,51.607328],[-3.924683,51.606986],[-3.886233,51.617537],[-3.885217,51.617663],[-3.875242,51.657546],[-3.851442,51.674913],[-3.842743,51.697369],[-3.876023,51.703961],[-3.888506,51.739086],[-3.936505,51.771355]]]]}',
      metadata: ["Swansea"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.80669,51.787952],[-3.818578,51.802348],[-3.865456,51.810347],[-3.899882,51.803631],[-3.882096,51.787905],[-3.887206,51.768798],[-3.918425,51.775301],[-3.936505,51.771355],[-3.888506,51.739086],[-3.876023,51.703961],[-3.842743,51.697369],[-3.851442,51.674913],[-3.875242,51.657546],[-3.885217,51.617663],[-3.83694,51.623658],[-3.850826,51.614466],[-3.822135,51.591664],[-3.818752,51.590078],[-3.811768,51.583551],[-3.79071,51.592983],[-3.8109,51.582739],[-3.809647,51.581568],[-3.810666,51.580597],[-3.802232,51.581885],[-3.797937,51.571136],[-3.817277,51.574297],[-3.797196,51.56928],[-3.789266,51.569715],[-3.781949,51.560469],[-3.779981,51.559713],[-3.778526,51.556142],[-3.764159,51.537972],[-3.762799,51.538018],[-3.763914,51.537662],[-3.763005,51.536511],[-3.762271,51.534758],[-3.703127,51.527166],[-3.687803,51.537435],[-3.656613,51.539171],[-3.655288,51.564834],[-3.69442,51.594267],[-3.691121,51.603519],[-3.676739,51.601324],[-3.68071,51.621912],[-3.665701,51.641153],[-3.59572,51.637729],[-3.56331,51.645485],[-3.589585,51.679272],[-3.578646,51.717881],[-3.591293,51.754612],[-3.603431,51.773846],[-3.670366,51.787198],[-3.727911,51.776207],[-3.746091,51.753392],[-3.77032,51.754522],[-3.80669,51.787952]]]}',
      metadata: ["Neath Port Talbot"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.497512,51.512642],[-3.463025,51.543412],[-3.488732,51.574243],[-3.476467,51.581636],[-3.472526,51.60127],[-3.510021,51.618141],[-3.537638,51.644133],[-3.56331,51.645485],[-3.59572,51.637729],[-3.665701,51.641153],[-3.68071,51.621912],[-3.676739,51.601324],[-3.691121,51.603519],[-3.69442,51.594267],[-3.655288,51.564834],[-3.656613,51.539171],[-3.687803,51.537435],[-3.703127,51.527166],[-3.762271,51.534758],[-3.750181,51.505861],[-3.749423,51.504047],[-3.729725,51.487266],[-3.720829,51.479682],[-3.708329,51.475729],[-3.699459,51.474465],[-3.698815,51.478016],[-3.679837,51.47318],[-3.658919,51.480046],[-3.639887,51.470699],[-3.62636,51.474212],[-3.61963,51.47662],[-3.621232,51.475543],[-3.554761,51.492773],[-3.53285,51.481606],[-3.53945,51.491031],[-3.527611,51.493684],[-3.52961,51.501364],[-3.497512,51.512642]]]}',
      metadata: ["Bridgend"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-3.62636,51.474212],[-3.639887,51.470699],[-3.638323,51.469931],[-3.62636,51.474212]]],[[[-3.335738,51.508427],[-3.378641,51.512713],[-3.401913,51.498963],[-3.411058,51.506767],[-3.465361,51.514809],[-3.497512,51.512642],[-3.52961,51.501364],[-3.527611,51.493684],[-3.53945,51.491031],[-3.53285,51.481606],[-3.554761,51.492773],[-3.621232,51.475543],[-3.639321,51.463384],[-3.626815,51.455466],[-3.59679,51.441024],[-3.558961,51.401326],[-3.438592,51.389988],[-3.415257,51.387775],[-3.405593,51.381],[-3.396587,51.382362],[-3.39519,51.397862],[-3.39579,51.382731],[-3.342364,51.381063],[-3.310333,51.392758],[-3.268989,51.387898],[-3.264647,51.389233],[-3.260904,51.394773],[-3.224154,51.40342],[-3.187643,51.400089],[-3.169697,51.406296],[-3.165949,51.444002],[-3.186665,51.4479],[-3.218912,51.474858],[-3.248053,51.464555],[-3.271059,51.465053],[-3.298385,51.499915],[-3.335738,51.508427]]]]}',
      metadata: ["Vale of Glamorgan"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.118891,51.545638],[-3.144483,51.555338],[-3.152576,51.551641],[-3.163735,51.560505],[-3.237696,51.552603],[-3.261572,51.537787],[-3.277667,51.551858],[-3.310363,51.548932],[-3.324359,51.535775],[-3.341592,51.535139],[-3.335738,51.508427],[-3.298385,51.499915],[-3.271059,51.465053],[-3.248053,51.464555],[-3.218912,51.474858],[-3.186665,51.4479],[-3.165949,51.444002],[-3.165733,51.446174],[-3.164389,51.445815],[-3.164141,51.44576],[-3.152826,51.457007],[-3.123581,51.486046],[-3.141757,51.512273],[-3.125454,51.489506],[-3.0835,51.50168],[-3.090391,51.509875],[-3.06891,51.520266],[-3.118891,51.545638]]]}',
      metadata: ["Cardiff"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.444203,51.816486],[-3.460132,51.830129],[-3.470073,51.828505],[-3.47633,51.809471],[-3.541213,51.784563],[-3.537064,51.776198],[-3.559868,51.777516],[-3.565643,51.764885],[-3.591293,51.754612],[-3.578646,51.717881],[-3.589585,51.679272],[-3.56331,51.645485],[-3.537638,51.644133],[-3.510021,51.618141],[-3.472526,51.60127],[-3.476467,51.581636],[-3.488732,51.574243],[-3.463025,51.543412],[-3.497512,51.512642],[-3.465361,51.514809],[-3.411058,51.506767],[-3.401913,51.498963],[-3.378641,51.512713],[-3.335738,51.508427],[-3.341592,51.535139],[-3.324359,51.535775],[-3.310363,51.548932],[-3.277667,51.551858],[-3.261572,51.537787],[-3.237696,51.552603],[-3.242454,51.565488],[-3.262857,51.566237],[-3.269848,51.583831],[-3.291382,51.592107],[-3.313907,51.64468],[-3.313862,51.655704],[-3.331194,51.656504],[-3.38004,51.711012],[-3.399915,51.717884],[-3.45315,51.761662],[-3.427472,51.758498],[-3.416634,51.767178],[-3.440688,51.795804],[-3.444203,51.816486]]]}',
      metadata: ["Rhondda Cynon Taf"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.116115,51.690802],[-3.137668,51.681926],[-3.129072,51.695781],[-3.156363,51.71397],[-3.167249,51.709902],[-3.210131,51.750095],[-3.219637,51.745081],[-3.210883,51.730703],[-3.224048,51.72915],[-3.222892,51.723101],[-3.266973,51.759292],[-3.272483,51.777483],[-3.301317,51.798976],[-3.310095,51.794302],[-3.33447,51.790402],[-3.329046,51.758653],[-3.30995,51.73905],[-3.315512,51.731809],[-3.300637,51.736314],[-3.27393,51.682337],[-3.28468,51.67713],[-3.285217,51.658238],[-3.29611,51.664094],[-3.313907,51.64468],[-3.291382,51.592107],[-3.269848,51.583831],[-3.262857,51.566237],[-3.242454,51.565488],[-3.237696,51.552603],[-3.163735,51.560505],[-3.152576,51.551641],[-3.144483,51.555338],[-3.118891,51.545638],[-3.090205,51.569266],[-3.121754,51.579693],[-3.124192,51.588551],[-3.105158,51.597215],[-3.093738,51.591398],[-3.064573,51.603933],[-3.081829,51.619433],[-3.102655,51.633951],[-3.074839,51.65224],[-3.071662,51.674187],[-3.084423,51.688359],[-3.101974,51.682092],[-3.116115,51.690802]]]}',
      metadata: ["Caerphilly"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.157352,51.816051],[-3.238779,51.812355],[-3.283435,51.825489],[-3.308585,51.806133],[-3.310095,51.794302],[-3.301317,51.798976],[-3.272483,51.777483],[-3.266973,51.759292],[-3.222892,51.723101],[-3.224048,51.72915],[-3.210883,51.730703],[-3.219637,51.745081],[-3.210131,51.750095],[-3.167249,51.709902],[-3.156363,51.71397],[-3.129072,51.695781],[-3.137668,51.681926],[-3.116115,51.690802],[-3.106016,51.720515],[-3.115189,51.757396],[-3.106114,51.761252],[-3.143924,51.786101],[-3.134189,51.79281],[-3.156861,51.796089],[-3.145828,51.804697],[-3.157352,51.816051]]]}',
      metadata: ["Blaenau Gwent"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.958911,51.62878],[-3.003469,51.669057],[-2.994902,51.679259],[-2.979455,51.673685],[-2.968599,51.691439],[-3.002005,51.690829],[-2.983547,51.715371],[-3.031287,51.722679],[-3.02778,51.745373],[-3.049336,51.760448],[-3.043448,51.770403],[-3.058877,51.78364],[-3.108239,51.796221],[-3.134189,51.79281],[-3.143924,51.786101],[-3.106114,51.761252],[-3.115189,51.757396],[-3.106016,51.720515],[-3.116115,51.690802],[-3.101974,51.682092],[-3.084423,51.688359],[-3.071662,51.674187],[-3.074839,51.65224],[-3.102655,51.633951],[-3.081829,51.619433],[-3.045043,51.606675],[-3.047172,51.622507],[-3.019664,51.616527],[-2.989325,51.628763],[-2.958911,51.62878]]]}',
      metadata: ["Torfaen"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"MultiPolygon","coordinates":[[[[-2.656908,51.621997],[-2.656641,51.6228],[-2.660176,51.6296],[-2.656908,51.621997]]],[[[-2.650401,51.826125],[-2.666198,51.835624],[-2.693296,51.833841],[-2.697302,51.844809],[-2.715128,51.840244],[-2.719605,51.848919],[-2.738849,51.836617],[-2.778799,51.865859],[-2.768428,51.880541],[-2.836101,51.906045],[-2.841908,51.917726],[-2.86192,51.914018],[-2.844935,51.922026],[-2.877835,51.933814],[-2.971846,51.904982],[-2.976665,51.92749],[-3.008123,51.927131],[-3.025945,51.957282],[-3.067368,51.983143],[-3.093086,51.965191],[-3.081593,51.955394],[-3.090054,51.950355],[-3.078651,51.924531],[-3.049507,51.911446],[-3.040054,51.88459],[-3.072246,51.875196],[-3.063402,51.863323],[-3.097173,51.846428],[-3.101002,51.832049],[-3.12052,51.838921],[-3.157352,51.816051],[-3.145828,51.804697],[-3.156861,51.796089],[-3.134189,51.79281],[-3.108239,51.796221],[-3.058877,51.78364],[-3.043448,51.770403],[-3.049336,51.760448],[-3.02778,51.745373],[-3.031287,51.722679],[-2.983547,51.715371],[-3.002005,51.690829],[-2.968599,51.691439],[-2.979455,51.673685],[-2.994902,51.679259],[-3.003469,51.669057],[-2.958911,51.62878],[-2.947696,51.628637],[-2.941332,51.617121],[-2.920862,51.626883],[-2.908525,51.623633],[-2.883603,51.641537],[-2.834504,51.648364],[-2.803197,51.615865],[-2.830282,51.614949],[-2.859198,51.579423],[-2.852665,51.571256],[-2.834226,51.570382],[-2.822202,51.553922],[-2.821635,51.554069],[-2.757535,51.57841],[-2.712611,51.582354],[-2.695581,51.603405],[-2.669693,51.608785],[-2.658194,51.621629],[-2.663302,51.635612],[-2.668514,51.645631],[-2.680332,51.647547],[-2.665923,51.664324],[-2.686402,51.663155],[-2.656864,51.674504],[-2.672253,51.681],[-2.669169,51.69315],[-2.683791,51.700628],[-2.668441,51.705789],[-2.687541,51.730426],[-2.672225,51.736363],[-2.662692,51.753895],[-2.680452,51.768929],[-2.669811,51.794273],[-2.678538,51.802845],[-2.659539,51.810682],[-2.660871,51.822754],[-2.650401,51.826125]]]]}',
      metadata: ["Monmouthshire"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-2.822202,51.553922],[-2.834226,51.570382],[-2.852665,51.571256],[-2.859198,51.579423],[-2.830282,51.614949],[-2.803197,51.615865],[-2.834504,51.648364],[-2.883603,51.641537],[-2.908525,51.623633],[-2.920862,51.626883],[-2.941332,51.617121],[-2.947696,51.628637],[-2.958911,51.62878],[-2.989325,51.628763],[-3.019664,51.616527],[-3.047172,51.622507],[-3.045043,51.606675],[-3.081829,51.619433],[-3.064573,51.603933],[-3.093738,51.591398],[-3.105158,51.597215],[-3.124192,51.588551],[-3.121754,51.579693],[-3.090205,51.569266],[-3.118891,51.545638],[-3.06891,51.520266],[-3.090391,51.509875],[-3.0835,51.50168],[-3.08272,51.501906],[-3.051652,51.514204],[-2.995309,51.53647],[-2.989311,51.547514],[-3.004918,51.565771],[-2.988713,51.549527],[-2.970231,51.555588],[-2.981657,51.545132],[-2.951235,51.535092],[-2.914017,51.542576],[-2.922523,51.535785],[-2.904882,51.532397],[-2.866578,51.542379],[-2.822202,51.553922]]]}',
      metadata: ["Newport"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.147504,52.890169],[-3.174382,52.901576],[-3.205365,52.893129],[-3.233003,52.867011],[-3.261803,52.866609],[-3.345651,52.892541],[-3.375015,52.892453],[-3.388824,52.87607],[-3.467247,52.862078],[-3.483012,52.865454],[-3.505285,52.841957],[-3.566673,52.83008],[-3.56817,52.822896],[-3.586476,52.827717],[-3.597058,52.814054],[-3.608713,52.794022],[-3.583514,52.738623],[-3.599294,52.725882],[-3.602017,52.704986],[-3.656375,52.691373],[-3.683928,52.693858],[-3.709368,52.671082],[-3.71676,52.678779],[-3.743907,52.681309],[-3.759352,52.669446],[-3.808096,52.677945],[-3.840714,52.650903],[-3.834614,52.633059],[-3.85045,52.620636],[-3.841884,52.599855],[-3.875271,52.592928],[-3.88378,52.577135],[-3.915355,52.578589],[-3.928853,52.571461],[-3.926609,52.560767],[-3.859466,52.560844],[-3.840862,52.551355],[-3.843996,52.512039],[-3.826756,52.484794],[-3.812467,52.478911],[-3.733261,52.50659],[-3.744798,52.474633],[-3.766407,52.469304],[-3.771617,52.442152],[-3.71205,52.413356],[-3.697201,52.36693],[-3.685479,52.368221],[-3.658167,52.347649],[-3.70513,52.341455],[-3.745011,52.317566],[-3.727736,52.305826],[-3.73309,52.290304],[-3.70717,52.274058],[-3.731638,52.271451],[-3.753433,52.251761],[-3.744208,52.246305],[-3.752272,52.197614],[-3.742051,52.139299],[-3.758102,52.128234],[-3.720319,52.117502],[-3.714076,52.104971],[-3.728799,52.093983],[-3.723095,52.085214],[-3.667131,52.074299],[-3.67905,52.060612],[-3.647137,52.038789],[-3.668272,52.025432],[-3.670017,52.004213],[-3.711204,51.961879],[-3.699906,51.946089],[-3.720936,51.941312],[-3.727518,51.910514],[-3.713683,51.905936],[-3.713837,51.887126],[-3.772646,51.846022],[-3.80669,51.787952],[-3.77032,51.754522],[-3.746091,51.753392],[-3.727911,51.776207],[-3.670366,51.787198],[-3.603431,51.773846],[-3.591293,51.754612],[-3.565643,51.764885],[-3.559868,51.777516],[-3.537064,51.776198],[-3.541213,51.784563],[-3.47633,51.809471],[-3.470073,51.828505],[-3.460132,51.830129],[-3.444203,51.816486],[-3.417132,51.835101],[-3.402417,51.826312],[-3.402315,51.814159],[-3.357539,51.806977],[-3.360054,51.791088],[-3.33447,51.790402],[-3.310095,51.794302],[-3.308585,51.806133],[-3.283435,51.825489],[-3.238779,51.812355],[-3.157352,51.816051],[-3.12052,51.838921],[-3.101002,51.832049],[-3.097173,51.846428],[-3.063402,51.863323],[-3.072246,51.875196],[-3.040054,51.88459],[-3.049507,51.911446],[-3.078651,51.924531],[-3.090054,51.950355],[-3.081593,51.955394],[-3.093086,51.965191],[-3.067368,51.983143],[-3.099199,52.022686],[-3.086287,52.040194],[-3.090588,52.050513],[-3.125896,52.078311],[-3.122715,52.103158],[-3.105466,52.105386],[-3.104985,52.116728],[-3.141921,52.127867],[-3.135873,52.137908],[-3.09369,52.144306],[-3.072538,52.155773],[-3.082543,52.163047],[-3.098896,52.154734],[-3.12243,52.16342],[-3.094651,52.183742],[-3.102082,52.20272],[-3.072092,52.213087],[-3.073037,52.235877],[-3.044215,52.237927],[-3.048318,52.250233],[-3.035861,52.256757],[-3.005776,52.26426],[-2.977182,52.259686],[-2.949635,52.269468],[-3.012608,52.279169],[-3.000866,52.321766],[-2.966801,52.329449],[-2.954651,52.349155],[-2.974503,52.354701],[-3.040174,52.344326],[-3.060664,52.34824],[-3.110607,52.377193],[-3.154447,52.387715],[-3.178837,52.409397],[-3.219545,52.421253],[-3.235543,52.442504],[-3.19724,52.475989],[-3.180214,52.473934],[-3.111017,52.498935],[-3.029202,52.501268],[-3.032379,52.523731],[-3.003874,52.519833],[-2.994164,52.552911],[-3.01423,52.575497],[-3.087276,52.551332],[-3.085412,52.534503],[-3.133064,52.527471],[-3.137045,52.534045],[-3.111495,52.541364],[-3.139501,52.58572],[-3.117414,52.585763],[-3.089558,52.599506],[-3.093623,52.609339],[-3.073187,52.628963],[-3.059799,52.630721],[-3.083566,52.641293],[-3.051113,52.647366],[-3.03858,52.675373],[-3.047048,52.691266],[-3.022486,52.706668],[-3.020357,52.725102],[-3.000555,52.720275],[-2.977592,52.726592],[-2.978103,52.715357],[-2.961079,52.716466],[-2.965066,52.732268],[-2.99132,52.733818],[-2.991993,52.743756],[-3.02181,52.751941],[-3.01079,52.758564],[-3.017199,52.767664],[-3.035094,52.764009],[-3.038977,52.770401],[-3.05258,52.76869],[-3.047789,52.772643],[-3.079516,52.771514],[-3.091682,52.786663],[-3.086632,52.795593],[-3.118287,52.783582],[-3.160855,52.795745],[-3.15319,52.806369],[-3.168205,52.807328],[-3.167888,52.819267],[-3.15126,52.842565],[-3.163015,52.847491],[-3.127713,52.867103],[-3.152417,52.878748],[-3.135524,52.885014],[-3.147504,52.890169]]]}',
      metadata: ["Powys"],
      value: [],
    },
    {
      type: "Polygons",
      properties: {
        name: "Wales",
      },
      geometry:
        '{"type":"Polygon","coordinates":[[[-3.33447,51.790402],[-3.360054,51.791088],[-3.357539,51.806977],[-3.402315,51.814159],[-3.402417,51.826312],[-3.417132,51.835101],[-3.444203,51.816486],[-3.440688,51.795804],[-3.416634,51.767178],[-3.427472,51.758498],[-3.45315,51.761662],[-3.399915,51.717884],[-3.38004,51.711012],[-3.331194,51.656504],[-3.313862,51.655704],[-3.313907,51.64468],[-3.29611,51.664094],[-3.285217,51.658238],[-3.28468,51.67713],[-3.27393,51.682337],[-3.300637,51.736314],[-3.315512,51.731809],[-3.30995,51.73905],[-3.329046,51.758653],[-3.33447,51.790402]]]}',
      metadata: ["Merthyr Tydfil"],
      value: [],
    },
  ],
  points: [
    {
      color: "54000000",
      lat: "53.389991",
      lon: "-3.023009",
      metadata: [],
      name: "Birkenhead",
      value: "54000000",
    },
    {
      color: "46000000",
      lat: "52.486243",
      lon: "-1.890401",
      metadata: [],
      name: "Birmingham",
      value: "46000000",
    },
    {
      color: "1700000",
      lat: "53.817505",
      lon: "-3.035675",
      metadata: [],
      name: "Blackpool",
      value: "1700000",
    },
    {
      color: "5800000",
      lat: "53.576865",
      lon: "-2.428219",
      metadata: [],
      name: "Bolton",
      value: "5800000",
    },
    {
      color: "2000000",
      lat: "50.719164",
      lon: "-1.880769",
      metadata: [],
      name: "Bournemouth",
      value: "2000000",
    },
    {
      color: "525000",
      lat: "53.795984",
      lon: "-1.759398",
      metadata: [],
      name: "Bradford",
      value: "525000",
    },
    {
      color: "7900000",
      lat: "50.82253",
      lon: "-0.137163",
      metadata: [],
      name: "Brighton",
      value: "7900000",
    },
    {
      color: "1800000",
      lat: "51.454513",
      lon: "-2.58791",
      metadata: [],
      name: "Bristol",
      value: "1800000",
    },
    {
      color: "1400000",
      lat: "52.406822",
      lon: "-1.519693",
      metadata: [],
      name: "Coventry",
      value: "1400000",
    },
    {
      color: "2500000",
      lat: "52.92253",
      lon: "-1.474619",
      metadata: [],
      name: "Derby",
      value: "2500000",
    },
    // {
    //     "color": "3800000",
    //     "lat": "52.512255",
    //     "lon": "-2.081112",
    //     "metadata": [],
    //     "name": "Dudley",
    //     "value": "3800000"
    // },
    {
      color: "9000000",
      lat: "53.645792",
      lon: "-1.785035",
      metadata: [],
      name: "Huddersfield",
      value: "9000000",
    },
    {
      color: "9000000",
      lat: "53.745671",
      lon: "-0.336741",
      metadata: [],
      name: "Hull",
      value: "9000000",
    },
    {
      color: "53400000",
      lat: "52.056736",
      lon: "1.14822",
      metadata: [],
      name: "Ipswich",
      value: "53400000",
    },
    {
      color: "2300000",
      lat: "53.800755",
      lon: "-1.549077",
      metadata: [],
      name: "Leeds",
      value: "2300000",
    },
    {
      color: "9000000",
      lat: "52.636878",
      lon: "-1.139759",
      metadata: [],
      name: "Leicester",
      value: "9000000",
    },
    {
      color: "53400000",
      lat: "53.408371",
      lon: "-2.991573",
      metadata: [],
      name: "Liverpool",
      value: "53400000",
    },
    {
      color: "5652169800",
      lat: "51.507351",
      lon: "-0.127758",
      metadata: [],
      name: "London",
      value: "5652169800",
    },
    {
      color: "2300000",
      lat: "51.878671",
      lon: "-0.420026",
      metadata: [],
      name: "Luton",
      value: "2300000",
    },
    {
      color: "1200734300",
      lat: "53.480759",
      lon: "-2.242631",
      metadata: [],
      name: "Manchester",
      value: "1200734300",
    },
    {
      color: "2300000",
      lat: "54.574227",
      lon: "-1.234956",
      metadata: [],
      name: "Middlesbrough",
      value: "2300000",
    },
    {
      color: "5800000",
      lat: "52.040622",
      lon: "-0.759417",
      metadata: [],
      name: "Milton Keynes",
      value: "5800000",
    },
    {
      color: "18800000",
      lat: "54.978252",
      lon: "-1.61778",
      metadata: [],
      name: "Newcastle",
      value: "18800000",
    },
    {
      color: "8000000",
      lat: "52.240477",
      lon: "-0.902656",
      metadata: [],
      name: "Northampton",
      value: "8000000",
    },
    {
      color: "1800000",
      lat: "52.630886",
      lon: "1.297355",
      metadata: [],
      name: "Norwich",
      value: "1800000",
    },
    {
      color: "1800000",
      lat: "52.954783",
      lon: "-1.158109",
      metadata: [],
      name: "Nottingham",
      value: "1800000",
    },
    {
      color: "1086605700",
      lat: "51.752021",
      lon: "-1.257726",
      metadata: [],
      name: "Oxford",
      value: "1086605700",
    },
    {
      color: "1800000",
      lat: "52.569498",
      lon: "-0.24053",
      metadata: [],
      name: "Peterborough",
      value: "1800000",
    },
    {
      color: "1400000",
      lat: "50.375457",
      lon: "-4.142656",
      metadata: [],
      name: "Plymouth",
      value: "1400000",
    },
    {
      color: "2500000",
      lat: "50.71505",
      lon: "-1.987248",
      metadata: [],
      name: "Poole",
      value: "2500000",
    },
    {
      color: "3800000",
      lat: "50.819768",
      lon: "-1.087977",
      metadata: [],
      name: "Portsmouth",
      value: "3800000",
    },
    // {
    //     "color": "5800000",
    //     "lat": "53.763201",
    //     "lon": "-2.70309",
    //     "metadata": [],
    //     "name": "Preston",
    //     "value": "5800000"
    // },
    {
      color: "5800000",
      lat: "51.454265",
      lon: "-0.97813",
      metadata: [],
      name: "Reading",
      value: "5800000",
    },
    {
      color: "18800000",
      lat: "53.487523",
      lon: "-2.290126",
      metadata: [],
      name: "Salford",
      value: "18800000",
    },
    {
      color: "8000000",
      lat: "53.381129",
      lon: "-1.470085",
      metadata: [],
      name: "Sheffield",
      value: "8000000",
    },
    {
      color: "3600000",
      lat: "50.9097",
      lon: "-1.404351",
      metadata: [],
      name: "Southampton",
      value: "3600000",
    },
    {
      color: "11900000",
      lat: "51.545927",
      lon: "0.707712",
      metadata: [],
      name: "Southend-on-Sea",
      value: "11900000",
    },
    {
      color: "4200000",
      lat: "53.39331",
      lon: "-2.126633",
      metadata: [],
      name: "Stockport",
      value: "4200000",
    },
    {
      color: "4200000",
      lat: "53.002668",
      lon: "-2.179404",
      metadata: [],
      name: "Stoke-on-Trent",
      value: "4200000",
    },
    {
      color: "1400000",
      lat: "54.886152",
      lon: "-1.478574",
      metadata: [],
      name: "Sunderland",
      value: "1400000",
    },
    {
      color: "2500000",
      lat: "51.555774",
      lon: "-1.779718",
      metadata: [],
      name: "Swindon",
      value: "2500000",
    },
    {
      color: "3800000",
      lat: "52.678419",
      lon: "-2.445258",
      metadata: [],
      name: "Telford",
      value: "3800000",
    },
    {
      color: "3800000",
      lat: "52.586214",
      lon: "-1.982919",
      metadata: [],
      name: "Walsall",
      value: "3800000",
    },
    {
      color: "15900000",
      lat: "52.517664",
      lon: "-1.995159",
      metadata: [],
      name: "West Bromwich",
      value: "15900000",
    },
    {
      color: "2500000",
      lat: "52.586973",
      lon: "-2.12882",
      metadata: [],
      name: "Wolverhampton",
      value: "2500000",
    },
    {
      color: "865800",
      lat: "53.959965",
      lon: "-1.087298",
      metadata: [],
      name: "York",
      value: "865800",
    },
    {
      color: "1800000",
      lat: "52.205276",
      lon: "0.119167",
      metadata: [],
      name: "Cambridge",
      value: "1800000",
    },
    {
      color: "740716500",
      lat: "55.953251",
      lon: "-3.188267",
      metadata: [],
      name: "Edinburgh",
      value: "740716500",
    },
    {
      color: "348973400",
      lat: "55.860916",
      lon: "-4.251433",
      metadata: [],
      name: "Glasgow",
      value: "348973400",
    },
  ],
};
