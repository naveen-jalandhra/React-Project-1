import { useState, useEffect, useRef } from "react";
import React from "react";

export function From({ setToggle, setSubmissions, NumData, setNumData }) {
  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const MessageRef = useRef(null);
  const ImageRef = useRef(null);

  useEffect(() => {
    if (NumData !== null && NumData !== undefined && NumData.card) {
      if (NameRef.current) NameRef.current.value = NumData.card.name || "";
      if (EmailRef.current) EmailRef.current.value = NumData.card.email || "";
      if (MessageRef.current)
        MessageRef.current.value = NumData.card.message || "";
    }
  }, [NumData]);

  function FormFnc(e) {
    e.preventDefault();

    let Data = ImageRef.current?.files?.[0];
    let FileData = Data
      ? URL.createObjectURL(Data)
      : NumData && NumData.card
        ? NumData.card.image
        : "";

    let FormData = {
      name: NameRef.current.value,
      email: EmailRef.current.value,
      message: MessageRef.current.value,
      image: FileData,
    };

    let OldData = JSON.parse(localStorage.getItem("users")) || [];
    let UpdatedData = [...OldData];

    if (
      NumData !== null &&
      NumData !== undefined &&
      NumData.index !== undefined
    ) {
      UpdatedData[NumData.index] = FormData;
    } else {
      UpdatedData.push(FormData);
    }

    localStorage.setItem("users", JSON.stringify(UpdatedData));
    setSubmissions(UpdatedData);
    if (setNumData) setNumData(null);

    NameRef.current.value = "";
    EmailRef.current.value = "";
    MessageRef.current.value = "";
    if (ImageRef.current) ImageRef.current.value = "";
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Blurry Purple Glows */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] -top-32 -left-32 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -bottom-32 -right-32 pointer-events-none"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl shadow-purple-950/50">
        <h2 className="text-3xl font-bold text-white mb-2 text-center tracking-wide">
          Get in Touch
        </h2>
        <p className="text-purple-200/70 text-sm text-center mb-8">
          Drop us a message and upload your image below.
        </p>

        <form
          onSubmit={(e) => {
            FormFnc(e);
            setToggle((condition) => !condition);
          }}
          className="space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              Naam
            </label>
            <input
              type="text"
              ref={NameRef}
              placeholder="Aapka naam"
              className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-2xl text-white placeholder-purple-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/10 transition-all duration-300 shadow-inner"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              Email
            </label>
            <input
              type="email"
              ref={EmailRef}
              placeholder="aapka@email.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-2xl text-white placeholder-purple-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/10 transition-all duration-300 shadow-inner"
            />
          </div>

          {/* Image Upload Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              ref={ImageRef}
              accept="image/*"
              className="w-full text-sm text-purple-200/70 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-500/30 file:text-white hover:file:bg-purple-500/50 file:cursor-pointer cursor-pointer bg-white/5 border border-white/15 rounded-2xl p-2 transition-all duration-300 shadow-inner"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              ref={MessageRef}
              placeholder="Yahan apna message likhein..."
              className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-2xl text-white placeholder-purple-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/10 transition-all duration-300 shadow-inner resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3.5 px-4 rounded-2xl shadow-lg shadow-purple-500/30 transition-all duration-300 transform active:scale-95 cursor-pointer text-sm tracking-wide"
          >
            Send Message
          </button>
          <span
            className="text-white underline"
            onClick={() => {
              setToggle((condition) => !condition);
            }}
          >
            Go to cards
          </span>
        </form>
      </div>
    </div>
  );
}
