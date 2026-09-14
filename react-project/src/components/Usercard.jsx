import React from "react";

export function UserCard({
  setToggle,
  Submissions,
  setSubmissions,
  setNumData,
  setReUpdateData,
}) {
  let DeleteFnc = (DeleteID) => {
    let NewData = Submissions.filter((_, Idx) => Idx !== DeleteID);
    localStorage.setItem("users", JSON.stringify(NewData));
    setSubmissions(NewData);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Blurry Purple Glows */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] -top-32 -left-32 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -bottom-32 -right-32 pointer-events-none"></div>
      {/* Glass User Card */}

      {Submissions.map((CardData, Idx) => (
        <div
          key={Idx}
          className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl shadow-purple-950/50 text-center"
        >
          {/* Image Field */}
          <div className="w-24 h-24 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg shadow-purple-500/30 bg-purple-900/50">
            <img
              src={CardData.image}
              alt="Uploaded Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name Field */}
          <h2 className="text-2xl font-bold text-white tracking-wide mb-1">
            {CardData !== "" ? CardData.name : "please fill the form"}
          </h2>

          {/* Email Field */}
          <p className="text-purple-200/70 text-sm mb-6">naveen@example.com</p>

          {/* Message Field */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-left shadow-inner">
            <span className="block text-xs font-semibold uppercase tracking-wider text-purple-300/60 mb-1">
              Message
            </span>
            <p className="text-white text-sm leading-relaxed">
              {CardData.message}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                DeleteFnc(Idx);
              }}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-2xl shadow-lg shadow-red-500/30 transition-all duration-300 transform active:scale-95 cursor-pointer text-sm tracking-wide"
            >
              Delete Card
            </button>

            {/* Update Button (Logic tera khud ka hoga) */}
            <button
              type="button"
              onClick={() => {
                setNumData({ index: Idx, card: CardData });
                setToggle((condition) => !condition);
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-2xl shadow-lg shadow-purple-500/30 transition-all duration-300 transform active:scale-95 cursor-pointer text-sm tracking-wide"
            >
              Update Card
            </button>
          </div>

          <span
            className="text-white flex underline self-start mt-5 cursor-pointer"
            onClick={() => {
              setToggle((condition) => !condition);
            }}
          >
            Go to Form
          </span>
        </div>
      ))}
    </div>
  );
}
