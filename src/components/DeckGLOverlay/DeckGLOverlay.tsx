import { useEffect, useMemo } from 'react';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { useMap } from '@vis.gl/react-google-maps';
import { DeckProps } from 'deck.gl';

export function DeckGLOverlay(props: DeckProps) {
  const map = useMap();
  const overlay = useMemo(() => new GoogleMapsOverlay(props), []);

  useEffect(() => {
    overlay.setMap(map);
    return () => overlay.setMap(null);
  }, [map]);

  overlay.setProps(props);
  return null;
}
