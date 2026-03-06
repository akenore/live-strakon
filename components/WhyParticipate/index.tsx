export default function WhyParticipate() {
     return (
          <div className="bg-white py-16 lg:py-24">
               <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pourquoi participer ?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                   </svg>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-2">Gratuit &amp; sans engagement</h3>
                              <p className="text-gray-600 text-sm">Aucun frais, aucune obligation d&apos;achat</p>
                         </div>
                         <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
                              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   <svg className="w-7 h-7 text-strakon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                   </svg>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-2">100% en ligne</h3>
                              <p className="text-gray-600 text-sm">Participez depuis votre bureau ou chez vous</p>
                         </div>
                         <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-center">
                              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   <svg className="w-7 h-7 text-strakon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                   </svg>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-2">Échangez avec des experts</h3>
                              <p className="text-gray-600 text-sm">Questions en direct, réponses en temps réel</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
