import{jsxDEV as X,Fragment as xJ}from"react/jsx-dev-runtime";const t1={apiKey:"AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",authDomain:"eliteg3-1650f.firebaseapp.com",databaseURL:"https://eliteg3-1650f-default-rtdb.firebaseio.com/",projectId:"eliteg3-1650f",storageBucket:"eliteg3-1650f.firebasestorage.app",messagingSenderId:"351711372153",appId:"1:351711372153:web:60ce4742396e37974f85a8",measurementId:"G-HGYPLEY6DJ"};if(!firebase.apps.length)firebase.initializeApp(t1);const M=firebase.database(),JZ=firebase.storage(),{useState:V,useEffect:i,useMemo:f,useRef:TJ}=React,XJ=["C","P","B","N","S","E","X","R"],o1=["R"],tJ="anonimo/galeria",kJ="__anonimo_gallery__",F0="eliteg3:perfiles-cache:v1",U0="eliteg3:gallery-audios-cache:v1",a1=["PERSONAJE","ETIQUETA","GENERAL"],V0={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},oJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],r1={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},XZ=()=>oJ.reduce((_,O)=>{_[O.id]="";return _},{}),FJ=(_={})=>{const O=XZ(),C=_&&typeof _==="object"?_:{};return Object.keys(O).reduce((N,E)=>{N[E]=typeof C[E]==="string"?C[E].trim():"";return N},{...O})},WY=(_="")=>oJ.find((O)=>O.id===_),e1=(_="")=>r1[(_||"").trim().toLowerCase()]||"",LY={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},R:{bg:"linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))",border:"rgba(226,232,240,0.95)",glow:"rgba(148,163,184,0.82)",text:"#f8fafc"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},qX=(_,O)=>{if(!O)return 0;return(_+O)%O},D0=(_,O,C=!1)=>{const N=Array.isArray(O)?O.length:0;if(!N)return null;if(N===1)return 0;if(C){const E=O.map((I,d)=>({item:I,idx:d})).filter(({item:I,idx:d})=>d!==_&&I&&I.url).map(({idx:I})=>I);if(!E.length)return qX((_??0)+1,N);return E[Math.floor(Math.random()*E.length)]}return qX((_??0)+1,N)},aJ=(_)=>LY[_]||LY.DEFAULT,EY=(_,O=!1)=>{const C=_==="INICIAL"?LY.DEFAULT:_==="100"?LY.B:aJ(_);return{"--btn-neon-color":C.glow,borderColor:C.border,color:C.text,boxShadow:O?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${C.border}, 0 0 20px ${C.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${C.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${C.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${C.glow} 70%, transparent)`,filter:O?"brightness(1.14)":"brightness(1)"}},C0=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,J2=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,X2=/\.gif(\?.*)?$/i,Y2=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,Z2=/vimeo\.com\/(?:video\/)?(\d+)/i,_X=(_)=>{const O=(_||"").trim();if(!O)return null;const C=O.match(Y2);if(C)return{provider:"youtube",src:`https://www.youtube.com/embed/${C[1]}`,title:"Video de YouTube"};const N=O.match(Z2);if(N)return{provider:"vimeo",src:`https://player.vimeo.com/video/${N[1]}`,title:"Video de Vimeo"};return null},$2=["eporner.com"],R0=(_="")=>{const O=String(_||"").trim();if(!O||O.startsWith("data:")||O.startsWith("blob:"))return!1;try{const N=new URL(O).hostname.toLowerCase();return $2.some((E)=>N===E||N.endsWith(`.${E}`))}catch{return!1}},_J=(_="",O="")=>{const C=String(_||"").trim();if(!C||R0(C))return O;return C},rJ=(_="",O="")=>{if(O==="video"||O==="image")return O;const C=(_||"").trim();if(C0.test(C)||_X(C))return"video";return"image"},B0=(_="")=>{return typeof _==="string"?_.trim():""},n=(_,O="")=>{if(typeof _==="string")return{url:_J(_.trim(),""),label:"",type:rJ(_,O),autor:""};if(_&&typeof _==="object"){const C=_J((_.url||"").trim(),"");return{url:C,label:XJ.includes(_.label)?_.label:"",type:rJ(C,_.type||O),autor:B0(_.autor)}}return{url:"",label:"",type:rJ("",O),autor:""}},Q2=(_)=>n(_).url,z0=(_)=>n(_).label,eJ=(_)=>n(_).type,YZ=(_,O,C="image")=>Array.isArray(_?.[O])?_[O].map((N)=>n(N,C)).filter((N)=>N.url):[],H2=(_={})=>({firebaseId:kJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:YZ(_,"fotos","image"),gifs:YZ(_,"gifs","image"),videos:YZ(_,"videos","video")},batallaFotosPreferidas:XZ(),puntuaciones:PX(),isAnonymousGallery:!0}),A0=(_,O)=>{try{const C=window.localStorage.getItem(_);if(!C)return O;return JSON.parse(C)??O}catch{return O}},T0=(_,O)=>{try{window.localStorage.setItem(_,JSON.stringify(O))}catch{}},j2=(_={})=>{if(_?.isAnonymousGallery||_?.firebaseId===kJ)return"anonimo";return _?.firebaseId||""},q2=(_={})=>{const O=_J(String(_?.fotos?.[0]||"").trim(),""),C=FJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!O)return!1;return oJ.filter((N)=>N.id!=="perfil").every((N)=>Boolean(String(C?.[N.id]||"").trim()))},_2=(_={})=>{const O=[],C=_J(String(_?.fotos?.[0]||"").trim(),""),N=FJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!C)O.push("Perfil");oJ.filter((E)=>E.id!=="perfil").forEach((E)=>{if(!String(N?.[E.id]||"").trim())O.push(E.label)});return O},O2=(_=null)=>{if(!_)return;const O=window.open("","_blank");if(!O)return;const C=_?.firebaseId||_?.id||"",N=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((T)=>n(T,"image")).filter((T)=>T.url).map((T,G)=>({...T,sourceTag:"fotos",sourceIndex:G})):[],E=N.filter((T)=>T.type==="image"&&T.sourceTag==="fotos"),I=FJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{}),d=_J(String(_?.fotos?.[0]||_?.foto||"").trim(),""),QJ=N.filter((T)=>T.type==="image"&&T.url).reduce((T,G)=>{T[G.url]=G;return T},{}),p=N.length?N.map((T,G)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${T.url}"
                        data-label="${T.label||""}"
                        data-index="${T.sourceIndex}"
                        data-tag="${T.sourceTag}"
                        data-media-type="${T.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${T.url}" alt="Multimedia ${G+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${T.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',v=E.length?E.map((T,G)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${T.url}"
                        data-label="${T.label||""}"
                        data-index="${T.sourceIndex}"
                        data-tag="${T.sourceTag}"
                        data-media-type="${T.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${T.url}" alt="Imagen rota ${G+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${T.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',D=oJ.map((T)=>{const G=T.id==="perfil",x=G?d:I[T.id]||"",w=x?G?{url:x}:QJ[x]||{url:x,label:"",sourceIndex:-1}:null,UJ=Boolean(x);return`
                    <div class="multimedia-slot-card ${UJ?"is-assigned":"is-missing"}" data-slot-id="${T.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${T.label}</span>
                            <span class="multimedia-slot-state">${UJ?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${UJ?`<img src="${w.url}" alt="${T.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!G?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${T.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${T.id}">Agregar URL</button>
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
                            .multimedia-slot-assign-btn, .multimedia-slot-add-btn { width:100%; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:filter .16s ease, transform .16s ease; }
                            .multimedia-slot-assign-btn { border:1px solid rgba(203,213,225,0.9); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); }
                            .multimedia-slot-assign-btn.is-selected { border-color: rgba(74,222,128,0.98); background: linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%); color:#ecfdf5; box-shadow: inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82); filter: brightness(1.24) saturate(1.2); }
                            .multimedia-slot-add-btn { border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; box-shadow:0 0 12px rgba(34,211,238,0.22); }
                            .multimedia-slot-assign-btn:hover, .multimedia-slot-add-btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
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
                                    <div class="multimedia-slots-grid">${D}</div>
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
                            const profileId = ${JSON.stringify(C)};
                            const validLabels = ${JSON.stringify(XJ)};
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
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${C}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
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
                            const slotConfigById = ${JSON.stringify(oJ.reduce((T,G)=>{T[G.id]=G;return T},{}))};
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
                            document.querySelectorAll('[data-slot-add]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAdd || '';
                                    window.alert(\`Usá la edición de miniatura de Galería para cargar o actualizar la URL/archivo del casillero \${slotId}.\`);
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
            `);O.document.close()},W2=({isOpen:_=!1,profile:O=null,onClose:C=()=>{}})=>{const[N,E]=V(!0),[I,d]=V(!0);i(()=>{if(!_)return;E(!0);d(!0)},[_,O?.firebaseId]);if(!_||!O)return null;const QJ=Array.isArray(O?.galeria?.fotos)?O.galeria.fotos.map((v)=>n(v,"image")).filter((v)=>v.url):[],p=Object.entries(O?.puntuaciones||{}).map(([v,D])=>({label:v,value:Number(D)||0})).sort((v,D)=>D.value-v.value).slice(0,5);return X("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:C,role:"presentation",children:X("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(v)=>v.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[X("button",{type:"button",onClick:C,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),X("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),X("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:O?.nombre||"Personaje"},void 0,!1,void 0,this),X("div",{className:"mt-6 space-y-4",children:[X("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[X("button",{type:"button",onClick:()=>E((v)=>!v),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[X("span",{children:"Galería"},void 0,!1,void 0,this),X("span",{children:N?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),N&&X("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:QJ.length?QJ.map((v,D)=>X("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:X("img",{src:v.url,alt:`Multimedia ${D+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${v.url}-${D}`,!1,void 0,this)):X("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[X("button",{type:"button",onClick:()=>d((v)=>!v),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[X("span",{children:"5 Principales"},void 0,!1,void 0,this),X("span",{children:I?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),I&&X("div",{className:"px-4 pb-4 space-y-2",children:p.length?p.map((v)=>X("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[X("span",{className:"text-sm text-slate-200 uppercase",children:v.label},void 0,!1,void 0,this),X("strong",{className:"text-cyan-200",children:v.value},void 0,!1,void 0,this)]},v.label,!0,void 0,this)):X("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},N0=async(_="",{timeoutMs:O=12000,retries:C=1}={})=>{const N=String(_||"").trim();if(!N)return!0;const E=()=>new Promise((I)=>{const d=new Image;let QJ=!1;const p=(D)=>{if(QJ)return;QJ=!0;d.onload=null;d.onerror=null;I(Boolean(D))},v=window.setTimeout(()=>p(!0),O);d.onload=()=>{clearTimeout(v);const D=Number(d.naturalWidth)>0&&Number(d.naturalHeight)>0;p(!D)};d.onerror=()=>{clearTimeout(v);p(!0)};d.src=N});for(let I=0;I<=C;I+=1)if(!await E())return!1;return!0},K0=(_,O)=>{const C=(O||"").trim().toLowerCase(),N=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((x)=>n(x,"image")).filter((x)=>x.type==="image"&&x.url):[],I=_J(_?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(C))return I;const QJ=(x=[])=>{const w=N.filter((c)=>x.includes(z0(c)));if(!w.length)return"";const UJ=Math.floor(Math.random()*w.length);return w[UJ]?.url||""},p=e1(C),v=WY(p);if(!v)return I;const T=FJ(_?.batallaFotosPreferidas)[p];if(T){if(N.some((w)=>w.url===T))return T}return QJ(v.labels)||I},L2=(_="")=>X2.test((_||"").trim()),OX="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",ZZ=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${OX}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,SJ=(_)=>{const O=_?.currentTarget||_?.target;if(!O||O.dataset.fallbackApplied==="true")return;O.dataset.fallbackApplied="true";O.src=OX;O.style.objectFit="contain";O.style.padding="12px";O.style.background="#020617";O.alt="Imagen no disponible"},K2="g2_elite_database_v4",M2="g2_elite_categories_v4",JX=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],$Z=[...JX],QZ=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],E2=QZ.map((_)=>_.id),WX=(_="")=>{return QZ.find((C)=>C.id===_)?.label||"General"},F2=(_="")=>{const O=String(_||"").trim();if(!O)return"";return encodeURIComponent(O.toLowerCase())},U2=(_="")=>{const O=String(_||"").trim();if(!O)return"";try{return decodeURIComponent(O).toLowerCase()}catch{return O.toLowerCase()}},LX=(_,O="GENERAL",C="")=>{const N=String(_||"").trim(),E=String(O||"GENERAL").trim().toUpperCase(),I=F2(C);if(!N)return"";return`${E}::${I||"all"}::${N}`},VJ=(_="")=>String(_||"").trim(),M0=(_="")=>{const O=String(_||"").split("::");if(O.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const C=O.slice(2).join("::");return{scopeId:String(O[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:U2(O[1]||"all")||"all",arenaName:String(C||"").trim()}},PX=()=>JX.reduce((_,O)=>{_[O]=0;return _},{}),w0=[],HZ={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},"Bailarina y Atleta":{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},w2=(_="")=>{const O=String(_||"").toLowerCase();if(O.includes("cantante"))return"crown";if(O.includes("nsfw"))return"torch";if(O.includes("actriz")||O.includes("actor"))return"theater";if(O.includes("modelo"))return"floron";if(O.includes("influencer"))return"sigil";if(O.includes("periodista"))return"quill";if(O.includes("bailarina"))return"floron";if(O.includes("atleta"))return"shield";return"shield"},V2=(_="")=>{const O=String(_||"").toLowerCase();if(O.includes("cantante"))return"\uD83C\uDFA4";if(O.includes("nsfw"))return"\uD83D\uDD25";if(O.includes("actriz")||O.includes("actor"))return"\uD83C\uDFAC";if(O.includes("modelo"))return"\uD83D\uDC60";if(O.includes("influencer"))return"\uD83D\uDCF1";if(O.includes("periodista"))return"\uD83D\uDC53";if(O.includes("bailarina"))return"\uD83D\uDC83";if(O.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},bX=(_="")=>{const O=String(_||"").trim(),C=HZ[O]||HZ.Otro,N=String(C?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),E=String(C?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:N,glowColor:E}},G2=({variant:_="sigil",size:O=18,className:C="",tint:N="currentColor"})=>{const E={width:O,height:O,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:C};if(_==="crown")return X("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),X("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="shield")return X("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),X("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="floron")return X("svg",{...E,stroke:N,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M12 4v16"},void 0,!1,void 0,this),X("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),X("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),X("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="quill")return X("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),X("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="torch")return X("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),X("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),X("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),X("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="theater")return X("svg",{...E,stroke:N,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),X("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),X("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return X("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),X("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},l=({name:_,size:O=20,className:C=""})=>{return X("i",{"data-lucide":_.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:O,height:O},className:`inline-block ${C}`},void 0,!1,void 0,this)},FY=({targetWindow:_,profileName:O,profession:C,photos:N,editingId:E,battlePhotoPrefs:I={},profilePhotoUrl:d=""})=>{if(!_||_.closed)return;const QJ=FJ(I),p=_J(String(d||"").trim(),""),v=(N||[]).map((D,T)=>{const G=n(D);return{...G,sourceTag:D?.sourceTag||(G.type==="video"?"videos":"fotos"),sourceIndex:typeof D?.sourceIndex==="number"?D.sourceIndex:T}}).filter((D)=>D.url);_.document.open();_.document.write(`
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
                    .modal-url {
                        display: none;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #0f172a;
                        padding: 30px;
                        border-radius: 18px;
                        border: 1px solid rgba(100, 116, 139, 0.45);
                        box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.18), 0 24px 48px rgba(0,0,0,0.55);
                        z-index: 1000;
                        width: 350px;
                    }
                    input {
                        width: 100%;
                        padding: 12px;
                        margin-top: 15px;
                        background: #020617;
                        border: 1px solid #334155;
                        color: #22d3ee;
                        border-radius: 8px;
                        outline: none;
                    }
                    h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; color: #fff; text-align: center; }
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
                <div style="display:flex; align-items:center; justify-content:space-between; gap: 12px; width:100%; margin-bottom: 16px; flex-wrap: wrap;">
                    <h1 style="margin:0;">Galería de ${O}</h1>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <button type="button" onclick="openSlotActionModal('', 'file');" class="btn-neon" style="border-color: rgba(59,130,246,0.9); background: linear-gradient(180deg, rgba(37,99,235,0.95), rgba(30,64,175,0.95)); color:#dbeafe;">Agregar archivo</button>
                        <button type="button" onclick="openSlotActionModal('', 'url');" class="btn-neon" style="border-color: rgba(74,222,128,0.9); background: linear-gradient(180deg, rgba(22,163,74,0.95), rgba(21,128,61,0.95)); color:#dcfce7;">Agregar URL</button>
                    </div>
                </div>

                <div id="miModal" class="modal-url">
                    <h2 id="mediaFormTitle" style="margin:0; font-size: 14px; color: #94a3b8;">AGREGAR MULTIMEDIA</h2>
                    <input type="url" id="nuevaFotoUrl" placeholder="https://..." style="display:none; width:100%; margin-top: 15px; padding: 12px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);" />
                    <input type="file" id="nuevoArchivoFile" accept="image/*,video/*,.gif" style="display:none; width:100%; margin-top: 15px; color:#e2e8f0;">
                    <select id="nuevoArchivoTipo" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        <option value="image">Imagen</option>
                        <option value="gif">GIF</option>
                        <option value="video">Video</option>
                        <option value="gif">Gif</option>
                        <option value="image">Imagen</option>
                    </select>
                    <input type="url" id="mediaUrlInput" placeholder="https://..." style="width:100%; margin-top: 15px; padding: 12px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color:#e2e8f0; border-radius: 8px; outline: none;">
                    <input type="file" id="nuevoArchivoFile" accept="image/*,video/*,.gif" style="display:none; width:100%; margin-top: 15px; color:#e2e8f0;">
                    <div id="mediaPreviewContainer" style="display:none; width:100%; margin-top: 15px; border-radius:10px; border:1px solid rgba(71,85,105,0.82); background:rgba(2,6,23,0.75); overflow:hidden;"></div>
                    <p id="mediaFormError" style="display:none; margin:10px 0 0; font-size:11px; color:#fda4af;"></p>
                    <select id="nuevaFotoEtiqueta" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        ${XJ.map((D)=>`<option value="${D}">Etiqueta ${D}</option>`).join("")}
                    </select>
                    <div id="mediaPreviewWrap" style="display:none; margin-top:12px;"><img id="mediaPreview" alt="preview" style="max-width:100%; max-height:180px; margin:0 auto; border-radius:8px;" /></div>
                    <p id="mediaFormError" style="display:none; margin:10px 0 0; font-size:11px; color:#fda4af;"></p>
                    <input type="hidden" id="slotSelectionId" value="">
                    <p id="slotGalleryHint" style="display:none; margin:10px 0 0; font-size:11px; color:#93c5fd;">Tip: para “Elegir desde galería” tocá cualquier imagen para asignarla.</p>
                    <button id="modalCancelButton" type="button" onclick="handleCancelMediaModal();"
                        style="margin-top: 15px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(51,65,85,0.95), rgba(30,41,59,0.95)); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.95); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em;">
                        Cancelar
                    </button>
                    <button id="modalSaveButton" type="button" onclick="handleSaveMediaModal();"
                        style="margin-top: 15px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(22,163,74,0.95), rgba(21,128,61,0.95)); color: #ecfdf5; border: 1px solid rgba(134,239,172,0.95); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(34,211,238,0.4);">
                        Guardar
                    </button>
                </div>

                <details open style="width:100%; margin-bottom: 20px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.28); background: rgba(2,6,23,0.45);">
                    <summary style="cursor:pointer; list-style:none; padding: 12px 14px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 900; color: #f8fafc;">
                        5 Principales
                    </summary>
                    <div style="padding: 0 14px 14px; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px;">
                    ${oJ.map((D)=>{const T=D.id==="perfil",G=T?p:QJ[D.id]||"",x=Boolean(G),w=!T;return`
                            <div class="gallery-slot-card" data-slot-id="${D.id}" style="border:1px solid ${x?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${x?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${x?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${x?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${D.label}</div>
                                <div style="font-size:11px; color:${x?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${x?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${x?`<img src="${G}" alt="Vista previa ${D.label}" onerror="${ZZ}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${D.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL
                                    </button>
                                    ${w?`<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${D.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${D.id}');"
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
                    ${v.length?v.map((D,T)=>{const G=Q2(D),x=z0(D),w=aJ(x),UJ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},c=UJ[C?.toUpperCase()]||UJ.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${T}"
                            data-source-index="${D.sourceIndex}"
                            data-media-type="${eJ(D)}"
                            data-url="${G}"
                            data-compatible-slots="${x}"
                            draggable="${eJ(D)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${c.color};
                                box-shadow: 0 0 15px ${c.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${eJ(D)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${c.color}, inset 0 0 15px ${c.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${c.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${D.sourceIndex}, mediaType: '${eJ(D)}', id: '${E}'}, '*');"
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
                        ${eJ(D)==="video"?(()=>{const NJ=_X(G);if(NJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${NJ.provider.toUpperCase()}</div></div>`;return`<video src="${G}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${G}" alt="Imagen de la galería" onerror="${ZZ}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${eJ(D)==="video"?"VIDEO":"IMG"}</div>
                        ${x?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${w.bg}; border: 1px solid ${w.border}; color: ${w.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${w.glow}, 0 0 24px ${w.glow}; text-shadow: 0 0 10px ${w.glow}; backdrop-filter: blur(8px);">${x}</div>`:""}
                        ${D.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${x?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${D.autor}</div>`:""}
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
                        ${v.map((D,T)=>{const G=eJ(D),x=_X(D.url);return`
                            <div class="viewer-slide" id="viewer-slide-${T}">
                                ${G==="video"?x?`<iframe src="${x.src}" title="${x.title} ${T+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${D.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${D.url}" alt="Vista completa ${T+1}" onerror="${ZZ}" />`}
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
                    var mediaFormState = {
                        isMediaFormOpen: false,
                        mediaFormMode: 'file',
                        mediaCategory: 'image',
                        mediaUrlInput: '',
                        selectedFile: null,
                        previewSrc: '',
                        isSaving: false,
                        formError: ''
                    };
                    var DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                    var LONG_PRESS_MS = 280;
                    var longPressTimer = null;
                    var touchPayload = null;
                    var SWIPE_DISTANCE_THRESHOLD = 72;
                    var SWIPE_VELOCITY_THRESHOLD = 0.35;
                    var SWIPE_FEEDBACK_MAX_TRANSLATE = 52;
                    var SWIPE_VERTICAL_LOCK_RATIO = 1.2;
                    var mediaModalState = {
                        mediaUrlInput: '',
                        selectedFile: null,
                        previewSrc: '',
                        formError: '',
                        isSaving: false,
                        previewObjectUrl: ''
                    };
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

                    function openSlotActionModal(slotId, mode = 'file') {
                        activeSlotSelectionId = slotId || '';
                        mediaFormState.isMediaFormOpen = true;
                        mediaFormState.mediaFormMode = mode === 'url' ? 'url' : 'file';
                        const modal = document.getElementById('miModal');
                        const galleryHint = document.getElementById('slotGalleryHint');
                        const slotInput = document.getElementById('slotSelectionId');
                        const title = document.getElementById('mediaFormTitle');
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const fileInput = document.getElementById('nuevoArchivoFile');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        if (mediaTypeInput) mediaTypeInput.value = mediaFormState.mediaCategory;
                        if (title) title.textContent = mediaFormState.mediaFormMode === 'url' ? 'AGREGAR URL' : 'SUBIR ARCHIVO';
                        if (urlInput) urlInput.style.display = mediaFormState.mediaFormMode === 'url' ? 'block' : 'none';
                        if (fileInput) fileInput.style.display = mediaFormState.mediaFormMode === 'file' ? 'block' : 'none';
                        if (galleryHint) {
                            galleryHint.style.display = mode === 'gallery' && slotId !== 'perfil' ? 'block' : 'none';
                        }
                        if (modal) modal.style.display = 'block';
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
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        updateSlotGalleryButtons();
                    }

                    function isImagePayload(payload = {}) {
                        return String(payload.mediaType || '').trim() === 'image';
                    }

                    function assignToSlot(payload = {}, slotId = '') {
                        if (!slotId || !window.opener || !isImagePayload(payload)) return false;
                        const sourceIndex = Number(payload.sourceIndex);
                        if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${E}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
                        activeSlotSelectionId = '';
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = '';
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

                    function resetAddMediaModalFields() {
                        if (mediaModalState.previewObjectUrl) {
                            URL.revokeObjectURL(mediaModalState.previewObjectUrl);
                        }
                        mediaModalState = {
                            mediaUrlInput: '',
                            selectedFile: null,
                            previewSrc: '',
                            formError: '',
                            isSaving: false,
                            previewObjectUrl: ''
                        };
                        const modeInput = document.getElementById('nuevoArchivoModo');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const fileInput = document.getElementById('nuevoArchivoFile');
                        const previewContainer = document.getElementById('mediaPreviewContainer');
                        const errorContainer = document.getElementById('mediaFormError');
                        const saveButton = document.getElementById('modalSaveButton');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (modeInput) modeInput.value = 'url';
                        if (labelInput) labelInput.value = '${XJ[0]}';
                        if (mediaTypeInput) mediaTypeInput.value = 'image';
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const previewWrap = document.getElementById('mediaPreviewWrap');
                        const previewImg = document.getElementById('mediaPreview');
                        const formError = document.getElementById('mediaFormError');
                        if (urlInput) urlInput.value = '';
                        if (previewImg) previewImg.src = '';
                        if (previewWrap) previewWrap.style.display = 'none';
                        if (formError) { formError.style.display = 'none'; formError.textContent = ''; }
                        mediaFormState = { ...mediaFormState, mediaCategory: 'image', mediaUrlInput: '', selectedFile: null, previewSrc: '', isSaving: false, formError: '' };
                        if (fileInput) fileInput.value = '';
                        if (fileInput) fileInput.style.display = 'none';
                        if (urlInput) urlInput.value = '';
                        if (urlInput) urlInput.style.display = 'block';
                        if (previewContainer) previewContainer.style.display = 'none';
                        if (previewContainer) previewContainer.innerHTML = '';
                        if (errorContainer) errorContainer.style.display = 'none';
                        if (errorContainer) errorContainer.textContent = '';
                        if (saveButton) saveButton.disabled = false;
                        if (saveButton) saveButton.textContent = 'Guardar';
                        if (slotInput) slotInput.value = '';
                        const galleryHint = document.getElementById('slotGalleryHint');
                        if (galleryHint) galleryHint.style.display = 'none';
                        activeSlotSelectionId = '';
                        updateSlotGalleryButtons();
                    }

                    function handleCancelMediaModal() {
                        const modal = document.getElementById('miModal');
                        if (modal) modal.style.display = 'none';
                        resetAddMediaModalFields();
                    }

                    function renderMediaPreview(previewSrc = '') {
                        const previewContainer = document.getElementById('mediaPreviewContainer');
                        const mediaType = document.getElementById('nuevoArchivoTipo')?.value || '';
                        if (!previewContainer || !previewSrc) return;
                        const localVideoRegex = /.(mp4|webm|ogg|mov|m4v)(?.*)?$/i;
                        const isVideo = mediaType === 'video' || localVideoRegex.test(previewSrc);
                        previewContainer.style.display = 'block';
                        previewContainer.innerHTML = isVideo
                            ? '<video controls src="' + previewSrc + '" style="width:100%; max-height:220px; display:block; background:#000;"></video>'
                            : '<img src="' + previewSrc + '" alt="Vista previa" style="width:100%; max-height:220px; object-fit:contain; display:block; background:#000;" />';
                    }

                    function showMediaModalError(message = '') {
                        mediaModalState.formError = message;
                        const errorContainer = document.getElementById('mediaFormError');
                        if (!errorContainer) return;
                        errorContainer.textContent = message || '';
                        errorContainer.style.display = message ? 'block' : 'none';
                    }

                    async function handleSaveMediaModal() {
                        if (mediaModalState.isSaving) return;
                        const saveButton = document.getElementById('modalSaveButton');
                        const mode = document.getElementById('nuevoArchivoModo')?.value || 'url';
                        const mediaType = document.getElementById('nuevoArchivoTipo')?.value || '';
                        const label = document.getElementById('nuevaFotoEtiqueta')?.value || '${XJ[0]}';
                        const slotSelectionId = document.getElementById('slotSelectionId')?.value || '';
                        const mediaUrlInput = (document.getElementById('mediaUrlInput')?.value || '').trim();
                        const selectedFile = document.getElementById('nuevoArchivoFile')?.files?.[0] || null;

                        if (!mediaType) return showMediaModalError('Seleccioná una categoría.');
                        if (mode === 'url') {
                            try { new URL(mediaUrlInput); } catch { return showMediaModalError('Ingresá una URL válida.'); }
                        } else if (!selectedFile) {
                            return showMediaModalError('Seleccioná un archivo para continuar.');
                        }
                        showMediaModalError('');
                        mediaModalState.isSaving = true;
                        if (saveButton) { saveButton.disabled = true; saveButton.textContent = 'Guardando...'; }
                        try {
                            let finalUrl = mediaUrlInput;
                            if (mode === 'file') {
                                finalUrl = await uploadFileToFirebaseStorage(selectedFile, 'galeria');
                            }
                            const normalizedType = mediaType === 'video' ? 'video' : 'image';
                            postMediaFromModal({ url: finalUrl, mediaType: normalizedType, label, slotSelectionId, canAssignSlot: true });
                            handleCancelMediaModal();
                        } catch (error) {
                            showMediaModalError(error?.message || 'No se pudo guardar la multimedia. Intentá nuevamente.');
                        } finally {
                            mediaModalState.isSaving = false;
                            if (saveButton) { saveButton.disabled = false; saveButton.textContent = 'Guardar'; }
                        }
                    }

                    function postMediaFromModal({ url = '', mediaType = 'image', label = '${XJ[0]}', slotSelectionId = '', canAssignSlot = true } = {}) {
                        const finalUrl = String(url || '').trim();
                        if (!finalUrl) return;
                        const finalType = mediaType === 'video' ? 'video' : 'image';
                        window.opener.postMessage({ type: 'ADD_IMAGE', url: finalUrl, label, mediaType: finalType, id: '${E}' }, '*');
                        if (slotSelectionId && canAssignSlot) {
                            window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${E}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label }, '*');
                        }
                    }

                    document.getElementById('nuevoArchivoModo')?.addEventListener('change', (event) => {
                        const mode = event.target.value;
                        const urlInput = document.getElementById('mediaUrlInput');
                        const fileInput = document.getElementById('nuevoArchivoFile');
                        showMediaModalError('');
                        if (mode === 'file') {
                            if (urlInput) urlInput.style.display = 'none';
                            if (fileInput) fileInput.style.display = 'block';
                        } else {
                            if (urlInput) urlInput.style.display = 'block';
                            if (fileInput) fileInput.style.display = 'none';
                        }
                    });
                    document.getElementById('mediaUrlInput')?.addEventListener('input', (event) => {
                        mediaModalState.mediaUrlInput = String(event.target.value || '').trim();
                        if (mediaModalState.previewObjectUrl) {
                            URL.revokeObjectURL(mediaModalState.previewObjectUrl);
                            mediaModalState.previewObjectUrl = '';
                        }
                        mediaModalState.previewSrc = mediaModalState.mediaUrlInput;
                        const previewContainer = document.getElementById('mediaPreviewContainer');
                        if (!mediaModalState.previewSrc) {
                            if (previewContainer) previewContainer.style.display = 'none';
                            if (previewContainer) previewContainer.innerHTML = '';
                            return;
                        }
                        renderMediaPreview(mediaModalState.previewSrc);
                    });
                    document.getElementById('nuevoArchivoFile')?.addEventListener('change', (event) => {
                        const file = event.target.files?.[0] || null;
                        mediaModalState.selectedFile = file;
                        if (mediaModalState.previewObjectUrl) {
                            URL.revokeObjectURL(mediaModalState.previewObjectUrl);
                            mediaModalState.previewObjectUrl = '';
                        }
                        if (!file) {
                            mediaModalState.previewSrc = '';
                            const previewContainer = document.getElementById('mediaPreviewContainer');
                            if (previewContainer) previewContainer.style.display = 'none';
                            if (previewContainer) previewContainer.innerHTML = '';
                            return;
                        }
                        mediaModalState.previewObjectUrl = URL.createObjectURL(file);
                        mediaModalState.previewSrc = mediaModalState.previewObjectUrl;
                        renderMediaPreview(mediaModalState.previewSrc);
                    });
                    document.getElementById('nuevoArchivoTipo')?.addEventListener('change', () => {
                        if (mediaModalState.previewSrc) renderMediaPreview(mediaModalState.previewSrc);
                    });

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

                    document.getElementById('nuevoArchivoTipo')?.addEventListener('change', (event) => {
                        mediaFormState.mediaCategory = event.target.value || 'image';
                    });
                    document.getElementById('nuevaFotoUrl')?.addEventListener('input', (event) => {
                        mediaFormState.mediaUrlInput = String(event.target.value || '').trim();
                        mediaFormState.previewSrc = mediaFormState.mediaUrlInput;
                        const previewWrap = document.getElementById('mediaPreviewWrap');
                        const previewImg = document.getElementById('mediaPreview');
                        if (previewImg) previewImg.src = mediaFormState.previewSrc;
                        if (previewWrap) previewWrap.style.display = mediaFormState.previewSrc ? 'block' : 'none';
                    });
                    document.getElementById('nuevoArchivoFile')?.addEventListener('change', (event) => {
                        const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
                        mediaFormState.selectedFile = file;
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                            mediaFormState.previewSrc = String(reader.result || '');
                            const previewWrap = document.getElementById('mediaPreviewWrap');
                            const previewImg = document.getElementById('mediaPreview');
                            if (previewImg) previewImg.src = mediaFormState.previewSrc;
                            if (previewWrap) previewWrap.style.display = mediaFormState.previewSrc ? 'block' : 'none';
                        };
                        reader.readAsDataURL(file);
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
                                    id: '${E}'
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
        `);_.document.close()},D2=()=>{const[_,O]=React.useState(null),C=TJ(null),N=TJ(null),[E,I]=V([]),d={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},QJ=(J="")=>{const Y=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return d[Y]||d.DEFAULT},[p,v]=V(w0),[D,T]=V("EXPLORAR"),[G,x]=V(null),[w,UJ]=V(null),[c,NJ]=V(""),[OJ,PJ]=V({}),[DJ,mJ]=V({}),[G0,k0]=V(!1),[jZ,S0]=V($Z[0]||""),[vX,EX]=V(null),[x0,P0]=V(!1),[qZ,uJ]=V(!1),[_Z,IX]=V(!1),[UY,OZ]=V(!1),[t,FX]=V(null),[b0,UX]=V(null),[CJ,VX]=V(null),[v0,WZ]=V(!1),[LZ,gX]=V(""),[YJ,DX]=React.useState(null),[VY,hX]=V(!1),[EZ,I0]=V({x:0,y:0}),[HJ,FZ]=V("promedio"),[fJ,DY]=V("desc"),[CY,g0]=V(!1),[RJ,CX]=V({isOpen:!1,profile:null,category:null}),[RY,yX]=V({isOpen:!1,profile:null}),[bJ,BY]=V("INICIAL"),[h,h0]=V("GENERAL"),[zJ,JJ]=V(null),[mX,RX]=V(null),[BX,zY]=V([]),[XX,UZ]=V([]),[KJ,zX]=V(!1),[vJ,AY]=V(!1),[MJ,VZ]=V(!1),[TY,y0]=V(5),[DZ,CZ]=V(20),[RZ,BZ]=V(!1),[AJ,m0]=V(!0),[zZ,YX]=V(!1),[AZ,uX]=V(""),[TZ,fX]=V(""),[NZ,cJ]=V(""),[KZ,MZ]=V(!1),[NY,wZ]=V(""),[GZ,KY]=V(""),[MY,u0]=V(XJ[0]),[kZ,AX]=V(""),[BJ,f0]=V(""),[cX,wY]=V("url"),[SZ,GY]=V(null),[kY,SY]=V(""),[IJ,xZ]=V([]),[PZ,bZ]=V(""),[vZ,IZ]=V(""),[gZ,gJ]=V(""),[xY,c0]=V(!1),[sX,hZ]=V(""),[dX,yZ]=V(""),[nX,sJ]=V(""),[s0,d0]=V(!1),[PY,bY]=V(!1),[mZ,vY]=V({}),[IY,uZ]=V({}),[n0,pX]=V({}),[p0,fZ]=V({}),[ZX,i0]=V(!1),[iX,l0]=V(!1),[t0,TX]=V(""),[lX,cZ]=V(""),dJ=TJ(null),tX=TJ(null),gY=TJ(null),NX=TJ(null),KX=TJ(null),oX=TJ(!1),aX=TJ(null),rX=TJ(!1),sZ=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),eX=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:XZ(),puntuaciones:PX()}),[b,o]=V(eX);i(()=>{if(!w){if(c)NJ("");return}if(w==="GENERAL"&&c!=="all")NJ("all")},[w,c]);const hY=(J={})=>{const Y=eX(),Z=J&&typeof J==="object"?J:{},$=Z?.puntuaciones&&typeof Z.puntuaciones==="object"?{...Y.puntuaciones,...Z.puntuaciones}:Y.puntuaciones;return{...Z,...Y,nombre:typeof Z.nombre==="string"?Z.nombre:"",nacionalidad:typeof Z.nacionalidad==="string"?Z.nacionalidad:"",ciudad:typeof Z.ciudad==="string"?Z.ciudad:"",profesion:typeof Z.profesion==="string"?Z.profesion:"",fechaNacimiento:typeof Z.fechaNacimiento==="string"?Z.fechaNacimiento:"",estaturaCm:Z.estaturaCm===void 0||Z.estaturaCm===null?"":Z.estaturaCm,fotos:Array.isArray(Z.fotos)?Z.fotos:[],galeria:{fotos:Array.isArray(Z?.galeria?.fotos)?Z.galeria.fotos:[],gifs:Array.isArray(Z?.galeria?.gifs)?Z.galeria.gifs:[],videos:Array.isArray(Z?.galeria?.videos)?Z.galeria.videos:[]},batallaFotosPreferidas:FJ(Z?.batallaFotosPreferidas),puntuaciones:$}},JY=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===kJ)return;o(hY(J));FX(J.firebaseId||J.id||null);uJ(!0)},o0=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const Z=C.current,$=Z&&!Z.closed?Z:window.open("","_blank");C.current=$;FY({targetWindow:$,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map((Q,H)=>({...n(Q,"image"),sourceTag:"fotos",sourceIndex:H})),...(J?.galeria?.videos||[]).map((Q,H)=>({...n(Q,"video"),sourceTag:"videos",sourceIndex:H}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});cZ(J?.firebaseId||J?.id||"");$?.focus();sJ("");TX("")},dZ=(J="")=>{if(D==="anonimo")return;const Y=String(J||"").trim();FX(null);o({...eX(),profesion:Y});uJ(!0)},XY=f(()=>{const Y=[{key:"nombre",label:"Nombre",value:b?.nombre},{key:"fotos.0",label:"Foto principal",value:b?.fotos?.[0]},{key:"profesion",label:"Profesión",value:b?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:b?.nacionalidad},{key:"ciudad",label:"Ciudad",value:b?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:b?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:b?.estaturaCm}].map((Z)=>{const $=typeof Z.value==="string"?Z.value.trim():Z.value,Q=!($===""||$===void 0||$===null),H=Z.key==="fotos.0"?Q?"SI":"NO":Q?String($):"Sin completar";return{...Z,isComplete:Q,preview:H}});return{completed:Y.filter((Z)=>Z.isComplete),missing:Y.filter((Z)=>!Z.isComplete)}},[b]),R2=async({profileId:J,url:Y,tag:Z="fotos",label:$="",type:Q="image",autor:H=""})=>{const L=(Y||"").trim(),q=XJ.includes($)?$:"",W=rJ(L,Q);if(!J||!L)return[];const j=M.ref(`perfiles/${J}/galeria/${Z}`),z=[...(await j.once("value")).val()||[],{url:L,label:q,type:W,autor:B0(H)}];await j.set(z);if(J===t)o((B)=>({...B,galeria:{...B.galeria||{fotos:[],gifs:[],videos:[]},[Z]:z}}));return z},a0=async({profileId:J,sourceTag:Y,sourceIndex:Z,label:$})=>{if(!J||!Y||!Number.isInteger(Z))return;const Q=XJ.includes($)?$:"",H=M.ref(`perfiles/${J}/galeria/${Y}`),L=await H.once("value"),q=Array.isArray(L.val())?L.val():[];if(!q[Z])return;const W=[...q],j=n(W[Z],Y==="videos"?"video":"image");W[Z]={...j,label:Q};await H.set(W);if(J===t)o((F)=>({...F,galeria:{...F.galeria||{fotos:[],gifs:[],videos:[]},[Y]:W}}))},nZ=async({profileId:J,sourceTag:Y,sourceIndex:Z,url:$})=>{if(!J||!Y||!Number.isInteger(Z))return;const Q=($||"").trim();if(!Q)return;const H=M.ref(`perfiles/${J}/galeria/${Y}`),L=await H.once("value"),q=Array.isArray(L.val())?L.val():[];if(!q[Z])return;const W=[...q],j=Y==="videos"?"video":"image",F=n(W[Z],j);W[Z]={...F,url:Q,type:rJ(Q,j)};await H.set(W);if(J===t)o((R)=>({...R,galeria:{...R.galeria||{fotos:[],gifs:[],videos:[]},[Y]:W}}))},r0=async({profileId:J,sourceTag:Y,sourceIndex:Z})=>{if(!J||!Y||!Number.isInteger(Z))return;const $=M.ref(`perfiles/${J}/galeria/${Y}`),Q=await $.once("value"),H=Array.isArray(Q.val())?Q.val():[],L=H[Z];if(!L)return;const q=H.filter((j,F)=>F!==Z);await $.set(q);const W=n(L,Y==="videos"?"video":"image").url;if(W){const j=M.ref(`perfiles/${J}/batallaFotosPreferidas`),F=await j.once("value"),z={...FJ(F.val())};let B=!1;Object.keys(z).forEach((U)=>{if(z[U]===W){z[U]="";B=!0}});if(B)await j.set(z)}if(J===t)o((j)=>({...j,galeria:{...j.galeria||{fotos:[],gifs:[],videos:[]},[Y]:q},batallaFotosPreferidas:(()=>{const F=FJ(j.batallaFotosPreferidas);if(!W)return F;const R={...F};Object.keys(R).forEach((z)=>{if(R[z]===W)R[z]=""});return R})()}))},e0=async(J)=>{if(!(J instanceof File))return J;const Y=String(J.type||"").toLowerCase();if(!Y.startsWith("image/")||Y==="image/gif")return J;if(J.size<=1200000)return J;const Z=await createImageBitmap(J),Q=Math.min(1,1920/Math.max(Z.width,Z.height)),H=Math.max(1,Math.round(Z.width*Q)),L=Math.max(1,Math.round(Z.height*Q)),q=document.createElement("canvas");q.width=H;q.height=L;const W=q.getContext("2d",{alpha:!1});if(!W)return J;W.drawImage(Z,0,0,H,L);const j=Y==="image/png"?"image/png":"image/jpeg",F=j==="image/jpeg"?0.82:void 0,R=await new Promise((U)=>q.toBlob(U,j,F));if(!R||R.size>=J.size)return J;const z=(J.name||"archivo").replace(/\.[^.]+$/,"");return new File([R],`${z}.${j==="image/png"?"png":"jpg"}`,{type:j,lastModified:Date.now()})},J1=window.uploadFileToFirebaseStorage=async(J,Y="galeria")=>{if(!J)throw new Error("No se encontró el archivo para subir.");const Z=String(Y||"galeria").replace(/[^a-zA-Z0-9/_-]/g,"");try{if(typeof JZ?.setMaxUploadRetryTime==="function")JZ.setMaxUploadRetryTime(120000)}catch(Q){}let $=null;for(let Q=1;Q<=2;Q+=1)try{const H=await e0(J),L=(H.name||"").split(".").pop(),q=L&&L!==H.name?`.${L.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()}`:"",W=`${Date.now()}-${Math.random().toString(36).slice(2,10)}`,j=`${Z}/${W}${q}`,F=JZ.ref(j).put(H);return(await new Promise((z,B)=>{const U=90000,A=window.setTimeout(()=>{try{F.cancel()}catch(P){}const K=new Error("La subida se quedó sin respuesta. Revisá tu conexión e intentá nuevamente.");K.code="storage/upload-timeout";B(K)},U);F.on("state_changed",null,(K)=>{window.clearTimeout(A);B(K)},()=>{window.clearTimeout(A);z(F.snapshot)})})).ref.getDownloadURL()}catch(H){$=H;if(String(H?.code||"").toLowerCase()!=="storage/retry-limit-exceeded"||Q===2)throw H}throw $||new Error("No se pudo subir el archivo a Firebase Storage.")},B2=(J)=>new Promise((Y,Z)=>{const $=new FileReader;$.onload=()=>Y(String($.result||""));$.onerror=()=>Z(new Error("No se pudo leer el archivo."));$.readAsDataURL(J)}),X1=(J,Y)=>{const Z=String(Y||"").trim(),$=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Z)return{...J,fotos:[""]};const H=$.some((L)=>n(L,"image").url===Z)?$:[...$,{url:Z,label:"C",type:"image"}];return{...J,fotos:[Z],galeria:{...J.galeria||{},fotos:H}}},Y1=async({url:J,label:Y,autor:Z="",forcedTag:$=""})=>{const Q=String(J||"").trim();if(!Q)throw new Error("Ingresá una URL.");const H=XJ.includes(Y)?Y:"",L=rJ(Q);if(!(L==="image"||C0.test(Q)||Boolean(_X(Q))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const W=$||(L==="video"?"videos":"fotos"),j=M.ref(`${tJ}/${W}`),F=await j.once("value"),z=[...Array.isArray(F.val())?F.val():[],{url:Q,label:H,type:L,autor:String(Z||"").trim()}];await j.set(z)},Z1=(J="")=>{return{imagen:"fotos",gif:"gifs",video:"videos"}[String(J||"").toLowerCase()]||"fotos"},$1=(J="")=>String(J||"").toLowerCase()==="video"?"video":"image",Q1=async()=>{AX("");try{const J=Z1(BJ),Y=XJ.includes(MY)?MY:"";if(cX==="file"){if(!(SZ instanceof File))throw new Error("Seleccioná un archivo antes de guardar.");const Z=await J1(SZ,`galeria/${J}`);await Y1({url:Z,label:Y,autor:"",forcedTag:J})}else{const Z=String(GZ||"").trim();if(!Z)throw new Error("Ingresá una URL.");const $={url:Z,label:Y,type:$1(BJ),autor:""},Q=M.ref(`${tJ}/${J}`),H=await Q.once("value"),L=Array.isArray(H.val())?H.val():[];await Q.set([...L,$])}KY("");GY(null);SY("")}catch(J){AX(J?.message||"No se pudo guardar en galería anónima.")}},H1=async()=>{const J=String(PZ||"").trim();gJ("");if(!J){gJ("Completá el nombre del audio.");return}try{let Y=String(vZ||"").trim();if(!Y){gJ("Completá la URL del audio.");return}if(!J2.test(Y)){gJ("La URL debe apuntar a un archivo de audio válido.");return}const Z=M.ref(`${tJ}/audios`),$=await Z.once("value"),H=[...Array.isArray($.val())?$.val():[],{nombre:J,url:Y}];await Z.set(H);bZ("");IZ("")}catch(Y){gJ("No se pudo guardar el audio en Firebase.")}},j1=async(J)=>{if(!Number.isInteger(J)||J<0)return;gJ("");try{const Y=M.ref(`${tJ}/audios`),Z=await Y.once("value"),$=Array.isArray(Z.val())?Z.val():[];if(!$[J])return;const Q={nombre:String($[J]?.nombre||"").trim(),url:String($[J]?.url||"").trim()},H=$.filter((L,q)=>q!==J);await Y.set(H);if(Q.url&&Q.url===sX)hZ("");if(Q.url&&Q.url===dX)yZ("")}catch(Y){gJ("No se pudo eliminar el audio de Firebase.")}},z2=async(J,Y)=>{Y.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await M.collection("galeria").doc(J).delete()}catch(Z){console.error("Error al borrar de Firebase:",Z)}},[k,WJ]=V(sZ()),yY=()=>WJ(sZ());i(()=>{if(window.lucide)window.lucide.createIcons()},[D,qZ,_Z,E,YJ,p]);i(()=>{if(C.current&&!C.current.closed&&t)FY({targetWindow:C.current,profileName:b.nombre,profession:b.profesion,photos:[...(b.galeria?.fotos||[]).map((J,Y)=>({...n(J,"image"),sourceTag:"fotos",sourceIndex:Y})),...(b.galeria?.videos||[]).map((J,Y)=>({...n(J,"video"),sourceTag:"videos",sourceIndex:Y}))],editingId:t,battlePhotoPrefs:b.batallaFotosPreferidas,profilePhotoUrl:b.fotos?.[0]||""})},[t,b.nombre,b.profesion,b.galeria?.fotos,b.galeria?.videos,b.batallaFotosPreferidas]);i(()=>{if(!lX)return;const J=C.current;if(!J||J.closed)return;if(t&&t===lX)return;const Y=E.find((Z)=>(Z?.firebaseId||Z?.id)===lX);if(!Y)return;FY({targetWindow:J,profileName:Y?.nombre||"",profession:Y?.profesion||"",photos:[...(Y?.galeria?.fotos||[]).map((Z,$)=>({...n(Z,"image"),sourceTag:"fotos",sourceIndex:$})),...(Y?.galeria?.videos||[]).map((Z,$)=>({...n(Z,"video"),sourceTag:"videos",sourceIndex:$}))],editingId:Y?.firebaseId||Y?.id||"",battlePhotoPrefs:Y?.batallaFotosPreferidas||Y?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:Y?.fotos?.[0]||""})},[lX,E,t]);i(()=>{const J=async(B)=>{if(B.data.type==="ADD_IMAGE"){const{url:U,id:A,label:K,mediaType:P}=B.data,u=P==="video"?"videos":"fotos";if(!A)return;const jJ=A===kJ?M.ref(`${tJ}/${u}`):M.ref(`perfiles/${A}/galeria/${u}`),a=(await jJ.once("value")).val()||[],g=(U||"").trim();if(!g)return;const r=[...a,{url:g,label:XJ.includes(K)?K:"",type:rJ(g,P),autor:""}];await jJ.set(r);o((qJ)=>({...qJ,galeria:{...qJ.galeria,[u]:r}}))}if(B.data.type==="DELETE_IMAGE"){const{index:U,id:A,mediaType:K}=B.data,P=K==="video"?"videos":"fotos";if(!A)return;const u=A===kJ?M.ref(`${tJ}/${P}`):M.ref(`perfiles/${A}/galeria/${P}`),s=(await u.once("value")).val()||[],a=s[U],g=s.filter((qJ,ZJ)=>ZJ!==U);await u.set(g);const r=n(a,K).url;if(r&&A!==kJ){const qJ=M.ref(`perfiles/${A}/batallaFotosPreferidas`),ZJ=await qJ.once("value"),e={...FJ(ZJ.val())};let jX=!1;Object.keys(e).forEach((lJ)=>{if(e[lJ]===r){e[lJ]="";jX=!0}});if(jX)await qJ.set(e)}o((qJ)=>({...qJ,galeria:{...qJ.galeria,[P]:g},batallaFotosPreferidas:(()=>{const ZJ=FJ(qJ.batallaFotosPreferidas);if(!r)return ZJ;const $J={...ZJ};Object.keys($J).forEach((e)=>{if($J[e]===r)$J[e]=""});return $J})()}))}if(B.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:U,slotId:A,index:K,mediaType:P}=B.data,u=WY(A);if(!U||U===kJ||!u||!Number.isInteger(K))return;const jJ=P==="video"?"videos":"fotos",g=(await M.ref(`perfiles/${U}/galeria/${jJ}`).once("value")).val()||[],r=n(g[K],P);if(!r.url||r.type!=="image")return;await M.ref(`perfiles/${U}/batallaFotosPreferidas/${A}`).set(r.url);o((ZJ)=>({...ZJ,batallaFotosPreferidas:{...FJ(ZJ.batallaFotosPreferidas),[A]:r.url}}))}if(B.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:U,slotId:A,url:K,mediaType:P,label:u}=B.data,jJ=WY(A),s=String(K||"").trim();if(!U||U===kJ||!jJ||!s)return;if(P==="video")return;await M.ref(`perfiles/${U}/batallaFotosPreferidas/${A}`).set(s);o((g)=>({...g,batallaFotosPreferidas:{...FJ(g.batallaFotosPreferidas),[A]:s}}))}if(B.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:U,slotId:A}=B.data,K=WY(A);if(!U||U===kJ||!K)return;await M.ref(`perfiles/${U}/batallaFotosPreferidas/${A}`).set("");o((u)=>({...u,batallaFotosPreferidas:{...FJ(u.batallaFotosPreferidas),[A]:""}}))}};window.addEventListener("message",J);const Y=M.ref("perfiles"),Z=M.ref(tJ);let $={},Q={};const H=A0(F0,[]);if(Array.isArray(H)&&H.length)I(H);const L=A0(U0,[]);if(Array.isArray(L)&&L.length)xZ(L);const q=()=>{const B=Object.entries($||{}).map(([P,u])=>({...hY(u),firebaseId:P})),U=H2(Q||{}),K=Object.values(U.galeria||{}).some((P)=>Array.isArray(P)&&P.length>0)?[...B,U]:B;I(K);T0(F0,K)},W=(B)=>{$={...$,[B.key]:B.val()||{}};q()},j=(B)=>{$={...$,[B.key]:B.val()||{}};q()},F=(B)=>{const{[B.key]:U,...A}=$;$=A;q()};Y.on("child_added",W);Y.on("child_changed",j);Y.on("child_removed",F);Z.on("value",(B)=>{Q=B.val()||{};const U=Array.isArray(Q?.audios)?Q.audios.map((A)=>({nombre:String(A?.nombre||"").trim(),url:String(A?.url||"").trim()})).filter((A)=>A.nombre&&A.url):[];xZ(U);T0(U0,U);q()});v(w0);const R=M.ref("arenaBattleState");R.on("value",(B)=>{PJ(B.val()||{})});const z=M.ref("arenaGlobalState");z.on("value",(B)=>{mJ(B.val()||{})});return()=>{window.removeEventListener("message",J);Y.off("child_added",W);Y.off("child_changed",j);Y.off("child_removed",F);Z.off();R.off();z.off()}},[]);i(()=>{const J=IJ.find((Z)=>Z.url===sX),Y=IJ.find((Z)=>Z.url===dX);[NX.current,KX.current].forEach((Z)=>{if(!Z)return;Z.pause();Z.currentTime=0});if(!xY)return;if(J&&NX.current){NX.current.src=J.url;NX.current.play().catch(()=>{})}if(Y&&KX.current&&Y.url!==J?.url){KX.current.src=Y.url;KX.current.play().catch(()=>{})}},[xY,sX,dX,IJ]);const hJ=(J)=>{if(!J)return"?";const Y=new Date,Z=new Date(J);let $=Y.getFullYear()-Z.getFullYear();if(Y.getMonth()<Z.getMonth()||Y.getMonth()===Z.getMonth()&&Y.getDate()<Z.getDate())$--;return $},mY=(J={})=>{return{...PX(),...J?.puntuaciones||{}}},nJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},uY=(J={},Y=[])=>{if(!Array.isArray(Y)||!Y.length)return 0;const Z=mY(J);return Y.reduce(($,Q)=>$+(Number(Z[Q])||0),0)/Y.length},YY=(J={})=>{return uY(J,nJ.Rostro)},ZY=(J={})=>{return uY(J,nJ.Cuerpo)},$Y=(J={})=>{return uY(J,nJ.Actitud)},pZ=(J={},Y="")=>{if(Y==="Rostro")return YY(J);if(Y==="Cuerpo")return ZY(J);if(Y==="Actitud")return $Y(J);return 0},LJ=(J={})=>{const Y=Object.keys(nJ).map(($)=>pZ(J,$));return(Y.reduce(($,Q)=>$+Q,0)/Y.length).toFixed(0)},QY=(J)=>{const Y=[],Z=(J.nacionalidad||"").toLowerCase(),$=(J.profesion||"").toLowerCase(),Q=(J.ciudad||"").toLowerCase(),H=hJ(J.fechaNacimiento);p.forEach((L)=>{const q=L.reglas;let W=!0;if(q.nacionalidades?.length>0&&!q.nacionalidades.some((j)=>Z===j.toLowerCase()))W=!1;if(q.profesiones?.length>0&&!q.profesiones.some((j)=>$===j.toLowerCase()))W=!1;if(q.ciudades?.length>0&&!q.ciudades.some((j)=>Q===j.toLowerCase()))W=!1;if(q.edadMin&&(H==="?"||H<parseInt(q.edadMin)))W=!1;if(q.edadMax&&(H==="?"||H>parseInt(q.edadMax)))W=!1;if(q.caracteristica&&q.umbral){const j=mY(J)[q.caracteristica]||0,F=parseInt(q.umbral);if(q.operador==="Superior a"&&j<=F)W=!1;if(q.operador==="Inferior a"&&j>=F)W=!1}if(W)Y.push(L.firebaseId)});return Y},q1=f(()=>["Todas",...new Set(E.map((J)=>J.nacionalidad).filter(Boolean))],[E]),A2=f(()=>["Todas",...new Set(E.map((J)=>J.profesion).filter(Boolean))],[E]),_1=f(()=>["Todas",...new Set(E.map((J)=>J.ciudad).filter(Boolean))],[E]),iZ=f(()=>{return(E||[]).reduce((J,Y)=>{if(!Y?.firebaseId)return J;J[Y.firebaseId]=QY(Y);return J},{})},[E,p]),$X=f(()=>{return(E||[]).flatMap((J)=>{const Y=j2(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map(($,Q)=>({item:$,sourceTag:"fotos",sourceIndex:Q,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map(($,Q)=>({item:$,sourceTag:"gifs",sourceIndex:Q,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map(($,Q)=>({item:$,sourceTag:"videos",sourceIndex:Q,fallbackType:"video"})):[]].map(({item:$,sourceTag:Q,sourceIndex:H,fallbackType:L})=>{const q=n($,L);return{id:`${J.firebaseId||J.nombre||"perfil"}-${Q}-${H}`,url:q.url,label:q.label,type:q.type,isGif:q.type==="image"&&L2(q.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||q.url,profileId:J.firebaseId,sourceCharacterId:Y,sourceTag:Q,sourceIndex:H}})})},[E]),EJ=f(()=>{return $X.filter((J)=>Boolean(J.url))},[$X]),fY=f(()=>{return EJ.reduce((J,Y)=>{const Z=Y.label||"";if(!J[Z])J[Z]=[];J[Z].push(Y);return J},{})},[EJ]),lZ=f(()=>{return EJ.reduce((J,Y)=>{const Z=Y.profileId||Y.nombre;if(!Z)return J;if(!J[Z])J[Z]=[];J[Z].push(Y);return J},{})},[EJ]),O1=f(()=>{return new Set(EJ.map((J)=>J.profileId).filter(Boolean)).size},[EJ]),tZ=f(()=>{return Object.entries(iZ||{}).reduce((J,[Y,Z])=>{J[Y]=new Set(Array.isArray(Z)?Z:[]);return J},{})},[iZ]),yJ=f(()=>{if(h==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:EJ[0]?.url||"",photos:EJ.filter((J)=>!o1.includes(J.label||""))}];if(h==="PERSONAJE")return Object.entries(lZ).map(([J,Y])=>{const Z=Y[0]||{};return{id:`PERSONAJE-${J}`,profileId:Z.profileId||null,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotoPerfil:Z.fotoPerfil||Z.url||"",photos:Y}}).filter((J)=>J.photos.length>0).sort((J,Y)=>J.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}));if(h==="ETIQUETA")return XJ.map((J)=>{const Y=fY[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:Y[0]?.url||"",photos:Y}}).filter((J)=>J.photos.length>0);return(p||[]).map((J)=>{const Y=EJ.filter((Z)=>{if(!Z.profileId)return!1;const $=tZ[Z.profileId];return $?$.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||Y[0]?.fotoPerfil||Y[0]?.url||"",photos:Y}}).filter((J)=>J.photos.length>0).sort((J,Y)=>J.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[EJ,fY,lZ,p,h,tZ]),pJ=f(()=>{if(h==="GENERAL")return yJ[0]||null;if(!mX)return null;return yJ.find((J)=>J.id===mX.id)||null},[yJ,mX,h]),wJ=f(()=>{if(h!=="PERSONAJE")return[];return yJ.filter((J)=>BX.includes(J.id))},[yJ,h,BX]),MX=f(()=>{if(h==="PERSONAJE")return wJ.flatMap((J)=>J.photos||[]);if(h==="ETIQUETA"){if(!XX.length)return[];return EJ.filter((J)=>XX.includes(J.label))}return pJ?.photos||EJ},[h,wJ,pJ,EJ,XX]),W1=f(()=>{const J=MX.reduce((Y,Z)=>{const $=Z.label||"";if(!$)return Y;Y[$]=(Y[$]||0)+1;return Y},{});return XJ.reduce((Y,Z)=>{Y[Z]=J[Z]||0;return Y},{})},[MX]),y=f(()=>{return MX.filter((J)=>h==="ETIQUETA"?!0:bJ==="INICIAL"?J.label!=="X":bJ==="100"?!0:J.label===bJ)},[MX,bJ,h]),cY=f(()=>{return y.slice(0,DZ)},[y,DZ]),L1=cY.length<y.length,HY=V0[h]||h,jY=h!=="GENERAL"&&h!=="ETIQUETA",oZ=f(()=>{if(h!=="PERSONAJE")return[];return yJ.filter((J)=>!BX.includes(J.id))},[yJ,h,BX]),S=zJ===null?null:y[qX(zJ,y.length)]||null,GJ=f(()=>{return $X.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(mZ[J.id])})},[$X,mZ]),aZ=f(()=>{const J=GJ.reduce((Y,Z)=>{const $=Z.profileId||Z.nombre||"sin-perfil";if(!Y[$])Y[$]={id:$,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotos:[]};Y[$].fotos.push(Z);return Y},{});return Object.values(J).map((Y)=>({...Y,fotos:Y.fotos.sort((Z,$)=>(Z.label||"").localeCompare($.label||"","es",{sensitivity:"base"}))})).sort((Y,Z)=>Y.nombre.localeCompare(Z.nombre,"es",{sensitivity:"base"}))},[GJ]);i(()=>{if(!S){YX(!1);uX("");fX("");cJ("");return}YX(!1);uX(S.label||"");fX(S.url||"");cJ("")},[S]);i(()=>{if(D!=="GALERIA"){RX(null);JJ(null)}},[D]);i(()=>{CZ(40);JJ(null)},[h,bJ,XX,BX,mX,E.length]);i(()=>{RX(null);JJ(null);zY([]);UZ([])},[h]);i(()=>{if(zJ===null)return;if(!y.length){JJ(null);return}if(zJ>=y.length)JJ(0)},[y,zJ]);i(()=>{if(zJ===null)return;const J=(Y)=>{if(Y.key==="Escape"){JJ(null);return}if(!y.length)return;if(Y.key==="ArrowRight")JJ((Z)=>qX((Z??0)+1,y.length));if(Y.key==="ArrowLeft")JJ((Z)=>qX((Z??0)-1,y.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[y.length,zJ]);i(()=>{if(zJ===null){zX(!1);AY(!1);VZ(!1)}},[zJ]);i(()=>{if(!VY)return;const J=(Z)=>{if(N.current&&!N.current.contains(Z.target))hX(!1)},Y=(Z)=>{if(Z.key==="Escape")hX(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",Y);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",Y)}},[VY]);i(()=>{let J=!1;const Y=$X.filter(($)=>$.type==="image"&&$.url);if(!Y.length){vY({});return}(async()=>{const $=8,Q=[];for(let L=0;L<Y.length;L+=$){const q=Y.slice(L,L+$),W=await Promise.all(q.map(async(j)=>({id:j.id,isBroken:await N0(j.url)})));Q.push(...W);if(J)return}if(J)return;const H=Q.reduce((L,q)=>{L[q.id]=q.isBroken;return L},{});vY(H)})();return()=>{J=!0}},[$X]);i(()=>{if(!PY)return;const J=GJ.reduce((Y,Z)=>{Y[Z.id]=Z.url;return Y},{});uZ(J);fZ({})},[PY,GJ]);i(()=>{if(dJ.current){clearTimeout(dJ.current);dJ.current=null}if(!KJ||!S)return;if(S.type==="video")return;const J=TY*1000;dJ.current=setTimeout(()=>{JJ((Y)=>D0(Y,y,vJ))},J);return()=>{if(dJ.current){clearTimeout(dJ.current);dJ.current=null}}},[KJ,S,y,vJ,TY]);i(()=>{if(!S||!oX.current)return;oX.current=!1;requestAnimationFrame(()=>{F1()})},[S]);const sY=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,rZ=()=>{const J=tX.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},E1=()=>{const J=tX.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},F1=()=>{const J=tX.current;if(!J)return;if(document.fullscreenElement)return;const Y=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof Y==="function")Promise.resolve(Y.call(J)).catch(()=>{if(sY)rZ()});else if(sY)rZ()},U1=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},eZ=(J,{autoplay:Y=!1,fromGeneralPlay:Z=!1}={})=>{oX.current=!!Y;JJ(J);zX(Y);VZ(Z);YX(!Z)},V1=(J)=>{if(!J)return;zY((Y)=>Y.includes(J)?Y:[...Y,J]);JJ(null)},D1=(J)=>{if(!J)return;zY((Y)=>Y.filter((Z)=>Z!==J));JJ(null)},C1=(J)=>{if(!J)return;UZ((Y)=>Y.includes(J)?Y.filter((Z)=>Z!==J):[...Y,J]);JJ(null)},R1=async()=>{if(!(typeof window!=="undefined"&&typeof window.JSZip!=="undefined")){window.alert("No se pudo iniciar la descarga: falta la librería ZIP.");return}if(!y.length){window.alert("No hay archivos visibles para descargar.");return}const Y=($="")=>String($||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\/:*?"<>|]/g,"-").replace(/\s+/g," ").trim(),Z=($="")=>{return((String($||"").split("?")[0].split("#")[0].match(/\.([a-zA-Z0-9]{2,5})$/)||[])[1]||"jpg").toLowerCase()};BZ(!0);try{const $=new window.JSZip,Q=y.filter((K)=>K?.url);let H=0,L=0,q=0;const j=String(window.GALLERY_DOWNLOAD_PROXY||"").trim()||"https://corsproxy.io/?",F=(K)=>{if(!j)return"";if(j.includes("{url}"))return j.replace("{url}",encodeURIComponent(K));const P=j.endsWith("?")||j.endsWith("=")?"":j.includes("?")?"&":"?";return`${j}${P}${encodeURIComponent(K)}`},R=async(K)=>{const P=await fetch(K,{mode:"cors"});if(!P.ok)throw new Error(`HTTP ${P.status}`);return{blob:await P.blob(),viaProxy:!1}};for(let K=0;K<Q.length;K+=1){const P=Q[K],u=Y(P.nombre||"Sin nombre")||"Sin nombre",jJ=Z(P.url),s=Y(P.label||"sin-etiqueta")||"sin-etiqueta",a=`${String(K+1).padStart(4,"0")}_${s}.${jJ}`;try{let g;try{g=await R(P.url)}catch(r){const qJ=F(P.url);if(!qJ)throw r;const ZJ=await fetch(qJ,{mode:"cors"});if(!ZJ.ok)throw new Error(`Proxy HTTP ${ZJ.status}`);g={blob:await ZJ.blob(),viaProxy:!0}}$.folder(u).file(a,g.blob);H+=1;if(g.viaProxy)q+=1}catch(g){L+=1;console.warn("No se pudo descargar un archivo de la galería:",P.url,g)}}if(!H){window.alert("No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.");return}const z=await $.generateAsync({type:"blob"}),B=URL.createObjectURL(z),U=document.createElement("a"),A=new Date().toISOString().slice(0,10);U.href=B;U.download=`galeria-completa-${A}.zip`;document.body.appendChild(U);U.click();U.remove();URL.revokeObjectURL(B);if(L>0)window.alert(`Descarga completada con avisos: ${H} archivos incluidos, ${L} omitidos y ${q} recuperados por proxy.`)}catch($){console.error("Error al generar ZIP de galería:",$);window.alert("No se pudo crear el ZIP de la galería.")}finally{BZ(!1)}},J0=()=>{oX.current=!1;zX(!1);JJ(null);E1();U1()},wX=()=>JJ((J)=>D0(J,y,vJ)),T2=()=>JJ((J)=>qX((J??0)-1,y.length)),B1=async()=>{if(!S?.profileId||!S?.sourceTag||!Number.isInteger(S?.sourceIndex))return;const J=(TZ||"").trim();if(!J){cJ("La URL no puede estar vacía.");return}if(R0(J)||!_J(J,"")){cJ("La URL está bloqueada o no es válida.");return}try{MZ(!0);cJ("");if(J!==S.url)await nZ({profileId:S.profileId,sourceTag:S.sourceTag,sourceIndex:S.sourceIndex,url:J});await a0({profileId:S.profileId,sourceTag:S.sourceTag,sourceIndex:S.sourceIndex,label:AZ});YX(!1)}catch(Y){cJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",Y)}finally{MZ(!1)}},z1=(J,Y)=>{uZ((Z)=>({...Z,[J]:Y}))},X0=(J,Y)=>{if(!J)return;fZ((Z)=>({...Z,[J]:Boolean(Y)}))},A1=(J)=>{const Y=(IY[J?.id]||J?.url||"").trim();if(!Y)return;window.open(Y,"_blank","noopener,noreferrer")},T1=async(J)=>{if(!J)return;const Y=(IY[J.id]||"").trim();if(!Y)return;pX((Z)=>({...Z,[J.id]:!0}));try{if(Y!==J.url)await nZ({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:Y});const Z=await N0(Y);vY(($)=>({...$,[J.id]:Z}));if(!Z)X0(J.id,!1)}catch(Z){console.error("Error al actualizar URL rota:",Z)}finally{pX((Z)=>({...Z,[J.id]:!1}))}},N1=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;pX((Z)=>({...Z,[J.id]:!0}));try{await r0({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Z){console.error("Error al eliminar foto rota:",Z)}finally{pX((Z)=>({...Z,[J.id]:!1}))}},K1=f(()=>{if(h==="PERSONAJE")return wJ.length?`${wJ.length} personaje${wJ.length>1?"s":""} seleccionado${wJ.length>1?"s":""}`:"Sin personajes seleccionados";if(pJ&&jY)return pJ.nombre;return HY},[h,wJ,pJ,jY,HY]),M1=async(J)=>{J.preventDefault();if(UY)return;OZ(!0);const Y={...b};try{if(t){await M.ref(`perfiles/${t}`).set(Y);uJ(!1);FX(null)}else{await M.ref("perfiles").push(Y);uJ(!1);o(eX())}}catch(Z){console.error("No se pudo guardar el perfil:",Z);window.alert("No se pudo guardar el perfil. Revisá tu conexión e intentá de nuevo.")}finally{OZ(!1)}},w1=async(J)=>{J.preventDefault();const{firebaseId:Y,...Z}=k,$={...Z,type:"custom"};try{if(Y)await M.ref(`categorias/${Y}`).update($);else await M.ref("categorias").push($);IX(!1);yY()}catch(Q){console.error("La categoría no quiso guardarse:",Q)}},G1=async(J)=>{if(!J)return;try{await M.ref(`categorias/${J}`).remove();v((Y)=>Y.filter((Z)=>Z.firebaseId!==J));DX((Y)=>Y===J?null:Y)}catch(Y){console.error("No se pudo borrar la categoría:",Y);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},dY=(J)=>{if(!J?.firebaseId)return;gX("");VX(J);WZ(!0)},k1=()=>{if(!t)return;const J=E.find((Y)=>Y.firebaseId===t);if(!J)return;dY(J)},nY=()=>{WZ(!1);UX(null);VX(null)},S1=async(J)=>{if(!J)return;await M.ref(`perfiles/${J}`).remove();I((Y)=>Y.filter((Z)=>Z.firebaseId!==J))},x1=async()=>{if(!CJ?.firebaseId)return;try{await S1(CJ.firebaseId);gX("");uJ(!1);if(t===CJ.firebaseId)FX(null);nY()}catch(J){console.error("No se pudo borrar el perfil:",J);gX("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},qY=()=>{hX(!1);VX(null)},P1=(J,Y)=>{J.preventDefault();hX(!0);I0({x:J.clientX,y:J.clientY});VX(Y)},b1=()=>{if(!CJ)return;o(hY(CJ));FX(CJ.firebaseId);uJ(!0);qY()},v1=async()=>{if(!CJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){qY();return}try{await M.ref(`perfiles/${CJ.firebaseId}`).remove();I((Y)=>Y.filter((Z)=>Z.firebaseId!==CJ.firebaseId));qY()}catch(Y){console.error("No se pudo borrar el perfil:",Y);alert("No se pudo borrar el perfil. Probá de nuevo.");qY()}},Y0=(J)=>{const Y=J?.estaturaCm;if(Y===void 0||Y===null||Y==="")return"Sin dato";const Z=Number(Y);if(Number.isNaN(Z)||Z<=0)return"Sin dato";return`${Math.round(Z)} cm`},pY=(J="")=>String(J||"").trim().toLowerCase(),I1=(J="")=>String(J||"").trim(),GX=(J=[])=>[...J||[]].filter((Y)=>Y?.firebaseId&&(Y?.nombre||"").trim()).sort((Y,Z)=>(Y.nombre||"").localeCompare(Z.nombre||"","es",{sensitivity:"base"})).map((Y)=>Y.firebaseId),Z0=(J=[],Y="GENERAL")=>{const Z=String(Y||"GENERAL").trim().toUpperCase(),$=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,W)=>(q.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(Z==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:$.map((q)=>q.firebaseId)}];if(Z==="EDADES"){const q={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};$.forEach((W)=>{const j=hJ(W.fechaNacimiento);if(!Number.isFinite(j)||j<18)return;if(j<=28)q["18-28"].ids.push(W.firebaseId);else if(j<=39)q["29-39"].ids.push(W.firebaseId);else q["40+"].ids.push(W.firebaseId)});return Object.values(q)}const Q=Z==="NACIONALIDADES"?"nacionalidad":"profesion",H=Z==="NACIONALIDADES"?"Nacionalidad":"Profesión",L=$.reduce((q,W)=>{const j=pY(W?.[Q]);if(!j)return q;if(!q[j])q[j]={key:j,label:I1(W?.[Q])||j,typeLabel:H,ids:[]};q[j].ids.push(W.firebaseId);return q},{});return Object.values(L).sort((q,W)=>q.label.localeCompare(W.label,"es",{sensitivity:"base"}))},iY=(J=[],Y="GENERAL",Z="")=>{const $=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,W)=>(q.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL"){const q=$.map((W)=>W.firebaseId);return{groupedIds:q.length>1?[{key:"general",label:"General",typeLabel:"General",ids:q}]:[],orderedIds:q}}const Q=Z0($,Y),H=pY(Z),L=Q.filter((q)=>{if(!H||H==="all")return!0;return pY(q.key)===H}).filter((q)=>q.ids.length>=2);return{groupedIds:L,orderedIds:L.flatMap((q)=>q.ids)}},iJ=(J,Y)=>[J,Y].sort().join("__"),QX=(J)=>{if(!J||typeof J!=="object")return null;const Y=String(J.winnerId||"").trim(),Z=String(J.loserId||"").trim();if(!Y||!Z||Y===Z)return null;return{winnerId:Y,loserId:Z,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},lY=(J={},Y="")=>!!QX(J?.[Y]),kX=(J={},Y=[])=>{const Z=new Set((Y||[]).filter(Boolean)),$={},Q={},H={};Object.entries(J||{}).forEach(([j,F])=>{const R=QX(F);if(!R)return;const{winnerId:z,loserId:B}=R;if(Z.size&&(!Z.has(z)||!Z.has(B)))return;const U=iJ(z,B),A={winnerId:z,loserId:B,reason:"direct",playedAt:R.playedAt??Date.now()};$[U]=A;Q[U]=A;if(!H[z])H[z]=new Set;H[z].add(B)});new Set([...Object.keys(H),...Object.values(H).flatMap((j)=>[...j])]).forEach((j)=>{const F=[...H[j]||[]],R=new Set;while(F.length){const z=F.shift();if(!z||R.has(z)||z===j)continue;R.add(z);const B=iJ(j,z);if(!Q[B])Q[B]={winnerId:j,loserId:z,reason:"transitive",playedAt:null};(H[z]||[]).forEach((U)=>{if(!R.has(U))F.push(U)})}});const q=Object.fromEntries(Object.entries(H).map(([j,F])=>[j,[...F]])),W=h1(Q);return{directMatchups:$,matchups:Q,victoryGraph:q,stats:W}},SX=(J,Y={})=>{const Z=VJ(J);if(!Z)return null;const $=GX(E),Q=kX(Y?.directMatchups||Y?.matchups||{},$);return{arenaName:Z,orderedIds:$,...Q}},tY=(J={},Y="",Z="")=>{if(!Y||!Z||Y===Z)return!1;const $=iJ(Y,Z);return lY(J,$)},g1=(J=[],Y={})=>{for(let Z=0;Z<J.length-1;Z++)for(let $=Z+1;$<J.length;$++)if(!tY(Y,J[Z],J[$]))return[J[Z],J[$]];return null},oY=(J=[],Y={},Z={})=>{const $={...Y||{},...Z||{}};for(const Q of J){const H=g1(Q?.ids||[],$);if(H)return H}return null},xX=(J=[],Y,Z="")=>{if(!Y)return null;return J.find(($)=>{const Q=$?.ids||[];if(!Q.includes(Y))return!1;return!Z||Q.includes(Z)})||null},h1=(J={})=>{return Object.keys(J||{}).reduce((Y,Z)=>{const $=QX(J[Z]);if(!$)return Y;const{winnerId:Q,loserId:H}=$,L=Y[Q]||{wins:0,battles:0},q=Y[H]||{wins:0,battles:0};return{...Y,[Q]:{wins:L.wins+1,battles:L.battles+1},[H]:{wins:q.wins,battles:q.battles+1}}},{})},$0=(J="",Y="")=>{const Z=String(Y||"").trim();if(!J||!Z)return!1;return J.endsWith(`::${Z}`)},y1=(J,Y)=>{const Z=QX(Y);if(!Z||Z.reason!=="direct")return J||null;const $=QX(J);if(!$||$.reason!=="direct")return Z;const Q=$.playedAt??0;return(Z.playedAt??0)>=Q?Z:$},Q0=(J,Y=OJ)=>{const Z=String(J||"").trim();if(!Z)return kX({},[]);const $={};Object.entries(Y||{}).forEach(([H,L])=>{if(!$0(H,Z))return;const q=L?.directMatchups||{};Object.entries(q).forEach(([W,j])=>{$[W]=y1($[W],j)})});const Q=[...E||[]].map((H)=>H?.firebaseId).filter(Boolean).sort((H,L)=>String(H).localeCompare(String(L),"es",{sensitivity:"base"}));return kX($,Q)},H0=(J,Y)=>{const $=(Q0(J).stats||{})[Y]||{wins:0,battles:0},Q=$.battles?Math.round($.wins/$.battles*100):0;return{...$,score:Q}},j0=(J,Y=OJ)=>{const Z=Q0(J,Y).stats||{};return[...E||[]].filter(($)=>$?.firebaseId).reduce(($,Q)=>{const H=Z[Q.firebaseId]||{wins:0,battles:0};$[Q.firebaseId]=H.battles?Math.round(H.wins/H.battles*100):0;return $},{})},N2=(J=[],Y={})=>{for(let Z=0;Z<J.length-1;Z++)for(let $=Z+1;$<J.length;$++){const Q=iJ(J[Z],J[$]);if(!lY(Y,Q))return[J[Z],J[$]]}return null},q0=(J,Y,Z=null)=>{if(!Y)return null;const $=E2.includes(Y.mode)?Y.mode:"GENERAL",Q=String(Y.groupKey||"all").trim().toLowerCase()||"all",H=iY(E,$,Q),L=H.groupedIds||[],q=H.orderedIds||[],W=SX(J,Z||DJ?.[VJ(J)]||{}),j=W?.directMatchups||{},F=W?.matchups||{},R=W?.victoryGraph||{},z=W?.stats||{},B=Y.championId,U=Y.challengerId,A=xX(L,B,U),K=!!B&&!!U&&B!==U&&!!A&&!tY(F,B,U),P=L.length?oY(L,Y.matchups||{},F):null,u=K?[B,U]:P,jJ=!P,s=xX(L,u?.[0],u?.[1]);return{...Y,mode:$,groupKey:Q,groupedIds:L,orderedIds:q,stats:z,directMatchups:j,matchups:F,victoryGraph:R,championId:u?u[0]:null,challengerId:u?u[1]:null,activeGroupKey:s?.key||null,activeGroupLabel:s?`${s.typeLabel}: ${s.label}`:"",isFinished:jJ}};i(()=>{if(!E.length)return;const J={},Y=[];Object.entries(OJ||{}).forEach(([Z,$])=>{const{arenaName:Q}=M0(Z),H=q0(Q,$,DJ?.[VJ(Q)]);if(!H)return;if(JSON.stringify($)===JSON.stringify(H))return;J[Z]=H;Y.push(M.ref(`arenaBattleState/${Z}`).set(H).catch((q)=>console.error("No se pudo normalizar el estado del arena:",q)))});if(!Object.keys(J).length)return;PJ((Z)=>({...Z,...J}));Promise.all(Y).catch(()=>{})},[OJ,DJ,E]);i(()=>{if(!E.length)return;const J={};Object.entries(OJ||{}).forEach(([$,Q])=>{const{arenaName:H}=M0($),L=VJ(H);if(!L)return;if(!J[L])J[L]={};Object.entries(Q?.directMatchups||{}).forEach(([q,W])=>{const j=QX(W);if(!j)return;J[L][q]={winnerId:j.winnerId,loserId:j.loserId,reason:"direct",playedAt:j.playedAt??Date.now()}})});const Y=[],Z={};Object.entries(J).forEach(([$,Q])=>{const H=VJ($);if(!H||DJ?.[H])return;const L=SX($,{directMatchups:Q});if(!L)return;Z[H]=L;Y.push(M.ref(`arenaGlobalState/${H}`).set(L).catch((q)=>console.error("No se pudo migrar arenaGlobalState:",q)))});if(!Object.keys(Z).length)return;mJ(($)=>({...$,...Z}));Promise.all(Y).catch(()=>{})},[OJ,DJ,E]);const _0=(J,Y=w,Z=c)=>{const $=[...E].filter((A)=>A?.firebaseId&&(A?.nombre||"").trim()).sort((A,K)=>(A.nombre||"").localeCompare(K.nombre||"","es",{sensitivity:"base"}));if($.length<2)return;const Q=String(Y||"GENERAL").trim().toUpperCase(),H=iY($,Q,Z),L=H.groupedIds||[],q=H.orderedIds||[],W=VJ(J),j=SX(J,DJ?.[W]||{}),F=j?.matchups||{},R=oY(L,{},F),z=R?xX(L,R[0],R[1]):null,B={mode:Q,groupKey:String(Z||"").trim().toLowerCase()||"all",groupedIds:L,orderedIds:q,stats:j?.stats||{},directMatchups:j?.directMatchups||{},matchups:F,victoryGraph:j?.victoryGraph||{},championId:R?R[0]:null,challengerId:R?R[1]:null,activeGroupKey:z?.key||null,activeGroupLabel:z?`${z.typeLabel}: ${z.label}`:"",isFinished:!R},U=LX(J,Y,Z);if(!U)return;PJ((A)=>({...A,[U]:B}));if(!DJ?.[W]){mJ((A)=>({...A,[W]:j}));M.ref(`arenaGlobalState/${W}`).set(j).catch((A)=>console.error("No se pudo guardar arenaGlobalState inicial:",A))}M.ref(`arenaBattleState/${U}`).set(B).catch((A)=>console.error("No se pudo guardar el estado del arena:",A))},m1=async(J,Y,Z)=>{if(!J)return;try{await M.ref(`perfiles/${J}/puntuaciones/${Y}`).set(Z)}catch($){console.error("No se pudo actualizar score del arena:",$)}},O0=(J,Y,Z=w,$=c)=>{const Q=LX(J,Z,$),H=OJ[Q];if(!H||H.isFinished)return;const L=VJ(J),q=SX(J,DJ?.[L]||{}),W=Array.isArray(H.groupedIds)&&H.groupedIds.length?H.groupedIds:iY(E,H.mode||"GENERAL",H.groupKey||"all").groupedIds,{championId:j,challengerId:F}=H;if(Y!==j&&Y!==F)return;const R=Y===j?F:j;if(!Y||!R)return;if(tY(q?.matchups||{},Y,R))return;const z=iJ(Y,R),B={...q?.directMatchups||{},[z]:{winnerId:Y,loserId:R,reason:"direct",playedAt:Date.now()}},U=kX(B,GX(E)),A=U.matchups,K=U.stats||{},P=xX(W,Y,R),jJ=(($J,e,jX)=>{if(!e)return null;for(const lJ of $J){if(!lJ||lJ===e)continue;const l1=iJ(e,lJ);if(!lY(jX,l1))return lJ}return null})(P?.ids||[],Y,A),s=jJ?[Y,jJ]:oY(W,H.matchups||{},A),a=xX(W,s?.[0],s?.[1]),g={arenaName:L,orderedIds:GX(E),directMatchups:U.directMatchups,matchups:A,victoryGraph:U.victoryGraph,stats:K},r={...H,groupedIds:W,directMatchups:g.directMatchups,stats:K,matchups:A,victoryGraph:U.victoryGraph,championId:s?s[0]:null,challengerId:s?s[1]:null,activeGroupKey:a?.key||null,activeGroupLabel:a?`${a.typeLabel}: ${a.label}`:"",isFinished:!s},qJ={...OJ||{},[Q]:r},ZJ=j0(J,qJ);I(($J)=>$J.map((e)=>{if(!e?.firebaseId||!Object.prototype.hasOwnProperty.call(ZJ,e.firebaseId))return e;const jX=ZJ[e.firebaseId];return{...e,puntuaciones:{...e.puntuaciones||{},[J]:jX}}}));Object.entries(ZJ).forEach(([$J,e])=>{m1($J,J,e)});PJ(($J)=>({...$J,[Q]:r}));mJ(($J)=>({...$J,[L]:g}));Promise.all([M.ref(`arenaGlobalState/${L}`).set(g),M.ref(`arenaBattleState/${Q}`).set(r)]).catch(($J)=>console.error("No se pudo guardar avance de batallas:",$J))},u1=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((E||[]).map((Y)=>{if(!Y?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${Y.firebaseId}/puntuaciones`).set(PX())}));I((Y)=>Y.map((Z)=>({...Z,puntuaciones:PX()})));PJ({});mJ({});await M.ref("arenaBattleState").remove();await M.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(Y){console.error("No se pudieron resetear las calificaciones:",Y);alert("No se pudo completar el reseteo.")}},f1=async(J,Y=w,Z=c)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const Q={...OJ||{}},H=Object.keys(Q).filter((q)=>$0(q,J));H.forEach((q)=>delete Q[q]);await Promise.all(H.map((q)=>M.ref(`arenaBattleState/${q}`).remove()));PJ(Q);await Promise.all((E||[]).map((q)=>{if(!q?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${q.firebaseId}/puntuaciones/${J}`).set(0)}));I((q)=>q.map((W)=>({...W,puntuaciones:{...W.puntuaciones||{},[J]:0}})));const L=LX(J,Y,Z);PJ((q)=>{if(!q?.[L])return q;const W={...q};delete W[L];return W});mJ((q)=>{const W=VJ(J);if(!q?.[W])return q;const j={...q};delete j[W];return j});await M.ref(`arenaBattleState/${L}`).remove();await M.ref(`arenaGlobalState/${VJ(J)}`).remove();alert(`Se reseteó "${J}" (${WX(Y)}) y se limpió su estado de batallas.`)}catch(Q){console.error("No se pudo resetear el item:",Q);alert("No se pudo resetear ese item.")}},W0=async(J,Y,Z,$=w,Q=c)=>{const H=LX(J,$,Q),L=OJ?.[H],q=VJ(J),W=SX(J,DJ?.[q]||{});if(!L){alert("Esa arena no tiene estado cargado.");return}const j=W?.matchups||{},F=W?.directMatchups||{};if(!Object.keys(j).filter((U)=>!!j[U]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const z=iJ(Y,Z);if(!j[z]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!F[z]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const U={...F};delete U[z];const A=kX(U,GX(E)),K={arenaName:q,orderedIds:GX(E),directMatchups:A.directMatchups,matchups:A.matchups,victoryGraph:A.victoryGraph,stats:A.stats},P={...L,directMatchups:K.directMatchups,matchups:K.matchups,victoryGraph:K.victoryGraph,stats:K.stats},u=q0(J,P,K);if(!u){alert("No se pudo recomponer el estado del arena.");return}PJ((a)=>({...a,[H]:u}));mJ((a)=>({...a,[q]:K}));await Promise.all([M.ref(`arenaGlobalState/${q}`).set(K),M.ref(`arenaBattleState/${H}`).set(u)]);const jJ={...OJ||{},[H]:u},s=j0(J,jJ);await Promise.all(Object.entries(s).map(async([a,g])=>{await M.ref(`perfiles/${a}/puntuaciones/${J}`).set(g)}));I((a)=>a.map((g)=>{if(!g?.firebaseId||!Object.prototype.hasOwnProperty.call(s,g.firebaseId))return g;const r=s[g.firebaseId];return{...g,puntuaciones:{...g.puntuaciones||{},[J]:r}}}));alert("Batalla reseteada correctamente.")}catch(U){console.error("No se pudo resetear la batalla:",U);alert("No se pudo resetear esa batalla.")}},c1=f(()=>{const J=E;if(D==="RANKING")return[...J].sort((Y,Z)=>parseFloat(LJ(Z))-parseFloat(LJ(Y)));if(D==="CATEGORIAS"&&YJ)return J.filter((Y)=>QY(Y).includes(YJ));return J},[E,D,YJ]),L0=f(()=>{return new Set(GJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[GJ]),_Y=f(()=>{const J=String(NY||"").trim().toLowerCase(),Y=($)=>{return[$?.profesion,$?.profesiones].flatMap((H)=>{if(Array.isArray(H))return H;if(typeof H==="string")return H.split(",");return[]}).map((H)=>String(H||"").trim()).filter(Boolean).join(" ")},Z=($)=>{if(!$||typeof $!=="object")return!1;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),String($.ciudad||"").trim(),Y($),String($.fechaNacimiento||"").trim(),String($.estaturaCm||"").trim()].some(Boolean)||Array.isArray($.fotos)&&$.fotos.some(Boolean)};return[...E||[]].filter(($)=>{if(!Z($))return!1;if(ZX&&q2($))return!1;if(iX){const H=String($?.firebaseId||$?.id||"").trim();if(!H||!L0.has(H))return!1}if(!J)return!0;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),Y($)].join(" ").toLowerCase().includes(J)}).sort(($,Q)=>String($?.nombre||"").localeCompare(String(Q?.nombre||""),"es",{sensitivity:"base"}))},[E,NY,ZX,iX,L0]),m=f(()=>_Y.find((J)=>J?.firebaseId===nX)||null,[_Y,nX]);i(()=>{const J=()=>TX("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const s1=f(()=>{if(!w)return[];return Z0(E,w)},[E,w]),OY=w&&w!=="GENERAL",E0=(J,Y)=>{if(Y==="promedio")return Number(LJ(J))||0;if(Y==="nombre")return(J.nombre||"").toLowerCase();if(Y==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(Y==="edad"){const Z=hJ(J.fechaNacimiento);return typeof Z==="number"?Z:-1}if(Y==="Rostro")return YY(J)||0;if(Y==="Cuerpo")return ZY(J)||0;if(Y==="Actitud")return $Y(J)||0;return Number(J.puntuaciones?.[Y]||0)},d1=(J)=>{if(HJ==="promedio")return LJ(J);if(HJ==="Rostro")return YY(J).toFixed(0);if(HJ==="Cuerpo")return ZY(J).toFixed(0);if(HJ==="Actitud")return $Y(J).toFixed(0);if(JX.includes(HJ))return Number(J.puntuaciones?.[HJ]||0).toFixed(0);return LJ(J)},HX=(J,Y="asc")=>{if(HJ===J){DY((Z)=>Z==="asc"?"desc":"asc");return}FZ(J);DY(Y)},n1=(J,Y)=>{const Z=nJ[Y]||[],$=new Set,Q=new Set,H=Object.entries(OJ||{});Z.forEach((W)=>{const j=DJ?.[VJ(W)]?.matchups||{};Object.values(j).forEach((F)=>{if(!F||typeof F!=="object")return;if(F.winnerId===J&&F.loserId)$.add(F.loserId);if(F.loserId===J&&F.winnerId)Q.add(F.winnerId)})});const L=new Map((E||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),q=(W)=>[...W].map((j)=>L.get(j)).filter(Boolean).sort((j,F)=>j.localeCompare(F,"es",{sensitivity:"base"}));return{wins:q($),losses:q(Q)}},aY=(J,Y)=>{const Z=String(Y||"").trim(),$=String(J||"").trim();if(!Z||!$)return{arenaName:Z,wins:[],losses:[]};const Q=DJ?.[VJ(Z)]?.matchups||{},H=new Map((E||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),L=([W,j])=>{if(!j||typeof j!=="object")return null;const F=String(j.winnerId||"").trim(),R=String(j.loserId||"").trim();if(!F||!R)return null;const z=F===$;if(!z&&R!==$)return null;const U=z?R:F;return{pairKey:W,arenaName:Z,profileId:$,opponentId:U,opponentName:H.get(U)||"Sin nombre",winnerId:F,loserId:R}},q=Object.entries(Q).map(L).filter(Boolean).sort((W,j)=>W.opponentName.localeCompare(j.opponentName,"es",{sensitivity:"base"}));return{arenaName:Z,wins:q.filter((W)=>W.winnerId===$),losses:q.filter((W)=>W.loserId===$)}},p1=(J,Y)=>{const Z=aY(J,Y),$=Z.wins.length,Q=Z.losses.length,H=$+Q,L=H?$/H*100:0;return{wins:$,losses:Q,total:H,winRate:L}},rY=[...c1].sort((J,Y)=>{const Z=E0(J,HJ),$=E0(Y,HJ);let Q=0;if(typeof Z==="string"||typeof $==="string")Q=String(Z).localeCompare(String($),"es",{sensitivity:"base"});else Q=Z-$;if(Q===0)return(J.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"});return fJ==="asc"?Q:-Q}),eY=!AJ,i1=f(()=>CY?rY:rY.slice(0,10),[rY,CY]);return X("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[AJ&&X("aside",{className:"hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative",children:[X("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),X("div",{className:"mb-12 text-center flex-shrink-0",children:[X("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"CAMPEONAS",icon:"crown",label:"Campeonas"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>X("button",{onClick:()=>{T(J.id);DX(null);RX(null);JJ(null);sJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${D===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[X(l,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),X("button",{onClick:()=>dZ(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[X(l,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[X("button",{onClick:()=>m0((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":AJ?"Replegar menú lateral":"Desplegar menú lateral",title:AJ?"Replegar menú lateral":"Desplegar menú lateral",children:X(l,{name:AJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${AJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[X("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),X("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),m&&X("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>sJ(""),role:"presentation",children:X("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[X("button",{type:"button",onClick:()=>sJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:X(l,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[X("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:X("img",{src:m.fotos?.[0]||"https://via.placeholder.com/500x700",alt:m.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"space-y-6",children:[X("div",{children:[X("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),X("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:m.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!m?.isAnonymousGallery&&X("div",{className:"grid grid-cols-1 gap-4",children:[X("article",{className:"taller-data-chip",children:[X("span",{children:"Profesión"},void 0,!1,void 0,this),X("strong",{children:m.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),X("strong",{children:`${m.nacionalidad||"No definida"} - ${m.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),X("strong",{children:`${m.fechaNacimiento||"No informado"} - ${hJ(m.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Estatura"},void 0,!1,void 0,this),X("strong",{children:m.estaturaCm?`${m.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"pt-2",children:X("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!m?.isAnonymousGallery&&X("button",{type:"button",onClick:()=>{yX({isOpen:!0,profile:m})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>{const J=C.current,Y=J&&!J.closed?J:window.open("","_blank");C.current=Y;FY({targetWindow:Y,profileName:m?.nombre||"",profession:m?.profesion||"",photos:[...(m?.galeria?.fotos||[]).map((Z,$)=>({...n(Z,"image"),sourceTag:"fotos",sourceIndex:$})),...(m?.galeria?.videos||[]).map((Z,$)=>({...n(Z,"video"),sourceTag:"videos",sourceIndex:$}))],editingId:m?.firebaseId||m?.id||"",battlePhotoPrefs:m?.batallaFotosPreferidas||m?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:m?.fotos?.[0]||""});cZ(m?.firebaseId||m?.id||"");Y?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!m?.isAnonymousGallery&&X(xJ,{children:[X("button",{type:"button",onClick:()=>{sJ("");JY(m)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>dY(m),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),D==="TALLER"&&X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{className:"space-y-2",children:X("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"max-w-2xl",children:X("input",{id:"tallerSearchInput",type:"text",value:NY,onChange:(J)=>wZ(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-3",children:[X("button",{type:"button",onClick:()=>i0((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${ZX?"btn-metal--danger":""}`,children:["Fotos incompletas ",ZX?"(Activo)":""]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>l0((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${iX?"btn-metal--danger":""}`,children:["Fotos Rotas ",iX?"(Activo)":""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:_Y.map((J)=>{const Y=QJ(J.profesion),Z=nX&&nX===J.firebaseId,$=_2(J),Q=t0===(J.firebaseId||J.nombre);return X("button",{type:"button",onClick:()=>{if(rX.current){rX.current=!1;return}TX("");sJ("");JY(J)},onContextMenu:(H)=>{if(!ZX||!$.length)return;H.preventDefault();H.stopPropagation();TX((L)=>L===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!ZX||!$.length)return;rX.current=!1;clearTimeout(aX.current);aX.current=setTimeout(()=>{rX.current=!0;TX(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(aX.current)},onTouchMove:()=>{clearTimeout(aX.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Z?"taller-card--selected":""}`,children:[X("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:X("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),X("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),X("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:Y.color,textShadow:`0 0 12px ${Y.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),Q&&X("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(H)=>{H.preventDefault();H.stopPropagation();o0(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[X("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),X("ul",{className:"space-y-1 mb-2",children:$.map((H)=>X("li",{className:"leading-tight",children:["• ",H]},H,!0,void 0,this))},void 0,!1,void 0,this),X("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!_Y.length&&X("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),X(W2,{isOpen:s0,profile:m,onClose:()=>d0(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),D==="CAMPEONAS"&&!YJ&&(()=>{const J=[{id:"18-23",min:18,max:23},{id:"24-29",min:24,max:29},{id:"30-35",min:30,max:35},{id:"36-41",min:36,max:41},{id:"42-60",min:42,max:60}],Y=(E||[]).filter(Boolean),Z=(j=[])=>[...j].sort((F,R)=>(Number(LJ(R))||0)-(Number(LJ(F))||0)).slice(0,3),$={nacionalidades:[],profesiones:[],edades:[],items:[],caracteristicas:[]},Q=Z(Y);[...new Set(Y.map((j)=>String(j.nacionalidad||"").trim()).filter(Boolean))].forEach((j)=>$.nacionalidades.push({id:`nac-${j}`,title:`Nacionalidad · ${j}`,top:Z(Y.filter((F)=>String(F.nacionalidad||"").trim()===j))}));J.forEach((j)=>$.edades.push({id:`edad-${j.id}`,title:`Edad · ${j.id}`,top:Z(Y.filter((F)=>{const R=hJ(F.fechaNacimiento);return typeof R==="number"&&R>=j.min&&R<=j.max}))}));[...new Set(Y.map((j)=>String(j.profesion||"").trim()).filter(Boolean))].forEach((j)=>$.profesiones.push({id:`prof-${j}`,title:`Profesión · ${j}`,top:Z(Y.filter((F)=>String(F.profesion||"").trim()===j))}));JX.forEach((j)=>{const F=[...Y].sort((R,z)=>(Number(z?.puntuaciones?.[j])||0)-(Number(R?.puntuaciones?.[j])||0)).slice(0,3);$.items.push({id:`item-${j}`,title:`Ítem · ${j}`,top:F,scoreType:"item",scoreKey:j})});[["Cuerpo",["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"]],["Rostro",["Rostro","Ojos","Boca","Cabello"]],["Actitud",["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]]].forEach(([j,F])=>{const R=[...Y].map((z)=>({...z,__metaScore:F.reduce((B,U)=>B+(Number(z?.puntuaciones?.[U])||0),0)/F.length})).sort((z,B)=>(B.__metaScore||0)-(z.__metaScore||0)).slice(0,3);$.caracteristicas.push({id:`meta-${j}`,title:j,top:R,scoreType:"meta"})});const q=[{id:"general",title:"Podio de puntuación general",cards:[{id:"general-score",title:"General · Ranking total",top:Q}]},{id:"nacionalidades",title:"Podios por nacionalidades",cards:$.nacionalidades},{id:"profesiones",title:"Podios por profesión",cards:$.profesiones},{id:"edades",title:"Podios por edades",cards:$.edades},{id:"items",title:"Podios por ítem",cards:$.items},{id:"caracteristicas",title:"Podios por características",cards:$.caracteristicas}],W=(j,F=!1)=>X("article",{className:`champion-podium-card champion-podium-card--${F?"general":"section"} rounded-2xl p-5`,children:[X("h3",{className:`champion-podium-title text-xs font-black uppercase tracking-[0.18em] mb-3 ${F?"text-[var(--metal-gold)]":"text-cyan-100"}`,children:j.title},void 0,!1,void 0,this),X("ol",{className:"space-y-2",children:j.top.length?j.top.map((R,z)=>{const B=_J(String(R?.fotos?.[0]||"").trim(),""),U=z===0;return X("li",{className:`champion-rank-row champion-rank-row--${z+1} flex items-center justify-between gap-3 text-xs`,children:[X("div",{className:"flex items-center gap-2 min-w-0",children:[U&&B&&X("div",{className:"flex flex-col items-center shrink-0 -mt-1",title:`Campeona de ${j.title}`,children:[X("span",{className:"text-[12px] leading-none -mb-0.5","aria-hidden":"true",children:"\uD83D\uDC51"},void 0,!1,void 0,this),X("img",{src:B,alt:`Miniatura de ${R.nombre||"Campeona"}`,className:`champion-avatar w-8 h-8 rounded-full object-cover border ${F?"champion-avatar--general":"champion-avatar--section"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("span",{className:`champion-rank-name font-black truncate ${U?"champion-rank-name--winner":"text-slate-100"}`,children:[z+1,". ",R.nombre||"Sin nombre"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("span",{className:`champion-score font-black shrink-0 ${z===0?"champion-score--winner":""}`,children:LJ(R)},void 0,!1,void 0,this)]},`${j.id}-${R.firebaseId||R.nombre||z}`,!0,void 0,this)}):X("li",{className:"text-xs text-slate-400",children:"Sin datos suficientes."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},j.id,!0,void 0,this);return X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Campeonas"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Podios organizados por secciones"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-7",children:q.map((j)=>X("section",{className:"space-y-3",children:[X("h3",{className:"text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85",children:j.title},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:j.cards.map((F)=>W(F,j.id==="general"))},void 0,!1,void 0,this)]},j.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),D==="anonimo"&&!YJ&&X("div",{className:"space-y-8 animate-in fade-in duration-500",children:X("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[X("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),X("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),X("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),X("div",{className:"mt-8 space-y-5",children:[X("div",{className:"grid gap-3 sm:grid-cols-3",children:[{key:"imagen",label:"Imagen"},{key:"gif",label:"Gif"},{key:"video",label:"Video"},{key:"audio",label:"Audio"}].map((J)=>X("button",{type:"button",onClick:()=>{f0(J.key);wY("url");AX("");KY("");GY(null);SY("");gJ("")},className:`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${BJ===J.key?"text-cyan-100 border-cyan-300/50 bg-cyan-500/35":"text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35"}`,children:J.label},J.key,!1,void 0,this))},void 0,!1,void 0,this),(BJ==="imagen"||BJ==="gif"||BJ==="video")&&X("div",{className:"grid gap-4 md:grid-cols-2",children:[X("div",{className:"md:col-span-2 grid grid-cols-2 gap-2",children:[X("button",{type:"button",onClick:()=>{wY("url");AX("")},className:`px-4 py-2 rounded-lg font-black uppercase tracking-[0.12em] border transition-all ${cX==="url"?"text-cyan-100 border-cyan-300/60 bg-cyan-500/25":"text-slate-200 border-slate-500/40 bg-slate-700/25"}`,children:"URL"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>{wY("file");AX("")},className:`px-4 py-2 rounded-lg font-black uppercase tracking-[0.12em] border transition-all ${cX==="file"?"text-cyan-100 border-cyan-300/60 bg-cyan-500/25":"text-slate-200 border-slate-500/40 bg-slate-700/25"}`,children:"Archivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:MY,onChange:(J)=>u0(J.target.value),children:XJ.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),cX==="url"?X("input",{placeholder:"URL directa",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:GZ,onChange:(J)=>KY(J.target.value)},void 0,!1,void 0,this):X("input",{type:"file",accept:BJ==="video"?"video/*":BJ==="gif"?".gif,image/gif":"image/*",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>{const Y=J.target.files&&J.target.files[0]?J.target.files[0]:null;GY(Y);SY(Y?URL.createObjectURL(Y):"")}},void 0,!1,void 0,this),kY&&X("div",{className:"md:col-span-2 rounded-xl border border-slate-500/45 bg-slate-900/50 p-3",children:BJ==="video"?X("video",{src:kY,controls:!0,className:"w-full rounded-lg max-h-72 bg-black/60"},void 0,!1,void 0,this):X("img",{src:kY,alt:"Preview",className:"w-full rounded-lg max-h-72 object-contain bg-black/60"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{type:"button",onClick:Q1,className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:["Guardar ",BJ]},void 0,!0,void 0,this),kZ&&X("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:kZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),BJ==="audio"&&X("div",{className:"border-t border-cyan-300/25 pt-4 mt-2 space-y-3",children:[X("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audio para botón \uD83C\uDFB5"},void 0,!1,void 0,this),X("input",{placeholder:"Nombre",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:PZ,onChange:(J)=>bZ(J.target.value)},void 0,!1,void 0,this),X("input",{placeholder:"URL",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:vZ,onChange:(J)=>IZ(J.target.value)},void 0,!1,void 0,this),X("button",{type:"button",onClick:H1,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar audio en Firebase"},void 0,!1,void 0,this),X("div",{className:"space-y-2 pt-2",children:[X("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audios guardados"},void 0,!1,void 0,this),IJ.length?X("ul",{className:"space-y-2",children:IJ.map((J,Y)=>X("li",{className:"flex items-center justify-between gap-3 rounded-xl border border-slate-500/45 bg-slate-900/55 px-3 py-2",children:[X("span",{className:"text-sm text-slate-100 font-bold truncate",children:J.nombre},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>j1(Y),className:"shrink-0 w-8 h-8 rounded-full border border-rose-300/55 text-rose-200 hover:text-white hover:bg-rose-500/35 transition-all font-black text-lg leading-none","aria-label":`Eliminar audio ${J.nombre}`,title:`Eliminar ${J.nombre}`,children:"×"},void 0,!1,void 0,this)]},`${J.url}-${J.nombre}-${Y}`,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-slate-300/80 font-semibold",children:"No hay audios guardados todavía."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),gZ?X("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:gZ},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),D==="EXPLORAR"&&!YJ&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((E||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const Y=(E||[]).filter(($)=>String($?.profesion||"").trim()===J).length,Z=bX(J);return X("div",{onClick:()=>DX(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Z.baseColor,"--folder-glow":Z.glowColor},children:[X("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:V2(J)},void 0,!1,void 0,this),X("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),X("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:X("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[Y," ",Y===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),YJ&&X("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[X("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":D==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":bX(YJ).baseColor},children:[X("div",{className:"flex items-center gap-3",children:[X("button",{onClick:()=>DX(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:X("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:X("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:()=>dZ(D==="CATEGORIAS"?"":YJ),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:D==="CATEGORIAS"?p.find((J)=>J.firebaseId===YJ)?.label||"Archivo del Reino":YJ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(E||[]).filter((J)=>{if(!J)return!1;if(D==="CATEGORIAS")return QY(J).includes(YJ);return String(J.profesion||"").trim().toLowerCase()===String(YJ).trim().toLowerCase()}).map((J)=>{const Y=Number(typeof LJ==="function"?LJ(J):0)||0,Z=Y>=95?"card-score-badge--gold":Y>=86?"card-score-badge--diamond":Y>=75?"card-score-badge--fire":"",$=QJ(J.profesion);return X("div",{onClick:()=>{UX(null);wZ("");sJ(J.firebaseId||"")},onContextMenu:(Q)=>P1(Q,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":$.color,"--card-neon-glow":$.sombra},children:X("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[X("img",{src:_J(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:SJ},void 0,!1,void 0,this),X("div",{className:"absolute top-3 left-3 z-20",children:[X("button",{type:"button",onClick:(Q)=>{Q.stopPropagation();gX("");VX(J);UX((H)=>H===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:X(l,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),b0===J.firebaseId&&X("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:(Q)=>Q.stopPropagation(),children:[X("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{UX(null);JY(J)},children:"Editar"},void 0,!1,void 0,this),X("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{dY(J);UX(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:(Q)=>{Q.stopPropagation();yX({isOpen:!0,profile:J})},className:`card-score-badge ${Z} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[Y>=75&&Y<=85&&X("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),X("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),X("span",{className:"card-score-badge__value text-lg font-black",children:typeof LJ==="function"?LJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute bottom-4 left-4 right-4",children:X("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[X("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,X("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof hJ==="function"?hJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex justify-between items-center mt-1",children:[X("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),X("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),VY&&CJ&&X("div",{ref:N,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${EZ.y}px`,left:`${EZ.x}px`},children:[X("button",{type:"button",onClick:b1,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:v1,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),D==="GALERIA"&&!YJ&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${HY} · ${K1}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:[a1.map((J)=>X("button",{type:"button",onClick:()=>h0(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${h===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:V0[J]},J,!1,void 0,this)),X("button",{type:"button",onClick:()=>bY(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[X("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",GJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:MX.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:y.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:XJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:O1},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),h!=="PERSONAJE"&&jY&&!pJ?X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:yJ.map((J)=>X("button",{type:"button",onClick:()=>{RX(J);JJ(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:X("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?X("img",{src:_J(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:SJ},void 0,!1,void 0,this):X("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:X(l,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),X("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[X("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),X("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):X(xJ,{children:[h!=="PERSONAJE"&&jY&&X("div",{className:"flex items-center gap-3",children:X("button",{type:"button",onClick:()=>{RX(null);JJ(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[X(l,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),h==="PERSONAJE"&&X("div",{className:"space-y-4",children:[X("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[X("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),X("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>V1(J.target.value),children:[X("option",{value:"",disabled:!0,children:oZ.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),oZ.map((J)=>X("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),wJ.length>0?X("div",{className:"flex flex-wrap gap-2",children:wJ.map((J)=>X("button",{type:"button",onClick:()=>D1(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,X(l,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h==="ETIQUETA"&&X("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:XJ.map((J)=>X("button",{onClick:()=>C1(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:EY(J,XX.includes(J)),children:[J," · ",(fY[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),h==="PERSONAJE"&&X("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[X("button",{onClick:()=>BY("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:EY("INICIAL",bJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),XJ.map((J)=>{return X("button",{onClick:()=>BY(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:EY(J,bJ===J),children:[J," · ",W1[J]||0]},J,!0,void 0,this)}),X("button",{onClick:()=>BY("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:EY("100",bJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{type:"button",onClick:()=>eZ(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!y.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[X(l,{name:"play",size:14},void 0,!1,void 0,this),"Play ",pJ?.nombre||HY]},void 0,!0,void 0,this),X("button",{type:"button",onClick:R1,disabled:RZ||!y.length,className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed",title:"Descargar toda la multimedia visible en un ZIP",children:[X(l,{name:"download",size:14},void 0,!1,void 0,this),RZ?"Generando ZIP...":"DESCARGAR TODO"]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>c0((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${xY?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería",children:"\uD83C\uDFB5"},void 0,!1,void 0,this),IJ.length>0&&X(xJ,{children:[X("select",{className:"filter-select min-w-[180px]",value:sX,onChange:(J)=>hZ(J.target.value),children:[X("option",{value:"",children:"Audio principal"},void 0,!1,void 0,this),IJ.map((J,Y)=>X("option",{value:J.url,children:J.nombre},`${J.url}-${Y}`,!1,void 0,this))]},void 0,!0,void 0,this),X("select",{className:"filter-select min-w-[180px]",value:dX,onChange:(J)=>yZ(J.target.value),children:[X("option",{value:"",children:"Audio secundario (opcional)"},void 0,!1,void 0,this),IJ.map((J,Y)=>X("option",{value:J.url,children:J.nombre},`${J.url}-b-${Y}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[X("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),X("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:TY,onChange:(J)=>y0(Number(J.target.value)),children:[3,5,7,10].map((J)=>X("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),y.length===0?X("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[X("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:X(l,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),X("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:h==="ETIQUETA"&&XX.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X(xJ,{children:[X("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:cY.map((J,Y)=>{const Z=aJ(J.label),$=bX(J.profesion);return X("button",{type:"button",onClick:()=>eZ(Y),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${$.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`},onMouseEnter:(Q)=>{Q.currentTarget.style.transform="translateY(-2px) scale(1.01)";Q.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${$.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${$.glowColor} 52%, transparent)`},onMouseLeave:(Q)=>{Q.currentTarget.style.transform="translateY(0) scale(1)";Q.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`},children:X("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const Q=_X(J.url);if(Q)return X("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[X("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),X("div",{children:[X("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),X("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:Q.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return X("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():X("img",{src:_J(J.url,OX),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:SJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),X("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Z.bg,borderColor:Z.border,color:Z.text,boxShadow:`0 0 10px ${Z.glow}, 0 0 24px color-mix(in srgb, ${Z.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),X("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:X("div",{className:"flex items-end justify-between gap-3",children:[X("div",{className:"min-w-0 flex-1",children:[X("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?X("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),X("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),L1&&X("div",{className:"flex justify-center mt-8",children:X("button",{type:"button",onClick:()=>CZ((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",cY.length,"/",y.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("audio",{ref:NX,loop:!0,preload:"none"},void 0,!1,void 0,this),X("audio",{ref:KX,loop:!0,preload:"none"},void 0,!1,void 0,this),S&&X("div",{ref:tX,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:AJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:J0,children:[X("button",{type:"button",onClick:J0,className:`btn-metal btn-metal--danger absolute ${MJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:X("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${MJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!MJ&&X("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[X("div",{children:[X("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:S.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[S.profesion,S.nacionalidad?` · ${S.nacionalidad}`:""]},void 0,!0,void 0,this),S.autor?X("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",S.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),X("div",{className:"flex items-center gap-3",children:[y.length>1&&X(xJ,{children:[X("button",{type:"button",onClick:()=>zX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${KJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":KJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>AY((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${vJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":vJ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:S.type==="video"?"VIDEO":S.isGif?"GIF":"IMG"},void 0,!1,void 0,this),X("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:aJ(S.label).bg,borderColor:aJ(S.label).border,color:aJ(S.label).text,boxShadow:`0 0 20px ${aJ(S.label).glow}`},children:S.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${MJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[S.type==="video"?(()=>{const J=_X(S.url);if(J)return X("iframe",{ref:gY,src:J.src,title:`${S.nombre} video`,className:`w-full ${MJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return X("video",{ref:gY,src:S.url,controls:!0,playsInline:!0,muted:sY,autoPlay:KJ,onEnded:()=>{if(KJ&&y.length>1)wX()},onError:()=>{if(y.length>1)wX()},className:`w-full ${MJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():X("img",{src:_J(S.url,OX),alt:`${S.nombre} - ${S.label||"galería"}`,ref:gY,className:`w-full ${MJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{SJ(J);if(y.length>1)wX()}},void 0,!1,void 0,this),y.length>1&&X(xJ,{children:MJ?X("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]",children:[X("button",{type:"button",onClick:(J)=>{J.stopPropagation();AY((Y)=>!Y)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${vJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":vJ?"Aleatorio activado":"Aleatorio desactivado",children:vJ?"Random On":"Random Off"},void 0,!1,void 0,this),X("button",{type:"button",onClick:(J)=>{J.stopPropagation();zX((Y)=>!Y)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${KJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":KJ?"Pausar reproducción":"Reproducir",children:KJ?"Pause":"Play"},void 0,!1,void 0,this),X("button",{type:"button",onClick:(J)=>{J.stopPropagation();wX()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X("button",{type:"button",onClick:(J)=>{J.stopPropagation();wX()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!MJ&&X("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[X("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[zJ+1," de ",y.length," archivos visibles"]},void 0,!0,void 0,this),X("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[zZ?X(xJ,{children:[X("input",{type:"url",value:TZ,onChange:(J)=>fX(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),X("select",{value:AZ,onChange:(J)=>uX(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[X("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),XJ.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),X("button",{type:"button",onClick:B1,disabled:KZ,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:KZ?"Guardando...":"Guardar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>{uX(S?.label||"");fX(S?.url||"");cJ("");YX(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X("button",{type:"button",onClick:()=>YX(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[X("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),X("span",{children:S?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zZ&&NZ&&X("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:NZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),PY&&X("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:AJ?{left:"18rem"}:void 0,onClick:()=>bY(!1),children:X("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[X("div",{className:"flex items-center justify-between gap-4 mb-5",children:[X("div",{children:[X("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[GJ.length," enlace",GJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>bY(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:X("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!aZ.length?X("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:X("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):aZ.map((J)=>X("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[X("div",{className:"mb-4",children:[X("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-3",children:J.fotos.map((Y)=>{const Z=!!n0[Y.id],$=!!p0[Y.id],Q=IY[Y.id]??Y.url;return X("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[X("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:X("img",{src:OX,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"space-y-2 min-w-0",children:[X("div",{className:"flex flex-wrap items-center gap-2",children:[X("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",Y.label||"Sin etiqueta"]},void 0,!0,void 0,this),X("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:Y.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("input",{type:"url",value:Q,onChange:(H)=>z1(Y.id,H.target.value),placeholder:"https://...",readOnly:!$,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!$?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[X("button",{type:"button",onClick:()=>A1(Y),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>X0(Y.id,!0),disabled:Z,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>T1(Y),disabled:Z,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>N1(Y),disabled:Z,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Y.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),D==="BATALLAS"&&!YJ&&!G&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex flex-col gap-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{onClick:u1,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),X("button",{onClick:()=>k0((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G0&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[X("select",{value:jZ,onChange:(J)=>S0(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:$Z.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),X("button",{onClick:()=>f1(jZ,w,c),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!w,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{children:[X("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!w?"Paso 1: elegí un modo de enfrentamiento":OY&&!c?`Paso 2: elegí una opción de ${WX(w)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${WX(w)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!w&&X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:QZ.map((J)=>X("button",{onClick:()=>{UJ(J.id);NJ(J.id==="GENERAL"?"all":"");x(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),X("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),X("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),w&&X("div",{className:"space-y-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",WX(w)]},void 0,!0,void 0,this),X("button",{onClick:()=>{UJ(null);NJ("");x(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),OY&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",WX(w)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:s1.map((J)=>X("button",{onClick:()=>{NJ(J.key);x(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${c===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",X("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),OY&&!c&&X("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[$Z.map((J)=>{const Y=LX(J,w,c),Z=Boolean(OJ?.[Y]?.isFinished);return X("button",{disabled:OY&&!c,onClick:()=>{x(J);if(!OJ[Y])_0(J,w,c)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Z?"battle-mode-card--completed":""}`,children:[X("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Z?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),X("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Z&&X("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),D==="BATALLAS"&&G&&(()=>{const J=LX(G,w,c),Y=OJ[J],Z=E.find((L)=>L.firebaseId===Y?.championId),$=E.find((L)=>L.firebaseId===Y?.challengerId),Q=Z?H0(G,Z.firebaseId):null,H=$?H0(G,$.firebaseId):null;return X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{onClick:()=>x(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[X("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),X("button",{onClick:()=>{x(null);UJ(null);NJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[X("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),X("button",{onClick:()=>P0((L)=>!L),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),x0&&X("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const L=Object.keys(Y?.matchups||{}).filter((q)=>!!Y?.matchups?.[q]);if(!Y||!L.length)return X("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return X("div",{className:"space-y-2",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),L.map((q)=>{const[W,j]=q.split("__"),F=E.find((U)=>U.firebaseId===W),R=E.find((U)=>U.firebaseId===j),z=F?.nombre||W,B=R?.nombre||j;return X("button",{onClick:()=>W0(G,W,j,w,c),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:X("span",{className:"text-xs text-white font-semibold",children:[z," vs ",B]},void 0,!0,void 0,this)},q,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),X("div",{className:"min-w-0",children:[X("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:G},void 0,!1,void 0,this),X("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",WX(w)]},void 0,!0,void 0,this),Y?.activeGroupLabel&&X("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:Y.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!Y&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[X("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),X("button",{onClick:()=>_0(G,w,c),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&Y.isFinished&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[X("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),X("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&Z&&$&&!Y.isFinished&&X("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[X("button",{onClick:()=>O0(G,Z.firebaseId,w,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":bX(Z.profesion).baseColor},children:[X("img",{src:K0(Z,G),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:SJ},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),X("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),G==="Estatura"&&X("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",Y0(Z)]},void 0,!0,void 0,this),X("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",Q?.wins||0," · Batallas: ",Q?.battles||0]},void 0,!0,void 0,this),X("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",Q?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-col items-center justify-center text-center",children:[X("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),G==="Estatura"&&X("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{onClick:()=>O0(G,$.firebaseId,w,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":bX($.profesion).baseColor},children:[X("img",{src:K0($,G),alt:$.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:SJ},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),X("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:$.nombre},void 0,!1,void 0,this),G==="Estatura"&&X("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",Y0($)]},void 0,!0,void 0,this),X("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),X("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),D==="RANKING"&&!YJ&&X("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[X("div",{className:"ranking-table-toolbar",children:X("button",{type:"button",onClick:()=>g0((J)=>!J),className:`ranking-toggle-totality ${CY?"is-active":"is-inactive"}`,children:"Ver totalidad"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"ranking-table-scroll",children:X("table",{className:`w-full ${eY?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[X("thead",{className:"theme-surface-soft",children:X("tr",{children:[X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:X("button",{type:"button",onClick:()=>HX("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",HJ==="nombre"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>HX("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",HJ==="Rostro"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>HX("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",HJ==="Cuerpo"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>HX("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",HJ==="Actitud"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),eY&&X(xJ,{children:[X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>HX("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",HJ==="nacionalidad"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>HX("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",HJ==="edad"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("th",{className:"px-8 py-6 text-right",children:X("div",{className:"flex flex-col items-end gap-1",children:[X("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),X("select",{value:HJ,onChange:(J)=>{FZ(J.target.value);DY("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[X("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),X("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[X("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),X("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),X("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:JX.map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("tbody",{children:i1.map((J,Y)=>X("tr",{onClick:()=>JY(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${Y===0?"podium-1":Y===1?"podium-2":Y===2?"podium-3":"hover:bg-white/5"}`,children:[X("td",{className:"px-8 py-5",children:X("span",{className:`font-black italic rock-carved-text ${Y===0?"text-gold text-4xl":Y===1?"text-silver text-3xl":Y===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",Y+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-8 py-5",children:X("div",{className:"flex items-center gap-4",children:[X("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:QJ(J.profesion).color,boxShadow:`0 0 10px ${QJ(J.profesion).sombra}`},children:X("img",{src:_J(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:SJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{children:[X("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),X("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();CX({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:YY(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();CX({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:ZY(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();CX({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:$Y(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),eY&&X(xJ,{children:[X("td",{className:"px-4 py-5 text-center",children:[X("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),X("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[hJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("td",{className:"px-8 py-5 text-right",children:X("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${Y===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":Y===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":Y===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:X("span",{className:`font-black leading-none ${Y===0?"text-gold":Y===1?"text-silver":Y===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:d1(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),RJ.isOpen&&RJ.profile&&RJ.category&&(()=>{const J=n1(RJ.profile.firebaseId,RJ.category),Y=nJ[RJ.category]||[];return X("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{CX({isOpen:!1,profile:null,category:null});EX(null)},children:X("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Z)=>Z.stopPropagation(),children:[X("div",{className:"flex items-start justify-between gap-4 mb-6",children:[X("div",{children:[X("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[RJ.profile.nombre," · ",RJ.category]},void 0,!0,void 0,this),X("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>{CX({isOpen:!1,profile:null,category:null});EX(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"mb-4",children:[X("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:Y.map((Z)=>(()=>{const $=p1(RJ.profile.firebaseId,Z);return X("button",{type:"button",onClick:()=>{const Q=aY(RJ.profile.firebaseId,Z);EX(Q)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left",children:[X("p",{className:"leading-none",children:Z},void 0,!1,void 0,this),X("p",{className:"mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case",children:[$.wins,"/",$.total," · ",$.winRate.toFixed(0),"% victorias"]},void 0,!0,void 0,this)]},`breakdown-item-${Z}`,!0,void 0,this)})())},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!vX?.arenaName&&X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[X("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?X("ul",{className:"space-y-2",children:J.wins.map((Z,$)=>X("li",{className:"text-sm text-emerald-200 font-semibold",children:Z},`win-${Z}-${$}`,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?X("ul",{className:"space-y-2",children:J.losses.map((Z,$)=>X("li",{className:"text-sm text-rose-200 font-semibold",children:Z},`loss-${Z}-${$}`,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),vX?.arenaName&&X("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[X("div",{className:"flex items-center justify-between gap-3 mb-4",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",vX.arenaName]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>EX(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Z)=>{const $=Z==="wins",Q=vX[Z]||[];return X("div",{className:`rounded-xl border p-3 min-h-36 ${$?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[X("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${$?"text-emerald-300":"text-rose-300"}`,children:$?"Ganadas":"Perdidas"},void 0,!1,void 0,this),Q.length?X("ul",{className:"space-y-2",children:Q.map((H,L)=>X("li",{className:"flex items-center justify-between gap-2",children:[X("span",{className:`text-sm font-semibold ${$?"text-emerald-100":"text-rose-100"}`,children:H.opponentName},void 0,!1,void 0,this),X("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await W0(H.arenaName,H.profileId,H.opponentId);const W=aY(RJ.profile.firebaseId,H.arenaName);EX(W)}catch(W){console.error("No se pudo eliminar la batalla del desglose:",W);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Z}-${H.pairKey}-${L}`,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:`text-xs ${$?"text-emerald-200/70":"text-rose-200/70"}`,children:$?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Z}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),RY.isOpen&&RY.profile&&(()=>{const J=RY.profile,Y=mY(J),Z=Object.entries(nJ);return X("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>yX({isOpen:!1,profile:null}),children:X("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:($)=>$.stopPropagation(),children:[X("div",{className:"flex items-start justify-between gap-4",children:[X("div",{children:[X("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),X("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:($)=>{$.stopPropagation();yX({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:JX.map(($)=>X("button",{type:"button",onClick:(Q)=>Q.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[$,": ",Number(Y[$]||0).toFixed(0)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:Z.map(([$,Q])=>X("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[$,": ",pZ(J,$).toFixed(0)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),X("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",LJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),D==="CATEGORIAS"&&!YJ&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex justify-between items-end",children:[X("div",{children:X("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:()=>{yY();IX(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),p.length===0?X("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:X("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:p.map((J)=>X("div",{onClick:()=>DX(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[X("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[X("button",{onClick:(Y)=>{Y.stopPropagation();WJ({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});IX(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:X(l,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:(Y)=>{Y.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))G1(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:X(l,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute inset-0",children:[X("img",{src:_J(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:SJ},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[X("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),X("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:X("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[E.filter((Y)=>QY(Y).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),qZ&&X("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:X("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[X("button",{onClick:()=>uJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:X(l,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("form",{onSubmit:M1,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[X("div",{className:"grid grid-cols-1 gap-16",children:X("div",{className:"space-y-8",children:[X("div",{className:"flex flex-col items-center gap-6",children:[X("div",{className:"flex items-center gap-4 self-start",children:[X("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:X(l,{name:t?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:t?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),t&&X("button",{type:"button",onClick:()=>{O2({...b,firebaseId:t})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[X(l,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:b.fotos.length>0&&b.fotos[0]!==""?X("img",{src:_J(b.fotos[0],OX),className:"w-full h-full object-cover",alt:"Preview",onError:SJ},void 0,!1,void 0,this):X("div",{className:"text-center p-4",children:[X(l,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-4",children:[X("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[X("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),XY.completed.length>0?X("ul",{className:"mt-3 space-y-1",children:XY.completed.map((J)=>X("li",{className:"text-xs text-emerald-100/90",children:[X("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),XY.missing.length>0?X("ul",{className:"mt-3 space-y-1",children:XY.missing.map((J)=>X("li",{className:"text-xs text-amber-100/90",children:X("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 gap-4",children:[X("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:b.nombre,onChange:(J)=>o({...b,nombre:J.target.value})},void 0,!1,void 0,this),X("div",{className:"col-span-2 space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),X("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:b.fotos[0]||"",onChange:(J)=>o((Y)=>X1(Y,J.target.value))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),X("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.fechaNacimiento,onChange:(J)=>o({...b,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),X("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.estaturaCm,onChange:(J)=>o({...b,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.nacionalidad,onChange:(J)=>o({...b,nacionalidad:J.target.value})},void 0,!1,void 0,this),X("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:b.ciudad,onChange:(J)=>o({...b,ciudad:J.target.value})},void 0,!1,void 0,this),X("div",{className:"col-span-2 space-y-1 group",children:[X("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),X("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:b.profesion,onChange:(J)=>o({...b,profesion:J.target.value}),children:[X("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),X("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),X("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),X("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),X("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),X("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),X("option",{value:"Bailarina y Atleta",className:"theme-surface-card",children:"\uD83D\uDC83\uD83C\uDFCB️‍♀️ Bailarina y Atleta"},void 0,!1,void 0,this),X("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:X(l,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("div",{className:"flex gap-4",children:[t&&X("button",{type:"button",onClick:k1,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:X(l,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{type:"submit",disabled:UY,className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs disabled:cursor-not-allowed disabled:opacity-60",children:UY?"Guardando...":t?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),v0&&X("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:nY,children:X("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[X("div",{className:"space-y-3",children:[X("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),X("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),X("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",X("span",{className:"font-black text-white",children:CJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),LZ&&X("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:LZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex justify-end gap-3",children:[X("button",{type:"button",onClick:nY,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:x1,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),_Z&&X("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:X("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[X("button",{type:"button",onClick:()=>{yY();IX(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:X(l,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("form",{onSubmit:w1,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[X("div",{className:"space-y-8",children:[X("div",{className:"flex items-center gap-4",children:[X("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:X(l,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-4",children:[X("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:k.label,onChange:(J)=>WJ({...k,label:J.target.value})},void 0,!1,void 0,this),X("div",{className:"w-full",children:X("div",{className:"space-y-1 w-full",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),X("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:k.coverImg,onChange:(J)=>WJ({...k,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-6",children:[X("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[X(l,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),X("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[X("div",{className:"grid grid-cols-2 gap-4",children:[X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:k.reglas.nacionalidades.map((J)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",X("button",{type:"button",onClick:()=>WJ({...k,reglas:{...k.reglas,nacionalidades:k.reglas.nacionalidades.filter((Y)=>Y!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.nacionalidades.includes(J.target.value))WJ({...k,reglas:{...k.reglas,nacionalidades:[...k.reglas.nacionalidades,J.target.value]}})},children:[X("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),q1.filter((J)=>J!=="Todas").map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:k.reglas.ciudades.map((J)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",X("button",{type:"button",onClick:()=>WJ({...k,reglas:{...k.reglas,ciudades:k.reglas.ciudades.filter((Y)=>Y!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.ciudades.includes(J.target.value))WJ({...k,reglas:{...k.reglas,ciudades:[...k.reglas.ciudades,J.target.value]}})},children:[X("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),_1.filter((J)=>J!=="Todas").map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:k.reglas.profesiones.map((J)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",X("button",{type:"button",onClick:()=>WJ({...k,reglas:{...k.reglas,profesiones:k.reglas.profesiones.filter((Y)=>Y!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.profesiones.includes(J.target.value))WJ({...k,reglas:{...k.reglas,profesiones:[...k.reglas.profesiones,J.target.value]}})},children:[X("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(HZ).map((J)=>X("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 gap-2",children:[X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),X("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:k.reglas.edadMin,onChange:(J)=>WJ({...k,reglas:{...k.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),X("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:k.reglas.edadMax,onChange:(J)=>WJ({...k,reglas:{...k.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[X("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:k.reglas.caracteristica,onChange:(J)=>WJ({...k,reglas:{...k.reglas,caracteristica:J.target.value}}),children:JX.map((J)=>X("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),X("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:k.reglas.operador,onChange:(J)=>WJ({...k,reglas:{...k.reglas,operador:J.target.value}}),children:[X("option",{children:"Superior a"},void 0,!1,void 0,this),X("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:k.reglas.umbral,onChange:(J)=>WJ({...k,reglas:{...k.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},C2=ReactDOM.createRoot(document.getElementById("root"));C2.render(X(D2,{},void 0,!1,void 0,this));