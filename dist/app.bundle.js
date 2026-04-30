import{jsxDEV as Q,Fragment as wJ}from"react/jsx-dev-runtime";const _0={apiKey:"AIzaSyAcW679YdIT03pyq8IgKKnR8oyO4_fvpFs",authDomain:"g2elite-a3b85.firebaseapp.com",databaseURL:"https://g2elite-a3b85-default-rtdb.firebaseio.com/",projectId:"g2elite-a3b85",storageBucket:"g2elite-a3b85.firebasestorage.app",messagingSenderId:"951346482286",appId:"1:951346482286:web:6001135252de2a4d982a7f"};if(!firebase.apps.length)firebase.initializeApp(_0);const K=firebase.database(),{useState:T,useEffect:o,useMemo:m,useRef:mJ}=React,JJ=["C","P","B","N","S","E","X"],aQ="anonimo/galeria",DJ="__anonimo_gallery__",O0=["PERSONAJE","ETIQUETA","GENERAL"],fY={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},uJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],W0={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},GX=()=>uJ.reduce((q,W)=>{q[W.id]="";return q},{}),qJ=(q={})=>{const W=GX(),C=q&&typeof q==="object"?q:{};return Object.keys(W).reduce((A,L)=>{A[L]=typeof C[L]==="string"?C[L].trim():"";return A},{...W})},rQ=(q="")=>uJ.find((W)=>W.id===q),E0=(q="")=>W0[(q||"").trim().toLowerCase()]||"",eQ={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},rJ=(q,W)=>{if(!W)return 0;return(q+W)%W},cY=(q,W,C=!1)=>{const A=Array.isArray(W)?W.length:0;if(!A)return null;if(A===1)return 0;if(C){const L=W.map((v,c)=>({item:v,idx:c})).filter(({item:v,idx:c})=>c!==q&&v&&v.url).map(({idx:v})=>v);if(!L.length)return rJ((q??0)+1,A);return L[Math.floor(Math.random()*L.length)]}return rJ((q??0)+1,A)},fJ=(q)=>eQ[q]||eQ.DEFAULT,JX=(q,W=!1)=>{const C=q==="INICIAL"?eQ.DEFAULT:q==="100"?eQ.B:fJ(q);return{"--btn-neon-color":C.glow,borderColor:C.border,color:C.text,boxShadow:W?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${C.border}, 0 0 20px ${C.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${C.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${C.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${C.glow} 70%, transparent)`,filter:W?"brightness(1.14)":"brightness(1)"}},sY=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,L0=/\.gif(\?.*)?$/i,F0=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,U0=/vimeo\.com\/(?:video\/)?(\d+)/i,eJ=(q)=>{const W=(q||"").trim();if(!W)return null;const C=W.match(F0);if(C)return{provider:"youtube",src:`https://www.youtube.com/embed/${C[1]}`,title:"Video de YouTube"};const A=W.match(U0);if(A)return{provider:"vimeo",src:`https://player.vimeo.com/video/${A[1]}`,title:"Video de Vimeo"};return null},B0=["eporner.com"],dY=(q="")=>{const W=String(q||"").trim();if(!W||W.startsWith("data:")||W.startsWith("blob:"))return!1;try{const A=new URL(W).hostname.toLowerCase();return B0.some((L)=>A===L||A.endsWith(`.${L}`))}catch{return!1}},$J=(q="",W="")=>{const C=String(q||"").trim();if(!C||dY(C))return W;return C},cJ=(q="",W="")=>{if(W==="video"||W==="image")return W;const C=(q||"").trim();if(sY.test(C)||eJ(C))return"video";return"image"},SX=(q="")=>{return typeof q==="string"?q.trim():""},p=(q,W="")=>{if(typeof q==="string")return{url:$J(q.trim(),""),label:"",type:cJ(q,W),autor:""};if(q&&typeof q==="object"){const C=$J((q.url||"").trim(),"");return{url:C,label:JJ.includes(q.label)?q.label:"",type:cJ(C,q.type||W),autor:SX(q.autor)}}return{url:"",label:"",type:cJ("",W),autor:""}},C0=(q)=>p(q).url,nY=(q)=>p(q).label,sJ=(q)=>p(q).type,xX=(q,W,C="image")=>Array.isArray(q?.[W])?q[W].map((A)=>p(A,C)).filter((A)=>A.url):[],V0=(q={})=>({firebaseId:DJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:xX(q,"fotos","image"),gifs:xX(q,"gifs","image"),videos:xX(q,"videos","video")},batallaFotosPreferidas:GX(),puntuaciones:TQ(),isAnonymousGallery:!0}),T0=(q={})=>{if(q?.isAnonymousGallery||q?.firebaseId===DJ)return"anonimo";return q?.firebaseId||""},R0=(q={})=>{const W=$J(String(q?.fotos?.[0]||"").trim(),""),C=qJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{});if(!W)return!1;return uJ.filter((A)=>A.id!=="perfil").every((A)=>Boolean(String(C?.[A.id]||"").trim()))},A0=(q={})=>{const W=[],C=$J(String(q?.fotos?.[0]||"").trim(),""),A=qJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{});if(!C)W.push("Perfil");uJ.filter((L)=>L.id!=="perfil").forEach((L)=>{if(!String(A?.[L.id]||"").trim())W.push(L.label)});return W},D0=(q=null)=>{if(!q)return;const W=window.open("","_blank");if(!W)return;const C=q?.firebaseId||q?.id||"",A=Array.isArray(q?.galeria?.fotos)?q.galeria.fotos.map((R)=>p(R,"image")).filter((R)=>R.url).map((R,k)=>({...R,sourceTag:"fotos",sourceIndex:k})):[],L=A.filter((R)=>R.type==="image"&&R.sourceTag==="fotos"),v=qJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{}),c=$J(String(q?.fotos?.[0]||q?.foto||"").trim(),""),QJ=A.filter((R)=>R.type==="image"&&R.url).reduce((R,k)=>{R[k.url]=k;return R},{}),s=A.length?A.map((R,k)=>`
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
                            <img src="${R.url}" alt="Multimedia ${k+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${R.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',G=L.length?L.map((R,k)=>`
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
                            <img src="${R.url}" alt="Imagen rota ${k+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${R.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',U=uJ.map((R)=>{const k=R.id==="perfil",S=k?c:v[R.id]||"",z=S?k?{url:S}:QJ[S]||{url:S,label:"",sourceIndex:-1}:null,_J=Boolean(S);return`
                    <div class="multimedia-slot-card ${_J?"is-assigned":"is-missing"}" data-slot-id="${R.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${R.label}</span>
                            <span class="multimedia-slot-state">${_J?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${_J?`<img src="${z.url}" alt="${R.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!k?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${R.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${R.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");W.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${q?.nombre||"Personaje"}</title>
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
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${q?.nombre||"Personaje"}</p>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-6 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">Galería</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${s}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${U}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${G}</div>
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
                            const slotConfigById = ${JSON.stringify(uJ.reduce((R,k)=>{R[k.id]=k;return R},{}))};
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
            `);W.document.close()},z0=({isOpen:q=!1,profile:W=null,onClose:C=()=>{}})=>{const[A,L]=T(!0),[v,c]=T(!0);o(()=>{if(!q)return;L(!0);c(!0)},[q,W?.firebaseId]);if(!q||!W)return null;const QJ=Array.isArray(W?.galeria?.fotos)?W.galeria.fotos.map((G)=>p(G,"image")).filter((G)=>G.url):[],s=Object.entries(W?.puntuaciones||{}).map(([G,U])=>({label:G,value:Number(U)||0})).sort((G,U)=>U.value-G.value).slice(0,5);return Q("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:C,role:"presentation",children:[Q("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(G)=>G.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[Q("button",{type:"button",onClick:C,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),Q("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),Q("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:W?.nombre||"Personaje"},void 0,!1,void 0,this),Q("div",{className:"mt-6 space-y-4",children:[Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>L((G)=>!G),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"Galería"},void 0,!1,void 0,this),Q("span",{children:A?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A&&Q("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:QJ.length?QJ.map((G,U)=>Q("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:Q("img",{src:G.url,alt:`Multimedia ${U+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${G.url}-${U}`,!1,void 0,this)):Q("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>c((G)=>!G),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"5 Principales"},void 0,!1,void 0,this),Q("span",{children:v?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v&&Q("div",{className:"px-4 pb-4 space-y-2",children:s.length?s.map((G)=>Q("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[Q("span",{className:"text-sm text-slate-200 uppercase",children:G.label},void 0,!1,void 0,this),Q("strong",{className:"text-cyan-200",children:G.value},void 0,!1,void 0,this)]},G.label,!0,void 0,this)):Q("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),isTeamModalOpen&&Q("div",{className:"fixed inset-0 z-[150] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"theme-surface-card border theme-border-secondary w-full max-w-2xl rounded-3xl p-8",children:[Q("h3",{className:"text-xl font-black italic text-white mb-6",children:"Agregar equipo"},void 0,!1,void 0,this),Q("form",{onSubmit:saveTeam,className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre del equipo",className:"w-full theme-surface-soft border theme-border-secondary p-4 rounded-xl outline-none text-white font-bold",value:teamFormData.nombre,onChange:(G)=>setTeamFormData((U)=>({...U,nombre:G.target.value}))},void 0,!1,void 0,this),Q("input",{required:!0,placeholder:"URL del equipo",className:"w-full theme-surface-soft border theme-border-secondary p-4 rounded-xl outline-none text-white font-bold",value:teamFormData.url,onChange:(G)=>setTeamFormData((U)=>({...U,url:G.target.value}))},void 0,!1,void 0,this),Q("div",{className:"flex justify-end gap-3 pt-2",children:[Q("button",{type:"button",onClick:()=>setIsTeamModalOpen(!1),className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold px-6 py-3 rounded-xl text-[10px]",children:"Guardar equipo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},pY=async(q="",{timeoutMs:W=12000,retries:C=1}={})=>{const A=String(q||"").trim();if(!A)return!0;const L=()=>new Promise((v)=>{const c=new Image;let QJ=!1;const s=(U)=>{if(QJ)return;QJ=!0;c.onload=null;c.onerror=null;v(Boolean(U))},G=window.setTimeout(()=>s(!0),W);c.onload=()=>{clearTimeout(G);const U=Number(c.naturalWidth)>0&&Number(c.naturalHeight)>0;s(!U)};c.onerror=()=>{clearTimeout(G);s(!0)};c.src=A});for(let v=0;v<=C;v+=1)if(!await L())return!1;return!0},iY=(q,W)=>{const C=(W||"").trim().toLowerCase(),A=Array.isArray(q?.galeria?.fotos)?q.galeria.fotos.map((S)=>p(S,"image")).filter((S)=>S.type==="image"&&S.url):[],v=$J(q?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(C))return v;const QJ=(S=[])=>{const z=A.filter((g)=>S.includes(nY(g)));if(!z.length)return"";const _J=Math.floor(Math.random()*z.length);return z[_J]?.url||""},s=E0(C),G=rQ(s);if(!G)return v;const R=qJ(q?.batallaFotosPreferidas)[s];if(R){if(A.some((z)=>z.url===R))return R}return QJ(G.labels)||v},N0=(q="")=>L0.test((q||"").trim()),JQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",PX=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${JQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,zJ=(q)=>{const W=q?.currentTarget||q?.target;if(!W||W.dataset.fallbackApplied==="true")return;W.dataset.fallbackApplied="true";W.src=JQ;W.style.objectFit="contain";W.style.padding="12px";W.style.background="#020617";W.alt="Imagen no disponible"},g0="g2_elite_database_v4",h0="g2_elite_categories_v4",QQ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],vX=[...QQ],bX=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],M0=bX.map((q)=>q.id),XQ=(q="")=>{return bX.find((C)=>C.id===q)?.label||"General"},YQ=(q,W="GENERAL",C="")=>{const A=String(q||"").trim(),L=String(W||"GENERAL").trim().toUpperCase(),v=String(C||"").trim().toLowerCase();if(!A)return"";return`${L}::${v||"all"}::${A}`},WJ=(q="")=>String(q||"").trim(),lY=(q="")=>{const W=String(q||"").split("::");if(W.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const C=W.slice(2).join("::");return{scopeId:String(W[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:String(W[1]||"all").trim().toLowerCase()||"all",arenaName:String(C||"").trim()}},TQ=()=>QQ.reduce((q,W)=>{q[W]=0;return q},{}),oY=[],IX={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},Periodista:{glyph:"quill",color:"rgba(234, 179, 8, 0.8)",tailwind:"yellow-500"},Bailarina:{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Atleta:{glyph:"shield",color:"rgba(59, 130, 246, 0.8)",tailwind:"blue-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},y0=(q="")=>{const W=String(q||"").toLowerCase();if(W.includes("cantante"))return"crown";if(W.includes("nsfw"))return"torch";if(W.includes("actriz")||W.includes("actor"))return"theater";if(W.includes("modelo"))return"floron";if(W.includes("influencer"))return"sigil";if(W.includes("periodista"))return"quill";if(W.includes("bailarina"))return"floron";if(W.includes("atleta"))return"shield";return"shield"},K0=(q="")=>{const W=String(q||"").toLowerCase();if(W.includes("cantante"))return"\uD83C\uDFA4";if(W.includes("nsfw"))return"\uD83D\uDD25";if(W.includes("actriz")||W.includes("actor"))return"\uD83C\uDFAC";if(W.includes("modelo"))return"\uD83D\uDC60";if(W.includes("influencer"))return"\uD83D\uDCF1";if(W.includes("periodista"))return"\uD83D\uDC53";if(W.includes("bailarina"))return"\uD83D\uDC83";if(W.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},RQ=(q="")=>{const W=String(q||"").trim(),C=IX[W]||IX.Otro,A=String(C?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),L=String(C?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:A,glowColor:L}},m0=({variant:q="sigil",size:W=18,className:C="",tint:A="currentColor"})=>{const L={width:W,height:W,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:C};if(q==="crown")return Q("svg",{...L,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),Q("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="shield")return Q("svg",{...L,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),Q("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="floron")return Q("svg",{...L,stroke:A,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 4v16"},void 0,!1,void 0,this),Q("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),Q("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),Q("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="quill")return Q("svg",{...L,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),Q("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="torch")return Q("svg",{...L,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),Q("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),Q("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="theater")return Q("svg",{...L,stroke:A,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),Q("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return Q("svg",{...L,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),Q("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},i=({name:q,size:W=20,className:C=""})=>{return Q("i",{"data-lucide":q.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:W,height:W},className:`inline-block ${C}`},void 0,!1,void 0,this)},gX=({targetWindow:q,profileName:W,profession:C,photos:A,editingId:L,battlePhotoPrefs:v={},profilePhotoUrl:c=""})=>{if(!q||q.closed)return;const QJ=qJ(v),s=$J(String(c||"").trim(),""),G=(A||[]).map((U,R)=>{const k=p(U);return{...k,sourceTag:U?.sourceTag||(k.type==="video"?"videos":"fotos"),sourceIndex:typeof U?.sourceIndex==="number"?U.sourceIndex:R}}).filter((U)=>U.url);q.document.open();q.document.write(`
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
                    ${uJ.map((U)=>{const R=U.id==="perfil",k=R?s:QJ[U.id]||"",S=Boolean(k),z=!R;return`
                            <div class="gallery-slot-card" data-slot-id="${U.id}" style="border:1px solid ${S?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${S?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${S?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${S?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${U.label}</div>
                                <div style="font-size:11px; color:${S?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${S?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${S?`<img src="${k}" alt="Vista previa ${U.label}" onerror="${PX}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
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
                    ${G.length?G.map((U,R)=>{const k=C0(U),S=nY(U),z=fJ(S),_J={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},g=_J[C?.toUpperCase()]||_J.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${R}"
                            data-source-index="${U.sourceIndex}"
                            data-media-type="${sJ(U)}"
                            data-url="${k}"
                            data-compatible-slots="${S}"
                            draggable="${sJ(U)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${g.color};
                                box-shadow: 0 0 15px ${g.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${sJ(U)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${g.color}, inset 0 0 15px ${g.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${g.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${U.sourceIndex}, mediaType: '${sJ(U)}', id: '${L}'}, '*');"
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
                        ${sJ(U)==="video"?(()=>{const RJ=eJ(k);if(RJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${RJ.provider.toUpperCase()}</div></div>`;return`<video src="${k}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${k}" alt="Imagen de la galería" onerror="${PX}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${sJ(U)==="video"?"VIDEO":"IMG"}</div>
                        ${S?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${z.bg}; border: 1px solid ${z.border}; color: ${z.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${z.glow}, 0 0 24px ${z.glow}; text-shadow: 0 0 10px ${z.glow}; backdrop-filter: blur(8px);">${S}</div>`:""}
                        ${U.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${S?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${U.autor}</div>`:""}
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
                        ${G.map((U,R)=>{const k=sJ(U),S=eJ(U.url);return`
                            <div class="viewer-slide" id="viewer-slide-${R}">
                                ${k==="video"?S?`<iframe src="${S.src}" title="${S.title} ${R+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${U.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${U.url}" alt="Vista completa ${R+1}" onerror="${PX}" />`}
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
        `);q.document.close()},k0=()=>{const[q,W]=React.useState(null),C=mJ(null),A=mJ(null),[L,v]=T([]),c={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},QJ=(J="")=>{const X=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return c[X]||c.DEFAULT},[s,G]=T(oY),[U,R]=T("EXPLORAR"),[k,S]=T(null),[z,_J]=T(null),[g,RJ]=T(""),[ZJ,NJ]=T({}),[EJ,GJ]=T({}),[tY,aY]=T(!1),[hX,rY]=T(vX[0]||""),[QX,ZQ]=T(null),[eY,JZ]=T(!1),[yX,SJ]=T(!1),[mX,AQ]=T(!1),[a,$Q]=T(null),[QZ,HQ]=T(null),[LJ,jQ]=T(null),[XZ,uX]=T(!1),[fX,DQ]=T(""),[e,qQ]=React.useState(null),[XX,zQ]=T(!1),[cX,YZ]=T({x:0,y:0}),[XJ,sX]=T("promedio"),[xJ,YX]=T("desc"),[ZZ,$Z]=T([]),[G0,HZ]=T(!1),[dX,jZ]=T({nombre:"",url:""}),[BJ,_Q]=T({isOpen:!1,profile:null,category:null}),[ZX,NQ]=T({isOpen:!1,profile:null}),[MJ,$X]=T("INICIAL"),[b,qZ]=T("GENERAL"),[CJ,t]=T(null),[MQ,OQ]=T(null),[WQ,HX]=T([]),[dJ,nX]=T([]),[nJ,KQ]=T(!1),[EQ,pX]=T(!1),[jX,_Z]=T(5),[iX,lX]=T(20),[VJ,OZ]=T(!0),[oX,pJ]=T(!1),[tX,kQ]=T(""),[aX,wQ]=T(""),[rX,PJ]=T(""),[eX,JY]=T(!1),[qX,QY]=T(""),[_X,XY]=T("url"),[YY,ZY]=T(""),[$Y,HY]=T(null),[jY,WZ]=T(JJ[0]),[qY,_Y]=T(""),[OY,OX]=T(""),[GQ,vJ]=T(""),[EZ,LZ]=T(!1),[WX,EX]=T(!1),[WY,LX]=T({}),[FX,EY]=T({}),[FZ,SQ]=T({}),[UZ,LY]=T({}),[iJ,BZ]=T(!1),[CZ,LQ]=T(""),bJ=mJ(null),xQ=mJ(null),PQ=mJ(null),vQ=mJ(!1),bQ=mJ(null),FY=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",equipoId:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),IQ=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:GX(),puntuaciones:TQ()}),[x,n]=T(IQ);o(()=>{if(!z){if(g)RJ("");return}if(z==="GENERAL"&&g!=="all")RJ("all")},[z,g]);const UX=(J={})=>{const X=IQ(),Y=J&&typeof J==="object"?J:{},Z=Y?.puntuaciones&&typeof Y.puntuaciones==="object"?{...X.puntuaciones,...Y.puntuaciones}:X.puntuaciones;return{...Y,...X,nombre:typeof Y.nombre==="string"?Y.nombre:"",nacionalidad:typeof Y.nacionalidad==="string"?Y.nacionalidad:"",ciudad:typeof Y.ciudad==="string"?Y.ciudad:"",profesion:typeof Y.profesion==="string"?Y.profesion:"",fechaNacimiento:typeof Y.fechaNacimiento==="string"?Y.fechaNacimiento:"",estaturaCm:Y.estaturaCm===void 0||Y.estaturaCm===null?"":Y.estaturaCm,fotos:Array.isArray(Y.fotos)?Y.fotos:[],galeria:{fotos:Array.isArray(Y?.galeria?.fotos)?Y.galeria.fotos:[],gifs:Array.isArray(Y?.galeria?.gifs)?Y.galeria.gifs:[],videos:Array.isArray(Y?.galeria?.videos)?Y.galeria.videos:[]},batallaFotosPreferidas:qJ(Y?.batallaFotosPreferidas),puntuaciones:Z}},gQ=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===DJ)return;n(UX(J));$Q(J.firebaseId||J.id||null);SJ(!0)},VZ=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const Y=C.current,Z=Y&&!Y.closed?Y:window.open("","_blank");C.current=Z;gX({targetWindow:Z,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map(($,H)=>({...p($,"image"),sourceTag:"fotos",sourceIndex:H})),...(J?.galeria?.videos||[]).map(($,H)=>({...p($,"video"),sourceTag:"videos",sourceIndex:H}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});Z?.focus();vJ("");LQ("")},UY=(J="")=>{if(U==="anonimo")return;const X=String(J||"").trim();$Q(null);n({...IQ(),profesion:X});SJ(!0)},hQ=m(()=>{const X=[{key:"nombre",label:"Nombre",value:x?.nombre},{key:"fotos.0",label:"Foto principal",value:x?.fotos?.[0]},{key:"profesion",label:"Profesión",value:x?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:x?.nacionalidad},{key:"ciudad",label:"Ciudad",value:x?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:x?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:x?.estaturaCm}].map((Y)=>{const Z=typeof Y.value==="string"?Y.value.trim():Y.value,$=!(Z===""||Z===void 0||Z===null),H=Y.key==="fotos.0"?$?"SI":"NO":$?String(Z):"Sin completar";return{...Y,isComplete:$,preview:H}});return{completed:X.filter((Y)=>Y.isComplete),missing:X.filter((Y)=>!Y.isComplete)}},[x]),S0=async({profileId:J,url:X,tag:Y="fotos",label:Z="",type:$="image",autor:H=""})=>{const E=(X||"").trim(),j=JJ.includes(Z)?Z:"",O=cJ(E,$);if(!J||!E)return[];const _=K.ref(`perfiles/${J}/galeria/${Y}`),B=[...(await _.once("value")).val()||[],{url:E,label:j,type:O,autor:SX(H)}];await _.set(B);if(J===a)n((M)=>({...M,galeria:{...M.galeria||{fotos:[],gifs:[],videos:[]},[Y]:B}}));return B},TZ=async({profileId:J,sourceTag:X,sourceIndex:Y,label:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=JJ.includes(Z)?Z:"",H=K.ref(`perfiles/${J}/galeria/${X}`),E=await H.once("value"),j=Array.isArray(E.val())?E.val():[];if(!j[Y])return;const O=[...j],_=p(O[Y],X==="videos"?"video":"image");O[Y]={..._,label:$};await H.set(O);if(J===a)n((F)=>({...F,galeria:{...F.galeria||{fotos:[],gifs:[],videos:[]},[X]:O}}))},BY=async({profileId:J,sourceTag:X,sourceIndex:Y,url:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=(Z||"").trim();if(!$)return;const H=K.ref(`perfiles/${J}/galeria/${X}`),E=await H.once("value"),j=Array.isArray(E.val())?E.val():[];if(!j[Y])return;const O=[...j],_=X==="videos"?"video":"image",F=p(O[Y],_);O[Y]={...F,url:$,type:cJ($,_)};await H.set(O);if(J===a)n((V)=>({...V,galeria:{...V.galeria||{fotos:[],gifs:[],videos:[]},[X]:O}}))},RZ=async({profileId:J,sourceTag:X,sourceIndex:Y})=>{if(!J||!X||!Number.isInteger(Y))return;const Z=K.ref(`perfiles/${J}/galeria/${X}`),$=await Z.once("value"),H=Array.isArray($.val())?$.val():[],E=H[Y];if(!E)return;const j=H.filter((_,F)=>F!==Y);await Z.set(j);const O=p(E,X==="videos"?"video":"image").url;if(O){const _=K.ref(`perfiles/${J}/batallaFotosPreferidas`),F=await _.once("value"),B={...qJ(F.val())};let M=!1;Object.keys(B).forEach((D)=>{if(B[D]===O){B[D]="";M=!0}});if(M)await _.set(B)}if(J===a)n((_)=>({..._,galeria:{..._.galeria||{fotos:[],gifs:[],videos:[]},[X]:j},batallaFotosPreferidas:(()=>{const F=qJ(_.batallaFotosPreferidas);if(!O)return F;const V={...F};Object.keys(V).forEach((B)=>{if(V[B]===O)V[B]=""});return V})()}))},CY=(J)=>new Promise((X,Y)=>{const Z=new FileReader;Z.onload=()=>X(String(Z.result||""));Z.onerror=()=>Y(new Error("No se pudo leer el archivo."));Z.readAsDataURL(J)}),VY=(J,X)=>{const Y=String(X||"").trim(),Z=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Y)return{...J,fotos:[""]};const H=Z.some((E)=>p(E,"image").url===Y)?Z:[...Z,{url:Y,label:"C",type:"image"}];return{...J,fotos:[Y],galeria:{...J.galeria||{},fotos:H}}},AZ=async(J)=>{const X=J.target.files?.[0];if(!X)return;try{const Y=await CY(X);n((Z)=>VY(Z,Y))}catch(Y){console.error("Error al cargar foto de perfil local:",Y)}finally{J.target.value=""}},DZ=async({url:J,label:X,autor:Y=""})=>{const Z=String(J||"").trim();if(!Z)throw new Error("Ingresá una URL o seleccioná un archivo.");const $=JJ.includes(X)?X:"",H=cJ(Z);if(!(H==="image"||sY.test(Z)||Boolean(eJ(Z))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const j=H==="video"?"videos":"fotos",O=K.ref(`${aQ}/${j}`),_=await O.once("value"),V=[...Array.isArray(_.val())?_.val():[],{url:Z,label:$,type:H,autor:String(Y||"").trim()}];await O.set(V)},zZ=async()=>{OX("");try{let J=String(YY||"").trim();if(_X==="file"){if(!$Y)throw new Error("Seleccioná un archivo local.");J=await CY($Y)}await DZ({url:J,label:jY,autor:qY});ZY("");HY(null);_Y("");XY("url")}catch(J){OX(J?.message||"No se pudo guardar en galería anónima.")}},x0=async(J,X)=>{X.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await K.collection("galeria").doc(J).delete()}catch(Y){console.error("Error al borrar de Firebase:",Y)}},[N,YJ]=T(FY()),BX=()=>YJ(FY());o(()=>{if(window.lucide)window.lucide.createIcons()},[U,yX,mX,L,e,s]);o(()=>{if(C.current&&!C.current.closed&&a)gX({targetWindow:C.current,profileName:x.nombre,profession:x.profesion,photos:[...(x.galeria?.fotos||[]).map((J,X)=>({...p(J,"image"),sourceTag:"fotos",sourceIndex:X})),...(x.galeria?.videos||[]).map((J,X)=>({...p(J,"video"),sourceTag:"videos",sourceIndex:X}))],editingId:a,battlePhotoPrefs:x.batallaFotosPreferidas,profilePhotoUrl:x.fotos?.[0]||""})},[a,x.nombre,x.profesion,x.galeria?.fotos,x.galeria?.videos,x.batallaFotosPreferidas]);o(()=>{const J=async(_)=>{if(_.data.type==="ADD_IMAGE"){const{url:F,id:V,label:B,mediaType:M,autor:D}=_.data,P=M==="video"?"videos":"fotos";if(!V)return;const u=V===DJ?K.ref(`${aQ}/${P}`):K.ref(`perfiles/${V}/galeria/${P}`),d=(await u.once("value")).val()||[],l=(F||"").trim();if(!l)return;const I=[...d,{url:l,label:JJ.includes(B)?B:"",type:cJ(l,M),autor:SX(D)}];await u.set(I);n((f)=>({...f,galeria:{...f.galeria,[P]:I}}))}if(_.data.type==="DELETE_IMAGE"){const{index:F,id:V,mediaType:B}=_.data,M=B==="video"?"videos":"fotos";if(!V)return;const D=V===DJ?K.ref(`${aQ}/${M}`):K.ref(`perfiles/${V}/galeria/${M}`),u=(await D.once("value")).val()||[],FJ=u[F],d=u.filter((I,f)=>f!==F);await D.set(d);const l=p(FJ,B).url;if(l&&V!==DJ){const I=K.ref(`perfiles/${V}/batallaFotosPreferidas`),f=await I.once("value"),jJ={...qJ(f.val())};let oQ=!1;Object.keys(jJ).forEach((aJ)=>{if(jJ[aJ]===l){jJ[aJ]="";oQ=!0}});if(oQ)await I.set(jJ)}n((I)=>({...I,galeria:{...I.galeria,[M]:d},batallaFotosPreferidas:(()=>{const f=qJ(I.batallaFotosPreferidas);if(!l)return f;const r={...f};Object.keys(r).forEach((jJ)=>{if(r[jJ]===l)r[jJ]=""});return r})()}))}if(_.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:F,slotId:V,index:B,mediaType:M}=_.data,D=rQ(V);if(!F||F===DJ||!D||!Number.isInteger(B))return;const P=M==="video"?"videos":"fotos",d=(await K.ref(`perfiles/${F}/galeria/${P}`).once("value")).val()||[],l=p(d[B],M);if(!l.url||l.type!=="image")return;await K.ref(`perfiles/${F}/batallaFotosPreferidas/${V}`).set(l.url);n((f)=>({...f,batallaFotosPreferidas:{...qJ(f.batallaFotosPreferidas),[V]:l.url}}))}if(_.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:F,slotId:V,url:B,mediaType:M,label:D}=_.data,P=rQ(V),u=String(B||"").trim();if(!F||F===DJ||!P||!u)return;if(M==="video")return;await K.ref(`perfiles/${F}/batallaFotosPreferidas/${V}`).set(u);n((d)=>({...d,batallaFotosPreferidas:{...qJ(d.batallaFotosPreferidas),[V]:u}}))}if(_.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:F,slotId:V}=_.data,B=rQ(V);if(!F||F===DJ||!B)return;await K.ref(`perfiles/${F}/batallaFotosPreferidas/${V}`).set("");n((D)=>({...D,batallaFotosPreferidas:{...qJ(D.batallaFotosPreferidas),[V]:""}}))}};window.addEventListener("message",J);const X=K.ref("perfiles"),Y=K.ref(aQ),Z=K.ref("equipos");let $={},H={};const E=()=>{const _=Object.keys($||{}).map((B)=>({...UX($[B]),firebaseId:B})),F=V0(H||{}),V=Object.values(F.galeria||{}).some((B)=>Array.isArray(B)&&B.length>0);v(V?[..._,F]:_)};X.on("value",(_)=>{$=_.val()||{};E()});Y.on("value",(_)=>{H=_.val()||{};E()});Z.on("value",(_)=>{const F=_.val()||{},V=Object.entries(F).map(([B,M])=>({firebaseId:B,nombre:String(M?.nombre||"").trim(),url:String(M?.url||"").trim()})).filter((B)=>B.nombre);$Z(V.sort((B,M)=>B.nombre.localeCompare(M.nombre,"es",{sensitivity:"base"})))});G(oY);const j=K.ref("arenaBattleState");j.on("value",(_)=>{NJ(_.val()||{})});const O=K.ref("arenaGlobalState");O.on("value",(_)=>{GJ(_.val()||{})});return()=>{window.removeEventListener("message",J);X.off();Y.off();Z.off();j.off();O.off()}},[]);const P0=async(J)=>{J.preventDefault();const X=String(dX.nombre||"").trim(),Y=String(dX.url||"").trim();if(!X||!Y)return;await K.ref("equipos").push({nombre:X,url:Y});jZ({nombre:"",url:""});HZ(!1)},IJ=(J)=>{if(!J)return"?";const X=new Date,Y=new Date(J);let Z=X.getFullYear()-Y.getFullYear();if(X.getMonth()<Y.getMonth()||X.getMonth()===Y.getMonth()&&X.getDate()<Y.getDate())Z--;return Z},CX=(J={})=>{return{...TQ(),...J?.puntuaciones||{}}},gJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},VX=(J={},X=[])=>{if(!Array.isArray(X)||!X.length)return 0;const Y=CX(J);return X.reduce((Z,$)=>Z+(Number(Y[$])||0),0)/X.length},yQ=(J={})=>{return VX(J,gJ.Rostro)},mQ=(J={})=>{return VX(J,gJ.Cuerpo)},uQ=(J={})=>{return VX(J,gJ.Actitud)},TY=(J={},X="")=>{if(X==="Rostro")return yQ(J);if(X==="Cuerpo")return mQ(J);if(X==="Actitud")return uQ(J);return 0},TJ=(J={})=>{const X=Object.keys(gJ).map((Z)=>TY(J,Z));return(X.reduce((Z,$)=>Z+$,0)/X.length).toFixed(0)},fQ=(J)=>{const X=[],Y=(J.nacionalidad||"").toLowerCase(),Z=(J.profesion||"").toLowerCase(),$=(J.ciudad||"").toLowerCase(),H=IJ(J.fechaNacimiento);s.forEach((E)=>{const j=E.reglas;let O=!0;if(j.nacionalidades?.length>0&&!j.nacionalidades.some((_)=>Y===_.toLowerCase()))O=!1;if(j.profesiones?.length>0&&!j.profesiones.some((_)=>Z===_.toLowerCase()))O=!1;if(j.ciudades?.length>0&&!j.ciudades.some((_)=>$===_.toLowerCase()))O=!1;if(j.edadMin&&(H==="?"||H<parseInt(j.edadMin)))O=!1;if(j.edadMax&&(H==="?"||H>parseInt(j.edadMax)))O=!1;if(j.caracteristica&&j.umbral){const _=CX(J)[j.caracteristica]||0,F=parseInt(j.umbral);if(j.operador==="Superior a"&&_<=F)O=!1;if(j.operador==="Inferior a"&&_>=F)O=!1}if(O)X.push(E.firebaseId)});return X},NZ=m(()=>["Todas",...new Set(L.map((J)=>J.nacionalidad).filter(Boolean))],[L]),v0=m(()=>["Todas",...new Set(L.map((J)=>J.profesion).filter(Boolean))],[L]),MZ=m(()=>["Todas",...new Set(L.map((J)=>J.ciudad).filter(Boolean))],[L]),RY=m(()=>{return(L||[]).reduce((J,X)=>{if(!X?.firebaseId)return J;J[X.firebaseId]=fQ(X);return J},{})},[L,s]),lJ=m(()=>{return(L||[]).flatMap((J)=>{const X=T0(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map((Z,$)=>({item:Z,sourceTag:"fotos",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map((Z,$)=>({item:Z,sourceTag:"gifs",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map((Z,$)=>({item:Z,sourceTag:"videos",sourceIndex:$,fallbackType:"video"})):[]].map(({item:Z,sourceTag:$,sourceIndex:H,fallbackType:E})=>{const j=p(Z,E);return{id:`${J.firebaseId||J.nombre||"perfil"}-${$}-${H}`,url:j.url,label:j.label,type:j.type,isGif:j.type==="image"&&N0(j.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||j.url,profileId:J.firebaseId,sourceCharacterId:X,sourceTag:$,sourceIndex:H}})})},[L]),HJ=m(()=>{return lJ.filter((J)=>Boolean(J.url))},[lJ]),TX=m(()=>{return HJ.reduce((J,X)=>{const Y=X.label||"";if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[HJ]),AY=m(()=>{return HJ.reduce((J,X)=>{const Y=X.profileId||X.nombre;if(!Y)return J;if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[HJ]),KZ=m(()=>{return new Set(HJ.map((J)=>J.profileId).filter(Boolean)).size},[HJ]),DY=m(()=>{return Object.entries(RY||{}).reduce((J,[X,Y])=>{J[X]=new Set(Array.isArray(Y)?Y:[]);return J},{})},[RY]),KJ=m(()=>{if(b==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:HJ[0]?.url||"",photos:HJ}];if(b==="PERSONAJE")return Object.entries(AY).map(([J,X])=>{const Y=X[0]||{};return{id:`PERSONAJE-${J}`,profileId:Y.profileId||null,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotoPerfil:Y.fotoPerfil||Y.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}));if(b==="ETIQUETA")return JJ.map((J)=>{const X=TX[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0);return(s||[]).map((J)=>{const X=HJ.filter((Y)=>{if(!Y.profileId)return!1;const Z=DY[Y.profileId];return Z?Z.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||X[0]?.fotoPerfil||X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}))},[HJ,TX,AY,s,b,DY]),hJ=m(()=>{if(b==="GENERAL")return KJ[0]||null;if(!MQ)return null;return KJ.find((J)=>J.id===MQ.id)||null},[KJ,MQ,b]),AJ=m(()=>{if(b!=="PERSONAJE")return[];return KJ.filter((J)=>WQ.includes(J.id))},[KJ,b,WQ]),FQ=m(()=>{if(b==="PERSONAJE")return AJ.flatMap((J)=>J.photos||[]);if(b==="ETIQUETA"){if(!dJ.length)return[];return HJ.filter((J)=>dJ.includes(J.label))}return hJ?.photos||HJ},[b,AJ,hJ,HJ,dJ]),kZ=m(()=>{const J=FQ.reduce((X,Y)=>{const Z=Y.label||"";if(!Z)return X;X[Z]=(X[Z]||0)+1;return X},{});return JJ.reduce((X,Y)=>{X[Y]=J[Y]||0;return X},{})},[FQ]),y=m(()=>{return FQ.filter((J)=>b==="ETIQUETA"?!0:MJ==="INICIAL"?J.label!=="X":MJ==="100"?!0:J.label===MJ)},[FQ,MJ,b]),RX=m(()=>{return y.slice(0,iX)},[y,iX]),wZ=RX.length<y.length,cQ=fY[b]||b,sQ=b!=="GENERAL"&&b!=="ETIQUETA",zY=m(()=>{if(b!=="PERSONAJE")return[];return KJ.filter((J)=>!WQ.includes(J.id))},[KJ,b,WQ]),w=CJ===null?null:y[rJ(CJ,y.length)]||null,yJ=m(()=>{return lJ.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(WY[J.id])})},[lJ,WY]),NY=m(()=>{const J=yJ.reduce((X,Y)=>{const Z=Y.profileId||Y.nombre||"sin-perfil";if(!X[Z])X[Z]={id:Z,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotos:[]};X[Z].fotos.push(Y);return X},{});return Object.values(J).map((X)=>({...X,fotos:X.fotos.sort((Y,Z)=>(Y.label||"").localeCompare(Z.label||"","es",{sensitivity:"base"}))})).sort((X,Y)=>X.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[yJ]);o(()=>{if(!w){pJ(!1);kQ("");wQ("");PJ("");return}pJ(!1);kQ(w.label||"");wQ(w.url||"");PJ("")},[w]);o(()=>{if(U!=="GALERIA"){OQ(null);t(null)}},[U]);o(()=>{lX(40);t(null)},[b,MJ,dJ,WQ,MQ,L.length]);o(()=>{OQ(null);t(null);HX([]);nX([])},[b]);o(()=>{if(CJ===null)return;if(!y.length){t(null);return}if(CJ>=y.length)t(0)},[y,CJ]);o(()=>{if(CJ===null)return;const J=(X)=>{if(X.key==="Escape"){t(null);return}if(!y.length)return;if(X.key==="ArrowRight")t((Y)=>rJ((Y??0)+1,y.length));if(X.key==="ArrowLeft")t((Y)=>rJ((Y??0)-1,y.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[y.length,CJ]);o(()=>{if(CJ===null){KQ(!1);pX(!1)}},[CJ]);o(()=>{if(!XX)return;const J=(Y)=>{if(A.current&&!A.current.contains(Y.target))zQ(!1)},X=(Y)=>{if(Y.key==="Escape")zQ(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",X);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",X)}},[XX]);o(()=>{let J=!1;const X=lJ.filter((Z)=>Z.type==="image"&&Z.url);if(!X.length){LX({});return}(async()=>{const Z=8,$=[];for(let E=0;E<X.length;E+=Z){const j=X.slice(E,E+Z),O=await Promise.all(j.map(async(_)=>({id:_.id,isBroken:await pY(_.url)})));$.push(...O);if(J)return}if(J)return;const H=$.reduce((E,j)=>{E[j.id]=j.isBroken;return E},{});LX(H)})();return()=>{J=!0}},[lJ]);o(()=>{if(!WX)return;const J=yJ.reduce((X,Y)=>{X[Y.id]=Y.url;return X},{});EY(J);LY({})},[WX,yJ]);o(()=>{if(bJ.current){clearTimeout(bJ.current);bJ.current=null}if(!nJ||!w)return;if(w.type==="video")return;const J=jX*1000;bJ.current=setTimeout(()=>{t((X)=>cY(X,y,EQ))},J);return()=>{if(bJ.current){clearTimeout(bJ.current);bJ.current=null}}},[nJ,w,y,EQ,jX]);o(()=>{if(!w||!vQ.current)return;vQ.current=!1;requestAnimationFrame(()=>{SZ()})},[w]);const AX=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,MY=()=>{const J=xQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},GZ=()=>{const J=xQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},SZ=()=>{const J=xQ.current,X=PQ.current;if(!J)return;if(document.fullscreenElement)return;const Y=X||J,Z=Y.requestFullscreen||Y.webkitRequestFullscreen||Y.msRequestFullscreen;if(typeof Z==="function")Promise.resolve(Z.call(Y)).catch(()=>{if(AX)MY()});else if(AX)MY()},xZ=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},KY=(J,X=!1)=>{vQ.current=!!X;t(J);KQ(X);pJ(!0)},PZ=(J)=>{if(!J)return;HX((X)=>X.includes(J)?X:[...X,J]);t(null)},vZ=(J)=>{if(!J)return;HX((X)=>X.filter((Y)=>Y!==J));t(null)},bZ=(J)=>{if(!J)return;nX((X)=>X.includes(J)?X.filter((Y)=>Y!==J):[...X,J]);t(null)},kY=()=>{vQ.current=!1;KQ(!1);t(null);GZ();xZ()},dQ=()=>t((J)=>cY(J,y,EQ)),b0=()=>t((J)=>rJ((J??0)-1,y.length)),IZ=async()=>{if(!w?.profileId||!w?.sourceTag||!Number.isInteger(w?.sourceIndex))return;const J=(aX||"").trim();if(!J){PJ("La URL no puede estar vacía.");return}if(dY(J)||!$J(J,"")){PJ("La URL está bloqueada o no es válida.");return}try{JY(!0);PJ("");if(J!==w.url)await BY({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,url:J});await TZ({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,label:tX});pJ(!1)}catch(X){PJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",X)}finally{JY(!1)}},gZ=(J,X)=>{EY((Y)=>({...Y,[J]:X}))},wY=(J,X)=>{if(!J)return;LY((Y)=>({...Y,[J]:Boolean(X)}))},hZ=(J)=>{const X=(FX[J?.id]||J?.url||"").trim();if(!X)return;window.open(X,"_blank","noopener,noreferrer")},yZ=async(J)=>{if(!J)return;const X=(FX[J.id]||"").trim();if(!X)return;SQ((Y)=>({...Y,[J.id]:!0}));try{if(X!==J.url)await BY({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:X});const Y=await pY(X);LX((Z)=>({...Z,[J.id]:Y}));if(!Y)wY(J.id,!1)}catch(Y){console.error("Error al actualizar URL rota:",Y)}finally{SQ((Y)=>({...Y,[J.id]:!1}))}},mZ=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;SQ((Y)=>({...Y,[J.id]:!0}));try{await RZ({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Y){console.error("Error al eliminar foto rota:",Y)}finally{SQ((Y)=>({...Y,[J.id]:!1}))}},uZ=m(()=>{if(b==="PERSONAJE")return AJ.length?`${AJ.length} personaje${AJ.length>1?"s":""} seleccionado${AJ.length>1?"s":""}`:"Sin personajes seleccionados";if(hJ&&sQ)return hJ.nombre;return cQ},[b,AJ,hJ,sQ,cQ]),fZ=(J)=>{J.preventDefault();const X={...x};if(a)K.ref(`perfiles/${a}`).set(X).then(()=>{SJ(!1);$Q(null)}).catch((Y)=>console.error("Error al excitar la base de datos:",Y));else K.ref("perfiles").push(X).then(()=>{SJ(!1);n(IQ())}).catch((Y)=>console.error("No pudo entrar el perfil:",Y))},cZ=async(J)=>{J.preventDefault();const{firebaseId:X,...Y}=N,Z={...Y,type:"custom"};try{if(X)await K.ref(`categorias/${X}`).update(Z);else await K.ref("categorias").push(Z);AQ(!1);BX()}catch($){console.error("La categoría no quiso guardarse:",$)}},sZ=async(J)=>{if(!J)return;try{await K.ref(`categorias/${J}`).remove();G((X)=>X.filter((Y)=>Y.firebaseId!==J));qQ((X)=>X===J?null:X)}catch(X){console.error("No se pudo borrar la categoría:",X);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},DX=(J)=>{if(!J?.firebaseId)return;DQ("");jQ(J);uX(!0)},dZ=()=>{if(!a)return;const J=L.find((X)=>X.firebaseId===a);if(!J)return;DX(J)},zX=()=>{uX(!1);HQ(null);jQ(null)},nZ=async(J)=>{if(!J)return;await K.ref(`perfiles/${J}`).remove();v((X)=>X.filter((Y)=>Y.firebaseId!==J))},pZ=async()=>{if(!LJ?.firebaseId)return;try{await nZ(LJ.firebaseId);DQ("");SJ(!1);if(a===LJ.firebaseId)$Q(null);zX()}catch(J){console.error("No se pudo borrar el perfil:",J);DQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},nQ=()=>{zQ(!1);jQ(null)},iZ=(J,X)=>{J.preventDefault();zQ(!0);YZ({x:J.clientX,y:J.clientY});jQ(X)},lZ=()=>{if(!LJ)return;n(UX(LJ));$Q(LJ.firebaseId);SJ(!0);nQ()},oZ=async()=>{if(!LJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){nQ();return}try{await K.ref(`perfiles/${LJ.firebaseId}`).remove();v((X)=>X.filter((Y)=>Y.firebaseId!==LJ.firebaseId));nQ()}catch(X){console.error("No se pudo borrar el perfil:",X);alert("No se pudo borrar el perfil. Probá de nuevo.");nQ()}},GY=(J)=>{const X=J?.estaturaCm;if(X===void 0||X===null||X==="")return"Sin dato";const Y=Number(X);if(Number.isNaN(Y)||Y<=0)return"Sin dato";return`${Math.round(Y)} cm`},NX=(J="")=>String(J||"").trim().toLowerCase(),tZ=(J="")=>String(J||"").trim(),UQ=(J=[])=>[...J||[]].filter((X)=>X?.firebaseId&&(X?.nombre||"").trim()).sort((X,Y)=>(X.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"})).map((X)=>X.firebaseId),SY=(J=[],X="GENERAL")=>{const Y=String(X||"GENERAL").trim().toUpperCase(),Z=[...J||[]].filter((j)=>j?.firebaseId&&(j?.nombre||"").trim()).sort((j,O)=>(j.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:Z.map((j)=>j.firebaseId)}];if(Y==="EDADES"){const j={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};Z.forEach((O)=>{const _=IJ(O.fechaNacimiento);if(!Number.isFinite(_)||_<18)return;if(_<=28)j["18-28"].ids.push(O.firebaseId);else if(_<=39)j["29-39"].ids.push(O.firebaseId);else j["40+"].ids.push(O.firebaseId)});return Object.values(j)}const $=Y==="NACIONALIDADES"?"nacionalidad":"profesion",H=Y==="NACIONALIDADES"?"Nacionalidad":"Profesión",E=Z.reduce((j,O)=>{const _=NX(O?.[$]);if(!_)return j;if(!j[_])j[_]={key:_,label:tZ(O?.[$])||_,typeLabel:H,ids:[]};j[_].ids.push(O.firebaseId);return j},{});return Object.values(E).sort((j,O)=>j.label.localeCompare(O.label,"es",{sensitivity:"base"}))},MX=(J=[],X="GENERAL",Y="")=>{const Z=[...J||[]].filter((j)=>j?.firebaseId&&(j?.nombre||"").trim()).sort((j,O)=>(j.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if(X==="GENERAL"){const j=Z.map((O)=>O.firebaseId);return{groupedIds:j.length>1?[{key:"general",label:"General",typeLabel:"General",ids:j}]:[],orderedIds:j}}const $=SY(Z,X),H=NX(Y),E=$.filter((j)=>{if(!H||H==="all")return!0;return NX(j.key)===H}).filter((j)=>j.ids.length>=2);return{groupedIds:E,orderedIds:E.flatMap((j)=>j.ids)}},kJ=(J,X)=>[J,X].sort().join("__"),oJ=(J)=>{if(!J||typeof J!=="object")return null;const X=String(J.winnerId||"").trim(),Y=String(J.loserId||"").trim();if(!X||!Y||X===Y)return null;return{winnerId:X,loserId:Y,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},pQ=(J={},X="")=>!!oJ(J?.[X]),BQ=(J={},X=[])=>{const Y=new Set((X||[]).filter(Boolean)),Z={},$={},H={};Object.entries(J||{}).forEach(([_,F])=>{const V=oJ(F);if(!V)return;const{winnerId:B,loserId:M}=V;if(Y.size&&(!Y.has(B)||!Y.has(M)))return;const D=kJ(B,M),P={winnerId:B,loserId:M,reason:"direct",playedAt:V.playedAt??Date.now()};Z[D]=P;$[D]=P;if(!H[B])H[B]=new Set;H[B].add(M)});new Set([...Object.keys(H),...Object.values(H).flatMap((_)=>[..._])]).forEach((_)=>{const F=[...H[_]||[]],V=new Set;while(F.length){const B=F.shift();if(!B||V.has(B)||B===_)continue;V.add(B);const M=kJ(_,B);if(!$[M])$[M]={winnerId:_,loserId:B,reason:"transitive",playedAt:null};(H[B]||[]).forEach((D)=>{if(!V.has(D))F.push(D)})}});const j=Object.fromEntries(Object.entries(H).map(([_,F])=>[_,[...F]])),O=rZ($);return{directMatchups:Z,matchups:$,victoryGraph:j,stats:O}},CQ=(J,X={})=>{const Y=WJ(J);if(!Y)return null;const Z=UQ(L),$=BQ(X?.directMatchups||X?.matchups||{},Z);return{arenaName:Y,orderedIds:Z,...$}},aZ=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=kJ(J[Y],J[Z]);if(!pQ(X,$))return[J[Y],J[Z]]}return null},KX=(J=[],X={},Y={})=>{const Z={...X||{},...Y||{}};for(const $ of J){const H=aZ($?.ids||[],Z);if(H)return H}return null},VQ=(J=[],X,Y="")=>{if(!X)return null;return J.find((Z)=>{const $=Z?.ids||[];if(!$.includes(X))return!1;return!Y||$.includes(Y)})||null},rZ=(J={})=>{return Object.keys(J||{}).reduce((X,Y)=>{const Z=oJ(J[Y]);if(!Z)return X;const{winnerId:$,loserId:H}=Z,E=X[$]||{wins:0,battles:0},j=X[H]||{wins:0,battles:0};return{...X,[$]:{wins:E.wins+1,battles:E.battles+1},[H]:{wins:j.wins,battles:j.battles+1}}},{})},xY=(J="",X="")=>{const Y=String(X||"").trim();if(!J||!Y)return!1;return J.endsWith(`::${Y}`)},eZ=(J,X)=>{const Y=oJ(X);if(!Y||Y.reason!=="direct")return J||null;const Z=oJ(J);if(!Z||Z.reason!=="direct")return Y;const $=Z.playedAt??0;return(Y.playedAt??0)>=$?Y:Z},PY=(J,X=ZJ)=>{const Y=String(J||"").trim();if(!Y)return BQ({},[]);const Z={};Object.entries(X||{}).forEach(([H,E])=>{if(!xY(H,Y))return;const j=E?.directMatchups||{};Object.entries(j).forEach(([O,_])=>{Z[O]=eZ(Z[O],_)})});const $=[...L||[]].map((H)=>H?.firebaseId).filter(Boolean).sort((H,E)=>String(H).localeCompare(String(E),"es",{sensitivity:"base"}));return BQ(Z,$)},vY=(J,X)=>{const Z=(PY(J).stats||{})[X]||{wins:0,battles:0},$=Z.battles?Math.round(Z.wins/Z.battles*100):0;return{...Z,score:$}},bY=(J,X=ZJ)=>{const Y=PY(J,X).stats||{};return[...L||[]].filter((Z)=>Z?.firebaseId).reduce((Z,$)=>{const H=Y[$.firebaseId]||{wins:0,battles:0};Z[$.firebaseId]=H.battles?Math.round(H.wins/H.battles*100):0;return Z},{})},I0=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=kJ(J[Y],J[Z]);if(!pQ(X,$))return[J[Y],J[Z]]}return null},IY=(J,X,Y=null)=>{if(!X)return null;const Z=M0.includes(X.mode)?X.mode:"GENERAL",$=String(X.groupKey||"all").trim().toLowerCase()||"all",H=MX(L,Z,$),E=H.groupedIds||[],j=H.orderedIds||[],O=CQ(J,Y||EJ?.[WJ(J)]||{}),_=O?.directMatchups||{},F=O?.matchups||{},V=O?.victoryGraph||{},B=O?.stats||{},M=X.championId,D=X.challengerId,P=VQ(E,M,D),u=!!M&&!!D&&M!==D&&!!P&&!pQ(F,kJ(M,D)),FJ=E.length?KX(E,X.matchups||{},F):null,d=u?[M,D]:FJ,l=!FJ,I=VQ(E,d?.[0],d?.[1]);return{...X,mode:Z,groupKey:$,groupedIds:E,orderedIds:j,stats:B,directMatchups:_,matchups:F,victoryGraph:V,championId:d?d[0]:null,challengerId:d?d[1]:null,activeGroupKey:I?.key||null,activeGroupLabel:I?`${I.typeLabel}: ${I.label}`:"",isFinished:l}};o(()=>{if(!L.length)return;const J={},X=[];Object.entries(ZJ||{}).forEach(([Y,Z])=>{const{arenaName:$}=lY(Y),H=IY($,Z,EJ?.[WJ($)]);if(!H)return;if(JSON.stringify(Z)===JSON.stringify(H))return;J[Y]=H;X.push(K.ref(`arenaBattleState/${Y}`).set(H).catch((j)=>console.error("No se pudo normalizar el estado del arena:",j)))});if(!Object.keys(J).length)return;NJ((Y)=>({...Y,...J}));Promise.all(X).catch(()=>{})},[ZJ,EJ,L]);o(()=>{if(!L.length)return;const J={};Object.entries(ZJ||{}).forEach(([Z,$])=>{const{arenaName:H}=lY(Z),E=WJ(H);if(!E)return;if(!J[E])J[E]={};Object.entries($?.directMatchups||{}).forEach(([j,O])=>{const _=oJ(O);if(!_)return;J[E][j]={winnerId:_.winnerId,loserId:_.loserId,reason:"direct",playedAt:_.playedAt??Date.now()}})});const X=[],Y={};Object.entries(J).forEach(([Z,$])=>{const H=WJ(Z);if(!H||EJ?.[H])return;const E=CQ(Z,{directMatchups:$});if(!E)return;Y[H]=E;X.push(K.ref(`arenaGlobalState/${H}`).set(E).catch((j)=>console.error("No se pudo migrar arenaGlobalState:",j)))});if(!Object.keys(Y).length)return;GJ((Z)=>({...Z,...Y}));Promise.all(X).catch(()=>{})},[ZJ,EJ,L]);const gY=(J,X=z,Y=g)=>{const Z=[...L].filter((P)=>P?.firebaseId&&(P?.nombre||"").trim()).sort((P,u)=>(P.nombre||"").localeCompare(u.nombre||"","es",{sensitivity:"base"}));if(Z.length<2)return;const $=String(X||"GENERAL").trim().toUpperCase(),H=MX(Z,$,Y),E=H.groupedIds||[],j=H.orderedIds||[],O=WJ(J),_=CQ(J,EJ?.[O]||{}),F=_?.matchups||{},V=KX(E,{},F);if(!V)return;const B=VQ(E,V[0],V[1]),M={mode:$,groupKey:String(Y||"").trim().toLowerCase()||"all",groupedIds:E,orderedIds:j,stats:_?.stats||{},directMatchups:_?.directMatchups||{},matchups:F,victoryGraph:_?.victoryGraph||{},championId:V[0],challengerId:V[1],activeGroupKey:B?.key||null,activeGroupLabel:B?`${B.typeLabel}: ${B.label}`:"",isFinished:!1},D=YQ(J,X,Y);if(!D)return;NJ((P)=>({...P,[D]:M}));if(!EJ?.[O]){GJ((P)=>({...P,[O]:_}));K.ref(`arenaGlobalState/${O}`).set(_).catch((P)=>console.error("No se pudo guardar arenaGlobalState inicial:",P))}K.ref(`arenaBattleState/${D}`).set(M).catch((P)=>console.error("No se pudo guardar el estado del arena:",P))},J0=async(J,X,Y)=>{if(!J)return;try{await K.ref(`perfiles/${J}/puntuaciones/${X}`).set(Y)}catch(Z){console.error("No se pudo actualizar score del arena:",Z)}},hY=(J,X,Y=z,Z=g)=>{const $=YQ(J,Y,Z),H=ZJ[$];if(!H||H.isFinished)return;const E=WJ(J),j=CQ(J,EJ?.[E]||{}),O=Array.isArray(H.groupedIds)&&H.groupedIds.length?H.groupedIds:MX(L,H.mode||"GENERAL",H.groupKey||"all").groupedIds,{championId:_,challengerId:F}=H;if(X!==_&&X!==F)return;const V=X===_?F:_;if(!X||!V)return;const B=kJ(X,V),M={...j?.directMatchups||{},[B]:{winnerId:X,loserId:V,reason:"direct",playedAt:Date.now()}},D=BQ(M,UQ(L)),P=D.matchups,u=D.stats||{},FJ=VQ(O,X,V),l=((UJ,OJ,wX)=>{if(!OJ)return null;for(const tQ of UJ){if(!tQ||tQ===OJ)continue;const q0=kJ(OJ,tQ);if(!pQ(wX,q0))return tQ}return null})(FJ?.ids||[],X,P),I=l?[X,l]:KX(O,H.matchups||{},P),f=VQ(O,I?.[0],I?.[1]),r={arenaName:E,orderedIds:UQ(L),directMatchups:D.directMatchups,matchups:P,victoryGraph:D.victoryGraph,stats:u},jJ={...H,groupedIds:O,directMatchups:r.directMatchups,stats:u,matchups:P,victoryGraph:D.victoryGraph,championId:I?I[0]:null,challengerId:I?I[1]:null,activeGroupKey:f?.key||null,activeGroupLabel:f?`${f.typeLabel}: ${f.label}`:"",isFinished:!I},oQ={...ZJ||{},[$]:jJ},aJ=bY(J,oQ);v((UJ)=>UJ.map((OJ)=>{if(!OJ?.firebaseId||!Object.prototype.hasOwnProperty.call(aJ,OJ.firebaseId))return OJ;const wX=aJ[OJ.firebaseId];return{...OJ,puntuaciones:{...OJ.puntuaciones||{},[J]:wX}}}));Object.entries(aJ).forEach(([UJ,OJ])=>{J0(UJ,J,OJ)});NJ((UJ)=>({...UJ,[$]:jJ}));GJ((UJ)=>({...UJ,[E]:r}));Promise.all([K.ref(`arenaGlobalState/${E}`).set(r),K.ref(`arenaBattleState/${$}`).set(jJ)]).catch((UJ)=>console.error("No se pudo guardar avance de batallas:",UJ))},Q0=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((L||[]).map((X)=>{if(!X?.firebaseId)return Promise.resolve();return K.ref(`perfiles/${X.firebaseId}/puntuaciones`).set(TQ())}));v((X)=>X.map((Y)=>({...Y,puntuaciones:TQ()})));NJ({});GJ({});await K.ref("arenaBattleState").remove();await K.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(X){console.error("No se pudieron resetear las calificaciones:",X);alert("No se pudo completar el reseteo.")}},X0=async(J,X=z,Y=g)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const $={...ZJ||{}},H=Object.keys($).filter((j)=>xY(j,J));H.forEach((j)=>delete $[j]);await Promise.all(H.map((j)=>K.ref(`arenaBattleState/${j}`).remove()));NJ($);await Promise.all((L||[]).map((j)=>{if(!j?.firebaseId)return Promise.resolve();return K.ref(`perfiles/${j.firebaseId}/puntuaciones/${J}`).set(0)}));v((j)=>j.map((O)=>({...O,puntuaciones:{...O.puntuaciones||{},[J]:0}})));const E=YQ(J,X,Y);NJ((j)=>{if(!j?.[E])return j;const O={...j};delete O[E];return O});GJ((j)=>{const O=WJ(J);if(!j?.[O])return j;const _={...j};delete _[O];return _});await K.ref(`arenaBattleState/${E}`).remove();await K.ref(`arenaGlobalState/${WJ(J)}`).remove();alert(`Se reseteó "${J}" (${XQ(X)}) y se limpió su estado de batallas.`)}catch($){console.error("No se pudo resetear el item:",$);alert("No se pudo resetear ese item.")}},yY=async(J,X,Y,Z=z,$=g)=>{const H=YQ(J,Z,$),E=ZJ?.[H],j=WJ(J),O=CQ(J,EJ?.[j]||{});if(!E){alert("Esa arena no tiene estado cargado.");return}const _=O?.matchups||{},F=O?.directMatchups||{};if(!Object.keys(_).filter((D)=>!!_[D]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const B=kJ(X,Y);if(!_[B]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!F[B]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const D={...F};delete D[B];const P=BQ(D,UQ(L)),u={arenaName:j,orderedIds:UQ(L),directMatchups:P.directMatchups,matchups:P.matchups,victoryGraph:P.victoryGraph,stats:P.stats},FJ={...E,directMatchups:u.directMatchups,matchups:u.matchups,victoryGraph:u.victoryGraph,stats:u.stats},d=IY(J,FJ,u);if(!d){alert("No se pudo recomponer el estado del arena.");return}NJ((f)=>({...f,[H]:d}));GJ((f)=>({...f,[j]:u}));await Promise.all([K.ref(`arenaGlobalState/${j}`).set(u),K.ref(`arenaBattleState/${H}`).set(d)]);const l={...ZJ||{},[H]:d},I=bY(J,l);await Promise.all(Object.entries(I).map(async([f,r])=>{await K.ref(`perfiles/${f}/puntuaciones/${J}`).set(r)}));v((f)=>f.map((r)=>{if(!r?.firebaseId||!Object.prototype.hasOwnProperty.call(I,r.firebaseId))return r;const jJ=I[r.firebaseId];return{...r,puntuaciones:{...r.puntuaciones||{},[J]:jJ}}}));alert("Batalla reseteada correctamente.")}catch(D){console.error("No se pudo resetear la batalla:",D);alert("No se pudo resetear esa batalla.")}},Y0=m(()=>{const J=L;if(U==="RANKING")return[...J].sort((X,Y)=>parseFloat(TJ(Y))-parseFloat(TJ(X)));if(U==="CATEGORIAS"&&e)return J.filter((X)=>fQ(X).includes(e));return J},[L,U,e]),iQ=m(()=>{const J=String(qX||"").trim().toLowerCase(),X=(Z)=>{return[Z?.profesion,Z?.profesiones].flatMap((H)=>{if(Array.isArray(H))return H;if(typeof H==="string")return H.split(",");return[]}).map((H)=>String(H||"").trim()).filter(Boolean).join(" ")},Y=(Z)=>{if(!Z||typeof Z!=="object")return!1;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),String(Z.ciudad||"").trim(),X(Z),String(Z.fechaNacimiento||"").trim(),String(Z.estaturaCm||"").trim()].some(Boolean)||Array.isArray(Z.fotos)&&Z.fotos.some(Boolean)};return[...L||[]].filter((Z)=>{if(!Y(Z))return!1;if(iJ&&R0(Z))return!1;if(!J)return!0;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),X(Z)].join(" ").toLowerCase().includes(J)}).sort((Z,$)=>String(Z?.nombre||"").localeCompare(String($?.nombre||""),"es",{sensitivity:"base"}))},[L,qX,iJ]),h=m(()=>iQ.find((J)=>J?.firebaseId===GQ)||null,[iQ,GQ]);o(()=>{const J=()=>LQ("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const Z0=m(()=>{if(!z)return[];return SY(L,z)},[L,z]),lQ=z&&z!=="GENERAL",mY=(J,X)=>{if(X==="promedio")return Number(TJ(J))||0;if(X==="nombre")return(J.nombre||"").toLowerCase();if(X==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(X==="edad"){const Y=IJ(J.fechaNacimiento);return typeof Y==="number"?Y:-1}if(X==="Rostro")return yQ(J)||0;if(X==="Cuerpo")return mQ(J)||0;if(X==="Actitud")return uQ(J)||0;return Number(J.puntuaciones?.[X]||0)},$0=(J)=>{if(XJ==="promedio")return TJ(J);if(XJ==="Rostro")return yQ(J).toFixed(0);if(XJ==="Cuerpo")return mQ(J).toFixed(0);if(XJ==="Actitud")return uQ(J).toFixed(0);if(QQ.includes(XJ))return Number(J.puntuaciones?.[XJ]||0).toFixed(0);return TJ(J)},tJ=(J,X="asc")=>{if(XJ===J){YX((Y)=>Y==="asc"?"desc":"asc");return}sX(J);YX(X)},H0=(J,X)=>{const Y=gJ[X]||[],Z=new Set,$=new Set,H=Object.entries(ZJ||{});Y.forEach((O)=>{const _=EJ?.[WJ(O)]?.matchups||{};Object.values(_).forEach((F)=>{if(!F||typeof F!=="object")return;if(F.winnerId===J&&F.loserId)Z.add(F.loserId);if(F.loserId===J&&F.winnerId)$.add(F.winnerId)})});const E=new Map((L||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),j=(O)=>[...O].map((_)=>E.get(_)).filter(Boolean).sort((_,F)=>_.localeCompare(F,"es",{sensitivity:"base"}));return{wins:j(Z),losses:j($)}},uY=(J,X)=>{const Y=String(X||"").trim(),Z=String(J||"").trim();if(!Y||!Z)return{arenaName:Y,wins:[],losses:[]};const $=EJ?.[WJ(Y)]?.matchups||{},H=new Map((L||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),E=([O,_])=>{if(!_||typeof _!=="object")return null;const F=String(_.winnerId||"").trim(),V=String(_.loserId||"").trim();if(!F||!V)return null;const B=F===Z;if(!B&&V!==Z)return null;const D=B?V:F;return{pairKey:O,arenaName:Y,profileId:Z,opponentId:D,opponentName:H.get(D)||"Sin nombre",winnerId:F,loserId:V}},j=Object.entries($).map(E).filter(Boolean).sort((O,_)=>O.opponentName.localeCompare(_.opponentName,"es",{sensitivity:"base"}));return{arenaName:Y,wins:j.filter((O)=>O.winnerId===Z),losses:j.filter((O)=>O.loserId===Z)}},j0=[...Y0].sort((J,X)=>{const Y=mY(J,XJ),Z=mY(X,XJ);let $=0;if(typeof Y==="string"||typeof Z==="string")$=String(Y).localeCompare(String(Z),"es",{sensitivity:"base"});else $=Y-Z;if($===0)return(J.nombre||"").localeCompare(X.nombre||"","es",{sensitivity:"base"});return xJ==="asc"?$:-$}),kX=!VJ;return Q("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[VJ&&Q("aside",{className:"hud-frame hud-frame--panel w-72 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-8 z-20 shadow-xl overflow-y-auto relative",children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"mb-12 text-center flex-shrink-0",children:[Q("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"EQUIPOS",icon:"shield",label:"Equipos"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>Q("button",{onClick:()=>{R(J.id);qQ(null);OQ(null);t(null);vJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-4 px-6 py-4 rounded-[2rem] text-sm transition-all ${U===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[Q(i,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>UY(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[Q(i,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[Q("button",{onClick:()=>OZ((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":VJ?"Replegar menú lateral":"Desplegar menú lateral",title:VJ?"Replegar menú lateral":"Desplegar menú lateral",children:Q(i,{name:VJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${VJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),h&&Q("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${VJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>vJ(""),role:"presentation",children:Q("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[Q("button",{type:"button",onClick:()=>vJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:Q(i,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[Q("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:Q("img",{src:h.fotos?.[0]||"https://via.placeholder.com/500x700",alt:h.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-6",children:[Q("div",{children:[Q("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),Q("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:h.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!h?.isAnonymousGallery&&Q("div",{className:"grid grid-cols-1 gap-4",children:[Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Profesión"},void 0,!1,void 0,this),Q("strong",{children:h.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),Q("strong",{children:`${h.nacionalidad||"No definida"} - ${h.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),Q("strong",{children:`${h.fechaNacimiento||"No informado"} - ${IJ(h.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Estatura"},void 0,!1,void 0,this),Q("strong",{children:h.estaturaCm?`${h.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"pt-2",children:Q("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!h?.isAnonymousGallery&&Q("button",{type:"button",onClick:()=>{NQ({isOpen:!0,profile:h})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{const J=C.current,X=J&&!J.closed?J:window.open("","_blank");C.current=X;gX({targetWindow:X,profileName:h?.nombre||"",profession:h?.profesion||"",photos:[...(h?.galeria?.fotos||[]).map((Y,Z)=>({...p(Y,"image"),sourceTag:"fotos",sourceIndex:Z})),...(h?.galeria?.videos||[]).map((Y,Z)=>({...p(Y,"video"),sourceTag:"videos",sourceIndex:Z}))],editingId:h?.firebaseId||h?.id||"",battlePhotoPrefs:h?.batallaFotosPreferidas||h?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:h?.fotos?.[0]||""});X?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!h?.isAnonymousGallery&&Q(wJ,{children:[Q("button",{type:"button",onClick:()=>{vJ("");gQ(h)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>DX(h),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="TALLER"&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"space-y-2",children:Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"max-w-2xl",children:Q("input",{id:"tallerSearchInput",type:"text",value:qX,onChange:(J)=>QY(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:Q("button",{type:"button",onClick:()=>BZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${iJ?"btn-metal--danger":""}`,children:["Fotos incompletas ",iJ?"(Activo)":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:iQ.map((J)=>{const X=QJ(J.profesion),Y=GQ&&GQ===J.firebaseId,Z=A0(J),$=CZ===(J.firebaseId||J.nombre);return Q("button",{type:"button",onClick:()=>{LQ("");vJ("");gQ(J)},onContextMenu:(H)=>{if(!iJ||!Z.length)return;H.preventDefault();H.stopPropagation();LQ((E)=>E===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!iJ||!Z.length)return;clearTimeout(bQ.current);bQ.current=setTimeout(()=>{LQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(bQ.current)},onTouchMove:()=>{clearTimeout(bQ.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Y?"taller-card--selected":""}`,children:[Q("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:Q("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:X.color,textShadow:`0 0 12px ${X.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),$&&Q("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(H)=>{H.preventDefault();H.stopPropagation();VZ(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[Q("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),Q("ul",{className:"space-y-1 mb-2",children:Z.map((H)=>Q("li",{className:"leading-tight",children:["• ",H]},H,!0,void 0,this))},void 0,!1,void 0,this),Q("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!iQ.length&&Q("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),Q(z0,{isOpen:EZ,profile:h,onClose:()=>LZ(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="anonimo"&&!e&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:Q("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),Q("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),Q("div",{className:"mt-8 grid gap-4 md:grid-cols-2",children:[Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:_X,onChange:(J)=>{XY(J.target.value);OX("")},children:[Q("option",{value:"url",children:"Origen: URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Origen: Archivo local"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:jY,onChange:(J)=>WZ(J.target.value),children:JJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),_X==="url"?Q("input",{placeholder:"https://ejemplo.com/media.jpg o YouTube/Vimeo",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:YY,onChange:(J)=>ZY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>HY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:qY,onChange:(J)=>_Y(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:zZ,className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar en anónimo"},void 0,!1,void 0,this),OY&&Q("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:OY},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="EXPLORAR"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((L||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const X=(L||[]).filter((Z)=>String(Z?.profesion||"").trim()===J).length,Y=RQ(J);return Q("div",{onClick:()=>qQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Y.baseColor,"--folder-glow":Y.glowColor},children:[Q("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:K0(J)},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[X," ",X===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e&&Q("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[Q("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":U==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":RQ(e).baseColor},children:[Q("div",{className:"flex items-center gap-3",children:[Q("button",{onClick:()=>qQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:Q("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>UY(U==="CATEGORIAS"?"":e),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:U==="CATEGORIAS"?s.find((J)=>J.firebaseId===e)?.label||"Archivo del Reino":e},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(L||[]).filter((J)=>{if(!J)return!1;if(U==="CATEGORIAS")return fQ(J).includes(e);return String(J.profesion||"").trim().toLowerCase()===String(e).trim().toLowerCase()}).map((J)=>{const X=Number(typeof TJ==="function"?TJ(J):0)||0,Y=X>=95?"card-score-badge--gold":X>=86?"card-score-badge--diamond":X>=75?"card-score-badge--fire":"",Z=QJ(J.profesion);return Q("div",{onClick:()=>{HQ(null);QY("");vJ(J.firebaseId||"")},onContextMenu:($)=>iZ($,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":Z.color,"--card-neon-glow":Z.sombra},children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q("img",{src:$J(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:zJ},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 left-3 z-20",children:[Q("button",{type:"button",onClick:($)=>{$.stopPropagation();DQ("");jQ(J);HQ((H)=>H===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:Q(i,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),QZ===J.firebaseId&&Q("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:($)=>$.stopPropagation(),children:[Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{HQ(null);gQ(J)},children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{DX(J);HQ(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:($)=>{$.stopPropagation();NQ({isOpen:!0,profile:J})},className:`card-score-badge ${Y} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[X>=75&&X<=85&&Q("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),Q("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),Q("span",{className:"card-score-badge__value text-lg font-black",children:typeof TJ==="function"?TJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-4 left-4 right-4",children:Q("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[Q("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,Q("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof IJ==="function"?IJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-between items-center mt-1",children:[Q("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),Q("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),XX&&LJ&&Q("div",{ref:A,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${cX.y}px`,left:`${cX.x}px`},children:[Q("button",{type:"button",onClick:lZ,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:oZ,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="GALERIA"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${cQ} · ${uZ}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:[O0.map((J)=>Q("button",{type:"button",onClick:()=>qZ(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${b===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:fY[J]},J,!1,void 0,this)),Q("button",{type:"button",onClick:()=>EX(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[Q("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",yJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:FQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:y.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:JJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:KZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),b!=="PERSONAJE"&&sQ&&!hJ?Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:KJ.map((J)=>Q("button",{type:"button",onClick:()=>{OQ(J);t(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?Q("img",{src:$J(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:zJ},void 0,!1,void 0,this):Q("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:Q(i,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[Q("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),Q("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):Q(wJ,{children:[b!=="PERSONAJE"&&sQ&&Q("div",{className:"flex items-center gap-3",children:Q("button",{type:"button",onClick:()=>{OQ(null);t(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[Q(i,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),b==="PERSONAJE"&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[Q("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),Q("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>PZ(J.target.value),children:[Q("option",{value:"",disabled:!0,children:zY.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),zY.map((J)=>Q("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),AJ.length>0?Q("div",{className:"flex flex-wrap gap-2",children:AJ.map((J)=>Q("button",{type:"button",onClick:()=>vZ(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,Q(i,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),b==="ETIQUETA"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:JJ.map((J)=>Q("button",{onClick:()=>bZ(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:JX(J,dJ.includes(J)),children:[J," · ",(TX[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),b==="PERSONAJE"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[Q("button",{onClick:()=>$X("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:JX("INICIAL",MJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),JJ.map((J)=>{return Q("button",{onClick:()=>$X(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:JX(J,MJ===J),children:[J," · ",kZ[J]||0]},J,!0,void 0,this)}),Q("button",{onClick:()=>$X("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:JX("100",MJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{type:"button",onClick:()=>KY(0,!0),disabled:!y.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[Q(i,{name:"play",size:14},void 0,!1,void 0,this),"Play ",hJ?.nombre||cQ]},void 0,!0,void 0,this),Q("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[Q("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),Q("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:jX,onChange:(J)=>_Z(Number(J.target.value)),children:[3,5,7,10].map((J)=>Q("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),y.length===0?Q("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[Q("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:Q(i,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),Q("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:b==="ETIQUETA"&&dJ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q(wJ,{children:[Q("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:RX.map((J,X)=>{const Y=fJ(J.label),Z=RQ(J.profesion);return Q("button",{type:"button",onClick:()=>KY(X),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${Z.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},onMouseEnter:($)=>{$.currentTarget.style.transform="translateY(-2px) scale(1.01)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${Z.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${Z.glowColor} 52%, transparent)`},onMouseLeave:($)=>{$.currentTarget.style.transform="translateY(0) scale(1)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},children:Q("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const $=eJ(J.url);if($)return Q("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[Q("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:$.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return Q("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():Q("img",{src:$J(J.url,JQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:zJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Y.bg,borderColor:Y.border,color:Y.text,boxShadow:`0 0 10px ${Y.glow}, 0 0 24px color-mix(in srgb, ${Y.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:Q("div",{className:"flex items-end justify-between gap-3",children:[Q("div",{className:"min-w-0 flex-1",children:[Q("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?Q("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),wZ&&Q("div",{className:"flex justify-center mt-8",children:Q("button",{type:"button",onClick:()=>lX((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",RX.length,"/",y.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),w&&Q("div",{ref:xQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:VJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:kY,children:[Q("button",{type:"button",onClick:kY,className:"btn-metal btn-metal--danger absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full flex items-center justify-center","aria-label":"Cerrar visor",children:Q("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col gap-4 px-3 py-3 sm:px-6 sm:py-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[Q("div",{children:[Q("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:w.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[w.profesion,w.nacionalidad?` · ${w.nacionalidad}`:""]},void 0,!0,void 0,this),w.autor?Q("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",w.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"flex items-center gap-3",children:[y.length>1&&Q(wJ,{children:[Q("button",{type:"button",onClick:()=>KQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${nJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":nJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>pX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${EQ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":EQ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:w.type==="video"?"VIDEO":w.isGif?"GIF":"IMG"},void 0,!1,void 0,this),Q("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:fJ(w.label).bg,borderColor:fJ(w.label).border,color:fJ(w.label).text,boxShadow:`0 0 20px ${fJ(w.label).glow}`},children:w.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"gallery-viewer-media-wrap relative flex-1 min-h-0 md:rounded-[2rem] overflow-hidden md:border theme-border-secondary bg-black/50",children:[w.type==="video"?(()=>{const J=eJ(w.url);if(J)return Q("iframe",{ref:PQ,src:J.src,title:`${w.nombre} video`,className:"w-full h-[calc(100dvh-14rem)] bg-black",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return Q("video",{ref:PQ,src:w.url,controls:!0,playsInline:!0,muted:AX,autoPlay:nJ,onEnded:()=>{if(nJ&&y.length>1)dQ()},onError:()=>{if(y.length>1)dQ()},className:"w-full h-[calc(100dvh-14rem)] object-contain bg-black"},void 0,!1,void 0,this)})():Q("img",{src:$J(w.url,JQ),alt:`${w.nombre} - ${w.label||"galería"}`,ref:PQ,className:"w-full h-[calc(100dvh-14rem)] object-contain bg-black",onError:(J)=>{zJ(J);if(y.length>1)dQ()}},void 0,!1,void 0,this),y.length>1&&Q(wJ,{children:Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();dQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[CJ+1," de ",y.length," archivos visibles"]},void 0,!0,void 0,this),Q("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[oX?Q(wJ,{children:[Q("input",{type:"url",value:aX,onChange:(J)=>wQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),Q("select",{value:tX,onChange:(J)=>kQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[Q("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),JJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:IZ,disabled:eX,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:eX?"Guardando...":"Guardar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{kQ(w?.label||"");wQ(w?.url||"");PJ("");pJ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:()=>pJ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[Q("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),Q("span",{children:w?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),oX&&rX&&Q("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:rX},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),WX&&Q("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:VJ?{left:"18rem"}:void 0,onClick:()=>EX(!1),children:Q("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 mb-5",children:[Q("div",{children:[Q("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[yJ.length," enlace",yJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>EX(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:Q("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!NY.length?Q("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:Q("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):NY.map((J)=>Q("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[Q("div",{className:"mb-4",children:[Q("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-3",children:J.fotos.map((X)=>{const Y=!!FZ[X.id],Z=!!UZ[X.id],$=FX[X.id]??X.url;return Q("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[Q("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:Q("img",{src:JQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-2 min-w-0",children:[Q("div",{className:"flex flex-wrap items-center gap-2",children:[Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",X.label||"Sin etiqueta"]},void 0,!0,void 0,this),Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:X.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"url",value:$,onChange:(H)=>gZ(X.id,H.target.value),placeholder:"https://...",readOnly:!Z,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!Z?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[Q("button",{type:"button",onClick:()=>hZ(X),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>wY(X.id,!0),disabled:Y,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>yZ(X),disabled:Y,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>mZ(X),disabled:Y,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&!e&&!k&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col gap-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:Q0,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),Q("button",{onClick:()=>aY((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),tY&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[Q("select",{value:hX,onChange:(J)=>rY(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:vX.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>X0(hX,z,g),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!z,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{children:[Q("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!z?"Paso 1: elegí un modo de enfrentamiento":lQ&&!g?`Paso 2: elegí una opción de ${XQ(z)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${XQ(z)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!z&&Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:bX.map((J)=>Q("button",{onClick:()=>{_J(J.id);RJ(J.id==="GENERAL"?"all":"");S(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),z&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",XQ(z)]},void 0,!0,void 0,this),Q("button",{onClick:()=>{_J(null);RJ("");S(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),lQ&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",XQ(z)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Z0.map((J)=>Q("button",{onClick:()=>{RJ(J.key);S(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${g===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",Q("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),lQ&&!g&&Q("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[vX.map((J)=>{const X=YQ(J,z,g),Y=Boolean(ZJ?.[X]?.isFinished);return Q("button",{disabled:lQ&&!g,onClick:()=>{S(J);if(!ZJ[X])gY(J,z,g)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Y?"battle-mode-card--completed":""}`,children:[Q("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Y?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Y&&Q("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&k&&(()=>{const J=YQ(k,z,g),X=ZJ[J],Y=L.find((E)=>E.firebaseId===X?.championId),Z=L.find((E)=>E.firebaseId===X?.challengerId),$=Y?vY(k,Y.firebaseId):null,H=Z?vY(k,Z.firebaseId):null;return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:()=>S(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),Q("button",{onClick:()=>{S(null);_J(null);RJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),Q("button",{onClick:()=>JZ((E)=>!E),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),eY&&Q("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const E=Object.keys(X?.matchups||{}).filter((j)=>!!X?.matchups?.[j]);if(!X||!E.length)return Q("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return Q("div",{className:"space-y-2",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),E.map((j)=>{const[O,_]=j.split("__"),F=L.find((D)=>D.firebaseId===O),V=L.find((D)=>D.firebaseId===_),B=F?.nombre||O,M=V?.nombre||_;return Q("button",{onClick:()=>yY(k,O,_,z,g),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:Q("span",{className:"text-xs text-white font-semibold",children:[B," vs ",M]},void 0,!0,void 0,this)},j,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),Q("div",{className:"min-w-0",children:[Q("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:k},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",XQ(z)]},void 0,!0,void 0,this),X?.activeGroupLabel&&Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:X.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!X&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),Q("button",{onClick:()=>gY(k,z,g),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&X.isFinished&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),Q("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Y&&Z&&!X.isFinished&&Q("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[Q("button",{onClick:()=>hY(k,Y.firebaseId,z,g),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":RQ(Y.profesion).baseColor},children:[Q("img",{src:iY(Y,k),alt:Y.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:zJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Y.nombre},void 0,!1,void 0,this),k==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",GY(Y)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",$?.wins||0," · Batallas: ",$?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",$?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col items-center justify-center text-center",children:[Q("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),k==="Estatura"&&Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{onClick:()=>hY(k,Z.firebaseId,z,g),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":RQ(Z.profesion).baseColor},children:[Q("img",{src:iY(Z,k),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:zJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),k==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",GY(Z)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),U==="RANKING"&&!e&&Q("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[Q("div",{className:"ranking-table-scroll",children:Q("table",{className:`w-full ${kX?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[Q("thead",{className:"theme-surface-soft",children:Q("tr",{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:Q("button",{type:"button",onClick:()=>tJ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",XJ==="nombre"?xJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>tJ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",XJ==="Rostro"?xJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>tJ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",XJ==="Cuerpo"?xJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>tJ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",XJ==="Actitud"?xJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),kX&&Q(wJ,{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>tJ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",XJ==="nacionalidad"?xJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>tJ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",XJ==="edad"?xJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("th",{className:"px-8 py-6 text-right",children:Q("div",{className:"flex flex-col items-end gap-1",children:[Q("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),Q("select",{value:XJ,onChange:(J)=>{sX(J.target.value);YX("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[Q("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),Q("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[Q("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:QQ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("tbody",{children:j0.map((J,X)=>Q("tr",{onClick:()=>gQ(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${X===0?"podium-1":X===1?"podium-2":X===2?"podium-3":"hover:bg-white/5"}`,children:[Q("td",{className:"px-8 py-5",children:Q("span",{className:`font-black italic rock-carved-text ${X===0?"text-gold text-4xl":X===1?"text-silver text-3xl":X===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",X+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-8 py-5",children:Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:QJ(J.profesion).color,boxShadow:`0 0 10px ${QJ(J.profesion).sombra}`},children:Q("img",{src:$J(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:zJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();_Q({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:yQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();_Q({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:mQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();_Q({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:uQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),kX&&Q(wJ,{children:[Q("td",{className:"px-4 py-5 text-center",children:[Q("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),Q("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[IJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-8 py-5 text-right",children:Q("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${X===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":X===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":X===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:Q("span",{className:`font-black leading-none ${X===0?"text-gold":X===1?"text-silver":X===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:$0(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),BJ.isOpen&&BJ.profile&&BJ.category&&(()=>{const J=H0(BJ.profile.firebaseId,BJ.category),X=gJ[BJ.category]||[];return Q("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${VJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{_Q({isOpen:!1,profile:null,category:null});ZQ(null)},children:Q("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Y)=>Y.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[BJ.profile.nombre," · ",BJ.category]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>{_Q({isOpen:!1,profile:null,category:null});ZQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"mb-4",children:[Q("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:X.map((Y)=>Q("button",{type:"button",onClick:()=>{const Z=uY(BJ.profile.firebaseId,Y);ZQ(Z)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black",children:Y},`breakdown-item-${Y}`,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Q("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?Q("ul",{className:"space-y-2",children:J.wins.map((Y,Z)=>Q("li",{className:"text-sm text-emerald-200 font-semibold",children:Y},`win-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?Q("ul",{className:"space-y-2",children:J.losses.map((Y,Z)=>Q("li",{className:"text-sm text-rose-200 font-semibold",children:Y},`loss-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),QX?.arenaName&&Q("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[Q("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",QX.arenaName]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>ZQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Y)=>{const Z=Y==="wins",$=QX[Y]||[];return Q("div",{className:`rounded-xl border p-3 min-h-36 ${Z?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[Q("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${Z?"text-emerald-300":"text-rose-300"}`,children:Z?"Ganadas":"Perdidas"},void 0,!1,void 0,this),$.length?Q("ul",{className:"space-y-2",children:$.map((H,E)=>Q("li",{className:"flex items-center justify-between gap-2",children:[Q("span",{className:`text-sm font-semibold ${Z?"text-emerald-100":"text-rose-100"}`,children:H.opponentName},void 0,!1,void 0,this),Q("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await yY(H.arenaName,H.profileId,H.opponentId);const O=uY(BJ.profile.firebaseId,H.arenaName);ZQ(O)}catch(O){console.error("No se pudo eliminar la batalla del desglose:",O);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Y}-${H.pairKey}-${E}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:`text-xs ${Z?"text-emerald-200/70":"text-rose-200/70"}`,children:Z?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Y}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),ZX.isOpen&&ZX.profile&&(()=>{const J=ZX.profile,X=CX(J),Y=Object.entries(gJ);return Q("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>NQ({isOpen:!1,profile:null}),children:Q("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:(Z)=>Z.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();NQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:QQ.map((Z)=>Q("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[Z,": ",Number(X[Z]||0).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Y.map(([Z,$])=>Q("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[Z,": ",TY(J,Z).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(Z)=>Z.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",TJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),U==="CATEGORIAS"&&!e&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex justify-between items-end",children:[Q("div",{children:Q("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>{BX();AQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),s.length===0?Q("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:Q("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:s.map((J)=>Q("div",{onClick:()=>qQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[Q("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[Q("button",{onClick:(X)=>{X.stopPropagation();YJ({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});AQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(i,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:(X)=>{X.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))sZ(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(i,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute inset-0",children:[Q("img",{src:$J(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:zJ},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[Q("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[L.filter((X)=>fQ(X).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),yX&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{onClick:()=>SJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:Q(i,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:fZ,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 gap-16",children:Q("div",{className:"space-y-8",children:[Q("div",{className:"flex flex-col items-center gap-6",children:[Q("div",{className:"flex items-center gap-4 self-start",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:Q(i,{name:a?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:a?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),a&&Q("button",{type:"button",onClick:()=>{D0({...x,firebaseId:a})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[Q(i,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:x.fotos.length>0&&x.fotos[0]!==""?Q("img",{src:$J(x.fotos[0],JQ),className:"w-full h-full object-cover",alt:"Preview",onError:zJ},void 0,!1,void 0,this):Q("div",{className:"text-center p-4",children:[Q(i,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[Q("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),hQ.completed.length>0?Q("ul",{className:"mt-3 space-y-1",children:hQ.completed.map((J)=>Q("li",{className:"text-xs text-emerald-100/90",children:[Q("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),hQ.missing.length>0?Q("ul",{className:"mt-3 space-y-1",children:hQ.missing.map((J)=>Q("li",{className:"text-xs text-amber-100/90",children:Q("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:x.nombre,onChange:(J)=>n({...x,nombre:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),Q("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:x.fotos[0]||"",onChange:(J)=>n((X)=>VY(X,J.target.value))},void 0,!1,void 0,this),Q("input",{type:"file",accept:"image/*,.gif",onChange:AZ,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),Q("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.fechaNacimiento,onChange:(J)=>n({...x,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),Q("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.estaturaCm,onChange:(J)=>n({...x,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.nacionalidad,onChange:(J)=>n({...x,nacionalidad:J.target.value})},void 0,!1,void 0,this),Q("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.ciudad,onChange:(J)=>n({...x,ciudad:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1 group",children:[Q("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),Q("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:x.profesion,onChange:(J)=>n({...x,profesion:J.target.value}),children:[Q("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),Q("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),Q("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),Q("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),Q("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),Q("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),Q("option",{value:"Periodista",className:"theme-surface-card",children:"\uD83D\uDC53 Periodista"},void 0,!1,void 0,this),Q("option",{value:"Bailarina",className:"theme-surface-card",children:"\uD83D\uDC83 Bailarina"},void 0,!1,void 0,this),Q("option",{value:"Atleta",className:"theme-surface-card",children:"\uD83C\uDFCB️‍♀️ Atleta"},void 0,!1,void 0,this),Q("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:Q(i,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex gap-4",children:[a&&Q("button",{type:"button",onClick:dZ,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:Q(i,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs",children:a?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),XZ&&Q("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:zX,children:Q("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"space-y-3",children:[Q("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),Q("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",Q("span",{className:"font-black text-white",children:LJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),fX&&Q("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:fX},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-end gap-3",children:[Q("button",{type:"button",onClick:zX,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:pZ,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),mX&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{type:"button",onClick:()=>{BX();AQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:Q(i,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:cZ,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[Q("div",{className:"space-y-8",children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:Q(i,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:N.label,onChange:(J)=>YJ({...N,label:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Equipo"},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-white",value:N.equipoId||"",onChange:(J)=>YJ({...N,equipoId:J.target.value}),children:[Q("option",{value:"",children:"Seleccionar equipo..."},void 0,!1,void 0,this),ZZ.map((J)=>Q("option",{value:J.firebaseId,children:J.nombre},J.firebaseId,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-full",children:Q("div",{className:"space-y-1 w-full",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),Q("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:N.coverImg,onChange:(J)=>YJ({...N,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-6",children:[Q("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[Q(i,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),Q("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:N.reglas.nacionalidades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>YJ({...N,reglas:{...N.reglas,nacionalidades:N.reglas.nacionalidades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!N.reglas.nacionalidades.includes(J.target.value))YJ({...N,reglas:{...N.reglas,nacionalidades:[...N.reglas.nacionalidades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),NZ.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:N.reglas.ciudades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>YJ({...N,reglas:{...N.reglas,ciudades:N.reglas.ciudades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!N.reglas.ciudades.includes(J.target.value))YJ({...N,reglas:{...N.reglas,ciudades:[...N.reglas.ciudades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),MZ.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:N.reglas.profesiones.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>YJ({...N,reglas:{...N.reglas,profesiones:N.reglas.profesiones.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!N.reglas.profesiones.includes(J.target.value))YJ({...N,reglas:{...N.reglas,profesiones:[...N.reglas.profesiones,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(IX).map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:N.reglas.edadMin,onChange:(J)=>YJ({...N,reglas:{...N.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:N.reglas.edadMax,onChange:(J)=>YJ({...N,reglas:{...N.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:N.reglas.caracteristica,onChange:(J)=>YJ({...N,reglas:{...N.reglas,caracteristica:J.target.value}}),children:QQ.map((J)=>Q("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:N.reglas.operador,onChange:(J)=>YJ({...N,reglas:{...N.reglas,operador:J.target.value}}),children:[Q("option",{children:"Superior a"},void 0,!1,void 0,this),Q("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:N.reglas.umbral,onChange:(J)=>YJ({...N,reglas:{...N.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},w0=ReactDOM.createRoot(document.getElementById("root"));w0.render(Q(k0,{},void 0,!1,void 0,this));