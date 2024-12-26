interface Props {
  title: string;
  description: string;
  step?: number;
}

export function SectionDescription({ description, title, step = 1 }: Props) {
  return (
    <header
      data-content={step}
      className={`flex min-w-fit flex-col gap-2 before:flex before:size-8 before:outline-white sm:before:absolute sm:before:-left-4 sm:before:items-center sm:before:justify-center sm:before:rounded-full sm:before:bg-black sm:before:text-white sm:before:outline sm:before:content-[attr(data-content)]`}
    >
      <p className="font-semibold">{title}</p>
      <span className="text-sm">{description}</span>
    </header>
  );
}
