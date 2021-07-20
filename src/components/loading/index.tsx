import {
  LockBody, Picture, ReleaseBody, Spinner,
} from './styles/loadingStyle';

export const Loading = ({ src, ...restProps }: { src: string | null | undefined }) => (
  <Spinner {...restProps}>
    <LockBody />
    <Picture {...restProps} src={`/images/users/${src}.png`} />
  </Spinner>
);

Loading.ReleaseBody = ({ ...restProps }) => (
  <ReleaseBody {...restProps} />
);
