import{jsxDEV as Q,Fragment as SJ}from"react/jsx-dev-runtime";const s0={apiKey:"AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",authDomain:"eliteg3-1650f.firebaseapp.com",databaseURL:"https://eliteg3-1650f-default-rtdb.firebaseio.com/",projectId:"eliteg3-1650f",storageBucket:"eliteg3-1650f.firebasestorage.app",messagingSenderId:"351711372153",appId:"1:351711372153:web:60ce4742396e37974f85a8",measurementId:"G-HGYPLEY6DJ"};if(!firebase.apps.length)firebase.initializeApp(s0);const M=firebase.database(),{useState:C,useEffect:r,useMemo:c,useRef:zJ}=React,HJ=["C","P","B","N","S","E","X","R"],d0=["R"],$Q="anonimo/galeria",NJ="__anonimo_gallery__",n0=["PERSONAJE","ETIQUETA","GENERAL"],FZ={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},lJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],p0={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},lX=()=>lJ.reduce((q,O)=>{q[O.id]="";return q},{}),FJ=(q={})=>{const O=lX(),V=q&&typeof q==="object"?q:{};return Object.keys(O).reduce((R,F)=>{R[F]=typeof V[F]==="string"?V[F].trim():"";return R},{...O})},_X=(q="")=>lJ.find((O)=>O.id===q),i0=(q="")=>p0[(q||"").trim().toLowerCase()]||"",WX={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},R:{bg:"linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))",border:"rgba(226,232,240,0.95)",glow:"rgba(148,163,184,0.82)",text:"#f8fafc"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},HQ=(q,O)=>{if(!O)return 0;return(q+O)%O},UZ=(q,O,V=!1)=>{const R=Array.isArray(O)?O.length:0;if(!R)return null;if(R===1)return 0;if(V){const F=O.map((S,n)=>({item:S,idx:n})).filter(({item:S,idx:n})=>n!==q&&S&&S.url).map(({idx:S})=>S);if(!F.length)return HQ((q??0)+1,R);return F[Math.floor(Math.random()*F.length)]}return HQ((q??0)+1,R)},oJ=(q)=>WX[q]||WX.DEFAULT,OX=(q,O=!1)=>{const V=q==="INICIAL"?WX.DEFAULT:q==="100"?WX.B:oJ(q);return{"--btn-neon-color":V.glow,borderColor:V.border,color:V.text,boxShadow:O?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${V.border}, 0 0 20px ${V.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${V.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${V.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${V.glow} 70%, transparent)`,filter:O?"brightness(1.14)":"brightness(1)"}},VZ=5368709120,DZ=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,l0=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,o0=/\.gif(\?.*)?$/i,t0=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,a0=/vimeo\.com\/(?:video\/)?(\d+)/i,jQ=(q)=>{const O=(q||"").trim();if(!O)return null;const V=O.match(t0);if(V)return{provider:"youtube",src:`https://www.youtube.com/embed/${V[1]}`,title:"Video de YouTube"};const R=O.match(a0);if(R)return{provider:"vimeo",src:`https://player.vimeo.com/video/${R[1]}`,title:"Video de Vimeo"};return null},r0=["eporner.com"],CZ=(q="")=>{const O=String(q||"").trim();if(!O||O.startsWith("data:")||O.startsWith("blob:"))return!1;try{const R=new URL(O).hostname.toLowerCase();return r0.some((F)=>R===F||R.endsWith(`.${F}`))}catch{return!1}},qJ=(q="",O="")=>{const V=String(q||"").trim();if(!V||CZ(V))return O;return V},gJ=(q="",O="")=>{if(O==="video"||O==="image")return O;const V=(q||"").trim();if(DZ.test(V)||jQ(V))return"video";return"image"},LX=(q="")=>{return typeof q==="string"?q.trim():""},RZ=(q=0)=>{const O=Number.isFinite(q)&&q>0?q:0;if(!O)return"0 B";const V=["B","KB","MB","GB","TB"],R=Math.min(Math.floor(Math.log(O)/Math.log(1024)),V.length-1),F=O/Math.pow(1024,R);return`${F.toFixed(F>=10||R===0?0:2)} ${V[R]}`},e0=(q="")=>{const O=String(q||"").trim(),V=";base64,",R=O.indexOf(V);if(!O.startsWith("data:")||R===-1)return 0;const F=O.slice(R+V.length),S=(F.match(/=+$/)||[""])[0].length;return Math.max(0,Math.floor(F.length*3/4)-S)},J1=(q={})=>{if(Number.isFinite(q?.sizeBytes)&&q.sizeBytes>0)return Number(q.sizeBytes);return e0(q?.url||"")},oX=(q=[])=>{if(!Array.isArray(q))return 0;return q.reduce((O,V)=>O+["fotos","gifs","videos"].reduce((R,F)=>{const S=V?.galeria?.[F];if(!Array.isArray(S))return R;return R+S.reduce((n,JJ)=>n+J1(JJ),0)},0),0)},e=(q,O="")=>{if(typeof q==="string")return{url:qJ(q.trim(),""),label:"",type:gJ(q,O),autor:""};if(q&&typeof q==="object"){const V=qJ((q.url||"").trim(),"");return{url:V,label:HJ.includes(q.label)?q.label:"",type:gJ(V,q.type||O),autor:LX(q.autor)}}return{url:"",label:"",type:gJ("",O),autor:""}},Q1=(q)=>e(q).url,AZ=(q)=>e(q).label,tJ=(q)=>e(q).type,tX=(q,O,V="image")=>Array.isArray(q?.[O])?q[O].map((R)=>e(R,V)).filter((R)=>R.url):[],X1=(q={})=>({firebaseId:NJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:tX(q,"fotos","image"),gifs:tX(q,"gifs","image"),videos:tX(q,"videos","video")},batallaFotosPreferidas:lX(),puntuaciones:kQ(),isAnonymousGallery:!0}),Y1=(q={})=>{if(q?.isAnonymousGallery||q?.firebaseId===NJ)return"anonimo";return q?.firebaseId||""},Z1=(q={})=>{const O=qJ(String(q?.fotos?.[0]||"").trim(),""),V=FJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{});if(!O)return!1;return lJ.filter((R)=>R.id!=="perfil").every((R)=>Boolean(String(V?.[R.id]||"").trim()))},$1=(q={})=>{const O=[],V=qJ(String(q?.fotos?.[0]||"").trim(),""),R=FJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{});if(!V)O.push("Perfil");lJ.filter((F)=>F.id!=="perfil").forEach((F)=>{if(!String(R?.[F.id]||"").trim())O.push(F.label)});return O},H1=(q=null)=>{if(!q)return;const O=window.open("","_blank");if(!O)return;const V=q?.firebaseId||q?.id||"",R=Array.isArray(q?.galeria?.fotos)?q.galeria.fotos.map((z)=>e(z,"image")).filter((z)=>z.url).map((z,v)=>({...z,sourceTag:"fotos",sourceIndex:v})):[],F=R.filter((z)=>z.type==="image"&&z.sourceTag==="fotos"),S=FJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{}),n=qJ(String(q?.fotos?.[0]||q?.foto||"").trim(),""),JJ=R.filter((z)=>z.type==="image"&&z.url).reduce((z,v)=>{z[v.url]=v;return z},{}),l=R.length?R.map((z,v)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${z.url}"
                        data-label="${z.label||""}"
                        data-index="${z.sourceIndex}"
                        data-tag="${z.sourceTag}"
                        data-media-type="${z.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${z.url}" alt="Multimedia ${v+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${z.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',g=F.length?F.map((z,v)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${z.url}"
                        data-label="${z.label||""}"
                        data-index="${z.sourceIndex}"
                        data-tag="${z.sourceTag}"
                        data-media-type="${z.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${z.url}" alt="Imagen rota ${v+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${z.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',x=lJ.map((z)=>{const v=z.id==="perfil",o=v?n:S[z.id]||"",G=o?v?{url:o}:JJ[o]||{url:o,label:"",sourceIndex:-1}:null,B=Boolean(o);return`
                    <div class="multimedia-slot-card ${B?"is-assigned":"is-missing"}" data-slot-id="${z.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${z.label}</span>
                            <span class="multimedia-slot-state">${B?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${B?`<img src="${G.url}" alt="${z.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!v?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${z.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${z.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");O.document.write(`
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
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${l}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${x}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${g}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(V)};
                            const validLabels = ${JSON.stringify(HJ)};
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
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${V}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
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
                            const slotConfigById = ${JSON.stringify(lJ.reduce((z,v)=>{z[v.id]=v;return z},{}))};
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
            `);O.document.close()},j1=({isOpen:q=!1,profile:O=null,onClose:V=()=>{}})=>{const[R,F]=C(!0),[S,n]=C(!0);r(()=>{if(!q)return;F(!0);n(!0)},[q,O?.firebaseId]);if(!q||!O)return null;const JJ=Array.isArray(O?.galeria?.fotos)?O.galeria.fotos.map((g)=>e(g,"image")).filter((g)=>g.url):[],l=Object.entries(O?.puntuaciones||{}).map(([g,x])=>({label:g,value:Number(x)||0})).sort((g,x)=>x.value-g.value).slice(0,5);return Q("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:V,role:"presentation",children:Q("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(g)=>g.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[Q("button",{type:"button",onClick:V,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),Q("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),Q("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:O?.nombre||"Personaje"},void 0,!1,void 0,this),Q("div",{className:"mt-6 space-y-4",children:[Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>F((g)=>!g),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"Galería"},void 0,!1,void 0,this),Q("span",{children:R?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),R&&Q("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:JJ.length?JJ.map((g,x)=>Q("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:Q("img",{src:g.url,alt:`Multimedia ${x+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${g.url}-${x}`,!1,void 0,this)):Q("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>n((g)=>!g),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"5 Principales"},void 0,!1,void 0,this),Q("span",{children:S?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S&&Q("div",{className:"px-4 pb-4 space-y-2",children:l.length?l.map((g)=>Q("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[Q("span",{className:"text-sm text-slate-200 uppercase",children:g.label},void 0,!1,void 0,this),Q("strong",{className:"text-cyan-200",children:g.value},void 0,!1,void 0,this)]},g.label,!0,void 0,this)):Q("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},BZ=async(q="",{timeoutMs:O=12000,retries:V=1}={})=>{const R=String(q||"").trim();if(!R)return!0;const F=()=>new Promise((S)=>{const n=new Image;let JJ=!1;const l=(x)=>{if(JJ)return;JJ=!0;n.onload=null;n.onerror=null;S(Boolean(x))},g=window.setTimeout(()=>l(!0),O);n.onload=()=>{clearTimeout(g);const x=Number(n.naturalWidth)>0&&Number(n.naturalHeight)>0;l(!x)};n.onerror=()=>{clearTimeout(g);l(!0)};n.src=R});for(let S=0;S<=V;S+=1)if(!await F())return!1;return!0},TZ=(q,O)=>{const V=(O||"").trim().toLowerCase(),R=Array.isArray(q?.galeria?.fotos)?q.galeria.fotos.map((o)=>e(o,"image")).filter((o)=>o.type==="image"&&o.url):[],S=qJ(q?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(V))return S;const JJ=(o=[])=>{const G=R.filter((b)=>o.includes(AZ(b)));if(!G.length)return"";const B=Math.floor(Math.random()*G.length);return G[B]?.url||""},l=i0(V),g=_X(l);if(!g)return S;const z=FJ(q?.batallaFotosPreferidas)[l];if(z){if(R.some((G)=>G.url===z))return z}return JJ(g.labels)||S},q1=(q="")=>o0.test((q||"").trim()),qQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",aX=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${qQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,kJ=(q)=>{const O=q?.currentTarget||q?.target;if(!O||O.dataset.fallbackApplied==="true")return;O.dataset.fallbackApplied="true";O.src=qQ;O.style.objectFit="contain";O.style.padding="12px";O.style.background="#020617";O.alt="Imagen no disponible"},A1="g2_elite_database_v4",B1="g2_elite_categories_v4",aJ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],rX=[...aJ],eX=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],_1=eX.map((q)=>q.id),_Q=(q="")=>{return eX.find((V)=>V.id===q)?.label||"General"},W1=(q="")=>{const O=String(q||"").trim();if(!O)return"";return encodeURIComponent(O.toLowerCase())},O1=(q="")=>{const O=String(q||"").trim();if(!O)return"";try{return decodeURIComponent(O).toLowerCase()}catch{return O.toLowerCase()}},WQ=(q,O="GENERAL",V="")=>{const R=String(q||"").trim(),F=String(O||"GENERAL").trim().toUpperCase(),S=W1(V);if(!R)return"";return`${F}::${S||"all"}::${R}`},VJ=(q="")=>String(q||"").trim(),zZ=(q="")=>{const O=String(q||"").split("::");if(O.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const V=O.slice(2).join("::");return{scopeId:String(O[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:O1(O[1]||"all")||"all",arenaName:String(V||"").trim()}},kQ=()=>aJ.reduce((q,O)=>{q[O]=0;return q},{}),NZ=[],JY={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},"Bailarina y Atleta":{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},T1=(q="")=>{const O=String(q||"").toLowerCase();if(O.includes("cantante"))return"crown";if(O.includes("nsfw"))return"torch";if(O.includes("actriz")||O.includes("actor"))return"theater";if(O.includes("modelo"))return"floron";if(O.includes("influencer"))return"sigil";if(O.includes("periodista"))return"quill";if(O.includes("bailarina"))return"floron";if(O.includes("atleta"))return"shield";return"shield"},L1=(q="")=>{const O=String(q||"").toLowerCase();if(O.includes("cantante"))return"\uD83C\uDFA4";if(O.includes("nsfw"))return"\uD83D\uDD25";if(O.includes("actriz")||O.includes("actor"))return"\uD83C\uDFAC";if(O.includes("modelo"))return"\uD83D\uDC60";if(O.includes("influencer"))return"\uD83D\uDCF1";if(O.includes("periodista"))return"\uD83D\uDC53";if(O.includes("bailarina"))return"\uD83D\uDC83";if(O.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},SQ=(q="")=>{const O=String(q||"").trim(),V=JY[O]||JY.Otro,R=String(V?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),F=String(V?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:R,glowColor:F}},z1=({variant:q="sigil",size:O=18,className:V="",tint:R="currentColor"})=>{const F={width:O,height:O,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:V};if(q==="crown")return Q("svg",{...F,stroke:R,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),Q("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="shield")return Q("svg",{...F,stroke:R,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),Q("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="floron")return Q("svg",{...F,stroke:R,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 4v16"},void 0,!1,void 0,this),Q("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),Q("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),Q("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="quill")return Q("svg",{...F,stroke:R,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),Q("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="torch")return Q("svg",{...F,stroke:R,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),Q("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),Q("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="theater")return Q("svg",{...F,stroke:R,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),Q("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return Q("svg",{...F,stroke:R,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),Q("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},a=({name:q,size:O=20,className:V=""})=>{return Q("i",{"data-lucide":q.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:O,height:O},className:`inline-block ${V}`},void 0,!1,void 0,this)},QY=({targetWindow:q,profileName:O,profession:V,photos:R,editingId:F,battlePhotoPrefs:S={},profilePhotoUrl:n="",totalGalleryBytes:JJ=0})=>{if(!q||q.closed)return;const l=FJ(S),g=qJ(String(n||"").trim(),""),x=HJ[0]||"",z=String(O||"").replace(/[<>&"']/g,(B)=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"})[B]||B),v=String(V||""),o=(B="")=>String(B).replace(/[&"'<>`]/g,(b)=>({"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","`":"&#96;"})[b]||b),G=(R||[]).map((B,b)=>{const QJ=e(B);return{...QJ,sourceTag:B?.sourceTag||(QJ.type==="video"?"videos":"fotos"),sourceIndex:typeof B?.sourceIndex==="number"?B.sourceIndex:b}}).filter((B)=>B.url);q.document.open();q.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${z}</title>
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
                <h1>Galería de ${z}</h1>
                <button class="btn-critical-plate" onclick="document.getElementById('miModal').style.display='block'">
                    AGREGAR ARCHIVO
                </button>

                <div id="miModal" class="modal-url">
                    <h2 style="margin:0; font-size: 14px; color: #94a3b8;">PEGAR URL DEL ARCHIVO</h2>
                    <input type="text" id="nuevaFotoUrl" placeholder="https://ejemplo.com/foto.jpg o https://youtube.com/...">
                    <label for="nuevoArchivoLocal" style="display:block; margin-top: 14px; font-size: 10px; font-weight: 900; letter-spacing: 0.14em; color: #94a3b8; text-transform: uppercase;">o subir desde escritorio</label>
                    <input type="file" id="nuevoArchivoLocal" accept="image/*,video/*,.gif" multiple style="width: 100%; margin-top: 8px; padding: 10px; background: #020617; border: 1px dashed rgba(34,211,238,0.65); color: #e2e8f0; border-radius: 8px; outline: none; font-size: 12px; box-shadow: 0 0 10px rgba(34,211,238,0.18);">
                    <p id="galleryStorageInfo" style="margin:8px 0 0; font-size:11px; color:#94a3b8;">Uso total en galerías: ${RZ(JJ)} de ${RZ(VZ)}</p>
                    <select id="nuevoArchivoTipo" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        <option value="image">Imagen</option>
                        <option value="video">Video</option>
                    </select>
                    <select id="nuevaFotoEtiqueta" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        ${HJ.map((B)=>`<option value="${B}">Etiqueta ${B}</option>`).join("")}
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
                    ${lJ.map((B)=>{const b=B.id==="perfil",QJ=b?g:l[B.id]||"",h=Boolean(QJ),$J=!b;return`
                            <div class="gallery-slot-card" data-slot-id="${B.id}" style="border:1px solid ${h?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${h?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${h?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${h?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${B.label}</div>
                                <div style="font-size:11px; color:${h?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${h?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${h?`<img src="${QJ}" alt="Vista previa ${B.label}" onerror="${aX}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${B.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${$J?`<button
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
                    ${G.length?G.map((B,b)=>{const QJ=Q1(B),h=AZ(B),$J=oJ(h),WJ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},OJ=WJ[v?.toUpperCase()]||WJ.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${b}"
                            data-source-index="${B.sourceIndex}"
                            data-media-type="${tJ(B)}"
                            data-url="${o(QJ)}"
                            data-compatible-slots="${h}"
                            draggable="${tJ(B)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${OJ.color};
                                box-shadow: 0 0 15px ${OJ.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${tJ(B)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${OJ.color}, inset 0 0 15px ${OJ.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${OJ.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${B.sourceIndex}, mediaType: '${tJ(B)}', id: '${F}'}, '*');"
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
                        ${tJ(B)==="video"?(()=>{const xQ=jQ(QJ);if(xQ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${xQ.provider.toUpperCase()}</div></div>`;return`<video src="${QJ}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${QJ}" alt="Imagen de la galería" onerror="${aX}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${tJ(B)==="video"?"VIDEO":"IMG"}</div>
                        ${h?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${$J.bg}; border: 1px solid ${$J.border}; color: ${$J.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${$J.glow}, 0 0 24px ${$J.glow}; text-shadow: 0 0 10px ${$J.glow}; backdrop-filter: blur(8px);">${h}</div>`:""}
                        ${B.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${h?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${B.autor}</div>`:""}
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
                        ${G.map((B,b)=>{const QJ=tJ(B),h=jQ(B.url);return`
                            <div class="viewer-slide" id="viewer-slide-${b}">
                                ${QJ==="video"?h?`<iframe src="${h.src}" title="${h.title} ${b+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${B.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${B.url}" alt="Vista completa ${b+1}" onerror="${aX}" />`}
                            </div>`}).join("")}
                    </div>
                </div>

                <script>
                    const jsonFallbackLabel = ${JSON.stringify(x)};
                    const viewer = document.getElementById('fullscreenViewer');
                    const viewerStage = document.getElementById('viewerStage');
                    const galleryGrid = document.getElementById('galleryGrid');
                    const viewerSlides = Array.from(document.querySelectorAll('.viewer-slide'));
                    const viewerNextButton = document.getElementById('viewerNext');
                    const viewerPlayToggleButton = document.getElementById('viewerPlayToggle');
                    const viewerRandomToggleButton = document.getElementById('viewerRandomToggle');
                    const modalPlayFullscreenButton = document.getElementById('modalPlayFullscreenButton');
                    const totalGalleryBytes = Number(${JJ}) || 0;
                    const galleryStorageLimitBytes = Number(${VZ}) || 0;
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
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${F}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
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
                        if (labelInput) labelInput.value = jsonFallbackLabel;
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
                        const selectedFiles = Array.from(localInput?.files || []);
                        const mediaType = mediaTypeInput?.value || 'image';
                        const label = labelInput?.value || jsonFallbackLabel;
                        const autor = (authorInput?.value || '').trim();
                        const slotSelectionId = activeSlotSelectionId || document.getElementById('slotSelectionId')?.value || '';

                        const postMessageToOpener = (payload = {}) => {
                            if (!window.opener || typeof window.opener.postMessage !== 'function') return false;
                            window.opener.postMessage(payload, '*');
                            return true;
                        };

                        const postMedia = (finalUrl, finalType) => {
                            if (!finalUrl) return;
                            const sent = postMessageToOpener({ type: 'ADD_IMAGE', url: finalUrl, label, autor, mediaType: finalType, id: '${F}' });
                            if (!sent) {
                                alert('No se pudo conectar con la ventana principal. Cerrá y volvé a abrir la galería desde el personaje.');
                                return;
                            }
                            if (slotSelectionId) {
                                postMessageToOpener({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${F}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label });
                            }
                            document.getElementById('miModal').style.display = 'none';
                            resetAddMediaModalFields();
                        };

                        if (selectedFiles.length) {
                            const invalidFile = selectedFiles.find((file) => !isAllowedFileType(file));
                            if (invalidFile) {
                                alert('Tipo de archivo no válido. Usá imagen o video.');
                                return;
                            }
                            const selectedBytes = selectedFiles.reduce((sum, file) => sum + (Number(file.size) || 0), 0);
                            const projectedBytes = totalGalleryBytes + selectedBytes;
                            const shouldContinue = confirm(
                                'Vas a subir ' + selectedFiles.length + ' archivo(s) por ' + formatBytes(selectedBytes) + '.
' +
                                'Uso total actual en galerías: ' + formatBytes(totalGalleryBytes) + ' de ' + formatBytes(galleryStorageLimitBytes) + '.
' +
                                'Uso proyectado: ' + formatBytes(projectedBytes) + '.'
                            );
                            if (!shouldContinue) return;
                            Promise.all(selectedFiles.map((file) => new Promise((resolve, reject) => {
                                const inferredType = file.type && file.type.startsWith('video/') ? 'video' : 'image';
                                const reader = new FileReader();
                                reader.onload = () => resolve({
                                    url: String(reader.result || ''),
                                    mediaType: inferredType,
                                    sizeBytes: Number(file.size) || 0
                                });
                                reader.onerror = () => reject(new Error('No se pudo leer el archivo seleccionado.'));
                                reader.readAsDataURL(file);
                            }))).then((items) => {
                                const couldSendAll = items.every((item) => postMessageToOpener({
                                    type: 'ADD_IMAGE',
                                    url: item.url,
                                    label,
                                    autor,
                                    mediaType: item.mediaType,
                                    sizeBytes: item.sizeBytes,
                                    id: '${F}'
                                }));
                                if (!couldSendAll) {
                                    alert('No se pudo conectar con la ventana principal. Cerrá y volvé a abrir la galería desde el personaje.');
                                    return;
                                }
                                document.getElementById('miModal').style.display = 'none';
                                resetAddMediaModalFields();
                            }).catch(() => alert('No se pudo leer uno de los archivos seleccionados.'));
                            return;
                        }

                        postMedia(normalizedUrl, mediaType);
                    }
                    window.addMediaFromModal = addMediaFromModal;

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
        `);q.document.close()},E1=()=>{const[q,O]=React.useState(null),V=zJ(null),R=zJ(null),[F,S]=C([]),n={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},JJ=(J="")=>{const X=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return n[X]||n.DEFAULT},[l,g]=C(NZ),[x,z]=C("EXPLORAR"),[v,o]=C(null),[G,B]=C(null),[b,QJ]=C(""),[h,$J]=C({}),[WJ,OJ]=C({}),[xQ,MZ]=C(!1),[XY,KZ]=C(rX[0]||""),[PQ,OQ]=C(null),[wZ,GZ]=C(!1),[YY,hJ]=C(!1),[ZY,bQ]=C(!1),[YJ,LQ]=C(null),[kZ,EQ]=C(null),[DJ,FQ]=C(null),[SZ,$Y]=C(!1),[HY,vQ]=C(""),[ZJ,UQ]=React.useState(null),[EX,IQ]=C(!1),[jY,xZ]=C({x:0,y:0}),[jJ,qY]=C("promedio"),[yJ,FX]=C("desc"),[UX,PZ]=C(!1),[CJ,VQ]=C({isOpen:!1,profile:null,category:null}),[VX,gQ]=C({isOpen:!1,profile:null}),[xJ,DX]=C("INICIAL"),[u,bZ]=C("GENERAL"),[AJ,XJ]=C(null),[hQ,DQ]=C(null),[CQ,CX]=C([]),[rJ,_Y]=C([]),[MJ,RQ]=C(!1),[PJ,RX]=C(!1),[KJ,WY]=C(!1),[AX,vZ]=C(5),[OY,LY]=C(20),[EY,FY]=C(!1),[BJ,IZ]=C(!0),[UY,eJ]=C(!1),[VY,yQ]=C(""),[DY,mQ]=C(""),[CY,mJ]=C(""),[RY,AY]=C(!1),[BX,BY]=C(""),[TX,TY]=C("url"),[zY,NY]=C(""),[MY,KY]=C(null),[wY,gZ]=C(HJ[0]),[GY,kY]=C(""),[SY,uQ]=C(""),[uJ,hZ]=C(""),[JQ,yZ]=C([]),[xY,PY]=C(""),[fQ,bY]=C("url"),[vY,IY]=C(""),[gY,hY]=C(null),[yY,fJ]=C(""),[zX,mZ]=C(!1),[NX,uZ]=C(""),[MX,fZ]=C(""),[cQ,cJ]=C(""),[cZ,sZ]=C(!1),[KX,wX]=C(!1),[mY,GX]=C({}),[kX,uY]=C({}),[dZ,sQ]=C({}),[nZ,fY]=C({}),[QQ,pZ]=C(!1),[dQ,iZ]=C(!1),[lZ,AQ]=C(""),sJ=zJ(null),nQ=zJ(null),SX=zJ(null),BQ=zJ(null),TQ=zJ(null),pQ=zJ(!1),iQ=zJ(null),lQ=zJ(!1),cY=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),oQ=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:lX(),puntuaciones:kQ()}),[P,t]=C(oQ);r(()=>{if(!G){if(b)QJ("");return}if(G==="GENERAL"&&b!=="all")QJ("all")},[G,b]);const xX=(J={})=>{const X=oQ(),Y=J&&typeof J==="object"?J:{},Z=Y?.puntuaciones&&typeof Y.puntuaciones==="object"?{...X.puntuaciones,...Y.puntuaciones}:X.puntuaciones;return{...Y,...X,nombre:typeof Y.nombre==="string"?Y.nombre:"",nacionalidad:typeof Y.nacionalidad==="string"?Y.nacionalidad:"",ciudad:typeof Y.ciudad==="string"?Y.ciudad:"",profesion:typeof Y.profesion==="string"?Y.profesion:"",fechaNacimiento:typeof Y.fechaNacimiento==="string"?Y.fechaNacimiento:"",estaturaCm:Y.estaturaCm===void 0||Y.estaturaCm===null?"":Y.estaturaCm,fotos:Array.isArray(Y.fotos)?Y.fotos:[],galeria:{fotos:Array.isArray(Y?.galeria?.fotos)?Y.galeria.fotos:[],gifs:Array.isArray(Y?.galeria?.gifs)?Y.galeria.gifs:[],videos:Array.isArray(Y?.galeria?.videos)?Y.galeria.videos:[]},batallaFotosPreferidas:FJ(Y?.batallaFotosPreferidas),puntuaciones:Z}},tQ=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===NJ)return;t(xX(J));LQ(J.firebaseId||J.id||null);hJ(!0)},oZ=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const Y=V.current,Z=Y&&!Y.closed?Y:window.open("","_blank");V.current=Z;QY({targetWindow:Z,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map((H,j)=>({...e(H,"image"),sourceTag:"fotos",sourceIndex:j})),...(J?.galeria?.videos||[]).map((H,j)=>({...e(H,"video"),sourceTag:"videos",sourceIndex:j}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||"",totalGalleryBytes:oX(F)});Z?.focus();cJ("");AQ("")},sY=(J="")=>{if(x==="anonimo")return;const X=String(J||"").trim();LQ(null);t({...oQ(),profesion:X});hJ(!0)},aQ=c(()=>{const X=[{key:"nombre",label:"Nombre",value:P?.nombre},{key:"fotos.0",label:"Foto principal",value:P?.fotos?.[0]},{key:"profesion",label:"Profesión",value:P?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:P?.nacionalidad},{key:"ciudad",label:"Ciudad",value:P?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:P?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:P?.estaturaCm}].map((Y)=>{const Z=typeof Y.value==="string"?Y.value.trim():Y.value,H=!(Z===""||Z===void 0||Z===null),j=Y.key==="fotos.0"?H?"SI":"NO":H?String(Z):"Sin completar";return{...Y,isComplete:H,preview:j}});return{completed:X.filter((Y)=>Y.isComplete),missing:X.filter((Y)=>!Y.isComplete)}},[P]),U1=async({profileId:J,url:X,tag:Y="fotos",label:Z="",type:H="image",autor:j=""})=>{const E=(X||"").trim(),_=HJ.includes(Z)?Z:"",W=gJ(E,H);if(!J||!E)return[];const $=M.ref(`perfiles/${J}/galeria/${Y}`),D=[...(await $.once("value")).val()||[],{url:E,label:_,type:W,autor:LX(j)}];await $.set(D);if(J===YJ)t((T)=>({...T,galeria:{...T.galeria||{fotos:[],gifs:[],videos:[]},[Y]:D}}));return D},tZ=async({profileId:J,sourceTag:X,sourceIndex:Y,label:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const H=HJ.includes(Z)?Z:"",j=M.ref(`perfiles/${J}/galeria/${X}`),E=await j.once("value"),_=Array.isArray(E.val())?E.val():[];if(!_[Y])return;const W=[..._],$=e(W[Y],X==="videos"?"video":"image");W[Y]={...$,label:H};await j.set(W);if(J===YJ)t((L)=>({...L,galeria:{...L.galeria||{fotos:[],gifs:[],videos:[]},[X]:W}}))},dY=async({profileId:J,sourceTag:X,sourceIndex:Y,url:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const H=(Z||"").trim();if(!H)return;const j=M.ref(`perfiles/${J}/galeria/${X}`),E=await j.once("value"),_=Array.isArray(E.val())?E.val():[];if(!_[Y])return;const W=[..._],$=X==="videos"?"video":"image",L=e(W[Y],$);W[Y]={...L,url:H,type:gJ(H,$)};await j.set(W);if(J===YJ)t((U)=>({...U,galeria:{...U.galeria||{fotos:[],gifs:[],videos:[]},[X]:W}}))},aZ=async({profileId:J,sourceTag:X,sourceIndex:Y})=>{if(!J||!X||!Number.isInteger(Y))return;const Z=M.ref(`perfiles/${J}/galeria/${X}`),H=await Z.once("value"),j=Array.isArray(H.val())?H.val():[],E=j[Y];if(!E)return;const _=j.filter(($,L)=>L!==Y);await Z.set(_);const W=e(E,X==="videos"?"video":"image").url;if(W){const $=M.ref(`perfiles/${J}/batallaFotosPreferidas`),L=await $.once("value"),D={...FJ(L.val())};let T=!1;Object.keys(D).forEach((A)=>{if(D[A]===W){D[A]="";T=!0}});if(T)await $.set(D)}if(J===YJ)t(($)=>({...$,galeria:{...$.galeria||{fotos:[],gifs:[],videos:[]},[X]:_},batallaFotosPreferidas:(()=>{const L=FJ($.batallaFotosPreferidas);if(!W)return L;const U={...L};Object.keys(U).forEach((D)=>{if(U[D]===W)U[D]=""});return U})()}))},PX=(J)=>new Promise((X,Y)=>{const Z=new FileReader;Z.onload=()=>X(String(Z.result||""));Z.onerror=()=>Y(new Error("No se pudo leer el archivo."));Z.readAsDataURL(J)}),nY=(J,X)=>{const Y=String(X||"").trim(),Z=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Y)return{...J,fotos:[""]};const j=Z.some((E)=>e(E,"image").url===Y)?Z:[...Z,{url:Y,label:"C",type:"image"}];return{...J,fotos:[Y],galeria:{...J.galeria||{},fotos:j}}},rZ=async(J)=>{const X=J.target.files?.[0];if(!X)return;try{const Y=await PX(X);t((Z)=>nY(Z,Y))}catch(Y){console.error("Error al cargar foto de perfil local:",Y)}finally{J.target.value=""}},eZ=async({url:J,label:X,autor:Y="",forcedTag:Z=""})=>{const H=String(J||"").trim();if(!H)throw new Error("Ingresá una URL o seleccioná un archivo.");const j=HJ.includes(X)?X:"",E=gJ(H);if(!(E==="image"||DZ.test(H)||Boolean(jQ(H))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const W=Z||(E==="video"?"videos":"fotos"),$=M.ref(`${$Q}/${W}`),L=await $.once("value"),D=[...Array.isArray(L.val())?L.val():[],{url:H,label:j,type:E,autor:String(Y||"").trim()}];await $.set(D)},J0=async(J="")=>{uQ("");try{let X=String(zY||"").trim();if(TX==="file"){if(!MY)throw new Error("Seleccioná un archivo local.");X=await PX(MY)}await eZ({url:X,label:wY,autor:GY,forcedTag:J});NY("");KY(null);kY("");TY("url")}catch(X){uQ(X?.message||"No se pudo guardar en galería anónima.")}},Q0=async()=>{const J=String(xY||"").trim();fJ("");if(!J){fJ("Completá el nombre del audio.");return}try{let X=String(vY||"").trim();if(fQ==="file"){if(!gY){fJ("Seleccioná un archivo de audio.");return}X=await PX(gY)}else if(!X){fJ("Completá la URL del audio.");return}if(fQ==="url"&&!l0.test(X)){fJ("La URL debe apuntar a un archivo de audio válido.");return}const Y=M.ref(`${$Q}/audios`),Z=await Y.once("value"),j=[...Array.isArray(Z.val())?Z.val():[],{nombre:J,url:X}];await Y.set(j);PY("");IY("");hY(null);bY("url")}catch(X){fJ("No se pudo guardar el audio en Firebase.")}},V1=async(J,X)=>{X.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await M.collection("galeria").doc(J).delete()}catch(Y){console.error("Error al borrar de Firebase:",Y)}},[K,_J]=C(cY()),bX=()=>_J(cY());r(()=>{if(window.lucide)window.lucide.createIcons()},[x,YY,ZY,F,ZJ,l]);r(()=>{if(V.current&&!V.current.closed&&YJ)QY({targetWindow:V.current,profileName:P.nombre,profession:P.profesion,photos:[...(P.galeria?.fotos||[]).map((J,X)=>({...e(J,"image"),sourceTag:"fotos",sourceIndex:X})),...(P.galeria?.videos||[]).map((J,X)=>({...e(J,"video"),sourceTag:"videos",sourceIndex:X}))],editingId:YJ,battlePhotoPrefs:P.batallaFotosPreferidas,profilePhotoUrl:P.fotos?.[0]||"",totalGalleryBytes:oX(F)})},[YJ,P.nombre,P.profesion,P.galeria?.fotos,P.galeria?.videos,P.batallaFotosPreferidas]);r(()=>{const J=async(W)=>{if(W.data.type==="ADD_IMAGE"){const{url:$,id:L,label:U,mediaType:D,autor:T,sizeBytes:A}=W.data,N=D==="video"?"videos":"fotos";if(!L)return;const k=L===NJ?M.ref(`${$Q}/${N}`):M.ref(`perfiles/${L}/galeria/${N}`),m=(await k.once("value")).val()||[],p=($||"").trim();if(!p)return;const I=[...m,{url:p,label:HJ.includes(U)?U:"",type:gJ(p,D),autor:LX(T),sizeBytes:Number(A)||0}];await k.set(I);t((i)=>({...i,galeria:{...i.galeria,[N]:I}}))}if(W.data.type==="ADD_IMAGES_BATCH"){const{items:$,id:L,label:U,autor:D}=W.data;if(!L||!Array.isArray($)||!$.length)return;const T=$.reduce((A,N)=>{const k=String(N?.url||"").trim();if(!k)return A;const y=N?.mediaType==="video"?"video":"image",m=y==="video"?"videos":"fotos";if(!A[m])A[m]=[];A[m].push({url:k,label:HJ.includes(U)?U:"",type:gJ(k,y),autor:LX(D),sizeBytes:Number(N?.sizeBytes)||0});return A},{});for(const[A,N]of Object.entries(T)){const k=L===NJ?M.ref(`${$Q}/${A}`):M.ref(`perfiles/${L}/galeria/${A}`),p=[...(await k.once("value")).val()||[],...N];await k.set(p);t((I)=>({...I,galeria:{...I.galeria,[A]:p}}))}}if(W.data.type==="DELETE_IMAGE"){const{index:$,id:L,mediaType:U}=W.data,D=U==="video"?"videos":"fotos";if(!L)return;const T=L===NJ?M.ref(`${$Q}/${D}`):M.ref(`perfiles/${L}/galeria/${D}`),N=(await T.once("value")).val()||[],k=N[$],y=N.filter((p,I)=>I!==$);await T.set(y);const m=e(k,U).url;if(m&&L!==NJ){const p=M.ref(`perfiles/${L}/batallaFotosPreferidas`),I=await p.once("value"),d={...FJ(I.val())};let TJ=!1;Object.keys(d).forEach((pJ)=>{if(d[pJ]===m){d[pJ]="";TJ=!0}});if(TJ)await p.set(d)}t((p)=>({...p,galeria:{...p.galeria,[D]:y},batallaFotosPreferidas:(()=>{const I=FJ(p.batallaFotosPreferidas);if(!m)return I;const i={...I};Object.keys(i).forEach((d)=>{if(i[d]===m)i[d]=""});return i})()}))}if(W.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:$,slotId:L,index:U,mediaType:D}=W.data,T=_X(L);if(!$||$===NJ||!T||!Number.isInteger(U))return;const A=D==="video"?"videos":"fotos",y=(await M.ref(`perfiles/${$}/galeria/${A}`).once("value")).val()||[],m=e(y[U],D);if(!m.url||m.type!=="image")return;await M.ref(`perfiles/${$}/batallaFotosPreferidas/${L}`).set(m.url);t((I)=>({...I,batallaFotosPreferidas:{...FJ(I.batallaFotosPreferidas),[L]:m.url}}))}if(W.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:$,slotId:L,url:U,mediaType:D,label:T}=W.data,A=_X(L),N=String(U||"").trim();if(!$||$===NJ||!A||!N)return;if(D==="video")return;await M.ref(`perfiles/${$}/batallaFotosPreferidas/${L}`).set(N);t((y)=>({...y,batallaFotosPreferidas:{...FJ(y.batallaFotosPreferidas),[L]:N}}))}if(W.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:$,slotId:L}=W.data,U=_X(L);if(!$||$===NJ||!U)return;await M.ref(`perfiles/${$}/batallaFotosPreferidas/${L}`).set("");t((T)=>({...T,batallaFotosPreferidas:{...FJ(T.batallaFotosPreferidas),[L]:""}}))}};window.addEventListener("message",J);const X=M.ref("perfiles"),Y=M.ref($Q);let Z={},H={};const j=()=>{const W=Object.keys(Z||{}).map((U)=>({...xX(Z[U]),firebaseId:U})),$=X1(H||{}),L=Object.values($.galeria||{}).some((U)=>Array.isArray(U)&&U.length>0);S(L?[...W,$]:W)};X.on("value",(W)=>{Z=W.val()||{};j()});Y.on("value",(W)=>{H=W.val()||{};const $=Array.isArray(H?.audios)?H.audios.map((L)=>({nombre:String(L?.nombre||"").trim(),url:String(L?.url||"").trim()})).filter((L)=>L.nombre&&L.url):[];yZ($);j()});g(NZ);const E=M.ref("arenaBattleState");E.on("value",(W)=>{$J(W.val()||{})});const _=M.ref("arenaGlobalState");_.on("value",(W)=>{OJ(W.val()||{})});return()=>{window.removeEventListener("message",J);X.off();Y.off();E.off();_.off()}},[]);r(()=>{const J=JQ.find((Y)=>Y.url===NX),X=JQ.find((Y)=>Y.url===MX);[BQ.current,TQ.current].forEach((Y)=>{if(!Y)return;Y.pause();Y.currentTime=0});if(!zX)return;if(J&&BQ.current){BQ.current.src=J.url;BQ.current.play().catch(()=>{})}if(X&&TQ.current&&X.url!==J?.url){TQ.current.src=X.url;TQ.current.play().catch(()=>{})}},[zX,NX,MX,JQ]);const bJ=(J)=>{if(!J)return"?";const X=new Date,Y=new Date(J);let Z=X.getFullYear()-Y.getFullYear();if(X.getMonth()<Y.getMonth()||X.getMonth()===Y.getMonth()&&X.getDate()<Y.getDate())Z--;return Z},vX=(J={})=>{return{...kQ(),...J?.puntuaciones||{}}},dJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},IX=(J={},X=[])=>{if(!Array.isArray(X)||!X.length)return 0;const Y=vX(J);return X.reduce((Z,H)=>Z+(Number(Y[H])||0),0)/X.length},rQ=(J={})=>{return IX(J,dJ.Rostro)},eQ=(J={})=>{return IX(J,dJ.Cuerpo)},JX=(J={})=>{return IX(J,dJ.Actitud)},pY=(J={},X="")=>{if(X==="Rostro")return rQ(J);if(X==="Cuerpo")return eQ(J);if(X==="Actitud")return JX(J);return 0},LJ=(J={})=>{const X=Object.keys(dJ).map((Z)=>pY(J,Z));return(X.reduce((Z,H)=>Z+H,0)/X.length).toFixed(0)},QX=(J)=>{const X=[],Y=(J.nacionalidad||"").toLowerCase(),Z=(J.profesion||"").toLowerCase(),H=(J.ciudad||"").toLowerCase(),j=bJ(J.fechaNacimiento);l.forEach((E)=>{const _=E.reglas;let W=!0;if(_.nacionalidades?.length>0&&!_.nacionalidades.some(($)=>Y===$.toLowerCase()))W=!1;if(_.profesiones?.length>0&&!_.profesiones.some(($)=>Z===$.toLowerCase()))W=!1;if(_.ciudades?.length>0&&!_.ciudades.some(($)=>H===$.toLowerCase()))W=!1;if(_.edadMin&&(j==="?"||j<parseInt(_.edadMin)))W=!1;if(_.edadMax&&(j==="?"||j>parseInt(_.edadMax)))W=!1;if(_.caracteristica&&_.umbral){const $=vX(J)[_.caracteristica]||0,L=parseInt(_.umbral);if(_.operador==="Superior a"&&$<=L)W=!1;if(_.operador==="Inferior a"&&$>=L)W=!1}if(W)X.push(E.firebaseId)});return X},X0=c(()=>["Todas",...new Set(F.map((J)=>J.nacionalidad).filter(Boolean))],[F]),D1=c(()=>["Todas",...new Set(F.map((J)=>J.profesion).filter(Boolean))],[F]),Y0=c(()=>["Todas",...new Set(F.map((J)=>J.ciudad).filter(Boolean))],[F]),iY=c(()=>{return(F||[]).reduce((J,X)=>{if(!X?.firebaseId)return J;J[X.firebaseId]=QX(X);return J},{})},[F,l]),XQ=c(()=>{return(F||[]).flatMap((J)=>{const X=Y1(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map((Z,H)=>({item:Z,sourceTag:"fotos",sourceIndex:H,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map((Z,H)=>({item:Z,sourceTag:"gifs",sourceIndex:H,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map((Z,H)=>({item:Z,sourceTag:"videos",sourceIndex:H,fallbackType:"video"})):[]].map(({item:Z,sourceTag:H,sourceIndex:j,fallbackType:E})=>{const _=e(Z,E);return{id:`${J.firebaseId||J.nombre||"perfil"}-${H}-${j}`,url:_.url,label:_.label,type:_.type,isGif:_.type==="image"&&q1(_.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||_.url,profileId:J.firebaseId,sourceCharacterId:X,sourceTag:H,sourceIndex:j}})})},[F]),EJ=c(()=>{return XQ.filter((J)=>Boolean(J.url))},[XQ]),gX=c(()=>{return EJ.reduce((J,X)=>{const Y=X.label||"";if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[EJ]),lY=c(()=>{return EJ.reduce((J,X)=>{const Y=X.profileId||X.nombre;if(!Y)return J;if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[EJ]),Z0=c(()=>{return new Set(EJ.map((J)=>J.profileId).filter(Boolean)).size},[EJ]),oY=c(()=>{return Object.entries(iY||{}).reduce((J,[X,Y])=>{J[X]=new Set(Array.isArray(Y)?Y:[]);return J},{})},[iY]),vJ=c(()=>{if(u==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:EJ[0]?.url||"",photos:EJ.filter((J)=>!d0.includes(J.label||""))}];if(u==="PERSONAJE")return Object.entries(lY).map(([J,X])=>{const Y=X[0]||{};return{id:`PERSONAJE-${J}`,profileId:Y.profileId||null,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotoPerfil:Y.fotoPerfil||Y.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}));if(u==="ETIQUETA")return HJ.map((J)=>{const X=gX[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0);return(l||[]).map((J)=>{const X=EJ.filter((Y)=>{if(!Y.profileId)return!1;const Z=oY[Y.profileId];return Z?Z.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||X[0]?.fotoPerfil||X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}))},[EJ,gX,lY,l,u,oY]),nJ=c(()=>{if(u==="GENERAL")return vJ[0]||null;if(!hQ)return null;return vJ.find((J)=>J.id===hQ.id)||null},[vJ,hQ,u]),wJ=c(()=>{if(u!=="PERSONAJE")return[];return vJ.filter((J)=>CQ.includes(J.id))},[vJ,u,CQ]),zQ=c(()=>{if(u==="PERSONAJE")return wJ.flatMap((J)=>J.photos||[]);if(u==="ETIQUETA"){if(!rJ.length)return[];return EJ.filter((J)=>rJ.includes(J.label))}return nJ?.photos||EJ},[u,wJ,nJ,EJ,rJ]),$0=c(()=>{const J=zQ.reduce((X,Y)=>{const Z=Y.label||"";if(!Z)return X;X[Z]=(X[Z]||0)+1;return X},{});return HJ.reduce((X,Y)=>{X[Y]=J[Y]||0;return X},{})},[zQ]),f=c(()=>{return zQ.filter((J)=>u==="ETIQUETA"?!0:xJ==="INICIAL"?J.label!=="X":xJ==="100"?!0:J.label===xJ)},[zQ,xJ,u]),hX=c(()=>{return f.slice(0,OY)},[f,OY]),H0=hX.length<f.length,XX=FZ[u]||u,YX=u!=="GENERAL"&&u!=="ETIQUETA",tY=c(()=>{if(u!=="PERSONAJE")return[];return vJ.filter((J)=>!CQ.includes(J.id))},[vJ,u,CQ]),w=AJ===null?null:f[HQ(AJ,f.length)]||null,GJ=c(()=>{return XQ.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(mY[J.id])})},[XQ,mY]),aY=c(()=>{const J=GJ.reduce((X,Y)=>{const Z=Y.profileId||Y.nombre||"sin-perfil";if(!X[Z])X[Z]={id:Z,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotos:[]};X[Z].fotos.push(Y);return X},{});return Object.values(J).map((X)=>({...X,fotos:X.fotos.sort((Y,Z)=>(Y.label||"").localeCompare(Z.label||"","es",{sensitivity:"base"}))})).sort((X,Y)=>X.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[GJ]);r(()=>{if(!w){eJ(!1);yQ("");mQ("");mJ("");return}eJ(!1);yQ(w.label||"");mQ(w.url||"");mJ("")},[w]);r(()=>{if(x!=="GALERIA"){DQ(null);XJ(null)}},[x]);r(()=>{LY(40);XJ(null)},[u,xJ,rJ,CQ,hQ,F.length]);r(()=>{DQ(null);XJ(null);CX([]);_Y([])},[u]);r(()=>{if(AJ===null)return;if(!f.length){XJ(null);return}if(AJ>=f.length)XJ(0)},[f,AJ]);r(()=>{if(AJ===null)return;const J=(X)=>{if(X.key==="Escape"){XJ(null);return}if(!f.length)return;if(X.key==="ArrowRight")XJ((Y)=>HQ((Y??0)+1,f.length));if(X.key==="ArrowLeft")XJ((Y)=>HQ((Y??0)-1,f.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[f.length,AJ]);r(()=>{if(AJ===null){RQ(!1);RX(!1);WY(!1)}},[AJ]);r(()=>{if(!EX)return;const J=(Y)=>{if(R.current&&!R.current.contains(Y.target))IQ(!1)},X=(Y)=>{if(Y.key==="Escape")IQ(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",X);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",X)}},[EX]);r(()=>{let J=!1;const X=XQ.filter((Z)=>Z.type==="image"&&Z.url);if(!X.length){GX({});return}(async()=>{const Z=8,H=[];for(let E=0;E<X.length;E+=Z){const _=X.slice(E,E+Z),W=await Promise.all(_.map(async($)=>({id:$.id,isBroken:await BZ($.url)})));H.push(...W);if(J)return}if(J)return;const j=H.reduce((E,_)=>{E[_.id]=_.isBroken;return E},{});GX(j)})();return()=>{J=!0}},[XQ]);r(()=>{if(!KX)return;const J=GJ.reduce((X,Y)=>{X[Y.id]=Y.url;return X},{});uY(J);fY({})},[KX,GJ]);r(()=>{if(sJ.current){clearTimeout(sJ.current);sJ.current=null}if(!MJ||!w)return;if(w.type==="video")return;const J=AX*1000;sJ.current=setTimeout(()=>{XJ((X)=>UZ(X,f,PJ))},J);return()=>{if(sJ.current){clearTimeout(sJ.current);sJ.current=null}}},[MJ,w,f,PJ,AX]);r(()=>{if(!w||!pQ.current)return;pQ.current=!1;requestAnimationFrame(()=>{q0()})},[w]);const yX=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,rY=()=>{const J=nQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},j0=()=>{const J=nQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},q0=()=>{const J=nQ.current;if(!J)return;if(document.fullscreenElement)return;const X=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof X==="function")Promise.resolve(X.call(J)).catch(()=>{if(yX)rY()});else if(yX)rY()},_0=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},eY=(J,{autoplay:X=!1,fromGeneralPlay:Y=!1}={})=>{pQ.current=!!X;XJ(J);RQ(X);WY(Y);eJ(!Y)},W0=(J)=>{if(!J)return;CX((X)=>X.includes(J)?X:[...X,J]);XJ(null)},O0=(J)=>{if(!J)return;CX((X)=>X.filter((Y)=>Y!==J));XJ(null)},L0=(J)=>{if(!J)return;_Y((X)=>X.includes(J)?X.filter((Y)=>Y!==J):[...X,J]);XJ(null)},E0=async()=>{if(!(typeof window!=="undefined"&&typeof window.JSZip!=="undefined")){window.alert("No se pudo iniciar la descarga: falta la librería ZIP.");return}if(!f.length){window.alert("No hay archivos visibles para descargar.");return}const X=(Z="")=>String(Z||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\/:*?"<>|]/g,"-").replace(/\s+/g," ").trim(),Y=(Z="")=>{return((String(Z||"").split("?")[0].split("#")[0].match(/\.([a-zA-Z0-9]{2,5})$/)||[])[1]||"jpg").toLowerCase()};FY(!0);try{const Z=new window.JSZip,H=f.filter((k)=>k?.url);let j=0,E=0,_=0;const $=String(window.GALLERY_DOWNLOAD_PROXY||"").trim()||"https://corsproxy.io/?",L=(k)=>{if(!$)return"";if($.includes("{url}"))return $.replace("{url}",encodeURIComponent(k));const y=$.endsWith("?")||$.endsWith("=")?"":$.includes("?")?"&":"?";return`${$}${y}${encodeURIComponent(k)}`},U=async(k)=>{const y=await fetch(k,{mode:"cors"});if(!y.ok)throw new Error(`HTTP ${y.status}`);return{blob:await y.blob(),viaProxy:!1}};for(let k=0;k<H.length;k+=1){const y=H[k],m=X(y.nombre||"Sin nombre")||"Sin nombre",p=Y(y.url),I=X(y.label||"sin-etiqueta")||"sin-etiqueta",i=`${String(k+1).padStart(4,"0")}_${I}.${p}`;try{let d;try{d=await U(y.url)}catch(TJ){const pJ=L(y.url);if(!pJ)throw TJ;const iJ=await fetch(pJ,{mode:"cors"});if(!iJ.ok)throw new Error(`Proxy HTTP ${iJ.status}`);d={blob:await iJ.blob(),viaProxy:!0}}Z.folder(m).file(i,d.blob);j+=1;if(d.viaProxy)_+=1}catch(d){E+=1;console.warn("No se pudo descargar un archivo de la galería:",y.url,d)}}if(!j){window.alert("No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.");return}const D=await Z.generateAsync({type:"blob"}),T=URL.createObjectURL(D),A=document.createElement("a"),N=new Date().toISOString().slice(0,10);A.href=T;A.download=`galeria-completa-${N}.zip`;document.body.appendChild(A);A.click();A.remove();URL.revokeObjectURL(T);if(E>0)window.alert(`Descarga completada con avisos: ${j} archivos incluidos, ${E} omitidos y ${_} recuperados por proxy.`)}catch(Z){console.error("Error al generar ZIP de galería:",Z);window.alert("No se pudo crear el ZIP de la galería.")}finally{FY(!1)}},JZ=()=>{pQ.current=!1;RQ(!1);XJ(null);j0();_0()},NQ=()=>XJ((J)=>UZ(J,f,PJ)),C1=()=>XJ((J)=>HQ((J??0)-1,f.length)),F0=async()=>{if(!w?.profileId||!w?.sourceTag||!Number.isInteger(w?.sourceIndex))return;const J=(DY||"").trim();if(!J){mJ("La URL no puede estar vacía.");return}if(CZ(J)||!qJ(J,"")){mJ("La URL está bloqueada o no es válida.");return}try{AY(!0);mJ("");if(J!==w.url)await dY({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,url:J});await tZ({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,label:VY});eJ(!1)}catch(X){mJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",X)}finally{AY(!1)}},U0=(J,X)=>{uY((Y)=>({...Y,[J]:X}))},QZ=(J,X)=>{if(!J)return;fY((Y)=>({...Y,[J]:Boolean(X)}))},V0=(J)=>{const X=(kX[J?.id]||J?.url||"").trim();if(!X)return;window.open(X,"_blank","noopener,noreferrer")},D0=async(J)=>{if(!J)return;const X=(kX[J.id]||"").trim();if(!X)return;sQ((Y)=>({...Y,[J.id]:!0}));try{if(X!==J.url)await dY({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:X});const Y=await BZ(X);GX((Z)=>({...Z,[J.id]:Y}));if(!Y)QZ(J.id,!1)}catch(Y){console.error("Error al actualizar URL rota:",Y)}finally{sQ((Y)=>({...Y,[J.id]:!1}))}},C0=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;sQ((Y)=>({...Y,[J.id]:!0}));try{await aZ({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Y){console.error("Error al eliminar foto rota:",Y)}finally{sQ((Y)=>({...Y,[J.id]:!1}))}},R0=c(()=>{if(u==="PERSONAJE")return wJ.length?`${wJ.length} personaje${wJ.length>1?"s":""} seleccionado${wJ.length>1?"s":""}`:"Sin personajes seleccionados";if(nJ&&YX)return nJ.nombre;return XX},[u,wJ,nJ,YX,XX]),A0=(J)=>{J.preventDefault();const X={...P};if(YJ)M.ref(`perfiles/${YJ}`).set(X).then(()=>{hJ(!1);LQ(null)}).catch((Y)=>console.error("Error al excitar la base de datos:",Y));else M.ref("perfiles").push(X).then(()=>{hJ(!1);t(oQ())}).catch((Y)=>console.error("No pudo entrar el perfil:",Y))},B0=async(J)=>{J.preventDefault();const{firebaseId:X,...Y}=K,Z={...Y,type:"custom"};try{if(X)await M.ref(`categorias/${X}`).update(Z);else await M.ref("categorias").push(Z);bQ(!1);bX()}catch(H){console.error("La categoría no quiso guardarse:",H)}},T0=async(J)=>{if(!J)return;try{await M.ref(`categorias/${J}`).remove();g((X)=>X.filter((Y)=>Y.firebaseId!==J));UQ((X)=>X===J?null:X)}catch(X){console.error("No se pudo borrar la categoría:",X);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},mX=(J)=>{if(!J?.firebaseId)return;vQ("");FQ(J);$Y(!0)},z0=()=>{if(!YJ)return;const J=F.find((X)=>X.firebaseId===YJ);if(!J)return;mX(J)},uX=()=>{$Y(!1);EQ(null);FQ(null)},N0=async(J)=>{if(!J)return;await M.ref(`perfiles/${J}`).remove();S((X)=>X.filter((Y)=>Y.firebaseId!==J))},M0=async()=>{if(!DJ?.firebaseId)return;try{await N0(DJ.firebaseId);vQ("");hJ(!1);if(YJ===DJ.firebaseId)LQ(null);uX()}catch(J){console.error("No se pudo borrar el perfil:",J);vQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},ZX=()=>{IQ(!1);FQ(null)},K0=(J,X)=>{J.preventDefault();IQ(!0);xZ({x:J.clientX,y:J.clientY});FQ(X)},w0=()=>{if(!DJ)return;t(xX(DJ));LQ(DJ.firebaseId);hJ(!0);ZX()},G0=async()=>{if(!DJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){ZX();return}try{await M.ref(`perfiles/${DJ.firebaseId}`).remove();S((X)=>X.filter((Y)=>Y.firebaseId!==DJ.firebaseId));ZX()}catch(X){console.error("No se pudo borrar el perfil:",X);alert("No se pudo borrar el perfil. Probá de nuevo.");ZX()}},XZ=(J)=>{const X=J?.estaturaCm;if(X===void 0||X===null||X==="")return"Sin dato";const Y=Number(X);if(Number.isNaN(Y)||Y<=0)return"Sin dato";return`${Math.round(Y)} cm`},fX=(J="")=>String(J||"").trim().toLowerCase(),k0=(J="")=>String(J||"").trim(),MQ=(J=[])=>[...J||[]].filter((X)=>X?.firebaseId&&(X?.nombre||"").trim()).sort((X,Y)=>(X.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"})).map((X)=>X.firebaseId),YZ=(J=[],X="GENERAL")=>{const Y=String(X||"GENERAL").trim().toUpperCase(),Z=[...J||[]].filter((_)=>_?.firebaseId&&(_?.nombre||"").trim()).sort((_,W)=>(_.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:Z.map((_)=>_.firebaseId)}];if(Y==="EDADES"){const _={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};Z.forEach((W)=>{const $=bJ(W.fechaNacimiento);if(!Number.isFinite($)||$<18)return;if($<=28)_["18-28"].ids.push(W.firebaseId);else if($<=39)_["29-39"].ids.push(W.firebaseId);else _["40+"].ids.push(W.firebaseId)});return Object.values(_)}const H=Y==="NACIONALIDADES"?"nacionalidad":"profesion",j=Y==="NACIONALIDADES"?"Nacionalidad":"Profesión",E=Z.reduce((_,W)=>{const $=fX(W?.[H]);if(!$)return _;if(!_[$])_[$]={key:$,label:k0(W?.[H])||$,typeLabel:j,ids:[]};_[$].ids.push(W.firebaseId);return _},{});return Object.values(E).sort((_,W)=>_.label.localeCompare(W.label,"es",{sensitivity:"base"}))},cX=(J=[],X="GENERAL",Y="")=>{const Z=[...J||[]].filter((_)=>_?.firebaseId&&(_?.nombre||"").trim()).sort((_,W)=>(_.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(X==="GENERAL"){const _=Z.map((W)=>W.firebaseId);return{groupedIds:_.length>1?[{key:"general",label:"General",typeLabel:"General",ids:_}]:[],orderedIds:_}}const H=YZ(Z,X),j=fX(Y),E=H.filter((_)=>{if(!j||j==="all")return!0;return fX(_.key)===j}).filter((_)=>_.ids.length>=2);return{groupedIds:E,orderedIds:E.flatMap((_)=>_.ids)}},IJ=(J,X)=>[J,X].sort().join("__"),YQ=(J)=>{if(!J||typeof J!=="object")return null;const X=String(J.winnerId||"").trim(),Y=String(J.loserId||"").trim();if(!X||!Y||X===Y)return null;return{winnerId:X,loserId:Y,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},$X=(J={},X="")=>!!YQ(J?.[X]),KQ=(J={},X=[])=>{const Y=new Set((X||[]).filter(Boolean)),Z={},H={},j={};Object.entries(J||{}).forEach(([$,L])=>{const U=YQ(L);if(!U)return;const{winnerId:D,loserId:T}=U;if(Y.size&&(!Y.has(D)||!Y.has(T)))return;const A=IJ(D,T),N={winnerId:D,loserId:T,reason:"direct",playedAt:U.playedAt??Date.now()};Z[A]=N;H[A]=N;if(!j[D])j[D]=new Set;j[D].add(T)});new Set([...Object.keys(j),...Object.values(j).flatMap(($)=>[...$])]).forEach(($)=>{const L=[...j[$]||[]],U=new Set;while(L.length){const D=L.shift();if(!D||U.has(D)||D===$)continue;U.add(D);const T=IJ($,D);if(!H[T])H[T]={winnerId:$,loserId:D,reason:"transitive",playedAt:null};(j[D]||[]).forEach((A)=>{if(!U.has(A))L.push(A)})}});const _=Object.fromEntries(Object.entries(j).map(([$,L])=>[$,[...L]])),W=x0(H);return{directMatchups:Z,matchups:H,victoryGraph:_,stats:W}},wQ=(J,X={})=>{const Y=VJ(J);if(!Y)return null;const Z=MQ(F),H=KQ(X?.directMatchups||X?.matchups||{},Z);return{arenaName:Y,orderedIds:Z,...H}},S0=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const H=IJ(J[Y],J[Z]);if(!$X(X,H))return[J[Y],J[Z]]}return null},sX=(J=[],X={},Y={})=>{const Z={...X||{},...Y||{}};for(const H of J){const j=S0(H?.ids||[],Z);if(j)return j}return null},GQ=(J=[],X,Y="")=>{if(!X)return null;return J.find((Z)=>{const H=Z?.ids||[];if(!H.includes(X))return!1;return!Y||H.includes(Y)})||null},x0=(J={})=>{return Object.keys(J||{}).reduce((X,Y)=>{const Z=YQ(J[Y]);if(!Z)return X;const{winnerId:H,loserId:j}=Z,E=X[H]||{wins:0,battles:0},_=X[j]||{wins:0,battles:0};return{...X,[H]:{wins:E.wins+1,battles:E.battles+1},[j]:{wins:_.wins,battles:_.battles+1}}},{})},ZZ=(J="",X="")=>{const Y=String(X||"").trim();if(!J||!Y)return!1;return J.endsWith(`::${Y}`)},P0=(J,X)=>{const Y=YQ(X);if(!Y||Y.reason!=="direct")return J||null;const Z=YQ(J);if(!Z||Z.reason!=="direct")return Y;const H=Z.playedAt??0;return(Y.playedAt??0)>=H?Y:Z},$Z=(J,X=h)=>{const Y=String(J||"").trim();if(!Y)return KQ({},[]);const Z={};Object.entries(X||{}).forEach(([j,E])=>{if(!ZZ(j,Y))return;const _=E?.directMatchups||{};Object.entries(_).forEach(([W,$])=>{Z[W]=P0(Z[W],$)})});const H=[...F||[]].map((j)=>j?.firebaseId).filter(Boolean).sort((j,E)=>String(j).localeCompare(String(E),"es",{sensitivity:"base"}));return KQ(Z,H)},HZ=(J,X)=>{const Z=($Z(J).stats||{})[X]||{wins:0,battles:0},H=Z.battles?Math.round(Z.wins/Z.battles*100):0;return{...Z,score:H}},jZ=(J,X=h)=>{const Y=$Z(J,X).stats||{};return[...F||[]].filter((Z)=>Z?.firebaseId).reduce((Z,H)=>{const j=Y[H.firebaseId]||{wins:0,battles:0};Z[H.firebaseId]=j.battles?Math.round(j.wins/j.battles*100):0;return Z},{})},R1=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const H=IJ(J[Y],J[Z]);if(!$X(X,H))return[J[Y],J[Z]]}return null},qZ=(J,X,Y=null)=>{if(!X)return null;const Z=_1.includes(X.mode)?X.mode:"GENERAL",H=String(X.groupKey||"all").trim().toLowerCase()||"all",j=cX(F,Z,H),E=j.groupedIds||[],_=j.orderedIds||[],W=wQ(J,Y||WJ?.[VJ(J)]||{}),$=W?.directMatchups||{},L=W?.matchups||{},U=W?.victoryGraph||{},D=W?.stats||{},T=X.championId,A=X.challengerId,N=GQ(E,T,A),k=!!T&&!!A&&T!==A&&!!N&&!$X(L,IJ(T,A)),y=E.length?sX(E,X.matchups||{},L):null,m=k?[T,A]:y,p=!y,I=GQ(E,m?.[0],m?.[1]);return{...X,mode:Z,groupKey:H,groupedIds:E,orderedIds:_,stats:D,directMatchups:$,matchups:L,victoryGraph:U,championId:m?m[0]:null,challengerId:m?m[1]:null,activeGroupKey:I?.key||null,activeGroupLabel:I?`${I.typeLabel}: ${I.label}`:"",isFinished:p}};r(()=>{if(!F.length)return;const J={},X=[];Object.entries(h||{}).forEach(([Y,Z])=>{const{arenaName:H}=zZ(Y),j=qZ(H,Z,WJ?.[VJ(H)]);if(!j)return;if(JSON.stringify(Z)===JSON.stringify(j))return;J[Y]=j;X.push(M.ref(`arenaBattleState/${Y}`).set(j).catch((_)=>console.error("No se pudo normalizar el estado del arena:",_)))});if(!Object.keys(J).length)return;$J((Y)=>({...Y,...J}));Promise.all(X).catch(()=>{})},[h,WJ,F]);r(()=>{if(!F.length)return;const J={};Object.entries(h||{}).forEach(([Z,H])=>{const{arenaName:j}=zZ(Z),E=VJ(j);if(!E)return;if(!J[E])J[E]={};Object.entries(H?.directMatchups||{}).forEach(([_,W])=>{const $=YQ(W);if(!$)return;J[E][_]={winnerId:$.winnerId,loserId:$.loserId,reason:"direct",playedAt:$.playedAt??Date.now()}})});const X=[],Y={};Object.entries(J).forEach(([Z,H])=>{const j=VJ(Z);if(!j||WJ?.[j])return;const E=wQ(Z,{directMatchups:H});if(!E)return;Y[j]=E;X.push(M.ref(`arenaGlobalState/${j}`).set(E).catch((_)=>console.error("No se pudo migrar arenaGlobalState:",_)))});if(!Object.keys(Y).length)return;OJ((Z)=>({...Z,...Y}));Promise.all(X).catch(()=>{})},[h,WJ,F]);const _Z=(J,X=G,Y=b)=>{const Z=[...F].filter((N)=>N?.firebaseId&&(N?.nombre||"").trim()).sort((N,k)=>(N.nombre||"").localeCompare(k.nombre||"","es",{sensitivity:"base"}));if(Z.length<2)return;const H=String(X||"GENERAL").trim().toUpperCase(),j=cX(Z,H,Y),E=j.groupedIds||[],_=j.orderedIds||[],W=VJ(J),$=wQ(J,WJ?.[W]||{}),L=$?.matchups||{},U=sX(E,{},L);if(!U)return;const D=GQ(E,U[0],U[1]),T={mode:H,groupKey:String(Y||"").trim().toLowerCase()||"all",groupedIds:E,orderedIds:_,stats:$?.stats||{},directMatchups:$?.directMatchups||{},matchups:L,victoryGraph:$?.victoryGraph||{},championId:U[0],challengerId:U[1],activeGroupKey:D?.key||null,activeGroupLabel:D?`${D.typeLabel}: ${D.label}`:"",isFinished:!1},A=WQ(J,X,Y);if(!A)return;$J((N)=>({...N,[A]:T}));if(!WJ?.[W]){OJ((N)=>({...N,[W]:$}));M.ref(`arenaGlobalState/${W}`).set($).catch((N)=>console.error("No se pudo guardar arenaGlobalState inicial:",N))}M.ref(`arenaBattleState/${A}`).set(T).catch((N)=>console.error("No se pudo guardar el estado del arena:",N))},b0=async(J,X,Y)=>{if(!J)return;try{await M.ref(`perfiles/${J}/puntuaciones/${X}`).set(Y)}catch(Z){console.error("No se pudo actualizar score del arena:",Z)}},WZ=(J,X,Y=G,Z=b)=>{const H=WQ(J,Y,Z),j=h[H];if(!j||j.isFinished)return;const E=VJ(J),_=wQ(J,WJ?.[E]||{}),W=Array.isArray(j.groupedIds)&&j.groupedIds.length?j.groupedIds:cX(F,j.mode||"GENERAL",j.groupKey||"all").groupedIds,{championId:$,challengerId:L}=j;if(X!==$&&X!==L)return;const U=X===$?L:$;if(!X||!U)return;const D=IJ(X,U),T={..._?.directMatchups||{},[D]:{winnerId:X,loserId:U,reason:"direct",playedAt:Date.now()}},A=KQ(T,MQ(F)),N=A.matchups,k=A.stats||{},y=GQ(W,X,U),p=((RJ,UJ,iX)=>{if(!UJ)return null;for(const qX of RJ){if(!qX||qX===UJ)continue;const c0=IJ(UJ,qX);if(!$X(iX,c0))return qX}return null})(y?.ids||[],X,N),I=p?[X,p]:sX(W,j.matchups||{},N),i=GQ(W,I?.[0],I?.[1]),d={arenaName:E,orderedIds:MQ(F),directMatchups:A.directMatchups,matchups:N,victoryGraph:A.victoryGraph,stats:k},TJ={...j,groupedIds:W,directMatchups:d.directMatchups,stats:k,matchups:N,victoryGraph:A.victoryGraph,championId:I?I[0]:null,challengerId:I?I[1]:null,activeGroupKey:i?.key||null,activeGroupLabel:i?`${i.typeLabel}: ${i.label}`:"",isFinished:!I},pJ={...h||{},[H]:TJ},iJ=jZ(J,pJ);S((RJ)=>RJ.map((UJ)=>{if(!UJ?.firebaseId||!Object.prototype.hasOwnProperty.call(iJ,UJ.firebaseId))return UJ;const iX=iJ[UJ.firebaseId];return{...UJ,puntuaciones:{...UJ.puntuaciones||{},[J]:iX}}}));Object.entries(iJ).forEach(([RJ,UJ])=>{b0(RJ,J,UJ)});$J((RJ)=>({...RJ,[H]:TJ}));OJ((RJ)=>({...RJ,[E]:d}));Promise.all([M.ref(`arenaGlobalState/${E}`).set(d),M.ref(`arenaBattleState/${H}`).set(TJ)]).catch((RJ)=>console.error("No se pudo guardar avance de batallas:",RJ))},v0=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((F||[]).map((X)=>{if(!X?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${X.firebaseId}/puntuaciones`).set(kQ())}));S((X)=>X.map((Y)=>({...Y,puntuaciones:kQ()})));$J({});OJ({});await M.ref("arenaBattleState").remove();await M.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(X){console.error("No se pudieron resetear las calificaciones:",X);alert("No se pudo completar el reseteo.")}},I0=async(J,X=G,Y=b)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const H={...h||{}},j=Object.keys(H).filter((_)=>ZZ(_,J));j.forEach((_)=>delete H[_]);await Promise.all(j.map((_)=>M.ref(`arenaBattleState/${_}`).remove()));$J(H);await Promise.all((F||[]).map((_)=>{if(!_?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${_.firebaseId}/puntuaciones/${J}`).set(0)}));S((_)=>_.map((W)=>({...W,puntuaciones:{...W.puntuaciones||{},[J]:0}})));const E=WQ(J,X,Y);$J((_)=>{if(!_?.[E])return _;const W={..._};delete W[E];return W});OJ((_)=>{const W=VJ(J);if(!_?.[W])return _;const $={..._};delete $[W];return $});await M.ref(`arenaBattleState/${E}`).remove();await M.ref(`arenaGlobalState/${VJ(J)}`).remove();alert(`Se reseteó "${J}" (${_Q(X)}) y se limpió su estado de batallas.`)}catch(H){console.error("No se pudo resetear el item:",H);alert("No se pudo resetear ese item.")}},OZ=async(J,X,Y,Z=G,H=b)=>{const j=WQ(J,Z,H),E=h?.[j],_=VJ(J),W=wQ(J,WJ?.[_]||{});if(!E){alert("Esa arena no tiene estado cargado.");return}const $=W?.matchups||{},L=W?.directMatchups||{};if(!Object.keys($).filter((A)=>!!$[A]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const D=IJ(X,Y);if(!$[D]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!L[D]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const A={...L};delete A[D];const N=KQ(A,MQ(F)),k={arenaName:_,orderedIds:MQ(F),directMatchups:N.directMatchups,matchups:N.matchups,victoryGraph:N.victoryGraph,stats:N.stats},y={...E,directMatchups:k.directMatchups,matchups:k.matchups,victoryGraph:k.victoryGraph,stats:k.stats},m=qZ(J,y,k);if(!m){alert("No se pudo recomponer el estado del arena.");return}$J((i)=>({...i,[j]:m}));OJ((i)=>({...i,[_]:k}));await Promise.all([M.ref(`arenaGlobalState/${_}`).set(k),M.ref(`arenaBattleState/${j}`).set(m)]);const p={...h||{},[j]:m},I=jZ(J,p);await Promise.all(Object.entries(I).map(async([i,d])=>{await M.ref(`perfiles/${i}/puntuaciones/${J}`).set(d)}));S((i)=>i.map((d)=>{if(!d?.firebaseId||!Object.prototype.hasOwnProperty.call(I,d.firebaseId))return d;const TJ=I[d.firebaseId];return{...d,puntuaciones:{...d.puntuaciones||{},[J]:TJ}}}));alert("Batalla reseteada correctamente.")}catch(A){console.error("No se pudo resetear la batalla:",A);alert("No se pudo resetear esa batalla.")}},g0=c(()=>{const J=F;if(x==="RANKING")return[...J].sort((X,Y)=>parseFloat(LJ(Y))-parseFloat(LJ(X)));if(x==="CATEGORIAS"&&ZJ)return J.filter((X)=>QX(X).includes(ZJ));return J},[F,x,ZJ]),LZ=c(()=>{return new Set(GJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[GJ]),HX=c(()=>{const J=String(BX||"").trim().toLowerCase(),X=(Z)=>{return[Z?.profesion,Z?.profesiones].flatMap((j)=>{if(Array.isArray(j))return j;if(typeof j==="string")return j.split(",");return[]}).map((j)=>String(j||"").trim()).filter(Boolean).join(" ")},Y=(Z)=>{if(!Z||typeof Z!=="object")return!1;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),String(Z.ciudad||"").trim(),X(Z),String(Z.fechaNacimiento||"").trim(),String(Z.estaturaCm||"").trim()].some(Boolean)||Array.isArray(Z.fotos)&&Z.fotos.some(Boolean)};return[...F||[]].filter((Z)=>{if(!Y(Z))return!1;if(QQ&&Z1(Z))return!1;if(dQ){const j=String(Z?.firebaseId||Z?.id||"").trim();if(!j||!LZ.has(j))return!1}if(!J)return!0;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),X(Z)].join(" ").toLowerCase().includes(J)}).sort((Z,H)=>String(Z?.nombre||"").localeCompare(String(H?.nombre||""),"es",{sensitivity:"base"}))},[F,BX,QQ,dQ,LZ]),s=c(()=>HX.find((J)=>J?.firebaseId===cQ)||null,[HX,cQ]);r(()=>{const J=()=>AQ("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const h0=c(()=>{if(!G)return[];return YZ(F,G)},[F,G]),jX=G&&G!=="GENERAL",EZ=(J,X)=>{if(X==="promedio")return Number(LJ(J))||0;if(X==="nombre")return(J.nombre||"").toLowerCase();if(X==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(X==="edad"){const Y=bJ(J.fechaNacimiento);return typeof Y==="number"?Y:-1}if(X==="Rostro")return rQ(J)||0;if(X==="Cuerpo")return eQ(J)||0;if(X==="Actitud")return JX(J)||0;return Number(J.puntuaciones?.[X]||0)},y0=(J)=>{if(jJ==="promedio")return LJ(J);if(jJ==="Rostro")return rQ(J).toFixed(0);if(jJ==="Cuerpo")return eQ(J).toFixed(0);if(jJ==="Actitud")return JX(J).toFixed(0);if(aJ.includes(jJ))return Number(J.puntuaciones?.[jJ]||0).toFixed(0);return LJ(J)},ZQ=(J,X="asc")=>{if(jJ===J){FX((Y)=>Y==="asc"?"desc":"asc");return}qY(J);FX(X)},m0=(J,X)=>{const Y=dJ[X]||[],Z=new Set,H=new Set,j=Object.entries(h||{});Y.forEach((W)=>{const $=WJ?.[VJ(W)]?.matchups||{};Object.values($).forEach((L)=>{if(!L||typeof L!=="object")return;if(L.winnerId===J&&L.loserId)Z.add(L.loserId);if(L.loserId===J&&L.winnerId)H.add(L.winnerId)})});const E=new Map((F||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),_=(W)=>[...W].map(($)=>E.get($)).filter(Boolean).sort(($,L)=>$.localeCompare(L,"es",{sensitivity:"base"}));return{wins:_(Z),losses:_(H)}},dX=(J,X)=>{const Y=String(X||"").trim(),Z=String(J||"").trim();if(!Y||!Z)return{arenaName:Y,wins:[],losses:[]};const H=WJ?.[VJ(Y)]?.matchups||{},j=new Map((F||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),E=([W,$])=>{if(!$||typeof $!=="object")return null;const L=String($.winnerId||"").trim(),U=String($.loserId||"").trim();if(!L||!U)return null;const D=L===Z;if(!D&&U!==Z)return null;const A=D?U:L;return{pairKey:W,arenaName:Y,profileId:Z,opponentId:A,opponentName:j.get(A)||"Sin nombre",winnerId:L,loserId:U}},_=Object.entries(H).map(E).filter(Boolean).sort((W,$)=>W.opponentName.localeCompare($.opponentName,"es",{sensitivity:"base"}));return{arenaName:Y,wins:_.filter((W)=>W.winnerId===Z),losses:_.filter((W)=>W.loserId===Z)}},u0=(J,X)=>{const Y=dX(J,X),Z=Y.wins.length,H=Y.losses.length,j=Z+H,E=j?Z/j*100:0;return{wins:Z,losses:H,total:j,winRate:E}},nX=[...g0].sort((J,X)=>{const Y=EZ(J,jJ),Z=EZ(X,jJ);let H=0;if(typeof Y==="string"||typeof Z==="string")H=String(Y).localeCompare(String(Z),"es",{sensitivity:"base"});else H=Y-Z;if(H===0)return(J.nombre||"").localeCompare(X.nombre||"","es",{sensitivity:"base"});return yJ==="asc"?H:-H}),pX=!BJ,f0=c(()=>UX?nX:nX.slice(0,10),[nX,UX]);return Q("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[BJ&&Q("aside",{className:"hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative",children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"mb-12 text-center flex-shrink-0",children:[Q("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"CAMPEONAS",icon:"crown",label:"Campeonas"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>Q("button",{onClick:()=>{z(J.id);UQ(null);DQ(null);XJ(null);cJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${x===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[Q(a,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>sY(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[Q(a,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[Q("button",{onClick:()=>IZ((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":BJ?"Replegar menú lateral":"Desplegar menú lateral",title:BJ?"Replegar menú lateral":"Desplegar menú lateral",children:Q(a,{name:BJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${BJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),s&&Q("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${BJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>cJ(""),role:"presentation",children:Q("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[Q("button",{type:"button",onClick:()=>cJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:Q(a,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[Q("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:Q("img",{src:s.fotos?.[0]||"https://via.placeholder.com/500x700",alt:s.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-6",children:[Q("div",{children:[Q("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),Q("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:s.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!s?.isAnonymousGallery&&Q("div",{className:"grid grid-cols-1 gap-4",children:[Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Profesión"},void 0,!1,void 0,this),Q("strong",{children:s.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),Q("strong",{children:`${s.nacionalidad||"No definida"} - ${s.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),Q("strong",{children:`${s.fechaNacimiento||"No informado"} - ${bJ(s.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Estatura"},void 0,!1,void 0,this),Q("strong",{children:s.estaturaCm?`${s.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"pt-2",children:Q("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!s?.isAnonymousGallery&&Q("button",{type:"button",onClick:()=>{gQ({isOpen:!0,profile:s})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{const J=V.current,X=J&&!J.closed?J:window.open("","_blank");V.current=X;QY({targetWindow:X,profileName:s?.nombre||"",profession:s?.profesion||"",photos:[...(s?.galeria?.fotos||[]).map((Y,Z)=>({...e(Y,"image"),sourceTag:"fotos",sourceIndex:Z})),...(s?.galeria?.videos||[]).map((Y,Z)=>({...e(Y,"video"),sourceTag:"videos",sourceIndex:Z}))],editingId:s?.firebaseId||s?.id||"",battlePhotoPrefs:s?.batallaFotosPreferidas||s?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:s?.fotos?.[0]||"",totalGalleryBytes:oX(F)});X?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!s?.isAnonymousGallery&&Q(SJ,{children:[Q("button",{type:"button",onClick:()=>{cJ("");tQ(s)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>mX(s),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),x==="TALLER"&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"space-y-2",children:Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"max-w-2xl",children:Q("input",{id:"tallerSearchInput",type:"text",value:BX,onChange:(J)=>BY(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-3",children:[Q("button",{type:"button",onClick:()=>pZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${QQ?"btn-metal--danger":""}`,children:["Fotos incompletas ",QQ?"(Activo)":""]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>iZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${dQ?"btn-metal--danger":""}`,children:["Fotos Rotas ",dQ?"(Activo)":""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:HX.map((J)=>{const X=JJ(J.profesion),Y=cQ&&cQ===J.firebaseId,Z=$1(J),H=lZ===(J.firebaseId||J.nombre);return Q("button",{type:"button",onClick:()=>{if(lQ.current){lQ.current=!1;return}AQ("");cJ("");tQ(J)},onContextMenu:(j)=>{if(!QQ||!Z.length)return;j.preventDefault();j.stopPropagation();AQ((E)=>E===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!QQ||!Z.length)return;lQ.current=!1;clearTimeout(iQ.current);iQ.current=setTimeout(()=>{lQ.current=!0;AQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(iQ.current)},onTouchMove:()=>{clearTimeout(iQ.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Y?"taller-card--selected":""}`,children:[Q("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:Q("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:X.color,textShadow:`0 0 12px ${X.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),H&&Q("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(j)=>{j.preventDefault();j.stopPropagation();oZ(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[Q("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),Q("ul",{className:"space-y-1 mb-2",children:Z.map((j)=>Q("li",{className:"leading-tight",children:["• ",j]},j,!0,void 0,this))},void 0,!1,void 0,this),Q("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!HX.length&&Q("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),Q(j1,{isOpen:cZ,profile:s,onClose:()=>sZ(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),x==="CAMPEONAS"&&!ZJ&&(()=>{const J=[{id:"18-23",min:18,max:23},{id:"24-29",min:24,max:29},{id:"30-35",min:30,max:35},{id:"36-41",min:36,max:41},{id:"42-60",min:42,max:60}],X=(F||[]).filter(Boolean),Y=($=[])=>[...$].sort((L,U)=>(Number(LJ(U))||0)-(Number(LJ(L))||0)).slice(0,3),Z={nacionalidades:[],profesiones:[],edades:[],items:[],caracteristicas:[]},H=Y(X);[...new Set(X.map(($)=>String($.nacionalidad||"").trim()).filter(Boolean))].forEach(($)=>Z.nacionalidades.push({id:`nac-${$}`,title:`Nacionalidad · ${$}`,top:Y(X.filter((L)=>String(L.nacionalidad||"").trim()===$))}));J.forEach(($)=>Z.edades.push({id:`edad-${$.id}`,title:`Edad · ${$.id}`,top:Y(X.filter((L)=>{const U=bJ(L.fechaNacimiento);return typeof U==="number"&&U>=$.min&&U<=$.max}))}));[...new Set(X.map(($)=>String($.profesion||"").trim()).filter(Boolean))].forEach(($)=>Z.profesiones.push({id:`prof-${$}`,title:`Profesión · ${$}`,top:Y(X.filter((L)=>String(L.profesion||"").trim()===$))}));aJ.forEach(($)=>{const L=[...X].sort((U,D)=>(Number(D?.puntuaciones?.[$])||0)-(Number(U?.puntuaciones?.[$])||0)).slice(0,3);Z.items.push({id:`item-${$}`,title:`Ítem · ${$}`,top:L,scoreType:"item",scoreKey:$})});[["Cuerpo",["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"]],["Rostro",["Rostro","Ojos","Boca","Cabello"]],["Actitud",["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]]].forEach(([$,L])=>{const U=[...X].map((D)=>({...D,__metaScore:L.reduce((T,A)=>T+(Number(D?.puntuaciones?.[A])||0),0)/L.length})).sort((D,T)=>(T.__metaScore||0)-(D.__metaScore||0)).slice(0,3);Z.caracteristicas.push({id:`meta-${$}`,title:$,top:U,scoreType:"meta"})});const _=[{id:"general",title:"Podio de puntuación general",cards:[{id:"general-score",title:"General · Ranking total",top:H}]},{id:"nacionalidades",title:"Podios por nacionalidades",cards:Z.nacionalidades},{id:"profesiones",title:"Podios por profesión",cards:Z.profesiones},{id:"edades",title:"Podios por edades",cards:Z.edades},{id:"items",title:"Podios por ítem",cards:Z.items},{id:"caracteristicas",title:"Podios por características",cards:Z.caracteristicas}],W=($,L=!1)=>Q("article",{className:`champions-podium-card champions-podium-card--3d border rounded-2xl p-5 ${L?"champions-podium-card--general":""}`,children:[Q("div",{className:"champions-podium-card__shine","aria-hidden":"true"},void 0,!1,void 0,this),Q("h3",{className:`text-xs font-black uppercase tracking-[0.18em] mb-3 champions-podium-card__title ${L?"text-[var(--metal-gold)]":"text-cyan-200"}`,children:$.title},void 0,!1,void 0,this),Q("ol",{className:"space-y-2 relative z-[2]",children:$.top.length?$.top.map((U,D)=>{const T=qJ(String(U?.fotos?.[0]||"").trim(),""),A=D===0;return Q("li",{className:`champions-podium-item champions-podium-item--${D+1} flex items-center justify-between gap-3 text-xs`,children:[Q("div",{className:"flex items-center gap-2 min-w-0",children:[A&&T&&Q("div",{className:"flex flex-col items-center shrink-0 -mt-1",title:`Campeona de ${$.title}`,children:[Q("span",{className:"text-[12px] leading-none -mb-0.5 champions-podium-crown","aria-hidden":"true",children:"\uD83D\uDC51"},void 0,!1,void 0,this),Q("img",{src:T,alt:`Miniatura de ${U.nombre||"Campeona"}`,className:`w-8 h-8 rounded-full object-cover border champions-podium-avatar ${L?"border-[var(--metal-gold)] shadow-[0_0_16px_rgba(250,204,21,0.48)]":"border-[var(--metal-gold)] shadow-[0_0_14px_rgba(250,204,21,0.35)]"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:"font-black text-slate-100 truncate champions-podium-name",children:[D+1,". ",U.nombre||"Sin nombre"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:"text-[var(--metal-gold)] font-black shrink-0 champions-podium-score",children:LJ(U)},void 0,!1,void 0,this)]},`${$.id}-${U.firebaseId||U.nombre||D}`,!0,void 0,this)}):Q("li",{className:"text-xs text-slate-400",children:"Sin datos suficientes."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},$.id,!0,void 0,this);return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Campeonas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Podios organizados por secciones"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-7",children:_.map(($)=>Q("section",{className:"space-y-3",children:[Q("h3",{className:"text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85",children:$.title},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:$.cards.map((L)=>W(L,$.id==="general"))},void 0,!1,void 0,this)]},$.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),x==="anonimo"&&!ZJ&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:Q("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),Q("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),Q("div",{className:"mt-8 space-y-5",children:[Q("div",{className:"grid gap-3 sm:grid-cols-3",children:[{key:"imagen",label:"Imagen"},{key:"escena",label:"Escena"},{key:"audio",label:"Audio"}].map((J)=>Q("button",{type:"button",onClick:()=>{hZ(J.key);uQ("");fJ("")},className:`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${uJ===J.key?"text-cyan-100 border-cyan-300/50 bg-cyan-500/35":"text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35"}`,children:J.label},J.key,!1,void 0,this))},void 0,!1,void 0,this),(uJ==="imagen"||uJ==="escena")&&Q("div",{className:"grid gap-4 md:grid-cols-2",children:[Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:TX,onChange:(J)=>{TY(J.target.value);uQ("")},children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:wY,onChange:(J)=>gZ(J.target.value),children:HJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),TX==="url"?Q("input",{placeholder:"URL",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:zY,onChange:(J)=>NY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:uJ==="imagen"?"image/*,.gif":"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>KY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:GY,onChange:(J)=>kY(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:async()=>{await J0(uJ==="escena"?"videos":"fotos")},className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:["Guardar ",uJ]},void 0,!0,void 0,this),SY&&Q("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:SY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),uJ==="audio"&&Q("div",{className:"border-t border-cyan-300/25 pt-4 mt-2 space-y-3",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audio para botón \uD83C\uDFB5"},void 0,!1,void 0,this),Q("input",{placeholder:"Nombre",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:xY,onChange:(J)=>PY(J.target.value)},void 0,!1,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:fQ,onChange:(J)=>bY(J.target.value),children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fQ==="url"?Q("input",{placeholder:"URL",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:vY,onChange:(J)=>IY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:"audio/*",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",onChange:(J)=>hY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:Q0,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar audio en Firebase"},void 0,!1,void 0,this),yY?Q("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:yY},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),x==="EXPLORAR"&&!ZJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((F||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const X=(F||[]).filter((Z)=>String(Z?.profesion||"").trim()===J).length,Y=SQ(J);return Q("div",{onClick:()=>UQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Y.baseColor,"--folder-glow":Y.glowColor},children:[Q("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:L1(J)},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[X," ",X===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ZJ&&Q("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[Q("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":x==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":SQ(ZJ).baseColor},children:[Q("div",{className:"flex items-center gap-3",children:[Q("button",{onClick:()=>UQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:Q("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>sY(x==="CATEGORIAS"?"":ZJ),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:x==="CATEGORIAS"?l.find((J)=>J.firebaseId===ZJ)?.label||"Archivo del Reino":ZJ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(F||[]).filter((J)=>{if(!J)return!1;if(x==="CATEGORIAS")return QX(J).includes(ZJ);return String(J.profesion||"").trim().toLowerCase()===String(ZJ).trim().toLowerCase()}).map((J)=>{const X=Number(typeof LJ==="function"?LJ(J):0)||0,Y=X>=95?"card-score-badge--gold":X>=86?"card-score-badge--diamond":X>=75?"card-score-badge--fire":"",Z=JJ(J.profesion);return Q("div",{onClick:()=>{EQ(null);BY("");cJ(J.firebaseId||"")},onContextMenu:(H)=>K0(H,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":Z.color,"--card-neon-glow":Z.sombra},children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q("img",{src:qJ(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:kJ},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 left-3 z-20",children:[Q("button",{type:"button",onClick:(H)=>{H.stopPropagation();vQ("");FQ(J);EQ((j)=>j===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:Q(a,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),kZ===J.firebaseId&&Q("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:(H)=>H.stopPropagation(),children:[Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{EQ(null);tQ(J)},children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{mX(J);EQ(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(H)=>{H.stopPropagation();gQ({isOpen:!0,profile:J})},className:`card-score-badge ${Y} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[X>=75&&X<=85&&Q("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),Q("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),Q("span",{className:"card-score-badge__value text-lg font-black",children:typeof LJ==="function"?LJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-4 left-4 right-4",children:Q("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[Q("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,Q("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof bJ==="function"?bJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-between items-center mt-1",children:[Q("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),Q("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),EX&&DJ&&Q("div",{ref:R,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${jY.y}px`,left:`${jY.x}px`},children:[Q("button",{type:"button",onClick:w0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:G0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),x==="GALERIA"&&!ZJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${XX} · ${R0}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:[n0.map((J)=>Q("button",{type:"button",onClick:()=>bZ(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${u===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:FZ[J]},J,!1,void 0,this)),Q("button",{type:"button",onClick:()=>wX(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[Q("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",GJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:zQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:f.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:HJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:Z0},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),u!=="PERSONAJE"&&YX&&!nJ?Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:vJ.map((J)=>Q("button",{type:"button",onClick:()=>{DQ(J);XJ(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?Q("img",{src:qJ(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:kJ},void 0,!1,void 0,this):Q("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:Q(a,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[Q("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),Q("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):Q(SJ,{children:[u!=="PERSONAJE"&&YX&&Q("div",{className:"flex items-center gap-3",children:Q("button",{type:"button",onClick:()=>{DQ(null);XJ(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[Q(a,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),u==="PERSONAJE"&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[Q("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),Q("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>W0(J.target.value),children:[Q("option",{value:"",disabled:!0,children:tY.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),tY.map((J)=>Q("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),wJ.length>0?Q("div",{className:"flex flex-wrap gap-2",children:wJ.map((J)=>Q("button",{type:"button",onClick:()=>O0(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,Q(a,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u==="ETIQUETA"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:HJ.map((J)=>Q("button",{onClick:()=>L0(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:OX(J,rJ.includes(J)),children:[J," · ",(gX[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),u==="PERSONAJE"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[Q("button",{onClick:()=>DX("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:OX("INICIAL",xJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),HJ.map((J)=>{return Q("button",{onClick:()=>DX(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:OX(J,xJ===J),children:[J," · ",$0[J]||0]},J,!0,void 0,this)}),Q("button",{onClick:()=>DX("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:OX("100",xJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{type:"button",onClick:()=>eY(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!f.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[Q(a,{name:"play",size:14},void 0,!1,void 0,this),"Play ",nJ?.nombre||XX]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:E0,disabled:EY||!f.length,className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed",title:"Descargar toda la multimedia visible en un ZIP",children:[Q(a,{name:"download",size:14},void 0,!1,void 0,this),EY?"Generando ZIP...":"DESCARGAR TODO"]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>mZ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${zX?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería",children:"\uD83C\uDFB5"},void 0,!1,void 0,this),JQ.length>0&&Q(SJ,{children:[Q("select",{className:"filter-select min-w-[180px]",value:NX,onChange:(J)=>uZ(J.target.value),children:[Q("option",{value:"",children:"Audio principal"},void 0,!1,void 0,this),JQ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-${X}`,!1,void 0,this))]},void 0,!0,void 0,this),Q("select",{className:"filter-select min-w-[180px]",value:MX,onChange:(J)=>fZ(J.target.value),children:[Q("option",{value:"",children:"Audio secundario (opcional)"},void 0,!1,void 0,this),JQ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-b-${X}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[Q("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),Q("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:AX,onChange:(J)=>vZ(Number(J.target.value)),children:[3,5,7,10].map((J)=>Q("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.length===0?Q("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[Q("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:Q(a,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),Q("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:u==="ETIQUETA"&&rJ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q(SJ,{children:[Q("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:hX.map((J,X)=>{const Y=oJ(J.label),Z=SQ(J.profesion);return Q("button",{type:"button",onClick:()=>eY(X),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${Z.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},onMouseEnter:(H)=>{H.currentTarget.style.transform="translateY(-2px) scale(1.01)";H.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${Z.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${Z.glowColor} 52%, transparent)`},onMouseLeave:(H)=>{H.currentTarget.style.transform="translateY(0) scale(1)";H.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},children:Q("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const H=jQ(J.url);if(H)return Q("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[Q("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:H.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return Q("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():Q("img",{src:qJ(J.url,qQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:kJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Y.bg,borderColor:Y.border,color:Y.text,boxShadow:`0 0 10px ${Y.glow}, 0 0 24px color-mix(in srgb, ${Y.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:Q("div",{className:"flex items-end justify-between gap-3",children:[Q("div",{className:"min-w-0 flex-1",children:[Q("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?Q("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),H0&&Q("div",{className:"flex justify-center mt-8",children:Q("button",{type:"button",onClick:()=>LY((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",hX.length,"/",f.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("audio",{ref:BQ,loop:!0,preload:"none"},void 0,!1,void 0,this),Q("audio",{ref:TQ,loop:!0,preload:"none"},void 0,!1,void 0,this),w&&Q("div",{ref:nQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:BJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:JZ,children:[Q("button",{type:"button",onClick:JZ,className:`btn-metal btn-metal--danger absolute ${KJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:Q("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${KJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!KJ&&Q("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[Q("div",{children:[Q("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:w.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[w.profesion,w.nacionalidad?` · ${w.nacionalidad}`:""]},void 0,!0,void 0,this),w.autor?Q("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",w.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"flex items-center gap-3",children:[f.length>1&&Q(SJ,{children:[Q("button",{type:"button",onClick:()=>RQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${MJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>RX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${PJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":PJ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:w.type==="video"?"VIDEO":w.isGif?"GIF":"IMG"},void 0,!1,void 0,this),Q("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:oJ(w.label).bg,borderColor:oJ(w.label).border,color:oJ(w.label).text,boxShadow:`0 0 20px ${oJ(w.label).glow}`},children:w.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${KJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[w.type==="video"?(()=>{const J=jQ(w.url);if(J)return Q("iframe",{ref:SX,src:J.src,title:`${w.nombre} video`,className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return Q("video",{ref:SX,src:w.url,controls:!0,playsInline:!0,muted:yX,autoPlay:MJ,onEnded:()=>{if(MJ&&f.length>1)NQ()},onError:()=>{if(f.length>1)NQ()},className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():Q("img",{src:qJ(w.url,qQ),alt:`${w.nombre} - ${w.label||"galería"}`,ref:SX,className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{kJ(J);if(f.length>1)NQ()}},void 0,!1,void 0,this),f.length>1&&Q(SJ,{children:KJ?Q("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]",children:[Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();RX((X)=>!X)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${PJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":PJ?"Aleatorio activado":"Aleatorio desactivado",children:PJ?"Random On":"Random Off"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();RQ((X)=>!X)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${MJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir",children:MJ?"Pause":"Play"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();NQ()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();NQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!KJ&&Q("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[AJ+1," de ",f.length," archivos visibles"]},void 0,!0,void 0,this),Q("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[UY?Q(SJ,{children:[Q("input",{type:"url",value:DY,onChange:(J)=>mQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),Q("select",{value:VY,onChange:(J)=>yQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[Q("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),HJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:F0,disabled:RY,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:RY?"Guardando...":"Guardar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{yQ(w?.label||"");mQ(w?.url||"");mJ("");eJ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:()=>eJ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[Q("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),Q("span",{children:w?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),UY&&CY&&Q("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:CY},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),KX&&Q("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:BJ?{left:"18rem"}:void 0,onClick:()=>wX(!1),children:Q("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 mb-5",children:[Q("div",{children:[Q("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[GJ.length," enlace",GJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>wX(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:Q("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!aY.length?Q("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:Q("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):aY.map((J)=>Q("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[Q("div",{className:"mb-4",children:[Q("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-3",children:J.fotos.map((X)=>{const Y=!!dZ[X.id],Z=!!nZ[X.id],H=kX[X.id]??X.url;return Q("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[Q("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:Q("img",{src:qQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-2 min-w-0",children:[Q("div",{className:"flex flex-wrap items-center gap-2",children:[Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",X.label||"Sin etiqueta"]},void 0,!0,void 0,this),Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:X.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"url",value:H,onChange:(j)=>U0(X.id,j.target.value),placeholder:"https://...",readOnly:!Z,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!Z?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[Q("button",{type:"button",onClick:()=>V0(X),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>QZ(X.id,!0),disabled:Y,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>D0(X),disabled:Y,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>C0(X),disabled:Y,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),x==="BATALLAS"&&!ZJ&&!v&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col gap-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:v0,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),Q("button",{onClick:()=>MZ((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xQ&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[Q("select",{value:XY,onChange:(J)=>KZ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:rX.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>I0(XY,G,b),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!G,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{children:[Q("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!G?"Paso 1: elegí un modo de enfrentamiento":jX&&!b?`Paso 2: elegí una opción de ${_Q(G)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${_Q(G)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!G&&Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:eX.map((J)=>Q("button",{onClick:()=>{B(J.id);QJ(J.id==="GENERAL"?"all":"");o(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),G&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",_Q(G)]},void 0,!0,void 0,this),Q("button",{onClick:()=>{B(null);QJ("");o(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),jX&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",_Q(G)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:h0.map((J)=>Q("button",{onClick:()=>{QJ(J.key);o(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${b===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",Q("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),jX&&!b&&Q("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[rX.map((J)=>{const X=WQ(J,G,b),Y=Boolean(h?.[X]?.isFinished);return Q("button",{disabled:jX&&!b,onClick:()=>{o(J);if(!h[X])_Z(J,G,b)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Y?"battle-mode-card--completed":""}`,children:[Q("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Y?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Y&&Q("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),x==="BATALLAS"&&v&&(()=>{const J=WQ(v,G,b),X=h[J],Y=F.find((E)=>E.firebaseId===X?.championId),Z=F.find((E)=>E.firebaseId===X?.challengerId),H=Y?HZ(v,Y.firebaseId):null,j=Z?HZ(v,Z.firebaseId):null;return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:()=>o(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),Q("button",{onClick:()=>{o(null);B(null);QJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),Q("button",{onClick:()=>GZ((E)=>!E),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wZ&&Q("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const E=Object.keys(X?.matchups||{}).filter((_)=>!!X?.matchups?.[_]);if(!X||!E.length)return Q("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return Q("div",{className:"space-y-2",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),E.map((_)=>{const[W,$]=_.split("__"),L=F.find((A)=>A.firebaseId===W),U=F.find((A)=>A.firebaseId===$),D=L?.nombre||W,T=U?.nombre||$;return Q("button",{onClick:()=>OZ(v,W,$,G,b),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:Q("span",{className:"text-xs text-white font-semibold",children:[D," vs ",T]},void 0,!0,void 0,this)},_,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),Q("div",{className:"min-w-0",children:[Q("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:v},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",_Q(G)]},void 0,!0,void 0,this),X?.activeGroupLabel&&Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:X.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!X&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),Q("button",{onClick:()=>_Z(v,G,b),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&X.isFinished&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),Q("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Y&&Z&&!X.isFinished&&Q("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[Q("button",{onClick:()=>WZ(v,Y.firebaseId,G,b),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":SQ(Y.profesion).baseColor},children:[Q("img",{src:TZ(Y,v),alt:Y.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:kJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Y.nombre},void 0,!1,void 0,this),v==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",XZ(Y)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col items-center justify-center text-center",children:[Q("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),v==="Estatura"&&Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{onClick:()=>WZ(v,Z.firebaseId,G,b),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":SQ(Z.profesion).baseColor},children:[Q("img",{src:TZ(Z,v),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:kJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),v==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",XZ(Z)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",j?.wins||0," · Batallas: ",j?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",j?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),x==="RANKING"&&!ZJ&&Q("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[Q("div",{className:"ranking-table-toolbar",children:Q("button",{type:"button",onClick:()=>PZ((J)=>!J),className:`ranking-toggle-totality ${UX?"is-active":"is-inactive"}`,children:"Ver totalidad"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"ranking-table-scroll",children:Q("table",{className:`w-full ${pX?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[Q("thead",{className:"theme-surface-soft",children:Q("tr",{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:Q("button",{type:"button",onClick:()=>ZQ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",jJ==="nombre"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>ZQ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",jJ==="Rostro"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>ZQ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",jJ==="Cuerpo"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>ZQ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",jJ==="Actitud"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),pX&&Q(SJ,{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>ZQ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",jJ==="nacionalidad"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>ZQ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",jJ==="edad"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("th",{className:"px-8 py-6 text-right",children:Q("div",{className:"flex flex-col items-end gap-1",children:[Q("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),Q("select",{value:jJ,onChange:(J)=>{qY(J.target.value);FX("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[Q("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),Q("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[Q("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:aJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("tbody",{children:f0.map((J,X)=>Q("tr",{onClick:()=>tQ(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${X===0?"podium-1":X===1?"podium-2":X===2?"podium-3":"hover:bg-white/5"}`,children:[Q("td",{className:"px-8 py-5",children:Q("span",{className:`font-black italic rock-carved-text ${X===0?"text-gold text-4xl":X===1?"text-silver text-3xl":X===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",X+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-8 py-5",children:Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:JJ(J.profesion).color,boxShadow:`0 0 10px ${JJ(J.profesion).sombra}`},children:Q("img",{src:qJ(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:kJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();VQ({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:rQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();VQ({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:eQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();VQ({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:JX(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),pX&&Q(SJ,{children:[Q("td",{className:"px-4 py-5 text-center",children:[Q("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),Q("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[bJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-8 py-5 text-right",children:Q("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${X===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":X===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":X===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:Q("span",{className:`font-black leading-none ${X===0?"text-gold":X===1?"text-silver":X===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:y0(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),CJ.isOpen&&CJ.profile&&CJ.category&&(()=>{const J=m0(CJ.profile.firebaseId,CJ.category),X=dJ[CJ.category]||[];return Q("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${BJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{VQ({isOpen:!1,profile:null,category:null});OQ(null)},children:Q("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Y)=>Y.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[CJ.profile.nombre," · ",CJ.category]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>{VQ({isOpen:!1,profile:null,category:null});OQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"mb-4",children:[Q("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:X.map((Y)=>(()=>{const Z=u0(CJ.profile.firebaseId,Y);return Q("button",{type:"button",onClick:()=>{const H=dX(CJ.profile.firebaseId,Y);OQ(H)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left",children:[Q("p",{className:"leading-none",children:Y},void 0,!1,void 0,this),Q("p",{className:"mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case",children:[Z.wins,"/",Z.total," · ",Z.winRate.toFixed(0),"% victorias"]},void 0,!0,void 0,this)]},`breakdown-item-${Y}`,!0,void 0,this)})())},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!PQ?.arenaName&&Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Q("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?Q("ul",{className:"space-y-2",children:J.wins.map((Y,Z)=>Q("li",{className:"text-sm text-emerald-200 font-semibold",children:Y},`win-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?Q("ul",{className:"space-y-2",children:J.losses.map((Y,Z)=>Q("li",{className:"text-sm text-rose-200 font-semibold",children:Y},`loss-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),PQ?.arenaName&&Q("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[Q("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",PQ.arenaName]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>OQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Y)=>{const Z=Y==="wins",H=PQ[Y]||[];return Q("div",{className:`rounded-xl border p-3 min-h-36 ${Z?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[Q("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${Z?"text-emerald-300":"text-rose-300"}`,children:Z?"Ganadas":"Perdidas"},void 0,!1,void 0,this),H.length?Q("ul",{className:"space-y-2",children:H.map((j,E)=>Q("li",{className:"flex items-center justify-between gap-2",children:[Q("span",{className:`text-sm font-semibold ${Z?"text-emerald-100":"text-rose-100"}`,children:j.opponentName},void 0,!1,void 0,this),Q("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await OZ(j.arenaName,j.profileId,j.opponentId);const W=dX(CJ.profile.firebaseId,j.arenaName);OQ(W)}catch(W){console.error("No se pudo eliminar la batalla del desglose:",W);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Y}-${j.pairKey}-${E}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:`text-xs ${Z?"text-emerald-200/70":"text-rose-200/70"}`,children:Z?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Y}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),VX.isOpen&&VX.profile&&(()=>{const J=VX.profile,X=vX(J),Y=Object.entries(dJ);return Q("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>gQ({isOpen:!1,profile:null}),children:Q("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:(Z)=>Z.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();gQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:aJ.map((Z)=>Q("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[Z,": ",Number(X[Z]||0).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Y.map(([Z,H])=>Q("button",{type:"button",onClick:(j)=>j.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[Z,": ",pY(J,Z).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(Z)=>Z.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",LJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),x==="CATEGORIAS"&&!ZJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex justify-between items-end",children:[Q("div",{children:Q("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>{bX();bQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),l.length===0?Q("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:Q("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:l.map((J)=>Q("div",{onClick:()=>UQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[Q("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[Q("button",{onClick:(X)=>{X.stopPropagation();_J({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});bQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(a,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:(X)=>{X.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))T0(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(a,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute inset-0",children:[Q("img",{src:qJ(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:kJ},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[Q("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[F.filter((X)=>QX(X).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),YY&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{onClick:()=>hJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:Q(a,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:A0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 gap-16",children:Q("div",{className:"space-y-8",children:[Q("div",{className:"flex flex-col items-center gap-6",children:[Q("div",{className:"flex items-center gap-4 self-start",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:Q(a,{name:YJ?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:YJ?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),YJ&&Q("button",{type:"button",onClick:()=>{H1({...P,firebaseId:YJ})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[Q(a,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:P.fotos.length>0&&P.fotos[0]!==""?Q("img",{src:qJ(P.fotos[0],qQ),className:"w-full h-full object-cover",alt:"Preview",onError:kJ},void 0,!1,void 0,this):Q("div",{className:"text-center p-4",children:[Q(a,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[Q("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),aQ.completed.length>0?Q("ul",{className:"mt-3 space-y-1",children:aQ.completed.map((J)=>Q("li",{className:"text-xs text-emerald-100/90",children:[Q("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),aQ.missing.length>0?Q("ul",{className:"mt-3 space-y-1",children:aQ.missing.map((J)=>Q("li",{className:"text-xs text-amber-100/90",children:Q("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:P.nombre,onChange:(J)=>t({...P,nombre:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),Q("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:P.fotos[0]||"",onChange:(J)=>t((X)=>nY(X,J.target.value))},void 0,!1,void 0,this),Q("input",{type:"file",accept:"image/*,.gif",onChange:rZ,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),Q("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.fechaNacimiento,onChange:(J)=>t({...P,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),Q("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.estaturaCm,onChange:(J)=>t({...P,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.nacionalidad,onChange:(J)=>t({...P,nacionalidad:J.target.value})},void 0,!1,void 0,this),Q("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.ciudad,onChange:(J)=>t({...P,ciudad:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1 group",children:[Q("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),Q("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:P.profesion,onChange:(J)=>t({...P,profesion:J.target.value}),children:[Q("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),Q("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),Q("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),Q("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),Q("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),Q("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),Q("option",{value:"Bailarina y Atleta",className:"theme-surface-card",children:"\uD83D\uDC83\uD83C\uDFCB️‍♀️ Bailarina y Atleta"},void 0,!1,void 0,this),Q("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:Q(a,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex gap-4",children:[YJ&&Q("button",{type:"button",onClick:z0,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:Q(a,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs",children:YJ?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),SZ&&Q("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:uX,children:Q("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"space-y-3",children:[Q("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),Q("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",Q("span",{className:"font-black text-white",children:DJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),HY&&Q("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:HY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-end gap-3",children:[Q("button",{type:"button",onClick:uX,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:M0,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),ZY&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{type:"button",onClick:()=>{bX();bQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:Q(a,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:B0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[Q("div",{className:"space-y-8",children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:Q(a,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:K.label,onChange:(J)=>_J({...K,label:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"w-full",children:Q("div",{className:"space-y-1 w-full",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),Q("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:K.coverImg,onChange:(J)=>_J({...K,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-6",children:[Q("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[Q(a,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),Q("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.nacionalidades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>_J({...K,reglas:{...K.reglas,nacionalidades:K.reglas.nacionalidades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.nacionalidades.includes(J.target.value))_J({...K,reglas:{...K.reglas,nacionalidades:[...K.reglas.nacionalidades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),X0.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.ciudades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>_J({...K,reglas:{...K.reglas,ciudades:K.reglas.ciudades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.ciudades.includes(J.target.value))_J({...K,reglas:{...K.reglas,ciudades:[...K.reglas.ciudades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),Y0.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.profesiones.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>_J({...K,reglas:{...K.reglas,profesiones:K.reglas.profesiones.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.profesiones.includes(J.target.value))_J({...K,reglas:{...K.reglas,profesiones:[...K.reglas.profesiones,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(JY).map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMin,onChange:(J)=>_J({...K,reglas:{...K.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMax,onChange:(J)=>_J({...K,reglas:{...K.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.caracteristica,onChange:(J)=>_J({...K,reglas:{...K.reglas,caracteristica:J.target.value}}),children:aJ.map((J)=>Q("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.operador,onChange:(J)=>_J({...K,reglas:{...K.reglas,operador:J.target.value}}),children:[Q("option",{children:"Superior a"},void 0,!1,void 0,this),Q("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:K.reglas.umbral,onChange:(J)=>_J({...K,reglas:{...K.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},F1=ReactDOM.createRoot(document.getElementById("root"));F1.render(Q(E1,{},void 0,!1,void 0,this));