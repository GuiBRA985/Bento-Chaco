const galleries=[
  ["aves","01","Aves","Birds","Cores, cantos e movimentos que atravessam o céu do Pantanal."],
  ["mamiferos","02","Mamíferos","Mammals","Da onça-pintada à ariranha: encontros que ficam para sempre."],
  ["repteis","03","Répteis","Reptiles","Habitantes antigos das águas, campos e matas pantaneiras."],
  ["anfibios","04","Anfíbios","Amphibians","Pequenas vidas que anunciam a chuva e revelam a saúde do ambiente."],
  ["invertebrados","05","Borboletas e outros invertebrados","Butterflies & invertebrates","Um universo delicado, quase invisível, sustentando toda a paisagem."],
  ["plantas","06","Plantas","Plants","Flores, frutos e árvores que contam as estações do Pantanal."]
];
const slot=(id,title,n)=>`<figure class="image-slot photo photo-${n}"><div class="slot-copy"><span>ARQUIVO DA IMAGEM</span><strong>assets/${id}-0${n}.jpg</strong></div><img src="assets/${id}-0${n}.jpg" alt="${title} — fotografia ${n}" onload="this.parentElement.classList.add('has-image')" onerror="this.style.display='none'"></figure>`;
document.querySelector("#gallery-root").innerHTML=galleries.map(([id,number,title,subtitle,intro],index)=>`<section class="gallery" id="${id}"><div class="gallery-heading"><span class="gallery-number">${number}</span><div><p>${subtitle}</p><h2>${title}</h2></div><p class="gallery-intro-copy">${intro}</p></div><div class="gallery-grid layout-${index%3}">${[1,2,3,4].map(n=>slot(id,title,n)).join("")}</div></section>`).join("");
