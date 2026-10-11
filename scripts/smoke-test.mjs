import { spawn } from "node:child_process";
import assert from "node:assert/strict";

console.log("Iniciando servidor Next.js para smoke tests...");
const server = spawn("npx", ["next", "start", "-p", "3001"], {
  shell: true,
  stdio: "pipe",
});

let serverReady = false;

server.stdout.on("data", (data) => {
  const msg = data.toString();
  if (msg.includes("Ready") || msg.includes("http://") || msg.includes("Local:")) {
    serverReady = true;
  }
});

// Esperar a que el servidor esté listo
for (let i = 0; i < 30; i++) {
  await new Promise((r) => setTimeout(r, 500));
  try {
    const res = await fetch("http://localhost:3001/");
    if (res.status === 200) {
      serverReady = true;
      break;
    }
  } catch {
    // Aún iniciando
  }
}

if (!serverReady) {
  server.kill();
  console.error("El servidor no inició a tiempo.");
  process.exit(1);
}

try {
  console.log("1. Probando Home ('/')");
  const homeRes = await fetch("http://localhost:3001/");
  console.log(`   Status: ${homeRes.status}`);
  assert.equal(homeRes.status, 200);
  const homeHtml = await homeRes.text();
  assert.ok(homeHtml.includes("Andre Acosta"), "Home debe incluir el nombre del profesional");
  assert.ok(homeHtml.includes("Kerigma"), "Home debe incluir a Kerigma");
  assert.ok(homeHtml.includes("HIS UPeU"), "Home debe incluir a HIS UPeU");
  assert.ok(!homeHtml.includes("FinaTrack — Gestión"), "Home NO debe mostrar a FinaTrack mientras esté inédito");

  console.log("2. Probando Estudio de Caso Kerigma ('/projects/kerigma')");
  const kRes = await fetch("http://localhost:3001/projects/kerigma");
  console.log(`   Status: ${kRes.status}`);
  assert.equal(kRes.status, 200);
  const kHtml = await kRes.text();
  assert.ok(kHtml.includes("Kerigma"), "Debe renderizar Kerigma");
  assert.ok(kHtml.includes("Sistema de Gestión Misionera"), "Debe renderizar el subtítulo");

  console.log("3. Probando Estudio de Caso HIS UPeU ('/projects/his-upeu')");
  const hRes = await fetch("http://localhost:3001/projects/his-upeu");
  console.log(`   Status: ${hRes.status}`);
  assert.equal(hRes.status, 200);
  const hHtml = await hRes.text();
  assert.ok(hHtml.includes("HIS UPeU"), "Debe renderizar HIS UPeU");

  console.log("4. Probando Proyecto Inédito FinaTrack ('/projects/finatrack') -> Debe responder 404");
  const fRes = await fetch("http://localhost:3001/projects/finatrack");
  console.log(`   Status: ${fRes.status}`);
  assert.equal(fRes.status, 404, "Ruta no publicada debe responder 404 Not Found");

  console.log("5. Probando Sitemap ('/sitemap.xml')");
  const sRes = await fetch("http://localhost:3001/sitemap.xml");
  console.log(`   Status: ${sRes.status}`);
  assert.equal(sRes.status, 200);
  const sXml = await sRes.text();
  assert.ok(sXml.includes("/projects/kerigma"));
  assert.ok(sXml.includes("/projects/his-upeu"));
  assert.ok(!sXml.includes("/projects/finatrack"), "Sitemap no debe contener FinaTrack");

  console.log("\nTODOS LOS SMOKE TESTS PASARON SATISFACTORIAMENTE!");
} finally {
  server.kill();
  // En Windows matar procesos hijo si es necesario
  spawn("taskkill", ["/pid", server.pid.toString(), "/f", "/t"], { shell: true });
}
