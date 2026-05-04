import{jsxDEV as Q,Fragment as wJ}from"react/jsx-dev-runtime";const S0={apiKey:"AIzaSyAcW679YdIT03pyq8IgKKnR8oyO4_fvpFs",authDomain:"g2elite-a3b85.firebaseapp.com",databaseURL:"https://g2elite-a3b85-default-rtdb.firebaseio.com/",projectId:"g2elite-a3b85",storageBucket:"g2elite-a3b85.firebasestorage.app",messagingSenderId:"951346482286",appId:"1:951346482286:web:6001135252de2a4d982a7f"};if(!firebase.apps.length)firebase.initializeApp(S0);const M=firebase.database(),{useState:V,useEffect:d,useMemo:g,useRef:RJ}=React,JJ=["C","P","B","N","S","E","X"],NQ="anonimo/galeria",MJ="__anonimo_gallery__",x0=["PERSONAJE","ETIQUETA","GENERAL"],$Z={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},sJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],P0={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},cX=()=>sJ.reduce((j,O)=>{j[O.id]="";return j},{}),qJ=(j={})=>{const O=cX(),C=j&&typeof j==="object"?j:{};return Object.keys(O).reduce((T,L)=>{T[L]=typeof C[L]==="string"?C[L].trim():"";return T},{...O})},ZX=(j="")=>sJ.find((O)=>O.id===j),b0=(j="")=>P0[(j||"").trim().toLowerCase()]||"",$X={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},JQ=(j,O)=>{if(!O)return 0;return(j+O)%O},HZ=(j,O,C=!1)=>{const T=Array.isArray(O)?O.length:0;if(!T)return null;if(T===1)return 0;if(C){const L=O.map((b,f)=>({item:b,idx:f})).filter(({item:b,idx:f})=>f!==j&&b&&b.url).map(({idx:b})=>b);if(!L.length)return JQ((j??0)+1,T);return L[Math.floor(Math.random()*L.length)]}return JQ((j??0)+1,T)},dJ=(j)=>$X[j]||$X.DEFAULT,HX=(j,O=!1)=>{const C=j==="INICIAL"?$X.DEFAULT:j==="100"?$X.B:dJ(j);return{"--btn-neon-color":C.glow,borderColor:C.border,color:C.text,boxShadow:O?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${C.border}, 0 0 20px ${C.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${C.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${C.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${C.glow} 70%, transparent)`,filter:O?"brightness(1.14)":"brightness(1)"}},jZ=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,v0=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,I0=/\.gif(\?.*)?$/i,g0=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,h0=/vimeo\.com\/(?:video\/)?(\d+)/i,QQ=(j)=>{const O=(j||"").trim();if(!O)return null;const C=O.match(g0);if(C)return{provider:"youtube",src:`https://www.youtube.com/embed/${C[1]}`,title:"Video de YouTube"};const T=O.match(h0);if(T)return{provider:"vimeo",src:`https://player.vimeo.com/video/${T[1]}`,title:"Video de Vimeo"};return null},y0=["eporner.com"],qZ=(j="")=>{const O=String(j||"").trim();if(!O||O.startsWith("data:")||O.startsWith("blob:"))return!1;try{const T=new URL(O).hostname.toLowerCase();return y0.some((L)=>T===L||T.endsWith(`.${L}`))}catch{return!1}},HJ=(j="",O="")=>{const C=String(j||"").trim();if(!C||qZ(C))return O;return C},nJ=(j="",O="")=>{if(O==="video"||O==="image")return O;const C=(j||"").trim();if(jZ.test(C)||QQ(C))return"video";return"image"},sX=(j="")=>{return typeof j==="string"?j.trim():""},n=(j,O="")=>{if(typeof j==="string")return{url:HJ(j.trim(),""),label:"",type:nJ(j,O),autor:""};if(j&&typeof j==="object"){const C=HJ((j.url||"").trim(),"");return{url:C,label:JJ.includes(j.label)?j.label:"",type:nJ(C,j.type||O),autor:sX(j.autor)}}return{url:"",label:"",type:nJ("",O),autor:""}},m0=(j)=>n(j).url,_Z=(j)=>n(j).label,pJ=(j)=>n(j).type,dX=(j,O,C="image")=>Array.isArray(j?.[O])?j[O].map((T)=>n(T,C)).filter((T)=>T.url):[],u0=(j={})=>({firebaseId:MJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:dX(j,"fotos","image"),gifs:dX(j,"gifs","image"),videos:dX(j,"videos","video")},batallaFotosPreferidas:cX(),puntuaciones:MQ(),isAnonymousGallery:!0}),f0=(j={})=>{if(j?.isAnonymousGallery||j?.firebaseId===MJ)return"anonimo";return j?.firebaseId||""},c0=(j={})=>{const O=HJ(String(j?.fotos?.[0]||"").trim(),""),C=qJ(j?.batallaFotosPreferidas||j?.galeria?.battlePhotoPreferences||{});if(!O)return!1;return sJ.filter((T)=>T.id!=="perfil").every((T)=>Boolean(String(C?.[T.id]||"").trim()))},s0=(j={})=>{const O=[],C=HJ(String(j?.fotos?.[0]||"").trim(),""),T=qJ(j?.batallaFotosPreferidas||j?.galeria?.battlePhotoPreferences||{});if(!C)O.push("Perfil");sJ.filter((L)=>L.id!=="perfil").forEach((L)=>{if(!String(T?.[L.id]||"").trim())O.push(L.label)});return O},d0=(j=null)=>{if(!j)return;const O=window.open("","_blank");if(!O)return;const C=j?.firebaseId||j?.id||"",T=Array.isArray(j?.galeria?.fotos)?j.galeria.fotos.map((R)=>n(R,"image")).filter((R)=>R.url).map((R,N)=>({...R,sourceTag:"fotos",sourceIndex:N})):[],L=T.filter((R)=>R.type==="image"&&R.sourceTag==="fotos"),b=qJ(j?.batallaFotosPreferidas||j?.galeria?.battlePhotoPreferences||{}),f=HJ(String(j?.fotos?.[0]||j?.foto||"").trim(),""),QJ=T.filter((R)=>R.type==="image"&&R.url).reduce((R,N)=>{R[N.url]=N;return R},{}),c=T.length?T.map((R,N)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${R.url}"
                        data-label="${R.label||""}"
                        data-index="${R.sourceIndex}"
                        data-tag="${R.sourceTag}"
                        data-media-type="${R.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${R.url}" alt="Multimedia ${N+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${R.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',P=L.length?L.map((R,N)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${R.url}"
                        data-label="${R.label||""}"
                        data-index="${R.sourceIndex}"
                        data-tag="${R.sourceTag}"
                        data-media-type="${R.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${R.url}" alt="Imagen rota ${N+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${R.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',U=sJ.map((R)=>{const N=R.id==="perfil",k=N?f:b[R.id]||"",z=k?N?{url:k}:QJ[k]||{url:k,label:"",sourceIndex:-1}:null,_J=Boolean(k);return`
                    <div class="multimedia-slot-card ${_J?"is-assigned":"is-missing"}" data-slot-id="${R.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${R.label}</span>
                            <span class="multimedia-slot-state">${_J?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${_J?`<img src="${z.url}" alt="${R.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!N?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${R.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${R.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");O.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${j?.nombre||"Personaje"}</title>
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
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${j?.nombre||"Personaje"}</p>
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
                            const profileId = ${JSON.stringify(C)};
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
                            const slotConfigById = ${JSON.stringify(sJ.reduce((R,N)=>{R[N.id]=N;return R},{}))};
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
            `);O.document.close()},n0=({isOpen:j=!1,profile:O=null,onClose:C=()=>{}})=>{const[T,L]=V(!0),[b,f]=V(!0);d(()=>{if(!j)return;L(!0);f(!0)},[j,O?.firebaseId]);if(!j||!O)return null;const QJ=Array.isArray(O?.galeria?.fotos)?O.galeria.fotos.map((P)=>n(P,"image")).filter((P)=>P.url):[],c=Object.entries(O?.puntuaciones||{}).map(([P,U])=>({label:P,value:Number(U)||0})).sort((P,U)=>U.value-P.value).slice(0,5);return Q("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:C,role:"presentation",children:Q("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(P)=>P.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[Q("button",{type:"button",onClick:C,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),Q("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),Q("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:O?.nombre||"Personaje"},void 0,!1,void 0,this),Q("div",{className:"mt-6 space-y-4",children:[Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>L((P)=>!P),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"Galería"},void 0,!1,void 0,this),Q("span",{children:T?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),T&&Q("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:QJ.length?QJ.map((P,U)=>Q("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:Q("img",{src:P.url,alt:`Multimedia ${U+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${P.url}-${U}`,!1,void 0,this)):Q("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>f((P)=>!P),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"5 Principales"},void 0,!1,void 0,this),Q("span",{children:b?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),b&&Q("div",{className:"px-4 pb-4 space-y-2",children:c.length?c.map((P)=>Q("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[Q("span",{className:"text-sm text-slate-200 uppercase",children:P.label},void 0,!1,void 0,this),Q("strong",{className:"text-cyan-200",children:P.value},void 0,!1,void 0,this)]},P.label,!0,void 0,this)):Q("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},WZ=async(j="",{timeoutMs:O=12000,retries:C=1}={})=>{const T=String(j||"").trim();if(!T)return!0;const L=()=>new Promise((b)=>{const f=new Image;let QJ=!1;const c=(U)=>{if(QJ)return;QJ=!0;f.onload=null;f.onerror=null;b(Boolean(U))},P=window.setTimeout(()=>c(!0),O);f.onload=()=>{clearTimeout(P);const U=Number(f.naturalWidth)>0&&Number(f.naturalHeight)>0;c(!U)};f.onerror=()=>{clearTimeout(P);c(!0)};f.src=T});for(let b=0;b<=C;b+=1)if(!await L())return!1;return!0},OZ=(j,O)=>{const C=(O||"").trim().toLowerCase(),T=Array.isArray(j?.galeria?.fotos)?j.galeria.fotos.map((k)=>n(k,"image")).filter((k)=>k.type==="image"&&k.url):[],b=HJ(j?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(C))return b;const QJ=(k=[])=>{const z=T.filter((h)=>k.includes(_Z(h)));if(!z.length)return"";const _J=Math.floor(Math.random()*z.length);return z[_J]?.url||""},c=b0(C),P=ZX(c);if(!P)return b;const R=qJ(j?.batallaFotosPreferidas)[c];if(R){if(T.some((z)=>z.url===R))return R}return QJ(P.labels)||b},p0=(j="")=>I0.test((j||"").trim()),XQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",nX=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${XQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,KJ=(j)=>{const O=j?.currentTarget||j?.target;if(!O||O.dataset.fallbackApplied==="true")return;O.dataset.fallbackApplied="true";O.src=XQ;O.style.objectFit="contain";O.style.padding="12px";O.style.background="#020617";O.alt="Imagen no disponible"},Z1="g2_elite_database_v4",$1="g2_elite_categories_v4",YQ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],pX=[...YQ],iX=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],i0=iX.map((j)=>j.id),ZQ=(j="")=>{return iX.find((C)=>C.id===j)?.label||"General"},l0=(j="")=>{const O=String(j||"").trim();if(!O)return"";return encodeURIComponent(O.toLowerCase())},o0=(j="")=>{const O=String(j||"").trim();if(!O)return"";try{return decodeURIComponent(O).toLowerCase()}catch{return O.toLowerCase()}},$Q=(j,O="GENERAL",C="")=>{const T=String(j||"").trim(),L=String(O||"GENERAL").trim().toUpperCase(),b=l0(C);if(!T)return"";return`${L}::${b||"all"}::${T}`},OJ=(j="")=>String(j||"").trim(),EZ=(j="")=>{const O=String(j||"").split("::");if(O.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const C=O.slice(2).join("::");return{scopeId:String(O[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:o0(O[1]||"all")||"all",arenaName:String(C||"").trim()}},MQ=()=>YQ.reduce((j,O)=>{j[O]=0;return j},{}),LZ=[],lX={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},Periodista:{glyph:"quill",color:"rgba(234, 179, 8, 0.8)",tailwind:"yellow-500"},Bailarina:{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Atleta:{glyph:"shield",color:"rgba(59, 130, 246, 0.8)",tailwind:"blue-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},H1=(j="")=>{const O=String(j||"").toLowerCase();if(O.includes("cantante"))return"crown";if(O.includes("nsfw"))return"torch";if(O.includes("actriz")||O.includes("actor"))return"theater";if(O.includes("modelo"))return"floron";if(O.includes("influencer"))return"sigil";if(O.includes("periodista"))return"quill";if(O.includes("bailarina"))return"floron";if(O.includes("atleta"))return"shield";return"shield"},t0=(j="")=>{const O=String(j||"").toLowerCase();if(O.includes("cantante"))return"\uD83C\uDFA4";if(O.includes("nsfw"))return"\uD83D\uDD25";if(O.includes("actriz")||O.includes("actor"))return"\uD83C\uDFAC";if(O.includes("modelo"))return"\uD83D\uDC60";if(O.includes("influencer"))return"\uD83D\uDCF1";if(O.includes("periodista"))return"\uD83D\uDC53";if(O.includes("bailarina"))return"\uD83D\uDC83";if(O.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},KQ=(j="")=>{const O=String(j||"").trim(),C=lX[O]||lX.Otro,T=String(C?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),L=String(C?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:T,glowColor:L}},j1=({variant:j="sigil",size:O=18,className:C="",tint:T="currentColor"})=>{const L={width:O,height:O,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:C};if(j==="crown")return Q("svg",{...L,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),Q("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(j==="shield")return Q("svg",{...L,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),Q("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(j==="floron")return Q("svg",{...L,stroke:T,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 4v16"},void 0,!1,void 0,this),Q("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),Q("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),Q("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(j==="quill")return Q("svg",{...L,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),Q("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(j==="torch")return Q("svg",{...L,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),Q("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),Q("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(j==="theater")return Q("svg",{...L,stroke:T,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),Q("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return Q("svg",{...L,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),Q("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},p=({name:j,size:O=20,className:C=""})=>{return Q("i",{"data-lucide":j.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:O,height:O},className:`inline-block ${C}`},void 0,!1,void 0,this)},oX=({targetWindow:j,profileName:O,profession:C,photos:T,editingId:L,battlePhotoPrefs:b={},profilePhotoUrl:f=""})=>{if(!j||j.closed)return;const QJ=qJ(b),c=HJ(String(f||"").trim(),""),P=(T||[]).map((U,R)=>{const N=n(U);return{...N,sourceTag:U?.sourceTag||(N.type==="video"?"videos":"fotos"),sourceIndex:typeof U?.sourceIndex==="number"?U.sourceIndex:R}}).filter((U)=>U.url);j.document.open();j.document.write(`
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
                <h1>Galería de ${O}</h1>
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
                    ${sJ.map((U)=>{const R=U.id==="perfil",N=R?c:QJ[U.id]||"",k=Boolean(N),z=!R;return`
                            <div class="gallery-slot-card" data-slot-id="${U.id}" style="border:1px solid ${k?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${k?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${k?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${k?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${U.label}</div>
                                <div style="font-size:11px; color:${k?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${k?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${k?`<img src="${N}" alt="Vista previa ${U.label}" onerror="${nX}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
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
                    ${P.length?P.map((U,R)=>{const N=m0(U),k=_Z(U),z=dJ(k),_J={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},h=_J[C?.toUpperCase()]||_J.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${R}"
                            data-source-index="${U.sourceIndex}"
                            data-media-type="${pJ(U)}"
                            data-url="${N}"
                            data-compatible-slots="${k}"
                            draggable="${pJ(U)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${h.color};
                                box-shadow: 0 0 15px ${h.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${pJ(U)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${h.color}, inset 0 0 15px ${h.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${h.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${U.sourceIndex}, mediaType: '${pJ(U)}', id: '${L}'}, '*');"
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
                        ${pJ(U)==="video"?(()=>{const DJ=QQ(N);if(DJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${DJ.provider.toUpperCase()}</div></div>`;return`<video src="${N}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${N}" alt="Imagen de la galería" onerror="${nX}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${pJ(U)==="video"?"VIDEO":"IMG"}</div>
                        ${k?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${z.bg}; border: 1px solid ${z.border}; color: ${z.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${z.glow}, 0 0 24px ${z.glow}; text-shadow: 0 0 10px ${z.glow}; backdrop-filter: blur(8px);">${k}</div>`:""}
                        ${U.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${k?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${U.autor}</div>`:""}
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
                        ${P.map((U,R)=>{const N=pJ(U),k=QQ(U.url);return`
                            <div class="viewer-slide" id="viewer-slide-${R}">
                                ${N==="video"?k?`<iframe src="${k.src}" title="${k.title} ${R+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${U.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${U.url}" alt="Vista completa ${R+1}" onerror="${nX}" />`}
                            </div>`}).join("")}
                    </div>
                </div>

                <script>
                    const viewer = document.getElementById('fullscreenViewer');
                    const viewerStage = document.getElementById('viewerStage');
                    const galleryGrid = document.getElementById('galleryGrid');
                    const viewerSlides = Array.from(document.querySelectorAll('.viewer-slide'));
                    const viewerNextButton = document.getElementById('viewerNext');
                    const viewerPlayToggleButton = document.getElementById('viewerPlayToggle');
                    const viewerRandomToggleButton = document.getElementById('viewerRandomToggle');
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
        `);j.document.close()},a0=()=>{const[j,O]=React.useState(null),C=RJ(null),T=RJ(null),[L,b]=V([]),f={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},QJ=(J="")=>{const X=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return f[X]||f.DEFAULT},[c,P]=V(LZ),[U,R]=V("EXPLORAR"),[N,k]=V(null),[z,_J]=V(null),[h,DJ]=V(""),[ZJ,GJ]=V({}),[EJ,vJ]=V({}),[FZ,UZ]=V(!1),[tX,VZ]=V(pX[0]||""),[wQ,HQ]=V(null),[CZ,BZ]=V(!1),[aX,IJ]=V(!1),[rX,GQ]=V(!1),[t,jQ]=V(null),[RZ,qQ]=V(null),[LJ,_Q]=V(null),[DZ,eX]=V(!1),[JY,kQ]=V(""),[e,WQ]=React.useState(null),[jX,SQ]=V(!1),[QY,TZ]=V({x:0,y:0}),[XJ,XY]=V("promedio"),[gJ,qX]=V("desc"),[_X,AZ]=V(!1),[UJ,OQ]=V({isOpen:!1,profile:null,category:null}),[WX,xQ]=V({isOpen:!1,profile:null}),[kJ,OX]=V("INICIAL"),[v,zZ]=V("GENERAL"),[VJ,l]=V(null),[PQ,EQ]=V(null),[LQ,EX]=V([]),[iJ,YY]=V([]),[TJ,FQ]=V(!1),[SJ,LX]=V(!1),[AJ,ZY]=V(!1),[FX,NZ]=V(5),[$Y,HY]=V(20),[CJ,MZ]=V(!0),[jY,lJ]=V(!1),[qY,bQ]=V(""),[_Y,vQ]=V(""),[WY,hJ]=V(""),[OY,EY]=V(!1),[UX,LY]=V(""),[VX,FY]=V("url"),[UY,VY]=V(""),[CY,BY]=V(null),[RY,KZ]=V(JJ[0]),[DY,TY]=V(""),[AY,CX]=V(""),[oJ,wZ]=V([]),[zY,NY]=V(""),[MY,KY]=V(""),[wY,IQ]=V(""),[BX,GZ]=V(!1),[RX,kZ]=V(""),[DX,SZ]=V(""),[gQ,yJ]=V(""),[xZ,PZ]=V(!1),[TX,AX]=V(!1),[GY,zX]=V({}),[NX,kY]=V({}),[bZ,hQ]=V({}),[vZ,SY]=V({}),[tJ,IZ]=V(!1),[yQ,gZ]=V(!1),[hZ,UQ]=V(""),mJ=RJ(null),mQ=RJ(null),MX=RJ(null),VQ=RJ(null),CQ=RJ(null),uQ=RJ(!1),fQ=RJ(null),cQ=RJ(!1),xY=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),sQ=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:cX(),puntuaciones:MQ()}),[x,s]=V(sQ);d(()=>{if(!z){if(h)DJ("");return}if(z==="GENERAL"&&h!=="all")DJ("all")},[z,h]);const KX=(J={})=>{const X=sQ(),Y=J&&typeof J==="object"?J:{},Z=Y?.puntuaciones&&typeof Y.puntuaciones==="object"?{...X.puntuaciones,...Y.puntuaciones}:X.puntuaciones;return{...Y,...X,nombre:typeof Y.nombre==="string"?Y.nombre:"",nacionalidad:typeof Y.nacionalidad==="string"?Y.nacionalidad:"",ciudad:typeof Y.ciudad==="string"?Y.ciudad:"",profesion:typeof Y.profesion==="string"?Y.profesion:"",fechaNacimiento:typeof Y.fechaNacimiento==="string"?Y.fechaNacimiento:"",estaturaCm:Y.estaturaCm===void 0||Y.estaturaCm===null?"":Y.estaturaCm,fotos:Array.isArray(Y.fotos)?Y.fotos:[],galeria:{fotos:Array.isArray(Y?.galeria?.fotos)?Y.galeria.fotos:[],gifs:Array.isArray(Y?.galeria?.gifs)?Y.galeria.gifs:[],videos:Array.isArray(Y?.galeria?.videos)?Y.galeria.videos:[]},batallaFotosPreferidas:qJ(Y?.batallaFotosPreferidas),puntuaciones:Z}},dQ=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===MJ)return;s(KX(J));jQ(J.firebaseId||J.id||null);IJ(!0)},yZ=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const Y=C.current,Z=Y&&!Y.closed?Y:window.open("","_blank");C.current=Z;oX({targetWindow:Z,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map(($,H)=>({...n($,"image"),sourceTag:"fotos",sourceIndex:H})),...(J?.galeria?.videos||[]).map(($,H)=>({...n($,"video"),sourceTag:"videos",sourceIndex:H}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});Z?.focus();yJ("");UQ("")},PY=(J="")=>{if(U==="anonimo")return;const X=String(J||"").trim();jQ(null);s({...sQ(),profesion:X});IJ(!0)},nQ=g(()=>{const X=[{key:"nombre",label:"Nombre",value:x?.nombre},{key:"fotos.0",label:"Foto principal",value:x?.fotos?.[0]},{key:"profesion",label:"Profesión",value:x?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:x?.nacionalidad},{key:"ciudad",label:"Ciudad",value:x?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:x?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:x?.estaturaCm}].map((Y)=>{const Z=typeof Y.value==="string"?Y.value.trim():Y.value,$=!(Z===""||Z===void 0||Z===null),H=Y.key==="fotos.0"?$?"SI":"NO":$?String(Z):"Sin completar";return{...Y,isComplete:$,preview:H}});return{completed:X.filter((Y)=>Y.isComplete),missing:X.filter((Y)=>!Y.isComplete)}},[x]),e0=async({profileId:J,url:X,tag:Y="fotos",label:Z="",type:$="image",autor:H=""})=>{const E=(X||"").trim(),q=JJ.includes(Z)?Z:"",_=nJ(E,$);if(!J||!E)return[];const W=M.ref(`perfiles/${J}/galeria/${Y}`),D=[...(await W.once("value")).val()||[],{url:E,label:q,type:_,autor:sX(H)}];await W.set(D);if(J===t)s((G)=>({...G,galeria:{...G.galeria||{fotos:[],gifs:[],videos:[]},[Y]:D}}));return D},mZ=async({profileId:J,sourceTag:X,sourceIndex:Y,label:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=JJ.includes(Z)?Z:"",H=M.ref(`perfiles/${J}/galeria/${X}`),E=await H.once("value"),q=Array.isArray(E.val())?E.val():[];if(!q[Y])return;const _=[...q],W=n(_[Y],X==="videos"?"video":"image");_[Y]={...W,label:$};await H.set(_);if(J===t)s((F)=>({...F,galeria:{...F.galeria||{fotos:[],gifs:[],videos:[]},[X]:_}}))},bY=async({profileId:J,sourceTag:X,sourceIndex:Y,url:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=(Z||"").trim();if(!$)return;const H=M.ref(`perfiles/${J}/galeria/${X}`),E=await H.once("value"),q=Array.isArray(E.val())?E.val():[];if(!q[Y])return;const _=[...q],W=X==="videos"?"video":"image",F=n(_[Y],W);_[Y]={...F,url:$,type:nJ($,W)};await H.set(_);if(J===t)s((B)=>({...B,galeria:{...B.galeria||{fotos:[],gifs:[],videos:[]},[X]:_}}))},uZ=async({profileId:J,sourceTag:X,sourceIndex:Y})=>{if(!J||!X||!Number.isInteger(Y))return;const Z=M.ref(`perfiles/${J}/galeria/${X}`),$=await Z.once("value"),H=Array.isArray($.val())?$.val():[],E=H[Y];if(!E)return;const q=H.filter((W,F)=>F!==Y);await Z.set(q);const _=n(E,X==="videos"?"video":"image").url;if(_){const W=M.ref(`perfiles/${J}/batallaFotosPreferidas`),F=await W.once("value"),D={...qJ(F.val())};let G=!1;Object.keys(D).forEach((A)=>{if(D[A]===_){D[A]="";G=!0}});if(G)await W.set(D)}if(J===t)s((W)=>({...W,galeria:{...W.galeria||{fotos:[],gifs:[],videos:[]},[X]:q},batallaFotosPreferidas:(()=>{const F=qJ(W.batallaFotosPreferidas);if(!_)return F;const B={...F};Object.keys(B).forEach((D)=>{if(B[D]===_)B[D]=""});return B})()}))},vY=(J)=>new Promise((X,Y)=>{const Z=new FileReader;Z.onload=()=>X(String(Z.result||""));Z.onerror=()=>Y(new Error("No se pudo leer el archivo."));Z.readAsDataURL(J)}),IY=(J,X)=>{const Y=String(X||"").trim(),Z=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Y)return{...J,fotos:[""]};const H=Z.some((E)=>n(E,"image").url===Y)?Z:[...Z,{url:Y,label:"C",type:"image"}];return{...J,fotos:[Y],galeria:{...J.galeria||{},fotos:H}}},fZ=async(J)=>{const X=J.target.files?.[0];if(!X)return;try{const Y=await vY(X);s((Z)=>IY(Z,Y))}catch(Y){console.error("Error al cargar foto de perfil local:",Y)}finally{J.target.value=""}},cZ=async({url:J,label:X,autor:Y=""})=>{const Z=String(J||"").trim();if(!Z)throw new Error("Ingresá una URL o seleccioná un archivo.");const $=JJ.includes(X)?X:"",H=nJ(Z);if(!(H==="image"||jZ.test(Z)||Boolean(QQ(Z))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const q=H==="video"?"videos":"fotos",_=M.ref(`${NQ}/${q}`),W=await _.once("value"),B=[...Array.isArray(W.val())?W.val():[],{url:Z,label:$,type:H,autor:String(Y||"").trim()}];await _.set(B)},sZ=async()=>{CX("");try{let J=String(UY||"").trim();if(VX==="file"){if(!CY)throw new Error("Seleccioná un archivo local.");J=await vY(CY)}await cZ({url:J,label:RY,autor:DY});VY("");BY(null);TY("");FY("url")}catch(J){CX(J?.message||"No se pudo guardar en galería anónima.")}},dZ=async()=>{const J=String(zY||"").trim(),X=String(MY||"").trim();IQ("");if(!J||!X){IQ("Completá nombre y URL del audio.");return}if(!v0.test(X)){IQ("La URL debe apuntar a un archivo de audio válido.");return}try{const Y=M.ref(`${NQ}/audios`),Z=await Y.once("value"),H=[...Array.isArray(Z.val())?Z.val():[],{nombre:J,url:X}];await Y.set(H);NY("");KY("")}catch(Y){IQ("No se pudo guardar el audio en Firebase.")}},J1=async(J,X)=>{X.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await M.collection("galeria").doc(J).delete()}catch(Y){console.error("Error al borrar de Firebase:",Y)}},[K,$J]=V(xY()),wX=()=>$J(xY());d(()=>{if(window.lucide)window.lucide.createIcons()},[U,aX,rX,L,e,c]);d(()=>{if(C.current&&!C.current.closed&&t)oX({targetWindow:C.current,profileName:x.nombre,profession:x.profesion,photos:[...(x.galeria?.fotos||[]).map((J,X)=>({...n(J,"image"),sourceTag:"fotos",sourceIndex:X})),...(x.galeria?.videos||[]).map((J,X)=>({...n(J,"video"),sourceTag:"videos",sourceIndex:X}))],editingId:t,battlePhotoPrefs:x.batallaFotosPreferidas,profilePhotoUrl:x.fotos?.[0]||""})},[t,x.nombre,x.profesion,x.galeria?.fotos,x.galeria?.videos,x.batallaFotosPreferidas]);d(()=>{const J=async(_)=>{if(_.data.type==="ADD_IMAGE"){const{url:W,id:F,label:B,mediaType:D,autor:G}=_.data,A=D==="video"?"videos":"fotos";if(!F)return;const S=F===MJ?M.ref(`${NQ}/${A}`):M.ref(`perfiles/${F}/galeria/${A}`),YJ=(await S.once("value")).val()||[],u=(W||"").trim();if(!u)return;const a=[...YJ,{url:u,label:JJ.includes(B)?B:"",type:nJ(u,D),autor:sX(G)}];await S.set(a);s((I)=>({...I,galeria:{...I.galeria,[A]:a}}))}if(_.data.type==="DELETE_IMAGE"){const{index:W,id:F,mediaType:B}=_.data,D=B==="video"?"videos":"fotos";if(!F)return;const G=F===MJ?M.ref(`${NQ}/${D}`):M.ref(`perfiles/${F}/galeria/${D}`),S=(await G.once("value")).val()||[],o=S[W],YJ=S.filter((a,I)=>I!==W);await G.set(YJ);const u=n(o,B).url;if(u&&F!==MJ){const a=M.ref(`perfiles/${F}/batallaFotosPreferidas`),I=await a.once("value"),i={...qJ(I.val())};let bJ=!1;Object.keys(i).forEach((XX)=>{if(i[XX]===u){i[XX]="";bJ=!0}});if(bJ)await a.set(i)}s((a)=>({...a,galeria:{...a.galeria,[D]:YJ},batallaFotosPreferidas:(()=>{const I=qJ(a.batallaFotosPreferidas);if(!u)return I;const r={...I};Object.keys(r).forEach((i)=>{if(r[i]===u)r[i]=""});return r})()}))}if(_.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:W,slotId:F,index:B,mediaType:D}=_.data,G=ZX(F);if(!W||W===MJ||!G||!Number.isInteger(B))return;const A=D==="video"?"videos":"fotos",YJ=(await M.ref(`perfiles/${W}/galeria/${A}`).once("value")).val()||[],u=n(YJ[B],D);if(!u.url||u.type!=="image")return;await M.ref(`perfiles/${W}/batallaFotosPreferidas/${F}`).set(u.url);s((I)=>({...I,batallaFotosPreferidas:{...qJ(I.batallaFotosPreferidas),[F]:u.url}}))}if(_.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:W,slotId:F,url:B,mediaType:D,label:G}=_.data,A=ZX(F),S=String(B||"").trim();if(!W||W===MJ||!A||!S)return;if(D==="video")return;await M.ref(`perfiles/${W}/batallaFotosPreferidas/${F}`).set(S);s((YJ)=>({...YJ,batallaFotosPreferidas:{...qJ(YJ.batallaFotosPreferidas),[F]:S}}))}if(_.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:W,slotId:F}=_.data,B=ZX(F);if(!W||W===MJ||!B)return;await M.ref(`perfiles/${W}/batallaFotosPreferidas/${F}`).set("");s((G)=>({...G,batallaFotosPreferidas:{...qJ(G.batallaFotosPreferidas),[F]:""}}))}};window.addEventListener("message",J);const X=M.ref("perfiles"),Y=M.ref(NQ);let Z={},$={};const H=()=>{const _=Object.keys(Z||{}).map((B)=>({...KX(Z[B]),firebaseId:B})),W=u0($||{}),F=Object.values(W.galeria||{}).some((B)=>Array.isArray(B)&&B.length>0);b(F?[..._,W]:_)};X.on("value",(_)=>{Z=_.val()||{};H()});Y.on("value",(_)=>{$=_.val()||{};const W=Array.isArray($?.audios)?$.audios.map((F)=>({nombre:String(F?.nombre||"").trim(),url:String(F?.url||"").trim()})).filter((F)=>F.nombre&&F.url):[];wZ(W);H()});P(LZ);const E=M.ref("arenaBattleState");E.on("value",(_)=>{GJ(_.val()||{})});const q=M.ref("arenaGlobalState");q.on("value",(_)=>{vJ(_.val()||{})});return()=>{window.removeEventListener("message",J);X.off();Y.off();E.off();q.off()}},[]);d(()=>{const J=oJ.find((Y)=>Y.url===RX),X=oJ.find((Y)=>Y.url===DX);[VQ.current,CQ.current].forEach((Y)=>{if(!Y)return;Y.pause();Y.currentTime=0});if(!BX)return;if(J&&VQ.current){VQ.current.src=J.url;VQ.current.play().catch(()=>{})}if(X&&CQ.current&&X.url!==J?.url){CQ.current.src=X.url;CQ.current.play().catch(()=>{})}},[BX,RX,DX,oJ]);const uJ=(J)=>{if(!J)return"?";const X=new Date,Y=new Date(J);let Z=X.getFullYear()-Y.getFullYear();if(X.getMonth()<Y.getMonth()||X.getMonth()===Y.getMonth()&&X.getDate()<Y.getDate())Z--;return Z},GX=(J={})=>{return{...MQ(),...J?.puntuaciones||{}}},fJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},kX=(J={},X=[])=>{if(!Array.isArray(X)||!X.length)return 0;const Y=GX(J);return X.reduce((Z,$)=>Z+(Number(Y[$])||0),0)/X.length},pQ=(J={})=>{return kX(J,fJ.Rostro)},iQ=(J={})=>{return kX(J,fJ.Cuerpo)},lQ=(J={})=>{return kX(J,fJ.Actitud)},gY=(J={},X="")=>{if(X==="Rostro")return pQ(J);if(X==="Cuerpo")return iQ(J);if(X==="Actitud")return lQ(J);return 0},BJ=(J={})=>{const X=Object.keys(fJ).map((Z)=>gY(J,Z));return(X.reduce((Z,$)=>Z+$,0)/X.length).toFixed(0)},oQ=(J)=>{const X=[],Y=(J.nacionalidad||"").toLowerCase(),Z=(J.profesion||"").toLowerCase(),$=(J.ciudad||"").toLowerCase(),H=uJ(J.fechaNacimiento);c.forEach((E)=>{const q=E.reglas;let _=!0;if(q.nacionalidades?.length>0&&!q.nacionalidades.some((W)=>Y===W.toLowerCase()))_=!1;if(q.profesiones?.length>0&&!q.profesiones.some((W)=>Z===W.toLowerCase()))_=!1;if(q.ciudades?.length>0&&!q.ciudades.some((W)=>$===W.toLowerCase()))_=!1;if(q.edadMin&&(H==="?"||H<parseInt(q.edadMin)))_=!1;if(q.edadMax&&(H==="?"||H>parseInt(q.edadMax)))_=!1;if(q.caracteristica&&q.umbral){const W=GX(J)[q.caracteristica]||0,F=parseInt(q.umbral);if(q.operador==="Superior a"&&W<=F)_=!1;if(q.operador==="Inferior a"&&W>=F)_=!1}if(_)X.push(E.firebaseId)});return X},nZ=g(()=>["Todas",...new Set(L.map((J)=>J.nacionalidad).filter(Boolean))],[L]),Q1=g(()=>["Todas",...new Set(L.map((J)=>J.profesion).filter(Boolean))],[L]),pZ=g(()=>["Todas",...new Set(L.map((J)=>J.ciudad).filter(Boolean))],[L]),hY=g(()=>{return(L||[]).reduce((J,X)=>{if(!X?.firebaseId)return J;J[X.firebaseId]=oQ(X);return J},{})},[L,c]),aJ=g(()=>{return(L||[]).flatMap((J)=>{const X=f0(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map((Z,$)=>({item:Z,sourceTag:"fotos",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map((Z,$)=>({item:Z,sourceTag:"gifs",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map((Z,$)=>({item:Z,sourceTag:"videos",sourceIndex:$,fallbackType:"video"})):[]].map(({item:Z,sourceTag:$,sourceIndex:H,fallbackType:E})=>{const q=n(Z,E);return{id:`${J.firebaseId||J.nombre||"perfil"}-${$}-${H}`,url:q.url,label:q.label,type:q.type,isGif:q.type==="image"&&p0(q.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||q.url,profileId:J.firebaseId,sourceCharacterId:X,sourceTag:$,sourceIndex:H}})})},[L]),jJ=g(()=>{return aJ.filter((J)=>Boolean(J.url))},[aJ]),SX=g(()=>{return jJ.reduce((J,X)=>{const Y=X.label||"";if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[jJ]),yY=g(()=>{return jJ.reduce((J,X)=>{const Y=X.profileId||X.nombre;if(!Y)return J;if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[jJ]),iZ=g(()=>{return new Set(jJ.map((J)=>J.profileId).filter(Boolean)).size},[jJ]),mY=g(()=>{return Object.entries(hY||{}).reduce((J,[X,Y])=>{J[X]=new Set(Array.isArray(Y)?Y:[]);return J},{})},[hY]),xJ=g(()=>{if(v==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:jJ[0]?.url||"",photos:jJ}];if(v==="PERSONAJE")return Object.entries(yY).map(([J,X])=>{const Y=X[0]||{};return{id:`PERSONAJE-${J}`,profileId:Y.profileId||null,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotoPerfil:Y.fotoPerfil||Y.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}));if(v==="ETIQUETA")return JJ.map((J)=>{const X=SX[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0);return(c||[]).map((J)=>{const X=jJ.filter((Y)=>{if(!Y.profileId)return!1;const Z=mY[Y.profileId];return Z?Z.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||X[0]?.fotoPerfil||X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}))},[jJ,SX,yY,c,v,mY]),cJ=g(()=>{if(v==="GENERAL")return xJ[0]||null;if(!PQ)return null;return xJ.find((J)=>J.id===PQ.id)||null},[xJ,PQ,v]),zJ=g(()=>{if(v!=="PERSONAJE")return[];return xJ.filter((J)=>LQ.includes(J.id))},[xJ,v,LQ]),BQ=g(()=>{if(v==="PERSONAJE")return zJ.flatMap((J)=>J.photos||[]);if(v==="ETIQUETA"){if(!iJ.length)return[];return jJ.filter((J)=>iJ.includes(J.label))}return cJ?.photos||jJ},[v,zJ,cJ,jJ,iJ]),lZ=g(()=>{const J=BQ.reduce((X,Y)=>{const Z=Y.label||"";if(!Z)return X;X[Z]=(X[Z]||0)+1;return X},{});return JJ.reduce((X,Y)=>{X[Y]=J[Y]||0;return X},{})},[BQ]),m=g(()=>{return BQ.filter((J)=>v==="ETIQUETA"?!0:kJ==="INICIAL"?J.label!=="X":kJ==="100"?!0:J.label===kJ)},[BQ,kJ,v]),xX=g(()=>{return m.slice(0,$Y)},[m,$Y]),oZ=xX.length<m.length,tQ=$Z[v]||v,aQ=v!=="GENERAL"&&v!=="ETIQUETA",uY=g(()=>{if(v!=="PERSONAJE")return[];return xJ.filter((J)=>!LQ.includes(J.id))},[xJ,v,LQ]),w=VJ===null?null:m[JQ(VJ,m.length)]||null,NJ=g(()=>{return aJ.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(GY[J.id])})},[aJ,GY]),fY=g(()=>{const J=NJ.reduce((X,Y)=>{const Z=Y.profileId||Y.nombre||"sin-perfil";if(!X[Z])X[Z]={id:Z,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotos:[]};X[Z].fotos.push(Y);return X},{});return Object.values(J).map((X)=>({...X,fotos:X.fotos.sort((Y,Z)=>(Y.label||"").localeCompare(Z.label||"","es",{sensitivity:"base"}))})).sort((X,Y)=>X.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[NJ]);d(()=>{if(!w){lJ(!1);bQ("");vQ("");hJ("");return}lJ(!1);bQ(w.label||"");vQ(w.url||"");hJ("")},[w]);d(()=>{if(U!=="GALERIA"){EQ(null);l(null)}},[U]);d(()=>{HY(40);l(null)},[v,kJ,iJ,LQ,PQ,L.length]);d(()=>{EQ(null);l(null);EX([]);YY([])},[v]);d(()=>{if(VJ===null)return;if(!m.length){l(null);return}if(VJ>=m.length)l(0)},[m,VJ]);d(()=>{if(VJ===null)return;const J=(X)=>{if(X.key==="Escape"){l(null);return}if(!m.length)return;if(X.key==="ArrowRight")l((Y)=>JQ((Y??0)+1,m.length));if(X.key==="ArrowLeft")l((Y)=>JQ((Y??0)-1,m.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[m.length,VJ]);d(()=>{if(VJ===null){FQ(!1);LX(!1);ZY(!1)}},[VJ]);d(()=>{if(!jX)return;const J=(Y)=>{if(T.current&&!T.current.contains(Y.target))SQ(!1)},X=(Y)=>{if(Y.key==="Escape")SQ(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",X);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",X)}},[jX]);d(()=>{let J=!1;const X=aJ.filter((Z)=>Z.type==="image"&&Z.url);if(!X.length){zX({});return}(async()=>{const Z=8,$=[];for(let E=0;E<X.length;E+=Z){const q=X.slice(E,E+Z),_=await Promise.all(q.map(async(W)=>({id:W.id,isBroken:await WZ(W.url)})));$.push(..._);if(J)return}if(J)return;const H=$.reduce((E,q)=>{E[q.id]=q.isBroken;return E},{});zX(H)})();return()=>{J=!0}},[aJ]);d(()=>{if(!TX)return;const J=NJ.reduce((X,Y)=>{X[Y.id]=Y.url;return X},{});kY(J);SY({})},[TX,NJ]);d(()=>{if(mJ.current){clearTimeout(mJ.current);mJ.current=null}if(!TJ||!w)return;if(w.type==="video")return;const J=FX*1000;mJ.current=setTimeout(()=>{l((X)=>HZ(X,m,SJ))},J);return()=>{if(mJ.current){clearTimeout(mJ.current);mJ.current=null}}},[TJ,w,m,SJ,FX]);d(()=>{if(!w||!uQ.current)return;uQ.current=!1;requestAnimationFrame(()=>{aZ()})},[w]);const PX=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,cY=()=>{const J=mQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},tZ=()=>{const J=mQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},aZ=()=>{const J=mQ.current;if(!J)return;if(document.fullscreenElement)return;const X=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof X==="function")Promise.resolve(X.call(J)).catch(()=>{if(PX)cY()});else if(PX)cY()},rZ=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},sY=(J,{autoplay:X=!1,fromGeneralPlay:Y=!1}={})=>{uQ.current=!!X;l(J);FQ(X);ZY(Y);lJ(!Y)},eZ=(J)=>{if(!J)return;EX((X)=>X.includes(J)?X:[...X,J]);l(null)},J0=(J)=>{if(!J)return;EX((X)=>X.filter((Y)=>Y!==J));l(null)},Q0=(J)=>{if(!J)return;YY((X)=>X.includes(J)?X.filter((Y)=>Y!==J):[...X,J]);l(null)},dY=()=>{uQ.current=!1;FQ(!1);l(null);tZ();rZ()},RQ=()=>l((J)=>HZ(J,m,SJ)),X1=()=>l((J)=>JQ((J??0)-1,m.length)),X0=async()=>{if(!w?.profileId||!w?.sourceTag||!Number.isInteger(w?.sourceIndex))return;const J=(_Y||"").trim();if(!J){hJ("La URL no puede estar vacía.");return}if(qZ(J)||!HJ(J,"")){hJ("La URL está bloqueada o no es válida.");return}try{EY(!0);hJ("");if(J!==w.url)await bY({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,url:J});await mZ({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,label:qY});lJ(!1)}catch(X){hJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",X)}finally{EY(!1)}},Y0=(J,X)=>{kY((Y)=>({...Y,[J]:X}))},nY=(J,X)=>{if(!J)return;SY((Y)=>({...Y,[J]:Boolean(X)}))},Z0=(J)=>{const X=(NX[J?.id]||J?.url||"").trim();if(!X)return;window.open(X,"_blank","noopener,noreferrer")},$0=async(J)=>{if(!J)return;const X=(NX[J.id]||"").trim();if(!X)return;hQ((Y)=>({...Y,[J.id]:!0}));try{if(X!==J.url)await bY({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:X});const Y=await WZ(X);zX((Z)=>({...Z,[J.id]:Y}));if(!Y)nY(J.id,!1)}catch(Y){console.error("Error al actualizar URL rota:",Y)}finally{hQ((Y)=>({...Y,[J.id]:!1}))}},H0=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;hQ((Y)=>({...Y,[J.id]:!0}));try{await uZ({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Y){console.error("Error al eliminar foto rota:",Y)}finally{hQ((Y)=>({...Y,[J.id]:!1}))}},j0=g(()=>{if(v==="PERSONAJE")return zJ.length?`${zJ.length} personaje${zJ.length>1?"s":""} seleccionado${zJ.length>1?"s":""}`:"Sin personajes seleccionados";if(cJ&&aQ)return cJ.nombre;return tQ},[v,zJ,cJ,aQ,tQ]),q0=(J)=>{J.preventDefault();const X={...x};if(t)M.ref(`perfiles/${t}`).set(X).then(()=>{IJ(!1);jQ(null)}).catch((Y)=>console.error("Error al excitar la base de datos:",Y));else M.ref("perfiles").push(X).then(()=>{IJ(!1);s(sQ())}).catch((Y)=>console.error("No pudo entrar el perfil:",Y))},_0=async(J)=>{J.preventDefault();const{firebaseId:X,...Y}=K,Z={...Y,type:"custom"};try{if(X)await M.ref(`categorias/${X}`).update(Z);else await M.ref("categorias").push(Z);GQ(!1);wX()}catch($){console.error("La categoría no quiso guardarse:",$)}},W0=async(J)=>{if(!J)return;try{await M.ref(`categorias/${J}`).remove();P((X)=>X.filter((Y)=>Y.firebaseId!==J));WQ((X)=>X===J?null:X)}catch(X){console.error("No se pudo borrar la categoría:",X);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},bX=(J)=>{if(!J?.firebaseId)return;kQ("");_Q(J);eX(!0)},O0=()=>{if(!t)return;const J=L.find((X)=>X.firebaseId===t);if(!J)return;bX(J)},vX=()=>{eX(!1);qQ(null);_Q(null)},E0=async(J)=>{if(!J)return;await M.ref(`perfiles/${J}`).remove();b((X)=>X.filter((Y)=>Y.firebaseId!==J))},L0=async()=>{if(!LJ?.firebaseId)return;try{await E0(LJ.firebaseId);kQ("");IJ(!1);if(t===LJ.firebaseId)jQ(null);vX()}catch(J){console.error("No se pudo borrar el perfil:",J);kQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},rQ=()=>{SQ(!1);_Q(null)},F0=(J,X)=>{J.preventDefault();SQ(!0);TZ({x:J.clientX,y:J.clientY});_Q(X)},U0=()=>{if(!LJ)return;s(KX(LJ));jQ(LJ.firebaseId);IJ(!0);rQ()},V0=async()=>{if(!LJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){rQ();return}try{await M.ref(`perfiles/${LJ.firebaseId}`).remove();b((X)=>X.filter((Y)=>Y.firebaseId!==LJ.firebaseId));rQ()}catch(X){console.error("No se pudo borrar el perfil:",X);alert("No se pudo borrar el perfil. Probá de nuevo.");rQ()}},pY=(J)=>{const X=J?.estaturaCm;if(X===void 0||X===null||X==="")return"Sin dato";const Y=Number(X);if(Number.isNaN(Y)||Y<=0)return"Sin dato";return`${Math.round(Y)} cm`},IX=(J="")=>String(J||"").trim().toLowerCase(),C0=(J="")=>String(J||"").trim(),DQ=(J=[])=>[...J||[]].filter((X)=>X?.firebaseId&&(X?.nombre||"").trim()).sort((X,Y)=>(X.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"})).map((X)=>X.firebaseId),iY=(J=[],X="GENERAL")=>{const Y=String(X||"GENERAL").trim().toUpperCase(),Z=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,_)=>(q.nombre||"").localeCompare(_.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:Z.map((q)=>q.firebaseId)}];if(Y==="EDADES"){const q={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};Z.forEach((_)=>{const W=uJ(_.fechaNacimiento);if(!Number.isFinite(W)||W<18)return;if(W<=28)q["18-28"].ids.push(_.firebaseId);else if(W<=39)q["29-39"].ids.push(_.firebaseId);else q["40+"].ids.push(_.firebaseId)});return Object.values(q)}const $=Y==="NACIONALIDADES"?"nacionalidad":"profesion",H=Y==="NACIONALIDADES"?"Nacionalidad":"Profesión",E=Z.reduce((q,_)=>{const W=IX(_?.[$]);if(!W)return q;if(!q[W])q[W]={key:W,label:C0(_?.[$])||W,typeLabel:H,ids:[]};q[W].ids.push(_.firebaseId);return q},{});return Object.values(E).sort((q,_)=>q.label.localeCompare(_.label,"es",{sensitivity:"base"}))},gX=(J=[],X="GENERAL",Y="")=>{const Z=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,_)=>(q.nombre||"").localeCompare(_.nombre||"","es",{sensitivity:"base"}));if(X==="GENERAL"){const q=Z.map((_)=>_.firebaseId);return{groupedIds:q.length>1?[{key:"general",label:"General",typeLabel:"General",ids:q}]:[],orderedIds:q}}const $=iY(Z,X),H=IX(Y),E=$.filter((q)=>{if(!H||H==="all")return!0;return IX(q.key)===H}).filter((q)=>q.ids.length>=2);return{groupedIds:E,orderedIds:E.flatMap((q)=>q.ids)}},PJ=(J,X)=>[J,X].sort().join("__"),rJ=(J)=>{if(!J||typeof J!=="object")return null;const X=String(J.winnerId||"").trim(),Y=String(J.loserId||"").trim();if(!X||!Y||X===Y)return null;return{winnerId:X,loserId:Y,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},eQ=(J={},X="")=>!!rJ(J?.[X]),TQ=(J={},X=[])=>{const Y=new Set((X||[]).filter(Boolean)),Z={},$={},H={};Object.entries(J||{}).forEach(([W,F])=>{const B=rJ(F);if(!B)return;const{winnerId:D,loserId:G}=B;if(Y.size&&(!Y.has(D)||!Y.has(G)))return;const A=PJ(D,G),S={winnerId:D,loserId:G,reason:"direct",playedAt:B.playedAt??Date.now()};Z[A]=S;$[A]=S;if(!H[D])H[D]=new Set;H[D].add(G)});new Set([...Object.keys(H),...Object.values(H).flatMap((W)=>[...W])]).forEach((W)=>{const F=[...H[W]||[]],B=new Set;while(F.length){const D=F.shift();if(!D||B.has(D)||D===W)continue;B.add(D);const G=PJ(W,D);if(!$[G])$[G]={winnerId:W,loserId:D,reason:"transitive",playedAt:null};(H[D]||[]).forEach((A)=>{if(!B.has(A))F.push(A)})}});const q=Object.fromEntries(Object.entries(H).map(([W,F])=>[W,[...F]])),_=R0($);return{directMatchups:Z,matchups:$,victoryGraph:q,stats:_}},AQ=(J,X={})=>{const Y=OJ(J);if(!Y)return null;const Z=DQ(L),$=TQ(X?.directMatchups||X?.matchups||{},Z);return{arenaName:Y,orderedIds:Z,...$}},B0=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=PJ(J[Y],J[Z]);if(!eQ(X,$))return[J[Y],J[Z]]}return null},hX=(J=[],X={},Y={})=>{const Z={...X||{},...Y||{}};for(const $ of J){const H=B0($?.ids||[],Z);if(H)return H}return null},zQ=(J=[],X,Y="")=>{if(!X)return null;return J.find((Z)=>{const $=Z?.ids||[];if(!$.includes(X))return!1;return!Y||$.includes(Y)})||null},R0=(J={})=>{return Object.keys(J||{}).reduce((X,Y)=>{const Z=rJ(J[Y]);if(!Z)return X;const{winnerId:$,loserId:H}=Z,E=X[$]||{wins:0,battles:0},q=X[H]||{wins:0,battles:0};return{...X,[$]:{wins:E.wins+1,battles:E.battles+1},[H]:{wins:q.wins,battles:q.battles+1}}},{})},lY=(J="",X="")=>{const Y=String(X||"").trim();if(!J||!Y)return!1;return J.endsWith(`::${Y}`)},D0=(J,X)=>{const Y=rJ(X);if(!Y||Y.reason!=="direct")return J||null;const Z=rJ(J);if(!Z||Z.reason!=="direct")return Y;const $=Z.playedAt??0;return(Y.playedAt??0)>=$?Y:Z},oY=(J,X=ZJ)=>{const Y=String(J||"").trim();if(!Y)return TQ({},[]);const Z={};Object.entries(X||{}).forEach(([H,E])=>{if(!lY(H,Y))return;const q=E?.directMatchups||{};Object.entries(q).forEach(([_,W])=>{Z[_]=D0(Z[_],W)})});const $=[...L||[]].map((H)=>H?.firebaseId).filter(Boolean).sort((H,E)=>String(H).localeCompare(String(E),"es",{sensitivity:"base"}));return TQ(Z,$)},tY=(J,X)=>{const Z=(oY(J).stats||{})[X]||{wins:0,battles:0},$=Z.battles?Math.round(Z.wins/Z.battles*100):0;return{...Z,score:$}},aY=(J,X=ZJ)=>{const Y=oY(J,X).stats||{};return[...L||[]].filter((Z)=>Z?.firebaseId).reduce((Z,$)=>{const H=Y[$.firebaseId]||{wins:0,battles:0};Z[$.firebaseId]=H.battles?Math.round(H.wins/H.battles*100):0;return Z},{})},Y1=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=PJ(J[Y],J[Z]);if(!eQ(X,$))return[J[Y],J[Z]]}return null},rY=(J,X,Y=null)=>{if(!X)return null;const Z=i0.includes(X.mode)?X.mode:"GENERAL",$=String(X.groupKey||"all").trim().toLowerCase()||"all",H=gX(L,Z,$),E=H.groupedIds||[],q=H.orderedIds||[],_=AQ(J,Y||EJ?.[OJ(J)]||{}),W=_?.directMatchups||{},F=_?.matchups||{},B=_?.victoryGraph||{},D=_?.stats||{},G=X.championId,A=X.challengerId,S=zQ(E,G,A),o=!!G&&!!A&&G!==A&&!!S&&!eQ(F,PJ(G,A)),YJ=E.length?hX(E,X.matchups||{},F):null,u=o?[G,A]:YJ,a=!YJ,I=zQ(E,u?.[0],u?.[1]);return{...X,mode:Z,groupKey:$,groupedIds:E,orderedIds:q,stats:D,directMatchups:W,matchups:F,victoryGraph:B,championId:u?u[0]:null,challengerId:u?u[1]:null,activeGroupKey:I?.key||null,activeGroupLabel:I?`${I.typeLabel}: ${I.label}`:"",isFinished:a}};d(()=>{if(!L.length)return;const J={},X=[];Object.entries(ZJ||{}).forEach(([Y,Z])=>{const{arenaName:$}=EZ(Y),H=rY($,Z,EJ?.[OJ($)]);if(!H)return;if(JSON.stringify(Z)===JSON.stringify(H))return;J[Y]=H;X.push(M.ref(`arenaBattleState/${Y}`).set(H).catch((q)=>console.error("No se pudo normalizar el estado del arena:",q)))});if(!Object.keys(J).length)return;GJ((Y)=>({...Y,...J}));Promise.all(X).catch(()=>{})},[ZJ,EJ,L]);d(()=>{if(!L.length)return;const J={};Object.entries(ZJ||{}).forEach(([Z,$])=>{const{arenaName:H}=EZ(Z),E=OJ(H);if(!E)return;if(!J[E])J[E]={};Object.entries($?.directMatchups||{}).forEach(([q,_])=>{const W=rJ(_);if(!W)return;J[E][q]={winnerId:W.winnerId,loserId:W.loserId,reason:"direct",playedAt:W.playedAt??Date.now()}})});const X=[],Y={};Object.entries(J).forEach(([Z,$])=>{const H=OJ(Z);if(!H||EJ?.[H])return;const E=AQ(Z,{directMatchups:$});if(!E)return;Y[H]=E;X.push(M.ref(`arenaGlobalState/${H}`).set(E).catch((q)=>console.error("No se pudo migrar arenaGlobalState:",q)))});if(!Object.keys(Y).length)return;vJ((Z)=>({...Z,...Y}));Promise.all(X).catch(()=>{})},[ZJ,EJ,L]);const eY=(J,X=z,Y=h)=>{const Z=[...L].filter((S)=>S?.firebaseId&&(S?.nombre||"").trim()).sort((S,o)=>(S.nombre||"").localeCompare(o.nombre||"","es",{sensitivity:"base"}));if(Z.length<2)return;const $=String(X||"GENERAL").trim().toUpperCase(),H=gX(Z,$,Y),E=H.groupedIds||[],q=H.orderedIds||[],_=OJ(J),W=AQ(J,EJ?.[_]||{}),F=W?.matchups||{},B=hX(E,{},F);if(!B)return;const D=zQ(E,B[0],B[1]),G={mode:$,groupKey:String(Y||"").trim().toLowerCase()||"all",groupedIds:E,orderedIds:q,stats:W?.stats||{},directMatchups:W?.directMatchups||{},matchups:F,victoryGraph:W?.victoryGraph||{},championId:B[0],challengerId:B[1],activeGroupKey:D?.key||null,activeGroupLabel:D?`${D.typeLabel}: ${D.label}`:"",isFinished:!1},A=$Q(J,X,Y);if(!A)return;GJ((S)=>({...S,[A]:G}));if(!EJ?.[_]){vJ((S)=>({...S,[_]:W}));M.ref(`arenaGlobalState/${_}`).set(W).catch((S)=>console.error("No se pudo guardar arenaGlobalState inicial:",S))}M.ref(`arenaBattleState/${A}`).set(G).catch((S)=>console.error("No se pudo guardar el estado del arena:",S))},T0=async(J,X,Y)=>{if(!J)return;try{await M.ref(`perfiles/${J}/puntuaciones/${X}`).set(Y)}catch(Z){console.error("No se pudo actualizar score del arena:",Z)}},JZ=(J,X,Y=z,Z=h)=>{const $=$Q(J,Y,Z),H=ZJ[$];if(!H||H.isFinished)return;const E=OJ(J),q=AQ(J,EJ?.[E]||{}),_=Array.isArray(H.groupedIds)&&H.groupedIds.length?H.groupedIds:gX(L,H.mode||"GENERAL",H.groupKey||"all").groupedIds,{championId:W,challengerId:F}=H;if(X!==W&&X!==F)return;const B=X===W?F:W;if(!X||!B)return;const D=PJ(X,B),G={...q?.directMatchups||{},[D]:{winnerId:X,loserId:B,reason:"direct",playedAt:Date.now()}},A=TQ(G,DQ(L)),S=A.matchups,o=A.stats||{},YJ=zQ(_,X,B),a=((FJ,WJ,fX)=>{if(!WJ)return null;for(const YX of FJ){if(!YX||YX===WJ)continue;const k0=PJ(WJ,YX);if(!eQ(fX,k0))return YX}return null})(YJ?.ids||[],X,S),I=a?[X,a]:hX(_,H.matchups||{},S),r=zQ(_,I?.[0],I?.[1]),i={arenaName:E,orderedIds:DQ(L),directMatchups:A.directMatchups,matchups:S,victoryGraph:A.victoryGraph,stats:o},bJ={...H,groupedIds:_,directMatchups:i.directMatchups,stats:o,matchups:S,victoryGraph:A.victoryGraph,championId:I?I[0]:null,challengerId:I?I[1]:null,activeGroupKey:r?.key||null,activeGroupLabel:r?`${r.typeLabel}: ${r.label}`:"",isFinished:!I},XX={...ZJ||{},[$]:bJ},uX=aY(J,XX);b((FJ)=>FJ.map((WJ)=>{if(!WJ?.firebaseId||!Object.prototype.hasOwnProperty.call(uX,WJ.firebaseId))return WJ;const fX=uX[WJ.firebaseId];return{...WJ,puntuaciones:{...WJ.puntuaciones||{},[J]:fX}}}));Object.entries(uX).forEach(([FJ,WJ])=>{T0(FJ,J,WJ)});GJ((FJ)=>({...FJ,[$]:bJ}));vJ((FJ)=>({...FJ,[E]:i}));Promise.all([M.ref(`arenaGlobalState/${E}`).set(i),M.ref(`arenaBattleState/${$}`).set(bJ)]).catch((FJ)=>console.error("No se pudo guardar avance de batallas:",FJ))},A0=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((L||[]).map((X)=>{if(!X?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${X.firebaseId}/puntuaciones`).set(MQ())}));b((X)=>X.map((Y)=>({...Y,puntuaciones:MQ()})));GJ({});vJ({});await M.ref("arenaBattleState").remove();await M.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(X){console.error("No se pudieron resetear las calificaciones:",X);alert("No se pudo completar el reseteo.")}},z0=async(J,X=z,Y=h)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const $={...ZJ||{}},H=Object.keys($).filter((q)=>lY(q,J));H.forEach((q)=>delete $[q]);await Promise.all(H.map((q)=>M.ref(`arenaBattleState/${q}`).remove()));GJ($);await Promise.all((L||[]).map((q)=>{if(!q?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${q.firebaseId}/puntuaciones/${J}`).set(0)}));b((q)=>q.map((_)=>({..._,puntuaciones:{..._.puntuaciones||{},[J]:0}})));const E=$Q(J,X,Y);GJ((q)=>{if(!q?.[E])return q;const _={...q};delete _[E];return _});vJ((q)=>{const _=OJ(J);if(!q?.[_])return q;const W={...q};delete W[_];return W});await M.ref(`arenaBattleState/${E}`).remove();await M.ref(`arenaGlobalState/${OJ(J)}`).remove();alert(`Se reseteó "${J}" (${ZQ(X)}) y se limpió su estado de batallas.`)}catch($){console.error("No se pudo resetear el item:",$);alert("No se pudo resetear ese item.")}},QZ=async(J,X,Y,Z=z,$=h)=>{const H=$Q(J,Z,$),E=ZJ?.[H],q=OJ(J),_=AQ(J,EJ?.[q]||{});if(!E){alert("Esa arena no tiene estado cargado.");return}const W=_?.matchups||{},F=_?.directMatchups||{};if(!Object.keys(W).filter((A)=>!!W[A]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const D=PJ(X,Y);if(!W[D]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!F[D]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const A={...F};delete A[D];const S=TQ(A,DQ(L)),o={arenaName:q,orderedIds:DQ(L),directMatchups:S.directMatchups,matchups:S.matchups,victoryGraph:S.victoryGraph,stats:S.stats},YJ={...E,directMatchups:o.directMatchups,matchups:o.matchups,victoryGraph:o.victoryGraph,stats:o.stats},u=rY(J,YJ,o);if(!u){alert("No se pudo recomponer el estado del arena.");return}GJ((r)=>({...r,[H]:u}));vJ((r)=>({...r,[q]:o}));await Promise.all([M.ref(`arenaGlobalState/${q}`).set(o),M.ref(`arenaBattleState/${H}`).set(u)]);const a={...ZJ||{},[H]:u},I=aY(J,a);await Promise.all(Object.entries(I).map(async([r,i])=>{await M.ref(`perfiles/${r}/puntuaciones/${J}`).set(i)}));b((r)=>r.map((i)=>{if(!i?.firebaseId||!Object.prototype.hasOwnProperty.call(I,i.firebaseId))return i;const bJ=I[i.firebaseId];return{...i,puntuaciones:{...i.puntuaciones||{},[J]:bJ}}}));alert("Batalla reseteada correctamente.")}catch(A){console.error("No se pudo resetear la batalla:",A);alert("No se pudo resetear esa batalla.")}},N0=g(()=>{const J=L;if(U==="RANKING")return[...J].sort((X,Y)=>parseFloat(BJ(Y))-parseFloat(BJ(X)));if(U==="CATEGORIAS"&&e)return J.filter((X)=>oQ(X).includes(e));return J},[L,U,e]),XZ=g(()=>{return new Set(NJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[NJ]),JX=g(()=>{const J=String(UX||"").trim().toLowerCase(),X=(Z)=>{return[Z?.profesion,Z?.profesiones].flatMap((H)=>{if(Array.isArray(H))return H;if(typeof H==="string")return H.split(",");return[]}).map((H)=>String(H||"").trim()).filter(Boolean).join(" ")},Y=(Z)=>{if(!Z||typeof Z!=="object")return!1;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),String(Z.ciudad||"").trim(),X(Z),String(Z.fechaNacimiento||"").trim(),String(Z.estaturaCm||"").trim()].some(Boolean)||Array.isArray(Z.fotos)&&Z.fotos.some(Boolean)};return[...L||[]].filter((Z)=>{if(!Y(Z))return!1;if(tJ&&c0(Z))return!1;if(yQ){const H=String(Z?.firebaseId||Z?.id||"").trim();if(!H||!XZ.has(H))return!1}if(!J)return!0;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),X(Z)].join(" ").toLowerCase().includes(J)}).sort((Z,$)=>String(Z?.nombre||"").localeCompare(String($?.nombre||""),"es",{sensitivity:"base"}))},[L,UX,tJ,yQ,XZ]),y=g(()=>JX.find((J)=>J?.firebaseId===gQ)||null,[JX,gQ]);d(()=>{const J=()=>UQ("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const M0=g(()=>{if(!z)return[];return iY(L,z)},[L,z]),QX=z&&z!=="GENERAL",YZ=(J,X)=>{if(X==="promedio")return Number(BJ(J))||0;if(X==="nombre")return(J.nombre||"").toLowerCase();if(X==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(X==="edad"){const Y=uJ(J.fechaNacimiento);return typeof Y==="number"?Y:-1}if(X==="Rostro")return pQ(J)||0;if(X==="Cuerpo")return iQ(J)||0;if(X==="Actitud")return lQ(J)||0;return Number(J.puntuaciones?.[X]||0)},K0=(J)=>{if(XJ==="promedio")return BJ(J);if(XJ==="Rostro")return pQ(J).toFixed(0);if(XJ==="Cuerpo")return iQ(J).toFixed(0);if(XJ==="Actitud")return lQ(J).toFixed(0);if(YQ.includes(XJ))return Number(J.puntuaciones?.[XJ]||0).toFixed(0);return BJ(J)},eJ=(J,X="asc")=>{if(XJ===J){qX((Y)=>Y==="asc"?"desc":"asc");return}XY(J);qX(X)},w0=(J,X)=>{const Y=fJ[X]||[],Z=new Set,$=new Set,H=Object.entries(ZJ||{});Y.forEach((_)=>{const W=EJ?.[OJ(_)]?.matchups||{};Object.values(W).forEach((F)=>{if(!F||typeof F!=="object")return;if(F.winnerId===J&&F.loserId)Z.add(F.loserId);if(F.loserId===J&&F.winnerId)$.add(F.winnerId)})});const E=new Map((L||[]).filter((_)=>_?.firebaseId).map((_)=>[_.firebaseId,_.nombre||"Sin nombre"])),q=(_)=>[..._].map((W)=>E.get(W)).filter(Boolean).sort((W,F)=>W.localeCompare(F,"es",{sensitivity:"base"}));return{wins:q(Z),losses:q($)}},ZZ=(J,X)=>{const Y=String(X||"").trim(),Z=String(J||"").trim();if(!Y||!Z)return{arenaName:Y,wins:[],losses:[]};const $=EJ?.[OJ(Y)]?.matchups||{},H=new Map((L||[]).filter((_)=>_?.firebaseId).map((_)=>[_.firebaseId,_.nombre||"Sin nombre"])),E=([_,W])=>{if(!W||typeof W!=="object")return null;const F=String(W.winnerId||"").trim(),B=String(W.loserId||"").trim();if(!F||!B)return null;const D=F===Z;if(!D&&B!==Z)return null;const A=D?B:F;return{pairKey:_,arenaName:Y,profileId:Z,opponentId:A,opponentName:H.get(A)||"Sin nombre",winnerId:F,loserId:B}},q=Object.entries($).map(E).filter(Boolean).sort((_,W)=>_.opponentName.localeCompare(W.opponentName,"es",{sensitivity:"base"}));return{arenaName:Y,wins:q.filter((_)=>_.winnerId===Z),losses:q.filter((_)=>_.loserId===Z)}},yX=[...N0].sort((J,X)=>{const Y=YZ(J,XJ),Z=YZ(X,XJ);let $=0;if(typeof Y==="string"||typeof Z==="string")$=String(Y).localeCompare(String(Z),"es",{sensitivity:"base"});else $=Y-Z;if($===0)return(J.nombre||"").localeCompare(X.nombre||"","es",{sensitivity:"base"});return gJ==="asc"?$:-$}),mX=!CJ,G0=g(()=>_X?yX:yX.slice(0,10),[yX,_X]);return Q("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[CJ&&Q("aside",{className:"hud-frame hud-frame--panel w-72 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-8 z-20 shadow-xl overflow-y-auto relative",children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"mb-12 text-center flex-shrink-0",children:[Q("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>Q("button",{onClick:()=>{R(J.id);WQ(null);EQ(null);l(null);yJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-4 px-6 py-4 rounded-[2rem] text-sm transition-all ${U===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[Q(p,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>PY(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[Q(p,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[Q("button",{onClick:()=>MZ((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":CJ?"Replegar menú lateral":"Desplegar menú lateral",title:CJ?"Replegar menú lateral":"Desplegar menú lateral",children:Q(p,{name:CJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${CJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),y&&Q("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${CJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>yJ(""),role:"presentation",children:Q("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[Q("button",{type:"button",onClick:()=>yJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:Q(p,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[Q("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:Q("img",{src:y.fotos?.[0]||"https://via.placeholder.com/500x700",alt:y.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-6",children:[Q("div",{children:[Q("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),Q("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:y.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!y?.isAnonymousGallery&&Q("div",{className:"grid grid-cols-1 gap-4",children:[Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Profesión"},void 0,!1,void 0,this),Q("strong",{children:y.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),Q("strong",{children:`${y.nacionalidad||"No definida"} - ${y.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),Q("strong",{children:`${y.fechaNacimiento||"No informado"} - ${uJ(y.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Estatura"},void 0,!1,void 0,this),Q("strong",{children:y.estaturaCm?`${y.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"pt-2",children:Q("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!y?.isAnonymousGallery&&Q("button",{type:"button",onClick:()=>{xQ({isOpen:!0,profile:y})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{const J=C.current,X=J&&!J.closed?J:window.open("","_blank");C.current=X;oX({targetWindow:X,profileName:y?.nombre||"",profession:y?.profesion||"",photos:[...(y?.galeria?.fotos||[]).map((Y,Z)=>({...n(Y,"image"),sourceTag:"fotos",sourceIndex:Z})),...(y?.galeria?.videos||[]).map((Y,Z)=>({...n(Y,"video"),sourceTag:"videos",sourceIndex:Z}))],editingId:y?.firebaseId||y?.id||"",battlePhotoPrefs:y?.batallaFotosPreferidas||y?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:y?.fotos?.[0]||""});X?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!y?.isAnonymousGallery&&Q(wJ,{children:[Q("button",{type:"button",onClick:()=>{yJ("");dQ(y)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>bX(y),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="TALLER"&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"space-y-2",children:Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"max-w-2xl",children:Q("input",{id:"tallerSearchInput",type:"text",value:UX,onChange:(J)=>LY(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-3",children:[Q("button",{type:"button",onClick:()=>IZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${tJ?"btn-metal--danger":""}`,children:["Fotos incompletas ",tJ?"(Activo)":""]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>gZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${yQ?"btn-metal--danger":""}`,children:["Fotos Rotas ",yQ?"(Activo)":""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:JX.map((J)=>{const X=QJ(J.profesion),Y=gQ&&gQ===J.firebaseId,Z=s0(J),$=hZ===(J.firebaseId||J.nombre);return Q("button",{type:"button",onClick:()=>{if(cQ.current){cQ.current=!1;return}UQ("");yJ("");dQ(J)},onContextMenu:(H)=>{if(!tJ||!Z.length)return;H.preventDefault();H.stopPropagation();UQ((E)=>E===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!tJ||!Z.length)return;cQ.current=!1;clearTimeout(fQ.current);fQ.current=setTimeout(()=>{cQ.current=!0;UQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(fQ.current)},onTouchMove:()=>{clearTimeout(fQ.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Y?"taller-card--selected":""}`,children:[Q("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:Q("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:X.color,textShadow:`0 0 12px ${X.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),$&&Q("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(H)=>{H.preventDefault();H.stopPropagation();yZ(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[Q("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),Q("ul",{className:"space-y-1 mb-2",children:Z.map((H)=>Q("li",{className:"leading-tight",children:["• ",H]},H,!0,void 0,this))},void 0,!1,void 0,this),Q("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!JX.length&&Q("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),Q(n0,{isOpen:xZ,profile:y,onClose:()=>PZ(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="anonimo"&&!e&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:Q("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),Q("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),Q("div",{className:"mt-8 grid gap-4 md:grid-cols-2",children:[Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:VX,onChange:(J)=>{FY(J.target.value);CX("")},children:[Q("option",{value:"url",children:"Origen: URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Origen: Archivo local"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:RY,onChange:(J)=>KZ(J.target.value),children:JJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),VX==="url"?Q("input",{placeholder:"https://ejemplo.com/media.jpg o YouTube/Vimeo",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:UY,onChange:(J)=>VY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>BY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:DY,onChange:(J)=>TY(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:sZ,className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar en anónimo"},void 0,!1,void 0,this),AY&&Q("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:AY},void 0,!1,void 0,this),Q("div",{className:"md:col-span-2 border-t border-cyan-300/25 pt-4 mt-2 space-y-3",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audio para botón \uD83C\uDFB5"},void 0,!1,void 0,this),Q("input",{placeholder:"Nombre del audio",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:zY,onChange:(J)=>NY(J.target.value)},void 0,!1,void 0,this),Q("input",{placeholder:"https://ejemplo.com/audio.mp3",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:MY,onChange:(J)=>KY(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:dZ,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar audio en Firebase"},void 0,!1,void 0,this),wY?Q("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:wY},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="EXPLORAR"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((L||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const X=(L||[]).filter((Z)=>String(Z?.profesion||"").trim()===J).length,Y=KQ(J);return Q("div",{onClick:()=>WQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Y.baseColor,"--folder-glow":Y.glowColor},children:[Q("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:t0(J)},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[X," ",X===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e&&Q("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[Q("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":U==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":KQ(e).baseColor},children:[Q("div",{className:"flex items-center gap-3",children:[Q("button",{onClick:()=>WQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:Q("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>PY(U==="CATEGORIAS"?"":e),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:U==="CATEGORIAS"?c.find((J)=>J.firebaseId===e)?.label||"Archivo del Reino":e},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(L||[]).filter((J)=>{if(!J)return!1;if(U==="CATEGORIAS")return oQ(J).includes(e);return String(J.profesion||"").trim().toLowerCase()===String(e).trim().toLowerCase()}).map((J)=>{const X=Number(typeof BJ==="function"?BJ(J):0)||0,Y=X>=95?"card-score-badge--gold":X>=86?"card-score-badge--diamond":X>=75?"card-score-badge--fire":"",Z=QJ(J.profesion);return Q("div",{onClick:()=>{qQ(null);LY("");yJ(J.firebaseId||"")},onContextMenu:($)=>F0($,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":Z.color,"--card-neon-glow":Z.sombra},children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q("img",{src:HJ(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:KJ},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 left-3 z-20",children:[Q("button",{type:"button",onClick:($)=>{$.stopPropagation();kQ("");_Q(J);qQ((H)=>H===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:Q(p,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),RZ===J.firebaseId&&Q("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:($)=>$.stopPropagation(),children:[Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{qQ(null);dQ(J)},children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{bX(J);qQ(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:($)=>{$.stopPropagation();xQ({isOpen:!0,profile:J})},className:`card-score-badge ${Y} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[X>=75&&X<=85&&Q("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),Q("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),Q("span",{className:"card-score-badge__value text-lg font-black",children:typeof BJ==="function"?BJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-4 left-4 right-4",children:Q("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[Q("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,Q("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof uJ==="function"?uJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-between items-center mt-1",children:[Q("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),Q("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),jX&&LJ&&Q("div",{ref:T,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${QY.y}px`,left:`${QY.x}px`},children:[Q("button",{type:"button",onClick:U0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:V0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="GALERIA"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${tQ} · ${j0}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:[x0.map((J)=>Q("button",{type:"button",onClick:()=>zZ(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${v===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:$Z[J]},J,!1,void 0,this)),Q("button",{type:"button",onClick:()=>AX(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[Q("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",NJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:BQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:m.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:JJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:iZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v!=="PERSONAJE"&&aQ&&!cJ?Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:xJ.map((J)=>Q("button",{type:"button",onClick:()=>{EQ(J);l(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?Q("img",{src:HJ(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:KJ},void 0,!1,void 0,this):Q("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:Q(p,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[Q("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),Q("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):Q(wJ,{children:[v!=="PERSONAJE"&&aQ&&Q("div",{className:"flex items-center gap-3",children:Q("button",{type:"button",onClick:()=>{EQ(null);l(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[Q(p,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),v==="PERSONAJE"&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[Q("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),Q("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>eZ(J.target.value),children:[Q("option",{value:"",disabled:!0,children:uY.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),uY.map((J)=>Q("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),zJ.length>0?Q("div",{className:"flex flex-wrap gap-2",children:zJ.map((J)=>Q("button",{type:"button",onClick:()=>J0(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,Q(p,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v==="ETIQUETA"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:JJ.map((J)=>Q("button",{onClick:()=>Q0(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:HX(J,iJ.includes(J)),children:[J," · ",(SX[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),v==="PERSONAJE"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[Q("button",{onClick:()=>OX("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:HX("INICIAL",kJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),JJ.map((J)=>{return Q("button",{onClick:()=>OX(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:HX(J,kJ===J),children:[J," · ",lZ[J]||0]},J,!0,void 0,this)}),Q("button",{onClick:()=>OX("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:HX("100",kJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{type:"button",onClick:()=>sY(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!m.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[Q(p,{name:"play",size:14},void 0,!1,void 0,this),"Play ",cJ?.nombre||tQ]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>GZ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${BX?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería",children:"\uD83C\uDFB5"},void 0,!1,void 0,this),oJ.length>0&&Q(wJ,{children:[Q("select",{className:"filter-select min-w-[180px]",value:RX,onChange:(J)=>kZ(J.target.value),children:[Q("option",{value:"",children:"Audio principal"},void 0,!1,void 0,this),oJ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-${X}`,!1,void 0,this))]},void 0,!0,void 0,this),Q("select",{className:"filter-select min-w-[180px]",value:DX,onChange:(J)=>SZ(J.target.value),children:[Q("option",{value:"",children:"Audio secundario (opcional)"},void 0,!1,void 0,this),oJ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-b-${X}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[Q("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),Q("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:FX,onChange:(J)=>NZ(Number(J.target.value)),children:[3,5,7,10].map((J)=>Q("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),m.length===0?Q("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[Q("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:Q(p,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),Q("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:v==="ETIQUETA"&&iJ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q(wJ,{children:[Q("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:xX.map((J,X)=>{const Y=dJ(J.label),Z=KQ(J.profesion);return Q("button",{type:"button",onClick:()=>sY(X),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${Z.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},onMouseEnter:($)=>{$.currentTarget.style.transform="translateY(-2px) scale(1.01)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${Z.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${Z.glowColor} 52%, transparent)`},onMouseLeave:($)=>{$.currentTarget.style.transform="translateY(0) scale(1)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},children:Q("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const $=QQ(J.url);if($)return Q("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[Q("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:$.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return Q("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():Q("img",{src:HJ(J.url,XQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:KJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Y.bg,borderColor:Y.border,color:Y.text,boxShadow:`0 0 10px ${Y.glow}, 0 0 24px color-mix(in srgb, ${Y.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:Q("div",{className:"flex items-end justify-between gap-3",children:[Q("div",{className:"min-w-0 flex-1",children:[Q("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?Q("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),oZ&&Q("div",{className:"flex justify-center mt-8",children:Q("button",{type:"button",onClick:()=>HY((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",xX.length,"/",m.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("audio",{ref:VQ,loop:!0,preload:"none"},void 0,!1,void 0,this),Q("audio",{ref:CQ,loop:!0,preload:"none"},void 0,!1,void 0,this),w&&Q("div",{ref:mQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:CJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:dY,children:[Q("button",{type:"button",onClick:dY,className:`btn-metal btn-metal--danger absolute ${AJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:Q("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${AJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!AJ&&Q("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[Q("div",{children:[Q("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:w.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[w.profesion,w.nacionalidad?` · ${w.nacionalidad}`:""]},void 0,!0,void 0,this),w.autor?Q("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",w.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"flex items-center gap-3",children:[m.length>1&&Q(wJ,{children:[Q("button",{type:"button",onClick:()=>FQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${TJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":TJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>LX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${SJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":SJ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:w.type==="video"?"VIDEO":w.isGif?"GIF":"IMG"},void 0,!1,void 0,this),Q("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:dJ(w.label).bg,borderColor:dJ(w.label).border,color:dJ(w.label).text,boxShadow:`0 0 20px ${dJ(w.label).glow}`},children:w.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${AJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[w.type==="video"?(()=>{const J=QQ(w.url);if(J)return Q("iframe",{ref:MX,src:J.src,title:`${w.nombre} video`,className:`w-full ${AJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return Q("video",{ref:MX,src:w.url,controls:!0,playsInline:!0,muted:PX,autoPlay:TJ,onEnded:()=>{if(TJ&&m.length>1)RQ()},onError:()=>{if(m.length>1)RQ()},className:`w-full ${AJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():Q("img",{src:HJ(w.url,XQ),alt:`${w.nombre} - ${w.label||"galería"}`,ref:MX,className:`w-full ${AJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{KJ(J);if(m.length>1)RQ()}},void 0,!1,void 0,this),m.length>1&&Q(wJ,{children:AJ?Q("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]",children:[Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();LX((X)=>!X)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${SJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":SJ?"Aleatorio activado":"Aleatorio desactivado",children:SJ?"Random On":"Random Off"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();FQ((X)=>!X)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${TJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":TJ?"Pausar reproducción":"Reproducir",children:TJ?"Pause":"Play"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();RQ()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();RQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!AJ&&Q("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[VJ+1," de ",m.length," archivos visibles"]},void 0,!0,void 0,this),Q("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[jY?Q(wJ,{children:[Q("input",{type:"url",value:_Y,onChange:(J)=>vQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),Q("select",{value:qY,onChange:(J)=>bQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[Q("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),JJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:X0,disabled:OY,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:OY?"Guardando...":"Guardar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{bQ(w?.label||"");vQ(w?.url||"");hJ("");lJ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:()=>lJ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[Q("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),Q("span",{children:w?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),jY&&WY&&Q("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:WY},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),TX&&Q("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:CJ?{left:"18rem"}:void 0,onClick:()=>AX(!1),children:Q("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 mb-5",children:[Q("div",{children:[Q("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[NJ.length," enlace",NJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>AX(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:Q("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!fY.length?Q("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:Q("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):fY.map((J)=>Q("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[Q("div",{className:"mb-4",children:[Q("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-3",children:J.fotos.map((X)=>{const Y=!!bZ[X.id],Z=!!vZ[X.id],$=NX[X.id]??X.url;return Q("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[Q("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:Q("img",{src:XQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-2 min-w-0",children:[Q("div",{className:"flex flex-wrap items-center gap-2",children:[Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",X.label||"Sin etiqueta"]},void 0,!0,void 0,this),Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:X.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"url",value:$,onChange:(H)=>Y0(X.id,H.target.value),placeholder:"https://...",readOnly:!Z,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!Z?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[Q("button",{type:"button",onClick:()=>Z0(X),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>nY(X.id,!0),disabled:Y,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>$0(X),disabled:Y,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>H0(X),disabled:Y,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&!e&&!N&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col gap-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:A0,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),Q("button",{onClick:()=>UZ((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),FZ&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[Q("select",{value:tX,onChange:(J)=>VZ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:pX.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>z0(tX,z,h),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!z,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{children:[Q("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!z?"Paso 1: elegí un modo de enfrentamiento":QX&&!h?`Paso 2: elegí una opción de ${ZQ(z)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${ZQ(z)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!z&&Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:iX.map((J)=>Q("button",{onClick:()=>{_J(J.id);DJ(J.id==="GENERAL"?"all":"");k(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),z&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",ZQ(z)]},void 0,!0,void 0,this),Q("button",{onClick:()=>{_J(null);DJ("");k(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),QX&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",ZQ(z)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:M0.map((J)=>Q("button",{onClick:()=>{DJ(J.key);k(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${h===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",Q("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),QX&&!h&&Q("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[pX.map((J)=>{const X=$Q(J,z,h),Y=Boolean(ZJ?.[X]?.isFinished);return Q("button",{disabled:QX&&!h,onClick:()=>{k(J);if(!ZJ[X])eY(J,z,h)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Y?"battle-mode-card--completed":""}`,children:[Q("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Y?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Y&&Q("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&N&&(()=>{const J=$Q(N,z,h),X=ZJ[J],Y=L.find((E)=>E.firebaseId===X?.championId),Z=L.find((E)=>E.firebaseId===X?.challengerId),$=Y?tY(N,Y.firebaseId):null,H=Z?tY(N,Z.firebaseId):null;return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:()=>k(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),Q("button",{onClick:()=>{k(null);_J(null);DJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),Q("button",{onClick:()=>BZ((E)=>!E),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),CZ&&Q("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const E=Object.keys(X?.matchups||{}).filter((q)=>!!X?.matchups?.[q]);if(!X||!E.length)return Q("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return Q("div",{className:"space-y-2",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),E.map((q)=>{const[_,W]=q.split("__"),F=L.find((A)=>A.firebaseId===_),B=L.find((A)=>A.firebaseId===W),D=F?.nombre||_,G=B?.nombre||W;return Q("button",{onClick:()=>QZ(N,_,W,z,h),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:Q("span",{className:"text-xs text-white font-semibold",children:[D," vs ",G]},void 0,!0,void 0,this)},q,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),Q("div",{className:"min-w-0",children:[Q("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:N},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",ZQ(z)]},void 0,!0,void 0,this),X?.activeGroupLabel&&Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:X.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!X&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),Q("button",{onClick:()=>eY(N,z,h),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&X.isFinished&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),Q("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Y&&Z&&!X.isFinished&&Q("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[Q("button",{onClick:()=>JZ(N,Y.firebaseId,z,h),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":KQ(Y.profesion).baseColor},children:[Q("img",{src:OZ(Y,N),alt:Y.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:KJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Y.nombre},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",pY(Y)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",$?.wins||0," · Batallas: ",$?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",$?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col items-center justify-center text-center",children:[Q("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{onClick:()=>JZ(N,Z.firebaseId,z,h),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":KQ(Z.profesion).baseColor},children:[Q("img",{src:OZ(Z,N),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:KJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",pY(Z)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),U==="RANKING"&&!e&&Q("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[Q("div",{className:"ranking-table-toolbar",children:Q("button",{type:"button",onClick:()=>AZ((J)=>!J),className:`ranking-toggle-totality ${_X?"is-active":"is-inactive"}`,children:"Ver totalidad"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"ranking-table-scroll",children:Q("table",{className:`w-full ${mX?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[Q("thead",{className:"theme-surface-soft",children:Q("tr",{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:Q("button",{type:"button",onClick:()=>eJ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",XJ==="nombre"?gJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>eJ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",XJ==="Rostro"?gJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>eJ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",XJ==="Cuerpo"?gJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>eJ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",XJ==="Actitud"?gJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),mX&&Q(wJ,{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>eJ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",XJ==="nacionalidad"?gJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>eJ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",XJ==="edad"?gJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("th",{className:"px-8 py-6 text-right",children:Q("div",{className:"flex flex-col items-end gap-1",children:[Q("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),Q("select",{value:XJ,onChange:(J)=>{XY(J.target.value);qX("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[Q("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),Q("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[Q("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:YQ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("tbody",{children:G0.map((J,X)=>Q("tr",{onClick:()=>dQ(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${X===0?"podium-1":X===1?"podium-2":X===2?"podium-3":"hover:bg-white/5"}`,children:[Q("td",{className:"px-8 py-5",children:Q("span",{className:`font-black italic rock-carved-text ${X===0?"text-gold text-4xl":X===1?"text-silver text-3xl":X===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",X+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-8 py-5",children:Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:QJ(J.profesion).color,boxShadow:`0 0 10px ${QJ(J.profesion).sombra}`},children:Q("img",{src:HJ(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:KJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();OQ({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:pQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();OQ({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:iQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();OQ({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:lQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),mX&&Q(wJ,{children:[Q("td",{className:"px-4 py-5 text-center",children:[Q("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),Q("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[uJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-8 py-5 text-right",children:Q("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${X===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":X===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":X===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:Q("span",{className:`font-black leading-none ${X===0?"text-gold":X===1?"text-silver":X===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:K0(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),UJ.isOpen&&UJ.profile&&UJ.category&&(()=>{const J=w0(UJ.profile.firebaseId,UJ.category),X=fJ[UJ.category]||[];return Q("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${CJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{OQ({isOpen:!1,profile:null,category:null});HQ(null)},children:Q("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Y)=>Y.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[UJ.profile.nombre," · ",UJ.category]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>{OQ({isOpen:!1,profile:null,category:null});HQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"mb-4",children:[Q("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:X.map((Y)=>Q("button",{type:"button",onClick:()=>{const Z=ZZ(UJ.profile.firebaseId,Y);HQ(Z)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black",children:Y},`breakdown-item-${Y}`,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!wQ?.arenaName&&Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Q("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?Q("ul",{className:"space-y-2",children:J.wins.map((Y,Z)=>Q("li",{className:"text-sm text-emerald-200 font-semibold",children:Y},`win-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?Q("ul",{className:"space-y-2",children:J.losses.map((Y,Z)=>Q("li",{className:"text-sm text-rose-200 font-semibold",children:Y},`loss-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),wQ?.arenaName&&Q("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[Q("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",wQ.arenaName]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>HQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Y)=>{const Z=Y==="wins",$=wQ[Y]||[];return Q("div",{className:`rounded-xl border p-3 min-h-36 ${Z?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[Q("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${Z?"text-emerald-300":"text-rose-300"}`,children:Z?"Ganadas":"Perdidas"},void 0,!1,void 0,this),$.length?Q("ul",{className:"space-y-2",children:$.map((H,E)=>Q("li",{className:"flex items-center justify-between gap-2",children:[Q("span",{className:`text-sm font-semibold ${Z?"text-emerald-100":"text-rose-100"}`,children:H.opponentName},void 0,!1,void 0,this),Q("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await QZ(H.arenaName,H.profileId,H.opponentId);const _=ZZ(UJ.profile.firebaseId,H.arenaName);HQ(_)}catch(_){console.error("No se pudo eliminar la batalla del desglose:",_);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Y}-${H.pairKey}-${E}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:`text-xs ${Z?"text-emerald-200/70":"text-rose-200/70"}`,children:Z?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Y}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),WX.isOpen&&WX.profile&&(()=>{const J=WX.profile,X=GX(J),Y=Object.entries(fJ);return Q("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>xQ({isOpen:!1,profile:null}),children:Q("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:(Z)=>Z.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();xQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:YQ.map((Z)=>Q("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[Z,": ",Number(X[Z]||0).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Y.map(([Z,$])=>Q("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[Z,": ",gY(J,Z).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(Z)=>Z.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",BJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),U==="CATEGORIAS"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex justify-between items-end",children:[Q("div",{children:Q("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>{wX();GQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.length===0?Q("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:Q("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:c.map((J)=>Q("div",{onClick:()=>WQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[Q("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[Q("button",{onClick:(X)=>{X.stopPropagation();$J({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});GQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(p,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:(X)=>{X.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))W0(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(p,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute inset-0",children:[Q("img",{src:HJ(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:KJ},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[Q("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[L.filter((X)=>oQ(X).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),aX&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{onClick:()=>IJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:Q(p,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:q0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 gap-16",children:Q("div",{className:"space-y-8",children:[Q("div",{className:"flex flex-col items-center gap-6",children:[Q("div",{className:"flex items-center gap-4 self-start",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:Q(p,{name:t?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:t?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),t&&Q("button",{type:"button",onClick:()=>{d0({...x,firebaseId:t})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[Q(p,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:x.fotos.length>0&&x.fotos[0]!==""?Q("img",{src:HJ(x.fotos[0],XQ),className:"w-full h-full object-cover",alt:"Preview",onError:KJ},void 0,!1,void 0,this):Q("div",{className:"text-center p-4",children:[Q(p,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[Q("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),nQ.completed.length>0?Q("ul",{className:"mt-3 space-y-1",children:nQ.completed.map((J)=>Q("li",{className:"text-xs text-emerald-100/90",children:[Q("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),nQ.missing.length>0?Q("ul",{className:"mt-3 space-y-1",children:nQ.missing.map((J)=>Q("li",{className:"text-xs text-amber-100/90",children:Q("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:x.nombre,onChange:(J)=>s({...x,nombre:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),Q("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:x.fotos[0]||"",onChange:(J)=>s((X)=>IY(X,J.target.value))},void 0,!1,void 0,this),Q("input",{type:"file",accept:"image/*,.gif",onChange:fZ,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),Q("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.fechaNacimiento,onChange:(J)=>s({...x,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),Q("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.estaturaCm,onChange:(J)=>s({...x,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.nacionalidad,onChange:(J)=>s({...x,nacionalidad:J.target.value})},void 0,!1,void 0,this),Q("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.ciudad,onChange:(J)=>s({...x,ciudad:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1 group",children:[Q("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),Q("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:x.profesion,onChange:(J)=>s({...x,profesion:J.target.value}),children:[Q("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),Q("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),Q("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),Q("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),Q("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),Q("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),Q("option",{value:"Periodista",className:"theme-surface-card",children:"\uD83D\uDC53 Periodista"},void 0,!1,void 0,this),Q("option",{value:"Bailarina",className:"theme-surface-card",children:"\uD83D\uDC83 Bailarina"},void 0,!1,void 0,this),Q("option",{value:"Atleta",className:"theme-surface-card",children:"\uD83C\uDFCB️‍♀️ Atleta"},void 0,!1,void 0,this),Q("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:Q(p,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex gap-4",children:[t&&Q("button",{type:"button",onClick:O0,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:Q(p,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs",children:t?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),DZ&&Q("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:vX,children:Q("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"space-y-3",children:[Q("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),Q("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",Q("span",{className:"font-black text-white",children:LJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),JY&&Q("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:JY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-end gap-3",children:[Q("button",{type:"button",onClick:vX,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:L0,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),rX&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{type:"button",onClick:()=>{wX();GQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:Q(p,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:_0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[Q("div",{className:"space-y-8",children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:Q(p,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:K.label,onChange:(J)=>$J({...K,label:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"w-full",children:Q("div",{className:"space-y-1 w-full",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),Q("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:K.coverImg,onChange:(J)=>$J({...K,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-6",children:[Q("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[Q(p,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),Q("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.nacionalidades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>$J({...K,reglas:{...K.reglas,nacionalidades:K.reglas.nacionalidades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.nacionalidades.includes(J.target.value))$J({...K,reglas:{...K.reglas,nacionalidades:[...K.reglas.nacionalidades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),nZ.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.ciudades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>$J({...K,reglas:{...K.reglas,ciudades:K.reglas.ciudades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.ciudades.includes(J.target.value))$J({...K,reglas:{...K.reglas,ciudades:[...K.reglas.ciudades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),pZ.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.profesiones.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>$J({...K,reglas:{...K.reglas,profesiones:K.reglas.profesiones.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.profesiones.includes(J.target.value))$J({...K,reglas:{...K.reglas,profesiones:[...K.reglas.profesiones,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(lX).map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMin,onChange:(J)=>$J({...K,reglas:{...K.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMax,onChange:(J)=>$J({...K,reglas:{...K.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.caracteristica,onChange:(J)=>$J({...K,reglas:{...K.reglas,caracteristica:J.target.value}}),children:YQ.map((J)=>Q("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.operador,onChange:(J)=>$J({...K,reglas:{...K.reglas,operador:J.target.value}}),children:[Q("option",{children:"Superior a"},void 0,!1,void 0,this),Q("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:K.reglas.umbral,onChange:(J)=>$J({...K,reglas:{...K.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},r0=ReactDOM.createRoot(document.getElementById("root"));r0.render(Q(a0,{},void 0,!1,void 0,this));