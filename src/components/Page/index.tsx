

import DefaultOverlayContent from '../DefaultOverlayContent';
import { Container } from './styles';
import { ModelsWrapper,ModelSection } from '../Model';

function Page() {
  return (
    <Container>
      <ModelsWrapper>
          <div>
            {[
              'Model One',
              'Model Two',
              'Model Three',
              'Model Four',
              'Model Five',
              'Model Six',
              'Model Seven',
            ].map(modelName =>(
                  <ModelSection
                    key={modelName}
                    className="colored"
                    modelName={modelName}
                    overlayNode={
                      <DefaultOverlayContent
                      label={modelName}
                      description="Order Online for Delivery"
                      />
                    }
                />
            ))}
            
          </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
