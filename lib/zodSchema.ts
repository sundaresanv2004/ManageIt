import {z} from 'zod'

export const taskSchema = z.object({
    title: z.string().min(1, "Title is required").max(50, "Title must be less than 50 characters"),
    description: z.string().max(500, "Description must be 500 characters or less").optional(),
    dueDate: z
        .union([
            z.date(),
            z.string().refine(val => !isNaN(Date.parse(val)), {
                message: "Invalid date format",
            }).transform(val => new Date(val)),
        ])
        .optional().nullable(),
    status: z.enum(["TODO", "IN_PROGRESS", "DONE", "ARCHIVED"]).default("TODO"),
    priority: z.enum(["LOW", "MEDIUM", "HIGH"]).default("MEDIUM"),
});

export type TaskSchemaType = z.infer<typeof taskSchema>;
