const bulletinsSabado = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "Os índices de precipitação são baixos em grande parte do Brasil, com algumas exceções no nordeste, como Aracaju (2,7 mm) e Salvador (2,3 mm). A região norte também apresenta precipitação leve, com Manaus registrando 1,2 mm. A maior parte do centro e sul do país permanece sem chuvas significativas, o que pode agravar a situação de seca nessas áreas. No Sul, Porto Alegre registra acumulado de 1 mm. O extremo sul do Rio Grande do Sul também Apresenta áreas de prcipitação de aproximadamente 5 mm provocada pelo sistema frontal em direção para o oceano Atlântico sul.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A pressão atmosférica apresenta um padrão de baixa pressão em várias áreas do Brasil, destacando-se valores de 872 hPa no centro do país e 813 hPa na costa sudeste. Áreas de alta pressão são observadas ao sul do continente, com um valor significativo de 1030 hPa (Alta Subtropical do Atlântico Sul - ASAS), sugerindo condições mais estáveis nessa região. <br> Duas baixas próximo ao extremo norte da Amazônia (637 e 800 hPa) pode causar instabilidade e precipitação localizadas.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Radiação de Onda Longa (ROL) indica valores elevados em várias regiões da América do Sul, destacando a intensa emissão de radiação infravermelha da superfície terrestre. Esses valores altos de ROL estão associados às temperaturas elevadas observadas no continente. Manaus (434,4 W/m²), Boa Vista (423,4 W/m²), Macapá (426,2 W/m²), Belém (413,9 W/m²), Porto Velho (427,0 W/m²), Cuiabá (381,1 W/m²), Palmas (360,9 W/m²), Goiânia (339,1 W/m²) e São Luís (412.9 W/m²) são algumas capitais que apresentam valoress altos de ROL.",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta é alta em várias regiões, com valores superiores a 400 W/m² em Macapá (426,2 W/m²) e Belém (413,9 W/m²), indicando alta incidência de radiação solar, o que contribui para as altas temperaturas observadas.",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As temperaturas máximas são elevadas, especialmente no centro e norte do Brasil. Cuiabá registra 36,2°C, Campo Grande registra 35,2°C e Manaus 33,8°C, refletindo o calor intenso. Nota-se nitidamente que na área do Pantanal as máximas estão de 36°C.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A temperatura média também é alta, com valores acima de 28°C em várias cidades, como Manaus (30,4°C) e Cuiabá (28,4°C).",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas estão relativamente altas, com Boa Vista registrando 25,0°C e Macapá 26,0°C, o que é significativo para a época do ano.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa varia entre moderada e alta no norte do Brasil, como em Macapá (79,8%) e Belém (78,1%). No centro-oeste e sudeste, os valores são mais baixos, com Goiânia registrando 47,1% e Campo Grande 25,9%, indicando condições mais secas. Essas variações são importantes para entender a distribuição de umidade e o potencial de incêndios florestais.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica também reflete uma maior concentração de umidade na região norte, com valores de 20,1 g/kg em Manaus e 19,6 g/kg em Boa Vista. No centro-sul, os valores são significativamente mais baixos, como em Porto Alegre (11,0 g/kg) e Florianópolis (10,2 g/kg), destacando um ambiente mais seco.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "A velocidade do vento é moderada, com algumas áreas apresentando ventos mais intensos, como Recife (5,1 m/s ou 20,8 km/h) e Natal (5,1 m/s 18,3 km/h). Ventos mais fortes são observados nas áreas de baixa pressão, podendo influenciar a dispersão de poluentes e a sensação térmica.",
  },
];

const carouselSabado = document.getElementById("carouselSabado");
const bulletinTitleSabado = document.getElementById("bulletin-title-sabado");
const bulletinTextSabado = document.getElementById("bulletin-text-sabado");

carouselSabado.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselSabado.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsSabado[index];
  bulletinTitleSabado.innerHTML = bulletin.title;
  bulletinTextSabado.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselSabado, {
  interval: false,
  ride: false,
});

const toggleSabado = document.getElementById("toggle-sabado");
const contentSabado = document.getElementById("content-sabado");

// Função para expandir/contrair
toggleSabado.addEventListener("click", () => {
  contentSabado.classList.toggle("show");
});
