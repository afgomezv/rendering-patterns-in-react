import { ComponentType } from "react";

function withLoading<T extends object>(Component: ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <p>Loading...</p> : <Component {...(rest as T)} />;
  };
}

type UserProps = {
  name: string;
};

const UserComponent = ({ name }: UserProps) => {
  return <div>Hello, {name}!</div>;
};

const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name="Andrey" />
      <UserWithLoading isLoading={false} name="Andrey" />
    </div>
  );
};
