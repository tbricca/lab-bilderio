import { type BuilderContent, Content, isPreviewing } from '@builder.io/sdk-react';
import { customComponents } from './builderio-custom-components';

const builderAPIpublicKey = "695b5927986f48709c8c9f221b055aa4";

function BuilderioPage({ content, model = 'page' }: { content: BuilderContent | null; model?: string }) {
  const shouldRenderBuilderContent = content ?? isPreviewing();

  return shouldRenderBuilderContent ? (
    <Content content={content} model={model} apiKey={builderAPIpublicKey} customComponents={customComponents} />
  ) : (
    <div>Content Not Found</div>
  );
}

export default BuilderioPage;
