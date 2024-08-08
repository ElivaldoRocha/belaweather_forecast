const bulletinsQuinta = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A quase totalidade das capitais brasileiras nao registram acumulados. A imagem de precipitação mostra acumulado significativo na região sul do Brasil em Florianópoles (6,5 mm).<br><br>Na região norte, Belém registra acumulado de 6mm acasionada por sistemas convectivos de meso escala.<br><br> Nas regiões Nordeste, áreas como Salvador (5,5 mm) e Maceió (3,4 mm) também apresentam acumulados provalvelmente causados por atuação de brisas marítimas.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "Observa-se a presença de diversas áreas de baixa pressão (L) em torno da América do Sul, com destaque para um sistema profundo de 790 hPa no cone sul. E um sistema de baixa pressão (798 hPa) atuando sobre Roraima. A presença dessas baixas pressões favorece a instabilidade e potencial para precipitações significativas.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de radiação de onda longa estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (430,2 W/m²), Manaus (426,1 W/m²) e Cuiabá (379,8 W/m²).",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (430,2 W/m²), Manaus (426,1 W/m²) e Cuiabá (379,8 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As máximas variam significativamente, com valores extremamente altos na região norte, como em Porto Velho (35,9°C) e Boa Vista (33,1°C). Já na região sul, temperaturas mais amenas são observadas, como em Porto Alegre (25,2°C).",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "As médias refletem uma tendência similar, com valores elevados na região norte e central, enquanto o sul apresenta condições mais frescas.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As mínimas seguem o padrão observado nas médias e máximas, com as regiões sul e sudeste apresentando valores mais baixos, como em Porto Alegre (15,9°C) e Florianópolis (18,4°C).",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "Os níveis de umidade relativa variam consideravelmente, com valores altos no litoral norte e nordeste, como em Salvador (84,8%) e Belém (82,9%), contrastando com valores baixos no interior do continente, como em Palmas (42,2%) e Brasília (37,7%). Esse gradiente de umidade é propício para a formação de sistemas convectivos nas áreas mais úmidas.<br><br> Na região central, a baixa umidade contribue para o aparecimento de incêndios.<br><br>Na reigão sul, Porto alegre registra umidade de 84,9%, o que contribue para acumualdos de precipitação significativo quando associado com a atuação de sistemas frontais",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica segue o mesmo padrão, com Boa Vista (19,7 g/kg), Manaus (18,9 g/kg) e Belém (20 g/kg), contribuindo para a sensação de calor e umidade.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Os ventos estão mais intensos nas áreas próximas às baixas pressões, especialmente no sul do Chile (10 m/s ou 36 km/h) e na costa atlântica próxima à Argentina e Uruguai. No interior do Brasil, os ventos são mais moderados, com algumas áreas apresentando ventos até 4-5 m/s (14,4-18 km/h).",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong>O gradiente térmico revela a presença de frentes frias na América do Sul. Uma frente fria pode ser observada avançando pelo cone sul, associada a um sistema de baixa pressão (790 hPa) na região do Chile e Argentina. Esta frente fria pode contribuir para a diminuição das temperaturas nas áreas ao sul e causar uma queda significativa nos valores de temperatura.</li><li><strong>Zona de Convergência Intertropical:</strong>A ZCIT está bem definida no hemisfério norte, próxima da linha do Equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia e partes do Caribe, como indicado pela baixa pressão (1009 hPa) na região.</li></ul>",
  },
];

const carouselQuinta = document.getElementById("carouselQuinta");
const bulletinTitleQuinta = document.getElementById("bulletin-title-quinta");
const bulletinTextQuinta = document.getElementById("bulletin-text-quinta");

carouselQuinta.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselQuinta.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsQuinta[index];
  bulletinTitleQuinta.innerHTML = bulletin.title;
  bulletinTextQuinta.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselQuinta, {
  interval: false,
  ride: false,
});

const toggleQuinta = document.getElementById("toggle-quinta");
const contentQuinta = document.getElementById("content-quinta");

// Função para expandir/contrair
toggleQuinta.addEventListener("click", () => {
  contentQuinta.classList.toggle("show");
});
