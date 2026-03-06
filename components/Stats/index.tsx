export default function Stats() {
     return (
          <div className="bg-white py-12 shadow-md">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                         <div>
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                   <svg className="w-6 h-6 text-strakon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                   </svg>
                              </div>
                              <div className="text-2xl font-bold text-strakon-blue">17 Mars</div>
                              <div className="text-gray-600 mt-1 text-sm">Date de l&apos;événement</div>
                         </div>
                         <div>
                              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                   <svg className="w-6 h-6 text-strakon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                   </svg>
                              </div>
                              <div className="text-2xl font-bold text-strakon-orange">20h00</div>
                              <div className="text-gray-600 mt-1 text-sm">Heure de début</div>
                         </div>
                         <div>
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                   <svg className="w-6 h-6 text-strakon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                   </svg>
                              </div>
                              <div className="text-2xl font-bold text-strakon-blue">En ligne</div>
                              <div className="text-gray-600 mt-1 text-sm">Format webinaire</div>
                         </div>
                         <div>
                              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                   <svg className="w-6 h-6 text-strakon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                   </svg>
                              </div>
                              <div className="text-2xl font-bold text-strakon-orange">Gratuit</div>
                              <div className="text-gray-600 mt-1 text-sm">Accès libre</div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
