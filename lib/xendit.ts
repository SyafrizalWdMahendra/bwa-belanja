import { Xendit } from "xendit-node";

const xenditClient = new Xendit({
  secretKey: process.env.NEXT_PRIVATE_XENDIT_KEYS ?? "-",
});

export default xenditClient;
