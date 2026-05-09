/* =========================
   i18n.js — Sistema de idiomas
   AA Property Services
   Idiomas: es | en | fr | de
========================= */

const translations = {

  /* ========================
     ESPAÑOL (por defecto)
  ======================== */
  es: {
    'nav.inicio':           'Inicio',
    'nav.servicios':        'Servicios',
    'nav.sobre':            'Sobre nosotros',
    'nav.contacto':         'Contacto',
    'nav.clientes':         'Acceso clientes',
    'nav.personal':         'Acceso personal',

    'footer.tagline':       'Servicios exclusivos para una vida sin preocupaciones.',
    'footer.ubicacion':     'Ubicación',
    'footer.ciudad':        'Oropesa del Mar, Castellón',
    'footer.contacto':      'Contacto',

    'hero.eyebrow':         'Gestión integral de villas en Oropesa del Mar',
    'hero.h1':              'Servicios exclusivos para una vida sin preocupaciones',
    'hero.lead':            'En AA Property Services cuidamos villas y propiedades con un servicio integral de supervisión, mantenimiento, atención personalizada y asistencia premium para que cada propietario disfrute de su vivienda con total tranquilidad.',
    'hero.punto1':          'Supervisión continua',
    'hero.punto2':          'Mantenimiento preventivo',
    'hero.punto3':          'Atención personalizada',
    'hero.cta1':            'Ver servicios',
    'hero.cta2':            'Contactar',
    'hero.img.alt':         'Interior de villa de lujo en Oropesa del Mar',

    'propuesta.eyebrow':    'Nuestra propuesta',
    'propuesta.h2':         'Mucho más que mantenimiento',
    'propuesta.desc':       'Ofrecemos una solución completa para villas y propiedades exclusivas, combinando supervisión periódica, mantenimiento preventivo, gestión de incidencias y servicios premium en una experiencia profesional y cuidada.',
    'propuesta.c1.h3':      'Supervisión y mantenimiento',
    'propuesta.c1.p':       'Realizamos revisiones regulares para comprobar el estado general de la vivienda, detectar incidencias a tiempo y asegurar el correcto mantenimiento.',
    'propuesta.c2.h3':      'Gestión de incidencias',
    'propuesta.c2.p':       'Coordinamos actuaciones técnicas y damos seguimiento a pequeñas incidencias antes de que se conviertan en averías importantes.',
    'propuesta.c3.h3':      'Servicios premium',
    'propuesta.c3.p':       'Ponemos a disposición del cliente servicios exclusivos como chef privado, catering, chófer, compras, belleza o bienestar bajo demanda.',

    'elegirnos.eyebrow':    'Por qué elegirnos',
    'elegirnos.h2':         'Una gestión pensada para propietarios exigentes',
    'elegirnos.f1':         'Atención personalizada',
    'elegirnos.f2':         'Comunicación directa',
    'elegirnos.f3':         'Seguimiento de servicios',
    'elegirnos.f4':         'Prevención de incidencias',
    'elegirnos.f5':         'Cuidado continuo',
    'elegirnos.f6':         'Experiencia premium',

    'como.eyebrow':         'Cómo funciona',
    'como.h2':              'Un servicio sencillo y eficiente',
    'como.s1.h3':           'Contratación del plan',
    'como.s1.p':            'El propietario elige la opción que mejor se adapta a su vivienda y necesidades.',
    'como.s2.h3':           'Supervisión de la propiedad',
    'como.s2.p':            'Nuestro equipo revisa la vivienda y realiza el seguimiento de su estado general.',
    'como.s3.h3':           'Registro de actuaciones',
    'como.s3.p':            'Las revisiones, mantenimientos e incidencias quedan organizados y controlados.',
    'como.s4.h3':           'Solicitud de servicios',
    'como.s4.p':            'El cliente puede pedir servicios adicionales y consultar el seguimiento de su villa.',

    'galeria.eyebrow':      'Propiedades que cuidamos',
    'galeria.h2':           'Entornos diseñados para disfrutar, gestionar y conservar',
    'galeria.desc':         'Trabajamos en villas y entornos residenciales exclusivos, donde cada detalle importa. Nuestro servicio está pensado para mantener cada propiedad en perfecto estado y acompañar una experiencia de vida premium.',
    'galeria.tag1':         'Villa principal',
    'galeria.g1.h3':        'Arquitectura, privacidad y cuidado continuo',
    'galeria.tag2':         'Zonas exteriores',
    'galeria.g2.h3':        'Espacios pensados para el descanso y la exclusividad',
    'galeria.tag3':         'Entorno residencial',
    'galeria.g3.h3':        'Promociones premium en ubicaciones privilegiadas',

    'cobertura.eyebrow':    'Cobertura',
    'cobertura.h2':         'Dónde trabajamos',
    'cobertura.p':          'Actualmente AA Property Services centra su actividad en Oropesa del Mar, prestando servicio principalmente a villas de Andryala y Barlovento, con previsión de expansión hacia nuevas promociones en el futuro.',

    'area.eyebrow':         'Área privada',
    'area.h2':              'Una gestión más cómoda para clientes y equipo interno',
    'area.c1.h3':           'Área cliente',
    'area.c1.p':            'Consulta de servicios, historial de revisiones, reportes, incidencias y seguimiento general de la propiedad.',
    'area.c2.h3':           'Área de personal',
    'area.c2.p':            'Seguimiento interno de tareas, coordinación operativa y control de actuaciones realizadas en cada villa.',

    'cta.index.h2':         'Bienvenido a tu casa, nos encargamos de todo',
    'cta.index.p':          'Cuidamos cada detalle para que tu propiedad esté siempre lista, supervisada y gestionada con la atención que merece.',
    'cta.index.btn':        'Solicitar información',

    'serv.hero.eyebrow':    'Nuestros servicios',
    'serv.hero.h1':         'Supervisión, mantenimiento y asistencia premium',
    'serv.hero.p':          'Ofrecemos soluciones adaptadas a villas y propiedades exclusivas, combinando prevención, atención personalizada y servicios bajo demanda.',
    'serv.planes.eyebrow':  'Planes de servicio',
    'serv.planes.h2':       'Elige el plan que más se adapte a tus necesidades',
    'serv.planes.p':        'Un servicio flexible que se adapta a ti, asegurando el cuidado de tu vivienda y una tranquilidad absoluta.',
    'serv.basico.h3':       'Pack básico',
    'serv.basico.btn':      'Solicitar información',
    'serv.plus.h3':         'Pack básico plus',
    'serv.plus.btn':        'Solicitar información',
    'serv.cta.h2':          'Un servicio adaptado a cada propiedad',
    'serv.cta.p':           'Cuéntanos qué tipo de vivienda tienes y qué nivel de cobertura necesitas. Te ayudaremos a encontrar la opción más adecuada.',
    'serv.cta.btn':         'Contactar ahora',

    'contact.hero.eyebrow': 'Contacto',
    'contact.hero.h1':      'Estamos aquí para ayudarte',
    'contact.hero.p':       'Si quieres conocer nuestros planes, consultar servicios o solicitar información personalizada para tu villa, estaremos encantados de atenderte.',
    'contact.form.btn':     'Enviar consulta',
    'contact.cta.h2':       'Descubre qué plan se adapta mejor a tu propiedad',
    'contact.cta.p':        'Cuéntanos qué tipo de villa tienes y qué necesitas. Te ayudaremos a encontrar una solución ajustada a tu vivienda y al nivel de servicio que buscas.',
    'contact.cta.btn':      'Ver servicios',

    'sobre.hero.eyebrow':   'Sobre nosotros',
    'sobre.hero.h1':        'Una empresa pensada para ofrecer tranquilidad',
    'sobre.hero.p':         'AA Property Services combina supervisión, mantenimiento, coordinación operativa y servicios premium en una experiencia clara, elegante y eficiente.',
    'sobre.cta.h2':         'Tu propiedad, en manos de un equipo que cuida cada detalle',
    'sobre.cta.p':          'Queremos que cada cliente encuentre en AA Property Services una solución estable, elegante y eficaz para el cuidado de su vivienda.',
    'sobre.cta.btn':        'Hablar con nosotros',
  },

  /* ========================
     ENGLISH
  ======================== */
  en: {
    'nav.inicio':           'Home',
    'nav.servicios':        'Services',
    'nav.sobre':            'About us',
    'nav.contacto':         'Contact',
    'nav.clientes':         'Client access',
    'nav.personal':         'Staff access',

    'footer.tagline':       'Exclusive services for a worry-free life.',
    'footer.ubicacion':     'Location',
    'footer.ciudad':        'Oropesa del Mar, Castellón',
    'footer.contacto':      'Contact',

    'hero.eyebrow':         'Comprehensive villa management in Oropesa del Mar',
    'hero.h1':              'Exclusive services for a worry-free life',
    'hero.lead':            'At AA Property Services we care for villas and properties with a comprehensive service of supervision, maintenance, personalised attention and premium assistance so that every owner can enjoy their home with complete peace of mind.',
    'hero.punto1':          'Continuous supervision',
    'hero.punto2':          'Preventive maintenance',
    'hero.punto3':          'Personalised attention',
    'hero.cta1':            'View services',
    'hero.cta2':            'Contact us',
    'hero.img.alt':         'Luxury villa interior in Oropesa del Mar',

    'propuesta.eyebrow':    'Our offer',
    'propuesta.h2':         'Much more than maintenance',
    'propuesta.desc':       'We offer a complete solution for villas and exclusive properties, combining periodic supervision, preventive maintenance, incident management and premium services in a professional and careful experience.',
    'propuesta.c1.h3':      'Supervision and maintenance',
    'propuesta.c1.p':       'We carry out regular inspections to check the general condition of the property, detect incidents in time and ensure proper maintenance.',
    'propuesta.c2.h3':      'Incident management',
    'propuesta.c2.p':       'We coordinate technical actions and follow up on minor incidents before they become major breakdowns.',
    'propuesta.c3.h3':      'Premium services',
    'propuesta.c3.p':       'We offer exclusive services such as private chef, catering, chauffeur, shopping, beauty or wellness on demand.',

    'elegirnos.eyebrow':    'Why choose us',
    'elegirnos.h2':         'Management designed for demanding owners',
    'elegirnos.f1':         'Personalised attention',
    'elegirnos.f2':         'Direct communication',
    'elegirnos.f3':         'Service tracking',
    'elegirnos.f4':         'Incident prevention',
    'elegirnos.f5':         'Continuous care',
    'elegirnos.f6':         'Premium experience',

    'como.eyebrow':         'How it works',
    'como.h2':              'A simple and efficient service',
    'como.s1.h3':           'Plan selection',
    'como.s1.p':            'The owner chooses the option that best suits their property and needs.',
    'como.s2.h3':           'Property supervision',
    'como.s2.p':            'Our team inspects the property and monitors its general condition.',
    'como.s3.h3':           'Action log',
    'como.s3.p':            'Inspections, maintenance and incidents are organised and tracked.',
    'como.s4.h3':           'Service requests',
    'como.s4.p':            'The client can request additional services and check the status of their villa.',

    'galeria.eyebrow':      'Properties we care for',
    'galeria.h2':           'Environments designed to enjoy, manage and preserve',
    'galeria.desc':         'We work in exclusive villas and residential environments where every detail matters. Our service is designed to keep each property in perfect condition and accompany a premium living experience.',
    'galeria.tag1':         'Main villa',
    'galeria.g1.h3':        'Architecture, privacy and continuous care',
    'galeria.tag2':         'Outdoor areas',
    'galeria.g2.h3':        'Spaces designed for rest and exclusivity',
    'galeria.tag3':         'Residential environment',
    'galeria.g3.h3':        'Premium developments in privileged locations',

    'cobertura.eyebrow':    'Coverage',
    'cobertura.h2':         'Where we work',
    'cobertura.p':          'AA Property Services currently focuses its activity in Oropesa del Mar, serving villas in Andryala and Barlovento, with plans to expand to new developments in the future.',

    'area.eyebrow':         'Private area',
    'area.h2':              'More convenient management for clients and internal team',
    'area.c1.h3':           'Client area',
    'area.c1.p':            'Check services, inspection history, reports, incidents and general property tracking.',
    'area.c2.h3':           'Staff area',
    'area.c2.p':            'Internal task tracking, operational coordination and control of actions carried out at each villa.',

    'cta.index.h2':         'Welcome Home, we take care of everything',
    'cta.index.p':          'We take care of every detail so your property is always ready, supervised and managed with the attention it deserves.',
    'cta.index.btn':        'Request information',

    'serv.hero.eyebrow':    'Our services',
    'serv.hero.h1':         'Supervision, maintenance and premium assistance',
    'serv.hero.p':          'We offer solutions tailored to exclusive villas and properties, combining prevention, personalised attention and on-demand services.',
    'serv.planes.eyebrow':  'Service plans',
    'serv.planes.h2':       'Choose the plan that best suits your needs',
    'serv.planes.p':        'A flexible service that adapts to you, ensuring the care of your home and complete peace of mind.',
    'serv.basico.h3':       'Basic pack',
    'serv.basico.btn':      'Request information',
    'serv.plus.h3':         'Basic plus pack',
    'serv.plus.btn':        'Request information',
    'serv.cta.h2':          'A service tailored to each property',
    'serv.cta.p':           'Tell us what type of property you have and what level of coverage you need. We will help you find the most suitable option.',
    'serv.cta.btn':         'Contact us now',

    'contact.hero.eyebrow': 'Contact',
    'contact.hero.h1':      'We are here to help you',
    'contact.hero.p':       'If you want to learn about our plans, enquire about services or request personalised information for your villa, we will be happy to assist you.',
    'contact.form.btn':     'Send enquiry',
    'contact.cta.h2':       'Find out which plan best suits your property',
    'contact.cta.p':        'Tell us what type of villa you have and what you need. We will help you find a solution tailored to your property and the level of service you are looking for.',
    'contact.cta.btn':      'View services',

    'sobre.hero.eyebrow':   'About us',
    'sobre.hero.h1':        'A company designed to offer peace of mind',
    'sobre.hero.p':         'AA Property Services combines supervision, maintenance, operational coordination and premium services in a clear, elegant and efficient experience.',
    'sobre.cta.h2':         'Your property, in the hands of a team that cares about every detail',
    'sobre.cta.p':          'We want every client to find in AA Property Services a stable, elegant and effective solution for the care of their property.',
    'sobre.cta.btn':        'Talk to us',
  },

  /* ========================
     FRANÇAIS
     Nota: todos los valores usan comillas dobles "..."
     para evitar conflicto con los apóstrofes del francés
  ======================== */
  fr: {
    'nav.inicio':           "Accueil",
    'nav.servicios':        "Services",
    'nav.sobre':            "À propos",
    'nav.contacto':         "Contact",
    'nav.clientes':         "Accès clients",
    'nav.personal':         "Accès personnel",

    'footer.tagline':       "Services exclusifs pour une vie sans soucis.",
    'footer.ubicacion':     "Emplacement",
    'footer.ciudad':        "Oropesa del Mar, Castellón",
    'footer.contacto':      "Contact",

    'hero.eyebrow':         "Gestion intégrale de villas à Oropesa del Mar",
    'hero.h1':              "Services exclusifs pour une vie sans soucis",
    'hero.lead':            "Chez AA Property Services, nous prenons soin des villas et des propriétés avec un service complet de supervision, de maintenance, d'attention personnalisée et d'assistance premium pour que chaque propriétaire profite de son logement en toute tranquillité.",
    'hero.punto1':          "Supervision continue",
    'hero.punto2':          "Maintenance préventive",
    'hero.punto3':          "Attention personnalisée",
    'hero.cta1':            "Voir les services",
    'hero.cta2':            "Nous contacter",
    'hero.img.alt':         "Intérieur de villa de luxe à Oropesa del Mar",

    'propuesta.eyebrow':    "Notre offre",
    'propuesta.h2':         "Bien plus que de la maintenance",
    'propuesta.desc':       "Nous proposons une solution complète pour les villas et propriétés exclusives, combinant supervision périodique, maintenance préventive, gestion des incidents et services premium dans une expérience professionnelle et soignée.",
    'propuesta.c1.h3':      "Supervision et maintenance",
    'propuesta.c1.p':       "Nous effectuons des inspections régulières pour vérifier l'état général du bien, détecter les incidents à temps et assurer un entretien correct.",
    'propuesta.c2.h3':      "Gestion des incidents",
    'propuesta.c2.p':       "Nous coordonnons les interventions techniques et assurons le suivi des petits incidents avant qu'ils ne deviennent des pannes importantes.",
    'propuesta.c3.h3':      "Services premium",
    'propuesta.c3.p':       "Nous mettons à disposition du client des services exclusifs tels que chef privé, traiteur, chauffeur, courses, beauté ou bien-être à la demande.",

    'elegirnos.eyebrow':    "Pourquoi nous choisir",
    'elegirnos.h2':         "Une gestion pensée pour les propriétaires exigeants",
    'elegirnos.f1':         "Attention personnalisée",
    'elegirnos.f2':         "Communication directe",
    'elegirnos.f3':         "Suivi des services",
    'elegirnos.f4':         "Prévention des incidents",
    'elegirnos.f5':         "Soin continu",
    'elegirnos.f6':         "Expérience premium",

    'como.eyebrow':         "Comment ça marche",
    'como.h2':              "Un service simple et efficace",
    'como.s1.h3':           "Choix du plan",
    'como.s1.p':            "Le propriétaire choisit l'option qui correspond le mieux à son bien et à ses besoins.",
    'como.s2.h3':           "Supervision de la propriété",
    'como.s2.p':            "Notre équipe inspecte le bien et assure le suivi de son état général.",
    'como.s3.h3':           "Journal des interventions",
    'como.s3.p':            "Les inspections, maintenances et incidents sont organisés et contrôlés.",
    'como.s4.h3':           "Demande de services",
    'como.s4.p':            "Le client peut demander des services supplémentaires et consulter le suivi de sa villa.",

    'galeria.eyebrow':      "Propriétés dont nous prenons soin",
    'galeria.h2':           "Des environnements conçus pour profiter, gérer et conserver",
    'galeria.desc':         "Nous travaillons dans des villas et des environnements résidentiels exclusifs où chaque détail compte. Notre service est conçu pour maintenir chaque propriété en parfait état et accompagner une expérience de vie premium.",
    'galeria.tag1':         "Villa principale",
    'galeria.g1.h3':        "Architecture, intimité et soin continu",
    'galeria.tag2':         "Espaces extérieurs",
    'galeria.g2.h3':        "Des espaces pensés pour le repos et l'exclusivité",
    'galeria.tag3':         "Environnement résidentiel",
    'galeria.g3.h3':        "Résidences premium dans des emplacements privilégiés",

    'cobertura.eyebrow':    "Couverture",
    'cobertura.h2':         "Où nous travaillons",
    'cobertura.p':          "AA Property Services concentre actuellement son activité à Oropesa del Mar, au service principalement des villas d'Andryala et Barlovento, avec une expansion prévue vers de nouvelles résidences à l'avenir.",

    'area.eyebrow':         "Espace privé",
    'area.h2':              "Une gestion plus pratique pour les clients et l'équipe interne",
    'area.c1.h3':           "Espace client",
    'area.c1.p':            "Consultation des services, historique des inspections, rapports, incidents et suivi général de la propriété.",
    'area.c2.h3':           "Espace personnel",
    'area.c2.p':            "Suivi interne des tâches, coordination opérationnelle et contrôle des interventions réalisées dans chaque villa.",

    'cta.index.h2':         "Bienvenue chez vous, nous nous occupons de tout",
    'cta.index.p':          "Nous prenons soin de chaque détail pour que votre propriété soit toujours prête, supervisée et gérée avec l'attention qu'elle mérite.",
    'cta.index.btn':        "Demander des informations",

    'serv.hero.eyebrow':    "Nos services",
    'serv.hero.h1':         "Supervision, maintenance et assistance premium",
    'serv.hero.p':          "Nous proposons des solutions adaptées aux villas et propriétés exclusives, combinant prévention, attention personnalisée et services à la demande.",
    'serv.planes.eyebrow':  "Plans de service",
    'serv.planes.h2':       "Choisissez le plan qui correspond le mieux à vos besoins",
    'serv.planes.p':        "Un service flexible qui s'adapte à vous, garantissant le soin de votre logement et une tranquillité absolue.",
    'serv.basico.h3':       "Pack basique",
    'serv.basico.btn':      "Demander des informations",
    'serv.plus.h3':         "Pack basique plus",
    'serv.plus.btn':        "Demander des informations",
    'serv.cta.h2':          "Un service adapté à chaque propriété",
    'serv.cta.p':           "Dites-nous quel type de bien vous avez et quel niveau de couverture vous souhaitez. Nous vous aiderons à trouver l'option la plus adaptée.",
    'serv.cta.btn':         "Nous contacter maintenant",

    'contact.hero.eyebrow': "Contact",
    'contact.hero.h1':      "Nous sommes là pour vous aider",
    'contact.hero.p':       "Si vous souhaitez connaître nos plans, vous renseigner sur nos services ou demander des informations personnalisées pour votre villa, nous serons ravis de vous aider.",
    'contact.form.btn':     "Envoyer la demande",
    'contact.cta.h2':       "Découvrez quel plan convient le mieux à votre propriété",
    'contact.cta.p':        "Dites-nous quel type de villa vous avez et ce dont vous avez besoin. Nous vous aiderons à trouver une solution adaptée à votre bien et au niveau de service que vous recherchez.",
    'contact.cta.btn':      "Voir les services",

    'sobre.hero.eyebrow':   "À propos de nous",
    'sobre.hero.h1':        "Une entreprise pensée pour offrir la tranquillité",
    'sobre.hero.p':         "AA Property Services combine supervision, maintenance, coordination opérationnelle et services premium dans une expérience claire, élégante et efficace.",
    'sobre.cta.h2':         "Votre propriété, entre les mains d'une équipe qui soigne chaque détail",
    'sobre.cta.p':          "Nous voulons que chaque client trouve en AA Property Services une solution stable, élégante et efficace pour le soin de son bien.",
    'sobre.cta.btn':        "Nous parler",
  },

  /* ========================
     DEUTSCH
  ======================== */
  de: {
    'nav.inicio':           'Startseite',
    'nav.servicios':        'Leistungen',
    'nav.sobre':            'Über uns',
    'nav.contacto':         'Kontakt',
    'nav.clientes':         'Kundenzugang',
    'nav.personal':         'Mitarbeiterzugang',

    'footer.tagline':       'Exklusive Dienstleistungen für ein sorgenfreies Leben.',
    'footer.ubicacion':     'Standort',
    'footer.ciudad':        'Oropesa del Mar, Castellón',
    'footer.contacto':      'Kontakt',

    'hero.eyebrow':         'Umfassendes Villenmanagement in Oropesa del Mar',
    'hero.h1':              'Exklusive Dienstleistungen für ein sorgenfreies Leben',
    'hero.lead':            'Bei AA Property Services betreuen wir Villen und Immobilien mit einem umfassenden Service aus Überwachung, Instandhaltung, persönlicher Betreuung und Premium-Assistenz, damit jeder Eigentümer sein Zuhause in völliger Ruhe genießen kann.',
    'hero.punto1':          'Kontinuierliche Überwachung',
    'hero.punto2':          'Vorbeugende Wartung',
    'hero.punto3':          'Persönliche Betreuung',
    'hero.cta1':            'Leistungen ansehen',
    'hero.cta2':            'Kontakt aufnehmen',
    'hero.img.alt':         'Luxusvilla Innenraum in Oropesa del Mar',

    'propuesta.eyebrow':    'Unser Angebot',
    'propuesta.h2':         'Weit mehr als Instandhaltung',
    'propuesta.desc':       'Wir bieten eine vollständige Lösung für Villen und exklusive Immobilien, die regelmäßige Überwachung, vorbeugende Wartung, Störungsmanagement und Premium-Services kombiniert.',
    'propuesta.c1.h3':      'Überwachung und Wartung',
    'propuesta.c1.p':       'Wir führen regelmäßige Inspektionen durch, um den Allgemeinzustand der Immobilie zu prüfen, Vorfälle rechtzeitig zu erkennen und eine ordnungsgemäße Instandhaltung zu gewährleisten.',
    'propuesta.c2.h3':      'Störungsmanagement',
    'propuesta.c2.p':       'Wir koordinieren technische Maßnahmen und begleiten kleinere Störungen, bevor sie zu größeren Schäden werden.',
    'propuesta.c3.h3':      'Premium-Services',
    'propuesta.c3.p':       'Wir stellen dem Kunden exklusive Dienstleistungen wie Privatkoch, Catering, Fahrer, Einkäufe, Beauty oder Wellness auf Anfrage zur Verfügung.',

    'elegirnos.eyebrow':    'Warum wir',
    'elegirnos.h2':         'Verwaltung für anspruchsvolle Eigentümer',
    'elegirnos.f1':         'Persönliche Betreuung',
    'elegirnos.f2':         'Direkte Kommunikation',
    'elegirnos.f3':         'Serviceverfolgung',
    'elegirnos.f4':         'Störungsprävention',
    'elegirnos.f5':         'Kontinuierliche Pflege',
    'elegirnos.f6':         'Premium-Erfahrung',

    'como.eyebrow':         'So funktioniert es',
    'como.h2':              'Ein einfacher und effizienter Service',
    'como.s1.h3':           'Planauswahl',
    'como.s1.p':            'Der Eigentümer wählt die Option, die am besten zu seiner Immobilie und seinen Bedürfnissen passt.',
    'como.s2.h3':           'Immobilienüberwachung',
    'como.s2.p':            'Unser Team inspiziert die Immobilie und verfolgt ihren Allgemeinzustand.',
    'como.s3.h3':           'Maßnahmenprotokoll',
    'como.s3.p':            'Inspektionen, Wartungen und Störungen werden organisiert und kontrolliert.',
    'como.s4.h3':           'Serviceanfragen',
    'como.s4.p':            'Der Kunde kann zusätzliche Dienstleistungen anfordern und den Status seiner Villa einsehen.',

    'galeria.eyebrow':      'Immobilien, die wir betreuen',
    'galeria.h2':           'Umgebungen zum Genießen, Verwalten und Erhalten',
    'galeria.desc':         'Wir arbeiten in exklusiven Villen und Wohnanlagen, wo jedes Detail zählt. Unser Service ist darauf ausgelegt, jede Immobilie in einwandfreiem Zustand zu halten.',
    'galeria.tag1':         'Hauptvilla',
    'galeria.g1.h3':        'Architektur, Privatsphäre und kontinuierliche Pflege',
    'galeria.tag2':         'Außenbereiche',
    'galeria.g2.h3':        'Räume für Erholung und Exklusivität',
    'galeria.tag3':         'Wohnumgebung',
    'galeria.g3.h3':        'Premium-Anlagen in privilegierten Lagen',

    'cobertura.eyebrow':    'Abdeckung',
    'cobertura.h2':         'Wo wir tätig sind',
    'cobertura.p':          'AA Property Services konzentriert seine Tätigkeit derzeit auf Oropesa del Mar und betreut hauptsächlich Villen in Andryala und Barlovento, mit geplanter Erweiterung auf neue Anlagen.',

    'area.eyebrow':         'Privatbereich',
    'area.h2':              'Bequemere Verwaltung für Kunden und internes Team',
    'area.c1.h3':           'Kundenbereich',
    'area.c1.p':            'Einsicht in Services, Inspektionsverlauf, Berichte, Störungen und allgemeine Immobilienverfolgung.',
    'area.c2.h3':           'Mitarbeiterbereich',
    'area.c2.p':            'Interne Aufgabenverfolgung, operative Koordination und Kontrolle der in jeder Villa durchgeführten Maßnahmen.',

    'cta.index.h2':         'Willkommen in Ihrem Zuhause, wir kümmern uns um alles',
    'cta.index.p':          'Wir kümmern uns um jedes Detail, damit Ihre Immobilie stets bereit, überwacht und mit der gebührenden Aufmerksamkeit verwaltet wird.',
    'cta.index.btn':        'Informationen anfordern',

    'serv.hero.eyebrow':    'Unsere Leistungen',
    'serv.hero.h1':         'Überwachung, Wartung und Premium-Assistenz',
    'serv.hero.p':          'Wir bieten maßgeschneiderte Lösungen für exklusive Villen und Immobilien, die Prävention, persönliche Betreuung und bedarfsgerechte Services kombinieren.',
    'serv.planes.eyebrow':  'Servicepläne',
    'serv.planes.h2':       'Wählen Sie den Plan, der Ihren Bedürfnissen am besten entspricht',
    'serv.planes.p':        'Ein flexibler Service, der sich an Sie anpasst und die Pflege Ihres Hauses sowie absolute Ruhe gewährleistet.',
    'serv.basico.h3':       'Basispaket',
    'serv.basico.btn':      'Informationen anfordern',
    'serv.plus.h3':         'Basispaket plus',
    'serv.plus.btn':        'Informationen anfordern',
    'serv.cta.h2':          'Ein auf jede Immobilie zugeschnittener Service',
    'serv.cta.p':           'Sagen Sie uns, welche Art von Immobilie Sie haben und welches Abdeckungsniveau Sie benötigen. Wir helfen Ihnen, die passende Option zu finden.',
    'serv.cta.btn':         'Jetzt Kontakt aufnehmen',

    'contact.hero.eyebrow': 'Kontakt',
    'contact.hero.h1':      'Wir sind für Sie da',
    'contact.hero.p':       'Wenn Sie unsere Pläne kennenlernen, Dienstleistungen anfragen oder personalisierte Informationen für Ihre Villa erhalten möchten, helfen wir Ihnen gerne weiter.',
    'contact.form.btn':     'Anfrage senden',
    'contact.cta.h2':       'Finden Sie heraus, welcher Plan am besten zu Ihrer Immobilie passt',
    'contact.cta.p':        'Sagen Sie uns, welche Art von Villa Sie haben und was Sie brauchen. Wir helfen Ihnen, die passende Lösung zu finden.',
    'contact.cta.btn':      'Leistungen ansehen',

    'sobre.hero.eyebrow':   'Über uns',
    'sobre.hero.h1':        'Ein Unternehmen für Ihre Ruhe',
    'sobre.hero.p':         'AA Property Services kombiniert Überwachung, Wartung, operative Koordination und Premium-Services in einer klaren, eleganten und effizienten Erfahrung.',
    'sobre.cta.h2':         'Ihre Immobilie in den Händen eines Teams, das auf jedes Detail achtet',
    'sobre.cta.p':          'Wir möchten, dass jeder Kunde in AA Property Services eine stabile, elegante und effektive Lösung für die Pflege seiner Immobilie findet.',
    'sobre.cta.btn':        'Mit uns sprechen',
  },
};

/* ============================================
   MOTOR DE TRADUCCIÓN
============================================ */

const LANG_KEY = 'aaps_lang';
const DEFAULT_LANG = 'es';
const SUPPORTED = ['es', 'en', 'fr', 'de'];

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  return SUPPORTED.includes(saved) ? saved : DEFAULT_LANG;
}

function applyLang(lang) {
  if (!SUPPORTED.includes(lang)) return;

  const t = translations[lang];

  // Traducir texto
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Traducir atributos alt
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (t[key] !== undefined) {
      el.setAttribute('alt', t[key]);
    }
  });

  // Actualizar lang del documento
  document.documentElement.setAttribute('lang', lang);

  // Guardar preferencia
  localStorage.setItem(LANG_KEY, lang);

  // Marcar botón activo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function setLang(lang) {
  applyLang(lang);
}

// Aplicar al cargar
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
});