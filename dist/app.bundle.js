import{jsxDEV as X,Fragment as GQ}from"react/jsx-dev-runtime";const A1={apiKey:"AIzaSyAcW679YdIT03pyq8IgKKnR8oyO4_fvpFs",authDomain:"g2elite-a3b85.firebaseapp.com",databaseURL:"https://g2elite-a3b85-default-rtdb.firebaseio.com/",projectId:"g2elite-a3b85",storageBucket:"g2elite-a3b85.firebasestorage.app",messagingSenderId:"951346482286",appId:"1:951346482286:web:6001135252de2a4d982a7f"};if(!firebase.apps.length)firebase.initializeApp(A1);const z=firebase.database(),{useState:V,useEffect:d,useMemo:g,useRef:mQ}=React,QQ=["C","P","B","N","S","E","X"],eX="anonimo/galeria",AQ="__anonimo_gallery__",R1=["PERSONAJE","ETIQUETA","GENERAL"],lZ={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},uQ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],z1={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},bY=()=>uQ.reduce((W,E)=>{W[E.id]="";return W},{}),OQ=(W={})=>{const E=bY(),B=W&&typeof W==="object"?W:{};return Object.keys(E).reduce((A,q)=>{A[q]=typeof B[q]==="string"?B[q].trim():"";return A},{...E})},QY=(W="")=>uQ.find((E)=>E.id===W),N1=(W="")=>z1[(W||"").trim().toLowerCase()]||"",XY={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},aQ=(W,E)=>{if(!E)return 0;return(W+E)%E},oZ=(W,E,B=!1)=>{const A=Array.isArray(E)?E.length:0;if(!A)return null;if(A===1)return 0;if(B){const q=E.map((b,f)=>({item:b,idx:f})).filter(({item:b,idx:f})=>f!==W&&b&&b.url).map(({idx:b})=>b);if(!q.length)return aQ((W??0)+1,A);return q[Math.floor(Math.random()*q.length)]}return aQ((W??0)+1,A)},fQ=(W)=>XY[W]||XY.DEFAULT,YY=(W,E=!1)=>{const B=W==="INICIAL"?XY.DEFAULT:W==="100"?XY.B:fQ(W);return{"--btn-neon-color":B.glow,borderColor:B.border,color:B.text,boxShadow:E?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${B.border}, 0 0 20px ${B.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${B.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${B.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${B.glow} 70%, transparent)`,filter:E?"brightness(1.14)":"brightness(1)"}},tZ=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,M1=/\.gif(\?.*)?$/i,K1=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,k1=/vimeo\.com\/(?:video\/)?(\d+)/i,rQ=(W)=>{const E=(W||"").trim();if(!E)return null;const B=E.match(K1);if(B)return{provider:"youtube",src:`https://www.youtube.com/embed/${B[1]}`,title:"Video de YouTube"};const A=E.match(k1);if(A)return{provider:"vimeo",src:`https://player.vimeo.com/video/${A[1]}`,title:"Video de Vimeo"};return null},G1=["eporner.com"],aZ=(W="")=>{const E=String(W||"").trim();if(!E||E.startsWith("data:")||E.startsWith("blob:"))return!1;try{const A=new URL(E).hostname.toLowerCase();return G1.some((q)=>A===q||A.endsWith(`.${q}`))}catch{return!1}},HQ=(W="",E="")=>{const B=String(W||"").trim();if(!B||aZ(B))return E;return B},cQ=(W="",E="")=>{if(E==="video"||E==="image")return E;const B=(W||"").trim();if(tZ.test(B)||rQ(B))return"video";return"image"},vY=(W="")=>{return typeof W==="string"?W.trim():""},n=(W,E="")=>{if(typeof W==="string")return{url:HQ(W.trim(),""),label:"",type:cQ(W,E),autor:""};if(W&&typeof W==="object"){const B=HQ((W.url||"").trim(),"");return{url:B,label:QQ.includes(W.label)?W.label:"",type:cQ(B,W.type||E),autor:vY(W.autor)}}return{url:"",label:"",type:cQ("",E),autor:""}},w1=(W)=>n(W).url,rZ=(W)=>n(W).label,sQ=(W)=>n(W).type,IY=(W,E,B="image")=>Array.isArray(W?.[E])?W[E].map((A)=>n(A,B)).filter((A)=>A.url):[],S1=(W={})=>({firebaseId:AQ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:IY(W,"fotos","image"),gifs:IY(W,"gifs","image"),videos:IY(W,"videos","video")},batallaFotosPreferidas:bY(),puntuaciones:TX(),isAnonymousGallery:!0}),x1=(W={})=>{if(W?.isAnonymousGallery||W?.firebaseId===AQ)return"anonimo";return W?.firebaseId||""},P1=(W={})=>{const E=HQ(String(W?.fotos?.[0]||"").trim(),""),B=OQ(W?.batallaFotosPreferidas||W?.galeria?.battlePhotoPreferences||{});if(!E)return!1;return uQ.filter((A)=>A.id!=="perfil").every((A)=>Boolean(String(B?.[A.id]||"").trim()))},b1=(W={})=>{const E=[],B=HQ(String(W?.fotos?.[0]||"").trim(),""),A=OQ(W?.batallaFotosPreferidas||W?.galeria?.battlePhotoPreferences||{});if(!B)E.push("Perfil");uQ.filter((q)=>q.id!=="perfil").forEach((q)=>{if(!String(A?.[q.id]||"").trim())E.push(q.label)});return E},v1=(W=null)=>{if(!W)return;const E=window.open("","_blank");if(!E)return;const B=W?.firebaseId||W?.id||"",A=Array.isArray(W?.galeria?.fotos)?W.galeria.fotos.map((C)=>n(C,"image")).filter((C)=>C.url).map((C,M)=>({...C,sourceTag:"fotos",sourceIndex:M})):[],q=A.filter((C)=>C.type==="image"&&C.sourceTag==="fotos"),b=OQ(W?.batallaFotosPreferidas||W?.galeria?.battlePhotoPreferences||{}),f=HQ(String(W?.fotos?.[0]||W?.foto||"").trim(),""),XQ=A.filter((C)=>C.type==="image"&&C.url).reduce((C,M)=>{C[M.url]=M;return C},{}),c=A.length?A.map((C,M)=>`
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
                            <img src="${C.url}" alt="Multimedia ${M+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${C.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',P=q.length?q.map((C,M)=>`
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
                            <img src="${C.url}" alt="Imagen rota ${M+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${C.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',U=uQ.map((C)=>{const M=C.id==="perfil",w=M?f:b[C.id]||"",N=w?M?{url:w}:XQ[w]||{url:w,label:"",sourceIndex:-1}:null,WQ=Boolean(w);return`
                    <div class="multimedia-slot-card ${WQ?"is-assigned":"is-missing"}" data-slot-id="${C.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${C.label}</span>
                            <span class="multimedia-slot-state">${WQ?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${WQ?`<img src="${N.url}" alt="${C.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!M?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${C.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${C.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");E.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${W?.nombre||"Personaje"}</title>
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
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${W?.nombre||"Personaje"}</p>
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
                            const validLabels = ${JSON.stringify(QQ)};
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
                            const slotConfigById = ${JSON.stringify(uQ.reduce((C,M)=>{C[M.id]=M;return C},{}))};
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
            `);E.document.close()},I1=({isOpen:W=!1,profile:E=null,onClose:B=()=>{}})=>{const[A,q]=V(!0),[b,f]=V(!0);d(()=>{if(!W)return;q(!0);f(!0)},[W,E?.firebaseId]);if(!W||!E)return null;const XQ=Array.isArray(E?.galeria?.fotos)?E.galeria.fotos.map((P)=>n(P,"image")).filter((P)=>P.url):[],c=Object.entries(E?.puntuaciones||{}).map(([P,U])=>({label:P,value:Number(U)||0})).sort((P,U)=>U.value-P.value).slice(0,5);return X("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:B,role:"presentation",children:X("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(P)=>P.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[X("button",{type:"button",onClick:B,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),X("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),X("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:E?.nombre||"Personaje"},void 0,!1,void 0,this),X("div",{className:"mt-6 space-y-4",children:[X("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[X("button",{type:"button",onClick:()=>q((P)=>!P),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[X("span",{children:"Galería"},void 0,!1,void 0,this),X("span",{children:A?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A&&X("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:XQ.length?XQ.map((P,U)=>X("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:X("img",{src:P.url,alt:`Multimedia ${U+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${P.url}-${U}`,!1,void 0,this)):X("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[X("button",{type:"button",onClick:()=>f((P)=>!P),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[X("span",{children:"5 Principales"},void 0,!1,void 0,this),X("span",{children:b?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),b&&X("div",{className:"px-4 pb-4 space-y-2",children:c.length?c.map((P)=>X("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[X("span",{className:"text-sm text-slate-200 uppercase",children:P.label},void 0,!1,void 0,this),X("strong",{className:"text-cyan-200",children:P.value},void 0,!1,void 0,this)]},P.label,!0,void 0,this)):X("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},eZ=async(W="",{timeoutMs:E=12000,retries:B=1}={})=>{const A=String(W||"").trim();if(!A)return!0;const q=()=>new Promise((b)=>{const f=new Image;let XQ=!1;const c=(U)=>{if(XQ)return;XQ=!0;f.onload=null;f.onerror=null;b(Boolean(U))},P=window.setTimeout(()=>c(!0),E);f.onload=()=>{clearTimeout(P);const U=Number(f.naturalWidth)>0&&Number(f.naturalHeight)>0;c(!U)};f.onerror=()=>{clearTimeout(P);c(!0)};f.src=A});for(let b=0;b<=B;b+=1)if(!await q())return!1;return!0},Q0=(W,E)=>{const B=(E||"").trim().toLowerCase(),A=Array.isArray(W?.galeria?.fotos)?W.galeria.fotos.map((w)=>n(w,"image")).filter((w)=>w.type==="image"&&w.url):[],b=HQ(W?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(B))return b;const XQ=(w=[])=>{const N=A.filter((h)=>w.includes(rZ(h)));if(!N.length)return"";const WQ=Math.floor(Math.random()*N.length);return N[WQ]?.url||""},c=N1(B),P=QY(c);if(!P)return b;const C=OQ(W?.batallaFotosPreferidas)[c];if(C){if(A.some((N)=>N.url===C))return C}return XQ(P.labels)||b},g1=(W="")=>M1.test((W||"").trim()),eQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",gY=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${eQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,RQ=(W)=>{const E=W?.currentTarget||W?.target;if(!E||E.dataset.fallbackApplied==="true")return;E.dataset.fallbackApplied="true";E.src=eQ;E.style.objectFit="contain";E.style.padding="12px";E.style.background="#020617";E.alt="Imagen no disponible"},p1="g2_elite_database_v4",i1="g2_elite_categories_v4",QX=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],hY=[...QX],yY=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],h1=yY.map((W)=>W.id),XX=(W="")=>{return yY.find((B)=>B.id===W)?.label||"General"},YX=(W,E="GENERAL",B="")=>{const A=String(W||"").trim(),q=String(E||"GENERAL").trim().toUpperCase(),b=String(B||"").trim().toLowerCase();if(!A)return"";return`${q}::${b||"all"}::${A}`},EQ=(W="")=>String(W||"").trim(),X0=(W="")=>{const E=String(W||"").split("::");if(E.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const B=E.slice(2).join("::");return{scopeId:String(E[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:String(E[1]||"all").trim().toLowerCase()||"all",arenaName:String(B||"").trim()}},TX=()=>QX.reduce((W,E)=>{W[E]=0;return W},{}),Y0=[],mY={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},Periodista:{glyph:"quill",color:"rgba(234, 179, 8, 0.8)",tailwind:"yellow-500"},Bailarina:{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Atleta:{glyph:"shield",color:"rgba(59, 130, 246, 0.8)",tailwind:"blue-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},l1=(W="")=>{const E=String(W||"").toLowerCase();if(E.includes("cantante"))return"crown";if(E.includes("nsfw"))return"torch";if(E.includes("actriz")||E.includes("actor"))return"theater";if(E.includes("modelo"))return"floron";if(E.includes("influencer"))return"sigil";if(E.includes("periodista"))return"quill";if(E.includes("bailarina"))return"floron";if(E.includes("atleta"))return"shield";return"shield"},y1=(W="")=>{const E=String(W||"").toLowerCase();if(E.includes("cantante"))return"\uD83C\uDFA4";if(E.includes("nsfw"))return"\uD83D\uDD25";if(E.includes("actriz")||E.includes("actor"))return"\uD83C\uDFAC";if(E.includes("modelo"))return"\uD83D\uDC60";if(E.includes("influencer"))return"\uD83D\uDCF1";if(E.includes("periodista"))return"\uD83D\uDC53";if(E.includes("bailarina"))return"\uD83D\uDC83";if(E.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},CX=(W="")=>{const E=String(W||"").trim(),B=mY[E]||mY.Otro,A=String(B?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),q=String(B?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:A,glowColor:q}},o1=({variant:W="sigil",size:E=18,className:B="",tint:A="currentColor"})=>{const q={width:E,height:E,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:B};if(W==="crown")return X("svg",{...q,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),X("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(W==="shield")return X("svg",{...q,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),X("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(W==="floron")return X("svg",{...q,stroke:A,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M12 4v16"},void 0,!1,void 0,this),X("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),X("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),X("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(W==="quill")return X("svg",{...q,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),X("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(W==="torch")return X("svg",{...q,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),X("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),X("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),X("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(W==="theater")return X("svg",{...q,stroke:A,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),X("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),X("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return X("svg",{...q,stroke:A,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[X("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),X("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},p=({name:W,size:E=20,className:B=""})=>{return X("i",{"data-lucide":W.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:E,height:E},className:`inline-block ${B}`},void 0,!1,void 0,this)},uY=({targetWindow:W,profileName:E,profession:B,photos:A,editingId:q,battlePhotoPrefs:b={},profilePhotoUrl:f=""})=>{if(!W||W.closed)return;const XQ=OQ(b),c=HQ(String(f||"").trim(),""),P=(A||[]).map((U,C)=>{const M=n(U);return{...M,sourceTag:U?.sourceTag||(M.type==="video"?"videos":"fotos"),sourceIndex:typeof U?.sourceIndex==="number"?U.sourceIndex:C}}).filter((U)=>U.url);W.document.open();W.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${E}</title>
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
                <h1>Galería de ${E}</h1>
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
                        ${QQ.map((U)=>`<option value="${U}">Etiqueta ${U}</option>`).join("")}
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
                    ${uQ.map((U)=>{const C=U.id==="perfil",M=C?c:XQ[U.id]||"",w=Boolean(M),N=!C;return`
                            <div class="gallery-slot-card" data-slot-id="${U.id}" style="border:1px solid ${w?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${w?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${w?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${w?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${U.label}</div>
                                <div style="font-size:11px; color:${w?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${w?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${w?`<img src="${M}" alt="Vista previa ${U.label}" onerror="${gY}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${U.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${N?`<button
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
                    ${P.length?P.map((U,C)=>{const M=w1(U),w=rZ(U),N=fQ(w),WQ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},h=WQ[B?.toUpperCase()]||WQ.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${C}"
                            data-source-index="${U.sourceIndex}"
                            data-media-type="${sQ(U)}"
                            data-url="${M}"
                            data-compatible-slots="${w}"
                            draggable="${sQ(U)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${h.color};
                                box-shadow: 0 0 15px ${h.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${sQ(U)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${h.color}, inset 0 0 15px ${h.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${h.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${U.sourceIndex}, mediaType: '${sQ(U)}', id: '${q}'}, '*');"
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
                        ${sQ(U)==="video"?(()=>{const CQ=rQ(M);if(CQ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${CQ.provider.toUpperCase()}</div></div>`;return`<video src="${M}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${M}" alt="Imagen de la galería" onerror="${gY}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${sQ(U)==="video"?"VIDEO":"IMG"}</div>
                        ${w?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${N.bg}; border: 1px solid ${N.border}; color: ${N.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${N.glow}, 0 0 24px ${N.glow}; text-shadow: 0 0 10px ${N.glow}; backdrop-filter: blur(8px);">${w}</div>`:""}
                        ${U.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${w?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${U.autor}</div>`:""}
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
                        ${P.map((U,C)=>{const M=sQ(U),w=rQ(U.url);return`
                            <div class="viewer-slide" id="viewer-slide-${C}">
                                ${M==="video"?w?`<iframe src="${w.src}" title="${w.title} ${C+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${U.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${U.url}" alt="Vista completa ${C+1}" onerror="${gY}" />`}
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
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${q}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
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
                        if (labelInput) labelInput.value = '${QQ[0]}';
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
                        const label = labelInput?.value || '${QQ[0]}';
                        const autor = (authorInput?.value || '').trim();
                        const slotSelectionId = activeSlotSelectionId || document.getElementById('slotSelectionId')?.value || '';

                        const postMedia = (finalUrl, finalType) => {
                            if (!finalUrl) return;
                            window.opener.postMessage({ type: 'ADD_IMAGE', url: finalUrl, label, autor, mediaType: finalType, id: '${q}' }, '*');
                            if (slotSelectionId) {
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${q}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label }, '*');
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
                                    id: '${q}'
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
        `);W.document.close()},m1=()=>{const[W,E]=React.useState(null),B=mQ(null),A=mQ(null),[q,b]=V([]),f={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},XQ=(Q="")=>{const Y=String(Q||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return f[Y]||f.DEFAULT},[c,P]=V(Y0),[U,C]=V("EXPLORAR"),[M,w]=V(null),[N,WQ]=V(null),[h,CQ]=V(""),[$Q,zQ]=V({}),[LQ,wQ]=V({}),[Z0,$0]=V(!1),[fY,J0]=V(hY[0]||""),[ZY,ZX]=V(null),[H0,_0]=V(!1),[cY,SQ]=V(!1),[sY,DX]=V(!1),[t,$X]=V(null),[O0,JX]=V(null),[qQ,HX]=V(null),[W0,dY]=V(!1),[nY,AX]=V(""),[a,_X]=React.useState(null),[$Y,RX]=V(!1),[pY,j0]=V({x:0,y:0}),[YQ,iY]=V("promedio"),[xQ,JY]=V("desc"),[UQ,OX]=V({isOpen:!1,profile:null,category:null}),[HY,zX]=V({isOpen:!1,profile:null}),[NQ,_Y]=V("INICIAL"),[v,E0]=V("GENERAL"),[BQ,l]=V(null),[NX,WX]=V(null),[jX,OY]=V([]),[dQ,lY]=V([]),[nQ,MX]=V(!1),[EX,oY]=V(!1),[WY,L0]=V(5),[tY,aY]=V(20),[VQ,q0]=V(!0),[rY,pQ]=V(!1),[eY,KX]=V(""),[QZ,kX]=V(""),[XZ,PQ]=V(""),[YZ,ZZ]=V(!1),[jY,$Z]=V(""),[EY,JZ]=V("url"),[HZ,_Z]=V(""),[OZ,WZ]=V(null),[jZ,F0]=V(QQ[0]),[EZ,LZ]=V(""),[qZ,LY]=V(""),[GX,bQ]=V(""),[U0,B0]=V(!1),[qY,FY]=V(!1),[FZ,UY]=V({}),[BY,UZ]=V({}),[V0,wX]=V({}),[T0,BZ]=V({}),[iQ,C0]=V(!1),[D0,LX]=V(""),[SX,A0]=V([]),[VZ,R0]=V([]),[z0,TZ]=V(!1),[xX,PX]=V({nombre:"",equipos:[]}),[CZ,N0]=V("alfabetico"),[bX,M0]=V("TODOS"),vQ=mQ(null),vX=mQ(null),VY=mQ(null),IX=mQ(!1),gX=mQ(null),DZ=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),hX=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:bY(),puntuaciones:TX()}),[x,s]=V(hX);d(()=>{if(!N){if(h)CQ("");return}if(N==="GENERAL"&&h!=="all")CQ("all")},[N,h]);const TY=(Q={})=>{const Y=hX(),Z=Q&&typeof Q==="object"?Q:{},$=Z?.puntuaciones&&typeof Z.puntuaciones==="object"?{...Y.puntuaciones,...Z.puntuaciones}:Y.puntuaciones;return{...Z,...Y,nombre:typeof Z.nombre==="string"?Z.nombre:"",nacionalidad:typeof Z.nacionalidad==="string"?Z.nacionalidad:"",ciudad:typeof Z.ciudad==="string"?Z.ciudad:"",profesion:typeof Z.profesion==="string"?Z.profesion:"",fechaNacimiento:typeof Z.fechaNacimiento==="string"?Z.fechaNacimiento:"",estaturaCm:Z.estaturaCm===void 0||Z.estaturaCm===null?"":Z.estaturaCm,fotos:Array.isArray(Z.fotos)?Z.fotos:[],galeria:{fotos:Array.isArray(Z?.galeria?.fotos)?Z.galeria.fotos:[],gifs:Array.isArray(Z?.galeria?.gifs)?Z.galeria.gifs:[],videos:Array.isArray(Z?.galeria?.videos)?Z.galeria.videos:[]},batallaFotosPreferidas:OQ(Z?.batallaFotosPreferidas),puntuaciones:$}},yX=(Q={})=>{if(Q?.isAnonymousGallery||Q?.firebaseId===AQ)return;s(TY(Q));$X(Q.firebaseId||Q.id||null);SQ(!0)},K0=(Q={})=>{if(!(Q?.firebaseId||Q?.nombre))return;const Z=B.current,$=Z&&!Z.closed?Z:window.open("","_blank");B.current=$;uY({targetWindow:$,profileName:Q?.nombre||"",profession:Q?.profesion||"",photos:[...(Q?.galeria?.fotos||[]).map((J,H)=>({...n(J,"image"),sourceTag:"fotos",sourceIndex:H})),...(Q?.galeria?.videos||[]).map((J,H)=>({...n(J,"video"),sourceTag:"videos",sourceIndex:H}))],editingId:Q?.firebaseId||Q?.id||"",battlePhotoPrefs:Q?.batallaFotosPreferidas||Q?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:Q?.fotos?.[0]||""});$?.focus();bQ("");LX("")},AZ=(Q="")=>{if(U==="anonimo")return;const Y=String(Q||"").trim();$X(null);s({...hX(),profesion:Y});SQ(!0)},k0=(Q)=>{if(!Q)return;PX((Y)=>{if((Y.equipos||[]).some((Z)=>Z.teamId===Q))return Y;return{...Y,equipos:[...Y.equipos||[],{teamId:Q,camisetas:[]}]}})},G0=(Q,Y)=>{PX((Z)=>({...Z,equipos:(Z.equipos||[]).map(($)=>$.teamId===Q?{...$,camisetas:Y}:$)}))},w0=async(Q)=>{Q.preventDefault();const Y=String(xX?.nombre||"").trim(),Z=(xX?.equipos||[]).filter(($)=>$?.teamId);if(!Y)return alert("Ingresá el nombre del jugador.");if(!Z.length)return alert("Seleccioná al menos un equipo.");await z.ref("jugadores").push({nombre:Y,equipos:Z,creadoEn:Date.now()});PX({nombre:"",equipos:[]});TZ(!1)},mX=g(()=>{const Y=[{key:"nombre",label:"Nombre",value:x?.nombre},{key:"fotos.0",label:"Foto principal",value:x?.fotos?.[0]},{key:"profesion",label:"Profesión",value:x?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:x?.nacionalidad},{key:"ciudad",label:"Ciudad",value:x?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:x?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:x?.estaturaCm}].map((Z)=>{const $=typeof Z.value==="string"?Z.value.trim():Z.value,J=!($===""||$===void 0||$===null),H=Z.key==="fotos.0"?J?"SI":"NO":J?String($):"Sin completar";return{...Z,isComplete:J,preview:H}});return{completed:Y.filter((Z)=>Z.isComplete),missing:Y.filter((Z)=>!Z.isComplete)}},[x]),RZ=g(()=>new Map((SX||[]).map((Q)=>[Q.id,Q])),[SX]),S0=g(()=>{let Q=[...VZ||[]];if(bX!=="TODOS")Q=Q.filter((Y)=>(Y.equipos||[]).some((Z)=>Z.teamId===bX));Q.sort((Y,Z)=>String(Y?.nombre||"").localeCompare(String(Z?.nombre||""),"es",{sensitivity:"base"}));return Q},[VZ,bX,CZ]),f1=async({profileId:Q,url:Y,tag:Z="fotos",label:$="",type:J="image",autor:H=""})=>{const L=(Y||"").trim(),_=QQ.includes($)?$:"",O=cQ(L,J);if(!Q||!L)return[];const j=z.ref(`perfiles/${Q}/galeria/${Z}`),D=[...(await j.once("value")).val()||[],{url:L,label:_,type:O,autor:vY(H)}];await j.set(D);if(Q===t)s((G)=>({...G,galeria:{...G.galeria||{fotos:[],gifs:[],videos:[]},[Z]:D}}));return D},x0=async({profileId:Q,sourceTag:Y,sourceIndex:Z,label:$})=>{if(!Q||!Y||!Number.isInteger(Z))return;const J=QQ.includes($)?$:"",H=z.ref(`perfiles/${Q}/galeria/${Y}`),L=await H.once("value"),_=Array.isArray(L.val())?L.val():[];if(!_[Z])return;const O=[..._],j=n(O[Z],Y==="videos"?"video":"image");O[Z]={...j,label:J};await H.set(O);if(Q===t)s((F)=>({...F,galeria:{...F.galeria||{fotos:[],gifs:[],videos:[]},[Y]:O}}))},zZ=async({profileId:Q,sourceTag:Y,sourceIndex:Z,url:$})=>{if(!Q||!Y||!Number.isInteger(Z))return;const J=($||"").trim();if(!J)return;const H=z.ref(`perfiles/${Q}/galeria/${Y}`),L=await H.once("value"),_=Array.isArray(L.val())?L.val():[];if(!_[Z])return;const O=[..._],j=Y==="videos"?"video":"image",F=n(O[Z],j);O[Z]={...F,url:J,type:cQ(J,j)};await H.set(O);if(Q===t)s((T)=>({...T,galeria:{...T.galeria||{fotos:[],gifs:[],videos:[]},[Y]:O}}))},P0=async({profileId:Q,sourceTag:Y,sourceIndex:Z})=>{if(!Q||!Y||!Number.isInteger(Z))return;const $=z.ref(`perfiles/${Q}/galeria/${Y}`),J=await $.once("value"),H=Array.isArray(J.val())?J.val():[],L=H[Z];if(!L)return;const _=H.filter((j,F)=>F!==Z);await $.set(_);const O=n(L,Y==="videos"?"video":"image").url;if(O){const j=z.ref(`perfiles/${Q}/batallaFotosPreferidas`),F=await j.once("value"),D={...OQ(F.val())};let G=!1;Object.keys(D).forEach((R)=>{if(D[R]===O){D[R]="";G=!0}});if(G)await j.set(D)}if(Q===t)s((j)=>({...j,galeria:{...j.galeria||{fotos:[],gifs:[],videos:[]},[Y]:_},batallaFotosPreferidas:(()=>{const F=OQ(j.batallaFotosPreferidas);if(!O)return F;const T={...F};Object.keys(T).forEach((D)=>{if(T[D]===O)T[D]=""});return T})()}))},NZ=(Q)=>new Promise((Y,Z)=>{const $=new FileReader;$.onload=()=>Y(String($.result||""));$.onerror=()=>Z(new Error("No se pudo leer el archivo."));$.readAsDataURL(Q)}),MZ=(Q,Y)=>{const Z=String(Y||"").trim(),$=Array.isArray(Q?.galeria?.fotos)?Q.galeria.fotos:[];if(!Z)return{...Q,fotos:[""]};const H=$.some((L)=>n(L,"image").url===Z)?$:[...$,{url:Z,label:"C",type:"image"}];return{...Q,fotos:[Z],galeria:{...Q.galeria||{},fotos:H}}},b0=async(Q)=>{const Y=Q.target.files?.[0];if(!Y)return;try{const Z=await NZ(Y);s(($)=>MZ($,Z))}catch(Z){console.error("Error al cargar foto de perfil local:",Z)}finally{Q.target.value=""}},v0=async({url:Q,label:Y,autor:Z=""})=>{const $=String(Q||"").trim();if(!$)throw new Error("Ingresá una URL o seleccioná un archivo.");const J=QQ.includes(Y)?Y:"",H=cQ($);if(!(H==="image"||tZ.test($)||Boolean(rQ($))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const _=H==="video"?"videos":"fotos",O=z.ref(`${eX}/${_}`),j=await O.once("value"),T=[...Array.isArray(j.val())?j.val():[],{url:$,label:J,type:H,autor:String(Z||"").trim()}];await O.set(T)},I0=async()=>{LY("");try{let Q=String(HZ||"").trim();if(EY==="file"){if(!OZ)throw new Error("Seleccioná un archivo local.");Q=await NZ(OZ)}await v0({url:Q,label:jZ,autor:EZ});_Z("");WZ(null);LZ("");JZ("url")}catch(Q){LY(Q?.message||"No se pudo guardar en galería anónima.")}},c1=async(Q,Y)=>{Y.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await z.collection("galeria").doc(Q).delete()}catch(Z){console.error("Error al borrar de Firebase:",Z)}},[K,JQ]=V(DZ()),CY=()=>JQ(DZ());d(()=>{if(window.lucide)window.lucide.createIcons()},[U,cY,sY,q,a,c]);d(()=>{if(B.current&&!B.current.closed&&t)uY({targetWindow:B.current,profileName:x.nombre,profession:x.profesion,photos:[...(x.galeria?.fotos||[]).map((Q,Y)=>({...n(Q,"image"),sourceTag:"fotos",sourceIndex:Y})),...(x.galeria?.videos||[]).map((Q,Y)=>({...n(Q,"video"),sourceTag:"videos",sourceIndex:Y}))],editingId:t,battlePhotoPrefs:x.batallaFotosPreferidas,profilePhotoUrl:x.fotos?.[0]||""})},[t,x.nombre,x.profesion,x.galeria?.fotos,x.galeria?.videos,x.batallaFotosPreferidas]);d(()=>{const Q=async(O)=>{if(O.data.type==="ADD_IMAGE"){const{url:j,id:F,label:T,mediaType:D,autor:G}=O.data,R=D==="video"?"videos":"fotos";if(!F)return;const S=F===AQ?z.ref(`${eX}/${R}`):z.ref(`perfiles/${F}/galeria/${R}`),ZQ=(await S.once("value")).val()||[],u=(j||"").trim();if(!u)return;const r=[...ZQ,{url:u,label:QQ.includes(T)?T:"",type:cQ(u,D),autor:vY(G)}];await S.set(r);s((I)=>({...I,galeria:{...I.galeria,[R]:r}}))}if(O.data.type==="DELETE_IMAGE"){const{index:j,id:F,mediaType:T}=O.data,D=T==="video"?"videos":"fotos";if(!F)return;const G=F===AQ?z.ref(`${eX}/${D}`):z.ref(`perfiles/${F}/galeria/${D}`),S=(await G.once("value")).val()||[],o=S[j],ZQ=S.filter((r,I)=>I!==j);await G.set(ZQ);const u=n(o,T).url;if(u&&F!==AQ){const r=z.ref(`perfiles/${F}/batallaFotosPreferidas`),I=await r.once("value"),i={...OQ(I.val())};let kQ=!1;Object.keys(i).forEach((aX)=>{if(i[aX]===u){i[aX]="";kQ=!0}});if(kQ)await r.set(i)}s((r)=>({...r,galeria:{...r.galeria,[D]:ZQ},batallaFotosPreferidas:(()=>{const I=OQ(r.batallaFotosPreferidas);if(!u)return I;const e={...I};Object.keys(e).forEach((i)=>{if(e[i]===u)e[i]=""});return e})()}))}if(O.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:j,slotId:F,index:T,mediaType:D}=O.data,G=QY(F);if(!j||j===AQ||!G||!Number.isInteger(T))return;const R=D==="video"?"videos":"fotos",ZQ=(await z.ref(`perfiles/${j}/galeria/${R}`).once("value")).val()||[],u=n(ZQ[T],D);if(!u.url||u.type!=="image")return;await z.ref(`perfiles/${j}/batallaFotosPreferidas/${F}`).set(u.url);s((I)=>({...I,batallaFotosPreferidas:{...OQ(I.batallaFotosPreferidas),[F]:u.url}}))}if(O.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:j,slotId:F,url:T,mediaType:D,label:G}=O.data,R=QY(F),S=String(T||"").trim();if(!j||j===AQ||!R||!S)return;if(D==="video")return;await z.ref(`perfiles/${j}/batallaFotosPreferidas/${F}`).set(S);s((ZQ)=>({...ZQ,batallaFotosPreferidas:{...OQ(ZQ.batallaFotosPreferidas),[F]:S}}))}if(O.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:j,slotId:F}=O.data,T=QY(F);if(!j||j===AQ||!T)return;await z.ref(`perfiles/${j}/batallaFotosPreferidas/${F}`).set("");s((G)=>({...G,batallaFotosPreferidas:{...OQ(G.batallaFotosPreferidas),[F]:""}}))}};window.addEventListener("message",Q);const Y=z.ref("perfiles"),Z=z.ref(eX);let $={},J={};const H=()=>{const O=Object.keys($||{}).map((T)=>({...TY($[T]),firebaseId:T})),j=S1(J||{}),F=Object.values(j.galeria||{}).some((T)=>Array.isArray(T)&&T.length>0);b(F?[...O,j]:O)};Y.on("value",(O)=>{$=O.val()||{};H()});Z.on("value",(O)=>{J=O.val()||{};H()});P(Y0);const L=z.ref("arenaBattleState");L.on("value",(O)=>{zQ(O.val()||{})});const _=z.ref("arenaGlobalState");_.on("value",(O)=>{wQ(O.val()||{})});return()=>{window.removeEventListener("message",Q);Y.off();Z.off();L.off();_.off()}},[]);d(()=>{const Q=z.ref("equipos"),Y=z.ref("jugadores");Q.on("value",(Z)=>{const $=Z.val()||{};A0(Object.entries($).map(([J,H])=>({id:J,...H||{}})))});Y.on("value",(Z)=>{const $=Z.val()||{};R0(Object.entries($).map(([J,H])=>({id:J,...H||{},equipos:Array.isArray(H?.equipos)?H.equipos:[]})))});return()=>{Q.off();Y.off()}},[]);const IQ=(Q)=>{if(!Q)return"?";const Y=new Date,Z=new Date(Q);let $=Y.getFullYear()-Z.getFullYear();if(Y.getMonth()<Z.getMonth()||Y.getMonth()===Z.getMonth()&&Y.getDate()<Z.getDate())$--;return $},DY=(Q={})=>{return{...TX(),...Q?.puntuaciones||{}}},gQ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},AY=(Q={},Y=[])=>{if(!Array.isArray(Y)||!Y.length)return 0;const Z=DY(Q);return Y.reduce(($,J)=>$+(Number(Z[J])||0),0)/Y.length},uX=(Q={})=>{return AY(Q,gQ.Rostro)},fX=(Q={})=>{return AY(Q,gQ.Cuerpo)},cX=(Q={})=>{return AY(Q,gQ.Actitud)},KZ=(Q={},Y="")=>{if(Y==="Rostro")return uX(Q);if(Y==="Cuerpo")return fX(Q);if(Y==="Actitud")return cX(Q);return 0},TQ=(Q={})=>{const Y=Object.keys(gQ).map(($)=>KZ(Q,$));return(Y.reduce(($,J)=>$+J,0)/Y.length).toFixed(0)},sX=(Q)=>{const Y=[],Z=(Q.nacionalidad||"").toLowerCase(),$=(Q.profesion||"").toLowerCase(),J=(Q.ciudad||"").toLowerCase(),H=IQ(Q.fechaNacimiento);c.forEach((L)=>{const _=L.reglas;let O=!0;if(_.nacionalidades?.length>0&&!_.nacionalidades.some((j)=>Z===j.toLowerCase()))O=!1;if(_.profesiones?.length>0&&!_.profesiones.some((j)=>$===j.toLowerCase()))O=!1;if(_.ciudades?.length>0&&!_.ciudades.some((j)=>J===j.toLowerCase()))O=!1;if(_.edadMin&&(H==="?"||H<parseInt(_.edadMin)))O=!1;if(_.edadMax&&(H==="?"||H>parseInt(_.edadMax)))O=!1;if(_.caracteristica&&_.umbral){const j=DY(Q)[_.caracteristica]||0,F=parseInt(_.umbral);if(_.operador==="Superior a"&&j<=F)O=!1;if(_.operador==="Inferior a"&&j>=F)O=!1}if(O)Y.push(L.firebaseId)});return Y},g0=g(()=>["Todas",...new Set(q.map((Q)=>Q.nacionalidad).filter(Boolean))],[q]),s1=g(()=>["Todas",...new Set(q.map((Q)=>Q.profesion).filter(Boolean))],[q]),h0=g(()=>["Todas",...new Set(q.map((Q)=>Q.ciudad).filter(Boolean))],[q]),kZ=g(()=>{return(q||[]).reduce((Q,Y)=>{if(!Y?.firebaseId)return Q;Q[Y.firebaseId]=sX(Y);return Q},{})},[q,c]),lQ=g(()=>{return(q||[]).flatMap((Q)=>{const Y=x1(Q);return[...Array.isArray(Q?.galeria?.fotos)?Q.galeria.fotos.map(($,J)=>({item:$,sourceTag:"fotos",sourceIndex:J,fallbackType:"image"})):[],...Array.isArray(Q?.galeria?.gifs)?Q.galeria.gifs.map(($,J)=>({item:$,sourceTag:"gifs",sourceIndex:J,fallbackType:"image"})):[],...Array.isArray(Q?.galeria?.videos)?Q.galeria.videos.map(($,J)=>({item:$,sourceTag:"videos",sourceIndex:J,fallbackType:"video"})):[]].map(({item:$,sourceTag:J,sourceIndex:H,fallbackType:L})=>{const _=n($,L);return{id:`${Q.firebaseId||Q.nombre||"perfil"}-${J}-${H}`,url:_.url,label:_.label,type:_.type,isGif:_.type==="image"&&g1(_.url),nombre:Q.nombre||"Sin nombre",profesion:Q.profesion||"Perfil",nacionalidad:Q.nacionalidad||"",fotoPerfil:Q.fotos?.[0]||_.url,profileId:Q.firebaseId,sourceCharacterId:Y,sourceTag:J,sourceIndex:H}})})},[q]),_Q=g(()=>{return lQ.filter((Q)=>Boolean(Q.url))},[lQ]),RY=g(()=>{return _Q.reduce((Q,Y)=>{const Z=Y.label||"";if(!Q[Z])Q[Z]=[];Q[Z].push(Y);return Q},{})},[_Q]),GZ=g(()=>{return _Q.reduce((Q,Y)=>{const Z=Y.profileId||Y.nombre;if(!Z)return Q;if(!Q[Z])Q[Z]=[];Q[Z].push(Y);return Q},{})},[_Q]),y0=g(()=>{return new Set(_Q.map((Q)=>Q.profileId).filter(Boolean)).size},[_Q]),wZ=g(()=>{return Object.entries(kZ||{}).reduce((Q,[Y,Z])=>{Q[Y]=new Set(Array.isArray(Z)?Z:[]);return Q},{})},[kZ]),MQ=g(()=>{if(v==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:_Q[0]?.url||"",photos:_Q}];if(v==="PERSONAJE")return Object.entries(GZ).map(([Q,Y])=>{const Z=Y[0]||{};return{id:`PERSONAJE-${Q}`,profileId:Z.profileId||null,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotoPerfil:Z.fotoPerfil||Z.url||"",photos:Y}}).filter((Q)=>Q.photos.length>0).sort((Q,Y)=>Q.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}));if(v==="ETIQUETA")return QQ.map((Q)=>{const Y=RY[Q]||[];return{id:`ETIQUETA-${Q}`,nombre:`Etiqueta ${Q}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:Y[0]?.url||"",photos:Y}}).filter((Q)=>Q.photos.length>0);return(c||[]).map((Q)=>{const Y=_Q.filter((Z)=>{if(!Z.profileId)return!1;const $=wZ[Z.profileId];return $?$.has(Q.firebaseId):!1});return{id:`CARPETA-${Q.firebaseId}`,nombre:Q.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:Q.coverImg||Y[0]?.fotoPerfil||Y[0]?.url||"",photos:Y}}).filter((Q)=>Q.photos.length>0).sort((Q,Y)=>Q.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[_Q,RY,GZ,c,v,wZ]),hQ=g(()=>{if(v==="GENERAL")return MQ[0]||null;if(!NX)return null;return MQ.find((Q)=>Q.id===NX.id)||null},[MQ,NX,v]),DQ=g(()=>{if(v!=="PERSONAJE")return[];return MQ.filter((Q)=>jX.includes(Q.id))},[MQ,v,jX]),qX=g(()=>{if(v==="PERSONAJE")return DQ.flatMap((Q)=>Q.photos||[]);if(v==="ETIQUETA"){if(!dQ.length)return[];return _Q.filter((Q)=>dQ.includes(Q.label))}return hQ?.photos||_Q},[v,DQ,hQ,_Q,dQ]),m0=g(()=>{const Q=qX.reduce((Y,Z)=>{const $=Z.label||"";if(!$)return Y;Y[$]=(Y[$]||0)+1;return Y},{});return QQ.reduce((Y,Z)=>{Y[Z]=Q[Z]||0;return Y},{})},[qX]),m=g(()=>{return qX.filter((Q)=>v==="ETIQUETA"?!0:NQ==="INICIAL"?Q.label!=="X":NQ==="100"?!0:Q.label===NQ)},[qX,NQ,v]),zY=g(()=>{return m.slice(0,tY)},[m,tY]),u0=zY.length<m.length,dX=lZ[v]||v,nX=v!=="GENERAL"&&v!=="ETIQUETA",SZ=g(()=>{if(v!=="PERSONAJE")return[];return MQ.filter((Q)=>!jX.includes(Q.id))},[MQ,v,jX]),k=BQ===null?null:m[aQ(BQ,m.length)]||null,yQ=g(()=>{return lQ.filter((Q)=>{if(Q.type!=="image")return!1;if(!Q.url)return!0;return Boolean(FZ[Q.id])})},[lQ,FZ]),xZ=g(()=>{const Q=yQ.reduce((Y,Z)=>{const $=Z.profileId||Z.nombre||"sin-perfil";if(!Y[$])Y[$]={id:$,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotos:[]};Y[$].fotos.push(Z);return Y},{});return Object.values(Q).map((Y)=>({...Y,fotos:Y.fotos.sort((Z,$)=>(Z.label||"").localeCompare($.label||"","es",{sensitivity:"base"}))})).sort((Y,Z)=>Y.nombre.localeCompare(Z.nombre,"es",{sensitivity:"base"}))},[yQ]);d(()=>{if(!k){pQ(!1);KX("");kX("");PQ("");return}pQ(!1);KX(k.label||"");kX(k.url||"");PQ("")},[k]);d(()=>{if(U!=="GALERIA"){WX(null);l(null)}},[U]);d(()=>{aY(40);l(null)},[v,NQ,dQ,jX,NX,q.length]);d(()=>{WX(null);l(null);OY([]);lY([])},[v]);d(()=>{if(BQ===null)return;if(!m.length){l(null);return}if(BQ>=m.length)l(0)},[m,BQ]);d(()=>{if(BQ===null)return;const Q=(Y)=>{if(Y.key==="Escape"){l(null);return}if(!m.length)return;if(Y.key==="ArrowRight")l((Z)=>aQ((Z??0)+1,m.length));if(Y.key==="ArrowLeft")l((Z)=>aQ((Z??0)-1,m.length))};window.addEventListener("keydown",Q);return()=>window.removeEventListener("keydown",Q)},[m.length,BQ]);d(()=>{if(BQ===null){MX(!1);oY(!1)}},[BQ]);d(()=>{if(!$Y)return;const Q=(Z)=>{if(A.current&&!A.current.contains(Z.target))RX(!1)},Y=(Z)=>{if(Z.key==="Escape")RX(!1)};document.addEventListener("mousedown",Q);window.addEventListener("keydown",Y);return()=>{document.removeEventListener("mousedown",Q);window.removeEventListener("keydown",Y)}},[$Y]);d(()=>{let Q=!1;const Y=lQ.filter(($)=>$.type==="image"&&$.url);if(!Y.length){UY({});return}(async()=>{const $=8,J=[];for(let L=0;L<Y.length;L+=$){const _=Y.slice(L,L+$),O=await Promise.all(_.map(async(j)=>({id:j.id,isBroken:await eZ(j.url)})));J.push(...O);if(Q)return}if(Q)return;const H=J.reduce((L,_)=>{L[_.id]=_.isBroken;return L},{});UY(H)})();return()=>{Q=!0}},[lQ]);d(()=>{if(!qY)return;const Q=yQ.reduce((Y,Z)=>{Y[Z.id]=Z.url;return Y},{});UZ(Q);BZ({})},[qY,yQ]);d(()=>{if(vQ.current){clearTimeout(vQ.current);vQ.current=null}if(!nQ||!k)return;if(k.type==="video")return;const Q=WY*1000;vQ.current=setTimeout(()=>{l((Y)=>oZ(Y,m,EX))},Q);return()=>{if(vQ.current){clearTimeout(vQ.current);vQ.current=null}}},[nQ,k,m,EX,WY]);d(()=>{if(!k||!IX.current)return;IX.current=!1;requestAnimationFrame(()=>{c0()})},[k]);const NY=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,PZ=()=>{const Q=vX.current;if(!Q)return;Q.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},f0=()=>{const Q=vX.current;if(Q)Q.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},c0=()=>{const Q=vX.current;if(!Q)return;if(document.fullscreenElement)return;const Y=Q.requestFullscreen||Q.webkitRequestFullscreen||Q.msRequestFullscreen;if(typeof Y==="function")Promise.resolve(Y.call(Q)).catch(()=>{if(NY)PZ()});else if(NY)PZ()},s0=()=>{if(!document.fullscreenElement)return;const Q=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof Q==="function")Promise.resolve(Q.call(document)).catch(()=>{})},bZ=(Q,Y=!1)=>{IX.current=!!Y;l(Q);MX(Y);pQ(!0)},d0=(Q)=>{if(!Q)return;OY((Y)=>Y.includes(Q)?Y:[...Y,Q]);l(null)},n0=(Q)=>{if(!Q)return;OY((Y)=>Y.filter((Z)=>Z!==Q));l(null)},p0=(Q)=>{if(!Q)return;lY((Y)=>Y.includes(Q)?Y.filter((Z)=>Z!==Q):[...Y,Q]);l(null)},vZ=()=>{IX.current=!1;MX(!1);l(null);f0();s0()},pX=()=>l((Q)=>oZ(Q,m,EX)),d1=()=>l((Q)=>aQ((Q??0)-1,m.length)),i0=async()=>{if(!k?.profileId||!k?.sourceTag||!Number.isInteger(k?.sourceIndex))return;const Q=(QZ||"").trim();if(!Q){PQ("La URL no puede estar vacía.");return}if(aZ(Q)||!HQ(Q,"")){PQ("La URL está bloqueada o no es válida.");return}try{ZZ(!0);PQ("");if(Q!==k.url)await zZ({profileId:k.profileId,sourceTag:k.sourceTag,sourceIndex:k.sourceIndex,url:Q});await x0({profileId:k.profileId,sourceTag:k.sourceTag,sourceIndex:k.sourceIndex,label:eY});pQ(!1)}catch(Y){PQ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",Y)}finally{ZZ(!1)}},l0=(Q,Y)=>{UZ((Z)=>({...Z,[Q]:Y}))},IZ=(Q,Y)=>{if(!Q)return;BZ((Z)=>({...Z,[Q]:Boolean(Y)}))},o0=(Q)=>{const Y=(BY[Q?.id]||Q?.url||"").trim();if(!Y)return;window.open(Y,"_blank","noopener,noreferrer")},t0=async(Q)=>{if(!Q)return;const Y=(BY[Q.id]||"").trim();if(!Y)return;wX((Z)=>({...Z,[Q.id]:!0}));try{if(Y!==Q.url)await zZ({profileId:Q.profileId,sourceTag:Q.sourceTag,sourceIndex:Q.sourceIndex,url:Y});const Z=await eZ(Y);UY(($)=>({...$,[Q.id]:Z}));if(!Z)IZ(Q.id,!1)}catch(Z){console.error("Error al actualizar URL rota:",Z)}finally{wX((Z)=>({...Z,[Q.id]:!1}))}},a0=async(Q)=>{if(!Q)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;wX((Z)=>({...Z,[Q.id]:!0}));try{await P0({profileId:Q.profileId,sourceTag:Q.sourceTag,sourceIndex:Q.sourceIndex})}catch(Z){console.error("Error al eliminar foto rota:",Z)}finally{wX((Z)=>({...Z,[Q.id]:!1}))}},r0=g(()=>{if(v==="PERSONAJE")return DQ.length?`${DQ.length} personaje${DQ.length>1?"s":""} seleccionado${DQ.length>1?"s":""}`:"Sin personajes seleccionados";if(hQ&&nX)return hQ.nombre;return dX},[v,DQ,hQ,nX,dX]),e0=(Q)=>{Q.preventDefault();const Y={...x};if(t)z.ref(`perfiles/${t}`).set(Y).then(()=>{SQ(!1);$X(null)}).catch((Z)=>console.error("Error al excitar la base de datos:",Z));else z.ref("perfiles").push(Y).then(()=>{SQ(!1);s(hX())}).catch((Z)=>console.error("No pudo entrar el perfil:",Z))},Q1=async(Q)=>{Q.preventDefault();const{firebaseId:Y,...Z}=K,$={...Z,type:"custom"};try{if(Y)await z.ref(`categorias/${Y}`).update($);else await z.ref("categorias").push($);DX(!1);CY()}catch(J){console.error("La categoría no quiso guardarse:",J)}},X1=async(Q)=>{if(!Q)return;try{await z.ref(`categorias/${Q}`).remove();P((Y)=>Y.filter((Z)=>Z.firebaseId!==Q));_X((Y)=>Y===Q?null:Y)}catch(Y){console.error("No se pudo borrar la categoría:",Y);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},MY=(Q)=>{if(!Q?.firebaseId)return;AX("");HX(Q);dY(!0)},Y1=()=>{if(!t)return;const Q=q.find((Y)=>Y.firebaseId===t);if(!Q)return;MY(Q)},KY=()=>{dY(!1);JX(null);HX(null)},Z1=async(Q)=>{if(!Q)return;await z.ref(`perfiles/${Q}`).remove();b((Y)=>Y.filter((Z)=>Z.firebaseId!==Q))},$1=async()=>{if(!qQ?.firebaseId)return;try{await Z1(qQ.firebaseId);AX("");SQ(!1);if(t===qQ.firebaseId)$X(null);KY()}catch(Q){console.error("No se pudo borrar el perfil:",Q);AX("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},iX=()=>{RX(!1);HX(null)},J1=(Q,Y)=>{Q.preventDefault();RX(!0);j0({x:Q.clientX,y:Q.clientY});HX(Y)},H1=()=>{if(!qQ)return;s(TY(qQ));$X(qQ.firebaseId);SQ(!0);iX()},_1=async()=>{if(!qQ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){iX();return}try{await z.ref(`perfiles/${qQ.firebaseId}`).remove();b((Y)=>Y.filter((Z)=>Z.firebaseId!==qQ.firebaseId));iX()}catch(Y){console.error("No se pudo borrar el perfil:",Y);alert("No se pudo borrar el perfil. Probá de nuevo.");iX()}},gZ=(Q)=>{const Y=Q?.estaturaCm;if(Y===void 0||Y===null||Y==="")return"Sin dato";const Z=Number(Y);if(Number.isNaN(Z)||Z<=0)return"Sin dato";return`${Math.round(Z)} cm`},kY=(Q="")=>String(Q||"").trim().toLowerCase(),O1=(Q="")=>String(Q||"").trim(),FX=(Q=[])=>[...Q||[]].filter((Y)=>Y?.firebaseId&&(Y?.nombre||"").trim()).sort((Y,Z)=>(Y.nombre||"").localeCompare(Z.nombre||"","es",{sensitivity:"base"})).map((Y)=>Y.firebaseId),hZ=(Q=[],Y="GENERAL")=>{const Z=String(Y||"GENERAL").trim().toUpperCase(),$=[...Q||[]].filter((_)=>_?.firebaseId&&(_?.nombre||"").trim()).sort((_,O)=>(_.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if(Z==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:$.map((_)=>_.firebaseId)}];if(Z==="EDADES"){const _={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};$.forEach((O)=>{const j=IQ(O.fechaNacimiento);if(!Number.isFinite(j)||j<18)return;if(j<=28)_["18-28"].ids.push(O.firebaseId);else if(j<=39)_["29-39"].ids.push(O.firebaseId);else _["40+"].ids.push(O.firebaseId)});return Object.values(_)}const J=Z==="NACIONALIDADES"?"nacionalidad":"profesion",H=Z==="NACIONALIDADES"?"Nacionalidad":"Profesión",L=$.reduce((_,O)=>{const j=kY(O?.[J]);if(!j)return _;if(!_[j])_[j]={key:j,label:O1(O?.[J])||j,typeLabel:H,ids:[]};_[j].ids.push(O.firebaseId);return _},{});return Object.values(L).sort((_,O)=>_.label.localeCompare(O.label,"es",{sensitivity:"base"}))},GY=(Q=[],Y="GENERAL",Z="")=>{const $=[...Q||[]].filter((_)=>_?.firebaseId&&(_?.nombre||"").trim()).sort((_,O)=>(_.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL"){const _=$.map((O)=>O.firebaseId);return{groupedIds:_.length>1?[{key:"general",label:"General",typeLabel:"General",ids:_}]:[],orderedIds:_}}const J=hZ($,Y),H=kY(Z),L=J.filter((_)=>{if(!H||H==="all")return!0;return kY(_.key)===H}).filter((_)=>_.ids.length>=2);return{groupedIds:L,orderedIds:L.flatMap((_)=>_.ids)}},KQ=(Q,Y)=>[Q,Y].sort().join("__"),oQ=(Q)=>{if(!Q||typeof Q!=="object")return null;const Y=String(Q.winnerId||"").trim(),Z=String(Q.loserId||"").trim();if(!Y||!Z||Y===Z)return null;return{winnerId:Y,loserId:Z,reason:Q.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(Q.playedAt)?Q.playedAt:null}},lX=(Q={},Y="")=>!!oQ(Q?.[Y]),UX=(Q={},Y=[])=>{const Z=new Set((Y||[]).filter(Boolean)),$={},J={},H={};Object.entries(Q||{}).forEach(([j,F])=>{const T=oQ(F);if(!T)return;const{winnerId:D,loserId:G}=T;if(Z.size&&(!Z.has(D)||!Z.has(G)))return;const R=KQ(D,G),S={winnerId:D,loserId:G,reason:"direct",playedAt:T.playedAt??Date.now()};$[R]=S;J[R]=S;if(!H[D])H[D]=new Set;H[D].add(G)});new Set([...Object.keys(H),...Object.values(H).flatMap((j)=>[...j])]).forEach((j)=>{const F=[...H[j]||[]],T=new Set;while(F.length){const D=F.shift();if(!D||T.has(D)||D===j)continue;T.add(D);const G=KQ(j,D);if(!J[G])J[G]={winnerId:j,loserId:D,reason:"transitive",playedAt:null};(H[D]||[]).forEach((R)=>{if(!T.has(R))F.push(R)})}});const _=Object.fromEntries(Object.entries(H).map(([j,F])=>[j,[...F]])),O=j1(J);return{directMatchups:$,matchups:J,victoryGraph:_,stats:O}},BX=(Q,Y={})=>{const Z=EQ(Q);if(!Z)return null;const $=FX(q),J=UX(Y?.directMatchups||Y?.matchups||{},$);return{arenaName:Z,orderedIds:$,...J}},W1=(Q=[],Y={})=>{for(let Z=0;Z<Q.length-1;Z++)for(let $=Z+1;$<Q.length;$++){const J=KQ(Q[Z],Q[$]);if(!lX(Y,J))return[Q[Z],Q[$]]}return null},wY=(Q=[],Y={},Z={})=>{const $={...Y||{},...Z||{}};for(const J of Q){const H=W1(J?.ids||[],$);if(H)return H}return null},VX=(Q=[],Y,Z="")=>{if(!Y)return null;return Q.find(($)=>{const J=$?.ids||[];if(!J.includes(Y))return!1;return!Z||J.includes(Z)})||null},j1=(Q={})=>{return Object.keys(Q||{}).reduce((Y,Z)=>{const $=oQ(Q[Z]);if(!$)return Y;const{winnerId:J,loserId:H}=$,L=Y[J]||{wins:0,battles:0},_=Y[H]||{wins:0,battles:0};return{...Y,[J]:{wins:L.wins+1,battles:L.battles+1},[H]:{wins:_.wins,battles:_.battles+1}}},{})},yZ=(Q="",Y="")=>{const Z=String(Y||"").trim();if(!Q||!Z)return!1;return Q.endsWith(`::${Z}`)},E1=(Q,Y)=>{const Z=oQ(Y);if(!Z||Z.reason!=="direct")return Q||null;const $=oQ(Q);if(!$||$.reason!=="direct")return Z;const J=$.playedAt??0;return(Z.playedAt??0)>=J?Z:$},mZ=(Q,Y=$Q)=>{const Z=String(Q||"").trim();if(!Z)return UX({},[]);const $={};Object.entries(Y||{}).forEach(([H,L])=>{if(!yZ(H,Z))return;const _=L?.directMatchups||{};Object.entries(_).forEach(([O,j])=>{$[O]=E1($[O],j)})});const J=[...q||[]].map((H)=>H?.firebaseId).filter(Boolean).sort((H,L)=>String(H).localeCompare(String(L),"es",{sensitivity:"base"}));return UX($,J)},uZ=(Q,Y)=>{const $=(mZ(Q).stats||{})[Y]||{wins:0,battles:0},J=$.battles?Math.round($.wins/$.battles*100):0;return{...$,score:J}},fZ=(Q,Y=$Q)=>{const Z=mZ(Q,Y).stats||{};return[...q||[]].filter(($)=>$?.firebaseId).reduce(($,J)=>{const H=Z[J.firebaseId]||{wins:0,battles:0};$[J.firebaseId]=H.battles?Math.round(H.wins/H.battles*100):0;return $},{})},n1=(Q=[],Y={})=>{for(let Z=0;Z<Q.length-1;Z++)for(let $=Z+1;$<Q.length;$++){const J=KQ(Q[Z],Q[$]);if(!lX(Y,J))return[Q[Z],Q[$]]}return null},cZ=(Q,Y,Z=null)=>{if(!Y)return null;const $=h1.includes(Y.mode)?Y.mode:"GENERAL",J=String(Y.groupKey||"all").trim().toLowerCase()||"all",H=GY(q,$,J),L=H.groupedIds||[],_=H.orderedIds||[],O=BX(Q,Z||LQ?.[EQ(Q)]||{}),j=O?.directMatchups||{},F=O?.matchups||{},T=O?.victoryGraph||{},D=O?.stats||{},G=Y.championId,R=Y.challengerId,S=VX(L,G,R),o=!!G&&!!R&&G!==R&&!!S&&!lX(F,KQ(G,R)),ZQ=L.length?wY(L,Y.matchups||{},F):null,u=o?[G,R]:ZQ,r=!ZQ,I=VX(L,u?.[0],u?.[1]);return{...Y,mode:$,groupKey:J,groupedIds:L,orderedIds:_,stats:D,directMatchups:j,matchups:F,victoryGraph:T,championId:u?u[0]:null,challengerId:u?u[1]:null,activeGroupKey:I?.key||null,activeGroupLabel:I?`${I.typeLabel}: ${I.label}`:"",isFinished:r}};d(()=>{if(!q.length)return;const Q={},Y=[];Object.entries($Q||{}).forEach(([Z,$])=>{const{arenaName:J}=X0(Z),H=cZ(J,$,LQ?.[EQ(J)]);if(!H)return;if(JSON.stringify($)===JSON.stringify(H))return;Q[Z]=H;Y.push(z.ref(`arenaBattleState/${Z}`).set(H).catch((_)=>console.error("No se pudo normalizar el estado del arena:",_)))});if(!Object.keys(Q).length)return;zQ((Z)=>({...Z,...Q}));Promise.all(Y).catch(()=>{})},[$Q,LQ,q]);d(()=>{if(!q.length)return;const Q={};Object.entries($Q||{}).forEach(([$,J])=>{const{arenaName:H}=X0($),L=EQ(H);if(!L)return;if(!Q[L])Q[L]={};Object.entries(J?.directMatchups||{}).forEach(([_,O])=>{const j=oQ(O);if(!j)return;Q[L][_]={winnerId:j.winnerId,loserId:j.loserId,reason:"direct",playedAt:j.playedAt??Date.now()}})});const Y=[],Z={};Object.entries(Q).forEach(([$,J])=>{const H=EQ($);if(!H||LQ?.[H])return;const L=BX($,{directMatchups:J});if(!L)return;Z[H]=L;Y.push(z.ref(`arenaGlobalState/${H}`).set(L).catch((_)=>console.error("No se pudo migrar arenaGlobalState:",_)))});if(!Object.keys(Z).length)return;wQ(($)=>({...$,...Z}));Promise.all(Y).catch(()=>{})},[$Q,LQ,q]);const sZ=(Q,Y=N,Z=h)=>{const $=[...q].filter((S)=>S?.firebaseId&&(S?.nombre||"").trim()).sort((S,o)=>(S.nombre||"").localeCompare(o.nombre||"","es",{sensitivity:"base"}));if($.length<2)return;const J=String(Y||"GENERAL").trim().toUpperCase(),H=GY($,J,Z),L=H.groupedIds||[],_=H.orderedIds||[],O=EQ(Q),j=BX(Q,LQ?.[O]||{}),F=j?.matchups||{},T=wY(L,{},F);if(!T)return;const D=VX(L,T[0],T[1]),G={mode:J,groupKey:String(Z||"").trim().toLowerCase()||"all",groupedIds:L,orderedIds:_,stats:j?.stats||{},directMatchups:j?.directMatchups||{},matchups:F,victoryGraph:j?.victoryGraph||{},championId:T[0],challengerId:T[1],activeGroupKey:D?.key||null,activeGroupLabel:D?`${D.typeLabel}: ${D.label}`:"",isFinished:!1},R=YX(Q,Y,Z);if(!R)return;zQ((S)=>({...S,[R]:G}));if(!LQ?.[O]){wQ((S)=>({...S,[O]:j}));z.ref(`arenaGlobalState/${O}`).set(j).catch((S)=>console.error("No se pudo guardar arenaGlobalState inicial:",S))}z.ref(`arenaBattleState/${R}`).set(G).catch((S)=>console.error("No se pudo guardar el estado del arena:",S))},L1=async(Q,Y,Z)=>{if(!Q)return;try{await z.ref(`perfiles/${Q}/puntuaciones/${Y}`).set(Z)}catch($){console.error("No se pudo actualizar score del arena:",$)}},dZ=(Q,Y,Z=N,$=h)=>{const J=YX(Q,Z,$),H=$Q[J];if(!H||H.isFinished)return;const L=EQ(Q),_=BX(Q,LQ?.[L]||{}),O=Array.isArray(H.groupedIds)&&H.groupedIds.length?H.groupedIds:GY(q,H.mode||"GENERAL",H.groupKey||"all").groupedIds,{championId:j,challengerId:F}=H;if(Y!==j&&Y!==F)return;const T=Y===j?F:j;if(!Y||!T)return;const D=KQ(Y,T),G={..._?.directMatchups||{},[D]:{winnerId:Y,loserId:T,reason:"direct",playedAt:Date.now()}},R=UX(G,FX(q)),S=R.matchups,o=R.stats||{},ZQ=VX(O,Y,T),r=((FQ,jQ,PY)=>{if(!jQ)return null;for(const rX of FQ){if(!rX||rX===jQ)continue;const D1=KQ(jQ,rX);if(!lX(PY,D1))return rX}return null})(ZQ?.ids||[],Y,S),I=r?[Y,r]:wY(O,H.matchups||{},S),e=VX(O,I?.[0],I?.[1]),i={arenaName:L,orderedIds:FX(q),directMatchups:R.directMatchups,matchups:S,victoryGraph:R.victoryGraph,stats:o},kQ={...H,groupedIds:O,directMatchups:i.directMatchups,stats:o,matchups:S,victoryGraph:R.victoryGraph,championId:I?I[0]:null,challengerId:I?I[1]:null,activeGroupKey:e?.key||null,activeGroupLabel:e?`${e.typeLabel}: ${e.label}`:"",isFinished:!I},aX={...$Q||{},[J]:kQ},xY=fZ(Q,aX);b((FQ)=>FQ.map((jQ)=>{if(!jQ?.firebaseId||!Object.prototype.hasOwnProperty.call(xY,jQ.firebaseId))return jQ;const PY=xY[jQ.firebaseId];return{...jQ,puntuaciones:{...jQ.puntuaciones||{},[Q]:PY}}}));Object.entries(xY).forEach(([FQ,jQ])=>{L1(FQ,Q,jQ)});zQ((FQ)=>({...FQ,[J]:kQ}));wQ((FQ)=>({...FQ,[L]:i}));Promise.all([z.ref(`arenaGlobalState/${L}`).set(i),z.ref(`arenaBattleState/${J}`).set(kQ)]).catch((FQ)=>console.error("No se pudo guardar avance de batallas:",FQ))},q1=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((q||[]).map((Y)=>{if(!Y?.firebaseId)return Promise.resolve();return z.ref(`perfiles/${Y.firebaseId}/puntuaciones`).set(TX())}));b((Y)=>Y.map((Z)=>({...Z,puntuaciones:TX()})));zQ({});wQ({});await z.ref("arenaBattleState").remove();await z.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(Y){console.error("No se pudieron resetear las calificaciones:",Y);alert("No se pudo completar el reseteo.")}},F1=async(Q,Y=N,Z=h)=>{if(!Q){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${Q}" para todos los perfiles. ¿Continuar?`))return;try{const J={...$Q||{}},H=Object.keys(J).filter((_)=>yZ(_,Q));H.forEach((_)=>delete J[_]);await Promise.all(H.map((_)=>z.ref(`arenaBattleState/${_}`).remove()));zQ(J);await Promise.all((q||[]).map((_)=>{if(!_?.firebaseId)return Promise.resolve();return z.ref(`perfiles/${_.firebaseId}/puntuaciones/${Q}`).set(0)}));b((_)=>_.map((O)=>({...O,puntuaciones:{...O.puntuaciones||{},[Q]:0}})));const L=YX(Q,Y,Z);zQ((_)=>{if(!_?.[L])return _;const O={..._};delete O[L];return O});wQ((_)=>{const O=EQ(Q);if(!_?.[O])return _;const j={..._};delete j[O];return j});await z.ref(`arenaBattleState/${L}`).remove();await z.ref(`arenaGlobalState/${EQ(Q)}`).remove();alert(`Se reseteó "${Q}" (${XX(Y)}) y se limpió su estado de batallas.`)}catch(J){console.error("No se pudo resetear el item:",J);alert("No se pudo resetear ese item.")}},nZ=async(Q,Y,Z,$=N,J=h)=>{const H=YX(Q,$,J),L=$Q?.[H],_=EQ(Q),O=BX(Q,LQ?.[_]||{});if(!L){alert("Esa arena no tiene estado cargado.");return}const j=O?.matchups||{},F=O?.directMatchups||{};if(!Object.keys(j).filter((R)=>!!j[R]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const D=KQ(Y,Z);if(!j[D]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!F[D]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const R={...F};delete R[D];const S=UX(R,FX(q)),o={arenaName:_,orderedIds:FX(q),directMatchups:S.directMatchups,matchups:S.matchups,victoryGraph:S.victoryGraph,stats:S.stats},ZQ={...L,directMatchups:o.directMatchups,matchups:o.matchups,victoryGraph:o.victoryGraph,stats:o.stats},u=cZ(Q,ZQ,o);if(!u){alert("No se pudo recomponer el estado del arena.");return}zQ((e)=>({...e,[H]:u}));wQ((e)=>({...e,[_]:o}));await Promise.all([z.ref(`arenaGlobalState/${_}`).set(o),z.ref(`arenaBattleState/${H}`).set(u)]);const r={...$Q||{},[H]:u},I=fZ(Q,r);await Promise.all(Object.entries(I).map(async([e,i])=>{await z.ref(`perfiles/${e}/puntuaciones/${Q}`).set(i)}));b((e)=>e.map((i)=>{if(!i?.firebaseId||!Object.prototype.hasOwnProperty.call(I,i.firebaseId))return i;const kQ=I[i.firebaseId];return{...i,puntuaciones:{...i.puntuaciones||{},[Q]:kQ}}}));alert("Batalla reseteada correctamente.")}catch(R){console.error("No se pudo resetear la batalla:",R);alert("No se pudo resetear esa batalla.")}},U1=g(()=>{const Q=q;if(U==="RANKING")return[...Q].sort((Y,Z)=>parseFloat(TQ(Z))-parseFloat(TQ(Y)));if(U==="CATEGORIAS"&&a)return Q.filter((Y)=>sX(Y).includes(a));return Q},[q,U,a]),oX=g(()=>{const Q=String(jY||"").trim().toLowerCase(),Y=($)=>{return[$?.profesion,$?.profesiones].flatMap((H)=>{if(Array.isArray(H))return H;if(typeof H==="string")return H.split(",");return[]}).map((H)=>String(H||"").trim()).filter(Boolean).join(" ")},Z=($)=>{if(!$||typeof $!=="object")return!1;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),String($.ciudad||"").trim(),Y($),String($.fechaNacimiento||"").trim(),String($.estaturaCm||"").trim()].some(Boolean)||Array.isArray($.fotos)&&$.fotos.some(Boolean)};return[...q||[]].filter(($)=>{if(!Z($))return!1;if(iQ&&P1($))return!1;if(!Q)return!0;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),Y($)].join(" ").toLowerCase().includes(Q)}).sort(($,J)=>String($?.nombre||"").localeCompare(String(J?.nombre||""),"es",{sensitivity:"base"}))},[q,jY,iQ]),y=g(()=>oX.find((Q)=>Q?.firebaseId===GX)||null,[oX,GX]);d(()=>{const Q=()=>LX("");document.addEventListener("click",Q);return()=>document.removeEventListener("click",Q)},[]);const B1=g(()=>{if(!N)return[];return hZ(q,N)},[q,N]),tX=N&&N!=="GENERAL",pZ=(Q,Y)=>{if(Y==="promedio")return Number(TQ(Q))||0;if(Y==="nombre")return(Q.nombre||"").toLowerCase();if(Y==="nacionalidad")return(Q.nacionalidad||"").toLowerCase();if(Y==="edad"){const Z=IQ(Q.fechaNacimiento);return typeof Z==="number"?Z:-1}if(Y==="Rostro")return uX(Q)||0;if(Y==="Cuerpo")return fX(Q)||0;if(Y==="Actitud")return cX(Q)||0;return Number(Q.puntuaciones?.[Y]||0)},V1=(Q)=>{if(YQ==="promedio")return TQ(Q);if(YQ==="Rostro")return uX(Q).toFixed(0);if(YQ==="Cuerpo")return fX(Q).toFixed(0);if(YQ==="Actitud")return cX(Q).toFixed(0);if(QX.includes(YQ))return Number(Q.puntuaciones?.[YQ]||0).toFixed(0);return TQ(Q)},tQ=(Q,Y="asc")=>{if(YQ===Q){JY((Z)=>Z==="asc"?"desc":"asc");return}iY(Q);JY(Y)},T1=(Q,Y)=>{const Z=gQ[Y]||[],$=new Set,J=new Set,H=Object.entries($Q||{});Z.forEach((O)=>{const j=LQ?.[EQ(O)]?.matchups||{};Object.values(j).forEach((F)=>{if(!F||typeof F!=="object")return;if(F.winnerId===Q&&F.loserId)$.add(F.loserId);if(F.loserId===Q&&F.winnerId)J.add(F.winnerId)})});const L=new Map((q||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),_=(O)=>[...O].map((j)=>L.get(j)).filter(Boolean).sort((j,F)=>j.localeCompare(F,"es",{sensitivity:"base"}));return{wins:_($),losses:_(J)}},iZ=(Q,Y)=>{const Z=String(Y||"").trim(),$=String(Q||"").trim();if(!Z||!$)return{arenaName:Z,wins:[],losses:[]};const J=LQ?.[EQ(Z)]?.matchups||{},H=new Map((q||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),L=([O,j])=>{if(!j||typeof j!=="object")return null;const F=String(j.winnerId||"").trim(),T=String(j.loserId||"").trim();if(!F||!T)return null;const D=F===$;if(!D&&T!==$)return null;const R=D?T:F;return{pairKey:O,arenaName:Z,profileId:$,opponentId:R,opponentName:H.get(R)||"Sin nombre",winnerId:F,loserId:T}},_=Object.entries(J).map(L).filter(Boolean).sort((O,j)=>O.opponentName.localeCompare(j.opponentName,"es",{sensitivity:"base"}));return{arenaName:Z,wins:_.filter((O)=>O.winnerId===$),losses:_.filter((O)=>O.loserId===$)}},C1=[...U1].sort((Q,Y)=>{const Z=pZ(Q,YQ),$=pZ(Y,YQ);let J=0;if(typeof Z==="string"||typeof $==="string")J=String(Z).localeCompare(String($),"es",{sensitivity:"base"});else J=Z-$;if(J===0)return(Q.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"});return xQ==="asc"?J:-J}),SY=!VQ;return X("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[VQ&&X("aside",{className:"hud-frame hud-frame--panel w-72 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-8 z-20 shadow-xl overflow-y-auto relative",children:[X("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),X("div",{className:"mb-12 text-center flex-shrink-0",children:[X("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"JUGADORES",icon:"users",label:"Jugadores"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((Q)=>X("button",{onClick:()=>{C(Q.id);_X(null);WX(null);l(null);bQ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-4 px-6 py-4 rounded-[2rem] text-sm transition-all ${U===Q.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[X(p,{name:Q.icon,size:18},void 0,!1,void 0,this),Q.label]},Q.id,!0,void 0,this))},void 0,!1,void 0,this),X("button",{onClick:()=>AZ(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[X(p,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[X("button",{onClick:()=>q0((Q)=>!Q),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":VQ?"Replegar menú lateral":"Desplegar menú lateral",title:VQ?"Replegar menú lateral":"Desplegar menú lateral",children:X(p,{name:VQ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${VQ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[X("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),X("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),y&&X("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${VQ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>bQ(""),role:"presentation",children:X("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(Q)=>Q.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[X("button",{type:"button",onClick:()=>bQ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:X(p,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[X("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:X("img",{src:y.fotos?.[0]||"https://via.placeholder.com/500x700",alt:y.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"space-y-6",children:[X("div",{children:[X("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),X("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:y.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!y?.isAnonymousGallery&&X("div",{className:"grid grid-cols-1 gap-4",children:[X("article",{className:"taller-data-chip",children:[X("span",{children:"Profesión"},void 0,!1,void 0,this),X("strong",{children:y.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),X("strong",{children:`${y.nacionalidad||"No definida"} - ${y.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),X("strong",{children:`${y.fechaNacimiento||"No informado"} - ${IQ(y.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("article",{className:"taller-data-chip",children:[X("span",{children:"Estatura"},void 0,!1,void 0,this),X("strong",{children:y.estaturaCm?`${y.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"pt-2",children:X("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!y?.isAnonymousGallery&&X("button",{type:"button",onClick:()=>{zX({isOpen:!0,profile:y})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>{const Q=B.current,Y=Q&&!Q.closed?Q:window.open("","_blank");B.current=Y;uY({targetWindow:Y,profileName:y?.nombre||"",profession:y?.profesion||"",photos:[...(y?.galeria?.fotos||[]).map((Z,$)=>({...n(Z,"image"),sourceTag:"fotos",sourceIndex:$})),...(y?.galeria?.videos||[]).map((Z,$)=>({...n(Z,"video"),sourceTag:"videos",sourceIndex:$}))],editingId:y?.firebaseId||y?.id||"",battlePhotoPrefs:y?.batallaFotosPreferidas||y?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:y?.fotos?.[0]||""});Y?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!y?.isAnonymousGallery&&X(GQ,{children:[X("button",{type:"button",onClick:()=>{bQ("");yX(y)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>MY(y),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="TALLER"&&X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{className:"space-y-2",children:X("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"max-w-2xl",children:X("input",{id:"tallerSearchInput",type:"text",value:jY,onChange:(Q)=>$Z(Q.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{children:X("button",{type:"button",onClick:()=>C0((Q)=>!Q),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${iQ?"btn-metal--danger":""}`,children:["Fotos incompletas ",iQ?"(Activo)":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:oX.map((Q)=>{const Y=XQ(Q.profesion),Z=GX&&GX===Q.firebaseId,$=b1(Q),J=D0===(Q.firebaseId||Q.nombre);return X("button",{type:"button",onClick:()=>{LX("");bQ("");yX(Q)},onContextMenu:(H)=>{if(!iQ||!$.length)return;H.preventDefault();H.stopPropagation();LX((L)=>L===(Q.firebaseId||Q.nombre)?"":Q.firebaseId||Q.nombre)},onTouchStart:()=>{if(!iQ||!$.length)return;clearTimeout(gX.current);gX.current=setTimeout(()=>{LX(Q.firebaseId||Q.nombre)},550)},onTouchEnd:()=>{clearTimeout(gX.current)},onTouchMove:()=>{clearTimeout(gX.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Z?"taller-card--selected":""}`,children:[X("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:X("img",{src:Q.fotos?.[0]||"https://via.placeholder.com/400x500",alt:Q.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:Q.nombre||"Sin nombre"},void 0,!1,void 0,this),X("p",{className:"text-xs text-slate-300 truncate",children:Q.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),X("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:Y.color,textShadow:`0 0 12px ${Y.sombra}`},children:Q.profesion||"Profesión no definida"},void 0,!1,void 0,this),J&&X("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(H)=>{H.preventDefault();H.stopPropagation();K0(Q)},role:"tooltip",title:"Ir a la galería de este personaje",children:[X("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),X("ul",{className:"space-y-1 mb-2",children:$.map((H)=>X("li",{className:"leading-tight",children:["• ",H]},H,!0,void 0,this))},void 0,!1,void 0,this),X("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Q.firebaseId||Q.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!oX.length&&X("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),X(I1,{isOpen:U0,profile:y,onClose:()=>B0(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="JUGADORES"&&!a&&X("div",{className:"space-y-6 animate-in fade-in duration-500",children:[X("div",{className:"flex flex-wrap items-center gap-3 justify-between",children:[X("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Jugadores"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>TZ((Q)=>!Q),className:"btn-metal btn-metal--gold py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"+ Agregar jugador"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),z0&&X("form",{onSubmit:w0,className:"hud-frame hud-frame--panel profession-banner p-6 rounded-2xl space-y-4",children:[X("input",{type:"text",value:xX.nombre,onChange:(Q)=>PX((Y)=>({...Y,nombre:Q.target.value})),placeholder:"Nombre del jugador",className:"w-full rounded-xl border border-cyan-200/30 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap items-center gap-3",children:X("select",{defaultValue:"",onChange:(Q)=>{k0(Q.target.value);Q.target.value=""},className:"rounded-xl border border-cyan-200/30 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none",children:[X("option",{value:"",children:"Agregar equipo..."},void 0,!1,void 0,this),SX.map((Q)=>X("option",{value:Q.id,children:Q.nombre||"Equipo sin nombre"},Q.id,!1,void 0,this))]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("div",{className:"space-y-3",children:(xX.equipos||[]).map((Q)=>{const Y=RZ.get(Q.teamId)||{},Z=Array.isArray(Y.camisetas)?Y.camisetas:[];return X("div",{className:"rounded-xl border border-cyan-200/20 p-4 space-y-2",children:[X("p",{className:"text-sm font-bold text-cyan-100",children:Y.nombre||"Equipo"},void 0,!1,void 0,this),X("select",{multiple:!0,value:Q.camisetas||[],onChange:($)=>G0(Q.teamId,[...$.target.selectedOptions].map((J)=>J.value)),className:"w-full min-h-[90px] rounded-xl border border-cyan-200/20 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none",children:Z.map(($,J)=>X("option",{value:String($),children:String($)},`${Q.teamId}-${J}`,!1,void 0,this))},void 0,!1,void 0,this)]},Q.teamId,!0,void 0,this)})},void 0,!1,void 0,this),X("button",{type:"submit",className:"btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Guardar jugador"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap gap-3 items-center",children:[X("select",{value:CZ,onChange:(Q)=>N0(Q.target.value),className:"rounded-xl border border-cyan-200/30 bg-slate-950/70 px-4 py-2 text-xs text-slate-100 outline-none",children:X("option",{value:"alfabetico",children:"Orden alfabético"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("select",{value:bX,onChange:(Q)=>M0(Q.target.value),className:"rounded-xl border border-cyan-200/30 bg-slate-950/70 px-4 py-2 text-xs text-slate-100 outline-none",children:[X("option",{value:"TODOS",children:"Todos los equipos"},void 0,!1,void 0,this),SX.map((Q)=>X("option",{value:Q.id,children:Q.nombre||"Equipo sin nombre"},`filter-${Q.id}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:S0.map((Q)=>X("article",{className:"rounded-2xl border border-cyan-200/20 bg-slate-900/60 p-4 space-y-2",children:[X("h3",{className:"text-lg font-black text-white",children:Q.nombre||"Sin nombre"},void 0,!1,void 0,this),X("div",{className:"space-y-2",children:(Q.equipos||[]).map((Y)=>{const Z=RZ.get(Y.teamId)||{};return X("p",{className:"text-xs text-slate-300",children:[Z.nombre||"Equipo"," — Camisetas: ",(Y.camisetas||[]).join(", ")||"Sin camisetas seleccionadas"]},`${Q.id}-${Y.teamId}`,!0,void 0,this)})},void 0,!1,void 0,this)]},Q.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="anonimo"&&!a&&X("div",{className:"space-y-8 animate-in fade-in duration-500",children:X("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[X("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),X("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),X("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),X("div",{className:"mt-8 grid gap-4 md:grid-cols-2",children:[X("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:EY,onChange:(Q)=>{JZ(Q.target.value);LY("")},children:[X("option",{value:"url",children:"Origen: URL"},void 0,!1,void 0,this),X("option",{value:"file",children:"Origen: Archivo local"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:jZ,onChange:(Q)=>F0(Q.target.value),children:QQ.map((Q)=>X("option",{value:Q,children:Q},Q,!1,void 0,this))},void 0,!1,void 0,this),EY==="url"?X("input",{placeholder:"https://ejemplo.com/media.jpg o YouTube/Vimeo",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:HZ,onChange:(Q)=>_Z(Q.target.value)},void 0,!1,void 0,this):X("input",{type:"file",accept:"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(Q)=>WZ(Q.target.files?.[0]||null)},void 0,!1,void 0,this),X("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:EZ,onChange:(Q)=>LZ(Q.target.value)},void 0,!1,void 0,this),X("button",{type:"button",onClick:I0,className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar en anónimo"},void 0,!1,void 0,this),qZ&&X("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:qZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="EXPLORAR"&&!a&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((q||[]).map((Q)=>String(Q?.profesion||"").trim()).filter(Boolean))].map((Q)=>{const Y=(q||[]).filter(($)=>String($?.profesion||"").trim()===Q).length,Z=CX(Q);return X("div",{onClick:()=>_X(Q),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Z.baseColor,"--folder-glow":Z.glowColor},children:[X("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:y1(Q)},void 0,!1,void 0,this),X("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:Q},void 0,!1,void 0,this),X("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:X("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[Y," ",Y===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},Q,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a&&X("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[X("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":U==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":CX(a).baseColor},children:[X("div",{className:"flex items-center gap-3",children:[X("button",{onClick:()=>_X(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:X("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:X("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:()=>AZ(U==="CATEGORIAS"?"":a),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:U==="CATEGORIAS"?c.find((Q)=>Q.firebaseId===a)?.label||"Archivo del Reino":a},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(q||[]).filter((Q)=>{if(!Q)return!1;if(U==="CATEGORIAS")return sX(Q).includes(a);return String(Q.profesion||"").trim().toLowerCase()===String(a).trim().toLowerCase()}).map((Q)=>{const Y=Number(typeof TQ==="function"?TQ(Q):0)||0,Z=Y>=95?"card-score-badge--gold":Y>=86?"card-score-badge--diamond":Y>=75?"card-score-badge--fire":"",$=XQ(Q.profesion);return X("div",{onClick:()=>{JX(null);$Z("");bQ(Q.firebaseId||"")},onContextMenu:(J)=>J1(J,Q),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":$.color,"--card-neon-glow":$.sombra},children:X("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[X("img",{src:HQ(Q.fotos&&Q.fotos.length>0?Q.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:RQ},void 0,!1,void 0,this),X("div",{className:"absolute top-3 left-3 z-20",children:[X("button",{type:"button",onClick:(J)=>{J.stopPropagation();AX("");HX(Q);JX((H)=>H===Q.firebaseId?null:Q.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:X(p,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),O0===Q.firebaseId&&X("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:(J)=>J.stopPropagation(),children:[X("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{JX(null);yX(Q)},children:"Editar"},void 0,!1,void 0,this),X("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{MY(Q);JX(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:(J)=>{J.stopPropagation();zX({isOpen:!0,profile:Q})},className:`card-score-badge ${Z} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${Q.nombre}`,children:[Y>=75&&Y<=85&&X("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),X("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),X("span",{className:"card-score-badge__value text-lg font-black",children:typeof TQ==="function"?TQ(Q):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute bottom-4 left-4 right-4",children:X("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[X("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[Q.nombre,X("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof IQ==="function"?IQ(Q.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex justify-between items-center mt-1",children:[X("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:Q.profesion},void 0,!1,void 0,this),X("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:Q.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Q.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),$Y&&qQ&&X("div",{ref:A,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${pY.y}px`,left:`${pY.x}px`},children:[X("button",{type:"button",onClick:H1,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:_1,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="GALERIA"&&!a&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[X("div",{children:[X("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${dX} · ${r0}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:[R1.map((Q)=>X("button",{type:"button",onClick:()=>E0(Q),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${v===Q?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:lZ[Q]},Q,!1,void 0,this)),X("button",{type:"button",onClick:()=>FY(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[X("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",yQ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:qX.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:m.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:QQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[X("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),X("p",{className:"text-2xl font-black italic text-white mt-1",children:y0},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v!=="PERSONAJE"&&nX&&!hQ?X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:MQ.map((Q)=>X("button",{type:"button",onClick:()=>{WX(Q);l(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:X("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q.fotoPerfil?X("img",{src:HQ(Q.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${Q.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:RQ},void 0,!1,void 0,this):X("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:X(p,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),X("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[X("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:Q.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:Q.profesion||"Perfil"},void 0,!1,void 0,this),X("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[Q.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},Q.id,!1,void 0,this))},void 0,!1,void 0,this):X(GQ,{children:[v!=="PERSONAJE"&&nX&&X("div",{className:"flex items-center gap-3",children:X("button",{type:"button",onClick:()=>{WX(null);l(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[X(p,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),v==="PERSONAJE"&&X("div",{className:"space-y-4",children:[X("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[X("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),X("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(Q)=>d0(Q.target.value),children:[X("option",{value:"",disabled:!0,children:SZ.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),SZ.map((Q)=>X("option",{value:Q.id,children:[Q.nombre," · ",Q.photos.length," archivos"]},Q.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),DQ.length>0?X("div",{className:"flex flex-wrap gap-2",children:DQ.map((Q)=>X("button",{type:"button",onClick:()=>n0(Q.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[Q.nombre,X(p,{name:"x",size:12},void 0,!1,void 0,this)]},Q.id,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v==="ETIQUETA"&&X("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:QQ.map((Q)=>X("button",{onClick:()=>p0(Q),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:YY(Q,dQ.includes(Q)),children:[Q," · ",(RY[Q]||[]).length]},Q,!0,void 0,this))},void 0,!1,void 0,this),v==="PERSONAJE"&&X("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[X("button",{onClick:()=>_Y("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:YY("INICIAL",NQ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),QQ.map((Q)=>{return X("button",{onClick:()=>_Y(Q),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:YY(Q,NQ===Q),children:[Q," · ",m0[Q]||0]},Q,!0,void 0,this)}),X("button",{onClick:()=>_Y("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:YY("100",NQ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{type:"button",onClick:()=>bZ(0,!0),disabled:!m.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[X(p,{name:"play",size:14},void 0,!1,void 0,this),"Play ",hQ?.nombre||dX]},void 0,!0,void 0,this),X("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[X("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),X("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:WY,onChange:(Q)=>L0(Number(Q.target.value)),children:[3,5,7,10].map((Q)=>X("option",{value:Q,children:[Q," segundos"]},Q,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),m.length===0?X("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[X("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:X(p,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),X("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:v==="ETIQUETA"&&dQ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X(GQ,{children:[X("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:zY.map((Q,Y)=>{const Z=fQ(Q.label),$=CX(Q.profesion);return X("button",{type:"button",onClick:()=>bZ(Y),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${$.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`},onMouseEnter:(J)=>{J.currentTarget.style.transform="translateY(-2px) scale(1.01)";J.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${$.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${$.glowColor} 52%, transparent)`},onMouseLeave:(J)=>{J.currentTarget.style.transform="translateY(0) scale(1)";J.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`},children:X("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[Q.type==="video"?(()=>{const J=rQ(Q.url);if(J)return X("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[X("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),X("div",{children:[X("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),X("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:J.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return X("video",{src:Q.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():X("img",{src:HQ(Q.url,eQ),alt:`${Q.nombre} - ${Q.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:RQ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),X("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Z.bg,borderColor:Z.border,color:Z.text,boxShadow:`0 0 10px ${Z.glow}, 0 0 24px color-mix(in srgb, ${Z.glow} 48%, transparent)`},title:`Etiqueta ${Q.label||"sin etiqueta"}`,children:Q.label||"—"},void 0,!1,void 0,this),X("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:X("div",{className:"flex items-end justify-between gap-3",children:[X("div",{className:"min-w-0 flex-1",children:[X("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:Q.nombre,children:Q.nombre},void 0,!1,void 0,this),Q.autor?X("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:Q.autor,children:["Autor: ",Q.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),X("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:Q.type==="video"?"VIDEO":Q.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Q.id,!1,void 0,this)})},void 0,!1,void 0,this),u0&&X("div",{className:"flex justify-center mt-8",children:X("button",{type:"button",onClick:()=>aY((Q)=>Q+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",zY.length,"/",m.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),k&&X("div",{ref:vX,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:VQ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:vZ,children:[X("button",{type:"button",onClick:vZ,className:"btn-metal btn-metal--danger absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full flex items-center justify-center","aria-label":"Cerrar visor",children:X("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col gap-4 px-3 py-3 sm:px-6 sm:py-6",onClick:(Q)=>Q.stopPropagation(),children:[X("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[X("div",{children:[X("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:k.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[k.profesion,k.nacionalidad?` · ${k.nacionalidad}`:""]},void 0,!0,void 0,this),k.autor?X("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",k.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),X("div",{className:"flex items-center gap-3",children:[m.length>1&&X(GQ,{children:[X("button",{type:"button",onClick:()=>MX((Q)=>!Q),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${nQ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":nQ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>oY((Q)=>!Q),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${EX?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":EX?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:k.type==="video"?"VIDEO":k.isGif?"GIF":"IMG"},void 0,!1,void 0,this),X("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:fQ(k.label).bg,borderColor:fQ(k.label).border,color:fQ(k.label).text,boxShadow:`0 0 20px ${fQ(k.label).glow}`},children:k.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"gallery-viewer-media-wrap relative flex-1 min-h-0 md:rounded-[2rem] overflow-hidden md:border theme-border-secondary bg-black/50",children:[k.type==="video"?(()=>{const Q=rQ(k.url);if(Q)return X("iframe",{ref:VY,src:Q.src,title:`${k.nombre} video`,className:"w-full h-[calc(100dvh-14rem)] bg-black",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return X("video",{ref:VY,src:k.url,controls:!0,playsInline:!0,muted:NY,autoPlay:nQ,onEnded:()=>{if(nQ&&m.length>1)pX()},onError:()=>{if(m.length>1)pX()},className:"w-full h-[calc(100dvh-14rem)] object-contain bg-black"},void 0,!1,void 0,this)})():X("img",{src:HQ(k.url,eQ),alt:`${k.nombre} - ${k.label||"galería"}`,ref:VY,className:"w-full h-[calc(100dvh-14rem)] object-contain bg-black",onError:(Q)=>{RQ(Q);if(m.length>1)pX()}},void 0,!1,void 0,this),m.length>1&&X(GQ,{children:X("button",{type:"button",onClick:(Q)=>{Q.stopPropagation();pX()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[X("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[BQ+1," de ",m.length," archivos visibles"]},void 0,!0,void 0,this),X("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[rY?X(GQ,{children:[X("input",{type:"url",value:QZ,onChange:(Q)=>kX(Q.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),X("select",{value:eY,onChange:(Q)=>KX(Q.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[X("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),QQ.map((Q)=>X("option",{value:Q,children:Q},Q,!1,void 0,this))]},void 0,!0,void 0,this),X("button",{type:"button",onClick:i0,disabled:YZ,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:YZ?"Guardando...":"Guardar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>{KX(k?.label||"");kX(k?.url||"");PQ("");pQ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):X("button",{type:"button",onClick:()=>pQ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[X("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),X("span",{children:k?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),rY&&XZ&&X("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:XZ},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),qY&&X("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:VQ?{left:"18rem"}:void 0,onClick:()=>FY(!1),children:X("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(Q)=>Q.stopPropagation(),children:[X("div",{className:"flex items-center justify-between gap-4 mb-5",children:[X("div",{children:[X("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[yQ.length," enlace",yQ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>FY(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:X("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!xZ.length?X("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:X("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):xZ.map((Q)=>X("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[X("div",{className:"mb-4",children:[X("p",{className:"text-lg font-black italic text-white tracking-tight",children:Q.nombre},void 0,!1,void 0,this),X("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[Q.profesion,Q.nacionalidad?` · ${Q.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-3",children:Q.fotos.map((Y)=>{const Z=!!V0[Y.id],$=!!T0[Y.id],J=BY[Y.id]??Y.url;return X("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[X("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:X("img",{src:eQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{className:"space-y-2 min-w-0",children:[X("div",{className:"flex flex-wrap items-center gap-2",children:[X("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",Y.label||"Sin etiqueta"]},void 0,!0,void 0,this),X("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:Y.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("input",{type:"url",value:J,onChange:(H)=>l0(Y.id,H.target.value),placeholder:"https://...",readOnly:!$,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!$?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[X("button",{type:"button",onClick:()=>o0(Y),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>IZ(Y.id,!0),disabled:Z,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>t0(Y),disabled:Z,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),X("button",{type:"button",onClick:()=>a0(Y),disabled:Z,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Y.id,!0,void 0,this)})},void 0,!1,void 0,this)]},Q.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&!a&&!M&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex flex-col gap-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{onClick:q1,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),X("button",{onClick:()=>$0((Q)=>!Q),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Z0&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[X("select",{value:fY,onChange:(Q)=>J0(Q.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:hY.map((Q)=>X("option",{value:Q,children:Q},Q,!1,void 0,this))},void 0,!1,void 0,this),X("button",{onClick:()=>F1(fY,N,h),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!N,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{children:[X("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),X("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!N?"Paso 1: elegí un modo de enfrentamiento":tX&&!h?`Paso 2: elegí una opción de ${XX(N)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${XX(N)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!N&&X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:yY.map((Q)=>X("button",{onClick:()=>{WQ(Q.id);CQ(Q.id==="GENERAL"?"all":"");w(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),X("h3",{className:"font-black italic text-white mt-2",children:Q.label},void 0,!1,void 0,this),X("p",{className:"text-xs text-slate-300 mt-2",children:Q.description},void 0,!1,void 0,this)]},Q.id,!0,void 0,this))},void 0,!1,void 0,this),N&&X("div",{className:"space-y-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",XX(N)]},void 0,!0,void 0,this),X("button",{onClick:()=>{WQ(null);CQ("");w(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),tX&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",XX(N)]},void 0,!0,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:B1.map((Q)=>X("button",{onClick:()=>{CQ(Q.key);w(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${h===Q.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[Q.label," ",X("span",{className:"text-slate-400",children:["(",Q.ids.length,")"]},void 0,!0,void 0,this)]},Q.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),tX&&!h&&X("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[hY.map((Q)=>{const Y=YX(Q,N,h),Z=Boolean($Q?.[Y]?.isFinished);return X("button",{disabled:tX&&!h,onClick:()=>{w(Q);if(!$Q[Y])sZ(Q,N,h)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Z?"battle-mode-card--completed":""}`,children:[X("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Z?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),X("h3",{className:"font-black italic text-white mt-2",children:Q},void 0,!1,void 0,this),Z&&X("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},Q,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&M&&(()=>{const Q=YX(M,N,h),Y=$Q[Q],Z=q.find((L)=>L.firebaseId===Y?.championId),$=q.find((L)=>L.firebaseId===Y?.challengerId),J=Z?uZ(M,Z.firebaseId):null,H=$?uZ(M,$.firebaseId):null;return X("div",{className:"space-y-8 animate-in fade-in duration-500",children:[X("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[X("div",{className:"flex flex-wrap items-center gap-3",children:[X("button",{onClick:()=>w(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[X("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),X("button",{onClick:()=>{w(null);WQ(null);CQ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[X("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),X("button",{onClick:()=>_0((L)=>!L),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H0&&X("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const L=Object.keys(Y?.matchups||{}).filter((_)=>!!Y?.matchups?.[_]);if(!Y||!L.length)return X("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return X("div",{className:"space-y-2",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),L.map((_)=>{const[O,j]=_.split("__"),F=q.find((R)=>R.firebaseId===O),T=q.find((R)=>R.firebaseId===j),D=F?.nombre||O,G=T?.nombre||j;return X("button",{onClick:()=>nZ(M,O,j,N,h),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:X("span",{className:"text-xs text-white font-semibold",children:[D," vs ",G]},void 0,!0,void 0,this)},_,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),X("div",{className:"min-w-0",children:[X("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:M},void 0,!1,void 0,this),X("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",XX(N)]},void 0,!0,void 0,this),Y?.activeGroupLabel&&X("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:Y.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!Y&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[X("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),X("button",{onClick:()=>sZ(M,N,h),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&Y.isFinished&&X("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[X("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),X("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&Z&&$&&!Y.isFinished&&X("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[X("button",{onClick:()=>dZ(M,Z.firebaseId,N,h),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":CX(Z.profesion).baseColor},children:[X("img",{src:Q0(Z,M),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:RQ},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),X("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),M==="Estatura"&&X("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",gZ(Z)]},void 0,!0,void 0,this),X("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",J?.wins||0," · Batallas: ",J?.battles||0]},void 0,!0,void 0,this),X("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",J?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex flex-col items-center justify-center text-center",children:[X("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),M==="Estatura"&&X("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{onClick:()=>dZ(M,$.firebaseId,N,h),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":CX($.profesion).baseColor},children:[X("img",{src:Q0($,M),alt:$.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:RQ},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),X("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:$.nombre},void 0,!1,void 0,this),M==="Estatura"&&X("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",gZ($)]},void 0,!0,void 0,this),X("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),X("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),U==="RANKING"&&!a&&X("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[X("div",{className:"ranking-table-scroll",children:X("table",{className:`w-full ${SY?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[X("thead",{className:"theme-surface-soft",children:X("tr",{children:[X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:X("button",{type:"button",onClick:()=>tQ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",YQ==="nombre"?xQ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>tQ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",YQ==="Rostro"?xQ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>tQ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",YQ==="Cuerpo"?xQ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>tQ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",YQ==="Actitud"?xQ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),SY&&X(GQ,{children:[X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>tQ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",YQ==="nacionalidad"?xQ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:X("button",{type:"button",onClick:()=>tQ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",YQ==="edad"?xQ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("th",{className:"px-8 py-6 text-right",children:X("div",{className:"flex flex-col items-end gap-1",children:[X("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),X("select",{value:YQ,onChange:(Q)=>{iY(Q.target.value);JY("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[X("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),X("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[X("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),X("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),X("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:QX.map((Q)=>X("option",{value:Q,children:Q},Q,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("tbody",{children:C1.map((Q,Y)=>X("tr",{onClick:()=>yX(Q),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${Y===0?"podium-1":Y===1?"podium-2":Y===2?"podium-3":"hover:bg-white/5"}`,children:[X("td",{className:"px-8 py-5",children:X("span",{className:`font-black italic rock-carved-text ${Y===0?"text-gold text-4xl":Y===1?"text-silver text-3xl":Y===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",Y+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-8 py-5",children:X("div",{className:"flex items-center gap-4",children:[X("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:XQ(Q.profesion).color,boxShadow:`0 0 10px ${XQ(Q.profesion).sombra}`},children:X("img",{src:HQ(Q.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:RQ},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("div",{children:[X("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:Q.nombre},void 0,!1,void 0,this),X("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:Q.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();OX({isOpen:!0,profile:Q,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${Q.nombre}`,children:uX(Q).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();OX({isOpen:!0,profile:Q,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${Q.nombre}`,children:fX(Q).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("td",{className:"px-4 py-5 text-center",children:X("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();OX({isOpen:!0,profile:Q,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${Q.nombre}`,children:cX(Q).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),SY&&X(GQ,{children:[X("td",{className:"px-4 py-5 text-center",children:[X("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:Q.nacionalidad},void 0,!1,void 0,this),X("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:Q.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[IQ(Q.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("td",{className:"px-8 py-5 text-right",children:X("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${Y===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":Y===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":Y===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:X("span",{className:`font-black leading-none ${Y===0?"text-gold":Y===1?"text-silver":Y===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:V1(Q)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},Q.firebaseId||Q.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),UQ.isOpen&&UQ.profile&&UQ.category&&(()=>{const Q=T1(UQ.profile.firebaseId,UQ.category),Y=gQ[UQ.category]||[];return X("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${VQ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{OX({isOpen:!1,profile:null,category:null});ZX(null)},children:X("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Z)=>Z.stopPropagation(),children:[X("div",{className:"flex items-start justify-between gap-4 mb-6",children:[X("div",{children:[X("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[UQ.profile.nombre," · ",UQ.category]},void 0,!0,void 0,this),X("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>{OX({isOpen:!1,profile:null,category:null});ZX(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"mb-4",children:[X("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:Y.map((Z)=>X("button",{type:"button",onClick:()=>{const $=iZ(UQ.profile.firebaseId,Z);ZX($)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black",children:Z},`breakdown-item-${Z}`,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[X("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),Q.wins.length?X("ul",{className:"space-y-2",children:Q.wins.map((Z,$)=>X("li",{className:"text-sm text-emerald-200 font-semibold",children:Z},`win-${Z}-${$}`,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),Q.losses.length?X("ul",{className:"space-y-2",children:Q.losses.map((Z,$)=>X("li",{className:"text-sm text-rose-200 font-semibold",children:Z},`loss-${Z}-${$}`,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),ZY?.arenaName&&X("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[X("div",{className:"flex items-center justify-between gap-3 mb-4",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",ZY.arenaName]},void 0,!0,void 0,this),X("button",{type:"button",onClick:()=>ZX(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Z)=>{const $=Z==="wins",J=ZY[Z]||[];return X("div",{className:`rounded-xl border p-3 min-h-36 ${$?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[X("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${$?"text-emerald-300":"text-rose-300"}`,children:$?"Ganadas":"Perdidas"},void 0,!1,void 0,this),J.length?X("ul",{className:"space-y-2",children:J.map((H,L)=>X("li",{className:"flex items-center justify-between gap-2",children:[X("span",{className:`text-sm font-semibold ${$?"text-emerald-100":"text-rose-100"}`,children:H.opponentName},void 0,!1,void 0,this),X("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await nZ(H.arenaName,H.profileId,H.opponentId);const O=iZ(UQ.profile.firebaseId,H.arenaName);ZX(O)}catch(O){console.error("No se pudo eliminar la batalla del desglose:",O);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Z}-${H.pairKey}-${L}`,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:`text-xs ${$?"text-emerald-200/70":"text-rose-200/70"}`,children:$?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Z}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),HY.isOpen&&HY.profile&&(()=>{const Q=HY.profile,Y=DY(Q),Z=Object.entries(gQ);return X("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>zX({isOpen:!1,profile:null}),children:X("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:($)=>$.stopPropagation(),children:[X("div",{className:"flex items-start justify-between gap-4",children:[X("div",{children:[X("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[Q.nombre," · Puntaje"]},void 0,!0,void 0,this),X("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"button",onClick:($)=>{$.stopPropagation();zX({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:QX.map(($)=>X("button",{type:"button",onClick:(J)=>J.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[$,": ",Number(Y[$]||0).toFixed(0)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-2",children:Z.map(([$,J])=>X("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[$,": ",KZ(Q,$).toFixed(0)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("section",{className:"space-y-3",children:[X("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),X("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",TQ(Q)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),U==="CATEGORIAS"&&!a&&X("div",{className:"space-y-10 animate-in fade-in duration-500",children:[X("div",{className:"flex justify-between items-end",children:[X("div",{children:X("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:()=>{CY();DX(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.length===0?X("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:X("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):X("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:c.map((Q)=>X("div",{onClick:()=>_X(Q.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[X("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[X("button",{onClick:(Y)=>{Y.stopPropagation();JQ({...Q,reglas:{...Q.reglas,nacionalidades:Q.reglas?.nacionalidades||[],profesiones:Q.reglas?.profesiones||[],ciudades:Q.reglas?.ciudades||[]}});DX(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:X(p,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{onClick:(Y)=>{Y.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))X1(Q.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:X(p,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute inset-0",children:[X("img",{src:HQ(Q.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:RQ},void 0,!1,void 0,this),X("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[X("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:Q.label},void 0,!1,void 0,this),X("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:X("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[q.filter((Y)=>sX(Y).includes(Q.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Q.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),cY&&X("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:X("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[X("button",{onClick:()=>SQ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:X(p,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("form",{onSubmit:e0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[X("div",{className:"grid grid-cols-1 gap-16",children:X("div",{className:"space-y-8",children:[X("div",{className:"flex flex-col items-center gap-6",children:[X("div",{className:"flex items-center gap-4 self-start",children:[X("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:X(p,{name:t?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:t?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),t&&X("button",{type:"button",onClick:()=>{v1({...x,firebaseId:t})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[X(p,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:x.fotos.length>0&&x.fotos[0]!==""?X("img",{src:HQ(x.fotos[0],eQ),className:"w-full h-full object-cover",alt:"Preview",onError:RQ},void 0,!1,void 0,this):X("div",{className:"text-center p-4",children:[X(p,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),X("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-4",children:[X("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[X("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),mX.completed.length>0?X("ul",{className:"mt-3 space-y-1",children:mX.completed.map((Q)=>X("li",{className:"text-xs text-emerald-100/90",children:[X("span",{className:"font-black",children:[Q.label,":"]},void 0,!0,void 0,this)," ",Q.preview]},Q.key,!0,void 0,this))},void 0,!1,void 0,this):X("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[X("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),mX.missing.length>0?X("ul",{className:"mt-3 space-y-1",children:mX.missing.map((Q)=>X("li",{className:"text-xs text-amber-100/90",children:X("span",{className:"font-black",children:Q.label},void 0,!1,void 0,this)},Q.key,!1,void 0,this))},void 0,!1,void 0,this):X("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 gap-4",children:[X("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:x.nombre,onChange:(Q)=>s({...x,nombre:Q.target.value})},void 0,!1,void 0,this),X("div",{className:"col-span-2 space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),X("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:x.fotos[0]||"",onChange:(Q)=>s((Y)=>MZ(Y,Q.target.value))},void 0,!1,void 0,this),X("input",{type:"file",accept:"image/*,.gif",onChange:b0,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),X("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.fechaNacimiento,onChange:(Q)=>s({...x,fechaNacimiento:Q.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),X("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.estaturaCm,onChange:(Q)=>s({...x,estaturaCm:Q.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.nacionalidad,onChange:(Q)=>s({...x,nacionalidad:Q.target.value})},void 0,!1,void 0,this),X("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.ciudad,onChange:(Q)=>s({...x,ciudad:Q.target.value})},void 0,!1,void 0,this),X("div",{className:"col-span-2 space-y-1 group",children:[X("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),X("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:x.profesion,onChange:(Q)=>s({...x,profesion:Q.target.value}),children:[X("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),X("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),X("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),X("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),X("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),X("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),X("option",{value:"Periodista",className:"theme-surface-card",children:"\uD83D\uDC53 Periodista"},void 0,!1,void 0,this),X("option",{value:"Bailarina",className:"theme-surface-card",children:"\uD83D\uDC83 Bailarina"},void 0,!1,void 0,this),X("option",{value:"Atleta",className:"theme-surface-card",children:"\uD83C\uDFCB️‍♀️ Atleta"},void 0,!1,void 0,this),X("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:X(p,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),X("div",{className:"flex gap-4",children:[t&&X("button",{type:"button",onClick:Y1,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:X(p,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs",children:t?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),W0&&X("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:KY,children:X("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(Q)=>Q.stopPropagation(),children:[X("div",{className:"space-y-3",children:[X("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),X("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),X("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",X("span",{className:"font-black text-white",children:qQ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),nY&&X("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:nY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"flex justify-end gap-3",children:[X("button",{type:"button",onClick:KY,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),X("button",{type:"button",onClick:$1,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),sY&&X("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:X("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[X("button",{type:"button",onClick:()=>{CY();DX(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:X(p,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("form",{onSubmit:Q1,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[X("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[X("div",{className:"space-y-8",children:[X("div",{className:"flex items-center gap-4",children:[X("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:X(p,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),X("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-4",children:[X("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:K.label,onChange:(Q)=>JQ({...K,label:Q.target.value})},void 0,!1,void 0,this),X("div",{className:"w-full",children:X("div",{className:"space-y-1 w-full",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),X("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:K.coverImg,onChange:(Q)=>JQ({...K,coverImg:Q.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-6",children:[X("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[X(p,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),X("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[X("div",{className:"grid grid-cols-2 gap-4",children:[X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.nacionalidades.map((Q)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[Q," ",X("button",{type:"button",onClick:()=>JQ({...K,reglas:{...K.reglas,nacionalidades:K.reglas.nacionalidades.filter((Y)=>Y!==Q)}}),children:"×"},void 0,!1,void 0,this)]},Q,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(Q)=>{if(Q.target.value&&!K.reglas.nacionalidades.includes(Q.target.value))JQ({...K,reglas:{...K.reglas,nacionalidades:[...K.reglas.nacionalidades,Q.target.value]}})},children:[X("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),g0.filter((Q)=>Q!=="Todas").map((Q)=>X("option",{value:Q,children:Q},Q,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.ciudades.map((Q)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[Q," ",X("button",{type:"button",onClick:()=>JQ({...K,reglas:{...K.reglas,ciudades:K.reglas.ciudades.filter((Y)=>Y!==Q)}}),children:"×"},void 0,!1,void 0,this)]},Q,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(Q)=>{if(Q.target.value&&!K.reglas.ciudades.includes(Q.target.value))JQ({...K,reglas:{...K.reglas,ciudades:[...K.reglas.ciudades,Q.target.value]}})},children:[X("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),h0.filter((Q)=>Q!=="Todas").map((Q)=>X("option",{value:Q,children:Q},Q,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),X("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.profesiones.map((Q)=>X("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[Q," ",X("button",{type:"button",onClick:()=>JQ({...K,reglas:{...K.reglas,profesiones:K.reglas.profesiones.filter((Y)=>Y!==Q)}}),children:"×"},void 0,!1,void 0,this)]},Q,!0,void 0,this))},void 0,!1,void 0,this),X("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(Q)=>{if(Q.target.value&&!K.reglas.profesiones.includes(Q.target.value))JQ({...K,reglas:{...K.reglas,profesiones:[...K.reglas.profesiones,Q.target.value]}})},children:[X("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(mY).map((Q)=>X("option",{value:Q,children:Q},Q,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"grid grid-cols-2 gap-2",children:[X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),X("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMin,onChange:(Q)=>JQ({...K,reglas:{...K.reglas,edadMin:Q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),X("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMax,onChange:(Q)=>JQ({...K,reglas:{...K.reglas,edadMax:Q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[X("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),X("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[X("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.caracteristica,onChange:(Q)=>JQ({...K,reglas:{...K.reglas,caracteristica:Q.target.value}}),children:QX.map((Q)=>X("option",{children:Q},Q,!1,void 0,this))},void 0,!1,void 0,this),X("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.operador,onChange:(Q)=>JQ({...K,reglas:{...K.reglas,operador:Q.target.value}}),children:[X("option",{children:"Superior a"},void 0,!1,void 0,this),X("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:K.reglas.umbral,onChange:(Q)=>JQ({...K,reglas:{...K.reglas,umbral:Q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},u1=ReactDOM.createRoot(document.getElementById("root"));u1.render(X(m1,{},void 0,!1,void 0,this));