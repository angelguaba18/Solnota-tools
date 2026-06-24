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
    // ---------- El Doctor ----------
    "Sube el catálogo de tus fuentes (BMI, ASCAP, MLC) y El Doctor lo revisa solo: encuentra errores de %, dinero en black box, duplicados, y cruza las fuentes para cazar cuando una canción tiene % distintos. Tu música no se toca. 0% comisión.": { en: "Upload your sources' catalog (BMI, ASCAP, MLC) and El Doctor reviews it for you: it finds % errors, money in black box, duplicates, and cross-checks sources to catch when a song has different % across them. Your music isn't touched. 0% commission.", pt: "Envia o catálogo das tuas fontes (BMI, ASCAP, MLC) e o El Doctor revisa sozinho: encontra erros de %, dinheiro em black box, duplicados, e cruza as fontes para pegar quando uma música tem % diferentes. Tua música não é tocada. 0% comissão.", fr: "Téléverse le catalogue de tes sources (BMI, ASCAP, MLC) et El Doctor le vérifie seul : il trouve les erreurs de %, l'argent en black box, les doublons, et croise les sources pour repérer quand une chanson a des % différents. Ta musique n'est pas touchée. 0% commission." },
    "Arrastra aquí tu catálogo — CSV o Excel (de BMI, ASCAP o MLC). O haz clic. Puedes subir varios.": { en: "Drag your catalog here — CSV or Excel (from BMI, ASCAP or MLC). Or click. You can upload several.", pt: "Arrasta teu catálogo aqui — CSV ou Excel (de BMI, ASCAP ou MLC). Ou clica. Podes enviar vários.", fr: "Glisse ton catalogue ici — CSV ou Excel (de BMI, ASCAP ou MLC). Ou clique. Tu peux en téléverser plusieurs." },
    "100% en tu navegador": { en: "100% in your browser", pt: "100% no teu navegador", fr: "100% dans ton navigateur" },
    "no subimos tu archivo": { en: "we don't upload your file", pt: "não enviamos teu arquivo", fr: "on n'envoie pas ton fichier" },
    "multi-fuente": { en: "multi-source", pt: "multi-fonte", fr: "multi-source" },
    "no custodial": { en: "non-custodial", pt: "não custodial", fr: "non dépositaire" },
    "Elegir archivo (CSV o Excel)": { en: "Choose file (CSV or Excel)", pt: "Escolher arquivo (CSV ou Excel)", fr: "Choisir un fichier (CSV ou Excel)" },
    "Pegar lista": { en: "Paste list", pt: "Colar lista", fr: "Coller la liste" },
    "Ver ejemplo (La Gabi · BMI + MLC)": { en: "See example (La Gabi · BMI + MLC)", pt: "Ver exemplo (La Gabi · BMI + MLC)", fr: "Voir l'exemple (La Gabi · BMI + MLC)" },
    "📋 Pegar de mi portapapeles": { en: "📋 Paste from my clipboard", pt: "📋 Colar da área de transferência", fr: "📋 Coller depuis le presse-papiers" },
    "Analizar lo pegado": { en: "Analyze pasted text", pt: "Analisar o colado", fr: "Analyser le texte collé" },
    "Pega aquí tu lista (abre tu archivo, selecciona todo y copia)…": { en: "Paste your list here (open your file, select all and copy)…", pt: "Cola tua lista aqui (abre teu arquivo, seleciona tudo e copia)…", fr: "Colle ta liste ici (ouvre ton fichier, tout sélectionner et copier)…" },
    "¿No tienes tu archivo? Mira cómo bajarlo de tu PRO →": { en: "Don't have your file? See how to download it from your PRO →", pt: "Não tens teu arquivo? Vê como baixá-lo do teu PRO →", fr: "Tu n'as pas ton fichier ? Vois comment le télécharger depuis ton PRO →" },
    "Entra a bmi.com e inicia sesión.": { en: "Go to bmi.com and sign in.", pt: "Entra em bmi.com e faz login.", fr: "Va sur bmi.com et connecte-toi." },
    "Ve a tu repertorio / catálogo de obras.": { en: "Go to your repertoire / works catalog.", pt: "Vai ao teu repertório / catálogo de obras.", fr: "Va à ton répertoire / catalogue d'œuvres." },
    "Descarga la lista (Catalog Export, CSV).": { en: "Download the list (Catalog Export, CSV).", pt: "Baixa a lista (Catalog Export, CSV).", fr: "Télécharge la liste (Catalog Export, CSV)." },
    "Entra a ascap.com → Member Access.": { en: "Go to ascap.com → Member Access.", pt: "Entra em ascap.com → Member Access.", fr: "Va sur ascap.com → Member Access." },
    "Exporta la lista (CSV o Excel).": { en: "Export the list (CSV or Excel).", pt: "Exporta a lista (CSV ou Excel).", fr: "Exporte la liste (CSV ou Excel)." },
    "Entra a portal.themlc.com.": { en: "Go to portal.themlc.com.", pt: "Entra em portal.themlc.com.", fr: "Va sur portal.themlc.com." },
    "Exporta la lista (o usa la búsqueda).": { en: "Export the list (or use the search).", pt: "Exporta a lista (ou usa a busca).", fr: "Exporte la liste (ou utilise la recherche)." },
    "Abrir BMI →": { en: "Open BMI →", pt: "Abrir BMI →", fr: "Ouvrir BMI →" },
    "Abrir ASCAP →": { en: "Open ASCAP →", pt: "Abrir ASCAP →", fr: "Ouvrir ASCAP →" },
    "Abrir MLC →": { en: "Open MLC →", pt: "Abrir MLC →", fr: "Ouvrir MLC →" },
    "Artista a auditar (nombre en el PRO)": { en: "Artist to audit (name in the PRO)", pt: "Artista a auditar (nome no PRO)", fr: "Artiste à auditer (nom dans le PRO)" },
    "Streams al año (opcional, para estimar $)": { en: "Streams per year (optional, to estimate $)", pt: "Streams por ano (opcional, para estimar $)", fr: "Streams par an (optionnel, pour estimer $)" },
    "Volver a analizar": { en: "Re-analyze", pt: "Analisar de novo", fr: "Ré-analyser" },
    "Se detecta solo…": { en: "Auto-detected…", pt: "Detecta-se sozinho…", fr: "Détecté automatiquement…" },
    // ---------- El Doctor: reporte ----------
    "Obras": { en: "Works", pt: "Obras", fr: "Œuvres" },
    "Reconciliadas": { en: "Reconciled", pt: "Reconciliadas", fr: "Réconciliées" },
    "Errores de %": { en: "% errors", pt: "Erros de %", fr: "Erreurs de %" },
    "Conflictos BMI↔MLC": { en: "BMI↔MLC conflicts", pt: "Conflitos BMI↔MLC", fr: "Conflits BMI↔MLC" },
    "🔎 Diagnóstico": { en: "🔎 Diagnosis", pt: "🔎 Diagnóstico", fr: "🔎 Diagnostic" },
    "🗂️ Catálogo obra por obra": { en: "🗂️ Catalog work by work", pt: "🗂️ Catálogo obra por obra", fr: "🗂️ Catalogue œuvre par œuvre" },
    "📧 Correos de corrección — listos para enviar": { en: "📧 Correction emails — ready to send", pt: "📧 E-mails de correção — prontos para enviar", fr: "📧 E-mails de correction — prêts à envoyer" },
    "🟣 Reclamar en el portal del MLC (black box)": { en: "🟣 Claim in the MLC portal (black box)", pt: "🟣 Reivindicar no portal do MLC (black box)", fr: "🟣 Réclamer dans le portail du MLC (black box)" },
    "Pasos en el portal del MLC": { en: "Steps in the MLC portal", pt: "Passos no portal do MLC", fr: "Étapes dans le portail du MLC" },
    "⭐ Conflicto entre fuentes: la misma canción con % distintos": { en: "⭐ Conflict between sources: same song with different %", pt: "⭐ Conflito entre fontes: a mesma música com % diferentes", fr: "⭐ Conflit entre sources : même chanson avec des % différents" },
    "✅ Fuentes alineadas": { en: "✅ Sources aligned", pt: "✅ Fontes alinhadas", fr: "✅ Sources alignées" },
    "🔴 Imposible: apareces con más de 100% en una obra": { en: "🔴 Impossible: you appear with over 100% on a work", pt: "🔴 Impossível: apareces com mais de 100% numa obra", fr: "🔴 Impossible : tu apparais avec plus de 100% sur une œuvre" },
    "🟠 La suma de escritores no da 100%": { en: "🟠 The writers' total doesn't add up to 100%", pt: "🟠 A soma dos escritores não dá 100%", fr: "🟠 La somme des auteurs ne fait pas 100%" },
    "💸 Black box: tu publishing está botado": { en: "💸 Black box: your publishing is unclaimed", pt: "💸 Black box: teu publishing está perdido", fr: "💸 Black box : ton publishing est abandonné" },
    "🔵 Duplicados: la misma canción registrada 2+ veces": { en: "🔵 Duplicates: the same song registered 2+ times", pt: "🔵 Duplicados: a mesma música registrada 2+ vezes", fr: "🔵 Doublons : la même chanson enregistrée 2+ fois" },
    "🆔 Tu IPI/nombre cambia entre obras": { en: "🆔 Your IPI/name changes between works", pt: "🆔 Teu IPI/nome muda entre obras", fr: "🆔 Ton IPI/nom change entre les œuvres" },
    "✅ Sin errores graves": { en: "✅ No serious errors", pt: "✅ Sem erros graves", fr: "✅ Aucune erreur grave" },
    "Tu % no coincide entre BMI y MLC. Mientras no coincidan, el dinero se retiene. Esto nadie lo revisa por ti.": { en: "Your % doesn't match between BMI and MLC. While they don't match, the money is held. Nobody checks this for you.", pt: "Teu % não coincide entre BMI e MLC. Enquanto não coincidirem, o dinheiro fica retido. Ninguém revisa isto por ti.", fr: "Ton % ne correspond pas entre BMI et MLC. Tant qu'ils ne correspondent pas, l'argent est retenu. Personne ne vérifie ça pour toi." },
    "Tu % coincide entre BMI y MLC en las obras comparables.": { en: "Your % matches between BMI and MLC on comparable works.", pt: "Teu % coincide entre BMI e MLC nas obras comparáveis.", fr: "Ton % correspond entre BMI et MLC sur les œuvres comparables." },
    "Ningún escritor puede tener más del 100%. Congela el dinero de la obra entera.": { en: "No writer can have more than 100%. It freezes the money of the entire work.", pt: "Nenhum escritor pode ter mais de 100%. Congela o dinheiro da obra inteira.", fr: "Aucun auteur ne peut avoir plus de 100%. Cela gèle l'argent de toute l'œuvre." },
    "Si no suman 100, hay overclaim (sobra) o black box (falta). En ambos se retiene dinero.": { en: "If they don't add to 100, there's overclaim (excess) or black box (missing). Either way money is held.", pt: "Se não somam 100, há overclaim (sobra) ou black box (falta). Em ambos retém-se dinheiro.", fr: "S'ils ne font pas 100, il y a overclaim (excès) ou black box (manque). Dans les deux cas l'argent est retenu." },
    "Tu parte de escritor no tiene editor que la cobre. Ese dinero se pierde hasta que lo reclames.": { en: "Your writer share has no publisher collecting it. That money is lost until you claim it.", pt: "Tua parte de escritor não tem editor que a colete. Esse dinheiro perde-se até reclamares.", fr: "Ta part d'auteur n'a pas d'éditeur qui la perçoit. Cet argent est perdu jusqu'à ce que tu le réclames." },
    "Títulos parecidos (o versiones sped up/remix) que son la misma composición. Dividen el dinero.": { en: "Similar titles (or sped up/remix versions) that are the same composition. They split the money.", pt: "Títulos parecidos (ou versões sped up/remix) que são a mesma composição. Dividem o dinheiro.", fr: "Titres similaires (ou versions sped up/remix) qui sont la même composition. Ils divisent l'argent." },
    "Apareces con IPIs distintos. Eso fragmenta tus regalías.": { en: "You appear with different IPIs. That fragments your royalties.", pt: "Apareces com IPIs distintos. Isso fragmenta os teus royalties.", fr: "Tu apparais avec des IPI différents. Cela fragmente tes royalties." },
    "En conflicto o en revisión. Muchas veces porque otra sociedad mandó % distintos.": { en: "In conflict or under review. Often because another society sent different %.", pt: "Em conflito ou em revisão. Muitas vezes porque outra sociedade enviou % diferentes.", fr: "En conflit ou en révision. Souvent parce qu'une autre société a envoyé des % différents." },
    "No detecté overclaims, black box ni duplicados. Buen catálogo.": { en: "I didn't detect overclaims, black box or duplicates. Good catalog.", pt: "Não detectei overclaims, black box nem duplicados. Bom catálogo.", fr: "Je n'ai pas détecté d'overclaims, de black box ni de doublons. Bon catalogue." },
    "Arreglo: decide el % correcto (split sheet firmado) y corrígelo en la fuente equivocada para que ambas digan lo mismo.": { en: "Fix: decide the correct % (signed split sheet) and correct it in the wrong source so both say the same.", pt: "Correção: decide o % correto (split sheet assinado) e corrige na fonte errada para que ambas digam o mesmo.", fr: "Correction : décide le % correct (split sheet signé) et corrige-le dans la source erronée pour que les deux disent la même chose." },
    "Arreglo: corrige tu % al real del split sheet. Si está duplicada, borra la versión rota. Correo a reviseworks@bmi.com.": { en: "Fix: correct your % to the real one from the split sheet. If duplicated, delete the broken version. Email reviseworks@bmi.com.", pt: "Correção: corrige teu % ao real do split sheet. Se está duplicada, apaga a versão quebrada. E-mail para reviseworks@bmi.com.", fr: "Correction : corrige ton % au réel du split sheet. Si dupliquée, supprime la version cassée. E-mail à reviseworks@bmi.com." },
    "Arreglo: ajusta los % hasta 100 con el split sheet firmado (o créditos de Spotify/Apple como respaldo).": { en: "Fix: adjust the % to 100 with the signed split sheet (or Spotify/Apple credits as backup).", pt: "Correção: ajusta os % até 100 com o split sheet assinado (ou créditos do Spotify/Apple como apoio).", fr: "Correction : ajuste les % à 100 avec le split sheet signé (ou les crédits Spotify/Apple en appui)." },
    "Arreglo: registra tu editor (Sol Music Group) sobre tu parte y reclámalo en el MLC. Dinero que te puede llegar YA.": { en: "Fix: register your publisher (Sol Music Group) on your share and claim it in the MLC. Money that can reach you NOW.", pt: "Correção: registra teu editor (Sol Music Group) sobre tua parte e reivindica no MLC. Dinheiro que te pode chegar JÁ.", fr: "Correction : enregistre ton éditeur (Sol Music Group) sur ta part et réclame-le au MLC. De l'argent qui peut t'arriver MAINTENANT." },
    "Arreglo: confirma cuáles son la misma obra y pide a BMI unir/borrar la duplicada.": { en: "Fix: confirm which are the same work and ask BMI to merge/delete the duplicate.", pt: "Correção: confirma quais são a mesma obra e pede ao BMI para unir/apagar a duplicada.", fr: "Correction : confirme lesquelles sont la même œuvre et demande à BMI de fusionner/supprimer le doublon." },
    "Arreglo: unifica todo a tu IPI correcto. Pide a BMI corregir las obras con el IPI equivocado.": { en: "Fix: unify everything to your correct IPI. Ask BMI to correct the works with the wrong IPI.", pt: "Correção: unifica tudo ao teu IPI correto. Pede ao BMI para corrigir as obras com o IPI errado.", fr: "Correction : unifie tout vers ton IPI correct. Demande à BMI de corriger les œuvres avec le mauvais IPI." },
    "Arreglo: resuélvelas una a una; las colaboraciones grandes dependen de otras PROs.": { en: "Fix: resolve them one by one; big collaborations depend on other PROs.", pt: "Correção: resolve-as uma a uma; as colaborações grandes dependem de outras PROs.", fr: "Correction : résous-les une par une ; les grandes collaborations dépendent d'autres PRO." },
    "Obra": { en: "Work", pt: "Obra", fr: "Œuvre" },
    "Fuente": { en: "Source", pt: "Fonte", fr: "Source" },
    "Tu %": { en: "Your %", pt: "Teu %", fr: "Ton %" },
    "Escritores": { en: "Writers", pt: "Escritores", fr: "Auteurs" },
    "Estado": { en: "Status", pt: "Estado", fr: "Statut" },
    "Banderas": { en: "Flags", pt: "Bandeiras", fr: "Drapeaux" },
    "+100% imposible": { en: "+100% impossible", pt: "+100% impossível", fr: "+100% impossible" },
    "capturada": { en: "captured", pt: "capturada", fr: "capturée" },
    "IPI doble": { en: "double IPI", pt: "IPI duplo", fr: "IPI double" },
    "sin reconciliar": { en: "unreconciled", pt: "sem reconciliar", fr: "non réconciliée" },
    "Conflicto": { en: "Conflict", pt: "Conflito", fr: "Conflit" },
    "El Doctor revisa; tú apruebas cada arreglo. SOLNOTA nunca toca tu dinero ni tu copyright.": { en: "El Doctor reviews; you approve each fix. SOLNOTA never touches your money or your copyright.", pt: "O El Doctor revisa; tu aprovas cada correção. A SOLNOTA nunca toca no teu dinheiro nem no teu copyright.", fr: "El Doctor vérifie ; tu approuves chaque correction. SOLNOTA ne touche jamais ton argent ni ton copyright." },
    "Generar CWR de corrección →": { en: "Generate correction CWR →", pt: "Gerar CWR de correção →", fr: "Générer le CWR de correction →" },
    "🎛️ ¿Eres productor o artista? Este reporte es de tu publishing (composición). El dinero de tu máster (SoundExchange — radio digital) NO sale aquí.": { en: "🎛️ Are you a producer or artist? This report is about your publishing (composition). Your master money (SoundExchange — digital radio) does NOT appear here.", pt: "🎛️ És produtor ou artista? Este relatório é do teu publishing (composição). O dinheiro do teu master (SoundExchange — rádio digital) NÃO aparece aqui.", fr: "🎛️ Es-tu producteur ou artiste ? Ce rapport concerne ton publishing (composition). L'argent de ton master (SoundExchange — radio numérique) n'apparaît PAS ici." },
    "Cobra tu máster con una Letter of Direction →": { en: "Collect your master with a Letter of Direction →", pt: "Recebe teu master com uma Letter of Direction →", fr: "Perçois ton master avec une Letter of Direction →" },
    "El Doctor ya escribió estos correos por ti. Solo: (1) adjunta tus split sheets firmados, (2) dale Abrir y enviar. SOLNOTA no los manda por ti — tú aprietas enviar (tú tienes el control). El black box y los conflictos entre fuentes se arreglan en el portal, no por correo.": { en: "El Doctor already wrote these emails for you. Just: (1) attach your signed split sheets, (2) hit Open and send. SOLNOTA doesn't send them for you — you press send (you're in control). Black box and cross-source conflicts are fixed in the portal, not by email.", pt: "O El Doctor já escreveu estes e-mails por ti. Só: (1) anexa os teus split sheets assinados, (2) clica em Abrir e enviar. A SOLNOTA não os envia por ti — tu carregas em enviar (tens o controlo). O black box e os conflitos entre fontes resolvem-se no portal, não por e-mail.", fr: "El Doctor a déjà écrit ces e-mails pour toi. Juste : (1) joins tes split sheets signés, (2) clique sur Ouvrir et envoyer. SOLNOTA ne les envoie pas pour toi — c'est toi qui appuies sur envoyer (tu as le contrôle). Le black box et les conflits entre sources se règlent dans le portail, pas par e-mail." },
    "Esto NO se arregla por correo — se reclama en tu portal del MLC. El Doctor te dice exactamente qué hacer, paso a paso.": { en: "This is NOT fixed by email — you claim it in your MLC portal. El Doctor tells you exactly what to do, step by step.", pt: "Isto NÃO se resolve por e-mail — reclama-se no teu portal do MLC. O El Doctor diz-te exatamente o que fazer, passo a passo.", fr: "Cela ne se règle PAS par e-mail — tu le réclames dans ton portail MLC. El Doctor te dit exactement quoi faire, étape par étape." },
    "📧 Abrir y enviar": { en: "📧 Open and send", pt: "📧 Abrir e enviar", fr: "📧 Ouvrir et envoyer" },
    "📋 Copiar correo": { en: "📋 Copy email", pt: "📋 Copiar e-mail", fr: "📋 Copier l'e-mail" },
    "📋 Copiar lista": { en: "📋 Copy list", pt: "📋 Copiar lista", fr: "📋 Copier la liste" },
    "Abrir cuenta ASCAP →": { en: "Open ASCAP account →", pt: "Abrir conta ASCAP →", fr: "Ouvrir le compte ASCAP →" },
    "Abrir portal del MLC →": { en: "Open MLC portal →", pt: "Abrir portal do MLC →", fr: "Ouvrir le portail MLC →" },
    "⬇ Descargar": { en: "⬇ Download", pt: "⬇ Baixar", fr: "⬇ Télécharger" },
    "Asunto:": { en: "Subject:", pt: "Assunto:", fr: "Objet :" },
    // ---------- Login ----------
    "SOLNOTA · Entrar": { en: "SOLNOTA · Sign in", pt: "SOLNOTA · Entrar", fr: "SOLNOTA · Connexion" },
    "Entra a tu dinero": { en: "Access your money", pt: "Acesse seu dinheiro", fr: "Accède à ton argent" },
    "Te enviamos un enlace mágico a tu correo. Sin contraseñas.": { en: "We send a magic link to your email. No passwords.", pt: "Enviamos um link mágico para o seu e-mail. Sem senhas.", fr: "Nous t'envoyons un lien magique par e-mail. Sans mot de passe." },
    "Enviar enlace": { en: "Send link", pt: "Enviar link", fr: "Envoyer le lien" },
    "Nunca tocamos tu dinero": { en: "We never touch your money", pt: "Nunca tocamos no seu dinheiro", fr: "On ne touche jamais à ton argent" },
    "Tu música es 100% tuya": { en: "Your music is 100% yours", pt: "Sua música é 100% sua", fr: "Ta musique est 100% à toi" },
    "0% comisión": { en: "0% commission", pt: "0% de comissão", fr: "0% de commission" },
    "Entrando…": { en: "Signing in…", pt: "Entrando…", fr: "Connexion…" },
    "Un segundo, cargando tu cuenta.": { en: "One second, loading your account.", pt: "Um segundo, carregando sua conta.", fr: "Une seconde, chargement de ton compte." },

    // ---------- Aprende (centro educativo) ----------
    "Centro de aprendizaje": { en: "Learning center", pt: "Centro de aprendizado", fr: "Centre d'apprentissage" },
    "Aprende a cobrar tu música": { en: "Learn to get paid for your music", pt: "Aprenda a receber pela sua música", fr: "Apprends à encaisser ta musique" },
    "Tu música genera dinero por muchos lados. Aquí te explicamos cada uno — fácil, en español, sin enredos.": { en: "Your music makes money in many ways. Here we explain each one — easy and clear.", pt: "Sua música gera dinheiro de várias formas. Aqui explicamos cada uma — fácil e claro.", fr: "Ta musique génère de l'argent de plusieurs façons. On t'explique chacune — simple et clair." },
    "El MLC": { en: "The MLC", pt: "O MLC", fr: "Le MLC" },
    "¿Cuándo me pagan?": { en: "When do I get paid?", pt: "Quando me pagam?", fr: "Quand suis-je payé ?" },
    "¿Qué es el publishing?": { en: "What is publishing?", pt: "O que é publishing?", fr: "Qu'est-ce que le publishing ?" },
    '¿Qué es el "black box"?': { en: 'What is the "black box"?', pt: 'O que é o "black box"?', fr: 'Qu\'est-ce que le "black box" ?' },
    "¿Qué es el MLC?": { en: "What is the MLC?", pt: "O que é o MLC?", fr: "Qu'est-ce que le MLC ?" },
    "¿Qué es un PRO (BMI / ASCAP)?": { en: "What is a PRO (BMI / ASCAP)?", pt: "O que é um PRO (BMI / ASCAP)?", fr: "Qu'est-ce qu'un PRO (BMI / ASCAP) ?" },
    "¿Qué es SoundExchange?": { en: "What is SoundExchange?", pt: "O que é o SoundExchange?", fr: "Qu'est-ce que SoundExchange ?" },
    "¿Qué son los splits?": { en: "What are splits?", pt: "O que são os splits?", fr: "Que sont les splits ?" },
    "¿Qué es el CWR?": { en: "What is the CWR?", pt: "O que é o CWR?", fr: "Qu'est-ce que le CWR ?" },
    "¿Cuándo me llega el dinero?": { en: "When does the money arrive?", pt: "Quando o dinheiro chega?", fr: "Quand l'argent arrive-t-il ?" },
    '¿Qué es "0% · no-custodial"?': { en: 'What is "0% · non-custodial"?', pt: 'O que é "0% · não-custodial"?', fr: 'Qu\'est-ce que "0% · non-dépositaire" ?' },
    "Lo más importante que casi nadie te explica": { en: "The most important thing almost no one explains", pt: "O mais importante que quase ninguém te explica", fr: "Le plus important que presque personne n'explique" },
    "El dinero botado": { en: "The money left behind", pt: "O dinheiro jogado fora", fr: "L'argent abandonné" },
    "Regalías del máster en radio digital": { en: "Master royalties on digital radio", pt: "Royalties do master no rádio digital", fr: "Royalties du master à la radio numérique" },
    "Quién escribió y cuánto le toca": { en: "Who wrote it and how much they get", pt: "Quem escreveu e quanto recebe", fr: "Qui a écrit et combien lui revient" },
    "El publishing siempre llega más lento que el máster": { en: "Publishing always arrives slower than the master", pt: "O publishing sempre chega mais devagar que o master", fr: "Le publishing arrive toujours plus lentement que le master" },
    "Por qué SOLNOTA es distinto": { en: "Why SOLNOTA is different", pt: "Por que a SOLNOTA é diferente", fr: "Pourquoi SOLNOTA est différent" },
    "Tu canción tiene dos partes: el máster (la grabación, lo que suena) y el publishing (la composición, la letra y melodía que escribiste).": { en: "Your song has two parts: the master (the recording, what you hear) and the publishing (the composition, the lyrics and melody you wrote).", pt: "Sua música tem duas partes: o master (a gravação, o que toca) e o publishing (a composição, a letra e melodia que você escreveu).", fr: "Ta chanson a deux parties : le master (l'enregistrement, ce qu'on entend) et le publishing (la composition, les paroles et la mélodie que tu as écrites)." },
    "Tu distribuidora ya te paga el máster. Pero el publishing — que es casi 25% del dinero — muchas veces se queda sin cobrar. Eso es lo que SOLNOTA rescata.": { en: "Your distributor already pays you the master. But the publishing — almost 25% of the money — often goes uncollected. That's what SOLNOTA rescues.", pt: "Sua distribuidora já te paga o master. Mas o publishing — quase 25% do dinheiro — muitas vezes fica sem ser recebido. É isso que a SOLNOTA resgata.", fr: "Ton distributeur te paie déjà le master. Mais le publishing — presque 25% de l'argent — reste souvent non encaissé. C'est ce que SOLNOTA récupère." },
    "💡 Si solo cobras de tu distribuidora, te falta una parte grande del dinero.": { en: "💡 If you only collect from your distributor, you're missing a big part of the money.", pt: "💡 Se você só recebe da sua distribuidora, está perdendo uma grande parte do dinheiro.", fr: "💡 Si tu n'encaisses que via ton distributeur, il te manque une grande partie de l'argent." },
    "El black box es dinero de regalías que se generó pero nadie reclamó. Como tu nombre no estaba bien registrado, el sistema no supo a quién pagarle.": { en: "The black box is royalty money that was generated but no one claimed. Because your name wasn't registered correctly, the system didn't know who to pay.", pt: "O black box é dinheiro de royalties que foi gerado mas ninguém reivindicou. Como seu nome não estava bem registrado, o sistema não soube a quem pagar.", fr: "Le black box, c'est de l'argent de royalties généré mais que personne n'a réclamé. Comme ton nom n'était pas bien enregistré, le système n'a pas su à qui payer." },
    "Ese dinero se junta y, si nadie lo reclama a tiempo, se reparte a las disqueras grandes. Literalmente tu dinero termina en otro bolsillo.": { en: "That money piles up and, if no one claims it in time, it's distributed to the major labels. Literally, your money ends up in someone else's pocket.", pt: "Esse dinheiro se acumula e, se ninguém reivindicar a tempo, é distribuído para as grandes gravadoras. Literalmente seu dinheiro vai parar em outro bolso.", fr: "Cet argent s'accumule et, si personne ne le réclame à temps, il est réparti aux grandes maisons de disque. Littéralement, ton argent finit dans une autre poche." },
    "💡 SOLNOTA encuentra ese dinero y te ayuda a reclamarlo antes de que se pierda.": { en: "💡 SOLNOTA finds that money and helps you claim it before it's lost.", pt: "💡 A SOLNOTA encontra esse dinheiro e te ajuda a reivindicá-lo antes que se perca.", fr: "💡 SOLNOTA trouve cet argent et t'aide à le réclamer avant qu'il ne soit perdu." },
    "El MLC es quien paga las regalías mecánicas en EE.UU. — la plata que genera tu composición cada vez que alguien hace streaming en Spotify, Apple, etc.": { en: "The MLC pays mechanical royalties in the US — the money your composition generates every time someone streams on Spotify, Apple, etc.", pt: "O MLC paga os royalties mecânicos nos EUA — o dinheiro que sua composição gera cada vez que alguém faz streaming no Spotify, Apple, etc.", fr: "Le MLC paie les royalties mécaniques aux États-Unis — l'argent que ta composition génère chaque fois qu'on l'écoute en streaming sur Spotify, Apple, etc." },
    "Si no registras tus obras en el MLC, ese dinero se queda ahí esperando (y se vuelve black box). Paga cada mes.": { en: "If you don't register your works with the MLC, that money sits there waiting (and becomes black box). It pays every month.", pt: "Se você não registrar suas obras no MLC, esse dinheiro fica lá esperando (e vira black box). Paga todo mês.", fr: "Si tu n'enregistres pas tes œuvres au MLC, cet argent reste là à attendre (et devient du black box). Il paie chaque mois." },
    "Un PRO cobra las regalías de performance: cuando tu canción suena en radio, TV, shows en vivo y streaming. En EE.UU. los principales son BMI y ASCAP.": { en: "A PRO collects performance royalties: when your song plays on radio, TV, live shows and streaming. In the US the main ones are BMI and ASCAP.", pt: "Um PRO cobra os royalties de performance: quando sua música toca no rádio, TV, shows ao vivo e streaming. Nos EUA os principais são BMI e ASCAP.", fr: "Un PRO encaisse les royalties de performance : quand ta chanson passe à la radio, la TV, en concert et en streaming. Aux États-Unis, les principaux sont BMI et ASCAP." },
    "Como escritor cobras por un lado, y como editor por otro. Paga cada 3 meses (con retraso).": { en: "As a writer you collect on one side, and as a publisher on the other. It pays every 3 months (with a delay).", pt: "Como escritor você recebe de um lado, e como editor de outro. Paga a cada 3 meses (com atraso).", fr: "En tant qu'auteur tu encaisses d'un côté, et en tant qu'éditeur de l'autre. Il paie tous les 3 mois (avec un délai)." },
    "SoundExchange paga por tu grabación (no la composición) cuando suena en radio digital como SiriusXM y Pandora.": { en: "SoundExchange pays for your recording (not the composition) when it plays on digital radio like SiriusXM and Pandora.", pt: "O SoundExchange paga pela sua gravação (não a composição) quando toca em rádio digital como SiriusXM e Pandora.", fr: "SoundExchange paie pour ton enregistrement (pas la composition) quand il passe sur la radio numérique comme SiriusXM et Pandora." },
    "⏳ Ojo: si no reclamas en 3 años, ese dinero se pierde. No lo dejes ahí.": { en: "⏳ Heads up: if you don't claim within 3 years, that money is lost. Don't leave it there.", pt: "⏳ Atenção: se você não reivindicar em 3 anos, esse dinheiro se perde. Não deixe lá.", fr: "⏳ Attention : si tu ne réclames pas dans les 3 ans, cet argent est perdu. Ne le laisse pas là." },
    "El split dice qué porcentaje le toca a cada persona que escribió la canción. La suma tiene que dar 100%.": { en: "The split says what percentage goes to each person who wrote the song. The total must add up to 100%.", pt: "O split diz qual porcentagem cabe a cada pessoa que escreveu a música. A soma tem que dar 100%.", fr: "Le split indique le pourcentage qui revient à chaque personne qui a écrit la chanson. Le total doit faire 100%." },
    "Si los splits están mal o no suman 100%, la obra se congela y el dinero no sale. Por eso es el paso más importante.": { en: "If the splits are wrong or don't add up to 100%, the work freezes and the money doesn't come out. That's why it's the most important step.", pt: "Se os splits estão errados ou não somam 100%, a obra congela e o dinheiro não sai. Por isso é o passo mais importante.", fr: "Si les splits sont faux ou ne font pas 100%, l'œuvre se gèle et l'argent ne sort pas. C'est pourquoi c'est l'étape la plus importante." },
    "💡 Regla SOLNOTA: registramos solo lo confirmado. Nunca reclamamos de más.": { en: "💡 SOLNOTA rule: we register only what's confirmed. We never over-claim.", pt: "💡 Regra SOLNOTA: registramos só o confirmado. Nunca reivindicamos a mais.", fr: "💡 Règle SOLNOTA : on n'enregistre que ce qui est confirmé. On ne réclame jamais en trop." },
    'El CWR es el archivo que entienden el MLC y los PROs del mundo para registrar tu obra. Es como el "idioma oficial" de las regalías.': { en: 'The CWR is the file the MLC and PROs around the world understand to register your work. It\'s like the "official language" of royalties.', pt: 'O CWR é o arquivo que o MLC e os PROs do mundo entendem para registrar sua obra. É como o "idioma oficial" dos royalties.', fr: 'Le CWR est le fichier que le MLC et les PRO du monde comprennent pour enregistrer ton œuvre. C\'est comme la "langue officielle" des royalties.' },
    "Hacerlo a mano es un dolor de cabeza. SOLNOTA lo genera por ti, automático y bien hecho.": { en: "Doing it by hand is a headache. SOLNOTA generates it for you, automatically and done right.", pt: "Fazer à mão é uma dor de cabeça. A SOLNOTA gera para você, automático e bem feito.", fr: "Le faire à la main est un casse-tête. SOLNOTA le génère pour toi, automatiquement et bien fait." },
    "Máster (distribuidora) y Mecánicas (MLC): cada mes. Performance (BMI/ASCAP): cada 3 meses. SoundExchange: cada 3 meses.": { en: "Master (distributor) and Mechanicals (MLC): every month. Performance (BMI/ASCAP): every 3 months. SoundExchange: every 3 months.", pt: "Master (distribuidora) e Mecânicos (MLC): todo mês. Performance (BMI/ASCAP): a cada 3 meses. SoundExchange: a cada 3 meses.", fr: "Master (distributeur) et Mécaniques (MLC) : chaque mois. Performance (BMI/ASCAP) : tous les 3 mois. SoundExchange : tous les 3 mois." },
    "Por eso a veces ves plata rápido (es el máster) y el resto va goteando después. Es normal.": { en: "That's why you sometimes see money fast (that's the master) and the rest trickles in later. It's normal.", pt: "Por isso às vezes você vê dinheiro rápido (é o master) e o resto vai pingando depois. É normal.", fr: "C'est pourquoi tu vois parfois de l'argent vite (c'est le master) et le reste arrive au compte-gouttes ensuite. C'est normal." },
    "0% comisión: no nos quedamos con nada de tu dinero.": { en: "0% commission: we keep none of your money.", pt: "0% de comissão: não ficamos com nada do seu dinheiro.", fr: "0% de commission : on ne garde rien de ton argent." },
    "No-custodial: nunca tocamos tu dinero ni te pedimos tus contraseñas. El dinero va directo del MLC/PRO a tu banco. Nosotros solo te mostramos dónde está y te ayudamos a reclamarlo.": { en: "Non-custodial: we never touch your money or ask for your passwords. The money goes straight from the MLC/PRO to your bank. We just show you where it is and help you claim it.", pt: "Não-custodial: nunca tocamos no seu dinheiro nem pedimos suas senhas. O dinheiro vai direto do MLC/PRO para o seu banco. Nós só mostramos onde está e ajudamos a reivindicá-lo.", fr: "Non-dépositaire : on ne touche jamais à ton argent ni ne demande tes mots de passe. L'argent va directement du MLC/PRO à ta banque. On te montre seulement où il est et on t'aide à le réclamer." },
    "💡 Tu música es 100% tuya. Siempre.": { en: "💡 Your music is 100% yours. Always.", pt: "💡 Sua música é 100% sua. Sempre.", fr: "💡 Ta musique est 100% à toi. Toujours." },
    "¿Listo para ver tu dinero?": { en: "Ready to see your money?", pt: "Pronto para ver seu dinheiro?", fr: "Prêt à voir ton argent ?" },
    "Escanea tu música gratis y mira cuánto te deben.": { en: "Scan your music free and see how much you're owed.", pt: "Escaneie sua música grátis e veja quanto te devem.", fr: "Scanne ta musique gratuitement et vois combien on te doit." },
    "Escanear gratis": { en: "Scan free", pt: "Escanear grátis", fr: "Scanner gratuit" },

    // ---------- Alta de artista (admin) ----------
    "Alta de artista": { en: "Add artist", pt: "Cadastrar artista", fr: "Ajouter un artiste" },
    "Da de alta a cualquier creador y vincúlalo a su catálogo. Cuando entre con su correo, verá su Nota lista.": { en: "Add any creator and link them to their catalog. When they sign in with their email, their Nota is ready.", pt: "Cadastre qualquer criador e vincule ao seu catálogo. Quando ele entrar com o e-mail, verá sua Nota pronta.", fr: "Ajoute n'importe quel créateur et relie-le à son catalogue. Quand il se connecte avec son e-mail, sa Nota est prête." },
    "Importar regalías →": { en: "Import royalties →", pt: "Importar royalties →", fr: "Importer les royalties →" },
    "Datos del creador": { en: "Creator details", pt: "Dados do criador", fr: "Infos du créateur" },
    "Nombre artístico *": { en: "Artist name *", pt: "Nome artístico *", fr: "Nom d'artiste *" },
    "Correo (con el que entrará) *": { en: "Email (used to sign in) *", pt: "E-mail (para entrar) *", fr: "E-mail (pour se connecter) *" },
    "Tipo de creador": { en: "Creator type", pt: "Tipo de criador", fr: "Type de créateur" },
    "Acceso": { en: "Access", pt: "Acesso", fr: "Accès" },
    "País": { en: "Country", pt: "País", fr: "Pays" },
    "PRO (BMI/ASCAP…)": { en: "PRO (BMI/ASCAP…)", pt: "PRO (BMI/ASCAP…)", fr: "PRO (BMI/ASCAP…)" },
    "IPI (opcional)": { en: "IPI (optional)", pt: "IPI (opcional)", fr: "IPI (facultatif)" },
    "Cantante": { en: "Singer", pt: "Cantor", fr: "Chanteur" },
    "Productor": { en: "Producer", pt: "Produtor", fr: "Producteur" },
    "Poeta": { en: "Poet", pt: "Poeta", fr: "Poète" },
    "Compositor": { en: "Songwriter", pt: "Compositor", fr: "Compositeur" },
    "Audiolibro": { en: "Audiobook", pt: "Audiolivro", fr: "Livre audio" },
    "Otro": { en: "Other", pt: "Outro", fr: "Autre" },
    "Artista (ve lo suyo)": { en: "Artist (sees their own)", pt: "Artista (vê o seu)", fr: "Artiste (voit le sien)" },
    "Productor / Manager": { en: "Producer / Manager", pt: "Produtor / Manager", fr: "Producteur / Manager" },
    "Admin (torre CEO)": { en: "Admin (CEO tower)", pt: "Admin (torre CEO)", fr: "Admin (tour CEO)" },
    "Dar de alta y vincular": { en: "Add and link", pt: "Cadastrar e vincular", fr: "Ajouter et relier" },
    "Artistas dados de alta": { en: "Registered artists", pt: "Artistas cadastrados", fr: "Artistes enregistrés" },
    "Nombre": { en: "Name", pt: "Nome", fr: "Nom" },
    "Cargando…": { en: "Loading…", pt: "Carregando…", fr: "Chargement…" },

    // ---------- Importar regalías (admin) ----------
    "Importar regalías → La Nota": { en: "Import royalties → La Nota", pt: "Importar royalties → La Nota", fr: "Importer les royalties → La Nota" },
    "Para todos: cantantes, productores, poetas, compositores y audiolibros. Sube el reporte (CSV) de cualquier plataforma. No-custodial: solo números, nunca dinero ni contraseñas.": { en: "For everyone: singers, producers, poets, songwriters and audiobooks. Upload the report (CSV) from any platform. Non-custodial: just numbers, never money or passwords.", pt: "Para todos: cantores, produtores, poetas, compositores e audiolivros. Envie o relatório (CSV) de qualquer plataforma. Não-custodial: só números, nunca dinheiro nem senhas.", fr: "Pour tous : chanteurs, producteurs, poètes, compositeurs et livres audio. Téléverse le rapport (CSV) de n'importe quelle plateforme. Non-dépositaire : juste des chiffres, jamais d'argent ni de mots de passe." },
    "1 · ¿De quién y de dónde?": { en: "1 · Who and from where?", pt: "1 · De quem e de onde?", fr: "1 · De qui et d'où ?" },
    "Artista": { en: "Artist", pt: "Artista", fr: "Artiste" },
    "Plataforma (fuente)": { en: "Platform (source)", pt: "Plataforma (fonte)", fr: "Plateforme (source)" },
    "OneRPM (máster)": { en: "OneRPM (master)", pt: "OneRPM (master)", fr: "OneRPM (master)" },
    "The MLC (mecánicas)": { en: "The MLC (mechanicals)", pt: "The MLC (mecânicos)", fr: "The MLC (mécaniques)" },
    "BMI (performance)": { en: "BMI (performance)", pt: "BMI (performance)", fr: "BMI (performance)" },
    "ASCAP (performance)": { en: "ASCAP (performance)", pt: "ASCAP (performance)", fr: "ASCAP (performance)" },
    "Audible / ACX (audiolibros)": { en: "Audible / ACX (audiobooks)", pt: "Audible / ACX (audiolivros)", fr: "Audible / ACX (livres audio)" },
    "Findaway (audiolibros)": { en: "Findaway (audiobooks)", pt: "Findaway (audiolivros)", fr: "Findaway (livres audio)" },
    "Otra": { en: "Other", pt: "Outra", fr: "Autre" },
    "Tipo": { en: "Type", pt: "Tipo", fr: "Type" },
    "Máster (grabación)": { en: "Master (recording)", pt: "Master (gravação)", fr: "Master (enregistrement)" },
    "Producción (beats)": { en: "Production (beats)", pt: "Produção (beats)", fr: "Production (beats)" },
    "Mecánicas": { en: "Mechanicals", pt: "Mecânicos", fr: "Mécaniques" },
    "Performance": { en: "Performance", pt: "Performance", fr: "Performance" },
    "Publishing (composición)": { en: "Publishing (composition)", pt: "Publishing (composição)", fr: "Publishing (composition)" },
    "Sync": { en: "Sync", pt: "Sync", fr: "Sync" },
    "Conexos": { en: "Neighboring rights", pt: "Conexos", fr: "Droits voisins" },
    "Estado del dinero": { en: "Money status", pt: "Status do dinheiro", fr: "Statut de l'argent" },
    "Cobrado": { en: "Collected", pt: "Recebido", fr: "Encaissé" },
    "En camino": { en: "On the way", pt: "A caminho", fr: "En chemin" },
    "Pendiente": { en: "Pending", pt: "Pendente", fr: "En attente" },
    "Estimado": { en: "Estimated", pt: "Estimado", fr: "Estimé" },
    "Periodo (opcional)": { en: "Period (optional)", pt: "Período (opcional)", fr: "Période (facultatif)" },
    "2 · Pega el CSV o sube el archivo": { en: "2 · Paste the CSV or upload the file", pt: "2 · Cole o CSV ou envie o arquivo", fr: "2 · Colle le CSV ou téléverse le fichier" },
    "Leer columnas →": { en: "Read columns →", pt: "Ler colunas →", fr: "Lire les colonnes →" },
    "3 · Conecta las columnas": { en: "3 · Map the columns", pt: "3 · Conecte as colunas", fr: "3 · Associe les colonnes" },
    "Dinos qué columna del CSV es cada dato. Solo Monto es obligatorio.": { en: "Tell us which CSV column is each field. Only Amount is required.", pt: "Diga qual coluna do CSV é cada dado. Só o Valor é obrigatório.", fr: "Dis-nous quelle colonne du CSV correspond à chaque donnée. Seul le Montant est requis." },
    "Monto $ *": { en: "Amount $ *", pt: "Valor $ *", fr: "Montant $ *" },
    "Canción": { en: "Song", pt: "Música", fr: "Chanson" },
    "Territorio/país": { en: "Territory/country", pt: "Território/país", fr: "Territoire/pays" },
    "Fecha de pago (cuándo llega)": { en: "Pay date (when it arrives)", pt: "Data de pagamento (quando chega)", fr: "Date de paiement (quand ça arrive)" },
    "Periodo (si está en el CSV)": { en: "Period (if in the CSV)", pt: "Período (se estiver no CSV)", fr: "Période (si dans le CSV)" },
    "Vista previa": { en: "Preview", pt: "Pré-visualização", fr: "Aperçu" },
    "Importar a La Nota": { en: "Import to La Nota", pt: "Importar para La Nota", fr: "Importer dans La Nota" },

    // ---------- App del artista ----------
    "Inicio": { en: "Home", pt: "Início", fr: "Accueil" },
    "Mi Catálogo": { en: "My Catalog", pt: "Meu Catálogo", fr: "Mon Catalogue" },
    "Mi Dinero": { en: "My Money", pt: "Meu Dinheiro", fr: "Mon Argent" },
    "Registrar / Reclamar": { en: "Register / Claim", pt: "Registrar / Reivindicar", fr: "Enregistrer / Réclamer" },
    "Pagos": { en: "Payments", pt: "Pagamentos", fr: "Paiements" },
    "Mis Regalías": { en: "My Royalties", pt: "Meus Royalties", fr: "Mes Royalties" },
    "Tu música · Tu dinero": { en: "Your music · Your money", pt: "Sua música · Seu dinheiro", fr: "Ta musique · Ton argent" },
    "Esto es todo tu dinero de música en un solo lugar.": { en: "All your music money in one place.", pt: "Todo o seu dinheiro da música em um só lugar.", fr: "Tout l'argent de ta musique en un seul endroit." },
    "Obras tuyas": { en: "Your works", pt: "Suas obras", fr: "Tes œuvres" },
    "Como artista": { en: "As artist", pt: "Como artista", fr: "En tant qu'artiste" },
    "Como feature": { en: "As feature", pt: "Como feature", fr: "En featuring" },
    "Con dinero sin reclamar": { en: "With unclaimed money", pt: "Com dinheiro não reivindicado", fr: "Avec de l'argent non réclamé" },
    "Tu música genera dinero": { en: "Your music makes money", pt: "Sua música gera dinheiro", fr: "Ta musique génère de l'argent" },
    "Ver mi catálogo": { en: "See my catalog", pt: "Ver meu catálogo", fr: "Voir mon catalogue" },
    "Ver mi dinero": { en: "See my money", pt: "Ver meu dinheiro", fr: "Voir mon argent" },
    "Todas tus obras, mapeadas con ISRC oficial desde Apple Music.": { en: "All your works, mapped with official ISRC from Apple Music.", pt: "Todas as suas obras, mapeadas com ISRC oficial do Apple Music.", fr: "Toutes tes œuvres, mappées avec l'ISRC officiel d'Apple Music." },
    "Sin reclamar": { en: "Unclaimed", pt: "Não reivindicado", fr: "Non réclamé" },
    "Título": { en: "Title", pt: "Título", fr: "Titre" },
    "Año": { en: "Year", pt: "Ano", fr: "Année" },
    "Estado": { en: "Status", pt: "Status", fr: "Statut" },
    "Splits de tu canción": { en: "Splits for your song", pt: "Splits da sua música", fr: "Splits de ta chanson" },
    "+ Agregar escritor": { en: "+ Add writer", pt: "+ Adicionar escritor", fr: "+ Ajouter un auteur" },
    "Guardar split": { en: "Save split", pt: "Salvar split", fr: "Enregistrer le split" },
    "Cómo reclamamos una obra": { en: "How we claim a work", pt: "Como reivindicamos uma obra", fr: "Comment on réclame une œuvre" },
    "Dónde poner tu banco (para que el dinero llegue)": { en: "Where to add your bank (so the money arrives)", pt: "Onde colocar seu banco (para o dinheiro chegar)", fr: "Où mettre ta banque (pour que l'argent arrive)" },
    "Cómo SOLNOTA te ayuda": { en: "How SOLNOTA helps you", pt: "Como a SOLNOTA te ajuda", fr: "Comment SOLNOTA t'aide" },
    "✓ 0% comisión": { en: "✓ 0% commission", pt: "✓ 0% de comissão", fr: "✓ 0% de commission" },
    "✓ Nunca tocamos tu dinero": { en: "✓ We never touch your money", pt: "✓ Nunca tocamos no seu dinheiro", fr: "✓ On ne touche jamais à ton argent" },
    "✓ Nunca pedimos tus contraseñas": { en: "✓ We never ask your passwords", pt: "✓ Nunca pedimos suas senhas", fr: "✓ On ne demande jamais tes mots de passe" },
    "Ya cobrado · total": { en: "Collected · total", pt: "Recebido · total", fr: "Encaissé · total" },
    "Vas a cobrar · pendiente": { en: "You'll collect · pending", pt: "Vai receber · pendente", fr: "À encaisser · en attente" },
    "Próximo pago": { en: "Next payment", pt: "Próximo pagamento", fr: "Prochain paiement" },
    "Plataformas": { en: "Platforms", pt: "Plataformas", fr: "Plateformes" },
    "Salud de tus registros 🚦": { en: "Health of your registrations 🚦", pt: "Saúde dos seus registros 🚦", fr: "Santé de tes enregistrements 🚦" },
    "Estado de tu dinero": { en: "Status of your money", pt: "Status do seu dinheiro", fr: "Statut de ton argent" },
    "De dónde viene": { en: "Where it comes from", pt: "De onde vem", fr: "D'où ça vient" },
    "Por tipo de regalía": { en: "By royalty type", pt: "Por tipo de royalty", fr: "Par type de royalty" },
    "Tus canciones que más pagan 🔥": { en: "Your top-earning songs 🔥", pt: "Suas músicas que mais pagam 🔥", fr: "Tes chansons qui rapportent le plus 🔥" },
    "Cuándo te llega 📅": { en: "When it arrives 📅", pt: "Quando chega 📅", fr: "Quand ça arrive 📅" },
    "💸 Dinero sobre la mesa": { en: "💸 Money on the table", pt: "💸 Dinheiro na mesa", fr: "💸 De l'argent sur la table" },
    "Reclamar ahora": { en: "Claim now", pt: "Reivindicar agora", fr: "Réclamer maintenant" },
    "Estado de tus reclamos": { en: "Status of your claims", pt: "Status das suas reivindicações", fr: "Statut de tes réclamations" },
    "En proceso": { en: "In progress", pt: "Em processo", fr: "En cours" },
    "Registradas": { en: "Registered", pt: "Registradas", fr: "Enregistrées" },
    "Estimado en camino": { en: "Estimated incoming", pt: "Estimado a caminho", fr: "Estimé à venir" },
    "Línea de tiempo": { en: "Timeline", pt: "Linha do tempo", fr: "Chronologie" },
    "Las fuentes de tu dinero": { en: "Your money sources", pt: "As fontes do seu dinheiro", fr: "Les sources de ton argent" },
    "Tu publishing por plataforma": { en: "Your publishing by platform", pt: "Seu publishing por plataforma", fr: "Ton publishing par plateforme" },
    "Ajusta el estimado": { en: "Adjust the estimate", pt: "Ajuste a estimativa", fr: "Ajuste l'estimation" },
    "Tus huecos de dinero 🔧": { en: "Your money gaps 🔧", pt: "Seus buracos de dinheiro 🔧", fr: "Tes trous d'argent 🔧" },
    "Cómo crece tu dinero 📈": { en: "How your money grows 📈", pt: "Como seu dinheiro cresce 📈", fr: "Comment ton argent grandit 📈" },
    "⬇ Descargar mi reporte (CSV)": { en: "⬇ Download my report (CSV)", pt: "⬇ Baixar meu relatório (CSV)", fr: "⬇ Télécharger mon rapport (CSV)" },
    "De qué países viene 🌍": { en: "Which countries it comes from 🌍", pt: "De quais países vem 🌍", fr: "De quels pays ça vient 🌍" },

    // ---------- Dashboard (CEO) ----------
    "Dashboard · Tu música · Tu dinero": { en: "Dashboard · Your music · Your money", pt: "Dashboard · Sua música · Seu dinheiro", fr: "Dashboard · Ta musique · Ton argent" },
    "EN VIVO": { en: "LIVE", pt: "AO VIVO", fr: "EN DIRECT" },
    "+ Alta de artista": { en: "+ Add artist", pt: "+ Cadastrar artista", fr: "+ Ajouter un artiste" },
    "📥 Importar regalías": { en: "📥 Import royalties", pt: "📥 Importar royalties", fr: "📥 Importer les royalties" },
    "↻ Refrescar": { en: "↻ Refresh", pt: "↻ Atualizar", fr: "↻ Actualiser" },
    "Artistas": { en: "Artists", pt: "Artistas", fr: "Artistes" },
    "Obras con ISRC": { en: "Works with ISRC", pt: "Obras com ISRC", fr: "Œuvres avec ISRC" },
    "En black box": { en: "In black box", pt: "Em black box", fr: "En black box" },
    "Mapeado (Apple)": { en: "Mapped (Apple)", pt: "Mapeado (Apple)", fr: "Mappé (Apple)" },
    "Obras totales": { en: "Total works", pt: "Obras totais", fr: "Œuvres totales" },
    "Artista principal": { en: "Main artist", pt: "Artista principal", fr: "Artiste principal" },
    "Feature": { en: "Feature", pt: "Feature", fr: "Featuring" },
    "Ver La Nota →": { en: "See La Nota →", pt: "Ver La Nota →", fr: "Voir La Nota →" },
    "Modelo de ingresos (publishing)": { en: "Income model (publishing)", pt: "Modelo de receita (publishing)", fr: "Modèle de revenus (publishing)" },
    "Recuperable (black box sin reclamar)": { en: "Recoverable (unclaimed black box)", pt: "Recuperável (black box não reivindicado)", fr: "Récupérable (black box non réclamé)" },
    "Streams promedio por obra / año": { en: "Average streams per work / year", pt: "Streams médios por obra / ano", fr: "Streams moyens par œuvre / an" },
    "% sin reclamar (black box)": { en: "% unclaimed (black box)", pt: "% não reivindicado (black box)", fr: "% non réclamé (black box)" },

    // ---------- Portada ----------
    "SOLNOTA · Herramientas de regalías para artistas latinos": { en: "SOLNOTA · Royalty tools for Latin artists", pt: "SOLNOTA · Ferramentas de royalties para artistas latinos", fr: "SOLNOTA · Outils de royalties pour artistes latinos" },
    "SOLNOTA · Dinero sin reclamar": { en: "SOLNOTA · Unclaimed money", pt: "SOLNOTA · Dinheiro não reivindicado", fr: "SOLNOTA · Argent non réclamé" },
    "SOLNOTA · Visor de Catálogo": { en: "SOLNOTA · Catalog Viewer", pt: "SOLNOTA · Visualizador de Catálogo", fr: "SOLNOTA · Visionneuse de Catalogue" },
    "Herramientas para identificar, registrar y reclamar regalías. Captura una vez, cobra en todo el mundo.": { en: "Tools to identify, register and claim your royalties. Capture once, collect worldwide.", pt: "Ferramentas para identificar, registrar e reivindicar royalties. Capture uma vez, receba no mundo todo.", fr: "Des outils pour identifier, enregistrer et réclamer vos royalties. Capturez une fois, encaissez partout dans le monde." },
    "Mira cuánto dinero te debe tu música.": { en: "See how much money your music owes you.", pt: "Veja quanto dinheiro sua música te deve.", fr: "Découvre combien d'argent ta musique te doit." },
    "Gratis · 60 segundos · 0% comisión. No tocamos tu dinero — va directo a tu banco.": { en: "Free · 60 seconds · 0% commission. We never touch your money — it goes straight to your bank.", pt: "Grátis · 60 segundos · 0% de comissão. Nunca tocamos no seu dinheiro — vai direto para o seu banco.", fr: "Gratuit · 60 secondes · 0% de commission. On ne touche jamais à ton argent — il va directement à ta banque." },
    "Dinero sin reclamar": { en: "Unclaimed money", pt: "Dinheiro não reivindicado", fr: "Argent non réclamé" },
    "Escanea el catálogo y verifica dónde hay regalías pendientes: SoundExchange, MLC, PRO.": { en: "Scan the catalog and check where royalties are pending: SoundExchange, The MLC, PRO.", pt: "Escaneie o catálogo e verifique onde há royalties pendentes: SoundExchange, MLC, PRO.", fr: "Scannez le catalogue et vérifiez où il y a des royalties en attente : SoundExchange, MLC, PRO." },
    "Visor de catálogo": { en: "Catalog viewer", pt: "Visualizador de catálogo", fr: "Visionneuse de catalogue" },
    "Escáner multi-rol (cantante, productor, compositor, audiolibro) con exportación CSV.": { en: "Multi-role scanner (singer, producer, songwriter, audiobook) with CSV export.", pt: "Scanner multifunção (cantor, produtor, compositor, audiolivro) com exportação CSV.", fr: "Scanner multi-rôle (chanteur, producteur, compositeur, livre audio) avec export CSV." },
        "Mira tu dinero": { en: "See your money", pt: "Veja seu dinheiro", fr: "Voyez votre argent" },
    "en 60 segundos": { en: "in 60 seconds", pt: "em 60 segundos", fr: "en 60 secondes" },
    "Escanear mi música →": { en: "Scan my music →", pt: "Escanear minha música →", fr: "Scanner ma musique →" },
    "SOLNOTA · Empieza en 60 segundos": { en: "SOLNOTA · Get started in 60 seconds", pt: "SOLNOTA · Comece em 60 segundos", fr: "SOLNOTA · Commencez en 60 secondes" },
"Abrir →": { en: "Open →", pt: "Abrir →", fr: "Ouvrir →" },
    "Lee mi contrato": { en: "Read my contract", pt: "Lê meu contrato", fr: "Lis mon contrat" },
    "Responde 5 preguntas y descubre qué controla tu sello y qué dinero es tuyo — sin romper tu deal.": { en: "Answer 5 questions and find out what your label controls and what money is yours — without breaking your deal.", pt: "Responde 5 perguntas e descobre o que o teu selo controla e qual dinheiro é teu — sem quebrar teu deal.", fr: "Réponds à 5 questions et découvre ce que ton label contrôle et quel argent est à toi — sans casser ton deal." },
    "SOLNOTA · Firma → Registra → Monitorea → Cobra": { en: "SOLNOTA · Sign → Register → Monitor → Collect", pt: "SOLNOTA · Assine → Registre → Monitore → Receba", fr: "SOLNOTA · Signe → Enregistre → Surveille → Encaisse" },
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
    "— SOLNOTA · Florida, EE.UU.": { en: "— SOLNOTA · Florida, USA", pt: "— SOLNOTA · Flórida, EUA", fr: "— SOLNOTA · Floride, États-Unis" }
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
      ".sn-lang button.active{background:linear-gradient(90deg,#FFC65C,#FFB02E,#E08A00,#B96A00);color:#05050A}";
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
    // Latino-first: arranca SIEMPRE en español salvo que el usuario ya haya elegido otro.
    setLang(saved || "es");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
