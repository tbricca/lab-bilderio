import { type BuilderContent, Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-react';
import { useEffect, useState } from 'react';
import { customComponents } from './builderio-custom-components';

const builderAPIpublicKey = "695b5927986f48709c8c9f221b055aa4";

type BuilderioPageProps = {
  content?: BuilderContent | null;
  model?: string;
  resolveByPath?: boolean;
  locale?: string;
};

function BuilderioPage({ content: initialContent = null, model = 'page', resolveByPath = false, locale }: BuilderioPageProps) {
  const [content, setContent] = useState<BuilderContent | null>(initialContent);
  const [resolved, setResolved] = useState(!resolveByPath);

  useEffect(() => {
    if (!resolveByPath) return;

    fetchOneEntry({
      model,
      apiKey: builderAPIpublicKey,
      userAttributes: { urlPath: window.location.pathname },
      includeUnpublished: isPreviewing(window.location.search),
    }).then((fetched) => {
      setContent(fetched);
      setResolved(true);
    });
  }, [resolveByPath, model]);

  if (!resolved) return null;

  const shouldRenderBuilderContent = content ?? isPreviewing();

  return shouldRenderBuilderContent ? (
    <Content content={content} model={model} apiKey={builderAPIpublicKey} customComponents={customComponents} locale={locale} />
  ) : (
    <div>Content Not Found</div>
  );
}

export default BuilderioPage;
