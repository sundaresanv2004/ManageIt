import {NextRequest, NextResponse} from "next/server";
import {taskSchema} from "@/lib/zodSchema";
import prisma from "@/lib/prisma";


export async function GET() {
    try {
        const todos = await prisma.task.findMany();
        return NextResponse.json(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = taskSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ message: 'Invalid input', errors: validation.error.errors }, { status: 400 });
        }

        const newTask = await prisma.task.create({
            data: {
                title: body.title,
                description: body.description,
                status: body.status,
                priority: body.priority,
                dueDate: body.dueDate,
            }
        })

        return NextResponse.json(newTask, {status: 201});

        } catch (error) {
            console.error('Error crating task:', error);
            return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
        }
}
