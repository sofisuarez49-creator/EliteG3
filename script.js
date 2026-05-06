        // Configuración de tu proyecto de Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",
            authDomain: "eliteg3-1650f.firebaseapp.com",
            databaseURL: "https://eliteg3-1650f-default-rtdb.firebaseio.com/",
            projectId: "eliteg3-1650f",
            storageBucket: "eliteg3-1650f.firebasestorage.app",
            messagingSenderId: "351711372153",
            appId: "1:351711372153:web:60ce4742396e37974f85a8",
            measurementId: "G-HGYPLEY6DJ",
        };

        // Inicializar Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const db = firebase.database();
        const { useState, useEffect, useMemo, useRef } = React;

        const GALLERY_LABELS = ['C', 'P', 'B', 'N', 'S', 'E', 'X', 'R'];
        const GENERAL_GALLERY_HIDDEN_LABELS = ['R'];
        const ANON_GALLERY_NODE_PATH = 'anonimo/galeria';
        const ANON_PROFILE_ID = '__anonimo_gallery__';
        const GALLERY_VIEW_MODES = ['PERSONAJE', 'ETIQUETA', 'GENERAL'];
        const GALLERY_VIEW_MODE_LABELS = {
            PERSONAJE: 'Personaje',
            ETIQUETA: 'Etiqueta',
            GENERAL: 'General'
        };
        const BATTLE_PHOTO_SLOTS = [
            { id: 'perfil', label: 'Perfil', labels: [] },
            { id: 'colaPiernas', label: 'Cola/Piernas', labels: ['C'] },
            { id: 'pechos', label: 'Pechos', labels: ['P'] },
            { id: 'cuerpoCintura', label: 'Cintura/Cuerpo', labels: ['N', 'B'] },
            { id: 'sensualidad', label: 'Sensualidad', labels: ['E', 'S'] }
        ];
        const BATTLE_ARENA_TO_SLOT = {
            perfil: 'perfil',
            pecho: 'pechos',
            pechos: 'pechos',
            cola: 'colaPiernas',
            piernas: 'colaPiernas',
            cuerpo: 'cuerpoCintura',
            cintura: 'cuerpoCintura',
            sensualidad: 'sensualidad'
        };
        const getDefaultBattlePhotoPreferences = () => (
            BATTLE_PHOTO_SLOTS.reduce((acc, slot) => {
                acc[slot.id] = '';
                return acc;
            }, {})
        );
        const sanitizeBattlePhotoPreferences = (prefs = {}) => {
            const defaults = getDefaultBattlePhotoPreferences();
            const candidate = prefs && typeof prefs === 'object' ? prefs : {};
            return Object.keys(defaults).reduce((acc, key) => {
                acc[key] = typeof candidate[key] === 'string' ? candidate[key].trim() : '';
                return acc;
            }, { ...defaults });
        };
        const getBattleSlotById = (slotId = '') => BATTLE_PHOTO_SLOTS.find((slot) => slot.id === slotId);
        const getBattleSlotForArena = (arenaName = '') => BATTLE_ARENA_TO_SLOT[(arenaName || '').trim().toLowerCase()] || '';
        const GALLERY_LABEL_STYLES = {
            C: {
                bg: 'linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))',
                border: 'rgba(103,232,249,0.95)',
                glow: 'rgba(34,211,238,0.8)',
                text: '#ecfeff'
            },
            P: {
                bg: 'linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))',
                border: 'rgba(251,207,232,0.95)',
                glow: 'rgba(244,114,182,0.78)',
                text: '#fff1f2'
            },
            B: {
                bg: 'linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))',
                border: 'rgba(253,224,71,0.98)',
                glow: 'rgba(251,191,36,0.82)',
                text: '#fffbea'
            },
            N: {
                bg: 'linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))',
                border: 'rgba(217,249,157,0.95)',
                glow: 'rgba(163,230,53,0.78)',
                text: '#f7fee7'
            },
            S: {
                bg: 'linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))',
                border: 'rgba(233,213,255,0.95)',
                glow: 'rgba(192,132,252,0.8)',
                text: '#faf5ff'
            },
            E: {
                bg: 'linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))',
                border: 'rgba(254,202,202,0.95)',
                glow: 'rgba(248,113,113,0.8)',
                text: '#fef2f2'
            },
            X: {
                bg: 'linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))',
                border: 'rgba(254,226,226,1)',
                glow: 'rgba(239,68,68,0.95)',
                text: '#fff7f7'
            },
            R: {
                bg: 'linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))',
                border: 'rgba(226,232,240,0.95)',
                glow: 'rgba(148,163,184,0.82)',
                text: '#f8fafc'
            },
            DEFAULT: {
                bg: 'linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))',
                border: 'rgba(148,163,184,0.85)',
                glow: 'rgba(148,163,184,0.45)',
                text: '#f8fafc'
            }
        };
        const clampIndex = (index, total) => {
            if (!total) return 0;
            return (index + total) % total;
        };
        const getNextPlayableIndex = (currentIndex, items, useRandom = false) => {
            const total = Array.isArray(items) ? items.length : 0;
            if (!total) return null;
            if (total === 1) return 0;

            if (useRandom) {
                const candidateIndexes = items
                    .map((item, idx) => ({ item, idx }))
                    .filter(({ item, idx }) => idx !== currentIndex && item && item.url)
                    .map(({ idx }) => idx);
                if (!candidateIndexes.length) return clampIndex((currentIndex ?? 0) + 1, total);
                return candidateIndexes[Math.floor(Math.random() * candidateIndexes.length)];
            }

            return clampIndex((currentIndex ?? 0) + 1, total);
        };
        const getGalleryLabelStyle = (label) => GALLERY_LABEL_STYLES[label] || GALLERY_LABEL_STYLES.DEFAULT;
        const getGalleryFilterButtonStyle = (label, isActive = false) => {
            const styleForLabel = label === 'INICIAL'
                ? GALLERY_LABEL_STYLES.DEFAULT
                : label === '100'
                    ? GALLERY_LABEL_STYLES.B
                    : getGalleryLabelStyle(label);
            return {
                '--btn-neon-color': styleForLabel.glow,
                borderColor: styleForLabel.border,
                color: styleForLabel.text,
                boxShadow: isActive
                    ? `inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${styleForLabel.border}, 0 0 20px ${styleForLabel.glow}`
                    : `inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${styleForLabel.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${styleForLabel.glow} 60%, transparent)`,
                textShadow: `0 0 8px color-mix(in srgb, ${styleForLabel.glow} 70%, transparent)`,
                filter: isActive ? 'brightness(1.14)' : 'brightness(1)'
            };
        };
        const VIDEO_FILE_REGEX = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;
        const AUDIO_FILE_REGEX = /\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i;
        const GIF_FILE_REGEX = /\.gif(\?.*)?$/i;
        const YOUTUBE_REGEX = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i;
        const VIMEO_REGEX = /vimeo\.com\/(?:video\/)?(\d+)/i;
        const getVideoEmbedInfo = (url) => {
            const normalizedUrl = (url || '').trim();
            if (!normalizedUrl) return null;

            const youtubeMatch = normalizedUrl.match(YOUTUBE_REGEX);
            if (youtubeMatch) {
                return {
                    provider: 'youtube',
                    src: `https://www.youtube.com/embed/${youtubeMatch[1]}`,
                    title: 'Video de YouTube'
                };
            }

            const vimeoMatch = normalizedUrl.match(VIMEO_REGEX);
            if (vimeoMatch) {
                return {
                    provider: 'vimeo',
                    src: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
                    title: 'Video de Vimeo'
                };
            }

            return null;
        };
        const BLOCKED_MEDIA_HOST_PATTERNS = ['eporner.com'];
        const isBlockedMediaUrl = (rawUrl = '') => {
            const normalized = String(rawUrl || '').trim();
            if (!normalized || normalized.startsWith('data:') || normalized.startsWith('blob:')) return false;
            try {
                const parsed = new URL(normalized);
                const host = parsed.hostname.toLowerCase();
                return BLOCKED_MEDIA_HOST_PATTERNS.some((pattern) => host === pattern || host.endsWith(`.${pattern}`));
            } catch {
                return false;
            }
        };
        const getSafeImageSrc = (rawUrl = '', fallback = '') => {
            const normalized = String(rawUrl || '').trim();
            if (!normalized || isBlockedMediaUrl(normalized)) return fallback;
            return normalized;
        };
        const detectGalleryItemType = (url = '', explicitType = '') => {
            if (explicitType === 'video' || explicitType === 'image') return explicitType;
            const normalizedUrl = (url || '').trim();
            if (VIDEO_FILE_REGEX.test(normalizedUrl) || getVideoEmbedInfo(normalizedUrl)) {
                return 'video';
            }
            return 'image';
        };
        const normalizeGalleryAuthor = (author = '') => {
            return typeof author === 'string' ? author.trim() : '';
        };
        const normalizeGalleryItem = (item, fallbackType = '') => {
            if (typeof item === 'string') {
                return {
                    url: getSafeImageSrc(item.trim(), ''),
                    label: '',
                    type: detectGalleryItemType(item, fallbackType),
                    autor: ''
                };
            }
            if (item && typeof item === 'object') {
                const url = getSafeImageSrc((item.url || '').trim(), '');
                return {
                    url,
                    label: GALLERY_LABELS.includes(item.label) ? item.label : '',
                    type: detectGalleryItemType(url, item.type || fallbackType),
                    autor: normalizeGalleryAuthor(item.autor)
                };
            }
            return { url: '', label: '', type: detectGalleryItemType('', fallbackType), autor: '' };
        };
        const getGalleryItemUrl = (item) => normalizeGalleryItem(item).url;
        const getGalleryItemLabel = (item) => normalizeGalleryItem(item).label;
        const getGalleryItemType = (item) => normalizeGalleryItem(item).type;
        const getSafeGalleryArray = (gallery, key, fallbackType = 'image') => (
            Array.isArray(gallery?.[key])
                ? gallery[key].map((item) => normalizeGalleryItem(item, fallbackType)).filter((item) => item.url)
                : []
        );
        const mapAnonymousGalleryToProfile = (gallery = {}) => ({
            firebaseId: ANON_PROFILE_ID,
            nombre: 'Anónimo',
            nacionalidad: '',
            ciudad: '',
            profesion: 'Galería',
            fechaNacimiento: '',
            estaturaCm: '',
            fotos: [],
            galeria: {
                fotos: getSafeGalleryArray(gallery, 'fotos', 'image'),
                gifs: getSafeGalleryArray(gallery, 'gifs', 'image'),
                videos: getSafeGalleryArray(gallery, 'videos', 'video')
            },
            batallaFotosPreferidas: getDefaultBattlePhotoPreferences(),
            puntuaciones: createZeroScores(),
            isAnonymousGallery: true
        });
        const getGallerySourceCharacterId = (profile = {}) => {
            if (profile?.isAnonymousGallery || profile?.firebaseId === ANON_PROFILE_ID) return 'anonimo';
            return profile?.firebaseId || '';
        };

        const hasAllMainPhotosAssigned = (profile = {}) => {
            const profilePhotoUrl = getSafeImageSrc(String(profile?.fotos?.[0] || '').trim(), '');
            const prefs = sanitizeBattlePhotoPreferences(profile?.batallaFotosPreferidas || profile?.galeria?.battlePhotoPreferences || {});
            if (!profilePhotoUrl) return false;
            return BATTLE_PHOTO_SLOTS
                .filter((slot) => slot.id !== 'perfil')
                .every((slot) => Boolean(String(prefs?.[slot.id] || '').trim()));
        };
        const getMissingMainPhotoLabels = (profile = {}) => {
            const missingLabels = [];
            const profilePhotoUrl = getSafeImageSrc(String(profile?.fotos?.[0] || '').trim(), '');
            const prefs = sanitizeBattlePhotoPreferences(profile?.batallaFotosPreferidas || profile?.galeria?.battlePhotoPreferences || {});

            if (!profilePhotoUrl) {
                missingLabels.push('Perfil');
            }

            BATTLE_PHOTO_SLOTS
                .filter((slot) => slot.id !== 'perfil')
                .forEach((slot) => {
                    if (!String(prefs?.[slot.id] || '').trim()) {
                        missingLabels.push(slot.label);
                    }
                });

            return missingLabels;
        };
        const openMultimediaTab = (profile = null) => {
            if (!profile) return;
            const tab = window.open('', '_blank');
            if (!tab) return;
            const profileId = profile?.firebaseId || profile?.id || '';
            const galleryItems = Array.isArray(profile?.galeria?.fotos)
                ? profile.galeria.fotos
                    .map((item) => normalizeGalleryItem(item, 'image'))
                    .filter((item) => item.url)
                    .map((item, sourceIndex) => ({
                        ...item,
                        sourceTag: 'fotos',
                        sourceIndex
                    }))
                : [];
            const galleryPhotoItems = galleryItems.filter((item) => item.type === 'image' && item.sourceTag === 'fotos');
            const safeBattlePhotoPrefs = sanitizeBattlePhotoPreferences(profile?.batallaFotosPreferidas || profile?.galeria?.battlePhotoPreferences || {});
            const normalizedProfilePhotoUrl = getSafeImageSrc(String(profile?.fotos?.[0] || profile?.foto || '').trim(), '');
            const galleryImageByUrl = galleryItems
                .filter((item) => item.type === 'image' && item.url)
                .reduce((acc, item) => {
                    acc[item.url] = item;
                    return acc;
                }, {});
            const galleryHtml = galleryItems.length
                ? galleryItems.map((item, index) => `
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${item.url}"
                        data-label="${item.label || ''}"
                        data-index="${item.sourceIndex}"
                        data-tag="${item.sourceTag}"
                        data-media-type="${item.type || 'image'}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${item.url}" alt="Multimedia ${index + 1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${item.label || 'SIN ETIQUETA'}</span>
                        </div>
                    </button>
                `).join('')
                : '<p class="text-slate-300">Sin contenido en galería.</p>';
            const brokenGalleryHtml = galleryPhotoItems.length
                ? galleryPhotoItems.map((item, index) => `
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${item.url}"
                        data-label="${item.label || ''}"
                        data-index="${item.sourceIndex}"
                        data-tag="${item.sourceTag}"
                        data-media-type="${item.type || 'image'}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${item.url}" alt="Imagen rota ${index + 1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${item.label || 'SIN ETIQUETA'}</span>
                        </div>
                    </button>
                `).join('')
                : '<p class="text-slate-300">Sin imágenes en galería.</p>';
            const slotHtml = BATTLE_PHOTO_SLOTS.map((slot) => {
                const isProfileSlot = slot.id === 'perfil';
                const assignedUrl = isProfileSlot ? normalizedProfilePhotoUrl : (safeBattlePhotoPrefs[slot.id] || '');
                const assignedPhoto = assignedUrl
                    ? (isProfileSlot
                        ? { url: assignedUrl }
                        : (galleryImageByUrl[assignedUrl] || { url: assignedUrl, label: '', sourceIndex: -1 }))
                    : null;
                const isAssigned = Boolean(assignedUrl);
                return `
                    <div class="multimedia-slot-card ${isAssigned ? 'is-assigned' : 'is-missing'}" data-slot-id="${slot.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${slot.label}</span>
                            <span class="multimedia-slot-state">${isAssigned ? 'VERDE' : 'ROJO'}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${isAssigned
                                ? `<img src="${assignedPhoto.url}" alt="${slot.label}" loading="lazy" />`
                                : '<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!isProfileSlot ? `<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${slot.id}">DESIGNAR FOTO</button>` : ''}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${slot.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `;
            }).join('');

            tab.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${profile?.nombre || 'Personaje'}</title>
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
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${profile?.nombre || 'Personaje'}</p>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-6 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">Galería</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${galleryHtml}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${slotHtml}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${brokenGalleryHtml}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(profileId)};
                            const validLabels = ${JSON.stringify(GALLERY_LABELS)};
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
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${profileId}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                return true;
                            };
                            const syncBrokenEmptyState = () => {
                                const grid = document.getElementById('brokenGalleryGrid');
                                const empty = document.getElementById('brokenGalleryEmpty');
                                if (!grid || !empty) return;
                                const visibleBrokenCount = Array.from(grid.querySelectorAll('[data-broken-card=\"true\"]'))
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
                            const slotConfigById = ${JSON.stringify(BATTLE_PHOTO_SLOTS.reduce((acc, slot) => {
                acc[slot.id] = slot;
                return acc;
            }, {}))};
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
            `);
            tab.document.close();
        };
        const MultimediaModal = ({
            isOpen = false,
            profile = null,
            onClose = () => {}
        }) => {
            const [isGalleryOpen, setIsGalleryOpen] = useState(true);
            const [isTopOpen, setIsTopOpen] = useState(true);

            useEffect(() => {
                if (!isOpen) return;
                setIsGalleryOpen(true);
                setIsTopOpen(true);
            }, [isOpen, profile?.firebaseId]);

            if (!isOpen || !profile) return null;

            const galleryItems = Array.isArray(profile?.galeria?.fotos)
                ? profile.galeria.fotos
                    .map((item) => normalizeGalleryItem(item, 'image'))
                    .filter((item) => item.url)
                : [];
            const topScores = Object.entries(profile?.puntuaciones || {})
                .map(([label, value]) => ({ label, value: Number(value) || 0 }))
                .sort((a, b) => b.value - a.value)
                .slice(0, 5);

            return (
                <div
                    className="fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8"
                    onClick={onClose}
                    role="presentation"
                >
                    <section
                        className="gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Multimedia del personaje"
                    >
                        <button type="button" onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100">✕</button>
                        <h2 className="font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide">Multimedia</h2>
                        <p className="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">{profile?.nombre || 'Personaje'}</p>

                        <div className="mt-6 space-y-4">
                            <article className="surface-panel rounded-2xl border border-cyan-200/20">
                                <button type="button" onClick={() => setIsGalleryOpen((prev) => !prev)} className="w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between">
                                    <span>Galería</span><span>{isGalleryOpen ? '−' : '+'}</span>
                                </button>
                                {isGalleryOpen && (
                                    <div className="px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {galleryItems.length ? galleryItems.map((item, idx) => (
                                            <div key={`${item.url}-${idx}`} className="rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40">
                                                <img src={item.url} alt={`Multimedia ${idx + 1}`} className="w-full h-36 object-cover" loading="lazy" />
                                            </div>
                                        )) : <p className="text-sm text-slate-300 col-span-full">Sin contenido en galería.</p>}
                                    </div>
                                )}
                            </article>

                            <article className="surface-panel rounded-2xl border border-cyan-200/20">
                                <button type="button" onClick={() => setIsTopOpen((prev) => !prev)} className="w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between">
                                    <span>5 Principales</span><span>{isTopOpen ? '−' : '+'}</span>
                                </button>
                                {isTopOpen && (
                                    <div className="px-4 pb-4 space-y-2">
                                        {topScores.length ? topScores.map((item) => (
                                            <div key={item.label} className="surface-panel rounded-xl px-3 py-2 flex items-center justify-between">
                                                <span className="text-sm text-slate-200 uppercase">{item.label}</span>
                                                <strong className="text-cyan-200">{item.value}</strong>
                                            </div>
                                        )) : <p className="text-sm text-slate-300">Sin puntajes cargados.</p>}
                                    </div>
                                )}
                            </article>
                        </div>
                    </section>
                </div>
            );
        };
        const checkImageUrlIsBroken = async (url = '', {
            timeoutMs = 12000,
            retries = 1
        } = {}) => {
            const normalizedUrl = String(url || '').trim();
            if (!normalizedUrl) return true;

            const runSingleCheck = () => new Promise((resolve) => {
                const image = new Image();
                let settled = false;
                const finalize = (isBroken) => {
                    if (settled) return;
                    settled = true;
                    image.onload = null;
                    image.onerror = null;
                    resolve(Boolean(isBroken));
                };

                const timeoutId = window.setTimeout(() => finalize(true), timeoutMs);
                image.onload = () => {
                    clearTimeout(timeoutId);
                    const hasPixels = Number(image.naturalWidth) > 0 && Number(image.naturalHeight) > 0;
                    finalize(!hasPixels);
                };
                image.onerror = () => {
                    clearTimeout(timeoutId);
                    finalize(true);
                };
                image.src = normalizedUrl;
            });

            for (let attempt = 0; attempt <= retries; attempt += 1) {
                const isBroken = await runSingleCheck();
                if (!isBroken) return false;
            }

            return true;
        };
        const getBattlePhotoForArena = (profile, arenaName) => {
            const normalizedArena = (arenaName || '').trim().toLowerCase();
            const galleryImages = Array.isArray(profile?.galeria?.fotos)
                ? profile.galeria.fotos
                    .map((item) => normalizeGalleryItem(item, 'image'))
                    .filter((item) => item.type === 'image' && item.url)
                : [];
            const profilePhoto = getSafeImageSrc(profile?.fotos?.[0], '');
            const fallbackPhoto = profilePhoto || 'https://via.placeholder.com/400x500';

            const useProfilePhotoArenas = new Set([
                'rostro', 'ojos', 'boca', 'cabello',
                'carisma', 'elegancia', 'dulzura', 'talento',
                'estatura'
            ]);

            if (useProfilePhotoArenas.has(normalizedArena)) {
                return fallbackPhoto;
            }

            const getRandomByLabels = (labels = []) => {
                const candidates = galleryImages.filter((item) => labels.includes(getGalleryItemLabel(item)));
                if (!candidates.length) return '';
                const randomIndex = Math.floor(Math.random() * candidates.length);
                return candidates[randomIndex]?.url || '';
            };

            const slotId = getBattleSlotForArena(normalizedArena);
            const slotConfig = getBattleSlotById(slotId);
            if (!slotConfig) return fallbackPhoto;

            const preferences = sanitizeBattlePhotoPreferences(profile?.batallaFotosPreferidas);
            const preferredUrl = preferences[slotId];
            if (preferredUrl) {
                const preferredExists = galleryImages.some((item) => item.url === preferredUrl);
                if (preferredExists) {
                    return preferredUrl;
                }
            }

            const selectedPhoto = getRandomByLabels(slotConfig.labels);

            return selectedPhoto || fallbackPhoto;
        };
        const isGifUrl = (url = '') => GIF_FILE_REGEX.test((url || '').trim());
        const CRYING_EMOJI_FALLBACK = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E";
        const BROKEN_IMAGE_INLINE_HANDLER = `if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${CRYING_EMOJI_FALLBACK}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`;
        const applyCryingEmojiFallback = (event) => {
            const img = event?.currentTarget || event?.target;
            if (!img || img.dataset.fallbackApplied === 'true') return;
            img.dataset.fallbackApplied = 'true';
            img.src = CRYING_EMOJI_FALLBACK;
            img.style.objectFit = 'contain';
            img.style.padding = '12px';
            img.style.background = '#020617';
            img.alt = 'Imagen no disponible';
        };

        const STORAGE_KEY = 'g2_elite_database_v4';
        const CAT_STORAGE_KEY = 'g2_elite_categories_v4';
        const CARACTERISTICAS = [
            'Rostro', 'Ojos', 'Boca', 'Cabello',
            'Cuerpo', 'Cola', 'Pechos', 'Cintura', 'Piernas', 'Estatura',
            'Sensualidad', 'Carisma', 'Elegancia', 'Dulzura', 'Talento'
        ];
        const ARENAS = [...CARACTERISTICAS];
        const BATTLE_SCOPES = [
            { id: 'PROFESIONES', label: 'Profesiones', description: 'Compará perfiles por profesión.' },
            { id: 'NACIONALIDADES', label: 'Nacionalidades', description: 'Compará perfiles por nacionalidad.' },
            { id: 'EDADES', label: 'Edades', description: 'Compará perfiles por rango etario.' },
            { id: 'GENERAL', label: 'General', description: 'Modo libre sin segmentación extra.' }
        ];
        const ARENA_PARTICIPANT_MODES = BATTLE_SCOPES.map((scope) => scope.id);
        const getBattleScopeLabel = (scopeId = '') => {
            const scope = BATTLE_SCOPES.find((item) => item.id === scopeId);
            return scope?.label || 'General';
        };
        const sanitizeArenaKeySegment = (value = '') => {
            const normalized = String(value || '').trim();
            if (!normalized) return '';
            return encodeURIComponent(normalized.toLowerCase());
        };
        const decodeArenaKeySegment = (value = '') => {
            const normalized = String(value || '').trim();
            if (!normalized) return '';
            try {
                return decodeURIComponent(normalized).toLowerCase();
            } catch {
                return normalized.toLowerCase();
            }
        };
        const getArenaBattleKey = (arenaName, scopeId = 'GENERAL', groupKey = '') => {
            const safeArena = String(arenaName || '').trim();
            const safeScope = String(scopeId || 'GENERAL').trim().toUpperCase();
            const safeGroup = sanitizeArenaKeySegment(groupKey);
            if (!safeArena) return '';
            return `${safeScope}::${safeGroup || 'all'}::${safeArena}`;
        };
        const getArenaGlobalKey = (arenaName = '') => String(arenaName || '').trim();
        const parseArenaBattleKey = (arenaKey = '') => {
            const parts = String(arenaKey || '').split('::');
            if (parts.length < 3) {
                return {
                    scopeId: 'GENERAL',
                    groupKey: 'all',
                    arenaName: ''
                };
            }
            const arenaName = parts.slice(2).join('::');
            return {
                scopeId: String(parts[0] || 'GENERAL').trim().toUpperCase() || 'GENERAL',
                groupKey: decodeArenaKeySegment(parts[1] || 'all') || 'all',
                arenaName: String(arenaName || '').trim()
            };
        };
        const createZeroScores = () => CARACTERISTICAS.reduce((acc, item) => {
            acc[item] = 0;
            return acc;
        }, {});
        const INITIAL_CATEGORIES = [];
        const PROFESIONES_CONFIG = {
            'Cantante': { glyph: 'crown', color: 'rgba(34, 211, 238, 0.8)', tailwind: 'cyan-400' },
            'Actriz': { glyph: 'theater', color: 'rgba(34, 197, 94, 0.8)', tailwind: 'green-500' },
            'Modelo': { glyph: 'floron', color: 'rgba(168, 85, 247, 0.8)', tailwind: 'purple-500' },
            'NSFW': { glyph: 'torch', color: 'rgba(239, 68, 68, 0.8)', tailwind: 'red-500' },
            'Influencer': { glyph: 'sigil', color: 'rgba(236, 72, 153, 0.8)', tailwind: 'pink-500' },
            'Bailarina y Atleta': { glyph: 'floron', color: 'rgba(249, 115, 22, 0.8)', tailwind: 'orange-500' },
            'Otro': { glyph: 'sigil', color: 'rgba(148, 163, 184, 0.8)', tailwind: 'slate-400' }
        };
        const getProfessionGlyph = (profession = '') => {
            const lowP = String(profession || '').toLowerCase();
            if (lowP.includes('cantante')) return 'crown';
            if (lowP.includes('nsfw')) return 'torch';
            if (lowP.includes('actriz') || lowP.includes('actor')) return 'theater';
            if (lowP.includes('modelo')) return 'floron';
            if (lowP.includes('influencer')) return 'sigil';
            if (lowP.includes('periodista')) return 'quill';
            if (lowP.includes('bailarina')) return 'floron';
            if (lowP.includes('atleta')) return 'shield';
            return 'shield';
        };
        const getEmoji = (profession = '') => {
            const lowP = String(profession || '').toLowerCase();
            if (lowP.includes('cantante')) return '🎤';
            if (lowP.includes('nsfw')) return '🔥';
            if (lowP.includes('actriz') || lowP.includes('actor')) return '🎬';
            if (lowP.includes('modelo')) return '👠';
            if (lowP.includes('influencer')) return '📱';
            if (lowP.includes('periodista')) return '👓';
            if (lowP.includes('bailarina')) return '💃';
            if (lowP.includes('atleta')) return '🏋️‍♀️';
            return '📖';
        };
        const getProfessionCardVisual = (profession = '') => {
            const normalizedProfession = String(profession || '').trim();
            const config = PROFESIONES_CONFIG[normalizedProfession] || PROFESIONES_CONFIG.Otro;
            const baseColor = String(config?.color || 'rgba(148, 163, 184, 0.8)')
                .replace(/,\s*[\d.]+\)$/, ', 1)');
            const glowColor = String(config?.color || 'rgba(148, 163, 184, 0.8)')
                .replace(/,\s*[\d.]+\)$/, ', 0.75)');
            return { baseColor, glowColor };
        };

        const HeraldicGlyph = ({ variant = 'sigil', size = 18, className = '', tint = 'currentColor' }) => {
            const common = {
                width: size,
                height: size,
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                className
            };

            if (variant === 'crown') {
                return <svg {...common} stroke={tint} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h18v3H3z"/><path d="M4 17l3-8 5 5 5-7 3 10"/></svg>;
            }
            if (variant === 'shield') {
                return <svg {...common} stroke={tint} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"/><path d="M9.5 11h5M12 8.5v5"/></svg>;
            }
            if (variant === 'floron') {
                return <svg {...common} stroke={tint} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16"/><path d="M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"/><path d="M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"/><circle cx="12" cy="12" r="2.2"/></svg>;
            }
            if (variant === 'quill') {
                return <svg {...common} stroke={tint} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"/><path d="M8 16l-4 4"/></svg>;
            }
            if (variant === 'torch') {
                return <svg {...common} stroke={tint} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 13l6-6"/><path d="M8 14l2 2 2-2-2-2z"/><path d="M11 16l-4 5h10l-4-5"/><path d="M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"/></svg>;
            }
            if (variant === 'theater') {
                return <svg {...common} stroke={tint} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M9 11h.01M15 11h.01"/><path d="M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"/></svg>;
            }
            return <svg {...common} stroke={tint} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 6v12M6 12h12"/></svg>;
        };

        const LucideIcon = ({ name, size = 20, className = "" }) => {
            return (
                <i
                    data-lucide={name.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}
                    style={{ width: size, height: size }}
                    className={`inline-block ${className}`}
                ></i>
            );
        };

        const renderGalleryWindow = ({ targetWindow, profileName, profession, photos, editingId, battlePhotoPrefs = {}, profilePhotoUrl = '' }) => {
            if (!targetWindow || targetWindow.closed) return;
            const safeBattlePhotoPrefs = sanitizeBattlePhotoPreferences(battlePhotoPrefs);
            const normalizedProfilePhotoUrl = getSafeImageSrc(String(profilePhotoUrl || '').trim(), '');

            const fotosGaleria = (photos || []).map((item, index) => {
                const normalizedItem = normalizeGalleryItem(item);
                return {
                    ...normalizedItem,
                    sourceTag: item?.sourceTag || (normalizedItem.type === 'video' ? 'videos' : 'fotos'),
                    sourceIndex: typeof item?.sourceIndex === 'number' ? item.sourceIndex : index
                };
            }).filter(item => item.url);

            targetWindow.document.open();
            targetWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${profileName}</title>
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
                <h1>Galería de ${profileName}</h1>
                <button class="btn-critical-plate" onclick="document.getElementById('miModal').style.display='block'">
                    AGREGAR ARCHIVO
                </button>

                <div id="miModal" class="modal-url">
                    <h2 style="margin:0; font-size: 14px; color: #94a3b8;">PEGAR URL DEL ARCHIVO</h2>
                    <input type="text" id="nuevaFotoUrl" placeholder="https://ejemplo.com/foto.jpg o https://youtube.com/...">
                    <label for="nuevoArchivoLocal" style="display:block; margin-top: 14px; font-size: 10px; font-weight: 900; letter-spacing: 0.14em; color: #94a3b8; text-transform: uppercase;">o subir desde escritorio</label>
                    <input type="file" id="nuevoArchivoLocal" accept="image/*,video/*,.gif" multiple style="width: 100%; margin-top: 8px; padding: 10px; background: #020617; border: 1px dashed rgba(34,211,238,0.65); color: #e2e8f0; border-radius: 8px; outline: none; font-size: 12px; box-shadow: 0 0 10px rgba(34,211,238,0.18);">
                    <select id="nuevoArchivoTipo" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        <option value="image">Imagen</option>
                        <option value="video">Video</option>
                    </select>
                    <select id="nuevaFotoEtiqueta" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        ${GALLERY_LABELS.map(label => `<option value="${label}">Etiqueta ${label}</option>`).join('')}
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
                    ${BATTLE_PHOTO_SLOTS.map((slot) => {
                        const isProfileSlot = slot.id === 'perfil';
                        const assignedUrl = isProfileSlot
                            ? normalizedProfilePhotoUrl
                            : (safeBattlePhotoPrefs[slot.id] || '');
                        const hasSelection = Boolean(assignedUrl);
                        const canPickFromGallery = !isProfileSlot;
                        return `
                            <div class="gallery-slot-card" data-slot-id="${slot.id}" style="border:1px solid ${hasSelection ? 'rgba(74,222,128,0.95)' : 'rgba(248,113,113,0.95)'}; border-radius:10px; padding:10px; background:${hasSelection ? 'linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)' : 'linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)'}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${hasSelection ? 'rgba(187,247,208,0.25)' : 'rgba(254,202,202,0.22)'}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${hasSelection ? 'rgba(74,222,128,0.35)' : 'rgba(248,113,113,0.3)'}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${slot.label}</div>
                                <div style="font-size:11px; color:${hasSelection ? '#dcfce7' : '#fee2e2'}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${hasSelection ? 'Asignada' : 'No asignada'}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${hasSelection
                                        ? `<img src="${assignedUrl}" alt="Vista previa ${slot.label}" onerror="${BROKEN_IMAGE_INLINE_HANDLER}" style="width:100%; height:100%; object-fit:cover; display:block;" />`
                                        : '<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${slot.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${canPickFromGallery ? `<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${slot.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${slot.id}');"
                                        style="width:100%; border:1px solid rgba(203,213,225,0.92); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); transition: box-shadow 180ms ease, border-color 180ms ease, filter 180ms ease, background 180ms ease;"
                                    >
                                        Designar de galería
                                    </button>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                    </div>
                </details>

                <div class="grid" id="galleryGrid">
                    ${fotosGaleria.length ? fotosGaleria.map((foto, index) => {
                    const fotoUrl = getGalleryItemUrl(foto);
                    const fotoLabel = getGalleryItemLabel(foto);
                    const labelStyle = getGalleryLabelStyle(fotoLabel);
                    const config = {
                        "CANTANTE": { color: "#0ea5e9", sombra: "rgba(14,165,233,0.8)" },
                        "NSFW":  { color: "#ef4444", sombra: "rgba(239,68,68,0.8)" },
                        "ACTRIZ":{ color: "#22c55e", sombra: "rgba(34,197,94,0.8)" },
                        "MODELO": { color: "#f97316", sombra: "rgba(249,115,22,0.8)" },
                        "BAILARINA": { color: "#a855f7", sombra: "rgba(168,85,247,0.8)" },
                        "INFLUENCER":{ color: "#ec4899", sombra: "rgba(236,72,153,0.8)" },
                        "PERIODISTA": { color: "#facc15", sombra: "rgba(250,204,21,0.8)" },
                        "ATLETA":  { color: "#78350f", sombra: "rgba(120,53,15,0.8)" },
                        "OTRO":{ color: "#ffffff", sombra: "rgba(255,255,255,0.8)" },
                        "DEFAULT": { color: "#334155", sombra: "transparent" }
                    };
                    const estilo = config[profession?.toUpperCase()] || config["DEFAULT"];
                    return `
                        <div
                            class="gallery-card"
                            data-gallery-index="${index}"
                            data-source-index="${foto.sourceIndex}"
                            data-media-type="${getGalleryItemType(foto)}"
                            data-url="${fotoUrl}"
                            data-compatible-slots="${fotoLabel}"
                            draggable="${getGalleryItemType(foto) === 'image' ? 'true' : 'false'}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${estilo.color};
                                box-shadow: 0 0 15px ${estilo.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${getGalleryItemType(foto) === 'image' ? 'grab' : 'pointer'};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${estilo.color}, inset 0 0 15px ${estilo.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${estilo.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${foto.sourceIndex}, mediaType: '${getGalleryItemType(foto)}', id: '${editingId}'}, '*');"
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
                        ${getGalleryItemType(foto) === 'video'
                            ? (() => {
                                const embedInfo = getVideoEmbedInfo(fotoUrl);
                                if (embedInfo) {
                                    return `<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${embedInfo.provider.toUpperCase()}</div></div>`;
                                }
                                return `<video src="${fotoUrl}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`;
                            })()
                            : `<img src="${fotoUrl}" alt="Imagen de la galería" onerror="${BROKEN_IMAGE_INLINE_HANDLER}" style="width: 100%; height: 100%; object-fit: cover;" />`
                        }
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${getGalleryItemType(foto) === 'video' ? 'VIDEO' : 'IMG'}</div>
                        ${fotoLabel ? `<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${labelStyle.bg}; border: 1px solid ${labelStyle.border}; color: ${labelStyle.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${labelStyle.glow}, 0 0 24px ${labelStyle.glow}; text-shadow: 0 0 10px ${labelStyle.glow}; backdrop-filter: blur(8px);">${fotoLabel}</div>` : ""}
                        ${foto.autor ? `<div style="position:absolute; left:10px; right:10px; bottom:${fotoLabel ? '48px' : '10px'}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${foto.autor}</div>` : ""}
                        </div>
                    `;
                }).join('') : '<p style="text-align:center; grid-column: 1/-1; color: #64748b;">No hay archivos cargados.</p>'}
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
                        ${fotosGaleria.map((foto, index) => {
                            const itemType = getGalleryItemType(foto);
                            const embedInfo = getVideoEmbedInfo(foto.url);
                            return `
                            <div class="viewer-slide" id="viewer-slide-${index}">
                                ${itemType === 'video'
                                    ? (embedInfo
                                        ? `<iframe src="${embedInfo.src}" title="${embedInfo.title} ${index + 1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                                        : `<video src="${foto.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`)
                                    : `<img src="${foto.url}" alt="Vista completa ${index + 1}" onerror="${BROKEN_IMAGE_INLINE_HANDLER}" />`
                                }
                            </div>`;
                        }).join('')}
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
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${editingId}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
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
                        if (labelInput) labelInput.value = '${GALLERY_LABELS[0]}';
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
                        const label = labelInput?.value || '${GALLERY_LABELS[0]}';
                        const autor = (authorInput?.value || '').trim();
                        const slotSelectionId = activeSlotSelectionId || document.getElementById('slotSelectionId')?.value || '';

                        const postMedia = (finalUrl, finalType, canAssignSlot = true) => {
                            if (!finalUrl) return;
                            window.opener.postMessage({ type: 'ADD_IMAGE', url: finalUrl, label, autor, mediaType: finalType, id: '${editingId}' }, '*');
                            if (slotSelectionId && canAssignSlot) {
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${editingId}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label }, '*');
                            }
                        };

                        if (selectedFiles.length) {
                            const invalidFile = selectedFiles.find((file) => !isAllowedFileType(file));
                            if (invalidFile) {
                                alert('Uno o más archivos no son válidos. Usá imagen o video.');
                                return;
                            }
                            const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.onload = () => resolve({
                                    url: String(reader.result || ''),
                                    type: file.type && file.type.startsWith('video/') ? 'video' : 'image'
                                });
                                reader.onerror = () => reject(new Error('No se pudo leer uno de los archivos seleccionados.'));
                                reader.readAsDataURL(file);
                            });

                            Promise.all(selectedFiles.map(readFileAsDataUrl))
                                .then((filesData) => {
                                    filesData.forEach((fileData, index) => {
                                        postMedia(fileData.url, fileData.type, index === 0);
                                    });
                                    document.getElementById('miModal').style.display = 'none';
                                    resetAddMediaModalFields();
                                })
                                .catch((error) => {
                                    alert(error.message || 'No se pudo leer el archivo seleccionado.');
                                });
                            return;
                        }

                        postMedia(normalizedUrl, mediaType);
                        document.getElementById('miModal').style.display = 'none';
                        resetAddMediaModalFields();
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
                                    id: '${editingId}'
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
                <\/script>
            </body>
            </html>
        `);
            targetWindow.document.close();
        };

        const App = () => {
            const [carpetaAbierta, setCarpetaAbierta] = React.useState(null);
            const galleryWindowRef = useRef(null);
            const contextMenuRef = useRef(null);
            const [perfiles, setPerfiles] = useState([]);
                const neonColors = {
        "CANTANTE": { color: "#0ea5e9", sombra: "rgba(14,165,233,0.8)" },    // Celeste
        "NSFW":  { color: "#ef4444", sombra: "rgba(239,68,68,0.8)" },      // Rojo
        "ACTRIZ":{ color: "#22c55e", sombra: "rgba(34,197,94,0.8)" },        // Verde
        "MODELO": { color: "#f97316", sombra: "rgba(249,115,22,0.8)" },      // Naranja
        "BAILARINA": { color: "#a855f7", sombra: "rgba(168,85,247,0.8)" },    // Morado
        "INFLUENCER":{ color: "#ec4899", sombra: "rgba(236,72,153,0.8)" },      // Rosada
        "PERIODISTA": { color: "#facc15", sombra: "rgba(250,204,21,0.8)" },  // Amarillo
        "ATLETA":  { color: "#78350f", sombra: "rgba(120,53,15,0.8)" },         // Marron
        "OTRO":{ color: "#ffffff", sombra: "rgba(255,255,255,0.8)" }, // Blanco
        "DEFAULT": { color: "#334155", sombra: "transparent" }
                };

                const getNeonClassByProfession = (profession = '') => {
                    const normalizedKey = String(profession || '')
                        .normalize('NFD')
                        .replace(/[̀-ͯ]/g, '')
                        .trim()
                        .toUpperCase();
                    return neonColors[normalizedKey] || neonColors.DEFAULT;
                };

            const [categorias, setCategorias] = useState(INITIAL_CATEGORIES);
            const [activeTab, setActiveTab] = useState('EXPLORAR');
            const [selectedArena, setSelectedArena] = useState(null);
            const [selectedBattleScope, setSelectedBattleScope] = useState(null);
            const [selectedBattleGroupKey, setSelectedBattleGroupKey] = useState('');
            const [arenaBattleState, setArenaBattleState] = useState({});
            const [arenaGlobalState, setArenaGlobalState] = useState({});
            const [showResetArenaPicker, setShowResetArenaPicker] = useState(false);
            const [resetArenaTarget, setResetArenaTarget] = useState(ARENAS[0] || '');
            const [scoreBreakdownItemDetail, setScoreBreakdownItemDetail] = useState(null);
            const [showBattleResetPanel, setShowBattleResetPanel] = useState(false);
            const [isModalOpen, setIsModalOpen] = useState(false);
            const [isCatModalOpen, setIsCatModalOpen] = useState(false);
            const [editingId, setEditingId] = useState(null);
            const [contextMenuProfileId, setContextMenuProfileId] = useState(null);
            const [contextProfile, setContextProfile] = useState(null);
            const [isDeleteProfileModalOpen, setIsDeleteProfileModalOpen] = useState(false);
            const [profileActionError, setProfileActionError] = useState('');
            const [selectedCategory, setSelectedCategory] = React.useState(null);
            const [contextMenuOpen, setContextMenuOpen] = useState(false);
            const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
            const [sortBy, setSortBy] = useState('promedio');
            const [sortDirection, setSortDirection] = useState('desc');
            const [isFullRankingVisible, setIsFullRankingVisible] = useState(false);
            const [scoreBreakdownModal, setScoreBreakdownModal] = useState({ isOpen: false, profile: null, category: null });
            const [scorePanelModal, setScorePanelModal] = useState({ isOpen: false, profile: null });
            const [galleryFilterLabel, setGalleryFilterLabel] = useState('INICIAL');
            const [galleryViewMode, setGalleryViewMode] = useState('GENERAL');
            const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
            const [selectedGalleryBucket, setSelectedGalleryBucket] = useState(null);
            const [selectedCharacterBucketIds, setSelectedCharacterBucketIds] = useState([]);
            const [selectedTagLabels, setSelectedTagLabels] = useState([]);
            const [isGalleryPlaying, setIsGalleryPlaying] = useState(false);
            const [isGalleryRandom, setIsGalleryRandom] = useState(false);
            const [isGeneralFullscreen, setIsGeneralFullscreen] = useState(false);
            const [galleryPlaybackSeconds, setGalleryPlaybackSeconds] = useState(5);
            const [galleryVisibleLimit, setGalleryVisibleLimit] = useState(20);
            const [isDownloadingAllGallery, setIsDownloadingAllGallery] = useState(false);
            const [isSidebarOpen, setIsSidebarOpen] = useState(true);
            const [isEditingGalleryLabel, setIsEditingGalleryLabel] = useState(false);
            const [galleryLabelDraft, setGalleryLabelDraft] = useState('');
            const [galleryUrlDraft, setGalleryUrlDraft] = useState('');
            const [galleryEditorError, setGalleryEditorError] = useState('');
            const [isSavingGalleryEditor, setIsSavingGalleryEditor] = useState(false);
            const [tallerSearchTerm, setTallerSearchTerm] = useState('');
            const [anonMediaSource, setAnonMediaSource] = useState('url');
            const [anonMediaUrl, setAnonMediaUrl] = useState('');
            const [anonMediaFile, setAnonMediaFile] = useState(null);
            const [anonMediaLabel, setAnonMediaLabel] = useState(GALLERY_LABELS[0]);
            const [anonMediaAuthor, setAnonMediaAuthor] = useState('');
            const [anonMediaError, setAnonMediaError] = useState('');
            const [anonUploadType, setAnonUploadType] = useState('');
            const [galleryAudioTracks, setGalleryAudioTracks] = useState([]);
            const [galleryAudioName, setGalleryAudioName] = useState('');
            const [galleryAudioSource, setGalleryAudioSource] = useState('url');
            const [galleryAudioUrl, setGalleryAudioUrl] = useState('');
            const [galleryAudioFile, setGalleryAudioFile] = useState(null);
            const [galleryAudioError, setGalleryAudioError] = useState('');
            const [isGalleryMusicEnabled, setIsGalleryMusicEnabled] = useState(false);
            const [selectedGalleryAudioA, setSelectedGalleryAudioA] = useState('');
            const [selectedGalleryAudioB, setSelectedGalleryAudioB] = useState('');
            const [selectedTallerProfileId, setSelectedTallerProfileId] = useState('');
            const [isMultimediaModalOpen, setIsMultimediaModalOpen] = useState(false);
            const [isBrokenGalleryModalOpen, setIsBrokenGalleryModalOpen] = useState(false);
            const [brokenGalleryMap, setBrokenGalleryMap] = useState({});
            const [brokenGalleryUrlDrafts, setBrokenGalleryUrlDrafts] = useState({});
            const [brokenGallerySavingMap, setBrokenGallerySavingMap] = useState({});
            const [brokenGalleryEditingMap, setBrokenGalleryEditingMap] = useState({});
            const [showIncompleteMainPhotosOnly, setShowIncompleteMainPhotosOnly] = useState(false);
            const [showBrokenPhotosOnly, setShowBrokenPhotosOnly] = useState(false);
            const [tallerMissingPhotosTooltipProfileId, setTallerMissingPhotosTooltipProfileId] = useState('');
            const galleryPlaybackTimeoutRef = useRef(null);
            const galleryViewerOverlayRef = useRef(null);
            const galleryViewerMediaRef = useRef(null);
            const galleryAudioARef = useRef(null);
            const galleryAudioBRef = useRef(null);
            const pendingFullscreenRequestRef = useRef(false);
            const tallerLongPressTimeoutRef = useRef(null);
            const tallerLongPressTriggeredRef = useRef(false);

const getInitialCatFormData = () => ({
    label: '',
    emoji: '📁',
    coverImg: '',
    reglas: {
        nacionalidades: [],
        profesiones: [],
        ciudades: [],
        edadMin: '',
        edadMax: '',
        caracteristica: 'Rostro',
        operador: 'Superior a',
        umbral: ''
    }
});
        const getEmptyProfileFormData = () => ({
                nombre: '', nacionalidad: '', ciudad: '', profesion: '', fechaNacimiento: '', estaturaCm: '', fotos: [],
                galeria: { fotos: [], gifs: [], videos: [] },
                batallaFotosPreferidas: getDefaultBattlePhotoPreferences(),
                puntuaciones: createZeroScores()
            });
            const [formData, setFormData] = useState(getEmptyProfileFormData);
            useEffect(() => {
                if (!selectedBattleScope) {
                    if (selectedBattleGroupKey) setSelectedBattleGroupKey('');
                    return;
                }
                if (selectedBattleScope === 'GENERAL' && selectedBattleGroupKey !== 'all') {
                    setSelectedBattleGroupKey('all');
                }
            }, [selectedBattleScope, selectedBattleGroupKey]);
            const mapProfileToFormData = (profile = {}) => {
                const baseFormData = getEmptyProfileFormData();
                const safeProfile = profile && typeof profile === 'object' ? profile : {};
                const normalizedScores = safeProfile?.puntuaciones && typeof safeProfile.puntuaciones === 'object'
                    ? { ...baseFormData.puntuaciones, ...safeProfile.puntuaciones }
                    : baseFormData.puntuaciones;

                return {
                    ...safeProfile,
                    ...baseFormData,
                    nombre: typeof safeProfile.nombre === 'string' ? safeProfile.nombre : '',
                    nacionalidad: typeof safeProfile.nacionalidad === 'string' ? safeProfile.nacionalidad : '',
                    ciudad: typeof safeProfile.ciudad === 'string' ? safeProfile.ciudad : '',
                    profesion: typeof safeProfile.profesion === 'string' ? safeProfile.profesion : '',
                    fechaNacimiento: typeof safeProfile.fechaNacimiento === 'string' ? safeProfile.fechaNacimiento : '',
                    estaturaCm: safeProfile.estaturaCm === undefined || safeProfile.estaturaCm === null ? '' : safeProfile.estaturaCm,
                    fotos: Array.isArray(safeProfile.fotos) ? safeProfile.fotos : [],
                    galeria: {
                        fotos: Array.isArray(safeProfile?.galeria?.fotos) ? safeProfile.galeria.fotos : [],
                        gifs: Array.isArray(safeProfile?.galeria?.gifs) ? safeProfile.galeria.gifs : [],
                        videos: Array.isArray(safeProfile?.galeria?.videos) ? safeProfile.galeria.videos : []
                    },
                    batallaFotosPreferidas: sanitizeBattlePhotoPreferences(safeProfile?.batallaFotosPreferidas),
                    puntuaciones: normalizedScores
                };
            };
            const openProfileEditor = (contextProfile = {}) => {
                if (contextProfile?.isAnonymousGallery || contextProfile?.firebaseId === ANON_PROFILE_ID) {
                    return;
                }
                setFormData(mapProfileToFormData(contextProfile));
                setEditingId(contextProfile.firebaseId || contextProfile.id || null);
                setIsModalOpen(true);
            };
            const openProfileGalleryFromTooltip = (profile = {}) => {
                const key = profile?.firebaseId || profile?.nombre;
                if (!key) return;
                const existingWindow = galleryWindowRef.current;
                const nuevaVentana = existingWindow && !existingWindow.closed ? existingWindow : window.open('', '_blank');
                galleryWindowRef.current = nuevaVentana;
                renderGalleryWindow({
                    targetWindow: nuevaVentana,
                    profileName: profile?.nombre || '',
                    profession: profile?.profesion || '',
                    photos: [
                        ...((profile?.galeria?.fotos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'image'), sourceTag: 'fotos', sourceIndex: index }))),
                        ...((profile?.galeria?.videos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'video'), sourceTag: 'videos', sourceIndex: index })))
                    ],
                    editingId: profile?.firebaseId || profile?.id || '',
                    battlePhotoPrefs: profile?.batallaFotosPreferidas || profile?.galeria?.battlePhotoPreferences || {},
                    profilePhotoUrl: profile?.fotos?.[0] || ''
                });
                nuevaVentana?.focus();
                setSelectedTallerProfileId('');
                setTallerMissingPhotosTooltipProfileId('');
            };
            const openNewProfileForm = (prefilledProfession = '') => {
                if (activeTab === 'anonimo') return;
                const normalizedProfession = String(prefilledProfession || '').trim();
                setEditingId(null);
                setFormData({
                    ...getEmptyProfileFormData(),
                    profesion: normalizedProfession
                });
                setIsModalOpen(true);
            };
            const profileCompletionRows = useMemo(() => {
                const rows = [
                    { key: 'nombre', label: 'Nombre', value: formData?.nombre },
                    { key: 'fotos.0', label: 'Foto principal', value: formData?.fotos?.[0] },
                    { key: 'profesion', label: 'Profesión', value: formData?.profesion },
                    { key: 'nacionalidad', label: 'Nacionalidad', value: formData?.nacionalidad },
                    { key: 'ciudad', label: 'Ciudad', value: formData?.ciudad },
                    { key: 'fechaNacimiento', label: 'Fecha de nacimiento', value: formData?.fechaNacimiento },
                    { key: 'estaturaCm', label: 'Estatura', value: formData?.estaturaCm }
                ];

                const withStatus = rows.map((row) => {
                    const normalizedValue = typeof row.value === 'string' ? row.value.trim() : row.value;
                    const isComplete = !(normalizedValue === '' || normalizedValue === undefined || normalizedValue === null);
                    const previewValue = row.key === 'fotos.0'
                        ? (isComplete ? 'SI' : 'NO')
                        : (isComplete ? String(normalizedValue) : 'Sin completar');
                    return {
                        ...row,
                        isComplete,
                        preview: previewValue
                    };
                });

                return {
                    completed: withStatus.filter((row) => row.isComplete),
                    missing: withStatus.filter((row) => !row.isComplete)
                };
            }, [formData]);
            const addGalleryImage = async ({ profileId, url, tag = 'fotos', label = '', type = 'image', autor = '' }) => {
                const normalizedUrl = (url || '').trim();
                const normalizedLabel = GALLERY_LABELS.includes(label) ? label : '';
                const normalizedType = detectGalleryItemType(normalizedUrl, type);
                if (!profileId || !normalizedUrl) return [];

                const galleryRef = db.ref(`perfiles/${profileId}/galeria/${tag}`);
                const snapshot = await galleryRef.once('value');
                const currentItems = snapshot.val() || [];
                const updatedItems = [...currentItems, { url: normalizedUrl, label: normalizedLabel, type: normalizedType, autor: normalizeGalleryAuthor(autor) }];

                await galleryRef.set(updatedItems);

                if (profileId === editingId) {
                    setFormData(prev => ({
                        ...prev,
                        galeria: {
                            ...(prev.galeria || { fotos: [], gifs: [], videos: [] }),
                            [tag]: updatedItems
                        }
                    }));
                }

                return updatedItems;
            };

            const updateGalleryItemLabel = async ({ profileId, sourceTag, sourceIndex, label }) => {
                if (!profileId || !sourceTag || !Number.isInteger(sourceIndex)) return;
                const normalizedLabel = GALLERY_LABELS.includes(label) ? label : '';
                const galleryRef = db.ref(`perfiles/${profileId}/galeria/${sourceTag}`);
                const snapshot = await galleryRef.once('value');
                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                if (!currentItems[sourceIndex]) return;

                const updatedItems = [...currentItems];
                const normalizedItem = normalizeGalleryItem(updatedItems[sourceIndex], sourceTag === 'videos' ? 'video' : 'image');
                updatedItems[sourceIndex] = {
                    ...normalizedItem,
                    label: normalizedLabel
                };

                await galleryRef.set(updatedItems);

                if (profileId === editingId) {
                    setFormData(prev => ({
                        ...prev,
                        galeria: {
                            ...(prev.galeria || { fotos: [], gifs: [], videos: [] }),
                            [sourceTag]: updatedItems
                        }
                    }));
                }
            };
            const updateGalleryItemUrl = async ({ profileId, sourceTag, sourceIndex, url }) => {
                if (!profileId || !sourceTag || !Number.isInteger(sourceIndex)) return;
                const normalizedUrl = (url || '').trim();
                if (!normalizedUrl) return;

                const galleryRef = db.ref(`perfiles/${profileId}/galeria/${sourceTag}`);
                const snapshot = await galleryRef.once('value');
                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                if (!currentItems[sourceIndex]) return;

                const updatedItems = [...currentItems];
                const currentType = sourceTag === 'videos' ? 'video' : 'image';
                const normalizedItem = normalizeGalleryItem(updatedItems[sourceIndex], currentType);
                updatedItems[sourceIndex] = {
                    ...normalizedItem,
                    url: normalizedUrl,
                    type: detectGalleryItemType(normalizedUrl, currentType)
                };
                await galleryRef.set(updatedItems);

                if (profileId === editingId) {
                    setFormData(prev => ({
                        ...prev,
                        galeria: {
                            ...(prev.galeria || { fotos: [], gifs: [], videos: [] }),
                            [sourceTag]: updatedItems
                        }
                    }));
                }
            };
            const removeGalleryItem = async ({ profileId, sourceTag, sourceIndex }) => {
                if (!profileId || !sourceTag || !Number.isInteger(sourceIndex)) return;
                const galleryRef = db.ref(`perfiles/${profileId}/galeria/${sourceTag}`);
                const snapshot = await galleryRef.once('value');
                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                const removedItem = currentItems[sourceIndex];
                if (!removedItem) return;

                const remainingItems = currentItems.filter((_, index) => index !== sourceIndex);
                await galleryRef.set(remainingItems);

                const removedUrl = normalizeGalleryItem(removedItem, sourceTag === 'videos' ? 'video' : 'image').url;
                if (removedUrl) {
                    const prefsRef = db.ref(`perfiles/${profileId}/batallaFotosPreferidas`);
                    const prefsSnapshot = await prefsRef.once('value');
                    const currentPrefs = sanitizeBattlePhotoPreferences(prefsSnapshot.val());
                    const updatedPrefs = { ...currentPrefs };
                    let hasChanges = false;

                    Object.keys(updatedPrefs).forEach((slotId) => {
                        if (updatedPrefs[slotId] === removedUrl) {
                            updatedPrefs[slotId] = '';
                            hasChanges = true;
                        }
                    });
                    if (hasChanges) await prefsRef.set(updatedPrefs);
                }

                if (profileId === editingId) {
                    setFormData(prev => ({
                        ...prev,
                        galeria: {
                            ...(prev.galeria || { fotos: [], gifs: [], videos: [] }),
                            [sourceTag]: remainingItems
                        },
                        batallaFotosPreferidas: (() => {
                            const currentPrefs = sanitizeBattlePhotoPreferences(prev.batallaFotosPreferidas);
                            if (!removedUrl) return currentPrefs;
                            const updatedPrefs = { ...currentPrefs };
                            Object.keys(updatedPrefs).forEach((slotId) => {
                                if (updatedPrefs[slotId] === removedUrl) {
                                    updatedPrefs[slotId] = '';
                                }
                            });
                            return updatedPrefs;
                        })()
                    }));
                }
            };
            const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(String(reader.result || ''));
                reader.onerror = () => reject(new Error('No se pudo leer el archivo.'));
                reader.readAsDataURL(file);
            });
            const withProfilePhotoSyncedToGallery = (prevState, profilePhotoUrlRaw) => {
                const normalizedProfileUrl = String(profilePhotoUrlRaw || '').trim();
                const currentGallery = Array.isArray(prevState?.galeria?.fotos) ? prevState.galeria.fotos : [];
                if (!normalizedProfileUrl) {
                    return { ...prevState, fotos: [''] };
                }
                const alreadyExists = currentGallery.some((item) => normalizeGalleryItem(item, 'image').url === normalizedProfileUrl);
                const nextGallery = alreadyExists
                    ? currentGallery
                    : [...currentGallery, { url: normalizedProfileUrl, label: 'C', type: 'image' }];
                return {
                    ...prevState,
                    fotos: [normalizedProfileUrl],
                    galeria: {
                        ...(prevState.galeria || {}),
                        fotos: nextGallery
                    }
                };
            };
            const handleLocalProfilePhotoUpload = async (event) => {
                const selectedFile = event.target.files?.[0];
                if (!selectedFile) return;
                try {
                    const dataUrl = await readFileAsDataUrl(selectedFile);
                    setFormData(prev => withProfilePhotoSyncedToGallery(prev, dataUrl));
                } catch (error) {
                    console.error('Error al cargar foto de perfil local:', error);
                } finally {
                    event.target.value = '';
                }
            };
            const addAnonymousGalleryItem = async ({ url, label, autor = '', forcedTag = '' }) => {
                const normalizedUrl = String(url || '').trim();
                if (!normalizedUrl) throw new Error('Ingresá una URL o seleccioná un archivo.');
                const normalizedLabel = GALLERY_LABELS.includes(label) ? label : '';
                const inferredType = detectGalleryItemType(normalizedUrl);
                const isValidMedia = inferredType === 'image'
                    || VIDEO_FILE_REGEX.test(normalizedUrl)
                    || Boolean(getVideoEmbedInfo(normalizedUrl));
                if (!isValidMedia) {
                    throw new Error('Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.');
                }
                const tag = forcedTag || (inferredType === 'video' ? 'videos' : 'fotos');
                const galleryRef = db.ref(`${ANON_GALLERY_NODE_PATH}/${tag}`);
                const snapshot = await galleryRef.once('value');
                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                const updatedItems = [...currentItems, {
                    url: normalizedUrl,
                    label: normalizedLabel,
                    type: inferredType,
                    autor: String(autor || '').trim()
                }];
                await galleryRef.set(updatedItems);
            };
            const handleAnonMediaSubmit = async (forcedTag = '') => {
                setAnonMediaError('');
                try {
                    let finalUrl = String(anonMediaUrl || '').trim();
                    if (anonMediaSource === 'file') {
                        if (!anonMediaFile) throw new Error('Seleccioná un archivo local.');
                        finalUrl = await readFileAsDataUrl(anonMediaFile);
                    }
                    await addAnonymousGalleryItem({ url: finalUrl, label: anonMediaLabel, autor: anonMediaAuthor, forcedTag });
                    setAnonMediaUrl('');
                    setAnonMediaFile(null);
                    setAnonMediaAuthor('');
                    setAnonMediaSource('url');
                } catch (error) {
                    setAnonMediaError(error?.message || 'No se pudo guardar en galería anónima.');
                }
            };
            const addGalleryAudioTrack = async () => {
                const normalizedName = String(galleryAudioName || '').trim();
                setGalleryAudioError('');
                if (!normalizedName) {
                    setGalleryAudioError('Completá el nombre del audio.');
                    return;
                }
                try {
                    let normalizedUrl = String(galleryAudioUrl || '').trim();
                    if (galleryAudioSource === 'file') {
                        if (!galleryAudioFile) {
                            setGalleryAudioError('Seleccioná un archivo de audio.');
                            return;
                        }
                        normalizedUrl = await readFileAsDataUrl(galleryAudioFile);
                    } else if (!normalizedUrl) {
                        setGalleryAudioError('Completá la URL del audio.');
                        return;
                    }
                    if (galleryAudioSource === 'url' && !AUDIO_FILE_REGEX.test(normalizedUrl)) {
                        setGalleryAudioError('La URL debe apuntar a un archivo de audio válido.');
                        return;
                    }
                    const audioRef = db.ref(`${ANON_GALLERY_NODE_PATH}/audios`);
                    const snapshot = await audioRef.once('value');
                    const currentAudios = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                    const updatedAudios = [...currentAudios, { nombre: normalizedName, url: normalizedUrl }];
                    await audioRef.set(updatedAudios);
                    setGalleryAudioName('');
                    setGalleryAudioUrl('');
                    setGalleryAudioFile(null);
                    setGalleryAudioSource('url');
                } catch (error) {
                    setGalleryAudioError('No se pudo guardar el audio en Firebase.');
                }
            };
            const handleDelete = async (id, e) => {
                e.stopPropagation(); // Esto es para que no se abra la foto cuando hacés click en la cruz
                if(confirm('¿Estás seguro de que querés eliminar esto, corazón?')) {
                    try {
                        await db.collection('galeria').doc(id).delete();
                    } catch (error) {
                        console.error("Error al borrar de Firebase:", error);
                    }
                }
            };

            const [catFormData, setCatFormData] = useState(getInitialCatFormData());
            const resetCatForm = () => setCatFormData(getInitialCatFormData());

            useEffect(() => {
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }, [activeTab, isModalOpen, isCatModalOpen, perfiles, selectedCategory, categorias]);

            useEffect(() => {
                if (galleryWindowRef.current && !galleryWindowRef.current.closed && editingId) {
                    renderGalleryWindow({
                        targetWindow: galleryWindowRef.current,
                        profileName: formData.nombre,
                        profession: formData.profesion,
                        photos: [
                            ...(formData.galeria?.fotos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'image'), sourceTag: 'fotos', sourceIndex: index })),
                            ...(formData.galeria?.videos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'video'), sourceTag: 'videos', sourceIndex: index }))
                        ],
                        editingId,
                        battlePhotoPrefs: formData.batallaFotosPreferidas,
                        profilePhotoUrl: formData.fotos?.[0] || ''
                    });
                }
            }, [editingId, formData.nombre, formData.profesion, formData.galeria?.fotos, formData.galeria?.videos, formData.batallaFotosPreferidas]);

            useEffect(() => {
                const handleMessage = async (event) => {
                    if (event.data.type === 'ADD_IMAGE') {
                        const { url, id, label, mediaType, autor } = event.data;
                        const tag = mediaType === 'video' ? 'videos' : 'fotos';
                        if (!id) return;
                        const galleryRef = id === ANON_PROFILE_ID
                            ? db.ref(`${ANON_GALLERY_NODE_PATH}/${tag}`)
                            : db.ref(`perfiles/${id}/galeria/${tag}`);
                        const snapshot = await galleryRef.once('value');
                        const currentPhotos = snapshot.val() || [];
                        const normalizedUrl = (url || '').trim();
                        if (!normalizedUrl) return;
                        const updatedPhotos = [...currentPhotos, { url: normalizedUrl, label: GALLERY_LABELS.includes(label) ? label : '', type: detectGalleryItemType(normalizedUrl, mediaType), autor: normalizeGalleryAuthor(autor) }];

                        await galleryRef.set(updatedPhotos);
                        setFormData(prev => ({
                            ...prev,
                            galeria: { ...prev.galeria, [tag]: updatedPhotos }
                        }));
                    }

                    if (event.data.type === 'DELETE_IMAGE') {
                        const { index, id, mediaType } = event.data;
                        const tag = mediaType === 'video' ? 'videos' : 'fotos';
                        if (!id) return;
                        const galleryRef = id === ANON_PROFILE_ID
                            ? db.ref(`${ANON_GALLERY_NODE_PATH}/${tag}`)
                            : db.ref(`perfiles/${id}/galeria/${tag}`);
                        const snapshot = await galleryRef.once('value');
                        const currentPhotos = snapshot.val() || [];
                        const removedPhoto = currentPhotos[index];
                        const nuevasFotos = currentPhotos.filter((_, i) => i !== index);

                        await galleryRef.set(nuevasFotos);
                        const removedUrl = normalizeGalleryItem(removedPhoto, mediaType).url;
                        if (removedUrl && id !== ANON_PROFILE_ID) {
                            const prefsRef = db.ref(`perfiles/${id}/batallaFotosPreferidas`);
                            const prefsSnapshot = await prefsRef.once('value');
                            const currentPrefs = sanitizeBattlePhotoPreferences(prefsSnapshot.val());
                            const updatedPrefs = { ...currentPrefs };
                            let hasChanges = false;
                            Object.keys(updatedPrefs).forEach((slotId) => {
                                if (updatedPrefs[slotId] === removedUrl) {
                                    updatedPrefs[slotId] = '';
                                    hasChanges = true;
                                }
                            });
                            if (hasChanges) {
                                await prefsRef.set(updatedPrefs);
                            }
                        }
                        setFormData(prev => ({
                            ...prev,
                            galeria: { ...prev.galeria, [tag]: nuevasFotos },
                            batallaFotosPreferidas: (() => {
                                const currentPrefs = sanitizeBattlePhotoPreferences(prev.batallaFotosPreferidas);
                                if (!removedUrl) return currentPrefs;
                                const updatedPrefs = { ...currentPrefs };
                                Object.keys(updatedPrefs).forEach((slotId) => {
                                    if (updatedPrefs[slotId] === removedUrl) {
                                        updatedPrefs[slotId] = '';
                                    }
                                });
                                return updatedPrefs;
                            })()
                        }));
                    }

                    if (event.data.type === 'SET_BATTLE_PHOTO_PREF') {
                        const { id, slotId, index, mediaType } = event.data;
                        const slotConfig = getBattleSlotById(slotId);
                        if (!id || id === ANON_PROFILE_ID || !slotConfig || !Number.isInteger(index)) return;
                        const tag = mediaType === 'video' ? 'videos' : 'fotos';
                        const galleryRef = db.ref(`perfiles/${id}/galeria/${tag}`);
                        const snapshot = await galleryRef.once('value');
                        const currentItems = snapshot.val() || [];
                        const selectedItem = normalizeGalleryItem(currentItems[index], mediaType);
                        if (!selectedItem.url || selectedItem.type !== 'image') return;
                        const prefsRef = db.ref(`perfiles/${id}/batallaFotosPreferidas/${slotId}`);
                        await prefsRef.set(selectedItem.url);
                        setFormData(prev => ({
                            ...prev,
                            batallaFotosPreferidas: {
                                ...sanitizeBattlePhotoPreferences(prev.batallaFotosPreferidas),
                                [slotId]: selectedItem.url
                            }
                        }));
                    }

                    if (event.data.type === 'SET_BATTLE_PHOTO_PREF_BY_URL') {
                        const { id, slotId, url, mediaType, label } = event.data;
                        const slotConfig = getBattleSlotById(slotId);
                        const normalizedUrl = String(url || '').trim();
                        if (!id || id === ANON_PROFILE_ID || !slotConfig || !normalizedUrl) return;
                        if (mediaType === 'video') return;
                        const prefsRef = db.ref(`perfiles/${id}/batallaFotosPreferidas/${slotId}`);
                        await prefsRef.set(normalizedUrl);
                        setFormData(prev => ({
                            ...prev,
                            batallaFotosPreferidas: {
                                ...sanitizeBattlePhotoPreferences(prev.batallaFotosPreferidas),
                                [slotId]: normalizedUrl
                            }
                        }));
                    }

                    if (event.data.type === 'CLEAR_BATTLE_PHOTO_PREF') {
                        const { id, slotId } = event.data;
                        const slotConfig = getBattleSlotById(slotId);
                        if (!id || id === ANON_PROFILE_ID || !slotConfig) return;
                        const prefsRef = db.ref(`perfiles/${id}/batallaFotosPreferidas/${slotId}`);
                        await prefsRef.set('');
                        setFormData(prev => ({
                            ...prev,
                            batallaFotosPreferidas: {
                                ...sanitizeBattlePhotoPreferences(prev.batallaFotosPreferidas),
                                [slotId]: ''
                            }
                        }));
                    }
                };

                window.addEventListener('message', handleMessage);
                const perfilesRef = db.ref('perfiles');
                const anonGalleryRef = db.ref(ANON_GALLERY_NODE_PATH);
                let perfilesData = {};
                let anonGalleryData = {};
                const refreshPerfilesState = () => {
                    const listaPerfiles = Object.keys(perfilesData || {}).map(key => ({
                        ...mapProfileToFormData(perfilesData[key]),
                        firebaseId: key // Guardamos la llave de Firebase por si necesitamos editar
                    }));
                    const anonProfile = mapAnonymousGalleryToProfile(anonGalleryData || {});
                    const hasAnonGallery = Object.values(anonProfile.galeria || {}).some((items) => Array.isArray(items) && items.length > 0);
                    setPerfiles(hasAnonGallery ? [...listaPerfiles, anonProfile] : listaPerfiles);
                };
                perfilesRef.on('value', (snapshot) => {
                    perfilesData = snapshot.val() || {};
                    refreshPerfilesState();
                });
                anonGalleryRef.on('value', (snapshot) => {
                    anonGalleryData = snapshot.val() || {};
                    const audios = Array.isArray(anonGalleryData?.audios)
                        ? anonGalleryData.audios
                            .map((audio) => ({
                                nombre: String(audio?.nombre || '').trim(),
                                url: String(audio?.url || '').trim()
                            }))
                            .filter((audio) => audio.nombre && audio.url)
                        : [];
                    setGalleryAudioTracks(audios);
                    refreshPerfilesState();
                });

                // Escuchar Categorías en tiempo real desde Firebase
                setCategorias(INITIAL_CATEGORIES);

                const arenasRef = db.ref('arenaBattleState');
                arenasRef.on('value', (snapshot) => {
                    setArenaBattleState(snapshot.val() || {});
                });
                const arenaGlobalRef = db.ref('arenaGlobalState');
                arenaGlobalRef.on('value', (snapshot) => {
                    setArenaGlobalState(snapshot.val() || {});
                });

                return () => {
                    window.removeEventListener('message', handleMessage);
                    perfilesRef.off();
                    anonGalleryRef.off();
                    arenasRef.off();
                    arenaGlobalRef.off();
                };
            }, []);
            useEffect(() => {
                const primaryTrack = galleryAudioTracks.find((track) => track.url === selectedGalleryAudioA);
                const secondaryTrack = galleryAudioTracks.find((track) => track.url === selectedGalleryAudioB);
                [galleryAudioARef.current, galleryAudioBRef.current].forEach((audio) => {
                    if (!audio) return;
                    audio.pause();
                    audio.currentTime = 0;
                });
                if (!isGalleryMusicEnabled) return;
                if (primaryTrack && galleryAudioARef.current) {
                    galleryAudioARef.current.src = primaryTrack.url;
                    galleryAudioARef.current.play().catch(() => {});
                }
                if (secondaryTrack && galleryAudioBRef.current && secondaryTrack.url !== primaryTrack?.url) {
                    galleryAudioBRef.current.src = secondaryTrack.url;
                    galleryAudioBRef.current.play().catch(() => {});
                }
            }, [isGalleryMusicEnabled, selectedGalleryAudioA, selectedGalleryAudioB, galleryAudioTracks]);

            const calcularEdad = (fecha) => {
                if (!fecha) return '?';
                const hoy = new Date();
                const cumple = new Date(fecha);
                let edad = hoy.getFullYear() - cumple.getFullYear();
                if (hoy.getMonth() < cumple.getMonth() || (hoy.getMonth() === cumple.getMonth() && hoy.getDate() < cumple.getDate())) edad--;
                return edad;
            };

            const getProfileScores = (profile = {}) => {
                return { ...createZeroScores(), ...(profile?.puntuaciones || {}) };
            };
            const SCORE_GROUP_TO_ARENAS = {
                Rostro: ['Rostro', 'Ojos', 'Boca', 'Cabello'],
                Cuerpo: ['Cuerpo', 'Cola', 'Pechos', 'Cintura', 'Piernas', 'Estatura'],
                Actitud: ['Sensualidad', 'Carisma', 'Elegancia', 'Dulzura', 'Talento']
            };
            const averageScoresByKeys = (profile = {}, keys = []) => {
                if (!Array.isArray(keys) || !keys.length) return 0;
                const scores = getProfileScores(profile);
                return keys.reduce((sum, key) => sum + (Number(scores[key]) || 0), 0) / keys.length;
            };
            const getRostroScore = (profile = {}) => {
                return averageScoresByKeys(profile, SCORE_GROUP_TO_ARENAS.Rostro);
            };
            const getCuerpoScore = (profile = {}) => {
                return averageScoresByKeys(profile, SCORE_GROUP_TO_ARENAS.Cuerpo);
            };
            const getActitudScore = (profile = {}) => {
                return averageScoresByKeys(profile, SCORE_GROUP_TO_ARENAS.Actitud);
            };
            const getCategoryScore = (profile = {}, categoryKey = '') => {
                if (categoryKey === 'Rostro') return getRostroScore(profile);
                if (categoryKey === 'Cuerpo') return getCuerpoScore(profile);
                if (categoryKey === 'Actitud') return getActitudScore(profile);
                return 0;
            };
            const calcularPromedio = (p = {}) => {
                // El Score Total es el promedio de las 3 categorías principales
                const categoryScores = Object.keys(SCORE_GROUP_TO_ARENAS).map((key) => getCategoryScore(p, key));
                const scoreTotal = categoryScores.reduce((sum, value) => sum + value, 0) / categoryScores.length;
                return scoreTotal.toFixed(0);
            };

            const obtenerCategoriasDePerfil = (p) => {
                const cats = [];
                const nac = (p.nacionalidad || '').toLowerCase();
                const prof = (p.profesion || '').toLowerCase();
                const ciu = (p.ciudad || '').toLowerCase();
                const edad = calcularEdad(p.fechaNacimiento);

                categorias.forEach(c => {
                    const r = c.reglas;
                    let matches = true;

                    // Filtros de texto (nacionalidad, profesión, ciudad)
                    if (r.nacionalidades?.length > 0 && !r.nacionalidades.some(n => nac === n.toLowerCase())) matches = false;
                    if (r.profesiones?.length > 0 && !r.profesiones.some(p => prof === p.toLowerCase())) matches = false;
                    if (r.ciudades?.length > 0 && !r.ciudades.some(ciu_regla => ciu === ciu_regla.toLowerCase())) matches = false;

                    // Filtros de edad
                    if (r.edadMin && (edad === '?' || edad < parseInt(r.edadMin))) matches = false;
                    if (r.edadMax && (edad === '?' || edad > parseInt(r.edadMax))) matches = false;

                    // Filtro de puntuación (ej: Rostro > 8)
                    if (r.caracteristica && r.umbral) {
                        const score = getProfileScores(p)[r.caracteristica] || 0;
                        const umbral = parseInt(r.umbral);
                        if (r.operador === 'Superior a' && score <= umbral) matches = false;
                        if (r.operador === 'Inferior a' && score >= umbral) matches = false;
                    }

                    // USAMOS firebaseId PORQUE ES EL QUE VIENE DE LA BASE DE DATOS
                    if (matches) cats.push(c.firebaseId);
                });
                return cats;
            };

            const uniqueNacionalidades = useMemo(() => ['Todas', ...new Set(perfiles.map(p => p.nacionalidad).filter(Boolean))], [perfiles]);
            const uniqueProfesiones = useMemo(() => ['Todas', ...new Set(perfiles.map(p => p.profesion).filter(Boolean))], [perfiles]);
            const uniqueCiudades = useMemo(() => ['Todas', ...new Set(perfiles.map(p => p.ciudad).filter(Boolean))], [perfiles]);
            const profileCategoryMap = useMemo(() => {
                return (perfiles || []).reduce((acc, profile) => {
                    if (!profile?.firebaseId) return acc;
                    acc[profile.firebaseId] = obtenerCategoriasDePerfil(profile);
                    return acc;
                }, {});
            }, [perfiles, categorias]);
            const allGalleryMediaEntries = useMemo(() => {
                return (perfiles || []).flatMap((perfil) => {
                    const sourceCharacterId = getGallerySourceCharacterId(perfil);
                    const galleryItems = [
                        ...(Array.isArray(perfil?.galeria?.fotos)
                            ? perfil.galeria.fotos.map((item, sourceIndex) => ({ item, sourceTag: 'fotos', sourceIndex, fallbackType: 'image' }))
                            : []),
                        ...(Array.isArray(perfil?.galeria?.gifs)
                            ? perfil.galeria.gifs.map((item, sourceIndex) => ({ item, sourceTag: 'gifs', sourceIndex, fallbackType: 'image' }))
                            : []),
                        ...(Array.isArray(perfil?.galeria?.videos)
                            ? perfil.galeria.videos.map((item, sourceIndex) => ({ item, sourceTag: 'videos', sourceIndex, fallbackType: 'video' }))
                            : [])
                    ];

                    return galleryItems.map(({ item, sourceTag, sourceIndex, fallbackType }) => {
                        const normalizedItem = normalizeGalleryItem(item, fallbackType);
                        const entryId = `${perfil.firebaseId || perfil.nombre || 'perfil'}-${sourceTag}-${sourceIndex}`;
                        return {
                            id: entryId,
                            url: normalizedItem.url,
                            label: normalizedItem.label,
                            type: normalizedItem.type,
                            isGif: normalizedItem.type === 'image' && isGifUrl(normalizedItem.url),
                            nombre: perfil.nombre || 'Sin nombre',
                            profesion: perfil.profesion || 'Perfil',
                            nacionalidad: perfil.nacionalidad || '',
                            fotoPerfil: perfil.fotos?.[0] || normalizedItem.url,
                            profileId: perfil.firebaseId,
                            sourceCharacterId,
                            sourceTag,
                            sourceIndex
                        };
                    });
                });
            }, [perfiles]);
            const allGalleryPhotos = useMemo(() => {
                return allGalleryMediaEntries.filter((item) => Boolean(item.url));
            }, [allGalleryMediaEntries]);
            const allGalleryPhotosByLabel = useMemo(() => {
                return allGalleryPhotos.reduce((acc, photo) => {
                    const label = photo.label || '';
                    if (!acc[label]) acc[label] = [];
                    acc[label].push(photo);
                    return acc;
                }, {});
            }, [allGalleryPhotos]);
            const allGalleryPhotosByProfile = useMemo(() => {
                return allGalleryPhotos.reduce((acc, photo) => {
                    const key = photo.profileId || photo.nombre;
                    if (!key) return acc;
                    if (!acc[key]) acc[key] = [];
                    acc[key].push(photo);
                    return acc;
                }, {});
            }, [allGalleryPhotos]);
            const totalGalleryProfiles = useMemo(() => {
                return new Set(allGalleryPhotos.map((photo) => photo.profileId).filter(Boolean)).size;
            }, [allGalleryPhotos]);
            const profileCategorySetMap = useMemo(() => {
                return Object.entries(profileCategoryMap || {}).reduce((acc, [profileId, categoryIds]) => {
                    acc[profileId] = new Set(Array.isArray(categoryIds) ? categoryIds : []);
                    return acc;
                }, {});
            }, [profileCategoryMap]);
            const galleryBuckets = useMemo(() => {
                if (galleryViewMode === 'GENERAL') {
                    return [{
                        id: 'GENERAL',
                        nombre: 'General',
                        profesion: 'Archivo global',
                        nacionalidad: '',
                        fotoPerfil: allGalleryPhotos[0]?.url || '',
                        photos: allGalleryPhotos.filter((photo) => !GENERAL_GALLERY_HIDDEN_LABELS.includes(photo.label || ''))
                    }];
                }

                if (galleryViewMode === 'PERSONAJE') {
                    return Object.entries(allGalleryPhotosByProfile).map(([key, photos]) => {
                        const firstPhoto = photos[0] || {};
                        return {
                            id: `PERSONAJE-${key}`,
                            profileId: firstPhoto.profileId || null,
                            nombre: firstPhoto.nombre || 'Sin nombre',
                            profesion: firstPhoto.profesion || 'Perfil',
                            nacionalidad: firstPhoto.nacionalidad || '',
                            fotoPerfil: firstPhoto.fotoPerfil || firstPhoto.url || '',
                            photos
                        };
                    })
                        .filter(bucket => bucket.photos.length > 0)
                        .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
                }

                if (galleryViewMode === 'ETIQUETA') {
                    return GALLERY_LABELS
                        .map((label) => {
                            const labelPhotos = allGalleryPhotosByLabel[label] || [];
                            return {
                                id: `ETIQUETA-${label}`,
                                nombre: `Etiqueta ${label}`,
                                profesion: 'Archivo por etiqueta',
                                nacionalidad: '',
                                fotoPerfil: labelPhotos[0]?.url || '',
                                photos: labelPhotos
                            };
                        })
                        .filter(bucket => bucket.photos.length > 0);
                }

                return (categorias || [])
                    .map((categoria) => {
                        const categoryPhotos = allGalleryPhotos.filter((photo) => {
                            if (!photo.profileId) return false;
                            const categoryIds = profileCategorySetMap[photo.profileId];
                            return categoryIds ? categoryIds.has(categoria.firebaseId) : false;
                        });

                        return {
                            id: `CARPETA-${categoria.firebaseId}`,
                            nombre: categoria.label || 'Carpeta sin nombre',
                            profesion: 'Categoría',
                            nacionalidad: '',
                            fotoPerfil: categoria.coverImg || categoryPhotos[0]?.fotoPerfil || categoryPhotos[0]?.url || '',
                            photos: categoryPhotos
                        };
                    })
                    .filter(bucket => bucket.photos.length > 0)
                    .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
            }, [allGalleryPhotos, allGalleryPhotosByLabel, allGalleryPhotosByProfile, categorias, galleryViewMode, profileCategorySetMap]);
            const activeGalleryBucket = useMemo(() => {
                if (galleryViewMode === 'GENERAL') return galleryBuckets[0] || null;
                if (!selectedGalleryBucket) return null;
                return galleryBuckets.find(bucket => bucket.id === selectedGalleryBucket.id) || null;
            }, [galleryBuckets, selectedGalleryBucket, galleryViewMode]);
            const selectedCharacterBuckets = useMemo(() => {
                if (galleryViewMode !== 'PERSONAJE') return [];
                return galleryBuckets.filter((bucket) => selectedCharacterBucketIds.includes(bucket.id));
            }, [galleryBuckets, galleryViewMode, selectedCharacterBucketIds]);
            const sourceGalleryPhotos = useMemo(() => {
                if (galleryViewMode === 'PERSONAJE') {
                    return selectedCharacterBuckets.flatMap((bucket) => bucket.photos || []);
                }
                if (galleryViewMode === 'ETIQUETA') {
                    if (!selectedTagLabels.length) return [];
                    return allGalleryPhotos.filter((photo) => selectedTagLabels.includes(photo.label));
                }
                return activeGalleryBucket?.photos || allGalleryPhotos;
            }, [galleryViewMode, selectedCharacterBuckets, activeGalleryBucket, allGalleryPhotos, selectedTagLabels]);
            const galleryStats = useMemo(() => {
                const stats = sourceGalleryPhotos.reduce((acc, photo) => {
                    const label = photo.label || '';
                    if (!label) return acc;
                    acc[label] = (acc[label] || 0) + 1;
                    return acc;
                }, {});
                return GALLERY_LABELS.reduce((acc, label) => {
                    acc[label] = stats[label] || 0;
                    return acc;
                }, {});
            }, [sourceGalleryPhotos]);
            const filteredGalleryPhotos = useMemo(() => {
                return sourceGalleryPhotos.filter(photo => (
                    galleryViewMode === 'ETIQUETA'
                        ? true
                        : galleryFilterLabel === 'INICIAL'
                            ? photo.label !== 'X'
                            : galleryFilterLabel === '100'
                                ? true
                                : photo.label === galleryFilterLabel
                ));
            }, [sourceGalleryPhotos, galleryFilterLabel, galleryViewMode]);
            const visibleGalleryPhotos = useMemo(() => {
                return filteredGalleryPhotos.slice(0, galleryVisibleLimit);
            }, [filteredGalleryPhotos, galleryVisibleLimit]);
            const hasMoreGalleryPhotos = visibleGalleryPhotos.length < filteredGalleryPhotos.length;
            const currentGalleryModeLabel = GALLERY_VIEW_MODE_LABELS[galleryViewMode] || galleryViewMode;
            const isGalleryBucketMode = galleryViewMode !== 'GENERAL' && galleryViewMode !== 'ETIQUETA';
            const availableCharacterBuckets = useMemo(() => {
                if (galleryViewMode !== 'PERSONAJE') return [];
                return galleryBuckets.filter((bucket) => !selectedCharacterBucketIds.includes(bucket.id));
            }, [galleryBuckets, galleryViewMode, selectedCharacterBucketIds]);
            const selectedGalleryPhoto = selectedGalleryIndex === null
                ? null
                : filteredGalleryPhotos[clampIndex(selectedGalleryIndex, filteredGalleryPhotos.length)] || null;
            const brokenGalleryPhotos = useMemo(() => {
                return allGalleryMediaEntries.filter((photo) => {
                    if (photo.type !== 'image') return false;
                    if (!photo.url) return true;
                    return Boolean(brokenGalleryMap[photo.id]);
                });
            }, [allGalleryMediaEntries, brokenGalleryMap]);
            const brokenGalleryGroups = useMemo(() => {
                const grouped = brokenGalleryPhotos.reduce((acc, photo) => {
                    const key = photo.profileId || photo.nombre || 'sin-perfil';
                    if (!acc[key]) {
                        acc[key] = {
                            id: key,
                            nombre: photo.nombre || 'Sin nombre',
                            profesion: photo.profesion || 'Perfil',
                            nacionalidad: photo.nacionalidad || '',
                            fotos: []
                        };
                    }
                    acc[key].fotos.push(photo);
                    return acc;
                }, {});

                return Object.values(grouped)
                    .map((group) => ({
                        ...group,
                        fotos: group.fotos.sort((a, b) => (a.label || '').localeCompare(b.label || '', 'es', { sensitivity: 'base' }))
                    }))
                    .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
            }, [brokenGalleryPhotos]);

            useEffect(() => {
                if (!selectedGalleryPhoto) {
                    setIsEditingGalleryLabel(false);
                    setGalleryLabelDraft('');
                    setGalleryUrlDraft('');
                    setGalleryEditorError('');
                    return;
                }
                setIsEditingGalleryLabel(false);
                setGalleryLabelDraft(selectedGalleryPhoto.label || '');
                setGalleryUrlDraft(selectedGalleryPhoto.url || '');
                setGalleryEditorError('');
            }, [selectedGalleryPhoto]);

            useEffect(() => {
                if (activeTab !== 'GALERIA') {
                    setSelectedGalleryBucket(null);
                    setSelectedGalleryIndex(null);
                }
            }, [activeTab]);

            useEffect(() => {
                setGalleryVisibleLimit(40);
                setSelectedGalleryIndex(null);
            }, [galleryViewMode, galleryFilterLabel, selectedTagLabels, selectedCharacterBucketIds, selectedGalleryBucket, perfiles.length]);

            useEffect(() => {
                setSelectedGalleryBucket(null);
                setSelectedGalleryIndex(null);
                setSelectedCharacterBucketIds([]);
                setSelectedTagLabels([]);
            }, [galleryViewMode]);

            useEffect(() => {
                if (selectedGalleryIndex === null) return;

                if (!filteredGalleryPhotos.length) {
                    setSelectedGalleryIndex(null);
                    return;
                }

                if (selectedGalleryIndex >= filteredGalleryPhotos.length) {
                    setSelectedGalleryIndex(0);
                }
            }, [filteredGalleryPhotos, selectedGalleryIndex]);

            useEffect(() => {
                if (selectedGalleryIndex === null) return;

                const handleGalleryKeydown = (event) => {
                    if (event.key === 'Escape') {
                        setSelectedGalleryIndex(null);
                        return;
                    }

                    if (!filteredGalleryPhotos.length) return;

                    if (event.key === 'ArrowRight') {
                        setSelectedGalleryIndex((current) => clampIndex((current ?? 0) + 1, filteredGalleryPhotos.length));
                    }

                    if (event.key === 'ArrowLeft') {
                        setSelectedGalleryIndex((current) => clampIndex((current ?? 0) - 1, filteredGalleryPhotos.length));
                    }
                };

                window.addEventListener('keydown', handleGalleryKeydown);
                return () => window.removeEventListener('keydown', handleGalleryKeydown);
            }, [filteredGalleryPhotos.length, selectedGalleryIndex]);

            useEffect(() => {
                if (selectedGalleryIndex === null) {
                    setIsGalleryPlaying(false);
                    setIsGalleryRandom(false);
                    setIsGeneralFullscreen(false);
                }
            }, [selectedGalleryIndex]);
            useEffect(() => {
                if (!contextMenuOpen) return;

                const handleOutsideClick = (event) => {
                    if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
                        setContextMenuOpen(false);
                    }
                };

                const handleEscape = (event) => {
                    if (event.key === 'Escape') {
                        setContextMenuOpen(false);
                    }
                };

                document.addEventListener('mousedown', handleOutsideClick);
                window.addEventListener('keydown', handleEscape);

                return () => {
                    document.removeEventListener('mousedown', handleOutsideClick);
                    window.removeEventListener('keydown', handleEscape);
                };
            }, [contextMenuOpen]);
            useEffect(() => {
                let isCancelled = false;
                const imagePhotos = allGalleryMediaEntries.filter((photo) => photo.type === 'image' && photo.url);

                if (!imagePhotos.length) {
                    setBrokenGalleryMap({});
                    return;
                }

                const run = async () => {
                    const concurrency = 8;
                    const results = [];

                    for (let index = 0; index < imagePhotos.length; index += concurrency) {
                        const batch = imagePhotos.slice(index, index + concurrency);
                        const batchResults = await Promise.all(batch.map(async (photo) => ({
                            id: photo.id,
                            isBroken: await checkImageUrlIsBroken(photo.url)
                        })));

                        results.push(...batchResults);
                        if (isCancelled) return;
                    }

                    if (isCancelled) return;

                    const nextMap = results.reduce((acc, entry) => {
                        acc[entry.id] = entry.isBroken;
                        return acc;
                    }, {});
                    setBrokenGalleryMap(nextMap);
                };

                run();
                return () => { isCancelled = true; };
            }, [allGalleryMediaEntries]);
            useEffect(() => {
                if (!isBrokenGalleryModalOpen) return;
                const nextDrafts = brokenGalleryPhotos.reduce((acc, photo) => {
                    acc[photo.id] = photo.url;
                    return acc;
                }, {});
                setBrokenGalleryUrlDrafts(nextDrafts);
                setBrokenGalleryEditingMap({});
            }, [isBrokenGalleryModalOpen, brokenGalleryPhotos]);

            useEffect(() => {
                if (galleryPlaybackTimeoutRef.current) {
                    clearTimeout(galleryPlaybackTimeoutRef.current);
                    galleryPlaybackTimeoutRef.current = null;
                }

                if (!isGalleryPlaying || !selectedGalleryPhoto) return;
                if (selectedGalleryPhoto.type === 'video') return;

                const timeoutDuration = galleryPlaybackSeconds * 1000;
                galleryPlaybackTimeoutRef.current = setTimeout(() => {
                    setSelectedGalleryIndex((current) => getNextPlayableIndex(current, filteredGalleryPhotos, isGalleryRandom));
                }, timeoutDuration);

                return () => {
                    if (galleryPlaybackTimeoutRef.current) {
                        clearTimeout(galleryPlaybackTimeoutRef.current);
                        galleryPlaybackTimeoutRef.current = null;
                    }
                };
            }, [isGalleryPlaying, selectedGalleryPhoto, filteredGalleryPhotos, isGalleryRandom, galleryPlaybackSeconds]);

            useEffect(() => {
                if (!selectedGalleryPhoto || !pendingFullscreenRequestRef.current) return;
                pendingFullscreenRequestRef.current = false;
                requestAnimationFrame(() => {
                    requestGalleryFullscreen();
                });
            }, [selectedGalleryPhoto]);

            const isMobileViewport = typeof window !== 'undefined'
                ? window.matchMedia('(max-width: 1023px), (pointer: coarse)').matches
                : false;
            const applyMobileFullscreenFallback = () => {
                const target = galleryViewerOverlayRef.current;
                if (!target) return;
                target.classList.add('mobile-gallery-fallback-fullscreen');
                document.body.classList.add('mobile-gallery-fallback-active');
            };
            const clearMobileFullscreenFallback = () => {
                const target = galleryViewerOverlayRef.current;
                if (target) {
                    target.classList.remove('mobile-gallery-fallback-fullscreen');
                }
                document.body.classList.remove('mobile-gallery-fallback-active');
            };
            const requestGalleryFullscreen = () => {
                const target = galleryViewerOverlayRef.current;
                if (!target) return;
                if (document.fullscreenElement) return;
                const request = target.requestFullscreen
                    || target.webkitRequestFullscreen
                    || target.msRequestFullscreen;
                if (typeof request === 'function') {
                    Promise.resolve(request.call(target)).catch(() => {
                        if (isMobileViewport) applyMobileFullscreenFallback();
                    });
                } else if (isMobileViewport) {
                    applyMobileFullscreenFallback();
                }
            };
            const exitGalleryFullscreen = () => {
                if (!document.fullscreenElement) return;
                const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
                if (typeof exit === 'function') {
                    Promise.resolve(exit.call(document)).catch(() => {});
                }
            };
            const openGalleryViewer = (index, { autoplay = false, fromGeneralPlay = false } = {}) => {
                pendingFullscreenRequestRef.current = !!autoplay;
                setSelectedGalleryIndex(index);
                setIsGalleryPlaying(autoplay);
                setIsGeneralFullscreen(fromGeneralPlay);
                setIsEditingGalleryLabel(!fromGeneralPlay);
            };
            const addCharacterToGallerySelection = (bucketId) => {
                if (!bucketId) return;
                setSelectedCharacterBucketIds((current) => current.includes(bucketId) ? current : [...current, bucketId]);
                setSelectedGalleryIndex(null);
            };
            const removeCharacterFromGallerySelection = (bucketId) => {
                if (!bucketId) return;
                setSelectedCharacterBucketIds((current) => current.filter((id) => id !== bucketId));
                setSelectedGalleryIndex(null);
            };
            const toggleEtiquetaSelection = (label) => {
                if (!label) return;
                setSelectedTagLabels((current) => current.includes(label)
                    ? current.filter((selected) => selected !== label)
                    : [...current, label]
                );
                setSelectedGalleryIndex(null);
            };
            const downloadAllGalleryPhotosAsZip = async () => {
                const canZip = typeof window !== 'undefined' && typeof window.JSZip !== 'undefined';
                if (!canZip) {
                    window.alert('No se pudo iniciar la descarga: falta la librería ZIP.');
                    return;
                }
                if (!filteredGalleryPhotos.length) {
                    window.alert('No hay archivos visibles para descargar.');
                    return;
                }

                const sanitizeFileName = (value = '') => String(value || '')
                    .normalize('NFD')
                    .replace(/[̀-ͯ]/g, '')
                    .replace(/[\/:*?"<>|]/g, '-')
                    .replace(/\s+/g, ' ')
                    .trim();
                const buildFileExtension = (url = '') => {
                    const cleanUrl = String(url || '').split('?')[0].split('#')[0];
                    const ext = (cleanUrl.match(/\.([a-zA-Z0-9]{2,5})$/) || [])[1];
                    return (ext || 'jpg').toLowerCase();
                };

                setIsDownloadingAllGallery(true);
                try {
                    const zip = new window.JSZip();
                    const mediaEntries = filteredGalleryPhotos.filter((photo) => photo?.url);
                    let downloadedCount = 0;
                    let failedCount = 0;
                    let fallbackCount = 0;
                    const configuredProxy = String(window.GALLERY_DOWNLOAD_PROXY || '').trim();
                    const proxyBaseUrl = configuredProxy || 'https://corsproxy.io/?';
                    const buildProxyUrl = (url) => {
                        if (!proxyBaseUrl) return '';
                        if (proxyBaseUrl.includes('{url}')) {
                            return proxyBaseUrl.replace('{url}', encodeURIComponent(url));
                        }
                        const separator = proxyBaseUrl.endsWith('?') || proxyBaseUrl.endsWith('=') ? '' : (proxyBaseUrl.includes('?') ? '&' : '?');
                        return `${proxyBaseUrl}${separator}${encodeURIComponent(url)}`;
                    };
                    const fetchBinary = async (url) => {
                        const directResponse = await fetch(url, { mode: 'cors' });
                        if (!directResponse.ok) throw new Error(`HTTP ${directResponse.status}`);
                        return { blob: await directResponse.blob(), viaProxy: false };
                    };

                    for (let i = 0; i < mediaEntries.length; i += 1) {
                        const photo = mediaEntries[i];
                        const folderName = sanitizeFileName(photo.nombre || 'Sin nombre') || 'Sin nombre';
                        const fileExt = buildFileExtension(photo.url);
                        const labelPart = sanitizeFileName(photo.label || 'sin-etiqueta') || 'sin-etiqueta';
                        const fileName = `${String(i + 1).padStart(4, '0')}_${labelPart}.${fileExt}`;
                        try {
                            let result;
                            try {
                                result = await fetchBinary(photo.url);
                            } catch (directError) {
                                const proxyUrl = buildProxyUrl(photo.url);
                                if (!proxyUrl) throw directError;
                                const proxyResponse = await fetch(proxyUrl, { mode: 'cors' });
                                if (!proxyResponse.ok) throw new Error(`Proxy HTTP ${proxyResponse.status}`);
                                result = { blob: await proxyResponse.blob(), viaProxy: true };
                            }
                            zip.folder(folderName).file(fileName, result.blob);
                            downloadedCount += 1;
                            if (result.viaProxy) fallbackCount += 1;
                        } catch (error) {
                            failedCount += 1;
                            console.warn('No se pudo descargar un archivo de la galería:', photo.url, error);
                        }
                    }

                    if (!downloadedCount) {
                        window.alert('No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.');
                        return;
                    }

                    const zipBlob = await zip.generateAsync({ type: 'blob' });
                    const zipUrl = URL.createObjectURL(zipBlob);
                    const link = document.createElement('a');
                    const stamp = new Date().toISOString().slice(0, 10);
                    link.href = zipUrl;
                    link.download = `galeria-completa-${stamp}.zip`;
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    URL.revokeObjectURL(zipUrl);

                    if (failedCount > 0) {
                        window.alert(`Descarga completada con avisos: ${downloadedCount} archivos incluidos, ${failedCount} omitidos y ${fallbackCount} recuperados por proxy.`);
                    }
                } catch (error) {
                    console.error('Error al generar ZIP de galería:', error);
                    window.alert('No se pudo crear el ZIP de la galería.');
                } finally {
                    setIsDownloadingAllGallery(false);
                }
            };
            const closeGalleryViewer = () => {
                pendingFullscreenRequestRef.current = false;
                setIsGalleryPlaying(false);
                setSelectedGalleryIndex(null);
                clearMobileFullscreenFallback();
                exitGalleryFullscreen();
            };
            const showNextGalleryPhoto = () => setSelectedGalleryIndex((current) => getNextPlayableIndex(current, filteredGalleryPhotos, isGalleryRandom));
            const showPreviousGalleryPhoto = () => setSelectedGalleryIndex((current) => clampIndex((current ?? 0) - 1, filteredGalleryPhotos.length));
            const saveSelectedGalleryLabel = async () => {
                if (!selectedGalleryPhoto?.profileId || !selectedGalleryPhoto?.sourceTag || !Number.isInteger(selectedGalleryPhoto?.sourceIndex)) return;
                const normalizedUrl = (galleryUrlDraft || '').trim();
                if (!normalizedUrl) {
                    setGalleryEditorError('La URL no puede estar vacía.');
                    return;
                }
                if (isBlockedMediaUrl(normalizedUrl) || !getSafeImageSrc(normalizedUrl, '')) {
                    setGalleryEditorError('La URL está bloqueada o no es válida.');
                    return;
                }
                try {
                    setIsSavingGalleryEditor(true);
                    setGalleryEditorError('');
                    if (normalizedUrl !== selectedGalleryPhoto.url) {
                        await updateGalleryItemUrl({
                            profileId: selectedGalleryPhoto.profileId,
                            sourceTag: selectedGalleryPhoto.sourceTag,
                            sourceIndex: selectedGalleryPhoto.sourceIndex,
                            url: normalizedUrl
                        });
                    }
                    await updateGalleryItemLabel({
                        profileId: selectedGalleryPhoto.profileId,
                        sourceTag: selectedGalleryPhoto.sourceTag,
                        sourceIndex: selectedGalleryPhoto.sourceIndex,
                        label: galleryLabelDraft
                    });
                    setIsEditingGalleryLabel(false);
                } catch (error) {
                    setGalleryEditorError('No se pudo guardar la edición del ítem.');
                    console.error('Error al actualizar etiqueta de la multimedia:', error);
                } finally {
                    setIsSavingGalleryEditor(false);
                }
            };
            const handleBrokenDraftChange = (photoId, nextUrl) => {
                setBrokenGalleryUrlDrafts((current) => ({ ...current, [photoId]: nextUrl }));
            };
            const setBrokenPhotoEditing = (photoId, isEditing) => {
                if (!photoId) return;
                setBrokenGalleryEditingMap((current) => ({ ...current, [photoId]: Boolean(isEditing) }));
            };
            const openBrokenGalleryPhotoUrl = (photo) => {
                const targetUrl = (brokenGalleryUrlDrafts[photo?.id] || photo?.url || '').trim();
                if (!targetUrl) return;
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            };
            const saveBrokenGalleryPhotoUrl = async (photo) => {
                if (!photo) return;
                const nextUrl = (brokenGalleryUrlDrafts[photo.id] || '').trim();
                if (!nextUrl) return;

                setBrokenGallerySavingMap((current) => ({ ...current, [photo.id]: true }));
                try {
                    if (nextUrl !== photo.url) {
                        await updateGalleryItemUrl({
                            profileId: photo.profileId,
                            sourceTag: photo.sourceTag,
                            sourceIndex: photo.sourceIndex,
                            url: nextUrl
                        });
                    }
                    const isBroken = await checkImageUrlIsBroken(nextUrl);
                    setBrokenGalleryMap((current) => ({ ...current, [photo.id]: isBroken }));
                    if (!isBroken) {
                        setBrokenPhotoEditing(photo.id, false);
                    }
                } catch (error) {
                    console.error('Error al actualizar URL rota:', error);
                } finally {
                    setBrokenGallerySavingMap((current) => ({ ...current, [photo.id]: false }));
                }
            };
            const deleteBrokenGalleryPhoto = async (photo) => {
                if (!photo) return;
                const confirmed = window.confirm('¿Eliminar esta foto rota de la galería?');
                if (!confirmed) return;

                setBrokenGallerySavingMap((current) => ({ ...current, [photo.id]: true }));
                try {
                    await removeGalleryItem({
                        profileId: photo.profileId,
                        sourceTag: photo.sourceTag,
                        sourceIndex: photo.sourceIndex
                    });
                } catch (error) {
                    console.error('Error al eliminar foto rota:', error);
                } finally {
                    setBrokenGallerySavingMap((current) => ({ ...current, [photo.id]: false }));
                }
            };
            const galleryContextLabel = useMemo(() => {
                if (galleryViewMode === 'PERSONAJE') {
                    return selectedCharacterBuckets.length
                        ? `${selectedCharacterBuckets.length} personaje${selectedCharacterBuckets.length > 1 ? 's' : ''} seleccionado${selectedCharacterBuckets.length > 1 ? 's' : ''}`
                        : 'Sin personajes seleccionados';
                }
                if (activeGalleryBucket && isGalleryBucketMode) return activeGalleryBucket.nombre;
                return currentGalleryModeLabel;
            }, [galleryViewMode, selectedCharacterBuckets, activeGalleryBucket, isGalleryBucketMode, currentGalleryModeLabel]);

const saveProfile = (e) => {
                e.preventDefault();
                const profileData = { ...formData };

                if (editingId) {
                    // Si estamos editando, buscamos el lugar exacto y lo actualizamos
                    db.ref(`perfiles/${editingId}`).set(profileData)
                        .then(() => {
                            setIsModalOpen(false);
                            setEditingId(null);
                        })
                        .catch(err => console.error("Error al excitar la base de datos:", err));
                } else {
                    // Si es nuevo, lo empujamos con fuerza a la colección
                    db.ref('perfiles').push(profileData)
                        .then(() => {
                            setIsModalOpen(false);
                            setFormData(getEmptyProfileFormData());
                        })
                        .catch(err => console.error("No pudo entrar el perfil:", err));
                }
            };
            const saveCategory = async (e) => {
                e.preventDefault();

                const { firebaseId, ...categoryData } = catFormData;
                const payload = { ...categoryData, type: 'custom' };

                try {
                    if (firebaseId) {
                        await db.ref(`categorias/${firebaseId}`).update(payload);
                    } else {
                        await db.ref('categorias').push(payload);
                    }

                    setIsCatModalOpen(false);
                    resetCatForm();
                } catch (error) {
                    console.error("La categoría no quiso guardarse:", error);
                }
            };
            const deleteCategory = async (categoryId) => {
                if (!categoryId) return;

                try {
                    await db.ref(`categorias/${categoryId}`).remove();

                    setCategorias(prev => prev.filter(c => c.firebaseId !== categoryId));
                    setSelectedCategory(prev => prev === categoryId ? null : prev);
                } catch (error) {
                    console.error("No se pudo borrar la categoría:", error);
                    alert("No se pudo borrar la carpeta. Probá de nuevo.");
                }
            };

            const requestDeleteProfile = (profile) => {
                if (!profile?.firebaseId) return;
                setProfileActionError('');
                setContextProfile(profile);
                setIsDeleteProfileModalOpen(true);
            };

            const deleteProfile = () => {
                if (!editingId) return;
                const profileToDelete = perfiles.find((profile) => profile.firebaseId === editingId);
                if (!profileToDelete) return;
                requestDeleteProfile(profileToDelete);
            };

            const closeDeleteProfileModal = () => {
                setIsDeleteProfileModalOpen(false);
                setContextMenuProfileId(null);
                setContextProfile(null);
            };

            const deleteProfileById = async (profileId) => {
                if (!profileId) return;
                await db.ref(`perfiles/${profileId}`).remove();
                setPerfiles(prev => prev.filter(p => p.firebaseId !== profileId));
            };

            const confirmDeleteFromContext = async () => {
                if (!contextProfile?.firebaseId) return;

                try {
                    await deleteProfileById(contextProfile.firebaseId);
                    setProfileActionError('');
                    setIsModalOpen(false);
                    if (editingId === contextProfile.firebaseId) {
                        setEditingId(null);
                    }
                    closeDeleteProfileModal();
                } catch (error) {
                    console.error("No se pudo borrar el perfil:", error);
                    setProfileActionError('No se pudo borrar el perfil en Firebase. Probá de nuevo.');
                }
            };

            const closeContextMenu = () => {
                setContextMenuOpen(false);
                setContextProfile(null);
            };

            const handleContextMenuOpen = (event, profile) => {
                event.preventDefault();
                setContextMenuOpen(true);
                setContextMenuPosition({ x: event.clientX, y: event.clientY });
                setContextProfile(profile);
            };
            const handleContextEdit = () => {
                if (!contextProfile) return;
                setFormData(mapProfileToFormData(contextProfile));
                setEditingId(contextProfile.firebaseId);
                setIsModalOpen(true);
                closeContextMenu();
            };

            const handleContextDelete = async () => {
                if (!contextProfile?.firebaseId) return;
                const confirmed = confirm('¿Borrar perfil? Esta acción también lo elimina de Firebase.');
                if (!confirmed) {
                    closeContextMenu();
                    return;
                }

                try {
                    await db.ref(`perfiles/${contextProfile.firebaseId}`).remove();
                    setPerfiles(prev => prev.filter(p => p.firebaseId !== contextProfile.firebaseId));
                    closeContextMenu();
                } catch (error) {
                    console.error("No se pudo borrar el perfil:", error);
                    alert("No se pudo borrar el perfil. Probá de nuevo.");
                    closeContextMenu();
                }
            };
            const getProfileHeightLabel = (profile) => {
                const rawHeight = profile?.estaturaCm;
                if (rawHeight === undefined || rawHeight === null || rawHeight === '') {
                    return 'Sin dato';
                }

                const numericHeight = Number(rawHeight);
                if (Number.isNaN(numericHeight) || numericHeight <= 0) {
                    return 'Sin dato';
                }

                return `${Math.round(numericHeight)} cm`;
            };

            const normalizeGroupingValue = (value = '') => String(value || '').trim().toLowerCase();
            const formatGroupingLabel = (value = '') => String(value || '').trim();
            const getArenaOrderedProfileIds = (profiles = []) => (
                [...(profiles || [])]
                    .filter((profile) => profile?.firebaseId && (profile?.nombre || '').trim())
                    .sort((a, b) => (a.nombre || '').localeCompare((b.nombre || ''), 'es', { sensitivity: 'base' }))
                    .map((profile) => profile.firebaseId)
            );
            const getBattleScopeOptions = (profiles = [], scopeId = 'GENERAL') => {
                const mode = String(scopeId || 'GENERAL').trim().toUpperCase();
                const orderedProfiles = [...(profiles || [])]
                    .filter((profile) => profile?.firebaseId && (profile?.nombre || '').trim())
                    .sort((a, b) => (a.nombre || '').localeCompare((b.nombre || ''), 'es', { sensitivity: 'base' }));

                if (mode === 'GENERAL') {
                    return [{ key: 'all', label: 'Todas', typeLabel: 'General', ids: orderedProfiles.map((profile) => profile.firebaseId) }];
                }

                if (mode === 'EDADES') {
                    const ageBuckets = {
                        '18-28': { key: '18-28', label: '18–28', typeLabel: 'Edad', ids: [] },
                        '29-39': { key: '29-39', label: '29–39', typeLabel: 'Edad', ids: [] },
                        '40+': { key: '40+', label: '40–50+', typeLabel: 'Edad', ids: [] }
                    };
                    orderedProfiles.forEach((profile) => {
                        const age = calcularEdad(profile.fechaNacimiento);
                        if (!Number.isFinite(age) || age < 18) return;
                        if (age <= 28) ageBuckets['18-28'].ids.push(profile.firebaseId);
                        else if (age <= 39) ageBuckets['29-39'].ids.push(profile.firebaseId);
                        else ageBuckets['40+'].ids.push(profile.firebaseId);
                    });
                    return Object.values(ageBuckets);
                }

                const field = mode === 'NACIONALIDADES' ? 'nacionalidad' : 'profesion';
                const typeLabel = mode === 'NACIONALIDADES' ? 'Nacionalidad' : 'Profesión';
                const groupedMap = orderedProfiles.reduce((acc, profile) => {
                    const normalizedValue = normalizeGroupingValue(profile?.[field]);
                    if (!normalizedValue) return acc;
                    if (!acc[normalizedValue]) {
                        acc[normalizedValue] = {
                            key: normalizedValue,
                            label: formatGroupingLabel(profile?.[field]) || normalizedValue,
                            typeLabel,
                            ids: []
                        };
                    }
                    acc[normalizedValue].ids.push(profile.firebaseId);
                    return acc;
                }, {});
                return Object.values(groupedMap)
                    .sort((a, b) => a.label.localeCompare(b.label, 'es', { sensitivity: 'base' }));
            };
            const buildArenaParticipants = (profiles = [], mode = 'GENERAL', selectedGroupKey = '') => {
                const baseProfiles = [...(profiles || [])]
                    .filter((profile) => profile?.firebaseId && (profile?.nombre || '').trim())
                    .sort((a, b) => (a.nombre || '').localeCompare((b.nombre || ''), 'es', { sensitivity: 'base' }));

                if (mode === 'GENERAL') {
                    const ids = baseProfiles.map((profile) => profile.firebaseId);
                    return {
                        groupedIds: ids.length > 1
                            ? [{ key: 'general', label: 'General', typeLabel: 'General', ids }]
                            : [],
                        orderedIds: ids
                    };
                }

                const groupOptions = getBattleScopeOptions(baseProfiles, mode);
                const normalizedSelectedGroupKey = normalizeGroupingValue(selectedGroupKey);
                const groupedIds = groupOptions
                    .filter((group) => {
                        if (!normalizedSelectedGroupKey || normalizedSelectedGroupKey === 'all') return true;
                        return normalizeGroupingValue(group.key) === normalizedSelectedGroupKey;
                    })
                    .filter((group) => group.ids.length >= 2);

                return {
                    groupedIds,
                    orderedIds: groupedIds.flatMap((group) => group.ids)
                };
            };
            const getPairKey = (profileAId, profileBId) => [profileAId, profileBId].sort().join('__');
            const normalizeMatchupRecord = (rawRecord) => {
                if (!rawRecord || typeof rawRecord !== 'object') return null;

                const winnerId = String(rawRecord.winnerId || '').trim();
                const loserId = String(rawRecord.loserId || '').trim();
                if (!winnerId || !loserId || winnerId === loserId) return null;

                return {
                    winnerId,
                    loserId,
                    reason: rawRecord.reason === 'transitive' ? 'transitive' : 'direct',
                    playedAt: Number.isFinite(rawRecord.playedAt) ? rawRecord.playedAt : null
                };
            };
            const isMatchupResolved = (playedMatchups = {}, key = '') => !!normalizeMatchupRecord(playedMatchups?.[key]);
            const buildArenaDerivedState = (rawDirectMatchups = {}, orderedIds = []) => {
                const allowedIds = new Set((orderedIds || []).filter(Boolean));
                const nextDirectMatchups = {};
                const nextMatchups = {};
                const victoryGraphSets = {};

                Object.entries(rawDirectMatchups || {}).forEach(([rawKey, rawRecord]) => {
                    const normalizedRecord = normalizeMatchupRecord(rawRecord);
                    if (!normalizedRecord) return;

                    const { winnerId, loserId } = normalizedRecord;
                    if (allowedIds.size && (!allowedIds.has(winnerId) || !allowedIds.has(loserId))) return;

                    const pairKey = getPairKey(winnerId, loserId);
                    const directRecord = {
                        winnerId,
                        loserId,
                        reason: 'direct',
                        playedAt: normalizedRecord.playedAt ?? Date.now()
                    };

                    nextDirectMatchups[pairKey] = directRecord;
                    nextMatchups[pairKey] = directRecord;

                    if (!victoryGraphSets[winnerId]) victoryGraphSets[winnerId] = new Set();
                    victoryGraphSets[winnerId].add(loserId);
                });

                const graphNodes = new Set([
                    ...Object.keys(victoryGraphSets),
                    ...Object.values(victoryGraphSets).flatMap((set) => [...set])
                ]);

                graphNodes.forEach((originId) => {
                    const queue = [...(victoryGraphSets[originId] || [])];
                    const visited = new Set();

                    while (queue.length) {
                        const nodeId = queue.shift();
                        if (!nodeId || visited.has(nodeId) || nodeId === originId) continue;
                        visited.add(nodeId);

                        const pairKey = getPairKey(originId, nodeId);
                        if (!nextMatchups[pairKey]) {
                            nextMatchups[pairKey] = {
                                winnerId: originId,
                                loserId: nodeId,
                                reason: 'transitive',
                                playedAt: null
                            };
                        }

                        (victoryGraphSets[nodeId] || []).forEach((nextId) => {
                            if (!visited.has(nextId)) queue.push(nextId);
                        });
                    }
                });

                const victoryGraph = Object.fromEntries(
                    Object.entries(victoryGraphSets).map(([winnerId, losers]) => [winnerId, [...losers]])
                );
                const stats = rebuildArenaStatsFromMatchups(nextMatchups);

                return {
                    directMatchups: nextDirectMatchups,
                    matchups: nextMatchups,
                    victoryGraph,
                    stats
                };
            };
            const normalizeArenaGlobalState = (arenaName, rawArenaGlobalState = {}) => {
                const globalKey = getArenaGlobalKey(arenaName);
                if (!globalKey) return null;
                const orderedIds = getArenaOrderedProfileIds(perfiles);
                const derivedState = buildArenaDerivedState(
                    rawArenaGlobalState?.directMatchups || rawArenaGlobalState?.matchups || {},
                    orderedIds
                );
                return {
                    arenaName: globalKey,
                    orderedIds,
                    ...derivedState
                };
            };
            const findNextPendingPairInGroup = (groupIds = [], playedMatchups = {}) => {
                for (let i = 0; i < groupIds.length - 1; i++) {
                    for (let j = i + 1; j < groupIds.length; j++) {
                        const key = getPairKey(groupIds[i], groupIds[j]);
                        if (!isMatchupResolved(playedMatchups, key)) return [groupIds[i], groupIds[j]];
                    }
                }
                return null;
            };
            const findNextPendingPairByGroups = (groupedIds = [], playedMatchups = {}, globalMatchups = {}) => {
                const resolvedMatchups = { ...(playedMatchups || {}), ...(globalMatchups || {}) };
                for (const group of groupedIds) {
                    const nextPair = findNextPendingPairInGroup(group?.ids || [], resolvedMatchups);
                    if (nextPair) return nextPair;
                }
                return null;
            };
            const getGroupForPair = (groupedIds = [], profileAId, profileBId = '') => {
                if (!profileAId) return null;
                return groupedIds.find((group) => {
                    const ids = group?.ids || [];
                    if (!ids.includes(profileAId)) return false;
                    return !profileBId || ids.includes(profileBId);
                }) || null;
            };

            const rebuildArenaStatsFromMatchups = (matchups = {}) => {
                return Object.keys(matchups || {}).reduce((acc, key) => {
                    const matchupValue = normalizeMatchupRecord(matchups[key]);
                    if (!matchupValue) return acc;
                    const { winnerId, loserId } = matchupValue;
                    const prevWinner = acc[winnerId] || { wins: 0, battles: 0 };
                    const prevLoser = acc[loserId] || { wins: 0, battles: 0 };
                    return {
                        ...acc,
                        [winnerId]: {
                            wins: prevWinner.wins + 1,
                            battles: prevWinner.battles + 1
                        },
                        [loserId]: {
                            wins: prevLoser.wins,
                            battles: prevLoser.battles + 1
                        }
                    };
                }, {});
            };
            const isArenaStateKeyForArena = (arenaStateKey = '', arenaName = '') => {
                const normalizedArena = String(arenaName || '').trim();
                if (!arenaStateKey || !normalizedArena) return false;
                return arenaStateKey.endsWith(`::${normalizedArena}`);
            };
            const mergeDirectMatchupRecord = (previousRecord, nextRecord) => {
                const normalizedNext = normalizeMatchupRecord(nextRecord);
                if (!normalizedNext || normalizedNext.reason !== 'direct') return previousRecord || null;
                const normalizedPrevious = normalizeMatchupRecord(previousRecord);
                if (!normalizedPrevious || normalizedPrevious.reason !== 'direct') return normalizedNext;
                const prevPlayedAt = normalizedPrevious.playedAt ?? 0;
                const nextPlayedAt = normalizedNext.playedAt ?? 0;
                return nextPlayedAt >= prevPlayedAt ? normalizedNext : normalizedPrevious;
            };
            const getGlobalArenaDerivedState = (arenaName, sourceArenaBattleState = arenaBattleState) => {
                const normalizedArena = String(arenaName || '').trim();
                if (!normalizedArena) {
                    return buildArenaDerivedState({}, []);
                }

                const mergedDirectMatchups = {};
                Object.entries(sourceArenaBattleState || {}).forEach(([arenaStateKey, state]) => {
                    if (!isArenaStateKeyForArena(arenaStateKey, normalizedArena)) return;
                    const directMatchups = state?.directMatchups || {};
                    Object.entries(directMatchups).forEach(([pairKey, rawRecord]) => {
                        mergedDirectMatchups[pairKey] = mergeDirectMatchupRecord(mergedDirectMatchups[pairKey], rawRecord);
                    });
                });

                const allProfileIds = [...(perfiles || [])]
                    .map((profile) => profile?.firebaseId)
                    .filter(Boolean)
                    .sort((a, b) => String(a).localeCompare(String(b), 'es', { sensitivity: 'base' }));

                return buildArenaDerivedState(mergedDirectMatchups, allProfileIds);
            };
            const getArenaStats = (arenaName, profileId) => {
                const globalStats = getGlobalArenaDerivedState(arenaName).stats || {};
                const stats = globalStats[profileId] || { wins: 0, battles: 0 };
                const score = stats.battles ? Math.round((stats.wins / stats.battles) * 100) : 0;
                return { ...stats, score };
            };
            const buildArenaScoreMapFromGlobalStats = (arenaName, sourceArenaBattleState = arenaBattleState) => {
                const globalStats = getGlobalArenaDerivedState(arenaName, sourceArenaBattleState).stats || {};
                return [...(perfiles || [])]
                    .filter((profile) => profile?.firebaseId)
                    .reduce((acc, profile) => {
                        const profileStats = globalStats[profile.firebaseId] || { wins: 0, battles: 0 };
                        acc[profile.firebaseId] = profileStats.battles
                            ? Math.round((profileStats.wins / profileStats.battles) * 100)
                            : 0;
                        return acc;
                    }, {});
            };

            const findNextPendingPair = (ids = [], playedMatchups = {}) => {
                for (let i = 0; i < ids.length - 1; i++) {
                    for (let j = i + 1; j < ids.length; j++) {
                        const key = getPairKey(ids[i], ids[j]);
                        if (!isMatchupResolved(playedMatchups, key)) {
                            return [ids[i], ids[j]];
                        }
                    }
                }
                return null;
            };

            const normalizeArenaState = (arenaName, arenaState, globalStateForArena = null) => {
                if (!arenaState) return null;
                const mode = ARENA_PARTICIPANT_MODES.includes(arenaState.mode) ? arenaState.mode : 'GENERAL';
                const groupKey = String(arenaState.groupKey || 'all').trim().toLowerCase() || 'all';
                const participants = buildArenaParticipants(perfiles, mode, groupKey);
                const groupedIds = participants.groupedIds || [];
                const orderedIds = participants.orderedIds || [];
                const normalizedGlobal = normalizeArenaGlobalState(arenaName, globalStateForArena || arenaGlobalState?.[getArenaGlobalKey(arenaName)] || {});
                const directMatchups = normalizedGlobal?.directMatchups || {};
                const globalMatchups = normalizedGlobal?.matchups || {};
                const victoryGraph = normalizedGlobal?.victoryGraph || {};
                const stats = normalizedGlobal?.stats || {};
                const currentChampionId = arenaState.championId;
                const currentChallengerId = arenaState.challengerId;
                const currentGroup = getGroupForPair(groupedIds, currentChampionId, currentChallengerId);
                const currentPairIsValid = (
                    !!currentChampionId &&
                    !!currentChallengerId &&
                    currentChampionId !== currentChallengerId &&
                    !!currentGroup &&
                    !isMatchupResolved(globalMatchups, getPairKey(currentChampionId, currentChallengerId))
                );
                const nextPendingPair = groupedIds.length
                    ? findNextPendingPairByGroups(groupedIds, arenaState.matchups || {}, globalMatchups)
                    : null;
                const nextPair = currentPairIsValid
                    ? [currentChampionId, currentChallengerId]
                    : nextPendingPair;
                const isFinished = !nextPendingPair;
                const activeGroup = getGroupForPair(groupedIds, nextPair?.[0], nextPair?.[1]);

                return {
                    ...arenaState,
                    mode,
                    groupKey,
                    groupedIds,
                    orderedIds,
                    stats,
                    directMatchups,
                    matchups: globalMatchups,
                    victoryGraph,
                    championId: nextPair ? nextPair[0] : null,
                    challengerId: nextPair ? nextPair[1] : null,
                    activeGroupKey: activeGroup?.key || null,
                    activeGroupLabel: activeGroup ? `${activeGroup.typeLabel}: ${activeGroup.label}` : '',
                    isFinished
                };
            };

            useEffect(() => {
                if (!perfiles.length) return;

                const repairedStates = {};
                const updates = [];

                Object.entries(arenaBattleState || {}).forEach(([arenaKey, state]) => {
                    const { arenaName } = parseArenaBattleKey(arenaKey);
                    const normalized = normalizeArenaState(arenaName, state, arenaGlobalState?.[getArenaGlobalKey(arenaName)]);
                    if (!normalized) return;

                    const hasChanged = JSON.stringify(state) !== JSON.stringify(normalized);
                    if (!hasChanged) return;

                    repairedStates[arenaKey] = normalized;
                    updates.push(
                        db.ref(`arenaBattleState/${arenaKey}`).set(normalized)
                            .catch(error => console.error('No se pudo normalizar el estado del arena:', error))
                    );
                });

                if (!Object.keys(repairedStates).length) return;

                setArenaBattleState(prev => ({
                    ...prev,
                    ...repairedStates
                }));

                Promise.all(updates).catch(() => {});
            }, [arenaBattleState, arenaGlobalState, perfiles]);

            useEffect(() => {
                if (!perfiles.length) return;

                const legacyDirectByArena = {};
                Object.entries(arenaBattleState || {}).forEach(([arenaKey, state]) => {
                    const { arenaName } = parseArenaBattleKey(arenaKey);
                    const globalKey = getArenaGlobalKey(arenaName);
                    if (!globalKey) return;
                    if (!legacyDirectByArena[globalKey]) legacyDirectByArena[globalKey] = {};
                    Object.entries(state?.directMatchups || {}).forEach(([pairKey, rawRecord]) => {
                        const normalizedRecord = normalizeMatchupRecord(rawRecord);
                        if (!normalizedRecord) return;
                        legacyDirectByArena[globalKey][pairKey] = {
                            winnerId: normalizedRecord.winnerId,
                            loserId: normalizedRecord.loserId,
                            reason: 'direct',
                            playedAt: normalizedRecord.playedAt ?? Date.now()
                        };
                    });
                });

                const updates = [];
                const localUpdates = {};
                Object.entries(legacyDirectByArena).forEach(([arenaName, mergedDirectMatchups]) => {
                    const globalKey = getArenaGlobalKey(arenaName);
                    if (!globalKey || arenaGlobalState?.[globalKey]) return;
                    const normalizedGlobal = normalizeArenaGlobalState(arenaName, { directMatchups: mergedDirectMatchups });
                    if (!normalizedGlobal) return;
                    localUpdates[globalKey] = normalizedGlobal;
                    updates.push(
                        db.ref(`arenaGlobalState/${globalKey}`).set(normalizedGlobal)
                            .catch(error => console.error('No se pudo migrar arenaGlobalState:', error))
                    );
                });

                if (!Object.keys(localUpdates).length) return;
                setArenaGlobalState((prev) => ({ ...prev, ...localUpdates }));
                Promise.all(updates).catch(() => {});
            }, [arenaBattleState, arenaGlobalState, perfiles]);

            const initArenaBattle = (arenaName, scopeId = selectedBattleScope, groupKey = selectedBattleGroupKey) => {
                const orderedProfiles = [...perfiles]
                    .filter(p => p?.firebaseId && (p?.nombre || '').trim())
                    .sort((a, b) => (a.nombre || '').localeCompare((b.nombre || ''), 'es', { sensitivity: 'base' }));

                if (orderedProfiles.length < 2) return;

                const mode = String(scopeId || 'GENERAL').trim().toUpperCase();
                const participants = buildArenaParticipants(orderedProfiles, mode, groupKey);
                const groupedIds = participants.groupedIds || [];
                const orderedIds = participants.orderedIds || [];
                const globalKey = getArenaGlobalKey(arenaName);
                const normalizedGlobal = normalizeArenaGlobalState(arenaName, arenaGlobalState?.[globalKey] || {});
                const globalMatchups = normalizedGlobal?.matchups || {};
                const initialPair = findNextPendingPairByGroups(groupedIds, {}, globalMatchups);
                if (!initialPair) return;
                const activeGroup = getGroupForPair(groupedIds, initialPair[0], initialPair[1]);

                const nextArenaState = {
                    mode,
                    groupKey: String(groupKey || '').trim().toLowerCase() || 'all',
                    groupedIds,
                    orderedIds,
                    stats: normalizedGlobal?.stats || {},
                    directMatchups: normalizedGlobal?.directMatchups || {},
                    matchups: globalMatchups,
                    victoryGraph: normalizedGlobal?.victoryGraph || {},
                    championId: initialPair[0],
                    challengerId: initialPair[1],
                    activeGroupKey: activeGroup?.key || null,
                    activeGroupLabel: activeGroup ? `${activeGroup.typeLabel}: ${activeGroup.label}` : '',
                    isFinished: false
                };
                const arenaKey = getArenaBattleKey(arenaName, scopeId, groupKey);
                if (!arenaKey) return;

                setArenaBattleState(prev => ({
                    ...prev,
                    [arenaKey]: nextArenaState
                }));
                if (!arenaGlobalState?.[globalKey]) {
                    setArenaGlobalState((prev) => ({
                        ...prev,
                        [globalKey]: normalizedGlobal
                    }));
                    db.ref(`arenaGlobalState/${globalKey}`).set(normalizedGlobal)
                        .catch(error => console.error('No se pudo guardar arenaGlobalState inicial:', error));
                }

                db.ref(`arenaBattleState/${arenaKey}`).set(nextArenaState)
                    .catch(error => console.error('No se pudo guardar el estado del arena:', error));
            };

            const updateProfileArenaScore = async (profileId, arenaName, value) => {
                if (!profileId) return;
                try {
                    await db.ref(`perfiles/${profileId}/puntuaciones/${arenaName}`).set(value);
                } catch (error) {
                    console.error('No se pudo actualizar score del arena:', error);
                }
            };

            const registerBattleWinner = (arenaName, winnerId, scopeId = selectedBattleScope, groupKey = selectedBattleGroupKey) => {
                const arenaKey = getArenaBattleKey(arenaName, scopeId, groupKey);
                const state = arenaBattleState[arenaKey];
                if (!state || state.isFinished) return;
                const globalKey = getArenaGlobalKey(arenaName);
                const currentGlobalState = normalizeArenaGlobalState(arenaName, arenaGlobalState?.[globalKey] || {});

                const groupedIds = Array.isArray(state.groupedIds) && state.groupedIds.length
                    ? state.groupedIds
                    : buildArenaParticipants(perfiles, state.mode || 'GENERAL', state.groupKey || 'all').groupedIds;
                const { championId, challengerId } = state;
                if (winnerId !== championId && winnerId !== challengerId) return;
                const loserId = winnerId === championId ? challengerId : championId;
                if (!winnerId || !loserId) return;

                const pairKey = getPairKey(winnerId, loserId);
                const updatedDirectMatchups = {
                    ...(currentGlobalState?.directMatchups || {}),
                    [pairKey]: {
                        winnerId,
                        loserId,
                        reason: 'direct',
                        playedAt: Date.now()
                    }
                };

                const derivedState = buildArenaDerivedState(updatedDirectMatchups, getArenaOrderedProfileIds(perfiles));
                const updatedMatchups = derivedState.matchups;
                const updatedStats = derivedState.stats || {};

                const winnerGroup = getGroupForPair(groupedIds, winnerId, loserId);
                const findNextOpponentForWinner = (ids, currentWinnerId, playedMatchups) => {
                    if (!currentWinnerId) return null;

                    for (const contenderId of ids) {
                        if (!contenderId || contenderId === currentWinnerId) continue;
                        const key = getPairKey(currentWinnerId, contenderId);
                        if (!isMatchupResolved(playedMatchups, key)) {
                            return contenderId;
                        }
                    }

                    return null;
                };
                const winnerNextOpponentId = findNextOpponentForWinner(winnerGroup?.ids || [], winnerId, updatedMatchups);
                const nextPair = winnerNextOpponentId
                    ? [winnerId, winnerNextOpponentId]
                    : findNextPendingPairByGroups(groupedIds, state.matchups || {}, updatedMatchups);
                const activeGroup = getGroupForPair(groupedIds, nextPair?.[0], nextPair?.[1]);
                const nextGlobalState = {
                    arenaName: globalKey,
                    orderedIds: getArenaOrderedProfileIds(perfiles),
                    directMatchups: derivedState.directMatchups,
                    matchups: updatedMatchups,
                    victoryGraph: derivedState.victoryGraph,
                    stats: updatedStats
                };

                const nextArenaState = {
                    ...state,
                    groupedIds,
                    directMatchups: nextGlobalState.directMatchups,
                    stats: updatedStats,
                    matchups: updatedMatchups,
                    victoryGraph: derivedState.victoryGraph,
                    championId: nextPair ? nextPair[0] : null,
                    challengerId: nextPair ? nextPair[1] : null,
                    activeGroupKey: activeGroup?.key || null,
                    activeGroupLabel: activeGroup ? `${activeGroup.typeLabel}: ${activeGroup.label}` : '',
                    isFinished: !nextPair
                };
                const nextArenaBattleState = {
                    ...(arenaBattleState || {}),
                    [arenaKey]: nextArenaState
                };
                const globalScoreMap = buildArenaScoreMapFromGlobalStats(arenaName, nextArenaBattleState);

                setPerfiles(prev => prev.map(profile => {
                    if (!profile?.firebaseId || !Object.prototype.hasOwnProperty.call(globalScoreMap, profile.firebaseId)) return profile;
                    const nextScore = globalScoreMap[profile.firebaseId];
                    return {
                        ...profile,
                        puntuaciones: { ...(profile.puntuaciones || {}), [arenaName]: nextScore }
                    };
                }));

                Object.entries(globalScoreMap).forEach(([profileId, nextScore]) => {
                    updateProfileArenaScore(profileId, arenaName, nextScore);
                });

                setArenaBattleState(prev => ({
                    ...prev,
                    [arenaKey]: nextArenaState
                }));
                setArenaGlobalState(prev => ({
                    ...prev,
                    [globalKey]: nextGlobalState
                }));

                Promise.all([
                    db.ref(`arenaGlobalState/${globalKey}`).set(nextGlobalState),
                    db.ref(`arenaBattleState/${arenaKey}`).set(nextArenaState)
                ])
                    .catch(error => console.error('No se pudo guardar avance de batallas:', error));
            };

            const resetAllScores = async () => {
                const confirmed = window.confirm('Esto va a poner TODAS las calificaciones en 0. ¿Continuar?');
                if (!confirmed) return;

                try {
                    await Promise.all((perfiles || []).map(profile => {
                        if (!profile?.firebaseId) return Promise.resolve();
                        return db.ref(`perfiles/${profile.firebaseId}/puntuaciones`).set(createZeroScores());
                    }));

                    setPerfiles(prev => prev.map(profile => ({
                        ...profile,
                        puntuaciones: createZeroScores()
                    })));
                    setArenaBattleState({});
                    setArenaGlobalState({});
                    await db.ref('arenaBattleState').remove();
                    await db.ref('arenaGlobalState').remove();
                    alert('Calificaciones reiniciadas en 0 para todos los items.');
                } catch (error) {
                    console.error('No se pudieron resetear las calificaciones:', error);
                    alert('No se pudo completar el reseteo.');
                }
            };

            const resetArenaScores = async (arenaName, scopeId = selectedBattleScope, groupKey = selectedBattleGroupKey) => {
                if (!arenaName) {
                    alert('Seleccioná un item para resetear.');
                    return;
                }

                const confirmed = window.confirm(`Esto va a poner en 0 el item "${arenaName}" para todos los perfiles. ¿Continuar?`);
                if (!confirmed) return;

                try {
                    const nextArenaState = { ...(arenaBattleState || {}) };
                    const keysToDelete = Object.keys(nextArenaState).filter((key) => isArenaStateKeyForArena(key, arenaName));
                    keysToDelete.forEach((key) => delete nextArenaState[key]);

                    await Promise.all(keysToDelete.map((key) => db.ref(`arenaBattleState/${key}`).remove()));

                    setArenaBattleState(nextArenaState);

                    await Promise.all((perfiles || []).map((profile) => {
                        if (!profile?.firebaseId) return Promise.resolve();
                        return db.ref(`perfiles/${profile.firebaseId}/puntuaciones/${arenaName}`).set(0);
                    }));

                    setPerfiles((prev) => prev.map((profile) => ({
                        ...profile,
                        puntuaciones: {
                            ...(profile.puntuaciones || {}),
                            [arenaName]: 0
                        }
                    })));

                    const arenaKey = getArenaBattleKey(arenaName, scopeId, groupKey);
                    setArenaBattleState((prev) => {
                        if (!prev?.[arenaKey]) return prev;
                        const next = { ...prev };
                        delete next[arenaKey];
                        return next;
                    });
                    setArenaGlobalState((prev) => {
                        const globalKey = getArenaGlobalKey(arenaName);
                        if (!prev?.[globalKey]) return prev;
                        const next = { ...prev };
                        delete next[globalKey];
                        return next;
                    });

                    await db.ref(`arenaBattleState/${arenaKey}`).remove();
                    await db.ref(`arenaGlobalState/${getArenaGlobalKey(arenaName)}`).remove();
                    alert(`Se reseteó "${arenaName}" (${getBattleScopeLabel(scopeId)}) y se limpió su estado de batallas.`);
                } catch (error) {
                    console.error('No se pudo resetear el item:', error);
                    alert('No se pudo resetear ese item.');
                }
            };

            const resetSpecificBattle = async (arenaName, profileAId, profileBId, scopeId = selectedBattleScope, groupKey = selectedBattleGroupKey) => {
                const arenaKey = getArenaBattleKey(arenaName, scopeId, groupKey);
                const arenaState = arenaBattleState?.[arenaKey];
                const globalKey = getArenaGlobalKey(arenaName);
                const currentGlobalState = normalizeArenaGlobalState(arenaName, arenaGlobalState?.[globalKey] || {});
                if (!arenaState) {
                    alert('Esa arena no tiene estado cargado.');
                    return;
                }

                const currentMatchups = currentGlobalState?.matchups || {};
                const currentDirectMatchups = currentGlobalState?.directMatchups || {};
                const playedKeys = Object.keys(currentMatchups).filter((key) => !!currentMatchups[key]);
                if (!playedKeys.length) {
                    alert('No hay cruces jugados para resetear en esta arena.');
                    return;
                }

                const pairKey = getPairKey(profileAId, profileBId);
                if (!currentMatchups[pairKey]) {
                    alert('Ese cruce no existe o no fue jugado todavía.');
                    return;
                }
                if (!currentDirectMatchups[pairKey]) {
                    alert('Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.');
                    return;
                }

                const confirmed = window.confirm('¿Seguro que querés deshacer esta batalla?');
                if (!confirmed) return;

                try {
                    const updatedDirectMatchups = { ...currentDirectMatchups };
                    delete updatedDirectMatchups[pairKey];

                    const rebuiltDerivedState = buildArenaDerivedState(updatedDirectMatchups, getArenaOrderedProfileIds(perfiles));
                    const nextGlobalState = {
                        arenaName: globalKey,
                        orderedIds: getArenaOrderedProfileIds(perfiles),
                        directMatchups: rebuiltDerivedState.directMatchups,
                        matchups: rebuiltDerivedState.matchups,
                        victoryGraph: rebuiltDerivedState.victoryGraph,
                        stats: rebuiltDerivedState.stats
                    };
                    const candidateState = {
                        ...arenaState,
                        directMatchups: nextGlobalState.directMatchups,
                        matchups: nextGlobalState.matchups,
                        victoryGraph: nextGlobalState.victoryGraph,
                        stats: nextGlobalState.stats
                    };
                    const normalizedState = normalizeArenaState(arenaName, candidateState, nextGlobalState);

                    if (!normalizedState) {
                        alert('No se pudo recomponer el estado del arena.');
                        return;
                    }

                    setArenaBattleState((prev) => ({
                        ...prev,
                        [arenaKey]: normalizedState
                    }));
                    setArenaGlobalState((prev) => ({
                        ...prev,
                        [globalKey]: nextGlobalState
                    }));

                    await Promise.all([
                        db.ref(`arenaGlobalState/${globalKey}`).set(nextGlobalState),
                        db.ref(`arenaBattleState/${arenaKey}`).set(normalizedState)
                    ]);

                    const nextArenaBattleState = {
                        ...(arenaBattleState || {}),
                        [arenaKey]: normalizedState
                    };
                    const globalScoreMap = buildArenaScoreMapFromGlobalStats(arenaName, nextArenaBattleState);
                    await Promise.all(Object.entries(globalScoreMap).map(async ([profileId, nextScore]) => {
                        await db.ref(`perfiles/${profileId}/puntuaciones/${arenaName}`).set(nextScore);
                    }));

                    setPerfiles((prev) => prev.map((profile) => {
                        if (!profile?.firebaseId || !Object.prototype.hasOwnProperty.call(globalScoreMap, profile.firebaseId)) return profile;
                        const nextScore = globalScoreMap[profile.firebaseId];
                        return {
                            ...profile,
                            puntuaciones: {
                                ...(profile.puntuaciones || {}),
                                [arenaName]: nextScore
                            }
                        };
                    }));

                    alert('Batalla reseteada correctamente.');
                } catch (error) {
                    console.error('No se pudo resetear la batalla:', error);
                    alert('No se pudo resetear esa batalla.');
                }
            };

            const filteredProfiles = useMemo(() => {
                const base = perfiles;

                if (activeTab === 'RANKING') {
                    return [...base].sort((a, b) => parseFloat(calcularPromedio(b)) - parseFloat(calcularPromedio(a)));
                }

                if (activeTab === 'CATEGORIAS' && selectedCategory) {
                    return base.filter(p => obtenerCategoriasDePerfil(p).includes(selectedCategory));
                }

                return base;
            }, [perfiles, activeTab, selectedCategory]);
            const brokenProfileIds = useMemo(() => {
                return new Set(
                    brokenGalleryPhotos
                        .map((photo) => String(photo?.profileId || '').trim())
                        .filter(Boolean)
                );
            }, [brokenGalleryPhotos]);
            const tallerProfiles = useMemo(() => {
                const normalizedSearch = String(tallerSearchTerm || '').trim().toLowerCase();
                const normalizeProfession = (profile) => {
                    const professionFields = [profile?.profesion, profile?.profesiones];
                    return professionFields
                        .flatMap((value) => {
                            if (Array.isArray(value)) return value;
                            if (typeof value === 'string') return value.split(',');
                            return [];
                        })
                        .map((entry) => String(entry || '').trim())
                        .filter(Boolean)
                        .join(' ');
                };
                const hasCoreProfileData = (profile) => {
                    if (!profile || typeof profile !== 'object') return false;
                    return [
                        String(profile.nombre || '').trim(),
                        String(profile.nacionalidad || '').trim(),
                        String(profile.ciudad || '').trim(),
                        normalizeProfession(profile),
                        String(profile.fechaNacimiento || '').trim(),
                        String(profile.estaturaCm || '').trim()
                    ].some(Boolean) || (Array.isArray(profile.fotos) && profile.fotos.some(Boolean));
                };

                return [...(perfiles || [])]
                    .filter((profile) => {
                        if (!hasCoreProfileData(profile)) return false;
                        if (showIncompleteMainPhotosOnly && hasAllMainPhotosAssigned(profile)) return false;
                        if (showBrokenPhotosOnly) {
                            const profileId = String(profile?.firebaseId || profile?.id || '').trim();
                            if (!profileId || !brokenProfileIds.has(profileId)) return false;
                        }
                        if (!normalizedSearch) return true;
                        const haystack = [
                            String(profile.nombre || '').trim(),
                            String(profile.nacionalidad || '').trim(),
                            normalizeProfession(profile)
                        ].join(' ').toLowerCase();
                        return haystack.includes(normalizedSearch);
                    })
                    .sort((a, b) => String(a?.nombre || '').localeCompare(String(b?.nombre || ''), 'es', { sensitivity: 'base' }));
            }, [perfiles, tallerSearchTerm, showIncompleteMainPhotosOnly, showBrokenPhotosOnly, brokenProfileIds]);
            const selectedTallerProfile = useMemo(
                () => tallerProfiles.find((profile) => profile?.firebaseId === selectedTallerProfileId) || null,
                [tallerProfiles, selectedTallerProfileId]
            );
            useEffect(() => {
                const closeTooltip = () => setTallerMissingPhotosTooltipProfileId('');
                document.addEventListener('click', closeTooltip);
                return () => document.removeEventListener('click', closeTooltip);
            }, []);
            const battleScopeOptions = useMemo(() => {
                if (!selectedBattleScope) return [];
                return getBattleScopeOptions(perfiles, selectedBattleScope);
            }, [perfiles, selectedBattleScope]);
            const requiresBattleGroupSelection = selectedBattleScope && selectedBattleScope !== 'GENERAL';
            const getSortValue = (profile, key) => {
                if (key === 'promedio') return Number(calcularPromedio(profile)) || 0;
                if (key === 'nombre') return (profile.nombre || '').toLowerCase();
                if (key === 'nacionalidad') return (profile.nacionalidad || '').toLowerCase();
                if (key === 'edad') {
                    const edad = calcularEdad(profile.fechaNacimiento);
                    return typeof edad === 'number' ? edad : -1;
                }
                if (key === 'Rostro') {
                    return getRostroScore(profile) || 0;
                }
                if (key === 'Cuerpo') {
                    return getCuerpoScore(profile) || 0;
                }
                if (key === 'Actitud') {
                    return getActitudScore(profile) || 0;
                }
                return Number(profile.puntuaciones?.[key] || 0);
            };
            const getDisplayedRankingScore = (profile) => {
                if (sortBy === 'promedio') return calcularPromedio(profile);
                if (sortBy === 'Rostro') return getRostroScore(profile).toFixed(0);
                if (sortBy === 'Cuerpo') return getCuerpoScore(profile).toFixed(0);
                if (sortBy === 'Actitud') return getActitudScore(profile).toFixed(0);
                if (CARACTERISTICAS.includes(sortBy)) {
                    return Number(profile.puntuaciones?.[sortBy] || 0).toFixed(0);
                }
                return calcularPromedio(profile);
            };

            const toggleSort = (key, defaultDirection = 'asc') => {
                if (sortBy === key) {
                    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                    return;
                }
                setSortBy(key);
                setSortDirection(defaultDirection);
            };

            const getScoreBreakdownByCategory = (profileId, categoryKey) => {
                const arenaNames = SCORE_GROUP_TO_ARENAS[categoryKey] || [];
                const winIds = new Set();
                const lossIds = new Set();
                const arenaEntries = Object.entries(arenaBattleState || {});

                arenaNames.forEach((arenaName) => {
                    const arenaMatchups = arenaGlobalState?.[getArenaGlobalKey(arenaName)]?.matchups || {};
                    Object.values(arenaMatchups).forEach((match) => {
                        if (!match || typeof match !== 'object') return;
                        if (match.winnerId === profileId && match.loserId) {
                            winIds.add(match.loserId);
                        }
                        if (match.loserId === profileId && match.winnerId) {
                            lossIds.add(match.winnerId);
                        }
                    });
                });

                const profileNameById = new Map(
                    (perfiles || [])
                        .filter((profile) => profile?.firebaseId)
                        .map((profile) => [profile.firebaseId, profile.nombre || 'Sin nombre'])
                );

                const getSortedNames = (idsSet) => (
                    [...idsSet]
                        .map((id) => profileNameById.get(id))
                        .filter(Boolean)
                        .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
                );

                return {
                    wins: getSortedNames(winIds),
                    losses: getSortedNames(lossIds)
                };
            };

            const getItemBattleBreakdown = (profileId, arenaName) => {
                const safeArenaName = String(arenaName || '').trim();
                const selectedProfileId = String(profileId || '').trim();
                if (!safeArenaName || !selectedProfileId) {
                    return { arenaName: safeArenaName, wins: [], losses: [] };
                }

                const arenaMatchups = arenaGlobalState?.[getArenaGlobalKey(safeArenaName)]?.matchups || {};
                const profileNameById = new Map(
                    (perfiles || [])
                        .filter((profile) => profile?.firebaseId)
                        .map((profile) => [profile.firebaseId, profile.nombre || 'Sin nombre'])
                );
                const mapBattle = ([pairKey, match]) => {
                    if (!match || typeof match !== 'object') return null;
                    const winnerId = String(match.winnerId || '').trim();
                    const loserId = String(match.loserId || '').trim();
                    if (!winnerId || !loserId) return null;

                    const isWin = winnerId === selectedProfileId;
                    const isLoss = loserId === selectedProfileId;
                    if (!isWin && !isLoss) return null;

                    const opponentId = isWin ? loserId : winnerId;
                    return {
                        pairKey,
                        arenaName: safeArenaName,
                        profileId: selectedProfileId,
                        opponentId,
                        opponentName: profileNameById.get(opponentId) || 'Sin nombre',
                        winnerId,
                        loserId
                    };
                };

                const battles = Object.entries(arenaMatchups)
                    .map(mapBattle)
                    .filter(Boolean)
                    .sort((a, b) => a.opponentName.localeCompare(b.opponentName, 'es', { sensitivity: 'base' }));

                return {
                    arenaName: safeArenaName,
                    wins: battles.filter((battle) => battle.winnerId === selectedProfileId),
                    losses: battles.filter((battle) => battle.loserId === selectedProfileId)
                };
            };
            const getItemBattleSummary = (profileId, arenaName) => {
                const detail = getItemBattleBreakdown(profileId, arenaName);
                const wins = detail.wins.length;
                const losses = detail.losses.length;
                const total = wins + losses;
                const winRate = total ? (wins / total) * 100 : 0;
                return { wins, losses, total, winRate };
            };

            const sortedProfiles = [...filteredProfiles].sort((a, b) => {
                const aValue = getSortValue(a, sortBy);
                const bValue = getSortValue(b, sortBy);

                let result = 0;
                if (typeof aValue === 'string' || typeof bValue === 'string') {
                    result = String(aValue).localeCompare(String(bValue), 'es', { sensitivity: 'base' });
                } else {
                    result = aValue - bValue;
                }

                if (result === 0) {
                    return (a.nombre || '').localeCompare((b.nombre || ''), 'es', { sensitivity: 'base' });
                }

                return sortDirection === 'asc' ? result : -result;
            });

            const showExtendedRankingColumns = !isSidebarOpen;
            const visibleRankingProfiles = useMemo(() => (
                isFullRankingVisible ? sortedProfiles : sortedProfiles.slice(0, 10)
            ), [sortedProfiles, isFullRankingVisible]);

            return (
                <div className="app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative">
                    {isSidebarOpen && (
                    <aside className="hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative">
                        <div className="corner-ember-glow corner-ember-glow--left corner-ember-glow--top" aria-hidden="true"></div>
                        <div className="mb-12 text-center flex-shrink-0">
                            <h1 className="neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none">G2</h1>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2">Elite Database</p>
                        </div>
                        <nav className="flex-1 space-y-2 mb-8">
                            {[
                                { id: 'EXPLORAR', icon: 'layout-grid', label: 'Explorar' },
                                { id: 'RANKING', icon: 'trending-up', label: 'Ranking' },
                                { id: 'BATALLAS', icon: 'swords', label: 'Batallas' },
                                { id: 'GALERIA', icon: 'images', label: 'Galería' },
                                { id: 'CAMPEONAS', icon: 'crown', label: 'Campeonas' },
                                { id: 'anonimo', icon: 'user-round-x', label: 'ánonimo' },
                                { id: 'TALLER', icon: 'hammer', label: 'Taller' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        setSelectedCategory(null);
                                        setSelectedGalleryBucket(null);
                                        setSelectedGalleryIndex(null);
                                        setSelectedTallerProfileId('');
                                    }}
                                    className={`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${activeTab === item.id ? 'is-active text-[#ecfeff]' : 'text-slate-900'}`}
                                >
                                    <LucideIcon name={item.icon} size={18} />
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        <button
                            onClick={() => openNewProfileForm()}
                            className="btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0"
                        >
                            <LucideIcon name="plus" size={16} /> Nuevo Perfil
                        </button>
                    </aside>
                    )}

                    <main className="flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative">
                        <button
                            onClick={() => setIsSidebarOpen(prev => !prev)}
                            className="sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900"
                            aria-label={isSidebarOpen ? 'Replegar menú lateral' : 'Desplegar menú lateral'}
                            title={isSidebarOpen ? 'Replegar menú lateral' : 'Desplegar menú lateral'}
                        >
                            <LucideIcon name={isSidebarOpen ? 'panel-left-close' : 'panel-left-open'} size={12} />
                        </button>

                        <div className={`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${isSidebarOpen ? "p-6 md:p-10 lg:p-12" : "p-4 md:p-8 lg:p-10"}`}>
                            <div className="corner-ember-glow corner-ember-glow--left corner-ember-glow--top" aria-hidden="true"></div>
                            <div className="corner-ember-glow corner-ember-glow--right corner-ember-glow--top" aria-hidden="true"></div>

                    {selectedTallerProfile && (
                        <div
                            className={`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${isSidebarOpen ? 'lg:pl-[19rem] lg:justify-end' : ''}`}
                            onClick={() => setSelectedTallerProfileId('')}
                            role="presentation"
                        >
                            <section
                                className="taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto"
                                onClick={(event) => event.stopPropagation()}
                                role="dialog"
                                aria-modal="true"
                                aria-label="Ficha del personaje"
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedTallerProfileId('')}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition"
                                    aria-label="Cerrar ficha"
                                >
                                    <LucideIcon name="x" size={18} />
                                </button>
                                <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start">
                                    <div className="taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35">
                                        <img
                                            src={selectedTallerProfile.fotos?.[0] || 'https://via.placeholder.com/500x700'}
                                            alt={selectedTallerProfile.nombre || 'Perfil seleccionado'}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black">Ficha del personaje</p>
                                            <h3 className="taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2">
                                                {selectedTallerProfile.nombre || 'Sin nombre'}
                                            </h3>
                                        </div>
                                        {!selectedTallerProfile?.isAnonymousGallery && (
                                            <div className="grid grid-cols-1 gap-4">
                                                <article className="taller-data-chip"><span>Profesión</span><strong>{selectedTallerProfile.profesion || 'No definida'}</strong></article>
                                                <article className="taller-data-chip"><span>Nacionalidad - Ciudad</span><strong>{`${selectedTallerProfile.nacionalidad || 'No definida'} - ${selectedTallerProfile.ciudad || 'No definida'}`}</strong></article>
                                                <article className="taller-data-chip"><span>Fecha de nacimiento - Edad</span><strong>{`${selectedTallerProfile.fechaNacimiento || 'No informado'} - ${calcularEdad(selectedTallerProfile.fechaNacimiento)} años`}</strong></article>
                                                <article className="taller-data-chip"><span>Estatura</span><strong>{selectedTallerProfile.estaturaCm ? `${selectedTallerProfile.estaturaCm} cm` : 'No informada'}</strong></article>
                                            </div>
                                        )}
                                        <div className="pt-2">
                                            <div className="grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center">
                                                {!selectedTallerProfile?.isAnonymousGallery && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setScorePanelModal({ isOpen: true, profile: selectedTallerProfile });
                                                        }}
                                                        className="btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase"
                                                    >
                                                        Puntajes
                                                    </button>
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const existingWindow = galleryWindowRef.current;
                                                        const nuevaVentana = existingWindow && !existingWindow.closed ? existingWindow : window.open('', '_blank');
                                                        galleryWindowRef.current = nuevaVentana;
                                                        renderGalleryWindow({
                                                            targetWindow: nuevaVentana,
                                                            profileName: selectedTallerProfile?.nombre || '',
                                                            profession: selectedTallerProfile?.profesion || '',
                                                            photos: [
                                                                ...((selectedTallerProfile?.galeria?.fotos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'image'), sourceTag: 'fotos', sourceIndex: index }))),
                                                                ...((selectedTallerProfile?.galeria?.videos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'video'), sourceTag: 'videos', sourceIndex: index })))
                                                            ],
                                                            editingId: selectedTallerProfile?.firebaseId || selectedTallerProfile?.id || '',
                                                            battlePhotoPrefs: selectedTallerProfile?.batallaFotosPreferidas || selectedTallerProfile?.galeria?.battlePhotoPreferences || {},
                                                            profilePhotoUrl: selectedTallerProfile?.fotos?.[0] || ''
                                                        });
                                                        nuevaVentana?.focus();
                                                    }}
                                                    className="btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase"
                                                >
                                                    Ver Galería
                                                </button>
                                                {!selectedTallerProfile?.isAnonymousGallery && (
                                                    <>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedTallerProfileId('');
                                                                openProfileEditor(selectedTallerProfile);
                                                            }}
                                                            className="w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition"
                                                            aria-label="Editar ficha completa"
                                                            title="Editar ficha completa"
                                                        >
                                                            ✏️
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => requestDeleteProfile(selectedTallerProfile)}
                                                            className="w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition"
                                                            aria-label="Eliminar ficha"
                                                            title="Eliminar ficha"
                                                        >
                                                            🗑️
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* VISTA TALLER (VACÍA POR AHORA) */}
                    {activeTab === 'TALLER' && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="space-y-2">
                                <h2 className="neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter">Taller</h2>
                            </div>

                            <div className="max-w-2xl">
                                <input
                                    id="tallerSearchInput"
                                    type="text"
                                    value={tallerSearchTerm}
                                    onChange={(event) => setTallerSearchTerm(event.target.value)}
                                    placeholder="Ej: Argentina, Modelo, Lucía..."
                                    aria-label="Buscar perfiles del taller"
                                    className="w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                                />
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowIncompleteMainPhotosOnly((prev) => !prev)}
                                    className={`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${showIncompleteMainPhotosOnly ? 'btn-metal--danger' : ''}`}
                                >
                                    Fotos incompletas {showIncompleteMainPhotosOnly ? '(Activo)' : ''}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowBrokenPhotosOnly((prev) => !prev)}
                                    className={`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${showBrokenPhotosOnly ? 'btn-metal--danger' : ''}`}
                                >
                                    Fotos Rotas {showBrokenPhotosOnly ? '(Activo)' : ''}
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                                {tallerProfiles.map((p) => {
                                    const neonClass = getNeonClassByProfession(p.profesion);
                                    const isSelected = selectedTallerProfileId && selectedTallerProfileId === p.firebaseId;
                                    const missingLabels = getMissingMainPhotoLabels(p);
                                    const showMissingPhotosTooltip = tallerMissingPhotosTooltipProfileId === (p.firebaseId || p.nombre);
                                    return (
                                        <button
                                            key={p.firebaseId || p.nombre}
                                            type="button"
                                            onClick={() => {
                                                if (tallerLongPressTriggeredRef.current) {
                                                    tallerLongPressTriggeredRef.current = false;
                                                    return;
                                                }
                                                setTallerMissingPhotosTooltipProfileId('');
                                                setSelectedTallerProfileId('');
                                                openProfileEditor(p);
                                            }}
                                            onContextMenu={(event) => {
                                                if (!showIncompleteMainPhotosOnly || !missingLabels.length) return;
                                                event.preventDefault();
                                                event.stopPropagation();
                                                setTallerMissingPhotosTooltipProfileId((prev) => (
                                                    prev === (p.firebaseId || p.nombre) ? '' : (p.firebaseId || p.nombre)
                                                ));
                                            }}
                                            onTouchStart={() => {
                                                if (!showIncompleteMainPhotosOnly || !missingLabels.length) return;
                                                tallerLongPressTriggeredRef.current = false;
                                                clearTimeout(tallerLongPressTimeoutRef.current);
                                                tallerLongPressTimeoutRef.current = setTimeout(() => {
                                                    tallerLongPressTriggeredRef.current = true;
                                                    setTallerMissingPhotosTooltipProfileId(p.firebaseId || p.nombre);
                                                }, 550);
                                            }}
                                            onTouchEnd={() => {
                                                clearTimeout(tallerLongPressTimeoutRef.current);
                                            }}
                                            onTouchMove={() => {
                                                clearTimeout(tallerLongPressTimeoutRef.current);
                                            }}
                                            className={`profile-card rounded-2xl p-4 relative text-left transition-all ${isSelected ? 'taller-card--selected' : ''}`}
                                        >
                                            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70">
                                                <img
                                                    src={p.fotos?.[0] || 'https://via.placeholder.com/400x500'}
                                                    alt={p.nombre || 'Personaje'}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <h3 className="text-lg font-black text-white uppercase tracking-wide truncate">{p.nombre || 'Sin nombre'}</h3>
                                            <p className="text-xs text-slate-300 truncate">{p.nacionalidad || 'Nacionalidad no definida'}</p>
                                            <p
                                                className="text-[10px] uppercase font-bold tracking-widest mt-2 truncate"
                                                style={{ color: neonClass.color, textShadow: `0 0 12px ${neonClass.sombra}` }}
                                            >
                                                {p.profesion || 'Profesión no definida'}
                                            </p>
                                            {showMissingPhotosTooltip && (
                                                <button
                                                    type="button"
                                                    className="absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        openProfileGalleryFromTooltip(p);
                                                    }}
                                                    role="tooltip"
                                                    title="Ir a la galería de este personaje"
                                                >
                                                    <p className="font-black uppercase tracking-wider text-red-200 mb-2">Faltan fotos:</p>
                                                    <ul className="space-y-1 mb-2">
                                                        {missingLabels.map((label) => (
                                                            <li key={label} className="leading-tight">• {label}</li>
                                                        ))}
                                                    </ul>
                                                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">Ir a galería ↗</span>
                                                </button>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {!tallerProfiles.length && (
                                <div className="rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300">
                                    No hay personajes que coincidan con la búsqueda.
                                </div>
                            )}

                            <MultimediaModal
                                isOpen={isMultimediaModalOpen}
                                profile={selectedTallerProfile}
                                onClose={() => setIsMultimediaModalOpen(false)}
                            />
                        </div>
                    )}


                    {activeTab === 'CAMPEONAS' && !selectedCategory && (() => {
                        const ageRanges = [
                            { id: '18-23', min: 18, max: 23 },
                            { id: '24-29', min: 24, max: 29 },
                            { id: '30-35', min: 30, max: 35 },
                            { id: '36-41', min: 36, max: 41 },
                            { id: '42-60', min: 42, max: 60 }
                        ];
                        const safeProfiles = (perfiles || []).filter(Boolean);
                        const getTopThree = (items = []) => [...items]
                            .sort((a, b) => (Number(calcularPromedio(b)) || 0) - (Number(calcularPromedio(a)) || 0))
                            .slice(0, 3);
                        const cardsBySection = {
                            nacionalidades: [],
                            profesiones: [],
                            edades: [],
                            items: [],
                            caracteristicas: []
                        };
                        const generalTop = getTopThree(safeProfiles);

                        const nacionalidades = [...new Set(safeProfiles.map((p) => String(p.nacionalidad || '').trim()).filter(Boolean))];
                        nacionalidades.forEach((nacionalidad) => cardsBySection.nacionalidades.push({
                            id: `nac-${nacionalidad}`,
                            title: `Nacionalidad · ${nacionalidad}`,
                            top: getTopThree(safeProfiles.filter((p) => String(p.nacionalidad || '').trim() === nacionalidad))
                        }));

                        ageRanges.forEach((range) => cardsBySection.edades.push({
                            id: `edad-${range.id}`,
                            title: `Edad · ${range.id}`,
                            top: getTopThree(safeProfiles.filter((p) => {
                                const age = calcularEdad(p.fechaNacimiento);
                                return typeof age === 'number' && age >= range.min && age <= range.max;
                            }))
                        }));

                        const profesiones = [...new Set(safeProfiles.map((p) => String(p.profesion || '').trim()).filter(Boolean))];
                        profesiones.forEach((profesion) => cardsBySection.profesiones.push({
                            id: `prof-${profesion}`,
                            title: `Profesión · ${profesion}`,
                            top: getTopThree(safeProfiles.filter((p) => String(p.profesion || '').trim() === profesion))
                        }));

                        CARACTERISTICAS.forEach((item) => {
                            const top = [...safeProfiles]
                                .sort((a, b) => (Number(b?.puntuaciones?.[item]) || 0) - (Number(a?.puntuaciones?.[item]) || 0))
                                .slice(0, 3);
                            cardsBySection.items.push({ id: `item-${item}`, title: `Ítem · ${item}`, top, scoreType: 'item', scoreKey: item });
                        });

                        [['Cuerpo', ['Cuerpo', 'Cola', 'Pechos', 'Cintura', 'Piernas', 'Estatura']], ['Rostro', ['Rostro', 'Ojos', 'Boca', 'Cabello']], ['Actitud', ['Sensualidad', 'Carisma', 'Elegancia', 'Dulzura', 'Talento']]].forEach(([label, keys]) => {
                            const top = [...safeProfiles]
                                .map((p) => ({
                                    ...p,
                                    __metaScore: keys.reduce((acc, key) => acc + (Number(p?.puntuaciones?.[key]) || 0), 0) / keys.length
                                }))
                                .sort((a, b) => (b.__metaScore || 0) - (a.__metaScore || 0))
                                .slice(0, 3);
                            cardsBySection.caracteristicas.push({ id: `meta-${label}`, title: label, top, scoreType: 'meta' });
                        });

                        const sections = [
                            { id: 'general', title: 'Podio de puntuación general', cards: [{ id: 'general-score', title: 'General · Ranking total', top: generalTop }] },
                            { id: 'nacionalidades', title: 'Podios por nacionalidades', cards: cardsBySection.nacionalidades },
                            { id: 'profesiones', title: 'Podios por profesión', cards: cardsBySection.profesiones },
                            { id: 'edades', title: 'Podios por edades', cards: cardsBySection.edades },
                            { id: 'items', title: 'Podios por ítem', cards: cardsBySection.items },
                            { id: 'caracteristicas', title: 'Podios por características', cards: cardsBySection.caracteristicas }
                        ];

                        const renderPodiumCard = (card, isGeneralSection = false) => (
                            <article key={card.id} className={`champion-podium-card champion-podium-card--${isGeneralSection ? 'general' : 'section'} rounded-2xl p-5`}>
                                <h3 className={`champion-podium-title text-xs font-black uppercase tracking-[0.18em] mb-3 ${isGeneralSection ? 'text-[var(--metal-gold)]' : 'text-cyan-100'}`}>{card.title}</h3>
                                <ol className="space-y-2">
                                    {card.top.length ? card.top.map((p, idx) => {
                                        const championThumb = getSafeImageSrc(String(p?.fotos?.[0] || '').trim(), '');
                                        const isChampion = idx === 0;
                                        return (
                                            <li key={`${card.id}-${p.firebaseId || p.nombre || idx}`} className={`champion-rank-row champion-rank-row--${idx + 1} flex items-center justify-between gap-3 text-xs`}>
                                                <div className="flex items-center gap-2 min-w-0">
                                                    {isChampion && championThumb && (
                                                        <div className="flex flex-col items-center shrink-0 -mt-1" title={`Campeona de ${card.title}`}>
                                                            <span className="text-[12px] leading-none -mb-0.5" aria-hidden="true">👑</span>
                                                            <img
                                                                src={championThumb}
                                                                alt={`Miniatura de ${p.nombre || 'Campeona'}`}
                                                                className={`champion-avatar w-8 h-8 rounded-full object-cover border ${isGeneralSection ? 'champion-avatar--general' : 'champion-avatar--section'}`}
                                                            />
                                                        </div>
                                                    )}
                                                    <span className={`champion-rank-name font-black truncate ${isChampion ? 'champion-rank-name--winner' : 'text-slate-100'}`}>{idx + 1}. {p.nombre || 'Sin nombre'}</span>
                                                </div>
                                                <span className={`champion-score font-black shrink-0 ${idx === 0 ? 'champion-score--winner' : ''}`}>{calcularPromedio(p)}</span>
                                            </li>
                                        );
                                    }) : <li className="text-xs text-slate-400">Sin datos suficientes.</li>}
                                </ol>
                            </article>
                        );

                        return (
                            <div className="space-y-8 animate-in fade-in duration-500">
                                <div>
                                    <h2 className="neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter">Campeonas</h2>
                                    <p className="text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1">Podios organizados por secciones</p>
                                </div>
                                <div className="space-y-7">
                                    {sections.map((section) => (
                                        <section key={section.id} className="space-y-3">
                                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85">{section.title}</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                                {section.cards.map((card) => renderPodiumCard(card, section.id === 'general'))}
                                            </div>
                                        </section>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}

                    {activeTab === 'anonimo' && !selectedCategory && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <section className="hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand">
                                <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black">Modo</p>
                                <h2 className="neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3">
                                    ánonimo
                                </h2>
                                <p className="text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl">
                                    Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta.
                                </p>
                                <div className="mt-8 space-y-5">
                                    <div className="grid gap-3 sm:grid-cols-3">
                                        {[
                                            { key: 'imagen', label: 'Imagen' },
                                            { key: 'escena', label: 'Escena' },
                                            { key: 'audio', label: 'Audio' }
                                        ].map((item) => (
                                            <button
                                                key={item.key}
                                                type="button"
                                                onClick={() => {
                                                    setAnonUploadType(item.key);
                                                    setAnonMediaError('');
                                                    setGalleryAudioError('');
                                                }}
                                                className={`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${anonUploadType === item.key ? 'text-cyan-100 border-cyan-300/50 bg-cyan-500/35' : 'text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35'}`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>

                                    {(anonUploadType === 'imagen' || anonUploadType === 'escena') && (
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <select
                                                className="theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold"
                                                value={anonMediaSource}
                                                onChange={(event) => {
                                                    setAnonMediaSource(event.target.value);
                                                    setAnonMediaError('');
                                                }}
                                            >
                                                <option value="url">URL</option>
                                                <option value="file">Archivo de dispositivo</option>
                                            </select>
                                            <select
                                                className="theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold"
                                                value={anonMediaLabel}
                                                onChange={(event) => setAnonMediaLabel(event.target.value)}
                                            >
                                                {GALLERY_LABELS.map((label) => <option key={label} value={label}>{label}</option>)}
                                            </select>
                                            {anonMediaSource === 'url' ? (
                                                <input
                                                    placeholder="URL"
                                                    className="md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold"
                                                    value={anonMediaUrl}
                                                    onChange={(event) => setAnonMediaUrl(event.target.value)}
                                                />
                                            ) : (
                                                <input
                                                    type="file"
                                                    accept={anonUploadType === 'imagen' ? 'image/*,.gif' : 'image/*,video/*,.gif'}
                                                    className="md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold"
                                                    onChange={(event) => setAnonMediaFile(event.target.files?.[0] || null)}
                                                />
                                            )}
                                            <input
                                                placeholder="Autor (opcional)"
                                                className="md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold"
                                                value={anonMediaAuthor}
                                                onChange={(event) => setAnonMediaAuthor(event.target.value)}
                                            />
                                            <button
                                                type="button"
                                                onClick={async () => {
                                                    const forcedTag = anonUploadType === 'escena' ? 'videos' : 'fotos';
                                                    await handleAnonMediaSubmit(forcedTag);
                                                }}
                                                className="md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all"
                                            >
                                                Guardar {anonUploadType}
                                            </button>
                                            {anonMediaError && (
                                                <p className="md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300">{anonMediaError}</p>
                                            )}
                                        </div>
                                    )}

                                    {anonUploadType === 'audio' && (
                                        <div className="border-t border-cyan-300/25 pt-4 mt-2 space-y-3">
                                            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black">Audio para botón 🎵</p>
                                        <input
                                            placeholder="Nombre"
                                            className="theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full"
                                            value={galleryAudioName}
                                            onChange={(event) => setGalleryAudioName(event.target.value)}
                                        />
                                        <select
                                            className="theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full"
                                            value={galleryAudioSource}
                                            onChange={(event) => setGalleryAudioSource(event.target.value)}
                                        >
                                            <option value="url">URL</option>
                                            <option value="file">Archivo de dispositivo</option>
                                        </select>
                                        {galleryAudioSource === 'url' ? (
                                            <input
                                                placeholder="URL"
                                                className="theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full"
                                                value={galleryAudioUrl}
                                                onChange={(event) => setGalleryAudioUrl(event.target.value)}
                                            />
                                        ) : (
                                            <input
                                                type="file"
                                                accept="audio/*"
                                                className="theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full"
                                                onChange={(event) => setGalleryAudioFile(event.target.files?.[0] || null)}
                                            />
                                        )}
                                        <button
                                            type="button"
                                            onClick={addGalleryAudioTrack}
                                            className="px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all"
                                        >
                                            Guardar audio en Firebase
                                        </button>
                                        {galleryAudioError ? <p className="text-xs font-black uppercase tracking-[0.12em] text-rose-300">{galleryAudioError}</p> : null}
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>
                    )}


   {/* 1. VISTA EXPLORAR (CARPETAS POR PROFESIÓN) */}
                    {activeTab === 'EXPLORAR' && !selectedCategory && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <div>
                                <h2 className="neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter">Explorar</h2>
                                <p className="text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1">Organización automática por profesión</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {[...new Set(
                                    (perfiles || [])
                                        .map(p => String(p?.profesion || '').trim())
                                        .filter(Boolean)
                                )].map(prof => {
                                    const count = (perfiles || []).filter(p => String(p?.profesion || '').trim() === prof).length;
                                    const visualStyle = getProfessionCardVisual(prof);

                                    return (
                                        <div
                                            key={prof}
                                            onClick={() => setSelectedCategory(prof)}
                                            className="profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95"
                                            style={{
                                                '--folder-color': visualStyle.baseColor,
                                                '--folder-glow': visualStyle.glowColor
                                            }}
                                        >
                                            <div className="profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6">
                                                {getEmoji(prof)}
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic">{prof}</h3>
                                            <div
                                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
                                                style={{
                                                    borderColor: 'color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)',
                                                    background: 'color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)',
                                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)'
                                                }}
                                            >
                                                <span className="text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest">{count} {count === 1 ? 'Perfil' : 'Perfiles'}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

    {/* 2. VISTA DE PERFILES (CUANDO ENTRAS A UNA CARPETA) */}
    {selectedCategory && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div
                className="hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand"
                style={{
                    '--banner-color': (activeTab === 'CATEGORIAS'
                        ? 'rgba(148, 163, 184, 0.8)'
                        : getProfessionCardVisual(selectedCategory).baseColor)
                }}
            >
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="group flex items-center"
                        aria-label="Volver"
                        title="Volver"
                    >
                        <div className="back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all">
                            <i data-lucide="arrow-left" className="w-4 h-4"></i>
                        </div>
                    </button>
                    <button
                        onClick={() => openNewProfileForm(activeTab === 'CATEGORIAS' ? '' : selectedCategory)}
                        className="w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all"
                        aria-label="Agregar nuevo perfil"
                        title="Agregar nuevo perfil"
                    >
                        +
                    </button>
                </div>
                <h2 className="neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none">
    {/* Si estamos en la pestaña de categorías, buscamos el nombre lindo. Si no, mostramos la profesión directamente */}
    {activeTab === 'CATEGORIAS'
        ? (categorias.find(c => c.firebaseId === selectedCategory)?.label || "Archivo del Reino")
        : selectedCategory
    }
</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    {(perfiles || []).filter(p => {
        if (!p) return false;
        // Si estamos en la pestaña de Categorías Inteligentes:
        if (activeTab === 'CATEGORIAS') {
            const misCategorias = obtenerCategoriasDePerfil(p);
            return misCategorias.includes(selectedCategory);
        }
        // Si estamos en Explorar (por profesión):
        return String(p.profesion || '').trim().toLowerCase() === String(selectedCategory).trim().toLowerCase();
    }).map(p => {
                    const scoreValue = Number(typeof calcularPromedio === 'function' ? calcularPromedio(p) : 0) || 0;
                    const scoreTierClass = scoreValue >= 95
                        ? 'card-score-badge--gold'
                        : scoreValue >= 86
                            ? 'card-score-badge--diamond'
                            : scoreValue >= 75
                                ? 'card-score-badge--fire'
                                : '';
                    const neonClass = getNeonClassByProfession(p.profesion);
                    return (
                        <div
                            key={p.firebaseId || Math.random()}
                            onClick={() => {
                                setContextMenuProfileId(null);
                                setTallerSearchTerm('');
                                setSelectedTallerProfileId(p.firebaseId || '');
                            }}
                            onContextMenu={(event) => handleContextMenuOpen(event, p)}
                            className="profile-card group relative rounded-2xl overflow-hidden cursor-pointer"
                            style={{
                                '--card-neon-color': neonClass.color,
                                '--card-neon-glow': neonClass.sombra
                            }}
                        >
                            <div className="aspect-[4/5] bg-slate-950 relative overflow-hidden">
                                <img
                                    src={getSafeImageSrc((p.fotos && p.fotos.length > 0) ? p.fotos[0] : '', 'https://via.placeholder.com/400x500')}
                                    className="w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    onError={applyCryingEmojiFallback}
                                />

                                <div className="absolute top-3 left-3 z-20">
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            setProfileActionError('');
                                            setContextProfile(p);
                                            setContextMenuProfileId((prev) => prev === p.firebaseId ? null : p.firebaseId);
                                        }}
                                        className="card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center"
                                        aria-label="Abrir menú contextual del perfil"
                                    >
                                        <LucideIcon name="more-vertical" size={12} />
                                    </button>

                                    {contextMenuProfileId === p.firebaseId && (
                                        <div className="absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1" onClick={(event) => event.stopPropagation()}>
                                            <button
                                                type="button"
                                                className="w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all"
                                                onClick={() => {
                                                    setContextMenuProfileId(null);
                                                    openProfileEditor(p);
                                                }}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                type="button"
                                                className="w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all"
                                                onClick={() => {
                                                    requestDeleteProfile(p);
                                                    setContextMenuProfileId(null);
                                                }}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setScorePanelModal({ isOpen: true, profile: p });
                                    }}
                                    className={`card-score-badge ${scoreTierClass} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`}
                                    title={`Puntaje de ${p.nombre}`}
                                >
                                    {scoreValue >= 75 && scoreValue <= 85 && (
                                        <span className="card-score-badge__fire-emoji" aria-hidden="true">🔥</span>
                                    )}
                                    <span className="text-[9px] font-black text-[var(--metal-gold)] leading-none">G2</span>
                                    <span className="card-score-badge__value text-lg font-black">
                                        {typeof calcularPromedio === 'function' ? calcularPromedio(p) : '8.5'}
                                    </span>
                                </button>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border">
                                        <h3 className="text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2">
                                            {p.nombre}
                                            <span className="text-[var(--metal-gold)] text-sm not-italic">
                                                ({typeof calcularEdad === 'function' ? calcularEdad(p.fechaNacimiento) : '??'})
                                            </span>
                                        </h3>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest">{p.profesion}</span>
                                            <p className="text-[7px] font-bold text-slate-400 uppercase">{p.nacionalidad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {contextMenuOpen && contextProfile && (
                <div
                    ref={contextMenuRef}
                    className="fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2"
                    style={{
                        top: `${contextMenuPosition.y}px`,
                        left: `${contextMenuPosition.x}px`
                    }}
                >
                    <button
                        type="button"
                        onClick={handleContextEdit}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        onClick={handleContextDelete}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors"
                    >
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    )}

    {/* 3. VISTA GALERÍA GLOBAL */}
    {activeTab === 'GALERIA' && !selectedCategory && (
        <div className="space-y-10 animate-in fade-in duration-500">
            <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
                <div>
                    <h2 className="neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter">Galería</h2>
                    <p className="text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1">
                        {`Vista por ${currentGalleryModeLabel} · ${galleryContextLabel}`}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {GALLERY_VIEW_MODES.map((mode) => (
                        <button
                            key={mode}
                            type="button"
                            onClick={() => setGalleryViewMode(mode)}
                            className={`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${galleryViewMode === mode ? 'btn-metal--gold text-[#fffaf0]' : 'btn-metal--silver text-slate-900'}`}
                        >
                            {GALLERY_VIEW_MODE_LABELS[mode]}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={() => setIsBrokenGalleryModalOpen(true)}
                        className="btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2"
                        title="Ver y corregir fotos rotas"
                    >
                        <span className="text-sm leading-none">💔</span>
                        Rotas ({brokenGalleryPhotos.length})
                    </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">Total</p>
                        <p className="text-2xl font-black italic text-white mt-1">{sourceGalleryPhotos.length}</p>
                    </div>
                    <div className="theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">Visibles</p>
                        <p className="text-2xl font-black italic text-[var(--metal-gold)] mt-1">{filteredGalleryPhotos.length}</p>
                    </div>
                    <div className="theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">Etiquetas</p>
                        <p className="text-2xl font-black italic text-white mt-1">{GALLERY_LABELS.length}</p>
                    </div>
                    <div className="theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">Perfiles</p>
                        <p className="text-2xl font-black italic text-white mt-1">{totalGalleryProfiles}</p>
                    </div>
                </div>
            </div>

            {galleryViewMode !== 'PERSONAJE' && isGalleryBucketMode && !activeGalleryBucket ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {galleryBuckets.map(bucket => (
                        <button
                            key={bucket.id}
                            type="button"
                            onClick={() => {
                                setSelectedGalleryBucket(bucket);
                                setSelectedGalleryIndex(null);
                            }}
                            className="group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500"
                        >
                            <div className="aspect-[4/5] bg-slate-950 relative overflow-hidden">
                                {bucket.fotoPerfil ? (
                                    <img
                                        src={getSafeImageSrc(bucket.fotoPerfil, 'https://via.placeholder.com/400x500')}
                                        alt={`Portada ${bucket.nombre}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        onError={applyCryingEmojiFallback}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                                        <LucideIcon name="image-off" size={34} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <p className="text-xl font-black italic text-white tracking-tighter leading-none">{bucket.nombre}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2">{bucket.profesion || 'Perfil'}</p>
                                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200">
                                        {bucket.photos.length} archivos
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <>
                    {galleryViewMode !== 'PERSONAJE' && isGalleryBucketMode && (
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedGalleryBucket(null);
                                    setSelectedGalleryIndex(null);
                                }}
                                className="btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900"
                            >
                                <LucideIcon name="arrow-left" size={14} />
                                Volver al índice
                            </button>
                        </div>
                    )}

                    {galleryViewMode === 'PERSONAJE' && (
                        <div className="space-y-4">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                                <label htmlFor="galleryCharacterSelector" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Selector de personajes</label>
                                <select
                                    id="galleryCharacterSelector"
                                    className="filter-select max-w-lg"
                                    value=""
                                    onChange={(event) => addCharacterToGallerySelection(event.target.value)}
                                >
                                    <option value="" disabled>{availableCharacterBuckets.length ? 'Seleccionar personaje…' : 'No hay más personajes disponibles'}</option>
                                    {availableCharacterBuckets.map((bucket) => (
                                        <option key={bucket.id} value={bucket.id}>
                                            {bucket.nombre} · {bucket.photos.length} archivos
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {selectedCharacterBuckets.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {selectedCharacterBuckets.map((bucket) => (
                                        <button
                                            key={bucket.id}
                                            type="button"
                                            onClick={() => removeCharacterFromGallerySelection(bucket.id)}
                                            className="btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900"
                                            title="Quitar personaje de la galería visible"
                                        >
                                            {bucket.nombre}
                                            <LucideIcon name="x" size={12} />
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-xs text-slate-400">Seleccioná uno o más personajes para mostrar su multimedia en la galería.</p>
                            )}
                        </div>
                    )}

                    {galleryViewMode === 'ETIQUETA' && (
                        <div className="hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4">
                            {GALLERY_LABELS.map(label => (
                                <button
                                    key={label}
                                    onClick={() => toggleEtiquetaSelection(label)}
                                    className="btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all"
                                    style={getGalleryFilterButtonStyle(label, selectedTagLabels.includes(label))}
                                >
                                    {label} · {(allGalleryPhotosByLabel[label] || []).length}
                                </button>
                            ))}
                        </div>
                    )}

                    {galleryViewMode === 'PERSONAJE' && (
                        <div className="hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4">
                            <button
                                onClick={() => setGalleryFilterLabel('INICIAL')}
                                className="btn-neon px-4 py-2 rounded-full text-[10px] transition-all"
                                style={getGalleryFilterButtonStyle('INICIAL', galleryFilterLabel === 'INICIAL')}
                            >
                                Inicial
                            </button>
                            {GALLERY_LABELS.map(label => {
                                const isActive = galleryFilterLabel === label;
                                return (
                                    <button
                                        key={label}
                                        onClick={() => setGalleryFilterLabel(label)}
                                        className="btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all"
                                        style={getGalleryFilterButtonStyle(label, isActive)}
                                    >
                                        {label} · {galleryStats[label] || 0}
                                    </button>
                                );
                            })}
                            <button
                                onClick={() => setGalleryFilterLabel('100')}
                                className="btn-neon px-4 py-2 rounded-full text-[10px] transition-all"
                                style={getGalleryFilterButtonStyle('100', galleryFilterLabel === '100')}
                            >
                                100%
                            </button>
                        </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={() => openGalleryViewer(0, { autoplay: true, fromGeneralPlay: true })}
                            disabled={!filteredGalleryPhotos.length}
                            className="btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <LucideIcon name="play" size={14} />
                            Play {activeGalleryBucket?.nombre || currentGalleryModeLabel}
                        </button>
                        <button
                            type="button"
                            onClick={downloadAllGalleryPhotosAsZip}
                            disabled={isDownloadingAllGallery || !filteredGalleryPhotos.length}
                            className="btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed"
                            title="Descargar toda la multimedia visible en un ZIP"
                        >
                            <LucideIcon name="download" size={14} />
                            {isDownloadingAllGallery ? 'Generando ZIP...' : 'DESCARGAR TODO'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsGalleryMusicEnabled((prev) => !prev)}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${isGalleryMusicEnabled ? 'border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110' : 'theme-border-secondary bg-slate-900/85 opacity-80'}`}
                            title="Música de galería"
                        >
                            🎵
                        </button>
                        {galleryAudioTracks.length > 0 && (
                            <>
                                <select className="filter-select min-w-[180px]" value={selectedGalleryAudioA} onChange={(event) => setSelectedGalleryAudioA(event.target.value)}>
                                    <option value="">Audio principal</option>
                                    {galleryAudioTracks.map((track, index) => <option key={`${track.url}-${index}`} value={track.url}>{track.nombre}</option>)}
                                </select>
                                <select className="filter-select min-w-[180px]" value={selectedGalleryAudioB} onChange={(event) => setSelectedGalleryAudioB(event.target.value)}>
                                    <option value="">Audio secundario (opcional)</option>
                                    {galleryAudioTracks.map((track, index) => <option key={`${track.url}-b-${index}`} value={track.url}>{track.nombre}</option>)}
                                </select>
                            </>
                        )}
                        <div className="inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2">
                            <label htmlFor="galleryPlaybackSeconds" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-300">
                                Duración
                            </label>
                            <select
                                id="galleryPlaybackSeconds"
                                className="filter-select"
                                value={galleryPlaybackSeconds}
                                onChange={(event) => setGalleryPlaybackSeconds(Number(event.target.value))}
                            >
                                {[3, 5, 7, 10].map((seconds) => (
                                    <option key={seconds} value={seconds}>{seconds} segundos</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {filteredGalleryPhotos.length === 0 ? (
                        <div className="py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30">
                            <div className="w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6">
                                <LucideIcon name="image-off" size={28} className="text-slate-600" />
                            </div>
                            <h3 className="font-title text-xl font-black italic text-white tracking-[0.06em]">No hay archivos para mostrar</h3>
                            <p className="font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3">
                                {galleryViewMode === 'ETIQUETA' && selectedTagLabels.length === 0
                                    ? 'Seleccioná una o más etiquetas para ver multimedia.'
                                    : 'Probá con otra etiqueta o quitá el filtro por etiqueta.'}
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {visibleGalleryPhotos.map((photo, index) => {
                                const labelStyle = getGalleryLabelStyle(photo.label);
                                const professionVisual = getProfessionCardVisual(photo.profesion);

                                return (
                                    <button
                                        key={photo.id}
                                        type="button"
                                        onClick={() => openGalleryViewer(index)}
                                        className="group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]"
                                        style={{
                                            borderColor: `color-mix(in srgb, ${professionVisual.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,
                                            boxShadow: `inset 0 -30px 70px color-mix(in srgb, ${professionVisual.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${professionVisual.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${professionVisual.glowColor} 35%, transparent)`
                                        }}
                                        onMouseEnter={(event) => {
                                            event.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
                                            event.currentTarget.style.boxShadow = `inset 0 -30px 70px color-mix(in srgb, ${professionVisual.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${professionVisual.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${professionVisual.glowColor} 52%, transparent)`;
                                        }}
                                        onMouseLeave={(event) => {
                                            event.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            event.currentTarget.style.boxShadow = `inset 0 -30px 70px color-mix(in srgb, ${professionVisual.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${professionVisual.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${professionVisual.glowColor} 35%, transparent)`;
                                        }}
                                    >
                                        <div className="aspect-[3/4] relative overflow-hidden bg-slate-950">
                                            {photo.type === 'video' ? (() => {
                                                const embedInfo = getVideoEmbedInfo(photo.url);
                                                if (embedInfo) {
                                                    return (
                                                        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center">
                                                            <div className="w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl">▶</div>
                                                            <div>
                                                                <p className="font-title text-sm font-semibold tracking-[0.1em] text-white">Video</p>
                                                                <p className="font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2">{embedInfo.provider}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                return <video src={photo.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" muted playsInline preload="none" />;
                                            })() : <img src={getSafeImageSrc(photo.url, CRYING_EMOJI_FALLBACK)} alt={`${photo.nombre} - ${photo.label || 'galería'}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={applyCryingEmojiFallback} loading="lazy" decoding="async" />}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent" />
                                            <div
                                                className="absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20"
                                                style={{
                                                    background: labelStyle.bg,
                                                    borderColor: labelStyle.border,
                                                    color: labelStyle.text,
                                                    boxShadow: `0 0 10px ${labelStyle.glow}, 0 0 24px color-mix(in srgb, ${labelStyle.glow} 48%, transparent)`
                                                }}
                                                title={`Etiqueta ${photo.label || 'sin etiqueta'}`}
                                            >
                                                {photo.label || '—'}
                                            </div>
                                            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent">
                                                <div className="flex items-end justify-between gap-3">
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate" title={photo.nombre}>
                                                            {photo.nombre}
                                                        </p>
                                                        {photo.autor ? (
                                                            <p className="text-[10px] font-semibold text-slate-300 mt-1 truncate" title={photo.autor}>
                                                                Autor: {photo.autor}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0">
                                                        {photo.type === 'video' ? 'VIDEO' : (photo.isGif ? 'GIF' : 'IMG')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                            </div>
                            {hasMoreGalleryPhotos && (
                                <div className="flex justify-center mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setGalleryVisibleLimit((prev) => prev + 20)}
                                        className="btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900"
                                    >
                                        Cargar más ({visibleGalleryPhotos.length}/{filteredGalleryPhotos.length})
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
            <audio ref={galleryAudioARef} loop preload="none" />
            <audio ref={galleryAudioBRef} loop preload="none" />

            {selectedGalleryPhoto && (
                <div
                    ref={galleryViewerOverlayRef}
                    className="gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0"
                    style={isSidebarOpen ? { left: '18rem', width: 'calc(100vw - 18rem)' } : { left: 0, width: '100vw' }}
                    onClick={closeGalleryViewer}
                >
                    <button
                        type="button"
                        onClick={closeGalleryViewer}
                        className={`btn-metal btn-metal--danger absolute ${isGeneralFullscreen ? 'top-2 right-2 sm:top-3 sm:right-3 w-10 h-10' : 'top-4 right-4 sm:top-6 sm:right-6 w-12 h-12'} rounded-full flex items-center justify-center`}
                        aria-label="Cerrar visor"
                    >
                        <span className="text-[26px] leading-none font-black">✕</span>
                    </button>

                    <div className={`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${isGeneralFullscreen ? 'gap-1 px-1 py-1 sm:px-2 sm:py-2' : 'gap-4 px-3 py-3 sm:px-6 sm:py-6'}`} onClick={(event) => event.stopPropagation()}>
                        {!isGeneralFullscreen && (
                        <div className="flex items-center justify-between gap-4 px-1 sm:px-2">
                            <div>
                                <p className="text-2xl sm:text-3xl font-black italic text-white tracking-tighter">{selectedGalleryPhoto.nombre}</p>
                                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2">{selectedGalleryPhoto.profesion}{selectedGalleryPhoto.nacionalidad ? ` · ${selectedGalleryPhoto.nacionalidad}` : ''}</p>
                                {selectedGalleryPhoto.autor ? <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-2">Autor: {selectedGalleryPhoto.autor}</p> : null}
                            </div>
                            <div className="flex items-center gap-3">
                                {filteredGalleryPhotos.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setIsGalleryPlaying((prev) => !prev)}
                                            className={`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${isGalleryPlaying
                                                ? 'border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110'
                                                : 'theme-border-secondary bg-slate-900/85 opacity-80'}`}
                                            aria-label={isGalleryPlaying ? 'Pausar reproducción' : 'Reproducir'}
                                        >
                                            ▶️
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsGalleryRandom((prev) => !prev)}
                                            className={`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${isGalleryRandom
                                                ? 'border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110'
                                                : 'theme-border-secondary bg-slate-900/85 opacity-80'}`}
                                            aria-label={isGalleryRandom ? 'Aleatorio activado' : 'Aleatorio desactivado'}
                                        >
                                            🔀
                                        </button>
                                    </>
                                )}
                                <div className="px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200">
                                    {selectedGalleryPhoto.type === 'video' ? 'VIDEO' : (selectedGalleryPhoto.isGif ? 'GIF' : 'IMG')}
                                </div>
                                <div
                                    className="min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl"
                                    style={{
                                        background: getGalleryLabelStyle(selectedGalleryPhoto.label).bg,
                                        borderColor: getGalleryLabelStyle(selectedGalleryPhoto.label).border,
                                        color: getGalleryLabelStyle(selectedGalleryPhoto.label).text,
                                        boxShadow: `0 0 20px ${getGalleryLabelStyle(selectedGalleryPhoto.label).glow}`
                                    }}
                                >
                                    {selectedGalleryPhoto.label || '—'}
                                </div>
                            </div>
                        </div>
                        )}

                        <div className={`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${isGeneralFullscreen ? 'rounded-xl md:rounded-2xl' : 'md:rounded-[2rem] md:border theme-border-secondary'}`}>
                            {selectedGalleryPhoto.type === 'video' ? (() => {
                                const embedInfo = getVideoEmbedInfo(selectedGalleryPhoto.url);
                                if (embedInfo) {
                                    return (
                                        <iframe
                                            ref={galleryViewerMediaRef}
                                            src={embedInfo.src}
                                            title={`${selectedGalleryPhoto.nombre} video`}
                                            className={`w-full ${isGeneralFullscreen ? 'h-[calc(100dvh-4.5rem)]' : 'h-[calc(100dvh-14rem)]'} bg-black`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    );
                                }
                                return (
                                    <video
                                        ref={galleryViewerMediaRef}
                                        src={selectedGalleryPhoto.url}
                                        controls
                                        playsInline
                                        muted={isMobileViewport}
                                        autoPlay={isGalleryPlaying}
                                        onEnded={() => {
                                            if (isGalleryPlaying && filteredGalleryPhotos.length > 1) {
                                                showNextGalleryPhoto();
                                            }
                                        }}
                                        onError={() => {
                                            if (filteredGalleryPhotos.length > 1) {
                                                showNextGalleryPhoto();
                                            }
                                        }}
                                        className={`w-full ${isGeneralFullscreen ? 'h-[calc(100dvh-4.5rem)]' : 'h-[calc(100dvh-14rem)]'} object-contain bg-black`}
                                    />
                                );
                            })() : (
                                <img
    src={getSafeImageSrc(selectedGalleryPhoto.url, CRYING_EMOJI_FALLBACK)}
    alt={`${selectedGalleryPhoto.nombre} - ${selectedGalleryPhoto.label || 'galería'}`}
    ref={galleryViewerMediaRef}
    className={`w-full ${isGeneralFullscreen ? 'h-[calc(100dvh-4.5rem)]' : 'h-[calc(100dvh-14rem)]'} object-contain bg-black`}
    onError={(e) => {
        // 1. Aplicamos el fallback visual por si acaso
        applyCryingEmojiFallback(e);
        
        // 2. Pasamos a la siguiente foto si hay más de una
        if (filteredGalleryPhotos.length > 1) {
            showNextGalleryPhoto();
        }
    }}
/>
                            )}

                            {filteredGalleryPhotos.length > 1 && (
                                <>
                                    {isGeneralFullscreen ? (
                                        <div className="absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]">
                                            <button
                                                type="button"
                                                onClick={(event) => { event.stopPropagation(); setIsGalleryRandom((prev) => !prev); }}
                                                className={`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${isGalleryRandom
                                                    ? 'border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]'
                                                    : 'theme-border-secondary text-slate-200 bg-slate-900/90'}`}
                                                aria-label={isGalleryRandom ? 'Aleatorio activado' : 'Aleatorio desactivado'}
                                            >
                                                {isGalleryRandom ? 'Random On' : 'Random Off'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={(event) => { event.stopPropagation(); setIsGalleryPlaying((prev) => !prev); }}
                                                className={`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${isGalleryPlaying
                                                    ? 'border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]'
                                                    : 'theme-border-secondary text-slate-200 bg-slate-900/90'}`}
                                                aria-label={isGalleryPlaying ? 'Pausar reproducción' : 'Reproducir'}
                                            >
                                                {isGalleryPlaying ? 'Pause' : 'Play'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={(event) => { event.stopPropagation(); showNextGalleryPhoto(); }}
                                                className="w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl"
                                                aria-label="Foto siguiente"
                                            >
                                                ➡️
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={(event) => { event.stopPropagation(); showNextGalleryPhoto(); }}
                                            className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl"
                                            aria-label="Foto siguiente"
                                        >
                                            ➡️
                                        </button>
                                    )}
                                </>
                            )}
                        </div>

                        {!isGeneralFullscreen && (
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2">
                            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
                                {selectedGalleryIndex + 1} de {filteredGalleryPhotos.length} archivos visibles
                            </p>
                            <div className="flex items-center justify-start sm:justify-end gap-2">
                                {isEditingGalleryLabel ? (
                                    <>
                                        <input
                                            type="url"
                                            value={galleryUrlDraft}
                                            onChange={(event) => setGalleryUrlDraft(event.target.value)}
                                            placeholder="https://..."
                                            className="min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"
                                        />
                                        <select
                                            value={galleryLabelDraft}
                                            onChange={(event) => setGalleryLabelDraft(event.target.value)}
                                            className="bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]"
                                        >
                                            <option value="">Sin etiqueta</option>
                                            {GALLERY_LABELS.map((label) => (
                                                <option key={label} value={label}>{label}</option>
                                            ))}
                                        </select>
                                        <button
                                            type="button"
                                            onClick={saveSelectedGalleryLabel}
                                            disabled={isSavingGalleryEditor}
                                            className="px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all"
                                        >
                                            {isSavingGalleryEditor ? 'Guardando...' : 'Guardar'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setGalleryLabelDraft(selectedGalleryPhoto?.label || '');
                                                setGalleryUrlDraft(selectedGalleryPhoto?.url || '');
                                                setGalleryEditorError('');
                                                setIsEditingGalleryLabel(false);
                                            }}
                                            className="px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all"
                                        >
                                            Cancelar
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsEditingGalleryLabel(true)}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all"
                                        aria-label="Editar etiqueta de la multimedia"
                                    >
                                        <span className="text-xs leading-none">✏️</span>
                                        <span>{selectedGalleryPhoto?.label || 'Sin etiqueta'}</span>
                                    </button>
                                )}
                                {isEditingGalleryLabel && galleryEditorError && (
                                    <p className="text-[10px] font-bold tracking-[0.04em] text-rose-300">{galleryEditorError}</p>
                                )}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            )}

            {isBrokenGalleryModalOpen && (
                <div
                    className="fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
                    style={isSidebarOpen ? { left: '18rem' } : undefined}
                    onClick={() => setIsBrokenGalleryModalOpen(false)}
                >
                    <div className="w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden" onClick={(event) => event.stopPropagation()}>
                        <div className="flex items-center justify-between gap-4 mb-5">
                            <div>
                                <p className="text-2xl font-black italic text-white tracking-tighter">Fotos rotas</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2">
                                    {brokenGalleryPhotos.length} enlace{brokenGalleryPhotos.length === 1 ? '' : 's'} sin vista
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsBrokenGalleryModalOpen(false)}
                                className="btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center"
                                aria-label="Cerrar revisión de fotos rotas"
                            >
                                <span className="text-xl font-black leading-none">✕</span>
                            </button>
                        </div>

                        <div className="max-h-[70vh] overflow-y-auto pr-1 space-y-6">
                            {!brokenGalleryGroups.length ? (
                                <div className="theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center">
                                    <p className="text-sm font-semibold text-white">No se detectaron fotos rotas ahora mismo.</p>
                                </div>
                            ) : brokenGalleryGroups.map((group) => (
                                <section key={group.id} className="theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5">
                                    <div className="mb-4">
                                        <p className="text-lg font-black italic text-white tracking-tight">{group.nombre}</p>
                                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1">
                                            {group.profesion}{group.nacionalidad ? ` · ${group.nacionalidad}` : ''}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {group.fotos.map((photo) => {
                                            const isSaving = !!brokenGallerySavingMap[photo.id];
                                            const isEditing = !!brokenGalleryEditingMap[photo.id];
                                            const draftUrl = brokenGalleryUrlDrafts[photo.id] ?? photo.url;
                                            return (
                                                <article key={photo.id} className="grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40">
                                                    <div className="w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center">
                                                        <img src={CRYING_EMOJI_FALLBACK} alt="Vista previa rota" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="space-y-2 min-w-0">
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            <span className="text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200">
                                                                Etiqueta: {photo.label || 'Sin etiqueta'}
                                                            </span>
                                                            <span className="text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400">
                                                                {photo.sourceTag}
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="url"
                                                            value={draftUrl}
                                                            onChange={(event) => handleBrokenDraftChange(photo.id, event.target.value)}
                                                            placeholder="https://..."
                                                            readOnly={!isEditing}
                                                            className={`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!isEditing ? 'opacity-80 cursor-default' : ''}`}
                                                        />
                                                    </div>
                                                    <div className="flex flex-wrap xl:flex-col gap-2 xl:justify-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => openBrokenGalleryPhotoUrl(photo)}
                                                            className="btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]"
                                                        >
                                                            Ir al enlace
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setBrokenPhotoEditing(photo.id, true)}
                                                            disabled={isSaving}
                                                            className="btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60"
                                                        >
                                                            Editar enlace
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => saveBrokenGalleryPhotoUrl(photo)}
                                                            disabled={isSaving}
                                                            className="btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60"
                                                        >
                                                            Guardar enlace
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => deleteBrokenGalleryPhoto(photo)}
                                                            disabled={isSaving}
                                                            className="btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60"
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </article>
                                            );
                                        })}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )}

    {/* 3. VISTA BATALLAS */}
    {activeTab === 'BATALLAS' && !selectedCategory && !selectedArena && (
        <div className="space-y-10 animate-in fade-in duration-500">
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={resetAllScores}
                        className="solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all"
                    >
                        Resetear calificaciones
                    </button>
                        <button
                            onClick={() => setShowResetArenaPicker(prev => !prev)}
                            className="solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all"
                        >
                        Resetear item
                    </button>
                </div>
                {showResetArenaPicker && (
                    <div className="theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3">
                        <select
                            value={resetArenaTarget}
                            onChange={(e) => setResetArenaTarget(e.target.value)}
                            className="bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white"
                        >
                            {ARENAS.map((arenaName) => (
                                <option key={arenaName} value={arenaName}>{arenaName}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => resetArenaScores(resetArenaTarget, selectedBattleScope, selectedBattleGroupKey)}
                            className="solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all"
                            disabled={!selectedBattleScope}
                        >
                            Confirmar reset item
                        </button>
                    </div>
                )}
                <div>
                    <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter">Arenas</h2>
                    <p className="text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1">
                        {!selectedBattleScope
                            ? 'Paso 1: elegí un modo de enfrentamiento'
                            : requiresBattleGroupSelection && !selectedBattleGroupKey
                                ? `Paso 2: elegí una opción de ${getBattleScopeLabel(selectedBattleScope)}`
                                : `Paso 3: elegí uno de los 15 ítems · Modo: ${getBattleScopeLabel(selectedBattleScope)}`}
                    </p>
                </div>
            </div>

            {!selectedBattleScope && (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {BATTLE_SCOPES.map((scope) => (
                        <button
                            key={scope.id}
                            onClick={() => {
                                setSelectedBattleScope(scope.id);
                                setSelectedBattleGroupKey(scope.id === 'GENERAL' ? 'all' : '');
                                setSelectedArena(null);
                            }}
                            className="solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all"
                        >
                            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">Modo</p>
                            <h3 className="font-black italic text-white mt-2">{scope.label}</h3>
                            <p className="text-xs text-slate-300 mt-2">{scope.description}</p>
                        </button>
                    ))}
                </div>
            )}

            {selectedBattleScope && (
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                            Modo: {getBattleScopeLabel(selectedBattleScope)}
                        </p>
                        <button
                            onClick={() => {
                                setSelectedBattleScope(null);
                                setSelectedBattleGroupKey('');
                                setSelectedArena(null);
                            }}
                            className="solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all"
                        >
                            Cambiar modo
                        </button>
                    </div>
                    {requiresBattleGroupSelection && (
                        <div className="theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                                Elegí una opción de {getBattleScopeLabel(selectedBattleScope)}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {battleScopeOptions.map((option) => (
                                    <button
                                        key={option.key}
                                        onClick={() => {
                                            setSelectedBattleGroupKey(option.key);
                                            setSelectedArena(null);
                                        }}
                                        className={`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${
                                            selectedBattleGroupKey === option.key
                                                ? 'border-[var(--metal-gold)] text-white'
                                                : 'theme-border-secondary text-slate-200'
                                        }`}
                                    >
                                        {option.label} <span className="text-slate-400">({option.ids.length})</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {requiresBattleGroupSelection && !selectedBattleGroupKey && (
                        <p className="text-xs text-slate-400">Seleccioná una opción para habilitar las batallas.</p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {ARENAS.map((arenaName) => {
                            const arenaKey = getArenaBattleKey(arenaName, selectedBattleScope, selectedBattleGroupKey);
                            const isArenaCompleted = Boolean(arenaBattleState?.[arenaKey]?.isFinished);

                            return (
                    <button
                        key={arenaName}
                        disabled={requiresBattleGroupSelection && !selectedBattleGroupKey}
                        onClick={() => {
                            setSelectedArena(arenaName);
                            if (!arenaBattleState[arenaKey]) initArenaBattle(arenaName, selectedBattleScope, selectedBattleGroupKey);
                        }}
                        className={`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${isArenaCompleted ? 'battle-mode-card--completed' : ''}`}
                    >
                        <p className={`text-[10px] font-black uppercase tracking-[0.28em] ${isArenaCompleted ? 'text-emerald-100/90' : 'text-slate-500'}`}>Item</p>
                        <h3 className="font-black italic text-white mt-2">{arenaName}</h3>
                        {isArenaCompleted && <p className="battle-mode-card__status mt-4">Completada</p>}
                    </button>
                            );
                        })}                    </div>
                </div>
            )}
        </div>
    )}

    {activeTab === 'BATALLAS' && selectedArena && (() => {
        const arenaKey = getArenaBattleKey(selectedArena, selectedBattleScope, selectedBattleGroupKey);
        const arenaState = arenaBattleState[arenaKey];
        const champion = perfiles.find(p => p.firebaseId === arenaState?.championId);
        const challenger = perfiles.find(p => p.firebaseId === arenaState?.challengerId);
        const championStats = champion ? getArenaStats(selectedArena, champion.firebaseId) : null;
        const challengerStats = challenger ? getArenaStats(selectedArena, challenger.firebaseId) : null;

        return (
            <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            onClick={() => setSelectedArena(null)}
                            className="group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all"
                        >
                            <i data-lucide="arrow-left" className="w-4 h-4"></i>
                            Volver a arenas
                        </button>
                        <button
                            onClick={() => {
                                setSelectedArena(null);
                                setSelectedBattleScope(null);
                                setSelectedBattleGroupKey('');
                            }}
                            className="group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all"
                        >
                            <i data-lucide="refresh-ccw" className="w-4 h-4"></i>
                            Cambiar modo
                        </button>
                        <button
                            onClick={() => setShowBattleResetPanel(prev => !prev)}
                            className="solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all"
                        >
                            Resetear una batalla
                        </button>
                    </div>
                    {showBattleResetPanel && (
                        <div className="theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3">
                            {(() => {
                                const playedKeys = Object.keys(arenaState?.matchups || {}).filter((key) => !!arenaState?.matchups?.[key]);
                                if (!arenaState || !playedKeys.length) {
                                    return <p className="text-xs text-red-200 font-bold uppercase tracking-[0.12em]">No hay cruces jugados para resetear.</p>;
                                }

                                return (
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-200">Elegí el cruce a deshacer:</p>
                                        {playedKeys.map((pairKey) => {
                                            const [profileAId, profileBId] = pairKey.split('__');
                                            const profileA = perfiles.find((profile) => profile.firebaseId === profileAId);
                                            const profileB = perfiles.find((profile) => profile.firebaseId === profileBId);
                                            const labelA = profileA?.nombre || profileAId;
                                            const labelB = profileB?.nombre || profileBId;

                                            return (
                                                <button
                                                    key={pairKey}
                                                    onClick={() => resetSpecificBattle(selectedArena, profileAId, profileBId, selectedBattleScope, selectedBattleGroupKey)}
                                                    className="metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all"
                                                >
                                                    <span className="text-xs text-white font-semibold">{labelA} vs {labelB}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                );
                            })()}
                        </div>
                    )}
                    <div className="min-w-0">
                        <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight">
                            {selectedArena}
                        </h2>
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">
                            Arena activa · Modo: {getBattleScopeLabel(selectedBattleScope)}
                        </p>
                        {arenaState?.activeGroupLabel && (
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2">
                                {arenaState.activeGroupLabel}
                            </p>
                        )}
                    </div>
                </div>

                {!arenaState && (
                    <div className="theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center">
                        <p className="text-sm text-slate-300">Presioná para iniciar esta arena.</p>
                        <button
                            onClick={() => initArenaBattle(selectedArena, selectedBattleScope, selectedBattleGroupKey)}
                            className="metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]"
                        >
                            Iniciar batallas
                        </button>
                    </div>
                )}

                {arenaState && arenaState.isFinished && (
                    <div className="theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-black italic text-white">Arena completada</h3>
                        <p className="text-slate-400 mt-2">No quedan combates nuevos para este item.</p>
                    </div>
                )}

                {arenaState && champion && challenger && !arenaState.isFinished && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                        <button
                            onClick={() => registerBattleWinner(selectedArena, champion.firebaseId, selectedBattleScope, selectedBattleGroupKey)}
                            className="theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left"
                            style={{ '--battle-profession-color': getProfessionCardVisual(champion.profesion).baseColor }}
                        >
                            <img
                                src={getBattlePhotoForArena(champion, selectedArena)}
                                alt={champion.nombre}
                                className="w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2"
                                onError={applyCryingEmojiFallback}
                            />
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Versus</p>
                            <h3 className="text-2xl sm:text-3xl font-black italic text-white mt-2">{champion.nombre}</h3>
                            {selectedArena === 'Estatura' && (
                                <p className="text-xs text-slate-200 mt-2">Altura: {getProfileHeightLabel(champion)}</p>
                            )}
                            <p className="text-xs text-[var(--metal-gold)] mt-3">Victorias: {championStats?.wins || 0} · Batallas: {championStats?.battles || 0}</p>
                            <p className="text-xs text-white/80 mt-1">Puntaje final: {championStats?.score || 0}</p>
                        </button>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="font-title text-4xl text-[var(--metal-gold)] font-black">VS</div>
                            {selectedArena === 'Estatura' && (
                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3">
                                    Compará altura en cm
                                </p>
                            )}
                        </div>

                        <button
                            onClick={() => registerBattleWinner(selectedArena, challenger.firebaseId, selectedBattleScope, selectedBattleGroupKey)}
                            className="theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left"
                            style={{ '--battle-profession-color': getProfessionCardVisual(challenger.profesion).baseColor }}
                        >
                            <img
                                src={getBattlePhotoForArena(challenger, selectedArena)}
                                alt={challenger.nombre}
                                className="w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2"
                                onError={applyCryingEmojiFallback}
                            />
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Versus</p>
                            <h3 className="text-2xl sm:text-3xl font-black italic text-white mt-2">{challenger.nombre}</h3>
                            {selectedArena === 'Estatura' && (
                                <p className="text-xs text-slate-200 mt-2">Altura: {getProfileHeightLabel(challenger)}</p>
                            )}
                            <p className="text-xs text-[var(--metal-gold)] mt-3">Victorias: {challengerStats?.wins || 0} · Batallas: {challengerStats?.battles || 0}</p>
                            <p className="text-xs text-white/80 mt-1">Puntaje final: {challengerStats?.score || 0}</p>
                        </button>
                    </div>
                )}
            </div>
        );
    })()}

    {/* 4. VISTA RANKING (SOLO TABLA) */}
    {activeTab === 'RANKING' && !selectedCategory && (
        <div className="theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell">
            <div className="ranking-table-toolbar">
                <button
                    type="button"
                    onClick={() => setIsFullRankingVisible((prev) => !prev)}
                    className={`ranking-toggle-totality ${isFullRankingVisible ? 'is-active' : 'is-inactive'}`}
                >
                    Ver totalidad
                </button>
            </div>
            <div className="ranking-table-scroll">
            <table className={`w-full ${showExtendedRankingColumns ? 'min-w-[860px] xl:min-w-[980px]' : 'min-w-[700px] xl:min-w-[820px]'} text-left border-collapse`}>
                <thead className="theme-surface-soft">
                    <tr>
                        <th className="px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text">#</th>
                        <th className="px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text">
                            <button
                                type="button"
                                onClick={() => toggleSort('nombre', 'asc')}
                                className="inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors"
                            >
                                Perfil {sortBy === 'nombre' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                            </button>
                        </th>
                        <th className="px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text">
                            <button
                                type="button"
                                onClick={() => toggleSort('Rostro', 'desc')}
                                className="inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"
                            >
                                Rostro {sortBy === 'Rostro' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                            </button>
                        </th>
                        <th className="px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text">
                            <button
                                type="button"
                                onClick={() => toggleSort('Cuerpo', 'desc')}
                                className="inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"
                            >
                                Cuerpo {sortBy === 'Cuerpo' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                            </button>
                        </th>
                        <th className="px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text">
                            <button
                                type="button"
                                onClick={() => toggleSort('Actitud', 'desc')}
                                className="inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"
                            >
                                Actitud {sortBy === 'Actitud' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                            </button>
                        </th>
                        {showExtendedRankingColumns && (
                            <>
                                <th className="px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text">
                                    <button
                                        type="button"
                                        onClick={() => toggleSort('nacionalidad', 'asc')}
                                        className="inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"
                                    >
                                        Ubicación {sortBy === 'nacionalidad' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                                    </button>
                                </th>
                                <th className="px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text">
                                    <button
                                        type="button"
                                        onClick={() => toggleSort('edad', 'desc')}
                                        className="inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"
                                    >
                                        Edad {sortBy === 'edad' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                                    </button>
                                </th>
                            </>
                        )}
                        <th className="px-8 py-6 text-right">
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ordenar por</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => {
                                        setSortBy(e.target.value);
                                        setSortDirection('desc');
                                    }}
                                    className="bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all"
                                >
                                    <option value="promedio">G2 SCORE TOTAL (PROMEDIO)</option>
                                    <optgroup label="Categorías Principales" className="theme-surface-card text-slate-500">
                                        <option value="Rostro">Rostro (Mix)</option>
                                        <option value="Cuerpo">Cuerpo (Mix)</option>
                                        <option value="Actitud">Actitud (Mix)</option>
                                    </optgroup>
                                    <optgroup label="Atributos Específicos" className="theme-surface-card text-slate-500">
                                        {CARACTERISTICAS.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </optgroup>
                                </select>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {visibleRankingProfiles.map((p, idx) => (
<tr key={p.firebaseId || p.id} onClick={() => openProfileEditor(p)}
    className={`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${idx === 0 ? 'podium-1' : idx === 1 ? 'podium-2' : idx === 2 ? 'podium-3' : 'hover:bg-white/5'}`}>

    <td className="px-8 py-5">
        <span className={`font-black italic rock-carved-text ${idx === 0 ? 'text-gold text-4xl' : idx === 1 ? 'text-silver text-3xl' : idx === 2 ? 'text-bronze text-2xl' : 'text-slate-600 text-lg'}`}>#{idx + 1}</span>
    </td>

    <td className="px-8 py-5">
        <div className="flex items-center gap-4">
            {/* MINIATURA CON NEÓN */}
            <div className="w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500"
     style={{
         borderColor: getNeonClassByProfession(p.profesion).color,
         boxShadow: `0 0 10px ${getNeonClassByProfession(p.profesion).sombra}`
     }}>
                <img src={getSafeImageSrc(p.fotos?.[0], 'https://via.placeholder.com/400x500')} className="w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100" onError={applyCryingEmojiFallback} />
            </div>
            <div>
                <p className="font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text">{p.nombre}</p>
                <p className="font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text">{p.profesion}</p>
            </div>
        </div>
    </td>

{/* Promedios por Categoría */}
<td className="px-4 py-5 text-center">
    <button
        type="button"
        onClick={(event) => {
            event.stopPropagation();
            setScoreBreakdownModal({ isOpen: true, profile: p, category: 'Rostro' });
        }}
        className="text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors"
        title={`Ver detalle de batallas en Rostro de ${p.nombre}`}
    >
        {getRostroScore(p).toFixed(0)}
    </button>
</td>
<td className="px-4 py-5 text-center">
    <button
        type="button"
        onClick={(event) => {
            event.stopPropagation();
            setScoreBreakdownModal({ isOpen: true, profile: p, category: 'Cuerpo' });
        }}
        className="text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors"
        title={`Ver detalle de batallas en Cuerpo de ${p.nombre}`}
    >
        {getCuerpoScore(p).toFixed(0)}
    </button>
</td>
<td className="px-4 py-5 text-center">
    <button
        type="button"
        onClick={(event) => {
            event.stopPropagation();
            setScoreBreakdownModal({ isOpen: true, profile: p, category: 'Actitud' });
        }}
        className="text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors"
        title={`Ver detalle de batallas en Actitud de ${p.nombre}`}
    >
        {getActitudScore(p).toFixed(0)}
    </button>
</td>

{showExtendedRankingColumns && (
    <>
        {/* Ubicación (País y Ciudad) */}
        <td className="px-4 py-5 text-center">
            <p className="text-[10px] font-bold text-slate-300 uppercase leading-none">{p.nacionalidad}</p>
            <p className="text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter">{p.ciudad}</p>
        </td>

        {/* Edad */}
        <td className="px-4 py-5 text-center font-bold text-[10px] text-slate-400">
            {calcularEdad(p.fechaNacimiento)} AÑOS
        </td>
    </>
)}

    <td className="px-8 py-5 text-right">
        <div className={`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${idx === 0 ? 'border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]' : idx === 1 ? 'border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]' : idx === 2 ? 'border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]' : 'theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]'}`}>
            <span className={`font-black leading-none ${idx === 0 ? 'text-gold' : idx === 1 ? 'text-silver' : idx === 2 ? 'text-bronze' : 'text-[var(--metal-gold)] text-lg'}`}>
                {getDisplayedRankingScore(p)}
            </span>
        </div>
    </td>
</tr>
                    ))}
                </tbody>
            </table>
            </div>

            {scoreBreakdownModal.isOpen && scoreBreakdownModal.profile && scoreBreakdownModal.category && (() => {
                const breakdown = getScoreBreakdownByCategory(scoreBreakdownModal.profile.firebaseId, scoreBreakdownModal.category);
                const categoryItems = SCORE_GROUP_TO_ARENAS[scoreBreakdownModal.category] || [];
                return (
                    <div
                        className={`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${isSidebarOpen ? 'lg:pl-[19rem] lg:justify-end' : ''}`}
                        onClick={() => {
                            setScoreBreakdownModal({ isOpen: false, profile: null, category: null });
                            setScoreBreakdownItemDetail(null);
                        }}
                    >
                        <div
                            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="font-title text-xl font-black text-white tracking-wide">
                                        {scoreBreakdownModal.profile.nombre} · {scoreBreakdownModal.category}
                                    </h3>
                                    <p className="text-xs text-slate-300 mt-1">
                                        Detalle de enfrentamientos ganados y perdidos.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setScoreBreakdownModal({ isOpen: false, profile: null, category: null });
                                        setScoreBreakdownItemDetail(null);
                                    }}
                                    className="btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black"
                                >
                                    Cerrar
                                </button>
                            </div>

                            <div className="mb-4">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2">Detalle por ítem</p>
                                <div className="flex flex-wrap gap-2">
                                    {categoryItems.map((itemName) => (
                                        (() => {
                                            const summary = getItemBattleSummary(scoreBreakdownModal.profile.firebaseId, itemName);
                                            return (
                                                <button
                                                    key={`breakdown-item-${itemName}`}
                                                    type="button"
                                                    onClick={() => {
                                                        const itemDetail = getItemBattleBreakdown(scoreBreakdownModal.profile.firebaseId, itemName);
                                                        setScoreBreakdownItemDetail(itemDetail);
                                                    }}
                                                    className="btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left"
                                                >
                                                    <p className="leading-none">{itemName}</p>
                                                    <p className="mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case">
                                                        {summary.wins}/{summary.total} · {summary.winRate.toFixed(0)}% victorias
                                                    </p>
                                                </button>
                                            );
                                        })()
                                    ))}
                                </div>
                            </div>

                            {!scoreBreakdownItemDetail?.arenaName && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44">
                                        <h4 className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3">Ganó contra</h4>
                                        {breakdown.wins.length ? (
                                            <ul className="space-y-2">
                                                {breakdown.wins.map((name, idx) => (
                                                    <li key={`win-${name}-${idx}`} className="text-sm text-emerald-200 font-semibold">{name}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-xs text-emerald-200/70">No hay batallas ganadas registradas.</p>
                                        )}
                                    </div>

                                    <div className="rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44">
                                        <h4 className="text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3">Perdió contra</h4>
                                        {breakdown.losses.length ? (
                                            <ul className="space-y-2">
                                                {breakdown.losses.map((name, idx) => (
                                                    <li key={`loss-${name}-${idx}`} className="text-sm text-rose-200 font-semibold">{name}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-xs text-rose-200/70">No hay batallas perdidas registradas.</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {scoreBreakdownItemDetail?.arenaName && (
                                <div className="mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar">
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <h4 className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                                            Ítem: {scoreBreakdownItemDetail.arenaName}
                                        </h4>
                                        <button
                                            type="button"
                                            onClick={() => setScoreBreakdownItemDetail(null)}
                                            className="btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black"
                                        >
                                            Cerrar detalle
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['wins', 'losses'].map((resultType) => {
                                            const isWinList = resultType === 'wins';
                                            const battleList = scoreBreakdownItemDetail[resultType] || [];
                                            return (
                                                <div key={`item-detail-${resultType}`} className={`rounded-xl border p-3 min-h-36 ${isWinList ? 'border-emerald-500/40 bg-emerald-950/15' : 'border-rose-500/40 bg-rose-950/15'}`}>
                                                    <h5 className={`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${isWinList ? 'text-emerald-300' : 'text-rose-300'}`}>
                                                        {isWinList ? 'Ganadas' : 'Perdidas'}
                                                    </h5>
                                                    {battleList.length ? (
                                                        <ul className="space-y-2">
                                                            {battleList.map((battle, idx) => (
                                                                <li key={`${resultType}-${battle.pairKey}-${idx}`} className="flex items-center justify-between gap-2">
                                                                    <span className={`text-sm font-semibold ${isWinList ? 'text-emerald-100' : 'text-rose-100'}`}>{battle.opponentName}</span>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black"
                                                                        onClick={async () => {
                                                                            const confirmed = window.confirm('¿Seguro que querés deshacer esta batalla?');
                                                                            if (!confirmed) return;
                                                                            try {
                                                                                await resetSpecificBattle(battle.arenaName, battle.profileId, battle.opponentId);
                                                                                const refreshedDetail = getItemBattleBreakdown(scoreBreakdownModal.profile.firebaseId, battle.arenaName);
                                                                                setScoreBreakdownItemDetail(refreshedDetail);
                                                                            } catch (error) {
                                                                                console.error('No se pudo eliminar la batalla del desglose:', error);
                                                                                alert('No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.');
                                                                            }
                                                                        }}
                                                                    >
                                                                        Eliminar
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className={`text-xs ${isWinList ? 'text-emerald-200/70' : 'text-rose-200/70'}`}>
                                                            {isWinList ? 'No hay batallas ganadas registradas.' : 'No hay batallas perdidas registradas.'}
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })()}

            {scorePanelModal.isOpen && scorePanelModal.profile && (() => {
                const selectedProfile = scorePanelModal.profile;
                const profileScores = getProfileScores(selectedProfile);
                const categoryEntries = Object.entries(SCORE_GROUP_TO_ARENAS);
                return (
                    <div
                        className="fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setScorePanelModal({ isOpen: false, profile: null })}
                    >
                        <div className="w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6" onClick={(event) => event.stopPropagation()}>
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-title text-xl font-black text-white tracking-wide">{selectedProfile.nombre} · Puntaje</h3>
                                    <p className="text-xs text-slate-300 mt-1">Panel de detalle por ítems, características y G2 Score.</p>
                                </div>
                                <button type="button" onClick={(event) => { event.stopPropagation(); setScorePanelModal({ isOpen: false, profile: null }); }} className="btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black">
                                    Cerrar
                                </button>
                            </div>

                            <section className="space-y-3">
                                <h4 className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Ítems</h4>
                                <div className="flex flex-wrap gap-2">
                                    {CARACTERISTICAS.map((itemKey) => (
                                        <button key={itemKey} type="button" onClick={(event) => event.stopPropagation()} className="px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100">
                                            {itemKey}: {Number(profileScores[itemKey] || 0).toFixed(0)}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-3">
                                <h4 className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Características</h4>
                                <div className="flex flex-wrap gap-2">
                                    {categoryEntries.map(([categoryKey, arenaKeys]) => (
                                        <button key={categoryKey} type="button" onClick={(event) => event.stopPropagation()} className="px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100">
                                            {categoryKey}: {getCategoryScore(selectedProfile, categoryKey).toFixed(0)}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-3">
                                <h4 className="text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]">G2 Score</h4>
                                <button type="button" onClick={(event) => event.stopPropagation()} className="w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]">
                                    G2 SCORE TOTAL: {calcularPromedio(selectedProfile)}
                                </button>
                            </section>
                        </div>
                    </div>
                );
            })()}
        </div>
    )}

    {/* 4. VISTA CATEGORÍAS (TUS CARPETAS MANUALES) */}
    {activeTab === 'CATEGORIAS' && !selectedCategory && (
        <div className="space-y-10 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Carpetas</h2>
                </div>
                <button onClick={() => { resetCatForm(); setIsCatModalOpen(true); }} className="btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs">
                    NUEVA CATEGORÍA
                </button>
            </div>
            {categorias.length === 0 ? (
                <div className="py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center">
                    <p className="text-slate-600 font-black italic uppercase">No hay categorías personalizadas</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
{categorias.map(cat => (
<div key={cat.firebaseId} onClick={() => setSelectedCategory(cat.firebaseId)} className="group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]">
        {/* BOTONES DE ACCIÓN: EDITAR Y ELIMINAR */}
        <div className="absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
    onClick={(e) => {
        e.stopPropagation();
        // Preparamos los datos asegurándonos de que las listas existan (si no, ponemos [])
        setCatFormData({
            ...cat,
            reglas: {
                ...cat.reglas,
                nacionalidades: cat.reglas?.nacionalidades || [],
                profesiones: cat.reglas?.profesiones || [],
                ciudades: cat.reglas?.ciudades || []
            }
        });
        setIsCatModalOpen(true); // Abrimos el modal
    }}
    className="w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]"
>
    <LucideIcon name="pencil" size={14} />
</button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if(window.confirm('¿Seguro que querés borrar esta carpeta?')) {
                        deleteCategory(cat.firebaseId);
                    }
                }}
                className="w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]"
            >
                <LucideIcon name="x" size={14} />
            </button>
        </div>

        {/* Imagen de Portada */}
        <div className="absolute inset-0">
            <img
                src={getSafeImageSrc(cat.coverImg, 'https://via.placeholder.com/400x600?text=Sin+Portada')}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                onError={applyCryingEmojiFallback}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
        </div>

        {/* Contenido (Nombre y Contador) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg">
                {cat.label}
            </h3>
            <div className="inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]">
                <span className="text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest">
                    {perfiles.filter(p => obtenerCategoriasDePerfil(p).includes(cat.firebaseId)).length} Perfiles
                </span>
            </div>
        </div>
    </div>
))}
                </div>
            )}
        </div>
    )}
</div>
                    </main>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
                            <div className="bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300">
                               <button
    onClick={() => setIsModalOpen(false)}
    className="p-2 hover:bg-slate-800 rounded-full transition-colors"
>
    <LucideIcon name="x" size={20} className="text-slate-400" />
</button>
                                <form onSubmit={saveProfile} className="flex-1 overflow-y-auto p-12 space-y-12">

                                    <div className="grid grid-cols-1 gap-16">
    <div className="space-y-8">
        {/* CABECERA Y VISTA PREVIA */}
        <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 self-start">

                <div className="w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50">
                    <LucideIcon name={editingId ? "user" : "user-plus"} />
                </div>
                <h3 className="text-xl font-black italic tracking-tighter text-white">
                    {editingId ? 'Editar Perfil' : 'Información del Perfil'}
                </h3>
                {editingId && (
                    <button
    type="button"
    onClick={() => {
        openMultimediaTab({
            ...formData,
            firebaseId: editingId
        });
    }}
    className="btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2"
>
    <LucideIcon name="image" size={14} />
    Multimedia
</button>
                )}
            </div>

            {/* CUADRO VISTA PREVIA NEÓN */}
            <div className="w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group">
                {formData.fotos.length > 0 && formData.fotos[0] !== "" ? (
                    <img src={getSafeImageSrc(formData.fotos[0], CRYING_EMOJI_FALLBACK)} className="w-full h-full object-cover" alt="Preview" onError={applyCryingEmojiFallback} />
                ) : (
                    <div className="text-center p-4">
                        <LucideIcon name="image" size={32} className="mx-auto text-slate-700 mb-2" />
                        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Vista Previa</p>
                    </div>
                )}
            </div>
        </div>

        {/* CAMPOS DE TEXTO */}
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">Datos actuales</p>
                    {profileCompletionRows.completed.length > 0 ? (
                        <ul className="mt-3 space-y-1">
                            {profileCompletionRows.completed.map((row) => (
                                <li key={row.key} className="text-xs text-emerald-100/90">
                                    <span className="font-black">{row.label}:</span> {row.preview}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-3 text-xs text-emerald-100/70">Todavía no hay datos cargados.</p>
                    )}
                </div>
                <div className="rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-200">Datos faltantes por completar</p>
                    {profileCompletionRows.missing.length > 0 ? (
                        <ul className="mt-3 space-y-1">
                            {profileCompletionRows.missing.map((row) => (
                                <li key={row.key} className="text-xs text-amber-100/90">
                                    <span className="font-black">{row.label}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-3 text-xs text-amber-100/70">¡Perfil completo en esta sección!</p>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Nombre Artístico" className="col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />

                <div className="col-span-2 space-y-1">
                    <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">URL de la Foto (Avatar)</label>
                    <input
                        placeholder="https://imagen.com/foto.jpg"
                        className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs"
                        value={formData.fotos[0] || ''}
                        onChange={e => setFormData(prev => withProfilePhotoSyncedToGallery(prev, e.target.value))}
                    />
                    <input
                        type="file"
                        accept="image/*,.gif"
                        onChange={handleLocalProfilePhotoUpload}
                        className="w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">Nacimiento</label>
                    <input type="date" className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold" value={formData.fechaNacimiento} onChange={e => setFormData({...formData, fechaNacimiento: e.target.value})} />
                </div>
                <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">Estatura (cm)</label>
                    <input placeholder="170" type="number" className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold" value={formData.estaturaCm} onChange={e => setFormData({...formData, estaturaCm: e.target.value})} />
                </div>
                <input placeholder="Nacionalidad" className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold" value={formData.nacionalidad} onChange={e => setFormData({...formData, nacionalidad: e.target.value})} />
                <input placeholder="Ciudad" className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold" value={formData.ciudad} onChange={e => setFormData({...formData, ciudad: e.target.value})} />

                <div className="col-span-2 space-y-1 group">
                    <label className="text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]">
                        Profesión
                    </label>
                    <select
                        required
                        className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900"
                        value={formData.profesion}
                        onChange={e => setFormData({...formData, profesion: e.target.value})}
                    >
                        <option value="" className="theme-surface-card">Seleccionar...</option>
                        <option value="Cantante" className="theme-surface-card">🎤 Cantante</option>
                        <option value="Actriz" className="theme-surface-card">🎬 Actriz</option>
                        <option value="Modelo" className="theme-surface-card">👠 Modelo</option>
                        <option value="NSFW" className="theme-surface-card">🔥 NSFW</option>
                        <option value="Influencer" className="theme-surface-card">📱 Influencer</option>
                        <option value="Bailarina y Atleta" className="theme-surface-card">💃🏋️‍♀️ Bailarina y Atleta</option>
                        <option value="Otro" className="theme-surface-card">📖 Otro</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50">
                        <LucideIcon name="chevron-down" size={18} />
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
                                    <div className="flex gap-4">
                                        {editingId && (
                                            <button type="button" onClick={deleteProfile} className="btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs">
                                                <LucideIcon name="trash-2" size={20} />
                                            </button>
                                        )}
                                        <button type="submit" className="btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs">
                                            {editingId ? 'Actualizar Registro' : 'Guardar Perfil'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {isDeleteProfileModalOpen && (
                        <div className="fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6" onClick={closeDeleteProfileModal}>
                            <div className="w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6" onClick={(event) => event.stopPropagation()}>
                                <div className="space-y-3">
                                    <p className="text-xs font-black uppercase tracking-[0.24em] text-red-300">Acción destructiva</p>
                                    <h3 className="text-2xl font-black italic text-white tracking-tight">¿Eliminar perfil?</h3>
                                    <p className="text-sm text-slate-300">
                                        Esta acción eliminará de forma permanente a <span className="font-black text-white">{contextProfile?.nombre || 'este perfil'}</span> y sus datos en Firebase. No se puede deshacer.
                                    </p>
                                    {profileActionError && (
                                        <div className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200">
                                            {profileActionError}
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={closeDeleteProfileModal}
                                        className="btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={confirmDeleteFromContext}
                                        className="btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {isCatModalOpen && (
                        <div className="fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
                            <div className="bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300">
                                <button
    type="button"
    onClick={() => { resetCatForm(); setIsCatModalOpen(false); }}
    className="p-4 hover:bg-slate-800 rounded-full transition-all"
>
    <LucideIcon name="x" size={24} className="text-slate-400" />
</button>
                                <form onSubmit={saveCategory} className="flex-1 overflow-y-auto p-12 space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white">
                                                    <LucideIcon name="scroll" />
                                                </div>
                                                <h3 className="text-xl font-black italic text-white">Nuevo Archivo del Reino</h3>
                                            </div>
                                            <div className="space-y-4">
                                                <input required placeholder="Nombre de la Carpeta" className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white" value={catFormData.label} onChange={e => setCatFormData({...catFormData, label: e.target.value})} />
                                                <div className="w-full">
                                                    <div className="space-y-1 w-full">
                                                        <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">URL de Portada</label>
                                                        <input
                                                            placeholder="https://..."
                                                            className="w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs"
                                                            value={catFormData.coverImg}
                                                            onChange={e => setCatFormData({...catFormData, coverImg: e.target.value})}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2">
                                                <LucideIcon name="shield" size={12} /> Mandatos de Clasificación del Consejo
                                            </h4>

                                            <div className="p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6">
                                                <div className="grid grid-cols-2 gap-4">
{/* Filtro Nacionalidades Acumulable */}
                                                    <div className="space-y-1">
                                                        <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">NACIONALIDADES</label>
                                                        <div className="flex flex-wrap gap-1 mb-2 min-h-[20px]">
                                                            {catFormData.reglas.nacionalidades.map(n => (
                                                                <span key={n} className="bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1">
                                                                    {n} <button type="button" onClick={() => setCatFormData({...catFormData, reglas: {...catFormData.reglas, nacionalidades: catFormData.reglas.nacionalidades.filter(x => x !== n)}})}>×</button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <select className="w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none"
                                                            onChange={e => {
                                                                if(e.target.value && !catFormData.reglas.nacionalidades.includes(e.target.value))
                                                                    setCatFormData({...catFormData, reglas: {...catFormData.reglas, nacionalidades: [...catFormData.reglas.nacionalidades, e.target.value]}})
                                                            }}>
                                                            <option value="">Añadir país...</option>
                                                            {uniqueNacionalidades.filter(n => n !== 'Todas').map(n => <option key={n} value={n}>{n}</option>)}
                                                        </select>
                                                    </div>

                                                    {/* Filtro Ciudades Acumulable */}
                                                    <div className="space-y-1">
                                                        <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">CIUDADES</label>
                                                        <div className="flex flex-wrap gap-1 mb-2 min-h-[20px]">
                                                            {catFormData.reglas.ciudades.map(c => (
                                                                <span key={c} className="bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1">
                                                                    {c} <button type="button" onClick={() => setCatFormData({...catFormData, reglas: {...catFormData.reglas, ciudades: catFormData.reglas.ciudades.filter(x => x !== c)}})}>×</button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <select className="w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none"
                                                            onChange={e => {
                                                                if(e.target.value && !catFormData.reglas.ciudades.includes(e.target.value))
                                                                    setCatFormData({...catFormData, reglas: {...catFormData.reglas, ciudades: [...catFormData.reglas.ciudades, e.target.value]}})
                                                            }}>
                                                            <option value="">Añadir ciudad...</option>
                                                            {uniqueCiudades.filter(c => c !== 'Todas').map(c => <option key={c} value={c}>{c}</option>)}
                                                        </select>
                                                    </div>

                                                    {/* Filtro Profesiones Acumulable */}
                                                    <div className="space-y-1">
                                                        <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">PROFESIONES</label>
                                                        <div className="flex flex-wrap gap-1 mb-2 min-h-[20px]">
                                                            {catFormData.reglas.profesiones.map(p => (
                                                                <span key={p} className="bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1">
                                                                    {p} <button type="button" onClick={() => setCatFormData({...catFormData, reglas: {...catFormData.reglas, profesiones: catFormData.reglas.profesiones.filter(x => x !== p)}})}>×</button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <select className="w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none"
                                                            onChange={e => {
                                                                if(e.target.value && !catFormData.reglas.profesiones.includes(e.target.value))
                                                                    setCatFormData({...catFormData, reglas: {...catFormData.reglas, profesiones: [...catFormData.reglas.profesiones, e.target.value]}})
                                                            }}>
                                                            <option value="">Añadir profesión...</option>
                                                            {Object.keys(PROFESIONES_CONFIG).map(p => <option key={p} value={p}>{p}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="space-y-1">
                                                            <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">EDAD MIN</label>
                                                            <input type="number" placeholder="18" className="w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white" value={catFormData.reglas.edadMin} onChange={e => setCatFormData({...catFormData, reglas: {...catFormData.reglas, edadMin: e.target.value}})} />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">EDAD MAX</label>
                                                            <input type="number" placeholder="30" className="w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white" value={catFormData.reglas.edadMax} onChange={e => setCatFormData({...catFormData, reglas: {...catFormData.reglas, edadMax: e.target.value}})} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-1 pt-4 border-t theme-border-secondary">
                                                    <label className="text-[9px] font-black text-slate-500 ml-4 uppercase">Condición de Score</label>
                                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                                        <select className="theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white" value={catFormData.reglas.caracteristica} onChange={e => setCatFormData({...catFormData, reglas: {...catFormData.reglas, caracteristica: e.target.value}})}>
                                                            {CARACTERISTICAS.map(c => <option key={c}>{c}</option>)}
                                                        </select>
                                                        <select className="theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white" value={catFormData.reglas.operador} onChange={e => setCatFormData({...catFormData, reglas: {...catFormData.reglas, operador: e.target.value}})}>
                                                            <option>Superior a</option>
                                                            <option>Inferior a</option>
                                                        </select>
                                                    </div>
                                                    <input type="number" placeholder="Umbral (0-10)" className="w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]" value={catFormData.reglas.umbral} onChange={e => setCatFormData({...catFormData, reglas: {...catFormData.reglas, umbral: e.target.value}})} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs">
                                        CREAR CARPETA INTELIGENTE
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
