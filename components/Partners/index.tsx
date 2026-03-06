export default function Partners() {
     return (
          <div className="bg-gradient-to-r from-blue-50 to-white py-16">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                         <div className="text-center md:text-left md:flex-1">
                              <p className="text-sm font-semibold text-strakon-blue uppercase tracking-wide mb-2">Événement en ligne</p>
                              <h3 className="text-3xl font-bold text-gray-900 mb-4">Événement organisé par C2IT &amp; STRAKON</h3>
                              <p className="text-lg text-gray-600">
                                   Un événement organisé par C2IT &amp; STRAKON, pour vous faire découvrir en direct les fonctionnalités clés du logiciel STRAKON.
                              </p>
                         </div>
                         <div className="md:flex-1 flex justify-center">
                              <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                                   <img src="/static/logo-c2it.png" alt="C2IT Logo" className="h-24 md:h-32 w-auto" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
