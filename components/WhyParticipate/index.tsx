export default function WhyParticipate() {
     return (
          <div className="bg-white py-16 lg:py-24">
               <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pourquoi participer ?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                              <div className="text-4xl mb-4">✅</div>
                              <h3 className="font-bold text-gray-900 mb-2">Gratuit &amp; sans engagement</h3>
                              <p className="text-gray-600 text-sm">Aucun frais, aucune obligation d&apos;achat</p>
                         </div>
                         <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
                              <div className="text-4xl mb-4">💻</div>
                              <h3 className="font-bold text-gray-900 mb-2">100% en ligne</h3>
                              <p className="text-gray-600 text-sm">Participez depuis votre bureau ou chez vous</p>
                         </div>
                         <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-center">
                              <div className="text-4xl mb-4">💬</div>
                              <h3 className="font-bold text-gray-900 mb-2">Échangez avec des experts</h3>
                              <p className="text-gray-600 text-sm">Questions en direct, réponses en temps réel</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
