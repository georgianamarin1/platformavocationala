'use client'

import { useState } from 'react'

const CareerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('toate')

  const categories = [
    { id: 'toate', name: 'Toate', icon: '🌐' },
    { id: 'tehnologie', name: 'Tehnologie & IT', icon: '💻' },
    { id: 'sanatate', name: 'Sănătate', icon: '⚕️' },
    { id: 'educatie', name: 'Educație', icon: '📚' },
    { id: 'creativitate', name: 'Arte & Creativitate', icon: '🎨' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'inginerie', name: 'Inginerie', icon: '⚙️' },
  ]

  const careers = [
    {
      id: 1,
      title: 'Dezvoltator Software',
      category: 'tehnologie',
      salary: '3.000 - 8.000 RON',
      education: 'Licență',
      description: 'Creează aplicații și sisteme software pentru diverse industrii',
      skills: ['Programare', 'Rezolvare probleme', 'Gândire logică'],
      icon: '💻'
    },
    {
      id: 2,
      title: 'Designer UX/UI',
      category: 'tehnologie',
      salary: '2.500 - 6.000 RON',
      education: 'Licență',
      description: 'Proiectează experiențe și interfețe digitale pentru utilizatori',
      skills: ['Creativitate', 'Empatie', 'Design thinking'],
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Asistent Medical',
      category: 'sanatate',
      salary: '2.000 - 4.000 RON',
      education: 'Școală postliceală',
      description: 'Oferă îngrijire pacienților și asistență medicală',
      skills: ['Empatie', 'Atenție la detalii', 'Comunicare'],
      icon: '⚕️'
    },
    {
      id: 4,
      title: 'Profesor',
      category: 'educatie',
      salary: '2.500 - 5.000 RON',
      education: 'Master',
      description: 'Educă și inspiră elevii în diverse discipline',
      skills: ['Comunicare', 'Răbdare', 'Pasiune pentru predare'],
      icon: '📚'
    },
    {
      id: 5,
      title: 'Arhitect',
      category: 'inginerie',
      salary: '3.000 - 7.000 RON',
      education: 'Licență + Master',
      description: 'Proiectează clădiri și spații funcționale și estetice',
      skills: ['Creativitate', 'Gândire spațială', 'Atenție la detalii'],
      icon: '🏗️'
    },
    {
      id: 6,
      title: 'Marketing Manager',
      category: 'business',
      salary: '3.500 - 8.000 RON',
      education: 'Licență',
      description: 'Dezvoltă strategii de marketing pentru promovarea produselor',
      skills: ['Creativitate', 'Analitică', 'Comunicare'],
      icon: '📊'
    },
    {
      id: 7,
      title: 'Graphic Designer',
      category: 'creativitate',
      salary: '2.000 - 5.000 RON',
      education: 'Licență',
      description: 'Creează elemente vizuale pentru branduri și campanii',
      skills: ['Creativitate', 'Adobe Suite', 'Viziune artistică'],
      icon: '🖌️'
    },
    {
      id: 8,
      title: 'Data Analyst',
      category: 'tehnologie',
      salary: '3.000 - 7.000 RON',
      education: 'Licență',
      description: 'Analizează date pentru a genera insights de business',
      skills: ['Statistică', 'SQL', 'Gândire analitică'],
      icon: '📈'
    },
    {
      id: 9,
      title: 'Fotograf',
      category: 'creativitate',
      salary: '2.000 - 6.000 RON',
      education: 'Curs de specialitate',
      description: 'Capturează momente și creează conținut vizual impactant',
      skills: ['Creativitate', 'Tehnică foto', 'Editing'],
      icon: '📷'
    },
    {
      id: 10,
      title: 'Inginer Mecanic',
      category: 'inginerie',
      salary: '3.000 - 6.500 RON',
      education: 'Licență',
      description: 'Proiectează și optimizează sisteme și mașini',
      skills: ['Matematică', 'Fizică', 'CAD'],
      icon: '⚙️'
    },
    {
      id: 11,
      title: 'Psiholog',
      category: 'sanatate',
      salary: '2.500 - 6.000 RON',
      education: 'Licență + Master',
      description: 'Oferă suport psihologic și consiliere',
      skills: ['Empatie', 'Ascultare activă', 'Analitică'],
      icon: '🧠'
    },
    {
      id: 12,
      title: 'Antreprenor',
      category: 'business',
      salary: 'Variabil',
      education: 'Variabil',
      description: 'Dezvoltă și conduce propriul business',
      skills: ['Leadership', 'Inovație', 'Asumarea riscului'],
      icon: '🚀'
    },
  ]

  const filteredCareers = selectedCategory === 'toate' 
    ? careers 
    : careers.filter(career => career.category === selectedCategory)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleCategoryKeyDown = (e: React.KeyboardEvent, categoryId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelectedCategory(categoryId)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explorează Cariere
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă o varietate de cariere și află care se potrivește cel mai bine cu aptitudinile tale
          </p>
        </div>

        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max mx-auto justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                onKeyDown={(e) => handleCategoryKeyDown(e, category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
                tabIndex={0}
                aria-label={`Filtrează după ${category.name}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{career.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {career.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {career.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="font-semibold mr-2">💰 Salariu:</span>
                  <span>{career.salary}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="font-semibold mr-2">🎓 Educație:</span>
                  <span>{career.education}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Abilități necesare:</p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Nu am găsit cariere în această categorie.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CareerPage







