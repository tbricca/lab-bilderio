type TextComponentProps = {
  text?: string;
};

const TextComponent = ({ text = '' }: TextComponentProps) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);

export default TextComponent;
