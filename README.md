# 🥖 Panadería Salva — Web & Catálogo Online

> **Masa Madre Viva, Fermentación Natural & Pastelería de Alta Calidad.**  
> Sitio web interactivo y catálogo digital para *Panadería Salva* (Buenos Aires - Zona Sur). Diseñado para conectar con clientes minoristas y locales gastronómicos, permitiendo armar pedidos personalizados y enviarlos directamente por WhatsApp con formato profesional.

---

## ✨ Características Principales

### 🥐 1. Catálogo Dinámico con Doble Modalidad (Minorista / Mayorista)
- **Toggle en Tiempo Real:** Alterna instantáneamente entre precios de venta para el hogar y tarifas preferenciales para cafeterías, restaurantes y reventa.
- **Lógica de Lotes Mínimos (MOQ):** Para el canal mayorista, cada producto incluye cantidades mínimas requeridas (ej. mínimo 3 panes de masa madre, 2 docenas de medialunas), facilitando la venta por volumen.
- **Filtrado por Categorías:** Navegación fluida entre *Todos*, *Panadería*, *Facturas*, *Pastelería* y *Salados & Especiales*.

### 🛒 2. Carrito de Compras Inteligente (`CartDrawer`)
- **Diseño Mobile-First:** Drawer lateral deslizable con animaciones suaves y soporte para gestos táctiles.
- **Líneas de Pedido Independientes:** Permite combinar productos en tarifa minorista y mayorista en el mismo pedido sin cruce de precios.
- **Persistencia Local (`LocalStorage`):** Los productos seleccionados y los datos del cliente se guardan automáticamente entre recargas.

### 📲 3. Checkout Optimizado por WhatsApp
- **Formulario Integrado:** Recolecta nombre del cliente, tipo de entrega (*Retiro por el local* o *Envío a domicilio*), dirección y notas especiales.
- **Generador de Mensajes:** Construye un mensaje codificado con emojis, detalle ítem por ítem, tarifa aplicada, subtotales y total final a pagar listo para enviar a WhatsApp con un solo clic.

### 🏛️ 4. Identidad Visual & Narrativa Editorial
- **Estética Artesanal Premium:** Inspirada en panaderías europeas tradicionales, con tipografías serif elegantes (*Playfair Display*) y paleta de tonos cálidos (trigo, arena, corteza tostada).
- **Sección Nuestra Historia:** Narrativa sobre la fermentación lenta de 24 horas y materias primas agroecológicas.
- **Privacidad Respetada:** Información clara de cobertura para Zona Sur y política de taller a puertas cerradas.

---

## 🛠️ Stack Tecnológico

- **Frontend:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Tokens de color `@theme` personalizados)
- **Iconografía:** [Lucide React](https://lucide.dev/) + SVGs vectoriales optimizados
- **Tipografías:** Google Fonts (*Playfair Display* & *Plus Jakarta Sans*)
- **Calidad de Código:** ESLint 10 con reglas de React Refresh y React Hooks

---

## 📁 Estructura del Proyecto

```text
panaderia-salva/
├── public/
│   ├── salva-icono.ico             # Favicon oficial
│   └── images/
│       ├── salva-logo.webp         # Logotipo oficial
│       └── products/               # Fotografías de productos
│           ├── pan-masa-madre.webp
│           ├── pan-harina-integral.webp
│           ├── baguel.webp
│           └── medialunas.webp
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navegación con badge reactivo y menú mobile
│   │   ├── Hero.jsx                # Presentación de marca y llamados a la acción
│   │   ├── Catalog.jsx             # Grilla de productos, switch y filtros
│   │   ├── ProductCard.jsx         # Tarjeta de producto con precios dinámicos
│   │   ├── CartDrawer.jsx          # Drawer de compras y formulario de checkout
│   │   ├── About.jsx               # Sección editorial "Nuestra Historia"
│   │   ├── InfoSection.jsx         # Horarios, retiros y cobertura en Zona Sur
│   │   ├── Footer.jsx              # Pie de página y enlaces sociales
│   │   └── Toast.jsx               # Notificaciones flotantes al agregar ítems
│   ├── config/
│   │   └── constants.js            # Número de WhatsApp y datos configurables
│   ├── data/
│   │   └── products.json           # Catálogo con precios, fotos y lotes mínimos
│   ├── utils/
│   │   ├── formatters.js           # Formateador de moneda en pesos argentinos (ARS)
│   │   └── whatsapp.js             # Generador del mensaje formateado de WhatsApp
│   ├── App.jsx                     # Componente principal y gestión de estado
│   └── index.css                   # Configuración de Tailwind v4 y fuentes
└── package.json
```

---

## 🚀 Puesta en Marcha

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- `npm`

### 1. Clonar o descargar el repositorio
```bash
git clone https://github.com/tu-usuario/panaderia-salva.git
cd panaderia-salva
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación en vivo.

### 4. Compilar para producción
```bash
npm run build
```

### 5. Validar con ESLint
```bash
npm run lint
```

---

## ⚙️ Configuración Personalizada

### Cambiar el número de WhatsApp para recibir pedidos:
Edita el archivo [`src/config/constants.js`](src/config/constants.js):

```javascript
// Formato internacional sin signos ni espacios (Código de país + Código de área + Número)
export const WHATSAPP_PHONE_NUMBER = '5491100000000'
```

### Agregar o modificar productos:
Edita el archivo [`src/data/products.json`](src/data/products.json) agregando nuevos objetos con sus precios minoristas y mayoristas:

```json
{
  "id": "nuevo-producto",
  "name": "Nombre del Producto",
  "description": "Descripción artesanal...",
  "category": "panaderia",
  "retailPrice": 4500,
  "wholesalePrice": 3200,
  "wholesaleMinQuantity": 3,
  "image": "/images/products/mi-foto.webp",
  "badge": "Especialidad",
  "unit": "Unidad (800g)"
}
```

---

## 📄 Licencia

Este proyecto fue desarrollado con dedicación para **Panadería Salva**. Todos los derechos reservados.
