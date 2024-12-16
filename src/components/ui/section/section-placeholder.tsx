import { Container } from '../../ui/craft';

interface Props {
  icon: JSX.Element;
  text: string;
}

export function SectionPlaceholder({ icon, text }: Props) {
  return (
    <Container className="flex flex-col items-center justify-center gap-2">
      {icon}
      <p className="font-semibold">{text}</p>
    </Container>
  );
}
