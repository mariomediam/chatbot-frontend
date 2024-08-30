import { useTupaStore } from "../../store/tupaStore";
import { TupaItem } from "./TupaItem";

export const TupaList = () => {
  const tupa = useTupaStore((state) => state.tupa);
  return (

    <>
    {
        tupa.map((item) => (
            <TupaItem key={item.tupaId} item={item} />
        ))
    }    
    </>
  );
};
