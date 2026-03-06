export default function FAQ() {
     return (
          <div className="bg-gray-100 py-16 lg:py-24">
               <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
                    </div>

                    <div className="space-y-4">
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-bold text-lg text-strakon-blue mb-2">Comment rejoindre la soirée ?</h3>
                              <p className="text-gray-700">
                                   Après inscription, vous recevrez un lien de connexion par email.
                              </p>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-bold text-lg text-strakon-blue mb-2">Faut-il installer STRAKON pour participer ?</h3>
                              <p className="text-gray-700">
                                   Non, aucune installation requise. La démo est faite par nos experts.
                              </p>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-bold text-lg text-strakon-blue mb-2">La soirée sera-t-elle enregistrée ?</h3>
                              <p className="text-gray-700">
                                   Oui, un replay sera disponible pour les inscrits.
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
