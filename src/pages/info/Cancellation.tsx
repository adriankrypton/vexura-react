import { PageHeader } from '../../components/ui/PageHeader';

export function Cancellation() {
  return (
    <div>
      <PageHeader
        title="Widerrufsrecht"
        description="Informationen zu Ihrem Widerrufsrecht bei Online-Bestellungen."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <h2>Widerrufsbelehrung</h2>
          
          <h3>Widerrufsrecht</h3>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
          </p>
          
          <p>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
          </p>

          <h3>Folgen des Widerrufs</h3>
          <p>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
          </p>

          <h3>Ausnahmen vom Widerrufsrecht</h3>
          <p>
            Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind:
          </p>
          <ul>
            <li>Zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde</li>
            <li>Zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde</li>
          </ul>

          <h3>Muster-Widerrufsformular</h3>
          <p>
            (Wenn Sie den Vertrag widerrufen wollen, können Sie folgendes Formular ausfüllen und an uns zurücksenden)
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-4">
            <p>An</p>
            <p>Vexura GmbH</p>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
            <p>E-Mail: support@vexura.de</p>
            <br />
            <p>
              Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf 
              der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
            </p>
            <p>— Bestellt am (*)/erhalten am (*)</p>
            <p>— Name des/der Verbraucher(s)</p>
            <p>— Anschrift des/der Verbraucher(s)</p>
            <p>— Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
            <p>— Datum</p>
            <p className="text-sm text-gray-600 mt-4">(*) Unzutreffendes streichen</p>
          </div>
        </div>
      </div>
    </div>
  );
}