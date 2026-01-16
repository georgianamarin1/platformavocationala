'use client'

import { useState } from 'react'

const OpportunitiesPage = () => {
  const [selectedType, setSelectedType] = useState('toate')
  const [selectedLocation, setSelectedLocation] = useState('toate')

  const types = [
    { id: 'toate', label: 'Toate', icon: '🌐' },
    { id: 'stagiu', label: 'Stagii', icon: '🎓' },
    { id: 'job', label: 'Job-uri', icon: '💼' },
    { id: 'curs', label: 'Cursuri', icon: '📚' },
    { id: 'voluntariat', label: 'Voluntariat', icon: '❤️' },
  ]

  const opportunities = [
    {
      id: 1,
      title: 'Stagiu IT - Dezvoltator Junior',
      company: 'TechStart Romania',
      type: 'stagiu',
      location: 'București',
      duration: '3 luni',
      paid: true,
      description: 'Căutăm studenți pasionați de programare pentru un stagiu de 3 luni cu posibilitate de angajare.',
      requirements: ['Cunoștințe JavaScript', 'React (opțional)', 'Pasiune pentru programare'],
      benefits: ['Mentoring', 'Experiență practică', 'Certificat'],
      deadline: '15 Decembrie 2025',
      contact: 'stagii@techstart.ro',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Curs Gratuit: Marketing Digital',
      company: 'Digital Academy',
      type: 'curs',
      location: 'Online',
      duration: '6 săptămâni',
      paid: false,
      description: 'Învață bazele marketingului digital: SEO, Social Media, Google Ads și Email Marketing.',
      requirements: ['Nivel începător', 'Internet stabil'],
      benefits: ['Certificat recunoscut', 'Proiecte practice', 'Sesiuni live'],
      deadline: '1 Decembrie 2025',
      contact: 'inscrieri@digitalacademy.ro',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Voluntariat: Profesor de Programare pentru Copii',
      company: 'Code Kids Foundation',
      type: 'voluntariat',
      location: 'Cluj-Napoca',
      duration: 'Flexibil',
      paid: false,
      description: 'Ajută copiii să învețe programare și gândire computațională într-un mediu distractiv.',
      requirements: ['Cunoștințe programare', 'Răbdare', 'Pasiune pentru educație'],
      benefits: ['Experiență educațională', 'Comunitate', 'Certificat de voluntariat'],
      deadline: 'Recrutare permanentă',
      contact: 'voluntariat@codekids.ro',
      icon: '👨‍🏫'
    },
    {
      id: 4,
      title: 'Junior Graphic Designer',
      company: 'Creative Studio Pro',
      type: 'job',
      location: 'București',
      duration: 'Full-time',
      paid: true,
      description: 'Căutăm un designer creativ pentru a se alătura echipei noastre tinere și dinamice.',
      requirements: ['Adobe Photoshop', 'Illustrator', 'Portfolio'],
      benefits: ['Salariu competitiv', 'Programe de training', 'Mediu creativ'],
      deadline: '20 Decembrie 2025',
      contact: 'jobs@creativestudio.ro',
      icon: '🎨'
    },
    {
      id: 5,
      title: 'Stagiu Marketing & Social Media',
      company: 'Brand Vision',
      type: 'stagiu',
      location: 'Timișoara',
      duration: '6 luni',
      paid: true,
      description: 'Oportunitate de a învăța despre strategii de marketing și gestionare social media.',
      requirements: ['Creativitate', 'Cunoștințe social media', 'Studii în marketing (opțional)'],
      benefits: ['Indemnizație', 'Experiență reală', 'Networking'],
      deadline: '10 Decembrie 2025',
      contact: 'hr@brandvision.ro',
      icon: '📱'
    },
    {
      id: 6,
      title: 'Curs: Fotografie și Editing',
      company: 'PhotoPro School',
      type: 'curs',
      location: 'Brașov',
      duration: '8 săptămâni',
      paid: true,
      description: 'Învață tehnici profesionale de fotografie și editare foto de la experți în domeniu.',
      requirements: ['Cameră foto (DSLR preferabil)', 'Laptop cu Lightroom/Photoshop'],
      benefits: ['Certificat profesional', 'Proiecte practice', 'Portfolio'],
      deadline: '5 Decembrie 2025',
      contact: 'inscriere@photopro.ro',
      icon: '📷'
    },
    {
      id: 7,
      title: 'Voluntariat: Ajutor Comunitar',
      company: 'Asociația Speranța',
      type: 'voluntariat',
      location: 'Iași',
      duration: 'Weekend-uri',
      paid: false,
      description: 'Ajută comunitatea locală prin diverse proiecte sociale și educaționale.',
      requirements: ['Empatie', 'Disponibilitate weekend', 'Spirit civic'],
      benefits: ['Impact social', 'Experiență voluntariat', 'Noi prietenii'],
      deadline: 'Deschis',
      contact: 'contact@sperantaiasi.ro',
      icon: '🤝'
    },
    {
      id: 8,
      title: 'Junior Data Analyst',
      company: 'DataTech Solutions',
      type: 'job',
      location: 'București',
      duration: 'Full-time',
      paid: true,
      description: 'Alătură-te echipei noastre de data analytics și lucrează pe proiecte interesante.',
      requirements: ['Excel avansat', 'SQL', 'Cunoștințe statistică'],
      benefits: ['Salariu atractiv', 'Training continuu', 'Remote friendly'],
      deadline: '18 Decembrie 2025',
      contact: 'careers@datatech.ro',
      icon: '📈'
    },
  ]

  const locations = ['toate', ...Array.from(new Set(opportunities.map(o => o.location)))]

  const filteredOpportunities = opportunities.filter(opp => {
    const typeMatch = selectedType === 'toate' || opp.type === selectedType
    const locationMatch = selectedLocation === 'toate' || opp.location === selectedLocation
    return typeMatch && locationMatch
  })

  const handleTypeClick = (typeId: string) => {
    setSelectedType(typeId)
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value)
  }

  const handleTypeKeyDown = (e: React.KeyboardEvent, typeId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelectedType(typeId)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oportunități pentru Tineri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă stagii, job-uri, cursuri și oportunități de voluntariat
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Filtrează după tip:
            </label>
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeClick(type.id)}
                  onKeyDown={(e) => handleTypeKeyDown(e, type.id)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                    selectedType === type.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  tabIndex={0}
                  aria-label={`Filtrează după ${type.label}`}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="location-select" className="block text-sm font-semibold text-gray-700 mb-2">
              Locație:
            </label>
            <select
              id="location-select"
              value={selectedLocation}
              onChange={handleLocationChange}
              className="w-full md:w-64 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              aria-label="Selectează locația"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location === 'toate' ? 'Toate locațiile' : location}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          Găsite {filteredOpportunities.length} oportunități
        </div>

        <div className="space-y-6">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start mb-4 md:mb-0">
                  <div className="text-4xl mr-4">{opp.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {opp.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">{opp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {types.find(t => t.id === opp.type)?.label}
                  </span>
                  {opp.paid && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      💰 Plătit
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{opp.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">📍 Detalii:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Locație: {opp.location}</li>
                    <li>• Durată: {opp.duration}</li>
                    <li>• Deadline: {opp.deadline}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">✅ Cerințe:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {opp.requirements.slice(0, 3).map((req, index) => (
                      <li key={index}>• {req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">🎁 Beneficii:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {opp.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <a
                  href={`mailto:${opp.contact}`}
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
                >
                  Aplică Acum →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-xl text-gray-600">
              Nu am găsit oportunități cu aceste criterii. Încearcă alte filtre!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OpportunitiesPage







