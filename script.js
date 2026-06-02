const GHS=[
  {code:"GHS01",name:"Explosivo",e:"https://labcollector.com/wp-content/uploads/GHS01_explos-150x150.png",ej:["Peróxidos orgánicos concentrados","Nitroglicerina","Acetiluro de plata","Perclorato de amonio"],fr:["H200 Explosivo inestable","H201 Peligro de explosión en masa","H202 Grave peligro de proyección"],med:["Pantalla facial completa","Ropa ignífuga","Zona antichispa obligatoria","Armario anti-deflagrante"]},
  {code:"GHS02",name:"Inflamable",e:"https://labcollector.com/wp-content/uploads/GHS02_flamme.png",desc:"Gases, líquidos y sólidos inflamables; sustancias pirofóricas.",ej:["Etanol (C₂H₅OH)","Acetona","Éter etílico","Hexano","Metanol"],fr:["H224 Vapores extremadamente inflamables","H225 Muy inflamable","H226 Inflamable"],med:["Usar solo en campana de extracción","Bata de algodón, no sintética","Alejar de fuentes de ignición","Armario ignífugo"]},
  {code:"GHS03",name:"Comburente",e:"https://labcollector.com/wp-content/uploads/GHS03_rondflam-150x150.png",desc:"Oxidantes que pueden provocar o intensificar un incendio.",ej:["KMnO₄","H₂O₂ >30%","HNO₃ concentrado","K₂Cr₂O₇"],fr:["H270 Puede provocar incendio","H271 Puede provocar explosión","H272 Puede agravar incendio"],med:["Guantes resistentes a oxidantes","Separado de inflamables","No contaminar con materia orgánica","Pantalla facial"]},
  {code:"GHS04",name:"Gases comprimidos",e:"https://labcollector.com/wp-content/uploads/GHS04_bottle-150x150.png",desc:"Gases comprimidos, licuados o refrigerados almacenados en cilindros.",ej:["CO₂","N₂ nitrógeno","O₂ oxígeno","NH₃","Cl₂"],fr:["H280 Gas a presión; peligro si se calienta","H281 Gas refrigerado; quemaduras criogénicas"],med:["Asegurar cilindros verticalmente","No exponer a más de 52°C","Verificar válvulas antes de uso","Zona bien ventilada"]},
  {code:"GHS05",name:"Corrosivo",e:"https://labcollector.com/wp-content/uploads/GHS05_acid_red-150x150.png",desc:"Destruye metales, tejidos cutáneos u oculares.",ej:["H₂SO₄ concentrado","NaOH","HCl concentrado","HNO₃"],fr:["H290 Corrosivo para metales","H314 Quemaduras graves en piel","H318 Lesiones oculares graves"],med:["Pantalla facial OBLIGATORIA","Guantes neopreno o PVC","Delantal de PVC","Ácido SIEMPRE al agua"]},
  {code:"GHS06",name:"Tóxico agudo",e:"https://labcollector.com/wp-content/uploads/GHS06_skull-150x150.png",desc:"Fatal o tóxico en dosis pequeñas por vía oral, dérmica o inhalatoria.",ej:["KCN cianuro","HgCl₂","Metanol","Formaldehído","Benceno"],fr:["H300 Mortal por ingestión","H310 Mortal por contacto dérmico","H330 Mortal por inhalación"],med:["Campana de extracción obligatoria","Guantes dobles","Mascarilla con filtro específico","Registro de uso obligatorio"]},
  {code:"GHS07",name:"Irritante/Nocivo",e:"https://labcollector.com/wp-content/uploads/GHS07_exclam-150x150.png",desc:"Irritante para piel, ojos o vías respiratorias. Sensibilizantes.",ej:["Acetaldehído","CaCl₂","NH₃ diluido","CH₃COOH diluido","H₂O₂ 3%"],fr:["H302 Nocivo por ingestión","H315 Irrita la piel","H319 Irrita los ojos","H335 Irrita vías respiratorias"],med:["Guantes de nitrilo","Gafas de seguridad","Buena ventilación","Lavar con agua si hay contacto"]},
  {code:"GHS08",name:"Peligro para la salud",e:"https://labcollector.com/wp-content/uploads/GHS08_silhouete-150x150.png",desc:"Carcinógenos, mutágenos, tóxicos para la reproducción o para órganos.",ej:["Benceno carcinógeno","Formaldehído","CH₂Cl₂","Compuestos de plomo","Cr(VI)"],fr:["H340 Puede provocar defectos genéticos","H350 Puede provocar cáncer","H360 Perjudica la fertilidad"],med:["Minimizar exposición","Mascarilla filtro específico","Vigilancia médica periódica","Inventario y registro"]},
  {code:"GHS09",name:"Peligro ambiental",e:"https://labcollector.com/wp-content/uploads/GHS09_aq-pollut-150x150.png",desc:"Tóxico para organismos acuáticos o con efectos duraderos en el ambiente.",ej:["K₂Cr₂O₇","HgCl₂","PCBs","Cloroformo","Pesticidas organoclorados"],fr:["H400 Muy tóxico para organismos acuáticos","H410 Efectos duraderos","H411 Tóxico acuático"],med:["NUNCA verter por el desagüe","Gestionar como RESPEL","Recipiente hermético","Empresa gestora certificada"]},
];

const TM={flam:{l:"Inflamable",c:"t-flam"},corr:{l:"Corrosivo",c:"t-corr"},tox:{l:"Tóxico",c:"t-tox"},irrit:{l:"Irritante",c:"t-irrit"},ox:{l:"Oxidante",c:"t-ox"},env:{l:"Ambiental",c:"t-env"},expl:{l:"Explosivo",c:"t-expl"},gas:{l:"Gas presión",c:"t-gas"}};

const SUST=[
  {f:"H₂SO₄",n:"Ácido Sulfúrico",t:["corr","tox"],p:"Corrosivo severo. Reacciona violentamente con agua liberando calor extremo. Puede carbonizar tejidos orgánicos.",nt:"Bicarbonato de sodio (NaHCO₃) o cal apagada",al:"Armario corrosivos, separado de bases y oxidantes. Bandeja de contención.",re:"RESPEL – contenedor ácidos. Neutralizar pH 6-9 antes de disponer.",em:"Lavar con agua 20 min. NO neutralizar en piel. Atención médica inmediata."},
  {f:"NaOH",n:"Hidróxido de Sodio",t:["corr"],p:"Base fuerte. Quemaduras químicas severas. Reacciona con aluminio generando H₂. Muy higroscópico.",nt:"Ácido acético diluido o HCl diluido",al:"Armario corrosivos separado de ácidos. Recipiente hermético.",re:"RESPEL – contenedor bases. Neutralizar antes de disponer.",em:"Lavar 20 min agua corriente. Atención médica."},
  {f:"HCl",n:"Ácido Clorhídrico",t:["corr","irrit"],p:"Gases corrosivos e irritantes. Corrosivo para metales. Con oxidantes genera Cl₂ tóxico.",nt:"NaOH diluido o NaHCO₃",al:"Armario ventilado corrosivos. Alejado de bases y oxidantes.",re:"RESPEL – ácidos halogenados.",em:"Evacuar área. Lavar piel 20 min. Inhalación: aire fresco, médico."},
  {f:"HNO₃",n:"Ácido Nítrico",t:["corr","ox","tox"],p:"Corrosivo y oxidante fuerte. Libera vapores tóxicos NO₂ (humos naranja). Reacciona violentamente con metales.",nt:"NaHCO₃ muy diluido",al:"Ventilado. Separado de bases, inflamables y orgánicos.",re:"RESPEL – ácidos oxidantes.",em:"Siempre en campana. Lavar 20 min. Vapores: evacuar urgente."},
  {f:"CH₃COOH",n:"Ácido Acético",t:["flam","corr","irrit"],p:"Inflamable y corrosivo. Vapores irritantes. Glacial puede causar quemaduras severas.",nt:"NaHCO₃ o NaOH diluido",al:"Armario inflamables/corrosivos ventilado.",re:"RESPEL si concentrado. Diluido puede neutralizarse.",em:"Lavar con agua. Vapores: aire fresco. Ventilación urgente del área."},
  {f:"H₃PO₄",n:"Ácido Fosfórico",t:["corr","irrit"],p:"Ácido moderado. Corrosivo para tejidos. Soluciones concentradas pueden causar quemaduras.",nt:"NaHCO₃ o NaOH diluido",al:"Armario corrosivos. Recipiente bien cerrado.",re:"RESPEL si concentrado. Diluido: neutralizar y disponer.",em:"Lavar con agua abundante. Ojos: lavaojos 15 min. Médico si hay síntomas."},
  {f:"HF",n:"Ácido Fluorhídrico",t:["corr","tox"],p:"EXTREMADAMENTE PELIGROSO. Penetra tejidos sin dolor inmediato. Puede causar muerte por hipocalcemia sistémica.",nt:"Gluconato de calcio (gel) en piel. ANTÍDOTO OBLIGATORIO disponible.",al:"Armario separado, ventilado. Acceso restringido. Nunca solo.",re:"RESPEL – residuos especiales. Neutralizar con Ca(OH)₂.",em:"Aplicar gel gluconato calcio 10% inmediatamente. Llamar 123. Emergencia médica."},
  {f:"NaOH",n:"Hidróxido de Sodio",t:["corr"],p:"Base fuerte. Quemaduras químicas severas. Reacciona con aluminio generando H₂. Muy higroscópico.",nt:"Ácido acético diluido o HCl diluido",al:"Armario corrosivos separado de ácidos. Recipiente hermético.",re:"RESPEL – bases. Neutralizar pH 6-9 antes de disponer.",em:"Lavar con agua 20 min. Atención médica. No neutralizar en piel directamente."},
  {f:"NH₃",n:"Amoníaco",t:["irrit","tox","gas"],p:"Gas tóxico e irritante. Vapores irritan ojos y vías respiratorias. Umbral olfatorio muy bajo.",nt:"Ácido diluido (acético o clorhídrico)",al:"Armario ventilado. Alejado de ácidos y cloro.",re:"RESPEL – bases nitrogenadas. Neutralizar antes de disponer.",em:"Evacuar. Aire fresco inmediato. Lavar ojos y piel. Médico si hay síntomas."},
  {f:"Cl₂",n:"Cloro gaseoso",t:["tox","gas","corr"],p:"Gas tóxico amarillo-verdoso. Irritante severo de vías respiratorias. Concentraciones altas son letales.",nt:"Tiosulfato de sodio en piel. Aire fresco.",al:"Cilindro presurizado en zona ventilada. Solo personal entrenado.",re:"RESPEL – gas tóxico. Empresa especializada.",em:"Evacuar inmediatamente. Llamar 123. Zona de exclusión. Equipo autónomo de respiración."},
  {f:"C₂H₅OH",n:"Etanol",t:["flam"],p:"Altamente inflamable. Punto de inflamacion: 12-14°C (100%), 17°C (96%), 16-21°C (70%). Vapor más denso que el aire. Riesgo de acumulación.",nt:"N/A – controlar fuentes de ignición",al:"Armario ignífugo. Alejado de oxidantes y calor.",re:"RESPEL si contaminado. Si puro puede recuperarse por destilación.",em:"Extintor CO₂ o polvo ABC. Ventilar. Retirar fuentes de ignición."},
  {f:"CH₃OH",n:"Metanol",t:["flam","tox"],p:"Altamente inflamable y tóxico. 10 mL pueden causar ceguera. 30 mL pueden ser letales. Absorción cutánea.",nt:"N/A – controlar fuentes de ignición",al:"Armario ignífugo. Etiquetado claramente para evitar confusión con etanol.",re:"RESPEL – solvente tóxico. Incineración controlada.",em:"Evacuar. Si hay ingestión: médico urgente. Lavar piel 20 min. Antídoto: etanol o fomepizol."},
  {f:"C₃H₆O",n:"Acetona",t:["flam","irrit"],p:"Muy inflamable. Punto de inflamación -18°C. Vapores narcóticos en concentraciones altas.",nt:"N/A – controlar fuentes de ignición",al:"Armario ignífugo. Temperatura ambiente. Alejado de oxidantes.",re:"RESPEL – solvente orgánico. Recuperar si es posible.",em:"Extintor CO₂. Ventilar. Evacuación si hay concentración alta de vapores."},
  {f:"C₆H₆",n:"Benceno",t:["flam","tox","env"],p:"CARCINÓGENO confirmado (leucemia). Muy inflamable. Absorción cutánea rápida. Minimizar exposición.",nt:"N/A",al:"Armario ignífugo. Acceso restringido. Inventario obligatorio.",re:"RESPEL – carcinógeno. Incineración controlada. Registro obligatorio.",em:"Evacuar. Usar carbón activado en mascarilla. Lavar piel. Médico urgente."},
  {f:"CHCl₃",n:"Cloroformo",t:["tox","env"],p:"Tóxico hepático y renal. Posible carcinógeno. Narcótico en altas concentraciones. Absorción cutánea.",nt:"N/A",al:"Armario ventilado. Frasco ámbar. Alejado de luz (se forma fosgeno).",re:"RESPEL – halogenados. Incineración controlada.",em:"Aire fresco. Lavar piel y ojos. Médico si hay síntomas de narcosis."},
  {f:"CH₂Cl₂",n:"Diclorometano",t:["tox","env"],p:"Tóxico. Se metaboliza a CO. Posible carcinógeno. Narcótico. Absorción cutánea importante.",nt:"N/A",al:"Armario ventilado. Frasco ámbar bien cerrado.",re:"RESPEL – halogenados clorados.",em:"Aire fresco. Oxígeno si hay síntomas. Lavar piel 20 min. Médico."},
  {f:"C₆H₁₄",n:"Hexano",t:["flam","tox","env"],p:"Muy inflamable. Punto de inflamación -22°C. Neurotóxico por exposición crónica (neuropatía periférica).",nt:"N/A – controlar ignición",al:"Armario ignífugo. Zona fría. Alejado de cualquier fuente de ignición.",re:"RESPEL – solvente inflamable. Recuperar o incineración.",em:"Extintor CO₂. Evacuar vapores. Lavar piel. Ventilación forzada."},
  {f:"KMnO₄",n:"Permanganato de Potasio",t:["ox","irrit","env"],p:"Oxidante fuerte. Puede iniciar incendios con materia orgánica. Mancha piel permanentemente.",nt:"Ácido ascórbico para manchas en piel",al:"Separado de toda materia orgánica e inflamables.",re:"RESPEL – oxidantes. Reducir con Na₂SO₃ antes de disponer.",em:"Lavar abundantemente. Ingestión: NO inducir vómito. Médico."},
  {f:"K₂Cr₂O₇",n:"Dicromato de Potasio",t:["ox","tox","env"],p:"Oxidante. Cr(VI) carcinógeno confirmado. Muy tóxico acuático. Sensibilizante dermal.",nt:"Ácido ascórbico para reducir Cr(VI) a Cr(III)",al:"Separado de inflamables y reductores. Armario cerrado con llave.",re:"RESPEL – metales pesados / carcinógeno. Empresa certificada.",em:"Lavar piel 20 min. Consultar FDS específica. Médico urgente si hay ingestión."},
  {f:"H₂O₂",n:"Peróxido de Hidrógeno",t:["ox","corr","irrit"],p:">30%: oxidante fuerte y corrosivo. Se descompone con luz y calor liberando O₂ a presión.",nt:"Agua abundante",al:"Frasco ámbar refrigerado. Alejado de catalizadores (Mn, Fe, Cu).",re:"Diluir mucho con agua. Verificar concentración antes de disponer.",em:"Lavar con agua. Concentrado: lavar 20 min. Ingestión: médico."},
  {f:"AgNO₃",n:"Nitrato de Plata",t:["ox","corr","env"],p:"Oxidante. Corrosivo. Muy tóxico acuático. Mancha piel de negro permanentemente.",nt:"NaCl para manchas en piel (forma AgCl blanco)",al:"Frasco ámbar. Alejado de luz, orgánicos y reductores.",re:"RESPEL – recuperar plata. NUNCA al desagüe.",em:"Piel: lavar con agua abundante, las manchas negras desaparecen solas en días. Ojos: lavar con agua mínimo 15 min y acudir al médico inmediatamente, puede causar daño ocular severo. Ingestión: médico urgente."},
  {f:"CuSO₄",n:"Sulfato de Cobre",t:["irrit","env","tox"],p:"Irritante. Muy tóxico para organismos acuáticos. En polvo irrita vías respiratorias.",nt:"Agua abundante",al:"Almacén general, recipiente bien cerrado.",re:"RESPEL – metales pesados. NUNCA al desagüe.",em:"Lavar con agua. Polvo: aire fresco. Médico si hay síntomas."},
  {f:"Pb(NO₃)₂",n:"Nitrato de Plomo",t:["tox","ox","env"],p:"Muy tóxico. Plomo: neurotóxico y nefrotóxico acumulativo. Peligroso para niños. Carcinógeno posible.",nt:"N/A",al:"Armario cerrado con llave. Acceso restringido. Inventario obligatorio.",re:"RESPEL – metales pesados / plomo. Empresa certificada obligatoria.",em:"Lavar piel 20 min. Ingestión: médico urgente (quelación). Llevar FDS al médico."},
  {f:"Hg",n:"Mercurio metálico",t:["tox","env"],p:"Altamente tóxico. Neurotóxico y nefrotóxico. El Hg elemental forma vapor a temperatura ambiente.",nt:"N/A – no hay antídoto efectivo. BAL en casos de intoxicación.",al:"Armario cerrado con llave. Inventario estricto. Acceso muy restringido.",re:"RESPEL – mercurio. Empresa certificada. Regulación especial.",em:"Evacuar. Ventilación forzada. Médico urgente. Toxicología: 018000."},
  {f:"Na₂CO₃",n:"Carbonato de Sodio",t:["irrit"],p:"Alcalino. Irritante para ojos y mucosas. Polvo puede irritar vías respiratorias.",nt:"Ácido diluido (acético)",al:"Almacén general seco. Recipiente hermético para evitar humedad.",re:"Ordinario si diluido y en pequeñas cantidades. RESPEL si concentrado.",em:"Lavar con agua. Bajo riesgo en condiciones normales de laboratorio."},
  {f:"NaCl",n:"Cloruro de Sodio",t:["irrit"],p:"Sal común. Bajo riesgo. Puede irritar mucosas en polvo. No confundir con sales tóxicas.",nt:"Agua abundante",al:"Almacén general. Recipiente cerrado.",re:"Ordinario. Se puede disponer como residuo no peligroso.",em:"Lavar con agua. Prácticamente no tóxico en dosis normales de laboratorio."},
  {f:"CaCO₃",n:"Carbonato de Calcio",t:["irrit"],p:"Bajo riesgo. En polvo puede irritar vías respiratorias. Puede reaccionar con ácidos liberando CO₂.",nt:"N/A",al:"Almacén general. Lugar seco.",re:"Residuo ordinario. No peligroso.",em:"Lavar con agua. Bajo riesgo. Polvo: aire fresco."},
  {f:"C₆H₁₂O₆",n:"Glucosa",t:["irrit"],p:"Bajo riesgo. Puede favorecer crecimiento microbiano si se contamina. Polvo combustible en cantidad.",nt:"N/A",al:"Almacén general. Lugar seco y fresco.",re:"Residuo ordinario o biológico si hubo contacto con microorganismos.",em:"Lavar con agua. Sin riesgo significativo en condiciones normales."},
  {f:"C₁₂H₂₂O₁₁",n:"Sacarosa (Azúcar)",t:["irrit"],p:"Muy bajo riesgo. Combustible en polvo concentrado. Puede favorecer contaminación microbiológica.",nt:"N/A",al:"Almacén general. Lugar seco.",re:"Residuo ordinario.",em:"Sin riesgo significativo. Lavar con agua si hay contacto."},
  {f:"I₂",n:"Yodo",t:["corr","tox","env"],p:"Corrosivo. Vapores irritantes y tóxicos. Tiñe tejidos de marrón-negro. Oxidante moderado.",nt:"Tiosulfato de sodio para manchas en piel",al:"Frasco bien cerrado en lugar fresco. Alejado de materiales oxidables.",re:"RESPEL – halógeno. Empresa certificada.",em:"Lavar con agua y tiosulfato. Vapores: aire fresco. Médico si hay ingestión."},
  {f:"KOH",n:"Hidróxido de Potasio",t:["corr"],p:"Base fuerte equivalente al NaOH. Higroscópico. Muy corrosivo para tejidos y metales.",nt:"Ácido acético diluido o HCl diluido",al:"Separado de ácidos. Recipiente hermético. Armario corrosivos.",re:"RESPEL – bases. Neutralizar pH 6-9 antes de disponer.",em:"Lavar con agua 20 min. Atención médica. No neutralizar en piel directamente."},
];

const EPP_ITEMS=[
  {id:"bata",e:"🥼",l:"Bata algodón",fo:"bata"},
  {id:"gafas",e:"🥽",l:"Gafas seguridad",fo:"gafas"},
  {id:"g-nitrilo",e:"🧤",l:"Guantes nitrilo",fo:"guantes"},
  {id:"g-neopreno",e:"🫳",l:"Guantes neopreno",fo:"guantes"},
  {id:"zapatos",e:"👟",l:"Zapato cerrado",fo:"shoes"},
  {id:"mascarilla",e:"😷",l:"Mascarilla N95",fo:"mask"},
  {id:"pantalla",e:"🛡️",l:"Pantalla facial",fo:"shield"},
  {id:"delantal",e:"🦺",l:"Delantal PVC",fo:null},
  {id:"casco",e:"⛑️",l:"Casco",fo:null},
];

const SC=[
  {id:"s1",n:"Ácidos fuertes",d:"Dilución de H₂SO₄ o HCl concentrados. Alto riesgo de salpicadura corrosiva.",r:["bata","gafas","g-neopreno","zapatos","pantalla"],w:["casco","mascarilla","g-nitrilo","delantal"]},
  {id:"s2",n:"Destilación solventes",d:"Destilación de etanol o acetona. Vapores inflamables. Uso de manta calefactora.",r:["bata","gafas","g-nitrilo","zapatos"],w:["casco","pantalla","mascarilla","delantal"]},
  {id:"s3",n:"Tóxicos volátiles",d:"Trabajo con NH₃, formaldehído o HNO₃ en campana. Riesgo por inhalación.",r:["bata","gafas","g-neopreno","zapatos","mascarilla"],w:["casco","pantalla","g-nitrilo"]},
  {id:"s4",n:"NaOH + calor",d:"Síntesis con NaOH concentrado y calentamiento. Alto riesgo de salpicadura cáustica caliente.",r:["bata","gafas","g-neopreno","zapatos","pantalla"],w:["casco","mascarilla","g-nitrilo"]},
  {id:"s5",n:"Sustancias biológicas",d:"Manejo de cultivos microbiológicos o muestras biológicas en el laboratorio.",r:["bata","gafas","g-nitrilo","zapatos","mascarilla"],w:["casco","pantalla","delantal"]},
];

const RES=[
  {id:"r1",e:"🧪",l:"H₂SO₄ diluido residual",b:"red"},
  {id:"r2",e:"🫙",l:"Solución NaOH usada",b:"red"},
  {id:"r3",e:"💉",l:"Jeringa sin aguja",b:"blue"},
  {id:"r4",e:"🔬",l:"Lámina de vidrio rota",b:"blue"},
  {id:"r5",e:"📄",l:"Papel de filtro limpio",b:"green"},
  {id:"r6",e:"🧤",l:"Guantes nitrilo sin contaminar",b:"green"},
  {id:"r7",e:"⚗️",l:"KMnO₄ residual",b:"red"},
  {id:"r8",e:"📦",l:"Caja de cartón vacía",b:"green"},
  {id:"r9",e:"🧫",l:"Cultivo bacteriano inactivado",b:"yellow"},
  {id:"r10",e:"🩺",l:"Guante con muestra biológica",b:"yellow"},
  {id:"r11",e:"🫙",l:"Frasco vacío de HCl",b:"red"},
  {id:"r12",e:"✂️",l:"Bisturí usado",b:"blue"},
];

const BINS=[
  {id:"red",color:"#ef4444",l:"RESPEL / Peligroso"},
  {id:"yellow",color:"#eab308",l:"Biológico / Infeccioso"},
  {id:"green",color:"#22c55e",l:"Ordinario / Reciclable"},
  {id:"blue",color:"#3b82f6",l:"Cortopunzantes"},
];

const ZONAS=[
  {n:"Área de trabajo y mesones",e:"🔬",c:"#00e5ff",r:["Superficies resistentes a ácidos, bases y calor (resina epoxi o cerámica)","Espacio mínimo 1.5m entre mesones para circulación","Sin cables ni objetos sueltos en el piso","Iluminación mínima 500 lux en área de trabajo","Toma de gas con válvula de corte rápida accesible"]},
  {n:"Campana de extracción",e:"🌀",c:"#a78bfa",r:["Velocidad de flujo mínima: 0.5 m/s en la abertura","Ventana de trabajo a máximo 40 cm durante el uso","Motor fuera del área de trabajo","Alarma de fallo de ventilación audible y visible","Inspección y certificación semestral obligatoria"]},
  {n:"Lavaojos y ducha de emergencia",e:"👁️",c:"#22c55e",r:["Lavaojos a máximo 10 segundos de cualquier puesto de trabajo","Agua templada (15-38°C) y flujo continuo mínimo 15 min","Ducha de emergencia a máximo 10 segundos del área","Sin obstáculos en el camino al lavaojos","Purga semanal para evitar contaminación microbiológica"]},
  {n:"Almacenamiento de reactivos",e:"🗄️",c:"#ef4444",r:["Armario separado para ácidos, bases, inflamables y oxidantes","Bandejas de contención con capacidad del 110% del recipiente mayor","Temperatura controlada: máx 25°C para la mayoría de reactivos","Inventario actualizado con FDS de cada sustancia","Acceso restringido solo a personal autorizado"]},
  {n:"Zona de residuos",e:"♻️",c:"#eab308",r:["Contenedores identificados por color y símbolo según normativa","Lejos de fuentes de calor y de la zona de trabajo activa","Registros de generación y disposición de residuos","Acuerdo vigente con empresa gestora RESPEL certificada","Tiempo máximo almacenamiento: 12 meses para RESPEL"]},
  {n:"Vías de evacuación",e:"🚪",c:"#fb923c",r:["Mínimo dos salidas en laboratorios mayores a 40m²","Puertas que abren hacia afuera, sin llave durante el uso","Señalización fotoluminiscente en todas las salidas","Ancho mínimo 90 cm libre de obstáculos","Punto de encuentro definido y comunicado"]},
  {n:"Instalaciones eléctricas",e:"⚡",c:"#ffd600",r:["Tomacorrientes a prueba de humedad (IP44 mínimo)","Diferencial de 30mA en todos los circuitos","Puesta a tierra verificada con certificado vigente","Sin extensiones eléctricas permanentes","Tablero de breakers identificado y accesible"]},
];

const NORMAS=[
  {num:"01",t:"Inducción obligatoria antes del primer acceso",d:"Ninguna persona puede operar en el laboratorio sin completar y firmar la inducción de seguridad.",b:"c"},
  {num:"02",t:"EPP básico en todo momento",d:"Bata de algodón manga larga, gafas y zapato cerrado son obligatorios desde que se entra, incluso solo para observar.",b:"c"},
  {num:"03",t:"Leer la FDS antes de manipular cualquier sustancia",d:"La Ficha de Datos de Seguridad debe consultarse antes del primer uso de cada sustancia. Debe estar disponible en el laboratorio.",b:"c"},
  {num:"04",t:"Prohibido trabajar solo",d:"Mínimo dos personas presentes o un docente supervisando directamente en todo momento.",b:"o"},
  {num:"05",t:"Prohibido comer, beber y fumar",d:"Terminantemente prohibido introducir o consumir alimentos, bebidas o cigarrillos en el laboratorio o zonas adyacentes.",b:"o"},
  {num:"06",t:"Cabello recogido y sin joyas",d:"Cabello completamente recogido. Sin aretes colgantes, collares, pulseras, anillos ni reloj durante las prácticas.",b:"o"},
  {num:"07",t:"Identificar y etiquetar todo",d:"Todos los reactivos y muestras deben etiquetarse con: nombre, fórmula, concentración, fecha y responsable.",b:"n"},
  {num:"08",t:"Orden y limpieza permanente",d:"Cada usuario mantiene limpia su área. Los derrames se limpian inmediatamente. Al finalizar, todo en orden.",b:"o"},
  {num:"09",t:"Cero conductas de riesgo",d:"Prohibidos los juegos, bromas, carreras y el uso de celular mientras se manipulan sustancias.",b:"c"},
  {num:"10",t:"Reportar todo incidente",d:"Todo accidente o incidente, incluso sin lesiones, debe reportarse inmediatamente y documentarse.",b:"c"},
  {num:"11",t:"Nunca pipetear con la boca",d:"Absolutamente prohibido pipetear con la boca. Usar siempre propipetas, pipetas automáticas o peras.",b:"c"},
  {num:"12",t:"Verificar compatibilidad antes de mezclar",d:"Consultar FDS para confirmar que dos sustancias no generan reacciones peligrosas antes de mezclarlas.",b:"c"},
];

const SENALES=[
  {title:"🔴 Prohibición",cls:"sc-p",col:"#ef4444",items:["Prohibido fumar","Prohibido llama abierta","Prohibido el paso a no autorizados","Prohibido comer y beber","Prohibido pipetear con la boca","Prohibido verter reactivos al desagüe","Prohibido trabajar sin EPP"]},
  {title:"🟡 Advertencia",cls:"sc-a",col:"#eab308",items:["Peligro sustancias inflamables","Peligro sustancias corrosivas","Peligro sustancias tóxicas","Peligro gases a presión","Peligro alto voltaje","Superficie caliente","Peligro riesgo biológico"]},
  {title:"🔵 Obligación",cls:"sc-o",col:"#3b82f6",items:["Uso obligatorio de bata","Uso obligatorio de gafas","Uso obligatorio de guantes","Uso obligatorio de mascarilla","Lavado de manos obligatorio al salir","Uso obligatorio de zapato de seguridad","Cabello recogido obligatorio"]},
  {title:"🟢 Condición segura",cls:"sc-e",col:"#22c55e",items:["Salida de emergencia","Punto de encuentro","Extintor de incendios","Lavaojos de emergencia","Ducha de emergencia","Botiquín de primeros auxilios","Dirección de evacuación"]},
];

const EMERG=[
  {e:"🔥",t:"Incendio en el laboratorio",s:"Protocolo R.A.C.E.",c:"#ef4444",p:[
    {n:"R",x:"<strong>Rescatar</strong> — Ayuda a personas en peligro cercanas si puedes hacerlo sin riesgo propio."},
    {n:"A",x:"<strong>Alarmar</strong> — Activa la alarma de incendios. Llama al 123 y al 119 (Bomberos). Avisa en voz alta."},
    {n:"C",x:"<strong>Contener</strong> — Cierra puertas y ventanas para limitar la propagación. NO uses ascensores."},
    {n:"E",x:"<strong>Evacuar</strong> — Sigue la ruta de evacuación señalizada. Reúnete en el punto de encuentro."},
    {n:"⚠",x:"<strong>Extintor</strong> — Solo si el fuego es pequeño y tienes vía de escape. CO₂ o polvo ABC. NUNCA agua en solventes."},
  ]},
  {e:"🧪",t:"Derrame de sustancia química",s:"Contención y limpieza",c:"#eab308",p:[
    {n:"1",x:"<strong>Alertar</strong> — Avisa al docente y a todos en el área inmediatamente."},
    {n:"2",x:"<strong>Evacuar el área</strong> — Despeja a personas sin EPP. Ventila el espacio."},
    {n:"3",x:"<strong>Consultar FDS</strong> — Verifica el procedimiento específico de la sustancia derramada."},
    {n:"4",x:"<strong>Ponerse EPP</strong> — Bata, guantes neopreno, gafas, pantalla facial antes de limpiar."},
    {n:"5",x:"<strong>Contener</strong> — Rodear con material absorbente (vermiculita, arena). Nunca papel para ácidos."},
    {n:"6",x:"<strong>Disponer</strong> — Recoger en contenedor RESPEL marcado. Lavar el área con agua abundante."},
  ]},
  {e:"💦",t:"Contacto con sustancia en piel u ojos",s:"Lavado de emergencia",c:"#3b82f6",p:[
    {n:"1",x:"<strong>Actuar inmediatamente</strong> — Cada segundo cuenta. No buscar antídoto primero."},
    {n:"2",x:"<strong>Ojos</strong> — Lavaojos de emergencia. Lavar con agua corriente mínimo <strong>15-20 minutos</strong>, párpados abiertos. Luego médico."},
    {n:"3",x:"<strong>Piel</strong> — Lavar con agua corriente abundante mínimo <strong>15-20 minutos</strong>. Retirar ropa y joyas contaminadas."},
    {n:"4",x:"<strong>No neutralizar en piel</strong> — Solo agua abundante. Nunca aplicar ácido o base directamente."},
    {n:"5",x:"<strong>Atención médica</strong> — Siempre, aunque el dolor ceda. Llevar la FDS de la sustancia al médico."},
  ]},
  {e:"😮‍💨",t:"Inhalación de vapores tóxicos",s:"Exposición por vía respiratoria",c:"#a78bfa",p:[
    {n:"1",x:"<strong>Salir del área</strong> — Alejar a la persona al aire fresco inmediatamente."},
    {n:"2",x:"<strong>Posición</strong> — Sentar o acostar cómodamente. Inconsciente: posición lateral de seguridad."},
    {n:"3",x:"<strong>Llamar al 123</strong> — Describir la sustancia. Toxicología: <strong>018000</strong> (gratuito, 24h)."},
    {n:"4",x:"<strong>No dar nada por la boca</strong> — Sin agua, leche ni antídotos caseros sin indicación médica."},
    {n:"5",x:"<strong>Ventilar el área</strong> — Con EPP completo, otras personas ventilan mientras se atiende a la víctima."},
  ]},
  {e:"🩹",t:"Herida, corte o quemadura",s:"Primeros auxilios básicos",c:"#22c55e",p:[
    {n:"1",x:"<strong>Corte/herida</strong> — Lavar con agua limpia. Presión con gasa estéril. Si hay vidrio incrustado: NO remover. Urgencias."},
    {n:"2",x:"<strong>Quemadura térmica</strong> — Enfriar con agua fría (no helada) 10-20 min. No aplicar cremas, hielo ni pasta de dientes."},
    {n:"3",x:"<strong>Quemadura química</strong> — Agua abundante 20 min. No neutralizar en piel. Médico si es extensa."},
    {n:"4",x:"<strong>Cortopunzantes</strong> — Siempre al guardián rígido. Reportar inmediatamente. Nunca en caneca ordinaria."},
  ]},
];

const QUIZ=[
   {q:"Al preparar H₂SO₄ diluido, ¿cuál es el procedimiento correcto?",c:"Se prepara 1L de H₂SO₄ 1M a partir del concentrado.",o:["Agregar ácido al agua lentamente","Mezclar en partes iguales","Agregar agua al ácido lentamente","El orden no importa con agua fría"],a:0,f:"Siempre ÁCIDO al AGUA (regla A→A). Al revés, la reacción exotérmica vaporiza el agua y proyecta ácido con violencia."},
  {q:"¿Qué pictograma GHS indica peligro para organismos acuáticos?",c:"Encontraste un frasco con solo un símbolo visible.",o:["GHS06 – Calavera ☠️","GHS07 – Exclamación ⚠️","GHS05 – Corrosión 🔬","GHS09 – Árbol y pez muertos 🌿"],a:3,f:"GHS09 (árbol y pez muertos) = peligro medioambiental acuático. GHS06 = toxicidad aguda para humanos."},
  {q:"Se derrama HCl concentrado. ¿Cuál es la acción INMEDIATA?",c:"Derrame de 50 mL. Hay personas sin EPP completo.",o:["Limpiar con un trapo","Neutralizar con NaOH directamente","Alertar, evacuar y notificar al docente","Abrir ventanas y continuar trabajando"],a:2,f:"Primero la seguridad: alertar y evacuar. Luego notificar, ventilar y usar EPP completo para limpiar."},
  {q:"¿En qué contenedor van las láminas de vidrio roto?",c:"Se quebró un erlenmeyer durante la práctica.",o:["Caneca roja RESPEL","Guardián rígido azul para cortopunzantes","Bolsa roja biológica","Caneca ordinaria verde"],a:1,f:"El vidrio roto es cortopunzante. Siempre al guardián rígido. En caneca ordinaria puede herir al personal de aseo."},
  {q:"¿Cuál es el EPP MÍNIMO obligatorio para entrar al laboratorio?",c:"Práctica de observación, sin manipulación directa.",o:["Bata + gafas + zapato cerrado","Solo gafas de seguridad","Bata + pantalla + guantes neopreno","Bata + gafas + guantes + mascarilla"],a:0,f:"EPP mínimo: bata manga larga de algodón, gafas con protección lateral y zapato cerrado antideslizante."},
  {q:"Un estudiante siente ardor en ojos tras NH₃ diluido. ¿Qué hacer?",c:"Llevaba gafas pero el vapor entró igual.",o:["Parpadear rápido y esperar","Frotarse con la manga de la bata","Aplicar colirio y esperar 10 min","Ir al lavaojos y lavar 15-20 minutos"],a:3,f:"Lavaojos certificado, mínimo 15-20 minutos, párpados abiertos. Luego médico."},
  {q:"¿Cuál sustancia NUNCA debe verterse por el desagüe?",c:"Al finalizar quedan residuos de varias sustancias.",o:["Agua destilada","NaCl en agua muy diluida","Solución de CuSO₄ 0.1M","Agua con jabón neutro"],a:2,f:"CuSO₄ contiene cobre (metal pesado), altamente tóxico para organismos acuáticos. Siempre RESPEL."},
  {q:"¿Con qué extintor se apaga un incendio de solventes orgánicos?",c:"Se incendia un recipiente de etanol en la mesada.",o:["Solo con arena seca","Extintor de agua","Cualquier extintor sirve","Extintor de CO₂ o polvo ABC"],a:3,f:"CO₂ o polvo ABC. NUNCA agua con solventes: los dispersa y extiende el incendio."},
  {q:"¿Qué significa la frase H314?",c:"La FDS del NaOH indica H314 en la sección de peligros.",o:["Nocivo por inhalación","Muy tóxico para organismos acuáticos","Puede explotar si se calienta","Provoca quemaduras graves en piel y ojos"],a:3,f:"H314: Provoca quemaduras graves en la piel y lesiones oculares graves. Característica de ácidos y bases fuertes."},
  {q:"¿Por qué el metanol es especialmente peligroso en el laboratorio?",c:"Existe un frasco etiquetado como 'alcohol' sin especificar cuál.",o:["Porque mancha la piel permanentemente","Porque 10 mL pueden causar ceguera y 30 mL pueden ser letales","Porque es más inflamable que el etanol","Porque genera vapores explosivos solo con la luz"],a:1,f:"El metanol se metaboliza a formaldehído y ácido fórmico, causando ceguera con 10 mL y pudiendo ser letal con 30 mL. Nunca confundir con etanol."},
  {q:"¿Cuál es la primera acción ante inhalación de vapores tóxicos?",c:"Un estudiante inhala vapores de HNO₃ accidentalmente.",o:["Dar agua para diluir el tóxico","Esperar sentado en el laboratorio","Aplicar mascarilla con O₂","Sacar a la persona al aire fresco inmediatamente"],a:3,f:"Lo primero es alejar a la persona del área al aire fresco. Luego llamar al 123 y toxicología (018000)."},
  {q:"¿Qué color corresponde a una señal de obligación de EPP?",c:"Quieres colocar una señal de uso obligatorio de gafas.",o:["Rojo — prohibición","Azul — obligación","Amarillo — advertencia","Verde — condición segura"],a:1,f:"Azul = obligación. Las señales de uso obligatorio de EPP son siempre azules según ISO 7010 y NTC 1461."},
  {q:"¿Qué guantes se recomiendan para trabajar con ácidos corrosivos fuertes?",c:"Vas a trabajar con H₂SO₄ concentrado.",o:["Guantes de nitrilo delgado","Guantes de tela","Guantes de neopreno o PVC","Guantes de látex"],a:2,f:"Los guantes de neopreno o PVC ofrecen resistencia química superior frente a ácidos fuertes. El nitrilo delgado no es suficiente para ácidos concentrados."},
  {q:"¿Qué significa RESPEL?",c:"En el laboratorio hay varios contenedores de residuos.",o:["Registro Especial de Productos Químicos","Residuos de Procesos Eléctricos","Residuos Especiales de Laboratorio","Residuos Peligrosos según normativa colombiana"],a:3,f:"RESPEL = Residuos Peligrosos. En Colombia se rigen por el Decreto 1076 de 2015 y requieren gestión por empresa certificada."},
  {q:"¿A qué distancia máxima debe estar el lavaojos de cualquier puesto de trabajo?",c:"Estás evaluando si el laboratorio cumple la normativa.",o:["1 minuto caminando","5 minutos caminando","10 segundos caminando","30 segundos caminando"],a:2,f:"El lavaojos debe estar a máximo 10 segundos de cualquier puesto. Cada segundo cuenta cuando hay una sustancia en los ojos."},
  {q:"¿Cuál es el antídoto inmediato para contacto con Ácido Fluorhídrico (HF) en piel?",c:"Accidente con HF en el laboratorio.",o:["Aplicar gel de gluconato de calcio 10%","Lavar solo con agua fría","Lavar con NaOH diluido","Aplicar bicarbonato de sodio"],a:0,f:"El gel de gluconato de calcio es el antídoto obligatorio para HF. El calcio neutraliza el fluoruro que penetra tejidos. Debe estar disponible antes de usar HF."},
  {q:"¿Por qué el benceno requiere acceso restringido e inventario obligatorio?",c:"Encuentras un frasco de benceno sin registro de uso.",o:["Porque reacciona con el agua","Porque mancha permanentemente","Porque es muy costoso","Porque es carcinógeno confirmado asociado a leucemia"],a:3,f:"El benceno es carcinógeno confirmado (leucemia). Su uso debe minimizarse, registrarse y requiere inventario obligatorio por su peligrosidad crónica."},
  {q:"¿Cuál es la velocidad mínima de flujo de aire en una campana de extracción?",c:"Vas a trabajar con solventes volátiles.",o:["1.0 m/s","0.1 m/s","0.5 m/s","0.3 m/s"],a:2,f:"La velocidad mínima es 0.5 m/s en la abertura de la campana. Por debajo de este valor no garantiza contención de vapores peligrosos."},
  {q:"Un frasco sin etiqueta aparece en el laboratorio. ¿Qué se hace?",c:"Nadie sabe qué contiene el frasco.",o:["Guardarlo en el armario hasta identificarlo","Abrirlo con cuidado para olerlo","Tirarlo a la caneca ordinaria","No manipularlo y reportarlo al responsable inmediatamente"],a:3,f:"Nunca manipular ni oler sustancias desconocidas. Se reporta al docente o responsable. Podría ser tóxico, inflamable o corrosivo."},
  {q:"¿Qué documento debe consultarse obligatoriamente antes de usar cualquier sustancia química?",c:"Es tu primera vez usando dicromato de potasio.",o:["El libro de texto de química","El reglamento interno del laboratorio","La FDS (Ficha de Datos de Seguridad)","El inventario del laboratorio"],a:2,f:"La FDS o SDS contiene toda la información de peligros, EPP, almacenamiento, primeros auxilios y disposición. Es obligatoria antes del primer uso de cualquier sustancia."},
];

const CL=[
  {t:"ANTES DE ENTRAR",i:["Bata de algodón manga larga, limpia y abotonada","Gafas de seguridad con protección lateral","Zapato cerrado con suela antideslizante","Cabello completamente recogido","Sin ropa sintética ni joyas colgantes"]},
  {t:"VERIFICACIÓN DEL ESPACIO",i:["Campana de extracción funciona (flujo de aire perceptible)","Lavaojos activado con agua limpia y a presión adecuada","Extintor cargado, accesible y en fecha vigente","Vías de evacuación despejadas y señalizadas","Botiquín de primeros auxilios visible y completo"]},
  {t:"ANTES DE LA PRÁCTICA",i:["Leíste las FDS/SDS de todas las sustancias a usar","Conoces el protocolo de emergencia por cada sustancia","Todos los reactivos están correctamente etiquetados","Contenedores de residuos disponibles y clasificados","Hay mínimo dos personas presentes en el laboratorio"]},
  {t:"DURANTE Y AL FINALIZAR",i:["Trabajas en campana con ventana a máximo 40 cm de altura","Sin alimentos ni bebidas en el laboratorio","Residuos al contenedor correcto en tiempo real","Cualquier incidente se documenta de inmediato","Limpias y ordenas el área al terminar la práctica"]},
];

// ===== STATE =====
let ghsSel=null,sustExp=null,activeFilter="all",scIdx=0,eppSel=new Set();
let resSel=null,binC={red:[],yellow:[],green:[],blue:[]},resP=new Set();
let qqs=[],qi=0,qsc=0,qans=false,zonaExp=null,emergExp=null,clDone=new Set();

function showPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  document.getElementById(id).classList.add('on');btn.classList.add('on');
}

// GHS
function rGHS(){
  document.getElementById('ghsGrid').innerHTML=GHS.map((g,i)=>`
    <div class="ghs-card${ghsSel===i?' on':''}" onclick="selGHS(${i})">
      <img src="${g.e}" style="width:52px;height:52px;margin-bottom:5px" alt="${g.name}"/>
      <div style="font-family:monospace;font-size:9px;font-weight:700;letter-spacing:1px;color:#64748b;text-transform:uppercase">${g.name}</div>
      <div style="font-family:monospace;font-size:8px;color:#3b4a5a;margin-top:2px">${g.code}</div>
    </div>`).join('');
  const det=document.getElementById('ghsDetail');
  if(ghsSel===null){det.innerHTML='';return;}
  const g=GHS[ghsSel];
  det.innerHTML=`<div class="box"><div style="display:flex;align-items:center;gap:14px;margin-bottom:14px"><img src="${g.e}" style="width:54px;height:54px;flex-shrink:0" alt="${g.name}"/><div><div style="font-weight:800;font-size:17px;margin-bottom:2px">${g.name}</div><div style="font-family:monospace;font-size:10px;color:#00e5ff">${g.code}</div><div class="muted">${g.desc}</div></div></div><div class="g2"><div><span class="lbl">Ejemplos en laboratorio</span><ul style="list-style:none;padding:0">${g.ej.map(e=>`<li class="li">${e}</li>`).join('')}</ul></div><div><span class="lbl">Frases H / Medidas</span><ul style="list-style:none;padding:0">${[...g.fr,...g.med].map(e=>`<li class="li">${e}</li>`).join('')}</ul></div></div></div>`;
}
function selGHS(i){ghsSel=ghsSel===i?null:i;rGHS();}

// SUSTANCIAS
function getAllTags(){
  const s=new Set();SUST.forEach(x=>x.t.forEach(t=>s.add(t)));return['all',...s];
}
function rFilterBtns(){
  const tags=getAllTags();
  document.getElementById('filterBtns').innerHTML=tags.map(t=>`
    <button class="fbtn${activeFilter===t?' on':''}" onclick="setFilter('${t}')">
      ${t==='all'?'Todas las sustancias':TM[t]?TM[t].l:t}
    </button>`).join('');
}
function setFilter(t){activeFilter=t;rFilterBtns();rSust();}
function filterSust(){rSust();}
function rSust(){
  const q=document.getElementById('sustSearch').value.toLowerCase();
  let data=SUST.filter(s=>{
    const matchQ=!q||s.f.toLowerCase().includes(q)||s.n.toLowerCase().includes(q);
    const matchF=activeFilter==='all'||s.t.includes(activeFilter);
    return matchQ&&matchF;
  });
  document.getElementById('sustCount').textContent=data.length+' de '+SUST.length+' sustancias';
  document.getElementById('sustCards').innerHTML=data.map(s=>{
    const on=sustExp===s.f;
    return `<div class="card${on?' exp':''}" onclick="togSust('${s.f}')">
      <div style="padding:12px 16px;display:flex;align-items:center;gap:14px">
        <div class="sf">${s.f}</div><div><div style="font-weight:700;font-size:13px">${s.n}</div></div>
      </div>
      <div style="padding:0 16px 10px;display:flex;flex-wrap:wrap">${s.t.map(t=>`<span class="tp ${TM[t].c}">${TM[t].l}</span>`).join('')}</div>
      <div class="sb${on?' on':''}">
        <div class="db">⚠️ ${s.p}</div>
        <div class="g2">
          <div><span class="lbl">Neutralizante</span><div class="muted">${s.nt}</div></div>
          <div><span class="lbl">Almacenamiento</span><div class="muted">${s.al}</div></div>
          <div><span class="lbl">Residuo</span><div class="muted">${s.re}</div></div>
          <div><span class="lbl-r">🚨 Emergencia</span><div class="muted">${s.em}</div></div>
        </div>
      </div></div>`;
  }).join('')||'<div class="muted" style="padding:20px;text-align:center">No se encontraron sustancias con ese criterio.</div>';
}
function togSust(f){sustExp=sustExp===f?null:f;rSust();}

// EPP
function rEPP(){
  const sc=SC[scIdx];
  document.getElementById('scenarioBtns').innerHTML=SC.map((s,i)=>`<button class="bsm${scIdx===i?' on':''}" onclick="setSC(${i})">${s.n}</button>`).join('');
  document.getElementById('scDesc').textContent=sc.d;
  document.getElementById('scName').textContent=sc.n;
  document.getElementById('eppGrid').innerHTML=EPP_ITEMS.map(e=>`
    <div id="eppt-${e.id}" class="eppt${eppSel.has(e.id)?' sel':''}" onclick="togEPP('${e.id}')">
      <div style="font-size:22px;margin-bottom:4px">${e.e}</div>
      <div style="font-size:10px;font-weight:600;color:#94a3b8">${e.l}</div>
    </div>`).join('');
  updFig();
}
function setSC(i){scIdx=i;eppSel=new Set();document.getElementById('eppResult').style.display='none';rEPP();}
function togEPP(id){eppSel.has(id)?eppSel.delete(id):eppSel.add(id);document.getElementById('eppResult').style.display='none';rEPP();}
function updFig(){
  ['fo-bata','fo-gafas','fo-guantes','fo-mask','fo-shoes','fo-shield'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.remove('on');});
  eppSel.forEach(id=>{const fo=EPP_ITEMS.find(e=>e.id===id)?.fo;if(fo){const el=document.getElementById('fo-'+fo);if(el)el.classList.add('on');}});
}
function verifyEPP(){
  const sc=SC[scIdx];
  const miss=sc.r.filter(x=>!eppSel.has(x));
  const incor=[...eppSel].filter(x=>sc.w.includes(x));
  EPP_ITEMS.forEach(e=>{const el=document.getElementById('eppt-'+e.id);if(!el)return;el.classList.remove('bad','miss');if(incor.includes(e.id))el.classList.add('bad');if(miss.includes(e.id))el.classList.add('miss');});
  const res=document.getElementById('eppResult');res.style.display='block';
  const gn=id=>EPP_ITEMS.find(e=>e.id===id)?.l||id;
  if(!miss.length&&!incor.length){res.className='fok';res.textContent='✅ ¡Perfecto! Seleccionaste exactamente el EPP correcto para este escenario.';}
  else{res.className='fbad';res.textContent=[incor.length?'⚠️ Innecesario: '+incor.map(gn).join(', ')+'. ':'',miss.length?'❌ Falta: '+miss.map(gn).join(', ')+'.':''].join('');}
}

// RESIDUOS
function rRes(){
  const rem=RES.filter(r=>!resP.has(r.id));
  document.getElementById('resCount').textContent=rem.length;
  document.getElementById('dragItems').innerHTML=rem.length===0
    ?'<div class="muted" style="text-align:center;padding:16px 0">✅ Todos clasificados</div>'
    :rem.map(r=>`<div class="di${resSel===r.id?' asel':''}" onclick="selRes('${r.id}')">${r.e} ${r.l}</div>`).join('');
  document.getElementById('binsGrid').innerHTML=BINS.map(b=>`
    <div class="bin bin-${b.id}" onclick="dropBin('${b.id}')">
      <div class="bin-hd"><div class="bdot" style="background:${b.color}"></div><div class="blbl" style="color:${b.color}">${b.l}</div></div>
      <div id="binitems-${b.id}">${binC[b.id].map(id=>{const it=RES.find(i=>i.id===id);return'<div class="bitem" id="bi-'+id+'" onclick="event.stopPropagation();devRes(\''+id+'\')" title="Toca para devolver ↩">'+it.e+' '+it.l+' <span style="color:#64748b;font-size:10px">↩</span></div>';}).join('')}</div> 
    </div>`).join('');
  document.getElementById('resHint').textContent=resSel
    ?'"'+RES.find(i=>i.id===resSel)?.l+'" seleccionado — toca el contenedor correcto'
    :'💡 Toca un residuo para seleccionarlo, luego toca el contenedor correcto.';
}
function selRes(id){resSel=resSel===id?null:id;rRes();}
function dropBin(bid){
  if(!resSel)return;
  for(const k of Object.keys(binC))binC[k]=binC[k].filter(x=>x!==resSel);
  binC[bid].push(resSel);resP.add(resSel);resSel=null;
  document.getElementById('binsScore').style.display='none';document.getElementById('resRestart').style.display='none';rRes();
}
function devRes(id){
  for(const k of Object.keys(binC))binC[k]=binC[k].filter(x=>x!==id);
  resP.delete(id);resSel=null;
  document.getElementById('binsScore').style.display='none';rRes();
}
function checkBins(){
  let ok=0,tot=0;
  for(const[bid,ids]of Object.entries(binC)){ids.forEach(id=>{tot++;const it=RES.find(i=>i.id===id);const el=document.getElementById('bi-'+id);if(el){el.classList.remove('ok','bad');el.classList.add(it.b===bid?'ok':'bad');}if(it.b===bid)ok++;});}
  const sc=document.getElementById('binsScore');sc.style.display='block';
  const pct=tot>0?Math.round(ok/tot*100):0;
  sc.style.color=pct===100?'#22c55e':pct>=70?'#eab308':'#ef4444';
  sc.textContent=ok+'/'+tot+' correctos — '+(pct===100?'¡Clasificación perfecta! ♻️':pct>=70?'Bien, revisa los marcados en rojo.':'Repasa la teoría de residuos.');
  document.getElementById('resRestart').style.display='block';
}
function resetRes(){binC={red:[],yellow:[],green:[],blue:[]};resP=new Set();resSel=null;document.getElementById('binsScore').style.display='none';document.getElementById('resRestart').style.display='none';rRes();}

// EMERGENCIAS
function rEmerg(){
  document.getElementById('emergContainer').innerHTML=EMERG.map((e,i)=>`
    <div class="ecard">
      <div class="ehd" onclick="togEmerg(${i})">
        <span style="font-size:28px;flex-shrink:0">${e.e}</span>
        <div><div style="font-weight:700;font-size:15px;margin-bottom:2px">${e.t}</div><div style="font-size:11px;color:#64748b">${e.s}</div></div>
        <div style="margin-left:auto;font-size:18px;color:#64748b">${emergExp===i?'▲':'▼'}</div>
      </div>
      <div class="ebody${emergExp===i?' on':''}">
        ${e.p.map(p=>'<div class="step"><div class="snum" style="background:'+e.c+'">'+p.n+'</div><div class="stxt">'+p.x+'</div></div>').join('')}
      </div>
    </div>`).join('');
}
function togEmerg(i){emergExp=emergExp===i?null:i;rEmerg();}

// SEÑALES
function rSenales(){
  document.getElementById('senalGrid').innerHTML=SENALES.map(s=>`
    <div class="sc ${s.cls}">
      <div class="sc-title" style="color:${s.col}">${s.title}</div>
      <ul>${s.items.map(i=>'<li>'+i+'</li>').join('')}</ul>
    </div>`).join('');
}

// ZONAS
function rZonas(){
  document.getElementById('zonasContainer').innerHTML=ZONAS.map((z,i)=>`
    <div class="zona" style="border-color:${z.c};background:rgba(0,0,0,.3)" onclick="togZona(${i})">
      <div class="zona-title" style="color:${z.c}">${z.e} ${z.n}<span style="margin-left:auto;font-size:12px;color:#64748b">${zonaExp===i?'▲':'▼'}</span></div>
      <div class="zona-body${zonaExp===i?' on':''}"><ul>${z.r.map(r=>'<li>'+r+'</li>').join('')}</ul></div>
    </div>`).join('');
}
function togZona(i){zonaExp=zonaExp===i?null:i;rZonas();}

// NORMAS
function rNormas(){
  document.getElementById('normasContainer').innerHTML=NORMAS.map(n=>`
    <div class="nitem">
      <div class="nnum">N°${n.num}</div>
      <div><div class="ntitle">${n.t}</div><div class="ndesc">${n.d}</div>
      <span class="nbadge ${n.b==='c'?'bc':n.b==='o'?'bo':'bn'}">${n.b==='c'?'⛔ Crítico':n.b==='o'?'✅ Obligatorio':'📌 Normativo'}</span></div>
    </div>`).join('');
  
}

// QUIZ
function shuf(a){return[...a].sort(()=>Math.random()-.5);}
function startQuiz(){
  qqs=shuf(QUIZ);qi=0;qsc=0;qans=false;
  document.getElementById('quizMain').style.display='block';document.getElementById('quizResult').style.display='none';rQ();
}
{function rQ(){
  const q=qqs[qi];
  document.getElementById('qBarFill').style.width=(qi/qqs.length*100)+'%';
  document.getElementById('qCnt').textContent=(qi+1)+' / '+qqs.length;
  document.getElementById('qText').textContent=q.q;document.getElementById('qCtx').textContent=q.c;
  document.getElementById('qFb').style.display='none';document.getElementById('qNext').style.display='none';
  qans=false;
  document.getElementById('qOpts').innerHTML=q.o.map((o,i)=>`<button class="qopt" onclick="ansQ(${i})">${o}</button>`).join('');
}
function ansQ(i){
  if(qans)return;qans=true;
  const q=qqs[qi];
  document.querySelectorAll('.qopt').forEach((o,idx)=>{o.disabled=true;if(idx===q.a)o.classList.add('correct');else if(idx===i&&i!==q.a)o.classList.add('wrong');});
  if(i===q.a)qsc++;
  const fb=document.getElementById('qFb');fb.style.display='block';fb.className=i===q.a?'fok':'fbad';
  fb.textContent=(i===q.a?'✅ Correcto. ':'❌ Incorrecto. ')+q.f;
  const nxt=document.getElementById('qNext');nxt.style.display='inline-block';nxt.textContent=qi+1>=qqs.length?'Ver resultado →':'Siguiente →';
}
function nextQ(){
  qi++;
  if(qi>=qqs.length){
    document.getElementById('quizMain').style.display='none';document.getElementById('quizResult').style.display='block';
    const sc=document.getElementById('qScore');sc.textContent=qsc+'/'+qqs.length;
    sc.style.color=qsc>=10?'#22c55e':qsc>=7?'#eab308':'#ef4444';
    document.getElementById('qLbl').textContent=qsc>=10?'¡Excelente! Dominas la seguridad química.':qsc>=7?'Buen resultado, repasa los que fallaste.':'Necesitas repasar los temas básicos de seguridad.';
  }else{rQ();}
}

// CHECKLIST
function rCL(){
  const total=CL.reduce((s,g)=>s+g.i.length,0);
  const pct=Math.round(clDone.size/total*100);
  const circ=175.9,off=circ*(1-pct/100);
  const clr=pct<60?'#ef4444':pct<100?'#eab308':'#22c55e';
  document.getElementById('scoreCircle').style.strokeDashoffset=off;
  document.getElementById('scoreCircle').style.stroke=clr;
  document.getElementById('scoreNum').textContent=pct+'%';document.getElementById('scoreNum').style.color=clr;
  document.getElementById('scoreLabel').textContent=pct===0?'Sin iniciar':pct<60?'En progreso…':pct<100?'¡Casi listo!':'¡Listo para iniciar! ✅';
  document.getElementById('scoreDesc').textContent=clDone.size+'/'+total+' ítems. '+(pct<80?'No inicies con menos del 80%.':'Todos los controles verificados.');
  document.getElementById('clGroups').innerHTML=CL.map((g,gi)=>`
    <div class="clg"><div class="clg-hd"><span class="lbl">${g.t}</span></div>
    ${g.i.map((item,ii)=>{const key=gi+'-'+ii,d=clDone.has(key);return'<div class="cli'+(d?' done':'')+'" onclick="togCL(\''+key+'\')"><div class="clbox">'+(d?'✓':'')+'</div><div class="cltext">'+item+'</div></div>';}).join('')}</div>`).join('');
}
function togCL(k){clDone.has(k)?clDone.delete(k):clDone.add(k);rCL();}

// CALCULADORA
function showCalc(id,btn){
  ['dil','sol','conv','fd'].forEach(k=>{document.getElementById('calc-'+k).style.display=k===id?'block':'none';});
  document.querySelectorAll('#calc .bsm').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
}
function calcDil(){
  const c1=parseFloat(document.getElementById('dc1').value);
  const v1=parseFloat(document.getElementById('dv1').value);
  const c2=parseFloat(document.getElementById('dc2').value);
  const v2=parseFloat(document.getElementById('dv2').value);
  const res=document.getElementById('dil-result');
  const empty=[isNaN(c1),isNaN(v1),isNaN(c2),isNaN(v2)].filter(x=>x).length;
  if(empty!==1){res.style.display='none';return;}
  let txt='',val=0;
  if(isNaN(c1)){val=c2*v2/v1;txt='C₁ = '+val.toFixed(4)+' (misma unidad que C₂)';}
  else if(isNaN(v1)){val=c2*v2/c1;txt='V₁ = '+val.toFixed(2)+' mL';}
  else if(isNaN(c2)){val=c1*v1/v2;txt='C₂ = '+val.toFixed(4)+' (misma unidad que C₁)';}
  else{val=c1*v1/c2;txt='V₂ = '+val.toFixed(2)+' mL';}
  res.style.display='block';res.className='fok';
  res.innerHTML='<strong>Resultado:</strong> '+txt+'<br><small style="color:#64748b">Deja un solo campo vacío para calcularlo.</small>';
}
function calcSol(){
  const mm=parseFloat(document.getElementById('smm').value);
  const con=parseFloat(document.getElementById('scon').value);
  const vol=parseFloat(document.getElementById('svol').value);
  const res=document.getElementById('sol-result');
  if(isNaN(mm)||isNaN(con)||isNaN(vol)){res.style.display='none';return;}
  const gramos=mm*con*(vol/1000);
  res.style.display='block';res.className='fok';
  res.innerHTML='<strong>Gramos necesarios: '+gramos.toFixed(4)+' g</strong><br><small style="color:#64748b">Pesa '+gramos.toFixed(4)+'g, disuélvelos y afora a '+vol+' mL.</small>';
}
function calcConv(){
  const val=parseFloat(document.getElementById('cval').value);
  const unit=document.getElementById('cunit').value;
  const mm=parseFloat(document.getElementById('cmm').value);
  const res=document.getElementById('conv-result');
  if(isNaN(val)){res.style.display='none';return;}
  let html='';
  if(unit==='pct'){
    const ppm=val*10000;
    html='<strong>% (m/v):</strong> '+val+' %<br><strong>ppm:</strong> '+ppm.toFixed(2)+' ppm';
    if(!isNaN(mm))html+='<br><strong>mol/L:</strong> '+(val*10/mm).toFixed(4)+' M';
    else html+='<br><small style="color:#64748b">Ingresa masa molar para convertir a mol/L.</small>';
  }else if(unit==='ppm'){
    const pct=val/10000;
    html='<strong>ppm:</strong> '+val+' ppm<br><strong>% (m/v):</strong> '+pct.toFixed(6)+' %';
    if(!isNaN(mm))html+='<br><strong>mol/L:</strong> '+(val/mm/1000).toFixed(6)+' M';
    else html+='<br><small style="color:#64748b">Ingresa masa molar para convertir a mol/L.</small>';
  }else{
    if(isNaN(mm)){res.style.display='block';res.className='fbad';res.textContent='Ingresa la masa molar para convertir desde mol/L.';return;}
    const pct=val*mm/10;const ppm=pct*10000;
    html='<strong>mol/L:</strong> '+val+' M<br><strong>% (m/v):</strong> '+pct.toFixed(4)+' %<br><strong>ppm:</strong> '+ppm.toFixed(2)+' ppm';
  }
  res.style.display='block';res.className='fok';res.innerHTML=html;
}
function calcFD(){
  const ci=parseFloat(document.getElementById('fdi').value);
  const cf=parseFloat(document.getElementById('fdf').value);
  const vf=parseFloat(document.getElementById('fdv').value);
  const res=document.getElementById('fd-result');
  if(isNaN(ci)||isNaN(cf)||cf===0){res.style.display='none';return;}
  const fd=ci/cf;
  let html='<strong>Factor de dilución: 1/'+fd.toFixed(1)+'</strong> (1:'+fd.toFixed(1)+')';
  if(!isNaN(vf)){const vi=vf/fd;html+='<br><strong>Volumen de solución inicial:</strong> '+vi.toFixed(2)+' mL<br><strong>Volumen de diluyente a agregar:</strong> '+(vf-vi).toFixed(2)+' mL';}
  res.style.display='block';res.className='fok';res.innerHTML=html;
}
function resetCalc(id){
  const fields={dil:['dc1','dv1','dc2','dv2'],sol:['smm','scon','svol'],conv:['cval','cmm'],fd:['fdi','fdf','fdv']};
  fields[id].forEach(f=>{const el=document.getElementById(f);if(el)el.value='';});
  document.getElementById(id+'-result').style.display='none';
}

// INIT
rGHS();rFilterBtns();rSust();rEPP();rRes();rEmerg();rSenales();rZonas();rNormas();startQuiz();rCL();
 
 // ===== DATOS NUEVOS =====

const ISO_NORMS = [
  {code:"NTC-ISO/IEC 17025",title:"Competencia de laboratorios de ensayo y calibración",scope:"Especifica los requisitos generales para la competencia, imparcialidad y operación coherente de los laboratorios.",aplica:["Acreditar competencia ante clientes y autoridades (personal, instalaciones y equipos calibrados)","Asegurar trazabilidad metrológica hasta patrones nacionales o internacionales","Validar métodos de ensayo con técnicas científicamente sólidas","Facilitar el reconocimiento internacional de informes de prueba"],req:["Recursos: personal competente, equipos adecuados, instalaciones correctas y proveedores certificados","Procesos: gestión de muestras, validación de métodos, confidencialidad e incertidumbre de mediciones","Sistema de gestión similar a ISO 9001 adaptado al sector, con auditorías y acciones correctivas","Imparcialidad y confidencialidad: resultados libres de presiones comerciales o financieras"],rel:"Base de acreditación ante ONAC en Colombia."},
  {code:"NTC-ISO 9001:2015",title:"Sistema de Gestión de la Calidad (SGC)",scope:"Aplicable a organizaciones públicas y privadas. Garantiza que los servicios y productos cumplen estándares de calidad internacionales.",aplica:["Gestión documental del sistema de calidad del laboratorio","Definición de política de calidad con compromiso de la dirección","Gestión de recursos: infraestructura, ambiente laboral y humano","Medición, análisis y mejora continua orientada a la satisfacción del usuario"],req:["Responsabilidad de la dirección con compromiso sostenible en el tiempo","Gestión de recursos: infraestructura, ambiente laboral y personal","Realización del producto: definición de requerimientos y atención al cliente","Medición y análisis para seleccionar acciones de mejora continua"],rel:"Complementa la ISO/IEC 17025 en la gestión documental y de calidad del laboratorio."},
  {code:"NTC-ISO 14001",title:"Sistema de Gestión Ambiental",scope:"Marco para proteger el medio ambiente y responder a condiciones ambientales cambiantes, guardando equilibrio con las necesidades socioeconómicas.",aplica:["Gestión y disposición segura de residuos químicos (RESPEL)","Control de vertimientos y emisiones del laboratorio","Evaluación de aspectos e impactos ambientales","Preparación y respuesta ante emergencias ambientales"],req:["Contexto: identificación de riesgos, oportunidades y partes interesadas","Liderazgo: compromiso de la dirección con la política ambiental","Planificación: aspectos ambientales, cumplimiento legal y objetivos","Evaluación del desempeño: seguimiento, medición y auditorías internas"],rel:"Complementa el Decreto 1076/2015 de gestión ambiental en Colombia."},
  {code:"ISO 45001:2018",title:"Sistema de Gestión de Seguridad y Salud en el Trabajo",scope:"Primera norma internacional de SST. Reemplaza a OHSAS 18001. Reduce accidentes y promueve entornos de trabajo seguros mediante el ciclo PHVA.",aplica:["Identificación de peligros y evaluación de riesgos ocupacionales en el laboratorio","Control de exposición a reactivos químicos y agentes físicos","Protocolos de preparación y respuesta ante emergencias","Auditorías internas e investigación de accidentes e incidentes"],req:["Planear: objetivos, identificación de peligros, requisitos legales y metas medibles","Hacer: controles operacionales, capacitación y protocolos de emergencia","Verificar: seguimiento, evaluación de cumplimiento legal y auditorías internas","Actuar: acciones correctivas, mejora continua y revisión por la dirección"],rel:"Alineada con el Decreto 1072/2015 (SG-SST) en Colombia."},
];

 const PELIGROS_DATA = [
  {tipo:"Químico",icon:"🧪",color:"#a78bfa",peligros:["Sustancias corrosivas (ácidos y bases fuertes)","Vapores tóxicos e irritantes","Gases comprimidos o inflamables","Carcinógenos y mutágenos","Reacciones exotérmicas incontroladas"],riesgos:["Quemaduras químicas en piel y ojos","Intoxicación aguda o crónica","Incendio o explosión","Contaminación ambiental por vertimiento","Enfermedades profesionales a largo plazo"],controles:["Uso de campana de extracción","EPP específico según FDS","FDS disponible y consultada antes de usar","Sustitución por sustancias menos peligrosas","Almacenamiento segregado por compatibilidad"]},
  {tipo:"Físico",icon:"⚡",color:"#fbbf24",peligros:["Superficies calientes (manta calefactora, autoclave)","Ruido de equipos (centrífuga, compresor)","Radiación UV (lámparas germicidas)","Electricidad sin puesta a tierra","Crioagentes (N₂ líquido, CO₂ sólido)"],riesgos:["Quemaduras térmicas","Pérdida auditiva por exposición crónica","Daño ocular por radiación UV","Electrocución","Quemaduras criogénicas"],controles:["Protectores auditivos en zonas ruidosas","Gafas UV para uso de lámparas germicidas","Verificación eléctrica periódica certificada","Guantes criogénicos para N₂ líquido","Señalización de superficies calientes"]},
  {tipo:"Biológico",icon:"🦠",color:"#86efac",peligros:["Cultivos microbiológicos","Muestras biológicas humanas o animales","Aerosoles generados al mezclar muestras","Vectores en laboratorio no controlado"],riesgos:["Infección por microorganismos patógenos","Contaminación cruzada entre muestras","Exposición a material biológico infeccioso"],controles:["Nivel de bioseguridad adecuado (BSL-1 a BSL-3)","Inactivación antes de desechar cultivos","Guantes, bata y mascarilla en todo momento","Residuos en bolsa roja biológica"]},
  {tipo:"Ergonómico",icon:"🧍",color:"#7dd3fc",peligros:["Posturas prolongadas en mesones de altura fija","Manipulación repetitiva de material de vidrio","Levantamiento de garrafas pesadas","Trabajo estático frente a campana"],riesgos:["Lesiones musculoesqueléticas (espalda, muñeca)","Fatiga visual por iluminación deficiente","Síndrome del túnel carpiano"],controles:["Ajuste de altura del puesto de trabajo","Pausas activas cada 45 minutos","Carros de transporte para recipientes pesados","Iluminación mínima de 500 lux en mesones"]},
  {tipo:"Mecánico / Locativo",icon:"🫙",color:"#fb923c",peligros:["Vidrio roto (erlenmeyers, pipetas, probetas)","Pisos mojados o resbaladizos","Estanterías sin anclaje con reactivos pesados","Equipos sin mantenimiento (centrífuga desbalanceada)"],riesgos:["Cortes y laceraciones","Caídas al mismo nivel","Golpes por caída de objetos","Proyección de fragmentos por rotura a presión"],controles:["Pisos antideslizantes señalizados cuando mojados","Guardián rígido para cortopunzantes","Mantenimiento preventivo de equipos","Estanterías ancladas a la pared"]},
];

const CONTROLES_DATA = [
  {nivel:1,nombre:"Eliminación",icon:"🚫",color:"#22c55e",desc:"Suprimir completamente el peligro. Es el control más efectivo.",ej:["Eliminar el uso de benceno y sustituirlo por tolueno","Retirar equipos sin certificación vigente","Suprimir procedimientos innecesarios con sustancias peligrosas"]},
  {nivel:2,nombre:"Sustitución",icon:"🔄",color:"#86efac",desc:"Reemplazar el agente peligroso por uno de menor riesgo.",ej:["Usar H₂O₂ al 3% en lugar del 30%","Sustituir solventes halogenados por solventes de base acuosa","Usar equipo eléctrico en lugar de mechero cuando es posible"]},
  {nivel:3,nombre:"Controles de ingeniería",icon:"🏗",color:"#7dd3fc",desc:"Modificar el ambiente físico para aislar o reducir la exposición.",ej:["Campana de extracción con flujo ≥0.5 m/s","Ventilación HVAC con presión negativa","Armarios ignífugos y de seguridad para almacenamiento","Ducha de emergencia y lavaojos certificados"]},
  {nivel:4,nombre:"Controles administrativos",icon:"📋",color:"#fbbf24",desc:"Procedimientos, normas y prácticas de trabajo seguras.",ej:["Procedimientos Operativos Estándar (POE) por práctica","Inducción obligatoria antes del primer acceso","Rotación de personal en tareas de alta exposición","Sistema de permisos de trabajo para alto riesgo","Señalización y etiquetado de sustancias y zonas"]},
  {nivel:5,nombre:"EPP",icon:"🥼",color:"#fb923c",desc:"Último recurso. Protege al trabajador pero no elimina el peligro.",ej:["Bata de algodón manga larga (NTC 3977)","Gafas de seguridad con protección lateral","Guantes seleccionados según FDS de cada sustancia","Mascarilla con filtro específico para el contaminante","Pantalla facial para riesgo de salpicadura"]},
];

const IPEVR_DATA = [
  {act:"Dilución de H₂SO₄ concentrado",peligro:"Corrosivo / Quemadura química",prob:"Media",cons:"Muy Alta",nivel:"Alto",ctrl:"Campana + pantalla facial + guantes neopreno + procedimiento escrito"},
  {act:"Destilación de etanol",peligro:"Inflamable / Incendio o explosión",prob:"Baja",cons:"Alta",nivel:"Medio",ctrl:"Manta calefactora (no llama). Extintor CO₂ próximo. Alejado de oxidantes"},
  {act:"Manejo de KCN (cianuro)",peligro:"Tóxico agudo / Fatal por inhalación",prob:"Baja",cons:"Muy Alta",nivel:"Alto",ctrl:"Campana certificada + mascarilla filtro + guantes dobles + registro obligatorio"},
  {act:"Uso de mechero Bunsen",peligro:"Físico / Quemadura térmica + Incendio",prob:"Media",cons:"Media",nivel:"Medio",ctrl:"Bata algodón + alejar inflamables + extintor accesible + cabello recogido"},
  {act:"Centrifugación de muestras",peligro:"Mecánico / Proyección por desequilibrio",prob:"Baja",cons:"Media",nivel:"Bajo",ctrl:"Balanceo simétrico de tubos + no abrir en caliente + mantenimiento semestral"},
  {act:"Trabajo con HF (ác. fluorhídrico)",peligro:"Tóxico severo / Quemadura sistémica fatal",prob:"Baja",cons:"Muy Alta",nivel:"Muy Alto",ctrl:"Acceso restringido. Gel gluconato Ca disponible. Nunca trabajar solo. Campana"},
  {act:"Preparación de soluciones NaOH",peligro:"Corrosivo / Quemadura + reacción exotérmica",prob:"Media",cons:"Alta",nivel:"Medio",ctrl:"Agregar NaOH al agua lentamente + vasos en bandeja de contención + gafas"},
  {act:"Almacenamiento de gases comprimidos",peligro:"Físico / Explosión por ruptura de cilindro",prob:"Baja",cons:"Muy Alta",nivel:"Alto",ctrl:"Cilindros anclados a la pared + lejos de calor + válvulas verificadas + señalización"},
];

const SGSST_DATA = [
  {fase:"P — PLANEAR",color:"#3b82f6",icon:"📐",items:["Diagnóstico inicial de condiciones de seguridad del laboratorio","Definición de la política de SST y objetivos medibles","Identificación de peligros y valoración de riesgos (Matriz IPEVR / GTC-45)","Definición de responsabilidades por cargo","Plan de trabajo anual con cronograma y presupuesto","Programa de capacitación en seguridad química"]},
  {fase:"H — HACER",color:"#22c55e",icon:"⚙️",items:["Implementar controles según jerarquía (eliminación → EPP)","Ejecutar el plan de capacitación e inducción","Mantener registros de accidentes, incidentes y casi accidentes","Realizar inspecciones planeadas de instalaciones y equipos","Gestionar residuos peligrosos con empresa certificada (RESPEL)","Aplicar protocolos de emergencia y realizar simulacros periódicos"]},
  {fase:"V — VERIFICAR",color:"#eab308",icon:"🔍",items:["Auditorías internas del SG-SST mínimo una vez al año","Medición de indicadores: tasa de accidentalidad, severidad, ausentismo","Seguimiento al cumplimiento del plan de trabajo anual","Investigación de accidentes e incidentes (metodología causa-raíz)","Evaluación de la eficacia de los controles implementados","Revisión por la dirección de los resultados del sistema"]},
  {fase:"A — ACTUAR",color:"#ef4444",icon:"🔄",items:["Acciones correctivas ante hallazgos de auditorías","Acciones preventivas para riesgos identificados no materializados","Actualización de la matriz IPEVR con nuevos peligros detectados","Revisión y actualización de procedimientos operativos estándar","Mejora continua documentada del sistema","Reporte a la ARL de avances del SG-SST (Decreto 1072/2015)"]},
];

// ===== RENDERS NUEVOS =====

function togISO(hd){hd.nextElementSibling.classList.toggle('on');}

function rISO(){
  const c=document.getElementById('isoContainer');
  if(!c)return;
  c.innerHTML=ISO_NORMS.map(n=>`
    <div class="ecard">
      <div class="ehd" onclick="togISO(this)">
        <div style="background:#0a2030;border:1px solid #00e5ff;border-radius:6px;padding:5px 10px;font-family:monospace;font-size:10px;font-weight:700;color:#00e5ff;flex-shrink:0;white-space:nowrap">${n.code}</div>
        <div><div style="font-weight:700;font-size:13px">${n.title}</div><div class="muted" style="margin-top:2px">${n.scope}</div></div>
      </div>
      <div class="ebody">
        <div class="g2">
          <div>
            <span class="lbl">Aplicación en laboratorio</span>
            <ul style="list-style:none;padding:0;margin-bottom:12px">${n.aplica.map(a=>`<li class="li">${a}</li>`).join('')}</ul>
          </div>
          <div>
            <span class="lbl">Requisitos principales</span>
            <ul style="list-style:none;padding:0;margin-bottom:12px">${n.req.map(a=>`<li class="li">${a}</li>`).join('')}</ul>
          </div>
        </div>
        <span class="lbl">Contexto normativo colombiano</span>
        <div class="muted">${n.rel}</div>
      </div>
    </div>`).join('');
}

function rPeligros(){
  const c=document.getElementById('peligrosContainer');
  if(!c)return;
  c.innerHTML=PELIGROS_DATA.map(p=>`
    <div class="ecard">
      <div class="ehd" onclick="togISO(this)">
        <div style="font-size:26px;flex-shrink:0">${p.icon}</div>
        <div><div style="font-weight:800;font-size:14px;color:${p.color}">${p.tipo}</div>
        <div class="muted" style="margin-top:2px">${p.peligros.length} peligros — toca para ver</div></div>
      </div>
      <div class="ebody">
        <div class="g2">
          <div>
            <span class="lbl">Peligros</span>
            <ul style="list-style:none;padding:0">${p.peligros.map(x=>`<li class="li">${x}</li>`).join('')}</ul>
          </div>
          <div>
            <span class="lbl-r">Riesgos asociados</span>
            <ul style="list-style:none;padding:0">${p.riesgos.map(x=>`<li style="color:#94a3b8;font-size:12px;padding:3px 0 3px 14px;position:relative;line-height:1.4"><span style="position:absolute;left:0;color:#ef4444;font-size:10px">→</span>${x}</li>`).join('')}</ul>
          </div>
        </div>
        <span class="lbl" style="margin-top:10px;display:block">Controles principales</span>
        <ul style="list-style:none;padding:0">${p.controles.map(x=>`<li class="li">${x}</li>`).join('')}</ul>
      </div>
    </div>`).join('');
}

function rControles(){
  const c=document.getElementById('controlesContainer');
  if(!c)return;
  c.innerHTML=`
  <div style="position:relative">
    <div style="position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#22c55e,#ef4444);border-radius:2px"></div>
    ${CONTROLES_DATA.map(n=>`
    <div style="display:flex;gap:16px;margin-bottom:14px;align-items:flex-start">
      <div style="width:44px;height:44px;border-radius:50%;background:${n.color};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;z-index:1;border:3px solid #0e1117">${n.icon}</div>
      <div class="box" style="flex:1;margin-bottom:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <span style="font-family:monospace;font-size:9px;background:#1e2d3d;padding:2px 7px;border-radius:3px;color:#64748b">NIVEL ${n.nivel}</span>
          <span style="font-weight:800;font-size:14px;color:${n.color}">${n.nombre}</span>
        </div>
        <p class="muted" style="margin-bottom:8px">${n.desc}</p>
        <ul style="list-style:none;padding:0">${n.ej.map(e=>`<li class="li">${e}</li>`).join('')}</ul>
      </div>
    </div>`).join('')}
  </div>`;
}

function rIPEVR(){
  const c=document.getElementById('ipevrTable');
  if(!c)return;
  const col={'Bajo':'color:#86efac;background:#052e16;border:1px solid #166534','Medio':'color:#fbbf24;background:#1a1200;border:1px solid #92400e','Alto':'color:#fca5a5;background:#1a0011;border:1px solid #9d174d','Muy Alto':'color:#fff;background:#7f1d1d;border:1px solid #ef4444'};
  c.innerHTML=`<div style="overflow-x:auto">
  <table style="width:100%;border-collapse:collapse;font-size:12px">
    <thead><tr style="background:#161c27">
      <th style="text-align:left;padding:10px 12px;border:1px solid #1e2d3d;color:#00e5ff;font-family:monospace;font-size:10px;letter-spacing:1px">ACTIVIDAD</th>
      <th style="text-align:left;padding:10px 12px;border:1px solid #1e2d3d;color:#00e5ff;font-family:monospace;font-size:10px;letter-spacing:1px">PELIGRO</th>
      <th style="text-align:center;padding:10px 12px;border:1px solid #1e2d3d;color:#00e5ff;font-family:monospace;font-size:10px;letter-spacing:1px">PROB.</th>
      <th style="text-align:center;padding:10px 12px;border:1px solid #1e2d3d;color:#00e5ff;font-family:monospace;font-size:10px;letter-spacing:1px">CONS.</th>
      <th style="text-align:center;padding:10px 12px;border:1px solid #1e2d3d;color:#00e5ff;font-family:monospace;font-size:10px;letter-spacing:1px">NIVEL</th>
      <th style="text-align:left;padding:10px 12px;border:1px solid #1e2d3d;color:#00e5ff;font-family:monospace;font-size:10px;letter-spacing:1px">CONTROL</th>
    </tr></thead>
    <tbody>${IPEVR_DATA.map(r=>`
      <tr style="border-bottom:1px solid #1e2d3d">
        <td style="padding:10px 12px;border:1px solid #1e2d3d;color:#e2e8f0;font-weight:600">${r.act}</td>
        <td style="padding:10px 12px;border:1px solid #1e2d3d;color:#94a3b8">${r.peligro}</td>
        <td style="padding:10px 12px;border:1px solid #1e2d3d;text-align:center;color:#94a3b8">${r.prob}</td>
        <td style="padding:10px 12px;border:1px solid #1e2d3d;text-align:center;color:#94a3b8">${r.cons}</td>
        <td style="padding:10px 12px;border:1px solid #1e2d3d;text-align:center"><span style="padding:3px 10px;border-radius:100px;font-size:10px;font-weight:700;${col[r.nivel]}">${r.nivel}</span></td>
        <td style="padding:10px 12px;border:1px solid #1e2d3d;color:#64748b;font-size:11px">${r.ctrl}</td>
      </tr>`).join('')}
    </tbody>
  </table></div>`;
}

function rSGSST(){
  const c=document.getElementById('sgsstContainer');
  if(!c)return;
  c.innerHTML=`
  <div class="box" style="margin-bottom:16px;text-align:center">
    <span class="lbl">Ciclo PHVA — Base del SG-SST (Decreto 1072/2015 · ISO 45001)</span>
    <div style="display:flex;justify-content:center;align-items:center;gap:6px;flex-wrap:wrap;margin-top:12px">
      ${SGSST_DATA.map((f,i)=>`
        <div style="padding:8px 14px;border-radius:8px;background:${f.color}22;border:2px solid ${f.color};font-weight:800;font-size:12px;color:${f.color}">${f.icon} ${f.fase}</div>
        ${i<SGSST_DATA.length-1?'<div style="color:#2a3347;font-size:18px;font-weight:700">→</div>':''}
      `).join('')}
    </div>
  </div>
  ${SGSST_DATA.map(f=>`
  <div class="ecard">
    <div class="ehd" onclick="togISO(this)" style="border-left:4px solid ${f.color}">
      <div style="font-size:26px">${f.icon}</div>
      <div>
        <div style="font-weight:800;font-size:14px;color:${f.color}">${f.fase}</div>
        <div class="muted" style="margin-top:2px">${f.items.length} actividades clave — toca para expandir</div>
      </div>
    </div>
    <div class="ebody">
      <ul style="list-style:none;padding:0">${f.items.map(i=>`<li class="li">${i}</li>`).join('')}</ul>
    </div>
  </div>`).join('')}`;
}

// INIT nuevos
rISO();rPeligros();rControles();rIPEVR();rSGSST();
}