'use client';

export async function currentTime(): Promise<Date> {

    await new Promise((res) => setTimeout(res, 2000));

    return new Date();
}