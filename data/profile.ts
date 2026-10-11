export interface ProfileData {
  fullName: string;
  preferredName: string;
  role: string;
  university: string;
  degree: string;
  email: string;
  github: string;
  bio: string;
  philosophy: string[];
}

export const PROFILE: ProfileData = {
  fullName: "Lougui Andre Acosta Medina",
  preferredName: "Andre Acosta Medina",
  role: "Software Developer | Full Stack & Backend Development",
  university: "Universidad Peruana Unión (UPeU)",
  degree: "Estudiante de Ingeniería de Sistemas",
  email: "lougui.acosta@upeu.edu.pe",
  github: "https://github.com/LouguiAcostaMedina",
  bio: "Soy desarrollador de software y estudiante de Ingeniería de Sistemas. Me enfoco en construir aplicaciones web modernas, APIs, soluciones Full Stack y sistemas mantenibles, prestando atención a la arquitectura, la experiencia de usuario y la calidad del código.",
  philosophy: [
    "Arquitectura por encima de soluciones improvisadas: división rigurosa de responsabilidades entre cliente, servicios y persistencia.",
    "Contratos de datos tipados y validados en los límites de la aplicación para prevenir fallos en ejecución.",
    "Código legible, testeable y mantenible con pruebas automatizadas integradas al ciclo de desarrollo.",
    "Accesibilidad, rendimiento y diseño editorial centrado en el usuario final.",
  ],
};
