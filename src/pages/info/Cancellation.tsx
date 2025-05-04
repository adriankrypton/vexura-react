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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3>Folgen des Widerrufs</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <h3>Ausnahmen vom Widerrufsrecht</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
            magni dolores eos qui ratione voluptatem sequi nesciunt:
          </p>
          <ul>
            <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</li>
            <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit</li>
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