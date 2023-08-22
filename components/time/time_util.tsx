'use client';

export async function currentTime(): Promise<Date> {

    await new Promise((res) => setTimeout(res, 500));

    return new Date();
}