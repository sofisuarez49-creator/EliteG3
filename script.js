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
        const storage = firebase.storage();
        const { useState, useEffect, useMemo, useRef } = React;

        const GALLERY_LABELS = ['C', 'P', 'B', 'N', 'S', 'E', 'X', 'R'];
        const GENERAL_GALLERY_HIDDEN_LABELS = ['R'];
        const ANON_GALLERY_NODE_PATH = 'anonimo/galeria';
        const ANON_PROFILE_ID = '__anonimo_gallery__';
        const PERFIL_CACHE_KEY = 'eliteg3:perfiles-cache:v1';
        const AUDIO_CACHE_KEY = 'eliteg3:gallery-audios-cache:v1';
        const GALLERY_VIEW_MODES = ['PERSONAJE', 'ETIQUETA', 'GENERAL'];
        const GALLERY_VIEW_MODE_LABELS = {
            PERSONAJE: 'Personaje',
            ETIQUETA: 'Etiqueta',
            GENERAL: 'General'
        };
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
        const isGifUrl = (url = '') => GIF_FILE_REGEX.test(String(url || '').trim());
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
            puntuaciones: createZeroScores(),
            isAnonymousGallery: true
        });
        const safeReadCache = (key, fallbackValue) => {
            try {
                const rawValue = window.localStorage.getItem(key);
                if (!rawValue) return fallbackValue;
                const parsed = JSON.parse(rawValue);
                return parsed ?? fallbackValue;
            } catch {
                return fallbackValue;
            }
        };
        const safeWriteCache = (key, value) => {
            try {
                window.localStorage.setItem(key, JSON.stringify(value));
            } catch {
                // noop: almacenamiento no disponible o cuota excedida.
            }
        };
        const getGallerySourceCharacterId = (profile = {}) => {
            if (profile?.isAnonymousGallery || profile?.firebaseId === ANON_PROFILE_ID) return 'anonimo';
            return profile?.firebaseId || '';
        };

        const hasPrimaryPhotoAssigned = (profile = {}) => (
            Boolean(getSafeImageSrc(String(profile?.fotos?.[0] || '').trim(), ''))
        );
        const getMissingProfilePhotoLabels = (profile = {}) => (
            hasPrimaryPhotoAssigned(profile) ? [] : ['Perfil']
        );
        const openMultimediaTab = (profile = null) => {
            if (!profile) return;
            const tab = window.open('', '_blank');
            if (!tab) return;
            const galleryItems = Array.isArray(profile?.galeria?.fotos)
                ? profile.galeria.fotos
                    .map((item) => normalizeGalleryItem(item, 'image'))
                    .filter((item) => item.url)
                : [];
            const galleryHtml = galleryItems.length
                ? galleryItems.map((item, index) => `
                    <article class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20">
                        <img src="${item.url}" alt="Multimedia ${index + 1}" class="w-full h-60 object-cover" loading="lazy" onerror="${BROKEN_IMAGE_INLINE_HANDLER}">
                    </article>
                `).join('')
                : '<p class="text-slate-300 text-center">Sin contenido en galería.</p>';

            tab.document.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${profile?.nombre || 'Galería'}</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <style>body{background:#020617;color:#e2e8f0;font-family:Inter,system-ui,sans-serif}.surface-panel{background:rgba(15,23,42,.86);box-shadow:0 0 24px rgba(34,211,238,.15)}</style>
</head>
<body class="min-h-screen p-6">
    <main class="max-w-6xl mx-auto space-y-6">
        <header class="text-center space-y-2">
            <h1 class="text-3xl font-black uppercase tracking-wide text-cyan-100">${profile?.nombre || 'Galería'}</h1>
            <p class="text-xs uppercase tracking-[0.25em] text-slate-400">Multimedia</p>
        </header>
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${galleryHtml}</section>
    </main>
</body>
</html>`);
            tab.document.close();
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
        const STORAGE_KEY = 'g2_elite_database_v4';
        const CAT_STORAGE_KEY = 'g2_elite_categories_v4';
        const CARACTERISTICAS = [
            'Rostro', 'Ojos', 'Boca', 'Cabello',
            'Cuerpo', 'Cola', 'Pechos', 'Cintura', 'Piernas', 'Estatura',
            'Sensualidad', 'Carisma', 'Elegancia', 'Dulzura', 'Talento'
        ];
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

        const renderGalleryWindow = ({ targetWindow, profileName, profession, photos }) => {
            if (!targetWindow) return;
            const safePhotos = Array.isArray(photos) ? photos.filter((item) => item?.url) : [];
            const cards = safePhotos.length
                ? safePhotos.map((item, index) => `
                    <article class="rounded-2xl overflow-hidden border border-cyan-200/20 bg-slate-950/70 shadow-lg">
                        ${item.type === 'video'
                            ? `<video src="${item.url}" class="w-full h-72 object-cover bg-black" controls preload="metadata"></video>`
                            : `<img src="${item.url}" alt="Multimedia ${index + 1}" class="w-full h-72 object-cover" loading="lazy" onerror="${BROKEN_IMAGE_INLINE_HANDLER}">`}
                        <div class="p-3 text-xs text-slate-300 flex items-center justify-between gap-2">
                            <span>${item.label ? `Etiqueta ${item.label}` : 'Sin etiqueta'}</span>
                            <a class="text-cyan-200 hover:text-cyan-100" href="${item.url}" target="_blank" rel="noreferrer">Abrir</a>
                        </div>
                    </article>
                `).join('')
                : '<p class="text-center text-slate-300">No hay multimedia cargada.</p>';

            targetWindow.document.open();
            targetWindow.document.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${profileName || 'Galería'}</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
</head>
<body class="min-h-screen bg-slate-950 text-slate-100 p-6">
    <main class="max-w-7xl mx-auto space-y-8">
        <header class="text-center space-y-2">
            <h1 class="text-4xl font-black uppercase tracking-tight text-cyan-100">${profileName || 'Galería'}</h1>
            <p class="text-sm uppercase tracking-[0.25em] text-slate-400">${profession || 'Multimedia'}</p>
        </header>
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">${cards}</section>
    </main>
</body>
</html>`);
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
            const [isModalOpen, setIsModalOpen] = useState(false);
            const [isCatModalOpen, setIsCatModalOpen] = useState(false);
            const [isSavingProfile, setIsSavingProfile] = useState(false);
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
            const [anonMediaUrl, setAnonMediaUrl] = useState('');
            const [anonMediaLabel, setAnonMediaLabel] = useState(GALLERY_LABELS[0]);
            const [anonMediaAuthor, setAnonMediaAuthor] = useState('');
            const [anonMediaError, setAnonMediaError] = useState('');
            const [anonUploadType, setAnonUploadType] = useState('');
            const [galleryAudioTracks, setGalleryAudioTracks] = useState([]);
            const [galleryAudioName, setGalleryAudioName] = useState('');
            const [galleryAudioUrl, setGalleryAudioUrl] = useState('');
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
            const [activeGalleryProfileId, setActiveGalleryProfileId] = useState('');
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
                    puntuaciones: createZeroScores()
            });
            const [formData, setFormData] = useState(getEmptyProfileFormData);
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
                    ]
                });
                setActiveGalleryProfileId(profile?.firebaseId || profile?.id || '');
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

                if (profileId === editingId) {
                    setFormData(prev => ({
                        ...prev,
                        galeria: {
                            ...(prev.galeria || { fotos: [], gifs: [], videos: [] }),
                            [sourceTag]: remainingItems
                        }
                    }));
                }
            };

            const maybeOptimizeImageForUpload = async (file) => {
                if (!(file instanceof File)) return file;
                const mimeType = String(file.type || '').toLowerCase();
                if (!mimeType.startsWith('image/') || mimeType === 'image/gif') return file;
                if (file.size <= 1_200_000) return file;

                const bitmap = await createImageBitmap(file);
                const maxDimension = 1920;
                const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
                const targetWidth = Math.max(1, Math.round(bitmap.width * scale));
                const targetHeight = Math.max(1, Math.round(bitmap.height * scale));
                const canvas = document.createElement('canvas');
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                const ctx = canvas.getContext('2d', { alpha: false });
                if (!ctx) return file;
                ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);

                const outputType = mimeType === 'image/png' ? 'image/png' : 'image/jpeg';
                const outputQuality = outputType === 'image/jpeg' ? 0.82 : undefined;
                const blob = await new Promise((resolve) => canvas.toBlob(resolve, outputType, outputQuality));
                if (!blob || blob.size >= file.size) return file;

                const baseName = (file.name || 'archivo').replace(/\.[^.]+$/, '');
                const ext = outputType === 'image/png' ? 'png' : 'jpg';
                return new File([blob], `${baseName}.${ext}`, { type: outputType, lastModified: Date.now() });
            };
            const uploadFileToFirebaseStorage = window.uploadFileToFirebaseStorage = async (file, folder = 'galeria') => {
                if (!file) throw new Error('No se encontró el archivo para subir.');
                const safeFolder = String(folder || 'galeria').replace(/[^a-zA-Z0-9/_-]/g, '');
                try {
                    if (typeof storage?.setMaxUploadRetryTime === 'function') {
                        storage.setMaxUploadRetryTime(120000);
                    }
                } catch (_error) {
                }
                let lastError = null;
                for (let attempt = 1; attempt <= 2; attempt += 1) {
                    try {
                        const optimizedFile = await maybeOptimizeImageForUpload(file);
                        const extension = (optimizedFile.name || '').split('.').pop();
                        const sanitizedExt = extension && extension !== optimizedFile.name ? `.${extension.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}` : '';
                        const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
                        const storagePath = `${safeFolder}/${uniqueId}${sanitizedExt}`;
                        const uploadTask = storage.ref(storagePath).put(optimizedFile);
                        const snapshot = await new Promise((resolve, reject) => {
                            const timeoutMs = 90000;
                            const timeoutId = window.setTimeout(() => {
                                try { uploadTask.cancel(); } catch (_cancelError) {}
                                const timeoutError = new Error('La subida se quedó sin respuesta. Revisá tu conexión e intentá nuevamente.');
                                timeoutError.code = 'storage/upload-timeout';
                                reject(timeoutError);
                            }, timeoutMs);

                            uploadTask.on('state_changed', null, (taskError) => {
                                window.clearTimeout(timeoutId);
                                reject(taskError);
                            }, () => {
                                window.clearTimeout(timeoutId);
                                resolve(uploadTask.snapshot);
                            });
                        });
                        return snapshot.ref.getDownloadURL();
                    } catch (error) {
                        lastError = error;
                        const code = String(error?.code || '').toLowerCase();
                        if (code !== 'storage/retry-limit-exceeded' || attempt === 2) {
                            throw error;
                        }
                    }
                }
                throw lastError || new Error('No se pudo subir el archivo a Firebase Storage.');
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
            const addAnonymousGalleryItem = async ({ url, label, autor = '', forcedTag = '' }) => {
                const normalizedUrl = String(url || '').trim();
                if (!normalizedUrl) throw new Error('Ingresá una URL.');
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
                    await addAnonymousGalleryItem({ url: finalUrl, label: anonMediaLabel, autor: anonMediaAuthor, forcedTag });
                    setAnonMediaUrl('');
                    setAnonMediaAuthor('');
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
                    if (!normalizedUrl) {
                        setGalleryAudioError('Completá la URL del audio.');
                        return;
                    }
                    if (!AUDIO_FILE_REGEX.test(normalizedUrl)) {
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
                } catch (error) {
                    setGalleryAudioError('No se pudo guardar el audio en Firebase.');
                }
            };
            const removeGalleryAudioTrack = async (indexToRemove) => {
                if (!Number.isInteger(indexToRemove) || indexToRemove < 0) return;
                setGalleryAudioError('');
                try {
                    const audioRef = db.ref(`${ANON_GALLERY_NODE_PATH}/audios`);
                    const snapshot = await audioRef.once('value');
                    const currentAudios = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                    if (!currentAudios[indexToRemove]) return;
                    const removedTrack = {
                        nombre: String(currentAudios[indexToRemove]?.nombre || '').trim(),
                        url: String(currentAudios[indexToRemove]?.url || '').trim()
                    };
                    const updatedAudios = currentAudios.filter((_, index) => index !== indexToRemove);
                    await audioRef.set(updatedAudios);
                    if (removedTrack.url && removedTrack.url === selectedGalleryAudioA) {
                        setSelectedGalleryAudioA('');
                    }
                    if (removedTrack.url && removedTrack.url === selectedGalleryAudioB) {
                        setSelectedGalleryAudioB('');
                    }
                } catch (error) {
                    setGalleryAudioError('No se pudo eliminar el audio de Firebase.');
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
                        ]
                    });
                }
            }, [editingId, formData.nombre, formData.profesion, formData.galeria?.fotos, formData.galeria?.videos]);

            useEffect(() => {
                if (!activeGalleryProfileId) return;
                const galleryWindow = galleryWindowRef.current;
                if (!galleryWindow || galleryWindow.closed) return;
                if (editingId && editingId === activeGalleryProfileId) return;

                const liveProfile = perfiles.find((profile) => (profile?.firebaseId || profile?.id) === activeGalleryProfileId);
                if (!liveProfile) return;

                renderGalleryWindow({
                    targetWindow: galleryWindow,
                    profileName: liveProfile?.nombre || '',
                    profession: liveProfile?.profesion || '',
                    photos: [
                        ...((liveProfile?.galeria?.fotos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'image'), sourceTag: 'fotos', sourceIndex: index }))),
                        ...((liveProfile?.galeria?.videos || []).map((item, index) => ({ ...normalizeGalleryItem(item, 'video'), sourceTag: 'videos', sourceIndex: index })))
                    ]
                });
            }, [activeGalleryProfileId, perfiles, editingId]);

            useEffect(() => {
                const handleMessage = async (event) => {
                    if (event.data.type === 'ADD_IMAGE') {
                        const { url, id, label, mediaType } = event.data;
                        const tag = mediaType === 'video' ? 'videos' : 'fotos';
                        if (!id) return;
                        const galleryRef = id === ANON_PROFILE_ID
                            ? db.ref(`${ANON_GALLERY_NODE_PATH}/${tag}`)
                            : db.ref(`perfiles/${id}/galeria/${tag}`);
                        const snapshot = await galleryRef.once('value');
                        const currentPhotos = snapshot.val() || [];
                        const normalizedUrl = (url || '').trim();
                        if (!normalizedUrl) return;
                        const updatedPhotos = [...currentPhotos, { url: normalizedUrl, label: GALLERY_LABELS.includes(label) ? label : '', type: detectGalleryItemType(normalizedUrl, mediaType), autor: '' }];

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
                        setFormData(prev => ({
                            ...prev,
                            galeria: { ...prev.galeria, [tag]: nuevasFotos }
                        }));
                    }

                };

                window.addEventListener('message', handleMessage);
                const perfilesRef = db.ref('perfiles');
                const anonGalleryRef = db.ref(ANON_GALLERY_NODE_PATH);
                let perfilesById = {};
                let anonGalleryData = {};
                const cachedPerfiles = safeReadCache(PERFIL_CACHE_KEY, []);
                if (Array.isArray(cachedPerfiles) && cachedPerfiles.length) {
                    setPerfiles(cachedPerfiles);
                }
                const cachedAudios = safeReadCache(AUDIO_CACHE_KEY, []);
                if (Array.isArray(cachedAudios) && cachedAudios.length) {
                    setGalleryAudioTracks(cachedAudios);
                }
                const refreshPerfilesState = () => {
                    const listaPerfiles = Object.entries(perfilesById || {}).map(([firebaseId, perfilData]) => ({
                        ...mapProfileToFormData(perfilData),
                        firebaseId // Guardamos la llave de Firebase por si necesitamos editar
                    }));
                    const anonProfile = mapAnonymousGalleryToProfile(anonGalleryData || {});
                    const hasAnonGallery = Object.values(anonProfile.galeria || {}).some((items) => Array.isArray(items) && items.length > 0);
                    const nextPerfiles = hasAnonGallery ? [...listaPerfiles, anonProfile] : listaPerfiles;
                    setPerfiles(nextPerfiles);
                    safeWriteCache(PERFIL_CACHE_KEY, nextPerfiles);
                };
                const handlePerfilAdded = (snapshot) => {
                    perfilesById = {
                        ...perfilesById,
                        [snapshot.key]: snapshot.val() || {}
                    };
                    refreshPerfilesState();
                };
                const handlePerfilChanged = (snapshot) => {
                    perfilesById = {
                        ...perfilesById,
                        [snapshot.key]: snapshot.val() || {}
                    };
                    refreshPerfilesState();
                };
                const handlePerfilRemoved = (snapshot) => {
                    const { [snapshot.key]: _, ...remainingPerfiles } = perfilesById;
                    perfilesById = remainingPerfiles;
                    refreshPerfilesState();
                };
                perfilesRef.on('child_added', handlePerfilAdded);
                perfilesRef.on('child_changed', handlePerfilChanged);
                perfilesRef.on('child_removed', handlePerfilRemoved);
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
                    safeWriteCache(AUDIO_CACHE_KEY, audios);
                    refreshPerfilesState();
                });

                // Escuchar Categorías en tiempo real desde Firebase
                setCategorias(INITIAL_CATEGORIES);


                return () => {
                    window.removeEventListener('message', handleMessage);
                    perfilesRef.off('child_added', handlePerfilAdded);
                    perfilesRef.off('child_changed', handlePerfilChanged);
                    perfilesRef.off('child_removed', handlePerfilRemoved);
                    anonGalleryRef.off();
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
            const SCORE_GROUP_ITEMS = {
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
                return averageScoresByKeys(profile, SCORE_GROUP_ITEMS.Rostro);
            };
            const getCuerpoScore = (profile = {}) => {
                return averageScoresByKeys(profile, SCORE_GROUP_ITEMS.Cuerpo);
            };
            const getActitudScore = (profile = {}) => {
                return averageScoresByKeys(profile, SCORE_GROUP_ITEMS.Actitud);
            };
            const getCategoryScore = (profile = {}, categoryKey = '') => {
                if (categoryKey === 'Rostro') return getRostroScore(profile);
                if (categoryKey === 'Cuerpo') return getCuerpoScore(profile);
                if (categoryKey === 'Actitud') return getActitudScore(profile);
                return 0;
            };
            const calcularPromedio = (p = {}) => {
                // El Score Total es el promedio de las 3 categorías principales
                const categoryScores = Object.keys(SCORE_GROUP_ITEMS).map((key) => getCategoryScore(p, key));
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

const saveProfile = async (e) => {
                e.preventDefault();
                if (isSavingProfile) return;
                setIsSavingProfile(true);
                const profileData = { ...formData };

                try {
                    if (editingId) {
                        // Si estamos editando, buscamos el lugar exacto y lo actualizamos
                        await db.ref(`perfiles/${editingId}`).set(profileData);
                        setIsModalOpen(false);
                        setEditingId(null);
                    } else {
                        // Si es nuevo, lo empujamos con fuerza a la colección
                        await db.ref('perfiles').push(profileData);
                        setIsModalOpen(false);
                        setFormData(getEmptyProfileFormData());
                    }
                } catch (err) {
                    console.error("No se pudo guardar el perfil:", err);
                    window.alert('No se pudo guardar el perfil. Revisá tu conexión e intentá de nuevo.');
                } finally {
                    setIsSavingProfile(false);
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

            const filteredProfiles = useMemo(() => {
                const base = perfiles;


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
                        if (showIncompleteMainPhotosOnly && hasPrimaryPhotoAssigned(profile)) return false;
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
                                { id: 'GALERIA', icon: 'images', label: 'Galería' },
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
                                                            ]
                                                        });
                                                        setActiveGalleryProfileId(selectedTallerProfile?.firebaseId || selectedTallerProfile?.id || '');
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
                                    const missingLabels = getMissingProfilePhotoLabels(p);
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
                                                value={anonMediaLabel}
                                                onChange={(event) => setAnonMediaLabel(event.target.value)}
                                            >
                                                {GALLERY_LABELS.map((label) => <option key={label} value={label}>{label}</option>)}
                                            </select>
                                            <input
                                                placeholder="URL"
                                                className="md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold"
                                                value={anonMediaUrl}
                                                onChange={(event) => setAnonMediaUrl(event.target.value)}
                                            />
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
                                        <input
                                            placeholder="URL"
                                            className="theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full"
                                            value={galleryAudioUrl}
                                            onChange={(event) => setGalleryAudioUrl(event.target.value)}
                                        />
                                        <button
                                            type="button"
                                            onClick={addGalleryAudioTrack}
                                            className="px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all"
                                        >
                                            Guardar audio en Firebase
                                        </button>
                                        <div className="space-y-2 pt-2">
                                            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black">Audios guardados</p>
                                            {galleryAudioTracks.length ? (
                                                <ul className="space-y-2">
                                                    {galleryAudioTracks.map((track, index) => (
                                                        <li key={`${track.url}-${track.nombre}-${index}`} className="flex items-center justify-between gap-3 rounded-xl border border-slate-500/45 bg-slate-900/55 px-3 py-2">
                                                            <span className="text-sm text-slate-100 font-bold truncate">{track.nombre}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeGalleryAudioTrack(index)}
                                                                className="shrink-0 w-8 h-8 rounded-full border border-rose-300/55 text-rose-200 hover:text-white hover:bg-rose-500/35 transition-all font-black text-lg leading-none"
                                                                aria-label={`Eliminar audio ${track.nombre}`}
                                                                title={`Eliminar ${track.nombre}`}
                                                            >
                                                                ×
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-xs text-slate-300/80 font-semibold">No hay audios guardados todavía.</p>
                                            )}
                                        </div>
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
                                        <button type="submit" disabled={isSavingProfile} className="btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs disabled:cursor-not-allowed disabled:opacity-60">
                                            {isSavingProfile
                                                ? 'Guardando...'
                                                : (editingId ? 'Actualizar Registro' : 'Guardar Perfil')}
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
