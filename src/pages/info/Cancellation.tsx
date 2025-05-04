import { motion } from 'framer-motion';
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
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. 
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
          </p>
          
          <p>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung 
            (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, 
            diesen Vertrag zu widerrufen, informieren.
          </p>

          <h3>Folgen des Widerrufs</h3>
          <p>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen 
            erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, 
            die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, 
            günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn 
            Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags 
            bei uns eingegangen ist.
          </p>

          <h3>Ausnahmen vom Widerrufsrecht</h3>
          <p>
            Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von digitalen Inhalten, 
            wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem Sie:
          </p>
          <ul>
            <li>ausdrücklich zugestimmt haben, dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und</li>
            <li>Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.</li>
          </ul>

          <h3>Muster-Widerrufsformular</h3>
          <p>
            (Wenn Sie den Vertrag widerrufen wollen, können Sie folgendes Formular ausfüllen und an uns zurücksenden)
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-4">
            <p>An</p>
            <p>Vexura</p>
            <p>[Adresse]</p>
            <p>[E-Mail]</p>
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