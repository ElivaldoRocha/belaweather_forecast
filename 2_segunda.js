const bulletinsSegunda = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "Chuvas esparsas são observadas no nordeste, com valores significativos em João Pessoa (5,4 mm) e Recife (4,5 mm). A região sul, especialmente Porto Alegre (10,8 mm), também apresenta acumulados de precipitação, associados a umidade trazida pela frente fria.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "Observa-se um sistema de alta pressão (1032 hPa) no sul da Argentina, estendendo-se até o Uruguai e sul do Rio Grande do Sul, indicando condições de tempo estável na região. No Brasil, a presença de baixas pressões, especialmente ao norte (637 hPa) e no norte do Amazonas e Roraima (801 hPa), pode favorecer a formação de instabilidades locais.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "As regiões norte e nordeste do Brasil apresentam altos valores de radiação de onda longa, com destaque para Manaus (439,2 W/m²) e Macapá (419,2 W/m²), indicando temperaturas elevadas e céu claro. No sul, os valores são menores, refletindo a influência da alta pressão e temperaturas mais amenas.",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação solar incidente é alta em grande parte do Brasil, especialmente no nordeste, com São Luis (414,6 W/m²), Recife (389,6 W/m²) e Aracaju (394,9 W/m²) recebendo intensa radiação solar. <br> Na região Norte, Manaus apresenta 439,2 W/m².  Isto favorece o aquecimento diurno e a alta evaporação.",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "Elevadas temperaturas máximas são previstas para o norte e nordeste, com Porto Velho (37,4°C), Rio Branco (36,7°C), Manaus (34,1°C) e Teresina (34,1°C) registrando os valores mais altos. <br> No sul, Porto Alegre tem uma máxima de 15,9°C.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "O padrão de temperaturas médias reflete as máximas, com as regiões norte e nordeste apresentando valores elevados, enquanto o sul e partes do centro-oeste são mais amenas.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas são relativamente altas no norte e nordeste, com destaque para Manaus (29,8°C), onde percebe-se pouca amplitude térmica, e Teresina (23,7°C) mostrando valores consideráveis. No sul, Porto Alegre registra 10,8°C.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "Os valores de umidade relativa variam significativamente. No norte, há uma alta umidade, especialmente em Boa Vista (82,1%), Manaus (67.6%), enquanto regiões do centro-oeste ainda apresentam umidade relativas abaixo dos 50%, como Campo Grande (27,6%), Cuiabá (35,8%), indicando um tempo mais seco e favorável a focos de incêndios no Pantanal.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica é elevada no norte, com Boa Vista (19,7 g/kg) e Macapá (19,5 g/kg), indicando uma grande quantidade de vapor d'água no ar. <br> No sul, os valores são menores, refletindo um ar mais seco. <br> No Centro Oeste, Campo Grande registra apenas 5,7 g/kg.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Os ventos são mais intensos na região costeira do sul do Brasil, com Porto Alegre (6,2 m/s ou 22,2 km/h) e Florianópolis (6,4 m/s ou 23 km/h) registrando velocidades elevadas. No interior, os ventos são mais calmos, com menores velocidades observadas.",
  },
];

const carouselSegunda = document.getElementById("carouselSegunda");
const bulletinTitleSegunda = document.getElementById("bulletin-title-segunda");
const bulletinTextSegunda = document.getElementById("bulletin-text-segunda");

carouselSegunda.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselSegunda.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsSegunda[index];
  bulletinTitleSegunda.innerHTML = bulletin.title;
  bulletinTextSegunda.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselSegunda, {
  interval: false,
  ride: false,
});

const toggleSegunda = document.getElementById("toggle-segunda");
const contentSegunda = document.getElementById("content-segunda");

// Função para expandir/contrair
toggleSegunda.addEventListener("click", () => {
  contentSegunda.classList.toggle("show");
});
