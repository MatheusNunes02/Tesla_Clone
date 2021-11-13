import { Container, Heading, Buttons } from './styles';

interface props {
  label: string;
  description: string;
}

function DefaultOverlayContent({label, description}:props) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      
      <Buttons>
        <button>Custom Order</button>
        <button className='white'>Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
