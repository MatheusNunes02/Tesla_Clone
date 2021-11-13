import { ReactNode } from 'react';

import { Container } from './styles'

interface ModelOverlayProps {
  children: ReactNode;
}

function ModelOverlay({ children }: ModelOverlayProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ModelOverlay;
