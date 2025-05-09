import { PageHeader } from '../../components/ui/PageHeader';

export function Cancellation() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <PageHeader
        title="Widerrufsrecht"
        description="Informationen zu Ihrem Widerrufsrecht bei Online-Bestellungen."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Widerrufsbelehrung</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Widerrufsrecht</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Folgen des Widerrufs</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Ausnahmen vom Widerrufsrecht</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde</li>
                  <li>Zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Muster-Widerrufsformular</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  (Wenn Sie den Vertrag widerrufen wollen, können Sie folgendes Formular ausfüllen und an uns zurücksenden)
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
                  <p className="font-medium text-gray-900 dark:text-white">An</p>
                  <p className="text-gray-700 dark:text-gray-300">Vexura GmbH</p>
                  <p className="text-gray-700 dark:text-gray-300">Musterstraße 123</p>
                  <p className="text-gray-700 dark:text-gray-300">12345 Musterstadt</p>
                  <p className="text-gray-700 dark:text-gray-300">E-Mail: support@vexura.de</p>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf 
                    der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">— Bestellt am (*)/erhalten am (*)</p>
                  <p className="text-gray-700 dark:text-gray-300">— Name des/der Verbraucher(s)</p>
                  <p className="text-gray-700 dark:text-gray-300">— Anschrift des/der Verbraucher(s)</p>
                  <p className="text-gray-700 dark:text-gray-300">— Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
                  <p className="text-gray-700 dark:text-gray-300">— Datum</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">(*) Unzutreffendes streichen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}