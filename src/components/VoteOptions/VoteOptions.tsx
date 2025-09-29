import { type VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";
 interface VoteOptionsProps {
   onVote: (type: VoteType) => void;
   onReset: () => void;
   canReset: boolean;
 }

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div>
      {" "}
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
