"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: string) {
    await db.board.delete({
        where: {
            id
        }
    });
    revalidatePath("/organization/org_2bw8Yb8uzzIE57aI86age8tzcjq");
}