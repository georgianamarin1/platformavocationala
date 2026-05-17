import Link from 'next/link'

const TestePage = () => {
  const tests = [
    {
      id: 'aptitudini',
      title: 'Test de Aptitudini',
      subtitle: '5 întrebări rapide',
      description: 'Descoperă domeniile profesionale care ți se potrivesc cel mai bine bazat pe aptitudinile și interesele tale.',
      duration: '~3 minute',
      questions: 5,
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600',
      link: '/evaluare',
      features: [
        'Identifică punctele tale forte',
        'Recomandări de domenii profesionale',
        'Sugestii de cariere potrivite'
      ]
    },
    {
      id: 'mbti',
      title: 'Test MBTI',
      subtitle: '40 de întrebări detaliate',
      description: 'Descoperă-ți tipul de personalitate din cele 16 tipuri MBTI și înțelege-ți mai bine comportamentul.',
      duration: '~10 minute',
      questions: 40,
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600',
      link: '/mbti',
      features: [
        'Analiză pe 4 dimensiuni de personalitate',
        'Unul din cele 16 tipuri MBTI',
        'Cariere recomandate pentru tipul tău'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Teste Vocaționale 📝
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alege testul potrivit pentru a-ți descoperi aptitudinile și tipul de personalitate
          </p>
        </div>

        {/* Cards pentru teste */}
        <div className="grid md:grid-cols-2 gap-8">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Header colorat */}
              <div className={`bg-gradient-to-r ${test.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-6xl">{test.icon}</span>
                  <div className="text-right">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {test.questions} întrebări
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-1">{test.title}</h2>
                <p className="text-white text-opacity-90">{test.subtitle}</p>
              </div>

              {/* Conținut */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {test.description}
                </p>

                {/* Durată */}
                <div className="flex items-center text-gray-500 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Durată: {test.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {test.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buton */}
                <Link
                  href={test.link}
                  className={`block w-full text-center bg-gradient-to-r ${test.color} ${test.hoverColor} text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl`}
                >
                  Începe Testul →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info suplimentar */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            💡 Care test să aleg?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2">📊 Test de Aptitudini</h4>
              <p className="text-blue-700 text-sm">
                Recomandat dacă vrei să afli rapid ce domenii profesionale ți se potrivesc. 
                Ideal pentru o primă orientare în carieră.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <h4 className="font-semibold text-purple-800 mb-2">🧠 Test MBTI</h4>
              <p className="text-purple-700 text-sm">
                Recomandat pentru o analiză detaliată a personalității tale. 
                Ideal dacă vrei să te înțelegi mai bine pe tine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestePage

