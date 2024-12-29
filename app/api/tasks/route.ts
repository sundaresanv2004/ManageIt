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


export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, ...rest } = body;
        const validation = taskSchema.safeParse(rest);

        if (!validation.success) {
            return NextResponse.json({ message: 'Invalid input', errors: validation.error.errors }, { status: 400 });
        }

        if (!id) {
            return NextResponse.json({ message: 'Task ID is required' }, { status: 400 });
        }

        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                title: body.title,
                description: body.description,
                status: body.status,
                priority: body.priority,
                dueDate: body.dueDate,
            },
        });

        if (!updatedTask) {
            return NextResponse.json({ message: 'Task not found' }, { status: 404 });
        }

        return NextResponse.json(updatedTask, { status: 200 });
    } catch (error) {
        console.error('Error updating Task:', error);
        return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
    }
}