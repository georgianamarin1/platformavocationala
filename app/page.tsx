import Link from 'next/link'

const HomePage = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Explorează Cariere',
      description: 'Descoperă sute de cariere potrivite pentru tine și află ce presupun',
      link: '/cariere'
    },
    {
      icon: '📝',
      title: 'Teste Vocaționale',
      description: 'Test de aptitudini și test MBTI pentru a-ți descoperi potențialul',
      link: '/teste'
    },
    {
      icon: '💼',
      title: 'Oportunități',
      description: 'Stagii, cursuri și job-uri pentru tineri în diferite domenii',
      link: '/oportunitati'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Descoperă-ți viitorul!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Platforma ta de ghidare vocațională care te ajută să alegi cariera potrivită și să îți construiești viitorul profesional!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cont?redirect=/teste"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Începe un Test 📝
              </Link>
              <Link
                href="/cariere"
                className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explorează Cariere
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Ce Oferim?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Instrumentele de care ai nevoie pentru a-ți planifica și construi o carieră de succes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
                tabIndex={0}
                aria-label={feature.title}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
              De Ce CarieraViitor?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalizat</h3>
                <p className="text-gray-600">
                  Recomandări bazate pe aptitudinile și interesele tale unice
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Gratuit</h3>
                <p className="text-gray-600">
                  Toate resursele noastre sunt complet gratuite pentru tineri
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Actualizat</h3>
                <p className="text-gray-600">
                  Informații despre cele mai noi oportunități și tendințe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Gata să Începi?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Primul pas către cariera ta de vis începe aici
          </p>
          <Link
            href="/cont?redirect=/teste"
            className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Începe un Test →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage



