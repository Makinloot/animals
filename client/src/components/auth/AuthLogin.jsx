import InputField from "../inputField/InputField";
import AuthButtons from "./AuthButtons";

export default function AuthLogin() {
  return (
    <form className="w-[600px] max-w-full">
      <div className="form-wrapper rounded-md bg-neutral p-2">
        <h2 className="font-helveticaCaps text-2xl">გაიარეთ ავტორიზაცია</h2>

        <InputField labelValue="სახელი" />
        <InputField labelValue="პაროლი" type="password" />
        <div className="my-6 flex text-center">
          <p>დაგავიწყდათ პაროლი ?</p>
          <a href="#" className="ml-4 text-info underline">
            პაროლის აღდგენა
          </a>
        </div>

        <AuthButtons
          submit
          value="შესვლა"
          color="bg-neutral-focus hover:bg-base-100 font-helveticaCaps"
        />
        <div className="my-8 flex flex-wrap gap-2">
          <AuthButtons
            value="google"
            icon="google"
            color="bg-red-500 hover:bg-red-600 flex-1"
          />
          <AuthButtons
            value="facebook"
            icon="facebook"
            color="bg-blue-500 hover:bg-blue-600 flex-1"
          />
        </div>
        <div className="my-8 text-center">
          <p>არ ხართ რეგისტრირებული ?</p>
          <a href="/signup" className="text-info underline">
            რეგისტრაცია
          </a>
        </div>
      </div>
    </form>
  );
}
