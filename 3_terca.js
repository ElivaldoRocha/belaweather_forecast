const bulletinsTerca = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A precipitação é escassa em quase to o país. Com exceção, em Boa Vista (4,8 mm) e Natal (5,6 mm). No centro e sul do Brasil, há pouca ou nenhuma precipitação registrada, com exceção, em Porto Alegre que apresenta um acumulado de 8,4 mm, indicando a presença de chuvas moderadas na região provocadas por frentes frias.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A análise da pressão atmosférica revela um padrão típico de alta e baixa pressão sobre a América do Sul. Destaca-se uma alta pressão (H) de 1032 hPa ao largo da costa da Argentina e a Alta Pressão do Pacífico Sul (ASPS) de 1030 hPa atuando bem próxima da costa do Chile, indicando uma estabilidade atmosférica nesta região.<br><br> Baixas pressões significativas (L) estão presentes, como uma de 783 hPa no cone sul associadas a sistemas frontais que podem provocar instabilidade na região.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de radiação de onda longa estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (425,9 W/m²), Manaus (421,3 W/m²) e Cuiabá (371,9 W/m²).",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (425,9 W/m²), Manaus (421,3 W/m²) e Cuiabá (371,9 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As temperaturas máximas são altas em quase todo o Brasil, com destaque para Porto Velho (36,4°C), Teresina (35,6°C), Manaus (33,2°C) e Cuiabá (35,9°C). As regiões do sul, como Porto Alegre, apresentam temperaturas mais amenas (22,8°C).",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A temperatura média segue um padrão semelhante ao das máximas, com áreas no norte e nordeste do Brasil registrando valores elevados, como Manaus (30,1°C), Belém (28,2°C), e Teresina (28,6°C).",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "A amplitude térmica é menor no norte do Brasil, onde as temperaturas permanecem relativamente estáveis ao longo do dia. As mínimas, a nível de Brasil, variam bastante, com Porto Alegre registrando 18,0°C e Teresina 22,8°C.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "As áreas com maior umidade relativa incluem Boa Vista (83,2%), Belém (72,2%) e Porto Alegre (91.2%). No entanto, regiões como Cuiabá apresentam umidade relativa baixa (35.6%), indicando condições mais secas.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica é mais alta no norte da Amazônia, com Boa Vista registrando 20,2 g/kg. No suldeste, valores mais baixos como em São Paulo (7.7 g/kg) indicam condições mais secas.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Os ventos são mais intensos no sul do Brasil, especialmente em áreas próximas às baixas pressões, com velocidades de até 10 m/s ou 36 km/h. Isso pode indicar a presença de ventos fortes associados a sistemas frontais.",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong> O gradiente térmico revela a presença de frentes frias na América do Sul. Uma frente fria pode ser observada avançando pelo cone sul, associada a um sistema de baixa pressão (783 hPa) na região do Chile e Argentina. Esta frente fria está contribuindo para a queda das temperaturas nas áreas ao sul.</li><li><strong>Zona de Convergência Intertropical:</strong>A ZCIT está bem definida e atuando no hemisfério norte próximo a linha do equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia e partes do Caribe, como indicado pela baixa pressão (1010 hPa) na região.</li></ul>",
  },
];

const carouselTerca = document.getElementById("carouselTerca");
const bulletinTitleTerca = document.getElementById("bulletin-title-terca");
const bulletinTextTerca = document.getElementById("bulletin-text-terca");

carouselTerca.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselTerca.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsTerca[index];
  bulletinTitleTerca.innerHTML = bulletin.title;
  bulletinTextTerca.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselTerca, {
  interval: false,
  ride: false,
});

const toggleTerca = document.getElementById("toggle-terca");
const contentTerca = document.getElementById("content-terca");

// Função para expandir/contrair
toggleTerca.addEventListener("click", () => {
  contentTerca.classList.toggle("show");
});
