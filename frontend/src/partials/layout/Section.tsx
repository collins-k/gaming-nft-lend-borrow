import { ReactNode } from 'react';

type SectionProps = {
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: SectionProps) => (
  <section
    className={` mx-auto container px-2 md:px-3 ${
      props.yPadding ? props.yPadding : 'py-3'
    }`}
  >
    {props.children}
  </section>
);

export { Section };
