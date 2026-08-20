# Panadería Salva - Web & Catálogo Online

## 1. Objetivo del Proyecto
Sitio web interactivo y catálogo digital para "Panadería Salva". Permite a los clientes explorar productos, alternar entre precios minoristas y mayoristas, armar un carrito de compras y enviar el pedido formateado por WhatsApp.

## 2. Stack Tecnológico
- React 18+ con Vite
- Tailwind CSS para diseño y estilos
- Lucide React para iconografía
- LocalStorage para persistencia de carrito

## 3. Identidad Visual
- Inspiración: Estilo panadería artesanal premium (referencia visual: Boulan).
- Paleta: Tonos trigo/crema (#FAF7F2), marrones/tostados, acentos oscuros y tipografía limpia y elegante.
- Mobile First: La mayoría de los usuarios entrarán desde el celular para pedir por WhatsApp.

## 4. Estructura de Datos (products.json)
Cada producto debe tener:
- id: string
- name: string
- description: string
- category: 'panaderia' | 'facturas' | 'pasteleria' |
- retailPrice: number
- wholesalePrice: number
- image: string (URL de imagen o placeholder)

## 5. Módulos y Componentes
1. Navbar: Logo "Salva", links a Historia, Catálogo, Ubicación, y botón del Carrito con badge de cantidad.
2. Hero & About: Presentación del local y su elaboración artesanal.
3. Catalog:
   - Toggle switch "Minorista / Mayorista".
   - Filtro de categorías.
   - Grilla de tarjetas de producto con botón "Agregar".
4. CartDrawer:
   - Lista de items con controles (+ / - / eliminar).
   - Cálculo de total.
   - Formulario de datos básicos (Nombre, Tipo de entrega, Notas).
   - Botón de envío a WhatsApp (wa.me) con mensaje preformateado.
5. Location & Footer: Horarios y links a redes.