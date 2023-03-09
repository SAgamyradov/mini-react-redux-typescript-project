import React, { FC } from "react";
import { TypeSetState } from "../../interface/types";

interface IQuantity {
  count: number;
  setCount: TypeSetState<number>;
}

const Quantity: FC<IQuantity> = ({ count, setCount }) => {
  const remPrev = () => {
    count > 0 && setCount(count - 1);
  };

  const addPrev = () => {
    setCount(count + 1);
  };

  return (
    <div className='flex items-center'>
      <button
        onClick={remPrev}
        className='shadow-md border border-slate-900 p-[0.90rem] rounded-xl text-xl pt-0 pb-0 font-montserrat-medium'
      >
        -
      </button>
      <input
        type='number'
        className='mx-2 outline-none rounded-lg p-1 bg-blue-100 text-center font-montserrat-black w-16'
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
      <button
        onClick={addPrev}
        className='shadow-md border border-slate-900 p-3 rounded-xl text-xl pt-0 pb-0 font-montserrat-medium'
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
