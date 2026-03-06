export default function Objectives() {
     return (
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
               <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Au programme de la soirée</h2>
                    <p className="text-xl text-gray-600">Découvrez tout ce qui vous attend lors de cet événement</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-blue">
                         <div className="text-4xl mb-4">🎯</div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Démonstration live</h3>
                         <p className="text-gray-600">Découvrez STRAKON en action sur des cas concrets</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-orange">
                         <div className="text-4xl mb-4">💬</div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Questions / Réponses</h3>
                         <p className="text-gray-600">Posez vos questions en direct à nos experts</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-blue">
                         <div className="text-4xl mb-4">🚀</div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Nouveautés STRAKON</h3>
                         <p className="text-gray-600">Présentation des dernières fonctionnalités</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-orange">
                         <div className="text-4xl mb-4">📋</div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Cas d&apos;usage BTP</h3>
                         <p className="text-gray-600">Exemples réels de projets coffrage &amp; armatures</p>
                    </div>
               </div>
          </div>
     );
}
