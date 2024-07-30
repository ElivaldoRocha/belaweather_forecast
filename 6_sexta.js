const bulletinsSexta = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "Os índices de precipitação são baixos na maior parte do continente, com exceção da região norte, onde Boa Vista registra 4,1 mm. Na região Nordeste, algumas áreas apresentam precipitação leve, como Salvador (5,4 mm) e Maceió (3,7 mm). Essa ausência de chuvas pode intensificar a seca em áreas já afetadas.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A análise da pressão mostra uma predominância de baixas pressões (L) em diversas áreas, como o centro do Brasil (873 hPa) e a costa sudeste (815 hPa). Áreas de alta pressão (H) estão presentes ao sul da América do Sul (1024 hPa), indicando estabilidade atmosférica nessas regiões. A presença de baixas ao norte da Amazônia (800 e 637 hPa) pode trazer instabilidade e precipitação para essa área. O sistema frontal visto nos dias anteriores, parece ter enfraquecido ao atingir o sul do Chile.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "A radiação de onda longa é alta em grande parte da América do Sul, com valores superiores a 420 W/m² em regiões como Manaus (429,3 W/m²) e Macapá (420,1 W/m²). Esses valores indicam uma significativa emissão de radiação infravermelha da superfície terrestre, comum em áreas com altas temperaturas superficiais.",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta é intensa em quase todo o continente, com valores superiores a 250 W/m² em várias regiões, como Teresina (381,6 W/m²) e Recife (381,6 W/m²). Isso sugere uma alta incidência de radiação solar, contribuindo para aquecimento diurno e altas temperaturas observadas.",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As temperaturas máximas estão extremamente altas, especialmente no centro-norte do Brasil. Cuiabá (35,4°C), Palmas (34,6°C) e Manaus (34,2°C) são exemplos de regiões com calor intenso. No nordeste, Teresina pode registrar máxima de 34,9°C, a maior máxima das capitais nordestina",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A temperatura média também é elevada, com valores acima de 28°C em cidades como Porto Velho (28,7°C) e Teresina (27,9°C).",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas estão mais amenas, mas ainda relativamente altas, como em Boa Vista (26,1°C) e Macapá (25,5°C). No Sudeste, São Paulo tem a menor mínima do páis com 12,2°C. No sul, Porto Alegra com 17,4°C, Florianópolis com 18,2°C, Curitiba com 15,8°C.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa varia significativamente, com valores mais altos na região norte, como em Boa Vista (77,9%) e Macapá (82,4%). No entanto, áreas do centro-oeste e sudeste apresentam umidade relativa baixa, como Cuiabá (32,8%), Campo Grande (30,2%) e Goiânia (50,9%), indicando um ambiente mais seco. Essa situação coloca os brigadistas de incêndio no Pantanal em alerta.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica segue uma tendência similar, com valores mais elevados na região amazônica e mais baixos no centro-sul do Brasil. Manaus registra 18,3 g/kg, enquanto Curitiba apresenta 8,8 g/kg, reforçando o contraste na distribuição da umidade.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "A velocidade do vento é moderada na maior parte do continente, com algumas áreas apresentando ventos mais fortes, como Campo Grande (5,6 m/s ou 20,1 km/h) e Recife (5,2 m/s ou 18,7 km/h). Esses ventos podem influenciar a sensação térmica e a dispersão de poluentes. Rajadas de vento, como a registrada em Campo Grande, podem contibuir para o espalhamento de incêndios, especialmente na área do Pantanal sul-mato-grossense",
  },
];

const carouselSexta = document.getElementById("carouselSexta");
const bulletinTitleSexta = document.getElementById("bulletin-title-sexta");
const bulletinTextSexta = document.getElementById("bulletin-text-sexta");

carouselSexta.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselSexta.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsSexta[index];
  bulletinTitleSexta.innerHTML = bulletin.title;
  bulletinTextSexta.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselSexta, {
  interval: false,
  ride: false,
});

const toggleSexta = document.getElementById("toggle-sexta");
const contentSexta = document.getElementById("content-sexta");

// Função para expandir/contrair
toggleSexta.addEventListener("click", () => {
  contentSexta.classList.toggle("show");
});
