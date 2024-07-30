const bulletinsQuinta = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A precipitação se concentra no norte e nordeste, com Macapá (3,3 mm), Boa Vista (1,9 mm), Manaus (1,1 mm) e Aracaju (5,8 mm), Salvador (4,6 mm), Maceió (4,1 mm), João Pessoa (3 mm) e Recife (2,4 mm) registrando valores significativos em relação ao país. O centro-oeste e sudeste (com exceção de Vitória com 2,1 mm) continuam apresentando baixa precipitação permanecendo secos.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "Há várias áreas de baixa pressão (L) sobre o continente, com destaque para uma baixa na região da Amazônia (637 hPa) e outra no sul do Brasil (816 hPa), indicativas de instabilidade atmosférica. Áreas de alta pressão (H) são notadas sobre o Atlântico Sul, com pressão de até 1028 hPa, promovendo condições mais estáveis no sudeste e sul do Brasil. A frente fria continua se intensificando no sul do Pacífico",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "A radiação de onda longa (ROL) está significativamente elevada no norte e nordeste do Brasil, com Manaus (427,5 W/m²), Macapá (429,7 W/m²) e Belém (415,8 W/m²) apresentando valores altos. Isso sugere intensa atividade convectiva e temperaturas superficiais elevadas.",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) também é alta nas mesmas regiões, com valores proeminentes em Manaus (427,5 W/m²) e Macapá (429,7 W/m²), indicando forte incidência solar.",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As máximas são elevadas no norte e nordeste, com Porto Velho (34,7°C) e Teresina (33,6°C) registrando os maiores valores.<br> No Centro Oeste, Cuiabá (35,8°C), Campo Grande (33,6°C).<br> No sul, Porto Alegre apresenta uma máxima de 26,5°C.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A temperatura média é alta no norte e nordeste, com Manaus (30°C) apresentando a maior média do país. Enquanto no sul os valores são mais amenos, com Florianópolis registrando 19,4°C.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas indicam um resfriamento noturno moderado, com Curitiba (14,2°C), São Paulo (12,2°C) e Belo Horizonte (14,2°C) apresentando valores mais baixos.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa é alta no norte e em quase toda a costa do litoral brasileiro, com Macapá (86,6%) e Belém (76,2%) registrando valores elevados, indicando atmosfera úmida e favorável à formação de nuvens. A baixa umidade se intensifica no Centro Oeste",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica segue o mesmo padrão, com Boa Vista (19,8 g/kg), Manaus (19,2 g/kg) e Belém (18,3 g/kg), contribuindo para a sensação de calor e umidade.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Ventos moderados a fortes são observados no sul do continente, com velocidades de até 5.6 m/s (20,1 km/h) na Argentina, associados à baixa pressão (765 hPa).<br> No Brasil, os ventos são mais fracos, com valores médios em Goiânia (2,1 m/s ou 7,5 km/h) e São Paulo (2,2 m/s ou 7,9 km/h).",
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
