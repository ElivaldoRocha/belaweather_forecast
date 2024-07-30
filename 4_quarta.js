const bulletinsQuarta = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "Não há ocorrência expressivas de acumulados de precipitação para quase todas as regiões do Brasil. A região que mais se destaca é no noroeste do Amazonas (região, por vezes, referênciada como 'Cabeça do Cachorro'). As capitais costeiras que apresentam acumulados significativos são: Aracaju (9,6 mm), Salvador (4,2 mm), Maceió (3,2 mm) e Vitória (2,8 mm)",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A presença de várias áreas de baixa pressão (L) sobre o continente indica instabilidade atmosférica, com destaque para uma baixa pressão na região da Amazônia (637 hPa) e outra no sul do Brasil (816 hPa). Áreas de alta pressão (H) estão situadas sobre o Atlântico Sul, com pressão chegando a 1029 hPa, influenciando condições mais estáveis no sudeste e sul do Brasil. A frente fria ganha intensidade no Pacífico sul e se aproxima do continente chegando ao sul do Chile",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "A radiação de onda longa (ROL) apresenta valores elevados no norte e nordeste do Brasil, com Manaus (426,3 W/m²), Macapá (419.0 W/m²) e Teresina (416,6 W/m²), sugerindo intensa atividade convectiva (se houver umidade relativa alta) e alta temperatura superficial.",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) reflete um padrão semelhante, com altas incidências em áreas como Belém (410.8 W/m²) e Recife (390.6 W/m²), contribuindo para o aquecimento diurno nessas regiões. As regiões do Maranhão, Piauí, Bahia, e Minas Gerais apresentam uma larga faixa de intensa ROC.",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "Norte e Nordeste apresentam as maiores do país, com Porto Velho (36,9°C), Rio Branco (34,0°C), Manaus (33,8°C) e Teresina (35,1°C). <br> No sul, as temperaturas são mais amenas, com Porto Alegre (20,8°C) e Florianópolis (19,1°C).",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A temperatura média segue este padrão, com valores elevados no norte e nordeste e mais baixos no sul.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas indicam resfriamento noturno moderado, com valores mais baixos no sul, como Porto Alegre (11,8°C), e mais altos no norte e nordeste.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa é alta no norte do Brasil, com valores acima de 70% em regiões como Macapá (83,1%) e São Luis (74,8%), indicando uma atmosfera úmida e propensa à formação de nuvens e precipitação. <br> A região Centro Oeste vem mantendo uma melhora na umidade, porém, ainda abaixo dos 50%. Campo Grande com 34,6%, Cuiabá com 43,4% e Goiânia com 45,6%. <br> A região Sul apresenta condições de umidade elevadas, Porto Alegre com 82,9%, Florianópoles com 83,1% e Curitiba com 85,4%. <br>São Paulo com 76,1%, Rio de Janeiro com 80,1%, Vitória com 87,2% e Belo Horionte com 77,8% na região Sudeste.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica também é elevada, com Manaus (18,0 g/kg) e Belém (18.2 g/kg), contribuindo para a sensação de calor e favorecendo a convecção.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Ventos moderados a fortes são observados no sul do continente, com velocidades de até 6.0 m/s (23,7 km/h) no sul do Chile e Argentina, associados à baixa pressão (972 hPa). No Brasil, os ventos são mais fracos, com valores médios em cidades como Goiânia (3,8 m/s ou 13,6 km/h) e São Paulo (3.0 m/s ou 10,8 km/h).",
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
