import{jsxDEV as X,Fragment as SJ}from"react/jsx-dev-runtime";const c1={apiKey:"AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",authDomain:"eliteg3-1650f.firebaseapp.com",databaseURL:"https://eliteg3-1650f-default-rtdb.firebaseio.com/",projectId:"eliteg3-1650f",storageBucket:"eliteg3-1650f.firebasestorage.app",messagingSenderId:"351711372153",appId:"1:351711372153:web:60ce4742396e37974f85a8",measurementId:"G-HGYPLEY6DJ"};if(!firebase.apps.length)firebase.initializeApp(c1);const w=firebase.database(),iY=firebase.storage(),{useState:V,useEffect:i,useMemo:f,useRef:zJ}=React,WJ=["C","P","B","N","S","E","X","R"],s1=["R"],jX="anonimo/galeria",GJ="__anonimo_gallery__",O0="eliteg3:perfiles-cache:v1",W0="eliteg3:gallery-audios-cache:v1",d1=["PERSONAJE","ETIQUETA","GENERAL"],L0={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},lJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],n1={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},lY=()=>lJ.reduce((_,O)=>{_[O.id]="";return _},{}),EJ=(_={})=>{const O=lY(),D=_&&typeof _==="object"?_:{};return Object.keys(O).reduce((T,F)=>{T[F]=typeof D[F]==="string"?D[F].trim():"";return T},{...O})},_Y=(_="")=>lJ.find((O)=>O.id===_),p1=(_="")=>n1[(_||"").trim().toLowerCase()]||"",OY={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},R:{bg:"linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))",border:"rgba(226,232,240,0.95)",glow:"rgba(148,163,184,0.82)",text:"#f8fafc"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},qX=(_,O)=>{if(!O)return 0;return(_+O)%O},F0=(_,O,D=!1)=>{const T=Array.isArray(O)?O.length:0;if(!T)return null;if(T===1)return 0;if(D){const F=O.map((I,d)=>({item:I,idx:d})).filter(({item:I,idx:d})=>d!==_&&I&&I.url).map(({idx:I})=>I);if(!F.length)return qX((_??0)+1,T);return F[Math.floor(Math.random()*F.length)]}return qX((_??0)+1,T)},tJ=(_)=>OY[_]||OY.DEFAULT,WY=(_,O=!1)=>{const D=_==="INICIAL"?OY.DEFAULT:_==="100"?OY.B:tJ(_);return{"--btn-neon-color":D.glow,borderColor:D.border,color:D.text,boxShadow:O?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${D.border}, 0 0 20px ${D.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${D.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${D.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${D.glow} 70%, transparent)`,filter:O?"brightness(1.14)":"brightness(1)"}},E0=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,i1=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,l1=/\.gif(\?.*)?$/i,t1=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,o1=/vimeo\.com\/(?:video\/)?(\d+)/i,_X=(_)=>{const O=(_||"").trim();if(!O)return null;const D=O.match(t1);if(D)return{provider:"youtube",src:`https://www.youtube.com/embed/${D[1]}`,title:"Video de YouTube"};const T=O.match(o1);if(T)return{provider:"vimeo",src:`https://player.vimeo.com/video/${T[1]}`,title:"Video de Vimeo"};return null},a1=["eporner.com"],U0=(_="")=>{const O=String(_||"").trim();if(!O||O.startsWith("data:")||O.startsWith("blob:"))return!1;try{const T=new URL(O).hostname.toLowerCase();return a1.some((F)=>T===F||T.endsWith(`.${F}`))}catch{return!1}},qJ=(_="",O="")=>{const D=String(_||"").trim();if(!D||U0(D))return O;return D},oJ=(_="",O="")=>{if(O==="video"||O==="image")return O;const D=(_||"").trim();if(E0.test(D)||_X(D))return"video";return"image"},V0=(_="")=>{return typeof _==="string"?_.trim():""},n=(_,O="")=>{if(typeof _==="string")return{url:qJ(_.trim(),""),label:"",type:oJ(_,O),autor:""};if(_&&typeof _==="object"){const D=qJ((_.url||"").trim(),"");return{url:D,label:WJ.includes(_.label)?_.label:"",type:oJ(D,_.type||O),autor:V0(_.autor)}}return{url:"",label:"",type:oJ("",O),autor:""}},r1=(_)=>n(_).url,D0=(_)=>n(_).label,aJ=(_)=>n(_).type,tY=(_,O,D="image")=>Array.isArray(_?.[O])?_[O].map((T)=>n(T,D)).filter((T)=>T.url):[],e1=(_={})=>({firebaseId:GJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:tY(_,"fotos","image"),gifs:tY(_,"gifs","image"),videos:tY(_,"videos","video")},batallaFotosPreferidas:lY(),puntuaciones:xX(),isAnonymousGallery:!0}),C0=(_,O)=>{try{const D=window.localStorage.getItem(_);if(!D)return O;return JSON.parse(D)??O}catch{return O}},R0=(_,O)=>{try{window.localStorage.setItem(_,JSON.stringify(O))}catch{}},J2=(_={})=>{if(_?.isAnonymousGallery||_?.firebaseId===GJ)return"anonimo";return _?.firebaseId||""},X2=(_={})=>{const O=qJ(String(_?.fotos?.[0]||"").trim(),""),D=EJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!O)return!1;return lJ.filter((T)=>T.id!=="perfil").every((T)=>Boolean(String(D?.[T.id]||"").trim()))},Y2=(_={})=>{const O=[],D=qJ(String(_?.fotos?.[0]||"").trim(),""),T=EJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!D)O.push("Perfil");lJ.filter((F)=>F.id!=="perfil").forEach((F)=>{if(!String(T?.[F.id]||"").trim())O.push(F.label)});return O},Z2=(_=null)=>{if(!_)return;const O=window.open("","_blank");if(!O)return;const D=_?.firebaseId||_?.id||"",T=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((M)=>n(M,"image")).filter((M)=>M.url).map((M,G)=>({...M,sourceTag:"fotos",sourceIndex:G})):[],F=T.filter((M)=>M.type==="image"&&M.sourceTag==="fotos"),I=EJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{}),d=qJ(String(_?.fotos?.[0]||_?.foto||"").trim(),""),$J=T.filter((M)=>M.type==="image"&&M.url).reduce((M,G)=>{M[G.url]=G;return M},{}),p=T.length?T.map((M,G)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${M.url}"
                        data-label="${M.label||""}"
                        data-index="${M.sourceIndex}"
                        data-tag="${M.sourceTag}"
                        data-media-type="${M.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${M.url}" alt="Multimedia ${G+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${M.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',v=F.length?F.map((M,G)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${M.url}"
                        data-label="${M.label||""}"
                        data-index="${M.sourceIndex}"
                        data-tag="${M.sourceTag}"
                        data-media-type="${M.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${M.url}" alt="Imagen rota ${G+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${M.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',B=lJ.map((M)=>{const G=M.id==="perfil",x=G?d:I[M.id]||"",K=x?G?{url:x}:$J[x]||{url:x,label:"",sourceIndex:-1}:null,UJ=Boolean(x);return`
                    <div class="multimedia-slot-card ${UJ?"is-assigned":"is-missing"}" data-slot-id="${M.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${M.label}</span>
                            <span class="multimedia-slot-state">${UJ?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${UJ?`<img src="${K.url}" alt="${M.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!G?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${M.id}">DESIGNAR FOTO</button>`:""}
                        </div>
                    </div>
                `}).join("");O.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${_?.nombre||"Personaje"}</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link rel="stylesheet" href="styles.css" />
                        <style>
                            .multimedia-gallery-scroll { overflow: visible; padding-right: 0; }
                            .multimedia-gallery-scroll::-webkit-scrollbar { width: 8px; }
                            .multimedia-gallery-scroll::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.45); border-radius: 99px; }
                            .multimedia-thumb-btn { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
                            .multimedia-thumb-btn:hover { transform: translateY(-2px); border-color: rgba(34,211,238,0.55); box-shadow: 0 0 22px rgba(34,211,238,0.22); }
                            .multimedia-thumb-wrap { position: relative; background: rgba(2,6,23,0.78); height: 170px; display: flex; align-items: center; justify-content: center; }
                            .multimedia-thumb-wrap--broken::after {
                                content: 'ROTA';
                                position: absolute;
                                top: 8px;
                                left: 8px;
                                font-size: 10px;
                                font-weight: 900;
                                letter-spacing: .12em;
                                text-transform: uppercase;
                                color: #fecaca;
                                background: rgba(127,29,29,.82);
                                border: 1px solid rgba(252,165,165,.8);
                                border-radius: 999px;
                                padding: 3px 8px;
                            }
                            .multimedia-thumb-label {
                                position: absolute; right: 8px; bottom: 8px; z-index: 4; max-width: calc(100% - 16px);
                                border-radius: 999px; padding: 4px 10px; font-size: 10px; font-weight: 800; letter-spacing: .12em;
                                text-transform: uppercase; color: #ecfeff; border: 1px solid rgba(34,211,238,.72);
                                background: rgba(2,6,23,.82); backdrop-filter: blur(6px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                            }
                            .multimedia-slots-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
                            .multimedia-slot-card { border-radius: 12px; padding: 10px; border: 1px solid rgba(148,163,184,0.45); background: rgba(2,6,23,0.72); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08); transition: border-color .16s ease, box-shadow .16s ease, transform .16s ease; }
                            .multimedia-slot-card.drop-hover { border-color: rgba(56,189,248,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(56,189,248,0.35), 0 0 22px rgba(34,211,238,0.35); transform: translateY(-1px); }
                            .multimedia-slot-card.drop-active { border-color: rgba(14,165,233,1); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(14,165,233,0.4), 0 0 30px rgba(14,165,233,0.44); transform: translateY(-2px); }
                            .multimedia-slot-card.is-assigned { border-color: rgba(34,197,94,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(34,197,94,0.3); }
                            .multimedia-slot-card.is-missing { border-color: rgba(239,68,68,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(239,68,68,0.24); }
                            .multimedia-slot-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
                            .multimedia-slot-title { font-size: 10px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; color: #f8fafc; }
                            .multimedia-slot-state { font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
                            .multimedia-slot-card.is-assigned .multimedia-slot-state { color: #86efac; }
                            .multimedia-slot-card.is-missing .multimedia-slot-state { color: #fca5a5; }
                            .multimedia-slot-preview { border-radius: 8px; overflow: hidden; aspect-ratio: 4/3; border: 1px dashed rgba(148,163,184,0.45); background: rgba(15,23,42,0.88); display: flex; align-items: center; justify-content: center; }
                            .multimedia-slot-preview img { width: 100%; height: 100%; object-fit: cover; display:block; }
                            .multimedia-slot-empty { color: #fca5a5; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; text-align: center; padding: 0 8px; }
                            .multimedia-slot-card.is-active { border-color: rgba(251,191,36,0.96); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(251,191,36,0.32), 0 0 20px rgba(251,191,36,0.22); }
                            .multimedia-slot-actions { display:grid; gap:6px; margin-top:8px; }
                            .multimedia-slot-assign-btn { width:100%; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:filter .16s ease, transform .16s ease; }
                            .multimedia-slot-assign-btn { border:1px solid rgba(203,213,225,0.9); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); }
                            .multimedia-slot-assign-btn.is-selected { border-color: rgba(74,222,128,0.98); background: linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%); color:#ecfdf5; box-shadow: inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82); filter: brightness(1.24) saturate(1.2); }
                            .multimedia-slot-assign-btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
                        </style>
                    </head>
                    <body class="text-slate-200">
                        <main class="min-h-screen p-4 md:p-8">
                            <section class="gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-6xl mx-auto">
                                <h1 class="font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide">Multimedia</h1>
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${_?.nombre||"Personaje"}</p>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-6 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">Galería</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${p}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${B}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${v}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(D)};
                            const validLabels = ${JSON.stringify(WJ)};
                            const dbRef = window.opener && window.opener.firebase && window.opener.firebase.database ? window.opener.firebase.database() : null;
                            const normalizeLabel = (rawLabel = '') => validLabels.includes(rawLabel) ? rawLabel : '';
                            const brokenCards = new Set();
                            var DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                            var LONG_PRESS_MS = 280;
                            var longPressTimer = null;
                            var touchPayload = null;
                            const isImagePayload = (payload) => String(payload?.mediaType || '').trim() === 'image';
                            const assignToSlot = (payload = {}, slotId = '') => {
                                if (!window.opener || !slotId || !isImagePayload(payload)) return false;
                                const sourceIndex = Number(payload.sourceIndex);
                                if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${D}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                return true;
                            };
                            const syncBrokenEmptyState = () => {
                                const grid = document.getElementById('brokenGalleryGrid');
                                const empty = document.getElementById('brokenGalleryEmpty');
                                if (!grid || !empty) return;
                                const visibleBrokenCount = Array.from(grid.querySelectorAll('[data-broken-card="true"]'))
                                    .filter((card) => card.style.display !== 'none').length;
                                empty.style.display = visibleBrokenCount ? 'none' : 'block';
                            };
                            const saveGalleryItem = async ({ sourceTag = 'fotos', sourceIndex = -1, url = '', label = '' }) => {
                                if (!dbRef || !profileId || sourceIndex < 0) return false;
                                const galleryRef = dbRef.ref(\`perfiles/\${profileId}/galeria/\${sourceTag}\`);
                                const snapshot = await galleryRef.once('value');
                                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                                if (!currentItems[sourceIndex]) return false;
                                const rawItem = currentItems[sourceIndex];
                                const nextItem = typeof rawItem === 'string'
                                    ? { url: String(url || '').trim(), label: normalizeLabel(label), type: 'image', autor: '' }
                                    : { ...rawItem, url: String(url || '').trim(), label: normalizeLabel(label), autor: normalizeGalleryAuthor(rawItem?.autor) };
                                currentItems[sourceIndex] = nextItem;
                                await galleryRef.set(currentItems);
                                return true;
                            };
                            var activeSlotSelectionId = '';
                            const slotCards = Array.from(document.querySelectorAll('.multimedia-slot-card'));
                            const slotAssignButtons = Array.from(document.querySelectorAll('[data-slot-assign]'));
                            const updateSlotCardAssignedState = (slotId = '', assignedUrl = '') => {
                                if (!slotId) return;
                                const card = slotCards.find((slotCard) => slotCard.dataset.slotId === slotId);
                                if (!card) return;
                                const normalizedUrl = String(assignedUrl || '').trim();
                                const isAssigned = Boolean(normalizedUrl);
                                card.classList.toggle('is-assigned', isAssigned);
                                card.classList.toggle('is-missing', !isAssigned);
                                const stateBadge = card.querySelector('.multimedia-slot-state');
                                if (stateBadge) {
                                    stateBadge.textContent = isAssigned ? 'VERDE' : 'ROJO';
                                }
                                const previewContainer = card.querySelector('.multimedia-slot-preview');
                                if (previewContainer) {
                                    previewContainer.innerHTML = isAssigned
                                        ? '<img alt="" loading="lazy" />'
                                        : '<span class="multimedia-slot-empty">Sin foto designada</span>';
                                    if (isAssigned) {
                                        const img = previewContainer.querySelector('img');
                                        if (img) {
                                            img.src = normalizedUrl;
                                            img.alt = slotConfigById[slotId]?.label || 'Foto designada';
                                        }
                                    }
                                }
                            };
                            const setActiveSlotSelection = (slotId = '') => {
                                activeSlotSelectionId = slotId || '';
                                slotCards.forEach((card) => {
                                    const isActive = activeSlotSelectionId && card.dataset.slotId === activeSlotSelectionId;
                                    card.classList.toggle('is-active', Boolean(isActive));
                                });
                                slotAssignButtons.forEach((button) => {
                                    const isSelected = activeSlotSelectionId && button.dataset.slotAssign === activeSlotSelectionId;
                                    button.classList.toggle('is-selected', Boolean(isSelected));
                                });
                            };
                            const slotConfigById = ${JSON.stringify(lJ.reduce((M,G)=>{M[G.id]=G;return M},{}))};
                            const assignBattlePhotoFromGallery = async ({ slotId = '', sourceIndex = -1, mediaType = 'image', cardButton = null }) => {
                                if (!slotId || sourceIndex < 0 || mediaType !== 'image') return false;
                                if (slotId === 'perfil') {
                                    window.alert('El casillero Perfil usa la foto principal del personaje.');
                                    return false;
                                }
                                const slotConfig = slotConfigById[slotId];
                                if (!slotConfig) return false;
                                try {
                                    if (dbRef && profileId) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        await dbRef.ref(\`perfiles/\${profileId}/batallaFotosPreferidas/\${slotId}\`).set(selectedUrl);
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else if (window.opener) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: profileId, slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else {
                                        return false;
                                    }
                                    setActiveSlotSelection('');
                                    return true;
                                } catch (error) {
                                    console.error('No se pudo asignar la imagen del casillero:', error);
                                    window.alert('No se pudo asignar la imagen al casillero.');
                                    return false;
                                }
                            };
                            document.querySelectorAll('[data-slot-assign]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAssign || '';
                                    setActiveSlotSelection(slotId);
                                    
                                });
                            });
                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('dragstart', (event) => {
                                    const payload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    if (!isImagePayload(payload)) return;
                                    event.dataTransfer.effectAllowed = 'copy';
                                    event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                                    event.dataTransfer.setData('text/plain', payload.url || '');
                                });
                                const isBrokenCard = button.dataset.brokenCard === 'true';
                                const img = button.querySelector('img');
                                if (isBrokenCard && img) {
                                    img.addEventListener('error', () => {
                                        button.style.display = '';
                                        brokenCards.add(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                    img.addEventListener('load', () => {
                                        button.style.display = 'none';
                                        brokenCards.delete(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                }
                                button.addEventListener('click', async () => {
                                    const sourceTag = button.dataset.tag || 'fotos';
                                    const sourceIndex = Number(button.dataset.index);
                                    if (activeSlotSelectionId) {
                                        const assigned = await assignBattlePhotoFromGallery({ slotId: activeSlotSelectionId, sourceIndex, mediaType: 'image', cardButton: button });
                                        if (assigned) return;
                                    }
                                    const currentUrl = button.dataset.url || '';
                                    const currentLabel = button.dataset.label || '';
                                    const nextUrl = window.prompt('Nueva URL de la multimedia:', currentUrl);
                                    if (nextUrl === null) return;
                                    const nextLabel = window.prompt('Nueva etiqueta (C, P, B, N, S, E, X):', currentLabel || 'C');
                                    if (nextLabel === null) return;
                                    try {
                                        const saved = await saveGalleryItem({ sourceTag, sourceIndex, url: nextUrl, label: nextLabel });
                                        if (!saved) return;
                                        button.dataset.url = nextUrl.trim();
                                        button.dataset.label = normalizeLabel((nextLabel || '').trim().toUpperCase());
                                        const img = button.querySelector('img');
                                        const badge = button.querySelector('.multimedia-thumb-label');
                                        if (img) img.src = nextUrl.trim();
                                        if (badge) badge.textContent = button.dataset.label || 'SIN ETIQUETA';
                                        if (isBrokenCard) syncBrokenEmptyState();
                                    } catch (error) {
                                        console.error('No se pudo guardar multimedia:', error);
                                        window.alert('No se pudo actualizar esta multimedia.');
                                    }
                                });
                            });
                            document.querySelectorAll('.multimedia-slot-card').forEach((slotCard) => {
                                const slotId = slotCard.dataset.slotId || '';
                                if (!slotId || slotId === 'perfil') return;
                                slotCard.addEventListener('dragover', (event) => {
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    if (!isImagePayload(payload)) return;
                                    event.preventDefault();
                                    event.dataTransfer.dropEffect = 'copy';
                                    slotCard.classList.add('drop-hover');
                                });
                                slotCard.addEventListener('dragleave', () => {
                                    slotCard.classList.remove('drop-hover', 'drop-active');
                                });
                                slotCard.addEventListener('drop', (event) => {
                                    event.preventDefault();
                                    slotCard.classList.remove('drop-hover');
                                    slotCard.classList.add('drop-active');
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    assignToSlot(payload, slotId);
                                    setTimeout(() => slotCard.classList.remove('drop-active'), 160);
                                });
                            });
                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('pointerdown', (event) => {
                                    if (button.dataset.mediaType !== 'image') return;
                                    clearTimeout(longPressTimer);
                                    touchPayload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    longPressTimer = setTimeout(() => {
                                        button.style.outline = '2px solid rgba(34,211,238,0.85)';
                                    }, LONG_PRESS_MS);
                                });
                                button.addEventListener('pointerup', (event) => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    if (!touchPayload) return;
                                    const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.multimedia-slot-card[data-slot-id]');
                                    if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                                        assignToSlot(touchPayload, slotEl.dataset.slotId);
                                    }
                                    touchPayload = null;
                                });
                                button.addEventListener('pointercancel', () => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    touchPayload = null;
                                });
                            });

                        </script>
                    </body>
                </html>
            `);O.document.close()},$2=({isOpen:_=!1,profile:O=null,onClose:D=()=>{}})=>{const[T,F]=V(!0),[I,d]=V(!0);i(()=>{if(!_)return;F(!0);d(!0)},[_,O?.firebaseId]);if(!_||!O)return null;const $J=Array.isArray(O?.galeria?.fotos)?O.galeria.fotos.map((v)=>n(v,"image")).filter((v)=>v.url):[],p=Object.entries(O?.puntuaciones||{}).map(([v,B])=>({label:v,value:Number(B)||0})).sort((v,B)=>B.value-v.value).slice(0,5);return X("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:D,role:"presentation",children:X("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(v)=>v.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[X("button",{type:"button",onClick:D,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),X("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),X("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:O?.nombre||"Personaje"},void 0,!1,void 0,this),X("div",{className:"mt-6 space-y-4",children:[X("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[X("button",{type:"button",onClick:()=>F((v)=>!v),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[X("span",{children:"Galería"},void 0,!1,void 0,this),X("span",{children:T?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),T&&X("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:$J.length?$J.map((v,B)=>X("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:X("img",{src:v.url,alt:`Multimedia ${B+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${v.url}-${B}`,!1,void 0,this)):X("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[X("button",{type:"button",onClick:()=>d((v)=>!v),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[X("span",{children:"5 Principales"},void 0,!1,void 0,this),X("span",{children:I?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),I&&X("div",{className:"px-4 pb-4 space-y-2",children:p.length?p.map((v)=>X("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[X("span",{className:"text-sm text-slate-200 uppercase",children:v.label},void 0,!1,void 0,this),X("strong",{className:"text-cyan-200",children:v.value},void 0,!1,void 0,this)]},v.label,!0,void 0,this)):X("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},B0=async(_="",{timeoutMs:O=12000,retries:D=1}={})=>{const T=String(_||"").trim();if(!T)return!0;const F=()=>new Promise((I)=>{const d=new Image;let $J=!1;const p=(B)=>{if($J)return;$J=!0;d.onload=null;d.onerror=null;I(Boolean(B))},v=window.setTimeout(()=>p(!0),O);d.onload=()=>{clearTimeout(v);const B=Number(d.naturalWidth)>0&&Number(d.naturalHeight)>0;p(!B)};d.onerror=()=>{clearTimeout(v);p(!0)};d.src=T});for(let I=0;I<=D;I+=1)if(!await F())return!1;return!0},A0=(_,O)=>{const D=(O||"").trim().toLowerCase(),T=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((x)=>n(x,"image")).filter((x)=>x.type==="image"&&x.url):[],I=qJ(_?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(D))return I;const $J=(x=[])=>{const K=T.filter((c)=>x.includes(D0(c)));if(!K.length)return"";const UJ=Math.floor(Math.random()*K.length);return K[UJ]?.url||""},p=p1(D),v=_Y(p);if(!v)return I;const M=EJ(_?.batallaFotosPreferidas)[p];if(M){if(T.some((K)=>K.url===M))return M}return $J(v.labels)||I},Q2=(_="")=>l1.test((_||"").trim()),OX="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",oY=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${OX}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,kJ=(_)=>{const O=_?.currentTarget||_?.target;if(!O||O.dataset.fallbackApplied==="true")return;O.dataset.fallbackApplied="true";O.src=OX;O.style.objectFit="contain";O.style.padding="12px";O.style.background="#020617";O.alt="Imagen no disponible"},R2="g2_elite_database_v4",B2="g2_elite_categories_v4",rJ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],aY=[...rJ],rY=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],H2=rY.map((_)=>_.id),WX=(_="")=>{return rY.find((D)=>D.id===_)?.label||"General"},j2=(_="")=>{const O=String(_||"").trim();if(!O)return"";return encodeURIComponent(O.toLowerCase())},q2=(_="")=>{const O=String(_||"").trim();if(!O)return"";try{return decodeURIComponent(O).toLowerCase()}catch{return O.toLowerCase()}},LX=(_,O="GENERAL",D="")=>{const T=String(_||"").trim(),F=String(O||"GENERAL").trim().toUpperCase(),I=j2(D);if(!T)return"";return`${F}::${I||"all"}::${T}`},VJ=(_="")=>String(_||"").trim(),z0=(_="")=>{const O=String(_||"").split("::");if(O.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const D=O.slice(2).join("::");return{scopeId:String(O[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:q2(O[1]||"all")||"all",arenaName:String(D||"").trim()}},xX=()=>rJ.reduce((_,O)=>{_[O]=0;return _},{}),T0=[],eY={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},"Bailarina y Atleta":{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},A2=(_="")=>{const O=String(_||"").toLowerCase();if(O.includes("cantante"))return"crown";if(O.includes("nsfw"))return"torch";if(O.includes("actriz")||O.includes("actor"))return"theater";if(O.includes("modelo"))return"floron";if(O.includes("influencer"))return"sigil";if(O.includes("periodista"))return"quill";if(O.includes("bailarina"))return"floron";if(O.includes("atleta"))return"shield";return"shield"},_2=(_="")=>{const O=String(_||"").toLowerCase();if(O.includes("cantante"))return"\uD83C\uDFA4";if(O.includes("nsfw"))return"\uD83D\uDD25";if(O.includes("actriz")||O.includes("actor"))return"\uD83C\uDFAC";if(O.includes("modelo"))return"\uD83D\uDC60";if(O.includes("influencer"))return"\uD83D\uDCF1";if(O.includes("periodista"))return"\uD83D\uDC53";if(O.includes("bailarina"))return"\uD83D\uDC83";if(O.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},PX=(_="")=>{const O=String(_||"").trim(),D=eY[O]||eY.Otro,T=String(D?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),F=String(D?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:T,glowColor:F}},z2=({variant:_="sigil",size:O=18,className:D="",tint:T="currentColor"})=>{const F={width:O,height:O,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:D};if(_==="crown")return X("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),X("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="shield")return X("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),X("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="floron")return X("svg",{...F,stroke:T,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M12 4v16"},void 0,!1,void 0,this),X("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),X("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),X("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="quill")return X("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),X("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="torch")return X("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),X("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),X("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),X("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="theater")return X("svg",{...F,stroke:T,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),X("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),X("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return X("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),X("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},l=({name:_,size:O=20,className:D=""})=>{return X("i",{"data-lucide":_.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:O,height:O},className:`inline-block ${D}`},void 0,!1,void 0,this)},LY=({targetWindow:_,profileName:O,profession:D,photos:T,editingId:F,battlePhotoPrefs:I={},profilePhotoUrl:d=""})=>{if(!_||_.closed)return;const $J=EJ(I),p=qJ(String(d||"").trim(),""),v=(T||[]).map((B,M)=>{const G=n(B);return{...G,sourceTag:B?.sourceTag||(G.type==="video"?"videos":"fotos"),sourceIndex:typeof B?.sourceIndex==="number"?B.sourceIndex:M}}).filter((B)=>B.url);_.document.open();_.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${O}</title>
                <style>
                    body {
                        background:
                            radial-gradient(circle at 20% 18%, rgba(255, 208, 140, 0.14), transparent 32%),
                            radial-gradient(circle at 82% 8%, rgba(184, 115, 51, 0.17), transparent 28%),
                            linear-gradient(180deg, #120f0a 0%, #1d160f 45%, #271b12 100%);
                        color: #f7ebd2;
                        font-family: 'Cinzel', 'Plus Jakarta Sans', serif;
                        padding: 40px;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .btn-critical-plate {
                        position: fixed;
                        top: 20px;
                        right: 30px;
                        padding: 10px 20px;
                        color: #ff3131;
                        font-weight: 800;
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        background: #020617;
                        border: 2px solid #ff3131;
                        border-radius: 12px;
                        cursor: pointer;
                        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 0 0 2px rgba(255, 49, 49, 0.22), 4px 4px 0px #660000;
                        transition: all 0.3s ease;
                        text-shadow: 0 0 8px #ff3131;
                        z-index: 999;
                    }
                    .btn-critical-plate:hover {
                        background: #ff3131;
                        color: white;
                        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 0 20px rgba(255,49,49,0.5);
                        transform: translateY(-1px);
                    }
                    h1 { font-size: 2.5rem; font-weight: 800; margin: 0; color: #fff; text-align: center; }
                    .gallery-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 16px;
                        width: 100%;
                        margin-bottom: 22px;
                        flex-wrap: wrap;
                        padding: 14px;
                        border-radius: 24px;
                        border: 1px solid rgba(201, 162, 98, 0.35);
                        background:
                            linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0) 38%),
                            radial-gradient(circle at 8% 0%, rgba(255, 214, 153, 0.18), transparent 34%),
                            rgba(20, 14, 8, 0.78);
                        box-shadow:
                            inset 0 1px 0 rgba(255, 247, 230, 0.24),
                            inset 0 -2px 0 rgba(2, 6, 23, 0.48),
                            0 18px 40px rgba(0, 0, 0, 0.36);
                    }
                    .gallery-header-actions {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        gap: 12px;
                        flex-wrap: wrap;
                    }
                    .gallery-metal-btn {
                        position: relative;
                        min-height: 44px;
                        padding: 11px 18px;
                        border-radius: 999px;
                        border: 1px solid rgba(255, 255, 255, 0.36);
                        color: #f8fafc;
                        font-size: 11px;
                        font-weight: 950;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                        cursor: pointer;
                        overflow: hidden;
                        transform: translateZ(0);
                        transition: transform 160ms ease, filter 180ms ease, box-shadow 180ms ease;
                        text-shadow: 0 1px 0 rgba(2, 6, 23, 0.72), 0 0 10px rgba(255, 255, 255, 0.26);
                        box-shadow:
                            inset 0 2px 0 rgba(255, 255, 255, 0.45),
                            inset 0 -3px 0 rgba(2, 6, 23, 0.5),
                            inset 0 0 0 1px rgba(255, 255, 255, 0.14),
                            0 10px 18px rgba(2, 6, 23, 0.42),
                            0 0 22px var(--gallery-btn-glow);
                    }
                    .gallery-metal-btn::before {
                        content: '';
                        position: absolute;
                        inset: 1px;
                        border-radius: inherit;
                        pointer-events: none;
                        background:
                            linear-gradient(135deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 20%, transparent 38%, rgba(2, 6, 23, 0.22) 72%, rgba(2, 6, 23, 0.48) 100%),
                            repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.09) 0 1px, transparent 1px 6px);
                        mix-blend-mode: screen;
                    }
                    .gallery-metal-btn span {
                        position: relative;
                        z-index: 1;
                    }
                    .gallery-metal-btn:hover {
                        transform: translateY(-2px);
                        filter: brightness(1.14) saturate(1.12);
                    }
                    .gallery-metal-btn:active {
                        transform: translateY(1px) scale(0.98);
                    }
                    .gallery-metal-btn--url {
                        --gallery-btn-glow: rgba(34, 197, 94, 0.5);
                        background:
                            linear-gradient(160deg, #bbf7d0 0%, #22c55e 18%, #15803d 48%, #052e16 100%);
                        border-color: rgba(134, 239, 172, 0.82);
                    }
                    .gallery-metal-btn--file {
                        --gallery-btn-glow: rgba(59, 130, 246, 0.55);
                        background:
                            linear-gradient(160deg, #bfdbfe 0%, #38bdf8 18%, #2563eb 48%, #172554 100%);
                        border-color: rgba(147, 197, 253, 0.84);
                    }
                    @media (max-width: 640px) {
                        .gallery-header { justify-content: center; text-align: center; }
                        .gallery-header-actions { width: 100%; justify-content: center; }
                        .gallery-metal-btn { flex: 1 1 150px; }
                    }
                    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; width: 100%; }
                    .fullscreen-viewer {
                        display: none;
                        position: fixed;
                        inset: 0;
                        z-index: 2000;
                        background:
                            radial-gradient(circle at 50% 20%, rgba(255, 214, 153, 0.08), transparent 42%),
                            rgba(16, 10, 4, 0.95);
                        backdrop-filter: blur(6px);
                    }
                    .fullscreen-viewer.open {
                        display: flex;
                    }
                    .viewer-close {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        right: calc(env(safe-area-inset-right, 0px) + 16px);
                        z-index: 2100;
                        background: rgba(15, 23, 42, 0.9);
                        color: #f87171;
                        border: 1px solid rgba(248, 113, 113, 0.78);
                        border-radius: 999px;
                        width: 48px;
                        height: 48px;
                        cursor: pointer;
                        font-size: 30px;
                        font-weight: 900;
                        line-height: 1;
                        font-weight: 700;
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.35),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        text-shadow: 0 0 6px rgba(0, 0, 0, 0.75);
                        transition: transform 0.14s ease, opacity 0.14s ease, box-shadow 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-close:hover {
                        transform: scale(1.06);
                        filter: brightness(1.08);
                        box-shadow:
                            0 8px 18px rgba(0, 0, 0, 0.62),
                            inset 0 1px 0 rgba(255, 244, 214, 0.42),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.62);
                    }
                    .viewer-close:focus-visible,
                    .viewer-nav:focus-visible {
                        outline: 3px solid #ffe0a8;
                        outline-offset: 3px;
                    }
                    .viewer-close:active,
                    .viewer-nav:active,
                    .viewer-control-btn:active {
                        transform: scale(0.95);
                        opacity: 0.85;
                    }
                    .viewer-stage {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 32px 24px 112px;
                        box-sizing: border-box;
                    }
                    .viewer-slide {
                        position: absolute;
                        inset: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        pointer-events: none;
                        transform: translate3d(0, 12px, 0) scale(0.992);
                        transition: opacity 260ms ease, transform 300ms ease, visibility 0s linear 300ms;
                        will-change: opacity, transform;
                    }
                    .viewer-slide.active {
                        opacity: 1;
                        visibility: visible;
                        pointer-events: auto;
                        transform: translate3d(0, 0, 0) scale(1);
                        transition: opacity 240ms ease, transform 260ms ease, visibility 0s linear 0s;
                    }
                    .viewer-slide img {
                        max-width: min(92vw, 1400px);
                        max-height: calc(100vh - 64px);
                        width: auto;
                        height: auto;
                        object-fit: contain;
                        border-radius: 20px;
                        border: 3px solid #c8a167;
                        box-shadow:
                            0 24px 52px rgba(0, 0, 0, 0.64),
                            0 0 0 3px rgba(83, 55, 27, 0.8),
                            inset 0 0 24px rgba(255, 223, 171, 0.12);
                    }
                    .viewer-nav {
                        position: relative;
                        z-index: 2100;
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        border: 2px solid #d8b374;
                        background: linear-gradient(180deg, #624021 0%, #3a2512 100%);
                        color: #fff7e6;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 900;
                        line-height: 1;
                        text-shadow: 0 0 5px rgba(0, 0, 0, 0.72);
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.34),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        transition: transform 0.14s ease, opacity 0.14s ease, border-color 0.2s ease, color 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-nav:hover {
                        transform: scale(1.06);
                        border-color: #f0c883;
                        color: #fff7e6;
                        filter: brightness(1.1);
                    }
                    .viewer-nav[disabled] {
                        opacity: 0.62;
                        cursor: default;
                        filter: grayscale(0.28);
                    }
                    .viewer-nav[disabled]:hover {
                        transform: none;
                        border-color: #d8b374;
                        color: #fff7e6;
                        filter: grayscale(0.28);
                    }
                    .viewer-hint {
                        position: fixed;
                        left: 50%;
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 104px);
                        transform: translateX(-50%);
                        z-index: 2100;
                        padding: 10px 16px;
                        border-radius: 999px;
                        background: rgba(43, 29, 16, 0.72);
                        color: #f6e7ca;
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        font-size: 12px;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        pointer-events: none;
                    }
                    .viewer-controls {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        left: calc(env(safe-area-inset-left, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        gap: 10px;
                        padding: 8px 10px;
                        border-radius: 999px;
                        background: rgba(10, 24, 38, 0.35);
                        border: 1px solid rgba(56, 189, 248, 0.28);
                    }
                    .viewer-bottom-bar {
                        position: fixed;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding: 10px 12px;
                        border-radius: 999px;
                        background: rgba(25, 16, 8, 0.85);
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
                    }
                    .viewer-control-btn {
                        border: 1px solid rgba(56, 189, 248, 0.5);
                        background: rgba(8, 47, 73, 0.52);
                        color: #bae6fd;
                        border-radius: 999px;
                        padding: 8px 14px;
                        min-width: 44px;
                        min-height: 44px;
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        font-weight: 900;
                        cursor: pointer;
                    }
                    .viewer-control-btn.random-active {
                        border-color: rgba(232, 121, 249, 0.85);
                        color: #f5d0fe;
                        background: rgba(192, 38, 211, 0.35);
                    }
                    @media (max-width: 640px) {
                        .viewer-stage {
                            padding: calc(env(safe-area-inset-top, 0px) + 18px) 16px calc(env(safe-area-inset-bottom, 0px) + 132px);
                        }
                        .viewer-close {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            right: calc(env(safe-area-inset-right, 0px) + 12px);
                            width: 48px;
                            height: 48px;
                        }
                        .viewer-nav {
                            width: 48px;
                            height: 48px;
                            font-size: 22px;
                        }
                        .viewer-hint {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
                            padding: 8px 12px;
                            font-size: 10px;
                            max-width: calc(100vw - 120px);
                            text-align: center;
                        }
                        .viewer-controls {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            left: calc(env(safe-area-inset-left, 0px) + 12px);
                            gap: 8px;
                            padding: 7px 9px;
                        }
                        .viewer-control-btn {
                            padding: 9px 12px;
                            font-size: 9px;
                            letter-spacing: 0.16em;
                            min-width: 46px;
                            min-height: 46px;
                        }
                        .viewer-bottom-bar {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
                            gap: 8px;
                            padding: 8px 10px;
                            width: min(94vw, 430px);
                            justify-content: space-between;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="gallery-header">
                    <h1>Galería de ${O}</h1>
                    <div class="gallery-header-actions" aria-label="Agregar contenido a la galería">
                        <button type="button" class="gallery-metal-btn gallery-metal-btn--url" onclick="addGalleryUrlFromHeader()">
                            <span>Agregar URL</span>
                        </button>
                        <button type="button" class="gallery-metal-btn gallery-metal-btn--file" onclick="openGalleryFilePicker()">
                            <span>Agregar Archivo</span>
                        </button>
                        <input id="galleryHeaderFileInput" type="file" accept="image/*,video/*" style="display:none" onchange="addGalleryFileFromHeader(event)" />
                    </div>
                </div>

                <details open style="width:100%; margin-bottom: 20px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.28); background: rgba(2,6,23,0.45);">
                    <summary style="cursor:pointer; list-style:none; padding: 12px 14px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 900; color: #f8fafc;">
                        5 Principales
                    </summary>
                    <div style="padding: 0 14px 14px; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px;">
                    ${lJ.map((B)=>{const M=B.id==="perfil",G=M?p:$J[B.id]||"",x=Boolean(G),K=!M;return`
                            <div class="gallery-slot-card" data-slot-id="${B.id}" style="border:1px solid ${x?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${x?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${x?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${x?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${B.label}</div>
                                <div style="font-size:11px; color:${x?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${x?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${x?`<img src="${G}" alt="Vista previa ${B.label}" onerror="${oY}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    ${K?`<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${B.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${B.id}');"
                                        style="width:100%; border:1px solid rgba(203,213,225,0.92); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); transition: box-shadow 180ms ease, border-color 180ms ease, filter 180ms ease, background 180ms ease;"
                                    >
                                        Designar de galería
                                    </button>`:""}
                                </div>
                            </div>
                        `}).join("")}
                    </div>
                </details>

                <div class="grid" id="galleryGrid">
                    ${v.length?v.map((B,M)=>{const G=r1(B),x=D0(B),K=tJ(x),UJ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},c=UJ[D?.toUpperCase()]||UJ.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${M}"
                            data-source-index="${B.sourceIndex}"
                            data-media-type="${aJ(B)}"
                            data-url="${G}"
                            data-compatible-slots="${x}"
                            draggable="${aJ(B)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${c.color};
                                box-shadow: 0 0 15px ${c.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${aJ(B)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${c.color}, inset 0 0 15px ${c.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${c.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${B.sourceIndex}, mediaType: '${aJ(B)}', id: '${F}'}, '*');"
                            style="
                                position: absolute;
                                top: 5px;
                                right: 5px;
                                z-index: 20;
                                background: #ef4444;
                                color: white;
                                border: none;
                                width: 22px;
                                height: 22px;
                                border-radius: 50%;
                                cursor: pointer;
                                font-weight: bold;
                                font-size: 12px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
                            "
                            aria-label="Eliminar elemento de galería"
                            type="button"
                        >✕</button>
                        ${aJ(B)==="video"?(()=>{const TJ=_X(G);if(TJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${TJ.provider.toUpperCase()}</div></div>`;return`<video src="${G}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${G}" alt="Imagen de la galería" onerror="${oY}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${aJ(B)==="video"?"VIDEO":"IMG"}</div>
                        ${x?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${K.bg}; border: 1px solid ${K.border}; color: ${K.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${K.glow}, 0 0 24px ${K.glow}; text-shadow: 0 0 10px ${K.glow}; backdrop-filter: blur(8px);">${x}</div>`:""}
                        ${B.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${x?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${B.autor}</div>`:""}
                        </div>
                    `}).join(""):'<p style="text-align:center; grid-column: 1/-1; color: #64748b;">No hay archivos cargados.</p>'}
                </div>

                <div id="fullscreenViewer" class="fullscreen-viewer">
                    <button class="viewer-close" onclick="closeFullscreenViewer()" aria-label="Cerrar visor">✕</button>
                    <div class="viewer-bottom-bar">
                        <button id="viewerRandomToggle" class="viewer-control-btn" type="button" onclick="toggleViewerRandom(event)">Random Off</button>
                        <button id="viewerPlayToggle" class="viewer-control-btn viewer-control-btn--center" type="button" onclick="toggleViewerAutoplay(event)">Play</button>
                        <button class="viewer-nav next" id="viewerNext" onclick="showNextViewerPhoto(event)" aria-label="Foto siguiente">→</button>
                    </div>
                    <div class="viewer-hint">Usá ← → para cambiar y Escape para salir</div>
                    <div class="viewer-stage" id="viewerStage">
                        ${v.map((B,M)=>{const G=aJ(B),x=_X(B.url);return`
                            <div class="viewer-slide" id="viewer-slide-${M}">
                                ${G==="video"?x?`<iframe src="${x.src}" title="${x.title} ${M+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${B.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${B.url}" alt="Vista completa ${M+1}" onerror="${oY}" />`}
                            </div>`}).join("")}
                    </div>
                </div>

                <script>
                    var viewer = document.getElementById('fullscreenViewer');
                    var viewerStage = document.getElementById('viewerStage');
                    var galleryGrid = document.getElementById('galleryGrid');
                    var viewerSlides = Array.from(document.querySelectorAll('.viewer-slide'));
                    var viewerNextButton = document.getElementById('viewerNext');
                    var viewerPlayToggleButton = document.getElementById('viewerPlayToggle');
                    var viewerRandomToggleButton = document.getElementById('viewerRandomToggle');
                    var VIEWER_IMAGE_TIMEOUT_MS = 7000;
                    var VIEWER_VIDEO_FALLBACK_TIMEOUT_MS = 30000;
                    var VIEWER_RETRY_DELAY_MS = 900;
                    var VIEWER_PRELOAD_RADIUS = 1;
                    var VIEWER_STATES = Object.freeze({
                        IDLE: 'idle',
                        SHOWING_IMAGE: 'showing-image',
                        PLAYING_VIDEO: 'playing-video',
                        TRANSITIONING: 'transitioning'
                    });
                    var currentViewerIndex = 0;
                    var viewerAutoplay = false;
                    var viewerRandom = false;
                    var viewerAutoplayTimeout = null;
                    var viewerState = VIEWER_STATES.IDLE;
                    var viewerTransitionToken = 0;
                    var viewerRecoveryInProgress = false;
                    var activeSlotSelectionId = '';
                    var DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                    var LONG_PRESS_MS = 280;
                    var longPressTimer = null;
                    var touchPayload = null;
                    var SWIPE_DISTANCE_THRESHOLD = 72;
                    var SWIPE_VELOCITY_THRESHOLD = 0.35;
                    var SWIPE_FEEDBACK_MAX_TRANSLATE = 52;
                    var SWIPE_VERTICAL_LOCK_RATIO = 1.2;
                    var viewerSwipeState = {
                        active: false,
                        pointerId: null,
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        startTime: 0,
                        isHorizontal: false,
                        isVertical: false,
                        blockedByMediaControl: false
                    };
                    var galleryProfileId = '${F}';
                    var galleryHeaderLabels = ${JSON.stringify(WJ)};

                    function detectHeaderGalleryMediaType(value) {
                        var normalizedValue = String(value || '').trim().toLowerCase();
                        var urlWithoutQuery = normalizedValue.split('?')[0].split('#')[0];
                        var videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.m4v'];
                        var isVideoFile = videoExtensions.some(function(extension) {
                            return urlWithoutQuery.endsWith(extension);
                        });
                        var isVideoProvider = normalizedValue.indexOf('youtube.com') !== -1
                            || normalizedValue.indexOf('youtu.be') !== -1
                            || normalizedValue.indexOf('vimeo.com') !== -1;
                        return (isVideoFile || isVideoProvider) ? 'video' : 'image';
                    }

                    function askGalleryHeaderLabel() {
                        var label = window.prompt('Etiqueta opcional (' + galleryHeaderLabels.join(', ') + '):', '');
                        if (label === null) return '';
                        label = String(label || '').trim().toUpperCase();
                        if (!label) return '';
                        if (galleryHeaderLabels.indexOf(label) === -1) {
                            window.alert('Etiqueta no válida. Usá: ' + galleryHeaderLabels.join(', '));
                            return '';
                        }
                        return label;
                    }

                    function addGalleryUrlFromHeader() {
                        var url = window.prompt('Pegá la URL de la imagen o video:');
                        url = String(url || '').trim();
                        if (!url) return;
                        window.opener.postMessage({
                            type: 'ADD_IMAGE',
                            url: url,
                            id: galleryProfileId,
                            label: askGalleryHeaderLabel(),
                            mediaType: detectHeaderGalleryMediaType(url)
                        }, '*');
                    }

                    function openGalleryFilePicker() {
                        var input = document.getElementById('galleryHeaderFileInput');
                        if (input) input.click();
                    }

                    async function addGalleryFileFromHeader(event) {
                        var input = event && event.target;
                        var file = input && input.files && input.files[0];
                        if (!file) return;
                        var fileButton = document.querySelector('.gallery-metal-btn--file span');
                        var previousText = fileButton ? fileButton.textContent : '';
                        try {
                            if (!window.opener || typeof window.opener.uploadFileToFirebaseStorage !== 'function') {
                                window.alert('No se pudo conectar con el cargador de archivos. Volvé a abrir la galería e intentá nuevamente.');
                                return;
                            }
                            if (fileButton) fileButton.textContent = 'Subiendo...';
                            var mediaType = String(file.type || '').toLowerCase().indexOf('video/') === 0 ? 'video' : 'image';
                            var folderId = (galleryProfileId || 'anonimo').replace(/[^a-zA-Z0-9_-]/g, '');
                            var uploadedUrl = await window.opener.uploadFileToFirebaseStorage(file, 'galeria/' + (folderId || 'anonimo'));
                            window.opener.postMessage({
                                type: 'ADD_IMAGE',
                                url: uploadedUrl,
                                id: galleryProfileId,
                                label: askGalleryHeaderLabel(),
                                mediaType: mediaType
                            }, '*');
                        } catch (error) {
                            console.error(error);
                            window.alert(error && error.message ? error.message : 'No se pudo subir el archivo.');
                        } finally {
                            if (fileButton) fileButton.textContent = previousText || 'Agregar Archivo';
                            if (input) input.value = '';
                        }
                    }

                    function updateSlotGalleryButtons() {
                        const buttons = document.querySelectorAll('.slot-gallery-select-btn');
                        buttons.forEach((button) => {
                            const buttonSlotId = button.getAttribute('data-slot-id') || '';
                            const isActive = Boolean(activeSlotSelectionId) && buttonSlotId === activeSlotSelectionId;
                            if (isActive) {
                                button.style.borderColor = 'rgba(74,222,128,0.98)';
                                button.style.background = 'linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%)';
                                button.style.color = '#ecfdf5';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82)';
                                button.style.filter = 'brightness(1.24) saturate(1.2)';
                            } else {
                                button.style.borderColor = 'rgba(203,213,225,0.92)';
                                button.style.background = 'linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%)';
                                button.style.color = '#f8fafc';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45)';
                                button.style.filter = 'brightness(1) saturate(1)';
                            }
                        });
                    }

                    function selectSlotFromGallery(slotId) {
                        activeSlotSelectionId = slotId || '';
                        updateSlotGalleryButtons();
                    }

                    function isImagePayload(payload = {}) {
                        return String(payload.mediaType || '').trim() === 'image';
                    }

                    function assignToSlot(payload = {}, slotId = '') {
                        if (!slotId || !window.opener || !isImagePayload(payload)) return false;
                        const sourceIndex = Number(payload.sourceIndex);
                        if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${F}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
                        activeSlotSelectionId = '';
                        updateSlotGalleryButtons();
                        return true;
                    }

                    function tryAssignGalleryCardToActiveSlot(card) {
                        if (!card || !activeSlotSelectionId) return false;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        return assignToSlot(payload, activeSlotSelectionId);
                    }

                    galleryGrid?.addEventListener('click', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const assigned = tryAssignGalleryCardToActiveSlot(card);
                        if (assigned) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            event.stopPropagation();
                            return;
                        }
                    });
                    galleryGrid?.addEventListener('dragstart', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        if (!isImagePayload(payload)) return;
                        event.dataTransfer.effectAllowed = 'copy';
                        event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                        event.dataTransfer.setData('text/plain', payload.url || '');
                    });
                    galleryGrid?.addEventListener('pointerdown', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card || card.dataset.mediaType !== 'image') return;
                        clearTimeout(longPressTimer);
                        touchPayload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        longPressTimer = setTimeout(() => {
                            card.classList.add('ring-2', 'ring-cyan-300');
                        }, LONG_PRESS_MS);
                    });
                    galleryGrid?.addEventListener('pointerup', (event) => {
                        clearTimeout(longPressTimer);
                        const card = event.target.closest('.gallery-card');
                        if (card) card.classList.remove('ring-2', 'ring-cyan-300');
                        if (!touchPayload) return;
                        const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.gallery-slot-card[data-slot-id]');
                        if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                            assignToSlot(touchPayload, slotEl.dataset.slotId);
                        }
                        touchPayload = null;
                    });
                    galleryGrid?.addEventListener('pointercancel', () => {
                        clearTimeout(longPressTimer);
                        touchPayload = null;
                    });
                    document.querySelectorAll('.gallery-slot-card').forEach((slotCard) => {
                        const slotId = slotCard.dataset.slotId || '';
                        if (!slotId || slotId === 'perfil') return;
                        slotCard.addEventListener('dragover', (event) => {
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            if (!isImagePayload(payload)) return;
                            event.preventDefault();
                            slotCard.style.filter = 'brightness(1.1)';
                            slotCard.style.outline = '2px solid rgba(34,211,238,0.8)';
                        });
                        slotCard.addEventListener('dragleave', () => {
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                        });
                        slotCard.addEventListener('drop', (event) => {
                            event.preventDefault();
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            assignToSlot(payload, slotId);
                        });
                    });

                    function getNextViewerIndex() {
                        if (viewerSlides.length <= 1) return 0;
                        if (!viewerRandom) return (currentViewerIndex + 1) % viewerSlides.length;
                        const candidates = viewerSlides.map((_, idx) => idx).filter((idx) => idx !== currentViewerIndex);
                        return candidates[Math.floor(Math.random() * candidates.length)];
                    }

                    function clearViewerAutoplayTimer() {
                        if (viewerAutoplayTimeout) {
                            clearTimeout(viewerAutoplayTimeout);
                            viewerAutoplayTimeout = null;
                        }
                    }

                    function setViewerAutoplayState(nextState) {
                        viewerAutoplay = !!nextState;
                        if (viewerPlayToggleButton) {
                            viewerPlayToggleButton.textContent = viewerAutoplay ? 'Pause' : 'Play';
                        }
                        scheduleViewerAutoplay();
                    }

                    function setViewerRandomState(nextState) {
                        viewerRandom = !!nextState;
                        if (viewerRandomToggleButton) {
                            viewerRandomToggleButton.textContent = viewerRandom ? 'Random On' : 'Random Off';
                            viewerRandomToggleButton.classList.toggle('random-active', viewerRandom);
                        }
                    }

                    function preloadViewerAround(index) {
                        if (!viewerSlides.length) return;
                        for (let offset = -VIEWER_PRELOAD_RADIUS; offset <= VIEWER_PRELOAD_RADIUS; offset += 1) {
                            const targetIndex = (index + offset + viewerSlides.length) % viewerSlides.length;
                            const slide = viewerSlides[targetIndex];
                            const nearVideo = slide ? slide.querySelector('video') : null;
                            if (nearVideo && nearVideo.preload !== 'auto') {
                                nearVideo.preload = 'auto';
                                nearVideo.load();
                            }
                        }
                    }

                    function pauseAndResetInactiveVideos(activeIndex) {
                        viewerSlides.forEach((slide, slideIndex) => {
                            if (slideIndex === activeIndex) return;
                            const video = slide.querySelector('video');
                            if (!video) return;
                            video.pause();
                            if (!video.dataset.manuallyPaused) {
                                video.currentTime = 0;
                            }
                        });
                    }

                    function recoverViewerPlayback(reason = 'unknown') {
                        if (viewerRecoveryInProgress) return;
                        viewerRecoveryInProgress = true;
                        setTimeout(() => {
                            viewerRecoveryInProgress = false;
                            if (viewerSlides.length > 1 && viewer.classList.contains('open')) {
                                renderViewerSlide(getNextViewerIndex());
                            } else {
                                clearViewerAutoplayTimer();
                                viewerState = VIEWER_STATES.IDLE;
                            }
                        }, VIEWER_RETRY_DELAY_MS);
                    }

                    function scheduleViewerAutoplay() {
                        clearViewerAutoplayTimer();
                        if (!viewerAutoplay || !viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        if (viewerState === VIEWER_STATES.TRANSITIONING) return;
                        if (viewerState === VIEWER_STATES.PLAYING_VIDEO) {
                            viewerAutoplayTimeout = setTimeout(() => {
                                recoverViewerPlayback('video-timeout');
                            }, VIEWER_VIDEO_FALLBACK_TIMEOUT_MS);
                            return;
                        }
                        viewerAutoplayTimeout = setTimeout(function() {
                            renderViewerSlide(getNextViewerIndex());
                        }, VIEWER_IMAGE_TIMEOUT_MS);
                    }

                    function syncViewerButtons() {
                        const disableNavigation = viewerSlides.length <= 1;
                        if (viewerNextButton) viewerNextButton.disabled = disableNavigation;
                    }

                    function renderViewerSlide(index) {
                        if (!viewerSlides.length) return;
                        const renderToken = ++viewerTransitionToken;
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        currentViewerIndex = Math.max(0, Math.min(index, viewerSlides.length - 1));
                        pauseAndResetInactiveVideos(currentViewerIndex);
                        viewerSlides.forEach(function(slide, slideIndex) {
                            slide.classList.toggle('active', slideIndex === currentViewerIndex);
                        });
                        const activeSlide = viewerSlides[currentViewerIndex];
                        const activeImage = activeSlide ? activeSlide.querySelector('img') : null;
                        const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
                        preloadViewerAround(currentViewerIndex);
                        if (activeVideo) {
                            activeVideo.onpause = function() {
                                if (!viewerAutoplay) activeVideo.dataset.manuallyPaused = '1';
                            };
                            activeVideo.onplay = function() {
                                activeVideo.dataset.manuallyPaused = '';
                            };
                            if (viewerAutoplay) {
                                if (!activeVideo.dataset.manuallyPaused) {
                                    activeVideo.currentTime = 0;
                                }
                                activeVideo.play().catch(function() {
                                    recoverViewerPlayback('play-error');
                                });
                            }
                            viewerState = VIEWER_STATES.PLAYING_VIDEO;
                        }
                        if (activeImage) {
                            activeImage.onerror = function() {
                                recoverViewerPlayback('image-error');
                            };
                            viewerState = VIEWER_STATES.SHOWING_IMAGE;
                        }
                        if (activeVideo) {
                            activeVideo.onerror = function() {
                                recoverViewerPlayback('video-error');
                            };
                            activeVideo.onended = function() {
                                if (viewerAutoplay && viewerSlides.length > 1) {
                                    renderViewerSlide(getNextViewerIndex());
                                }
                            };
                        }
                        requestAnimationFrame(() => {
                            if (renderToken !== viewerTransitionToken) return;
                            if (!activeVideo && !activeImage) viewerState = VIEWER_STATES.IDLE;
                            scheduleViewerAutoplay();
                        });
                        syncViewerButtons();
                    }

                    function resetViewerStageTransform(withTransition = false) {
                        if (!viewerStage) return;
                        viewerStage.style.transition = withTransition ? 'transform 160ms ease-out' : '';
                        viewerStage.style.transform = 'translateX(0px)';
                        if (withTransition) {
                            window.setTimeout(function() {
                                if (viewerStage) viewerStage.style.transition = '';
                            }, 180);
                        }
                    }

                    function updateViewerSwipeFeedback(deltaX) {
                        if (!viewerStage) return;
                        const clampedDelta = Math.max(-SWIPE_FEEDBACK_MAX_TRANSLATE, Math.min(SWIPE_FEEDBACK_MAX_TRANSLATE, deltaX * 0.28));
                        viewerStage.style.transition = '';
                        viewerStage.style.transform = 'translateX(' + clampedDelta + 'px)';
                    }

                    function targetHasDirectMediaControls(target) {
                        if (!target || typeof target.closest !== 'function') return false;
                        return Boolean(target.closest('iframe, video'));
                    }

                    function onViewerStagePointerDown(event) {
                        if (!viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        const blockedByMediaControl = targetHasDirectMediaControls(event.target);
                        viewerSwipeState = {
                            active: true,
                            pointerId: event.pointerId,
                            startX: event.clientX,
                            startY: event.clientY,
                            currentX: event.clientX,
                            startTime: performance.now(),
                            isHorizontal: false,
                            isVertical: false,
                            blockedByMediaControl
                        };
                        if (blockedByMediaControl) return;
                        if (viewerStage?.setPointerCapture) {
                            try { viewerStage.setPointerCapture(event.pointerId); } catch {}
                        }
                    }

                    function onViewerStagePointerMove(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId || viewerSwipeState.blockedByMediaControl) return;
                        const deltaX = event.clientX - viewerSwipeState.startX;
                        const deltaY = event.clientY - viewerSwipeState.startY;
                        viewerSwipeState.currentX = event.clientX;

                        if (!viewerSwipeState.isHorizontal && !viewerSwipeState.isVertical) {
                            if (Math.abs(deltaY) > Math.abs(deltaX) * SWIPE_VERTICAL_LOCK_RATIO) {
                                viewerSwipeState.isVertical = true;
                                resetViewerStageTransform(false);
                                return;
                            }
                            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                                viewerSwipeState.isHorizontal = true;
                            }
                        }

                        if (viewerSwipeState.isHorizontal) {
                            event.preventDefault();
                            updateViewerSwipeFeedback(deltaX);
                        }
                    }

                    function onViewerStagePointerEnd(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId) return;
                        const elapsedMs = Math.max(1, performance.now() - viewerSwipeState.startTime);
                        const deltaX = viewerSwipeState.currentX - viewerSwipeState.startX;
                        const velocityX = Math.abs(deltaX) / elapsedMs;
                        const shouldNavigate = !viewerSwipeState.blockedByMediaControl
                            && viewerSwipeState.isHorizontal
                            && !viewerSwipeState.isVertical
                            && (Math.abs(deltaX) >= SWIPE_DISTANCE_THRESHOLD || velocityX >= SWIPE_VELOCITY_THRESHOLD);

                        resetViewerStageTransform(true);
                        if (shouldNavigate) {
                            if (deltaX < 0) showNextViewerPhoto();
                            else showPreviousViewerPhoto();
                        }

                        if (viewerStage?.releasePointerCapture) {
                            try { viewerStage.releasePointerCapture(event.pointerId); } catch {}
                        }
                        viewerSwipeState.active = false;
                    }

                    function openFullscreenViewer(index) {
                        if (!viewerSlides.length) return;
                        const parsedIndex = Number(index);
                        if (!Number.isInteger(parsedIndex) || parsedIndex < 0 || parsedIndex >= viewerSlides.length) return;
                        viewer.classList.add('open');
                        document.body.style.overflow = 'hidden';
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        renderViewerSlide(parsedIndex);
                    }
                    function closeFullscreenViewer() {
                        viewer.classList.remove('open');
                        document.body.style.overflow = '';
                        clearViewerAutoplayTimer();
                        viewerState = VIEWER_STATES.IDLE;
                        pauseAndResetInactiveVideos(-1);
                    }
                    function showNextViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex + 1) % viewerSlides.length);
                    }
                    function showPreviousViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex - 1 + viewerSlides.length) % viewerSlides.length);
                    }
                    function toggleViewerAutoplay(event) {
                        if (event) event.stopPropagation();
                        setViewerAutoplayState(!viewerAutoplay);
                    }
                    function toggleViewerRandom(event) {
                        if (event) event.stopPropagation();
                        setViewerRandomState(!viewerRandom);
                    }

                    if (galleryGrid) {
                        galleryGrid.addEventListener('click', function(event) {
                            const deleteButton = event.target.closest('.gallery-delete');
                            if (deleteButton) {
                                event.preventDefault();
                                event.stopPropagation();
                                window.opener.postMessage({
                                    type: 'DELETE_IMAGE',
                                    index: Number(deleteButton.dataset.deleteIndex),
                                    mediaType: deleteButton.dataset.deleteMediaType,
                                    id: '${F}'
                                }, '*');
                                return;
                            }

                            const card = event.target.closest('.gallery-card');
                            if (!card) return;
                            if (activeSlotSelectionId) {
                                if ((card.dataset.mediaType || 'image') !== 'image') return;
                                const assigned = tryAssignGalleryCardToActiveSlot(card);
                                if (assigned) return;
                            }
                            event.preventDefault();
                            openFullscreenViewer(card.dataset.galleryIndex);
                        });
                    }
                    viewer.addEventListener('click', function(event) {
                        if (event.target === viewer) {
                            closeFullscreenViewer();
                        }
                    });
                    viewerStage?.addEventListener('pointerdown', onViewerStagePointerDown, { passive: true });
                    viewerStage?.addEventListener('pointermove', onViewerStagePointerMove, { passive: false });
                    viewerStage?.addEventListener('pointerup', onViewerStagePointerEnd);
                    viewerStage?.addEventListener('pointercancel', onViewerStagePointerEnd);
                    window.addEventListener('keydown', function(event) {
                        if (!viewer.classList.contains('open')) return;

                        if (event.key === 'Escape') {
                            event.preventDefault();
                            closeFullscreenViewer();
                            return;
                        }

                        if (event.key === 'ArrowRight') {
                            event.preventDefault();
                            showNextViewerPhoto();
                        }

                        if (event.key === 'ArrowLeft') {
                            event.preventDefault();
                            showPreviousViewerPhoto();
                        }
                    });
                    setViewerAutoplayState(false);
                    renderViewerSlide(0);
                </script>
            </body>
            </html>
        `);_.document.close()},O2=()=>{const[_,O]=React.useState(null),D=zJ(null),T=zJ(null),[F,I]=V([]),d={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},$J=(J="")=>{const Y=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return d[Y]||d.DEFAULT},[p,v]=V(T0),[B,M]=V("EXPLORAR"),[G,x]=V(null),[K,UJ]=V(null),[c,TJ]=V(""),[_J,xJ]=V({}),[DJ,yJ]=V({}),[M0,N0]=V(!1),[JZ,K0]=V(aY[0]||""),[bX,FX]=V(null),[w0,G0]=V(!1),[XZ,mJ]=V(!1),[YZ,vX]=V(!1),[FY,ZZ]=V(!1),[t,EX]=V(null),[k0,UX]=V(null),[CJ,VX]=V(null),[S0,$Z]=V(!1),[QZ,IX]=V(""),[XJ,DX]=React.useState(null),[EY,gX]=V(!1),[HZ,x0]=V({x:0,y:0}),[QJ,jZ]=V("promedio"),[uJ,UY]=V("desc"),[VY,P0]=V(!1),[RJ,CX]=V({isOpen:!1,profile:null,category:null}),[DY,hX]=V({isOpen:!1,profile:null}),[PJ,CY]=V("INICIAL"),[h,b0]=V("GENERAL"),[BJ,JJ]=V(null),[yX,RX]=V(null),[BX,RY]=V([]),[eJ,qZ]=V([]),[MJ,AX]=V(!1),[bJ,BY]=V(!1),[NJ,_Z]=V(!1),[AY,v0]=V(5),[OZ,WZ]=V(20),[LZ,FZ]=V(!1),[AJ,I0]=V(!0),[EZ,JX]=V(!1),[UZ,mX]=V(""),[VZ,uX]=V(""),[DZ,fJ]=V(""),[CZ,RZ]=V(!1),[zY,BZ]=V(""),[AZ,zZ]=V(""),[TZ,g0]=V(WJ[0]),[MZ,NZ]=V(""),[KZ,TY]=V(""),[XX,h0]=V(""),[vJ,wZ]=V([]),[GZ,kZ]=V(""),[SZ,xZ]=V(""),[PZ,IJ]=V(""),[MY,y0]=V(!1),[fX,bZ]=V(""),[cX,vZ]=V(""),[sX,cJ]=V(""),[m0,u0]=V(!1),[NY,KY]=V(!1),[IZ,wY]=V({}),[GY,gZ]=V({}),[f0,dX]=V({}),[c0,hZ]=V({}),[YX,s0]=V(!1),[nX,d0]=V(!1),[n0,zX]=V(""),[pX,yZ]=V(""),sJ=zJ(null),iX=zJ(null),kY=zJ(null),TX=zJ(null),MX=zJ(null),lX=zJ(!1),tX=zJ(null),oX=zJ(!1),mZ=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),aX=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:lY(),puntuaciones:xX()}),[b,o]=V(aX);i(()=>{if(!K){if(c)TJ("");return}if(K==="GENERAL"&&c!=="all")TJ("all")},[K,c]);const SY=(J={})=>{const Y=aX(),Z=J&&typeof J==="object"?J:{},$=Z?.puntuaciones&&typeof Z.puntuaciones==="object"?{...Y.puntuaciones,...Z.puntuaciones}:Y.puntuaciones;return{...Z,...Y,nombre:typeof Z.nombre==="string"?Z.nombre:"",nacionalidad:typeof Z.nacionalidad==="string"?Z.nacionalidad:"",ciudad:typeof Z.ciudad==="string"?Z.ciudad:"",profesion:typeof Z.profesion==="string"?Z.profesion:"",fechaNacimiento:typeof Z.fechaNacimiento==="string"?Z.fechaNacimiento:"",estaturaCm:Z.estaturaCm===void 0||Z.estaturaCm===null?"":Z.estaturaCm,fotos:Array.isArray(Z.fotos)?Z.fotos:[],galeria:{fotos:Array.isArray(Z?.galeria?.fotos)?Z.galeria.fotos:[],gifs:Array.isArray(Z?.galeria?.gifs)?Z.galeria.gifs:[],videos:Array.isArray(Z?.galeria?.videos)?Z.galeria.videos:[]},batallaFotosPreferidas:EJ(Z?.batallaFotosPreferidas),puntuaciones:$}},rX=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===GJ)return;o(SY(J));EX(J.firebaseId||J.id||null);mJ(!0)},p0=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const Z=D.current,$=Z&&!Z.closed?Z:window.open("","_blank");D.current=$;LY({targetWindow:$,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map((Q,H)=>({...n(Q,"image"),sourceTag:"fotos",sourceIndex:H})),...(J?.galeria?.videos||[]).map((Q,H)=>({...n(Q,"video"),sourceTag:"videos",sourceIndex:H}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});yZ(J?.firebaseId||J?.id||"");$?.focus();cJ("");zX("")},uZ=(J="")=>{if(B==="anonimo")return;const Y=String(J||"").trim();EX(null);o({...aX(),profesion:Y});mJ(!0)},eX=f(()=>{const Y=[{key:"nombre",label:"Nombre",value:b?.nombre},{key:"fotos.0",label:"Foto principal",value:b?.fotos?.[0]},{key:"profesion",label:"Profesión",value:b?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:b?.nacionalidad},{key:"ciudad",label:"Ciudad",value:b?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:b?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:b?.estaturaCm}].map((Z)=>{const $=typeof Z.value==="string"?Z.value.trim():Z.value,Q=!($===""||$===void 0||$===null),H=Z.key==="fotos.0"?Q?"SI":"NO":Q?String($):"Sin completar";return{...Z,isComplete:Q,preview:H}});return{completed:Y.filter((Z)=>Z.isComplete),missing:Y.filter((Z)=>!Z.isComplete)}},[b]),L2=async({profileId:J,url:Y,tag:Z="fotos",label:$="",type:Q="image",autor:H=""})=>{const L=(Y||"").trim(),q=WJ.includes($)?$:"",W=oJ(L,Q);if(!J||!L)return[];const j=w.ref(`perfiles/${J}/galeria/${Z}`),A=[...(await j.once("value")).val()||[],{url:L,label:q,type:W,autor:V0(H)}];await j.set(A);if(J===t)o((R)=>({...R,galeria:{...R.galeria||{fotos:[],gifs:[],videos:[]},[Z]:A}}));return A},i0=async({profileId:J,sourceTag:Y,sourceIndex:Z,label:$})=>{if(!J||!Y||!Number.isInteger(Z))return;const Q=WJ.includes($)?$:"",H=w.ref(`perfiles/${J}/galeria/${Y}`),L=await H.once("value"),q=Array.isArray(L.val())?L.val():[];if(!q[Z])return;const W=[...q],j=n(W[Z],Y==="videos"?"video":"image");W[Z]={...j,label:Q};await H.set(W);if(J===t)o((E)=>({...E,galeria:{...E.galeria||{fotos:[],gifs:[],videos:[]},[Y]:W}}))},fZ=async({profileId:J,sourceTag:Y,sourceIndex:Z,url:$})=>{if(!J||!Y||!Number.isInteger(Z))return;const Q=($||"").trim();if(!Q)return;const H=w.ref(`perfiles/${J}/galeria/${Y}`),L=await H.once("value"),q=Array.isArray(L.val())?L.val():[];if(!q[Z])return;const W=[...q],j=Y==="videos"?"video":"image",E=n(W[Z],j);W[Z]={...E,url:Q,type:oJ(Q,j)};await H.set(W);if(J===t)o((C)=>({...C,galeria:{...C.galeria||{fotos:[],gifs:[],videos:[]},[Y]:W}}))},l0=async({profileId:J,sourceTag:Y,sourceIndex:Z})=>{if(!J||!Y||!Number.isInteger(Z))return;const $=w.ref(`perfiles/${J}/galeria/${Y}`),Q=await $.once("value"),H=Array.isArray(Q.val())?Q.val():[],L=H[Z];if(!L)return;const q=H.filter((j,E)=>E!==Z);await $.set(q);const W=n(L,Y==="videos"?"video":"image").url;if(W){const j=w.ref(`perfiles/${J}/batallaFotosPreferidas`),E=await j.once("value"),A={...EJ(E.val())};let R=!1;Object.keys(A).forEach((U)=>{if(A[U]===W){A[U]="";R=!0}});if(R)await j.set(A)}if(J===t)o((j)=>({...j,galeria:{...j.galeria||{fotos:[],gifs:[],videos:[]},[Y]:q},batallaFotosPreferidas:(()=>{const E=EJ(j.batallaFotosPreferidas);if(!W)return E;const C={...E};Object.keys(C).forEach((A)=>{if(C[A]===W)C[A]=""});return C})()}))},t0=async(J)=>{if(!(J instanceof File))return J;const Y=String(J.type||"").toLowerCase();if(!Y.startsWith("image/")||Y==="image/gif")return J;if(J.size<=1200000)return J;const Z=await createImageBitmap(J),Q=Math.min(1,1920/Math.max(Z.width,Z.height)),H=Math.max(1,Math.round(Z.width*Q)),L=Math.max(1,Math.round(Z.height*Q)),q=document.createElement("canvas");q.width=H;q.height=L;const W=q.getContext("2d",{alpha:!1});if(!W)return J;W.drawImage(Z,0,0,H,L);const j=Y==="image/png"?"image/png":"image/jpeg",E=j==="image/jpeg"?0.82:void 0,C=await new Promise((U)=>q.toBlob(U,j,E));if(!C||C.size>=J.size)return J;const A=(J.name||"archivo").replace(/\.[^.]+$/,"");return new File([C],`${A}.${j==="image/png"?"png":"jpg"}`,{type:j,lastModified:Date.now()})},F2=window.uploadFileToFirebaseStorage=async(J,Y="galeria")=>{if(!J)throw new Error("No se encontró el archivo para subir.");const Z=String(Y||"galeria").replace(/[^a-zA-Z0-9/_-]/g,"");try{if(typeof iY?.setMaxUploadRetryTime==="function")iY.setMaxUploadRetryTime(120000)}catch(Q){}let $=null;for(let Q=1;Q<=2;Q+=1)try{const H=await t0(J),L=(H.name||"").split(".").pop(),q=L&&L!==H.name?`.${L.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()}`:"",W=`${Date.now()}-${Math.random().toString(36).slice(2,10)}`,j=`${Z}/${W}${q}`,E=iY.ref(j).put(H);return(await new Promise((A,R)=>{const U=90000,z=window.setTimeout(()=>{try{E.cancel()}catch(P){}const N=new Error("La subida se quedó sin respuesta. Revisá tu conexión e intentá nuevamente.");N.code="storage/upload-timeout";R(N)},U);E.on("state_changed",null,(N)=>{window.clearTimeout(z);R(N)},()=>{window.clearTimeout(z);A(E.snapshot)})})).ref.getDownloadURL()}catch(H){$=H;if(String(H?.code||"").toLowerCase()!=="storage/retry-limit-exceeded"||Q===2)throw H}throw $||new Error("No se pudo subir el archivo a Firebase Storage.")},E2=(J)=>new Promise((Y,Z)=>{const $=new FileReader;$.onload=()=>Y(String($.result||""));$.onerror=()=>Z(new Error("No se pudo leer el archivo."));$.readAsDataURL(J)}),o0=(J,Y)=>{const Z=String(Y||"").trim(),$=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Z)return{...J,fotos:[""]};const H=$.some((L)=>n(L,"image").url===Z)?$:[...$,{url:Z,label:"C",type:"image"}];return{...J,fotos:[Z],galeria:{...J.galeria||{},fotos:H}}},a0=async({url:J,label:Y,autor:Z="",forcedTag:$=""})=>{const Q=String(J||"").trim();if(!Q)throw new Error("Ingresá una URL.");const H=WJ.includes(Y)?Y:"",L=oJ(Q);if(!(L==="image"||E0.test(Q)||Boolean(_X(Q))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const W=$||(L==="video"?"videos":"fotos"),j=w.ref(`${jX}/${W}`),E=await j.once("value"),A=[...Array.isArray(E.val())?E.val():[],{url:Q,label:H,type:L,autor:String(Z||"").trim()}];await j.set(A)},r0=async(J="")=>{TY("");try{let Y=String(AZ||"").trim();await a0({url:Y,label:TZ,autor:MZ,forcedTag:J});zZ("");NZ("")}catch(Y){TY(Y?.message||"No se pudo guardar en galería anónima.")}},e0=async()=>{const J=String(GZ||"").trim();IJ("");if(!J){IJ("Completá el nombre del audio.");return}try{let Y=String(SZ||"").trim();if(!Y){IJ("Completá la URL del audio.");return}if(!i1.test(Y)){IJ("La URL debe apuntar a un archivo de audio válido.");return}const Z=w.ref(`${jX}/audios`),$=await Z.once("value"),H=[...Array.isArray($.val())?$.val():[],{nombre:J,url:Y}];await Z.set(H);kZ("");xZ("")}catch(Y){IJ("No se pudo guardar el audio en Firebase.")}},J1=async(J)=>{if(!Number.isInteger(J)||J<0)return;IJ("");try{const Y=w.ref(`${jX}/audios`),Z=await Y.once("value"),$=Array.isArray(Z.val())?Z.val():[];if(!$[J])return;const Q={nombre:String($[J]?.nombre||"").trim(),url:String($[J]?.url||"").trim()},H=$.filter((L,q)=>q!==J);await Y.set(H);if(Q.url&&Q.url===fX)bZ("");if(Q.url&&Q.url===cX)vZ("")}catch(Y){IJ("No se pudo eliminar el audio de Firebase.")}},U2=async(J,Y)=>{Y.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await w.collection("galeria").doc(J).delete()}catch(Z){console.error("Error al borrar de Firebase:",Z)}},[k,OJ]=V(mZ()),xY=()=>OJ(mZ());i(()=>{if(window.lucide)window.lucide.createIcons()},[B,XZ,YZ,F,XJ,p]);i(()=>{if(D.current&&!D.current.closed&&t)LY({targetWindow:D.current,profileName:b.nombre,profession:b.profesion,photos:[...(b.galeria?.fotos||[]).map((J,Y)=>({...n(J,"image"),sourceTag:"fotos",sourceIndex:Y})),...(b.galeria?.videos||[]).map((J,Y)=>({...n(J,"video"),sourceTag:"videos",sourceIndex:Y}))],editingId:t,battlePhotoPrefs:b.batallaFotosPreferidas,profilePhotoUrl:b.fotos?.[0]||""})},[t,b.nombre,b.profesion,b.galeria?.fotos,b.galeria?.videos,b.batallaFotosPreferidas]);i(()=>{if(!pX)return;const J=D.current;if(!J||J.closed)return;if(t&&t===pX)return;const Y=F.find((Z)=>(Z?.firebaseId||Z?.id)===pX);if(!Y)return;LY({targetWindow:J,profileName:Y?.nombre||"",profession:Y?.profesion||"",photos:[...(Y?.galeria?.fotos||[]).map((Z,$)=>({...n(Z,"image"),sourceTag:"fotos",sourceIndex:$})),...(Y?.galeria?.videos||[]).map((Z,$)=>({...n(Z,"video"),sourceTag:"videos",sourceIndex:$}))],editingId:Y?.firebaseId||Y?.id||"",battlePhotoPrefs:Y?.batallaFotosPreferidas||Y?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:Y?.fotos?.[0]||""})},[pX,F,t]);i(()=>{const J=async(R)=>{if(R.data.type==="ADD_IMAGE"){const{url:U,id:z,label:N,mediaType:P}=R.data,u=P==="video"?"videos":"fotos";if(!z)return;const HJ=z===GJ?w.ref(`${jX}/${u}`):w.ref(`perfiles/${z}/galeria/${u}`),a=(await HJ.once("value")).val()||[],g=(U||"").trim();if(!g)return;const r=[...a,{url:g,label:WJ.includes(N)?N:"",type:oJ(g,P),autor:""}];await HJ.set(r);o((jJ)=>({...jJ,galeria:{...jJ.galeria,[u]:r}}))}if(R.data.type==="DELETE_IMAGE"){const{index:U,id:z,mediaType:N}=R.data,P=N==="video"?"videos":"fotos";if(!z)return;const u=z===GJ?w.ref(`${jX}/${P}`):w.ref(`perfiles/${z}/galeria/${P}`),s=(await u.once("value")).val()||[],a=s[U],g=s.filter((jJ,YJ)=>YJ!==U);await u.set(g);const r=n(a,N).url;if(r&&z!==GJ){const jJ=w.ref(`perfiles/${z}/batallaFotosPreferidas`),YJ=await jJ.once("value"),e={...EJ(YJ.val())};let HX=!1;Object.keys(e).forEach((iJ)=>{if(e[iJ]===r){e[iJ]="";HX=!0}});if(HX)await jJ.set(e)}o((jJ)=>({...jJ,galeria:{...jJ.galeria,[P]:g},batallaFotosPreferidas:(()=>{const YJ=EJ(jJ.batallaFotosPreferidas);if(!r)return YJ;const ZJ={...YJ};Object.keys(ZJ).forEach((e)=>{if(ZJ[e]===r)ZJ[e]=""});return ZJ})()}))}if(R.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:U,slotId:z,index:N,mediaType:P}=R.data,u=_Y(z);if(!U||U===GJ||!u||!Number.isInteger(N))return;const HJ=P==="video"?"videos":"fotos",g=(await w.ref(`perfiles/${U}/galeria/${HJ}`).once("value")).val()||[],r=n(g[N],P);if(!r.url||r.type!=="image")return;await w.ref(`perfiles/${U}/batallaFotosPreferidas/${z}`).set(r.url);o((YJ)=>({...YJ,batallaFotosPreferidas:{...EJ(YJ.batallaFotosPreferidas),[z]:r.url}}))}if(R.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:U,slotId:z,url:N,mediaType:P,label:u}=R.data,HJ=_Y(z),s=String(N||"").trim();if(!U||U===GJ||!HJ||!s)return;if(P==="video")return;await w.ref(`perfiles/${U}/batallaFotosPreferidas/${z}`).set(s);o((g)=>({...g,batallaFotosPreferidas:{...EJ(g.batallaFotosPreferidas),[z]:s}}))}if(R.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:U,slotId:z}=R.data,N=_Y(z);if(!U||U===GJ||!N)return;await w.ref(`perfiles/${U}/batallaFotosPreferidas/${z}`).set("");o((u)=>({...u,batallaFotosPreferidas:{...EJ(u.batallaFotosPreferidas),[z]:""}}))}};window.addEventListener("message",J);const Y=w.ref("perfiles"),Z=w.ref(jX);let $={},Q={};const H=C0(O0,[]);if(Array.isArray(H)&&H.length)I(H);const L=C0(W0,[]);if(Array.isArray(L)&&L.length)wZ(L);const q=()=>{const R=Object.entries($||{}).map(([P,u])=>({...SY(u),firebaseId:P})),U=e1(Q||{}),N=Object.values(U.galeria||{}).some((P)=>Array.isArray(P)&&P.length>0)?[...R,U]:R;I(N);R0(O0,N)},W=(R)=>{$={...$,[R.key]:R.val()||{}};q()},j=(R)=>{$={...$,[R.key]:R.val()||{}};q()},E=(R)=>{const{[R.key]:U,...z}=$;$=z;q()};Y.on("child_added",W);Y.on("child_changed",j);Y.on("child_removed",E);Z.on("value",(R)=>{Q=R.val()||{};const U=Array.isArray(Q?.audios)?Q.audios.map((z)=>({nombre:String(z?.nombre||"").trim(),url:String(z?.url||"").trim()})).filter((z)=>z.nombre&&z.url):[];wZ(U);R0(W0,U);q()});v(T0);const C=w.ref("arenaBattleState");C.on("value",(R)=>{xJ(R.val()||{})});const A=w.ref("arenaGlobalState");A.on("value",(R)=>{yJ(R.val()||{})});return()=>{window.removeEventListener("message",J);Y.off("child_added",W);Y.off("child_changed",j);Y.off("child_removed",E);Z.off();C.off();A.off()}},[]);i(()=>{const J=vJ.find((Z)=>Z.url===fX),Y=vJ.find((Z)=>Z.url===cX);[TX.current,MX.current].forEach((Z)=>{if(!Z)return;Z.pause();Z.currentTime=0});if(!MY)return;if(J&&TX.current){TX.current.src=J.url;TX.current.play().catch(()=>{})}if(Y&&MX.current&&Y.url!==J?.url){MX.current.src=Y.url;MX.current.play().catch(()=>{})}},[MY,fX,cX,vJ]);const gJ=(J)=>{if(!J)return"?";const Y=new Date,Z=new Date(J);let $=Y.getFullYear()-Z.getFullYear();if(Y.getMonth()<Z.getMonth()||Y.getMonth()===Z.getMonth()&&Y.getDate()<Z.getDate())$--;return $},PY=(J={})=>{return{...xX(),...J?.puntuaciones||{}}},dJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},bY=(J={},Y=[])=>{if(!Array.isArray(Y)||!Y.length)return 0;const Z=PY(J);return Y.reduce(($,Q)=>$+(Number(Z[Q])||0),0)/Y.length},JY=(J={})=>{return bY(J,dJ.Rostro)},XY=(J={})=>{return bY(J,dJ.Cuerpo)},YY=(J={})=>{return bY(J,dJ.Actitud)},cZ=(J={},Y="")=>{if(Y==="Rostro")return JY(J);if(Y==="Cuerpo")return XY(J);if(Y==="Actitud")return YY(J);return 0},LJ=(J={})=>{const Y=Object.keys(dJ).map(($)=>cZ(J,$));return(Y.reduce(($,Q)=>$+Q,0)/Y.length).toFixed(0)},ZY=(J)=>{const Y=[],Z=(J.nacionalidad||"").toLowerCase(),$=(J.profesion||"").toLowerCase(),Q=(J.ciudad||"").toLowerCase(),H=gJ(J.fechaNacimiento);p.forEach((L)=>{const q=L.reglas;let W=!0;if(q.nacionalidades?.length>0&&!q.nacionalidades.some((j)=>Z===j.toLowerCase()))W=!1;if(q.profesiones?.length>0&&!q.profesiones.some((j)=>$===j.toLowerCase()))W=!1;if(q.ciudades?.length>0&&!q.ciudades.some((j)=>Q===j.toLowerCase()))W=!1;if(q.edadMin&&(H==="?"||H<parseInt(q.edadMin)))W=!1;if(q.edadMax&&(H==="?"||H>parseInt(q.edadMax)))W=!1;if(q.caracteristica&&q.umbral){const j=PY(J)[q.caracteristica]||0,E=parseInt(q.umbral);if(q.operador==="Superior a"&&j<=E)W=!1;if(q.operador==="Inferior a"&&j>=E)W=!1}if(W)Y.push(L.firebaseId)});return Y},X1=f(()=>["Todas",...new Set(F.map((J)=>J.nacionalidad).filter(Boolean))],[F]),V2=f(()=>["Todas",...new Set(F.map((J)=>J.profesion).filter(Boolean))],[F]),Y1=f(()=>["Todas",...new Set(F.map((J)=>J.ciudad).filter(Boolean))],[F]),sZ=f(()=>{return(F||[]).reduce((J,Y)=>{if(!Y?.firebaseId)return J;J[Y.firebaseId]=ZY(Y);return J},{})},[F,p]),ZX=f(()=>{return(F||[]).flatMap((J)=>{const Y=J2(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map(($,Q)=>({item:$,sourceTag:"fotos",sourceIndex:Q,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map(($,Q)=>({item:$,sourceTag:"gifs",sourceIndex:Q,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map(($,Q)=>({item:$,sourceTag:"videos",sourceIndex:Q,fallbackType:"video"})):[]].map(({item:$,sourceTag:Q,sourceIndex:H,fallbackType:L})=>{const q=n($,L);return{id:`${J.firebaseId||J.nombre||"perfil"}-${Q}-${H}`,url:q.url,label:q.label,type:q.type,isGif:q.type==="image"&&Q2(q.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||q.url,profileId:J.firebaseId,sourceCharacterId:Y,sourceTag:Q,sourceIndex:H}})})},[F]),FJ=f(()=>{return ZX.filter((J)=>Boolean(J.url))},[ZX]),vY=f(()=>{return FJ.reduce((J,Y)=>{const Z=Y.label||"";if(!J[Z])J[Z]=[];J[Z].push(Y);return J},{})},[FJ]),dZ=f(()=>{return FJ.reduce((J,Y)=>{const Z=Y.profileId||Y.nombre;if(!Z)return J;if(!J[Z])J[Z]=[];J[Z].push(Y);return J},{})},[FJ]),Z1=f(()=>{return new Set(FJ.map((J)=>J.profileId).filter(Boolean)).size},[FJ]),nZ=f(()=>{return Object.entries(sZ||{}).reduce((J,[Y,Z])=>{J[Y]=new Set(Array.isArray(Z)?Z:[]);return J},{})},[sZ]),hJ=f(()=>{if(h==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:FJ[0]?.url||"",photos:FJ.filter((J)=>!s1.includes(J.label||""))}];if(h==="PERSONAJE")return Object.entries(dZ).map(([J,Y])=>{const Z=Y[0]||{};return{id:`PERSONAJE-${J}`,profileId:Z.profileId||null,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotoPerfil:Z.fotoPerfil||Z.url||"",photos:Y}}).filter((J)=>J.photos.length>0).sort((J,Y)=>J.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}));if(h==="ETIQUETA")return WJ.map((J)=>{const Y=vY[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:Y[0]?.url||"",photos:Y}}).filter((J)=>J.photos.length>0);return(p||[]).map((J)=>{const Y=FJ.filter((Z)=>{if(!Z.profileId)return!1;const $=nZ[Z.profileId];return $?$.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||Y[0]?.fotoPerfil||Y[0]?.url||"",photos:Y}}).filter((J)=>J.photos.length>0).sort((J,Y)=>J.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[FJ,vY,dZ,p,h,nZ]),nJ=f(()=>{if(h==="GENERAL")return hJ[0]||null;if(!yX)return null;return hJ.find((J)=>J.id===yX.id)||null},[hJ,yX,h]),KJ=f(()=>{if(h!=="PERSONAJE")return[];return hJ.filter((J)=>BX.includes(J.id))},[hJ,h,BX]),NX=f(()=>{if(h==="PERSONAJE")return KJ.flatMap((J)=>J.photos||[]);if(h==="ETIQUETA"){if(!eJ.length)return[];return FJ.filter((J)=>eJ.includes(J.label))}return nJ?.photos||FJ},[h,KJ,nJ,FJ,eJ]),$1=f(()=>{const J=NX.reduce((Y,Z)=>{const $=Z.label||"";if(!$)return Y;Y[$]=(Y[$]||0)+1;return Y},{});return WJ.reduce((Y,Z)=>{Y[Z]=J[Z]||0;return Y},{})},[NX]),y=f(()=>{return NX.filter((J)=>h==="ETIQUETA"?!0:PJ==="INICIAL"?J.label!=="X":PJ==="100"?!0:J.label===PJ)},[NX,PJ,h]),IY=f(()=>{return y.slice(0,OZ)},[y,OZ]),Q1=IY.length<y.length,$Y=L0[h]||h,QY=h!=="GENERAL"&&h!=="ETIQUETA",pZ=f(()=>{if(h!=="PERSONAJE")return[];return hJ.filter((J)=>!BX.includes(J.id))},[hJ,h,BX]),S=BJ===null?null:y[qX(BJ,y.length)]||null,wJ=f(()=>{return ZX.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(IZ[J.id])})},[ZX,IZ]),iZ=f(()=>{const J=wJ.reduce((Y,Z)=>{const $=Z.profileId||Z.nombre||"sin-perfil";if(!Y[$])Y[$]={id:$,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotos:[]};Y[$].fotos.push(Z);return Y},{});return Object.values(J).map((Y)=>({...Y,fotos:Y.fotos.sort((Z,$)=>(Z.label||"").localeCompare($.label||"","es",{sensitivity:"base"}))})).sort((Y,Z)=>Y.nombre.localeCompare(Z.nombre,"es",{sensitivity:"base"}))},[wJ]);i(()=>{if(!S){JX(!1);mX("");uX("");fJ("");return}JX(!1);mX(S.label||"");uX(S.url||"");fJ("")},[S]);i(()=>{if(B!=="GALERIA"){RX(null);JJ(null)}},[B]);i(()=>{WZ(40);JJ(null)},[h,PJ,eJ,BX,yX,F.length]);i(()=>{RX(null);JJ(null);RY([]);qZ([])},[h]);i(()=>{if(BJ===null)return;if(!y.length){JJ(null);return}if(BJ>=y.length)JJ(0)},[y,BJ]);i(()=>{if(BJ===null)return;const J=(Y)=>{if(Y.key==="Escape"){JJ(null);return}if(!y.length)return;if(Y.key==="ArrowRight")JJ((Z)=>qX((Z??0)+1,y.length));if(Y.key==="ArrowLeft")JJ((Z)=>qX((Z??0)-1,y.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[y.length,BJ]);i(()=>{if(BJ===null){AX(!1);BY(!1);_Z(!1)}},[BJ]);i(()=>{if(!EY)return;const J=(Z)=>{if(T.current&&!T.current.contains(Z.target))gX(!1)},Y=(Z)=>{if(Z.key==="Escape")gX(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",Y);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",Y)}},[EY]);i(()=>{let J=!1;const Y=ZX.filter(($)=>$.type==="image"&&$.url);if(!Y.length){wY({});return}(async()=>{const $=8,Q=[];for(let L=0;L<Y.length;L+=$){const q=Y.slice(L,L+$),W=await Promise.all(q.map(async(j)=>({id:j.id,isBroken:await B0(j.url)})));Q.push(...W);if(J)return}if(J)return;const H=Q.reduce((L,q)=>{L[q.id]=q.isBroken;return L},{});wY(H)})();return()=>{J=!0}},[ZX]);i(()=>{if(!NY)return;const J=wJ.reduce((Y,Z)=>{Y[Z.id]=Z.url;return Y},{});gZ(J);hZ({})},[NY,wJ]);i(()=>{if(sJ.current){clearTimeout(sJ.current);sJ.current=null}if(!MJ||!S)return;if(S.type==="video")return;const J=AY*1000;sJ.current=setTimeout(()=>{JJ((Y)=>F0(Y,y,bJ))},J);return()=>{if(sJ.current){clearTimeout(sJ.current);sJ.current=null}}},[MJ,S,y,bJ,AY]);i(()=>{if(!S||!lX.current)return;lX.current=!1;requestAnimationFrame(()=>{j1()})},[S]);const gY=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,lZ=()=>{const J=iX.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},H1=()=>{const J=iX.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},j1=()=>{const J=iX.current;if(!J)return;if(document.fullscreenElement)return;const Y=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof Y==="function")Promise.resolve(Y.call(J)).catch(()=>{if(gY)lZ()});else if(gY)lZ()},q1=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},tZ=(J,{autoplay:Y=!1,fromGeneralPlay:Z=!1}={})=>{lX.current=!!Y;JJ(J);AX(Y);_Z(Z);JX(!Z)},_1=(J)=>{if(!J)return;RY((Y)=>Y.includes(J)?Y:[...Y,J]);JJ(null)},O1=(J)=>{if(!J)return;RY((Y)=>Y.filter((Z)=>Z!==J));JJ(null)},W1=(J)=>{if(!J)return;qZ((Y)=>Y.includes(J)?Y.filter((Z)=>Z!==J):[...Y,J]);JJ(null)},L1=async()=>{if(!(typeof window!=="undefined"&&typeof window.JSZip!=="undefined")){window.alert("No se pudo iniciar la descarga: falta la librería ZIP.");return}if(!y.length){window.alert("No hay archivos visibles para descargar.");return}const Y=($="")=>String($||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\/:*?"<>|]/g,"-").replace(/\s+/g," ").trim(),Z=($="")=>{return((String($||"").split("?")[0].split("#")[0].match(/\.([a-zA-Z0-9]{2,5})$/)||[])[1]||"jpg").toLowerCase()};FZ(!0);try{const $=new window.JSZip,Q=y.filter((N)=>N?.url);let H=0,L=0,q=0;const j=String(window.GALLERY_DOWNLOAD_PROXY||"").trim()||"https://corsproxy.io/?",E=(N)=>{if(!j)return"";if(j.includes("{url}"))return j.replace("{url}",encodeURIComponent(N));const P=j.endsWith("?")||j.endsWith("=")?"":j.includes("?")?"&":"?";return`${j}${P}${encodeURIComponent(N)}`},C=async(N)=>{const P=await fetch(N,{mode:"cors"});if(!P.ok)throw new Error(`HTTP ${P.status}`);return{blob:await P.blob(),viaProxy:!1}};for(let N=0;N<Q.length;N+=1){const P=Q[N],u=Y(P.nombre||"Sin nombre")||"Sin nombre",HJ=Z(P.url),s=Y(P.label||"sin-etiqueta")||"sin-etiqueta",a=`${String(N+1).padStart(4,"0")}_${s}.${HJ}`;try{let g;try{g=await C(P.url)}catch(r){const jJ=E(P.url);if(!jJ)throw r;const YJ=await fetch(jJ,{mode:"cors"});if(!YJ.ok)throw new Error(`Proxy HTTP ${YJ.status}`);g={blob:await YJ.blob(),viaProxy:!0}}$.folder(u).file(a,g.blob);H+=1;if(g.viaProxy)q+=1}catch(g){L+=1;console.warn("No se pudo descargar un archivo de la galería:",P.url,g)}}if(!H){window.alert("No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.");return}const A=await $.generateAsync({type:"blob"}),R=URL.createObjectURL(A),U=document.createElement("a"),z=new Date().toISOString().slice(0,10);U.href=R;U.download=`galeria-completa-${z}.zip`;document.body.appendChild(U);U.click();U.remove();URL.revokeObjectURL(R);if(L>0)window.alert(`Descarga completada con avisos: ${H} archivos incluidos, ${L} omitidos y ${q} recuperados por proxy.`)}catch($){console.error("Error al generar ZIP de galería:",$);window.alert("No se pudo crear el ZIP de la galería.")}finally{FZ(!1)}},oZ=()=>{lX.current=!1;AX(!1);JJ(null);H1();q1()},KX=()=>JJ((J)=>F0(J,y,bJ)),D2=()=>JJ((J)=>qX((J??0)-1,y.length)),F1=async()=>{if(!S?.profileId||!S?.sourceTag||!Number.isInteger(S?.sourceIndex))return;const J=(VZ||"").trim();if(!J){fJ("La URL no puede estar vacía.");return}if(U0(J)||!qJ(J,"")){fJ("La URL está bloqueada o no es válida.");return}try{RZ(!0);fJ("");if(J!==S.url)await fZ({profileId:S.profileId,sourceTag:S.sourceTag,sourceIndex:S.sourceIndex,url:J});await i0({profileId:S.profileId,sourceTag:S.sourceTag,sourceIndex:S.sourceIndex,label:UZ});JX(!1)}catch(Y){fJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",Y)}finally{RZ(!1)}},E1=(J,Y)=>{gZ((Z)=>({...Z,[J]:Y}))},aZ=(J,Y)=>{if(!J)return;hZ((Z)=>({...Z,[J]:Boolean(Y)}))},U1=(J)=>{const Y=(GY[J?.id]||J?.url||"").trim();if(!Y)return;window.open(Y,"_blank","noopener,noreferrer")},V1=async(J)=>{if(!J)return;const Y=(GY[J.id]||"").trim();if(!Y)return;dX((Z)=>({...Z,[J.id]:!0}));try{if(Y!==J.url)await fZ({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:Y});const Z=await B0(Y);wY(($)=>({...$,[J.id]:Z}));if(!Z)aZ(J.id,!1)}catch(Z){console.error("Error al actualizar URL rota:",Z)}finally{dX((Z)=>({...Z,[J.id]:!1}))}},D1=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;dX((Z)=>({...Z,[J.id]:!0}));try{await l0({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Z){console.error("Error al eliminar foto rota:",Z)}finally{dX((Z)=>({...Z,[J.id]:!1}))}},C1=f(()=>{if(h==="PERSONAJE")return KJ.length?`${KJ.length} personaje${KJ.length>1?"s":""} seleccionado${KJ.length>1?"s":""}`:"Sin personajes seleccionados";if(nJ&&QY)return nJ.nombre;return $Y},[h,KJ,nJ,QY,$Y]),R1=async(J)=>{J.preventDefault();if(FY)return;ZZ(!0);const Y={...b};try{if(t){await w.ref(`perfiles/${t}`).set(Y);mJ(!1);EX(null)}else{await w.ref("perfiles").push(Y);mJ(!1);o(aX())}}catch(Z){console.error("No se pudo guardar el perfil:",Z);window.alert("No se pudo guardar el perfil. Revisá tu conexión e intentá de nuevo.")}finally{ZZ(!1)}},B1=async(J)=>{J.preventDefault();const{firebaseId:Y,...Z}=k,$={...Z,type:"custom"};try{if(Y)await w.ref(`categorias/${Y}`).update($);else await w.ref("categorias").push($);vX(!1);xY()}catch(Q){console.error("La categoría no quiso guardarse:",Q)}},A1=async(J)=>{if(!J)return;try{await w.ref(`categorias/${J}`).remove();v((Y)=>Y.filter((Z)=>Z.firebaseId!==J));DX((Y)=>Y===J?null:Y)}catch(Y){console.error("No se pudo borrar la categoría:",Y);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},hY=(J)=>{if(!J?.firebaseId)return;IX("");VX(J);$Z(!0)},z1=()=>{if(!t)return;const J=F.find((Y)=>Y.firebaseId===t);if(!J)return;hY(J)},yY=()=>{$Z(!1);UX(null);VX(null)},T1=async(J)=>{if(!J)return;await w.ref(`perfiles/${J}`).remove();I((Y)=>Y.filter((Z)=>Z.firebaseId!==J))},M1=async()=>{if(!CJ?.firebaseId)return;try{await T1(CJ.firebaseId);IX("");mJ(!1);if(t===CJ.firebaseId)EX(null);yY()}catch(J){console.error("No se pudo borrar el perfil:",J);IX("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},HY=()=>{gX(!1);VX(null)},N1=(J,Y)=>{J.preventDefault();gX(!0);x0({x:J.clientX,y:J.clientY});VX(Y)},K1=()=>{if(!CJ)return;o(SY(CJ));EX(CJ.firebaseId);mJ(!0);HY()},w1=async()=>{if(!CJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){HY();return}try{await w.ref(`perfiles/${CJ.firebaseId}`).remove();I((Y)=>Y.filter((Z)=>Z.firebaseId!==CJ.firebaseId));HY()}catch(Y){console.error("No se pudo borrar el perfil:",Y);alert("No se pudo borrar el perfil. Probá de nuevo.");HY()}},rZ=(J)=>{const Y=J?.estaturaCm;if(Y===void 0||Y===null||Y==="")return"Sin dato";const Z=Number(Y);if(Number.isNaN(Z)||Z<=0)return"Sin dato";return`${Math.round(Z)} cm`},mY=(J="")=>String(J||"").trim().toLowerCase(),G1=(J="")=>String(J||"").trim(),wX=(J=[])=>[...J||[]].filter((Y)=>Y?.firebaseId&&(Y?.nombre||"").trim()).sort((Y,Z)=>(Y.nombre||"").localeCompare(Z.nombre||"","es",{sensitivity:"base"})).map((Y)=>Y.firebaseId),eZ=(J=[],Y="GENERAL")=>{const Z=String(Y||"GENERAL").trim().toUpperCase(),$=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,W)=>(q.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(Z==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:$.map((q)=>q.firebaseId)}];if(Z==="EDADES"){const q={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};$.forEach((W)=>{const j=gJ(W.fechaNacimiento);if(!Number.isFinite(j)||j<18)return;if(j<=28)q["18-28"].ids.push(W.firebaseId);else if(j<=39)q["29-39"].ids.push(W.firebaseId);else q["40+"].ids.push(W.firebaseId)});return Object.values(q)}const Q=Z==="NACIONALIDADES"?"nacionalidad":"profesion",H=Z==="NACIONALIDADES"?"Nacionalidad":"Profesión",L=$.reduce((q,W)=>{const j=mY(W?.[Q]);if(!j)return q;if(!q[j])q[j]={key:j,label:G1(W?.[Q])||j,typeLabel:H,ids:[]};q[j].ids.push(W.firebaseId);return q},{});return Object.values(L).sort((q,W)=>q.label.localeCompare(W.label,"es",{sensitivity:"base"}))},uY=(J=[],Y="GENERAL",Z="")=>{const $=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,W)=>(q.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL"){const q=$.map((W)=>W.firebaseId);return{groupedIds:q.length>1?[{key:"general",label:"General",typeLabel:"General",ids:q}]:[],orderedIds:q}}const Q=eZ($,Y),H=mY(Z),L=Q.filter((q)=>{if(!H||H==="all")return!0;return mY(q.key)===H}).filter((q)=>q.ids.length>=2);return{groupedIds:L,orderedIds:L.flatMap((q)=>q.ids)}},pJ=(J,Y)=>[J,Y].sort().join("__"),$X=(J)=>{if(!J||typeof J!=="object")return null;const Y=String(J.winnerId||"").trim(),Z=String(J.loserId||"").trim();if(!Y||!Z||Y===Z)return null;return{winnerId:Y,loserId:Z,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},fY=(J={},Y="")=>!!$X(J?.[Y]),GX=(J={},Y=[])=>{const Z=new Set((Y||[]).filter(Boolean)),$={},Q={},H={};Object.entries(J||{}).forEach(([j,E])=>{const C=$X(E);if(!C)return;const{winnerId:A,loserId:R}=C;if(Z.size&&(!Z.has(A)||!Z.has(R)))return;const U=pJ(A,R),z={winnerId:A,loserId:R,reason:"direct",playedAt:C.playedAt??Date.now()};$[U]=z;Q[U]=z;if(!H[A])H[A]=new Set;H[A].add(R)});new Set([...Object.keys(H),...Object.values(H).flatMap((j)=>[...j])]).forEach((j)=>{const E=[...H[j]||[]],C=new Set;while(E.length){const A=E.shift();if(!A||C.has(A)||A===j)continue;C.add(A);const R=pJ(j,A);if(!Q[R])Q[R]={winnerId:j,loserId:A,reason:"transitive",playedAt:null};(H[A]||[]).forEach((U)=>{if(!C.has(U))E.push(U)})}});const q=Object.fromEntries(Object.entries(H).map(([j,E])=>[j,[...E]])),W=S1(Q);return{directMatchups:$,matchups:Q,victoryGraph:q,stats:W}},kX=(J,Y={})=>{const Z=VJ(J);if(!Z)return null;const $=wX(F),Q=GX(Y?.directMatchups||Y?.matchups||{},$);return{arenaName:Z,orderedIds:$,...Q}},cY=(J={},Y="",Z="")=>{if(!Y||!Z||Y===Z)return!1;const $=pJ(Y,Z);return fY(J,$)},k1=(J=[],Y={})=>{for(let Z=0;Z<J.length-1;Z++)for(let $=Z+1;$<J.length;$++)if(!cY(Y,J[Z],J[$]))return[J[Z],J[$]];return null},sY=(J=[],Y={},Z={})=>{const $={...Y||{},...Z||{}};for(const Q of J){const H=k1(Q?.ids||[],$);if(H)return H}return null},SX=(J=[],Y,Z="")=>{if(!Y)return null;return J.find(($)=>{const Q=$?.ids||[];if(!Q.includes(Y))return!1;return!Z||Q.includes(Z)})||null},S1=(J={})=>{return Object.keys(J||{}).reduce((Y,Z)=>{const $=$X(J[Z]);if(!$)return Y;const{winnerId:Q,loserId:H}=$,L=Y[Q]||{wins:0,battles:0},q=Y[H]||{wins:0,battles:0};return{...Y,[Q]:{wins:L.wins+1,battles:L.battles+1},[H]:{wins:q.wins,battles:q.battles+1}}},{})},J0=(J="",Y="")=>{const Z=String(Y||"").trim();if(!J||!Z)return!1;return J.endsWith(`::${Z}`)},x1=(J,Y)=>{const Z=$X(Y);if(!Z||Z.reason!=="direct")return J||null;const $=$X(J);if(!$||$.reason!=="direct")return Z;const Q=$.playedAt??0;return(Z.playedAt??0)>=Q?Z:$},X0=(J,Y=_J)=>{const Z=String(J||"").trim();if(!Z)return GX({},[]);const $={};Object.entries(Y||{}).forEach(([H,L])=>{if(!J0(H,Z))return;const q=L?.directMatchups||{};Object.entries(q).forEach(([W,j])=>{$[W]=x1($[W],j)})});const Q=[...F||[]].map((H)=>H?.firebaseId).filter(Boolean).sort((H,L)=>String(H).localeCompare(String(L),"es",{sensitivity:"base"}));return GX($,Q)},Y0=(J,Y)=>{const $=(X0(J).stats||{})[Y]||{wins:0,battles:0},Q=$.battles?Math.round($.wins/$.battles*100):0;return{...$,score:Q}},Z0=(J,Y=_J)=>{const Z=X0(J,Y).stats||{};return[...F||[]].filter(($)=>$?.firebaseId).reduce(($,Q)=>{const H=Z[Q.firebaseId]||{wins:0,battles:0};$[Q.firebaseId]=H.battles?Math.round(H.wins/H.battles*100):0;return $},{})},C2=(J=[],Y={})=>{for(let Z=0;Z<J.length-1;Z++)for(let $=Z+1;$<J.length;$++){const Q=pJ(J[Z],J[$]);if(!fY(Y,Q))return[J[Z],J[$]]}return null},$0=(J,Y,Z=null)=>{if(!Y)return null;const $=H2.includes(Y.mode)?Y.mode:"GENERAL",Q=String(Y.groupKey||"all").trim().toLowerCase()||"all",H=uY(F,$,Q),L=H.groupedIds||[],q=H.orderedIds||[],W=kX(J,Z||DJ?.[VJ(J)]||{}),j=W?.directMatchups||{},E=W?.matchups||{},C=W?.victoryGraph||{},A=W?.stats||{},R=Y.championId,U=Y.challengerId,z=SX(L,R,U),N=!!R&&!!U&&R!==U&&!!z&&!cY(E,R,U),P=L.length?sY(L,Y.matchups||{},E):null,u=N?[R,U]:P,HJ=!P,s=SX(L,u?.[0],u?.[1]);return{...Y,mode:$,groupKey:Q,groupedIds:L,orderedIds:q,stats:A,directMatchups:j,matchups:E,victoryGraph:C,championId:u?u[0]:null,challengerId:u?u[1]:null,activeGroupKey:s?.key||null,activeGroupLabel:s?`${s.typeLabel}: ${s.label}`:"",isFinished:HJ}};i(()=>{if(!F.length)return;const J={},Y=[];Object.entries(_J||{}).forEach(([Z,$])=>{const{arenaName:Q}=z0(Z),H=$0(Q,$,DJ?.[VJ(Q)]);if(!H)return;if(JSON.stringify($)===JSON.stringify(H))return;J[Z]=H;Y.push(w.ref(`arenaBattleState/${Z}`).set(H).catch((q)=>console.error("No se pudo normalizar el estado del arena:",q)))});if(!Object.keys(J).length)return;xJ((Z)=>({...Z,...J}));Promise.all(Y).catch(()=>{})},[_J,DJ,F]);i(()=>{if(!F.length)return;const J={};Object.entries(_J||{}).forEach(([$,Q])=>{const{arenaName:H}=z0($),L=VJ(H);if(!L)return;if(!J[L])J[L]={};Object.entries(Q?.directMatchups||{}).forEach(([q,W])=>{const j=$X(W);if(!j)return;J[L][q]={winnerId:j.winnerId,loserId:j.loserId,reason:"direct",playedAt:j.playedAt??Date.now()}})});const Y=[],Z={};Object.entries(J).forEach(([$,Q])=>{const H=VJ($);if(!H||DJ?.[H])return;const L=kX($,{directMatchups:Q});if(!L)return;Z[H]=L;Y.push(w.ref(`arenaGlobalState/${H}`).set(L).catch((q)=>console.error("No se pudo migrar arenaGlobalState:",q)))});if(!Object.keys(Z).length)return;yJ(($)=>({...$,...Z}));Promise.all(Y).catch(()=>{})},[_J,DJ,F]);const Q0=(J,Y=K,Z=c)=>{const $=[...F].filter((z)=>z?.firebaseId&&(z?.nombre||"").trim()).sort((z,N)=>(z.nombre||"").localeCompare(N.nombre||"","es",{sensitivity:"base"}));if($.length<2)return;const Q=String(Y||"GENERAL").trim().toUpperCase(),H=uY($,Q,Z),L=H.groupedIds||[],q=H.orderedIds||[],W=VJ(J),j=kX(J,DJ?.[W]||{}),E=j?.matchups||{},C=sY(L,{},E),A=C?SX(L,C[0],C[1]):null,R={mode:Q,groupKey:String(Z||"").trim().toLowerCase()||"all",groupedIds:L,orderedIds:q,stats:j?.stats||{},directMatchups:j?.directMatchups||{},matchups:E,victoryGraph:j?.victoryGraph||{},championId:C?C[0]:null,challengerId:C?C[1]:null,activeGroupKey:A?.key||null,activeGroupLabel:A?`${A.typeLabel}: ${A.label}`:"",isFinished:!C},U=LX(J,Y,Z);if(!U)return;xJ((z)=>({...z,[U]:R}));if(!DJ?.[W]){yJ((z)=>({...z,[W]:j}));w.ref(`arenaGlobalState/${W}`).set(j).catch((z)=>console.error("No se pudo guardar arenaGlobalState inicial:",z))}w.ref(`arenaBattleState/${U}`).set(R).catch((z)=>console.error("No se pudo guardar el estado del arena:",z))},P1=async(J,Y,Z)=>{if(!J)return;try{await w.ref(`perfiles/${J}/puntuaciones/${Y}`).set(Z)}catch($){console.error("No se pudo actualizar score del arena:",$)}},H0=(J,Y,Z=K,$=c)=>{const Q=LX(J,Z,$),H=_J[Q];if(!H||H.isFinished)return;const L=VJ(J),q=kX(J,DJ?.[L]||{}),W=Array.isArray(H.groupedIds)&&H.groupedIds.length?H.groupedIds:uY(F,H.mode||"GENERAL",H.groupKey||"all").groupedIds,{championId:j,challengerId:E}=H;if(Y!==j&&Y!==E)return;const C=Y===j?E:j;if(!Y||!C)return;if(cY(q?.matchups||{},Y,C))return;const A=pJ(Y,C),R={...q?.directMatchups||{},[A]:{winnerId:Y,loserId:C,reason:"direct",playedAt:Date.now()}},U=GX(R,wX(F)),z=U.matchups,N=U.stats||{},P=SX(W,Y,C),HJ=((ZJ,e,HX)=>{if(!e)return null;for(const iJ of ZJ){if(!iJ||iJ===e)continue;const f1=pJ(e,iJ);if(!fY(HX,f1))return iJ}return null})(P?.ids||[],Y,z),s=HJ?[Y,HJ]:sY(W,H.matchups||{},z),a=SX(W,s?.[0],s?.[1]),g={arenaName:L,orderedIds:wX(F),directMatchups:U.directMatchups,matchups:z,victoryGraph:U.victoryGraph,stats:N},r={...H,groupedIds:W,directMatchups:g.directMatchups,stats:N,matchups:z,victoryGraph:U.victoryGraph,championId:s?s[0]:null,challengerId:s?s[1]:null,activeGroupKey:a?.key||null,activeGroupLabel:a?`${a.typeLabel}: ${a.label}`:"",isFinished:!s},jJ={..._J||{},[Q]:r},YJ=Z0(J,jJ);I((ZJ)=>ZJ.map((e)=>{if(!e?.firebaseId||!Object.prototype.hasOwnProperty.call(YJ,e.firebaseId))return e;const HX=YJ[e.firebaseId];return{...e,puntuaciones:{...e.puntuaciones||{},[J]:HX}}}));Object.entries(YJ).forEach(([ZJ,e])=>{P1(ZJ,J,e)});xJ((ZJ)=>({...ZJ,[Q]:r}));yJ((ZJ)=>({...ZJ,[L]:g}));Promise.all([w.ref(`arenaGlobalState/${L}`).set(g),w.ref(`arenaBattleState/${Q}`).set(r)]).catch((ZJ)=>console.error("No se pudo guardar avance de batallas:",ZJ))},b1=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((F||[]).map((Y)=>{if(!Y?.firebaseId)return Promise.resolve();return w.ref(`perfiles/${Y.firebaseId}/puntuaciones`).set(xX())}));I((Y)=>Y.map((Z)=>({...Z,puntuaciones:xX()})));xJ({});yJ({});await w.ref("arenaBattleState").remove();await w.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(Y){console.error("No se pudieron resetear las calificaciones:",Y);alert("No se pudo completar el reseteo.")}},v1=async(J,Y=K,Z=c)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const Q={..._J||{}},H=Object.keys(Q).filter((q)=>J0(q,J));H.forEach((q)=>delete Q[q]);await Promise.all(H.map((q)=>w.ref(`arenaBattleState/${q}`).remove()));xJ(Q);await Promise.all((F||[]).map((q)=>{if(!q?.firebaseId)return Promise.resolve();return w.ref(`perfiles/${q.firebaseId}/puntuaciones/${J}`).set(0)}));I((q)=>q.map((W)=>({...W,puntuaciones:{...W.puntuaciones||{},[J]:0}})));const L=LX(J,Y,Z);xJ((q)=>{if(!q?.[L])return q;const W={...q};delete W[L];return W});yJ((q)=>{const W=VJ(J);if(!q?.[W])return q;const j={...q};delete j[W];return j});await w.ref(`arenaBattleState/${L}`).remove();await w.ref(`arenaGlobalState/${VJ(J)}`).remove();alert(`Se reseteó "${J}" (${WX(Y)}) y se limpió su estado de batallas.`)}catch(Q){console.error("No se pudo resetear el item:",Q);alert("No se pudo resetear ese item.")}},j0=async(J,Y,Z,$=K,Q=c)=>{const H=LX(J,$,Q),L=_J?.[H],q=VJ(J),W=kX(J,DJ?.[q]||{});if(!L){alert("Esa arena no tiene estado cargado.");return}const j=W?.matchups||{},E=W?.directMatchups||{};if(!Object.keys(j).filter((U)=>!!j[U]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const A=pJ(Y,Z);if(!j[A]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!E[A]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const U={...E};delete U[A];const z=GX(U,wX(F)),N={arenaName:q,orderedIds:wX(F),directMatchups:z.directMatchups,matchups:z.matchups,victoryGraph:z.victoryGraph,stats:z.stats},P={...L,directMatchups:N.directMatchups,matchups:N.matchups,victoryGraph:N.victoryGraph,stats:N.stats},u=$0(J,P,N);if(!u){alert("No se pudo recomponer el estado del arena.");return}xJ((a)=>({...a,[H]:u}));yJ((a)=>({...a,[q]:N}));await Promise.all([w.ref(`arenaGlobalState/${q}`).set(N),w.ref(`arenaBattleState/${H}`).set(u)]);const HJ={..._J||{},[H]:u},s=Z0(J,HJ);await Promise.all(Object.entries(s).map(async([a,g])=>{await w.ref(`perfiles/${a}/puntuaciones/${J}`).set(g)}));I((a)=>a.map((g)=>{if(!g?.firebaseId||!Object.prototype.hasOwnProperty.call(s,g.firebaseId))return g;const r=s[g.firebaseId];return{...g,puntuaciones:{...g.puntuaciones||{},[J]:r}}}));alert("Batalla reseteada correctamente.")}catch(U){console.error("No se pudo resetear la batalla:",U);alert("No se pudo resetear esa batalla.")}},I1=f(()=>{const J=F;if(B==="RANKING")return[...J].sort((Y,Z)=>parseFloat(LJ(Z))-parseFloat(LJ(Y)));if(B==="CATEGORIAS"&&XJ)return J.filter((Y)=>ZY(Y).includes(XJ));return J},[F,B,XJ]),q0=f(()=>{return new Set(wJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[wJ]),jY=f(()=>{const J=String(zY||"").trim().toLowerCase(),Y=($)=>{return[$?.profesion,$?.profesiones].flatMap((H)=>{if(Array.isArray(H))return H;if(typeof H==="string")return H.split(",");return[]}).map((H)=>String(H||"").trim()).filter(Boolean).join(" ")},Z=($)=>{if(!$||typeof $!=="object")return!1;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),String($.ciudad||"").trim(),Y($),String($.fechaNacimiento||"").trim(),String($.estaturaCm||"").trim()].some(Boolean)||Array.isArray($.fotos)&&$.fotos.some(Boolean)};return[...F||[]].filter(($)=>{if(!Z($))return!1;if(YX&&X2($))return!1;if(nX){const H=String($?.firebaseId||$?.id||"").trim();if(!H||!q0.has(H))return!1}if(!J)return!0;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),Y($)].join(" ").toLowerCase().includes(J)}).sort(($,Q)=>String($?.nombre||"").localeCompare(String(Q?.nombre||""),"es",{sensitivity:"base"}))},[F,zY,YX,nX,q0]),m=f(()=>jY.find((J)=>J?.firebaseId===sX)||null,[jY,sX]);i(()=>{const J=()=>zX("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const g1=f(()=>{if(!K)return[];return eZ(F,K)},[F,K]),qY=K&&K!=="GENERAL",_0=(J,Y)=>{if(Y==="promedio")return Number(LJ(J))||0;if(Y==="nombre")return(J.nombre||"").toLowerCase();if(Y==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(Y==="edad"){const Z=gJ(J.fechaNacimiento);return typeof Z==="number"?Z:-1}if(Y==="Rostro")return JY(J)||0;if(Y==="Cuerpo")return XY(J)||0;if(Y==="Actitud")return YY(J)||0;return Number(J.puntuaciones?.[Y]||0)},h1=(J)=>{if(QJ==="promedio")return LJ(J);if(QJ==="Rostro")return JY(J).toFixed(0);if(QJ==="Cuerpo")return XY(J).toFixed(0);if(QJ==="Actitud")return YY(J).toFixed(0);if(rJ.includes(QJ))return Number(J.puntuaciones?.[QJ]||0).toFixed(0);return LJ(J)},QX=(J,Y="asc")=>{if(QJ===J){UY((Z)=>Z==="asc"?"desc":"asc");return}jZ(J);UY(Y)},y1=(J,Y)=>{const Z=dJ[Y]||[],$=new Set,Q=new Set,H=Object.entries(_J||{});Z.forEach((W)=>{const j=DJ?.[VJ(W)]?.matchups||{};Object.values(j).forEach((E)=>{if(!E||typeof E!=="object")return;if(E.winnerId===J&&E.loserId)$.add(E.loserId);if(E.loserId===J&&E.winnerId)Q.add(E.winnerId)})});const L=new Map((F||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),q=(W)=>[...W].map((j)=>L.get(j)).filter(Boolean).sort((j,E)=>j.localeCompare(E,"es",{sensitivity:"base"}));return{wins:q($),losses:q(Q)}},dY=(J,Y)=>{const Z=String(Y||"").trim(),$=String(J||"").trim();if(!Z||!$)return{arenaName:Z,wins:[],losses:[]};const Q=DJ?.[VJ(Z)]?.matchups||{},H=new Map((F||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),L=([W,j])=>{if(!j||typeof j!=="object")return null;const E=String(j.winnerId||"").trim(),C=String(j.loserId||"").trim();if(!E||!C)return null;const A=E===$;if(!A&&C!==$)return null;const U=A?C:E;return{pairKey:W,arenaName:Z,profileId:$,opponentId:U,opponentName:H.get(U)||"Sin nombre",winnerId:E,loserId:C}},q=Object.entries(Q).map(L).filter(Boolean).sort((W,j)=>W.opponentName.localeCompare(j.opponentName,"es",{sensitivity:"base"}));return{arenaName:Z,wins:q.filter((W)=>W.winnerId===$),losses:q.filter((W)=>W.loserId===$)}},m1=(J,Y)=>{const Z=dY(J,Y),$=Z.wins.length,Q=Z.losses.length,H=$+Q,L=H?$/H*100:0;return{wins:$,losses:Q,total:H,winRate:L}},nY=[...I1].sort((J,Y)=>{const Z=_0(J,QJ),$=_0(Y,QJ);let Q=0;if(typeof Z==="string"||typeof $==="string")Q=String(Z).localeCompare(String($),"es",{sensitivity:"base"});else Q=Z-$;if(Q===0)return(J.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"});return uJ==="asc"?Q:-Q}),pY=!AJ,u1=f(()=>VY?nY:nY.slice(0,10),[nY,VY]);return X("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[AJ&&X("aside",{className:"hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative",children:[X("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),X("div",{className:"mb-12 text-center flex-shrink-0",children:[X("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"CAMPEONAS",icon:"crown",label:"Campeonas"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>X("button",{onClick:()=>{M(J.id);DX(null);RX(null);JJ(null);cJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${B===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[X(l,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),X("button",{onClick:()=>uZ(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[X(l,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[X("button",{onClick:()=>I0((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":AJ?"Replegar menú lateral":"Desplegar menú lateral",title:AJ?"Replegar menú lateral":"Desplegar menú lateral",children:X(l,{name:AJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${AJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[X("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),X("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),m&&X("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>cJ(""),role:"presentation",children:X("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[X("button",{type:"button",onClick:()=>cJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:X(l,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[X("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:X("img",{src:m.fotos?.[0]||"https://via.placeholder.com/500x700",alt:m.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"space-y-6",children:[X("div",{children:[X("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),X("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:m.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!m?.isAnonymousGallery&&X("div",{className:"grid grid-cols-1 gap-4",children:[X("article",{className:"taller-data-chip",children:[X("span",{children:"Profesión"},void 0,!1,void 0,this),X("strong",{children:m.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),X("strong",{children:`${m.nacionalidad||"No definida"} - ${m.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),X("strong",{children:`${m.fechaNacimiento||"No informado"} - ${gJ(m.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Estatura"},void 0,!1,void 0,this),X("strong",{children:m.estaturaCm?`${m.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"pt-2",children:X("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!m?.isAnonymousGallery&&X("button",{type:"button",onClick:()=>{hX({isOpen:!0,profile:m})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>{const J=D.current,Y=J&&!J.closed?J:window.open("","_blank");D.current=Y;LY({targetWindow:Y,profileName:m?.nombre||"",profession:m?.profesion||"",photos:[...(m?.galeria?.fotos||[]).map((Z,$)=>({...n(Z,"image"),sourceTag:"fotos",sourceIndex:$})),...(m?.galeria?.videos||[]).map((Z,$)=>({...n(Z,"video"),sourceTag:"videos",sourceIndex:$}))],editingId:m?.firebaseId||m?.id||"",battlePhotoPrefs:m?.batallaFotosPreferidas||m?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:m?.fotos?.[0]||""});yZ(m?.firebaseId||m?.id||"");Y?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!m?.isAnonymousGallery&&X(SJ,{children:[X("button",{type:"button",onClick:()=>{cJ("");rX(m)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>hY(m),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),B==="TALLER"&&X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{className:"space-y-2",children:X("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"max-w-2xl",children:X("input",{id:"tallerSearchInput",type:"text",value:zY,onChange:(J)=>BZ(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-3",children:[X("button",{type:"button",onClick:()=>s0((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${YX?"btn-metal--danger":""}`,children:["Fotos incompletas ",YX?"(Activo)":""]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>d0((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${nX?"btn-metal--danger":""}`,children:["Fotos Rotas ",nX?"(Activo)":""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:jY.map((J)=>{const Y=$J(J.profesion),Z=sX&&sX===J.firebaseId,$=Y2(J),Q=n0===(J.firebaseId||J.nombre);return X("button",{type:"button",onClick:()=>{if(oX.current){oX.current=!1;return}zX("");cJ("");rX(J)},onContextMenu:(H)=>{if(!YX||!$.length)return;H.preventDefault();H.stopPropagation();zX((L)=>L===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!YX||!$.length)return;oX.current=!1;clearTimeout(tX.current);tX.current=setTimeout(()=>{oX.current=!0;zX(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(tX.current)},onTouchMove:()=>{clearTimeout(tX.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Z?"taller-card--selected":""}`,children:[X("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:X("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),X("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),X("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:Y.color,textShadow:`0 0 12px ${Y.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),Q&&X("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(H)=>{H.preventDefault();H.stopPropagation();p0(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[X("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),X("ul",{className:"space-y-1 mb-2",children:$.map((H)=>X("li",{className:"leading-tight",children:["• ",H]},H,!0,void 0,this))},void 0,!1,void 0,this),X("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!jY.length&&X("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),X($2,{isOpen:m0,profile:m,onClose:()=>u0(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),B==="CAMPEONAS"&&!XJ&&(()=>{const J=[{id:"18-23",min:18,max:23},{id:"24-29",min:24,max:29},{id:"30-35",min:30,max:35},{id:"36-41",min:36,max:41},{id:"42-60",min:42,max:60}],Y=(F||[]).filter(Boolean),Z=(j=[])=>[...j].sort((E,C)=>(Number(LJ(C))||0)-(Number(LJ(E))||0)).slice(0,3),$={nacionalidades:[],profesiones:[],edades:[],items:[],caracteristicas:[]},Q=Z(Y);[...new Set(Y.map((j)=>String(j.nacionalidad||"").trim()).filter(Boolean))].forEach((j)=>$.nacionalidades.push({id:`nac-${j}`,title:`Nacionalidad · ${j}`,top:Z(Y.filter((E)=>String(E.nacionalidad||"").trim()===j))}));J.forEach((j)=>$.edades.push({id:`edad-${j.id}`,title:`Edad · ${j.id}`,top:Z(Y.filter((E)=>{const C=gJ(E.fechaNacimiento);return typeof C==="number"&&C>=j.min&&C<=j.max}))}));[...new Set(Y.map((j)=>String(j.profesion||"").trim()).filter(Boolean))].forEach((j)=>$.profesiones.push({id:`prof-${j}`,title:`Profesión · ${j}`,top:Z(Y.filter((E)=>String(E.profesion||"").trim()===j))}));rJ.forEach((j)=>{const E=[...Y].sort((C,A)=>(Number(A?.puntuaciones?.[j])||0)-(Number(C?.puntuaciones?.[j])||0)).slice(0,3);$.items.push({id:`item-${j}`,title:`Ítem · ${j}`,top:E,scoreType:"item",scoreKey:j})});[["Cuerpo",["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"]],["Rostro",["Rostro","Ojos","Boca","Cabello"]],["Actitud",["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]]].forEach(([j,E])=>{const C=[...Y].map((A)=>({...A,__metaScore:E.reduce((R,U)=>R+(Number(A?.puntuaciones?.[U])||0),0)/E.length})).sort((A,R)=>(R.__metaScore||0)-(A.__metaScore||0)).slice(0,3);$.caracteristicas.push({id:`meta-${j}`,title:j,top:C,scoreType:"meta"})});const q=[{id:"general",title:"Podio de puntuación general",cards:[{id:"general-score",title:"General · Ranking total",top:Q}]},{id:"nacionalidades",title:"Podios por nacionalidades",cards:$.nacionalidades},{id:"profesiones",title:"Podios por profesión",cards:$.profesiones},{id:"edades",title:"Podios por edades",cards:$.edades},{id:"items",title:"Podios por ítem",cards:$.items},{id:"caracteristicas",title:"Podios por características",cards:$.caracteristicas}],W=(j,E=!1)=>X("article",{className:`champion-podium-card champion-podium-card--${E?"general":"section"} rounded-2xl p-5`,children:[X("h3",{className:`champion-podium-title text-xs font-black uppercase tracking-[0.18em] mb-3 ${E?"text-[var(--metal-gold)]":"text-cyan-100"}`,children:j.title},void 0,!1,void 0,this),X("ol",{className:"space-y-2",children:j.top.length?j.top.map((C,A)=>{const R=qJ(String(C?.fotos?.[0]||"").trim(),""),U=A===0;return X("li",{className:`champion-rank-row champion-rank-row--${A+1} flex items-center justify-between gap-3 text-xs`,children:[X("div",{className:"flex items-center gap-2 min-w-0",children:[U&&R&&X("div",{className:"flex flex-col items-center shrink-0 -mt-1",title:`Campeona de ${j.title}`,children:[X("span",{className:"text-[12px] leading-none -mb-0.5","aria-hidden":"true",children:"\uD83D\uDC51"},void 0,!1,void 0,this),X("img",{src:R,alt:`Miniatura de ${C.nombre||"Campeona"}`,className:`champion-avatar w-8 h-8 rounded-full object-cover border ${E?"champion-avatar--general":"champion-avatar--section"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("span",{className:`champion-rank-name font-black truncate ${U?"champion-rank-name--winner":"text-slate-100"}`,children:[A+1,". ",C.nombre||"Sin nombre"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("span",{className:`champion-score font-black shrink-0 ${A===0?"champion-score--winner":""}`,children:LJ(C)},void 0,!1,void 0,this)]},`${j.id}-${C.firebaseId||C.nombre||A}`,!0,void 0,this)}):X("li",{className:"text-xs text-slate-400",children:"Sin datos suficientes."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},j.id,!0,void 0,this);return X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Campeonas"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Podios organizados por secciones"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-7",children:q.map((j)=>X("section",{className:"space-y-3",children:[X("h3",{className:"text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85",children:j.title},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:j.cards.map((E)=>W(E,j.id==="general"))},void 0,!1,void 0,this)]},j.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),B==="anonimo"&&!XJ&&X("div",{className:"space-y-8 animate-in fade-in duration-500",children:X("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[X("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),X("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),X("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),X("div",{className:"mt-8 space-y-5",children:[X("div",{className:"grid gap-3 sm:grid-cols-3",children:[{key:"imagen",label:"Imagen"},{key:"escena",label:"Escena"},{key:"audio",label:"Audio"}].map((J)=>X("button",{type:"button",onClick:()=>{h0(J.key);TY("");IJ("")},className:`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${XX===J.key?"text-cyan-100 border-cyan-300/50 bg-cyan-500/35":"text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35"}`,children:J.label},J.key,!1,void 0,this))},void 0,!1,void 0,this),(XX==="imagen"||XX==="escena")&&X("div",{className:"grid gap-4 md:grid-cols-2",children:[X("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:TZ,onChange:(J)=>g0(J.target.value),children:WJ.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),X("input",{placeholder:"URL",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:AZ,onChange:(J)=>zZ(J.target.value)},void 0,!1,void 0,this),X("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:MZ,onChange:(J)=>NZ(J.target.value)},void 0,!1,void 0,this),X("button",{type:"button",onClick:async()=>{await r0(XX==="escena"?"videos":"fotos")},className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:["Guardar ",XX]},void 0,!0,void 0,this),KZ&&X("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:KZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),XX==="audio"&&X("div",{className:"border-t border-cyan-300/25 pt-4 mt-2 space-y-3",children:[X("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audio para botón \uD83C\uDFB5"},void 0,!1,void 0,this),X("input",{placeholder:"Nombre",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:GZ,onChange:(J)=>kZ(J.target.value)},void 0,!1,void 0,this),X("input",{placeholder:"URL",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:SZ,onChange:(J)=>xZ(J.target.value)},void 0,!1,void 0,this),X("button",{type:"button",onClick:e0,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar audio en Firebase"},void 0,!1,void 0,this),X("div",{className:"space-y-2 pt-2",children:[X("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audios guardados"},void 0,!1,void 0,this),vJ.length?X("ul",{className:"space-y-2",children:vJ.map((J,Y)=>X("li",{className:"flex items-center justify-between gap-3 rounded-xl border border-slate-500/45 bg-slate-900/55 px-3 py-2",children:[X("span",{className:"text-sm text-slate-100 font-bold truncate",children:J.nombre},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>J1(Y),className:"shrink-0 w-8 h-8 rounded-full border border-rose-300/55 text-rose-200 hover:text-white hover:bg-rose-500/35 transition-all font-black text-lg leading-none","aria-label":`Eliminar audio ${J.nombre}`,title:`Eliminar ${J.nombre}`,children:"×"},void 0,!1,void 0,this)]},`${J.url}-${J.nombre}-${Y}`,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-slate-300/80 font-semibold",children:"No hay audios guardados todavía."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),PZ?X("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:PZ},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),B==="EXPLORAR"&&!XJ&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((F||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const Y=(F||[]).filter(($)=>String($?.profesion||"").trim()===J).length,Z=PX(J);return X("div",{onClick:()=>DX(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Z.baseColor,"--folder-glow":Z.glowColor},children:[X("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:_2(J)},void 0,!1,void 0,this),X("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),X("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:X("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[Y," ",Y===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),XJ&&X("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[X("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":B==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":PX(XJ).baseColor},children:[X("div",{className:"flex items-center gap-3",children:[X("button",{onClick:()=>DX(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:X("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:X("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:()=>uZ(B==="CATEGORIAS"?"":XJ),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:B==="CATEGORIAS"?p.find((J)=>J.firebaseId===XJ)?.label||"Archivo del Reino":XJ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(F||[]).filter((J)=>{if(!J)return!1;if(B==="CATEGORIAS")return ZY(J).includes(XJ);return String(J.profesion||"").trim().toLowerCase()===String(XJ).trim().toLowerCase()}).map((J)=>{const Y=Number(typeof LJ==="function"?LJ(J):0)||0,Z=Y>=95?"card-score-badge--gold":Y>=86?"card-score-badge--diamond":Y>=75?"card-score-badge--fire":"",$=$J(J.profesion);return X("div",{onClick:()=>{UX(null);BZ("");cJ(J.firebaseId||"")},onContextMenu:(Q)=>N1(Q,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":$.color,"--card-neon-glow":$.sombra},children:X("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[X("img",{src:qJ(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:kJ},void 0,!1,void 0,this),X("div",{className:"absolute top-3 left-3 z-20",children:[X("button",{type:"button",onClick:(Q)=>{Q.stopPropagation();IX("");VX(J);UX((H)=>H===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:X(l,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),k0===J.firebaseId&&X("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:(Q)=>Q.stopPropagation(),children:[X("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{UX(null);rX(J)},children:"Editar"},void 0,!1,void 0,this),X("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{hY(J);UX(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:(Q)=>{Q.stopPropagation();hX({isOpen:!0,profile:J})},className:`card-score-badge ${Z} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[Y>=75&&Y<=85&&X("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),X("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),X("span",{className:"card-score-badge__value text-lg font-black",children:typeof LJ==="function"?LJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute bottom-4 left-4 right-4",children:X("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[X("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,X("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof gJ==="function"?gJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex justify-between items-center mt-1",children:[X("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),X("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),EY&&CJ&&X("div",{ref:T,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${HZ.y}px`,left:`${HZ.x}px`},children:[X("button",{type:"button",onClick:K1,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:w1,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),B==="GALERIA"&&!XJ&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${$Y} · ${C1}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:[d1.map((J)=>X("button",{type:"button",onClick:()=>b0(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${h===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:L0[J]},J,!1,void 0,this)),X("button",{type:"button",onClick:()=>KY(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[X("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",wJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:NX.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:y.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:WJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:Z1},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),h!=="PERSONAJE"&&QY&&!nJ?X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:hJ.map((J)=>X("button",{type:"button",onClick:()=>{RX(J);JJ(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:X("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?X("img",{src:qJ(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:kJ},void 0,!1,void 0,this):X("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:X(l,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),X("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[X("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),X("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):X(SJ,{children:[h!=="PERSONAJE"&&QY&&X("div",{className:"flex items-center gap-3",children:X("button",{type:"button",onClick:()=>{RX(null);JJ(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[X(l,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),h==="PERSONAJE"&&X("div",{className:"space-y-4",children:[X("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[X("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),X("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>_1(J.target.value),children:[X("option",{value:"",disabled:!0,children:pZ.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),pZ.map((J)=>X("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),KJ.length>0?X("div",{className:"flex flex-wrap gap-2",children:KJ.map((J)=>X("button",{type:"button",onClick:()=>O1(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,X(l,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h==="ETIQUETA"&&X("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:WJ.map((J)=>X("button",{onClick:()=>W1(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:WY(J,eJ.includes(J)),children:[J," · ",(vY[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),h==="PERSONAJE"&&X("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[X("button",{onClick:()=>CY("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:WY("INICIAL",PJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),WJ.map((J)=>{return X("button",{onClick:()=>CY(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:WY(J,PJ===J),children:[J," · ",$1[J]||0]},J,!0,void 0,this)}),X("button",{onClick:()=>CY("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:WY("100",PJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{type:"button",onClick:()=>tZ(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!y.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[X(l,{name:"play",size:14},void 0,!1,void 0,this),"Play ",nJ?.nombre||$Y]},void 0,!0,void 0,this),X("button",{type:"button",onClick:L1,disabled:LZ||!y.length,className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed",title:"Descargar toda la multimedia visible en un ZIP",children:[X(l,{name:"download",size:14},void 0,!1,void 0,this),LZ?"Generando ZIP...":"DESCARGAR TODO"]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>y0((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${MY?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería",children:"\uD83C\uDFB5"},void 0,!1,void 0,this),vJ.length>0&&X(SJ,{children:[X("select",{className:"filter-select min-w-[180px]",value:fX,onChange:(J)=>bZ(J.target.value),children:[X("option",{value:"",children:"Audio principal"},void 0,!1,void 0,this),vJ.map((J,Y)=>X("option",{value:J.url,children:J.nombre},`${J.url}-${Y}`,!1,void 0,this))]},void 0,!0,void 0,this),X("select",{className:"filter-select min-w-[180px]",value:cX,onChange:(J)=>vZ(J.target.value),children:[X("option",{value:"",children:"Audio secundario (opcional)"},void 0,!1,void 0,this),vJ.map((J,Y)=>X("option",{value:J.url,children:J.nombre},`${J.url}-b-${Y}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[X("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),X("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:AY,onChange:(J)=>v0(Number(J.target.value)),children:[3,5,7,10].map((J)=>X("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),y.length===0?X("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[X("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:X(l,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),X("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:h==="ETIQUETA"&&eJ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X(SJ,{children:[X("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:IY.map((J,Y)=>{const Z=tJ(J.label),$=PX(J.profesion);return X("button",{type:"button",onClick:()=>tZ(Y),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${$.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`},onMouseEnter:(Q)=>{Q.currentTarget.style.transform="translateY(-2px) scale(1.01)";Q.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${$.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${$.glowColor} 52%, transparent)`},onMouseLeave:(Q)=>{Q.currentTarget.style.transform="translateY(0) scale(1)";Q.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`},children:X("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const Q=_X(J.url);if(Q)return X("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[X("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),X("div",{children:[X("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),X("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:Q.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return X("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():X("img",{src:qJ(J.url,OX),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:kJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),X("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Z.bg,borderColor:Z.border,color:Z.text,boxShadow:`0 0 10px ${Z.glow}, 0 0 24px color-mix(in srgb, ${Z.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),X("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:X("div",{className:"flex items-end justify-between gap-3",children:[X("div",{className:"min-w-0 flex-1",children:[X("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?X("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),X("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),Q1&&X("div",{className:"flex justify-center mt-8",children:X("button",{type:"button",onClick:()=>WZ((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",IY.length,"/",y.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("audio",{ref:TX,loop:!0,preload:"none"},void 0,!1,void 0,this),X("audio",{ref:MX,loop:!0,preload:"none"},void 0,!1,void 0,this),S&&X("div",{ref:iX,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:AJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:oZ,children:[X("button",{type:"button",onClick:oZ,className:`btn-metal btn-metal--danger absolute ${NJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:X("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${NJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!NJ&&X("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[X("div",{children:[X("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:S.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[S.profesion,S.nacionalidad?` · ${S.nacionalidad}`:""]},void 0,!0,void 0,this),S.autor?X("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",S.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),X("div",{className:"flex items-center gap-3",children:[y.length>1&&X(SJ,{children:[X("button",{type:"button",onClick:()=>AX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${MJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>BY((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${bJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":bJ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:S.type==="video"?"VIDEO":S.isGif?"GIF":"IMG"},void 0,!1,void 0,this),X("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:tJ(S.label).bg,borderColor:tJ(S.label).border,color:tJ(S.label).text,boxShadow:`0 0 20px ${tJ(S.label).glow}`},children:S.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${NJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[S.type==="video"?(()=>{const J=_X(S.url);if(J)return X("iframe",{ref:kY,src:J.src,title:`${S.nombre} video`,className:`w-full ${NJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return X("video",{ref:kY,src:S.url,controls:!0,playsInline:!0,muted:gY,autoPlay:MJ,onEnded:()=>{if(MJ&&y.length>1)KX()},onError:()=>{if(y.length>1)KX()},className:`w-full ${NJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():X("img",{src:qJ(S.url,OX),alt:`${S.nombre} - ${S.label||"galería"}`,ref:kY,className:`w-full ${NJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{kJ(J);if(y.length>1)KX()}},void 0,!1,void 0,this),y.length>1&&X(SJ,{children:NJ?X("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]",children:[X("button",{type:"button",onClick:(J)=>{J.stopPropagation();BY((Y)=>!Y)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${bJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":bJ?"Aleatorio activado":"Aleatorio desactivado",children:bJ?"Random On":"Random Off"},void 0,!1,void 0,this),X("button",{type:"button",onClick:(J)=>{J.stopPropagation();AX((Y)=>!Y)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${MJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir",children:MJ?"Pause":"Play"},void 0,!1,void 0,this),X("button",{type:"button",onClick:(J)=>{J.stopPropagation();KX()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X("button",{type:"button",onClick:(J)=>{J.stopPropagation();KX()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!NJ&&X("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[X("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[BJ+1," de ",y.length," archivos visibles"]},void 0,!0,void 0,this),X("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[EZ?X(SJ,{children:[X("input",{type:"url",value:VZ,onChange:(J)=>uX(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),X("select",{value:UZ,onChange:(J)=>mX(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[X("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),WJ.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),X("button",{type:"button",onClick:F1,disabled:CZ,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:CZ?"Guardando...":"Guardar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>{mX(S?.label||"");uX(S?.url||"");fJ("");JX(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X("button",{type:"button",onClick:()=>JX(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[X("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),X("span",{children:S?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),EZ&&DZ&&X("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:DZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),NY&&X("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:AJ?{left:"18rem"}:void 0,onClick:()=>KY(!1),children:X("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[X("div",{className:"flex items-center justify-between gap-4 mb-5",children:[X("div",{children:[X("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[wJ.length," enlace",wJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>KY(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:X("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!iZ.length?X("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:X("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):iZ.map((J)=>X("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[X("div",{className:"mb-4",children:[X("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-3",children:J.fotos.map((Y)=>{const Z=!!f0[Y.id],$=!!c0[Y.id],Q=GY[Y.id]??Y.url;return X("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[X("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:X("img",{src:OX,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"space-y-2 min-w-0",children:[X("div",{className:"flex flex-wrap items-center gap-2",children:[X("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",Y.label||"Sin etiqueta"]},void 0,!0,void 0,this),X("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:Y.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("input",{type:"url",value:Q,onChange:(H)=>E1(Y.id,H.target.value),placeholder:"https://...",readOnly:!$,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!$?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[X("button",{type:"button",onClick:()=>U1(Y),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>aZ(Y.id,!0),disabled:Z,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>V1(Y),disabled:Z,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>D1(Y),disabled:Z,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Y.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),B==="BATALLAS"&&!XJ&&!G&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex flex-col gap-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{onClick:b1,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),X("button",{onClick:()=>N0((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M0&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[X("select",{value:JZ,onChange:(J)=>K0(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:aY.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),X("button",{onClick:()=>v1(JZ,K,c),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!K,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{children:[X("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!K?"Paso 1: elegí un modo de enfrentamiento":qY&&!c?`Paso 2: elegí una opción de ${WX(K)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${WX(K)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!K&&X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:rY.map((J)=>X("button",{onClick:()=>{UJ(J.id);TJ(J.id==="GENERAL"?"all":"");x(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),X("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),X("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),K&&X("div",{className:"space-y-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",WX(K)]},void 0,!0,void 0,this),X("button",{onClick:()=>{UJ(null);TJ("");x(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qY&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",WX(K)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:g1.map((J)=>X("button",{onClick:()=>{TJ(J.key);x(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${c===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",X("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qY&&!c&&X("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[aY.map((J)=>{const Y=LX(J,K,c),Z=Boolean(_J?.[Y]?.isFinished);return X("button",{disabled:qY&&!c,onClick:()=>{x(J);if(!_J[Y])Q0(J,K,c)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Z?"battle-mode-card--completed":""}`,children:[X("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Z?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),X("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Z&&X("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),B==="BATALLAS"&&G&&(()=>{const J=LX(G,K,c),Y=_J[J],Z=F.find((L)=>L.firebaseId===Y?.championId),$=F.find((L)=>L.firebaseId===Y?.challengerId),Q=Z?Y0(G,Z.firebaseId):null,H=$?Y0(G,$.firebaseId):null;return X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{onClick:()=>x(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[X("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),X("button",{onClick:()=>{x(null);UJ(null);TJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[X("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),X("button",{onClick:()=>G0((L)=>!L),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w0&&X("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const L=Object.keys(Y?.matchups||{}).filter((q)=>!!Y?.matchups?.[q]);if(!Y||!L.length)return X("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return X("div",{className:"space-y-2",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),L.map((q)=>{const[W,j]=q.split("__"),E=F.find((U)=>U.firebaseId===W),C=F.find((U)=>U.firebaseId===j),A=E?.nombre||W,R=C?.nombre||j;return X("button",{onClick:()=>j0(G,W,j,K,c),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:X("span",{className:"text-xs text-white font-semibold",children:[A," vs ",R]},void 0,!0,void 0,this)},q,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),X("div",{className:"min-w-0",children:[X("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:G},void 0,!1,void 0,this),X("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",WX(K)]},void 0,!0,void 0,this),Y?.activeGroupLabel&&X("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:Y.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!Y&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[X("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),X("button",{onClick:()=>Q0(G,K,c),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&Y.isFinished&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[X("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),X("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&Z&&$&&!Y.isFinished&&X("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[X("button",{onClick:()=>H0(G,Z.firebaseId,K,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":PX(Z.profesion).baseColor},children:[X("img",{src:A0(Z,G),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:kJ},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),X("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),G==="Estatura"&&X("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",rZ(Z)]},void 0,!0,void 0,this),X("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",Q?.wins||0," · Batallas: ",Q?.battles||0]},void 0,!0,void 0,this),X("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",Q?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-col items-center justify-center text-center",children:[X("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),G==="Estatura"&&X("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{onClick:()=>H0(G,$.firebaseId,K,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":PX($.profesion).baseColor},children:[X("img",{src:A0($,G),alt:$.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:kJ},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),X("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:$.nombre},void 0,!1,void 0,this),G==="Estatura"&&X("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",rZ($)]},void 0,!0,void 0,this),X("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),X("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),B==="RANKING"&&!XJ&&X("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[X("div",{className:"ranking-table-toolbar",children:X("button",{type:"button",onClick:()=>P0((J)=>!J),className:`ranking-toggle-totality ${VY?"is-active":"is-inactive"}`,children:"Ver totalidad"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"ranking-table-scroll",children:X("table",{className:`w-full ${pY?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[X("thead",{className:"theme-surface-soft",children:X("tr",{children:[X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:X("button",{type:"button",onClick:()=>QX("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",QJ==="nombre"?uJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>QX("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",QJ==="Rostro"?uJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>QX("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",QJ==="Cuerpo"?uJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>QX("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",QJ==="Actitud"?uJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),pY&&X(SJ,{children:[X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>QX("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",QJ==="nacionalidad"?uJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>QX("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",QJ==="edad"?uJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("th",{className:"px-8 py-6 text-right",children:X("div",{className:"flex flex-col items-end gap-1",children:[X("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),X("select",{value:QJ,onChange:(J)=>{jZ(J.target.value);UY("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[X("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),X("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[X("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),X("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),X("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:rJ.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("tbody",{children:u1.map((J,Y)=>X("tr",{onClick:()=>rX(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${Y===0?"podium-1":Y===1?"podium-2":Y===2?"podium-3":"hover:bg-white/5"}`,children:[X("td",{className:"px-8 py-5",children:X("span",{className:`font-black italic rock-carved-text ${Y===0?"text-gold text-4xl":Y===1?"text-silver text-3xl":Y===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",Y+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-8 py-5",children:X("div",{className:"flex items-center gap-4",children:[X("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:$J(J.profesion).color,boxShadow:`0 0 10px ${$J(J.profesion).sombra}`},children:X("img",{src:qJ(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:kJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{children:[X("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),X("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();CX({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:JY(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();CX({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:XY(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();CX({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:YY(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),pY&&X(SJ,{children:[X("td",{className:"px-4 py-5 text-center",children:[X("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),X("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[gJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("td",{className:"px-8 py-5 text-right",children:X("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${Y===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":Y===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":Y===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:X("span",{className:`font-black leading-none ${Y===0?"text-gold":Y===1?"text-silver":Y===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:h1(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),RJ.isOpen&&RJ.profile&&RJ.category&&(()=>{const J=y1(RJ.profile.firebaseId,RJ.category),Y=dJ[RJ.category]||[];return X("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{CX({isOpen:!1,profile:null,category:null});FX(null)},children:X("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Z)=>Z.stopPropagation(),children:[X("div",{className:"flex items-start justify-between gap-4 mb-6",children:[X("div",{children:[X("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[RJ.profile.nombre," · ",RJ.category]},void 0,!0,void 0,this),X("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>{CX({isOpen:!1,profile:null,category:null});FX(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"mb-4",children:[X("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:Y.map((Z)=>(()=>{const $=m1(RJ.profile.firebaseId,Z);return X("button",{type:"button",onClick:()=>{const Q=dY(RJ.profile.firebaseId,Z);FX(Q)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left",children:[X("p",{className:"leading-none",children:Z},void 0,!1,void 0,this),X("p",{className:"mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case",children:[$.wins,"/",$.total," · ",$.winRate.toFixed(0),"% victorias"]},void 0,!0,void 0,this)]},`breakdown-item-${Z}`,!0,void 0,this)})())},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!bX?.arenaName&&X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[X("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?X("ul",{className:"space-y-2",children:J.wins.map((Z,$)=>X("li",{className:"text-sm text-emerald-200 font-semibold",children:Z},`win-${Z}-${$}`,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?X("ul",{className:"space-y-2",children:J.losses.map((Z,$)=>X("li",{className:"text-sm text-rose-200 font-semibold",children:Z},`loss-${Z}-${$}`,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),bX?.arenaName&&X("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[X("div",{className:"flex items-center justify-between gap-3 mb-4",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",bX.arenaName]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>FX(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Z)=>{const $=Z==="wins",Q=bX[Z]||[];return X("div",{className:`rounded-xl border p-3 min-h-36 ${$?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[X("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${$?"text-emerald-300":"text-rose-300"}`,children:$?"Ganadas":"Perdidas"},void 0,!1,void 0,this),Q.length?X("ul",{className:"space-y-2",children:Q.map((H,L)=>X("li",{className:"flex items-center justify-between gap-2",children:[X("span",{className:`text-sm font-semibold ${$?"text-emerald-100":"text-rose-100"}`,children:H.opponentName},void 0,!1,void 0,this),X("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await j0(H.arenaName,H.profileId,H.opponentId);const W=dY(RJ.profile.firebaseId,H.arenaName);FX(W)}catch(W){console.error("No se pudo eliminar la batalla del desglose:",W);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Z}-${H.pairKey}-${L}`,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:`text-xs ${$?"text-emerald-200/70":"text-rose-200/70"}`,children:$?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Z}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),DY.isOpen&&DY.profile&&(()=>{const J=DY.profile,Y=PY(J),Z=Object.entries(dJ);return X("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>hX({isOpen:!1,profile:null}),children:X("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:($)=>$.stopPropagation(),children:[X("div",{className:"flex items-start justify-between gap-4",children:[X("div",{children:[X("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),X("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:($)=>{$.stopPropagation();hX({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:rJ.map(($)=>X("button",{type:"button",onClick:(Q)=>Q.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[$,": ",Number(Y[$]||0).toFixed(0)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:Z.map(([$,Q])=>X("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[$,": ",cZ(J,$).toFixed(0)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),X("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",LJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),B==="CATEGORIAS"&&!XJ&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex justify-between items-end",children:[X("div",{children:X("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:()=>{xY();vX(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),p.length===0?X("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:X("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:p.map((J)=>X("div",{onClick:()=>DX(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[X("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[X("button",{onClick:(Y)=>{Y.stopPropagation();OJ({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});vX(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:X(l,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:(Y)=>{Y.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))A1(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:X(l,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute inset-0",children:[X("img",{src:qJ(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:kJ},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[X("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),X("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:X("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[F.filter((Y)=>ZY(Y).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),XZ&&X("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:X("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[X("button",{onClick:()=>mJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:X(l,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("form",{onSubmit:R1,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[X("div",{className:"grid grid-cols-1 gap-16",children:X("div",{className:"space-y-8",children:[X("div",{className:"flex flex-col items-center gap-6",children:[X("div",{className:"flex items-center gap-4 self-start",children:[X("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:X(l,{name:t?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:t?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),t&&X("button",{type:"button",onClick:()=>{Z2({...b,firebaseId:t})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[X(l,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:b.fotos.length>0&&b.fotos[0]!==""?X("img",{src:qJ(b.fotos[0],OX),className:"w-full h-full object-cover",alt:"Preview",onError:kJ},void 0,!1,void 0,this):X("div",{className:"text-center p-4",children:[X(l,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-4",children:[X("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[X("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),eX.completed.length>0?X("ul",{className:"mt-3 space-y-1",children:eX.completed.map((J)=>X("li",{className:"text-xs text-emerald-100/90",children:[X("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),eX.missing.length>0?X("ul",{className:"mt-3 space-y-1",children:eX.missing.map((J)=>X("li",{className:"text-xs text-amber-100/90",children:X("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 gap-4",children:[X("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:b.nombre,onChange:(J)=>o({...b,nombre:J.target.value})},void 0,!1,void 0,this),X("div",{className:"col-span-2 space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),X("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:b.fotos[0]||"",onChange:(J)=>o((Y)=>o0(Y,J.target.value))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),X("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.fechaNacimiento,onChange:(J)=>o({...b,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),X("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.estaturaCm,onChange:(J)=>o({...b,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.nacionalidad,onChange:(J)=>o({...b,nacionalidad:J.target.value})},void 0,!1,void 0,this),X("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.ciudad,onChange:(J)=>o({...b,ciudad:J.target.value})},void 0,!1,void 0,this),X("div",{className:"col-span-2 space-y-1 group",children:[X("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),X("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:b.profesion,onChange:(J)=>o({...b,profesion:J.target.value}),children:[X("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),X("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),X("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),X("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),X("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),X("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),X("option",{value:"Bailarina y Atleta",className:"theme-surface-card",children:"\uD83D\uDC83\uD83C\uDFCB️‍♀️ Bailarina y Atleta"},void 0,!1,void 0,this),X("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:X(l,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("div",{className:"flex gap-4",children:[t&&X("button",{type:"button",onClick:z1,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:X(l,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{type:"submit",disabled:FY,className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs disabled:cursor-not-allowed disabled:opacity-60",children:FY?"Guardando...":t?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),S0&&X("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:yY,children:X("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[X("div",{className:"space-y-3",children:[X("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),X("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),X("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",X("span",{className:"font-black text-white",children:CJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),QZ&&X("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:QZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex justify-end gap-3",children:[X("button",{type:"button",onClick:yY,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:M1,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),YZ&&X("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:X("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[X("button",{type:"button",onClick:()=>{xY();vX(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:X(l,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("form",{onSubmit:B1,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[X("div",{className:"space-y-8",children:[X("div",{className:"flex items-center gap-4",children:[X("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:X(l,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-4",children:[X("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:k.label,onChange:(J)=>OJ({...k,label:J.target.value})},void 0,!1,void 0,this),X("div",{className:"w-full",children:X("div",{className:"space-y-1 w-full",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),X("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:k.coverImg,onChange:(J)=>OJ({...k,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-6",children:[X("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[X(l,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),X("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[X("div",{className:"grid grid-cols-2 gap-4",children:[X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:k.reglas.nacionalidades.map((J)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",X("button",{type:"button",onClick:()=>OJ({...k,reglas:{...k.reglas,nacionalidades:k.reglas.nacionalidades.filter((Y)=>Y!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.nacionalidades.includes(J.target.value))OJ({...k,reglas:{...k.reglas,nacionalidades:[...k.reglas.nacionalidades,J.target.value]}})},children:[X("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),X1.filter((J)=>J!=="Todas").map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:k.reglas.ciudades.map((J)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",X("button",{type:"button",onClick:()=>OJ({...k,reglas:{...k.reglas,ciudades:k.reglas.ciudades.filter((Y)=>Y!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.ciudades.includes(J.target.value))OJ({...k,reglas:{...k.reglas,ciudades:[...k.reglas.ciudades,J.target.value]}})},children:[X("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),Y1.filter((J)=>J!=="Todas").map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:k.reglas.profesiones.map((J)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",X("button",{type:"button",onClick:()=>OJ({...k,reglas:{...k.reglas,profesiones:k.reglas.profesiones.filter((Y)=>Y!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.profesiones.includes(J.target.value))OJ({...k,reglas:{...k.reglas,profesiones:[...k.reglas.profesiones,J.target.value]}})},children:[X("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(eY).map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 gap-2",children:[X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),X("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:k.reglas.edadMin,onChange:(J)=>OJ({...k,reglas:{...k.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),X("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:k.reglas.edadMax,onChange:(J)=>OJ({...k,reglas:{...k.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[X("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:k.reglas.caracteristica,onChange:(J)=>OJ({...k,reglas:{...k.reglas,caracteristica:J.target.value}}),children:rJ.map((J)=>X("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),X("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:k.reglas.operador,onChange:(J)=>OJ({...k,reglas:{...k.reglas,operador:J.target.value}}),children:[X("option",{children:"Superior a"},void 0,!1,void 0,this),X("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:k.reglas.umbral,onChange:(J)=>OJ({...k,reglas:{...k.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},W2=ReactDOM.createRoot(document.getElementById("root"));W2.render(X(O2,{},void 0,!1,void 0,this));