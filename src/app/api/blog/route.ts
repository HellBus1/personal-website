import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const count = searchParams.get("limit");
    const tag = searchParams.get("tag");
    const createdAt = searchParams.get("createdAt");

    let blogsQuery = prisma.blog.findMany();

    // Filter by tag
    if (tag) {
      blogsQuery = prisma.blog.findMany({
        where: {
          tags: {
            some: {
              name: tag,
            },
          },
        },
      });
    }

    // Limit the result
    if (count) {
      blogsQuery = prisma.blog.findMany({
        take: parseInt(count, 10),
      });
    }

    const blogs = await blogsQuery;

    return NextResponse.json(
      { status: "success", data: blogs },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "An unknown error occurred.",
      },
      { status: 500 }
    );
  }
}
