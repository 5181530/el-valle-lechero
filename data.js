// ========== DATA ==========
// Productos
const products = [
  {
    id: 1,
    category: 'lacteos',
    name: 'Leche Entera',
    description: 'Leche fresca pasteurizada, rica en calcio y vitaminas.',
    price: '28',
    unit: 'litro',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    category: 'lacteos',
    name: 'Leche Descremada',
    description: 'Leche baja en grasa, ideal para dietas saludables.',
    price: '30',
    unit: 'litro',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    category: 'quesos',
    name: 'Queso Fresco',
    description: 'Queso blanco suave, perfecto para ensaladas y tacos.',
    price: '45',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    category: 'quesos',
    name: 'Queso Oaxaca',
    description: 'Queso hilado tradicional, derretible y delicioso.',
    price: '55',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    category: 'quesos',
    name: 'Queso Panela',
    description: 'Queso semi-duro, ideal para asar o freír.',
    price: '50',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    category: 'carne',
    name: 'Carne de Res Angus',
    description: 'Carne premium con marmoleo superior, tierna y sabrosa.',
    price: '180',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7,
    category: 'carne',
    name: 'Carne de Cerdo',
    description: 'Carne fresca de cerdos criados en libertad.',
    price: '120',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8,
    category: 'lacteos',
    name: 'Crema',
    description: 'Crema fresca batida, perfecta para postres.',
    price: '35',
    unit: 'litro',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80'
  }
];

// Galería
const gallery = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80',
    alt: 'Vacas pastoreando al amanecer',
    caption: 'Nuestras Holstein disfrutan del pasto fresco cada mañana.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80',
    alt: 'Ganado en el potrero',
    caption: '420 hectáreas de pastizales naturales para nuestro ganado.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517363898874-737b62a7db91?auto=format&fit=crop&w=600&q=80',
    alt: 'Sala de ordeño moderna',
    caption: 'Tecnología de vanguardia para el bienestar animal.'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1446126102442-f6b2b73257fd?auto=format&fit=crop&w=600&q=80',
    alt: 'Establos ventilados',
    caption: 'Instalaciones diseñadas para mantener 22°C todo el año.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    alt: 'Potreros rotacionales',
    caption: 'Pastoreo intensivo Voisin sobre praderas de rye-grass.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80',
    alt: 'Planta de procesamiento',
    caption: 'Pasteurización HTST y envasado con trazabilidad.'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=600&q=80',
    alt: 'Vacas Jersey',
    caption: 'Nuestras Jersey producen leche con alto contenido de grasa.'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&w=600&q=80',
    alt: 'Ganado Angus',
    caption: 'Carne premium con marmoleo superior.'
  }
];

// Noticias
const news = [
  {
    id: 1,
    title: 'Certificación Nacional de Bienestar Animal',
    date: '2024-03-15',
    excerpt: 'Hemos obtenido la certificación nacional por nuestras prácticas de bienestar animal. Sin hacinamiento, con veterinario de planta.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'Nueva Planta de Biodigestores',
    date: '2024-02-28',
    excerpt: 'Instalamos biodigestores que procesan 100% del estiércol, generando energía limpia y fertilizantes orgánicos.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Participación en Expo Agroalimentaria Guadalajara',
    date: '2024-01-20',
    excerpt: 'Presentamos nuestros productos lácteos en la expo más importante del occidente. ¡Gracias a todos los visitantes!',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80'
  }
];