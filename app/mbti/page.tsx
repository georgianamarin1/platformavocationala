'use client'

import { useState } from 'react'
import Link from 'next/link'

type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

type Question = {
  id: number
  question: string
  dimension: [Dimension, Dimension]
  optionA: string
  optionB: string
}

type Scores = {
  E: number
  I: number
  S: number
  N: number
  T: number
  F: number
  J: number
  P: number
}

type MBTIType = {
  type: string
  name: string
  description: string
  strengths: string[]
  careers: string[]
  color: string
  icon: string
}

const MBTIPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({})
  const [showResults, setShowResults] = useState(false)
  const [mbtiResult, setMbtiResult] = useState<string | null>(null)

  // 40 de întrebări MBTI - 10 pentru fiecare axă
  const questions: Question[] = [
    // === E/I (Extravert vs Introvert) - Întrebările 1-10 ===
    {
      id: 1,
      question: 'În timpul liber prefer să:',
      dimension: ['E', 'I'],
      optionA: 'Ies cu oameni',
      optionB: 'Stau liniștit singur'
    },
    {
      id: 2,
      question: 'Când trebuie să rezolv o problemă:',
      dimension: ['E', 'I'],
      optionA: 'Vorbesc cu cineva despre ea',
      optionB: 'Mă gândesc singur în liniște'
    },
    {
      id: 3,
      question: 'Îmi ia energie să fiu singur pentru mult timp:',
      dimension: ['E', 'I'],
      optionA: 'Da, am nevoie de oameni',
      optionB: 'Nu, mă simt bine singur'
    },
    {
      id: 4,
      question: 'Mă simt cel mai bine:',
      dimension: ['E', 'I'],
      optionA: 'În grupuri mari',
      optionB: 'În grupuri mici sau 1 la 1'
    },
    {
      id: 5,
      question: 'Când merg la un eveniment:',
      dimension: ['E', 'I'],
      optionA: 'Vorbesc cu oameni noi',
      optionB: 'Prefer să stau cu cei pe care îi cunosc'
    },
    {
      id: 6,
      question: 'Îmi exprim gândurile:',
      dimension: ['E', 'I'],
      optionA: 'Vorbind imediat',
      optionB: 'După ce le-am analizat'
    },
    {
      id: 7,
      question: 'Când lucrez la un proiect:',
      dimension: ['E', 'I'],
      optionA: 'Îmi place colaborarea',
      optionB: 'Prefer să mă concentrez singur'
    },
    {
      id: 8,
      question: 'Mă simt obosit:',
      dimension: ['E', 'I'],
      optionA: 'După prea mult timp singur',
      optionB: 'După prea mulți oameni în jur'
    },
    {
      id: 9,
      question: 'Mă simt confortabil în:',
      dimension: ['E', 'I'],
      optionA: 'Medii dinamice și agitate',
      optionB: 'Medii liniștite și previzibile'
    },
    {
      id: 10,
      question: 'Reacționez la situații noi:',
      dimension: ['E', 'I'],
      optionA: 'Spontan și deschis',
      optionB: 'Cu reținere și analiză'
    },

    // === S/N (Senzorial vs Intuitiv) - Întrebările 11-20 ===
    {
      id: 11,
      question: 'Când învăț:',
      dimension: ['S', 'N'],
      optionA: 'Am nevoie de exemple concrete',
      optionB: 'Văd repede ideea generală'
    },
    {
      id: 12,
      question: 'Mă interesează mai mult:',
      dimension: ['S', 'N'],
      optionA: 'Ce este real și practic',
      optionB: 'Ce este posibil și ipotetic'
    },
    {
      id: 13,
      question: 'Rețin mai ușor:',
      dimension: ['S', 'N'],
      optionA: 'Detalii specifice',
      optionB: 'Concepte generale'
    },
    {
      id: 14,
      question: 'Mă concentrez pe:',
      dimension: ['S', 'N'],
      optionA: 'Prezent',
      optionB: 'Viitor'
    },
    {
      id: 15,
      question: 'Gândesc în:',
      dimension: ['S', 'N'],
      optionA: 'Pași concreți',
      optionB: 'Legături și modele'
    },
    {
      id: 16,
      question: 'În discuții, prefer:',
      dimension: ['S', 'N'],
      optionA: 'Informații exacte și fapte',
      optionB: 'Idei și teorii'
    },
    {
      id: 17,
      question: 'Mă atrag proiectele:',
      dimension: ['S', 'N'],
      optionA: 'Simple și clare',
      optionB: 'Creative și abstracte'
    },
    {
      id: 18,
      question: 'Când rezolv probleme:',
      dimension: ['S', 'N'],
      optionA: 'Urmez proceduri dovedite',
      optionB: 'Găsesc soluții atipice'
    },
    {
      id: 19,
      question: 'Sunt mai mult:',
      dimension: ['S', 'N'],
      optionA: 'Realist',
      optionB: 'Visător'
    },
    {
      id: 20,
      question: 'Prefer:',
      dimension: ['S', 'N'],
      optionA: 'Instrucțiuni explicite',
      optionB: 'Libertate și intuiție'
    },

    // === T/F (Thinking vs Feeling) - Întrebările 21-30 ===
    {
      id: 21,
      question: 'Când iau decizii:',
      dimension: ['T', 'F'],
      optionA: 'Mă bazez pe logică',
      optionB: 'Mă gândesc la impact asupra oamenilor'
    },
    {
      id: 22,
      question: 'Conflictele se rezolvă cel mai bine:',
      dimension: ['T', 'F'],
      optionA: 'Rațional și obiectiv',
      optionB: 'Cu empatie și înțelegere'
    },
    {
      id: 23,
      question: 'E mai important:',
      dimension: ['T', 'F'],
      optionA: 'Să ai dreptate',
      optionB: 'Să menții armonia'
    },
    {
      id: 24,
      question: 'La școală/lucru mă concentrez pe:',
      dimension: ['T', 'F'],
      optionA: 'Obiective și rezultate',
      optionB: 'Relații și atmosferă'
    },
    {
      id: 25,
      question: 'Când critic pe cineva:',
      dimension: ['T', 'F'],
      optionA: 'Spun direct ce nu e ok',
      optionB: 'Încerc să nu rănesc'
    },
    {
      id: 26,
      question: 'Mă atrage mai mult:',
      dimension: ['T', 'F'],
      optionA: 'Competiția',
      optionB: 'Cooperarea'
    },
    {
      id: 27,
      question: 'Sunt perceput ca:',
      dimension: ['T', 'F'],
      optionA: 'Pragmatic și direct',
      optionB: 'Cald și înțelegător'
    },
    {
      id: 28,
      question: 'Evaluările mele sunt de obicei:',
      dimension: ['T', 'F'],
      optionA: 'Obiective',
      optionB: 'Subiective'
    },
    {
      id: 29,
      question: 'În situații dificile:',
      dimension: ['T', 'F'],
      optionA: 'Mă detașez emoțional',
      optionB: 'Simt intens emoțiile'
    },
    {
      id: 30,
      question: 'Mă simt confortabil când:',
      dimension: ['T', 'F'],
      optionA: 'Lucrurile sunt justificate logic',
      optionB: 'Oamenii sunt mulțumiți'
    },

    // === J/P (Judging vs Perceiving) - Întrebările 31-40 ===
    {
      id: 31,
      question: 'Ziua mea este de obicei:',
      dimension: ['J', 'P'],
      optionA: 'Planificată din timp',
      optionB: 'Spontană'
    },
    {
      id: 32,
      question: 'Lucrez cel mai bine:',
      dimension: ['J', 'P'],
      optionA: 'Cu deadline-uri clare',
      optionB: 'Când am libertate'
    },
    {
      id: 33,
      question: 'Când primesc o sarcină:',
      dimension: ['J', 'P'],
      optionA: 'Vreau detalii exacte',
      optionB: 'Mă adaptez pe parcurs'
    },
    {
      id: 34,
      question: 'Prefer:',
      dimension: ['J', 'P'],
      optionA: 'Ordine și structură',
      optionB: 'Flexibilitate'
    },
    {
      id: 35,
      question: 'Când încep un proiect:',
      dimension: ['J', 'P'],
      optionA: 'Fac un plan detaliat',
      optionB: 'Încep direct și văd pe parcurs'
    },
    {
      id: 36,
      question: 'Îmi place să:',
      dimension: ['J', 'P'],
      optionA: 'Finalizez lucrurile',
      optionB: 'Explorez mai multe opțiuni'
    },
    {
      id: 37,
      question: 'Când apare ceva nou:',
      dimension: ['J', 'P'],
      optionA: 'Vreau claritate rapid',
      optionB: 'Accept incertitudinea'
    },
    {
      id: 38,
      question: 'Sunt mai mult:',
      dimension: ['J', 'P'],
      optionA: 'Organizat',
      optionB: 'Adaptabil'
    },
    {
      id: 39,
      question: 'În echipă, sunt:',
      dimension: ['J', 'P'],
      optionA: 'Responsabil cu structura',
      optionB: 'Cel creativ și spontan'
    },
    {
      id: 40,
      question: 'Mă deranjează mai mult:',
      dimension: ['J', 'P'],
      optionA: 'Imprevizibilul',
      optionB: 'Rutina'
    },
  ]

  // Descrierile celor 16 tipuri MBTI
  const mbtiTypes: Record<string, MBTIType> = {
    'INTJ': {
      type: 'INTJ',
      name: 'Arhitectul',
      description: 'Gânditori strategici cu un plan pentru orice. Creativi și analiticii, INTJ-urile sunt maeștri ai planificării pe termen lung.',
      strengths: ['Strategic', 'Independent', 'Determinat', 'Creativ', 'Rațional'],
      careers: ['Cercetător', 'Inginer Software', 'Analist Strategic', 'Profesor Universitar', 'Arhitect'],
      color: 'bg-purple-600',
      icon: '🏛️'
    },
    'INTP': {
      type: 'INTP',
      name: 'Logicianul',
      description: 'Inventatori inovatori cu o sete neîncetată de cunoaștere. Mințile lor logice caută să înțeleagă universul.',
      strengths: ['Analitic', 'Obiectiv', 'Rezervat', 'Flexibil', 'Original'],
      careers: ['Programator', 'Matematician', 'Filosof', 'Cercetător Științific', 'Analist de Date'],
      color: 'bg-indigo-600',
      icon: '🔬'
    },
    'ENTJ': {
      type: 'ENTJ',
      name: 'Comandantul',
      description: 'Lideri îndrăzneți, imaginativi și cu voință puternică. Găsesc întotdeauna o cale sau își creează una.',
      strengths: ['Eficient', 'Energic', 'Încrezător', 'Strategic', 'Carismatic'],
      careers: ['CEO', 'Avocat', 'Antreprenor', 'Manager Executiv', 'Consultant'],
      color: 'bg-red-600',
      icon: '👔'
    },
    'ENTP': {
      type: 'ENTP',
      name: 'Dezbătătorul',
      description: 'Gânditori inteligenți și curioși care nu pot rezista unei provocări intelectuale.',
      strengths: ['Ingenios', 'Carismatic', 'Energic', 'Curajos', 'Original'],
      careers: ['Antreprenor', 'Avocat', 'Consultant', 'Inginer', 'Jurnalist'],
      color: 'bg-orange-600',
      icon: '💡'
    },
    'INFJ': {
      type: 'INFJ',
      name: 'Avocatul',
      description: 'Idealiști tăcuți și mistici, dar foarte inspiratori și neobosiți. Cei mai rari dintre tipuri.',
      strengths: ['Creativ', 'Perspicace', 'Principial', 'Pasionat', 'Altruist'],
      careers: ['Psiholog', 'Scriitor', 'Consilier', 'Profesor', 'Medic'],
      color: 'bg-teal-600',
      icon: '🌟'
    },
    'INFP': {
      type: 'INFP',
      name: 'Mediatorul',
      description: 'Oameni poetici, amabili și altruiști, mereu dornici să ajute o cauză bună.',
      strengths: ['Idealist', 'Empatic', 'Creativ', 'Pasionat', 'Dedicat'],
      careers: ['Scriitor', 'Artist', 'Psiholog', 'Designer', 'Terapeut'],
      color: 'bg-pink-600',
      icon: '🦋'
    },
    'ENFJ': {
      type: 'ENFJ',
      name: 'Protagonistul',
      description: 'Lideri carismatici și inspiratori, capabili să-și hipnotizeze audiența.',
      strengths: ['Carismatic', 'Empatic', 'Organizat', 'Inspirator', 'Altruist'],
      careers: ['Profesor', 'Manager HR', 'Coach', 'Politician', 'Consultant'],
      color: 'bg-yellow-600',
      icon: '🌞'
    },
    'ENFP': {
      type: 'ENFP',
      name: 'Campanionul',
      description: 'Spirite libere, entuziaste, creative și sociabile, care găsesc mereu un motiv de bucurie.',
      strengths: ['Entuziast', 'Creativ', 'Sociabil', 'Optimist', 'Energic'],
      careers: ['Jurnalist', 'Actor', 'Consultant', 'Antreprenor', 'Trainer'],
      color: 'bg-amber-500',
      icon: '🎭'
    },
    'ISTJ': {
      type: 'ISTJ',
      name: 'Logisticianul',
      description: 'Indivizi practici și dedicați faptelor, a căror seriozitate nu poate fi pusă la îndoială.',
      strengths: ['Responsabil', 'Sincer', 'Calm', 'Practic', 'Organizat'],
      careers: ['Contabil', 'Administrator', 'Auditor', 'Ofițer de Poliție', 'Manager Operațional'],
      color: 'bg-slate-600',
      icon: '📊'
    },
    'ISFJ': {
      type: 'ISFJ',
      name: 'Apărătorul',
      description: 'Protectori foarte dedicați și calzi, mereu gata să-și apere cei dragi.',
      strengths: ['Suportiv', 'Răbdător', 'Observator', 'Loial', 'Practic'],
      careers: ['Asistent Medical', 'Profesor', 'Administrator', 'Asistent Social', 'Bibliotecar'],
      color: 'bg-cyan-600',
      icon: '🛡️'
    },
    'ESTJ': {
      type: 'ESTJ',
      name: 'Executivul',
      description: 'Administratori excelenți, de neegalat în gestionarea lucrurilor sau a oamenilor.',
      strengths: ['Organizat', 'Loial', 'Metodic', 'Onest', 'Dedicat'],
      careers: ['Manager', 'Avocat', 'Judecător', 'Ofițer Militar', 'Director Financiar'],
      color: 'bg-blue-700',
      icon: '📋'
    },
    'ESFJ': {
      type: 'ESFJ',
      name: 'Consulul',
      description: 'Oameni extraordinar de grijulii, sociabili și populari, mereu dornici să ajute.',
      strengths: ['Loial', 'Cald', 'Sensibil', 'Conectat', 'Practic'],
      careers: ['Asistent Medical', 'Profesor', 'Manager HR', 'Event Planner', 'Asistent Social'],
      color: 'bg-rose-500',
      icon: '🤝'
    },
    'ISTP': {
      type: 'ISTP',
      name: 'Virtuozul',
      description: 'Experimentatori îndrăzneți și practici, maeștri ai tuturor instrumentelor.',
      strengths: ['Optimist', 'Creativ', 'Practic', 'Spontan', 'Rațional'],
      careers: ['Inginer Mecanic', 'Pilot', 'Detectiv', 'Programator', 'Chirurg'],
      color: 'bg-gray-600',
      icon: '🔧'
    },
    'ISFP': {
      type: 'ISFP',
      name: 'Aventurierul',
      description: 'Artiști flexibili și fermecători, mereu gata să exploreze și să experimenteze.',
      strengths: ['Fermecător', 'Sensibil', 'Imaginativ', 'Pasionat', 'Curios'],
      careers: ['Artist', 'Designer', 'Fotograf', 'Veterinar', 'Chef'],
      color: 'bg-emerald-500',
      icon: '🎨'
    },
    'ESTP': {
      type: 'ESTP',
      name: 'Antreprenorul',
      description: 'Oameni inteligenți, energici și foarte perceptivi, care se bucură cu adevărat să trăiască pe muchie de cuțit.',
      strengths: ['Energic', 'Rațional', 'Perceptiv', 'Direct', 'Sociabil'],
      careers: ['Antreprenor', 'Marketing', 'Paramedic', 'Detectiv', 'Agent de Vânzări'],
      color: 'bg-lime-600',
      icon: '🚀'
    },
    'ESFP': {
      type: 'ESFP',
      name: 'Animatorul',
      description: 'Oameni spontani, energici și entuziaști – viața nu este niciodată plictisitoare în preajma lor.',
      strengths: ['Îndrăzneț', 'Original', 'Estetic', 'Practic', 'Observator'],
      careers: ['Actor', 'Event Planner', 'Agent de Vânzări', 'Tour Guide', 'Antrenor Fitness'],
      color: 'bg-fuchsia-500',
      icon: '🎉'
    }
  }

  const handleAnswerSelect = (answer: 'A' | 'B') => {
    const newAnswers = { ...answers, [questions[currentStep].id]: answer }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, 250)
    } else {
      setTimeout(() => {
        calculateResults(newAnswers)
      }, 250)
    }
  }

  const handleKeyDownAnswer = (e: React.KeyboardEvent, answer: 'A' | 'B') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleAnswerSelect(answer)
    }
  }

  const calculateResults = (finalAnswers: Record<number, 'A' | 'B'>) => {
    // Inițializează scorurile
    const scores: Scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    }

    // Calculează scorurile pentru fiecare răspuns
    questions.forEach(question => {
      const answer = finalAnswers[question.id]
      if (answer === 'A') {
        scores[question.dimension[0]] += 1
      } else if (answer === 'B') {
        scores[question.dimension[1]] += 1
      }
    })

    // Determină tipul MBTI
    let type = ''
    type += scores.E > scores.I ? 'E' : 'I'
    type += scores.S > scores.N ? 'S' : 'N'
    type += scores.T > scores.F ? 'T' : 'F'
    type += scores.J > scores.P ? 'J' : 'P'

    setMbtiResult(type)
    setShowResults(true)
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
    setMbtiResult(null)
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Afișare Rezultate
  if (showResults && mbtiResult) {
    const result = mbtiTypes[mbtiResult]
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Rezultatul Testului MBTI 🧠
            </h1>
            <p className="text-xl text-gray-600">
              Am analizat răspunsurile tale și iată tipul tău de personalitate!
            </p>
          </div>

          {/* Card Principal cu Rezultatul */}
          <div className={`${result.color} text-white rounded-2xl shadow-2xl p-8 mb-8 transform hover:scale-[1.02] transition-all`}>
            <div className="text-center mb-6">
              <span className="text-7xl mb-4 block">{result.icon}</span>
              <h2 className="text-5xl font-bold mb-2">{result.type}</h2>
              <p className="text-2xl font-semibold opacity-90">{result.name}</p>
            </div>
            
            <p className="text-lg text-center opacity-95 mb-6 max-w-2xl mx-auto">
              {result.description}
            </p>

            {/* Indicatori Dimensiuni */}
            <div className="grid grid-cols-4 gap-4 bg-white bg-opacity-20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{mbtiResult[0]}</div>
                <div className="text-xs opacity-80">{mbtiResult[0] === 'E' ? 'Extravert' : 'Introvert'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mbtiResult[1]}</div>
                <div className="text-xs opacity-80">{mbtiResult[1] === 'S' ? 'Senzorial' : 'Intuitiv'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mbtiResult[2]}</div>
                <div className="text-xs opacity-80">{mbtiResult[2] === 'T' ? 'Thinking' : 'Feeling'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mbtiResult[3]}</div>
                <div className="text-xs opacity-80">{mbtiResult[3] === 'J' ? 'Judging' : 'Perceiving'}</div>
              </div>
            </div>
          </div>

          {/* Detalii suplimentare */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Puncte Forte */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">💪</span>
                Punctele Tale Forte
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.strengths.map((strength, index) => (
                  <span
                    key={index}
                    className={`${result.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Cariere Recomandate */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">💼</span>
                Cariere Recomandate
              </h3>
              <ul className="space-y-2">
                {result.careers.map((career, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Explicația Dimensiunilor */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">📖</span>
              Ce Înseamnă Tipul Tău
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-bold text-purple-600">{mbtiResult[0] === 'E' ? 'Extravert (E)' : 'Introvert (I)'}</span>
                <p className="text-gray-600 mt-1">
                  {mbtiResult[0] === 'E' 
                    ? 'Îți iei energia din interacțiunile cu alții și preferi mediile sociale active.'
                    : 'Îți reîncarci bateriile în liniște și preferi interacțiunile unu la unu sau grupurile mici.'}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-bold text-blue-600">{mbtiResult[1] === 'S' ? 'Senzorial (S)' : 'Intuitiv (N)'}</span>
                <p className="text-gray-600 mt-1">
                  {mbtiResult[1] === 'S'
                    ? 'Te concentrezi pe fapte concrete și detalii, preferi experiența practică.'
                    : 'Te concentrezi pe posibilități și pattern-uri, preferi ideile abstracte.'}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-bold text-green-600">{mbtiResult[2] === 'T' ? 'Thinking (T)' : 'Feeling (F)'}</span>
                <p className="text-gray-600 mt-1">
                  {mbtiResult[2] === 'T'
                    ? 'Iei decizii bazate pe logică și analiză obiectivă.'
                    : 'Iei decizii bazate pe valori și impactul asupra oamenilor.'}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-bold text-orange-600">{mbtiResult[3] === 'J' ? 'Judging (J)' : 'Perceiving (P)'}</span>
                <p className="text-gray-600 mt-1">
                  {mbtiResult[3] === 'J'
                    ? 'Preferi structura, planificarea și deciziile ferme.'
                    : 'Preferi flexibilitatea, spontaneitatea și opțiunile deschise.'}
                </p>
              </div>
            </div>
          </div>

          {/* Butoane de acțiune */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cariere"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg text-center"
            >
              Explorează Cariere
            </Link>
            <Link
              href="/evaluare"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all shadow-lg text-center"
            >
              Test Aptitudini
            </Link>
            <button
              onClick={handleRestart}
              className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg border border-gray-200"
            >
              Reia Testul
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Afișare Chestionar
  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  // Determină culoarea bazată pe dimensiunea curentă
  const getDimensionColor = () => {
    const dim = currentQuestion.dimension[0]
    switch (dim) {
      case 'E': return 'from-blue-500 to-blue-600'
      case 'S': return 'from-orange-500 to-orange-600'
      case 'T': return 'from-purple-500 to-purple-600'
      case 'J': return 'from-green-500 to-green-600'
      default: return 'from-primary-500 to-primary-600'
    }
  }

  const getDimensionLabel = () => {
    const dim = currentQuestion.dimension
    switch (dim[0]) {
      case 'E': return '🔵 Extravert vs Introvert'
      case 'S': return '🟠 Senzorial vs Intuitiv'
      case 'T': return '🟣 Thinking vs Feeling'
      case 'J': return '🟢 Judging vs Perceiving'
      default: return ''
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Test MBTI 🧠
          </h1>
          <p className="text-xl text-gray-600">
            Descoperă-ți tipul de personalitate răspunzând la 40 de întrebări
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Întrebarea {currentStep + 1} din {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`bg-gradient-to-r ${getDimensionColor()} h-3 rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-sm font-medium text-gray-500">
              {getDimensionLabel()}
            </span>
          </div>
        </div>

        {/* Card cu Întrebarea */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {currentQuestion.question}
          </h2>

          <div className="space-y-4">
            {/* Opțiunea A */}
            <button
              onClick={() => handleAnswerSelect('A')}
              onKeyDown={(e) => handleKeyDownAnswer(e, 'A')}
              className={`w-full bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-500 rounded-xl p-5 text-left transition-all transform hover:scale-[1.02] hover:shadow-lg ${
                answers[currentQuestion.id] === 'A' ? 'bg-blue-50 border-blue-500' : ''
              }`}
              tabIndex={0}
              aria-label={`Opțiunea A: ${currentQuestion.optionA}`}
            >
              <div className="flex items-center">
                <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  A
                </span>
                <span className="text-lg font-medium text-gray-800">{currentQuestion.optionA}</span>
              </div>
            </button>

            {/* Opțiunea B */}
            <button
              onClick={() => handleAnswerSelect('B')}
              onKeyDown={(e) => handleKeyDownAnswer(e, 'B')}
              className={`w-full bg-gray-50 hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-500 rounded-xl p-5 text-left transition-all transform hover:scale-[1.02] hover:shadow-lg ${
                answers[currentQuestion.id] === 'B' ? 'bg-purple-50 border-purple-500' : ''
              }`}
              tabIndex={0}
              aria-label={`Opțiunea B: ${currentQuestion.optionB}`}
            >
              <div className="flex items-center">
                <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  B
                </span>
                <span className="text-lg font-medium text-gray-800">{currentQuestion.optionB}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Buton Înapoi */}
        {currentStep > 0 && (
          <button
            onClick={handlePrevious}
            className="w-full bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-md"
          >
            ← Întrebarea Anterioară
          </button>
        )}

        {/* Info despre MBTI */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Testul MBTI analizează 4 dimensiuni ale personalității pentru a determina unul din cele 16 tipuri posibile.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MBTIPage





