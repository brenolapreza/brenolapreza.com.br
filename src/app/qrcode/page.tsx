"use client";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
  const [valueState, setValueState] = useState("");
  const handleGenerateQRCode = (e: string) => {
    setValueState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };
  return (
    <>
      <div className="flex gap-3 p-8">
        <input
          className="w-full bg-black"
          type="text"
          value={valueState}
          onChange={(e) => setValueState(e.target.value)}
          placeholder="bota o link do qr code aqui 🤨"
        />
        <button
          className="p-2 bg-black"
          onClick={() => handleGenerateQRCode(valueState)}
        >
          Gerar 💀
        </button>
      </div>
      <div className="flex gap-3 p-8">
        {valueState.length > 0 && (
          <div className="p-4 bg-white w-[390px] h-[390px] flex justify-center items-center">
            <QRCode value={valueState} size={390} level={"H"} />
          </div>
        )}
      </div>
    </>
  );
}
