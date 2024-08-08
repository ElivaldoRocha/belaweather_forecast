const bulletinsQuarta = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A maior parte do Brasil central e norte apresenta baixos índices de precipitação, indicando período seco.<br>A precipitação é mais significativa no sul do Brasil, especialmente em Porto Alegre (6,5 mm).<br>Áreas ao norte do Brasil, como Boa Vista (1,6 mm), também apresentam chuvas, embora de menor intensidade.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "Diversas áreas de baixa pressão (L) são observadas, notavelmente no Pacífico (993 hPa) e sobre o sul da Argentina (787 hPa).<br>Áreas de alta pressão (H) estão situadas no Pacífico Sul (ASPS - 1029 hPa) e no sul da costa Argentina (1033 hPa).",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de radiação de onda longa estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (427,3 W/m²), Manaus (430,2 W/m²) e Cuiabá (370,6 W/m²).",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (427,3 W/m²), Manaus (430,2 W/m²) e Cuiabá (370,6 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "Elevadas temperaturas máximas são registradas no norte do Brasil, com Porto Velho (35,4°C), Manaus (34,1°C) e Boa Vista (33,2°C).<br>Cuibá registra 36,2°C",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "Temperaturas médias elevadas na região norte, com Boa Vista (28,6°C) e Manaus (30,7°C).<br>Mais baixas no sul, como em Porto Alegre (19,1°C).",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "A mínima temperatura também segue o padrão de máximas e médias, com regiões sulinas registrando temperaturas mais baixas, Porto Alegre (17,1°C), enquanto no norte, Boa Vista (25,4°C) e Manaus (27,6°C).",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "Valores elevados de umidade relativa são observados em Porto Alegre (93,9%) e Florianópolis (84,8%).<br><br>Regiões no centro-oeste, como Cuiabá (32,7%) e Palmas (47.6%), apresentam níveis baixos de umidade, contribuindo para condições mais secas e favorecendo o surfgimento de incêndios.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "Elevada no norte da Amazônia, especialmente em Belém (19,6 g/kg) e Macapá (20,6 g/kg), indicando alta concentração de vapor d’água.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Velocidades de vento variáveis são observadas, com áreas de baixa pressão trazendo ventos fortes no Pacífico (até 10 m/s).<br>Regiões do sul do Brasil e da Argentina apresentam ventos moderados, influenciados pelas altas e baixas pressões locais.",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong>O gradiente térmico revela a presença de frentes frias na América do Sul.<br><br> Uma frente fria pode ser observada avançando pelo cone sul, associada a um sistema de baixa pressão (787 hPa) na região do Chile e Argentina. Frentes frias contribuiem para a diminuição das temperaturas nas áreas ao sul e causa uma queda significativa nos valores de temperatura.</li><li><strong>Zona de Convergência Intertropical:</strong>A ZCIT está bem definida no hemisfério norte, próxima da linha do Equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia e partes do Caribe, como indicado pela baixa pressão (1008 hPa) na região.</li></ul>",
  },
];

const carouselQuarta = document.getElementById("carouselQuarta");
const bulletinTitleQuarta = document.getElementById("bulletin-title-quarta");
const bulletinTextQuarta = document.getElementById("bulletin-text-quarta");

carouselQuarta.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselQuarta.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsQuarta[index];
  bulletinTitleQuarta.innerHTML = bulletin.title;
  bulletinTextQuarta.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselQuarta, {
  interval: false,
  ride: false,
});

const toggleQuarta = document.getElementById("toggle-quarta");
const contentQuarta = document.getElementById("content-quarta");

// Função para expandir/contrair
toggleQuarta.addEventListener("click", () => {
  contentQuarta.classList.toggle("show");
});
