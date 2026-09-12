import { invitation } from "../data/config.js";

export default function Footer() {
  return (
    <footer className="w-full text-ivory/50 py-10 px-6 text-center">
      <p className="deva text-copper/70 text-sm mb-3">गणपती बाप्पा मोरया</p>
      <p className="deva text-xs mb-3">{invitation.familyName}</p>
      <p className="font-sans text-xs mt-2 text-ivory/30">
        {invitation.contactName}
      </p>
    </footer>
  );
}
