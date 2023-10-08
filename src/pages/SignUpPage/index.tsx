import { Button, Input } from "../../components";

function LoginPage() {
  return (
    <div className="debbug-2 flex flex-col w-2/3 h-2/3 justify-center">
      <div className="debbug flex flex-col">
        <Input />
        <Input />
        <Input />
        <Button title="Create account" />
      </div>
    </div>
  );
}

export default LoginPage;
