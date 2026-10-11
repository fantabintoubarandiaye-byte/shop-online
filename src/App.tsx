import { useState } from 'react'
import './App.css'

const WHATSAPP_NUMBER = '+221777082108'

const categories = ['Tout voir', 'Abayas', 'Ensembles', 'Hijabs', 'Accessoires', 'Chaussures', 'Sacs']

const products = [
  {
    name: 'Abaya Dubai haute gamme',
    category: 'Abayas',
    price: '40.000 cfa',
    note: 'Crêpe fluide · Noir-beige',
    label: 'La préférée',
    image: '/Abaya%20Duba%C3%AF%20lux%20haut%20de%20gamme.jpg',
    fallback:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Ensemble pantalon',
    category: 'Ensembles',
    price: '45.000 cfa',
    note: 'Deux pièces · Bleu',
    label: 'Nouveau',
    image: '/Ensemble%20pantalon.jpg',
    fallback:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    position: 'center 25%',
  },
  {
    name: 'Hijab foulard',
    category: 'Hijabs',
    price: '3.000 cfa',
    note: 'hijab bouquet just  for you ',
    label: '',
    image: '/Hijab%20foulard.jpg',
    fallback:
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Ensemble Amal',
    category: 'Ensembles',
    price: '30.000 cfa',
    note: 'Tunique & pantalon · Orange doux',
    label: 'Édition limitée',
    image: '/Ensemble%20Amal.jpg',
    fallback:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=85',
    position: 'center 35%',
  },
  {
    name: 'Hijab Satin Doux',
    category: 'Hijabs',
    price: '35.000 cfa',
    note: 'Satin mat · neutre doux',
    label: '',
    image: '/Hijab%20satin%20doux.jpg',
    fallback:
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Sac à main Élégance',
    category: 'Sacs',
    price: '25.000 cfa',
    note: 'Finition élégante · Rouge',
    label: '',
    image: '/Sac%20a%20main%20elegance.jpg',
    fallback:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Nu-pieds Élégance',
    category: 'Chaussures',
    price: '15.000 cfa',
    note: 'Nu-pieds ouvert · Bordeaux et ivoire',
    label: '',
    image: '/Chaussures%20Confort.jpg',
    fallback:
      'https://images.unsplash.com/photo-1618354690429-2a1c3e5b6f4d?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Broche Fleur',
    category: 'Accessoires',
    price: '5.000 cfa',
    note: 'Accessoire de hijab · Doré',
    label: '',
    image: '/Broche%20Fleur.jpg',
    fallback:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Abaya Safiya',
    category: 'Abayas',
    price: '38.000 cfa',
    note: 'Broderies florales · Noir et vert',
    label: '',
    image: '/abayaa.jpg',
    fallback:
      'https://images.unsplash.com/photo-1583391733958-6c78276477e5?auto=format&fit=crop&w=900&q=85',
    position: 'center 25%',
  },
  {
    name: 'Abaya Élégance',
    category: 'Abayas',
    price: '42.000 cfa',
    note: 'Broderies élégantes · Bleu',
    label: '',
    image: '/abaya2.jpg',
    fallback:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Abaya cérémonie',
    category: 'Abayas',
    price: '50.000 cfa',
    note: 'Coupe habillée · Rose',
    label: 'Occasion spéciale',
    image: '/abaya3.jpg',
    fallback:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Ensemble Aïcha',
    category: 'Ensembles',
    price: '39.000 cfa',
    note: 'Tenue ample · Beige clair',
    label: '',
    image: '/ensemble1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    position: 'center 25%',
  },
  {
    name: 'Ensemble Malika',
    category: 'Ensembles',
    price: '42.000 cfa',
    note: 'Tenue habillée · Rose poudré',
    label: '',
    image: '/ensemble2.jpg',
    fallback:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=85',
    position: 'center 35%',
  },
  {
    name: 'Ensemble Yasmine',
    category: 'Ensembles',
    price: '48.000 cfa',
    note: 'Ensemble deux pièces · Jaune clair',
    label: '',
    image: '/ensemble.jpg',
    fallback:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    position: 'center 25%',
  },
  {
    name: 'Hijab imprimé Élégance',
    category: 'Hijabs',
    price: '2.500 cfa',
    note: 'Motifs orientaux · Plusieurs couleurs',
    label: '',
    image: '/hijab1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Hijab couleurs variées',
    category: 'Hijabs',
    price: '4.000 cfa',
    note: 'Foulards unis · Plusieurs couleurs',
    label: '',
    image: '/hijab2.jpg',
    fallback:
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Hijabs imprimés',
    category: 'Hijabs',
    price: '3.500 cfa',
    note: 'Foulards imprimés · Plusieurs couleurs',
    label: '',
    image: '/hijab.jpg',
    fallback:
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Broche Perle',
    category: 'Accessoires',
    price: '4.000 cfa',
    note: 'Broche élégante · Perles',
    label: '',
    image: '/Broche%20Fleur.jpg',
    fallback:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Lunettes de soleil Élégance',
    category: 'Accessoires',
    price: '8.000 cfa',
    note: 'Monture chic · Plusieurs couleurs',
    label: '',
    image: '/accessoire1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Chouchous colorés',
    category: 'Accessoires',
    price: '2.500 cfa',
    note: 'Assortiment de couleurs',
    label: '',
    image: '/accessoire.jpg',
    fallback:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Épingles discrètes',
    category: 'Accessoires',
    price: '1.500 cfa',
    note: 'Lot de six · Argenté',
    label: '',
    image: '/accessoire3.jpg',
    fallback:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Montres Élégance',
    category: 'Accessoires',
    price: 'À confirmer',
    note: 'Montres bracelet · Plusieurs modèles',
    label: 'Nouveau',
    image: '/accessoiree.jpg',
    fallback:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Nu-pieds Nœud Ivoire',
    category: 'Chaussures',
    price: '12.000 cfa',
    note: 'Nu-pieds ouverts · Nœud ivoire',
    label: '',
    image: '/chaussure.jpg',
    fallback:
      'https://images.unsplash.com/photo-1618354690429-2a1c3e5b6f4d?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Nu-pieds Salma',
    category: 'Chaussures',
    price: '14.000 cfa',
    note: 'Nu-pieds plats · Beige froncé',
    label: '',
    image: '/chaussure1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Nu-pieds Lina',
    category: 'Chaussures',
    price: '18.000 cfa',
    note: 'Nu-pieds ouverts · Rose',
    label: '',
    image: '/chaussure2.jpg',
    fallback:
      'https://images.unsplash.com/photo-1618354690429-2a1c3e5b6f4d?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Nu-pieds Amira',
    category: 'Chaussures',
    price: '16.000 cfa',
    note: 'Nu-pieds élégants · Bordeaux et ivoire',
    label: '',
    image: '/chaussure4.jpg',
    fallback:
      'https://images.unsplash.com/photo-1618354690429-2a1c3e5b6f4d?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Sac bandoulière Mina',
    category: 'Sacs',
    price: '22.000 cfa',
    note: 'Bandoulière chic · Noir',
    label: '',
    image: '/sac%20a%20main.jpg',
    fallback:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Mini sac Élise',
    category: 'Sacs',
    price: '19.000 cfa',
    note: 'Mini sac raffiné · Rose',
    label: '',
    image: '/sac%20a%20main1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Sac cabas Amira',
    category: 'Sacs',
    price: '28.000 cfa',
    note: 'Cabas élégant · Beige',
    label: '',
    image: '/Sacs%20%C3%A0%20main.jpg',
    fallback:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
  {
    name: 'Sac pochette soirée',
    category: 'Sacs',
    price: '17.000 cfa',
    note: 'Pochette de soirée · Bordeaux',
    label: '',
    image: '/sac.jpg',
    fallback:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    position: 'center 30%',
  },
]

function whatsappLink(message: string) {
  const phoneNumber = WHATSAPP_NUMBER.replace(/\D/g, '')
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tout voir')
  const [search, setSearch] = useState('')
  const isProductsPage = window.location.pathname === '/articles'

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'Tout voir' || product.category === activeCategory
    const matchesSearch = `${product.name} ${product.note}`
      .toLocaleLowerCase('fr')
      .includes(search.toLocaleLowerCase('fr'))

    return matchesCategory && matchesSearch
  })

  return (
    <main>
      <div className="announcement">
        <span>Une allure qui vous ressemble</span>
        <span className="announcement-divider">·</span>
        <a href={whatsappLink('Bonjour, je souhaite en savoir plus sur vos collections.')}
          target="_blank"
          rel="noreferrer"
        >
          Besoin d’un conseil ? Écrivez-nous
        </a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="/" aria-label="BINT-TAHA, accueil">
          BINT-TAHA<span>.</span>
          <small>MODE & MODESTIE</small>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="/">Accueil</a>
          <a href="/articles">Les articles</a>
        </nav>
        <a className="header-order" href={whatsappLink('Bonjour, je souhaite découvrir vos articles.')}
          target="_blank"
          rel="noreferrer"
        >
          Commander sur WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </header>

      {!isProductsPage && <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span /> BIENVENUE CHEZ BINT-TAHA</p>
          <h1>La mode femme,<br />en toute <em>élégance.</em></h1>
          <p className="hero-description">
            Découvrez notre sélection de hijabs, tenues, chaussures et sacs,
            choisie pour accompagner votre style au quotidien.
          </p>
          <a className="primary-link" href="/articles">
            Voir les articles <span aria-hidden="true">↓</span>
          </a>
          <div className="hero-note">
            <span className="hero-note-mark">BT</span>
            <span>Votre boutique en ligne<br />de mode féminine.</span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/sho%20online.jpg"
            alt="Affiche Shop Online de la boutique BINT-TAHA"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = '/sho%20online.jpg'
            }}
          />
        </div>
        <div className="hero-side-label">BINT-TAHA · BOUTIQUE EN LIGNE</div>
      </section>}

      {isProductsPage && <section className="collection-section" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LA COLLECTION BINT-TAHA</p>
            <h2>Nos <em>articles.</em></h2>
          </div>
          <p className="section-intro">Des pièces faciles à vivre,<br />belles longtemps.</p>
        </div>

        <div className="collection-tools">
          <div className="category-tabs" aria-label="Filtrer par catégorie">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'category-tab active' : 'category-tab'}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              aria-label="Rechercher un article"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher"
              type="search"
              value={search}
            />
          </label>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className="product-card" key={product.name} style={{ animationDelay: `${index * 70}ms` }}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ objectPosition: product.position }}
                    loading="lazy"
                  />
                  {product.label && <span className="product-label">{product.label}</span>}
                  <a
                    className="product-quick-order"
                    href={whatsappLink(`Bonjour, je suis intéressée par ${product.name} (${product.price}). Est-il disponible ?`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Commander ${product.name} sur WhatsApp`}
                  >
                    Commander <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="product-details">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.note}</p>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">Aucun article ne correspond à votre recherche.</p>
        )}
      </section>}

      {!isProductsPage && <section className="brand-note" id="histoire">
        <span className="brand-note-symbol" aria-hidden="true">✳</span>
        <p>Moins, mais mieux.</p>
        <h2>Le style se ressent.<br /><em>Il ne s’impose pas.</em></h2>
        <a href={whatsappLink('Bonjour, pouvez-vous me conseiller sur vos modèles ?')} target="_blank" rel="noreferrer">
          Parlons de votre style <span aria-hidden="true">↗</span>
        </a>
      </section>}

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="/">BINT-TAHA<span>.</span></a>
        <p>Des pièces choisies avec intention.</p>
        <a href="/articles">Voir les articles <span aria-hidden="true">↗</span></a>
        <small>© 2026 BINT-TAHA</small>
      </footer>
    </main>
  )
}