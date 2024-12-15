interface Props {
  title: string;
  description: string;
}

export function SectionHeader({ description, title }: Props) {
  return (
    <header className="flex flex-col gap-2">
      <p className="font-semibold">{title}</p>
      <span className="text-sm">{description}</span>
    </header>
  );
}
