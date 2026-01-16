'use client'

import { useState } from 'react'

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('toate')

  const categories = [
    { id: 'toate', label: 'Toate', icon: '📚' },
    { id: 'ghiduri', label: 'Ghiduri Carieră', icon: '📖' },
    { id: 'video', label: 'Video Tutoriale', icon: '🎥' },
    { id: 'articole', label: 'Articole', icon: '📰' },
    { id: 'podcast', label: 'Podcast-uri', icon: '🎙️' },
  ]

  const resources = [
    {
      id: 1,
      title: 'Cum să-ți Alegi Cariera Potrivită',
      category: 'ghiduri',
      description: 'Ghid complet pentru a identifica cariera ideală bazată pe aptitudinile și pasiunile tale.',
      type: 'PDF Ghid',
      duration: '15 min citire',
      level: 'Începător',
      icon: '📖',
      tags: ['Orientare', 'Carieră', 'Auto-cunoaștere']
    },
    {
      id: 2,
      title: 'Cum să Creezi un CV de Succes',
      category: 'video',
      description: 'Tutorial video pas cu pas pentru crearea unui CV profesional care atrage atenția recrutorilor.',
      type: 'Video Tutorial',
      duration: '20 min',
      level: 'Începător',
      icon: '🎥',
      tags: ['CV', 'Aplicare', 'Recrutare']
    },
    {
      id: 3,
      title: 'Cum să Te Pregătești pentru Interviu',
      category: 'articole',
      description: 'Cele mai bune tehnici și sfaturi pentru a face impresie bună la interviurile de angajare.',
      type: 'Articol',
      duration: '10 min citire',
      level: 'Mediu',
      icon: '📰',
      tags: ['Interviu', 'Pregătire', 'Comunicare']
    },
    {
      id: 4,
      title: 'Povești de Succes: De la Student la Antreprenor',
      category: 'podcast',
      description: 'Podcast cu tineri antreprenori români care împărtășesc călătoria lor către succes.',
      type: 'Podcast',
      duration: '35 min',
      level: 'Toate nivelurile',
      icon: '🎙️',
      tags: ['Antreprenoriat', 'Inspirație', 'Business']
    },
    {
      id: 5,
      title: 'Ghid de Networking pentru Începători',
      category: 'ghiduri',
      description: 'Învață cum să construiești o rețea profesională solidă care să te ajute în carieră.',
      type: 'PDF Ghid',
      duration: '12 min citire',
      level: 'Începător',
      icon: '📖',
      tags: ['Networking', 'Relații', 'Profesional']
    },
    {
      id: 6,
      title: 'Introducere în Programare cu Python',
      category: 'video',
      description: 'Curs video gratuit de introducere în programare pentru începători absoluti.',
      type: 'Serie Video',
      duration: '3 ore',
      level: 'Începător',
      icon: '🎥',
      tags: ['Programare', 'Python', 'Tehnologie']
    },
    {
      id: 7,
      title: 'Top 10 Abilități Soft pentru 2025',
      category: 'articole',
      description: 'Descoperă abilitățile soft cele mai căutate de angajatori și cum să le dezvolți.',
      type: 'Articol',
      duration: '8 min citire',
      level: 'Toate nivelurile',
      icon: '📰',
      tags: ['Abilități Soft', 'Dezvoltare', 'Carieră']
    },
    {
      id: 8,
      title: 'Echilibrul Viață-Muncă pentru Generația Z',
      category: 'podcast',
      description: 'Discuții despre importanța echilibrului și cum să-l menții în cariera ta.',
      type: 'Podcast',
      duration: '28 min',
      level: 'Toate nivelurile',
      icon: '🎙️',
      tags: ['Wellness', 'Echilibru', 'Sănătate Mentală']
    },
    {
      id: 9,
      title: 'Cum să Negociezi Salariul',
      category: 'ghiduri',
      description: 'Strategii eficiente pentru a negocia un pachet salarial competitiv.',
      type: 'PDF Ghid',
      duration: '10 min citire',
      level: 'Avansat',
      icon: '📖',
      tags: ['Negociere', 'Salariu', 'Strategie']
    },
    {
      id: 10,
      title: 'Marketing Digital pentru Începători',
      category: 'video',
      description: 'Învață bazele marketingului digital: SEO, Social Media și Content Marketing.',
      type: 'Video Tutorial',
      duration: '45 min',
      level: 'Începător',
      icon: '🎥',
      tags: ['Marketing', 'Digital', 'SEO']
    },
    {
      id: 11,
      title: 'Tranziția de la Școală la Carieră',
      category: 'articole',
      description: 'Ce să te aștepți când începi prima ta slujbă și cum să te adaptezi rapid.',
      type: 'Articol',
      duration: '12 min citire',
      level: 'Începător',
      icon: '📰',
      tags: ['Tranziție', 'Prima Slujbă', 'Adaptare']
    },
    {
      id: 12,
      title: 'Femei în Tehnologie: Povești Inspiraționale',
      category: 'podcast',
      description: 'Intervievări cu femei de succes din industria IT care împărtășesc experiențele lor.',
      type: 'Podcast',
      duration: '40 min',
      level: 'Toate nivelurile',
      icon: '🎙️',
      tags: ['Tehnologie', 'Inspirație', 'Diversitate']
    },
  ]

  const filteredResources = selectedCategory === 'toate' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleCategoryKeyDown = (e: React.KeyboardEvent, categoryId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelectedCategory(categoryId)
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Începător':
        return 'bg-green-100 text-green-700'
      case 'Mediu':
        return 'bg-yellow-100 text-yellow-700'
      case 'Avansat':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Resurse Educaționale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ghiduri, tutoriale, articole și podcast-uri pentru dezvoltarea ta profesională
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
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
                aria-label={`Filtrează după ${category.label}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 text-gray-600 text-center">
          {filteredResources.length} resurse disponibile
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 border border-gray-100 flex flex-col transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{resource.icon}</div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                  {resource.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(resource.level)}`}>
                  {resource.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow">
                {resource.description}
              </p>

              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span className="mr-2">⏱️</span>
                  <span>{resource.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg mt-auto">
                Accesează →
              </button>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-xl text-gray-600">
              Nu am găsit resurse în această categorie.
            </p>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vrei să Contribui?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Dacă ai resurse educaționale de calitate sau vrei să împărtășești experiența ta, ne-ar plăcea să colaborăm cu tine!
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Contactează-ne
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage







