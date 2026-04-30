import { initializeApp, getApps, getApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getDatabase, ref, onValue, off, get, set, update, remove, push } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyAcW679YdIT03pyq8IgKKnR8oyO4_fvpFs",
  authDomain: "g2elite-a3b85.firebaseapp.com",
  databaseURL: "https://g2elite-a3b85-default-rtdb.firebaseio.com/",
  projectId: "g2elite-a3b85",
  storageBucket: "g2elite-a3b85.firebasestorage.app",
  messagingSenderId: "951346482286",
  appId: "1:951346482286:web:6001135252de2a4d982a7f",
};

function createSnapshot(data) {
  return { val: () => data };
}

function createRefCompat(db, path) {
  const queryRef = ref(db, path);
  const valueCallbacks = new Map();

  return {
    once(eventName) {
      if (eventName !== 'value') throw new Error(`Evento no soportado: ${eventName}`);
      return get(queryRef).then((snap) => createSnapshot(snap.val()));
    },
    on(eventName, callback) {
      if (eventName !== 'value') throw new Error(`Evento no soportado: ${eventName}`);
      const unsubscribe = onValue(queryRef, (snap) => callback(createSnapshot(snap.val())));
      valueCallbacks.set(callback, unsubscribe);
      return callback;
    },
    off(eventName, callback) {
      if (eventName && eventName !== 'value') return;
      if (callback && valueCallbacks.has(callback)) {
        valueCallbacks.get(callback)();
        valueCallbacks.delete(callback);
        return;
      }
      valueCallbacks.forEach((unsubscribe) => unsubscribe());
      valueCallbacks.clear();
      off(queryRef);
    },
    set(value) { return set(queryRef, value); },
    update(value) { return update(queryRef, value); },
    remove() { return remove(queryRef); },
    push(value) {
      const newRef = push(queryRef);
      return value === undefined ? Promise.resolve(newRef) : set(newRef, value).then(() => newRef);
    }
  };
}

window.firebaseDbReady = Promise.resolve().then(() => {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbCompat = { ref: (path) => createRefCompat(db, path) };
  window.firebaseDb = dbCompat;
  window.firebase = { database: () => dbCompat };
  return dbCompat;
});
