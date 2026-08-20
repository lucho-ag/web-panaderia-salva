import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import About from './components/About'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'
import productsData from './data/products.json'
import './App.css'
import { Analytics } from '@vercel/analytics/react';

function App() {
  // Price mode state: 'retail' (Minorista) or 'wholesale' (Mayorista)
  const [priceMode, setPriceMode] = useState('retail')

  // Cart state: { [cartKey]: { key, product, quantity, priceMode } }
  // cartKey format: `${productId}_${priceMode}`
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('salva_cart')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  // Cart drawer visibility state
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Floating toast notification state
  const [toast, setToast] = useState(null)

  // Save cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('salva_cart', JSON.stringify(cart))
    } catch (e) {
      console.error('Error saving cart to localStorage', e)
    }
  }, [cart])

  // Add to cart handler with MOQ support and composite key
  const handleAddToCart = (product, currentMode) => {
    const cartKey = `${product.id}_${currentMode}`
    const isWholesale = currentMode === 'wholesale'
    const minQty = isWholesale ? (product.wholesaleMinQuantity || 1) : 1

    setCart((prevCart) => {
      const existing = prevCart[cartKey]
      const newQuantity = existing ? existing.quantity + 1 : minQty
      return {
        ...prevCart,
        [cartKey]: {
          key: cartKey,
          product,
          quantity: newQuantity,
          priceMode: currentMode,
        },
      }
    })

    // Show toast notification
    setToast({
      name: `${product.name} (${isWholesale ? `Mayorista - Lote ${minQty}u` : 'Minorista'})`,
      id: Date.now(),
    })
  }

  // Update item quantity in cart with MOQ constraints
  const handleUpdateQuantity = (cartKey, newQuantity) => {
    setCart((prevCart) => {
      const item = prevCart[cartKey]
      if (!item) return prevCart

      const minQty = item.priceMode === 'wholesale' ? (item.product.wholesaleMinQuantity || 1) : 1

      // If quantity is reduced below minimum, remove the item
      if (newQuantity < minQty || newQuantity <= 0) {
        const newCart = { ...prevCart }
        delete newCart[cartKey]
        return newCart
      }

      return {
        ...prevCart,
        [cartKey]: {
          ...item,
          quantity: newQuantity,
        },
      }
    })
  }

  // Remove specific line item from cart
  const handleRemoveItem = (cartKey) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }
      delete newCart[cartKey]
      return newCart
    })
  }

  // Clear entire cart
  const handleClearCart = () => {
    setCart({})
  }

  // Total quantity count for Navbar badge
  const totalCartCount = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  // CTA trigger to switch to wholesale and scroll to catalog
  const handleSelectWholesale = () => {
    setPriceMode('wholesale')
    const catalogElement = document.getElementById('catalogo')
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Auto-dismiss toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C1E18]">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onSelectWholesale={handleSelectWholesale} />
        
        <Catalog
          products={productsData}
          priceMode={priceMode}
          setPriceMode={setPriceMode}
          onAddToCart={handleAddToCart}
          cartItems={cart}
        />

        <About />

        <InfoSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer with Order Form & WhatsApp Checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => {
          setToast(null)
          setIsCartOpen(true)
        }}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  )

}


export default App
