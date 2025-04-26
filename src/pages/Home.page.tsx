import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { ScatterplotLayer } from 'deck.gl';
import { DeckGLOverlay } from '@/components/DeckGLOverlay/DeckGLOverlay';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export function HomePage() {
  const layers = [
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [{ position: [0.45, 51.47] }],
      getPosition: (d) => d.position,
      getFillColor: [255, 0, 0, 100],
      getRadius: 1000,
    }),
  ];

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 51.47, lng: 0.45 }}
        defaultZoom={11}
      >
        <DeckGLOverlay layers={layers} />
      </Map>
    </APIProvider>
  );
}
