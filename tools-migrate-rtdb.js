#!/usr/bin/env node
/**
 * Migra todos los datos de Realtime Database entre dos proyectos Firebase.
 * Uso:
 *   node tools-migrate-rtdb.js old-service-account.json new-service-account.json https://OLD.firebaseio.com https://NEW.firebaseio.com
 */
const fs = require('fs');
const admin = require('firebase-admin');

async function main() {
  const [oldSaPath, newSaPath, oldDbUrl, newDbUrl] = process.argv.slice(2);
  if (!oldSaPath || !newSaPath || !oldDbUrl || !newDbUrl) {
    throw new Error('Uso: node tools-migrate-rtdb.js <old-sa.json> <new-sa.json> <old-db-url> <new-db-url>');
  }

  const oldSa = JSON.parse(fs.readFileSync(oldSaPath, 'utf8'));
  const newSa = JSON.parse(fs.readFileSync(newSaPath, 'utf8'));

  const oldApp = admin.initializeApp({
    credential: admin.credential.cert(oldSa),
    databaseURL: oldDbUrl,
  }, 'old-project');

  const newApp = admin.initializeApp({
    credential: admin.credential.cert(newSa),
    databaseURL: newDbUrl,
  }, 'new-project');

  const sourceRef = oldApp.database().ref('/');
  const targetRef = newApp.database().ref('/');

  const snapshot = await sourceRef.get();
  const payload = snapshot.val();

  if (!payload) {
    console.log('No hay datos en la base origen.');
    return;
  }

  await targetRef.set(payload);
  console.log('Migración completada con éxito.');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
