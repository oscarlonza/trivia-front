import DeveloperCard from "../../components/DeveloperCard";
import style from "./developer.module.css";

const Developer = () => {
  const developers = [
    {
      name: "Laura Marcela Arango Correa",
      description:
        "Ingeniera electrónica con experiencia en diseño, desarrollo e implementación de software. Destaco en lenguajes de programación como Golang, Python y Java, cuento con un sólido conocimiento en bases de datos relacionales como MySQL y PostgreSQL. Participo activamente en iniciativas y proyectos utilizando metodologías ágiles, lo que me permite adaptarme de manera efectiva a los cambios. Además, me encargo de definir casos de prueba y realizar pruebas unitarias, integrales y funcionales como parte de mi compromiso con la calidad del software. Mi actitud proactiva se refleja en mi constante búsqueda por profundizar mis conocimientos, estoy siempre dispuesta a adquirir nuevas habilidades y explorar nuevas tecnologías. Estoy comprometida con la excelencia técnica, el trabajo en equipo, la solución de problemas y la mejora continua.",
      linkedin: "https://www.linkedin.com/in/lmarangoc/",
      image: "./assets/images/developers/laura-a.png",
    },
    {
      name: "Victor Manuel Barbosa Gutierrez",
      description:
        "Semi-Senior DevOps Engineer with 4+ years of experience supporting, automating, and deploying changes to enhance the IT infrastructure. Knowledge in cloud computing, implementing DevOps practices and use of agile methodologies. Proficient in Azure DevOps and AWS. Someone who'll find ways to automate manual processes and save the company time.",
      linkedin: "https://www.linkedin.com/in/victormbarbosa/",
      image: "./assets/images/developers/victor.png",
    },
    {
      name: "Gustavo Barrios Sierra",
      description:
        "Soy un profesional con pensamiento crítico constructivo que trabajo en equipo, habilidades fuertes en resolución de problemas, con ética laboral y valores, muy comunicativo y adaptativo. Experiencia en nuevo desarrollo, soporte, implementación y capacitación en software contable , de inventarios, punto de venta, recaudo de impuestos, presupuestos regionales, comercial, restaurantes, gestión documental, créditos (Hipotecario, libranzas, factura), cartera, aportes parafiscales y subsidios del gobierno. Experiencia en lenguajes de programación PLsql, Html, PHP, JavaScript C# .net. con herramientas Oracle forms, Oracle reports, Dreamweaver CS4, Visual Studio .net y Oracle Developer. Experiencia en bases de datos Oracle 11g, IBM Db2, Mysql.",
      linkedin: "https://www.linkedin.com/in/gabarrioss/",
      image: "./assets/images/developers/gustavo.png",
    },
    {
      name: "Jose Alejandro Cordoba Angarita",
      description:
        "Ingeniero Electrónico y Desarrollador Fullstack con experiencia en la industria del retail. Actualmente, desempeño un papel clave como Analista de Software en Muebles Jamar, liderando el desarrollo de soluciones tecnológicas innovadoras para optimizar los procesos de venta y mejorar la experiencia del cliente.",
      linkedin: "https://www.linkedin.com/in/jose-cordoba03551721b/",
      image: "./assets/images/developers/jose-c.png",
    },
    {
      name: "Stevens Correa Rada",
      description:
        "Soy ingeniero de software con más de 4 años de experiencia en desarrollo web y móvil. Creo soluciones innovadoras utilizando React, Node.js, JavaScript y tecnologías de AWS. Tengo una sólida formación en arquitectura de aplicaciones y bases de datos, lo que me permite diseñar y desarrollar sistemas eficientes que satisfagan los requisitos de los clientes. Estoy bien versado en el trabajo con bases de datos SQL y NoSQL, como MongoDB y MySQL, y puedo diseñar API RESTful y GraphQL.",
      linkedin: "https://www.linkedin.com/in/stevens-correa-rada/",
      image: "./assets/images/developers/stevens.png",
    },
    {
      name: "Antony De Jesus De La Hoz De Leon",
      description:
        "Egresado de la Universidad del Norte. Con Experiencia en desarrollo de Software en lenguaje JAVA (Spring Boot). Manejo de Equipos de desarrollo. Amplias habilidades técnicas utilizando distintas tecnologías y herramientas.",
      linkedin:
        "https://www.linkedin.com/in/antony-de-jesus-de-la-hoz-de-leon/",
      image: "./assets/images/developers/antony.png",
    },
    {
      name: "Ruben Camero Amador",
      description:
        "Ingeniero de sistemas con 3 años de experiencia en desarrollo de software en Python, .NET Core y Java. Fuertes conocimientos en bases de datos como SQL Server y Postgres, hábil en la orquestación de procesos ETL con SSIS y Apache Airflow, y experto en la creación de cubos multidimensionales utilizando SSAS. Conocimiento en Power BI y SSRS como herramientas de informes.",
      linkedin: "https://www.linkedin.com/in/rubencameroamador/",
      image: "./assets/images/developers/ruben.png",
    },
    {
      name: "Wiston Camilo Castañeda Meriño",
      description:
        "Ingeniero de software, procesos y desarrollador Backend, apasionado por el desarrollo web, el diseño de procesos y la experiencia del usuario a través de las plataformas digitales.",
      linkedin:
        "https://www.linkedin.com/in/wiston-camilo-casta%C3%B1eda-meri%C3%B1o-7a4ab462/",
      image: "./assets/images/developers/wiston.png",
    },
    {
      name: "Alvaro Florez Arnedo",
      description:
        "Scrum Master | Facilitador de Equipos Ágiles | Agilismo | SQL |Analista de Datos",
      linkedin: "https://www.linkedin.com/in/alvaro-florez-arnedo-3417a85a/",
      image: "./assets/images/developers/alvaro.png",
    },
    {
      name: "Daniel Alfonso Fuentes López",
      description:
        "Ingeniero de Software por la Universidad de Cartagena, con una trayectoria de casi 10 años de experiencia en la industria del software. Actualmente trabajo como desarrollador Backend, encargado de crear nuevas funcionalidades y gestionar la migración de componentes Java a Golang. A nivel académico me encuentro cursando una especialización en Ingeniería de Software en la Universidad del Norte.",
      linkedin: "https://www.linkedin.com/in/dfuentesl/",
      image: "./assets/images/developers/daniel.png",
    },
    {
      name: "Diego Alexander Palencia Ortega",
      description:
        "Ingeniero Industrial especializado en el desarrollo y optimización de procesos, con una sólida experiencia en la creación de soluciones eficientes mediante Power Apps, Power Automate, Sharepoint y Power BI. Mi enfoque se centra en la mejora continua, aportando habilidades avanzadas en la caracterización detallada de procesos y la implementación de mejoras estratégicas. Destaco por mi capacidad para crear tableros dinámicos en Power BI que impactan positivamente en la toma de decisiones, así como por mi habilidad para trabajar con conexiones a Sharepoint y SQL para la extracción y transformación de datos. Con experiencia en áreas críticas como Gestión de la Calidad y Control Interno. Actualmente me encuentro cursando especialización en Ingeniería de Software para aplicarlo en la gestión de proyectos de tecnología.",
      linkedin: "https://www.linkedin.com/in/diegopalencia7/",
      image: "./assets/images/developers/diego.png",
    },
    {
      name: "Hemel Parody",
      description:
        "Soy Ingeniero Electrónico egresado de la Universidad del Norte, con excelentes aptitudes para el análisis y solución de problemas y el trabajo en equipo, con vasta experiencia trabajando en ambientes bilingües. Poseo habilidades para el desarrollo web multiplataforma utilizando Javascript y frameworks relacionados. Soy un apasionado del diseño, el desarrollo de software, debugging y refactoring de código",
      linkedin: "https://www.linkedin.com/in/hemel-parody/",
      image: "./assets/images/developers/hemel.png",
    },
    {
      name: "Carlos Mario Paternina Pérez",
      description:
        "Ingeniero de sistemas, tecnólogo en telecomunicaciones, y músico por pasión. Actualmente me desempeaño como desarrollador web y mobile con tecnologías híbrida. Enamorado del desarrollo y del aprendizaje constante.",
      linkedin: "https://www.linkedin.com/in/carlospaterninadev/",
      image: "./assets/images/developers/carlos.png",
    },
    {
      name: "Hans Snehider Peluffo Diaz",
      description:
        "Soy una persona con un alto sentido de responsabilidad, compromiso, honestidad, organizado y emprendedor, con capacidad de afrontar el cambio a nuevas tecnologías y trabajo en equipo. Me desempeño como ingeniero de sistemas en la Alcaldía Distrital de Barranquilla, donde he acumulado 15 años de experiencia no solo en el desarrollo de software, también en la toma de decisiones, análisis y resolución de problemas, participe desde el inicio en el diseño y desarrollo del portar web del área de impuestos distritales, web services para recaudo en línea con entidades bancarias a nivel nacional, diseño de la base de datos, en las cuales he podido obtener muchos conocimientos en el área tributaria, poseo habilidades para asesorar grupos de trabajo, proponer soluciones optimas a problemas, poseo conocimientos técnicos en: Oracle, Java, PlSql, SqlDeveloper, servidores de aplicaciones web, entre otros.",
      linkedin:
        "https://www.linkedin.com/in/hans-snehider-peluffo-diaz-221035235/",
      image: "./assets/images/developers/hans.png",
    },
    {
      name: "Vanessa Quintero",
      description:
        "QA Engineer con experiencia en pruebas de software y control de calidad. Conocimientos en metodologías ágiles, pruebas manuales y automatizadas, herramientas de gestión de pruebas y seguimiento de errores. Soy una persona proactiva, con habilidades de comunicación y trabajo en equipo, orientada a resultados y con capacidad para adaptarse a entornos cambiantes.",
      linkedin: "https://www.linkedin.com/in/vanessa-quintero-045132152/",
      image: "./assets/images/developers/vanessa.png",
    },
    {
      name: "Yulieth Zambrano Vizcaino",
      description:
        "Ingeniera de Sistemas y Computación con experiencia como analista técnica de negocio e ingeniera de datos. He colaborado estrechamente con equipos multifuncionales en la industria de la tecnología bancaria, incluyendo arquitectos, gerentes de proyecto, ingenieros y equipos comerciales.",
      linkedin: "https://www.linkedin.com/in/yuliethzambrano/",
      image: "./assets/images/developers/yulieth.png",
    },
    {
      name: "Krauselee Yanci",
      description:
        "Consultora de proyectos tecnológicos B2B, especialista en ingeniería del software enfocada en el asesoramiento estratégico en proyectos de transformación digital, incluyendo desarrollo de software, digital workplace, automatización de procesos, IoT, soluciones Cloud, integración de plataformas, analítica, staffing, y herramientas de colaboración, entre otros. ",
      linkedin: "http://linkedin.com/in/krauselee-yanci",
      image: "./assets/images/developers/krau.png",
    },
    {
      name: "Jose Carlos Vasquez Cruz",
      description:
        "Ingeniero Electrónico con 4 años de experiencia en desarrollo de aplicaciones web, usando tecnologias Microsoft como Asp.Net Framerwork, ASP.Net Core. Manejo de bases de datos en MSSQL Server. Manejo de Metodologias Agiles scrum en Azure Devops.",
      linkedin: "https://www.linkedin.com/in/ingjosecarlosvasquezcruz/",
      image: "./assets/images/developers/jose-v.png",
    },
    {
      name: "Luis Hernando Sarmiento Garzon",
      description:
        "Ingeniero de Sistemas con amplios conocimientos en desarrollo de software utilizando diversos lenguajes de programación como Java, JavaScript, VBA, C# y Python. Además, tengo experiencia en desarrollo web utilizando tecnologías como HTML, CSS y el framework Angular, en cuanto a bases de datos cuento con experiencia en MySQL, DB2, MySQL Server y Firebase.",
      linkedin: "https://www.linkedin.com/in/luhesaga/",
      image: "./assets/images/developers/luis-s.png",
    },

    {
      name: "Gabriel Rodríguez Molinares",
      description:
        "Liderando procesos de automatización y atención de servicio para los distintos sistemas, me he desempeñado comoconsultar en el mantenimiento, soporte y desarrollo de aplicaciones inhause y externas. Siempre de la mano con un equipo de trabajo en el que se supervisa, guía y planifica la mejor estrategia para llegar al objetivo.",
      linkedin:
        "https://www.linkedin.com/in/ing-gabriel-rodr%C3%ADguez-molinares-66710757/",
      image: "./assets/images/developers/gabriel.png",
    },

    {
      name: "Jose Ariel Romero Arias",
      description:
        "I am looking for a job opportunity abroad, I have Colombian - Spanish citizenship, I am looking for an opportunity in ICT, I have experience in hardware support, installation and management of L.A.N networks, frontend development with React, backend development with Java through spring boot and server side with node js.",
      linkedin:
        "https://www.linkedin.com/in/jose-ariel-romero-arias-1063b415a/",
      image: "./assets/images/developers/jose-r.png",
    },

    {
      name: "Steven Rodríguez",
      description:
        "Ingeniero de Sistemas con experiencia reciente en Arquitectura de Soluciones con certificación AWS Architect Solutions Associate, capacitado para diseñar infraestructuras en la nube seguras, de alto rendimiento, resistentes y eficientes para diversas aplicaciones y cargas de trabajo. Aplicando conocimientos, fundamentos y principios en torno a 5 pilares clave de la arquitectura: excelencia operativa, seguridad, fiabilidad, eficiencia de rendimiento y optimización de costos.",
      linkedin: "https://www.linkedin.com/in/steven-rodr%C3%ADguez-68a36996/",
      image: "./assets/images/developers/steven.png",
    },

    {
      name: "Juan David Rodriguez",
      description:
        "Apasionado por enfrentar proyectos desafiantes que demandan innovación tecnológica. Me especializo en el análisis, diseño, desarrollo y documentación de soluciones informáticas para entornos web y móviles. Sobresalgo en la aplicación de tecnologías de vanguardia y en la gestión de bases de datos, ya sean relacionales o no relacionales. Mi enfoque proactivo y autodidacta me impulsa a mantenerme al día con las últimas tendencias tecnológicas. Además, estoy familiarizado con estándares de buenas prácticas y soluciones basadas en servicios en la nube.",
      linkedin: "https://www.linkedin.com/in/juan-david-rodriguez-cervantes/",
      image: "./assets/images/developers/juan.png",
    },

    {
      name: "Gabriela Monsalve Martínez",
      description:
        "Ingeniera de Sistemas con 2+ años de experiencia como Desarrolladora Frontend con Angular, TypeScript y JavaScript",
      linkedin: "https://www.linkedin.com/in/gmmonsalve/",
      image: "./assets/images/developers/gabriela.png",
    },

    {
      name: "Rafael Dario Martinez Barrios",
      description:
        "Ingeniero de sistemas egresado de la Universidad Simón Bolívar de la ciudad Barranquilla. Con conocimientos de manejo de bases de datos Oracle y PostgreSQL, de lenguajes de programación como JavaScript, Ruby, Python, NodeJs, lenguaje de etiqueta HTML y lenguaje de diseño gráfico CSS, de frameworks de desarrollo web como Angular , React Js y Bootstrap. Además, tengo conocimientos en el servicio de alojamiento de repositorios GitHub y conocimientos en el despliegue de aplicaciones a ambientes de producción haciendo uso de herramientas como WinSCP y Termius.",
      linkedin:
        "https://www.linkedin.com/in/rafael-dario-martinez-barrios-a7b369163/",
      image: "./assets/images/developers/rafa.png",
    },

    {
      name: "Nathaly Lozano",
      description:
        "Soy ingeniero de software con más de 8 años de experiencia en desarrollo web. Me centro firmemente en el trabajo en equipo basado en metodologías ágiles y en la seguridad de la información, y tengo un alto sentido de la responsabilidad y del respeto por los demás.",
      linkedin: "https://www.linkedin.com/in/nathaly-lozano-g/",
      image: "./assets/images/developers/nata.png",
    },
    {
      name: "Luis Fernando Galviz",
      description:
        "Ingeniero de sistemas y computación en proceso de maestría en ingeniería de software con más de 3 años de experiencia en desarrollo de software, con amplios conocimientos en múltiples tecnologías y herramientas de desarrollo que incluyen Javascript, Python, React, Vue, OpenUI5, NestJS, Express Azure, GIT, Linux, DevOps.",
      linkedin: "https://www.linkedin.com/in/lfgalviz/",
      image: "./assets/images/developers/luis-g.png",
    },
    {
      name: "Ricardo Antonio Gómez Oliveros",
      description:
        "Soy Ingeniero Industrial con 7 años de experiencia en el sector Oil & Gas, desempeñándome en diversas áreas como Recursos Humanos, Administración y Finanzas, e Information Technology. Mi enfoque principal se ha centrado en la mejora continua de procesos y la automatización, haciendo uso de herramientas digitales como Power Platforms, SQL y Visual Basic, entre otras. A lo largo de mi trayectoria, he participado activamente en diversos proyectos, lo que me ha brindado una amplia experiencia y habilidades prácticas en la implementación exitosa de soluciones innovadoras.",
      linkedin: "linkedin.com/in/ricardo-antonio-gómez-oliveros-15389a160",
      image: "./assets/images/developers/ricardo.png",
    },
    {
      name: "Eugenio Andrés González",
      description:
        "Profesional en Negocios Internacionales con habilidades en Digital Product / Project Management y Gestión de Tecnologías Digitales y más de 11 años de experiencia liderando proyectos en Sector Servicios y Tecnología. ",
      linkedin: "linkedin.com/in/eugenio-andres-gonzalez-fernandez-pmp",
      image: "./assets/images/developers/eugenio.png",
    },
    {
      name: "Jorge Guzmán",
      description:
        "Ingeniero Electrónico con más de nueve años de experiencia general, incluyendo cinco años especializados en soluciones con Microsoft Power Platform. Hábil en la automatización de procesos y en el análisis profundo de datos para sectores como energía, logística, transporte y seguridad. Comprometido con alcanzar los objetivos colectivos de la empresa mediante esfuerzos colaborativos y dedicados. Mantengo altos estándares de integridad y dedicación en todas mis actividades profesionales.",
      linkedin: "linkedin.com/in/eugenio-andres-gonzalez-fernandez-pmp",
      image: "./assets/images/developers/jorge-g.png",
    },
    {
      name: "Jorge Luis Jinete Diaz",
      description:
        "¡Hola! Soy Jorge Jinete, un apasionado ingeniero de sistemas con un enfoque especial en la gestión de proyectos y desarrollo de software. Poseo un diplomado en Gerencia de Proyectos y actualmente me encuentro inmerso en una especialización en Ingeniería de Software para seguir expandiendo mis habilidades y conocimientos.",
      linkedin: "linkedin.com/in/jorgejinete",
      image: "./assets/images/developers/jorge-j.png",
    },
    {
      name: "Oscar Londoño Zambrano",
      description:
        "Soy un ingeniero de sistemas con más de diez años de experiencia en el desarrollo de software, utilizando diversas tecnologías y lenguajes de programación. Me apasiona crear soluciones innovadoras y de calidad, que satisfagan las necesidades de los clientes y los usuarios finales. Tengo conocimientos y habilidades en ASP.NET, Blazor, SQL Server, Java, Oracle PL/SQL, Android, Flutter, Angular, Vue, Laravel PHP, MySql, Javascript, HTML y CSS. Me considero una persona responsable, amable y dinámica, que disfruta trabajar en equipo y aprender constantemente.",
      linkedin: "linkedin.com/in/oscar-londono-zambrano-00b7a6127",
      image: "./assets/images/developers/oscar.png",
    },
  ];

  developers.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={style.page}>
      <h1 className={style.title}>Conoce a los Desarrolladores</h1>
      <section className={style.container}>
        {developers.map((developer, index) => (
          <DeveloperCard developer={developer} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Developer;
