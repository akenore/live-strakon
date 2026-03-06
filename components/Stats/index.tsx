export default function Stats() {
     return (
          <div className="bg-white py-12 shadow-md">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                         <div>
                              <div className="text-3xl mb-2">📅</div>
                              <div className="text-2xl font-bold text-strakon-blue">17 Mars</div>
                              <div className="text-gray-600 mt-1 text-sm">Date de l&apos;événement</div>
                         </div>
                         <div>
                              <div className="text-3xl mb-2">🕗</div>
                              <div className="text-2xl font-bold text-strakon-orange">20h00</div>
                              <div className="text-gray-600 mt-1 text-sm">Heure de début</div>
                         </div>
                         <div>
                              <div className="text-3xl mb-2">💻</div>
                              <div className="text-2xl font-bold text-strakon-blue">En ligne</div>
                              <div className="text-gray-600 mt-1 text-sm">Format webinaire</div>
                         </div>
                         <div>
                              <div className="text-3xl mb-2">🎟️</div>
                              <div className="text-2xl font-bold text-strakon-orange">Gratuit</div>
                              <div className="text-gray-600 mt-1 text-sm">Accès libre</div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
