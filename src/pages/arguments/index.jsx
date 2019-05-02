import React from 'react';

import ArgumentListItem from '../../components/argument-list-item';
import style from './style';
import withLayout from '../../components/with-layout';

const DATA = {
  arguments: [
    {
      title: 'Globale Fragen. Lokale Antworten',
      slug: '',
      excerpt:
        '<p>Kohlausstiegspfade und der Weg hin zu Erneuerbaren Energien müssen gemeinsam mit den Betroffenen vor Ort entwickelt werden</p>',
      figureCaption:
        'Teasertext. Part of the project “Coal Transitions: Research and Dialogue on the Future of Coal”'
    },

    {
      title: 'Wir müssen jetzt handeln',
      slug: '',
      excerpt:
        '<p>Auf Grund der Klimakrise brauchen wir einen Kohleausstieg bis 2030 in allen OECD Ländern und bis 2050 weltweit</p>',
      figureCaption:
        'Die Nutzung fossiler Energieträger, wie Braun- und Steinkohle, führte in den letzten Jahrzenten zur Erderwärmung. Dieser Zusammenhang von menschlichem Handeln (Treibhausgas Ausstoß) und dem seit Jahrzehnten spürbaren globalen Temperaturanstieg, ist unter Klimaforscher*innen eindeutig. '
    },

    {
      title: '100% Erneuerbare Energien sind weltweit möglich',
      slug: '',
      excerpt:
        '<p>Der Umstieg auf Erneuerbare ist bereits jetzt technisch möglich und in vielen Fällen auch die kostengünstigste Variante</p>',
      figureCaption:
        'Die Kosten für die Energiewende, ohne eine Annahme von zukünftigen (zu erwartenden) Preissteigerungen für fossile Energieträger, sind nicht höher als die Kosten, die heute für die Versorgung (Bau, Erhalt, Brennstoffkosten und Finanzierung) mit Strom und Wärme verwendet werden.'
    }
  ]
};

const Page = ({ data = DATA }) => (
  <ul>
    <style jsx>{style}</style>

    {data.arguments.map((argument, index) => (
      <li key={argument}>
        <ArgumentListItem
          theme={index % 2 === 0 ? null : 'green'}
          {...argument}
        />
      </li>
    ))}
  </ul>
);

export default withLayout(Page);
