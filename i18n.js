/**
 * Diccionario y motor de idiomas de la landing.
 *
 * Un solo index.html: el contenido se sustituye en caliente desde aquí.
 * El idioma se guarda en localStorage y, si no hay preferencia, se deduce
 * del navegador. En árabe se pone dir="rtl" en el documento.
 */

const LANGS = [
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "it", name: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "pt-BR", name: "Português", flag: "🇧🇷", dir: "ltr" },
  { code: "ja", name: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "zh-Hant", name: "繁體中文", flag: "🇹🇼", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇦🇪", dir: "rtl" },
];

const DICT = {
  en: {
    title: "ATMOS Studio 2.0 | AI architectural visualization",
    lang: "Language",
    contact: "Contact",
    "hero.badge": "Architectural visualization suite · 2.0",
    "hero.t1": "Three workspaces.",
    "hero.t2": "One studio.",
    "hero.sub": "Turn sketches and plans into editorial renders: floor plans, aerial masterplans and 3D perspectives. Strict geometry, real materials, four representation techniques.",
    "cta.web": "Open ATMOS Studio Web",
    "cta.app": "Download on the App Store",
    "pillars.kicker": "The suite",
    "pillars.title": "Three workspaces, one engine",
    "p1.t": "Floor Plans",
    "p1.d": "Strict 2D orthogonality with day and night lighting and PBR materials. Your plan stays your plan.",
    "p2.t": "Masterplans",
    "p2.d": "Aerial top-down views with roofs, gardens and urban or landscape context. The site reads as territory.",
    "p3.t": "3D Perspectives",
    "p3.d": "Pedestrian, strict straight-on elevations and 3/4 aerial shots, indoors and outdoors, with human figures for scale.",
    "tech.kicker": "Representation",
    "tech.title": "Four techniques",
    "tech.sub": "The same geometry, drawn four ways.",
    "t1.t": "Editorial Photorealism",
    "t1.d": "Physical materials and directional light. A photograph of the finished space.",
    "t2.t": "Clay Maquette",
    "t2.d": "Monochrome plaster volumes. Form, contact shadows and ambient occlusion only.",
    "t3.t": "Architectural Watercolor",
    "t3.d": "Translucent washes on textured paper with graphite guide lines underneath.",
    "t4.t": "Ink Sketch",
    "t4.d": "Direct ink strokes and cross-hatching. Grey marker for shadow.",
    "gallery.title": "Built with ATMOS",
    "footer.rights": "© 2026 ATMOS Studio. All rights reserved.",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.faq": "FAQ",
    "footer.support": "Support",
  },
  es: {
    title: "ATMOS Studio 2.0 | Visualización arquitectónica con IA",
    lang: "Idioma",
    contact: "Contacto",
    "hero.badge": "Suite de visualización arquitectónica · 2.0",
    "hero.t1": "Tres espacios.",
    "hero.t2": "Un estudio.",
    "hero.sub": "Convierte bocetos y planos en renders editoriales: plantas, masterplans aéreos y perspectivas 3D. Geometría estricta, materiales reales, cuatro técnicas de representación.",
    "cta.web": "Abrir ATMOS Studio Web",
    "cta.app": "Descargar en App Store",
    "pillars.kicker": "La suite",
    "pillars.title": "Tres espacios, un solo motor",
    "p1.t": "Plantas Arquitectónicas",
    "p1.d": "Ortogonalidad 2D estricta con iluminación de día y noche y materiales PBR. Tu plano sigue siendo tu plano.",
    "p2.t": "Masterplans",
    "p2.d": "Vistas cenitales aéreas con cubiertas, jardines y contexto urbano o paisajístico. El sitio se lee como territorio.",
    "p3.t": "Perspectivas 3D",
    "p3.d": "Peatonales, alzados frontales estrictos y tomas aéreas 3/4, en interiores y exteriores, con siluetas humanas a escala.",
    "tech.kicker": "Representación",
    "tech.title": "Cuatro técnicas",
    "tech.sub": "La misma geometría, dibujada de cuatro maneras.",
    "t1.t": "Fotorrealista Editorial",
    "t1.d": "Materiales físicos y luz direccional. Una fotografía del espacio terminado.",
    "t2.t": "Maqueta Clay",
    "t2.d": "Volúmenes de yeso monocromático. Solo forma, sombras de contacto y oclusión ambiental.",
    "t3.t": "Acuarela Arquitectónica",
    "t3.d": "Aguadas translúcidas sobre papel texturizado con líneas de grafito debajo.",
    "t4.t": "Boceto a Tinta",
    "t4.d": "Trazos directos de tinta y achurado cruzado. Rotulador gris para la sombra.",
    "gallery.title": "Hecho con ATMOS",
    "footer.rights": "© 2026 ATMOS Studio. Todos los derechos reservados.",
    "footer.terms": "Términos",
    "footer.privacy": "Privacidad",
    "footer.faq": "Preguntas frecuentes",
    "footer.support": "Soporte",
  },
};

// El resto de idiomas comparten estructura; se completan más abajo.
const BASE = DICT.en;
const EXTRA = {
  de: {
    title: "ATMOS Studio 2.0 | Architekturvisualisierung mit KI",
    lang: "Sprache", contact: "Kontakt",
    "hero.badge": "Suite für Architekturvisualisierung · 2.0",
    "hero.t1": "Drei Arbeitsbereiche.", "hero.t2": "Ein Studio.",
    "hero.sub": "Verwandeln Sie Skizzen und Pläne in redaktionelle Renderings: Grundrisse, Luft-Masterpläne und 3D-Perspektiven. Strenge Geometrie, echte Materialien, vier Darstellungstechniken.",
    "cta.web": "ATMOS Studio Web öffnen", "cta.app": "Im App Store laden",
    "pillars.kicker": "Die Suite", "pillars.title": "Drei Arbeitsbereiche, eine Engine",
    "p1.t": "Grundrisse", "p1.d": "Strenge 2D-Orthogonalität mit Tag- und Nachtlicht sowie PBR-Materialien. Ihr Plan bleibt Ihr Plan.",
    "p2.t": "Masterpläne", "p2.d": "Zenitale Luftansichten mit Dächern, Gärten und urbanem oder landschaftlichem Kontext.",
    "p3.t": "3D-Perspektiven", "p3.d": "Fußgängerperspektiven, strenge Frontansichten und 3/4-Luftaufnahmen, innen und außen, mit menschlichen Silhouetten im Maßstab.",
    "tech.kicker": "Darstellung", "tech.title": "Vier Techniken", "tech.sub": "Dieselbe Geometrie, vierfach gezeichnet.",
    "t1.t": "Redaktioneller Fotorealismus", "t1.d": "Physikalische Materialien und gerichtetes Licht. Ein Foto des fertigen Raums.",
    "t2.t": "Tonmaquette", "t2.d": "Monochrome Gipsvolumen. Nur Form, Kontaktschatten und Umgebungsverdeckung.",
    "t3.t": "Architekturaquarell", "t3.d": "Transparente Lasur auf strukturiertem Papier mit Graphitlinien darunter.",
    "t4.t": "Tuscheskizze", "t4.d": "Direkte Tuschestriche und Kreuzschraffur. Graumarker für Schatten.",
    "gallery.title": "Mit ATMOS gebaut",
    "footer.rights": "© 2026 ATMOS Studio. Alle Rechte vorbehalten.",
    "footer.terms": "AGB", "footer.privacy": "Datenschutz", "footer.faq": "FAQ", "footer.support": "Support",
  },
  fr: {
    title: "ATMOS Studio 2.0 | Visualisation architecturale par IA",
    lang: "Langue", contact: "Contact",
    "hero.badge": "Suite de visualisation architecturale · 2.0",
    "hero.t1": "Trois espaces.", "hero.t2": "Un studio.",
    "hero.sub": "Transformez croquis et plans en rendus éditoriaux : plans, masterplans aériens et perspectives 3D. Géométrie stricte, matériaux réels, quatre techniques de représentation.",
    "cta.web": "Ouvrir ATMOS Studio Web", "cta.app": "Télécharger sur l'App Store",
    "pillars.kicker": "La suite", "pillars.title": "Trois espaces, un seul moteur",
    "p1.t": "Plans", "p1.d": "Orthogonalité 2D stricte, éclairage jour et nuit, matériaux PBR. Votre plan reste votre plan.",
    "p2.t": "Plans directeurs", "p2.d": "Vues aériennes zénithales avec toitures, jardins et contexte urbain ou paysager.",
    "p3.t": "Perspectives 3D", "p3.d": "Vues piétonnes, élévations frontales strictes et prises aériennes 3/4, intérieures et extérieures, avec silhouettes humaines à l'échelle.",
    "tech.kicker": "Représentation", "tech.title": "Quatre techniques", "tech.sub": "La même géométrie, dessinée de quatre façons.",
    "t1.t": "Photoréalisme éditorial", "t1.d": "Matériaux physiques et lumière directionnelle. Une photographie de l'espace fini.",
    "t2.t": "Maquette Argile", "t2.d": "Volumes de plâtre monochrome. Forme, ombres de contact et occlusion ambiante uniquement.",
    "t3.t": "Aquarelle architecturale", "t3.d": "Lavés translucides sur papier texturé avec lignes de graphite dessous.",
    "t4.t": "Croquis à l'encre", "t4.d": "Traits d'encre directs et hachures croisées. Marqueur gris pour l'ombre.",
    "gallery.title": "Réalisé avec ATMOS",
    "footer.rights": "© 2026 ATMOS Studio. Tous droits réservés.",
    "footer.terms": "Conditions", "footer.privacy": "Confidentialité", "footer.faq": "FAQ", "footer.support": "Support",
  },
  it: {
    title: "ATMOS Studio 2.0 | Visualizzazione architettonica con IA",
    lang: "Lingua", contact: "Contatti",
    "hero.badge": "Suite di visualizzazione architettonica · 2.0",
    "hero.t1": "Tre spazi.", "hero.t2": "Uno studio.",
    "hero.sub": "Trasforma schizzi e piante in render editoriali: piante, masterplan aerei e prospettive 3D. Geometria rigorosa, materiali reali, quattro tecniche di rappresentazione.",
    "cta.web": "Apri ATMOS Studio Web", "cta.app": "Scarica su App Store",
    "pillars.kicker": "La suite", "pillars.title": "Tre spazi, un solo motore",
    "p1.t": "Piante", "p1.d": "Ortogonalità 2D rigorosa con luce diurna e notturna e materiali PBR. La tua pianta resta la tua pianta.",
    "p2.t": "Masterplan", "p2.d": "Viste aeree zenitali con coperture, giardini e contesto urbano o paesaggistico.",
    "p3.t": "Prospettive 3D", "p3.d": "Viste pedonali, prospetti frontali rigorosi e riprese aeree 3/4, interni ed esterni, con silhouette umane in scala.",
    "tech.kicker": "Rappresentazione", "tech.title": "Quattro tecniche", "tech.sub": "La stessa geometria, disegnata in quattro modi.",
    "t1.t": "Fotorealismo editoriale", "t1.d": "Materiali fisici e luce direzionale. Una fotografia dello spazio finito.",
    "t2.t": "Modello in argilla", "t2.d": "Volumi in gesso monocromatico. Solo forma, ombre di contatto e occlusione ambientale.",
    "t3.t": "Acquerello architettonico", "t3.d": "Velature trasparenti su carta texturizzata con linee di grafite sotto.",
    "t4.t": "Schizzo a inchiostro", "t4.d": "Tratti diretti a inchiostro e tratteggio incrociato. Pennarello grigio per l'ombra.",
    "gallery.title": "Realizzato con ATMOS",
    "footer.rights": "© 2026 ATMOS Studio. Tutti i diritti riservati.",
    "footer.terms": "Termini", "footer.privacy": "Privacy", "footer.faq": "FAQ", "footer.support": "Supporto",
  },
  "pt-BR": {
    title: "ATMOS Studio 2.0 | Visualização arquitetônica com IA",
    lang: "Idioma", contact: "Contato",
    "hero.badge": "Suíte de visualização arquitetônica · 2.0",
    "hero.t1": "Três espaços.", "hero.t2": "Um estúdio.",
    "hero.sub": "Transforme croquis e plantas em renders editoriais: plantas, masterplans aéreos e perspectivas 3D. Geometria rigorosa, materiais reais, quatro técnicas de representação.",
    "cta.web": "Abrir ATMOS Studio Web", "cta.app": "Baixar na App Store",
    "pillars.kicker": "A suíte", "pillars.title": "Três espaços, um motor",
    "p1.t": "Plantas", "p1.d": "Ortogonalidade 2D rigorosa com iluminação diurna e noturna e materiais PBR. Sua planta continua sendo sua planta.",
    "p2.t": "Masterplans", "p2.d": "Vistas aéreas zenitais com coberturas, jardins e contexto urbano ou paisagístico.",
    "p3.t": "Perspectivas 3D", "p3.d": "Vistas de pedestre, elevações frontais rígidas e tomadas aéreas 3/4, internas e externas, com silhuetas humanas em escala.",
    "tech.kicker": "Representação", "tech.title": "Quatro técnicas", "tech.sub": "A mesma geometria, desenhada de quatro maneiras.",
    "t1.t": "Fotorrealismo editorial", "t1.d": "Materiais físicos e luz direcional. Uma fotografia do espaço pronto.",
    "t2.t": "Maquete Clay", "t2.d": "Volumes de gesso monocromático. Apenas forma, sombras de contato e oclusão ambiental.",
    "t3.t": "Aquarela arquitetônica", "t3.d": "Aguadas translúcidas em papel texturizado com linhas de grafite por baixo.",
    "t4.t": "Esboço a tinta", "t4.d": "Traços diretos de tinta e hachuras cruzadas. Marcador cinza para a sombra.",
    "gallery.title": "Feito com ATMOS",
    "footer.rights": "© 2026 ATMOS Studio. Todos os direitos reservados.",
    "footer.terms": "Termos", "footer.privacy": "Privacidade", "footer.faq": "Perguntas frequentes", "footer.support": "Suporte",
  },
  ja: {
    title: "ATMOS Studio 2.0 | AI建築ビジュアライゼーション",
    lang: "言語", contact: "お問い合わせ",
    "hero.badge": "建築ビジュアライゼーションスイート · 2.0",
    "hero.t1": "3つのワークスペース。", "hero.t2": "ひとつのスタジオ。",
    "hero.sub": "スケッチや図面を編集品質のレンダーに。平面図、空中マスタープラン、3Dパースへ。厳密な幾何学、実素材、4つの表現技法。",
    "cta.web": "ATMOS Studio Web を開く", "cta.app": "App Store でダウンロード",
    "pillars.kicker": "スイート", "pillars.title": "3つのワークスペース、1つのエンジン",
    "p1.t": "平面図", "p1.d": "昼夜の照明と PBR 素材を備えた厳密な2D直交性。図面は図面のまま。",
    "p2.t": "マスタープラン", "p2.d": "屋根・庭・都市や景観の文脈を含む真上からの空撮ビュー。",
    "p3.t": "3Dパース", "p3.d": "目線、厳密な正面立面、3/4空撮。内外装に対応し、人物シルエットでスケールを示します。",
    "tech.kicker": "表現", "tech.title": "4つの技法", "tech.sub": "同じ幾何学を、4通りの描き方で。",
    "t1.t": "編集フォトリアル", "t1.d": "物理的な素材と指向性の光。完成した空間の写真。",
    "t2.t": "クレイ模型", "t2.d": "単色の石膏ボリューム。形、接地影、環境遮蔽のみ。",
    "t3.t": "建築水彩", "t3.d": " textured paper の上に透明な淡彩、下層に鉛筆のガイドライン。",
    "t4.t": "インクスケッチ", "t4.d": "直接のインク線とクロスハッチング。影はグレーのマーカー。",
    "gallery.title": "ATMOS で制作",
    "footer.rights": "© 2026 ATMOS Studio. All rights reserved.",
    "footer.terms": "利用規約", "footer.privacy": "プライバシー", "footer.faq": "FAQ", "footer.support": "サポート",
  },
  "zh-Hant": {
    title: "ATMOS Studio 2.0 | AI 建築視覺化",
    lang: "語言", contact: "聯絡我們",
    "hero.badge": "建築視覺化套件 · 2.0",
    "hero.t1": "三個工作區。", "hero.t2": "一個工作室。",
    "hero.sub": "將草圖與平面圖轉為雜誌級算圖：平面圖、空中總體規劃與 3D 透視圖。嚴謹幾何、真實材質、四種表現技法。",
    "cta.web": "開啟 ATMOS Studio Web", "cta.app": "在 App Store 下載",
    "pillars.kicker": "套件", "pillars.title": "三個工作區，一個引擎",
    "p1.t": "平面圖", "p1.d": "嚴格的 2D 正交、日夜照明與 PBR 材質。你的平面圖仍是你的平面圖。",
    "p2.t": "總體規劃", "p2.d": "正上方空拍，包含屋頂、庭園與都市或景觀脈絡。",
    "p3.t": "3D 透視圖", "p3.d": "視平線、嚴格正面立面與 3/4 空拍，室內外皆可，並以人物剪影呈現比例。",
    "tech.kicker": "表現技法", "tech.title": "四種技法", "tech.sub": "同一幾何，四種畫法。",
    "t1.t": "雜誌級寫實", "t1.d": "物理材質與定向光。完成空間的照片。",
    "t2.t": "陶土模型", "t2.d": "單色石膏量體。只有形體、接觸陰影與環境遮蔽。",
    "t3.t": "建築水彩", "t3.d": "在紋理紙上疊透明淡彩，底層保留鉛筆導線。",
    "t4.t": "墨水速寫", "t4.d": "直接的墨水線條與交叉排線。以灰色麥克筆表現陰影。",
    "gallery.title": "以 ATMOS 製作",
    "footer.rights": "© 2026 ATMOS Studio. 版權所有。",
    "footer.terms": "條款", "footer.privacy": "隱私權", "footer.faq": "常見問題", "footer.support": "支援",
  },
  ar: {
    title: "ATMOS Studio 2.0 | تصور معماري بالذكاء الاصطناعي",
    lang: "اللغة", contact: "اتصل بنا",
    "hero.badge": "حزمة التصور المعماري · 2.0",
    "hero.t1": "ثلاث مساحات عمل.", "hero.t2": "استوديو واحد.",
    "hero.sub": "حوّل الرسوم والمخططات إلى صور تحريرية: مخططات ومساقات عامة جوية ومناظر ثلاثية الأبعاد. هندسة صارمة ومواد حقيقية وأربع تقنيات عرض.",
    "cta.web": "افتح ATMOS Studio Web", "cta.app": "حمّل من App Store",
    "pillars.kicker": "الحزمة", "pillars.title": "ثلاث مساحات عمل ومحرك واحد",
    "p1.t": "المخططات", "p1.d": "تعامد ثنائي الأبعاد صارم مع إضاءة نهارية وليلية ومواد PBR. مخططك يبقى مخططك.",
    "p2.t": "المخططات العامة", "p2.d": "مناظر جوية رأسية مع الأسطح والحدائق والسياق العمراني أو الطبيعي.",
    "p3.t": "مناظر ثلاثية الأبعاد", "p3.d": "مناظر على مستوى العين وواجهات أمامية صارمة ولقطات جوية 3/4، داخليًا وخارجيًا، مع ظلال بشرية للمقياس.",
    "tech.kicker": "العرض", "tech.title": "أربع تقنيات", "tech.sub": "الهندسة نفسها بأربع طرق رسم.",
    "t1.t": "واقعية تحريرية", "t1.d": "مواد فيزيائية وضوء موجّه. صورة للمساحة المكتملة.",
    "t2.t": "مجسم طيني", "t2.d": "كتل جبسية أحادية اللون. الشكل وظلال التلامس والإطباق المحيط فقط.",
    "t3.t": "ألوان مائية معمارية", "t3.d": "غسيل لوني شفاف على ورق منقوش مع خطوط غرافيت تحته.",
    "t4.t": "رسم بالحبر", "t4.d": "خطوط حبر مباشرة وتظليل متقاطع. قلم رمادي للظل.",
    "gallery.title": "صُنع بـ ATMOS",
    "footer.rights": "© 2026 ATMOS Studio. جميع الحقوق محفوظة.",
    "footer.terms": "الشروط", "footer.privacy": "الخصوصية", "footer.faq": "الأسئلة الشائعة", "footer.support": "الدعم",
  },
};

Object.entries(EXTRA).forEach(([code, valores]) => {
  DICT[code] = { ...BASE, ...valores };
});

/** Idioma inicial: URL, preferencia guardada, navegador, inglés. */
function idiomaInicial() {
  // ?lang=xx gana: permite compartir un enlace en un idioma concreto.
  const enURL = new URLSearchParams(window.location.search).get("lang");
  if (enURL && DICT[enURL]) return enURL;

  const guardado = localStorage.getItem("atmos-lang");
  if (guardado && DICT[guardado]) return guardado;
  const navegador = (navigator.language || "en").toLowerCase();
  const exacto = LANGS.find((l) => l.code.toLowerCase() === navegador);
  if (exacto) return exacto.code;
  const base = navegador.split("-")[0];
  const parcial = LANGS.find((l) => l.code.toLowerCase() === base);
  return parcial ? parcial.code : "en";
}

/** Aplica un idioma al documento. */
function aplicarIdioma(code) {
  const idioma = DICT[code] ? code : "en";
  const meta = LANGS.find((l) => l.code === idioma) ?? LANGS[0];
  const textos = DICT[idioma];

  document.documentElement.lang = idioma;
  document.documentElement.dir = meta.dir;
  document.title = textos.title;

  document.querySelectorAll("[data-i18n]").forEach((nodo) => {
    const clave = nodo.getAttribute("data-i18n");
    const valor = textos[clave];
    if (valor) nodo.textContent = valor;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((nodo) => {
    const clave = nodo.getAttribute("data-i18n-aria");
    const valor = textos[clave];
    if (valor) nodo.setAttribute("aria-label", valor);
  });

  const selector = document.getElementById("lang-select");
  if (selector) selector.value = idioma;

  localStorage.setItem("atmos-lang", idioma);
}

window.AtmosI18n = { LANGS, DICT, aplicarIdioma, idiomaInicial };
