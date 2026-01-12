# 🎓 CarieraViitor - Platformă Vocațională pentru Tineri

O platformă web modernă pentru ghidare vocațională și dezvoltare de carieră destinată tinerilor, construită cu Next.js, TypeScript și TailwindCSS.

## 🌟 Caracteristici

- **Pagină Principală Atractivă**: Hero section modern cu informații despre platformă
- **Explorare Cariere**: Peste 12 cariere din diverse domenii cu informații detaliate despre:
  - Descriere job
  - Salariu estimat
  - Nivel educație necesar
  - Abilități necesare
- **Test de Aptitudini Interactiv**: Chestionar de 5 întrebări care recomandă cariere potrivite
- **Oportunități**: Secțiune cu stagii, job-uri, cursuri și oportunități de voluntariat
- **Resurse Educaționale**: Ghiduri, tutoriale video, articole și podcast-uri
- **Design Responsiv**: Funcționează perfect pe desktop, tabletă și mobil
- **Navigare Intuitivă**: Meniu responsive cu animații smooth
- **Accesibilitate**: Implementat conform best practices (aria-labels, keyboard navigation)

## 🚀 Tehnologii Folosite

- **Framework**: Next.js 16 (App Router)
- **Limbaj**: TypeScript
- **Styling**: TailwindCSS
- **React**: 19
- **Font**: System fonts pentru performanță optimă

## 📦 Instalare

### Cerințe
- Node.js (versiunea 18 sau mai nouă)
- npm sau yarn

### Pași

1. Clonează repository-ul sau asigură-te că ești în directorul proiectului:
```bash
cd demo
```

2. Instalează dependențele:
```bash
npm install
```

3. Rulează serverul de development:
```bash
npm run dev
```

4. Deschide browser-ul la [http://localhost:3000](http://localhost:3000)

## 📁 Structura Proiectului

```
demo/
├── app/
│   ├── cariere/          # Pagina de explorare cariere
│   ├── evaluare/         # Test de aptitudini
│   ├── oportunitati/     # Oportunități (stagii, job-uri, etc.)
│   ├── resurse/          # Resurse educaționale
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Homepage
│   └── globals.css       # Stiluri globale
├── components/
│   └── Navigation.tsx    # Component de navigare
├── public/               # Fișiere statice
├── tailwind.config.ts    # Configurare TailwindCSS
├── tsconfig.json         # Configurare TypeScript
└── next.config.js        # Configurare Next.js
```

## 🎨 Pagini

### 1. **Acasă** (`/`)
- Hero section cu call-to-action
- Prezentare caracteristici
- Beneficii platformă

### 2. **Explorează Cariere** (`/cariere`)
- 12+ cariere din 6 categorii
- Filtrare pe categorii
- Informații detaliate pentru fiecare carieră

### 3. **Test Aptitudini** (`/evaluare`)
- Chestionar interactiv cu 5 întrebări
- Algoritm de recomandare
- Rezultate personalizate cu top 3 domenii

### 4. **Oportunități** (`/oportunitati`)
- Stagii, job-uri, cursuri, voluntariat
- Filtrare după tip și locație
- Informații detaliate despre fiecare oportunitate

### 5. **Resurse** (`/resurse`)
- Ghiduri PDF
- Video tutoriale
- Articole
- Podcast-uri
- Filtrare pe categorii

## 🎯 Scripturi Disponibile

```bash
# Pornește serverul de development
npm run dev

# Build pentru producție
npm run build

# Rulează aplicația în modul producție
npm start

# Linting
npm run lint
```

## 🎨 Personalizare Culori

Paleta de culori principală este definită în `tailwind.config.ts` și poate fi personalizată:
- Primary: Albastru (#0ea5e9 și variante)
- Accent: Gri pentru fundal și text

## 📱 Responsive Design

Aplicația este complet responsivă:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accesibilitate

- Semantic HTML
- ARIA labels pentru toate elementele interactive
- Keyboard navigation support
- Focus states vizibile
- Contrast adecvat pentru text

## 🚀 Deployment

### Vercel (Recomandat)
```bash
npm install -g vercel
vercel
```

### Build Manual
```bash
npm run build
npm start
```

## 📄 Licență

Acest proiect este open source și disponibil sub licența MIT.

## 👥 Contribuții

Contribuțiile sunt binevenite! Pentru schimbări majore, te rugăm să deschizi mai întâi un issue pentru a discuta ce ai dori să modifici.

## 📞 Contact

Pentru întrebări sau sugestii, te rugăm să ne contactezi.

---

**Dezvoltat cu ❤️ pentru tinerii din România**







