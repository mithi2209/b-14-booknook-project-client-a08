
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const image = formData.get("image");

        if (!(image instanceof File)) {
            return NextResponse.json(
                { message: "Image is required" },
                { status: 400 }
            );
        }

        const imgbbFormData = new FormData();

        imgbbFormData.append("image", image);

        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
            {
                method: "POST",
                body: imgbbFormData,
            }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
            return NextResponse.json(
                { message: "Image upload failed" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            imageUrl: result.data.url,
        });

    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}