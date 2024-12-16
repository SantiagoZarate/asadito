interface Props {
  title: string;
  description: string;
  step?: number;
}

export function SectionHeader({ description, title, step = 1 }: Props) {
  return (
    <header
      data-content={step}
      className={`flex flex-col gap-2 before:absolute before:-left-4 before:flex before:size-8 before:items-center before:justify-center before:rounded-full before:bg-black before:text-white before:content-[attr(data-content)]`}
    >
      <p className="font-semibold">{title}</p>
      <span className="text-sm">{description}</span>
    </header>
  );
}
