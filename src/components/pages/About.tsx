import nacho from "../../assets/Nacho.jpg";
import nair from "../../assets/Nair.jpeg";
import gaby from "../../assets/Gaby.jpeg";


// interface StatItem {
//   id: number;
//   value: string;
//   label: string;
// }

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Nair Paez",
    role: "Scrum Master",
    image: nair,
    bio: "Estudiante de programación Full Stack en RollingCode",
  },
  {
    id: 2,
    name: "Ignacio Holmquist",
    role: "Head of Product Design",
    image: nacho,
    bio: "Estudiante de programación Full Stack en RollingCode",
  },
  {
    id: 3,
    name: "Gabriel Funes",
    role: "Head of Product Design",
    image: gaby,
    bio: "Estudiante de programación Full Stack en RollingCode",
  },
];

export default function AboutPage(): React.JSX.Element {
  return (
    <main className="text-slate-800 min-h-screen mx-auto">
      {/* Hero Section */}
      <section className="relative py-20 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 text-center lg:text-left lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <span className="text-slate-600 font-semibold tracking-wider uppercase text-sm">
            Nuestra Esencia
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Creamos el futuro digital de tu negocio
          </h1>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 border-y ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl bg-slate-300 border border-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Democratizar el acceso a software de alta calidad. Desarrollamos
              soluciones escalables aplicando metodologías ágiles que permiten a
              las empresas crecer de forma sostenida y competitiva.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-300 border border-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nuestra Visión
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ser el partner tecnológico de referencia a nivel global,
              reconocidos por la excelencia técnica de nuestro código, el diseño
              centrado en las personas y el compromiso real con cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Las Mentes Detrás del Código
          </h2>
          <p className="text-lg text-slate-600">
            Un equipo apasionado, obsesionado con los detalles y la
            optimización.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {TEAM.map((member: TeamMember) => (
            <div
              key={member.id}
              className="bg-slate-300 rounded-2xl shadow-sm border border-slate-900 overflow-hidden group hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-100 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    {member.role}
                  </p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
