import PageTransition from '@/components/atom/PageTransition';
import PageHead from '@/components/moleculs/PageHead';

interface Props {
  title?: string;
  description?: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}

export default function Template(props: Props): JSX.Element {
  return (
    <>
      <PageHead title={props.title} description={props.description} meta={props.meta} />
      <PageTransition>{props.children}</PageTransition>
    </>
  );
}
