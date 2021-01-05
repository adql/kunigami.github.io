// General notes:
//   - Resize images to be 300px on the largest dimension
const markers = [
  // United States
  // -- Arizona
  {
    name: "Cactus Forest",
    description: "Cacti from the Saguaro National Park",
    lat: 32.23041339658249,
    lng: -111.14510525157992,
    img_name: "saguaro.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50803431808/",
    visited: true,
  },
  {
    name: "Chiricahua National Monument",
    description: "Amazing rock formations in Southeastern Arizona",
    lat: 32.0135714,
    lng: -109.3422953,
    img_name: "chiricahua.png",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788433627/",
    visited: true,
  },
  {
    name: "Antelope Canyon",
    description:
      "Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Page, Arizona.",
    lat: 36.86470241618197,
    lng: -111.37357693817302,
  },
  {
    name: "Havasu Falls",
    description:
      "Havasu Falls is a waterfall of Havasu Creek, located in the Grand Canyon, Arizona, United States. It is within Havasupai tribal lands.",
    lat: 36.25549664057389,
    lng: -112.6978814550031,
  },
  {
    name: "Horseshoe Bend",
    description:
      "Horseshoe Bend is a horseshoe-shaped incised meander of the Colorado River located near the town of Page, Arizona, United States.",
    lat: 36.88032695559509,
    lng: -111.51014454598656,
  },
  {
    name: "Monument Valley",
    description:
      "Famous natural area on the Navajo Nation Reservation features towering red sandstone buttes.",
    lat: 36.99818269582502,
    lng: -110.09847885332755,
  },
  // -- California
  {
    name: "Red Rock Canyon State Park",
    description: "Joshua Trees and Red Rock formations",
    lat: 35.3975446,
    lng: -117.9541879,
    img_name: "red_rock_canyon.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50787619163/",
    visited: true,
  },
  // -- Hawaii
  {
    name: "Kalalau Valley",
    description:
      "The Kalalau Valley is located on the northwest side of the island of Kauaʻi in the state of Hawaii.",
    lat: 22.1799987,
    lng: -159.6711207,
  },
  // -- Utah
  {
    name: "The Wave",
    description: "Unique Rock Formation in Southern Utah",
    lat: 36.99593,
    lng: -112.00625,
  },
  // -- Washington
  {
    name: "Diablo Lake",
    description:
      "Cyan blue lake in North Cascades National Park.",
    lat: 48.7142378,
    lng:-121.1355309,
    img_name: "diablo_lake.png",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50804258467/",
    visited: true,
  },
  // -- Wyoming
  {
    name: "Yellowstone National Park",
    description: "Colorful hot springs and geysers",
    lat: 44.525121,
    lng: -110.8403384,
    img_name: "yellowstone.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788723171/",
    visited: true,
  },

  // Australia
  {
    name: "Bay of Fires",
    description: "Stumpy’s Bay to Bay of Fires Lodge.",
    lat: -40.93777,
    lng: 148.25361,
  },

  // Bolivia
  {
    name: "Salar de Uyuni",
    description:
      "Salar de Uyuni, amid the Andes in southwest Bolivia, is the world’s largest salt flat.",
    lat: -20.16324964478777,
    lng: -67.6317594936942,
  },

  // Brazil
  {
    name: "Iguazu Falls",
    description: "Large waterfall in the border of Argentina and Brazil.",
    lat: -25.6567959,
    lng: -54.4249245,
    img_name: "iguazu.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788055268",
    visited: true,
  },
  {
    name: "Chapada Diamantina",
    description:
      "Rugged, rocky & biodiverse nature preserve known for its waterfalls, caves & former diamond mines.",
    lat: -12.54622966371189,
    lng: -41.69042884729987,
  },
  {
    name: "Chapada dos Guimarães",
    description:
      "A viewing deck overlooks this tall, scenic waterfall in Chapada dos Guimarães National Park.",
    lat: -15.405106632100686,
    lng: -55.83118054906799,
  },
  {
    name: "Fernando de Noronha",
    description:
      "Fernando de Noronha is a volcanic archipelago about 350 kilometers off Brazil's northeast coast.",
    lat: -3.8554112845505024,
    lng: -32.427750322234026,
  },
  {
    name: "Parque Nacional dos Lençóis Maranhenses",
    description:
      "It’s known for its vast desert landscape of tall, white sand dunes and seasonal rainwater lagoons.",
    lat: -2.486253606843343,
    lng: -43.128595120333074,
  },

  // Cambodia
  {
    name: "Angkor Wat",
    description:
      "Temple complex surrounded by a wide moat and intricate carvings.",
    lat: 13.4124693,
    lng: 103.8669857,
  },

  // Canada
  {
    name: "Peyto Lake",
    description:
      "Unique glacier-fed waterway in a valley known for its bright turquoise water & scenic beauty.",
    lat: 51.77835376750945,
    lng: -116.53237765205041,
  },

  // Chile
  {
    name: "Torres del Paine National Park",
    description: "National Park in Patagonia.",
    lat: -50.8604868,
    lng: -73.284805,
  },

  // China
  {
    name: "Harbin Ice Festival",
    description:
      "Ice Festival featuring giant colorful sculptures and buildings made of ice.",
    lat: 45.777671,
    lng: 126.6207933,
    img_name: "harbin.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788960847",
    visited: true,
  },
  {
    name: "Zhangjiajie National Forest Park",
    description: "Tall boulders (seen on Avatar).",
    lat: 29.315305,
    lng: 110.434767,
  },

  // Croatia
  {
    name: "Plitvice Lakes National Park",
    description:
      "It's known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon.",
    lat: 44.8653966,
    lng: 15.5820119,
  },

  // Egypt
  {
    name: "Luxor Temple",
    description: "Ancient Egyptian temple complex.",
    lat: 25.699502,
    lng: 32.6390509,
    img_name: "luxor.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50787740683",
    visited: true,
  },

  // Equador
  {
    name: "Galapagos Island",
    description: "Darwin.",
    lat: -0.82927,
    lng: -90.98206,
  },

  // Ethiopia
  {
    name: "Danakil Depression",
    description: "Colorful Hot springs.",
    lat: 14.2417139,
    lng: 40.29459,
    img_name: "danakil_depression.jpg",
    photographer: "Alexander Savin",
    img_link:
      "https://en.wikipedia.org/wiki/Danakil_Depression#/media/File:ET_Afar_asv2018-01_img46_Dallol.jpg",
  },

  // Greece
  {
    name: "Monasteries of Meteora",
    description:
      "Monasteries built in the 12-13th century on top of tall rock pillars",
    lat: 39.7217044,
    lng: 21.6305896,
    img_name: "meteora.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788014528/",
    visited: true,
  },
  {
    name: "Santorini",
    description: "Small Greek Island known for its while buildings",
    lat: 36.4624199,
    lng: 25.3789717,
    img_name: "santorini.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788014863/",
    visited: true,
  },

  // Guatemala
  {
    name: "Tikal",
    description: "Tikal is an ancient Mayan citadel.",
    lat: 17.22489,
    lng: -89.61103,
  },

  // Iceland
  {
    name: "Svartifoss",
    description: "Waterfall and basalt rocks in Skaftafell National Park.",
    lat: 64.0234109,
    lng: -16.9841541,
  },

  // India
  {
    name: "Hawa Mahal",
    description: "Beautiful palace of Mughal architecture in Jaipur, India.",
    lat: 26.9251416,
    lng: 75.8211004,
    img_name: "hawa_mahal.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50787720548",
    visited: true,
  },
  {
    name: "Taj Mahal",
    description: "Beautiful palace of Mughal architecture in Agra, India.",
    lat: 27.1737721,
    lng: 78.0427502,
    img_name: "taj_mahal.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788945632",
    visited: true,
  },

  // Ireland
  {
    name: "Cliffs of Moher",
    description: "Cliffs in Ireland.",
    lat: 52.97278178463433,
    lng: -9.430060029427306,
  },

  // Italy
  {
    name: "Cinque Terre",
    description:
      "Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline.",
    lat: 44.1237586,
    lng: 9.6738363,
  },
  {
    name: "Colosseum",
    description:
      "Largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today.",
    lat: 41.8902102,
    lng: 12.4900422,
  },

  // Japan
  {
    name: "Shirakawa-go",
    description:
      "Historic Villages of Shirakawa-gō. One of Japan's UNESCO World Heritage Sites",
    lat: 36.2302784,
    lng: 136.7303166,
    img_name: "shirakawa.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50788808272/",
    visited: true,
  },

  // Jordan
  {
    name: "Petra",
    description:
      "Petra is an archaeological site in Jordan. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom.",
    lat: 30.3284544,
    lng: 35.4443622,
    img_name: "petra.jpg",
    photographer: "me",
    img_link: "https://www.flickr.com/photos/kunigami/50787982268",
    visited: true,
  },

  // Madagascar
  {
    name: "Avenue of the Baobabs",
    description:
      "Famed group of towering baobab trees lining the dirt road from Morondava to Belon'i Tsiribihina.",
    lat: -20.2560794,
    lng: 44.1756571,
  },
  {
    name: "Tsingy de Bemaraha Strict Nature Reserve",
    description:
      "A UNESCO World Heritage Site, this park is known for its dramatic limestone geological formations.",
    lat: -18.4368781,
    lng: 44.7381432,
  },

  // Malaysia
  {
    name: "Batu Caves",
    description:
      "Limestone caves at the top of steep steps housing Hindu temples & shrines, plus a huge deity statue.",
    lat: 3.2602148,
    lng: 101.5868289,
  },

  // Mexico
  {
    name: "Chichén-Itzá",
    description:
      "Archaeological site with excavated ruins of the large Maya city.",
    lat: 20.680334,
    lng: -88.5707365,
  },

  // Morocco
  {
    name: "Chefchaouen",
    description: "Blue City in Morocco.",
    lat: 35.1698002,
    lng: -5.2865695,
  },

  // Namibia
  {
    name: "Deadvlei",
    description:
      "Deadvlei is a white clay pan located near the more famous salt pan of Sossusvlei, inside the Namib-Naukluft Park in Namibia.",
    lat: -24.7592732,
    lng: 15.2923894,
  },

  // Nepal
  {
    name: "Mount Everest Base Camp",
    description: "n/a",
    lat: 27.9343193,
    lng: 86.7818523,
  },

  // Netherlands
  {
    name: "Keukenhof",
    description:
      "Keukenhof, also known as the Garden of Europe, is one of the world's largest flower gardens, situated in the town of Lisse, in the Netherlands.",
    lat: 52.2697282,
    lng: 4.5469674,
  },

  // Norway
  {
    name: "Preikestolen",
    description:
      "Popular mountainous hike to a famed 604-metre cliff with a flat top, offering panoramic views.",
    lat: 58.9868234,
    lng: 6.186655,
  },

  // Peru
  {
    name: "Machu Picchu",
    description: "Ancient Inca Site.",
    lat: -13.1631412,
    lng: -72.5471516,
  },
  {
    name: "Titicaca",
    description: "Largest lake in South America between Bolivia and Peru.",
    lat: -15.4885423,
    lng: -69.3133206,
  },

  // Philippines
  {
    name: "Chocolate Hills Complex",
    description:
      "Popular observation area known for its panoramic views of its hilly, tree-filled surrounds.",
    lat: 9.80489371215848,
    lng: 124.16906501364669,
  },

  // Scotland
  {
    name: "The Storr",
    description: "Rock formation in Northern Scotland.",
    lat: 57.4959496,
    lng: -6.1972455,
  },

  // Spain
  {
    name: "Ronda",
    description: "Beautiful city atop of a mountain.",
    lat: 36.7462,
    lng: -5.16122,
  },
  {
    name: "Mosque–Cathedral of Córdoba",
    description:
      "The Mosque–Cathedral of Córdoba, officially known by its ecclesiastical name, the Cathedral of Our Lady of the Assumption is the cathedral of the Roman Catholic Diocese of Córdoba dedicated to the Assumption of Mary and located in the Spanish region of Andalusia.",
    lat: 37.8789,
    lng: -4.77938,
  },

  // Sweden
  {
    name: "Kungsleden",
    description:
      "Kungsleden is a hiking trail in northern Sweden, approximately 440 kilometres long, between Abisko in the north and Hemavan in the south. It passes through, near the southern end, the Vindelfjällen Nature Reserve, one of the largest protected areas in Europe.",
    lat: 68.36168,
    lng: 18.7234,
  },

  // Turkmenistan
  {
    name: "Darvaza Gas Crater",
    description:
      "Natural gas field with a collapsed crater thought to have been burning continuously since 1971.",
    lat: 40.2526031,
    lng: 58.4397004,
  },

  // Venezuela
  {
    name: "Mount Roraima",
    description:
      "Mount Roraima is the highest of the Pakaraima chain of tepuis or plateaux in South America.",
    lat: 5.14333,
    lng: -60.7625,
  },

  // Vietnam
  {
    name: "Hạ Long Bay",
    description: "Multiple tree-covered limestone islands.",
    lat: 20.9361865,
    lng: 107.1593762,
  },

  // Yemen
  {
    name: "Socotra Island",
    description: "Island with the unique dragon's blood tree.",
    lat: 12.4014383,
    lng: 53.1578601,
  },
];
