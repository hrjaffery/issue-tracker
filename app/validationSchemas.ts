import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1).max(244),
  description: z.string().min(1),
});
