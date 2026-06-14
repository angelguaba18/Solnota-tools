/* SOLNOTA i18n — motor universal de idiomas (ES · EN · PT · FR)
   El HTML está en español (base). Este motor traduce automáticamente cualquier
   texto del diccionario, inyecta el botón de idioma en todas las páginas,
   detecta el idioma del visitante y recuerda su elección.
   MARCA: cualquier elemento con clase "brand-tag" NUNCA se traduce
   (ej. el eslogan "TU DINERO · A LA LUZ").
   Para añadir otro idioma: agrega su código a LANGS + su clave a cada frase. */
(function () {
  var LANGS = ["es", "en", "pt", "fr"];
  var LABEL = { es: "ES", en: "EN", pt: "PT", fr: "FR" };

  var DICT = {
    // ---------- Portada ----------
    "SOLNOTA · Herramientas de regalías para artistas latinos": { en: "SOLNOTA · Royalty tools for Latin artists", pt: "SOLNOTA · Ferramentas de royalties para artistas latinos", fr: "SOLNOTA · Outils de royalties pour artistes latinos" },
    "SOLNOTA · Dinero sin reclamar": { en: "SOLNOTA · Unclaimed money", pt: "SOLNOTA · Dinheiro não reivindicado", fr: "SOLNOTA · Argent non réclamé" },
    "SOLNOTA · Visor de Catálogo": { en: "SOLNOTA · Catalog Viewer", pt: "SOLNOTA · Visualizador de Catálogo", fr: "SOLNOTA · Visionneuse de Catalogue" },
    "Herramientas para identificar, registrar y reclamar regalías. Captura una vez, cobra en todo el mundo.": { en: "Tools to identify, register and claim your royalties. Capture once, collect worldwide.", pt: "Ferramentas para identificar, registrar e reivindicar royalties. Capture uma vez, receba no mundo todo.", fr: "Des outils pour identifier, enregistrer et réclamer vos royalties. Capturez une fois, encaissez partout dans le monde." },
    "Dinero sin reclamar": { en: "Unclaimed money", pt: "Dinheiro não reivindicado", fr: "Argent non réclamé" },
    "Escanea el catálogo y verifica dónde hay regalías pendientes: SoundExchange, MLC, PRO.": { en: "Scan the catalog and check where royalties are pending: SoundExchange, The MLC, PRO.", pt: "Escaneie o catálogo e verifique onde há royalties pendentes: SoundExchange, MLC, PRO.", fr: "Scannez le catalogue et vérifiez où il y a des royalties en attente : SoundExchange, MLC, PRO." },
    "Visor de catálogo": { en: "Catalog viewer", pt: "Visualizador de catálogo", fr: "Visionneuse de catalogue" },
    "Escáner multi-rol (cantante, productor, compositor, audiolibro) con exportación CSV.": { en: "Multi-role scanner (singer, producer, songwriter, audiobook) with CSV export.", pt: "Scanner multifunção (cantor, produtor, compositor, audiolivro) com exportação CSV.", fr: "Scanner multi-rôle (chanteur, producteur, compositeur, livre audio) avec export CSV." },
        "Mira tu dinero": { en: "See your money", pt: "Veja seu dinheiro", fr: "Voyez votre argent" },
    "en 60 segundos": { en: "in 60 seconds", pt: "em 60 segundos", fr: "en 60 secondes" },
    "Escanear mi música →": { en: "Scan my music →", pt: "Escanear minha música →", fr: "Scanner ma musique →" },
    "SOLNOTA · Empieza en 60 segundos": { en: "SOLNOTA · Get started in 60 seconds", pt: "SOLNOTA · Comece em 60 segundos", fr: "SOLNOTA · Commencez en 60 secondes" },
"Abrir →": { en: "Open →", pt: "Abrir →", fr: "Ouvrir →" },
    "Sol Music Corp · SOLNOTA · Firma → Registra → Monitorea → Cobra": { en: "Sol Music Corp · SOLNOTA · Sign → Register → Monitor → Collect", pt: "Sol Music Corp · SOLNOTA · Assine → Registre → Monitore → Receba", fr: "Sol Music Corp · SOLNOTA · Signe → Enregistre → Surveille → Encaisse" },
    "Escanea la obra por ISRC, reparte splits y genera el archivo CWR byte-perfect para PROs y MLC.": { en: "Scan the work by ISRC, split shares and generate the byte-perfect CWR file for PROs and The MLC.", pt: "Escaneie a obra por ISRC, divida os splits e gere o arquivo CWR byte-perfect para PROs e MLC.", fr: "Scannez l'œuvre par ISRC, répartissez les splits et générez le fichier CWR byte-perfect pour les PRO et le MLC." },
    "Carta para que SoundExchange pague al productor su % del máster (AMP Act). Lista para firmar.": { en: "Letter so SoundExchange pays the producer their % of the master (AMP Act). Ready to sign.", pt: "Carta para que o SoundExchange pague ao produtor sua % do master (AMP Act). Pronta para assinar.", fr: "Lettre pour que SoundExchange paie au producteur son % du master (AMP Act). Prête à signer." },

    // ---------- Encabezados (descriptivo, la marca va aparte) ----------
    "DINERO SIN RECLAMAR": { en: "UNCLAIMED MONEY", pt: "DINHEIRO NÃO REIVINDICADO", fr: "ARGENT NON RÉCLAMÉ" },

    // ---------- Split Sheet ----------
    "1 · La Obra": { en: "1 · The Work", pt: "1 · A Obra", fr: "1 · L'Œuvre" },
    "🔎 Autocompletar desde el escáner (Apple Music)": { en: "🔎 Autocomplete from the scanner (Apple Music)", pt: "🔎 Autocompletar a partir do scanner (Apple Music)", fr: "🔎 Remplir automatiquement depuis le scanner (Apple Music)" },
    "Buscar grabaciones": { en: "Search recordings", pt: "Buscar gravações", fr: "Rechercher des enregistrements" },
    "+ Agregar ISRC": { en: "+ Add ISRC", pt: "+ Adicionar ISRC", fr: "+ Ajouter un ISRC" },
    "Título de la obra *": { en: "Work title *", pt: "Título da obra *", fr: "Titre de l'œuvre *" },
    "ISWC (composición)": { en: "ISWC (composition)", pt: "ISWC (composição)", fr: "ISWC (composition)" },
    "Duración": { en: "Duration", pt: "Duração", fr: "Durée" },
    "Fecha de creación": { en: "Creation date", pt: "Data de criação", fr: "Date de création" },
    "Otros títulos / alias": { en: "Other titles / aliases", pt: "Outros títulos / apelidos", fr: "Autres titres / alias" },
    "ISRC(s) de la obra — puede tener varios (original, remix, en vivo):": { en: "ISRC(s) of the work — can have several (original, remix, live):", pt: "ISRC(s) da obra — pode ter vários (original, remix, ao vivo):", fr: "ISRC de l'œuvre — peut en avoir plusieurs (original, remix, live) :" },
    "2 · Escritores y Splits": { en: "2 · Writers & Splits", pt: "2 · Escritores e Splits", fr: "2 · Auteurs et Splits" },
    "➕ Agregar escritor": { en: "➕ Add writer", pt: "➕ Adicionar escritor", fr: "➕ Ajouter un auteur" },
    "Total split:": { en: "Total split:", pt: "Total split:", fr: "Total split :" },
    "⚖️ Repartir igual": { en: "⚖️ Split evenly", pt: "⚖️ Dividir igualmente", fr: "⚖️ Répartir également" },
    "3 · Preparado por": { en: "3 · Prepared by", pt: "3 · Preparado por", fr: "3 · Préparé par" },
    "Nombre de quien prepara": { en: "Name of preparer", pt: "Nome de quem prepara", fr: "Nom du préparateur" },
    "Fecha": { en: "Date", pt: "Data", fr: "Date" },
    "⚠️ La firma digital legal (DocuSign) va en la siguiente fase. El ISRC no es obligatorio para registrar; ayuda al emparejamiento.": { en: "⚠️ Legal e-signature (DocuSign) comes in the next phase. ISRC is not required to register; it helps matching.", pt: "⚠️ A assinatura digital legal (DocuSign) vem na próxima fase. O ISRC não é obrigatório para registrar; ajuda no pareamento.", fr: "⚠️ La signature électronique légale (DocuSign) arrive à la phase suivante. L'ISRC n'est pas obligatoire pour l'enregistrement ; il aide à l'appariement." },
    "4 · Config CWR (submitter)": { en: "4 · CWR config (submitter)", pt: "4 · Config CWR (submitter)", fr: "4 · Config CWR (submitter)" },
    "Nombre del submitter (publisher)": { en: "Submitter name (publisher)", pt: "Nome do submitter (publisher)", fr: "Nom du submitter (éditeur)" },
    "Sender ID (asignado por la sociedad)": { en: "Sender ID (assigned by the society)", pt: "Sender ID (atribuído pela sociedade)", fr: "Sender ID (attribué par la société)" },
    "IPI del publisher": { en: "Publisher IPI", pt: "IPI do publisher", fr: "IPI de l'éditeur" },
    "El Sender ID lo da MusicMark/MLC cuando te aprueban como submitter. Sin él, el CWR sirve para validar en sandbox.": { en: "The Sender ID is given by MusicMark/The MLC when you are approved as a submitter. Without it, the CWR is for sandbox validation.", pt: "O Sender ID é fornecido pela MusicMark/MLC quando você é aprovado como submitter. Sem ele, o CWR serve para validar no sandbox.", fr: "Le Sender ID est fourni par MusicMark/MLC lorsque vous êtes approuvé comme submitter. Sans lui, le CWR sert à valider en sandbox." },
    "🏛️ Generar CWR (.V21)": { en: "🏛️ Generate CWR (.V21)", pt: "🏛️ Gerar CWR (.V21)", fr: "🏛️ Générer le CWR (.V21)" },
    "Nombre del artista (ej. Sandy Mo)": { en: "Artist name (e.g. Sandy Mo)", pt: "Nome do artista (ex. Sandy Mo)", fr: "Nom de l'artiste (ex. Sandy Mo)" },
    "…o agrega un ISRC a mano (ej. USDHM1313262)": { en: "…or add an ISRC manually (e.g. USDHM1313262)", pt: "…ou adicione um ISRC manualmente (ex. USDHM1313262)", fr: "…ou ajoutez un ISRC à la main (ex. USDHM1313262)" },
    "Ej. Dios Tiene Lo Mío": { en: "E.g. Dios Tiene Lo Mío", pt: "Ex. Dios Tiene Lo Mío", fr: "Ex. Dios Tiene Lo Mío" },
    "lo asigna la sociedad": { en: "assigned by the society", pt: "atribuído pela sociedade", fr: "attribué par la société" },
    "opcional": { en: "optional", pt: "opcional", fr: "facultatif" },
    "💾 Guardar (JSON)": { en: "💾 Save (JSON)", pt: "💾 Salvar (JSON)", fr: "💾 Enregistrer (JSON)" },
    "📂 Importar": { en: "📂 Import", pt: "📂 Importar", fr: "📂 Importer" },
    "Términos y Privacidad": { en: "Terms & Privacy", pt: "Termos e Privacidade", fr: "Conditions et Confidentialité" },
    "0% comisión": { en: "0% commission", pt: "0% comissão", fr: "0% commission" },
    "Nunca tocamos tu dinero": { en: "We never touch your money", pt: "Nunca tocamos no seu dinheiro", fr: "On ne touche jamais à votre argent" },
    "Tu música es 100% tuya": { en: "Your music is 100% yours", pt: "Sua música é 100% sua", fr: "Votre musique est 100% à vous" },
    "Cancelas cuando quieras": { en: "Cancel anytime", pt: "Cancele quando quiser", fr: "Annulez quand vous voulez" },
    "Cómo te protegemos →": { en: "How we protect you →", pt: "Como te protegemos →", fr: "Comment on vous protège →" },
    "Planes y precios": { en: "Plans & pricing", pt: "Planos e preços", fr: "Forfaits et tarifs" },
    "Tarifa plana, 0% comisión. Elige tu plan: Artista, Pro o Manager. Cancela cuando quieras.": { en: "Flat fee, 0% commission. Choose your plan: Artist, Pro or Manager. Cancel anytime.", pt: "Taxa fixa, 0% comissão. Escolha seu plano: Artista, Pro ou Manager. Cancele quando quiser.", fr: "Tarif fixe, 0% commission. Choisissez votre forfait : Artiste, Pro ou Manager. Annulez quand vous voulez." },
    "Ver planes →": { en: "See plans →", pt: "Ver planos →", fr: "Voir les forfaits →" },
    "Ver planes y precios →": { en: "See plans & pricing →", pt: "Ver planos e preços →", fr: "Voir forfaits et tarifs →" },
    "Nombre legal del escritor *": { en: "Writer's legal name *", pt: "Nome legal do escritor *", fr: "Nom légal de l'auteur *" },
    "Rol *": { en: "Role *", pt: "Função *", fr: "Rôle *" },
    "PRO / Sociedad": { en: "PRO / Society", pt: "PRO / Sociedade", fr: "PRO / Société" },
    "Publisher (opcional)": { en: "Publisher (optional)", pt: "Publisher (opcional)", fr: "Éditeur (facultatif)" },
    "Apellido, Nombre": { en: "Last name, First name", pt: "Sobrenome, Nome", fr: "Nom, Prénom" },
    "Sol Music Corp / autoeditado": { en: "Sol Music Corp / self-published", pt: "Sol Music Corp / autopublicado", fr: "Sol Music Corp / autoédité" },
    "Compositor y Autor (música+letra)": { en: "Composer & Author (music+lyrics)", pt: "Compositor e Autor (música+letra)", fr: "Compositeur et Auteur (musique+paroles)" },
    "Compositor (música)": { en: "Composer (music)", pt: "Compositor (música)", fr: "Compositeur (musique)" },
    "Autor / Letrista (letra)": { en: "Author / Lyricist (lyrics)", pt: "Autor / Letrista (letra)", fr: "Auteur / Parolier (paroles)" },
    "Otra / No afiliado": { en: "Other / Not affiliated", pt: "Outra / Não afiliado", fr: "Autre / Non affilié" },
    "sin ISRC": { en: "no ISRC", pt: "sem ISRC", fr: "sans ISRC" },
    "➕ usar": { en: "➕ use", pt: "➕ usar", fr: "➕ utiliser" },
    "— ninguno aún —": { en: "— none yet —", pt: "— nenhum ainda —", fr: "— aucun pour l'instant —" },
    "✓ Listo para registrar": { en: "✓ Ready to register", pt: "✓ Pronto para registrar", fr: "✓ Prêt à enregistrer" },
    "No se encontró. Agrega el ISRC a mano abajo.": { en: "Not found. Add the ISRC manually below.", pt: "Não encontrado. Adicione o ISRC manualmente abaixo.", fr: "Introuvable. Ajoutez l'ISRC à la main ci-dessous." },
    "No se pudo conectar al escáner. Agrega el ISRC a mano abajo.": { en: "Could not connect to the scanner. Add the ISRC manually below.", pt: "Não foi possível conectar ao scanner. Adicione o ISRC manualmente abaixo.", fr: "Impossible de se connecter au scanner. Ajoutez l'ISRC à la main ci-dessous." },

    // ---------- Dinero sin reclamar ----------
    "La verdad:": { en: "The truth:", pt: "A verdade:", fr: "La vérité :" },
    "ninguna fuente tiene una API pública que diga “tienes $X sin reclamar”. Lo que SOLNOTA hace: identifica": { en: "no source has a public API that says “you have $X unclaimed.” What SOLNOTA does: it identifies", pt: "nenhuma fonte tem uma API pública que diga “você tem $X não reivindicado”. O que a SOLNOTA faz: identifica", fr: "aucune source n'a d'API publique qui dise « vous avez $X non réclamés ». Ce que SOLNOTA fait : il identifie" },
    "todo tu catálogo": { en: "your entire catalog", pt: "todo o seu catálogo", fr: "tout votre catalogue" },
    "por ISRC y te lleva": { en: "by ISRC and takes you", pt: "por ISRC e leva você", fr: "par ISRC et vous emmène" },
    "directo": { en: "directly", pt: "direto", fr: "directement" },
    "a verificar/reclamar en cada fuente. Lo que no está registrado = dinero que se va al": { en: "to verify/claim at each source. What is not registered = money that goes to the", pt: "a verificar/reivindicar em cada fonte. O que não está registrado = dinheiro que vai para o", fr: "à vérifier/réclamer à chaque source. Ce qui n'est pas enregistré = de l'argent qui part dans le" },
    "Escanear catálogo": { en: "Scan catalog", pt: "Escanear catálogo", fr: "Scanner le catalogue" },
    "Escribe un artista y escanea su catálogo.": { en: "Type an artist and scan their catalog.", pt: "Digite um artista e escaneie o catálogo.", fr: "Saisissez un artiste et scannez son catalogue." },
    "Grabaciones": { en: "Recordings", pt: "Gravações", fr: "Enregistrements" },
    "Con ISRC": { en: "With ISRC", pt: "Com ISRC", fr: "Avec ISRC" },
    "Sin ISRC (riesgo)": { en: "Without ISRC (risk)", pt: "Sem ISRC (risco)", fr: "Sans ISRC (risque)" },
    "Cobertura": { en: "Coverage", pt: "Cobertura", fr: "Couverture" },
    "Dónde está tu dinero — verifica ahora": { en: "Where your money is — verify now", pt: "Onde está o seu dinheiro — verifique agora", fr: "Où est votre argent — vérifiez maintenant" },
    "🎚️ Máster (SoundExchange)": { en: "🎚️ Master (SoundExchange)", pt: "🎚️ Master (SoundExchange)", fr: "🎚️ Master (SoundExchange)" },
    "Regalías de radio digital/satélite por tus grabaciones. Revisa si te tienen registrado y si hay pagos pendientes.": { en: "Digital/satellite radio royalties for your recordings. Check if you are registered and if there are pending payments.", pt: "Royalties de rádio digital/satélite pelas suas gravações. Verifique se você está registrado e se há pagamentos pendentes.", fr: "Royalties de la radio numérique/satellite pour vos enregistrements. Vérifiez si vous êtes enregistré et s'il y a des paiements en attente." },
    "Verificar en SoundExchange": { en: "Check on SoundExchange", pt: "Verificar no SoundExchange", fr: "Vérifier sur SoundExchange" },
    "📝 Mecánico (The MLC)": { en: "📝 Mechanical (The MLC)", pt: "📝 Mecânico (The MLC)", fr: "📝 Mécanique (The MLC)" },
    "Regalías mecánicas de streaming en EE.UU. Busca tus obras y revisa montos no asignados (unclaimed).": { en: "Mechanical streaming royalties in the U.S. Search your works and check unclaimed amounts.", pt: "Royalties mecânicos de streaming nos EUA. Busque suas obras e verifique valores não atribuídos (unclaimed).", fr: "Royalties mécaniques du streaming aux États-Unis. Recherchez vos œuvres et vérifiez les montants non attribués (unclaimed)." },
    "Buscar en The MLC": { en: "Search The MLC", pt: "Buscar no The MLC", fr: "Rechercher sur The MLC" },
    "Regalías de ejecución pública (BMI/ASCAP + PROs LatAm). Confirma que cada obra esté registrada con sus splits.": { en: "Public performance royalties (BMI/ASCAP + LatAm PROs). Confirm each work is registered with its splits.", pt: "Royalties de execução pública (BMI/ASCAP + PROs LatAm). Confirme que cada obra está registrada com seus splits.", fr: "Royalties d'exécution publique (BMI/ASCAP + PRO d'Amérique latine). Confirmez que chaque œuvre est enregistrée avec ses splits." },
    "Buscar en BMI": { en: "Search BMI", pt: "Buscar na BMI", fr: "Rechercher sur BMI" },
    "MLC unclaimed (info oficial):": { en: "MLC unclaimed (official info):", pt: "MLC unclaimed (info oficial):", fr: "MLC unclaimed (info officielle) :" },
    "· SoundExchange artistas:": { en: "· SoundExchange artists:", pt: "· SoundExchange artistas:", fr: "· SoundExchange artistes :" },
    "Tu catálogo": { en: "Your catalog", pt: "Seu catálogo", fr: "Votre catalogue" },
    "¿Hay obras sin registrar? → Genera el CWR en el Split Sheet y reclama lo que es tuyo.": { en: "Unregistered works? → Generate the CWR in the Split Sheet and claim what is yours.", pt: "Há obras não registradas? → Gere o CWR no Split Sheet e reivindique o que é seu.", fr: "Des œuvres non enregistrées ? → Générez le CWR dans le Split Sheet et réclamez ce qui vous revient." },
    "Nombre del artista (ej. La Gabi)": { en: "Artist name (e.g. La Gabi)", pt: "Nome do artista (ex. La Gabi)", fr: "Nom de l'artiste (ex. La Gabi)" },

    // ---------- Letter of Direction ----------
    "📄 Una": { en: "📄 A", pt: "📄 Uma", fr: "📄 Une" },
    "ordena a SoundExchange pagar al": { en: "orders SoundExchange to pay the", pt: "ordena ao SoundExchange pagar ao", fr: "ordonne à SoundExchange de payer au" },
    "productor": { en: "producer", pt: "produtor", fr: "producteur" },
    "un % de las regalías del artista por grabaciones específicas (AMP Act). SoundExchange también tiene su proceso/portal — revisa con un abogado de música antes de firmar. Info:": { en: "a % of the artist royalties for specific recordings (AMP Act). SoundExchange also has its own process/portal — review with a music lawyer before signing. Info:", pt: "uma % dos royalties do artista por gravações específicas (AMP Act). O SoundExchange também tem seu processo/portal — consulte um advogado de música antes de assinar. Info:", fr: "un % des royalties de l'artiste pour des enregistrements spécifiques (AMP Act). SoundExchange a aussi son propre processus/portail — consultez un avocat spécialisé en musique avant de signer. Info :" },
    "1 · Datos": { en: "1 · Details", pt: "1 · Dados", fr: "1 · Données" },
    "Artista principal (Featured Artist)": { en: "Main artist (Featured Artist)", pt: "Artista principal (Featured Artist)", fr: "Artiste principal (Featured Artist)" },
    "Productor (Producer)": { en: "Producer", pt: "Produtor (Producer)", fr: "Producteur (Producer)" },
    "Rol": { en: "Role", pt: "Função", fr: "Rôle" },
    "% para el productor": { en: "% for the producer", pt: "% para o produtor", fr: "% pour le producteur" },
    "Fecha efectiva": { en: "Effective date", pt: "Data efetiva", fr: "Date d'effet" },
    "Dirección del productor": { en: "Producer address", pt: "Endereço do produtor", fr: "Adresse du producteur" },
    "2 · Grabaciones (título + ISRC)": { en: "2 · Recordings (title + ISRC)", pt: "2 · Gravações (título + ISRC)", fr: "2 · Enregistrements (titre + ISRC)" },
    "Añadir": { en: "Add", pt: "Adicionar", fr: "Ajouter" },
    "El escáner busca en Apple Music. Si no aparece, añade el título e ISRC a mano.": { en: "The scanner searches Apple Music. If it doesn't appear, add the title and ISRC manually.", pt: "O scanner busca no Apple Music. Se não aparecer, adicione o título e o ISRC manualmente.", fr: "Le scanner cherche dans Apple Music. S'il n'apparaît pas, ajoutez le titre et l'ISRC à la main." },
    "📄 Generar carta": { en: "📄 Generate letter", pt: "📄 Gerar carta", fr: "📄 Générer la lettre" },
    "🖨️ Imprimir / PDF": { en: "🖨️ Print / PDF", pt: "🖨️ Imprimir / PDF", fr: "🖨️ Imprimer / PDF" },
    "💾 Descargar .txt": { en: "💾 Download .txt", pt: "💾 Baixar .txt", fr: "💾 Télécharger .txt" },
    "Nombre legal del productor": { en: "Producer legal name", pt: "Nome legal do produtor", fr: "Nom légal du producteur" },
    "Calle, ciudad, país": { en: "Street, city, country", pt: "Rua, cidade, país", fr: "Rue, ville, pays" },
    "Título (manual)": { en: "Title (manual)", pt: "Título (manual)", fr: "Titre (manuel)" },

    // ---------- Visor ----------
    "Escanear": { en: "Scan", pt: "Escanear", fr: "Scanner" },
    "Elige un rol y escanea.": { en: "Choose a role and scan.", pt: "Escolha uma função e escaneie.", fr: "Choisissez un rôle et scannez." },
    "Escribe el nombre…": { en: "Type the name…", pt: "Digite o nome…", fr: "Saisissez le nom…" },
    "Visor de Catálogo": { en: "Catalog Viewer", pt: "Visualizador de Catálogo", fr: "Visionneuse de Catalogue" },
    "¿Para quién es SOLNOTA?": { en: "Who is SOLNOTA for?", pt: "Para quem é a SOLNOTA?", fr: "À qui s'adresse SOLNOTA ?" },
    "✅ Es para ti si…": { en: "✅ It's for you if…", pt: "✅ É para você se…", fr: "✅ C'est pour vous si…" },
    "Eres artista, productor o compositor latino y quieres TODO tu dinero.": { en: "You're a Latin artist, producer or songwriter and want ALL your money.", pt: "Você é artista, produtor ou compositor latino e quer TODO o seu dinheiro.", fr: "Vous êtes artiste, producteur ou compositeur latino et voulez TOUT votre argent." },
    "Sientes que tu música genera y no sabes cuánto NO te llega.": { en: "You feel your music earns and don't know how much isn't reaching you.", pt: "Você sente que sua música gera e não sabe quanto NÃO chega até você.", fr: "Vous sentez que votre musique génère et ignorez combien ne vous parvient pas." },
    "Eres manager o sello y manejas varios artistas.": { en: "You're a manager or label handling several artists.", pt: "Você é manager ou selo e gerencia vários artistas.", fr: "Vous êtes manager ou label gérant plusieurs artistes." },
    "Quieres registrar y reclamar sin pagar comisión sobre tus regalías.": { en: "You want to register and claim without paying commission on your royalties.", pt: "Você quer registrar e reivindicar sem pagar comissão sobre seus royalties.", fr: "Vous voulez enregistrer et réclamer sans payer de commission sur vos royalties." },
    "✕ No es para ti si…": { en: "✕ It's not for you if…", pt: "✕ Não é para você se…", fr: "✕ Ce n'est pas pour vous si…" },
    "Buscas que alguien se quede con un % de tus regalías de por vida.": { en: "You want someone to keep a % of your royalties for life.", pt: "Você quer que alguém fique com uma % dos seus royalties para sempre.", fr: "Vous voulez que quelqu'un garde un % de vos royalties à vie." },
    "No tienes música publicada todavía.": { en: "You don't have music released yet.", pt: "Você ainda não tem música publicada.", fr: "Vous n'avez pas encore de musique publiée." },
    "Quieres que otro cobre tu dinero por ti (aquí cobras tú, directo).": { en: "You want someone else to collect your money (here you collect directly).", pt: "Você quer que outro receba seu dinheiro (aqui você recebe direto).", fr: "Vous voulez qu'un autre encaisse votre argent (ici vous encaissez directement)." },
    "Preguntas frecuentes": { en: "Frequently asked questions", pt: "Perguntas frequentes", fr: "Questions fréquentes" },
    "¿SOLNOTA toca mi dinero?": { en: "Does SOLNOTA touch my money?", pt: "A SOLNOTA toca no meu dinheiro?", fr: "SOLNOTA touche-t-il à mon argent ?" },
    "No, nunca. Tus regalías las pagan directamente las organizaciones (MLC, PROs, SoundExchange) a ti. SOLNOTA solo te ayuda a encontrarlas y reclamarlas.": { en: "No, never. Your royalties are paid directly to you by the organizations (MLC, PROs, SoundExchange). SOLNOTA only helps you find and claim them.", pt: "Não, nunca. Seus royalties são pagos diretamente a você pelas organizações (MLC, PROs, SoundExchange). A SOLNOTA só ajuda a encontrá-los e reivindicá-los.", fr: "Non, jamais. Vos royalties vous sont versées directement par les organisations (MLC, PRO, SoundExchange). SOLNOTA vous aide seulement à les trouver et à les réclamer." },
    "¿Cobran comisión sobre mis regalías?": { en: "Do you charge commission on my royalties?", pt: "Vocês cobram comissão sobre meus royalties?", fr: "Prenez-vous une commission sur mes royalties ?" },
    "0%, nunca. Pagas una tarifa plana mensual y te quedas con el 100% de tu dinero.": { en: "0%, never. You pay a flat monthly fee and keep 100% of your money.", pt: "0%, nunca. Você paga uma taxa fixa mensal e fica com 100% do seu dinheiro.", fr: "0%, jamais. Vous payez un tarif fixe mensuel et gardez 100% de votre argent." },
    "¿Mi música sigue siendo mía?": { en: "Is my music still mine?", pt: "Minha música continua minha?", fr: "Ma musique reste-t-elle la mienne ?" },
    "Sí, 100%. SOLNOTA no adquiere ningún porcentaje de tu copyright. Solo administramos con tu autorización firmada.": { en: "Yes, 100%. SOLNOTA acquires no percentage of your copyright. We only administer with your signed authorization.", pt: "Sim, 100%. A SOLNOTA não adquire nenhuma porcentagem do seu copyright. Só administramos com sua autorização assinada.", fr: "Oui, 100%. SOLNOTA n'acquiert aucun pourcentage de votre copyright. Nous administrons uniquement avec votre autorisation signée." },
    "¿Y si cancelo?": { en: "What if I cancel?", pt: "E se eu cancelar?", fr: "Et si j'annule ?" },
    "Tu dinero no se corta: sigue llegándote directo de las organizaciones. Te quedas con tus registros y tus datos. Sin penalidad ni comisión de salida.": { en: "Your money isn't cut off: it keeps reaching you directly from the organizations. You keep your registrations and your data. No penalty or exit fee.", pt: "Seu dinheiro não é cortado: continua chegando direto das organizações. Você mantém seus registros e seus dados. Sem multa nem comissão de saída.", fr: "Votre argent n'est pas coupé : il continue de vous parvenir directement des organisations. Vous gardez vos enregistrements et vos données. Sans pénalité ni frais de sortie." },
    "¿Es seguro?": { en: "Is it secure?", pt: "É seguro?", fr: "Est-ce sécurisé ?" },
    "Sí. Datos cifrados, no vendemos tu información, y nunca pedimos tus datos bancarios.": { en: "Yes. Encrypted data, we don't sell your information, and we never ask for your bank details.", pt: "Sim. Dados criptografados, não vendemos suas informações e nunca pedimos seus dados bancários.", fr: "Oui. Données chiffrées, nous ne vendons pas vos informations et ne demandons jamais vos coordonnées bancaires." },
    "¿Cuánto cuesta?": { en: "How much does it cost?", pt: "Quanto custa?", fr: "Combien ça coûte ?" },
    "Desde $19.99 al mes (plan Artista). Sin comisión sobre regalías. Cancela cuando quieras.": { en: "From $19.99/month (Artist plan). No commission on royalties. Cancel anytime.", pt: "A partir de $19.99/mês (plano Artista). Sem comissão sobre royalties. Cancele quando quiser.", fr: "À partir de 19,99 $/mois (forfait Artiste). Sans commission sur les royalties. Annulez quand vous voulez." },
    "Quiénes somos": { en: "Who we are", pt: "Quem somos", fr: "Qui nous sommes" },
    "Somos gente del movimiento urbano latino que se cansó de ver a los artistas perder lo que es suyo.": { en: "We're people from the Latin urban scene who got tired of watching artists lose what's theirs.", pt: "Somos gente do movimento urbano latino que se cansou de ver artistas perderem o que é seu.", fr: "Nous sommes des gens de la scène urbaine latino qui en ont assez de voir les artistes perdre ce qui leur revient." },
    "SOLNOTA nació de una idea terca: tu música YA genera dinero — lo justo es que te llegue todo, sin que nadie te muerda un porcentaje de por vida.": { en: "SOLNOTA was born from one stubborn idea: your music ALREADY makes money — it's only fair that all of it reaches you, without anyone taking a percentage for life.", pt: "A SOLNOTA nasceu de uma ideia teimosa: sua música JÁ gera dinheiro — o justo é que tudo chegue até você, sem que ninguém fique com uma porcentagem para sempre.", fr: "SOLNOTA est née d'une idée tenace : votre musique génère DÉJÀ de l'argent — il est juste que tout vous revienne, sans que personne ne prenne un pourcentage à vie." },
    "Por eso es tarifa plana y 0% de comisión. Tu dinero es tuyo; nosotros solo te damos las herramientas para reclamarlo.": { en: "That's why it's a flat fee and 0% commission. Your money is yours; we just give you the tools to claim it.", pt: "Por isso é taxa fixa e 0% de comissão. Seu dinheiro é seu; nós só damos as ferramentas para reivindicá-lo.", fr: "C'est pourquoi c'est un tarif fixe et 0% de commission. Votre argent est à vous ; nous vous donnons seulement les outils pour le réclamer." },
    "— Sol Music Corp · Florida, EE.UU.": { en: "— Sol Music Corp · Florida, USA", pt: "— Sol Music Corp · Flórida, EUA", fr: "— Sol Music Corp · Floride, États-Unis" }
  };

  var ATTRS = ["placeholder", "title", "aria-label"];
  var origText = new WeakMap();
  var origAttr = new WeakMap();
  var SKIP = ".brand-tag,[data-i18n-skip]";

  function tr(es, lang) {
    if (lang === "es") return es;
    var e = DICT[es];
    return (e && e[lang]) ? e[lang] : es;
  }

  function walk(root, lang) {
    var it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = it.nextNode())) {
      var raw = n.nodeValue;
      if (!raw || !raw.trim()) continue;
      if (n.parentElement && n.parentElement.closest(SKIP)) continue; // marca: no traducir
      if (!origText.has(n)) origText.set(n, raw);
      var base = origText.get(n);
      var key = base.trim();
      if (DICT[key]) n.nodeValue = base.replace(key, tr(key, lang));
    }
    var els = root.querySelectorAll ? root.querySelectorAll("*") : [];
    els.forEach(function (el) {
      if (el.closest(SKIP)) return;
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var store = origAttr.get(el) || {};
        if (!(a in store)) { store[a] = el.getAttribute(a); origAttr.set(el, store); }
        var base = store[a].trim();
        if (DICT[base]) el.setAttribute(a, tr(base, lang));
      });
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "es";
    document.documentElement.lang = lang;
    if (window.__snTitle && DICT[window.__snTitle]) document.title = tr(window.__snTitle, lang);
    walk(document.body, lang);
    document.querySelectorAll(".sn-lang button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.l === lang);
    });
    try { localStorage.setItem("solnota_lang", lang); } catch (e) {}
    window.__snLang = lang;
  }

  function injectBar() {
    var css = document.createElement("style");
    css.textContent =
      ".sn-lang{position:fixed;top:14px;right:14px;z-index:9999;display:flex;gap:2px;" +
      "background:#0E0E16;border:1px solid #1E1E2A;border-radius:999px;padding:4px;" +
      "font-family:system-ui,-apple-system,sans-serif}" +
      ".sn-lang button{background:none;border:none;color:#8A8A9A;font-weight:800;font-size:12px;" +
      "letter-spacing:.4px;padding:6px 10px;border-radius:999px;cursor:pointer;transition:.15s}" +
      ".sn-lang button.active{background:linear-gradient(90deg,#E0C078,#C9A24B,#B8923D,#A87E2C);color:#05050A}";
    document.head.appendChild(css);
    var bar = document.createElement("div");
    bar.className = "sn-lang";
    LANGS.forEach(function (l) {
      var b = document.createElement("button");
      b.dataset.l = l; b.textContent = LABEL[l] || l.toUpperCase();
      b.onclick = function () { setLang(l); };
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
  }

  function init() {
    window.__snTitle = document.title.trim();
    injectBar();
    var mo = new MutationObserver(function (muts) {
      var lang = window.__snLang || "es";
      if (lang === "es") return;
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) walk(node, lang);
          else if (node.nodeType === 3 && node.nodeValue && node.nodeValue.trim()) {
            if (node.parentElement && node.parentElement.closest(SKIP)) return;
            var key = node.nodeValue.trim();
            if (DICT[key]) { if (!origText.has(node)) origText.set(node, node.nodeValue); node.nodeValue = node.nodeValue.replace(key, tr(key, lang)); }
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    var saved; try { saved = localStorage.getItem("solnota_lang"); } catch (e) {}
    var nav = (navigator.language || "es").slice(0, 2);
    setLang(saved || (LANGS.indexOf(nav) >= 0 ? nav : "es"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
