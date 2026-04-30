import{jsxDEV as Q,Fragment as GJ}from"react/jsx-dev-runtime";const H0={apiKey:"AIzaSyAcW679YdIT03pyq8IgKKnR8oyO4_fvpFs",authDomain:"g2elite-a3b85.firebaseapp.com",databaseURL:"https://g2elite-a3b85-default-rtdb.firebaseio.com/",projectId:"g2elite-a3b85",storageBucket:"g2elite-a3b85.firebasestorage.app",messagingSenderId:"951346482286",appId:"1:951346482286:web:6001135252de2a4d982a7f"};if(!firebase.apps.length)firebase.initializeApp(H0);const K=firebase.database(),{useState:T,useEffect:i,useMemo:u,useRef:uJ}=React,JJ=["C","P","B","N","S","E","X"],tQ="anonimo/galeria",DJ="__anonimo_gallery__",j0=["PERSONAJE","ETIQUETA","GENERAL"],cY={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},fJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],q0={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},SX=()=>fJ.reduce((_,W)=>{_[W.id]="";return _},{}),qJ=(_={})=>{const W=SX(),B=_&&typeof _==="object"?_:{};return Object.keys(W).reduce((D,L)=>{D[L]=typeof B[L]==="string"?B[L].trim():"";return D},{...W})},aQ=(_="")=>fJ.find((W)=>W.id===_),_0=(_="")=>q0[(_||"").trim().toLowerCase()]||"",rQ={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},rJ=(_,W)=>{if(!W)return 0;return(_+W)%W},sY=(_,W,B=!1)=>{const D=Array.isArray(W)?W.length:0;if(!D)return null;if(D===1)return 0;if(B){const L=W.map((v,f)=>({item:v,idx:f})).filter(({item:v,idx:f})=>f!==_&&v&&v.url).map(({idx:v})=>v);if(!L.length)return rJ((_??0)+1,D);return L[Math.floor(Math.random()*L.length)]}return rJ((_??0)+1,D)},cJ=(_)=>rQ[_]||rQ.DEFAULT,eQ=(_,W=!1)=>{const B=_==="INICIAL"?rQ.DEFAULT:_==="100"?rQ.B:cJ(_);return{"--btn-neon-color":B.glow,borderColor:B.border,color:B.text,boxShadow:W?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${B.border}, 0 0 20px ${B.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${B.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${B.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${B.glow} 70%, transparent)`,filter:W?"brightness(1.14)":"brightness(1)"}},dY=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,O0=/\.gif(\?.*)?$/i,W0=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,E0=/vimeo\.com\/(?:video\/)?(\d+)/i,eJ=(_)=>{const W=(_||"").trim();if(!W)return null;const B=W.match(W0);if(B)return{provider:"youtube",src:`https://www.youtube.com/embed/${B[1]}`,title:"Video de YouTube"};const D=W.match(E0);if(D)return{provider:"vimeo",src:`https://player.vimeo.com/video/${D[1]}`,title:"Video de Vimeo"};return null},L0=["eporner.com"],nY=(_="")=>{const W=String(_||"").trim();if(!W||W.startsWith("data:")||W.startsWith("blob:"))return!1;try{const D=new URL(W).hostname.toLowerCase();return L0.some((L)=>D===L||D.endsWith(`.${L}`))}catch{return!1}},HJ=(_="",W="")=>{const B=String(_||"").trim();if(!B||nY(B))return W;return B},sJ=(_="",W="")=>{if(W==="video"||W==="image")return W;const B=(_||"").trim();if(dY.test(B)||eJ(B))return"video";return"image"},xX=(_="")=>{return typeof _==="string"?_.trim():""},d=(_,W="")=>{if(typeof _==="string")return{url:HJ(_.trim(),""),label:"",type:sJ(_,W),autor:""};if(_&&typeof _==="object"){const B=HJ((_.url||"").trim(),"");return{url:B,label:JJ.includes(_.label)?_.label:"",type:sJ(B,_.type||W),autor:xX(_.autor)}}return{url:"",label:"",type:sJ("",W),autor:""}},F0=(_)=>d(_).url,pY=(_)=>d(_).label,dJ=(_)=>d(_).type,PX=(_,W,B="image")=>Array.isArray(_?.[W])?_[W].map((D)=>d(D,B)).filter((D)=>D.url):[],U0=(_={})=>({firebaseId:DJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:PX(_,"fotos","image"),gifs:PX(_,"gifs","image"),videos:PX(_,"videos","video")},batallaFotosPreferidas:SX(),puntuaciones:CQ(),isAnonymousGallery:!0}),B0=(_={})=>{if(_?.isAnonymousGallery||_?.firebaseId===DJ)return"anonimo";return _?.firebaseId||""},T0=(_={})=>{const W=HJ(String(_?.fotos?.[0]||"").trim(),""),B=qJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!W)return!1;return fJ.filter((D)=>D.id!=="perfil").every((D)=>Boolean(String(B?.[D.id]||"").trim()))},V0=(_={})=>{const W=[],B=HJ(String(_?.fotos?.[0]||"").trim(),""),D=qJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!B)W.push("Perfil");fJ.filter((L)=>L.id!=="perfil").forEach((L)=>{if(!String(D?.[L.id]||"").trim())W.push(L.label)});return W},C0=(_=null)=>{if(!_)return;const W=window.open("","_blank");if(!W)return;const B=_?.firebaseId||_?.id||"",D=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((C)=>d(C,"image")).filter((C)=>C.url).map((C,N)=>({...C,sourceTag:"fotos",sourceIndex:N})):[],L=D.filter((C)=>C.type==="image"&&C.sourceTag==="fotos"),v=qJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{}),f=HJ(String(_?.fotos?.[0]||_?.foto||"").trim(),""),QJ=D.filter((C)=>C.type==="image"&&C.url).reduce((C,N)=>{C[N.url]=N;return C},{}),c=D.length?D.map((C,N)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${C.url}"
                        data-label="${C.label||""}"
                        data-index="${C.sourceIndex}"
                        data-tag="${C.sourceTag}"
                        data-media-type="${C.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${C.url}" alt="Multimedia ${N+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${C.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',P=L.length?L.map((C,N)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${C.url}"
                        data-label="${C.label||""}"
                        data-index="${C.sourceIndex}"
                        data-tag="${C.sourceTag}"
                        data-media-type="${C.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${C.url}" alt="Imagen rota ${N+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${C.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',U=fJ.map((C)=>{const N=C.id==="perfil",G=N?f:v[C.id]||"",z=G?N?{url:G}:QJ[G]||{url:G,label:"",sourceIndex:-1}:null,_J=Boolean(G);return`
                    <div class="multimedia-slot-card ${_J?"is-assigned":"is-missing"}" data-slot-id="${C.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${C.label}</span>
                            <span class="multimedia-slot-state">${_J?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${_J?`<img src="${z.url}" alt="${C.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!N?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${C.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${C.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");W.document.write(`
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
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${c}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${U}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${P}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(B)};
                            const validLabels = ${JSON.stringify(JJ)};
                            const dbRef = window.opener && window.opener.firebase && window.opener.firebase.database ? window.opener.firebase.database() : null;
                            const normalizeLabel = (rawLabel = '') => validLabels.includes(rawLabel) ? rawLabel : '';
                            const brokenCards = new Set();
                            const DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                            const LONG_PRESS_MS = 280;
                            let longPressTimer = null;
                            let touchPayload = null;
                            const isImagePayload = (payload) => String(payload?.mediaType || '').trim() === 'image';
                            const assignToSlot = (payload = {}, slotId = '') => {
                                if (!window.opener || !slotId || !isImagePayload(payload)) return false;
                                const sourceIndex = Number(payload.sourceIndex);
                                if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${B}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
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
                            let activeSlotSelectionId = '';
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
                            const slotConfigById = ${JSON.stringify(fJ.reduce((C,N)=>{C[N.id]=N;return C},{}))};
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
            `);W.document.close()},R0=({isOpen:_=!1,profile:W=null,onClose:B=()=>{}})=>{const[D,L]=T(!0),[v,f]=T(!0);i(()=>{if(!_)return;L(!0);f(!0)},[_,W?.firebaseId]);if(!_||!W)return null;const QJ=Array.isArray(W?.galeria?.fotos)?W.galeria.fotos.map((P)=>d(P,"image")).filter((P)=>P.url):[],c=Object.entries(W?.puntuaciones||{}).map(([P,U])=>({label:P,value:Number(U)||0})).sort((P,U)=>U.value-P.value).slice(0,5);return Q("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:B,role:"presentation",children:Q("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(P)=>P.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[Q("button",{type:"button",onClick:B,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),Q("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),Q("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:W?.nombre||"Personaje"},void 0,!1,void 0,this),Q("div",{className:"mt-6 space-y-4",children:[Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>L((P)=>!P),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"Galería"},void 0,!1,void 0,this),Q("span",{children:D?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),D&&Q("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:QJ.length?QJ.map((P,U)=>Q("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:Q("img",{src:P.url,alt:`Multimedia ${U+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${P.url}-${U}`,!1,void 0,this)):Q("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>f((P)=>!P),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"5 Principales"},void 0,!1,void 0,this),Q("span",{children:v?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v&&Q("div",{className:"px-4 pb-4 space-y-2",children:c.length?c.map((P)=>Q("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[Q("span",{className:"text-sm text-slate-200 uppercase",children:P.label},void 0,!1,void 0,this),Q("strong",{className:"text-cyan-200",children:P.value},void 0,!1,void 0,this)]},P.label,!0,void 0,this)):Q("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},iY=async(_="",{timeoutMs:W=12000,retries:B=1}={})=>{const D=String(_||"").trim();if(!D)return!0;const L=()=>new Promise((v)=>{const f=new Image;let QJ=!1;const c=(U)=>{if(QJ)return;QJ=!0;f.onload=null;f.onerror=null;v(Boolean(U))},P=window.setTimeout(()=>c(!0),W);f.onload=()=>{clearTimeout(P);const U=Number(f.naturalWidth)>0&&Number(f.naturalHeight)>0;c(!U)};f.onerror=()=>{clearTimeout(P);c(!0)};f.src=D});for(let v=0;v<=B;v+=1)if(!await L())return!1;return!0},lY=(_,W)=>{const B=(W||"").trim().toLowerCase(),D=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((G)=>d(G,"image")).filter((G)=>G.type==="image"&&G.url):[],v=HJ(_?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(B))return v;const QJ=(G=[])=>{const z=D.filter((g)=>G.includes(pY(g)));if(!z.length)return"";const _J=Math.floor(Math.random()*z.length);return z[_J]?.url||""},c=_0(B),P=aQ(c);if(!P)return v;const C=qJ(_?.batallaFotosPreferidas)[c];if(C){if(D.some((z)=>z.url===C))return C}return QJ(P.labels)||v},D0=(_="")=>O0.test((_||"").trim()),JQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",vX=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${JQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,AJ=(_)=>{const W=_?.currentTarget||_?.target;if(!W||W.dataset.fallbackApplied==="true")return;W.dataset.fallbackApplied="true";W.src=JQ;W.style.objectFit="contain";W.style.padding="12px";W.style.background="#020617";W.alt="Imagen no disponible"},x0="g2_elite_database_v4",P0="g2_elite_categories_v4",QQ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],bX=[...QQ],IX=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],A0=IX.map((_)=>_.id),XQ=(_="")=>{return IX.find((B)=>B.id===_)?.label||"General"},YQ=(_,W="GENERAL",B="")=>{const D=String(_||"").trim(),L=String(W||"GENERAL").trim().toUpperCase(),v=String(B||"").trim().toLowerCase();if(!D)return"";return`${L}::${v||"all"}::${D}`},WJ=(_="")=>String(_||"").trim(),oY=(_="")=>{const W=String(_||"").split("::");if(W.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const B=W.slice(2).join("::");return{scopeId:String(W[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:String(W[1]||"all").trim().toLowerCase()||"all",arenaName:String(B||"").trim()}},CQ=()=>QQ.reduce((_,W)=>{_[W]=0;return _},{}),tY=[],gX={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},Periodista:{glyph:"quill",color:"rgba(234, 179, 8, 0.8)",tailwind:"yellow-500"},Bailarina:{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Atleta:{glyph:"shield",color:"rgba(59, 130, 246, 0.8)",tailwind:"blue-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},v0=(_="")=>{const W=String(_||"").toLowerCase();if(W.includes("cantante"))return"crown";if(W.includes("nsfw"))return"torch";if(W.includes("actriz")||W.includes("actor"))return"theater";if(W.includes("modelo"))return"floron";if(W.includes("influencer"))return"sigil";if(W.includes("periodista"))return"quill";if(W.includes("bailarina"))return"floron";if(W.includes("atleta"))return"shield";return"shield"},z0=(_="")=>{const W=String(_||"").toLowerCase();if(W.includes("cantante"))return"\uD83C\uDFA4";if(W.includes("nsfw"))return"\uD83D\uDD25";if(W.includes("actriz")||W.includes("actor"))return"\uD83C\uDFAC";if(W.includes("modelo"))return"\uD83D\uDC60";if(W.includes("influencer"))return"\uD83D\uDCF1";if(W.includes("periodista"))return"\uD83D\uDC53";if(W.includes("bailarina"))return"\uD83D\uDC83";if(W.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},RQ=(_="")=>{const W=String(_||"").trim(),B=gX[W]||gX.Otro,D=String(B?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),L=String(B?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:D,glowColor:L}},b0=({variant:_="sigil",size:W=18,className:B="",tint:D="currentColor"})=>{const L={width:W,height:W,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:B};if(_==="crown")return Q("svg",{...L,stroke:D,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),Q("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="shield")return Q("svg",{...L,stroke:D,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),Q("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="floron")return Q("svg",{...L,stroke:D,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 4v16"},void 0,!1,void 0,this),Q("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),Q("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),Q("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="quill")return Q("svg",{...L,stroke:D,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),Q("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="torch")return Q("svg",{...L,stroke:D,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),Q("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),Q("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="theater")return Q("svg",{...L,stroke:D,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),Q("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return Q("svg",{...L,stroke:D,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),Q("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},n=({name:_,size:W=20,className:B=""})=>{return Q("i",{"data-lucide":_.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:W,height:W},className:`inline-block ${B}`},void 0,!1,void 0,this)},hX=({targetWindow:_,profileName:W,profession:B,photos:D,editingId:L,battlePhotoPrefs:v={},profilePhotoUrl:f=""})=>{if(!_||_.closed)return;const QJ=qJ(v),c=HJ(String(f||"").trim(),""),P=(D||[]).map((U,C)=>{const N=d(U);return{...N,sourceTag:U?.sourceTag||(N.type==="video"?"videos":"fotos"),sourceIndex:typeof U?.sourceIndex==="number"?U.sourceIndex:C}}).filter((U)=>U.url);_.document.open();_.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${W}</title>
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
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
                        transform: translateX(-50%);
                        z-index: 2100;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 24px;
                        padding: 10px 18px;
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
                            gap: 18px;
                            padding: 10px 16px;
                        }
                    }
                </style>
            </head>
            <body>
                <h1>Galería de ${W}</h1>
                <button class="btn-critical-plate" onclick="document.getElementById('miModal').style.display='block'">
                    AGREGAR ARCHIVO
                </button>

                <div id="miModal" class="modal-url">
                    <h2 style="margin:0; font-size: 14px; color: #94a3b8;">PEGAR URL DEL ARCHIVO</h2>
                    <input type="text" id="nuevaFotoUrl" placeholder="https://ejemplo.com/foto.jpg o https://youtube.com/...">
                    <label for="nuevoArchivoLocal" style="display:block; margin-top: 14px; font-size: 10px; font-weight: 900; letter-spacing: 0.14em; color: #94a3b8; text-transform: uppercase;">o subir desde escritorio</label>
                    <input type="file" id="nuevoArchivoLocal" accept="image/*,video/*,.gif" style="width: 100%; margin-top: 8px; padding: 10px; background: #020617; border: 1px dashed rgba(34,211,238,0.65); color: #e2e8f0; border-radius: 8px; outline: none; font-size: 12px; box-shadow: 0 0 10px rgba(34,211,238,0.18);">
                    <select id="nuevoArchivoTipo" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        <option value="image">Imagen</option>
                        <option value="video">Video</option>
                    </select>
                    <select id="nuevaFotoEtiqueta" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        ${JJ.map((U)=>`<option value="${U}">Etiqueta ${U}</option>`).join("")}
                    </select>
                    <input type="text" id="nuevaFotoAutor" placeholder="Autor (opcional)" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                    <input type="hidden" id="slotSelectionId" value="">
                    <p id="slotGalleryHint" style="display:none; margin:10px 0 0; font-size:11px; color:#93c5fd;">Tip: para “Elegir desde galería” tocá cualquier imagen para asignarla.</p>
                    <button onclick="addMediaFromModal()"
                        style="margin-top: 15px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(14,116,144,0.95), rgba(8,47,73,0.95)); color: #ecfeff; border: 1px solid rgba(103,232,249,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(34,211,238,0.4);">
                        Guardar
                    </button>
                    <button id="modalPlayFullscreenButton" type="button" onclick="startFullscreenPlaybackFromModal(event)"
                        style="margin-top: 10px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(30,64,175,0.95), rgba(30,58,138,0.95)); color: #dbeafe; border: 1px solid rgba(147,197,253,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(59,130,246,0.38);">
                        Play pantalla completa
                    </button>
                </div>

                <details open style="width:100%; margin-bottom: 20px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.28); background: rgba(2,6,23,0.45);">
                    <summary style="cursor:pointer; list-style:none; padding: 12px 14px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 900; color: #f8fafc;">
                        5 Principales
                    </summary>
                    <div style="padding: 0 14px 14px; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px;">
                    ${fJ.map((U)=>{const C=U.id==="perfil",N=C?c:QJ[U.id]||"",G=Boolean(N),z=!C;return`
                            <div class="gallery-slot-card" data-slot-id="${U.id}" style="border:1px solid ${G?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${G?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${G?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${G?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${U.label}</div>
                                <div style="font-size:11px; color:${G?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${G?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${G?`<img src="${N}" alt="Vista previa ${U.label}" onerror="${vX}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${U.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${z?`<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${U.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${U.id}');"
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
                    ${P.length?P.map((U,C)=>{const N=F0(U),G=pY(U),z=cJ(G),_J={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},g=_J[B?.toUpperCase()]||_J.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${C}"
                            data-source-index="${U.sourceIndex}"
                            data-media-type="${dJ(U)}"
                            data-url="${N}"
                            data-compatible-slots="${G}"
                            draggable="${dJ(U)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${g.color};
                                box-shadow: 0 0 15px ${g.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${dJ(U)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${g.color}, inset 0 0 15px ${g.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${g.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${U.sourceIndex}, mediaType: '${dJ(U)}', id: '${L}'}, '*');"
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
                        ${dJ(U)==="video"?(()=>{const CJ=eJ(N);if(CJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${CJ.provider.toUpperCase()}</div></div>`;return`<video src="${N}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${N}" alt="Imagen de la galería" onerror="${vX}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${dJ(U)==="video"?"VIDEO":"IMG"}</div>
                        ${G?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${z.bg}; border: 1px solid ${z.border}; color: ${z.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${z.glow}, 0 0 24px ${z.glow}; text-shadow: 0 0 10px ${z.glow}; backdrop-filter: blur(8px);">${G}</div>`:""}
                        ${U.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${G?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${U.autor}</div>`:""}
                        </div>
                    `}).join(""):'<p style="text-align:center; grid-column: 1/-1; color: #64748b;">No hay archivos cargados.</p>'}
                </div>

                <div id="fullscreenViewer" class="fullscreen-viewer">
                    <button class="viewer-close" onclick="closeFullscreenViewer()" aria-label="Cerrar visor">✕</button>
                    <div class="viewer-bottom-bar">
                        <button class="viewer-nav prev" id="viewerPrev" onclick="showPreviousViewerPhoto(event)" aria-label="Foto anterior">←</button>
                        <button id="viewerPlayToggle" class="viewer-control-btn viewer-control-btn--center" type="button" onclick="toggleViewerAutoplay(event)">Play</button>
                        <button class="viewer-nav next" id="viewerNext" onclick="showNextViewerPhoto(event)" aria-label="Foto siguiente">→</button>
                    </div>
                    <div class="viewer-hint">Usá ← → para cambiar y Escape para salir</div>
                    <div class="viewer-stage" id="viewerStage">
                        ${P.map((U,C)=>{const N=dJ(U),G=eJ(U.url);return`
                            <div class="viewer-slide" id="viewer-slide-${C}">
                                ${N==="video"?G?`<iframe src="${G.src}" title="${G.title} ${C+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${U.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${U.url}" alt="Vista completa ${C+1}" onerror="${vX}" />`}
                            </div>`}).join("")}
                    </div>
                </div>

                <script>
                    const viewer = document.getElementById('fullscreenViewer');
                    const viewerStage = document.getElementById('viewerStage');
                    const galleryGrid = document.getElementById('galleryGrid');
                    const viewerSlides = Array.from(document.querySelectorAll('.viewer-slide'));
                    const viewerPrevButton = document.getElementById('viewerPrev');
                    const viewerNextButton = document.getElementById('viewerNext');
                    const viewerPlayToggleButton = document.getElementById('viewerPlayToggle');
                    const modalPlayFullscreenButton = document.getElementById('modalPlayFullscreenButton');
                    const VALID_FILE_MIME_PREFIXES = ['image/', 'video/'];
                    const VALID_FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'webm', 'ogg', 'mov', 'm4v'];
                    const VIEWER_IMAGE_TIMEOUT_MS = 7000;
                    const VIEWER_VIDEO_FALLBACK_TIMEOUT_MS = 30000;
                    const VIEWER_RETRY_DELAY_MS = 900;
                    const VIEWER_PRELOAD_RADIUS = 1;
                    const VIEWER_STATES = Object.freeze({
                        IDLE: 'idle',
                        SHOWING_IMAGE: 'showing-image',
                        PLAYING_VIDEO: 'playing-video',
                        TRANSITIONING: 'transitioning'
                    });
                    let currentViewerIndex = 0;
                    let viewerAutoplay = false;
                    let viewerRandom = false;
                    let viewerAutoplayTimeout = null;
                    let viewerState = VIEWER_STATES.IDLE;
                    let viewerTransitionToken = 0;
                    let viewerRecoveryInProgress = false;
                    let activeSlotSelectionId = '';
                    const DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                    const LONG_PRESS_MS = 280;
                    let longPressTimer = null;
                    let touchPayload = null;
                    const SWIPE_DISTANCE_THRESHOLD = 72;
                    const SWIPE_VELOCITY_THRESHOLD = 0.35;
                    const SWIPE_FEEDBACK_MAX_TRANSLATE = 52;
                    const SWIPE_VERTICAL_LOCK_RATIO = 1.2;
                    let viewerSwipeState = {
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

                    function isAllowedFileType(file) {
                        if (!file) return false;
                        const mime = String(file.type || '').toLowerCase();
                        const ext = String(file.name || '').split('.').pop()?.toLowerCase() || '';
                        return VALID_FILE_MIME_PREFIXES.some((prefix) => mime.startsWith(prefix)) || VALID_FILE_EXTENSIONS.includes(ext);
                    }

                    function openSlotActionModal(slotId, mode = '') {
                        activeSlotSelectionId = slotId || '';
                        const modal = document.getElementById('miModal');
                        const galleryHint = document.getElementById('slotGalleryHint');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
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
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${L}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
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
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (urlInput) urlInput.value = '';
                        if (localInput) localInput.value = '';
                        if (labelInput) labelInput.value = '${JJ[0]}';
                        if (authorInput) authorInput.value = '';
                        if (mediaTypeInput) mediaTypeInput.value = 'image';
                        if (slotInput) slotInput.value = '';
                        const galleryHint = document.getElementById('slotGalleryHint');
                        if (galleryHint) galleryHint.style.display = 'none';
                        activeSlotSelectionId = '';
                        updateSlotGalleryButtons();
                    }

                    function addMediaFromModal() {
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const normalizedUrl = (urlInput?.value || '').trim();
                        const selectedFile = localInput?.files?.[0];
                        const mediaType = mediaTypeInput?.value || 'image';
                        const label = labelInput?.value || '${JJ[0]}';
                        const autor = (authorInput?.value || '').trim();
                        const slotSelectionId = activeSlotSelectionId || document.getElementById('slotSelectionId')?.value || '';

                        const postMedia = (finalUrl, finalType) => {
                            if (!finalUrl) return;
                            window.opener.postMessage({ type: 'ADD_IMAGE', url: finalUrl, label, autor, mediaType: finalType, id: '${L}' }, '*');
                            if (slotSelectionId) {
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${L}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label }, '*');
                            }
                            document.getElementById('miModal').style.display = 'none';
                            resetAddMediaModalFields();
                        };

                        if (selectedFile) {
                            if (!isAllowedFileType(selectedFile)) {
                                alert('Tipo de archivo no válido. Usá imagen o video.');
                                return;
                            }
                            const inferredType = selectedFile.type && selectedFile.type.startsWith('video/') ? 'video' : 'image';
                            const reader = new FileReader();
                            reader.onload = () => postMedia(String(reader.result || ''), inferredType);
                            reader.onerror = () => alert('No se pudo leer el archivo seleccionado.');
                            reader.readAsDataURL(selectedFile);
                            return;
                        }

                        postMedia(normalizedUrl, mediaType);
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
                        if (viewerPrevButton) viewerPrevButton.disabled = disableNavigation;
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

                    function startFullscreenPlaybackFromModal(event) {
                        if (event) event.stopPropagation();
                        const modal = document.getElementById('miModal');
                        if (modal) modal.style.display = 'none';
                        if (!viewer.classList.contains('open')) {
                            openFullscreenViewer(currentViewerIndex || 0);
                        }
                        setViewerAutoplayState(true);
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
                                    id: '${L}'
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
        `);_.document.close()},N0=()=>{const[_,W]=React.useState(null),B=uJ(null),D=uJ(null),[L,v]=T([]),f={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},QJ=(J="")=>{const X=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return f[X]||f.DEFAULT},[c,P]=T(tY),[U,C]=T("EXPLORAR"),[N,G]=T(null),[z,_J]=T(null),[g,CJ]=T(""),[ZJ,zJ]=T({}),[EJ,SJ]=T({}),[aY,rY]=T(!1),[yX,eY]=T(bX[0]||""),[JX,ZQ]=T(null),[JZ,QZ]=T(!1),[mX,xJ]=T(!1),[uX,DQ]=T(!1),[t,$Q]=T(null),[XZ,HQ]=T(null),[LJ,jQ]=T(null),[YZ,fX]=T(!1),[cX,AQ]=T(""),[e,qQ]=React.useState(null),[QX,zQ]=T(!1),[sX,ZZ]=T({x:0,y:0}),[XJ,dX]=T("promedio"),[PJ,XX]=T("desc"),[UJ,_Q]=T({isOpen:!1,profile:null,category:null}),[YX,NQ]=T({isOpen:!1,profile:null}),[NJ,ZX]=T("INICIAL"),[b,$Z]=T("GENERAL"),[BJ,l]=T(null),[MQ,OQ]=T(null),[WQ,$X]=T([]),[nJ,nX]=T([]),[pJ,KQ]=T(!1),[EQ,pX]=T(!1),[MJ,iX]=T(!1),[HX,HZ]=T(5),[lX,oX]=T(20),[TJ,jZ]=T(!0),[tX,iJ]=T(!1),[aX,kQ]=T(""),[rX,wQ]=T(""),[eX,vJ]=T(""),[JY,QY]=T(!1),[jX,XY]=T(""),[qX,YY]=T("url"),[ZY,$Y]=T(""),[HY,jY]=T(null),[qY,qZ]=T(JJ[0]),[_Y,OY]=T(""),[WY,_X]=T(""),[GQ,bJ]=T(""),[_Z,OZ]=T(!1),[OX,WX]=T(!1),[EY,EX]=T({}),[LX,LY]=T({}),[WZ,SQ]=T({}),[EZ,FY]=T({}),[lJ,LZ]=T(!1),[FZ,LQ]=T(""),IJ=uJ(null),xQ=uJ(null),FX=uJ(null),PQ=uJ(!1),vQ=uJ(null),UY=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),bQ=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:SX(),puntuaciones:CQ()}),[x,s]=T(bQ);i(()=>{if(!z){if(g)CJ("");return}if(z==="GENERAL"&&g!=="all")CJ("all")},[z,g]);const UX=(J={})=>{const X=bQ(),Y=J&&typeof J==="object"?J:{},Z=Y?.puntuaciones&&typeof Y.puntuaciones==="object"?{...X.puntuaciones,...Y.puntuaciones}:X.puntuaciones;return{...Y,...X,nombre:typeof Y.nombre==="string"?Y.nombre:"",nacionalidad:typeof Y.nacionalidad==="string"?Y.nacionalidad:"",ciudad:typeof Y.ciudad==="string"?Y.ciudad:"",profesion:typeof Y.profesion==="string"?Y.profesion:"",fechaNacimiento:typeof Y.fechaNacimiento==="string"?Y.fechaNacimiento:"",estaturaCm:Y.estaturaCm===void 0||Y.estaturaCm===null?"":Y.estaturaCm,fotos:Array.isArray(Y.fotos)?Y.fotos:[],galeria:{fotos:Array.isArray(Y?.galeria?.fotos)?Y.galeria.fotos:[],gifs:Array.isArray(Y?.galeria?.gifs)?Y.galeria.gifs:[],videos:Array.isArray(Y?.galeria?.videos)?Y.galeria.videos:[]},batallaFotosPreferidas:qJ(Y?.batallaFotosPreferidas),puntuaciones:Z}},IQ=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===DJ)return;s(UX(J));$Q(J.firebaseId||J.id||null);xJ(!0)},UZ=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const Y=B.current,Z=Y&&!Y.closed?Y:window.open("","_blank");B.current=Z;hX({targetWindow:Z,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map(($,H)=>({...d($,"image"),sourceTag:"fotos",sourceIndex:H})),...(J?.galeria?.videos||[]).map(($,H)=>({...d($,"video"),sourceTag:"videos",sourceIndex:H}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});Z?.focus();bJ("");LQ("")},BY=(J="")=>{if(U==="anonimo")return;const X=String(J||"").trim();$Q(null);s({...bQ(),profesion:X});xJ(!0)},gQ=u(()=>{const X=[{key:"nombre",label:"Nombre",value:x?.nombre},{key:"fotos.0",label:"Foto principal",value:x?.fotos?.[0]},{key:"profesion",label:"Profesión",value:x?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:x?.nacionalidad},{key:"ciudad",label:"Ciudad",value:x?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:x?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:x?.estaturaCm}].map((Y)=>{const Z=typeof Y.value==="string"?Y.value.trim():Y.value,$=!(Z===""||Z===void 0||Z===null),H=Y.key==="fotos.0"?$?"SI":"NO":$?String(Z):"Sin completar";return{...Y,isComplete:$,preview:H}});return{completed:X.filter((Y)=>Y.isComplete),missing:X.filter((Y)=>!Y.isComplete)}},[x]),K0=async({profileId:J,url:X,tag:Y="fotos",label:Z="",type:$="image",autor:H=""})=>{const E=(X||"").trim(),j=JJ.includes(Z)?Z:"",q=sJ(E,$);if(!J||!E)return[];const O=K.ref(`perfiles/${J}/galeria/${Y}`),R=[...(await O.once("value")).val()||[],{url:E,label:j,type:q,autor:xX(H)}];await O.set(R);if(J===t)s((w)=>({...w,galeria:{...w.galeria||{fotos:[],gifs:[],videos:[]},[Y]:R}}));return R},BZ=async({profileId:J,sourceTag:X,sourceIndex:Y,label:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=JJ.includes(Z)?Z:"",H=K.ref(`perfiles/${J}/galeria/${X}`),E=await H.once("value"),j=Array.isArray(E.val())?E.val():[];if(!j[Y])return;const q=[...j],O=d(q[Y],X==="videos"?"video":"image");q[Y]={...O,label:$};await H.set(q);if(J===t)s((F)=>({...F,galeria:{...F.galeria||{fotos:[],gifs:[],videos:[]},[X]:q}}))},TY=async({profileId:J,sourceTag:X,sourceIndex:Y,url:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=(Z||"").trim();if(!$)return;const H=K.ref(`perfiles/${J}/galeria/${X}`),E=await H.once("value"),j=Array.isArray(E.val())?E.val():[];if(!j[Y])return;const q=[...j],O=X==="videos"?"video":"image",F=d(q[Y],O);q[Y]={...F,url:$,type:sJ($,O)};await H.set(q);if(J===t)s((V)=>({...V,galeria:{...V.galeria||{fotos:[],gifs:[],videos:[]},[X]:q}}))},TZ=async({profileId:J,sourceTag:X,sourceIndex:Y})=>{if(!J||!X||!Number.isInteger(Y))return;const Z=K.ref(`perfiles/${J}/galeria/${X}`),$=await Z.once("value"),H=Array.isArray($.val())?$.val():[],E=H[Y];if(!E)return;const j=H.filter((O,F)=>F!==Y);await Z.set(j);const q=d(E,X==="videos"?"video":"image").url;if(q){const O=K.ref(`perfiles/${J}/batallaFotosPreferidas`),F=await O.once("value"),R={...qJ(F.val())};let w=!1;Object.keys(R).forEach((A)=>{if(R[A]===q){R[A]="";w=!0}});if(w)await O.set(R)}if(J===t)s((O)=>({...O,galeria:{...O.galeria||{fotos:[],gifs:[],videos:[]},[X]:j},batallaFotosPreferidas:(()=>{const F=qJ(O.batallaFotosPreferidas);if(!q)return F;const V={...F};Object.keys(V).forEach((R)=>{if(V[R]===q)V[R]=""});return V})()}))},VY=(J)=>new Promise((X,Y)=>{const Z=new FileReader;Z.onload=()=>X(String(Z.result||""));Z.onerror=()=>Y(new Error("No se pudo leer el archivo."));Z.readAsDataURL(J)}),CY=(J,X)=>{const Y=String(X||"").trim(),Z=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Y)return{...J,fotos:[""]};const H=Z.some((E)=>d(E,"image").url===Y)?Z:[...Z,{url:Y,label:"C",type:"image"}];return{...J,fotos:[Y],galeria:{...J.galeria||{},fotos:H}}},VZ=async(J)=>{const X=J.target.files?.[0];if(!X)return;try{const Y=await VY(X);s((Z)=>CY(Z,Y))}catch(Y){console.error("Error al cargar foto de perfil local:",Y)}finally{J.target.value=""}},CZ=async({url:J,label:X,autor:Y=""})=>{const Z=String(J||"").trim();if(!Z)throw new Error("Ingresá una URL o seleccioná un archivo.");const $=JJ.includes(X)?X:"",H=sJ(Z);if(!(H==="image"||dY.test(Z)||Boolean(eJ(Z))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const j=H==="video"?"videos":"fotos",q=K.ref(`${tQ}/${j}`),O=await q.once("value"),V=[...Array.isArray(O.val())?O.val():[],{url:Z,label:$,type:H,autor:String(Y||"").trim()}];await q.set(V)},RZ=async()=>{_X("");try{let J=String(ZY||"").trim();if(qX==="file"){if(!HY)throw new Error("Seleccioná un archivo local.");J=await VY(HY)}await CZ({url:J,label:qY,autor:_Y});$Y("");jY(null);OY("");YY("url")}catch(J){_X(J?.message||"No se pudo guardar en galería anónima.")}},k0=async(J,X)=>{X.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await K.collection("galeria").doc(J).delete()}catch(Y){console.error("Error al borrar de Firebase:",Y)}},[M,$J]=T(UY()),BX=()=>$J(UY());i(()=>{if(window.lucide)window.lucide.createIcons()},[U,mX,uX,L,e,c]);i(()=>{if(B.current&&!B.current.closed&&t)hX({targetWindow:B.current,profileName:x.nombre,profession:x.profesion,photos:[...(x.galeria?.fotos||[]).map((J,X)=>({...d(J,"image"),sourceTag:"fotos",sourceIndex:X})),...(x.galeria?.videos||[]).map((J,X)=>({...d(J,"video"),sourceTag:"videos",sourceIndex:X}))],editingId:t,battlePhotoPrefs:x.batallaFotosPreferidas,profilePhotoUrl:x.fotos?.[0]||""})},[t,x.nombre,x.profesion,x.galeria?.fotos,x.galeria?.videos,x.batallaFotosPreferidas]);i(()=>{const J=async(q)=>{if(q.data.type==="ADD_IMAGE"){const{url:O,id:F,label:V,mediaType:R,autor:w}=q.data,A=R==="video"?"videos":"fotos";if(!F)return;const S=F===DJ?K.ref(`${tQ}/${A}`):K.ref(`perfiles/${F}/galeria/${A}`),YJ=(await S.once("value")).val()||[],m=(O||"").trim();if(!m)return;const a=[...YJ,{url:m,label:JJ.includes(V)?V:"",type:sJ(m,R),autor:xX(w)}];await S.set(a);s((I)=>({...I,galeria:{...I.galeria,[A]:a}}))}if(q.data.type==="DELETE_IMAGE"){const{index:O,id:F,mediaType:V}=q.data,R=V==="video"?"videos":"fotos";if(!F)return;const w=F===DJ?K.ref(`${tQ}/${R}`):K.ref(`perfiles/${F}/galeria/${R}`),S=(await w.once("value")).val()||[],o=S[O],YJ=S.filter((a,I)=>I!==O);await w.set(YJ);const m=d(o,V).url;if(m&&F!==DJ){const a=K.ref(`perfiles/${F}/batallaFotosPreferidas`),I=await a.once("value"),p={...qJ(I.val())};let wJ=!1;Object.keys(p).forEach((lQ)=>{if(p[lQ]===m){p[lQ]="";wJ=!0}});if(wJ)await a.set(p)}s((a)=>({...a,galeria:{...a.galeria,[R]:YJ},batallaFotosPreferidas:(()=>{const I=qJ(a.batallaFotosPreferidas);if(!m)return I;const r={...I};Object.keys(r).forEach((p)=>{if(r[p]===m)r[p]=""});return r})()}))}if(q.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:O,slotId:F,index:V,mediaType:R}=q.data,w=aQ(F);if(!O||O===DJ||!w||!Number.isInteger(V))return;const A=R==="video"?"videos":"fotos",YJ=(await K.ref(`perfiles/${O}/galeria/${A}`).once("value")).val()||[],m=d(YJ[V],R);if(!m.url||m.type!=="image")return;await K.ref(`perfiles/${O}/batallaFotosPreferidas/${F}`).set(m.url);s((I)=>({...I,batallaFotosPreferidas:{...qJ(I.batallaFotosPreferidas),[F]:m.url}}))}if(q.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:O,slotId:F,url:V,mediaType:R,label:w}=q.data,A=aQ(F),S=String(V||"").trim();if(!O||O===DJ||!A||!S)return;if(R==="video")return;await K.ref(`perfiles/${O}/batallaFotosPreferidas/${F}`).set(S);s((YJ)=>({...YJ,batallaFotosPreferidas:{...qJ(YJ.batallaFotosPreferidas),[F]:S}}))}if(q.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:O,slotId:F}=q.data,V=aQ(F);if(!O||O===DJ||!V)return;await K.ref(`perfiles/${O}/batallaFotosPreferidas/${F}`).set("");s((w)=>({...w,batallaFotosPreferidas:{...qJ(w.batallaFotosPreferidas),[F]:""}}))}};window.addEventListener("message",J);const X=K.ref("perfiles"),Y=K.ref(tQ);let Z={},$={};const H=()=>{const q=Object.keys(Z||{}).map((V)=>({...UX(Z[V]),firebaseId:V})),O=U0($||{}),F=Object.values(O.galeria||{}).some((V)=>Array.isArray(V)&&V.length>0);v(F?[...q,O]:q)};X.on("value",(q)=>{Z=q.val()||{};H()});Y.on("value",(q)=>{$=q.val()||{};H()});P(tY);const E=K.ref("arenaBattleState");E.on("value",(q)=>{zJ(q.val()||{})});const j=K.ref("arenaGlobalState");j.on("value",(q)=>{SJ(q.val()||{})});return()=>{window.removeEventListener("message",J);X.off();Y.off();E.off();j.off()}},[]);const gJ=(J)=>{if(!J)return"?";const X=new Date,Y=new Date(J);let Z=X.getFullYear()-Y.getFullYear();if(X.getMonth()<Y.getMonth()||X.getMonth()===Y.getMonth()&&X.getDate()<Y.getDate())Z--;return Z},TX=(J={})=>{return{...CQ(),...J?.puntuaciones||{}}},hJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},VX=(J={},X=[])=>{if(!Array.isArray(X)||!X.length)return 0;const Y=TX(J);return X.reduce((Z,$)=>Z+(Number(Y[$])||0),0)/X.length},hQ=(J={})=>{return VX(J,hJ.Rostro)},yQ=(J={})=>{return VX(J,hJ.Cuerpo)},mQ=(J={})=>{return VX(J,hJ.Actitud)},RY=(J={},X="")=>{if(X==="Rostro")return hQ(J);if(X==="Cuerpo")return yQ(J);if(X==="Actitud")return mQ(J);return 0},VJ=(J={})=>{const X=Object.keys(hJ).map((Z)=>RY(J,Z));return(X.reduce((Z,$)=>Z+$,0)/X.length).toFixed(0)},uQ=(J)=>{const X=[],Y=(J.nacionalidad||"").toLowerCase(),Z=(J.profesion||"").toLowerCase(),$=(J.ciudad||"").toLowerCase(),H=gJ(J.fechaNacimiento);c.forEach((E)=>{const j=E.reglas;let q=!0;if(j.nacionalidades?.length>0&&!j.nacionalidades.some((O)=>Y===O.toLowerCase()))q=!1;if(j.profesiones?.length>0&&!j.profesiones.some((O)=>Z===O.toLowerCase()))q=!1;if(j.ciudades?.length>0&&!j.ciudades.some((O)=>$===O.toLowerCase()))q=!1;if(j.edadMin&&(H==="?"||H<parseInt(j.edadMin)))q=!1;if(j.edadMax&&(H==="?"||H>parseInt(j.edadMax)))q=!1;if(j.caracteristica&&j.umbral){const O=TX(J)[j.caracteristica]||0,F=parseInt(j.umbral);if(j.operador==="Superior a"&&O<=F)q=!1;if(j.operador==="Inferior a"&&O>=F)q=!1}if(q)X.push(E.firebaseId)});return X},DZ=u(()=>["Todas",...new Set(L.map((J)=>J.nacionalidad).filter(Boolean))],[L]),w0=u(()=>["Todas",...new Set(L.map((J)=>J.profesion).filter(Boolean))],[L]),AZ=u(()=>["Todas",...new Set(L.map((J)=>J.ciudad).filter(Boolean))],[L]),DY=u(()=>{return(L||[]).reduce((J,X)=>{if(!X?.firebaseId)return J;J[X.firebaseId]=uQ(X);return J},{})},[L,c]),oJ=u(()=>{return(L||[]).flatMap((J)=>{const X=B0(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map((Z,$)=>({item:Z,sourceTag:"fotos",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map((Z,$)=>({item:Z,sourceTag:"gifs",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map((Z,$)=>({item:Z,sourceTag:"videos",sourceIndex:$,fallbackType:"video"})):[]].map(({item:Z,sourceTag:$,sourceIndex:H,fallbackType:E})=>{const j=d(Z,E);return{id:`${J.firebaseId||J.nombre||"perfil"}-${$}-${H}`,url:j.url,label:j.label,type:j.type,isGif:j.type==="image"&&D0(j.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||j.url,profileId:J.firebaseId,sourceCharacterId:X,sourceTag:$,sourceIndex:H}})})},[L]),jJ=u(()=>{return oJ.filter((J)=>Boolean(J.url))},[oJ]),CX=u(()=>{return jJ.reduce((J,X)=>{const Y=X.label||"";if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[jJ]),AY=u(()=>{return jJ.reduce((J,X)=>{const Y=X.profileId||X.nombre;if(!Y)return J;if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[jJ]),zZ=u(()=>{return new Set(jJ.map((J)=>J.profileId).filter(Boolean)).size},[jJ]),zY=u(()=>{return Object.entries(DY||{}).reduce((J,[X,Y])=>{J[X]=new Set(Array.isArray(Y)?Y:[]);return J},{})},[DY]),KJ=u(()=>{if(b==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:jJ[0]?.url||"",photos:jJ}];if(b==="PERSONAJE")return Object.entries(AY).map(([J,X])=>{const Y=X[0]||{};return{id:`PERSONAJE-${J}`,profileId:Y.profileId||null,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotoPerfil:Y.fotoPerfil||Y.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}));if(b==="ETIQUETA")return JJ.map((J)=>{const X=CX[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0);return(c||[]).map((J)=>{const X=jJ.filter((Y)=>{if(!Y.profileId)return!1;const Z=zY[Y.profileId];return Z?Z.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||X[0]?.fotoPerfil||X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}))},[jJ,CX,AY,c,b,zY]),yJ=u(()=>{if(b==="GENERAL")return KJ[0]||null;if(!MQ)return null;return KJ.find((J)=>J.id===MQ.id)||null},[KJ,MQ,b]),RJ=u(()=>{if(b!=="PERSONAJE")return[];return KJ.filter((J)=>WQ.includes(J.id))},[KJ,b,WQ]),FQ=u(()=>{if(b==="PERSONAJE")return RJ.flatMap((J)=>J.photos||[]);if(b==="ETIQUETA"){if(!nJ.length)return[];return jJ.filter((J)=>nJ.includes(J.label))}return yJ?.photos||jJ},[b,RJ,yJ,jJ,nJ]),NZ=u(()=>{const J=FQ.reduce((X,Y)=>{const Z=Y.label||"";if(!Z)return X;X[Z]=(X[Z]||0)+1;return X},{});return JJ.reduce((X,Y)=>{X[Y]=J[Y]||0;return X},{})},[FQ]),y=u(()=>{return FQ.filter((J)=>b==="ETIQUETA"?!0:NJ==="INICIAL"?J.label!=="X":NJ==="100"?!0:J.label===NJ)},[FQ,NJ,b]),RX=u(()=>{return y.slice(0,lX)},[y,lX]),MZ=RX.length<y.length,fQ=cY[b]||b,cQ=b!=="GENERAL"&&b!=="ETIQUETA",NY=u(()=>{if(b!=="PERSONAJE")return[];return KJ.filter((J)=>!WQ.includes(J.id))},[KJ,b,WQ]),k=BJ===null?null:y[rJ(BJ,y.length)]||null,mJ=u(()=>{return oJ.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(EY[J.id])})},[oJ,EY]),MY=u(()=>{const J=mJ.reduce((X,Y)=>{const Z=Y.profileId||Y.nombre||"sin-perfil";if(!X[Z])X[Z]={id:Z,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotos:[]};X[Z].fotos.push(Y);return X},{});return Object.values(J).map((X)=>({...X,fotos:X.fotos.sort((Y,Z)=>(Y.label||"").localeCompare(Z.label||"","es",{sensitivity:"base"}))})).sort((X,Y)=>X.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[mJ]);i(()=>{if(!k){iJ(!1);kQ("");wQ("");vJ("");return}iJ(!1);kQ(k.label||"");wQ(k.url||"");vJ("")},[k]);i(()=>{if(U!=="GALERIA"){OQ(null);l(null)}},[U]);i(()=>{oX(40);l(null)},[b,NJ,nJ,WQ,MQ,L.length]);i(()=>{OQ(null);l(null);$X([]);nX([])},[b]);i(()=>{if(BJ===null)return;if(!y.length){l(null);return}if(BJ>=y.length)l(0)},[y,BJ]);i(()=>{if(BJ===null)return;const J=(X)=>{if(X.key==="Escape"){l(null);return}if(!y.length)return;if(X.key==="ArrowRight")l((Y)=>rJ((Y??0)+1,y.length));if(X.key==="ArrowLeft")l((Y)=>rJ((Y??0)-1,y.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[y.length,BJ]);i(()=>{if(BJ===null){KQ(!1);pX(!1);iX(!1)}},[BJ]);i(()=>{if(!QX)return;const J=(Y)=>{if(D.current&&!D.current.contains(Y.target))zQ(!1)},X=(Y)=>{if(Y.key==="Escape")zQ(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",X);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",X)}},[QX]);i(()=>{let J=!1;const X=oJ.filter((Z)=>Z.type==="image"&&Z.url);if(!X.length){EX({});return}(async()=>{const Z=8,$=[];for(let E=0;E<X.length;E+=Z){const j=X.slice(E,E+Z),q=await Promise.all(j.map(async(O)=>({id:O.id,isBroken:await iY(O.url)})));$.push(...q);if(J)return}if(J)return;const H=$.reduce((E,j)=>{E[j.id]=j.isBroken;return E},{});EX(H)})();return()=>{J=!0}},[oJ]);i(()=>{if(!OX)return;const J=mJ.reduce((X,Y)=>{X[Y.id]=Y.url;return X},{});LY(J);FY({})},[OX,mJ]);i(()=>{if(IJ.current){clearTimeout(IJ.current);IJ.current=null}if(!pJ||!k)return;if(k.type==="video")return;const J=HX*1000;IJ.current=setTimeout(()=>{l((X)=>sY(X,y,EQ))},J);return()=>{if(IJ.current){clearTimeout(IJ.current);IJ.current=null}}},[pJ,k,y,EQ,HX]);i(()=>{if(!k||!PQ.current)return;PQ.current=!1;requestAnimationFrame(()=>{kZ()})},[k]);const DX=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,KY=()=>{const J=xQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},KZ=()=>{const J=xQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},kZ=()=>{const J=xQ.current;if(!J)return;if(document.fullscreenElement)return;const X=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof X==="function")Promise.resolve(X.call(J)).catch(()=>{if(DX)KY()});else if(DX)KY()},wZ=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},kY=(J,{autoplay:X=!1,fromGeneralPlay:Y=!1}={})=>{PQ.current=!!X;l(J);KQ(X);iX(Y);iJ(!Y)},GZ=(J)=>{if(!J)return;$X((X)=>X.includes(J)?X:[...X,J]);l(null)},SZ=(J)=>{if(!J)return;$X((X)=>X.filter((Y)=>Y!==J));l(null)},xZ=(J)=>{if(!J)return;nX((X)=>X.includes(J)?X.filter((Y)=>Y!==J):[...X,J]);l(null)},wY=()=>{PQ.current=!1;KQ(!1);l(null);KZ();wZ()},sQ=()=>l((J)=>sY(J,y,EQ)),G0=()=>l((J)=>rJ((J??0)-1,y.length)),PZ=async()=>{if(!k?.profileId||!k?.sourceTag||!Number.isInteger(k?.sourceIndex))return;const J=(rX||"").trim();if(!J){vJ("La URL no puede estar vacía.");return}if(nY(J)||!HJ(J,"")){vJ("La URL está bloqueada o no es válida.");return}try{QY(!0);vJ("");if(J!==k.url)await TY({profileId:k.profileId,sourceTag:k.sourceTag,sourceIndex:k.sourceIndex,url:J});await BZ({profileId:k.profileId,sourceTag:k.sourceTag,sourceIndex:k.sourceIndex,label:aX});iJ(!1)}catch(X){vJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",X)}finally{QY(!1)}},vZ=(J,X)=>{LY((Y)=>({...Y,[J]:X}))},GY=(J,X)=>{if(!J)return;FY((Y)=>({...Y,[J]:Boolean(X)}))},bZ=(J)=>{const X=(LX[J?.id]||J?.url||"").trim();if(!X)return;window.open(X,"_blank","noopener,noreferrer")},IZ=async(J)=>{if(!J)return;const X=(LX[J.id]||"").trim();if(!X)return;SQ((Y)=>({...Y,[J.id]:!0}));try{if(X!==J.url)await TY({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:X});const Y=await iY(X);EX((Z)=>({...Z,[J.id]:Y}));if(!Y)GY(J.id,!1)}catch(Y){console.error("Error al actualizar URL rota:",Y)}finally{SQ((Y)=>({...Y,[J.id]:!1}))}},gZ=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;SQ((Y)=>({...Y,[J.id]:!0}));try{await TZ({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Y){console.error("Error al eliminar foto rota:",Y)}finally{SQ((Y)=>({...Y,[J.id]:!1}))}},hZ=u(()=>{if(b==="PERSONAJE")return RJ.length?`${RJ.length} personaje${RJ.length>1?"s":""} seleccionado${RJ.length>1?"s":""}`:"Sin personajes seleccionados";if(yJ&&cQ)return yJ.nombre;return fQ},[b,RJ,yJ,cQ,fQ]),yZ=(J)=>{J.preventDefault();const X={...x};if(t)K.ref(`perfiles/${t}`).set(X).then(()=>{xJ(!1);$Q(null)}).catch((Y)=>console.error("Error al excitar la base de datos:",Y));else K.ref("perfiles").push(X).then(()=>{xJ(!1);s(bQ())}).catch((Y)=>console.error("No pudo entrar el perfil:",Y))},mZ=async(J)=>{J.preventDefault();const{firebaseId:X,...Y}=M,Z={...Y,type:"custom"};try{if(X)await K.ref(`categorias/${X}`).update(Z);else await K.ref("categorias").push(Z);DQ(!1);BX()}catch($){console.error("La categoría no quiso guardarse:",$)}},uZ=async(J)=>{if(!J)return;try{await K.ref(`categorias/${J}`).remove();P((X)=>X.filter((Y)=>Y.firebaseId!==J));qQ((X)=>X===J?null:X)}catch(X){console.error("No se pudo borrar la categoría:",X);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},AX=(J)=>{if(!J?.firebaseId)return;AQ("");jQ(J);fX(!0)},fZ=()=>{if(!t)return;const J=L.find((X)=>X.firebaseId===t);if(!J)return;AX(J)},zX=()=>{fX(!1);HQ(null);jQ(null)},cZ=async(J)=>{if(!J)return;await K.ref(`perfiles/${J}`).remove();v((X)=>X.filter((Y)=>Y.firebaseId!==J))},sZ=async()=>{if(!LJ?.firebaseId)return;try{await cZ(LJ.firebaseId);AQ("");xJ(!1);if(t===LJ.firebaseId)$Q(null);zX()}catch(J){console.error("No se pudo borrar el perfil:",J);AQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},dQ=()=>{zQ(!1);jQ(null)},dZ=(J,X)=>{J.preventDefault();zQ(!0);ZZ({x:J.clientX,y:J.clientY});jQ(X)},nZ=()=>{if(!LJ)return;s(UX(LJ));$Q(LJ.firebaseId);xJ(!0);dQ()},pZ=async()=>{if(!LJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){dQ();return}try{await K.ref(`perfiles/${LJ.firebaseId}`).remove();v((X)=>X.filter((Y)=>Y.firebaseId!==LJ.firebaseId));dQ()}catch(X){console.error("No se pudo borrar el perfil:",X);alert("No se pudo borrar el perfil. Probá de nuevo.");dQ()}},SY=(J)=>{const X=J?.estaturaCm;if(X===void 0||X===null||X==="")return"Sin dato";const Y=Number(X);if(Number.isNaN(Y)||Y<=0)return"Sin dato";return`${Math.round(Y)} cm`},NX=(J="")=>String(J||"").trim().toLowerCase(),iZ=(J="")=>String(J||"").trim(),UQ=(J=[])=>[...J||[]].filter((X)=>X?.firebaseId&&(X?.nombre||"").trim()).sort((X,Y)=>(X.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"})).map((X)=>X.firebaseId),xY=(J=[],X="GENERAL")=>{const Y=String(X||"GENERAL").trim().toUpperCase(),Z=[...J||[]].filter((j)=>j?.firebaseId&&(j?.nombre||"").trim()).sort((j,q)=>(j.nombre||"").localeCompare(q.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:Z.map((j)=>j.firebaseId)}];if(Y==="EDADES"){const j={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};Z.forEach((q)=>{const O=gJ(q.fechaNacimiento);if(!Number.isFinite(O)||O<18)return;if(O<=28)j["18-28"].ids.push(q.firebaseId);else if(O<=39)j["29-39"].ids.push(q.firebaseId);else j["40+"].ids.push(q.firebaseId)});return Object.values(j)}const $=Y==="NACIONALIDADES"?"nacionalidad":"profesion",H=Y==="NACIONALIDADES"?"Nacionalidad":"Profesión",E=Z.reduce((j,q)=>{const O=NX(q?.[$]);if(!O)return j;if(!j[O])j[O]={key:O,label:iZ(q?.[$])||O,typeLabel:H,ids:[]};j[O].ids.push(q.firebaseId);return j},{});return Object.values(E).sort((j,q)=>j.label.localeCompare(q.label,"es",{sensitivity:"base"}))},MX=(J=[],X="GENERAL",Y="")=>{const Z=[...J||[]].filter((j)=>j?.firebaseId&&(j?.nombre||"").trim()).sort((j,q)=>(j.nombre||"").localeCompare(q.nombre||"","es",{sensitivity:"base"}));if(X==="GENERAL"){const j=Z.map((q)=>q.firebaseId);return{groupedIds:j.length>1?[{key:"general",label:"General",typeLabel:"General",ids:j}]:[],orderedIds:j}}const $=xY(Z,X),H=NX(Y),E=$.filter((j)=>{if(!H||H==="all")return!0;return NX(j.key)===H}).filter((j)=>j.ids.length>=2);return{groupedIds:E,orderedIds:E.flatMap((j)=>j.ids)}},kJ=(J,X)=>[J,X].sort().join("__"),tJ=(J)=>{if(!J||typeof J!=="object")return null;const X=String(J.winnerId||"").trim(),Y=String(J.loserId||"").trim();if(!X||!Y||X===Y)return null;return{winnerId:X,loserId:Y,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},nQ=(J={},X="")=>!!tJ(J?.[X]),BQ=(J={},X=[])=>{const Y=new Set((X||[]).filter(Boolean)),Z={},$={},H={};Object.entries(J||{}).forEach(([O,F])=>{const V=tJ(F);if(!V)return;const{winnerId:R,loserId:w}=V;if(Y.size&&(!Y.has(R)||!Y.has(w)))return;const A=kJ(R,w),S={winnerId:R,loserId:w,reason:"direct",playedAt:V.playedAt??Date.now()};Z[A]=S;$[A]=S;if(!H[R])H[R]=new Set;H[R].add(w)});new Set([...Object.keys(H),...Object.values(H).flatMap((O)=>[...O])]).forEach((O)=>{const F=[...H[O]||[]],V=new Set;while(F.length){const R=F.shift();if(!R||V.has(R)||R===O)continue;V.add(R);const w=kJ(O,R);if(!$[w])$[w]={winnerId:O,loserId:R,reason:"transitive",playedAt:null};(H[R]||[]).forEach((A)=>{if(!V.has(A))F.push(A)})}});const j=Object.fromEntries(Object.entries(H).map(([O,F])=>[O,[...F]])),q=oZ($);return{directMatchups:Z,matchups:$,victoryGraph:j,stats:q}},TQ=(J,X={})=>{const Y=WJ(J);if(!Y)return null;const Z=UQ(L),$=BQ(X?.directMatchups||X?.matchups||{},Z);return{arenaName:Y,orderedIds:Z,...$}},lZ=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=kJ(J[Y],J[Z]);if(!nQ(X,$))return[J[Y],J[Z]]}return null},KX=(J=[],X={},Y={})=>{const Z={...X||{},...Y||{}};for(const $ of J){const H=lZ($?.ids||[],Z);if(H)return H}return null},VQ=(J=[],X,Y="")=>{if(!X)return null;return J.find((Z)=>{const $=Z?.ids||[];if(!$.includes(X))return!1;return!Y||$.includes(Y)})||null},oZ=(J={})=>{return Object.keys(J||{}).reduce((X,Y)=>{const Z=tJ(J[Y]);if(!Z)return X;const{winnerId:$,loserId:H}=Z,E=X[$]||{wins:0,battles:0},j=X[H]||{wins:0,battles:0};return{...X,[$]:{wins:E.wins+1,battles:E.battles+1},[H]:{wins:j.wins,battles:j.battles+1}}},{})},PY=(J="",X="")=>{const Y=String(X||"").trim();if(!J||!Y)return!1;return J.endsWith(`::${Y}`)},tZ=(J,X)=>{const Y=tJ(X);if(!Y||Y.reason!=="direct")return J||null;const Z=tJ(J);if(!Z||Z.reason!=="direct")return Y;const $=Z.playedAt??0;return(Y.playedAt??0)>=$?Y:Z},vY=(J,X=ZJ)=>{const Y=String(J||"").trim();if(!Y)return BQ({},[]);const Z={};Object.entries(X||{}).forEach(([H,E])=>{if(!PY(H,Y))return;const j=E?.directMatchups||{};Object.entries(j).forEach(([q,O])=>{Z[q]=tZ(Z[q],O)})});const $=[...L||[]].map((H)=>H?.firebaseId).filter(Boolean).sort((H,E)=>String(H).localeCompare(String(E),"es",{sensitivity:"base"}));return BQ(Z,$)},bY=(J,X)=>{const Z=(vY(J).stats||{})[X]||{wins:0,battles:0},$=Z.battles?Math.round(Z.wins/Z.battles*100):0;return{...Z,score:$}},IY=(J,X=ZJ)=>{const Y=vY(J,X).stats||{};return[...L||[]].filter((Z)=>Z?.firebaseId).reduce((Z,$)=>{const H=Y[$.firebaseId]||{wins:0,battles:0};Z[$.firebaseId]=H.battles?Math.round(H.wins/H.battles*100):0;return Z},{})},S0=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=kJ(J[Y],J[Z]);if(!nQ(X,$))return[J[Y],J[Z]]}return null},gY=(J,X,Y=null)=>{if(!X)return null;const Z=A0.includes(X.mode)?X.mode:"GENERAL",$=String(X.groupKey||"all").trim().toLowerCase()||"all",H=MX(L,Z,$),E=H.groupedIds||[],j=H.orderedIds||[],q=TQ(J,Y||EJ?.[WJ(J)]||{}),O=q?.directMatchups||{},F=q?.matchups||{},V=q?.victoryGraph||{},R=q?.stats||{},w=X.championId,A=X.challengerId,S=VQ(E,w,A),o=!!w&&!!A&&w!==A&&!!S&&!nQ(F,kJ(w,A)),YJ=E.length?KX(E,X.matchups||{},F):null,m=o?[w,A]:YJ,a=!YJ,I=VQ(E,m?.[0],m?.[1]);return{...X,mode:Z,groupKey:$,groupedIds:E,orderedIds:j,stats:R,directMatchups:O,matchups:F,victoryGraph:V,championId:m?m[0]:null,challengerId:m?m[1]:null,activeGroupKey:I?.key||null,activeGroupLabel:I?`${I.typeLabel}: ${I.label}`:"",isFinished:a}};i(()=>{if(!L.length)return;const J={},X=[];Object.entries(ZJ||{}).forEach(([Y,Z])=>{const{arenaName:$}=oY(Y),H=gY($,Z,EJ?.[WJ($)]);if(!H)return;if(JSON.stringify(Z)===JSON.stringify(H))return;J[Y]=H;X.push(K.ref(`arenaBattleState/${Y}`).set(H).catch((j)=>console.error("No se pudo normalizar el estado del arena:",j)))});if(!Object.keys(J).length)return;zJ((Y)=>({...Y,...J}));Promise.all(X).catch(()=>{})},[ZJ,EJ,L]);i(()=>{if(!L.length)return;const J={};Object.entries(ZJ||{}).forEach(([Z,$])=>{const{arenaName:H}=oY(Z),E=WJ(H);if(!E)return;if(!J[E])J[E]={};Object.entries($?.directMatchups||{}).forEach(([j,q])=>{const O=tJ(q);if(!O)return;J[E][j]={winnerId:O.winnerId,loserId:O.loserId,reason:"direct",playedAt:O.playedAt??Date.now()}})});const X=[],Y={};Object.entries(J).forEach(([Z,$])=>{const H=WJ(Z);if(!H||EJ?.[H])return;const E=TQ(Z,{directMatchups:$});if(!E)return;Y[H]=E;X.push(K.ref(`arenaGlobalState/${H}`).set(E).catch((j)=>console.error("No se pudo migrar arenaGlobalState:",j)))});if(!Object.keys(Y).length)return;SJ((Z)=>({...Z,...Y}));Promise.all(X).catch(()=>{})},[ZJ,EJ,L]);const hY=(J,X=z,Y=g)=>{const Z=[...L].filter((S)=>S?.firebaseId&&(S?.nombre||"").trim()).sort((S,o)=>(S.nombre||"").localeCompare(o.nombre||"","es",{sensitivity:"base"}));if(Z.length<2)return;const $=String(X||"GENERAL").trim().toUpperCase(),H=MX(Z,$,Y),E=H.groupedIds||[],j=H.orderedIds||[],q=WJ(J),O=TQ(J,EJ?.[q]||{}),F=O?.matchups||{},V=KX(E,{},F);if(!V)return;const R=VQ(E,V[0],V[1]),w={mode:$,groupKey:String(Y||"").trim().toLowerCase()||"all",groupedIds:E,orderedIds:j,stats:O?.stats||{},directMatchups:O?.directMatchups||{},matchups:F,victoryGraph:O?.victoryGraph||{},championId:V[0],challengerId:V[1],activeGroupKey:R?.key||null,activeGroupLabel:R?`${R.typeLabel}: ${R.label}`:"",isFinished:!1},A=YQ(J,X,Y);if(!A)return;zJ((S)=>({...S,[A]:w}));if(!EJ?.[q]){SJ((S)=>({...S,[q]:O}));K.ref(`arenaGlobalState/${q}`).set(O).catch((S)=>console.error("No se pudo guardar arenaGlobalState inicial:",S))}K.ref(`arenaBattleState/${A}`).set(w).catch((S)=>console.error("No se pudo guardar el estado del arena:",S))},aZ=async(J,X,Y)=>{if(!J)return;try{await K.ref(`perfiles/${J}/puntuaciones/${X}`).set(Y)}catch(Z){console.error("No se pudo actualizar score del arena:",Z)}},yY=(J,X,Y=z,Z=g)=>{const $=YQ(J,Y,Z),H=ZJ[$];if(!H||H.isFinished)return;const E=WJ(J),j=TQ(J,EJ?.[E]||{}),q=Array.isArray(H.groupedIds)&&H.groupedIds.length?H.groupedIds:MX(L,H.mode||"GENERAL",H.groupKey||"all").groupedIds,{championId:O,challengerId:F}=H;if(X!==O&&X!==F)return;const V=X===O?F:O;if(!X||!V)return;const R=kJ(X,V),w={...j?.directMatchups||{},[R]:{winnerId:X,loserId:V,reason:"direct",playedAt:Date.now()}},A=BQ(w,UQ(L)),S=A.matchups,o=A.stats||{},YJ=VQ(q,X,V),a=((FJ,OJ,GX)=>{if(!OJ)return null;for(const oQ of FJ){if(!oQ||oQ===OJ)continue;const $0=kJ(OJ,oQ);if(!nQ(GX,$0))return oQ}return null})(YJ?.ids||[],X,S),I=a?[X,a]:KX(q,H.matchups||{},S),r=VQ(q,I?.[0],I?.[1]),p={arenaName:E,orderedIds:UQ(L),directMatchups:A.directMatchups,matchups:S,victoryGraph:A.victoryGraph,stats:o},wJ={...H,groupedIds:q,directMatchups:p.directMatchups,stats:o,matchups:S,victoryGraph:A.victoryGraph,championId:I?I[0]:null,challengerId:I?I[1]:null,activeGroupKey:r?.key||null,activeGroupLabel:r?`${r.typeLabel}: ${r.label}`:"",isFinished:!I},lQ={...ZJ||{},[$]:wJ},wX=IY(J,lQ);v((FJ)=>FJ.map((OJ)=>{if(!OJ?.firebaseId||!Object.prototype.hasOwnProperty.call(wX,OJ.firebaseId))return OJ;const GX=wX[OJ.firebaseId];return{...OJ,puntuaciones:{...OJ.puntuaciones||{},[J]:GX}}}));Object.entries(wX).forEach(([FJ,OJ])=>{aZ(FJ,J,OJ)});zJ((FJ)=>({...FJ,[$]:wJ}));SJ((FJ)=>({...FJ,[E]:p}));Promise.all([K.ref(`arenaGlobalState/${E}`).set(p),K.ref(`arenaBattleState/${$}`).set(wJ)]).catch((FJ)=>console.error("No se pudo guardar avance de batallas:",FJ))},rZ=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((L||[]).map((X)=>{if(!X?.firebaseId)return Promise.resolve();return K.ref(`perfiles/${X.firebaseId}/puntuaciones`).set(CQ())}));v((X)=>X.map((Y)=>({...Y,puntuaciones:CQ()})));zJ({});SJ({});await K.ref("arenaBattleState").remove();await K.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(X){console.error("No se pudieron resetear las calificaciones:",X);alert("No se pudo completar el reseteo.")}},eZ=async(J,X=z,Y=g)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const $={...ZJ||{}},H=Object.keys($).filter((j)=>PY(j,J));H.forEach((j)=>delete $[j]);await Promise.all(H.map((j)=>K.ref(`arenaBattleState/${j}`).remove()));zJ($);await Promise.all((L||[]).map((j)=>{if(!j?.firebaseId)return Promise.resolve();return K.ref(`perfiles/${j.firebaseId}/puntuaciones/${J}`).set(0)}));v((j)=>j.map((q)=>({...q,puntuaciones:{...q.puntuaciones||{},[J]:0}})));const E=YQ(J,X,Y);zJ((j)=>{if(!j?.[E])return j;const q={...j};delete q[E];return q});SJ((j)=>{const q=WJ(J);if(!j?.[q])return j;const O={...j};delete O[q];return O});await K.ref(`arenaBattleState/${E}`).remove();await K.ref(`arenaGlobalState/${WJ(J)}`).remove();alert(`Se reseteó "${J}" (${XQ(X)}) y se limpió su estado de batallas.`)}catch($){console.error("No se pudo resetear el item:",$);alert("No se pudo resetear ese item.")}},mY=async(J,X,Y,Z=z,$=g)=>{const H=YQ(J,Z,$),E=ZJ?.[H],j=WJ(J),q=TQ(J,EJ?.[j]||{});if(!E){alert("Esa arena no tiene estado cargado.");return}const O=q?.matchups||{},F=q?.directMatchups||{};if(!Object.keys(O).filter((A)=>!!O[A]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const R=kJ(X,Y);if(!O[R]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!F[R]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const A={...F};delete A[R];const S=BQ(A,UQ(L)),o={arenaName:j,orderedIds:UQ(L),directMatchups:S.directMatchups,matchups:S.matchups,victoryGraph:S.victoryGraph,stats:S.stats},YJ={...E,directMatchups:o.directMatchups,matchups:o.matchups,victoryGraph:o.victoryGraph,stats:o.stats},m=gY(J,YJ,o);if(!m){alert("No se pudo recomponer el estado del arena.");return}zJ((r)=>({...r,[H]:m}));SJ((r)=>({...r,[j]:o}));await Promise.all([K.ref(`arenaGlobalState/${j}`).set(o),K.ref(`arenaBattleState/${H}`).set(m)]);const a={...ZJ||{},[H]:m},I=IY(J,a);await Promise.all(Object.entries(I).map(async([r,p])=>{await K.ref(`perfiles/${r}/puntuaciones/${J}`).set(p)}));v((r)=>r.map((p)=>{if(!p?.firebaseId||!Object.prototype.hasOwnProperty.call(I,p.firebaseId))return p;const wJ=I[p.firebaseId];return{...p,puntuaciones:{...p.puntuaciones||{},[J]:wJ}}}));alert("Batalla reseteada correctamente.")}catch(A){console.error("No se pudo resetear la batalla:",A);alert("No se pudo resetear esa batalla.")}},J0=u(()=>{const J=L;if(U==="RANKING")return[...J].sort((X,Y)=>parseFloat(VJ(Y))-parseFloat(VJ(X)));if(U==="CATEGORIAS"&&e)return J.filter((X)=>uQ(X).includes(e));return J},[L,U,e]),pQ=u(()=>{const J=String(jX||"").trim().toLowerCase(),X=(Z)=>{return[Z?.profesion,Z?.profesiones].flatMap((H)=>{if(Array.isArray(H))return H;if(typeof H==="string")return H.split(",");return[]}).map((H)=>String(H||"").trim()).filter(Boolean).join(" ")},Y=(Z)=>{if(!Z||typeof Z!=="object")return!1;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),String(Z.ciudad||"").trim(),X(Z),String(Z.fechaNacimiento||"").trim(),String(Z.estaturaCm||"").trim()].some(Boolean)||Array.isArray(Z.fotos)&&Z.fotos.some(Boolean)};return[...L||[]].filter((Z)=>{if(!Y(Z))return!1;if(lJ&&T0(Z))return!1;if(!J)return!0;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),X(Z)].join(" ").toLowerCase().includes(J)}).sort((Z,$)=>String(Z?.nombre||"").localeCompare(String($?.nombre||""),"es",{sensitivity:"base"}))},[L,jX,lJ]),h=u(()=>pQ.find((J)=>J?.firebaseId===GQ)||null,[pQ,GQ]);i(()=>{const J=()=>LQ("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const Q0=u(()=>{if(!z)return[];return xY(L,z)},[L,z]),iQ=z&&z!=="GENERAL",uY=(J,X)=>{if(X==="promedio")return Number(VJ(J))||0;if(X==="nombre")return(J.nombre||"").toLowerCase();if(X==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(X==="edad"){const Y=gJ(J.fechaNacimiento);return typeof Y==="number"?Y:-1}if(X==="Rostro")return hQ(J)||0;if(X==="Cuerpo")return yQ(J)||0;if(X==="Actitud")return mQ(J)||0;return Number(J.puntuaciones?.[X]||0)},X0=(J)=>{if(XJ==="promedio")return VJ(J);if(XJ==="Rostro")return hQ(J).toFixed(0);if(XJ==="Cuerpo")return yQ(J).toFixed(0);if(XJ==="Actitud")return mQ(J).toFixed(0);if(QQ.includes(XJ))return Number(J.puntuaciones?.[XJ]||0).toFixed(0);return VJ(J)},aJ=(J,X="asc")=>{if(XJ===J){XX((Y)=>Y==="asc"?"desc":"asc");return}dX(J);XX(X)},Y0=(J,X)=>{const Y=hJ[X]||[],Z=new Set,$=new Set,H=Object.entries(ZJ||{});Y.forEach((q)=>{const O=EJ?.[WJ(q)]?.matchups||{};Object.values(O).forEach((F)=>{if(!F||typeof F!=="object")return;if(F.winnerId===J&&F.loserId)Z.add(F.loserId);if(F.loserId===J&&F.winnerId)$.add(F.winnerId)})});const E=new Map((L||[]).filter((q)=>q?.firebaseId).map((q)=>[q.firebaseId,q.nombre||"Sin nombre"])),j=(q)=>[...q].map((O)=>E.get(O)).filter(Boolean).sort((O,F)=>O.localeCompare(F,"es",{sensitivity:"base"}));return{wins:j(Z),losses:j($)}},fY=(J,X)=>{const Y=String(X||"").trim(),Z=String(J||"").trim();if(!Y||!Z)return{arenaName:Y,wins:[],losses:[]};const $=EJ?.[WJ(Y)]?.matchups||{},H=new Map((L||[]).filter((q)=>q?.firebaseId).map((q)=>[q.firebaseId,q.nombre||"Sin nombre"])),E=([q,O])=>{if(!O||typeof O!=="object")return null;const F=String(O.winnerId||"").trim(),V=String(O.loserId||"").trim();if(!F||!V)return null;const R=F===Z;if(!R&&V!==Z)return null;const A=R?V:F;return{pairKey:q,arenaName:Y,profileId:Z,opponentId:A,opponentName:H.get(A)||"Sin nombre",winnerId:F,loserId:V}},j=Object.entries($).map(E).filter(Boolean).sort((q,O)=>q.opponentName.localeCompare(O.opponentName,"es",{sensitivity:"base"}));return{arenaName:Y,wins:j.filter((q)=>q.winnerId===Z),losses:j.filter((q)=>q.loserId===Z)}},Z0=[...J0].sort((J,X)=>{const Y=uY(J,XJ),Z=uY(X,XJ);let $=0;if(typeof Y==="string"||typeof Z==="string")$=String(Y).localeCompare(String(Z),"es",{sensitivity:"base"});else $=Y-Z;if($===0)return(J.nombre||"").localeCompare(X.nombre||"","es",{sensitivity:"base"});return PJ==="asc"?$:-$}),kX=!TJ;return Q("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[TJ&&Q("aside",{className:"hud-frame hud-frame--panel w-72 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-8 z-20 shadow-xl overflow-y-auto relative",children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"mb-12 text-center flex-shrink-0",children:[Q("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>Q("button",{onClick:()=>{C(J.id);qQ(null);OQ(null);l(null);bJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-4 px-6 py-4 rounded-[2rem] text-sm transition-all ${U===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[Q(n,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>BY(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[Q(n,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[Q("button",{onClick:()=>jZ((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":TJ?"Replegar menú lateral":"Desplegar menú lateral",title:TJ?"Replegar menú lateral":"Desplegar menú lateral",children:Q(n,{name:TJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${TJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),h&&Q("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${TJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>bJ(""),role:"presentation",children:Q("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[Q("button",{type:"button",onClick:()=>bJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:Q(n,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[Q("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:Q("img",{src:h.fotos?.[0]||"https://via.placeholder.com/500x700",alt:h.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-6",children:[Q("div",{children:[Q("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),Q("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:h.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!h?.isAnonymousGallery&&Q("div",{className:"grid grid-cols-1 gap-4",children:[Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Profesión"},void 0,!1,void 0,this),Q("strong",{children:h.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),Q("strong",{children:`${h.nacionalidad||"No definida"} - ${h.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),Q("strong",{children:`${h.fechaNacimiento||"No informado"} - ${gJ(h.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Estatura"},void 0,!1,void 0,this),Q("strong",{children:h.estaturaCm?`${h.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"pt-2",children:Q("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!h?.isAnonymousGallery&&Q("button",{type:"button",onClick:()=>{NQ({isOpen:!0,profile:h})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{const J=B.current,X=J&&!J.closed?J:window.open("","_blank");B.current=X;hX({targetWindow:X,profileName:h?.nombre||"",profession:h?.profesion||"",photos:[...(h?.galeria?.fotos||[]).map((Y,Z)=>({...d(Y,"image"),sourceTag:"fotos",sourceIndex:Z})),...(h?.galeria?.videos||[]).map((Y,Z)=>({...d(Y,"video"),sourceTag:"videos",sourceIndex:Z}))],editingId:h?.firebaseId||h?.id||"",battlePhotoPrefs:h?.batallaFotosPreferidas||h?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:h?.fotos?.[0]||""});X?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!h?.isAnonymousGallery&&Q(GJ,{children:[Q("button",{type:"button",onClick:()=>{bJ("");IQ(h)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>AX(h),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="TALLER"&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"space-y-2",children:Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"max-w-2xl",children:Q("input",{id:"tallerSearchInput",type:"text",value:jX,onChange:(J)=>XY(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:Q("button",{type:"button",onClick:()=>LZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${lJ?"btn-metal--danger":""}`,children:["Fotos incompletas ",lJ?"(Activo)":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:pQ.map((J)=>{const X=QJ(J.profesion),Y=GQ&&GQ===J.firebaseId,Z=V0(J),$=FZ===(J.firebaseId||J.nombre);return Q("button",{type:"button",onClick:()=>{LQ("");bJ("");IQ(J)},onContextMenu:(H)=>{if(!lJ||!Z.length)return;H.preventDefault();H.stopPropagation();LQ((E)=>E===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!lJ||!Z.length)return;clearTimeout(vQ.current);vQ.current=setTimeout(()=>{LQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(vQ.current)},onTouchMove:()=>{clearTimeout(vQ.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Y?"taller-card--selected":""}`,children:[Q("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:Q("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:X.color,textShadow:`0 0 12px ${X.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),$&&Q("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(H)=>{H.preventDefault();H.stopPropagation();UZ(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[Q("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),Q("ul",{className:"space-y-1 mb-2",children:Z.map((H)=>Q("li",{className:"leading-tight",children:["• ",H]},H,!0,void 0,this))},void 0,!1,void 0,this),Q("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!pQ.length&&Q("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),Q(R0,{isOpen:_Z,profile:h,onClose:()=>OZ(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="anonimo"&&!e&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:Q("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),Q("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),Q("div",{className:"mt-8 grid gap-4 md:grid-cols-2",children:[Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:qX,onChange:(J)=>{YY(J.target.value);_X("")},children:[Q("option",{value:"url",children:"Origen: URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Origen: Archivo local"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:qY,onChange:(J)=>qZ(J.target.value),children:JJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),qX==="url"?Q("input",{placeholder:"https://ejemplo.com/media.jpg o YouTube/Vimeo",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:ZY,onChange:(J)=>$Y(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>jY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:_Y,onChange:(J)=>OY(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:RZ,className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar en anónimo"},void 0,!1,void 0,this),WY&&Q("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:WY},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="EXPLORAR"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((L||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const X=(L||[]).filter((Z)=>String(Z?.profesion||"").trim()===J).length,Y=RQ(J);return Q("div",{onClick:()=>qQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Y.baseColor,"--folder-glow":Y.glowColor},children:[Q("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:z0(J)},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[X," ",X===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e&&Q("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[Q("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":U==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":RQ(e).baseColor},children:[Q("div",{className:"flex items-center gap-3",children:[Q("button",{onClick:()=>qQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:Q("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>BY(U==="CATEGORIAS"?"":e),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:U==="CATEGORIAS"?c.find((J)=>J.firebaseId===e)?.label||"Archivo del Reino":e},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(L||[]).filter((J)=>{if(!J)return!1;if(U==="CATEGORIAS")return uQ(J).includes(e);return String(J.profesion||"").trim().toLowerCase()===String(e).trim().toLowerCase()}).map((J)=>{const X=Number(typeof VJ==="function"?VJ(J):0)||0,Y=X>=95?"card-score-badge--gold":X>=86?"card-score-badge--diamond":X>=75?"card-score-badge--fire":"",Z=QJ(J.profesion);return Q("div",{onClick:()=>{HQ(null);XY("");bJ(J.firebaseId||"")},onContextMenu:($)=>dZ($,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":Z.color,"--card-neon-glow":Z.sombra},children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q("img",{src:HJ(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:AJ},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 left-3 z-20",children:[Q("button",{type:"button",onClick:($)=>{$.stopPropagation();AQ("");jQ(J);HQ((H)=>H===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:Q(n,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),XZ===J.firebaseId&&Q("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:($)=>$.stopPropagation(),children:[Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{HQ(null);IQ(J)},children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{AX(J);HQ(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:($)=>{$.stopPropagation();NQ({isOpen:!0,profile:J})},className:`card-score-badge ${Y} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[X>=75&&X<=85&&Q("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),Q("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),Q("span",{className:"card-score-badge__value text-lg font-black",children:typeof VJ==="function"?VJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-4 left-4 right-4",children:Q("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[Q("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,Q("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof gJ==="function"?gJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-between items-center mt-1",children:[Q("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),Q("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),QX&&LJ&&Q("div",{ref:D,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${sX.y}px`,left:`${sX.x}px`},children:[Q("button",{type:"button",onClick:nZ,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:pZ,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="GALERIA"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${fQ} · ${hZ}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:[j0.map((J)=>Q("button",{type:"button",onClick:()=>$Z(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${b===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:cY[J]},J,!1,void 0,this)),Q("button",{type:"button",onClick:()=>WX(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[Q("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",mJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:FQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:y.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:JJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:zZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),b!=="PERSONAJE"&&cQ&&!yJ?Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:KJ.map((J)=>Q("button",{type:"button",onClick:()=>{OQ(J);l(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?Q("img",{src:HJ(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:AJ},void 0,!1,void 0,this):Q("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:Q(n,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[Q("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),Q("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):Q(GJ,{children:[b!=="PERSONAJE"&&cQ&&Q("div",{className:"flex items-center gap-3",children:Q("button",{type:"button",onClick:()=>{OQ(null);l(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[Q(n,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),b==="PERSONAJE"&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[Q("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),Q("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>GZ(J.target.value),children:[Q("option",{value:"",disabled:!0,children:NY.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),NY.map((J)=>Q("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),RJ.length>0?Q("div",{className:"flex flex-wrap gap-2",children:RJ.map((J)=>Q("button",{type:"button",onClick:()=>SZ(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,Q(n,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),b==="ETIQUETA"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:JJ.map((J)=>Q("button",{onClick:()=>xZ(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:eQ(J,nJ.includes(J)),children:[J," · ",(CX[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),b==="PERSONAJE"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[Q("button",{onClick:()=>ZX("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:eQ("INICIAL",NJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),JJ.map((J)=>{return Q("button",{onClick:()=>ZX(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:eQ(J,NJ===J),children:[J," · ",NZ[J]||0]},J,!0,void 0,this)}),Q("button",{onClick:()=>ZX("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:eQ("100",NJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{type:"button",onClick:()=>kY(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!y.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[Q(n,{name:"play",size:14},void 0,!1,void 0,this),"Play ",yJ?.nombre||fQ]},void 0,!0,void 0,this),Q("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[Q("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),Q("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:HX,onChange:(J)=>HZ(Number(J.target.value)),children:[3,5,7,10].map((J)=>Q("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),y.length===0?Q("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[Q("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:Q(n,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),Q("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:b==="ETIQUETA"&&nJ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q(GJ,{children:[Q("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:RX.map((J,X)=>{const Y=cJ(J.label),Z=RQ(J.profesion);return Q("button",{type:"button",onClick:()=>kY(X),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${Z.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},onMouseEnter:($)=>{$.currentTarget.style.transform="translateY(-2px) scale(1.01)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${Z.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${Z.glowColor} 52%, transparent)`},onMouseLeave:($)=>{$.currentTarget.style.transform="translateY(0) scale(1)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},children:Q("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const $=eJ(J.url);if($)return Q("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[Q("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:$.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return Q("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():Q("img",{src:HJ(J.url,JQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:AJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Y.bg,borderColor:Y.border,color:Y.text,boxShadow:`0 0 10px ${Y.glow}, 0 0 24px color-mix(in srgb, ${Y.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:Q("div",{className:"flex items-end justify-between gap-3",children:[Q("div",{className:"min-w-0 flex-1",children:[Q("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?Q("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),MZ&&Q("div",{className:"flex justify-center mt-8",children:Q("button",{type:"button",onClick:()=>oX((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",RX.length,"/",y.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),k&&Q("div",{ref:xQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:TJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:wY,children:[Q("button",{type:"button",onClick:wY,className:`btn-metal btn-metal--danger absolute ${MJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:Q("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${MJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!MJ&&Q("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[Q("div",{children:[Q("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:k.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[k.profesion,k.nacionalidad?` · ${k.nacionalidad}`:""]},void 0,!0,void 0,this),k.autor?Q("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",k.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"flex items-center gap-3",children:[y.length>1&&Q(GJ,{children:[Q("button",{type:"button",onClick:()=>KQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${pJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":pJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>pX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${EQ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":EQ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:k.type==="video"?"VIDEO":k.isGif?"GIF":"IMG"},void 0,!1,void 0,this),Q("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:cJ(k.label).bg,borderColor:cJ(k.label).border,color:cJ(k.label).text,boxShadow:`0 0 20px ${cJ(k.label).glow}`},children:k.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${MJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[k.type==="video"?(()=>{const J=eJ(k.url);if(J)return Q("iframe",{ref:FX,src:J.src,title:`${k.nombre} video`,className:`w-full ${MJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return Q("video",{ref:FX,src:k.url,controls:!0,playsInline:!0,muted:DX,autoPlay:pJ,onEnded:()=>{if(pJ&&y.length>1)sQ()},onError:()=>{if(y.length>1)sQ()},className:`w-full ${MJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():Q("img",{src:HJ(k.url,JQ),alt:`${k.nombre} - ${k.label||"galería"}`,ref:FX,className:`w-full ${MJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{AJ(J);if(y.length>1)sQ()}},void 0,!1,void 0,this),y.length>1&&Q(GJ,{children:Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();sQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!MJ&&Q("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[BJ+1," de ",y.length," archivos visibles"]},void 0,!0,void 0,this),Q("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[tX?Q(GJ,{children:[Q("input",{type:"url",value:rX,onChange:(J)=>wQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),Q("select",{value:aX,onChange:(J)=>kQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[Q("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),JJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:PZ,disabled:JY,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:JY?"Guardando...":"Guardar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{kQ(k?.label||"");wQ(k?.url||"");vJ("");iJ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:()=>iJ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[Q("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),Q("span",{children:k?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),tX&&eX&&Q("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:eX},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),OX&&Q("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:TJ?{left:"18rem"}:void 0,onClick:()=>WX(!1),children:Q("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 mb-5",children:[Q("div",{children:[Q("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[mJ.length," enlace",mJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>WX(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:Q("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!MY.length?Q("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:Q("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):MY.map((J)=>Q("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[Q("div",{className:"mb-4",children:[Q("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-3",children:J.fotos.map((X)=>{const Y=!!WZ[X.id],Z=!!EZ[X.id],$=LX[X.id]??X.url;return Q("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[Q("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:Q("img",{src:JQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-2 min-w-0",children:[Q("div",{className:"flex flex-wrap items-center gap-2",children:[Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",X.label||"Sin etiqueta"]},void 0,!0,void 0,this),Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:X.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"url",value:$,onChange:(H)=>vZ(X.id,H.target.value),placeholder:"https://...",readOnly:!Z,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!Z?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[Q("button",{type:"button",onClick:()=>bZ(X),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>GY(X.id,!0),disabled:Y,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>IZ(X),disabled:Y,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>gZ(X),disabled:Y,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&!e&&!N&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col gap-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:rZ,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),Q("button",{onClick:()=>rY((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),aY&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[Q("select",{value:yX,onChange:(J)=>eY(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:bX.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>eZ(yX,z,g),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!z,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{children:[Q("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!z?"Paso 1: elegí un modo de enfrentamiento":iQ&&!g?`Paso 2: elegí una opción de ${XQ(z)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${XQ(z)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!z&&Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:IX.map((J)=>Q("button",{onClick:()=>{_J(J.id);CJ(J.id==="GENERAL"?"all":"");G(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),z&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",XQ(z)]},void 0,!0,void 0,this),Q("button",{onClick:()=>{_J(null);CJ("");G(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),iQ&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",XQ(z)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Q0.map((J)=>Q("button",{onClick:()=>{CJ(J.key);G(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${g===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",Q("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),iQ&&!g&&Q("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[bX.map((J)=>{const X=YQ(J,z,g),Y=Boolean(ZJ?.[X]?.isFinished);return Q("button",{disabled:iQ&&!g,onClick:()=>{G(J);if(!ZJ[X])hY(J,z,g)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Y?"battle-mode-card--completed":""}`,children:[Q("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Y?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Y&&Q("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&N&&(()=>{const J=YQ(N,z,g),X=ZJ[J],Y=L.find((E)=>E.firebaseId===X?.championId),Z=L.find((E)=>E.firebaseId===X?.challengerId),$=Y?bY(N,Y.firebaseId):null,H=Z?bY(N,Z.firebaseId):null;return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:()=>G(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),Q("button",{onClick:()=>{G(null);_J(null);CJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),Q("button",{onClick:()=>QZ((E)=>!E),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),JZ&&Q("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const E=Object.keys(X?.matchups||{}).filter((j)=>!!X?.matchups?.[j]);if(!X||!E.length)return Q("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return Q("div",{className:"space-y-2",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),E.map((j)=>{const[q,O]=j.split("__"),F=L.find((A)=>A.firebaseId===q),V=L.find((A)=>A.firebaseId===O),R=F?.nombre||q,w=V?.nombre||O;return Q("button",{onClick:()=>mY(N,q,O,z,g),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:Q("span",{className:"text-xs text-white font-semibold",children:[R," vs ",w]},void 0,!0,void 0,this)},j,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),Q("div",{className:"min-w-0",children:[Q("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:N},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",XQ(z)]},void 0,!0,void 0,this),X?.activeGroupLabel&&Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:X.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!X&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),Q("button",{onClick:()=>hY(N,z,g),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&X.isFinished&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),Q("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Y&&Z&&!X.isFinished&&Q("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[Q("button",{onClick:()=>yY(N,Y.firebaseId,z,g),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":RQ(Y.profesion).baseColor},children:[Q("img",{src:lY(Y,N),alt:Y.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:AJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Y.nombre},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",SY(Y)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",$?.wins||0," · Batallas: ",$?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",$?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col items-center justify-center text-center",children:[Q("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{onClick:()=>yY(N,Z.firebaseId,z,g),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":RQ(Z.profesion).baseColor},children:[Q("img",{src:lY(Z,N),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:AJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",SY(Z)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),U==="RANKING"&&!e&&Q("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[Q("div",{className:"ranking-table-scroll",children:Q("table",{className:`w-full ${kX?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[Q("thead",{className:"theme-surface-soft",children:Q("tr",{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:Q("button",{type:"button",onClick:()=>aJ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",XJ==="nombre"?PJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>aJ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",XJ==="Rostro"?PJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>aJ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",XJ==="Cuerpo"?PJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>aJ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",XJ==="Actitud"?PJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),kX&&Q(GJ,{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>aJ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",XJ==="nacionalidad"?PJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>aJ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",XJ==="edad"?PJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("th",{className:"px-8 py-6 text-right",children:Q("div",{className:"flex flex-col items-end gap-1",children:[Q("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),Q("select",{value:XJ,onChange:(J)=>{dX(J.target.value);XX("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[Q("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),Q("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[Q("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:QQ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("tbody",{children:Z0.map((J,X)=>Q("tr",{onClick:()=>IQ(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${X===0?"podium-1":X===1?"podium-2":X===2?"podium-3":"hover:bg-white/5"}`,children:[Q("td",{className:"px-8 py-5",children:Q("span",{className:`font-black italic rock-carved-text ${X===0?"text-gold text-4xl":X===1?"text-silver text-3xl":X===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",X+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-8 py-5",children:Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:QJ(J.profesion).color,boxShadow:`0 0 10px ${QJ(J.profesion).sombra}`},children:Q("img",{src:HJ(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:AJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();_Q({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:hQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();_Q({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:yQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();_Q({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:mQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),kX&&Q(GJ,{children:[Q("td",{className:"px-4 py-5 text-center",children:[Q("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),Q("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[gJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-8 py-5 text-right",children:Q("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${X===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":X===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":X===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:Q("span",{className:`font-black leading-none ${X===0?"text-gold":X===1?"text-silver":X===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:X0(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),UJ.isOpen&&UJ.profile&&UJ.category&&(()=>{const J=Y0(UJ.profile.firebaseId,UJ.category),X=hJ[UJ.category]||[];return Q("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${TJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{_Q({isOpen:!1,profile:null,category:null});ZQ(null)},children:Q("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Y)=>Y.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[UJ.profile.nombre," · ",UJ.category]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>{_Q({isOpen:!1,profile:null,category:null});ZQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"mb-4",children:[Q("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:X.map((Y)=>Q("button",{type:"button",onClick:()=>{const Z=fY(UJ.profile.firebaseId,Y);ZQ(Z)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black",children:Y},`breakdown-item-${Y}`,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Q("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?Q("ul",{className:"space-y-2",children:J.wins.map((Y,Z)=>Q("li",{className:"text-sm text-emerald-200 font-semibold",children:Y},`win-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?Q("ul",{className:"space-y-2",children:J.losses.map((Y,Z)=>Q("li",{className:"text-sm text-rose-200 font-semibold",children:Y},`loss-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),JX?.arenaName&&Q("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[Q("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",JX.arenaName]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>ZQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Y)=>{const Z=Y==="wins",$=JX[Y]||[];return Q("div",{className:`rounded-xl border p-3 min-h-36 ${Z?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[Q("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${Z?"text-emerald-300":"text-rose-300"}`,children:Z?"Ganadas":"Perdidas"},void 0,!1,void 0,this),$.length?Q("ul",{className:"space-y-2",children:$.map((H,E)=>Q("li",{className:"flex items-center justify-between gap-2",children:[Q("span",{className:`text-sm font-semibold ${Z?"text-emerald-100":"text-rose-100"}`,children:H.opponentName},void 0,!1,void 0,this),Q("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await mY(H.arenaName,H.profileId,H.opponentId);const q=fY(UJ.profile.firebaseId,H.arenaName);ZQ(q)}catch(q){console.error("No se pudo eliminar la batalla del desglose:",q);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Y}-${H.pairKey}-${E}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:`text-xs ${Z?"text-emerald-200/70":"text-rose-200/70"}`,children:Z?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Y}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),YX.isOpen&&YX.profile&&(()=>{const J=YX.profile,X=TX(J),Y=Object.entries(hJ);return Q("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>NQ({isOpen:!1,profile:null}),children:Q("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:(Z)=>Z.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();NQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:QQ.map((Z)=>Q("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[Z,": ",Number(X[Z]||0).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Y.map(([Z,$])=>Q("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[Z,": ",RY(J,Z).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(Z)=>Z.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",VJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),U==="CATEGORIAS"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex justify-between items-end",children:[Q("div",{children:Q("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>{BX();DQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.length===0?Q("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:Q("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:c.map((J)=>Q("div",{onClick:()=>qQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[Q("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[Q("button",{onClick:(X)=>{X.stopPropagation();$J({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});DQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(n,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:(X)=>{X.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))uZ(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(n,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute inset-0",children:[Q("img",{src:HJ(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:AJ},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[Q("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[L.filter((X)=>uQ(X).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),mX&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{onClick:()=>xJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:Q(n,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:yZ,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 gap-16",children:Q("div",{className:"space-y-8",children:[Q("div",{className:"flex flex-col items-center gap-6",children:[Q("div",{className:"flex items-center gap-4 self-start",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:Q(n,{name:t?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:t?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),t&&Q("button",{type:"button",onClick:()=>{C0({...x,firebaseId:t})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[Q(n,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:x.fotos.length>0&&x.fotos[0]!==""?Q("img",{src:HJ(x.fotos[0],JQ),className:"w-full h-full object-cover",alt:"Preview",onError:AJ},void 0,!1,void 0,this):Q("div",{className:"text-center p-4",children:[Q(n,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[Q("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),gQ.completed.length>0?Q("ul",{className:"mt-3 space-y-1",children:gQ.completed.map((J)=>Q("li",{className:"text-xs text-emerald-100/90",children:[Q("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),gQ.missing.length>0?Q("ul",{className:"mt-3 space-y-1",children:gQ.missing.map((J)=>Q("li",{className:"text-xs text-amber-100/90",children:Q("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:x.nombre,onChange:(J)=>s({...x,nombre:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),Q("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:x.fotos[0]||"",onChange:(J)=>s((X)=>CY(X,J.target.value))},void 0,!1,void 0,this),Q("input",{type:"file",accept:"image/*,.gif",onChange:VZ,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),Q("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.fechaNacimiento,onChange:(J)=>s({...x,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),Q("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.estaturaCm,onChange:(J)=>s({...x,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.nacionalidad,onChange:(J)=>s({...x,nacionalidad:J.target.value})},void 0,!1,void 0,this),Q("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.ciudad,onChange:(J)=>s({...x,ciudad:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1 group",children:[Q("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),Q("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:x.profesion,onChange:(J)=>s({...x,profesion:J.target.value}),children:[Q("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),Q("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),Q("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),Q("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),Q("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),Q("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),Q("option",{value:"Periodista",className:"theme-surface-card",children:"\uD83D\uDC53 Periodista"},void 0,!1,void 0,this),Q("option",{value:"Bailarina",className:"theme-surface-card",children:"\uD83D\uDC83 Bailarina"},void 0,!1,void 0,this),Q("option",{value:"Atleta",className:"theme-surface-card",children:"\uD83C\uDFCB️‍♀️ Atleta"},void 0,!1,void 0,this),Q("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:Q(n,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex gap-4",children:[t&&Q("button",{type:"button",onClick:fZ,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:Q(n,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs",children:t?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),YZ&&Q("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:zX,children:Q("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"space-y-3",children:[Q("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),Q("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",Q("span",{className:"font-black text-white",children:LJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),cX&&Q("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:cX},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-end gap-3",children:[Q("button",{type:"button",onClick:zX,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:sZ,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),uX&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{type:"button",onClick:()=>{BX();DQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:Q(n,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:mZ,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[Q("div",{className:"space-y-8",children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:Q(n,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:M.label,onChange:(J)=>$J({...M,label:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"w-full",children:Q("div",{className:"space-y-1 w-full",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),Q("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:M.coverImg,onChange:(J)=>$J({...M,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-6",children:[Q("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[Q(n,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),Q("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:M.reglas.nacionalidades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>$J({...M,reglas:{...M.reglas,nacionalidades:M.reglas.nacionalidades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!M.reglas.nacionalidades.includes(J.target.value))$J({...M,reglas:{...M.reglas,nacionalidades:[...M.reglas.nacionalidades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),DZ.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:M.reglas.ciudades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>$J({...M,reglas:{...M.reglas,ciudades:M.reglas.ciudades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!M.reglas.ciudades.includes(J.target.value))$J({...M,reglas:{...M.reglas,ciudades:[...M.reglas.ciudades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),AZ.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:M.reglas.profesiones.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>$J({...M,reglas:{...M.reglas,profesiones:M.reglas.profesiones.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!M.reglas.profesiones.includes(J.target.value))$J({...M,reglas:{...M.reglas,profesiones:[...M.reglas.profesiones,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(gX).map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:M.reglas.edadMin,onChange:(J)=>$J({...M,reglas:{...M.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:M.reglas.edadMax,onChange:(J)=>$J({...M,reglas:{...M.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:M.reglas.caracteristica,onChange:(J)=>$J({...M,reglas:{...M.reglas,caracteristica:J.target.value}}),children:QQ.map((J)=>Q("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:M.reglas.operador,onChange:(J)=>$J({...M,reglas:{...M.reglas,operador:J.target.value}}),children:[Q("option",{children:"Superior a"},void 0,!1,void 0,this),Q("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:M.reglas.umbral,onChange:(J)=>$J({...M,reglas:{...M.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},M0=ReactDOM.createRoot(document.getElementById("root"));M0.render(Q(N0,{},void 0,!1,void 0,this));