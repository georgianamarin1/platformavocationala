'use client'

import { useState } from 'react'
import Link from 'next/link'

type Answer = {
  questionId: number
  answer: string
}

const AssessmentPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<any>(null)

  const questions = [
    {
      id: 1,
      question: 'Ce tip de activități îți plac cel mai mult?',
      options: [
        { value: 'tehnologie', label: 'Lucru cu calculatoare și tehnologie', icon: '💻' },
        { value: 'oameni', label: 'Interacțiune cu oamenii', icon: '👥' },
        { value: 'creativitate', label: 'Activități creative și artistice', icon: '🎨' },
        { value: 'analiza', label: 'Analiză și rezolvare de probleme', icon: '🧩' },
      ]
    },
    {
      id: 2,
      question: 'În ce mediu preferi să lucrezi?',
      options: [
        { value: 'birou', label: 'Birou modern și organizat', icon: '🏢' },
        { value: 'teren', label: 'În teren, în mișcare', icon: '🚗' },
        { value: 'remote', label: 'De acasă, remote', icon: '🏠' },
        { value: 'colaborativ', label: 'Spațiu colaborativ, cu echipa', icon: '👨‍👩‍👧‍👦' },
      ]
    },
    {
      id: 3,
      question: 'Ce te motivează cel mai mult?',
      options: [
        { value: 'salariu', label: 'Salariu competitiv', icon: '💰' },
        { value: 'impact', label: 'Impact social pozitiv', icon: '🌍' },
        { value: 'creativitate', label: 'Libertate creativă', icon: '✨' },
        { value: 'dezvoltare', label: 'Dezvoltare personală', icon: '📈' },
      ]
    },
    {
      id: 4,
      question: 'Ce materii școlare îți plac?',
      options: [
        { value: 'stiinte', label: 'Matematică și Științe', icon: '🔬' },
        { value: 'limbi', label: 'Limbi străine și Comunicare', icon: '🗣️' },
        { value: 'arte', label: 'Arte și Design', icon: '🎭' },
        { value: 'sport', label: 'Sport și Educație fizică', icon: '⚽' },
      ]
    },
    {
      id: 5,
      question: 'Cum te descrii cel mai bine?',
      options: [
        { value: 'logic', label: 'Logic și meticulos', icon: '🤓' },
        { value: 'empatic', label: 'Empatic și sociabil', icon: '🤝' },
        { value: 'creativ', label: 'Creativ și inovator', icon: '💡' },
        { value: 'activ', label: 'Activ și energic', icon: '⚡' },
      ]
    },
    {
      id: 6,
      question: 'Ce activitate îți place cel mai mult?',
      options: [
        { value: 'creativ', label: 'Să scriu content pentru un website', icon: '📝' },
        { value: 'dezvoltare', label: 'Să lucrez la propriile proiecte', icon: '💻' },
        { value: 'oameni', label: 'Să învăț oamenii din ce știu', icon: '🤝' },
        { value: 'activ', label: 'Să fac sport', icon: '🚵‍♀️' },
      ]
    },
    {
      id: 7,
      question: 'Care este cea mai mare calitate a ta?',
      options: [
        { value: 'creativ', label: 'Inventivitatea', icon: '💡' },
        { value: 'dezvoltare', label: 'Perseverența', icon: '⏳' },
        { value: 'oameni', label: 'Generozitatea', icon: '🤝' },
        { value: 'impact', label: 'Răbdare', icon: '🔍' },
      ]
    },
    {id: 8,
      question: 'Ce domeniu te atrage cel mai mult?',
      options: [
        { value: 'tehnologie', label: 'Tehnologie & IT', icon: '💻' },
        { value: 'oameni', label: 'Sănătate/Educație', icon: '💊' },
        { value: 'arte', label: 'Arta', icon: '🖌' },
        { value: 'dezvoltare', label: 'Business', icon: '🧰' },
      ]
    },
  ]

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex(a => a.questionId === questions[currentStep].id)
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { questionId: questions[currentStep].id, answer }
    } else {
      newAnswers.push({ questionId: questions[currentStep].id, answer })
    }
    
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, 300)
    } else {
      setTimeout(() => {
        calculateResults(newAnswers)
      }, 300)
    }
  }

  const handleKeyDownAnswer = (e: React.KeyboardEvent, answer: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleAnswerSelect(answer)
    }
  }

  const calculateResults = (finalAnswers: Answer[]) => {
    const scores: Record<string, number> = {
      tehnologie: 0,
      sanatate: 0,
      creativitate: 0,
      business: 0,
      educatie: 0,
    }

    finalAnswers.forEach(answer => {
      const value = answer.answer
      
      if (value === 'tehnologie' || value === 'stiinte' || value === 'logic') {
        scores.tehnologie += 2
      }
      if (value === 'oameni' || value === 'empatic' || value === 'impact') {
        scores.sanatate += 2
        scores.educatie += 1
      }
      if (value === 'creativitate' || value === 'arte' || value === 'creativ') {
        scores.creativitate += 2
      }
      if (value === 'analiza' || value === 'dezvoltare' || value === 'salariu') {
        scores.business += 2
      }
      if (value === 'colaborativ' || value === 'limbi' || value === 'oameni') {
        scores.educatie += 1
      }
    })

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1])
    
    const recommendations = {
      tehnologie: {
        title: 'Tehnologie & IT',
        description: 'Ai un profil potrivit pentru cariere în tehnologie!',
        careers: ['Dezvoltator Software', 'Data Analyst', 'Inginer IT', 'Designer UX/UI'],
        icon: '💻',
        color: 'bg-blue-500'
      },
      sanatate: {
        title: 'Sănătate',
        description: 'Ai empatie și dorința de a ajuta oamenii!',
        careers: ['Asistent Medical', 'Psiholog', 'Nutriționist', 'Terapeut'],
        icon: '⚕️',
        color: 'bg-green-500'
      },
      creativitate: {
        title: 'Arte & Creativitate',
        description: 'Creativitatea ta poate străluci în aceste domenii!',
        careers: ['Graphic Designer', 'Fotograf', 'Ilustrator', 'Content Creator'],
        icon: '🎨',
        color: 'bg-purple-500'
      },
      business: {
        title: 'Business',
        description: 'Ai abilități pentru afaceri și management!',
        careers: ['Marketing Manager', 'Antreprenor', 'Business Analyst', 'HR Manager'],
        icon: '💼',
        color: 'bg-yellow-500'
      },
      educatie: {
        title: 'Educație',
        description: 'Ai talent pentru predare și mentorat!',
        careers: ['Profesor', 'Trainer', 'Consilier Educațional', 'Coach'],
        icon: '📚',
        color: 'bg-red-500'
      }
    }

    setResults({
      topMatch: recommendations[sortedScores[0][0] as keyof typeof recommendations],
      secondMatch: recommendations[sortedScores[1][0] as keyof typeof recommendations],
      thirdMatch: recommendations[sortedScores[2][0] as keyof typeof recommendations],
    })
    
    setShowResults(true)
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers([])
    setShowResults(false)
    setResults(null)
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Rezultatele Tale 🎉
            </h1>
            <p className="text-xl text-gray-600">
              Am analizat răspunsurile tale și iată domeniile care ți se potrivesc!
            </p>
          </div>

          <div className="space-y-6">
            <div className={`${results.topMatch.color} text-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all`}>
              <div className="flex items-center mb-4">
                <span className="text-6xl mr-4">{results.topMatch.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold">Top Match: {results.topMatch.title}</h2>
                  <p className="text-lg opacity-90">{results.topMatch.description}</p>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4">
                <p className="font-semibold mb-2">Cariere recomandate:</p>
                <ul className="space-y-1">
                  {results.topMatch.careers.map((career: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-3">
                  <span className="text-4xl mr-3">{results.secondMatch.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{results.secondMatch.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{results.secondMatch.description}</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {results.secondMatch.careers.slice(0, 3).map((career: string, index: number) => (
                    <li key={index}>• {career}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-3">
                  <span className="text-4xl mr-3">{results.thirdMatch.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{results.thirdMatch.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{results.thirdMatch.description}</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {results.thirdMatch.careers.slice(0, 3).map((career: string, index: number) => (
                    <li key={index}>• {career}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/cariere"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg text-center"
            >
              Explorează Cariere
            </Link>
            <button
              onClick={handleRestart}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Reia Testul
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Test de Aptitudini
          </h1>
          <p className="text-xl text-gray-600">
            Răspunde la câteva întrebări pentru a descoperi carierele potrivite pentru tine
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Întrebarea {currentStep + 1} din {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(((currentStep + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-primary-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {questions[currentStep].question}
          </h2>

          <div className="space-y-4">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option.value)}
                onKeyDown={(e) => handleKeyDownAnswer(e, option.value)}
                className="w-full bg-gray-50 hover:bg-primary-50 border-2 border-gray-200 hover:border-primary-500 rounded-xl p-4 text-left transition-all transform hover:scale-105 hover:shadow-lg"
                tabIndex={0}
                aria-label={option.label}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.icon}</span>
                  <span className="text-lg font-medium text-gray-800">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {currentStep > 0 && (
          <button
            onClick={handlePrevious}
            className="w-full bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-md"
          >
            ← Întrebarea Anterioară
          </button>
        )}
      </div>
    </div>
  )
}

export default AssessmentPage







