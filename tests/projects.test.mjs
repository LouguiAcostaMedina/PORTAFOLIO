import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { PROJECTS, getPublishedProjects, getProjectBySlug, getAllProjectSlugs } from "../data/projects.ts";
import { PROFILE } from "../data/profile.ts";

describe("Validación de Integridad de Datos del Portafolio", () => {
  it("Debe contener únicamente los tres proyectos autorizados en el catálogo base", () => {
    assert.equal(PROJECTS.length, 3, "El catálogo base debe contener exactamente 3 proyectos");
    const ids = PROJECTS.map((p) => p.id);
    assert.deepEqual(ids.sort(), ["finatrack", "his-upeu", "kerigma"].sort());
  });

  it("Solo debe publicar Kerigma y HIS UPeU en el listado público", () => {
    const published = getPublishedProjects();
    assert.equal(published.length, 2, "Deben haber exactamente 2 proyectos publicados");
    const publishedSlugs = published.map((p) => p.slug);
    assert.ok(publishedSlugs.includes("kerigma"), "Kerigma debe estar publicado");
    assert.ok(publishedSlugs.includes("his-upeu"), "HIS UPeU debe estar publicado");
    assert.ok(!publishedSlugs.includes("finatrack"), "FinaTrack NO debe estar publicado");
  });

  it("FinaTrack debe estar reservado, no publicado y no visible", () => {
    const finatrack = PROJECTS.find((p) => p.slug === "finatrack");
    assert.ok(finatrack, "FinaTrack debe existir en la configuración de datos");
    assert.equal(finatrack?.published, false, "FinaTrack debe tener published: false");
    assert.equal(finatrack?.status, "planned", "FinaTrack debe tener status: planned");
    assert.equal(finatrack?.featured, false, "FinaTrack debe tener featured: false");
  });

  it("getProjectBySlug debe devolver null para proyectos no publicados o inexistentes", () => {
    const finatrackQuery = getProjectBySlug("finatrack");
    assert.equal(finatrackQuery, null, "La consulta de FinaTrack debe responder null para activar 404");

    const nonExistent = getProjectBySlug("random-project");
    assert.equal(nonExistent, null, "Proyectos inexistentes deben responder null");
  });

  it("getAllProjectSlugs no debe exponer el slug de FinaTrack para sitemap", () => {
    const slugs = getAllProjectSlugs();
    assert.deepEqual(slugs.sort(), ["his-upeu", "kerigma"].sort());
    assert.ok(!slugs.includes("finatrack"));
  });

  it("Kerigma debe documentar claramente repositorios separados de frontend y backend", () => {
    const kerigma = getProjectBySlug("kerigma");
    assert.ok(kerigma);
    assert.equal(kerigma.repositoryFrontend, "https://github.com/LouguiAcostaMedina/kerigma-frontend");
    assert.equal(kerigma.repositoryBackend, "https://github.com/LouguiAcostaMedina/kerigma-backend");
    assert.equal(kerigma.liveUrl, null, "Kerigma no debe afirmar una demo pública inexistente");
  });

  it("HIS UPeU debe documentar repositorio frontend y despliegue verificado en Vercel", () => {
    const his = getProjectBySlug("his-upeu");
    assert.ok(his);
    assert.equal(his.repositoryFrontend, "https://github.com/LouguiAcostaMedina/his-frontend");
    assert.equal(his.repositoryBackend, null);
    assert.equal(his.liveUrl, "https://his-frontend-upeu.vercel.app/");
  });

  it("El perfil del desarrollador debe contener los datos oficiales y sin datos inventados", () => {
    assert.equal(PROFILE.preferredName, "Andre Acosta Medina");
    assert.equal(PROFILE.email, "lougui.acosta@upeu.edu.pe");
    assert.equal(PROFILE.university, "Universidad Peruana Unión (UPeU)");
    assert.equal(PROFILE.degree, "Estudiante de Ingeniería de Sistemas");
    assert.equal(PROFILE.github, "https://github.com/LouguiAcostaMedina");
    assert.ok(PROFILE.bio.length > 50, "La biografía debe ser sustancial");
  });
});
