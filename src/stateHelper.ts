import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "./mycontext";

let fetching = false;

export const useStateHelper = () => {
  const {state, setState} = useContext(MyContext);

  const changeState = (obj: any) => {
    console.log(obj);

    setState((prevstate: any) => ({ ...prevstate, ...obj }));
  };

  const fetchData = async () => {
    if (Array.isArray(state?.data) && state?.data?.length > 0) {
      return;
    }

    if (fetching) {
      return;
    }

    changeState({ loading: true });
    fetching = true;

    try {
      const response = await axios(
        "https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/"
      );

      console.log("response", response);

      changeState({ data: response.data });
    } catch (error) {
      changeState({ data: [] });
    }

    fetching = false;

    changeState({ loading: false });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state, setState]
}