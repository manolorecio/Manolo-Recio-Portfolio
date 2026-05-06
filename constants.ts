import { Project, Award, Experience, Skill, ProjectLink } from './types';

// 1. Configuración de Origen (Sin barra al final de @main)
const GITHUB_USER = 'manolorecio';
const GITHUB_REPO = 'Manolo-Recio-Portfolio';
const BRANCH = '@main'; 
const CDN_BASE = `https://cdn.statically.io/gh/${GITHUB_USER}/${GITHUB_REPO}${BRANCH}`;


  // 2. Función de Transformación (Versión "Cuchillo" para GitHub Pages)
export function toCdn(url: string, width?: number): string {
  if (!url) return url;
  
  // A. Guardián: Si ya es URL de Statically, gestionamos solo parámetros
  if (url.includes('@main')) {
    const baseUrl = url.split('?')[0];
    return width ? `${baseUrl}?width=${width}&format=webp` : url;
  }

  // B. Limpieza de URLs absolutas (GitHub Raw o Statically viejo)
  const pattern = /(https:\/\/raw\.githubusercontent\.com\/manolorecio\/Manolo-Recio-Portfolio\/[a-z0-9._-]+\/|https:\/\/cdn\.statically\.io\/gh\/manolorecio\/Manolo-Recio-Portfolio\/main\/)/gi;
  let path = url.replace(pattern, '');

  // C. ELIMINACIÓN DE RUTA FANTASMA: "Tirar a la basura /main/heads/"
  // Buscamos dónde empieza "images/" y nos quedamos SOLO con eso.
  // Esto elimina automáticamente cualquier prefijo como "/main/heads/main/"
  const folderKey = 'images/';
  if (path.includes(folderKey)) {
    path = path.substring(path.indexOf(folderKey));
  }

  // D. Normalización: Quitamos barras iniciales sobrantes
  const cleanPath = path.replace(/^\/+/, '');

  // E. Construcción Final sobre el CDN_BASE (que ya incluye @main)
  const finalUrl = `${CDN_BASE}/${cleanPath}`;
  
  return width ? `${finalUrl}?width=${width}&format=webp` : finalUrl;
}

const PROJECTS_ORIGINAL: Project[] = [
// --- PABELLONES EXPOS · EXPO PAVILIONS ---
{
id: 'uae-astana-2017',
title: 'PABELLÓN DE EMIRATOS ÁRABES UNIDOS|UAE PAVILION',
date: '2017',
location: 'Expo 2017 Astaná. Kazajstán|Expo 2017 Astana. Kazakhstan',
description: 'Desarrollo escenográfico.|Scenographic development.',
achievements: ['Exhibitor Magazine · Mención de Honor en la categoría “Editor\'s Choice”|Exhibitor Magazine · Honorable Mention in the “Editor\'s Choice” category'],
category: 'pavilions',
image: 'images/pabellon-uae-expo-astana-2017.webp',
imageSet: [
  'images/pabellon-uae-expo-astana-2017-300.webp 300w',
  'images/pabellon-uae-expo-astana-2017-600.webp 600w',
  'images/pabellon-uae-expo-astana-2017.webp 1000w'
],
links: []
},
{
id: 'russia-yeosu-2012',
title: 'PABELLÓN DE RUSIA|RUSSIA PAVILION',
date: '2012',
location: 'Expo Yeosu 2012. Corea del sur|Expo Yeosu 2012. South Korea',
description: 'Diseño y desarrollo escenográfico.|Scenographic design and development.',
achievements: ['BIE · Medalla de plata al mejor pabellón | BIE · Silver Medal for Best Pavilion','Exhibitor Magazine · Premio del público | Exhibitor Magazine · Audience Award'],
category: 'pavilions',
image: 'images/pabellon-de-rusia-yeosu-2012.webp',
imageSet: [
  'images/pabellon-de-rusia-yeosu-2012-300.webp 300w',
  'images/pabellon-de-rusia-yeosu-2012-600.webp 600w',
  'images/pabellon-de-rusia-yeosu-2012.webp 1000w'
],
links: []
},
{
id: 'oman-zaragoza-2008',
title: 'PABELLÓN DE OMÁN|OMAN PAVILION',
date: '2008',
location: 'Expo Zaragoza 2008. España|Expo Zaragoza 2008. Spain',
description: 'Diseño y desarrollo escenográfico.|Scenographic design and development.',
achievements: ['Bureau International des Expositions · Medalla de oro al mejor pabellón|Bureau International des Expositions · Gold Medal for Best Pavilion'],
category: 'pavilions',
image: 'images/pabellon-de-oman-zaragoza-2008.webp',
imageSet: [
  'images/pabellon-de-oman-zaragoza-2008-300.webp 300w',
  'images/pabellon-de-oman-zaragoza-2008-600.webp 600w',
  'images/pabellon-de-oman-zaragoza-2008.webp 1000w'
],
links: []
},
{
id: 'russia-zaragoza-2008',
title: 'PABELLÓN DE RUSIA|RUSSIA PAVILION',
date: '2008',
location: 'Expo Zaragoza 2008. España|Expo Zaragoza 2008. Spain',
description: 'Diseño y desarrollo escenográfico.|Scenographic design and development.',
achievements: ['Bureau International des Expositions · Medalla de plata al mejor pabellón|Bureau International des Expositions · Silver medal for the best pavilion'],
category: 'pavilions',
image: 'images/pabellon-de-rusia-zaragoza-2008.webp',
imageSet: [
  'images/pabellon-de-rusia-zaragoza-2008-300.webp 300w',
  'images/pabellon-de-rusia-zaragoza-2008-600.webp 600w',
  'images/pabellon-de-rusia-zaragoza-2008.webp 1000w'
],
links: []
},
{
id: 'türkiye-aichi-2005',
title: 'PABELLÓN DE TURQUÍA|TÜRKIYE PAVILION',
date: '2005',
location: 'Expo Aichi 2005. Japón|Expo Aichi 2005. Japan',
description: 'Diseño y desarrollo escenográfico.|Scenographic design and development.',
achievements: ['BIE · Medalla de oro al mejor pabellón|BIE · Gold medal for the best pavilion', 'EXPO AICHI 2005 · “Nature\'s Wisdom Award” Medalla de oro|EXPO AICHI 2005 · “Nature\'s Wisdom Award” Gold medal'],
category: 'pavilions',
image: 'images/pabellon-de-turquia-aichi-2005.webp',
imageSet: [
  'images/pabellon-de-turquia-aichi-2005-300.webp 300w',
  'images/pabellon-de-turquia-aichi-2005-600.webp 600w',
  'images/pabellon-de-turquia-aichi-2005.webp 1000w'
],
links: []
},


// --- MUSEOS · MUSEUMS ---
{
id: "tour-bernabeu-2024",
title: "TOUR BERNABÉU · REAL MADRID CF MUSEUM",
date: "2024",
location: "Madrid, España|Madrid, Spain",
description: "Desarrollo y Producción UI/UX, Desarrollo y Producción gráfica y Gestión CMS.|UI/UX Development and Production, Graphic Production and CMS Management.",
achievements: [],
category: "museums",
image: "images/real-madrid-museum.webp",
links: [
{
label: "Un paseo por el Tour Bernabéu|A stroll through the Bernabéu Tour",
url: "https://youtu.be/CAFTJWbA0Qw?si=vKMQH_OoT42zORaE&t=1215",
type: "video"
}
]
},
{
id: 'legacy-museum-2024',
title: 'LEGACY MUSEUM · DEPARTMENT OF FINANCE (DOF)',
date: '2024',
location: 'Abu Dhabi, EAU|Abu Dhabi, UAE',
description: 'Desarrollo UI/UX y Producción gráfica.|UI/UX Development and Graphic Production.',
achievements: [],
category: 'museums',
image: 'images/department-of-finance-uae-logo.webp',
links: []
},
{
id: "qosm-2022",
title: "QOSM · 3-2-1 QATAR OLYMPIC AND SPORTS MUSEUM",
date: "2022",
location: "Doha, Qatar",
description: "Diseño y Desarrollo gráfico, Producción y Artes finales.|Graphic Design and Development, Production and Final Artworks.",
achievements: [],
category: "museums",
image: "images/3-2-1-qosm.webp",
links: [
{
label: "Ficha del Proyecto | Project Sheet",
url: "https://drive.google.com/file/d/10_GPRsT-RZpIUQE4aKC-VziHc1DUGIIZ/view",
type: "doc"
},
{
label: "3-2-1 Qatar Olympic and Sports Museum 4K|",
url: "https://youtu.be/IpbsbMmcfec?si=UU48fpRwTu0s-J7L",
type: "video"
}
]
},
{
id: "shindagha-poetry-2021",
title: "AL SHINDAGHA MUSEUM (WAVE 3G) POETRY HOUSE",
date: "2021",
location: "Dubái, EAU|Dubai, UAE",
description: "UI/UX y Producción visual.|UI/UX and Visual Production.",
achievements: [],
category: "museums",
image: "images/al-shindagha-museum-poetry-house.webp",
links: [
{
label: "Poetry House - Al Shindagha Museum Dubai|",
url: "https://youtu.be/xQVIHMjzl9Y?si=4BTXiDsRKhVdbMzh",
type: "video"
}
]
},
{
id: 'shindagha-2c-2019',
title: 'AL SHINDAGHA MUSEUM (WAVE 2C)',
date: '2019',
location: 'Dubái, EAU|Dubai, UAE',
description: 'Desarrollo de diseño y producción gráfica.|Design development and graphic production.',
achievements: [],
category: 'museums',
image: 'images/shindagha-museum-patio.webp'
},
{
id: "european-history-2017",
title: "THE HOUSE OF EUROPEAN HISTORY",
date: "2017",
location: "Bruselas, Bélgica|Brussels, Belgium",
description: "Desarrollo de diseño.|Design development.",
achievements: [
"Mención especial. 2019 European Museum of the Year Awards (EMYA)|Special mention. European Museum of the Year Awards 2019 (EMYA)"
],
category: "museums",
image: "images/the-house-of-european-history.webp",
links: [
{
label: "House of European History|",
url: "https://youtu.be/jpmdeBeRQJY?si=PvUJnci-dofzWpYO",
type: "video"
}
]
},
{
id: 'obasanjo-2017',
title: 'OLUSEGUN OBASANJO PRESIDENTIAL LIBRARY (OOPL)',
date: '2017',
location: 'Abeokuta, Nigeria',
description: 'Desarrollo escenográfico.|Scenographic development.',
achievements: [],
category: 'museums',
image: 'images/presidential-library-olusegun-obasanjo-nigeria.webp'
},
{
id: "oman-national-2016",
title: "MUSEO NACIONAL DE OMÁN|NATIONAL MUSEUM OF OMAN",
date: "2016",
location: "Mascate, Omán|Muscat, Oman",
description: "Producción gráfica, Desarrollo de diseño y Producción multimedia.|Graphic production, design development and multimedia production.",
achievements: [],
category: "museums",
image: "images/museo-nacional-de-oman.webp",
links: [
{
label: "Descubre el Museo Nacional de Omán|Discover the National Museum of Oman",
url: "https://youtu.be/Iw0WwcC6n2w?si=9GOyVO4SMdn9zVMr",
type: "video"
},
{
label: "Tour 360|360 Tour",
url: "https://www.nm.gov.om/tour/",
type: "link"
}
]
},
{
id: "shaheed-2016",
title: "MEMORIAL MUSEUM AT AL-SHAHEED PARK",
date: "2016",
location: "Kuwait City, Kuwait",
description: "Desarrollo de diseño.|Design development.",
achievements: [],
category: "museums",
image: "images/memorial-museum.webp",
links: [
{
label: "Un paseo por el Museo|A walk through the Museum",
url: "https://youtu.be/QZptvb7rqjk?si=qxECih4X4vpWhVUB",
type: "video"
}
]
},
{
id: "habitat-2016",
title: "HABITAT MUSEUM AT AL-SHAHEED PARK",
date: "2016",
location: "Kuwait City, Kuwait",
description: "Desarrollo de diseño.|Design development.",
achievements: [],
category: "museums",
image: "images/museo-habitat.webp",
links: [
{
label: "Un paseo por el Museo|A walk through the Museum",
url: "https://youtu.be/E7vPBgPRzGM?si=FyyZ3YteiqiXq308",
type: "video"
}
]
},
{
id: "yeltsin-2015",
title: "BORIS YELTSIN PRESIDENTIAL CENTER",
date: "2015",
location: "Ekaterimburgo, Rusia|Yekaterinburg, Russia",
description: "Desarrollo escenográfico.|Scenographic development.",
achievements: [
"European Museum Forum · Kenneth Hudson Award 2017"
],
category: "museums",
image: "images/boris-yeltsin-presidential-library.webp",
links: [
{
label: "Échale un vistazo al Yeltsin Center|Take a look at the Yeltsin Center",
url: "https://youtu.be/UDrpgMr3tv8?si=m7SK-KvsTO3mAypL",
type: "video"
}
]
},
{
id: "msheireb-2014",
title: "MSHEIREB MUSEUMS DOWNTOWN HERITAGE QUARTER",
date: "2014",
location: "Doha, Qatar",
description: "Desarrollo de diseño.|Design development.",
achievements: [
"1st prize international tender competition"
],
category: "museums",
image: "images/doha-heritage-houses.webp",
links: [
{
label: "Visita rápida|Quick tour",
url: "https://youtu.be/giHM6YdK2_M?si=QNMzR8dO_D6hu0XN",
type: "video"
}
]
},
{
id: "wu-kingdom-2014",
title: "WU KINGDOM HELV RELIC MUSEUM",
date: "2014",
location: "Wuxi, China",
description: "Desarrollo de diseño.|Design development.",
achievements: [
"Art Directors Club (ADC) 2015 · Spatial Communication",
"Red dot Design Award 2014",
"iF Gold Award 2015",
"New York Festivals 2015 · Silver"
],
category: "museums",
image: "images/wuxi.webp",
links: [
{
label: "Echa un vistazo|Take a look",
url: "https://youtu.be/3DbxrNgV2iQ?si=RiCNURiiuOwElq9w",
type: "video"
}
]
},
{
id: "navegacion-2011",
title: "MUSEO DE LA NAVEGACIÓN|NAVIGATION MUSEUM",
date: "2011",
location: "Sevilla, España|Seville, Spain",
description: "Desarrollo escenográfico.|Scenographic development.",
achievements: [],
category: "museums",
image: "images/pabellon-de-la-navegacion.webp",
links: [
{
label: "Echa un vistazo|Take a look",
url: "https://youtu.be/PeAmcA6eZYU?si=it1m5Cnd7zOfh_lx",
type: "video"
}
]
},
{
id: "antipa-2008",
title: "MUSEO NACIONAL DE HISTORIA NATURAL GRIGORE ANTIPA|GRIGORE ANTIPA NATIONAL MUSEUM OF NATURAL HISTORY",
date: "2008",
location: "Bucarest, Rumania|Bucharest, Romania",
description: "Desarrollo escenográfico.|Scenographic development.",
achievements: [],
category: "museums",
image: "images/grigore-antipa-national-museum-of-natural-history.webp",
links: [
{
label: "Un paseo por el Museo|A walk through the Museum",
url: "https://youtu.be/C1Ymm75915c?si=kn2fLLjH_WLkOK0B",
type: "video"
}
]
},
{
id: "marq-2002",
title: "MARQ · MUSEO ARQUEOLÓGICO DE ALICANTE|MARQ · ARCHAEOLOGICAL MUSEUM OF ALICANTE",
date: "2002",
location: "Alicante, España|Alicante, Spain",
description: "Desarrollo escenográfico.|Scenographic development.",
achievements: [
"European Museum Forum · Mejor museo del año en Europa 2004|European Museum Forum · Best Museum of the Year in Europe 2004"
],
category: "museums",
image: "images/marq.webp",
links: [
{
label: "Un paseo por el Museo|A walk through the Museum",
url: "https://youtu.be/4CuPSU2Jy24?si=NWGajLD5ybQOmXBF",
type: "video"
}
]
},
{
id: 'santalucia-2012',
title: 'MUSEO SEGUROS SANTALUCÍA|SANTALUCÍA INSURANCE MUSEUM',
date: '2012',
location: 'Madrid, España|Madrid, Spain',
description: 'Desarrollo de diseño y Producción multimedia.|Design development and multimedia production.',
achievements: [],
category: 'museums',
image: 'images/museo-santalucia.webp'
},

// --- EXPOSICIONES Y CENTROS · EXHIBITIONS ---
{
id: 'sabic-2023',
title: 'SABIC INTERACTIVE EXPERIENCE',
date: '2023',
location: 'Riyadh, Arabia Saudí|Riyadh, Saudi Arabia',
description: 'Desarrollo UI/UX y Producción gráfica.|UI/UX Development and Graphic Production.',
achievements: [],
category: 'exhibitions',
image: 'images/logo-sabic.webp'
},
{
id: "vuelta-mundo-2019",
title: "ESPACIO PRIMERA VUELTA AL MUNDO|FIRST CIRCUMNAVIGATION OF THE WORLD EXHIBITION",
date: "2019",
location: "Sevilla, España|Seville, Spain",
description: "Diseño y Desarrollo gráfico, expositivo y escenográfico.|Graphic, exhibition and scenographic design and development.",
achievements: [],
category: "exhibitions",
image: "images/espacio-vuelta-mundo.webp",
links: [
{
label: "Un paseo por la exposición|A walk through the exhibition",
url: "https://youtu.be/Mz8ebloYSug?si=QKXYWu7-mNQ6Yl1J",
type: "video"
}
]
},
{
id: 'hunt-2016',
title: 'THE HUNT: PRINCELY PURSUITS IN ISLAMIC LANDS',
date: '2016',
location: 'Museum of Islamic Art. Doha, Qatar',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'exhibitions',
image: 'images/exhibition-the-hunt.webp'
},
{
id: 'hajj-2014',
title: 'HAJJ, THE JOURNEY THROUGH ART',
date: '2014',
location: 'Museum of Islamic Art. Doha, Qatar',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'exhibitions',
image: 'images/exposicion-hajj.webp'
},
{
id: 'zurbaran-2013',
title: 'SANTAS DE ZURBARÁN: DEVOCIÓN Y PERSUASIÓN|ZURBARÁN\'S SAINTS: DEVOTION AND PERSUASION',
date: '2013',
location: 'Espacio Santa Clara. Sevilla, España|Espacio Santa Clara. Seville, Spain',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'exhibitions',
image: 'images/santas-de-zurbaran.webp'
},
{
id: 'travel-art-2013',
title: 'THE ART OF TRAVEL',
date: '2013',
location: 'Al Riwaq. Doha, Qatar',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'exhibitions',
image: 'images/the-art-of-travel-exhibition.webp'
},
{
id: 'byzance-2010',
title: 'DE BYZANCE À ISTANBUL, un port pour deux continents',
date: '2010',
location: 'Grand Palais. París, Francia|Grand Palais. Paris, France',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'exhibitions',
image: 'images/de-byzance-a-istambul.webp'
},
{
id: 'vina-mayor-2008',
title: 'BODEGAS VIÑA MAYOR|VIÑA MAYOR WINERY',
date: '2008',
location: 'Valladolid, España|Valladolid, Spain',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'exhibitions',
image: 'images/bodegas-y-vinedos-vina-mayor.webp'
},
{
id: "san-juan-2007",
title: "MONASTERIO DE SAN JUAN DE LA PEÑA|MONASTERY OF SAN JUAN DE LA PEÑA",
date: "2007",
location: "Huesca, España|Huesca, Spain",
description: "Desarrollo de diseño.|Design development.",
achievements: [],
category: "exhibitions",
image: "images/san-juan-de-la-pena.webp",
links: [
{
label: "Echa un vistazo|Take a look",
url: "https://youtu.be/ePqunifNYI0?si=cIWgRJD0FnpPhYkc",
type: "video"
}
]
},
{
id: 'ecoparque-2007',
title: 'ECOPARQUE DE LA RIOJA|ECOPARK OF LA RIOJA',
date: '2007',
location: 'La Rioja, España|La Rioja, Spain',
description: 'Desarrollo escenográfico.|Scenographic development.',
achievements: [],
category: 'exhibitions',
image: 'images/ecoparque-la-rioja.webp'
},
{
id: "bodega-finca-nevados",
title: "Bodega Y Viñedos Finca Los Nevados|Los Nevados Winery and Vineyards",
date: "2002",
location: "Socuéllamos, España|Socuellamos, Spain",
description: "Desarrollo de proyecto|Project development",
achievements: [],
category: "exhibitions",
image: "images/los-nevados.webp"
},


// --- ESPECTÁCULOS · SHOWS ---
{
id: 'prado-2019',
title: 'BICENTENARIO DEL MUSEO DEL PRADO|BICENTENNIAL OF THE PRADO MUSEUM',
date: '2019',
location: 'Madrid, España|Madrid, Spain',
description: 'Producción gráfica.|Graphic production.',
achievements: [],
category: 'shows',
image: 'images/museo-del-prado-mapping.webp'
},
{
id: 'liria-2019',
title: 'VISITA GUIADA PALACIO DE LIRIA|GUIDED TOUR OF THE PALACIO DE LIRIA',
date: '2019',
location: 'Madrid, España|Madrid, Spain',
description: 'Desarrollo de proyecto.|Project development.',
achievements: [],
category: 'shows',
image: 'images/palacio-de-liria.webp'
},
{
id: 'navidad-sevilla-2010',
title: 'ESPECTÁCULOS DE NAVIDAD|CHRISTMAS SHOWS',
date: '2010-16',
location: 'Sevilla, España|Seville, Spain',
description: 'Desarrollo de diseño.|Design development.',
achievements: ['EuBea 2016 · Silver', 'EuBea 2013 · Silver', 'Eventoplus 2013 · Silver'],
category: 'shows',
image: 'images/dragon.webp'
},
{
id: 'marca-espana-2015',
title: 'TOUR MARCA ESPAÑA',
date: '2015',
location: 'España · Alemania|Spain · Germany',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'shows',
image: 'images/marca-espana.webp'
},
{
id: "alma-cordoba-2010",
title: "EL ALMA DE CÓRDOBA",
date: "2010",
location: "Córdoba, España|Cordoba, Spain",
description: "Desarrollo de proyecto.|Project development.",
achievements: [],
category: "shows",
image: "images/mezquita-de-cordoba.webp",
links: [
{
label: "Visita la Mezquita|Visit the Mosque",
url: "https://youtu.be/G-uo8ypgnAg?si=UKnUXi8zba3728Ms",
type: "video"
}
]
},
{
id: 'forum-2004',
title: 'FÒRUM 2004: EL GIGANTE DE LOS 7 MARES Y SUEÑOS EN UNA NOCHE DE VERANO|FÒRUM 2004: THE GIANT OF THE SEVEN SEAS AND DREAMS ON A SUMMER NIGHT',
date: '2004',
location: 'Barcelona, España|Barcelona, Spain',
description: 'Desarrollo de proyecto.|Project development.',
achievements: [],
category: 'shows',
image: 'images/forum-barcelona-2004.webp'
},
{
id: 'real-madrid-2002',
title: 'CLAUSURA CENTENARIO REAL MADRID FC|CLOSING OF REAL MADRID FC\'S CENTENARY CELEBRATIONS',
date: '2002',
location: 'Madrid, España|Madrid, Spain',
description: 'Desarrollo de proyecto.|Project development.',
achievements: [],
category: 'shows',
image: 'images/logo-real-madrid-2002.webp'
},

// --- CENTROS COMERCIALES · MALLS ---
{
id: 'islazul',
title: 'CC ISLAZUL|ISLAZUL MALL',
date: '2007',
location: 'Madrid, España|Madrid, Spain',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'malls',
image: 'images/islazul.webp'
},
{
id: 'mn4',
title: 'CC MN4|MN4 MALL',
date: '2004',
location: 'Alfafar, España|Alfafar, Spain',
description: 'Desarrollo escenográfico.|Scenographic development.',
achievements: [],
category: 'malls',
image: 'images/mn4.webp'
},

// --- TEMATIZACIÓN · THEMING ---
{
id: "kidzania-2008",
title: "KIDZANIA",
date: "2008",
location: "Lisboa, Portugal|Lisbon, Portugal",
description: "Diseño, producción y desarrollo gráfico y escenográfico.|Graphic and scenographic design and development.",
achievements: [],
category: "theming",
image: "images/kidzania.webp",
links: [
{
label: "Echa un vistazo|Take a look",
url: "https://youtu.be/zjFptX7iIEQ?si=6TqG1_QYmbKJsgOS",
type: "video"
}
]
},
{
id: "isla-magica-2002",
title: "ISLA MÁGICA",
date: "2002",
location: "Sevilla, España|Seville, Spain",
description: "Proyecto y desarrollo escenográfico.|Scenographic project and development.",
achievements: [],
category: "theming",
image: "images/isla-magica-rides.webp",
links: [
{
label: "Echa un vistazo|Take a look",
url: "https://youtu.be/q3tD4gMOJr4?si=VjfOgFiVgRwxeWtk",
type: "video"
}
]
},
{
id: "hotel-caribe-2002",
title: "HOTEL CARIBE RESORT · HALL Y ZONA TEMATIZADA|HOTEL CARIBE RESORT · LOBBY AND THEMED AREA",
date: "2002",
location: "Port Aventura, España|Port Aventura Theme Park, Spain",
description: "Diseño y desarrollo escenográfico.|Scenographic design and development.",
achievements: [],
category: "theming",
image: "images/portaventura-hotel-caribe-resort.webp",
links: [
{
label: "Galería Google Maps|Google Maps Gallery",
url: "https://maps.app.goo.gl/gB5FrU81qVr8J11j6",
type: "map"
}
]
},
{
id: "warner-park-2002",
title: "WARNER PARK MADRID · LA AVENTURA DEL RÍO BRAVO",
date: "2002",
location: "España|Spain",
description: "Diseño escenográfico, desarrollo y producción de montaña de roca artificial de 6.000 m².|Scenographic design and development of a 6,000 sqm artificial rock mountain.",
achievements: [],
category: "theming",
image: "images/warner-bros-park-rio-bravo.webp",
links: [
{
label: "Echa un vistazo|Take a look",
url: "https://youtu.be/TJsInmOXe88?si=fTkhHqParSJyNcdh",
type: "video"
}
]
},
{
id: "dinopolis-2001",
title: "DINÓPOLIS · T-REX SHOW",
date: "2001",
location: "Teruel, España|Teruel, Spain",
description: "Desarrollo escenográfico.|Scenographic development.",
achievements: [],
category: "theming",
image: "images/dinopolis-trex.webp",
links: [
{
label: "Echa un vistazo|Take a look",
url: "https://youtu.be/XCyqN_chcsk?si=YqsLZ_Qg45Q_tXFI&t=255",
type: "video"
}
]
},

// --- FERIAS Y CONGRESOS · TRADE FAIRS ---
{
id: "nise-2025",
title: "NISE · NEW INDUSTRY IN SOUTHERN EUROPE 2025",
date: "2025",
location: "FIBES · Sevilla, España|FIBES · Seville, Spain",
description: "Diseño y producción gráfica, Artefinalización y Revisión y verificación de AAFF de los stands.|Graphic design and production, final artwork, and review and verification of final artwork for the stands.",
achievements: [],
category: "fairs",
image: "images/nise-2025.webp",
links: [
{
label: "Vídeo resumen del congreso|Video overview of the conference",
url: "https://youtu.be/n8UZwr84wLc?si=D3xOUDdjj_BFOceq",
type: "video"
}
]
},
{
id: "ciieand-2025",
title: "III CONGRESO INTERNACIONAL DE INNOVACIÓN EDUCATIVA · 3CIIEAND|3rd INTERNATIONAL CONFERENCE ON EDUCATIONAL INNOVATION · 3CIIEAND",
date: "2025",
location: "Granada, España|Granada, Spain",
description: "Diseño y Producción gráfica, Artes finales y Publicaciones para RRSS · Maquetación y producción del Libro de Actas de la segunda y tercera edición del congreso.|Graphic Design and Production, Final Artwork, and Social Media posts · Layout and production of the Conference Proceedings for the second and third editions.",
achievements: [],
category: "fairs",
image: "images/3ciienad-2025.webp",
links: [
{
label: "Galería de fotografías|Photo gallery",
url: "https://www.juntadeandalucia.es/educacion/web/3ciieand/galeria-15/",
type: "link"
}
]
},
{
id: 'santalucia-2020',
title: 'CONVENCIÓN SANTALUCÍA SEGUROS 2020|SANTALUCÍA INSURANCE CONGRESS 2020',
date: '2020',
location: 'Málaga, España|Malaga, Spain',
description: 'Producción gráfica.|Graphic production.',
achievements: [],
category: 'fairs',
image: 'images/santalucia.webp'
},
{
id: 'santalucia-2019',
title: 'CONVENCIÓN SANTALUCÍA SEGUROS 2019|SANTALUCÍA INSURANCE CONVENTION 2019',
date: '2019',
location: 'Palma de Mallorca, España|Palma de Mallorca, Spain',
description: 'Producción gráfica.|Graphic production.',
achievements: [],
category: 'fairs',
image: 'images/santalucia-2019.webp'
},
{
id: "foro-global-2019",
title: "II FORO GLOBAL DE GOBIERNOS LOCALES|2nd GLOBAL FORUM OF LOCAL GOVERNMENTS",
date: "2019",
location: "FIBES · Sevilla, España|FIBES · Seville, Spain",
description: "Producción gráfica.|Graphic production.",
achievements: [],
category: "fairs",
image: "images/foro-fibes.webp",
links: [
{
label: "Vídeo resumen del Foro|Video overview of the Forum",
url: "https://youtu.be/gRKvEPvEcco?si=B58zSTfmgGVruhjA",
type: "video"
}
]
},
{
id: "sicab-2018",
title: "SICAB (SALÓN INTERNACIONAL DEL CABALLO)|SICAB ( International Purebred Spanish Horse Trade Fair)",
date: "2018-19",
location: "Sevilla, España|Seville, Spain",
description: "Propuesta a concurso ★, diseño, desarrollo y producción de Stands e Hito publicitario exterior.|Competition proposal ★, design, development and production of Stands and outdoor advertising landmark.",
achievements: [],
category: "fairs",
image: "images/sicab.webp",
links: [
{
label: "Método STAR|STAR Method",
url: "https://sites.google.com/view/manolorecio/proyectos-singulares/sicab",
type: "link"
}
]
},
{
id: 'airbus-2018',
title: 'AIRBUS · CN235 & C295 OPERATORS CONFERENCE',
date: '2018',
location: 'Sevilla, España|Seville, Spain',
description: 'Producción CGI para background de escenario.|CGI production for stage background.',
achievements: [],
category: 'fairs',
image: 'images/airbus.webp'
},
{
id: "andalucia-sabor",
title: "IV Congreso Gastronómico Andalucía Sabor|4th Andalusia Taste Gastronomic Conference",
date: "2013",
location: "FIBES · Sevilla, España|FIBES · Seville, Spain",
description: "Diseño, desarrollo y producción de corpóreos de la mascota para señalizar los espacios del Congreso.|Design, development, and production of physical representations of the mascot to mark the spaces at the Conference.",
achievements: [],
category: "fairs",
image: "images/forky.webp",
links: [
{
label: "Método STAR|STAR Method",
url: "https://sites.google.com/view/manolorecio/proyectos-singulares/forky-v-congreso-gastron%C3%B3mico-andaluc%C3%ADa-sabor",
type: "link"
}
]
},
{
id: 'trasmediterranea-fitur',
title: 'STANDS TRASMEDITERRÁNEA · FITUR',
date: '2006-16',
location: 'Madrid, España|Madrid, Spain',
description: 'Desarrollo escenográfico.|Scenographic development.',
achievements: ['FITUR · Mejor Stand empresarial 2016|FITUR · Best Corporate Stand 2016', 'FITUR · Mejor Stand empresarial 2007|FITUR · Best Corporate Stand 2007'],
category: 'fairs',
image: 'images/stand-trasmediterranea-fitur.webp'
},
{
id: 'acciona-stands',
title: 'STANDS ACCIONA ENERGÍA Y WINDPOWER',
date: '2006-14',
location: 'Internacional|International',
description: 'Diseño y desarrollo escenográfico.|Scenographic design and development.',
achievements: [],
category: 'fairs',
image: 'images/logo-acciona.webp'
},
{
id: 'feria-libro-sevilla',
title: 'FERIA DEL LIBRO DE SEVILLA|SEVILLE BOOK FAIR',
date: '2003-13',
location: 'Sevilla, España|Seville, Spain',
description: 'Diseño y desarrollo escenográfico · Desarrollo de las Casetas de los exhibidores: En 2010 se introdujeron unas nuevas casetas modulares. Sus principales mejoras incluyeron la integración urbana en Plaza Nueva, materiales más robustos para mayor seguridad y protección climática, y un sistema ergonómico de contrapesos verticales que facilitaba enormemente la apertura y cierre manual de los portalones sin esfuerzo. Además, optimizaron la logística de montaje y el espacio interno para la exposición de libros.|Scenographic design and development · Development of exhibitor booths: In 2010, new modular booths were introduced. Their main improvements included urban integration in Plaza Nueva, more robust materials for greater safety and weather protection, and an ergonomic system of vertical counterweights that greatly facilitated the manual opening and closing of the gates without effort. In addition, assembly logistics and internal space for book displays were optimized.',
achievements: [],
category: 'fairs',
image: 'images/feria-del-libro-sevilla.webp'
},

// --- EVENTOS · EVENTS ---
{
id: "pinta-murillo-2018",
title: "PINTA TU MURILLO",
date: "2018",
location: "Sevilla, España|Seville, Spain",
description: "Procesamiento, Desarrollo y Producción gráfica y técnica integral de \"La Colosal\" de 364 m² y de 17.431 teselas codificadas y pintadas a mano por más de 10.000 personas con motivo del Año Murillo y del 50 aniversario de El Corte Inglés en Sevilla.|Processing, development and integral graphic and technical production of \"La Colosal\" of 364 m² and 17,431 tesserae coded and hand-painted by more than 10,000 people on the occasion of the Murillo Year and the 50th anniversary of El Corte Inglés in Seville.",
achievements: [
"Eventoplus 2018 · Silver Medal"
],
category: "events",
image: "images/pinta-tu-murillo-presentacion-2.webp",
links: [
{
label: "Método STAR|STAR method",
url: "https://sites.google.com/view/manolorecio/proyectos-singulares/pinta-tu-murillo",
type: "link"
},
{
label: "Time-lapse Video|",
url: "https://youtu.be/sJQtMbyyZnc?si=VPdIJn26nJhBgVcZ",
type: "video"
}
]
},
{
id: "seff-2017",
title: "XIV FESTIVAL DE CINE EUROPEO (SEFF)|14th EUROPEAN FILM FESTIVAL (SEFF)",
date: "2017",
location: "Sevilla, España|Seville, Spain",
description: "Diseño escenográfico y producción gráfica.|Scenographic design and graphic production.",
achievements: [],
category: "events",
image: "images/seff-teatro.webp",
links: [
{
label: "Galería SEFF|SEFF Gallery",
url: "https://www.flickr.com/photos/sevillafilmfestival/albums/72157689992526225/with/24733194448",
type: "link"
}
]
},
{
id: 'adama-2014',
title: 'ADAMA “SIMPLY. GROW. TOGETHER”',
date: '2014',
location: 'Madrid, España|Madrid, Spain',
description: 'Producción multimedia.|Multimedia production.',
achievements: [],
category: 'events',
image: 'images/adama-logo.webp'
},
{
id: "uefa-2014",
title: "UEFA EURO 2020 · Gala de presentación de las sedes|EURO 2020 · Venue Announcement Gala",
date: "2014",
location: "Ginebra, Suiza|Geneva, Switzerland",
description: "Diseño y Producción del Balón Ceremonial para la Gala de anuncio de las sedes de la UEFA EURO 2020.|Design and Production of the Ceremonial Ball for the UEFA EURO 2020 Venue Announcement Gala.",
achievements: [],
category: "events",
image: "images/uefa-balones.webp",
links: [
{
label: "Método STAR|STAR Method",
url: "https://sites.google.com/view/manolorecio/proyectos-singulares/uefa-euro-2020",
type: "link"
}
]
},
{
id: 'acciona-juntas',
title: 'JUNTAS DE ACCIONISTAS · ACCIONA Y BESTINVER|SHAREHOLDERS\' MEETINGS · ACCIONA AND BESTINVER',
date: '2010-16',
location: 'España|Spain',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'events',
image: 'images/bestinver.webp'
},
{
id: 'desfile-nacional-2010',
title: 'DESFILE DÍA NACIONAL DE ESPAÑA|SPANISH NATIONAL DAY PARADE',
date: '2010',
location: 'Madrid, España|Madrid, Spain',
description: 'Desarrollo de diseño.|Design development.',
achievements: [],
category: 'events',
image: 'images/dia-fiesta-nacional-2010.webp'
},

// --- PRODUCCIÓN AV · AV PRODUCTION ---
{
id: "piel-liquida-2013",
title: "LA PIEL LÍQUIDA",
date: "2013",
location: "Sevilla, España|Seville, Spain",
description: "Edición y Correalización.|Editing and Co-direction.",
achievements: [],
category: "audiovisual",
image: "images/la-piel-liquida.webp",
links: [
{
label: "Play|",
url: "https://youtu.be/7bOlSjyLj34?si=FsBTOfXUFRJvEICE",
type: "video"
}
]
},
{
id: "luces-sombras-1999",
title: "LUCES Y SOMBRAS: MUSEOS DE ANDALUCÍA",
date: "1998-99",
location: "Andalucía, España|Andalusia, Spain",
description: "Edición y realización para Canal Sur TV.|Documentary Editing for Canal Sur TV.",
achievements: [
"Premio ATEA 2001 · Mejor programa cultural|ATEA Award 2001 · Best cultural program"
],
category: "audiovisual",
image: "images/luces-y-sombras.webp",
links: [
{
label: "Una pieza de un capítulo del documental|A clip from an episode of the show",
url: "https://youtu.be/PQszcLgmuSk?si=XhKKdn4zYLO_02cD",
type: "video"
}
]
},

// --- BRANDING · BRANDING ---
{
id: 'espacio-vuelta-mundo',
title: `Espacio Primera Vuelta al Mundo:\nUna imagen de marca para todo un espacio expositivo

|First circumnavigation of the globe exhibition: A brand image for an entire exhibition space`,
date: '2019',
location: 'Sevilla, España|Seville, Spain',
description: `Con motivo del 500 aniversario del inicio de la expedición de Magallanes-Elcano, abrió sus puertas un centro expositivo de la primera vuelta al Mundo, ubicado en Sevilla. 

Junto a Tannhauser Estudio, fui codiseñador y desarrollador de la exposición y se me encargó la imagen de la misma. 

El logotipo logra capturar la esencia de la Nao Victoria de una manera sutil y estilizada, mediante un círculo con líneas geométricas que representa la proa estilizada de la Nao Victoria. Las líneas diagonales y verticales simulan la estructura del mascarón de proa, la parte frontal del barco que sobresale de la roda. 

La combinación del icono y la tipografía crea una identidad visual coherente y memorable.

|To mark the 500th anniversary of the start of the Magellan-Elcano expedition, an exhibition center dedicated to the first circumnavigation of the globe opened its doors in Seville. 

Together with Tannhauser Estudio, I was co-designer and developer of the exhibition and was commissioned to create its image. 

The logo captures the essence of the Nao Victoria in a subtle and stylized way, using a circle with geometric lines that represents the stylized bow of the Nao Victoria. The diagonal and vertical lines simulate the structure of the figurehead, the front part of the ship that protrudes from the stem.`,
achievements: [],
category: 'branding',
image: 'images/espacio-vuelta-mundo-logo.webp'
},
{
id: 'the-lightmaster',
title: `The Light Master:\nUna marca personal

|The Light Master:\nA personal brand`,
date: '2016',
location: 'Sevilla, España|Seville, Spain',
description: `Nacho Alcalá es diseñador y consultor de iluminación. Me encargó que le ideara su imagen de marca personal. 

El logotipo de The Light Master es un diseño simbólico que representa la esencia de la iluminación y el montaje, combinando elementos gráficos y tipográficos de manera efectiva. 

El icono principal es una representación estilizada de las letras "N" y "A" (Nacho Alcalá), que se combinan para formar una figura geométrica única. 

El primer ángulo de la "N" simboliza la luz, representando la iluminación como elemento fundamental del trabajo de The Light Master. 

La "A" invertida representa al montador, destacando la habilidad y la precisión en la instalación de equipos de iluminación. 

La forma resultante de la combinación de las letras evoca la imagen de un foco, reforzando la idea de la iluminación como núcleo del negocio. 

El logotipo de The Light Master es un diseño que combina simbolismo y funcionalidad. La representación de la luz y el montador en el icono principal comunica claramente los servicios ofrecidos por la empresa. El color azul refuerzan la imagen de profesionalismo y confianza. El nombre internacional "THE LIGHT MASTER" refleja la experiencia y la visión global de la empresa.

|Nacho Alcalá is a lighting designer and consultant. He commissioned me to create his personal brand image. 

The Light Master logo is a symbolic design that represents the essence of lighting and installation, effectively combining graphic and typographic elements. 

The main icon is a stylized representation of the letters “N” and “A” (Nacho Alcalá), which combine to form a unique geometric shape. 

The first angle of the "N" symbolizes light, representing lighting as a fundamental element of The Light Master\'s work. 

The inverted “A” represents the installer, highlighting skill and precision in the installation of lighting equipment. 

The shape resulting from the combination of the letters evokes the image of a spotlight, reinforcing the idea of lighting as the core of the business. The Light Master logo is a design that combines symbolism and functionality. The representation of light and the installer in the main icon clearly communicates the services offered by the company. The blue color reinforces the image of professionalism and trust. The international name “THE LIGHT MASTER” reflects the company\'s experience and global vision.`,
achievements: [],
category: 'branding',
image: 'images/the-light-master.webp'
},
{
id: 'cicerone',
title: `Cicerone:\nUna app que sirve de guía a los profesionales del derecho

|Cicerone:\nAn app that serves as a guide for lawyers`,
date: '2016',
location: 'Sevilla, España|Seville, Spain',
description: `CICERONE es una aplicación móvil diseñada para servir como guía y asistente a profesionales del derecho. El nombre, evoca la figura del cicerone, un guía experimentado. 

El logotipo, con su distintivo círculo azul, desdobla la marca en tres niveles: 'CICERONE', la guía legal completa; el círculo azul, que invita a la exploración global (anticipando la expansión de la app); y 'C1' (C One), una abreviatura moderna y angloparlante, que sugiere que CICERONE es la primera y principal guía para abogados.

|
CICERONE is a mobile application designed to serve as a guide and assistant for legal professionals. The name evokes the figure of the cicerone, an experienced guide. 

The logo, with its distinctive blue circle, unfolds the brand on three levels: 'CICERONE', the comprehensive legal guide; the blue circle, which invites global exploration (anticipating the app's expansion); and 'C1' (C One), a modern, English-speaking abbreviation that suggests that CICERONE is the first and foremost guide for lawyers.`,    achievements: [],
category: 'branding',
image: 'images/cicerone.webp'
},
{
id: 'dehesa',
title: `La Dehesa del Jamón:\nUn restaurante que es un regalo

|La Dehesa del Jamón:\nA restaurant that is a gift`,
date: '2025',
location: 'Sevilla, España|Seville, Spain',
description: `Diseño de Logotipo y Desarrollo de Mobile-First SPA para la gestión de carta digital interactiva. Optimización de UX para acceso instantáneo sin descarga. 

El logotipo de "La Dehesa del Jamón" es un diseño que fusiona la tradición con la modernidad, utilizando el jamón original como elemento tradicional pero reinterpretado de forma abstracta, geométrica y dinámica. 

Su disposición vertical evoca crecimiento y progresión, sintetizando la forma del jamón, convirtiéndolo en un "envoltorio" de la tradición y evolucionándolo a la variedad de la cocina y la versatilidad de los platos. 

Los colores vibrantes y dinámicos transmiten la pasión y el espíritu del equipo que lo conforma. 

El logotipo es una invitación visual a una experiencia gastronómica. Su diseño, que atrapa la tradición y la envuelve en esta estética contemporánea, refleja la esencia del restaurante: honramos el pasado mientras abrazamos la evolución.

|Logo design and development of a Mobile-First SPA for interactive digital menu management. UX optimization for instant access without downloads. 

The logo for "La Dehesa del Jamón" is a design that blends tradition with modernity, using the original ham as a traditional element but reinterpreted in an abstract, geometric, and dynamic way. 

Its vertical layout evokes growth and progression, synthesizing the shape of the ham, turning it into a "wrapping" of tradition and evolving it into the variety of cuisine and versatility of dishes. 

The vibrant and dynamic colors convey the passion and spirit of the team behind it. The logo is a visual invitation to a gastronomic experience. Its design, which captures tradition and envelops it in this contemporary aesthetic, reflects the essence of the restaurant: we honor the past while embracing evolution.`,
achievements: [],
category: 'branding',
image: 'images/dehesa-jamon.webp',
links: [
{
label: "Carta Digital · La Dehesa del Jamón|Digital Menu · La Dehesa del Jamón",
url: "https://juanmadehesa-creator.github.io/carta-la-dehesa/",
type: "link"
}
]
},
{
id: 'lexpire',
title: `Lexpire:\nUna app que calcula los plazos judiciales

|Lexpire:\nAn app that calculates court deadlines`,
date: '2016',
location: 'Sevilla, España|Seville, Spain',
description: `Lexpire, de Legal Innovation, es la app gratuita que simplifica el cálculo de plazos legales. 

Su nombre surge de la fusión de "ley" y "expiración", reflejando su función esencial. 

El logotipo, como un bloque de notas rojas como color de alerta y comunica organización y eficiencia. El punto rojo sobre la "i" es un detalle sutil que mantiene la coherencia visual con los cuadrados superiores, reforzando la idea de alerta y recordatorio. 

En resumen, el logotipo de Lexpire es una representación visual de una herramienta diseñada para ayudar a los profesionales del derecho a gestionar sus plazos de manera efectiva, evitando errores y retrasos.

|Lexpire, from Legal Innovation, is a free app that simplifies the calculation of legal deadlines. 

Its name comes from the fusion of "law" and "expiration," reflecting its essential function. 

The logo, like a red notepad, uses color as a warning and communicates organization and efficiency. The red dot above the "i" is a subtle detail that maintains visual consistency with the upper squares, reinforcing the idea of alert and reminder. 

In short, the Lexpire logo is a visual representation of a tool designed to help legal professionals manage their deadlines effectively, avoiding errors and delays.`,
achievements: [],
category: 'branding',
image: 'images/lexpire.webp'
},
{
id: 'graficut',
title: `Graficut:\nUn revamp del diseño de marca

|Graficut:\nA revamp of the brand design`,
date: '2016',
location: 'Bollullos de la Mitación, España|Bollullos de la Mitacion, Spain',
description: `Graficut es una empresa especializada en soluciones visuales integrales, que abarca desde la impresión digital y el fresado CNC hasta la rotulación de alta calidad. 

Su logotipo, una evolución moderna del diseño anterior, transmite profesionalidad y eficiencia. La tipografía limpia y el minimalismo reflejan la precisión de su trabajo, mientras que el sutil énfasis en la letra "A" simboliza la atención al detalle y la precisión de sus trabajos.

|Graficut is a company specializing in comprehensive visual solutions, ranging from digital printing and CNC milling to high-quality signage. 

Its logo, a modern evolution of the previous design, conveys professionalism and efficiency. The clean typography and minimalism reflect the precision of its work, while the subtle emphasis on the letter "A" symbolizes the attention to detail and precision of its work.`,
achievements: [],
category: 'branding',
image: 'images/graficut.webp'
},
{
id: "con-arte",
title:`CON ARTE · Bar & Restaurante:\nEl rebranding de un restaurante desde el arte

|CON ARTE · Bar & Restaurant:\nThe rebranding of a restaurant through art.`,
date: "2023",
location: "Sevilla, España|Seville, Spain",
description: `CON ARTE BAR & RESTAURANTE emprende un rebranding estratégico que proyecta su sólida trayectoria desde 2004, fusionando la esencia de la tradición con un espíritu de vanguardia.

Esta renovación visual, impulsada por el alma máter del establecimiento, busca relanzar y consolidar la excelencia que siempre ha sido su meta, elevando la experiencia del cliente a nuevas alturas en un espacio que es tanto barra como mesa.

El Alma del Trazo: CON ARTE, la Masterpiece en constante desarrollo

He transformado el nombre CON ARTE BAR & RESTAURANTE en el lienzo de una obra maestra en evolución. El logotipo, con su distintivo trazo orgánico y gestual, es un boceto artístico que encarna el recorrido vital del negocio: desde la meticulosa cocina y la vibrante barra, hasta la mesa del cliente, culminando en un servicio impecable y la satisfacción plena.

Este \"recorrido laberíntico\" intrínseco en el diseño, simboliza el esfuerzo diario, los recovecos y vericuetos que se enfrentan con pasión para alcanzar la excelencia en cada uno de sus espacios. Integrado sutilmente, pero con presencia innegable, un signo \"+\" emerge de la composición, sugiriendo una mejora constante y el lema implícito: CON ARTE, CON MÁS ARTE.

El diseño del trazo no es meramente estético; es una declaración de intenciones. Expresa el cariño y la autenticidad con los que se elabora cada detalle en CON ARTE. Refleja cómo la tradición culinaria se fusiona con las demandas más vanguardistas, siempre dentro de los cánones de las \"reales comidas caseras\". Esta filosofía se rubrica en todas nuestras elaboraciones, desde el desayuno hasta el aperitivo, comida y sobremesa, y en la cuidada selección de cervezas, vinos y espirituosos, enfatizando la versatilidad de nuestra oferta para cualquier momento del día o la noche.

|CON ARTE BAR & RESTAURANTE is undertaking a strategic rebranding that reflects its solid trajectory since 2004, merging the essence of tradition with an avant-garde spirit.

This visual renewal, driven by the establishment's alma mater, seeks to relaunch and consolidate the excellence that has always been its goal, elevating the customer experience to new heights in a space that is both bar and table.

The Soul of the Stroke: CON ARTE, a Masterpiece in Constant Development

I have transformed the name CON ARTE BAR & RESTAURANTE into the canvas of an evolving masterpiece. The logo, with its distinctive organic and gestural stroke, is an artistic sketch that embodies the life journey of the business: from the meticulous kitchen and vibrant bar to the customer\'s table, culminating in impeccable service and full satisfaction.

This \"labyrinthine path\" intrinsic to the design symbolizes the daily effort and the twists and turns faced with passion to achieve excellence in every space. Subtly integrated, but with an undeniable presence, a \"+\" sign emerges from the composition, suggesting constant improvement and the implicit motto: CON ARTE, CON MÁS ARTE (WITH ART, WITH MORE ART).

The design of the stroke is not merely aesthetic; it is a statement of intent. It expresses the care and authenticity with which every detail is crafted at CON ARTE. It reflects how culinary tradition merges with the most avant-garde demands, always within the canons of \"real homemade meals.\" This philosophy is hallmarked in all our creations, from breakfast to appetizers, lunch, and after-dinner drinks, as well as in the carefully selected beers, wines, and spirits, emphasizing the versatility of our offering for any time of day or night.`,
achievements: [],
category: "branding",
image: "images/con-arte.webp"
},
{
id: "legal-innovation-y-submarcas-plataforma-tecnol-gica-para-profesionales-del-derecho-2016",
title: `LEGAL INNOVATION y SUBMARCAS:\nPlataforma tecnológica para profesionales del derecho

|LEGAL INNOVATION and SUB-BRANDS:\nTechnological platform for legal professionals`,
date: "2016",
location: "Sevilla, España|Seville, Spain",
description: "DISEÑO de MARCA, WEB y WEBMAIL|BRAND, WEB and WEBMAIL DESIGN",
achievements: [],
category: "branding",
image: "images/legal-innovation.webp"
},
];

export const EXPERIENCE: Experience[] = [
{ 
period: '2025-', 
company: 'FREELANCE', 
description: 'Diseño, Desarrollo y Consultoría gráfica, visual y escenográfica. | Graphic, visual, and scenographic design, development, and consulting.' 
},
{ 
period: '2020-2024', 
company: 'SNGULAR', 
description: 'UI/UX, diseño, desarrollo y producción gráfica, visual y escenográfica. | UI/UX, design, development, and graphic, visual, and scenographic production.' 
},
{ 
period: '2017-2020', 
company: 'FREELANCE', 
description: 'Diseño, Desarrollo y Consultoría gráfica, visual y escenográfica. | Graphic, visual, and scenographic design, development, and consulting.' 
},
{ 
period: '2001-2016', 
company: 'ACCIONA LIVING & CULTURE · APD · GPD', 
description: 'Diseño y Producción gráfica y escenográfica para Pabellones Expo, Museos, Exposiciones, Espectáculos, Tematización y Eventos. | Graphic and scenographic design and production for Expo pavilions, museums, exhibitions, shows, theming, and events.' 
},
{ 
period: '2000-2001', 
company: 'SEVILLA INFORMACIÓN', 
description: 'Prensa diaria · Producción gráfica y Maquetación. | Daily press · Graphic production and layout.' 
},
{ 
period: '1997-2000', 
company: 'EUROPROGRAMMES | CONTEL', 
description: 'Productora TV · Edición, Realización e Infografía y Animación para Spots, Documentales y Promos. | TV Production Company · Editing, Production, Computer Graphics, and Animation for Commercials, Documentaries, and TV Commercials.' 
}
];

export const SKILLS: Skill[] = [
{ 
category: 'ESTUDIOS Y CERTIFICACIONES|EDUCATION AND CERTIFICATIONS',
items: [
'Técnico superior en Artes plásticas y diseño en Gráfica publicitaria · EASD Sevilla|Senior technician in Plastic arts and Graphic design · EASD Seville',
'Certificación GOOGLE UX Design Professional|GOOGLE UX Design Professional Certificate',
'Certificación GOOGLE AI Professional|GOOGLE AI Professional Certificate',
'Certificado IBM SkillsBuild: Usos profesionales de la IA GENERATIVA | IBM SkillsBuild Certificate: Professional uses of GENERATIVE AI',
'Especialización UX/UI e Interacción Digital · FUNDAE|UX/UI and Digital Interaction Specialization · FUNDAE'
] 
},
{ 
category: 'EMPRESAS E INSTITUCIONES|COMPANIES & INSTITUTIONS',
items: [
'Proyectos en instituciones de alto nivel:\nReal Madrid CF, Sevilla FC, El Corte Inglés, Seguros Santalucía|Projects in high-level institutions:\nReal Madrid CF, Sevilla FC, El Corte Inglés, Santalucía Insurance Company',
'Instituciones Internacionales:\nUnión Europea, Museo del Prado, Yeltsin Center, House of European History, Airbus|International Institutions:\nEuropean Union, Museo del Prado, Yeltsin Center, House of European History, Airbus',
'Entidades Gubernamentales:\nGobierno de España, Junta de Andalucía, Ayto. de Sevilla, Ministrerio de Cultura, Ministerio de Defensa|Government Entities:\nGovernment of Spain, Junta de Andalucía, Seville City Council, Ministry of Culture of Spain, Ministry of Defense of Spain',
'Ocio y Turismo:\nPortAventura World, WARNER PARK MADRID, Isla Mágica, Dinópolis|Leisure & Tourism:\nPortAventura World, WARNER PARK MADRID, Isla Mágica, Dinópolis'
] 
},
{ 
category: 'DISEÑO E INGENIERÍA CREATIVA|DESIGN & CREATIVE ENGINEERING',
items: [
'Senior Graphic & Visual Designer & Scenography Developer (+25 años)|Senior Graphic & Visual Designer & Scenography Developer (+25 years)',
'Diseño, desarrollo y producción gráfica, visual y escenográfica de alto impacto|High-impact graphic, visual and scenographic design, development and production',
'Dominio experto de herramientas vectoriales y editoriales:\nAdobe Suite, CorelDRAW, MS Office|Expert mastery of vector and editorial tools:\nAdobe Suite, CorelDRAW, MS Office',
'Consultoría técnica y creativa para proyectos internacionales (Acciona Cultura, Sngular)|Technical and creative consultancy for international projects (Acciona Cultura, Sngular)'
] 
},
{ 
category: 'PRODUCCIÓN TÉCNICA Y IA|PRODUCTION & AI WORKFLOWS',
items: [
'Google AI Studio:\nRecurso de apoyo para el desarrollo de apps de optimización creativa, procesos y producción|Google AI Studio:\nSupport resource for the development of creative optimization apps, processes, and production',
'Desarrollo de micro-herramientas in-house|In-house micro-tools development',
'Producción de Artes finales (AAFF) de gran formato y gestión de color compleja|Large-format Final Artworks production (AAFF) and complex color management',
'Gestión de contenidos y soluciones digitales:\nBrightSign, IntuiFace, Scala Designer, SAP 3D Visual Enterprise Author|Content management and digital solutions:\nBrightSign, IntuiFace, Scala Designer, SAP 3D Visual Enterprise Author'
] 
},
{ 
category: '3D, RENDER & AUDIOVISUAL',
items: [
'ArchViz / RTViz:\nRenderizado en tiempo real (D5 Render, Twinmotion, Corona, Chaos Anima)|ArchViz / RTViz:\nReal-time rendering (D5 Render, Twinmotion, Corona, Chaos Anima)',
'Modelado y Animación 3D:\nLightwave3D, Blender, SketchUp, Poser, iClone, KeyShot|3D Modeling & Animation:\nLightwave3D, Blender, SketchUp, Poser, iClone, KeyShot',
'Postproducción AV y Edición:\nVegas Pro Suite, Adobe Suite|AV Post-production & Editing:\nVegas Pro Suite, Adobe Suite',
'Visualización avanzada y cartografía:\nGlobal Mapper, Filter Forge, Next Limit|Advanced visualization and cartography:\nGlobal Mapper, Filter Forge, Next Limit'
] 
},
{ 
category: 'SOFT SKILLS & LEADERSHIP',
items: [
'Producción técnica integral de proyectos masivos (ej. Pinta tu Murillo - 17.431 teselas)|Integral technical production of massive projects (e.g., Pinta tu Murillo - 17,431 tiles)',
'Gestión 360º:\nSupervisión desde el concepto creativo hasta el montaje físico en obra|360º Management:\nSupervision from creative concept to on-site assembly',
'Liderazgo proactivo en la resolución de retos técnicos en entornos internacionales|Proactive leadership in solving technical challenges in international environments',
'Adaptabilidad técnica y funcional en proyectos multiculturales de gran escala|Technical and functional adaptability in large-scale multicultural projects'
] 
}
];

export const COUNTRIES: string[] = [
'Alemania | Germany', 
'Arabia Saudí | Saudi Arabia', 
'Bélgica | Belgium', 
'China | China', 
'Corea Del Sur | South Korea', 
'EAU (Emiratos Árabes Unidos) | UAE (United Arab Emirates)', 
'España | Spain', 
'Francia | France', 
'Japón | Japan', 
'Kazajstán | Kazakhstan', 
'Kuwait | Kuwait', 
'Nigeria | Nigeria', 
'Omán | Oman', 
'Portugal | Portugal', 
'Qatar | Qatar', 
'Rumanía | Romania', 
'Rusia | Russia', 
'Suiza | Switzerland', 
'Turquía | Türkiye'
];

export const AWARDS_ORIGINAL: Award[] = [
  { 
    title: "BIE · Medalla de Oro | BIE · Gold Medal", 
    subtitle: "Pabellón de Omán - Expo Zaragoza 2008 | Oman Pavilion - Expo Zaragoza 2008",
    projectId: 'oman-zaragoza-2008' // Encontrado
  },
  { 
    title: "BIE · Medalla de Oro | BIE · Gold Medal", 
    subtitle: "Pabellón de Turquía - Expo Aichi 2005 | Türkiye Pavilion - Expo Aichi 2005",
    projectId: 'türkiye-aichi-2005' // Encontrado (Ojo con la T mayúscula)
  },
  { 
    title: "BIE · Medalla de Plata | BIE · Silver Medal", 
    subtitle: "Pabellón de Rusia - Expo Yeosu 2012 | Russia Pavilion - Expo Yeosu 2012",
    projectId: 'russia-yeosu-2012' // Encontrado
  },
  { 
    title: "BIE · Medalla de Plata | BIE · Silver Medal", 
    subtitle: "Pabellón de Rusia - Expo Zaragoza 2008 | Russia Pavilion - Expo Zaragoza 2008",
    projectId: 'russia-zaragoza-2008' // Encontrado
  },
  { 
    title: "Red Dot Design Award | Red Dot Design Award", 
    subtitle: "Wu Kingdom Helv Relic | Wu Kingdom Helv Relic",
    projectId: 'wu-kingdom-2014' // Encontrado
  },
  { 
    title: "iF Gold Award | iF Gold Award", 
    subtitle: "Wu Kingdom Helv Relic | Wu Kingdom Helv Relic",
    projectId: 'wu-kingdom-2014' // Enlazado al mismo proyecto
  },
  { 
    title: "European Museum Forum · Mejor Museo | EMYA · European Museum of the Year", 
    subtitle: "MARQ. Museo Arqueológico de Alicante | MARQ. Archaeological Museum of Alicante",
    projectId: 'marq-2002' // Encontrado
  },
  { 
    title: "EMYA · Kenneth Hudson Award | EMYA · Kenneth Hudson Award", 
    subtitle: "Boris Yeltsin Presidential Center | Boris Yeltsin Presidential Center",
    projectId: 'yeltsin-2015' // Encontrado
  },
  { 
    title: "EMYA · Mención Especial | EMYA · Special Commendation", 
    subtitle: "The House of European History | The House of European History",
    projectId: 'european-history-2017' // Encontrado
  },
  { 
    title: "New York Festivals · Silver | New York Festivals · Silver", 
    subtitle: "Wu Kingdom Helv Relic | Wu Kingdom Helv Relic",
    projectId: 'wu-kingdom-2014' // Enlazado al mismo proyecto
  },
  { 
    title: "Art Directors Club (ADC) | Art Directors Club (ADC)", 
    subtitle: "Wu Kingdom Helv Relic · Spatial Communication | Wu Kingdom Helv Relic · Spatial Communication",
    projectId: 'wu-kingdom-2014' // Enlazado al mismo proyecto
  },
  { 
    title: "Exhibitor Magazine · Premio del Público | Exhibitor Magazine · People's Choice", 
    subtitle: "Pabellón de Rusia - Expo Yeosu 2012 | Russia Pavilion - Expo Yeosu 2012",
    projectId: 'russia-yeosu-2012' // Encontrado
  },
  { 
    title: "Exhibitor Magazine · Mención de Honor | Exhibitor Magazine · Honorable Mention", 
    subtitle: "Pabellón de EAU - Expo Astaná 2017 | UAE Pavilion - Expo Astana 2017",
    projectId: 'uae-astana-2017' // Encontrado
  },
  { 
    title: "EuBea · Silver Medal | EuBea · Silver Medal", 
    subtitle: "Espectáculos de Navidad Sevilla | Seville Christmas Shows",
    projectId: 'navidad-sevilla-2010' // Encontrado (rango 2010-16)
  },
  { 
    title: "EuBea · Silver Medal | EuBea · Silver Medal", 
    subtitle: "Espectáculos de Navidad Sevilla | Seville Christmas Shows",
    projectId: 'navidad-sevilla-2010' // Encontrado
  },
  { 
    title: "Eventoplus · Silver Medal | Eventoplus · Silver Medal", 
    subtitle: "Pinta tu Murillo | Pinta tu Murillo",
    projectId: 'pinta-murillo-2018' // Encontrado
  },
  { 
    title: "Eventoplus · Silver Medal | Eventoplus · Silver Medal", 
    subtitle: "Espectáculos de Navidad Sevilla | Seville Christmas Shows",
    projectId: 'navidad-sevilla-2010' // Encontrado
  },
  { 
    title: "FITUR · Mejor Stand Empresarial | FITUR · Best Corporate Stand", 
    subtitle: "Stands Trasmediterránea | Trasmediterránea Stands",
    projectId: 'trasmediterranea-fitur' // Encontrado
  },
  { 
    title: "FITUR · Mejor Stand Empresarial | FITUR · Best Corporate Stand", 
    subtitle: "Stands Trasmediterránea | Trasmediterránea Stands",
    projectId: 'trasmediterranea-fitur' // Encontrado
  },
  { 
    title: "EXPO AICHI · Nature\'s Wisdom Award | EXPO AICHI · Nature\'s Wisdom Award", 
    subtitle: "Medalla de Oro - Pabellón Turquía | Gold Medal - Türkiye Pavilion",
    projectId: 'türkiye-aichi-2005' // Encontrado
  },
  { 
    title: "Premio ATEA · Mejor Programa Cultural | ATEA Award · Best Cultural Program", 
    subtitle: "Luces y Sombras: Museos de Andalucía | Luces y Sombras: Andalusia Museums",
    projectId: 'luces-sombras-1999' // Encontrado
  }
];

// 3. Exportación de Proyectos (Mapeo de Alta Fidelidad)
export const PROJECTS: Project[] = PROJECTS_ORIGINAL.map(project => ({
  ...project,
  // Miniatura para el grid: forzamos 400px para velocidad de carga
  image: toCdn(project.image, 400),
  
  // imageSet: El navegador elegirá la mejor opción (300w, 600w o 1000w)
  imageSet: project.imageSet?.map(img => {
    // Dividimos el string por espacios: ["url", "600w"]
    const parts = img.trim().split(/\s+/);
    
    if (parts.length === 2) {
      const imgUrl = parts[0];      // La URL pura
      const descriptor = parts[1];  // El "600w"
      const wValue = parseInt(descriptor, 10); // El número 600
      
      // Construimos: "url-optimizada-cdn 600w"
      return `${toCdn(imgUrl, wValue)} ${descriptor}`;
    }
    
    // Si no tiene formato de set, lo procesamos como imagen simple
    return toCdn(img);
  })
}));

// 4. Exportación de Premios (Sin BRANDS para evitar errores de referencia)
export const AWARDS: Award[] = AWARDS_ORIGINAL.map(award => ({
  ...award
}));
