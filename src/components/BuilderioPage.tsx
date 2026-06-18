import { type BuilderContent, Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-react';
import { useEffect, useState } from 'react';
import { customComponents } from './builderio-custom-components';

const builderAPIpublicKey = "695b5927986f48709c8c9f221b055aa4";

function BuilderioPage({ id, builderioLocale }: { id: string; builderioLocale: string }) {
  const [content, setContent] = useState<BuilderContent | null>(null);

  useEffect(() => {
    fetchOneEntry({
      model: 'page',
      apiKey: builderAPIpublicKey,
      query: {
        id,
      },
      locale: builderioLocale,
    }).then((content) => {
      console.log('Fetched content:', content);
      setContent(content);
    });
  }, []);

  const shouldRenderBuilderContent = content ?? isPreviewing();

  return shouldRenderBuilderContent ? (
    <Content content={content} model="page" apiKey={builderAPIpublicKey} customComponents={customComponents} />
  ) : (
    <div>Content Not Found</div>
  );
}

export default BuilderioPage;
