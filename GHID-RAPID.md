# 📋 Ghid Rapid - CarieraViitor

## 🎯 Ce Ai Creat?

Am dezvoltat o platformă vocațională completă pentru tineri cu următoarele caracteristici:

### 🏠 Pagini Principale

1. **Homepage** (`http://localhost:3000`)
   - Hero section modern cu gradient
   - 4 carduri de caracteristici principale
   - Secțiune "De Ce CarieraViitor?"
   - Call-to-action pentru începerea testului

2. **Explorează Cariere** (`http://localhost:3000/cariere`)
   - 12 cariere din 6 domenii diferite
   - Filtre interactive pentru categorii
   - Informații detaliate: salariu, educație, abilități
   - Design cu carduri hover interactive

3. **Test de Aptitudini** (`http://localhost:3000/evaluare`)
   - Chestionar interactiv cu 5 întrebări
   - Progress bar animat
   - Algoritm de recomandare inteligent
   - Pagină de rezultate cu top 3 domenii potrivite
   - Opțiune de a relua testul

4. **Oportunități** (`http://localhost:3000/oportunitati`)
   - 8 oportunități diverse: stagii, job-uri, cursuri, voluntariat
   - Filtrare după tip și locație
   - Informații complete: cerințe, beneficii, deadline
   - Buton "Aplică Acum" cu mailto

5. **Resurse Educaționale** (`http://localhost:3000/resurse`)
   - 12 resurse: ghiduri, video tutoriale, articole, podcast-uri
   - Filtrare pe categorii
   - Tag-uri pentru fiecare resursă
   - Indicatoare de nivel (Începător, Mediu, Avansat)

### 🎨 Design & UX

- **Culori**: Paletă albastru profesional (Primary 500-700)
- **Tipografie**: System fonts pentru performanță
- **Iconițe**: Emoji native pentru compatibilitate
- **Animații**: Hover effects, transformations, shadows
- **Responsive**: Mobile-first design, funcționează perfect pe toate dispozitivele

### ♿ Accesibilitate

- Aria labels pe toate elementele interactive
- Keyboard navigation (Tab, Enter, Space)
- Focus states vizibile
- Contrast text optim
- Semantic HTML

### 🛠️ Tehnologii

- **Next.js 14.2.18** - React framework cu App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **React 18** - Latest stable version

## 🚀 Cum Să Folosești Aplicația?

### Pornire Rapidă

```bash
# Dacă serverul nu rulează:
npm run dev

# Deschide browser la:
http://localhost:3000
```

### Navigare

1. **Din Homepage**: Click pe "Începe Testul" sau "Explorează Cariere"
2. **Meniu de navigare**: Accesează orice pagină din header
3. **Mobile**: Click pe hamburger menu (☰) pentru a deschide meniul

### Testarea Aplicației

1. **Încearcă testul de aptitudini**:
   - Navighează la `/evaluare`
   - Răspunde la 5 întrebări
   - Vezi recomandările personalizate

2. **Explorează carierele**:
   - Filtrează după categorie
   - Citește informațiile despre fiecare carieră
   - Observă hover effects

3. **Verifică oportunități**:
   - Filtrează după tip (Stagii, Job-uri, Cursuri, Voluntariat)
   - Filtrează după locație
   - Click pe "Aplică Acum" pentru email

## 📱 Responsive Design

Testează pe diferite dimensiuni:
- **Desktop**: Chrome DevTools (F12) → Toggle device toolbar
- **Tablet**: 768px width
- **Mobile**: 375px width

## 🎨 Personalizare

### Schimbarea Culorilor

Editează `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Culoarea principală
    600: '#0284c7',  // Hover state
    700: '#0369a1',  // Active state
  }
}
```

### Adăugarea de Cariere Noi

Editează `app/cariere/page.tsx` și adaugă în array-ul `careers`:

```typescript
{
  id: 13,
  title: 'Nume Carieră',
  category: 'tehnologie',
  salary: '3.000 - 7.000 RON',
  education: 'Licență',
  description: 'Descriere...',
  skills: ['Skill 1', 'Skill 2'],
  icon: '🚀'
}
```

## 📊 Structura Fișierelor

```
app/
├── layout.tsx          # Layout principal cu Navigation
├── page.tsx            # Homepage
├── globals.css         # Stiluri globale + TailwindCSS
├── cariere/
│   └── page.tsx        # Pagina de cariere
├── evaluare/
│   └── page.tsx        # Test de aptitudini
├── oportunitati/
│   └── page.tsx        # Oportunități
└── resurse/
    └── page.tsx        # Resurse educaționale

components/
└── Navigation.tsx      # Component de navigare
```

## 🔧 Comenzi Utile

```bash
# Development
npm run dev

# Build pentru producție
npm run build

# Rulează build-ul
npm start

# Type checking
npx tsc --noEmit

# Oprește serverul
Ctrl + C în terminal
```

## 🐛 Depanare

### Serverul nu pornește?
```bash
# Verifică dacă portul 3000 este liber
# Șterge folder-ul .next
rm -rf .next  # Linux/Mac
rmdir /s .next  # Windows

# Reinstalează dependențele
rm -rf node_modules
npm install
```

### Erori de compilare?
- Verifică sintaxa TypeScript
- Asigură-te că toate import-urile sunt corecte
- Rulează `npx tsc --noEmit` pentru a vedea erorile

## 🚀 Next Steps

### Îmbunătățiri Posibile

1. **Backend Integration**:
   - API pentru salvarea rezultatelor testului
   - Bază de date pentru utilizatori
   - Autentificare

2. **Features Noi**:
   - Profil de utilizator
   - Salvare favorite
   - Sistem de notificări
   - Chat cu mentori

3. **Analytics**:
   - Google Analytics
   - Tracking pentru evenimente
   - Heatmaps

4. **SEO**:
   - Meta tags optimize
   - Sitemap
   - robots.txt
   - Open Graph images

## 📞 Suport

Pentru întrebări sau probleme:
- Verifică README.md pentru documentație completă
- Consultă documentația Next.js: https://nextjs.org/docs
- Documentația TailwindCSS: https://tailwindcss.com/docs

---

**Aplicația este gata de folosit! 🎉**

Deschide **http://localhost:3000** în browser și explorează platforma!







